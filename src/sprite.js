class Sprite {
    /**
     * Base class of the sprite
     * @param {object} engine   Engine Engine
     * @param {number} tx     Position tile x in the map
     * @param {number} ty     Position tile y in the map
     * @param {number} width  Width of the sprite
     * @param {number} height Height of the sprite
     */
    constructor(id, engine, tx, ty, width, height) {
        this.engine = engine;
        this.id = id;
        this.ctx = engine.ctx;
        this.coorners = new Position();
        this.solid = true;
        this.moving = false;
        this.counter = false;
        this.speed = 4;
        this.state = MOVE_STAND;
        this.height = height;
        this.width = width;
        this.dirrection = 0;
        this.xtile = tx;
        this.ytile = ty;
        this.x = this.xtile * TILE_WIDTH;
        this.y = this.ytile * TILE_WIDTH;
    }
    /**
     * Sets sprite states
     * @param {number} state  Constant of the state
     * @param {boolean} moving True if sprite is moving
     */
    setState(state, moving) {
        this.moving = (typeof moving === 'undefined') ? false : moving;
        this.state = state;
        this.counter = 0;
    }

    getTile(tx, ty) {
        return this.engine.map.getTile(tx, ty);
    }

    isSpriteAt (tx, ty) {
        return this.xtile == tx && this.ytile == ty;
    }

    spriteAt(tx, ty) {
        return this.engine.spriteAt(tx, ty);
    }

    move () {}

    engineMove() {
        this.coorners.u = this.spriteAt(this.xtile, this.ytile-1);
        this.coorners.d = this.spriteAt(this.xtile, this.ytile+1);
        this.coorners.l = this.spriteAt(this.xtile-1, this.ytile);
        this.coorners.r = this.spriteAt(this.xtile+1, this.ytile);
        this.coorners.ul = this.spriteAt(this.xtile-1, this.ytile-1);
        this.coorners.ur = this.spriteAt(this.xtile+1, this.ytile-1);
        this.coorners.dl = this.spriteAt(this.xtile-1, this.ytile+1);
        this.coorners.dr = this.spriteAt(this.xtile+1, this.ytile+1);

        this.move();

        this.xtile = Math.floor(this.x / TILE_WIDTH);
        this.ytile = Math.floor(this.y / TILE_WIDTH);
    }
}
