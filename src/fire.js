import { AnimSprite } from './animsprite';
import { Consts }  from './constants';
import { Tile } from './tiles';

export class Fire extends AnimSprite {

    constructor(engine, tx, ty) {
        super(Consts.ObjectFire, engine, 'img_fire',
            tx, ty, Consts.TileWidth, Consts.TileWidth, 0, 0, 0, 3, true);
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
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, Consts.ObjectFire) === Consts.ObjectIce) {
            this.engine.sound.play('fire-off');
            this.engine.removeFire(this.xtile, this.ytile);
            this.engine.removeIceBlock(this.xtile, this.ytile);
            this.engine.addSparks(this.xtile, this.ytile, '255, 126, 198', 15, 0.5);
            this.engine.addSparks(this.xtile, this.ytile, '124, 212, 255', 10);
        }
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, Consts.ObjectFire) === Consts.ObjectMetal) {
            this.engine.sound.play('fire-off');
            this.engine.removeFire(this.xtile, this.ytile);
            this.engine.addSparks(this.xtile, this.ytile, '255, 222, 127', 15, 0.5);
            this.engine.addSparks(this.xtile, this.ytile, '41, 42, 90', 10);
        }

    }

    gravity() {
        if (!Tile.isSolid(this.coorners.d) && this.coorners.d !== Consts.ObjectFire) {
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
