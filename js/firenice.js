

'use strict';

var TILE_WIDTH = 32;
var GAME_FPS = 40;
var MOVE_STAND = 0;
var MOVE_LEFT = 1;
var MOVE_RIGHT = 2;
var MOVE_DOWN = 3;
var MOVE_UP = 4;
var MOVE_TURN = 5;
var MOVE_ICE_MAKE = 6;
var MOVE_ICE_REMOVE = 7;
var MOVE_ICE_MOVING = 8;
var MOVE_ICE_CHECK = 9;
var MOVE_PUSH = 8;

var DIR_LEFT = -1;
var DIR_RIGHT = 1;

var ANIM_STANDARD_DELAY = 2;
var ANIM_FRAME_COUNT = 16;
var ANIM_LEFT_ROW = 1;
var ANIM_RIGHT_ROW = 0;
var ANIM_RUN_START = 0;
var ANIM_RUN_END = 3;
var ANIM_STAND = 4;
var ANIM_TURN_START = 4;
var ANIM_TURN_END = 7;
var ANIM_FALL_START = 8;
var ANIM_FALL_END = 9;
var ANIM_BIG_FALL_START = 10;
var ANIM_BIG_FALL_END = 11;
var ANIM_PUSH_START = 12;
var ANIM_PUSH_END = 13;
var ANIM_JUMP_START = 14;
var ANIM_JUMP_END = 15;
var ANIM_STAND_START = 16;
var ANIM_STAND_END = 17;
var ANIM_ICE_START = 18;
var ANIM_ICE_END = 19;
var ANIM_CROUCH_START = 20;
var ANIM_CROUCH_END = 22;

var TILE_MIDDLE = 0;
var TILE_LEFT = 32;
var TILE_RIGHT = 64;
var TILE_BOTH = 96;
var TILE_TOP = 128;
var TILE_BOTTOM = 160;

var OBJECT_BACKGROUND = 0;
var OBJECT_NULL = 999;
var OBJECT_WALL = 1;
var OBJECT_FIRE = 666;
var OBJECT_ICE = 333;
var OBJECT_OUT = 255;
var OBJECT_PLAYER = 777;




/**
* Inheritance Mechanism
* @param  {class} Parent  The parrent class
*/
Function.prototype.inherits = function(Parent){
    this.prototype = Object.create(Parent.prototype);
    this.prototype.constructor = this;
};

/**
* Stores position of the corners and vertices
*/
var Position = function(){
    this.u = 0;
    this.d = 0;
    this.l = 0;
    this.r = 0;
    this.ul = 0;
    this.ur = 0;
    this.dl = 0;
    this.dr = 0;
};

var Coor = function(tx,ty){
    this.xtile = tx;
    this.ytile = ty;
};

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





/**
 * Keyboard press engine
 */
var Keyboard = function(){
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.keydown = this.keydown_.bind(this);
    this.keyup = this.keyup_.bind(this);
    window.addEventListener('keydown', this.keydown, false);
    window.addEventListener('keyup', this.keyup, false);
};

Keyboard.prototype.keydown_ = function(e) {
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
            this.down = true;
            break;
        case 13: //Enter
            this.enter = false;
            break;
    }
};

Keyboard.prototype.keyup_ = function(e) {
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
            this.down = false;
            break;
        case 13: //Enter
            this.enter = true;
            break;
    }
};





var Tile = new (function(){ // jshint ignore:line
    this.tiles = {};
    this.tiles[OBJECT_BACKGROUND] = {
        image: document.getElementById('img_bg'),
        solid: false
    };
    this.tiles[OBJECT_OUT] = {
        image: false,
        solid: true
    };
    this.tiles[OBJECT_PLAYER] = {
        image: false,
        solid: true
    };
    this.tiles[OBJECT_ICE] = {
        image: false,
        solid: true
    };
    this.tiles[OBJECT_WALL] = {
        image: document.getElementById('img_tile'),
        solid: true
    };
    this.tiles[OBJECT_NULL] = {
        image: false,
        solid: false
    };
    this.tiles[OBJECT_FIRE] = {
        image: false,
        solid: false
    };

    this.isSolid = function(id){
        if (typeof this.tiles[id] == "undefined") {
            console.log('UNDEFINED ON tiles');
            throw new Error('UNDEFINED ON isSolid');
        } else {
            return this.tiles[id].solid;
        }
    };

    this.getImage = function(id){
        if (typeof this.tiles[id] == "undefined") {
            console.log('UNDEFINED ON tiles get Image');
            throw new Error('UNDEFINED ON tiles get Image');
        } else {
            return this.tiles[id].image;
        }
    };

})();





/**
 * Tilemap class
 * @param {object} engine Engine
 * @param {object} map  Matrix of the map
 */
var TileMap = function(engine, map){
    this.ctx = engine.ctx;
    this.background = this.ctx.createPattern(Tile.getImage(OBJECT_BACKGROUND), 'repeat');
    this.map = map;
    this.engine = engine;
    this.tileWidth = TILE_WIDTH;
    this.tileHeight = TILE_WIDTH;
    this.height = this.map.length - 1;
    this.width = this.map[0].length - 1;
};
/**
 * Returns the content of the tile inside the matrix
 * if position out of bounds returns OBJECT_OUT
 * @param  {number} y position
 * @param  {number} x position
 * @return {number}   Content of the tile
 */
