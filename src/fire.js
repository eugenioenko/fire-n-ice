class Fire extends AnimSprite {

    constructor(engine, tx, ty) {
        super(OBJECT_FIRE, engine, 'img_fire',
            tx, ty, TILE_WIDTH, TILE_WIDTH, 0, 0, 0, 3, true);
    }

    move() {
        if (!this.moving) {
            this.gravity();
        }
        switch (this.state) {
            case MOVE_DOWN:
                this.doDown();
                break;
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

    draw() {
        AnimSprite.prototype.draw.call(this);
        if (this.spriteTypeAt(this.xtile, this.ytile+1) === OBJECT_ICE) {
            this.ctx.strokeStyle = "red";
            this.ctx.strokeRect(this.xtile*32, this.ytile*32,32,32);
        }
    }
}
