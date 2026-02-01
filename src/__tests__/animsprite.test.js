import { AnimSprite } from '../animsprite';
import { Consts } from '../constants';

describe('AnimSprite', () => {
  let animSprite;
  let mockEngine;
  let mockImage;

  beforeEach(() => {
    mockImage = { width: 128, height: 64 };

    mockEngine = {
      ctx: {
        drawImage: jest.fn(),
      },
      resources: {
        get: jest.fn().mockReturnValue(mockImage),
      },
      map: {
        getTile: jest.fn(),
      },
      spriteTypeAt: jest.fn().mockReturnValue(Consts.ObjectBackground),
      spriteAt: jest.fn().mockReturnValue(null),
    };

    animSprite = new AnimSprite(
      Consts.ObjectFire,
      mockEngine,
      'img_fire',
      5,
      3,
      32,
      32,
      0,
      0,
      0,
      3,
      true
    );
  });

  describe('constructor', () => {
    it('should get image from resources', () => {
      expect(mockEngine.resources.get).toHaveBeenCalledWith('img_fire');
      expect(animSprite.image).toBe(mockImage);
    });

    it('should set animation loop flag', () => {
      expect(animSprite.animLoop).toBe(true);
    });

    it('should set animation start and end frames', () => {
      expect(animSprite.animStart).toBe(0);
      expect(animSprite.animEnd).toBe(3);
    });

    it('should initialize animation counters', () => {
      expect(animSprite.animCount).toBe(0);
      expect(animSprite.animDelay).toBe(Consts.AnimDefaultDelay);
      expect(animSprite.animDelayCount).toBe(0);
      expect(animSprite.animRow).toBe(0);
    });

    it('should set offsets', () => {
      expect(animSprite.offsetX).toBe(0);
      expect(animSprite.offsetY).toBe(0);
    });
  });

  describe('setAnim', () => {
    it('should set animation properties', () => {
      animSprite.setAnim(2, 5, false, 1, 4);

      expect(animSprite.animStart).toBe(2);
      expect(animSprite.animEnd).toBe(5);
      expect(animSprite.animCount).toBe(2);
      expect(animSprite.animLoop).toBe(false);
      expect(animSprite.animRow).toBe(1);
      expect(animSprite.animDelay).toBe(4);
    });

    it('should use default delay if not provided', () => {
      animSprite.setAnim(0, 2, true, 0);
      expect(animSprite.animDelay).toBe(Consts.AnimDefaultDelay);
    });

    it('should keep current row if not provided', () => {
      animSprite.animRow = 5;
      animSprite.setAnim(0, 2, true);
      expect(animSprite.animRow).toBe(5);
    });

    it('should update when once=true and values differ', () => {
      animSprite.setAnim(0, 3, true, 0, 2, false);
      animSprite.setAnim(1, 4, false, 1, 3, true);

      expect(animSprite.animStart).toBe(1);
      expect(animSprite.animEnd).toBe(4);
    });

    it('should not update when once=true and values match', () => {
      animSprite.setAnim(0, 3, true, 0, 2, false);
      animSprite.animCount = 2; // Simulate animation progress
      animSprite.setAnim(0, 3, true, 0, 2, true);

      expect(animSprite.animCount).toBe(2); // Should not reset
    });
  });

  describe('draw', () => {
    it('should call drawImage with correct parameters', () => {
      animSprite.x = 160;
      animSprite.y = 96;
      animSprite.animCount = 1;
      animSprite.animRow = 0;

      animSprite.draw();

      expect(mockEngine.ctx.drawImage).toHaveBeenCalledWith(
        mockImage,
        32, // animCount * width
        0, // animRow * height
        32, // width
        32, // height
        160, // x + offsetX
        96, // y + offsetY
        32, // width
        32 // height
      );
    });

    it('should increment animCount after delay expires', () => {
      animSprite.animDelay = 0;
      animSprite.animDelayCount = 1; // Will be > 0 after increment
      animSprite.animCount = 0;

      animSprite.draw();

      expect(animSprite.animDelayCount).toBe(0); // Reset after advancing
      expect(animSprite.animCount).toBe(1);
    });

    it('should loop animation when reaching end', () => {
      animSprite.animDelay = 0;
      animSprite.animDelayCount = 1; // Will trigger frame advance
      animSprite.animCount = 3;
      animSprite.animEnd = 3;
      animSprite.animStart = 0;
      animSprite.animLoop = true;

      animSprite.draw();

      expect(animSprite.animCount).toBe(0);
    });

    it('should stop at end frame when not looping', () => {
      animSprite.animDelay = 0;
      animSprite.animDelayCount = 1;
      animSprite.animCount = 3;
      animSprite.animEnd = 3;
      animSprite.animStart = 0;
      animSprite.animLoop = false;

      animSprite.draw();

      expect(animSprite.animCount).toBe(3);
    });

    it('should respect animation delay', () => {
      animSprite.animDelay = 2;
      animSprite.animDelayCount = 0;
      animSprite.animCount = 0;

      // Post-increment: checks value BEFORE incrementing
      // Draw 1: 0 > 2? No. Then count becomes 1
      animSprite.draw();
      expect(animSprite.animCount).toBe(0);
      expect(animSprite.animDelayCount).toBe(1);

      // Draw 2: 1 > 2? No. Then count becomes 2
      animSprite.draw();
      expect(animSprite.animCount).toBe(0);
      expect(animSprite.animDelayCount).toBe(2);

      // Draw 3: 2 > 2? No. Then count becomes 3
      animSprite.draw();
      expect(animSprite.animCount).toBe(0);
      expect(animSprite.animDelayCount).toBe(3);

      // Draw 4: 3 > 2? Yes! Advance frame, reset delayCount
      animSprite.draw();
      expect(animSprite.animCount).toBe(1);
      expect(animSprite.animDelayCount).toBe(0);
    });
  });

  describe('drawFrost', () => {
    it('should draw frost on left when adjacent ice has frozen right', () => {
      const leftIce = { id: Consts.ObjectIce, frozen: { right: true } };
      mockEngine.spriteAt.mockImplementation((x, y) => {
        if (x === 4 && y === 3) return leftIce;
        return null;
      });

      animSprite.drawFrost();

      expect(mockEngine.resources.get).toHaveBeenCalledWith('frost');
      expect(mockEngine.ctx.drawImage).toHaveBeenCalled();
    });

    it('should not draw frost if adjacent sprite is not ice', () => {
      mockEngine.spriteAt.mockReturnValue({ id: Consts.ObjectFire });

      animSprite.drawFrost();

      expect(mockEngine.ctx.drawImage).not.toHaveBeenCalled();
    });

    it('should not draw frost if no adjacent sprite', () => {
      mockEngine.spriteAt.mockReturnValue(null);

      animSprite.drawFrost();

      expect(mockEngine.ctx.drawImage).not.toHaveBeenCalled();
    });
  });
});