TileMap.prototype.getTile = function(x, y) {
    if(x < 0 || y < 0 || x > this.width || y > this.height){
        return OBJECT_OUT;
    }
    return this.map[y][x];

};
/**
 * Draws the map
 * @return {none}
 */
TileMap.prototype.draw = function() {
    var state = TILE_MIDDLE;
    this.ctx.save();
    this.ctx.fillStyle = this.background;
    this.ctx.fillRect(0,0,this.engine.cwidth,this.engine.cheight);
    for(var i = 0; i <= this.width; ++i){
        for(var j = 0; j <= this.height; ++j){
            if(this.map[j][i] && Tile.getImage(this.map[j][i])){
                if(this.map[j][i] == 1){
                    if(!this.getTile(i-1, j) && !this.getTile(i+1, j)){
                        state = TILE_BOTH;
                    } else if(!this.getTile(i-1, j)){
                        state = TILE_LEFT;
                    }else if(!this.getTile(i+1, j)){
                        state = TILE_RIGHT;
                    }else{
                        state = TILE_MIDDLE;
                    }
                } else {
                    state = 0;
                }
                this.ctx.drawImage(Tile.getImage(this.map[j][i]), state, 0, this.tileWidth, this.tileHeight, i*this.tileWidth, j*this.tileHeight, this.tileWidth, this.tileHeight);
            }
        }
    }
    this.ctx.restore();
};
TileMap.prototype.move = function(){};
TileMap.prototype.engineMove = function(){};







/**
 * Base class of the sprite
 * @param {object} engine   Engine Engine
 * @param {number} tx     Position tile x in the map
 * @param {number} ty     Position tile y in the map
 * @param {number} width  Width of the sprite
 * @param {number} height Height of the sprite
 */

var Sprite = function(id, engine, tx, ty, width, height){
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
};
/**
 * Sets sprite states
 * @param {number} state  Constant of the state
 * @param {boolean} moving True if sprite is moving
 */
Sprite.prototype.setState = function(state, moving) {
    this.moving = (typeof moving === 'undefined') ? false : moving;
    this.state = state;
    this.counter = 0;
};

Sprite.prototype.getTile = function(tx, ty){
    return this.engine.map.getTile(tx, ty);
};
Sprite.prototype.isSpriteAt  = function(tx, ty){
    return this.xtile == tx && this.ytile == ty;
};

Sprite.prototype.spriteAt = function(tx, ty) {
    return this.engine.spriteAt(tx, ty);
};
Sprite.prototype.move = function (){};

Sprite.prototype.engineMove = function(){
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
};




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
var AnimSprite = function(id, engine, image, tx, ty, width, height, offsetX, offsetY, start, end, loop){
    Sprite.call(this, id, engine, tx, ty, width, height);
    this.image = document.getElementById(image);
    this.animLoop = loop;
    this.animStart = start;
    this.animEnd = end;
    this.animCount = 0;
    this.animDelay = ANIM_STANDARD_DELAY;
    this.animDelayCount = 0;
    this.animRow = 0;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
};
AnimSprite.inherits(Sprite);

/**
 * Sets the sprite animation frames
 * @param {number} start Start frame of the animation
 * @param {number} end   End frame of the animation
 * @param {boolean} loop  If true, animation will loop
 * @param {number} row   Row of the frames in the sprite image
 * @param {number} delay Delay between each frame
 * @param {boolean} once  Sets all the new values only one time.
 */
AnimSprite.prototype.setAnim = function(start, end, loop, row, delay, once){
    var _once = (typeof once === 'undefined') ? false : once;
    var _delay = (typeof delay === 'undefined') ? ANIM_STANDARD_DELAY : delay;
    var _row = (typeof row === 'undefined') ? this.animRow : row;
    if(!_once){
        this.animStart = start;
        this.animEnd = end;
        this.animCount = start;
        this.animLoop = loop;
        this.animDelay = _delay;
        this.animRow = _row;
    } else {
        if(this.animStart != start || this.animEnd != end || this.animLoop != loop || this.animRow != _row){
            this.animStart = start;
            this.animEnd = end;
            this.animCount = start;
            this.animLoop = loop;
            this.animDelay = _delay;
            this.animRow = _row;
        }
    }

};
/**
 * Draws the frame of the sprite in the canvas
 */
AnimSprite.prototype.draw = function() {
    this.ctx.save();
    this.ctx.drawImage(this.image, this.animCount*this.width, this.animRow * this.height, this.width, this.height, this.x+this.offsetX, this.y+this.offsetY, this.width, this.height);
    if(this.animDelayCount++ > this.animDelay){
        if(++this.animCount > this.animEnd){
            if(this.animLoop){
                this.animCount = this.animStart;
            }else{
                this.animCount = this.animEnd;
            }
        }
        this.animDelayCount = 0;
    }
    this.ctx.restore();
};







var Player = function(engine, tx, ty){
    AnimSprite.call(this, this.id, engine, 'img_dona', tx, ty, 48, 64, -10, -32, 2, 2, false);
    this.id = OBJECT_PLAYER;
    this.speed = 2;
    this.maxSpeed = 4;
    this.dirrection = 1;
    this.state = 0; //standing top right down left
    this.moving = false;
    this.tileWidth = TILE_WIDTH;
    this.tileHeight = TILE_WIDTH;
    this.animDelay = 3;
    this.counter = 0;
    this.fallCounter = 0;
    return this;
};
Player.inherits(AnimSprite);

