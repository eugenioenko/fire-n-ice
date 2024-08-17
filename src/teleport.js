import { AnimSprite } from './animsprite';
import { Consts } from './constants';

export class Teleport extends AnimSprite {
  constructor(engine, tx, ty) {
    super(Consts.ObjectTeleport, engine, 'img_teleport', tx, ty, Consts.TileWidth, Consts.TileWidth, 0, 0, 0, 3, true);
    this.isSolid = true;
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

  collisions() {}

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

  draw() {
    super.draw();
    this.drawFrost();
  }
}
