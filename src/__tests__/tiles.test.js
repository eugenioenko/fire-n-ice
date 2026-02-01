import { Tile } from '../tiles';
import { Consts } from '../constants';

describe('Tile', () => {
  describe('isSolid', () => {
    it('should return false for background', () => {
      expect(Tile.isSolid(Consts.ObjectBackground)).toBe(false);
    });

    it('should return true for wall', () => {
      expect(Tile.isSolid(Consts.ObjectWall)).toBe(true);
    });

    it('should return true for ice', () => {
      expect(Tile.isSolid(Consts.ObjectIce)).toBe(true);
    });

    it('should return false for fire', () => {
      expect(Tile.isSolid(Consts.ObjectFire)).toBe(false);
    });

    it('should return true for out of bounds', () => {
      expect(Tile.isSolid(Consts.ObjectOut)).toBe(true);
    });

    it('should throw for undefined tile type', () => {
      expect(() => Tile.isSolid(999)).toThrow('UNDEFINED ON isSolid');
    });
  });

  describe('isFreezable', () => {
    it('should return true for wall', () => {
      expect(Tile.isFreezable(Consts.ObjectWall)).toBe(true);
    });

    it('should return true for metal', () => {
      expect(Tile.isFreezable(Consts.ObjectMetal)).toBe(true);
    });

    it('should return true for jar', () => {
      expect(Tile.isFreezable(Consts.ObjectJar)).toBe(true);
    });

    it('should return false for ice', () => {
      expect(Tile.isFreezable(Consts.ObjectIce)).toBe(false);
    });

    it('should return false for fire', () => {
      expect(Tile.isFreezable(Consts.ObjectFire)).toBe(false);
    });

    it('should return false for background', () => {
      expect(Tile.isFreezable(Consts.ObjectBackground)).toBe(false);
    });

    it('should throw for undefined tile type', () => {
      expect(() => Tile.isFreezable(999)).toThrow('UNDEFINED ON isFreezable');
    });
  });
});
