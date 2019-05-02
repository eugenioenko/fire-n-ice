import { Consts }  from './constants';
import { AnimSprite } from './animsprite';
import { Tile } from './tiles';

export class Metal extends AnimSprite {

    constructor(engine, tx, ty, length) {
        super(Consts.OBJECT_METAL, engine, 'img_metal',
            tx, ty, Consts.TILE_WIDTH, Consts.TILE_WIDTH, 0, 0, 0, 1, true);
        this.xtile = tx;
        this.ytile = ty;
        this.length = length;
        this.animEnd = 1;
        this.animDelay = 9;
        this.animRow = 0;
        this.dirrection = 0;
        this.falling = false;
    }

    canGlide(dir) {
        if (dir === Consts.DIR_LEFT  && Tile.isSolid(this.coorners.l)) {
            return false;
        }
        if (dir === Consts.DIR_RIGHT && Tile.isSolid(this.coorners.r)) {
            return false;
        }
        return true;
    }

    frozenToIce() {
        const rightIce = this.engine.spriteAt(this.xtile + 1, this.ytile);
        const leftIce = this.engine.spriteAt(this.xtile - 1, this.ytile)
        return (rightIce && rightIce.id === Consts.OBJECT_ICE && rightIce.frozen) ||
            (leftIce && leftIce.id === Consts.OBJECT_ICE && leftIce.frozen);
    }

    gravity() {
        if (!Tile.isSolid(this.coorners.d) && !this.frozenToIce()) {
            this.falling = true;
            this.setState(Consts.MOVE_DOWN, true);
            return true;
        }
        if (this.falling) {
            this.falling = false;
            this.engine.sound.play('ice-collision');
        }
        return false;
    }

    collision() {
        if (!this.canGlide(this.dirrection)) {
            this.dirrection = 0;
            this.engine.sound.play('ice-collision');
            this.setState(Consts.MOVE_STAND, false);
            return true;
        }
        if (this.gravity()) {
            return true;
        }
        return false;
    }

    move() {

        /*if (this.coorners.d === Consts.OBJECT_FIRE) {
            this.coorners.d = Consts.OBJECT_BACKGROUND;
        }*/

        if (!this.moving) {
            this.gravity();
        }
        switch (this.state) {
            case Consts.MOVE_ICE_MOVING:
                this.glide();
                break;
            case Consts.MOVE_ICE_CHECK:
                this.push();
                break;
            case Consts.MOVE_DOWN:
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
        this.ctx.drawImage(this.image, 0, Consts.TILE_WIDTH*this.animRow, this.width, this.height,  this.x, this.y, this.width, this.height);

        if (
            this.engine.spriteTypeAt(this.xtile-1, this.ytile) === Consts.OBJECT_ICE &&
            this.engine.spriteAt(this.xtile-1, this.ytile).frozen
        ) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile*this.width)-7,
                this.ytile*this.height
            );
        }
        if (
            this.engine.spriteTypeAt(this.xtile+this.length, this.ytile) === Consts.OBJECT_ICE &&
            this.engine.spriteAt(this.xtile+this.length, this.ytile).frozen
        ) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile+this.length)*this.width-7,
                this.ytile*this.height
            );
        }
        this.ctx.restore();
    }

    glide() {
        this.counter += 4;
        if (this.counter <= Consts.TILE_WIDTH) {
            this.x += 4 * this.dirrection;
        } else {
            this.setState(Consts.MOVE_STAND, false);
        }
    }

    doDown() {
        this.counter += 4;
        if (this.counter <= Consts.TILE_WIDTH) {
            this.y += 4;
        } else {
            this.setState(Consts.MOVE_STAND, false);
        }
    }

    push(dir) {
        this.dirrection = (typeof dir === 'undefined') ? this.dirrection : dir;
        if (!this.collision()) {
            this.moving = true;
            this.setState(Consts.MOVE_ICE_MOVING, true);
        } else {
            this.setState(Consts.MOVE_STAND, false);
        }
    }
}