Player.prototype.left = function() {
    if(!this.moving){
        //if standing then turn
        if(this.dirrection != DIR_LEFT){
            //is not under a brick
            if(!Tile.isSolid(this.coorners.u)){
                this.setAnim(ANIM_TURN_START, ANIM_TURN_END, false, ANIM_RIGHT_ROW, 4);
            }else{
                this.setAnim(ANIM_CROUCH_START,ANIM_CROUCH_START, false, ANIM_LEFT_ROW, 4);
            }
            this.setState(MOVE_TURN, true);
            this.dirrection = DIR_LEFT;
        } else{
            //running
            if (!Tile.isSolid(this.coorners.l) && Tile.isSolid(this.coorners.d)) {
                //not under a brick
                if(!Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ul)){
                    this.setAnim(ANIM_RUN_START, ANIM_RUN_END, false, ANIM_LEFT_ROW);
                }else{
                    this.setAnim(ANIM_CROUCH_START, ANIM_CROUCH_END, false, ANIM_LEFT_ROW);
                }
                this.setState(MOVE_LEFT, true);
            }
            //hit an ice
            if(this.coorners.l == OBJECT_ICE){
                this.push();
            }
            //climbe
            if (Tile.isSolid(this.coorners.l) && Tile.isSolid(this.coorners.d)  && !Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ul) && !this.moving) {
                this.setAnim(ANIM_PUSH_START,ANIM_PUSH_START,false, ANIM_LEFT_ROW);
                this.setState(MOVE_UP, true);
            }
        }
    }
};
Player.prototype.right = function() {
    if(!this.moving){
        if(this.dirrection != DIR_RIGHT){
            if(!Tile.isSolid(this.coorners.u)){
                this.setAnim(ANIM_TURN_START, ANIM_TURN_END, false, ANIM_LEFT_ROW, 4);
            }else{
                this.setAnim(ANIM_CROUCH_START,ANIM_CROUCH_START, false, ANIM_RIGHT_ROW, 4);
            }
            this.setState(MOVE_TURN, true);
            this.dirrection = DIR_RIGHT;
        } else{
            if (!Tile.isSolid(this.coorners.r) && Tile.isSolid(this.coorners.d)) {
                if(!Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ur)){
                    this.setAnim(ANIM_RUN_START, ANIM_RUN_END, false, ANIM_RIGHT_ROW);
                }else{
                    this.setAnim(ANIM_CROUCH_START, ANIM_CROUCH_END, false, ANIM_RIGHT_ROW);
                }
                this.setState(MOVE_RIGHT, true);
            }
            if(this.coorners.r == OBJECT_ICE){
                this.push();
            }
            if (Tile.isSolid(this.coorners.r) && Tile.isSolid(this.coorners.d) && !Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ur) && !this.moving) {
                this.setAnim(ANIM_PUSH_START,ANIM_PUSH_START,false, ANIM_RIGHT_ROW);
                this.setState(MOVE_UP, true);
            }
        }
    }
};
Player.prototype.gravity = function() {
    if(!this.moving){
        if(typeof this.coorners.d == "undefined"){
            console.log('UNDEFINEDDDD');
            console.log(this.engine);
        }
        if (!Tile.isSolid(this.coorners.d)) {
            this.setState(MOVE_DOWN, true);
            if(this.fallCounter >= 2){
                this.setAnim(ANIM_FALL_START,ANIM_FALL_END,true, ANIM_RIGHT_ROW);
            } else {
                this.setAnim(ANIM_BIG_FALL_START,ANIM_BIG_FALL_END,true, ANIM_RIGHT_ROW);
            }
        } else {
            this.fallCounter = 0;
            this.setState(MOVE_STAND, false);
        }
    }
};
Player.prototype.ice = function() {
    if(!this.moving){
        if(Tile.isSolid(this.coorners.d)){
            if(this.dirrection == DIR_RIGHT){
                if (!Tile.isSolid(this.coorners.dr) && this.coorners.dr != OBJECT_FIRE) {
                    this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_RIGHT_ROW, 4);
                    this.setState(MOVE_ICE_MAKE, true);
                }else if(this.coorners.dr == OBJECT_ICE){
                    this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_RIGHT_ROW, 4);
                    this.setState(MOVE_ICE_REMOVE, true);
                }
            } else {
                if (!Tile.isSolid(this.coorners.dl) && (this.coorners.dl != OBJECT_FIRE)) {
                    this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_LEFT_ROW, 4);
                    this.setState(MOVE_ICE_MAKE, true);
                }else if(this.coorners.dl == OBJECT_ICE){
                    this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_LEFT_ROW, 4);
                    this.setState(MOVE_ICE_REMOVE, true);
                }
            }
        }
    }
};
Player.prototype.jump = function() {
    if(!this.moving){
        if(this.dirrection == DIR_RIGHT){
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
};

Player.prototype.doRun = function() {
    this.counter++;
    if(this.counter <= ANIM_FRAME_COUNT){
        this.x += this.speed * this.dirrection;
    } else {
        this.setState(MOVE_STAND, false);
    }
};
Player.prototype.doTurn = function() {
    this.counter++;
    if(this.counter >= ANIM_FRAME_COUNT){
        this.setState(MOVE_STAND, false);
    }
};

Player.prototype.doGravity = function() {
    this.counter++;
    if(this.counter <= ANIM_FRAME_COUNT){
        this.y += this.speed;
    } else {
        this.moving = false;
        this.gravity();
        this.fallCounter++;
    }
};
Player.prototype.doStand = function() {
    if(!Tile.isSolid(this.coorners.u)){
        this.setAnim(ANIM_STAND_START,ANIM_STAND_END,true, this.dirrection != 1 ? ANIM_LEFT_ROW : ANIM_RIGHT_ROW, 8, true);
    }else{
        this.setAnim(ANIM_CROUCH_START,ANIM_CROUCH_START, false, this.dirrection != 1 ? ANIM_LEFT_ROW : ANIM_RIGHT_ROW, 8, true);
    }
};

Player.prototype.doUp = function() {
    if(++this.counter <= 18){
        switch (this.counter) {
            case 3:
                this.setAnim(ANIM_PUSH_END, ANIM_PUSH_END, false, this.dirrection == DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                break;
            case 6:
                this.setAnim(ANIM_JUMP_START, ANIM_JUMP_START, false, this.dirrection == DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                this.x += 8 * this.dirrection;
                this.y -= 8;
                break;
            case 9:
                this.setAnim(ANIM_JUMP_END, ANIM_JUMP_END, false, this.dirrection == DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                this.x += 8 * this.dirrection;
                this.y -= 8;
                break;
            case 12:
                this.setAnim(2, 2, false, this.dirrection == DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                this.x += 8 * this.dirrection;
                this.y -= 8;
                break;
            case 18:
                this.setAnim(ANIM_STAND, ANIM_STAND, false, this.dirrection == DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                this.x += 8 * this.dirrection;
                this.y -= 8;
            break;
        }
    } else {
        this.setState(MOVE_STAND, false);
    }
};
Player.prototype.makeIce = function() {
    this.engine.addIce(this.xtile + this.dirrection, this.ytile+1);
    this.engine.addSfx(new Sparks(this.engine, this.xtile + this.dirrection, this.ytile + 1));
};
Player.prototype.removeIce = function() {
    this.engine.removeIce(this.xtile + this.dirrection, this.ytile+1);
    this.engine.addSfx(new Sparks(this.engine, this.xtile + this.dirrection, this.ytile + 1));
};
Player.prototype.push = function() {
    var ice =  this.engine.iceAt(this.xtile+this.dirrection, this.ytile);
    if(ice && ice.canGlide(this.dirrection)){
        this.setAnim(ANIM_PUSH_START, ANIM_PUSH_END, false, this.dirrection == DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW, 3);
        this.setState(MOVE_PUSH, true);
    }
};
Player.prototype.doPush = function() {
    this.counter += 4;
    if(this.counter <= TILE_WIDTH){
    } else {
        var ice =  this.engine.iceAt(this.xtile+this.dirrection, this.ytile);
        if(ice){
            ice.push(this.dirrection);
        }
        this.setState(MOVE_STAND, false);
    }
};
Player.prototype.doIce = function() {
    this.counter += 2;
    if(this.counter <= TILE_WIDTH){
    } else {
        this.counter = 0;
        if(this.state == MOVE_ICE_MAKE){
            this.makeIce();
        } else{
            this.removeIce();
        }
        this.setState(MOVE_STAND, false);
    }
};
Player.prototype.draw = function(){
    AnimSprite.prototype.draw.call(this);
};
Player.prototype.move = function (){
    Sprite.prototype.move.call(this);
    this.gravity();
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
        case MOVE_STAND:
            this.doStand();
            break;
        case MOVE_PUSH:
            this.doPush();
            break;
    }
};





/**
 * [Fire description]
 * @param {[type]} engine  [description]
 * @param {[type]} tx    [description]
 * @param {[type]} ty    [description]
 * @param {[type]} start [description]
 * @param {[type]} end   [description]
 */

var Fire = function(engine, tx, ty){
    this.id = OBJECT_FIRE;
    AnimSprite.call(this, this.id, engine, 'img_fire', tx, ty, TILE_WIDTH, TILE_WIDTH, 0, 0, 0, 3, true);
};
Fire.inherits(AnimSprite);
Fire.prototype.move = function() {
    if(!this.moving){
        this.gravity();
    }
    switch (this.state){
        case MOVE_DOWN:
            this.doDown();
            break;
    }
};
Fire.prototype.gravity = function() {
    if(!this.coorners.d){
        this.setState(MOVE_DOWN, true);
        return true;
    }
    return false;
};
Fire.prototype.doDown = function(){
    this.counter += 4;
    if(this.counter <= TILE_WIDTH){
        this.y += 4;
    } else {
        this.setState(MOVE_STAND, false);
    }
};
Fire.prototype.draw = function(){
    AnimSprite.prototype.draw.call(this);
    if(this.spriteAt(this.xtile, this.ytile+1) == OBJECT_ICE){
        this.ctx.strokeStyle = "red";
        this.ctx.strokeRect(this.xtile*32, this.ytile*32,32,32);
    }
};





var Ice = function(engine, tx, ty, length, frozen){
    var _length = (typeof length === 'undefined') ? 1 : length;
    AnimSprite.call(this, this.id, engine, 'img_ice', tx, ty, TILE_WIDTH, TILE_WIDTH, 0, 0, 0, 1, true);
    this.xtile = tx;
    this.ytile = ty;
    this.frozen = (typeof frozen === 'undefined') ? false : frozen;
    this.length = length;
    this.animEnd = 1;
    this.animDelay = 9;
    this.animRow = 0;
    this.old_tx = 0;
    this.old_ty = 0;
    this.dirrection = 0;
    this.id = OBJECT_ICE;
    if((this.getTile(this.xtile-1, this.ytile) == OBJECT_WALL) || (this.getTile(this.xtile+this.length, this.ytile) == OBJECT_WALL)){
        this.frozen = true;
    } else{
        this.frozen = false;
    }
};
Ice.inherits(AnimSprite);

Ice.prototype.add = function(tx) {
    if((tx > this.xtile && this.getTile(tx+1, this.ytile) == OBJECT_WALL) || (tx < this.xtile && this.getTile(tx-1, this.ytile) == OBJECT_WALL)){
        this.frozen = true;
    }
    this.xtile = tx < this.xtile ? tx : this.xtile;
    this.x = this.xtile * TILE_WIDTH;
    this.length++;
};
Ice.prototype.isSpriteAt = function(tx, ty){
    if(this.ytile == ty){
        if(tx >= this.xtile && tx < (this.xtile + this.length)){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

};

Ice.prototype.remove = function(tx) {
    if(tx == this.xtile){
        this.xtile += 1;
        this.x += TILE_WIDTH;
        this.length--;
    }else if(tx == this.xtile+this.length-1){
        this.length--;
    }else{
        this.engine.addSprite(new Ice(this.engine, tx+1, this.ytile, this.xtile+this.length-tx-1));
        this.length = tx - this.xtile;
    }
    return this.length;
};

Ice.prototype.canGlide = function(dir){
    if(this.length != 1 || this.frozen){
        return false;
    }
    if(dir == DIR_LEFT  && Tile.isSolid(this.coorners.l)){
        return false;
    }
    if(dir == DIR_RIGHT && Tile.isSolid(this.coorners.r)){
        return false;
    }
    return true;
};

Ice.prototype.gravity = function() {
    if(!this.coorners.d && !this.frozen){
        this.setState(MOVE_DOWN, true);
        return true;
    }
    return false;
};

Ice.prototype.collision = function(){
    if(!this.canGlide(this.dirrection)){
        this.dirrection = 0;
        this.setState(MOVE_STAND, false);
        return true;
    }
    if(this.gravity()){
        return true;
    }
    return false;
};

Ice.prototype.move = function() {
    for(var i = 0; i < this.length; i++){
        var tile_down = this.spriteAt(this.xtile+i, this.ytile+1);
        if(tile_down && tile_down != OBJECT_FIRE){
            this.coorners.d = tile_down;
        }

    }
    if(this.coorners.d == OBJECT_FIRE){
        this.coorners.d = OBJECT_BACKGROUND;
    }
    this.coorners.r = this.spriteAt(this.xtile+this.length, this.ytile);

    if(this.frozen){
        if(this.getTile(this.xtile-1, this.ytile) != OBJECT_WALL && this.getTile(this.xtile+this.length, this.ytile) != OBJECT_WALL){
            this.frozen = false;
        }
    }

    if(!this.moving){
        this.gravity();
    }
    switch (this.state){
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
};

Ice.prototype.draw = function() {
    this.ctx.save();
    if(this.animDelayCount++ > this.animDelay){
        this.animDelayCount = 0;
        this.animRow = this.animRow == 0 ? 1 : 0;
    }
    if(this.length == 1){
        this.ctx.drawImage(this.image, 0, TILE_WIDTH*this.animRow, this.width, this.height,  this.x, this.y, this.width, this.height);
    }else if(this.length == 2){
        this.ctx.drawImage(this.image, 1*TILE_WIDTH, TILE_WIDTH*this.animRow, this.width, this.height,  this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.image, 3*TILE_WIDTH, TILE_WIDTH*this.animRow, this.width, this.height,  this.x+TILE_WIDTH, this.y, this.width, this.height);
    }else{
        this.ctx.drawImage(this.image, 1*TILE_WIDTH, TILE_WIDTH*this.animRow, this.width, this.height,  this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.image, 3*TILE_WIDTH, TILE_WIDTH*this.animRow, this.width, this.height,  this.x+TILE_WIDTH*(this.length-1), this.y, this.width, this.height);
        for(var i = 1;  i < this.length-1; i++){
            this.ctx.drawImage(this.image, 2*TILE_WIDTH, TILE_WIDTH*this.animRow, this.width, this.height,  this.x+(TILE_WIDTH*i), this.y, this.width, this.height);
        }
    }
    if(this.frozen){
        this.ctx.fillStyle = "rgba(255,255,255,0.95)";
        if(this.getTile(this.xtile-1, this.ytile) == OBJECT_WALL){
            this.ctx.fillRect((this.xtile*this.width)-7, 3+this.ytile*this.height, 18,this.height-6);
        }
        if(this.getTile(this.xtile+this.length, this.ytile) == OBJECT_WALL){
            this.ctx.fillRect((this.xtile+this.length)*this.width-7, 3+this.ytile*this.height, 18, this.height-6);
        }

    }

    this.ctx.restore();
};
Ice.prototype.glide = function(){
    this.counter += 4;
    if(this.counter <= TILE_WIDTH){
        this.x += 4 * this.dirrection;
    } else {
        this.push();
    }
};
Ice.prototype.doDown = function(){
    this.counter += 4;
    if(this.counter <= TILE_WIDTH){
        this.y += 4;
    } else {
        this.setState(MOVE_STAND, false);
    }
};
Ice.prototype.push = function(dir) {
    this.dirrection = (typeof dir === 'undefined') ? this.dirrection : dir;
    if(!this.collision()){
        this.moving = true;
        this.setState(MOVE_ICE_MOVING, true);
    }else{
        this.setState(MOVE_STAND, false);
    }
};






var Particle = function(ctx, x, y, color){
    this.color = (typeof color === 'undefined') ? '255,255,255' : color;
    this.r = 2;
    this.x = x;
    this.y = y;
    this.vx = Math.random() * 4 - 2;
    this.vy = Math.random() * 6 - 4;
    this.speed = 0.15;
    this.life = 255;
    this.ctx = ctx;
};
Particle.prototype.draw = function() {
    var opacity = this.life / 255;
    this.ctx.beginPath();
    this.ctx.fillStyle = 'rgba(' + this.color+','+opacity+')';
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();
};
Particle.prototype.move = function() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.speed;
    this.life -= 5;
};
var Sparks = function(engine, tx,ty,color, length){
    this.color = (typeof color === 'undefined') ? '255,255,255' : color;
    this.length = (typeof color === 'undefined') ? 10 : length;
    Sprite.call(this, null, engine, tx, ty, 32, 32);
    this.particles = [];
    for(var i=0; i<=this.length; i++){
        this.particles[i] = new Particle(this.engine.ctx, tx*TILE_WIDTH+16, ty*TILE_WIDTH+16, this.color);
    }
};
Sparks.inherits(Sprite);

Sparks.prototype.draw = function() {
    this.engine.ctx.save();
    for(var i=0; i<this.particles.length; i++){
        this.particles[i].draw();
    }
    this.engine.ctx.restore();
};

Sparks.prototype.engineMove = function(){
    this.move();
};
Sparks.prototype.move = function() {
    for(var i=0; i<this.particles.length; i++){
        this.particles[i].move();
        if(this.particles[i].life < 0){
            this.particles.splice(i,1);
        }
    }
    if(!this.particles.length){
        this.engine.removeSfx(this);
    }
};


var levels = [
	{"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"sprites":[{"id":"777","x":"11","y":"4","l":"1"},{"id":"333","x":"5","y":"9","l":"1"},{"id":"333","x":"5","y":"8","l":"1"},{"id":"333","x":"5","y":"7","l":"1"},{"id":"333","x":"5","y":"6","l":"1"},{"id":"666","x":"6","y":"4","l":"1"},{"id":"333","x":"8","y":"4","l":"1"},{"id":"666","x":"7","y":"9","l":"1"},{"id":"666","x":"7","y":"8","l":"1"},{"id":"666","x":"7","y":"7","l":"1"},{"id":"666","x":"9","y":"10","l":"1"}],"image":"base64","category":"0","world":"0","name":"","theme":"0"},
	{"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"sprites":[{"id":"777","x":"3","y":"7","l":"1"},{"id":"666","x":"6","y":"7","l":"1"},{"id":"666","x":"12","y":"8","l":"1"},{"id":"666","x":"11","y":"8","l":"1"},{"id":"666","x":"11","y":"7","l":"1"},{"id":"666","x":"11","y":"6","l":"1"},{"id":"333","x":"4","y":"7","l":"1"},{"id":"333","x":"10","y":"8","l":"1"},{"id":"333","x":"10","y":"7","l":"1"},{"id":"333","x":"10","y":"6","l":"1"},{"id":"333","x":"9","y":"5","l":"4"}],"image":"base64","category":"0","world":"0","name":"","theme":"0"},
	{"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1],[1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1],[1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"sprites":[{"id":"777","x":"14","y":"6","l":"1"},{"id":"666","x":"10","y":"9","l":"1"},{"id":"333","x":"5","y":"4","l":"1"},{"id":"666","x":"9","y":"6","l":"1"},{"id":"666","x":"9","y":"5","l":"1"},{"id":"333","x":"11","y":"6","l":"1"},{"id":"333","x":"11","y":"5","l":"1"},{"id":"333","x":"8","y":"6","l":"1"}],"image":"base64","category":"0","world":"0","name":"","theme":"0"},
	{"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"sprites":[{"id":"777","x":"8","y":"9","l":"1"},{"id":"666","x":"12","y":"8","l":"1"},{"id":"666","x":"13","y":"7","l":"1"},{"id":"666","x":"11","y":"9","l":"1"},{"id":"333","x":"6","y":"8","l":"5"},{"id":"333","x":"10","y":"9","l":"1"},{"id":"333","x":"10","y":"7","l":"3"},{"id":"333","x":"12","y":"6","l":"2"},{"id":"333","x":"6","y":"9","l":"1"},{"id":"333","x":"4","y":"7","l":"3"},{"id":"333","x":"3","y":"6","l":"2"},{"id":"666","x":"5","y":"9","l":"1"},{"id":"666","x":"4","y":"8","l":"1"},{"id":"666","x":"3","y":"7","l":"1"}],"image":"base64","category":"0","world":"0","name":"","theme":"0"},
	{"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1],[1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1],[1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"sprites":[{"id":"777","x":"13","y":"7","l":"1"},{"id":"333","x":"10","y":"10","l":"3"},{"id":"333","x":"10","y":"9","l":"3"},{"id":"333","x":"7","y":"7","l":"1"},{"id":"333","x":"10","y":"8","l":"3"},{"id":"333","x":"3","y":"5","l":"1"},{"id":"333","x":"9","y":"7","l":"1"},{"id":"666","x":"3","y":"10","l":"1"},{"id":"333","x":"3","y":"4","l":"1"}],"image":"base64","category":"0","world":"0","name":"","theme":"0"},{"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1],[1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"sprites":[{"id":"777","x":"3","y":"6","l":"1"},{"id":"666","x":"13","y":"10","l":"1"},{"id":"333","x":"5","y":"6","l":"4"}],"image":"base64","category":"0","world":"0","name":"","theme":"0"},
	{"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"sprites":[{"id":"777","x":"5","y":"4","l":"1"},{"id":"666","x":"5","y":"8","l":"1"},{"id":"333","x":"8","y":"5","l":"1"},{"id":"333","x":"8","y":"4","l":"1"},{"id":"666","x":"11","y":"8","l":"1"}],"image":"base64","category":"0","world":"0","name":"","theme":"0"},
	{"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1],[1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1],[1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1],[1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1],[1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"sprites":[{"id":"777","x":"5","y":"10","l":"1"},{"id":"666","x":"2","y":"10","l":"1"},{"id":"333","x":"3","y":"3","l":"1"},{"id":"666","x":"14","y":"5","l":"1"},{"id":"666","x":"12","y":"11","l":"1"}],"image":"base64","category":"0","world":"0","name":"","theme":"0"},
	{"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1],[1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1],[1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"sprites":[{"id":"777","x":"13","y":"2","l":"1"},{"id":"333","x":"4","y":"4","l":"8"},{"id":"333","x":"11","y":"3","l":"4"},{"id":"666","x":"3","y":"5","l":"1"},{"id":"666","x":"4","y":"6","l":"1"},{"id":"666","x":"5","y":"7","l":"1"},{"id":"666","x":"10","y":"6","l":"1"},{"id":"666","x":"11","y":"5","l":"1"},{"id":"666","x":"14","y":"10","l":"1"},{"id":"666","x":"14","y":"9","l":"1"},{"id":"666","x":"2","y":"10","l":"1"},{"id":"666","x":"9","y":"8","l":"1"},{"id":"666","x":"2","y":"9","l":"1"},{"id":"666","x":"8","y":"8","l":"1"},{"id":"666","x":"7","y":"8","l":"1"},{"id":"666","x":"6","y":"8","l":"1"},{"id":"666","x":"8","y":"10","l":"1"},{"id":"666","x":"7","y":"10","l":"1"}],"image":"base64","category":"0","world":"0","name":"","theme":"0"}
];



/**
 * Engine Loop
 */
var Engine = function(){
    this.canvas = document.getElementById('canvas');
    this.cwidth = canvas.width;
    this.cheight = canvas.height;
    this.ctx = this.canvas.getContext('2d');
    this.fps = 30;
    this.skipFrame = false;
    this.dificulty = 30;
    this.delay = 0;
    this.engineState = 'play';
    this.lastTime = (new Date()).getTime();
    this.currTime = 0,
    this.gameloop = this.gameloop_.bind(this); // jshint ignore:line
    this.sprites = [];
    this.sfxs = [];
    this.level = 0;

    this.init();
};



Engine.prototype.gameloop_ = function() {
    window.requestAnimationFrame(this.gameloop);
    this.doGame();
};

Engine.prototype.doGame = function(){
    this.draw();
    this.move();
};

Engine.prototype.draw = function() {
    this.ctx.clearRect(0,0,this.cw,this.ch);
    this.map.draw();
    for (var i = 0; i < this.sprites.length; ++i){
        this.sprites[i].draw();
    }
    for (i = 0; i < this.sfxs.length; ++i){
        this.sfxs[i].draw();
    }
};


Engine.prototype.collision = function() {
    var fires = false;
    for (var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i] instanceof Fire){
            fires = true;
            var fire = this.sprites[i];
            for (var j = 0; j < this.sprites.length; j++){
                if(this.sprites[j] instanceof Ice){

                    var ice = this.sprites[j];

                    if(fire.xtile >= ice.xtile && fire.xtile < ice.xtile+ice.length  && fire.ytile  == ice.ytile){
                        this.removeFire(fire.xtile, fire.ytile);
                        this.removeIce(fire.xtile, fire.ytile);
                        this.addSfx(new Sparks(this, fire.xtile, fire.ytile, '255, 87, 34', 20));
                        this.addSfx(new Sparks(this, fire.xtile, fire.ytile, '255, 122, 88', 20));
                        //this.fires.splice(i,1);
                        return true;
                    }
                }
            }
        }
    }
    if(!fires){
        this.level++;
        this.load(levels[this.level]);
        this.addSfx(new Sparks(this, this.player.xtile, this.player.ytile, '255,255,255', 200));
    }
};

Engine.prototype.move = function() {
    var objectsMoving = false;
    for(var i = 0; i < this.sprites.length; ++i){
        if(!(this.sprites[i] instanceof Player) && this.sprites[i].moving) objectsMoving = true;
        this.sprites[i].engineMove();
    }
    for(i = 0; i < this.sfxs.length; ++i){
        this.sfxs[i].engineMove();
    }
    if(!objectsMoving){
        if(this.keyboard.up){
            //this.player.jump();
        }
        if(this.keyboard.down){
            this.player.ice();
        }
        if(this.keyboard.left){
            this.player.left();
        }
        if(this.keyboard.right){
            this.player.right();
        }
    }
    this.collision();
};

Engine.prototype.iceAt = function(tx, ty){
    for (var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i].isSpriteAt(tx, ty)){
            return this.sprites[i];
        }
    }
    return false;
};

Engine.prototype.addIce = function(tx, ty, frozen) {
    var found = false;
    var j = 0;
    frozen = (typeof length === 'undefined') ? false : frozen;
    for(var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i] instanceof Ice && this.sprites[i].ytile == ty){
            var ice = this.sprites[i];
            if(ice.xtile - 1 == tx || ice.xtile + ice.length == tx){
                if(!found){
                    found = true;
                    j = i;
                }else{
                    this.joinIce(j,i);
                    return;
                }
            }
        }
    }
    if(found){
        this.sprites[j].add(tx);
        return;
    }
    this.sprites.push(new Ice(this, tx, ty, 1, frozen));
};

Engine.prototype.joinIce = function(i,j) {
    var tx = this.sprites[i].xtile <= this.sprites[j].xtile ? this.sprites[i].xtile : this.sprites[j].xtile;
    var ty = this.sprites[i].ytile;
    var length = this.sprites[i].length + this.sprites[j].length +1;
    this.sprites.push(new Ice(this, tx, ty, length));
    if(i>j){
        this.sprites.splice(i,1);
        this.sprites.splice(j,1);
    }else{
        this.sprites.splice(j,1);
        this.sprites.splice(i,1);
    }
};

Engine.prototype.removeIce = function(tx, ty){
    for (var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i] instanceof Ice && this.sprites[i].ytile == ty && tx >= this.sprites[i].xtile && tx < this.sprites[i].xtile + this.sprites[i].length){
            if(this.sprites[i].remove(tx) <= 0){
                this.sprites.splice(i,1);
            }
            return;
        }
    }
};

Engine.prototype.addFire = function(tx, ty){
    this.sprites.push(new Fire(this, tx, ty));
};
Engine.prototype.removeFire = function(tx, ty){
    for (var i = 0; i < this.sprites.length; i++){
        if((this.sprites[i].ytile == ty) && (tx == this.sprites[i].xtile) && (this.sprites[i] instanceof Fire)){
            this.sprites.splice(i,1);
            return;
        }
    }
};

Engine.prototype.addSprite = function(sprite) {
    this.sprites.push(sprite);
};
Engine.prototype.removeSprite = function(tx, ty){
    for (var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i].xtile == tx && this.sprites[i].ytile == ty){
            this.sprites.splice(i,1);
        }
    }
};

Engine.prototype.addSfx = function(sfx) {
    this.sfxs.push(sfx);
};
Engine.prototype.removeSfx = function(sprite){
    for (var i = 0; i < this.sfxs.length; i++){
        if(this.sfxs[i] == sprite){
            this.sfxs.splice(i,1);
            return true;
        }
    }
    return false;
};

Engine.prototype.spriteAt = function(tx, ty){
    if(tx < 0 || ty < 0 || tx > this.map.width || ty > this.map.height){
        return OBJECT_OUT;
    }
    if(!this.map.map[ty][tx]){
        for (var i = 0; i < this.sprites.length; i++){
            if(this.sprites[i].isSpriteAt(tx, ty)){
                return this.sprites[i].id;
            }
        }
    } else {
        return this.map.map[ty][tx];
    }

    return OBJECT_BACKGROUND;
};

Engine.prototype.remove = function(sprite){
    for (var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i] == sprite){
            this.sprites.splice(i,1);
            return true;
        }
    }
    return false;
};
Engine.prototype.save = function(name, theme, category, world){
    var data = {};
    data.map = this.map.map;
    data.sprites = [];
    for (var i = 0; i < this.sprites.length; i++){
        var sprite = this.sprites[i];
        sprite.length = (typeof sprite.length == "undefined") ? 1 : sprite.length;
        data.sprites.push({"id": sprite.id, "x": sprite.xtile, "y": sprite.ytile, "l": sprite.length});
    }
    data.image = this.canvas.toDataURL('image/png').slice(22);
    data.category = (typeof category == "undefined") ? 0 : category;
    data.world = (typeof world == "undefined") ? 0 : world;
    data.name = (typeof name == "undefined") ? '' : name;
    data.theme = (typeof theme == "undefined") ? 0 : theme;
    return data;
};
Engine.prototype.update = function(id){
    var data = this.save();
    $.post(this.base_url+'api/update/'+id, data, function(){
        console.log('updated');
    });
};
Engine.prototype.load = function(data) {
    this.sprites = [];
    this.data = data;
    this.map = new TileMap(this, data.map);
    for(var i = 0; i < data.sprites.length; ++i){
        var sprite = data.sprites[i];
        sprite.x = parseInt(sprite.x);
        sprite.y = parseInt(sprite.y);
        switch(sprite.id){
            case "777":
                this.player = new Player(this, sprite.x, sprite.y);
                this.add(this.player);
                break;
            case "333":
                sprite.l = typeof sprite.l == "undefined" ? 1 : sprite.l;
                this.add(new Ice(this, sprite.x, sprite.y, parseInt(sprite.l)));
                break;
            case "666":
                this.add(new Fire(this, sprite.x, sprite.y));
                break;
        }
    }
};

Engine.prototype.init = function() {
    this.keyboard = new Keyboard();
    this.load(levels[this.level]);
    this.gameloop();
};



Engine.prototype.add = function(sprite){
    this.sprites.push(sprite);
};
