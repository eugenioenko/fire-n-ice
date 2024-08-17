import { AnimSprite } from './animsprite';
import { Consts } from './constants';

export class Jar extends AnimSprite {
  constructor(engine, tx, ty) {
    super(Consts.ObjectJar, engine, 'img_jar', tx, ty, Consts.TileWidth, Consts.TileWidth, 0, 0, 0, 3, true);
    this.animDelay = Consts.AnimDefaultDelay * 2;
    this.onFire = false;
    this.animRow = 0;
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
    if (!this.onFire && this.corners.u === Consts.ObjectFire) {
      this.turnOnFire();
      this.engine.removeFire(this.xTile, this.yTile - 1);
    }
    if (this.onFire && this.corners.u === Consts.ObjectIce) {
      this.meltIce();
    }
  }

  gravity() {
    if (!this.corners.d) {
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

  turnOnFire() {
    this.animRow = 1;
    this.onFire = true;
    this.engine.sound.play('fire-off');
    this.engine.addSparks(this.xTile, this.yTile - 1, Consts.ColorOrange, 30);
  }

  meltIce() {
    this.engine.removeIceBlock(this.xTile, this.yTile - 1);
    this.engine.addSparks(this.xTile, this.yTile - 1, Consts.ColorOrange, 20);
    this.engine.addSparks(this.xTile, this.yTile - 1, Consts.ColorBlue, 10);
    this.engine.sound.play('fire-off');
  }

  draw() {
    super.draw();
    this.drawFrost();
  }
}
