import { Consts }  from './constants';
import { AnimSprite } from './animsprite';
import { Tile } from './tiles';

export class Ice extends AnimSprite {

    constructor(engine, tx, ty, length, frozenLeft, frozenRight) {
        super(Consts.ObjectIce, engine, 'img_ice',
            tx, ty, Consts.TileWidth, Consts.TileWidth, 0, 0, 0, 1, true);
        this.xtile = tx;
        this.ytile = ty;
        this.length = length;
        this.animEnd = 1;
        this.animDelay = 9;
        this.animRow = 0;
        this.dirrection = 0;
        this.falling = false;
        if (typeof frozenLeft !== 'undefined') {
            this.frozenLeft = frozenLeft;
            this.frozenRight = frozenRight;
        } else {
            this.checkFreeze();
        }
    }

    addBlock(tx) {
        const spriteTypeAtLeftCorner = this.engine.spriteTypeAt(tx - 1, this.ytile);
        const spriteTypeAtRightCorner = this.engine.spriteTypeAt(this.xtile + this.length + 1, this.ytile);
        if (tx > this.xtile) {
            if (
                this.getTile(tx + 1, this.ytile) === Consts.ObjectWall ||
                spriteTypeAtRightCorner === Consts.ObjectMetal ||
                spriteTypeAtRightCorner === Consts.ObjectJar
            ) {
                this.frozenRight = true;
            }
        }

        if (tx < this.xtile) {
            this.xtile = tx;
            if (
                this.getTile(tx - 1, this.ytile) === Consts.ObjectWall ||
                spriteTypeAtLeftCorner === Consts.ObjectMetal ||
                spriteTypeAtLeftCorner === Consts.ObjectJar
            ) {
                this.frozenLeft = true;
            }
        }
        this.x = this.xtile * Consts.TileWidth;
        this.length += 1;
    }

    isSpriteAt(tx, ty) {
        if (this.ytile === ty) {
            if (tx >= this.xtile && tx < (this.xtile + this.length)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }

    }

    removeBlock(tx) {
        if (tx === this.xtile) {
            this.xtile += 1;
            this.x += Consts.TileWidth;
            this.length -= 1;
            this.checkUnfreezeLeft();
        } else if (tx === this.xtile + this.length - 1) {
            this.length -= 1;
            this.checkUnfreezeRight();
        } else {
            this.engine.addSprite(new Ice(this.engine, tx + 1, this.ytile, this.xtile + this.length - tx - 1, false, this.frozenRight));
            this.length = tx - this.xtile;
            this.checkUnfreezeRight();
        }
        return this.length;
    }

    canGlide(dir) {
        if (this.length !== 1 || this.frozenLeft || this.frozenRight) {
            return false;
        }
        if (dir === Consts.DirLeft  && Tile.isSolid(this.coorners.l)) {
            return false;
        }
        if (dir === Consts.DirRight && Tile.isSolid(this.coorners.r)) {
            return false;
        }
        return true;
    }

    frozen() {
        return this.frozenLeft || this.frozenRight;
    }
    gravity() {
        if (!Tile.isSolid(this.coorners.d) && !this.frozen()) {
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
            return true;
        }
        return false;
    }

    move() {
        for (let i = 0; i < this.length; i++) {
            let tile_down = this.spriteTypeAt(this.xtile+i, this.ytile+1);
            if (tile_down && tile_down !== Consts.ObjectFire) {
                this.coorners.d = tile_down;
            }

        }
        this.coorners.r = this.spriteTypeAt(this.xtile + this.length, this.ytile);

        if (this.frozen()) {
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
            this.ctx.drawImage(this.image, 0, Consts.TileWidth*this.animRow, this.width, this.height,  this.x, this.y, this.width, this.height);
        } else if (this.length === 2) {
            this.ctx.drawImage(this.image, 1*Consts.TileWidth, Consts.TileWidth*this.animRow,
                this.width, this.height,  this.x, this.y, this.width, this.height);
            this.ctx.drawImage(this.image, 3*Consts.TileWidth, Consts.TileWidth*this.animRow,
                this.width, this.height,  this.x+Consts.TileWidth, this.y, this.width, this.height);
        } else {
            this.ctx.drawImage(this.image, 1*Consts.TileWidth, Consts.TileWidth*this.animRow,
                this.width, this.height,  this.x, this.y, this.width, this.height);
            this.ctx.drawImage(this.image, 3*Consts.TileWidth, Consts.TileWidth*this.animRow,
                this.width, this.height,  this.x+Consts.TileWidth*(this.length-1), this.y, this.width, this.height);
            for (let i = 1;  i < this.length-1; i++) {
                this.ctx.drawImage(this.image, 2*Consts.TileWidth, Consts.TileWidth*this.animRow,
                    this.width, this.height,  this.x+(Consts.TileWidth*i), this.y, this.width, this.height);
            }
        }
        if (this.frozenLeft) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile * this.width) - 7,
                this.ytile * this.height
            );
        }
        if (this.frozenRight) {
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
        this.dirrection = (typeof dir === 'undefined') ? this.dirrection : dir;
        if (!this.collision() && !this.gravity()) {
            this.setState(Consts.MoveIceMoving, true);
        } else {
            this.setState(Consts.MoveStand, false);
        }
    }

    checkFreeze() {
        const leftSprite = this.engine.spriteTypeAt(this.xtile - 1, this.ytile);
        const rightSprite = this.engine.spriteTypeAt(this.xtile + this.length, this.ytile);
        if (
            this.getTile(this.xtile - 1, this.ytile) === Consts.ObjectWall ||
            leftSprite === Consts.ObjectMetal ||
            leftSprite === Consts.ObjectJar
         ) {
            this.frozenLeft = true;
        } else {
            this.frozenLeft = false;
        }
        if (
            this.getTile(this.xtile + this.length, this.ytile) === Consts.ObjectWall ||
            rightSprite === Consts.ObjectMetal ||
            rightSprite === Consts.ObjectJar
        ) {
            this.frozenRight = true;
        } else {
            this.frozenRight = false;
        }
    }

    checkUnfreezeLeft() {
        const leftSprite = this.engine.spriteTypeAt(this.xtile - 1, this.ytile);
        if (
            this.frozenLeft &&
            this.getTile(this.xtile - 1, this.ytile) !== Consts.ObjectWall &&
            leftSprite !== Consts.ObjectMetal &&
            leftSprite !== Consts.ObjectJar
         ) {
            this.frozenLeft = false;
        }
    }

    checkUnfreezeRight() {
        const rightSprite = this.engine.spriteTypeAt(this.xtile + this.length, this.ytile);
        if (
            this.frozenRight &&
            this.getTile(this.xtile + this.length, this.ytile) !== Consts.ObjectWall &&
            rightSprite !== Consts.ObjectMetal &&
            rightSprite !== Consts.ObjectJar
        ) {
            this.frozenRight = false;
        }
    }

}
