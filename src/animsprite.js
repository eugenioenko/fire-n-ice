import { Sprite } from './sprite';
import { Consts } from './constants';

export class AnimSprite extends Sprite {
  /**
   * Animated Sprite, inherits from Sprite.
   * Adds drawing of pictures in the body of sprite
   * @param {object} engine    Engine Engine
   * @param {object} image   Dom image object (img src=)
   * @param {number} tx      Tile X position
   * @param {number} ty      Tile Y position
   * @param {number} width   Width of the sprite
   * @param {number} height  Height of the sprite
   * @param {number} offsetX Offset X of drawing the picture into the canvas
   * @param {number} offsetY Offset Y of drawing the picture into the canvas
   * @param {number} start   Animation frame start
   * @param {number} end     Animation frame end
   * @param {boolean} loop   Repeat animation
   */
  constructor(id, engine, image, tx, ty, width, height, offsetX, offsetY, start, end, loop) {
    super(id, engine, tx, ty, width, height);
    this.image = this.engine.resources.get(image);
    this.animLoop = loop;
    this.animStart = start;
    this.animEnd = end;
    this.animCount = 0;
    this.animDelay = Consts.AnimDefaultDelay;
    this.animDelayCount = 0;
    this.animRow = 0;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }

  /**
   * Sets the sprite animation frames
   * @param {number} start Start frame of the animation
   * @param {number} end   End frame of the animation
   * @param {boolean} loop  If true, animation will loop
   * @param {number} row   Row of the frames in the sprite image
   * @param {number} delay Delay between each frame
   * @param {boolean} once  Sets all the new values only one time.
   */
  setAnim(start, end, loop, row, delay, once) {
    once = typeof once === 'undefined' ? false : once;
    delay = typeof delay === 'undefined' ? Consts.AnimDefaultDelay : delay;
    row = typeof row === 'undefined' ? this.animRow : row;
    if (!once) {
      this.animStart = start;
      this.animEnd = end;
      this.animCount = start;
      this.animLoop = loop;
      this.animDelay = delay;
      this.animRow = row;
    } else {
      if (this.animStart !== start || this.animEnd !== end || this.animLoop !== loop || this.animRow !== row) {
        this.animStart = start;
        this.animEnd = end;
        this.animCount = start;
        this.animLoop = loop;
        this.animDelay = delay;
        this.animRow = row;
      }
    }
  }
  /**
   * Draws the frame of the sprite in the canvas
   */
  draw() {
    this.ctx.drawImage(
      this.image,
      this.animCount * this.width,
      this.animRow * this.height,
      this.width,
      this.height,
      this.x + this.offsetX,
      this.y + this.offsetY,
      this.width,
      this.height,
    );

    if (this.animDelayCount++ > this.animDelay) {
      this.animCount += 1;
      if (this.animCount > this.animEnd) {
        if (this.animLoop) {
          this.animCount = this.animStart;
        } else {
          this.animCount = this.animEnd;
        }
      }
      this.animDelayCount = 0;
    }
  }

  drawFrost() {
    const leftSprite = this.engine.spriteAt(this.xTile - 1, this.yTile);
    if (leftSprite && leftSprite.id === Consts.ObjectIce && leftSprite.frozen.right) {
      this.ctx.drawImage(this.engine.resources.get('frost'), this.xTile * this.width - 7, this.yTile * this.height);
    }
    const rightSprite = this.engine.spriteAt(this.xTile + 1, this.yTile);
    if (rightSprite && rightSprite.id === Consts.ObjectIce && rightSprite.frozen.left) {
      this.ctx.drawImage(
        this.engine.resources.get('frost'),
        (this.xTile + this.length) * this.width - 7,
        this.yTile * this.height,
      );
    }
  }
}
