const TILE_WIDTH = 32;

const MOVE_STAND = 0;
const MOVE_LEFT = 1;
const MOVE_RIGHT = 2;
const MOVE_DOWN = 3;
const MOVE_UP = 4;
const MOVE_TURN = 5;
const MOVE_ICE_MAKE = 6;
const MOVE_ICE_REMOVE = 7;
const MOVE_ICE_MOVING = 8;
const MOVE_ICE_CHECK = 9;
const MOVE_RIP = 10;
const MOVE_PUSH = 8;
const MOVE_ICE_FAIL = 11;
const MOVE_OUTRO = 12;
const MOVE_INTRO = 13;

const DIR_LEFT = -1;
const DIR_RIGHT = 1;

const ANIM_STANDARD_DELAY = 2;
const ANIM_FRAME_COUNT = 16;
const ANIM_LEFT_ROW = 1;
const ANIM_RIGHT_ROW = 0;
const ANIM_RUN_START = 0;
const ANIM_RUN_END = 3;
const ANIM_STAND = 4;
const ANIM_TURN_START = 4;
const ANIM_TURN_END = 7;
const ANIM_FALL_START = 8;
const ANIM_FALL_END = 9;
const ANIM_BIG_FALL_START = 10;
const ANIM_BIG_FALL_END = 11;
const ANIM_PUSH_START = 12;
const ANIM_PUSH_END = 13;
const ANIM_JUMP_START = 14;
const ANIM_JUMP_END = 15;
const ANIM_STAND_START = 16;
const ANIM_STAND_END = 17;
const ANIM_ICE_START = 18;
const ANIM_ICE_END = 19;
const ANIM_CROUCH_START = 20;
const ANIM_CROUCH_END = 22;
const ANIM_RIP_START = 23;
const ANIM_RIP_END = 24;
const ANIM_SLEEP_START = 25;
const ANIM_SLEEP_END = 26;

const TILE_BACKGROUND = 0;
const TILE_BOTH = 32;
const TILE_LEFT = 64;
const TILE_MIDDLE = 96;
const TILE_RIGHT = 128;

const OBJECT_OUT = -1;
const OBJECT_BACKGROUND = 0;
const OBJECT_WALL = 1;
const OBJECT_ICE = 3;
const OBJECT_METAL = 4;
const OBJECT_JAR = 5;
const OBJECT_FIRE = 6;
const OBJECT_PLAYER = 7;

const GAME_STATE_PLAY = 1;
const GAME_STATE_INTRO = 2;

/**
* Stores position of the corners and vertices
*/
class Position {
    constructor() {
        this.u = 0;
        this.d = 0;
        this.l = 0;
        this.r = 0;
        this.ul = 0;
        this.ur = 0;
        this.dl = 0;
        this.dr = 0;
    }
}

class Coor {
    constructor (tx, ty) {
        this.xtile = tx;
        this.ytile = ty;
    }
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Resources {

    constructor() {
        this.resources = {};
    }

    add(name, resource) {
        this.resources[name] = resource;
    }

    get(name) {
        return this.resources[name];
    }

}



/**
 * Keyboard press engine
 */
class Keyboard {
    constructor() {
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        this.action = false;
        this.keydown = this.keydown_.bind(this);
        this.keyup = this.keyup_.bind(this);
        this.intro = true;

        window.addEventListener('keydown', this.keydown, false);
        window.addEventListener('keyup', this.keyup, false);
        document.getElementById('canvas').addEventListener('click', () => {
            if (this.intro) {
                this.enter = true;
            }
            this.intro = false;
        });
        document.getElementById('btn_action').addEventListener('pointerdown', () => this.down = true);
        document.getElementById('btn_action').addEventListener('pointerup', () => this.down = false);
        document.getElementById('btn_left').addEventListener('pointerdown', () => this.left = true);
        document.getElementById('btn_left').addEventListener('pointerup', () => this.left = false);
        document.getElementById('btn_right').addEventListener('pointerdown', () => this.right = true);
        document.getElementById('btn_right').addEventListener('pointerup', () => this.right = false);
        document.getElementById('btn_select').addEventListener('pointerup', () => this.enter = true);
    }


    keydown_(e) {
        switch (e.keyCode) {
            case 37: // Left
                this.left = true;
                break;
            case 38: // Up
                this.up = true;
                break;
            case 39: // Right
                this.right = true;
                break;
            case 40: // Down
            case 32: // Space
                this.action = true;
                this.down = true;
                break;
            case 13: //Enter
                this.enter = false;
                break;
        }
    }

    keyup_(e) {
        switch (e.keyCode) {
            case 37: // Left
                this.left = false;
                break;
            case 38: // Up
                this.up = false;
                break;
            case 39: // Right
                this.right = false;
                break;
            case 40: // Down
            case 32: // Space
                this.action = false;
                this.down = false;
                break;
            case 13: //Enter
                this.enter = true;
                break;
        }
    }
}

class Sound {
	constructor() {
		this.musicOn = true;
		this.soundOn = true;

		this.sfxVolume = 0.3;
		this.sfx = {
			"fire-off" : document.getElementById('sfx-fire-off'),
			"ice-push" : document.getElementById('sfx-ice-push'),
			"fall" : document.getElementById('sfx-fall'),
			"falling" : document.getElementById('sfx-falling'),
			"new-ice" : document.getElementById('sfx-new-ice'),
			"climb" : document.getElementById('sfx-climb'),
			"ice-collision" : document.getElementById('sfx-ice-collision'),
			"stage-enter" : document.getElementById('sfx-stage-enter'),
			"danger" : document.getElementById('sfx-danger'),
			"ice-remove" : document.getElementById('sfx-ice-remove'),
			"state-leave" : document.getElementById('sfx-state-leave'),
			"ice-disabled" : document.getElementById('sfx-disabled')
		};
	}

	play(sfx) {
		if (!this.soundOn) return;
		this.sfx[sfx].volume = this.sfxVolume;
		this.sfx[sfx].currentTime = 0;
		this.sfx[sfx].play().catch(()=>{});
	}

	playOnce(sfx) {
		if (!this.sfx[sfx].paused) return;
		if (!this.soundOn) return;
		this.sfx[sfx].volume = this.sfxVolume;
		this.sfx[sfx].currentTime = 0;
		this.sfx[sfx].play().catch(()=>{});
	}

	stop(sfx) {
		this.sfx[sfx].pause();
		this.sfx[sfx].currentTime = 0;
	}

	soundrack() {
		if (!this.musicOn) return;
		this.music = document.getElementById('sfx-music-sparks');
		this.music.muted = false;
		this.music.volume = 0.2;
		this.music.loop = true;
		this.music.play().catch(()=>{});
	}
}
const Tile = {
   tiles: {
        [OBJECT_BACKGROUND]: {
            solid: false
        },
        [OBJECT_OUT]: {
            solid: true
        },
        [OBJECT_PLAYER]: {
            solid: true
        },
        [OBJECT_ICE]: {
            solid: true
        },
        [OBJECT_METAL]: {
            solid: true
        },
        [OBJECT_WALL]: {
            solid: true
        },
        [OBJECT_FIRE]: {
            solid: false
        },
        [OBJECT_JAR]: {
            solid: true
        }
    },

    isSolid: function(id) {
        if (typeof this.tiles[id] === 'undefined') {
            throw new Error('UNDEFINED ON isSolid');
        } else {
            return this.tiles[id].solid;
        }
    }
};
Object.freeze(Tile);

class TileMap {
    /**
     * Tilemap class
     * @param {object} engine Engine
     * @param {object} map  Matrix of the map
     */

