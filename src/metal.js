import { Consts } from './constants';
import { AnimSprite } from './animsprite';
import { Tile } from './tiles';

export class Metal extends AnimSprite {
  constructor(engine, tx, ty, length) {
    super(Consts.ObjectMetal, engine, 'img_metal', tx, ty, Consts.TileWidth, Consts.TileWidth, 0, 0, 0, 1, true);
    this.xTile = tx;
    this.yTile = ty;
    this.length = length;
    this.animDelay = 9;
    this.direction = 0;
    this.falling = false;
  }

  canGlide(dir) {
    if (dir === Consts.DirLeft && Tile.isSolid(this.corners.l)) {
      return false;
    }
    if (dir === Consts.DirRight && Tile.isSolid(this.corners.r)) {
      return false;
    }
    return true;
  }

  frozenToIce() {
    const rightSprite = this.engine.spriteAt(this.xTile + 1, this.yTile);
    const leftSprite = this.engine.spriteAt(this.xTile - 1, this.yTile);
    return (
      !this.falling &&
      ((rightSprite && rightSprite.id === Consts.ObjectIce && rightSprite.frozen.left) ||
        (leftSprite && leftSprite.id === Consts.ObjectIce && leftSprite.frozen.right))
    );
  }

  gravity() {
    if (!Tile.isSolid(this.corners.d) && !this.frozenToIce()) {
      this.falling = true;
      this.setState(Consts.MoveDown, true);
      return true;
    }
    if (this.falling) {
      this.falling = false;
      this.engine.sound.play('ice-collision');
    }
    return false;
  }

  collision() {
    if (!this.canGlide(this.direction)) {
      this.direction = 0;
      this.engine.sound.play('ice-collision');
      this.setState(Consts.MoveStand, false);
      return true;
    }
    if (this.gravity()) {
      return true;
    }
    return false;
  }

  move() {
    if (!this.moving) {
      this.gravity();
    }
    switch (this.state) {
      case Consts.MoveIceMoving:
        this.glide();
        break;
      case Consts.MoveIceCheck:
        this.push();
        break;
      case Consts.MoveDown:
        this.doDown();
        break;
    }
  }

  draw() {
    super.draw();
    this.drawFrost();
  }

  glide() {
    this.counter += 4;
    if (this.counter <= Consts.TileWidth) {
      this.x += 4 * this.direction;
    } else {
      this.setState(Consts.MoveStand, false);
    }
  }

  doDown() {
    this.counter += 4;
    if (this.counter <= Consts.TileWidth) {
      this.y += 4;
    } else {
      this.setState(Consts.MoveStand, false);
    }
  }

  push(dir) {
    this.direction = typeof dir === 'undefined' ? this.direction : dir;
    if (!this.collision()) {
      this.moving = true;
      this.setState(Consts.MoveIceMoving, true);
    } else {
      this.setState(Consts.MoveStand, false);
    }
  }
}
