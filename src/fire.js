class Fire extends AnimSprite {

    constructor(engine, tx, ty) {
        super(OBJECT_FIRE, engine, 'img_fire',
            tx, ty, TILE_WIDTH, TILE_WIDTH, 0, 0, 0, 3, true);
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
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, OBJECT_FIRE) === OBJECT_ICE) {
            this.engine.sound.play('fire-off');
            this.engine.removeFire(this.xtile, this.ytile);
            this.engine.removeIceBlock(this.xtile, this.ytile);
            this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '255, 126, 198', 15, 0.5));
            this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '124, 212, 255', 10));
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
}
