import { Consts }  from './constants';
import { AnimSprite } from './animsprite';
import { Tile } from './tiles';

export class Metal extends AnimSprite {

    constructor(engine, tx, ty, length) {
        super(Consts.ObjectMetal, engine, 'img_metal',
            tx, ty, Consts.TileWidth, Consts.TileWidth, 0, 0, 0, 1, true);
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
        if (dir === Consts.DirLeft  && Tile.isSolid(this.coorners.l)) {
            return false;
        }
        if (dir === Consts.DirRight && Tile.isSolid(this.coorners.r)) {
            return false;
        }
        return true;
    }

    frozenToIce() {
        const rightSprite = this.engine.spriteAt(this.xtile + 1, this.ytile);
        const leftSprite = this.engine.spriteAt(this.xtile - 1, this.ytile)
        return  !this.falling && ((rightSprite && rightSprite.id === Consts.ObjectIce && rightSprite.frozenLeft) ||
            (leftSprite && leftSprite.id === Consts.ObjectIce && leftSprite.frozenRight));
    }

    gravity() {
        if (!Tile.isSolid(this.coorners.d) && !this.frozenToIce()) {
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
        if (!this.canGlide(this.dirrection)) {
            this.dirrection = 0;
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
        this.ctx.save();
        if (this.animDelayCount++ > this.animDelay) {
            this.animDelayCount = 0;
            this.animRow = this.animRow === 0 ? 1 : 0;
        }
        this.ctx.drawImage(this.image, 0, Consts.TileWidth*this.animRow, this.width, this.height,  this.x, this.y, this.width, this.height);

        if (
            this.engine.spriteTypeAt(this.xtile - 1, this.ytile) === Consts.ObjectIce &&
            this.engine.spriteAt(this.xtile - 1, this.ytile).frozenRight
        ) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile * this.width) - 7,
                this.ytile * this.height
            );
        }
        if (
            this.engine.spriteTypeAt(this.xtile+this.length, this.ytile) === Consts.ObjectIce &&
            this.engine.spriteAt(this.xtile+this.length, this.ytile).frozenLeft
        ) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile + this.length) * this.width - 7,
                this.ytile * this.height
            );
        }
        this.ctx.restore();
    }

    glide() {
        this.counter += 4;
        if (this.counter <= Consts.TileWidth) {
            this.x += 4 * this.dirrection;
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
        this.dirrection = (typeof dir === 'undefined') ? this.dirrection : dir;
        if (!this.collision()) {
            this.moving = true;
            this.setState(Consts.MoveIceMoving, true);
        } else {
            this.setState(Consts.MoveStand, false);
        }
    }
}