    constructor(engine, map, theme) {
        this.ctx = engine.ctx;
        this.engine = engine;
        this.map = map;
        this.theme = theme;
        this.tileWidth = TILE_WIDTH;
        this.tileHeight = TILE_WIDTH;
        this.height = this.map.length - 1;
        this.width = this.map[0].length - 1;
        this.tilesImage = this.engine.resources.get('tilemap');
    }
    /**
     * Returns the content of the tile inside the matrix
     * if position out of bounds returns OBJECT_OUT
     * @param  {number} y position
     * @param  {number} x position
     * @return {number}   Content of the tile
     */
    getTile(x, y) {
        if (x < 0 || y < 0 || x > this.width || y > this.height) {
            return OBJECT_OUT;
        }
        return this.map[y][x];

    }
    /**
     * Draws the map
     * @return {none}
     */
    draw() {

        this.ctx.save();
        for (let i = 0; i <= this.width; ++i) {
            for (let j = 0; j <= this.height; ++j) {
                let tileType = TILE_BACKGROUND;
                if (this.map[j][i] === 1) {
                    if (!this.getTile(i-1, j) && !this.getTile(i+1, j)) {
                        tileType = TILE_BOTH;
                    } else if (!this.getTile(i-1, j)) {
                        tileType = TILE_LEFT;
                    } else if (!this.getTile(i+1, j)) {
                        tileType = TILE_RIGHT;
                    } else {
                        tileType = TILE_MIDDLE;
                    }
                }
                this.ctx.drawImage(
                    this.tilesImage,
                    tileType,
                    this.theme * this.tileHeight,
                    this.tileWidth,
                    this.tileHeight,
                    i * this.tileWidth,
                    j * this.tileHeight,
                    this.tileWidth,
                    this.tileHeight
                );
            }
        }
        this.ctx.restore();
    }

    move() {}

    engineMove() {}
}

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
        return this.xtile === tx && this.ytile === ty;
    }

    spriteTypeAt(tx, ty) {
        return this.engine.spriteTypeAt(tx, ty);
    }

    move () {}

    engineMove() {
        this.coorners.u = this.spriteTypeAt(this.xtile, this.ytile-1);
        this.coorners.d = this.spriteTypeAt(this.xtile, this.ytile+1);
        this.coorners.l = this.spriteTypeAt(this.xtile-1, this.ytile);
        this.coorners.r = this.spriteTypeAt(this.xtile+1, this.ytile);
        this.coorners.ul = this.spriteTypeAt(this.xtile-1, this.ytile-1);
        this.coorners.ur = this.spriteTypeAt(this.xtile+1, this.ytile-1);
        this.coorners.dl = this.spriteTypeAt(this.xtile-1, this.ytile+1);
        this.coorners.dr = this.spriteTypeAt(this.xtile+1, this.ytile+1);

        this.move();

        this.xtile = Math.floor(this.x / TILE_WIDTH);
        this.ytile = Math.floor(this.y / TILE_WIDTH);
    }
}

class AnimSprite extends Sprite {
    /**
     * Animated Sprite, inherts from Sprite.
     * Adds drawing of pictures in the body of sprite
     * @param {object} engine    Engine Engine
     * @param {object} image   Dom image object (img src=)
     * @param {number} tx      Tile X position
     * @param {number} ty      Tile Y position
     * @param {number} width   Width of the sprite
     * @param {number} height  Height of the sprite
     * @param {number} offsetX Offset X of drawing the picture into the canvas
     * @param {number} offsetY Offset Y of drawing the picture into the canvas
     * @param {number} start   Animation frame start
     * @param {number} end     Animation frame end
     * @param {boolean} loop   Repeat animation
     */
    constructor (id, engine, image, tx, ty, width, height, offsetX, offsetY, start, end, loop) {
        super(id, engine, tx, ty, width, height);
        this.image = this.engine.resources.get(image);
        this.animLoop = loop;
        this.animStart = start;
        this.animEnd = end;
        this.animCount = 0;
        this.animDelay = ANIM_STANDARD_DELAY;
        this.animDelayCount = 0;
        this.animRow = 0;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }

    /**
     * Sets the sprite animation frames
     * @param {number} start Start frame of the animation
     * @param {number} end   End frame of the animation
     * @param {boolean} loop  If true, animation will loop
     * @param {number} row   Row of the frames in the sprite image
     * @param {number} delay Delay between each frame
     * @param {boolean} once  Sets all the new values only one time.
     */
    setAnim(start, end, loop, row, delay, once) {
        let _once = (typeof once === 'undefined') ? false : once;
        let _delay = (typeof delay === 'undefined') ? ANIM_STANDARD_DELAY : delay;
        let _row = (typeof row === 'undefined') ? this.animRow : row;
        if (!_once) {
            this.animStart = start;
            this.animEnd = end;
            this.animCount = start;
            this.animLoop = loop;
            this.animDelay = _delay;
            this.animRow = _row;
        } else {
            if (this.animStart !== start || this.animEnd !== end ||
                this.animLoop !== loop || this.animRow !== _row)
            {
                this.animStart = start;
                this.animEnd = end;
                this.animCount = start;
                this.animLoop = loop;
                this.animDelay = _delay;
                this.animRow = _row;
            }
        }
    }
    /**
     * Draws the frame of the sprite in the canvas
     */
    draw() {
        this.ctx.save();
        this.ctx.drawImage(this.image, this.animCount*this.width,
            this.animRow * this.height, this.width, this.height,
            this.x+this.offsetX, this.y+this.offsetY,
            this.width, this.height);
        if (this.animDelayCount++ > this.animDelay) {
            if (++this.animCount > this.animEnd) {
                if (this.animLoop) {
                    this.animCount = this.animStart;
                } else {
                    this.animCount = this.animEnd;
                }
            }
            this.animDelayCount = 0;
        }
        this.ctx.restore();
    }
}

class Player extends AnimSprite {

    constructor(engine, tx, ty) {
        super(OBJECT_PLAYER, engine, 'img_dona', tx, ty, 48, 64, -10, -32, 2, 2, false);
        this.speed = 2;
        this.dirrection = 1;
        this.state = 0; //standing top right down left
        this.moving = false;
        this.tileWidth = TILE_WIDTH;
        this.tileHeight = TILE_WIDTH;
        this.animDelay = 3;
        this.counter = 0;
        this.fallCounter = 0;
        this.innerCounter = 0;
        this.standCounter = 0;
        this.intro();
    }

