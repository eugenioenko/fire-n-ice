import { AnimSprite } from './animsprite';
import { Consts } from './constants';
import { Tile } from './tiles';

export class Fire extends AnimSprite {
  constructor(engine, tx, ty) {
    super(Consts.ObjectFire, engine, 'img_fire', tx, ty, Consts.TileWidth, Consts.TileWidth, 0, 0, 0, 3, true);
  }

  move() {
    if (!this.moving) {
      this.collisions();
      this.gravity();
    }
    switch (this.state) {
      case Consts.MoveDown:
        this.doDown();
        break;
    }
  }

  collisions() {
    if (this.engine.spriteTypeAt(this.xTile, this.yTile, Consts.ObjectFire) === Consts.ObjectIce) {
      this.engine.sound.play('fire-off');
      this.engine.removeFire(this.xTile, this.yTile);
      this.engine.removeIceBlock(this.xTile, this.yTile);
      this.engine.addSparks(this.xTile, this.yTile, '255, 126, 198', 15, 0.5);
      this.engine.addSparks(this.xTile, this.yTile, '124, 212, 255', 10);
    }
    if (this.engine.spriteTypeAt(this.xTile, this.yTile, Consts.ObjectFire) === Consts.ObjectMetal) {
      this.engine.sound.play('fire-off');
      this.engine.removeFire(this.xTile, this.yTile);
      this.engine.addSparks(this.xTile, this.yTile, '255, 222, 127', 15, 0.5);
      this.engine.addSparks(this.xTile, this.yTile, '41, 42, 90', 10);
    }
  }

  gravity() {
    if (!Tile.isSolid(this.corners.d) && this.corners.d !== Consts.ObjectFire) {
      this.setState(Consts.MoveDown, true);
      return true;
    }
    return false;
  }

  doDown() {
    this.counter += 4;
    if (this.counter <= Consts.TileWidth) {
      this.y += 4;
    } else {
      this.setState(Consts.MoveStand, false);
    }
  }
}
