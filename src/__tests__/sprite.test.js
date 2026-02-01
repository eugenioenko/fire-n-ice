import { Sprite } from '../sprite';
import { Consts } from '../constants';

describe('Sprite', () => {
  let sprite;
  let mockEngine;

  beforeEach(() => {
    mockEngine = {
      ctx: {},
      map: {
        getTile: jest.fn().mockReturnValue(0),
      },
      spriteTypeAt: jest.fn().mockReturnValue(Consts.ObjectBackground),
    };

    sprite = new Sprite(Consts.ObjectFire, mockEngine, 5, 3, 32, 32);
  });

  describe('constructor', () => {
    it('should set id from parameter', () => {
      expect(sprite.id).toBe(Consts.ObjectFire);
    });

    it('should store engine reference', () => {
      expect(sprite.engine).toBe(mockEngine);
    });

    it('should set ctx from engine', () => {
      expect(sprite.ctx).toBe(mockEngine.ctx);
    });

    it('should initialize corners as Position', () => {
      expect(sprite.corners).toBeDefined();
      expect(sprite.corners.u).toBe(0);
    });

    it('should set dimensions from parameters', () => {
      expect(sprite.width).toBe(32);
      expect(sprite.height).toBe(32);
    });

    it('should calculate pixel position from tile position', () => {
      expect(sprite.x).toBe(5 * 32); // 160
      expect(sprite.y).toBe(3 * 32); // 96
    });

    it('should store tile position', () => {
      expect(sprite.xTile).toBe(5);
      expect(sprite.yTile).toBe(3);
    });

    it('should initialize with default values', () => {
      expect(sprite.solid).toBe(true);
      expect(sprite.moving).toBe(false);
      expect(sprite.counter).toBe(false);
      expect(sprite.speed).toBe(4);
      expect(sprite.state).toBe(Consts.MoveStand);
      expect(sprite.direction).toBe(0);
    });
  });

  describe('setState', () => {
    it('should set state and moving flag', () => {
      sprite.setState(Consts.MoveLeft, true);
      expect(sprite.state).toBe(Consts.MoveLeft);
      expect(sprite.moving).toBe(true);
    });

    it('should reset counter to 0', () => {
      sprite.counter = 10;
      sprite.setState(Consts.MoveRight, false);
      expect(sprite.counter).toBe(0);
    });

    it('should default moving to false if not provided', () => {
      sprite.moving = true;
      sprite.setState(Consts.MoveStand);
      expect(sprite.moving).toBe(false);
    });
  });

  describe('getTile', () => {
    it('should delegate to engine.map.getTile', () => {
      mockEngine.map.getTile.mockReturnValue(1);
      const result = sprite.getTile(2, 4);
      expect(mockEngine.map.getTile).toHaveBeenCalledWith(2, 4);
      expect(result).toBe(1);
    });
  });

  describe('isSpriteAt', () => {
    it('should return true when coordinates match sprite position', () => {
      expect(sprite.isSpriteAt(5, 3)).toBe(true);
    });

    it('should return false when x does not match', () => {
      expect(sprite.isSpriteAt(6, 3)).toBe(false);
    });

    it('should return false when y does not match', () => {
      expect(sprite.isSpriteAt(5, 4)).toBe(false);
    });

    it('should return false when neither matches', () => {
      expect(sprite.isSpriteAt(0, 0)).toBe(false);
    });
  });

  describe('spriteTypeAt', () => {
    it('should delegate to engine.spriteTypeAt', () => {
      mockEngine.spriteTypeAt.mockReturnValue(Consts.ObjectWall);
      const result = sprite.spriteTypeAt(1, 2);
      expect(mockEngine.spriteTypeAt).toHaveBeenCalledWith(1, 2);
      expect(result).toBe(Consts.ObjectWall);
    });
  });

  describe('updateCorners', () => {
    it('should query all 8 surrounding positions', () => {
      sprite.updateCorners();

      expect(mockEngine.spriteTypeAt).toHaveBeenCalledWith(5, 2); // up
      expect(mockEngine.spriteTypeAt).toHaveBeenCalledWith(5, 4); // down
      expect(mockEngine.spriteTypeAt).toHaveBeenCalledWith(4, 3); // left
      expect(mockEngine.spriteTypeAt).toHaveBeenCalledWith(6, 3); // right
      expect(mockEngine.spriteTypeAt).toHaveBeenCalledWith(4, 2); // up-left
      expect(mockEngine.spriteTypeAt).toHaveBeenCalledWith(6, 2); // up-right
      expect(mockEngine.spriteTypeAt).toHaveBeenCalledWith(4, 4); // down-left
      expect(mockEngine.spriteTypeAt).toHaveBeenCalledWith(6, 4); // down-right
    });

    it('should store results in corners object', () => {
      mockEngine.spriteTypeAt
        .mockReturnValueOnce(Consts.ObjectWall) // u
        .mockReturnValueOnce(Consts.ObjectBackground) // d
        .mockReturnValueOnce(Consts.ObjectIce) // l
        .mockReturnValueOnce(Consts.ObjectFire) // r
        .mockReturnValueOnce(Consts.ObjectBackground) // ul
        .mockReturnValueOnce(Consts.ObjectBackground) // ur
        .mockReturnValueOnce(Consts.ObjectWall) // dl
        .mockReturnValueOnce(Consts.ObjectWall); // dr

      sprite.updateCorners();

      expect(sprite.corners.u).toBe(Consts.ObjectWall);
      expect(sprite.corners.d).toBe(Consts.ObjectBackground);
      expect(sprite.corners.l).toBe(Consts.ObjectIce);
      expect(sprite.corners.r).toBe(Consts.ObjectFire);
    });
  });

  describe('updatePosition', () => {
    it('should calculate tile position from pixel position', () => {
      sprite.x = 192; // 6 * 32
      sprite.y = 128; // 4 * 32
      sprite.updatePosition();
      expect(sprite.xTile).toBe(6);
      expect(sprite.yTile).toBe(4);
    });

    it('should floor fractional positions', () => {
      sprite.x = 100; // 3.125 tiles
      sprite.y = 150; // 4.6875 tiles
      sprite.updatePosition();
      expect(sprite.xTile).toBe(3);
      expect(sprite.yTile).toBe(4);
    });
  });

  describe('move', () => {
    it('should be an empty function (to be overridden)', () => {
      expect(() => sprite.move()).not.toThrow();
    });
  });

  describe('engineMove', () => {
    it('should call updateCorners, move, and updatePosition in order', () => {
      const updateCornersSpy = jest.spyOn(sprite, 'updateCorners');
      const moveSpy = jest.spyOn(sprite, 'move');
      const updatePositionSpy = jest.spyOn(sprite, 'updatePosition');

      sprite.engineMove();

      expect(updateCornersSpy).toHaveBeenCalled();
      expect(moveSpy).toHaveBeenCalled();
      expect(updatePositionSpy).toHaveBeenCalled();

      // Verify order
      const calls = [updateCornersSpy, moveSpy, updatePositionSpy].map(
        (spy) => spy.mock.invocationCallOrder[0]
      );
      expect(calls[0]).toBeLessThan(calls[1]);
      expect(calls[1]).toBeLessThan(calls[2]);
    });
  });
});