    left() {
        if (!this.moving) {
            //if standing then turn
            if (this.dirrection !== DIR_LEFT) {
                //is not under a brick
                if (!Tile.isSolid(this.coorners.u)) {
                    this.setAnim(ANIM_TURN_START, ANIM_TURN_END, false, ANIM_RIGHT_ROW, 4);
                } else {
                    this.setAnim(ANIM_CROUCH_START,ANIM_CROUCH_START, false, ANIM_LEFT_ROW, 4);
                }
                this.setState(MOVE_TURN, true);
                this.dirrection = DIR_LEFT;
            } else{
                //running
                if (!Tile.isSolid(this.coorners.l) && Tile.isSolid(this.coorners.d)) {
                    //not under a brick
                    if (!Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ul)) {
                        this.setAnim(ANIM_RUN_START, ANIM_RUN_END, false, ANIM_LEFT_ROW);
                    } else {
                        this.setAnim(ANIM_CROUCH_START, ANIM_CROUCH_END, false, ANIM_LEFT_ROW);
                    }
                    this.setState(MOVE_LEFT, true);
                }
                //hit an ice
                if (Tile.isSolid(this.coorners.d) && (this.coorners.l === OBJECT_ICE || this.coorners.l === OBJECT_METAL)) {
                    this.push();
                }
                //climb
                if (Tile.isSolid(this.coorners.l) && Tile.isSolid(this.coorners.d)  && !Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ul) && !this.moving) {
                    this.setAnim(ANIM_PUSH_START,ANIM_PUSH_START,false, ANIM_LEFT_ROW);
                    this.setState(MOVE_UP, true);
                }
            }
        }
    }

    right() {
        if (!this.moving) {
            if (this.dirrection !== DIR_RIGHT) {
                if (!Tile.isSolid(this.coorners.u)) {
                    this.setAnim(ANIM_TURN_START, ANIM_TURN_END, false, ANIM_LEFT_ROW, 4);
                } else {
                    this.setAnim(ANIM_CROUCH_START,ANIM_CROUCH_START, false, ANIM_RIGHT_ROW, 4);
                }
                this.setState(MOVE_TURN, true);
                this.dirrection = DIR_RIGHT;
            } else{
                if (!Tile.isSolid(this.coorners.r) && Tile.isSolid(this.coorners.d)) {
                    if (!Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ur)) {
                        this.setAnim(ANIM_RUN_START, ANIM_RUN_END, false, ANIM_RIGHT_ROW);
                    } else {
                        this.setAnim(ANIM_CROUCH_START, ANIM_CROUCH_END, false, ANIM_RIGHT_ROW);
                    }
                    this.setState(MOVE_RIGHT, true);
                }
                if (Tile.isSolid(this.coorners.d) && (this.coorners.r === OBJECT_ICE || this.coorners.r === OBJECT_METAL)) {
                    this.push();
                }
                if (Tile.isSolid(this.coorners.r) && Tile.isSolid(this.coorners.d) && !Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ur) && !this.moving) {
                    this.setAnim(ANIM_PUSH_START,ANIM_PUSH_START,false, ANIM_RIGHT_ROW);
                    this.setState(MOVE_UP, true);
                }
            }
        }
    }

    burn() {
        if (this.state !== MOVE_RIP) {
            this.engine.sound.playOnce('danger');
            this.setState(MOVE_RIP, true);
            this.setAnim(ANIM_RIP_START,ANIM_RIP_END, true, ANIM_RIGHT_ROW);
        }
    }

    intro() {
        this.setAnim(ANIM_BIG_FALL_START,ANIM_BIG_FALL_END, true, ANIM_RIGHT_ROW, 4);
        this.setState(MOVE_INTRO, true);
        this.y -= 32;
    }

    outro() {
        this.setAnim(ANIM_FALL_START, ANIM_BIG_FALL_END, true, ANIM_RIGHT_ROW, 4);
        this.setState(MOVE_OUTRO, true);
        this.innerCounter = 0;
    }

    doRip() {

    }

    gravity() {
        if (!this.moving) {
            if (typeof this.coorners.d === "undefined") {
                console.eror('undefined coorner');
            }
            if (!Tile.isSolid(this.coorners.d)) {
                this.setState(MOVE_DOWN, true);
                if (this.fallCounter >= 1) {
                    this.engine.sound.playOnce("falling");
                }
                if (this.fallCounter >= 2) {
                    this.setAnim(ANIM_BIG_FALL_START, ANIM_BIG_FALL_END, true, ANIM_RIGHT_ROW);
                } else {
                    this.setAnim(ANIM_BIG_FALL_START, ANIM_BIG_FALL_END, true, ANIM_RIGHT_ROW);
                }
            } else {

                this.engine.sound.stop("falling");
                if (this.state === MOVE_DOWN) {
                    this.engine.sound.play('fall');
                    if (this.fallCounter >= 2) {
                        this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile + 1, '255, 135, 124', 5, 0.75));
                        this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile + 1, '122, 211, 255', 10,  1));
                    }
                }
                this.fallCounter = 0;
                this.setState(MOVE_STAND, false);
                if (this.coorners.d === OBJECT_JAR) {
                    const jar = this.engine.spriteAt(this.xtile, this.ytile + 1);
                    if (jar && jar.onFire) {
                        this.burn();
                    }
                }
            }
        }
    }

    ice() {
        if (!this.moving) {
            if (Tile.isSolid(this.coorners.d)) {
                if (this.dirrection === DIR_RIGHT) {
                    if (!Tile.isSolid(this.coorners.dr) && this.coorners.dr !== OBJECT_FIRE) {
                        this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_RIGHT_ROW, 4);
                        this.setState(MOVE_ICE_MAKE, true);
                    } else if (this.coorners.dr === OBJECT_ICE) {
                        this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_RIGHT_ROW, 4);
                        this.setState(MOVE_ICE_REMOVE, true);
                    } else {
                        this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_RIGHT_ROW, 4);
                        this.setState(MOVE_ICE_FAIL, true);
                    }
                } else {
                    if (!Tile.isSolid(this.coorners.dl) && (this.coorners.dl !== OBJECT_FIRE)) {
                        this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_LEFT_ROW, 4);
                        this.setState(MOVE_ICE_MAKE, true);
                    } else if (this.coorners.dl === OBJECT_ICE) {
                        this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_LEFT_ROW, 4);
                        this.setState(MOVE_ICE_REMOVE, true);
                    } else {
                        this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_LEFT_ROW, 4);
                        this.setState(MOVE_ICE_FAIL, true);
                    }
                }
            }
        }
    }

    jump() {
        if (!this.moving) {
            if (this.dirrection === DIR_RIGHT) {
                if (Tile.isSolid(this.coorners.r) && !Tile.isSolid(this.coorners.ur) && !Tile.isSolid(this.coorners.u)) {
                    this.setAnim(ANIM_PUSH_START,ANIM_PUSH_START,false, ANIM_RIGHT_ROW);
                    this.setState(MOVE_UP, true);
                }
            } else {
                if (Tile.isSolid(this.coorners.l) && !Tile.isSolid(this.coorners.ul) && !Tile.isSolid(this.coorners.u)) {
                    this.setAnim(ANIM_PUSH_START,ANIM_PUSH_START,false, ANIM_LEFT_ROW);
                    this.setState(MOVE_UP, true);
                }
            }
        }
    }

    doRun() {
        this.counter++;
        if (this.counter <= ANIM_FRAME_COUNT) {
            this.x += this.speed * this.dirrection;
        } else {
            this.setState(MOVE_STAND, false);
        }
    }

    doTurn() {
        this.counter++;
        if (this.counter >= ANIM_FRAME_COUNT) {
            this.setState(MOVE_STAND, false);
        }
    }

    doOutro() {
        this.counter += 1;
        if (this.counter % 10 === 0) {
            this.innerCounter += 1;
            if (this.innerCounter === 1) {
                this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '124, 238, 66', 20,  0.5));
            }
            if (this.innerCounter === 3) {
                this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '255, 135, 124', 15, 1));
            }
            if (this.innerCounter === 5) {
                this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '122, 211, 255', 10,  1.5));
            }
            if (this.innerCounter % 2 === 0 && this.innerCounter < 6) {
                this.engine.sound.play('climb');
            }
        }
        if (this.innerCounter % 2 === 1) {
            this.y += 1;
        } else {
            this.y -= 1;
        }
        if (this.innerCounter >= 6) {
            this.engine.sound.play('state-leave');
            this.setState(MOVE_STAND, false);
            this.engine.nextLevel();
        }
    }

    doIntro() {
        this.counter += 1;
        if (this.counter === 4) {
            this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '124, 238, 66', 20,  0.5));
            this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '255, 135, 124', 15, 1));
            this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '122, 211, 255', 10,  1.5));
            this.engine.sound.play('stage-enter');
        }
        if (this.counter <= 16) {
            this.y += 2;
        } else {
            this.engine.sound.stop("falling");
            this.setState(MOVE_STAND, false);
        }
    }

    doGravity() {
        this.counter += 1;
        if (this.counter <= ANIM_FRAME_COUNT) {
            this.y += this.speed;
        } else {
            this.moving = false;
            this.gravity();
            this.fallCounter++;
        }
    }

    doStand() {
        if (!Tile.isSolid(this.coorners.u)) {
            if (this.standCounter++ > 500) {
                this.setAnim(ANIM_SLEEP_START,ANIM_SLEEP_END,true, this.dirrection !== 1 ? ANIM_LEFT_ROW : ANIM_RIGHT_ROW, 48, true);
            } else {
                this.setAnim(ANIM_STAND_START,ANIM_STAND_END,true, this.dirrection !== 1 ? ANIM_LEFT_ROW : ANIM_RIGHT_ROW, 8, true);
            }
        } else {
            this.setAnim(ANIM_CROUCH_START,ANIM_CROUCH_START, false, this.dirrection !== 1 ? ANIM_LEFT_ROW : ANIM_RIGHT_ROW, 8, true);
        }
    }

    doUp() {
        this.counter += 1;
        if (this.counter <= 18) {
            switch (this.counter) {
                case 3:
                    this.engine.sound.play('climb');
                    this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '124, 238, 66', 10,  0.75));
                    this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '255, 135, 124', 5, 1.25));
                    this.setAnim(ANIM_PUSH_END, ANIM_PUSH_END, false, this.dirrection === DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                    break;
                case 6:
                    this.setAnim(ANIM_JUMP_START, ANIM_JUMP_START, false, this.dirrection === DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 9:
                    this.setAnim(ANIM_JUMP_END, ANIM_JUMP_END, false, this.dirrection === DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 12:
                    this.setAnim(2, 2, false, this.dirrection === DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 18:
                    this.setAnim(ANIM_STAND, ANIM_STAND, false, this.dirrection === DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                break;
            }
        } else {
            this.setState(MOVE_STAND, false);
        }
    }

    makeIce() {
        this.engine.sound.play('new-ice');
        this.engine.addIceBlock(this.xtile + this.dirrection, this.ytile+1);
        this.engine.addSfx(new Sparks(this.engine, this.xtile + this.dirrection, this.ytile + 1));
    }

    removeIceBlock() {
        this.engine.sound.play('ice-remove');
        this.engine.removeIceBlock(this.xtile + this.dirrection, this.ytile+1);
        this.engine.addSfx(new Sparks(this.engine, this.xtile + this.dirrection, this.ytile + 1));
    }

    push() {
        let ice =  this.engine.iceAt(this.xtile+this.dirrection, this.ytile);
        if (ice && ice.canGlide(this.dirrection)) {
            this.setAnim(ANIM_PUSH_START, ANIM_PUSH_END, false, this.dirrection === DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW, 3);
            this.setState(MOVE_PUSH, true);
        }
    }

    doPush() {
        this.counter += 2;
        if (this.counter <= ANIM_FRAME_COUNT) {
            // fixme
        } else {
            let ice =  this.engine.iceAt(this.xtile+this.dirrection, this.ytile);
            if (ice) {
                this.engine.sound.play('ice-push');
                ice.push(this.dirrection);
            }
            this.setState(MOVE_STAND, false);
        }
    }

    doIce() {
        if (this.counter === 8) {
            if (this.state === MOVE_ICE_MAKE) {
                this.makeIce();
            } else{
                this.removeIceBlock();
            }
        }
        this.counter += 1;
        if (this.counter >= ANIM_FRAME_COUNT) {
            this.setState(MOVE_STAND, false);
        }
    }

    doFailIce() {
        if (this.counter === 8) {
            this.engine.sound.play('ice-disabled');
            this.engine.addSfx(new Sparks(this.engine, this.xtile + this.dirrection, this.ytile + 1, '88,66,66'));
        }
        this.counter += 1;
        if (this.counter >= ANIM_FRAME_COUNT) {
            this.setState(MOVE_STAND, false);
        }
    }

    collisions() {
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, OBJECT_PLAYER) === OBJECT_FIRE) {
            this.burn();
        }
    }

    move () {
        this.gravity();
        this.collisions();
        if (this.state !== MOVE_STAND) {
            this.standCounter = 0;
        }
        if (this.state !== MOVE_DOWN) {
            this.fallCounter = 0;
        }
        switch (this.state) {
            case MOVE_RIGHT:
                this.doRun();
                break;
            case MOVE_LEFT:
                this.doRun();
                break;
            case MOVE_DOWN:
                this.doGravity();
                break;
            case MOVE_UP:
                this.doUp();
                break;
            case MOVE_TURN:
                this.doTurn();
                break;
            case MOVE_ICE_MAKE:
            case MOVE_ICE_REMOVE:
                this.doIce();
                break;
            case MOVE_ICE_FAIL:
                this.doFailIce();
                break;
            case MOVE_STAND:
                this.doStand();
                break;
            case MOVE_PUSH:
                this.doPush();
                break;
            case MOVE_RIP:
                this.doRip();
                break;
            case MOVE_OUTRO:
                this.doOutro();
                break;
            case MOVE_INTRO:
                this.doIntro();
                break;
        }
    }
}
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
            this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '124, 212, 255', 15));
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

