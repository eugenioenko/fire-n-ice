import { Consts } from './constants';
import { AnimSprite } from './animsprite';
import { Tile } from './tiles';
import { Frost } from './struct';

export class Ice extends AnimSprite {
  constructor(engine, tx, ty, length, frozen) {
    super(Consts.ObjectIce, engine, 'img_ice', tx, ty, Consts.TileWidth, Consts.TileWidth, 0, 0, 0, 1, true);
    this.xTile = tx;
    this.yTile = ty;
    this.length = length;
    this.animEnd = 1;
    this.animDelay = 9;
    this.animRow = 0;
    this.direction = 0;
    this.falling = false;
    if (typeof frozen !== 'undefined') {
      this.frozen = frozen;
    } else {
      this.frozen = new Frost(false, false);
      this.updateCorners();
      this.checkFreeze();
    }
  }

  addBlock(tx) {
    const spriteTypeAtLeftCorner = this.engine.spriteTypeAt(tx - 1, this.yTile);
    const spriteTypeAtRightCorner = this.engine.spriteTypeAt(this.xTile + this.length + 1, this.yTile);
    if (tx > this.xTile) {
      if (
        this.getTile(tx + 1, this.yTile) === Consts.ObjectWall ||
        spriteTypeAtRightCorner === Consts.ObjectMetal ||
        spriteTypeAtRightCorner === Consts.ObjectJar
      ) {
        this.frozen.right = true;
      }
    }

    if (tx < this.xTile) {
      this.xTile = tx;
      if (
        this.getTile(tx - 1, this.yTile) === Consts.ObjectWall ||
        spriteTypeAtLeftCorner === Consts.ObjectMetal ||
        spriteTypeAtLeftCorner === Consts.ObjectJar
      ) {
        this.frozen.left = true;
      }
    }
    this.x = this.xTile * Consts.TileWidth;
    this.length += 1;
  }

  isSpriteAt(tx, ty) {
    if (this.yTile === ty) {
      if (tx >= this.xTile && tx < this.xTile + this.length) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  removeBlock(tx) {
    if (tx === this.xTile) {
      this.xTile += 1;
      this.x += Consts.TileWidth;
      this.length -= 1;
      this.checkUnfreezeLeft();
    } else if (tx === this.xTile + this.length - 1) {
      this.length -= 1;
      this.checkUnfreezeRight();
    } else {
      this.engine.addSprite(
        new Ice(
          this.engine,
          tx + 1,
          this.yTile,
          this.xTile + this.length - tx - 1,
          new Frost(false, this.frozen.right),
        ),
      );
      this.length = tx - this.xTile;
      this.checkUnfreezeRight();
    }
    return this.length;
  }

  canGlide(dir) {
    if (this.length !== 1 || this.frozen.left || this.frozen.right) {
      return false;
    }
    if (dir === Consts.DirLeft && Tile.isSolid(this.corners.l)) {
      return false;
    }
    if (dir === Consts.DirRight && Tile.isSolid(this.corners.r)) {
      return false;
    }
    return true;
  }

  isFrozen() {
    return this.frozen.left || this.frozen.right;
  }

  gravity() {
    if (!Tile.isSolid(this.corners.d) && !this.isFrozen()) {
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
      return true;
    }
    return false;
  }

  move() {
    for (let i = 0; i < this.length; i++) {
      let tile_down = this.spriteTypeAt(this.xTile + i, this.yTile + 1);
      if (tile_down && tile_down !== Consts.ObjectFire) {
        this.corners.d = tile_down;
      }
    }
    this.corners.r = this.spriteTypeAt(this.xTile + this.length, this.yTile);

    if (this.isFrozen()) {
      this.checkUnfreezeLeft();
      this.checkUnfreezeRight();
    }
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
    this.ctx.save();
    if (this.animDelayCount++ > this.animDelay) {
      this.animDelayCount = 0;
      this.animRow = this.animRow === 0 ? 1 : 0;
    }
    if (this.length === 1) {
      this.ctx.drawImage(
        this.image,
        0,
        Consts.TileWidth * this.animRow,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height,
      );
    } else if (this.length === 2) {
      this.ctx.drawImage(
        this.image,
        Consts.TileWidth,
        Consts.TileWidth * this.animRow,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height,
      );
      this.ctx.drawImage(
        this.image,
        3 * Consts.TileWidth,
        Consts.TileWidth * this.animRow,
        this.width,
        this.height,
        this.x + Consts.TileWidth,
        this.y,
        this.width,
        this.height,
      );
    } else {
      this.ctx.drawImage(
        this.image,
        Consts.TileWidth,
        Consts.TileWidth * this.animRow,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height,
      );
      this.ctx.drawImage(
        this.image,
        3 * Consts.TileWidth,
        Consts.TileWidth * this.animRow,
        this.width,
        this.height,
        this.x + Consts.TileWidth * (this.length - 1),
        this.y,
        this.width,
        this.height,
      );
      for (let i = 1; i < this.length - 1; i++) {
        this.ctx.drawImage(
          this.image,
          2 * Consts.TileWidth,
          Consts.TileWidth * this.animRow,
          this.width,
          this.height,
          this.x + Consts.TileWidth * i,
          this.y,
          this.width,
          this.height,
        );
      }
    }
    if (this.frozen.left) {
      this.ctx.drawImage(this.engine.resources.get('frost'), this.xTile * this.width - 7, this.yTile * this.height);
    }
    if (this.frozen.right) {
      this.ctx.drawImage(
        this.engine.resources.get('frost'),
        (this.xTile + this.length) * this.width - 7,
        this.yTile * this.height,
      );
    }

    this.ctx.restore();
  }

  glide() {
    this.counter += 4;
    if (this.counter <= Consts.TileWidth) {
      this.x += 4 * this.direction;
    } else {
      this.push();
    }
  }

  doDown() {
    this.counter += 4;
    if (this.counter <= Consts.TileWidth) {
      this.y += 4;
    } else {
      if (!this.gravity()) {
        this.setState(Consts.MoveStand, false);
      }
    }
  }

  push(dir) {
    this.direction = typeof dir === 'undefined' ? this.direction : dir;
    if (!this.collision() && !this.gravity()) {
      this.setState(Consts.MoveIceMoving, true);
    } else {
      this.setState(Consts.MoveStand, false);
    }
  }

  checkFreeze() {
    if (Tile.isFreezable(this.corners.l)) {
      this.frozen.left = true;
    } else {
      this.frozen.left = false;
    }
    if (Tile.isFreezable(this.corners.r)) {
      this.frozen.right = true;
    } else {
      this.frozen.right = false;
    }
  }

  checkUnfreezeLeft() {
    if (this.frozen.left && !Tile.isFreezable(this.corners.l)) {
      this.frozen.left = false;
    }
  }

  checkUnfreezeRight() {
    if (this.frozen.right && !Tile.isFreezable(this.corners.r)) {
      this.frozen.right = false;
    }
  }
}
