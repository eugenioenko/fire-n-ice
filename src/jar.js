import { AnimSprite } from './animsprite';
import { Consts }  from './constants';

export class Jar extends AnimSprite {

    constructor(engine, tx, ty) {
        super(Consts.ObjectJar, engine, 'img_jar',
            tx, ty, Consts.TileWidth, Consts.TileWidth, 0, 0, 0, 3, true);
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
        if (!this.onFire && this.coorners.u === Consts.ObjectFire) {
            this.turnOnFire();
            this.engine.removeFire(this.xtile, this.ytile - 1);
        }
        if (this.onFire && this.coorners.u === Consts.ObjectIce) {
            this.meltIce();
        }
    }

    gravity() {
        if (!this.coorners.d) {
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
        this.engine.addSparks(this.xtile, this.ytile - 1, '255, 88, 33', 30);
    }

    meltIce() {
        this.engine.removeIceBlock(this.xtile, this.ytile - 1);
        this.engine.addSparks(this.xtile, this.ytile - 1, '255, 88, 33', 30);
        this.engine.addSparks(this.xtile, this.ytile - 1, '33, 88, 255', 40);
    }

    draw() {
        super.draw();
        const leftSprite = this.engine.spriteAt(this.xtile - 1, this.ytile);
        if (leftSprite && leftSprite.id === Consts.ObjectIce && leftSprite.frozen.right) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile * this.width) - 7,
                this.ytile * this.height
            );
        }
        const rightSprite = this.engine.spriteAt(this.xtile + 1, this.ytile);
        if (rightSprite && rightSprite.id === Consts.ObjectIce && rightSprite.frozen.right) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile + this.length) * this.width - 7,
                this.ytile * this.height
            );
        }
    }
}