class Jar extends AnimSprite {

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
        this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile - 1, '255, 88, 33', 30));
    }

    meltIce() {
        this.engine.removeIceBlock(this.xtile, this.ytile - 1);
        this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile - 1, '255, 88, 33', 30));
        this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile - 1, '33, 88, 255', 40));
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

class Ice extends AnimSprite {

    constructor(engine, tx, ty, length, frozen) {
        super(OBJECT_ICE, engine, 'img_ice',
            tx, ty, TILE_WIDTH, TILE_WIDTH, 0, 0, 0, 1, true);
        this.xtile = tx;
        this.ytile = ty;
        this.frozen = (typeof frozen === 'undefined') ? false : frozen;
        this.length = length;
        this.animEnd = 1;
        this.animDelay = 9;
        this.animRow = 0;
        this.dirrection = 0;
        this.falling = false;
        this.checkFreeze();
    }

    addBlock(tx) {
        const spriteTypeAtLeftCorner = this.engine.spriteTypeAt(this.xtile-1, this.ytile);
        const spriteTypeAtRightCorner = this.engine.spriteTypeAt(this.xtile+this.length, this.ytile);
        if (
            (tx > this.xtile && this.getTile(tx+1, this.ytile) === OBJECT_WALL) ||
            (tx < this.xtile && this.getTile(tx-1, this.ytile) === OBJECT_WALL) ||
            (spriteTypeAtLeftCorner === OBJECT_METAL) ||
            (spriteTypeAtLeftCorner === OBJECT_JAR) ||
            (spriteTypeAtRightCorner === OBJECT_METAL) ||
            (spriteTypeAtRightCorner === OBJECT_JAR)
        ) {
            this.frozen = true;
        }
        this.xtile = tx < this.xtile ? tx : this.xtile;
        this.x = this.xtile * TILE_WIDTH;
        this.length++;
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
            this.x += TILE_WIDTH;
            this.length--;
        } else if (tx === this.xtile+this.length-1) {
            this.length--;
        } else {
            this.engine.addSprite(
                new Ice(this.engine, tx+1, this.ytile, this.xtile+this.length-tx-1));
            this.length = tx - this.xtile;
        }
        return this.length;
    }

    canGlide(dir) {
        if (this.length !== 1 || this.frozen) {
            return false;
        }
        if (dir === DIR_LEFT  && Tile.isSolid(this.coorners.l)) {
            return false;
        }
        if (dir === DIR_RIGHT && Tile.isSolid(this.coorners.r)) {
            return false;
        }
        return true;
    }

    gravity() {
        if (!this.coorners.d && !this.frozen) {
            this.falling = true;
            this.setState(MOVE_DOWN, true);
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
            this.setState(MOVE_STAND, false);
            return true;
        }
        if (this.gravity()) {
            return true;
        }
        return false;
    }

    move() {
        for (let i = 0; i < this.length; i++) {
            let tile_down = this.spriteTypeAt(this.xtile+i, this.ytile+1);
            if (tile_down && tile_down !== OBJECT_FIRE) {
                this.coorners.d = tile_down;
            }

        }
        if (this.coorners.d === OBJECT_FIRE) {
            this.coorners.d = OBJECT_BACKGROUND;
        }
        this.coorners.r = this.spriteTypeAt(this.xtile+this.length, this.ytile);

        if (this.frozen) {
            this.checkUnfreeze();
        }
        if (!this.moving) {
            this.gravity();
        }
        switch (this.state) {
            case MOVE_ICE_MOVING:
                this.glide();
                break;
            case MOVE_ICE_CHECK:
                this.push();
                break;
            case MOVE_DOWN:
                this.doDown();
                break;
        }
    }

    draw() {
        const spriteTypeAtLeftCorner = this.engine.spriteTypeAt(this.xtile-1, this.ytile);
        const spriteTypeAtRightCorner = this.engine.spriteTypeAt(this.xtile+this.length, this.ytile);
        this.ctx.save();
        if (this.animDelayCount++ > this.animDelay) {
            this.animDelayCount = 0;
            this.animRow = this.animRow === 0 ? 1 : 0;
        }
        if (this.length === 1) {
            this.ctx.drawImage(this.image, 0, TILE_WIDTH*this.animRow, this.width, this.height,  this.x, this.y, this.width, this.height);
        } else if (this.length === 2) {
            this.ctx.drawImage(this.image, 1*TILE_WIDTH, TILE_WIDTH*this.animRow,
                this.width, this.height,  this.x, this.y, this.width, this.height);
            this.ctx.drawImage(this.image, 3*TILE_WIDTH, TILE_WIDTH*this.animRow,
                this.width, this.height,  this.x+TILE_WIDTH, this.y, this.width, this.height);
        } else {
            this.ctx.drawImage(this.image, 1*TILE_WIDTH, TILE_WIDTH*this.animRow,
                this.width, this.height,  this.x, this.y, this.width, this.height);
            this.ctx.drawImage(this.image, 3*TILE_WIDTH, TILE_WIDTH*this.animRow,
                this.width, this.height,  this.x+TILE_WIDTH*(this.length-1), this.y, this.width, this.height);
            for (let i = 1;  i < this.length-1; i++) {
                this.ctx.drawImage(this.image, 2*TILE_WIDTH, TILE_WIDTH*this.animRow,
                    this.width, this.height,  this.x+(TILE_WIDTH*i), this.y, this.width, this.height);
            }
        }
        if (this.frozen) {
            if (
                this.getTile(this.xtile-1, this.ytile) === OBJECT_WALL ||
                spriteTypeAtLeftCorner === OBJECT_METAL ||
                spriteTypeAtLeftCorner === OBJECT_JAR
            ) {
                this.ctx.drawImage(
                    this.engine.resources.get('frost'),
                    (this.xtile*this.width)-7,
                    this.ytile*this.height
                );
            }
            if (
                this.getTile(this.xtile+this.length, this.ytile) === OBJECT_WALL ||
                spriteTypeAtRightCorner === OBJECT_METAL ||
                spriteTypeAtRightCorner === OBJECT_JAR
            ) {
                this.ctx.drawImage(
                    this.engine.resources.get('frost'),
                    (this.xtile+this.length)*this.width-7,
                    this.ytile*this.height
                );
            }
        }

        this.ctx.restore();
    }

    glide() {
        this.counter += 4;
        if (this.counter <= TILE_WIDTH) {
            this.x += 4 * this.dirrection;
        } else {
            this.push();
        }
    }

    doDown() {
        this.counter += 4;
        if (this.counter <= TILE_WIDTH) {
            this.y += 4;
        } else {
            this.setState(MOVE_STAND, false);
        }
    }

    push(dir) {
        this.dirrection = (typeof dir === 'undefined') ? this.dirrection : dir;
        if (!this.collision()) {
            this.moving = true;
            this.setState(MOVE_ICE_MOVING, true);
        } else {
            this.setState(MOVE_STAND, false);
        }
    }

    checkUnfreeze() {
        const spriteTypeAtLeftCorner = this.engine.spriteTypeAt(this.xtile-1, this.ytile);
        const spriteTypeAtRightCorner = this.engine.spriteTypeAt(this.xtile+this.length, this.ytile);
        if (
            this.getTile(this.xtile-1, this.ytile) !== OBJECT_WALL &&
            this.getTile(this.xtile+this.length, this.ytile) !== OBJECT_WALL &&
            spriteTypeAtLeftCorner !== OBJECT_METAL &&
            spriteTypeAtLeftCorner !== OBJECT_JAR &&
            spriteTypeAtRightCorner !== OBJECT_METAL &&
            spriteTypeAtRightCorner !== OBJECT_JAR
        ) {
            this.frozen = false;
        }
    }

    checkFreeze() {
        const spriteTypeAtLeftCorner = this.engine.spriteTypeAt(this.xtile-1, this.ytile);
        const spriteTypeAtRightCorner = this.engine.spriteTypeAt(this.xtile+this.length, this.ytile);
        if (
            (this.getTile(this.xtile-1, this.ytile) === OBJECT_WALL) ||
            (this.getTile(this.xtile+this.length, this.ytile) === OBJECT_WALL) ||
            (spriteTypeAtLeftCorner === OBJECT_METAL) ||
            (spriteTypeAtLeftCorner === OBJECT_JAR) ||
            (spriteTypeAtRightCorner === OBJECT_METAL) ||
            (spriteTypeAtRightCorner === OBJECT_JAR)
        ) {
            this.frozen = true;
        } else {
            this.frozen = false;
        }
    }
}

