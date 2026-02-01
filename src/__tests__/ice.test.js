import { Ice } from '../ice';
import { Consts } from '../constants';
import { Frost } from '../struct';

describe('Ice', () => {
  let ice;
  let mockEngine;

  beforeEach(() => {
    mockEngine = {
      ctx: {
        drawImage: jest.fn(),
        save: jest.fn(),
        restore: jest.fn(),
      },
      resources: {
        get: jest.fn().mockReturnValue({}),
      },
      map: {
        getTile: jest.fn().mockReturnValue(0),
      },
      spriteTypeAt: jest.fn().mockReturnValue(Consts.ObjectBackground),
      spriteAt: jest.fn().mockReturnValue(null),
      sound: {
        play: jest.fn(),
      },
      addSprite: jest.fn(),
    };

    ice = new Ice(mockEngine, 5, 3, 2);
  });

  describe('constructor', () => {
    it('should set id to ObjectIce', () => {
      expect(ice.id).toBe(Consts.ObjectIce);
    });

    it('should set length', () => {
      expect(ice.length).toBe(2);
    });

    it('should get ice image from resources', () => {
      expect(mockEngine.resources.get).toHaveBeenCalledWith('img_ice');
    });

    it('should initialize frozen state when not provided', () => {
      expect(ice.frozen).toBeInstanceOf(Frost);
      expect(ice.frozen.left).toBe(false);
      expect(ice.frozen.right).toBe(false);
    });

    it('should use provided frozen state', () => {
      const frozen = new Frost(true, false);
      const iceWithFrozen = new Ice(mockEngine, 5, 3, 1, frozen);
      expect(iceWithFrozen.frozen.left).toBe(true);
      expect(iceWithFrozen.frozen.right).toBe(false);
    });

    it('should set animation delay to IceAnimDelay', () => {
      expect(ice.animDelay).toBe(Consts.IceAnimDelay);
    });
  });

  describe('isSpriteAt', () => {
    it('should return true for tiles within ice length', () => {
      expect(ice.isSpriteAt(5, 3)).toBe(true);
      expect(ice.isSpriteAt(6, 3)).toBe(true);
    });

    it('should return false for tiles outside ice length', () => {
      expect(ice.isSpriteAt(4, 3)).toBe(false);
      expect(ice.isSpriteAt(7, 3)).toBe(false);
    });

    it('should return false for different y position', () => {
      expect(ice.isSpriteAt(5, 4)).toBe(false);
    });
  });

  describe('addBlock', () => {
    it('should increase length when adding block', () => {
      ice.addBlock(7);
      expect(ice.length).toBe(3);
    });

    it('should update xTile when adding to the left', () => {
      ice.addBlock(4);
      expect(ice.xTile).toBe(4);
      expect(ice.length).toBe(3);
    });

    it('should freeze right when wall to the right', () => {
      mockEngine.map.getTile.mockReturnValue(Consts.ObjectWall);
      ice.addBlock(7);
      expect(ice.frozen.right).toBe(true);
    });

    it('should freeze left when wall to the left', () => {
      mockEngine.map.getTile.mockReturnValue(Consts.ObjectWall);
      ice.addBlock(4);
      expect(ice.frozen.left).toBe(true);
    });
  });

  describe('removeBlock', () => {
    beforeEach(() => {
      ice = new Ice(mockEngine, 5, 3, 4);
    });

    it('should decrease length when removing from left edge', () => {
      ice.removeBlock(5);
      expect(ice.length).toBe(3);
      expect(ice.xTile).toBe(6);
    });

    it('should decrease length when removing from right edge', () => {
      ice.removeBlock(8);
      expect(ice.length).toBe(3);
      expect(ice.xTile).toBe(5);
    });

    it('should split ice when removing from middle', () => {
      ice.removeBlock(6);
      expect(ice.length).toBe(1);
      expect(mockEngine.addSprite).toHaveBeenCalled();
    });

    it('should return remaining length', () => {
      expect(ice.removeBlock(5)).toBe(3);
    });
  });

  describe('canGlide', () => {
    beforeEach(() => {
      ice = new Ice(mockEngine, 5, 3, 1);
      ice.frozen = new Frost(false, false);
    });

    it('should return false if length > 1', () => {
      ice.length = 2;
      expect(ice.canGlide(Consts.DirLeft)).toBe(false);
    });

    it('should return false if frozen on left', () => {
      ice.frozen.left = true;
      expect(ice.canGlide(Consts.DirLeft)).toBe(false);
    });

    it('should return false if frozen on right', () => {
      ice.frozen.right = true;
      expect(ice.canGlide(Consts.DirRight)).toBe(false);
    });

    it('should return false if solid wall in direction', () => {
      ice.corners.l = Consts.ObjectWall;
      expect(ice.canGlide(Consts.DirLeft)).toBe(false);
    });

    it('should return true if can glide', () => {
      ice.corners.l = Consts.ObjectBackground;
      ice.corners.r = Consts.ObjectBackground;
      expect(ice.canGlide(Consts.DirLeft)).toBe(true);
      expect(ice.canGlide(Consts.DirRight)).toBe(true);
    });
  });

  describe('isFrozen', () => {
    it('should return true if left is frozen', () => {
      ice.frozen = new Frost(true, false);
      expect(ice.isFrozen()).toBe(true);
    });

    it('should return true if right is frozen', () => {
      ice.frozen = new Frost(false, true);
      expect(ice.isFrozen()).toBe(true);
    });

    it('should return false if neither frozen', () => {
      ice.frozen = new Frost(false, false);
      expect(ice.isFrozen()).toBe(false);
    });
  });

  describe('gravity', () => {
    it('should fall when nothing solid below and not frozen', () => {
      ice.corners.d = Consts.ObjectBackground;
      ice.frozen = new Frost(false, false);

      const result = ice.gravity();

      expect(result).toBe(true);
      expect(ice.state).toBe(Consts.MoveDown);
      expect(ice.falling).toBe(true);
    });

    it('should not fall when frozen', () => {
      ice.corners.d = Consts.ObjectBackground;
      ice.frozen = new Frost(true, false);

      const result = ice.gravity();

      expect(result).toBe(false);
    });

    it('should not fall when solid below', () => {
      ice.corners.d = Consts.ObjectWall;
      ice.frozen = new Frost(false, false);

      const result = ice.gravity();

      expect(result).toBe(false);
    });

    it('should play collision sound when landing', () => {
      ice.falling = true;
      ice.corners.d = Consts.ObjectWall;

      ice.gravity();

      expect(mockEngine.sound.play).toHaveBeenCalledWith('ice-collision');
      expect(ice.falling).toBe(false);
    });
  });

  describe('collision', () => {
    beforeEach(() => {
      ice = new Ice(mockEngine, 5, 3, 1);
      ice.frozen = new Frost(false, false);
      ice.corners.l = Consts.ObjectBackground;
      ice.corners.r = Consts.ObjectBackground;
    });

    it('should return false and keep direction if can glide', () => {
      ice.direction = Consts.DirLeft;
      expect(ice.collision()).toBe(false);
      expect(ice.direction).toBe(Consts.DirLeft);
    });

    it('should return true and reset direction if cannot glide', () => {
      ice.direction = Consts.DirLeft;
      ice.corners.l = Consts.ObjectWall;

      expect(ice.collision()).toBe(true);
      expect(ice.direction).toBe(0);
      expect(mockEngine.sound.play).toHaveBeenCalledWith('ice-collision');
    });
  });

  describe('doDown', () => {
    beforeEach(() => {
      ice.setState(Consts.MoveDown, true);
      ice.y = 96;
    });

    it('should move down by PhysicsSpeed', () => {
      ice.counter = 0;

      ice.doDown();

      expect(ice.y).toBe(96 + Consts.PhysicsSpeed);
    });

    it('should continue falling if not solid below', () => {
      ice.corners.d = Consts.ObjectBackground;
      ice.frozen = new Frost(false, false);
      ice.counter = Consts.TileWidth;

      ice.doDown();

      expect(ice.state).toBe(Consts.MoveDown);
    });

    it('should stop when landing on solid', () => {
      ice.corners.d = Consts.ObjectWall;
      ice.counter = Consts.TileWidth;

      ice.doDown();

      expect(ice.state).toBe(Consts.MoveStand);
    });
  });

  describe('push', () => {
    beforeEach(() => {
      ice = new Ice(mockEngine, 5, 3, 1);
      ice.frozen = new Frost(false, false);
      ice.corners.l = Consts.ObjectBackground;
      ice.corners.r = Consts.ObjectBackground;
      ice.corners.d = Consts.ObjectWall;
    });

    it('should set direction and start gliding', () => {
      ice.push(Consts.DirLeft);

      expect(ice.direction).toBe(Consts.DirLeft);
      expect(ice.state).toBe(Consts.MoveIceMoving);
    });

    it('should stop if collision', () => {
      ice.corners.l = Consts.ObjectWall;
      ice.push(Consts.DirLeft);

      expect(ice.state).toBe(Consts.MoveStand);
    });
  });

  describe('glide', () => {
    beforeEach(() => {
      ice = new Ice(mockEngine, 5, 3, 1);
      ice.setState(Consts.MoveIceMoving, true);
      ice.direction = Consts.DirRight;
      ice.x = 160;
    });

    it('should move in direction by PhysicsSpeed', () => {
      ice.counter = 0;

      ice.glide();

      expect(ice.x).toBe(160 + Consts.PhysicsSpeed);
    });

    it('should call push after moving one tile', () => {
      const pushSpy = jest.spyOn(ice, 'push');
      ice.counter = Consts.TileWidth;

      ice.glide();

      expect(pushSpy).toHaveBeenCalled();
    });
  });

  describe('checkFreeze', () => {
    it('should freeze left if wall on left', () => {
      ice.corners.l = Consts.ObjectWall;
      ice.checkFreeze();
      expect(ice.frozen.left).toBe(true);
    });

    it('should freeze right if wall on right', () => {
      ice.corners.r = Consts.ObjectWall;
      ice.checkFreeze();
      expect(ice.frozen.right).toBe(true);
    });

    it('should unfreeze left if no wall', () => {
      ice.frozen.left = true;
      ice.corners.l = Consts.ObjectBackground;
      ice.checkFreeze();
      expect(ice.frozen.left).toBe(false);
    });
  });
});
