import { AnimSprite } from './animsprite';

export class Jar extends AnimSprite {

    constructor(engine, tx, ty) {
        super(OBJECT_JAR, engine, 'img_jar',
            tx, ty, TILE_WIDTH, TILE_WIDTH, 0, 0, 0, 3, true);
        this.animDelay = ANIM_STANDARD_DELAY * 2;
        this.onFire = false;
        this.animRow = 0;
    }

    move() {
        if (!this.moving) {
            this.collisions();
            this.gravity();
        }
        switch (this.state) {
            case MOVE_DOWN:
                this.doDown();
                break;
        }
    }

    collisions() {
        if (!this.onFire && this.coorners.u === OBJECT_FIRE) {
            this.turnOnFire();
        }
        if (this.onFire && this.engine.spriteTypeAt(this.xtile, this.ytile - 1) === OBJECT_ICE) {
            this.meltIce();
        }
    }

    gravity() {
        if (!this.coorners.d) {
            this.setState(MOVE_DOWN, true);
            return true;
        }
        return false;
    }

    doDown() {
        this.counter += 4;
        if (this.counter <= TILE_WIDTH) {
            this.y += 4;
        } else {
            this.setState(MOVE_STAND, false);
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
        this.ctx.save();
        super.draw();
        if (
            this.engine.spriteTypeAt(this.xtile - 1, this.ytile) === OBJECT_ICE &&
            this.engine.spriteAt(this.xtile - 1, this.ytile).frozen
        ) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile * this.width)-7,
                this.ytile * this.height
            );
        }
        if (
            this.engine.spriteTypeAt(this.xtile + 1, this.ytile) === OBJECT_ICE &&
            this.engine.spriteAt(this.xtile + 1, this.ytile).frozen
        ) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile + 1) * this.width-7,
                this.ytile * this.height
            );
        }
        this.ctx.restore();
    }
}