class Metal extends AnimSprite {

    constructor(engine, tx, ty, length) {
        super(OBJECT_METAL, engine, 'img_metal',
            tx, ty, TILE_WIDTH, TILE_WIDTH, 0, 0, 0, 1, true);
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
        if (dir === DIR_LEFT  && Tile.isSolid(this.coorners.l)) {
            return false;
        }
        if (dir === DIR_RIGHT && Tile.isSolid(this.coorners.r)) {
            return false;
        }
        return true;
    }

    gravity() {
        if (!this.coorners.d) {
            this.falling = true;
            this.setState(MOVE_DOWN, true);
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
            this.setState(MOVE_STAND, false);
            return true;
        }
        if (this.gravity()) {
            return true;
        }
        return false;
    }

    move() {
        for (let i = 0; i < this.length; i++) {
            let tile_down = this.spriteTypeAt(this.xtile+i, this.ytile+1);
            if (tile_down && tile_down !== OBJECT_FIRE) {
                this.coorners.d = tile_down;
            }

        }
        if (this.coorners.d === OBJECT_FIRE) {
            this.coorners.d = OBJECT_BACKGROUND;
        }
        this.coorners.r = this.spriteTypeAt(this.xtile+this.length, this.ytile);

        if (!this.moving) {
            this.gravity();
        }
        switch (this.state) {
            case MOVE_ICE_MOVING:
                this.glide();
                break;
            case MOVE_ICE_CHECK:
                this.push();
                break;
            case MOVE_DOWN:
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
        this.ctx.drawImage(this.image, 0, TILE_WIDTH*this.animRow, this.width, this.height,  this.x, this.y, this.width, this.height);

        if (
            this.engine.spriteTypeAt(this.xtile-1, this.ytile) === OBJECT_ICE &&
            this.engine.spriteAt(this.xtile-1, this.ytile).frozen
        ) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile*this.width)-7,
                this.ytile*this.height
            );
        }
        if (
            this.engine.spriteTypeAt(this.xtile+this.length, this.ytile) === OBJECT_ICE &&
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
        if (this.counter <= TILE_WIDTH) {
            this.x += 4 * this.dirrection;
        } else {
            this.setState(MOVE_STAND, false);
        }
    }

    doDown() {
        this.counter += 4;
        if (this.counter <= TILE_WIDTH) {
            this.y += 4;
        } else {
            this.setState(MOVE_STAND, false);
        }
    }

    push(dir) {
        this.dirrection = (typeof dir === 'undefined') ? this.dirrection : dir;
        if (!this.collision()) {
            this.moving = true;
            this.setState(MOVE_ICE_MOVING, true);
        } else {
            this.setState(MOVE_STAND, false);
        }
    }
}

