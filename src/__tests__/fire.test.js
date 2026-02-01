import { Fire } from '../fire';
import { Consts } from '../constants';

describe('Fire', () => {
  let fire;
  let mockEngine;

  beforeEach(() => {
    mockEngine = {
      ctx: {
        drawImage: jest.fn(),
      },
      resources: {
        get: jest.fn().mockReturnValue({}),
      },
      map: {
        getTile: jest.fn(),
      },
      spriteTypeAt: jest.fn().mockReturnValue(Consts.ObjectBackground),
      spriteAt: jest.fn().mockReturnValue(null),
      sound: {
        play: jest.fn(),
      },
      removeFire: jest.fn(),
      removeIceBlock: jest.fn(),
      addSparks: jest.fn(),
    };

    fire = new Fire(mockEngine, 5, 3);
  });

  describe('constructor', () => {
    it('should set id to ObjectFire', () => {
      expect(fire.id).toBe(Consts.ObjectFire);
    });

    it('should set dimensions to TileWidth', () => {
      expect(fire.width).toBe(Consts.TileWidth);
      expect(fire.height).toBe(Consts.TileWidth);
    });

    it('should get fire image from resources', () => {
      expect(mockEngine.resources.get).toHaveBeenCalledWith('img_fire');
    });
  });

  describe('move', () => {
    it('should check collisions and gravity when not moving', () => {
      fire.moving = false;
      const collisionsSpy = jest.spyOn(fire, 'collisions');
      const gravitySpy = jest.spyOn(fire, 'gravity');

      fire.move();

      expect(collisionsSpy).toHaveBeenCalled();
      expect(gravitySpy).toHaveBeenCalled();
    });

    it('should not check collisions when moving', () => {
      fire.moving = true;
      const collisionsSpy = jest.spyOn(fire, 'collisions');

      fire.move();

      expect(collisionsSpy).not.toHaveBeenCalled();
    });

    it('should call doDown when state is MoveDown', () => {
      fire.state = Consts.MoveDown;
      const doDownSpy = jest.spyOn(fire, 'doDown');

      fire.move();

      expect(doDownSpy).toHaveBeenCalled();
    });
  });

  describe('collisions', () => {
    it('should destroy fire and ice when on ice', () => {
      mockEngine.spriteTypeAt.mockReturnValue(Consts.ObjectIce);

      fire.collisions();

      expect(mockEngine.sound.play).toHaveBeenCalledWith('fire-off');
      expect(mockEngine.removeFire).toHaveBeenCalledWith(5, 3);
      expect(mockEngine.removeIceBlock).toHaveBeenCalledWith(5, 3);
      expect(mockEngine.addSparks).toHaveBeenCalledTimes(2);
    });

    it('should destroy fire when on metal', () => {
      mockEngine.spriteTypeAt.mockReturnValue(Consts.ObjectMetal);

      fire.collisions();

      expect(mockEngine.sound.play).toHaveBeenCalledWith('fire-off');
      expect(mockEngine.removeFire).toHaveBeenCalledWith(5, 3);
      expect(mockEngine.removeIceBlock).not.toHaveBeenCalled();
      expect(mockEngine.addSparks).toHaveBeenCalledTimes(2);
    });

    it('should not do anything on background', () => {
      mockEngine.spriteTypeAt.mockReturnValue(Consts.ObjectBackground);

      fire.collisions();

      expect(mockEngine.sound.play).not.toHaveBeenCalled();
      expect(mockEngine.removeFire).not.toHaveBeenCalled();
    });
  });

  describe('gravity', () => {
    it('should set MoveDown state when nothing solid below', () => {
      fire.corners.d = Consts.ObjectBackground;

      const result = fire.gravity();

      expect(fire.state).toBe(Consts.MoveDown);
      expect(fire.moving).toBe(true);
      expect(result).toBe(true);
    });

    it('should not fall when solid below', () => {
      fire.corners.d = Consts.ObjectWall;

      const result = fire.gravity();

      expect(fire.state).not.toBe(Consts.MoveDown);
      expect(result).toBe(false);
    });

    it('should not fall when fire below', () => {
      fire.corners.d = Consts.ObjectFire;

      const result = fire.gravity();

      expect(fire.state).not.toBe(Consts.MoveDown);
      expect(result).toBe(false);
    });

    it('should not fall when ice below', () => {
      fire.corners.d = Consts.ObjectIce;

      const result = fire.gravity();

      expect(result).toBe(false);
    });
  });

  describe('doDown', () => {
    beforeEach(() => {
      fire.setState(Consts.MoveDown, true);
      fire.y = 96;
    });

    it('should move down by PhysicsSpeed', () => {
      fire.counter = 0;

      fire.doDown();

      expect(fire.y).toBe(96 + Consts.PhysicsSpeed);
      expect(fire.counter).toBe(Consts.PhysicsSpeed);
    });

    it('should stop moving after moving TileWidth distance', () => {
      fire.counter = Consts.TileWidth;

      fire.doDown();

      expect(fire.state).toBe(Consts.MoveStand);
      expect(fire.moving).toBe(false);
    });

    it('should continue moving until reaching tile', () => {
      fire.counter = Consts.TileWidth - Consts.PhysicsSpeed;

      fire.doDown();

      expect(fire.y).toBe(96 + Consts.PhysicsSpeed);
      expect(fire.moving).toBe(true);
    });
  });
});
