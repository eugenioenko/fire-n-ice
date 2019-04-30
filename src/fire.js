import { AnimSprite } from './animsprite';
import { Consts }  from './constants';

export class Fire extends AnimSprite {

    constructor(engine, tx, ty) {
        super(Consts.OBJECT_FIRE, engine, 'img_fire',
            tx, ty, Consts.TILE_WIDTH, Consts.TILE_WIDTH, 0, 0, 0, 3, true);
    }

    move() {
        if (!this.moving) {
            this.collisions();
            this.gravity();
        }
        switch (this.state) {
            case Consts.MOVE_DOWN:
                this.doDown();
                break;
        }
    }

    collisions() {
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, Consts.OBJECT_FIRE) === Consts.OBJECT_ICE) {
            this.engine.sound.play('fire-off');
            this.engine.removeFire(this.xtile, this.ytile);
            this.engine.removeIceBlock(this.xtile, this.ytile);
            this.engine.addSparks(this.xtile, this.ytile, '255, 126, 198', 15, 0.5);
            this.engine.addSparks(this.xtile, this.ytile, '124, 212, 255', 10);
        }
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, Consts.OBJECT_FIRE) === Consts.OBJECT_METAL) {
            this.engine.sound.play('fire-off');
            this.engine.removeFire(this.xtile, this.ytile);
            this.engine.addSparks(this.xtile, this.ytile, '255, 126, 198', 15, 0.5);
        }

    }

    gravity() {
        if (!this.coorners.d) {
            this.setState(Consts.MOVE_DOWN, true);
            return true;
        }
        return false;
    }

    doDown() {
        this.counter += 4;
        if (this.counter <= Consts.TILE_WIDTH) {
            this.y += 4;
        } else {
            this.setState(Consts.MOVE_STAND, false);
        }
    }
}