class Particle {

    constructor(ctx, x, y, color, intencity) {
        this.color = (typeof color === 'undefined') ? '255,255,255' : color;
        this.r = 3;
        this.x = x;
        this.y = y;
        this.vx = (Math.random() * 4 - 2) * intencity;
        this.vy = (Math.random() * 6 - 4) * intencity;
        this.speed = 0.15;
        this.life = 255;
        this.ctx = ctx;
    }

    draw() {
        let opacity = this.life / 255;
        this.ctx.beginPath();
        this.ctx.fillStyle = 'rgba(' + this.color+','+opacity+')';
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
        //this.ctx.rect(this.x, this.y, this.r, this.r);
        this.ctx.closePath();
        this.ctx.fill();
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.speed;
        this.life -= 5;
    }
}

class Sparks extends Sprite {

    constructor (engine, tx, ty, color, length, intencity) {
        super(null, engine, tx, ty, 32, 32);
        this.color = (typeof color === 'undefined') ? '255,255,255' : color;
        this.length = (typeof length === 'undefined') ? 10 : length;
        this.intencity = (typeof intencity === 'undefined') ? 1 : intencity;
        this.particles = [];
        for (let i = 0; i < this.length; i++) {
            this.particles[i] = new Particle(this.engine.ctx, tx*TILE_WIDTH+16, ty*TILE_WIDTH+16, this.color, this.intencity);
        }
    }

    draw() {
        this.engine.ctx.save();
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].draw();
        }
        this.engine.ctx.restore();
    }

    engineMove() {
        this.move();
    }

    move() {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].move();
            if (this.particles[i].life < 0) {
                this.particles.splice(i,1);
            }
        }
        if (!this.particles.length) {
            this.engine.removeSfx(this);
        }
    }
}

const levels = [
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":0,"sprites":[{"id":7,"x":11,"y":4,"l":1},{"id":3,"x":5,"y":9,"l":1},{"id":3,"x":5,"y":8,"l":1},{"id":3,"x":5,"y":7,"l":1},{"id":3,"x":5,"y":6,"l":1},{"id":6,"x":6,"y":4,"l":1},{"id":3,"x":8,"y":4,"l":1},{"id":6,"x":7,"y":9,"l":1},{"id":6,"x":7,"y":8,"l":1},{"id":6,"x":7,"y":7,"l":1},{"id":6,"x":9,"y":10,"l":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":1,"sprites":[{"id":7,"x":3,"y":7,"l":1},{"id":6,"x":6,"y":7,"l":1},{"id":3,"x":4,"y":7,"l":1},{"id":3,"x":10,"y":5,"l":4},{"id":6,"x":12,"y":8,"l":1},{"id":6,"x":12,"y":7,"l":1},{"id":6,"x":12,"y":6,"l":1},{"id":6,"x":13,"y":8,"l":1},{"id":3,"x":11,"y":8,"l":1},{"id":3,"x":11,"y":7,"l":1},{"id":3,"x":11,"y":6,"l":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1],[1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1],[1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":2,"sprites":[{"id":7,"x":14,"y":6,"l":1},{"id":6,"x":10,"y":9,"l":1},{"id":3,"x":5,"y":4,"l":1},{"id":6,"x":9,"y":6,"l":1},{"id":6,"x":9,"y":5,"l":1},{"id":3,"x":11,"y":6,"l":1},{"id":3,"x":11,"y":5,"l":1},{"id":3,"x":8,"y":6,"l":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":0,"sprites":[{"id":7,"x":8,"y":9,"l":1},{"id":6,"x":12,"y":8,"l":1},{"id":6,"x":13,"y":7,"l":1},{"id":6,"x":11,"y":9,"l":1},{"id":3,"x":6,"y":8,"l":5},{"id":3,"x":10,"y":9,"l":1},{"id":3,"x":10,"y":7,"l":3},{"id":3,"x":12,"y":6,"l":2},{"id":3,"x":6,"y":9,"l":1},{"id":3,"x":4,"y":7,"l":3},{"id":3,"x":3,"y":6,"l":2},{"id":6,"x":5,"y":9,"l":1},{"id":6,"x":4,"y":8,"l":1},{"id":6,"x":3,"y":7,"l":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1],[1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1],[1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":6,"sprites":[{"id":7,"x":11,"y":8,"l":1},{"id":3,"x":10,"y":10,"l":3},{"id":3,"x":10,"y":9,"l":3},{"id":3,"x":7,"y":7,"l":1},{"id":3,"x":3,"y":5,"l":1},{"id":3,"x":9,"y":7,"l":1},{"id":6,"x":3,"y":10,"l":1},{"id":3,"x":3,"y":4,"l":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":5,"sprites":[{"id":7,"x":14,"y":3,"l":1},{"id":3,"x":14,"y":4,"l":1},{"id":3,"x":3,"y":4,"l":1},{"id":3,"x":6,"y":6,"l":1},{"id":3,"x":8,"y":6,"l":1},{"id":3,"x":10,"y":6,"l":1},{"id":3,"x":1,"y":8,"l":12},{"id":6,"x":2,"y":10,"l":1},{"id":6,"x":3,"y":10,"l":1},{"id":6,"x":5,"y":10,"l":1},{"id":6,"x":4,"y":10,"l":1},{"id":6,"x":6,"y":10,"l":1},{"id":6,"x":7,"y":10,"l":1},{"id":6,"x":8,"y":10,"l":1},{"id":6,"x":9,"y":10,"l":1},{"id":6,"x":11,"y":10,"l":1},{"id":6,"x":12,"y":10,"l":1},{"id":6,"x":10,"y":10,"l":1},{"id":6,"x":2,"y":7,"l":1},{"id":3,"x":2,"y":5,"l":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":1,"sprites":[{"id":7,"x":12,"y":4,"l":1},{"id":6,"x":8,"y":11,"l":1},{"id":6,"x":8,"y":10,"l":1},{"id":6,"x":9,"y":11,"l":1},{"id":6,"x":10,"y":11,"l":1},{"id":3,"x":8,"y":5,"l":5},{"id":3,"x":10,"y":4,"l":1},{"id":3,"x":6,"y":6,"l":1},{"id":6,"x":6,"y":5,"l":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":1,"sprites":[{"id":7,"x":8,"y":6,"l":1},{"id":6,"x":5,"y":10,"l":1},{"id":6,"x":6,"y":10,"l":1},{"id":6,"x":7,"y":10,"l":1},{"id":6,"x":8,"y":10,"l":1},{"id":6,"x":9,"y":10,"l":1},{"id":6,"x":10,"y":10,"l":1},{"id":3,"x":11,"y":10,"l":2},{"id":3,"x":5,"y":9,"l":7},{"id":6,"x":5,"y":8,"l":1},{"id":3,"x":11,"y":6,"l":1},{"id":6,"x":11,"y":5,"l":1},{"id":3,"x":6,"y":5,"l":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":6,"sprites":[{"id":7,"x":5,"y":4,"l":1},{"id":6,"x":5,"y":8,"l":1},{"id":3,"x":8,"y":5,"l":1},{"id":3,"x":8,"y":4,"l":1},{"id":6,"x":11,"y":8,"l":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1],[1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":10,"sprites":[{"id":7,"x":3,"y":4,"l":1},{"id":6,"x":2,"y":6,"l":1},{"id":6,"x":3,"y":7,"l":1},{"id":6,"x":4,"y":8,"l":1},{"id":6,"x":5,"y":9,"l":1},{"id":6,"x":6,"y":10,"l":1},{"id":6,"x":7,"y":10,"l":1},{"id":6,"x":8,"y":9,"l":1},{"id":6,"x":9,"y":8,"l":1},{"id":6,"x":10,"y":7,"l":1},{"id":6,"x":11,"y":6,"l":1},{"id":3,"x":2,"y":5,"l":10},{"id":3,"x":5,"y":4,"l":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1],[1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1],[1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1],[1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":6,"sprites":[{"id":7,"x":3,"y":3,"l":1},{"id":6,"x":13,"y":10,"l":1},{"id":6,"x":5,"y":10,"l":1},{"id":6,"x":6,"y":10,"l":1},{"id":6,"x":7,"y":10,"l":1},{"id":3,"x":4,"y":4,"l":1},{"id":3,"x":6,"y":3,"l":2},{"id":3,"x":11,"y":3,"l":2},{"id":6,"x":9,"y":3,"l":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":7,"sprites":[{"id":7,"x":8,"y":5,"l":1},{"id":6,"x":6,"y":5,"l":1},{"id":3,"x":10,"y":5,"l":1},{"id":3,"x":2,"y":3,"l":2},{"id":3,"x":14,"y":4,"l":1},{"id":3,"x":14,"y":4,"l":1},{"id":3,"x":13,"y":3,"l":1},{"id":6,"x":14,"y":3,"l":1},{"id":6,"x":11,"y":10,"l":1},{"id":6,"x":5,"y":10,"l":1},{"id":6,"x":12,"y":9,"l":1},{"id":6,"x":2,"y":9,"l":1},{"id":6,"x":6,"y":9,"l":1},{"id":6,"x":7,"y":9,"l":1},{"id":6,"x":8,"y":9,"l":1},{"id":6,"x":9,"y":9,"l":1},{"id":6,"x":10,"y":9,"l":1},{"id":6,"x":13,"y":9,"l":1},{"id":3,"x":3,"y":9,"l":1},{"id":3,"x":3,"y":8,"l":11},{"id":6,"x":4,"y":9,"l":1}]},
    {
        map: [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1],
            [1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1],
            [1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1],
            [1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1],
            [1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        sprites: [
            {id :OBJECT_PLAYER, x: 13, y: 2, l: 1},
            {id :OBJECT_ICE   , x: 4, y: 4, l: 8},
            {id :OBJECT_ICE   , x: 11, y: 3, l: 4},
            {id :OBJECT_FIRE  , x: 3, y: 5, l: 1},
            {id :OBJECT_FIRE  , x: 4, y: 6, l: 1},
            {id :OBJECT_FIRE  , x: 5, y: 7, l: 1},
            {id :OBJECT_FIRE  , x: 10, y: 6, l: 1},
            {id :OBJECT_FIRE  , x: 11, y: 5, l: 1},
            {id :OBJECT_FIRE  , x: 14, y: 10, l: 1},
            {id :OBJECT_FIRE  , x: 14, y: 9, l: 1},
            {id :OBJECT_FIRE  , x: 2, y: 10, l: 1},
            {id :OBJECT_FIRE  , x: 9, y: 8, l: 1},
            {id :OBJECT_FIRE  , x: 2, y: 9, l: 1},
            {id :OBJECT_FIRE  , x: 8, y: 8, l: 1},
            {id :OBJECT_FIRE  , x: 7, y: 8, l: 1},
            {id :OBJECT_FIRE  , x: 6, y: 8, l: 1},
            {id :OBJECT_FIRE  , x: 8, y: 10, l: 1},
            {id :OBJECT_FIRE  , x: 7, y: 10, l: 1}
        ],
        theme: 8
    },
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":6,"sprites":[{"id":7,"x":14,"y":10,"l":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1],[1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1],[1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1],[1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1],[1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1],[1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":9,"sprites":[{"id":7,"x":10,"y":11,"l":1},{"id":6,"x":8,"y":1,"l":1},{"id":4,"x":14,"y":11,"l":1},{"id":6,"x":8,"y":5,"l":1}]}
];


class Scene {

    constructor(engine) {
        this.engine = engine;
    }

    save() {
        let data = {};
        data.map = this.engine.map.map;
        data.theme = this.engine.map.theme;
        data.sprites = [];
        for (const sprite of this.engine.sprites) {
            sprite.length = (typeof sprite.length === "undefined") ? 1 : sprite.length;
            data.sprites.push({
                "id": sprite.id,
                "x": sprite.xtile,
                "y": sprite.ytile,
                "l": sprite.length
            });
        }

        return data;
    }

    load(index) {
        if (typeof levels[index] === 'undefined') {
            index = 0;
        }
        this.engine.level = index;
        const level = levels[index];
        this.engine.sprites = [];
        this.engine.map = new TileMap(this.engine, level.map, level.theme);
        for (const sprite of level.sprites) {
            switch(sprite.id) {
                case OBJECT_PLAYER:
                    this.engine.player = new Player(this.engine, sprite.x, sprite.y);
                    this.engine.addSprite(this.engine.player);
                    break;
                case OBJECT_ICE:
                    sprite.l = typeof sprite.l === "undefined" ? 1 : sprite.l;
                    this.engine.addSprite(new Ice(this.engine, sprite.x, sprite.y, parseInt(sprite.l)));
                    break;
                case OBJECT_METAL:
                    this.engine.addSprite(new Metal(this.engine, sprite.x, sprite.y, 1));
                    break;
                case OBJECT_FIRE:
                    this.engine.addSprite(new Fire(this.engine, sprite.x, sprite.y));
                    break;
                case OBJECT_JAR:
                    this.engine.addSprite(new Jar(this.engine, sprite.x, sprite.y));
                    break;
            }
        }
    }
}
/**
 * Engine Loop
 */
class Engine {

    constructor(canvas, resources) {
        this.canvas = canvas;
        this.cwidth = canvas.width;
        this.cheight = canvas.height;
        this.resources = resources;
        this.ctx = this.canvas.getContext('2d');
        this.state = GAME_STATE_INTRO;
        this.sprites = [];
        this.sfxs = [];
        this.player = {};
        this.level = 0;
        this.keyboard = new Keyboard();
        this.sound = new Sound();
        this.scene = new Scene(this);
        this.editor = false;
        const level = localStorage.getItem('level');
        if (level !== null) {
            this.level = parseInt(level, 10);
        }
        this.scene.load(this.level);
    }

    draw() {
        this.ctx.clearRect(0,0,this.cwidth,this.cheight);
        this.map.draw();
        // reverse loop, player draws last
        for (let i = this.sprites.length - 1; i >= 0; i--) {
            this.sprites[i].draw();
        }
        for (let i = 0; i < this.sfxs.length; ++i) {
            this.sfxs[i].draw();
        }
    }

    collision() {
        const fires = this.sprites.filter(sprite => sprite.id === OBJECT_FIRE);
        if (!fires.length && !this.editor && this.player.state !== MOVE_OUTRO) {
            this.player.outro();
        }
    }

    nextLevel() {
        this.level++;
        localStorage.setItem('level', this.level);
        this.scene.load(this.level);
    }

    move() {
        let objectsMoving = false;
        for (let i = 0; i < this.sprites.length; ++i) {
            if (!(this.sprites[i] instanceof Player) &&
                this.sprites[i].moving)
            {
                objectsMoving = true;
            }
            this.sprites[i].engineMove();
        }
        for (let i = 0; i < this.sfxs.length; ++i) {
            this.sfxs[i].engineMove();
        }
        if (!objectsMoving) {
            if (this.keyboard.up) {
                //this.player.jump();
            }
            if (this.keyboard.down || this.keyboard.action) {
                this.player.ice();
            }
            if (this.keyboard.left) {
                this.player.left();
            }
            if (this.keyboard.right) {
                this.player.right();
            }
            if (this.keyboard.enter) {
                this.sound.stop('danger');
                this.scene.load(this.level);
                this.keyboard.enter = false;
            }
        }
        this.collision();
    }

    iceAt(tx, ty) {
        for (let i = 0; i < this.sprites.length; i++) {
            if (this.sprites[i].isSpriteAt(tx, ty)) {
                return this.sprites[i];
            }
        }
        return false;
    }

    addIceBlock(tx, ty, frozen) {
        let foundIceBlocks = [ ];
        frozen = (typeof length === 'undefined') ? false : frozen;
        for (let i = 0; i < this.sprites.length; i++) {
            if (this.sprites[i] instanceof Ice && this.sprites[i].ytile === ty) {
                let ice = this.sprites[i];
                if (ice.xtile - 1 === tx || ice.xtile + ice.length === tx) {
                    foundIceBlocks.push(ice);
                }
            }
        }
        if (foundIceBlocks.length === 0) {
            this.sprites.push(new Ice(this, tx, ty, 1, frozen));
        } else if (foundIceBlocks.length === 1) {
            foundIceBlocks[0].addBlock(tx);
        } else {
            this.joinIceBlocks(foundIceBlocks[0], foundIceBlocks[1]);
        }
    }

    joinIceBlocks(iceblockA,iceblockB) {
        let tx = iceblockA.xtile <= iceblockB.xtile ? iceblockA.xtile : iceblockB.xtile;
        let ty = iceblockA.ytile;
        let length = iceblockA.length + iceblockB.length + 1;
        this.addSprite(new Ice(this, tx, ty, length));
        this.removeSprite(iceblockA);
        this.removeSprite(iceblockB);
    }

    removeIceBlock(tx, ty) {
        for (let i = 0; i < this.sprites.length; i++) {
            if (this.sprites[i] instanceof Ice &&
                this.sprites[i].ytile === ty &&
                tx >= this.sprites[i].xtile &&
                tx < this.sprites[i].xtile + this.sprites[i].length)
            {
                if (this.sprites[i].removeBlock(tx) <= 0) {
                    this.sprites.splice(i,1);
                }
                return;
            }
        }
    }

    removeFire(tx, ty) {
        for (let i = 0; i < this.sprites.length; i++) {
            if ((this.sprites[i].ytile === ty) && (tx === this.sprites[i].xtile) && (this.sprites[i] instanceof Fire)) {
                this.sprites.splice(i,1);
                return;
            }
        }
    }

    addSprite(sprite) {
        this.sprites.push(sprite);
    }

    removeSprite(sprite) {
        for (let i = 0; i < this.sprites.length; i++) {
            if (this.sprites[i] === sprite) {
                this.sprites.splice(i,1);
                return true;
            }
        }
        return false;
    }

    addSfx(sfx) {
        this.sfxs.push(sfx);
    }

    removeSfx(sprite) {
        for (let i = 0; i < this.sfxs.length; i++) {
            if (this.sfxs[i] === sprite) {
                this.sfxs.splice(i,1);
                return true;
            }
        }
        return false;
    }

    spriteTypeAt(tx, ty, excludeId) {
        excludeId = (typeof excludeId === 'undefined') ? OBJECT_OUT : excludeId;
        if (tx < 0 || ty < 0 || tx > this.map.width || ty > this.map.height) {
            return OBJECT_OUT;
        }
        if (!this.map.map[ty][tx]) {
            for (let i = 0; i < this.sprites.length; i++) {
                if (this.sprites[i].isSpriteAt(tx, ty) && this.sprites[i].id !== excludeId) {
                    return this.sprites[i].id;
                }
            }
        } else {
            return this.map.map[ty][tx];
        }
        return OBJECT_BACKGROUND;
    }

    spriteAt(tx, ty) {
        if (!this.map.map[ty][tx]) {
            for (let i = 0; i < this.sprites.length; i++) {
                if (this.sprites[i].isSpriteAt(tx, ty)) {
                    return this.sprites[i];
                }
            }
        }
        return null;
    }
}

/**
 * Game Loop
 */
class Game {
    /**
     * @param {*} canvavs   The canvas element
     * @param {*} resources  Game resources
     */
    constructor(canvas, resources) {
        this.state = GAME_STATE_INTRO;
        this.engine = new Engine(canvas, resources);
        this.createIntro();
        this.gameloop = this.gameloop_.bind(this); // jshint ignore:line
        this.gameloop();
    }

    gameloop_() {
        switch (this.state) {
            case GAME_STATE_INTRO:
                this.doIntro();
                break;
            case GAME_STATE_PLAY:
                this.engine.draw();
                this.engine.move();
                break;
        }
        window.requestAnimationFrame(this.gameloop);
    }

    createIntro() {
        this.intro = new AnimSprite(null, this.engine, 'img_intro', 0, 0, 544, 416, 0, 0, 0, 0, false);
        this.start = new AnimSprite(null, this.engine, 'img_start', 7, 11, 140, 26, -10, 0, 0, 1, true);
        this.start.animDelay = ANIM_STANDARD_DELAY * 20;
    }

    doIntro() {
        this.intro.draw();
        this.start.draw();

        if (this.engine.keyboard.enter) {
            this.state = GAME_STATE_PLAY;
            this.engine.sound.soundrack();
        }
    }
}
