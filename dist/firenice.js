/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/firenice.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animsprite.js":
/*!***************************!*\
  !*** ./src/animsprite.js ***!
  \***************************/
/*! exports provided: AnimSprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimSprite", function() { return AnimSprite; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



class AnimSprite extends _sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"] {
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
        this.animDelay = _constants__WEBPACK_IMPORTED_MODULE_1__["ANIM_STANDARD_DELAY"];
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
        let _delay = (typeof delay === 'undefined') ? _constants__WEBPACK_IMPORTED_MODULE_1__["ANIM_STANDARD_DELAY"] : delay;
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


/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: TILE_WIDTH, MOVE_STAND, MOVE_LEFT, MOVE_RIGHT, MOVE_DOWN, MOVE_UP, MOVE_TURN, MOVE_ICE_MAKE, MOVE_ICE_REMOVE, MOVE_ICE_MOVING, MOVE_ICE_CHECK, MOVE_RIP, MOVE_PUSH, MOVE_ICE_FAIL, MOVE_OUTRO, MOVE_INTRO, DIR_LEFT, DIR_RIGHT, ANIM_STANDARD_DELAY, ANIM_FRAME_COUNT, ANIM_LEFT_ROW, ANIM_RIGHT_ROW, ANIM_RUN_START, ANIM_RUN_END, ANIM_STAND, ANIM_TURN_START, ANIM_TURN_END, ANIM_FALL_START, ANIM_FALL_END, ANIM_BIG_FALL_START, ANIM_BIG_FALL_END, ANIM_PUSH_START, ANIM_PUSH_END, ANIM_JUMP_START, ANIM_JUMP_END, ANIM_STAND_START, ANIM_STAND_END, ANIM_ICE_START, ANIM_ICE_END, ANIM_CROUCH_START, ANIM_CROUCH_END, ANIM_RIP_START, ANIM_RIP_END, ANIM_SLEEP_START, ANIM_SLEEP_END, TILE_BACKGROUND, TILE_BOTH, TILE_LEFT, TILE_MIDDLE, TILE_RIGHT, OBJECT_OUT, OBJECT_BACKGROUND, OBJECT_WALL, OBJECT_ICE, OBJECT_METAL, OBJECT_JAR, OBJECT_FIRE, OBJECT_PLAYER, GAME_STATE_PLAY, GAME_STATE_INTRO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_WIDTH", function() { return TILE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_STAND", function() { return MOVE_STAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_LEFT", function() { return MOVE_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_RIGHT", function() { return MOVE_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_DOWN", function() { return MOVE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_UP", function() { return MOVE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_TURN", function() { return MOVE_TURN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_ICE_MAKE", function() { return MOVE_ICE_MAKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_ICE_REMOVE", function() { return MOVE_ICE_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_ICE_MOVING", function() { return MOVE_ICE_MOVING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_ICE_CHECK", function() { return MOVE_ICE_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_RIP", function() { return MOVE_RIP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_PUSH", function() { return MOVE_PUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_ICE_FAIL", function() { return MOVE_ICE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_OUTRO", function() { return MOVE_OUTRO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_INTRO", function() { return MOVE_INTRO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_LEFT", function() { return DIR_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_RIGHT", function() { return DIR_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_STANDARD_DELAY", function() { return ANIM_STANDARD_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_FRAME_COUNT", function() { return ANIM_FRAME_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_LEFT_ROW", function() { return ANIM_LEFT_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_RIGHT_ROW", function() { return ANIM_RIGHT_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_RUN_START", function() { return ANIM_RUN_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_RUN_END", function() { return ANIM_RUN_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_STAND", function() { return ANIM_STAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_TURN_START", function() { return ANIM_TURN_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_TURN_END", function() { return ANIM_TURN_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_FALL_START", function() { return ANIM_FALL_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_FALL_END", function() { return ANIM_FALL_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_BIG_FALL_START", function() { return ANIM_BIG_FALL_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_BIG_FALL_END", function() { return ANIM_BIG_FALL_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_PUSH_START", function() { return ANIM_PUSH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_PUSH_END", function() { return ANIM_PUSH_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_JUMP_START", function() { return ANIM_JUMP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_JUMP_END", function() { return ANIM_JUMP_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_STAND_START", function() { return ANIM_STAND_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_STAND_END", function() { return ANIM_STAND_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_ICE_START", function() { return ANIM_ICE_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_ICE_END", function() { return ANIM_ICE_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_CROUCH_START", function() { return ANIM_CROUCH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_CROUCH_END", function() { return ANIM_CROUCH_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_RIP_START", function() { return ANIM_RIP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_RIP_END", function() { return ANIM_RIP_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_SLEEP_START", function() { return ANIM_SLEEP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIM_SLEEP_END", function() { return ANIM_SLEEP_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_BACKGROUND", function() { return TILE_BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_BOTH", function() { return TILE_BOTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_LEFT", function() { return TILE_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_MIDDLE", function() { return TILE_MIDDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_RIGHT", function() { return TILE_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJECT_OUT", function() { return OBJECT_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJECT_BACKGROUND", function() { return OBJECT_BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJECT_WALL", function() { return OBJECT_WALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJECT_ICE", function() { return OBJECT_ICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJECT_METAL", function() { return OBJECT_METAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJECT_JAR", function() { return OBJECT_JAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJECT_FIRE", function() { return OBJECT_FIRE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJECT_PLAYER", function() { return OBJECT_PLAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_STATE_PLAY", function() { return GAME_STATE_PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_STATE_INTRO", function() { return GAME_STATE_INTRO; });
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


/***/ }),

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/*! exports provided: Engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return Engine; });
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sound */ "./src/sound.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
/* harmony import */ var _ice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ice */ "./src/ice.js");
/* harmony import */ var _sfx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sfx */ "./src/sfx.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/constants.js");






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
        this.state = _constants__WEBPACK_IMPORTED_MODULE_5__["GAME_STATE_INTRO"];
        this.sprites = [];
        this.sfxs = [];
        this.player = {};
        this.level = 0;
        this.keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_0__["Keyboard"]();
        this.sound = new _sound__WEBPACK_IMPORTED_MODULE_1__["Sound"]();
        this.scene = new _scene__WEBPACK_IMPORTED_MODULE_2__["Scene"](this);
        this.editor = false;
        this.noSpriteMoveCount = 0;
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
        const fires = this.sprites.filter(sprite => sprite.id === _constants__WEBPACK_IMPORTED_MODULE_5__["OBJECT_FIRE"]);
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
        for (let i = 0; i < this.sprites.length; ++i) {
            this.sprites[i].engineMove();
        }
        for (let i = 0; i < this.sfxs.length; ++i) {
            this.sfxs[i].engineMove();
        }
        let spritesMoving = false;
        for (let i = 0; i < this.sprites.length; ++i) {
            if (this.sprites[i] && this.sprites[i].id !== _constants__WEBPACK_IMPORTED_MODULE_5__["OBJECT_PLAYER"] && this.sprites[i].moving) {
                spritesMoving = true;
            }
        }
        if (!spritesMoving) {
            this.noSpriteMoveCount += 1;
        } else {
            this.noSpriteMoveCount = 0;
        }
        // check if no sprites have moved for 2 turns
        if (!spritesMoving && this.noSpriteMoveCount > 1) {
            this.noSpriteMoveCount = 0;
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
            if (this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_5__["OBJECT_ICE"] && this.sprites[i].ytile === ty) {
                let ice = this.sprites[i];
                if (ice.xtile - 1 === tx || ice.xtile + ice.length === tx) {
                    foundIceBlocks.push(ice);
                }
            }
        }
        if (foundIceBlocks.length === 0) {
            this.sprites.push(new _ice__WEBPACK_IMPORTED_MODULE_3__["Ice"](this, tx, ty, 1, frozen));
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
        this.addSprite(new _ice__WEBPACK_IMPORTED_MODULE_3__["Ice"](this, tx, ty, length));
        this.removeSprite(iceblockA);
        this.removeSprite(iceblockB);
    }

    removeIceBlock(tx, ty) {
        for (let i = 0; i < this.sprites.length; i++) {
            if (this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_5__["OBJECT_ICE"] &&
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
            if (
                (this.sprites[i].ytile === ty) &&
                (tx === this.sprites[i].xtile) &&
                (this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_5__["OBJECT_FIRE"])
            ) {
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

    addSparks(xtile, ytile, color, quantity, intensity) {
        this.sfxs.push(new _sfx__WEBPACK_IMPORTED_MODULE_4__["Sparks"](this, xtile, ytile, color, quantity, intensity));
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
        excludeId = (typeof excludeId === 'undefined') ? _constants__WEBPACK_IMPORTED_MODULE_5__["OBJECT_OUT"] : excludeId;
        if (tx < 0 || ty < 0 || tx > this.map.width || ty > this.map.height) {
            return _constants__WEBPACK_IMPORTED_MODULE_5__["OBJECT_OUT"];
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
        return _constants__WEBPACK_IMPORTED_MODULE_5__["OBJECT_BACKGROUND"];
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


/***/ }),

/***/ "./src/fire.js":
/*!*********************!*\
  !*** ./src/fire.js ***!
  \*********************/
/*! exports provided: Fire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fire", function() { return Fire; });
/* harmony import */ var _animsprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animsprite */ "./src/animsprite.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



class Fire extends _animsprite__WEBPACK_IMPORTED_MODULE_0__["AnimSprite"] {

    constructor(engine, tx, ty) {
        super(_constants__WEBPACK_IMPORTED_MODULE_1__["OBJECT_FIRE"], engine, 'img_fire',
            tx, ty, _constants__WEBPACK_IMPORTED_MODULE_1__["TILE_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_1__["TILE_WIDTH"], 0, 0, 0, 3, true);
    }

    move() {
        if (!this.moving) {
            this.collisions();
            this.gravity();
        }
        switch (this.state) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__["MOVE_DOWN"]:
                this.doDown();
                break;
        }
    }

    collisions() {
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, _constants__WEBPACK_IMPORTED_MODULE_1__["OBJECT_FIRE"]) === _constants__WEBPACK_IMPORTED_MODULE_1__["OBJECT_ICE"]) {
            this.engine.sound.play('fire-off');
            this.engine.removeFire(this.xtile, this.ytile);
            this.engine.removeIceBlock(this.xtile, this.ytile);
            this.engine.addSparks(this.xtile, this.ytile, '255, 126, 198', 15, 0.5);
            this.engine.addSparks(this.xtile, this.ytile, '124, 212, 255', 10);
        }
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, _constants__WEBPACK_IMPORTED_MODULE_1__["OBJECT_FIRE"]) === _constants__WEBPACK_IMPORTED_MODULE_1__["OBJECT_METAL"]) {
            this.engine.sound.play('fire-off');
            this.engine.removeFire(this.xtile, this.ytile);
            this.engine.addSparks(this.xtile, this.ytile, '255, 126, 198', 15, 0.5);
        }

    }

    gravity() {
        if (!this.coorners.d) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__["MOVE_DOWN"], true);
            return true;
        }
        return false;
    }

    doDown() {
        this.counter += 4;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_1__["TILE_WIDTH"]) {
            this.y += 4;
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__["MOVE_STAND"], false);
        }
    }
}


/***/ }),

/***/ "./src/firenice.js":
/*!*************************!*\
  !*** ./src/firenice.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources */ "./src/resources.js");



window.addEventListener('load', () => {
    const resources = new _resources__WEBPACK_IMPORTED_MODULE_1__["Resources"]();
    resources.add('tilemap', document.getElementById('img_tilemap'));
    resources.add('img_ice', document.getElementById('img_ice'));
    resources.add('img_jar', document.getElementById('img_jar'));
    resources.add('img_fire', document.getElementById('img_fire'));
    resources.add('img_dona', document.getElementById('img_dona'));
    resources.add('img_intro', document.getElementById('img_intro'));
    resources.add('img_start', document.getElementById('img_start'));
    resources.add('img_metal', document.getElementById('img_metal'));
    resources.add('frost', document.getElementById('img_frozen'));

    const canvas = document.getElementById('canvas');
    const game = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"](canvas, resources);
    window.game = game;

    document.getElementById('level-selector').addEventListener('change', (e) => {
        if (e.target.value !== '-1') {
            game.engine.level = parseInt(e.target.value, 10);
            game.engine.scene.load(game.engine.level);
            e.target.blur();
        }
    });
});

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ "./src/engine.js");
/* harmony import */ var _animsprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animsprite */ "./src/animsprite.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");




/**
 * Game Loop
 */
class Game {
    /**
     * @param {*} canvavs   The canvas element
     * @param {*} resources  Game resources
     */
    constructor(canvas, resources) {
        this.state = _constants__WEBPACK_IMPORTED_MODULE_2__["GAME_STATE_INTRO"];
        this.engine = new _engine__WEBPACK_IMPORTED_MODULE_0__["Engine"](canvas, resources);
        this.createIntro();
        this.gameloop = this.gameloop_.bind(this); // jshint ignore:line
        this.gameloop();
    }

    gameloop_() {
        switch (this.state) {
            case _constants__WEBPACK_IMPORTED_MODULE_2__["GAME_STATE_INTRO"]:
                this.doIntro();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["GAME_STATE_PLAY"]:
                this.engine.draw();
                this.engine.move();
                break;
        }
        window.requestAnimationFrame(this.gameloop);
    }

    createIntro() {
        this.intro = new _animsprite__WEBPACK_IMPORTED_MODULE_1__["AnimSprite"](null, this.engine, 'img_intro', 0, 0, 544, 416, 0, 0, 0, 0, false);
        this.start = new _animsprite__WEBPACK_IMPORTED_MODULE_1__["AnimSprite"](null, this.engine, 'img_start', 7, 11, 140, 26, -10, 0, 0, 1, true);
        this.start.animDelay = _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_STANDARD_DELAY"] * 20;
    }

    doIntro() {
        this.intro.draw();
        this.start.draw();

        if (this.engine.keyboard.enter) {
            this.state = _constants__WEBPACK_IMPORTED_MODULE_2__["GAME_STATE_PLAY"];
            this.engine.sound.soundrack();
        }
    }
}


/***/ }),

/***/ "./src/ice.js":
/*!********************!*\
  !*** ./src/ice.js ***!
  \********************/
/*! exports provided: Ice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ice", function() { return Ice; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _animsprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animsprite */ "./src/animsprite.js");
/* harmony import */ var _tiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tiles */ "./src/tiles.js");




class Ice extends _animsprite__WEBPACK_IMPORTED_MODULE_1__["AnimSprite"] {

    constructor(engine, tx, ty, length, frozen) {
        super(_constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_ICE"], engine, 'img_ice',
            tx, ty, _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"], 0, 0, 0, 1, true);
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
            (tx > this.xtile && this.getTile(tx+1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_WALL"]) ||
            (tx < this.xtile && this.getTile(tx-1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_WALL"]) ||
            (spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_METAL"]) ||
            (spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_JAR"]) ||
            (spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_METAL"]) ||
            (spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_JAR"])
        ) {
            this.frozen = true;
        }
        this.xtile = tx < this.xtile ? tx : this.xtile;
        this.x = this.xtile * _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"];
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
            this.x += _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"];
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
        if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["DIR_LEFT"]  && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.l)) {
            return false;
        }
        if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["DIR_RIGHT"] && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.r)) {
            return false;
        }
        return true;
    }

    gravity() {
        if (!this.coorners.d && !this.frozen) {
            this.falling = true;
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["MOVE_DOWN"], true);
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
            if (tile_down && tile_down !== _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_FIRE"]) {
                this.coorners.d = tile_down;
            }

        }
        if (this.coorners.d === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_FIRE"]) {
            this.coorners.d = _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_BACKGROUND"];
        }
        this.coorners.r = this.spriteTypeAt(this.xtile+this.length, this.ytile);

        if (this.frozen) {
            this.checkUnfreeze();
        }
        if (!this.moving) {
            this.gravity();
        }
        switch (this.state) {
            case _constants__WEBPACK_IMPORTED_MODULE_0__["MOVE_ICE_MOVING"]:
                this.glide();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_0__["MOVE_ICE_CHECK"]:
                this.push();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_0__["MOVE_DOWN"]:
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
            this.ctx.drawImage(this.image, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"]*this.animRow, this.width, this.height,  this.x, this.y, this.width, this.height);
        } else if (this.length === 2) {
            this.ctx.drawImage(this.image, 1*_constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"]*this.animRow,
                this.width, this.height,  this.x, this.y, this.width, this.height);
            this.ctx.drawImage(this.image, 3*_constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"]*this.animRow,
                this.width, this.height,  this.x+_constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"], this.y, this.width, this.height);
        } else {
            this.ctx.drawImage(this.image, 1*_constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"]*this.animRow,
                this.width, this.height,  this.x, this.y, this.width, this.height);
            this.ctx.drawImage(this.image, 3*_constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"]*this.animRow,
                this.width, this.height,  this.x+_constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"]*(this.length-1), this.y, this.width, this.height);
            for (let i = 1;  i < this.length-1; i++) {
                this.ctx.drawImage(this.image, 2*_constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"], _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"]*this.animRow,
                    this.width, this.height,  this.x+(_constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"]*i), this.y, this.width, this.height);
            }
        }
        if (this.frozen) {
            if (
                this.getTile(this.xtile-1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_WALL"] ||
                spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_METAL"] ||
                spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_JAR"]
            ) {
                this.ctx.drawImage(
                    this.engine.resources.get('frost'),
                    (this.xtile*this.width)-7,
                    this.ytile*this.height
                );
            }
            if (
                this.getTile(this.xtile+this.length, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_WALL"] ||
                spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_METAL"] ||
                spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_JAR"]
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
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"]) {
            this.x += 4 * this.dirrection;
        } else {
            this.push();
        }
    }

    doDown() {
        this.counter += 4;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"]) {
            this.y += 4;
        } else {
            if (!this.gravity()) {
                this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["MOVE_STAND"], false);
            }
        }
    }

    push(dir) {
        this.dirrection = (typeof dir === 'undefined') ? this.dirrection : dir;
        if (!this.collision() && !this.gravity()) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["MOVE_ICE_MOVING"], true);
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["MOVE_STAND"], false);
        }
    }

    checkUnfreeze() {
        const spriteTypeAtLeftCorner = this.engine.spriteTypeAt(this.xtile-1, this.ytile);
        const spriteTypeAtRightCorner = this.engine.spriteTypeAt(this.xtile+this.length, this.ytile);
        if (
            this.getTile(this.xtile-1, this.ytile) !== _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_WALL"] &&
            this.getTile(this.xtile+this.length, this.ytile) !== _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_WALL"] &&
            spriteTypeAtLeftCorner !== _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_METAL"] &&
            spriteTypeAtLeftCorner !== _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_JAR"] &&
            spriteTypeAtRightCorner !== _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_METAL"] &&
            spriteTypeAtRightCorner !== _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_JAR"]
        ) {
            this.frozen = false;
        }
    }

    checkFreeze() {
        const spriteTypeAtLeftCorner = this.engine.spriteTypeAt(this.xtile-1, this.ytile);
        const spriteTypeAtRightCorner = this.engine.spriteTypeAt(this.xtile+this.length, this.ytile);
        if (
            (this.getTile(this.xtile-1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_WALL"]) ||
            (this.getTile(this.xtile+this.length, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_WALL"]) ||
            (spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_METAL"]) ||
            (spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_JAR"]) ||
            (spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_METAL"]) ||
            (spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_JAR"])
        ) {
            this.frozen = true;
        } else {
            this.frozen = false;
        }
    }
}


/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/*! exports provided: Keyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return Keyboard; });
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


/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! exports provided: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levels", function() { return levels; });
const levels = [
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":0,"sprites":[{"id":7,"x":11,"y":4,"v":1},{"id":3,"x":5,"y":9,"v":1},{"id":3,"x":5,"y":8,"v":1},{"id":3,"x":5,"y":7,"v":1},{"id":3,"x":5,"y":6,"v":1},{"id":6,"x":6,"y":4,"v":1},{"id":3,"x":8,"y":4,"v":1},{"id":6,"x":7,"y":9,"v":1},{"id":6,"x":7,"y":8,"v":1},{"id":6,"x":7,"y":7,"v":1},{"id":6,"x":9,"y":10,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":1,"sprites":[{"id":7,"x":3,"y":7,"v":1},{"id":6,"x":6,"y":7,"v":1},{"id":3,"x":4,"y":7,"v":1},{"id":3,"x":10,"y":5,"v":4},{"id":6,"x":12,"y":8,"v":1},{"id":6,"x":12,"y":7,"v":1},{"id":6,"x":12,"y":6,"v":1},{"id":6,"x":13,"y":8,"v":1},{"id":3,"x":11,"y":8,"v":1},{"id":3,"x":11,"y":7,"v":1},{"id":3,"x":11,"y":6,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1],[1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1],[1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":2,"sprites":[{"id":7,"x":14,"y":6,"v":1},{"id":6,"x":10,"y":9,"v":1},{"id":3,"x":5,"y":4,"v":1},{"id":6,"x":9,"y":6,"v":1},{"id":6,"x":9,"y":5,"v":1},{"id":3,"x":11,"y":6,"v":1},{"id":3,"x":11,"y":5,"v":1},{"id":3,"x":8,"y":6,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":0,"sprites":[{"id":7,"x":8,"y":9,"v":1},{"id":6,"x":12,"y":8,"v":1},{"id":6,"x":13,"y":7,"v":1},{"id":6,"x":11,"y":9,"v":1},{"id":3,"x":6,"y":8,"v":5},{"id":3,"x":10,"y":9,"v":1},{"id":3,"x":10,"y":7,"v":3},{"id":3,"x":12,"y":6,"v":2},{"id":3,"x":6,"y":9,"v":1},{"id":3,"x":4,"y":7,"v":3},{"id":3,"x":3,"y":6,"v":2},{"id":6,"x":5,"y":9,"v":1},{"id":6,"x":4,"y":8,"v":1},{"id":6,"x":3,"y":7,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1],[1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1],[1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":6,"sprites":[{"id":7,"x":11,"y":8,"v":1},{"id":3,"x":10,"y":10,"v":3},{"id":3,"x":10,"y":9,"v":3},{"id":3,"x":7,"y":7,"v":1},{"id":3,"x":3,"y":5,"v":1},{"id":3,"x":9,"y":7,"v":1},{"id":6,"x":3,"y":10,"v":1},{"id":3,"x":3,"y":4,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":5,"sprites":[{"id":7,"x":14,"y":3,"v":1},{"id":3,"x":14,"y":4,"v":1},{"id":3,"x":3,"y":4,"v":1},{"id":3,"x":6,"y":6,"v":1},{"id":3,"x":8,"y":6,"v":1},{"id":3,"x":10,"y":6,"v":1},{"id":3,"x":1,"y":8,"v":12},{"id":6,"x":2,"y":10,"v":1},{"id":6,"x":3,"y":10,"v":1},{"id":6,"x":5,"y":10,"v":1},{"id":6,"x":4,"y":10,"v":1},{"id":6,"x":6,"y":10,"v":1},{"id":6,"x":7,"y":10,"v":1},{"id":6,"x":8,"y":10,"v":1},{"id":6,"x":9,"y":10,"v":1},{"id":6,"x":11,"y":10,"v":1},{"id":6,"x":12,"y":10,"v":1},{"id":6,"x":10,"y":10,"v":1},{"id":6,"x":2,"y":7,"v":1},{"id":3,"x":2,"y":5,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":1,"sprites":[{"id":7,"x":12,"y":4,"v":1},{"id":6,"x":8,"y":11,"v":1},{"id":6,"x":8,"y":10,"v":1},{"id":6,"x":9,"y":11,"v":1},{"id":6,"x":10,"y":11,"v":1},{"id":3,"x":8,"y":5,"v":5},{"id":3,"x":10,"y":4,"v":1},{"id":3,"x":6,"y":6,"v":1},{"id":6,"x":6,"y":5,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":1,"sprites":[{"id":7,"x":8,"y":6,"v":1},{"id":6,"x":5,"y":10,"v":1},{"id":6,"x":6,"y":10,"v":1},{"id":6,"x":7,"y":10,"v":1},{"id":6,"x":8,"y":10,"v":1},{"id":6,"x":9,"y":10,"v":1},{"id":6,"x":10,"y":10,"v":1},{"id":3,"x":11,"y":10,"v":2},{"id":3,"x":5,"y":9,"v":7},{"id":6,"x":5,"y":8,"v":1},{"id":3,"x":11,"y":6,"v":1},{"id":6,"x":11,"y":5,"v":1},{"id":3,"x":6,"y":5,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":6,"sprites":[{"id":7,"x":5,"y":4,"v":1},{"id":6,"x":5,"y":8,"v":1},{"id":3,"x":8,"y":5,"v":1},{"id":3,"x":8,"y":4,"v":1},{"id":6,"x":11,"y":8,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1],[1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":10,"sprites":[{"id":7,"x":3,"y":4,"v":1},{"id":6,"x":2,"y":6,"v":1},{"id":6,"x":3,"y":7,"v":1},{"id":6,"x":4,"y":8,"v":1},{"id":6,"x":5,"y":9,"v":1},{"id":6,"x":6,"y":10,"v":1},{"id":6,"x":7,"y":10,"v":1},{"id":6,"x":8,"y":9,"v":1},{"id":6,"x":9,"y":8,"v":1},{"id":6,"x":10,"y":7,"v":1},{"id":6,"x":11,"y":6,"v":1},{"id":3,"x":2,"y":5,"v":10},{"id":3,"x":5,"y":4,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1],[1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1],[1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1],[1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":6,"sprites":[{"id":7,"x":3,"y":3,"v":1},{"id":6,"x":13,"y":10,"v":1},{"id":6,"x":5,"y":10,"v":1},{"id":6,"x":6,"y":10,"v":1},{"id":6,"x":7,"y":10,"v":1},{"id":3,"x":4,"y":4,"v":1},{"id":3,"x":6,"y":3,"v":2},{"id":3,"x":11,"y":3,"v":2},{"id":6,"x":9,"y":3,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":7,"sprites":[{"id":7,"x":8,"y":5,"v":1},{"id":6,"x":6,"y":5,"v":1},{"id":3,"x":10,"y":5,"v":1},{"id":3,"x":2,"y":3,"v":2},{"id":3,"x":14,"y":4,"v":1},{"id":3,"x":14,"y":4,"v":1},{"id":3,"x":13,"y":3,"v":1},{"id":6,"x":14,"y":3,"v":1},{"id":6,"x":11,"y":10,"v":1},{"id":6,"x":5,"y":10,"v":1},{"id":6,"x":12,"y":9,"v":1},{"id":6,"x":2,"y":9,"v":1},{"id":6,"x":6,"y":9,"v":1},{"id":6,"x":7,"y":9,"v":1},{"id":6,"x":8,"y":9,"v":1},{"id":6,"x":9,"y":9,"v":1},{"id":6,"x":10,"y":9,"v":1},{"id":6,"x":13,"y":9,"v":1},{"id":3,"x":3,"y":9,"v":1},{"id":3,"x":3,"y":8,"v":11},{"id":6,"x":4,"y":9,"v":1}]},
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
            {id :7, x: 13, y: 2, v: 1},
            {id :3, x: 4, y: 4, v: 8},
            {id :3, x: 11, y: 3, v: 4},
            {id :6, x: 3, y: 5, v: 1},
            {id :6, x: 4, y: 6, v: 1},
            {id :6, x: 5, y: 7, v: 1},
            {id :6, x: 10, y: 6, v: 1},
            {id :6, x: 11, y: 5, v: 1},
            {id :6, x: 14, y: 10, v: 1},
            {id :6, x: 14, y: 9, v: 1},
            {id :6, x: 2, y: 10, v: 1},
            {id :6, x: 9, y: 8, v: 1},
            {id :6, x: 2, y: 9, v: 1},
            {id :6, x: 8, y: 8, v: 1},
            {id :6, x: 7, y: 8, v: 1},
            {id :6, x: 6, y: 8, v: 1},
            {id :6, x: 8, y: 10, v: 1},
            {id :6, x: 7, y: 10, v: 1}
        ],
        theme: 8
    },
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":6,"sprites":[{"id":7,"x":14,"y":10,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1],[1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1],[1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1],[1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1],[1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1],[1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":9,"sprites":[{"id":7,"x":10,"y":11,"v":1},{"id":6,"x":8,"y":1,"v":1},{"id":5,"x":4,"y":11,"v":1},{"id":6,"x":8,"y":5,"v":1}]}
];



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _animsprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animsprite */ "./src/animsprite.js");
/* harmony import */ var _tiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiles */ "./src/tiles.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");




class Player extends _animsprite__WEBPACK_IMPORTED_MODULE_0__["AnimSprite"] {

    constructor(engine, tx, ty) {
        super(_constants__WEBPACK_IMPORTED_MODULE_2__["OBJECT_PLAYER"], engine, 'img_dona', tx, ty, 48, 64, -10, -32, 2, 2, false);
        this.speed = 2;
        this.dirrection = 1;
        this.state = 0; //standing top right down left
        this.moving = false;
        this.tileWidth = _constants__WEBPACK_IMPORTED_MODULE_2__["TILE_WIDTH"];
        this.tileHeight = _constants__WEBPACK_IMPORTED_MODULE_2__["TILE_WIDTH"];
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
            if (this.dirrection !== _constants__WEBPACK_IMPORTED_MODULE_2__["DIR_LEFT"]) {
                //is not under a brick
                if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u)) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_TURN_START"], _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_TURN_END"], false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"], 4);
                } else {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_CROUCH_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_CROUCH_START"], false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"], 4);
                }
                this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_TURN"], true);
                this.dirrection = _constants__WEBPACK_IMPORTED_MODULE_2__["DIR_LEFT"];
            } else{
                //running
                if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.l) && _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d)) {
                    //not under a brick
                    if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ul)) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RUN_START"], _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RUN_END"], false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"]);
                    } else {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_CROUCH_START"], _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_CROUCH_END"], false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"]);
                    }
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_LEFT"], true);
                }
                //hit an ice
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d) && (this.coorners.l === _constants__WEBPACK_IMPORTED_MODULE_2__["OBJECT_ICE"] || this.coorners.l === _constants__WEBPACK_IMPORTED_MODULE_2__["OBJECT_METAL"])) {
                    this.push();
                }
                //climb
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.l) && _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d)  && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ul) && !this.moving) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_PUSH_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_PUSH_START"],false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"]);
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_UP"], true);
                }
            }
        }
    }

    right() {
        if (!this.moving) {
            if (this.dirrection !== _constants__WEBPACK_IMPORTED_MODULE_2__["DIR_RIGHT"]) {
                if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u)) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_TURN_START"], _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_TURN_END"], false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"], 4);
                } else {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_CROUCH_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_CROUCH_START"], false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"], 4);
                }
                this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_TURN"], true);
                this.dirrection = _constants__WEBPACK_IMPORTED_MODULE_2__["DIR_RIGHT"];
            } else{
                if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.r) && _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d)) {
                    if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ur)) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RUN_START"], _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RUN_END"], false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"]);
                    } else {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_CROUCH_START"], _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_CROUCH_END"], false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"]);
                    }
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_RIGHT"], true);
                }
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d) && (this.coorners.r === _constants__WEBPACK_IMPORTED_MODULE_2__["OBJECT_ICE"] || this.coorners.r === _constants__WEBPACK_IMPORTED_MODULE_2__["OBJECT_METAL"])) {
                    this.push();
                }
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.r) && _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ur) && !this.moving) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_PUSH_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_PUSH_START"],false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"]);
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_UP"], true);
                }
            }
        }
    }

    burn() {
        if (this.state !== _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_RIP"]) {
            this.engine.sound.playOnce('danger');
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_RIP"], true);
            this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIP_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIP_END"], true, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"]);
        }
    }

    intro() {
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_BIG_FALL_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_BIG_FALL_END"], true, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"], 4);
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_INTRO"], true);
        this.y -= 32;
    }

    outro() {
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_FALL_START"], _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_BIG_FALL_END"], true, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"], 4);
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_OUTRO"], true);
        this.innerCounter = 0;
    }

    doRip() {

    }

    gravity() {
        if (!this.moving) {
            if (typeof this.coorners.d === "undefined") {
                console.eror('undefined coorner');
            }
            if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d)) {
                this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_DOWN"], true);
                if (this.fallCounter >= 1) {
                    this.engine.sound.playOnce("falling");
                }
                if (this.fallCounter >= 2) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_BIG_FALL_START"], _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_BIG_FALL_END"], true, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"]);
                } else {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_BIG_FALL_START"], _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_BIG_FALL_END"], true, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"]);
                }
            } else {

                this.engine.sound.stop("falling");
                if (this.state === _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_DOWN"]) {
                    this.engine.sound.play('fall');
                    if (this.fallCounter >= 2) {
                        this.engine.addSparks(this.xtile, this.ytile + 1, '255, 135, 124', 5, 0.75);
                        this.engine.addSparks(this.xtile, this.ytile + 1, '122, 211, 255', 10,  1);
                    }
                }
                this.fallCounter = 0;
                this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_STAND"], false);
                if (this.coorners.d === _constants__WEBPACK_IMPORTED_MODULE_2__["OBJECT_JAR"]) {
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
            if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d)) {
                if (this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["DIR_RIGHT"]) {
                    if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.dr) && this.coorners.dr !== _constants__WEBPACK_IMPORTED_MODULE_2__["OBJECT_FIRE"]) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_ICE_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_ICE_END"],false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"], 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_ICE_MAKE"], true);
                    } else if (this.coorners.dr === _constants__WEBPACK_IMPORTED_MODULE_2__["OBJECT_ICE"]) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_ICE_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_ICE_END"],false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"], 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_ICE_REMOVE"], true);
                    } else {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_ICE_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_ICE_END"],false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"], 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_ICE_FAIL"], true);
                    }
                } else {
                    if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.dl) && (this.coorners.dl !== _constants__WEBPACK_IMPORTED_MODULE_2__["OBJECT_FIRE"])) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_ICE_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_ICE_END"],false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"], 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_ICE_MAKE"], true);
                    } else if (this.coorners.dl === _constants__WEBPACK_IMPORTED_MODULE_2__["OBJECT_ICE"]) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_ICE_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_ICE_END"],false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"], 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_ICE_REMOVE"], true);
                    } else {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_ICE_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_ICE_END"],false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"], 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_ICE_FAIL"], true);
                    }
                }
            }
        }
    }

    jump() {
        if (!this.moving) {
            if (this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["DIR_RIGHT"]) {
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.r) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ur) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u)) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_PUSH_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_PUSH_START"],false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"]);
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_UP"], true);
                }
            } else {
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.l) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ul) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u)) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_PUSH_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_PUSH_START"],false, _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"]);
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_UP"], true);
                }
            }
        }
    }

    doRun() {
        this.counter++;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_FRAME_COUNT"]) {
            this.x += this.speed * this.dirrection;
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_STAND"], false);
        }
    }

    doTurn() {
        this.counter++;
        if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_FRAME_COUNT"]) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_STAND"], false);
        }
    }

    doOutro() {
        this.counter += 1;
        if (this.counter % 10 === 0) {
            this.innerCounter += 1;
            if (this.innerCounter === 1) {
                this.engine.addSparks(this.xtile, this.ytile, '124, 238, 66', 20,  0.5);
            }
            if (this.innerCounter === 3) {
                this.engine.addSparks(this.xtile, this.ytile, '255, 135, 124', 15, 1);
            }
            if (this.innerCounter === 5) {
                this.engine.addSparks(this.xtile, this.ytile, '122, 211, 255', 10,  1.5);
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
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_STAND"], false);
            this.engine.nextLevel();
        }
    }

    doIntro() {
        this.counter += 1;
        if (this.counter === 4) {
            this.engine.addSparks(this.xtile, this.ytile, '124, 238, 66', 20,  0.5);
            this.engine.addSparks(this.xtile, this.ytile, '255, 135, 124', 15, 1);
            this.engine.addSparks(this.xtile, this.ytile, '122, 211, 255', 10,  1.5);
            this.engine.sound.play('stage-enter');
        }
        if (this.counter <= 16) {
            this.y += 2;
        } else {
            this.engine.sound.stop("falling");
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_STAND"], false);
        }
    }

    doGravity() {
        this.counter += 1;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_FRAME_COUNT"]) {
            this.y += this.speed;
        } else {
            this.moving = false;
            this.gravity();
            this.fallCounter++;
        }
    }

    doStand() {
        if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u)) {
            if (this.standCounter++ > 500) {
                this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_SLEEP_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_SLEEP_END"],true, this.dirrection !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"] : _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"], 48, true);
            } else {
                this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_STAND_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_STAND_END"],true, this.dirrection !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"] : _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"], 8, true);
            }
        } else {
            this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_CROUCH_START"],_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_CROUCH_START"], false, this.dirrection !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"] : _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"], 8, true);
        }
    }

    doUp() {
        this.counter += 1;
        if (this.counter <= 18) {
            switch (this.counter) {
                case 3:
                    this.engine.sound.play('climb');
                    this.engine.addSparks(this.xtile, this.ytile, '124, 238, 66', 10,  0.75);
                    this.engine.addSparks(this.xtile, this.ytile, '255, 135, 124', 5, 1.25);
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_PUSH_END"], _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_PUSH_END"], false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["DIR_RIGHT"] ? _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"] : _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"]);
                    break;
                case 6:
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_JUMP_START"], _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_JUMP_START"], false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["DIR_RIGHT"] ? _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"] : _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"]);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 9:
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_JUMP_END"], _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_JUMP_END"], false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["DIR_RIGHT"] ? _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"] : _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"]);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 12:
                    this.setAnim(2, 2, false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["DIR_RIGHT"] ? _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"] : _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"]);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 18:
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_STAND"], _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_STAND"], false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["DIR_RIGHT"] ? _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"] : _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"]);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                break;
            }
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_STAND"], false);
        }
    }

    makeIce() {
        this.engine.sound.play('new-ice');
        this.engine.addIceBlock(this.xtile + this.dirrection, this.ytile+1);
        this.engine.addSparks(this.xtile + this.dirrection, this.ytile + 1);
        this.engine.addSparks(this.xtile + this.dirrection, this.ytile + 1, '124, 214, 255', 5);
    }

    removeIceBlock() {
        this.engine.sound.play('ice-remove');
        this.engine.removeIceBlock(this.xtile + this.dirrection, this.ytile+1);
        this.engine.addSparks(this.xtile + this.dirrection, this.ytile + 1);
        this.engine.addSparks(this.xtile + this.dirrection, this.ytile + 1, '124, 214, 255', 5);
    }

    push() {
        let ice =  this.engine.iceAt(this.xtile+this.dirrection, this.ytile);
        if (ice && ice.canGlide(this.dirrection)) {
            this.engine.addSparks(this.xtile + this.dirrection, this.ytile, '255, 255, 255', 3);
            this.engine.addSparks(this.xtile + this.dirrection, this.ytile, '124, 214, 255', 3, 1.5);
            this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_PUSH_START"], _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_PUSH_END"], false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["DIR_RIGHT"] ? _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_RIGHT_ROW"] : _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_LEFT_ROW"], 3);
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_PUSH"], true);
        }
    }

    doPush() {
        this.counter += 2;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_FRAME_COUNT"]) {
            // fixme
        } else {
            let ice =  this.engine.iceAt(this.xtile+this.dirrection, this.ytile);
            if (ice) {
                this.engine.sound.play('ice-push');
                ice.push(this.dirrection);
            }
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_STAND"], false);
        }
    }

    doIce() {
        if (this.counter === 8) {
            if (this.state === _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_ICE_MAKE"]) {
                this.makeIce();
            } else{
                this.removeIceBlock();
            }
        }
        this.counter += 1;
        if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_FRAME_COUNT"]) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_STAND"], false);
        }
    }

    doFailIce() {
        if (this.counter === 8) {
            this.engine.sound.play('ice-disabled');
            this.engine.addSparks(this.xtile + this.dirrection, this.ytile + 1, '88,66,66');
        }
        this.counter += 1;
        if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__["ANIM_FRAME_COUNT"]) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_STAND"], false);
        }
    }

    collisions() {
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, _constants__WEBPACK_IMPORTED_MODULE_2__["OBJECT_PLAYER"]) === _constants__WEBPACK_IMPORTED_MODULE_2__["OBJECT_FIRE"]) {
            this.burn();
        }
    }

    move () {
        this.gravity();
        this.collisions();
        if (this.state !== _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_STAND"]) {
            this.standCounter = 0;
        }
        if (this.state !== _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_DOWN"]) {
            this.fallCounter = 0;
        }
        switch (this.state) {
            case _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_RIGHT"]:
                this.doRun();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_LEFT"]:
                this.doRun();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_DOWN"]:
                this.doGravity();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_UP"]:
                this.doUp();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_TURN"]:
                this.doTurn();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_ICE_MAKE"]:
            case _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_ICE_REMOVE"]:
                this.doIce();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_ICE_FAIL"]:
                this.doFailIce();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_STAND"]:
                this.doStand();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_PUSH"]:
                this.doPush();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_RIP"]:
                this.doRip();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_OUTRO"]:
                this.doOutro();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["MOVE_INTRO"]:
                this.doIntro();
                break;
        }
    }
}

/***/ }),

/***/ "./src/resources.js":
/*!**************************!*\
  !*** ./src/resources.js ***!
  \**************************/
/*! exports provided: Resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resources", function() { return Resources; });
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


/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _tilemap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tilemap */ "./src/tilemap.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ice */ "./src/ice.js");
/* harmony import */ var _fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fire */ "./src/fire.js");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./levels */ "./src/levels.js");







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
            let value = (typeof sprite.length === "undefined") ? 1 : sprite.length;
            value = sprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_JAR"] ? sprite.onFire : value;
            data.sprites.push({
                "id": sprite.id,
                "x": sprite.xtile,
                "y": sprite.ytile,
                "v": value
            });
        }

        return data;
    }

    load(index) {
        if (typeof _levels__WEBPACK_IMPORTED_MODULE_5__["levels"][index] === 'undefined') {
            index = 0;
        }
        this.engine.level = index;
        const level = _levels__WEBPACK_IMPORTED_MODULE_5__["levels"][index];
        this.engine.sprites = [];
        this.engine.map = new _tilemap__WEBPACK_IMPORTED_MODULE_1__["TileMap"](this.engine, level.map, level.theme);
        for (const sprite of level.sprites) {
            switch(sprite.id) {
                case _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_PLAYER"]:
                    this.engine.player = new _player__WEBPACK_IMPORTED_MODULE_2__["Player"](this.engine, sprite.x, sprite.y);
                    this.engine.addSprite(this.engine.player);
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_ICE"]:
                    sprite.v = typeof sprite.v === "undefined" ? 1 : sprite.v;
                    this.engine.addSprite(new _ice__WEBPACK_IMPORTED_MODULE_3__["Ice"](this.engine, sprite.x, sprite.y, parseInt(sprite.v)));
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_METAL"]:
                    this.engine.addSprite(new Metal(this.engine, sprite.x, sprite.y, 1));
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_FIRE"]:
                    this.engine.addSprite(new _fire__WEBPACK_IMPORTED_MODULE_4__["Fire"](this.engine, sprite.x, sprite.y));
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_JAR"]:
                    const jar = new Jar(this.engine, sprite.x, sprite.y);
                    jar.onFire = sprite.v === "1" ? true : false;
                    this.engine.addSprite(jar);
                    break;
            }
        }
    }
}

/***/ }),

/***/ "./src/sfx.js":
/*!********************!*\
  !*** ./src/sfx.js ***!
  \********************/
/*! exports provided: Sparks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sparks", function() { return Sparks; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


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
        this.ctx.fillStyle = 'rgba(' + this.color+ ',' + opacity + ')';
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
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

class Sparks extends _sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"] {

    constructor (engine, tx, ty, color, length, intencity) {
        super(null, engine, tx, ty, 32, 32);
        this.color = (typeof color === 'undefined') ? '255,255,255' : color;
        this.length = (typeof length === 'undefined') ? 10 : length;
        this.intencity = (typeof intencity === 'undefined') ? 1 : intencity;
        this.particles = [];
        for (let i = 0; i < this.length; i++) {
            this.particles[i] = new Particle(this.engine.ctx, tx*_constants__WEBPACK_IMPORTED_MODULE_1__["TILE_WIDTH"]+16, ty*_constants__WEBPACK_IMPORTED_MODULE_1__["TILE_WIDTH"]+16, this.color, this.intencity);
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


/***/ }),

/***/ "./src/sound.js":
/*!**********************!*\
  !*** ./src/sound.js ***!
  \**********************/
/*! exports provided: Sound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sound", function() { return Sound; });
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

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _struct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./struct */ "./src/struct.js");



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
        this.coorners = new _struct__WEBPACK_IMPORTED_MODULE_1__["Position"]();
        this.solid = true;
        this.moving = false;
        this.counter = false;
        this.speed = 4;
        this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["MOVE_STAND"];
        this.height = height;
        this.width = width;
        this.dirrection = 0;
        this.xtile = tx;
        this.ytile = ty;
        this.x = this.xtile * _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"];
        this.y = this.ytile * _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"];
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

        this.xtile = Math.floor(this.x / _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"]);
        this.ytile = Math.floor(this.y / _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"]);
    }
}


/***/ }),

/***/ "./src/struct.js":
/*!***********************!*\
  !*** ./src/struct.js ***!
  \***********************/
/*! exports provided: Position, Coor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coor", function() { return Coor; });
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


/***/ }),

/***/ "./src/tilemap.js":
/*!************************!*\
  !*** ./src/tilemap.js ***!
  \************************/
/*! exports provided: TileMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMap", function() { return TileMap; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


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
        this.tileWidth = _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"];
        this.tileHeight = _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_WIDTH"];
        this.height = this.map.length - 1;
        this.width = this.map[0].length - 1;
        this.tilesImage = this.engine.resources.get('tilemap');
    }
    /**
     * Returns the content of the tile inside the matrix
     * if position out of bounds returns Consts.OBJECT_OUT
     * @param  {number} y position
     * @param  {number} x position
     * @return {number}   Content of the tile
     */
    getTile(x, y) {
        if (x < 0 || y < 0 || x > this.width || y > this.height) {
            return _constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_OUT"];
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
                let tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_BACKGROUND"];
                if (this.map[j][i] === 1) {
                    if (!this.getTile(i-1, j) && !this.getTile(i+1, j)) {
                        tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_BOTH"];
                    } else if (!this.getTile(i-1, j)) {
                        tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_LEFT"];
                    } else if (!this.getTile(i+1, j)) {
                        tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_RIGHT"];
                    } else {
                        tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["TILE_MIDDLE"];
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


/***/ }),

/***/ "./src/tiles.js":
/*!**********************!*\
  !*** ./src/tiles.js ***!
  \**********************/
/*! exports provided: Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


const Tile = {
   tiles: {
        [_constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_BACKGROUND"]]: {
            solid: false
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_OUT"]]: {
            solid: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_PLAYER"]]: {
            solid: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_ICE"]]: {
            solid: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_METAL"]]: {
            solid: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_WALL"]]: {
            solid: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_FIRE"]]: {
            solid: false
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["OBJECT_JAR"]]: {
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlbmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RydWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ0k7O0FBRS9CLHlCQUF5Qiw4Q0FBTTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOERBQTBCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCw4REFBMEI7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ047QUFDQTtBQUNKO0FBQ0c7QUFDTztBQUN0QztBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFRO0FBQ3BDLHlCQUF5Qiw0Q0FBSztBQUM5Qix5QkFBeUIsNENBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QjtBQUNBLFNBQVM7QUFDVCxTQUFTLHVEQUFtQjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxTQUFTLHNEQUFrQjtBQUMzQjtBQUNBLFNBQVM7QUFDVCxTQUFTLHNEQUFrQjtBQUMzQjtBQUNBLFNBQVM7QUFDVCxTQUFTLHFEQUFpQjtBQUMxQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZmlyZW5pY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9maXJlbmljZS5qc1wiKTtcbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0ICogYXMgQ29uc3RzIGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltU3ByaXRlIGV4dGVuZHMgU3ByaXRlIHtcclxuICAgIC8qKlxyXG4gICAgICogQW5pbWF0ZWQgU3ByaXRlLCBpbmhlcnRzIGZyb20gU3ByaXRlLlxyXG4gICAgICogQWRkcyBkcmF3aW5nIG9mIHBpY3R1cmVzIGluIHRoZSBib2R5IG9mIHNwcml0ZVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGVuZ2luZSAgICBFbmdpbmUgRW5naW5lXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaW1hZ2UgICBEb20gaW1hZ2Ugb2JqZWN0IChpbWcgc3JjPSlcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eCAgICAgIFRpbGUgWCBwb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5ICAgICAgVGlsZSBZIHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggICBXaWR0aCBvZiB0aGUgc3ByaXRlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0ICBIZWlnaHQgb2YgdGhlIHNwcml0ZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFggT2Zmc2V0IFggb2YgZHJhd2luZyB0aGUgcGljdHVyZSBpbnRvIHRoZSBjYW52YXNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRZIE9mZnNldCBZIG9mIGRyYXdpbmcgdGhlIHBpY3R1cmUgaW50byB0aGUgY2FudmFzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgICBBbmltYXRpb24gZnJhbWUgc3RhcnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgICAgIEFuaW1hdGlvbiBmcmFtZSBlbmRcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCAgIFJlcGVhdCBhbmltYXRpb25cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IgKGlkLCBlbmdpbmUsIGltYWdlLCB0eCwgdHksIHdpZHRoLCBoZWlnaHQsIG9mZnNldFgsIG9mZnNldFksIHN0YXJ0LCBlbmQsIGxvb3ApIHtcclxuICAgICAgICBzdXBlcihpZCwgZW5naW5lLCB0eCwgdHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KGltYWdlKTtcclxuICAgICAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgICAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuYW5pbUVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLmFuaW1Db3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5hbmltRGVsYXkgPSBDb25zdHMuQU5JTV9TVEFOREFSRF9ERUxBWTtcclxuICAgICAgICB0aGlzLmFuaW1EZWxheUNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmFuaW1Sb3cgPSAwO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFg7XHJcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gb2Zmc2V0WTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHNwcml0ZSBhbmltYXRpb24gZnJhbWVzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgU3RhcnQgZnJhbWUgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCAgIEVuZCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb3AgIElmIHRydWUsIGFuaW1hdGlvbiB3aWxsIGxvb3BcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgICBSb3cgb2YgdGhlIGZyYW1lcyBpbiB0aGUgc3ByaXRlIGltYWdlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgRGVsYXkgYmV0d2VlbiBlYWNoIGZyYW1lXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgIFNldHMgYWxsIHRoZSBuZXcgdmFsdWVzIG9ubHkgb25lIHRpbWUuXHJcbiAgICAgKi9cclxuICAgIHNldEFuaW0oc3RhcnQsIGVuZCwgbG9vcCwgcm93LCBkZWxheSwgb25jZSkge1xyXG4gICAgICAgIGxldCBfb25jZSA9ICh0eXBlb2Ygb25jZSA9PT0gJ3VuZGVmaW5lZCcpID8gZmFsc2UgOiBvbmNlO1xyXG4gICAgICAgIGxldCBfZGVsYXkgPSAodHlwZW9mIGRlbGF5ID09PSAndW5kZWZpbmVkJykgPyBDb25zdHMuQU5JTV9TVEFOREFSRF9ERUxBWSA6IGRlbGF5O1xyXG4gICAgICAgIGxldCBfcm93ID0gKHR5cGVvZiByb3cgPT09ICd1bmRlZmluZWQnKSA/IHRoaXMuYW5pbVJvdyA6IHJvdztcclxuICAgICAgICBpZiAoIV9vbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbVN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbUVuZCA9IGVuZDtcclxuICAgICAgICAgICAgdGhpcy5hbmltQ291bnQgPSBzdGFydDtcclxuICAgICAgICAgICAgdGhpcy5hbmltTG9vcCA9IGxvb3A7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbURlbGF5ID0gX2RlbGF5O1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1Sb3cgPSBfcm93O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1TdGFydCAhPT0gc3RhcnQgfHwgdGhpcy5hbmltRW5kICE9PSBlbmQgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUxvb3AgIT09IGxvb3AgfHwgdGhpcy5hbmltUm93ICE9PSBfcm93KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltRW5kID0gZW5kO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltQ291bnQgPSBzdGFydDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUxvb3AgPSBsb29wO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltRGVsYXkgPSBfZGVsYXk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1Sb3cgPSBfcm93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmF3cyB0aGUgZnJhbWUgb2YgdGhlIHNwcml0ZSBpbiB0aGUgY2FudmFzXHJcbiAgICAgKi9cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLmFuaW1Db3VudCp0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmFuaW1Sb3cgKiB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMueCt0aGlzLm9mZnNldFgsIHRoaXMueSt0aGlzLm9mZnNldFksXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICBpZiAodGhpcy5hbmltRGVsYXlDb3VudCsrID4gdGhpcy5hbmltRGVsYXkpIHtcclxuICAgICAgICAgICAgaWYgKCsrdGhpcy5hbmltQ291bnQgPiB0aGlzLmFuaW1FbmQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1Mb29wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltQ291bnQgPSB0aGlzLmFuaW1TdGFydDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltQ291bnQgPSB0aGlzLmFuaW1FbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgVElMRV9XSURUSCA9IDMyO1xyXG5leHBvcnQgY29uc3QgTU9WRV9TVEFORCA9IDA7XHJcbmV4cG9ydCBjb25zdCBNT1ZFX0xFRlQgPSAxO1xyXG5leHBvcnQgY29uc3QgTU9WRV9SSUdIVCA9IDI7XHJcbmV4cG9ydCBjb25zdCBNT1ZFX0RPV04gPSAzO1xyXG5leHBvcnQgY29uc3QgTU9WRV9VUCA9IDQ7XHJcbmV4cG9ydCBjb25zdCBNT1ZFX1RVUk4gPSA1O1xyXG5leHBvcnQgY29uc3QgTU9WRV9JQ0VfTUFLRSA9IDY7XHJcbmV4cG9ydCBjb25zdCBNT1ZFX0lDRV9SRU1PVkUgPSA3O1xyXG5leHBvcnQgY29uc3QgTU9WRV9JQ0VfTU9WSU5HID0gODtcclxuZXhwb3J0IGNvbnN0IE1PVkVfSUNFX0NIRUNLID0gOTtcclxuZXhwb3J0IGNvbnN0IE1PVkVfUklQID0gMTA7XHJcbmV4cG9ydCBjb25zdCBNT1ZFX1BVU0ggPSA4O1xyXG5leHBvcnQgY29uc3QgTU9WRV9JQ0VfRkFJTCA9IDExO1xyXG5leHBvcnQgY29uc3QgTU9WRV9PVVRSTyA9IDEyO1xyXG5leHBvcnQgY29uc3QgTU9WRV9JTlRSTyA9IDEzO1xyXG5leHBvcnQgY29uc3QgRElSX0xFRlQgPSAtMTtcclxuZXhwb3J0IGNvbnN0IERJUl9SSUdIVCA9IDE7XHJcbmV4cG9ydCBjb25zdCBBTklNX1NUQU5EQVJEX0RFTEFZID0gMjtcclxuZXhwb3J0IGNvbnN0IEFOSU1fRlJBTUVfQ09VTlQgPSAxNjtcclxuZXhwb3J0IGNvbnN0IEFOSU1fTEVGVF9ST1cgPSAxO1xyXG5leHBvcnQgY29uc3QgQU5JTV9SSUdIVF9ST1cgPSAwO1xyXG5leHBvcnQgY29uc3QgQU5JTV9SVU5fU1RBUlQgPSAwO1xyXG5leHBvcnQgY29uc3QgQU5JTV9SVU5fRU5EID0gMztcclxuZXhwb3J0IGNvbnN0IEFOSU1fU1RBTkQgPSA0O1xyXG5leHBvcnQgY29uc3QgQU5JTV9UVVJOX1NUQVJUID0gNDtcclxuZXhwb3J0IGNvbnN0IEFOSU1fVFVSTl9FTkQgPSA3O1xyXG5leHBvcnQgY29uc3QgQU5JTV9GQUxMX1NUQVJUID0gODtcclxuZXhwb3J0IGNvbnN0IEFOSU1fRkFMTF9FTkQgPSA5O1xyXG5leHBvcnQgY29uc3QgQU5JTV9CSUdfRkFMTF9TVEFSVCA9IDEwO1xyXG5leHBvcnQgY29uc3QgQU5JTV9CSUdfRkFMTF9FTkQgPSAxMTtcclxuZXhwb3J0IGNvbnN0IEFOSU1fUFVTSF9TVEFSVCA9IDEyO1xyXG5leHBvcnQgY29uc3QgQU5JTV9QVVNIX0VORCA9IDEzO1xyXG5leHBvcnQgY29uc3QgQU5JTV9KVU1QX1NUQVJUID0gMTQ7XHJcbmV4cG9ydCBjb25zdCBBTklNX0pVTVBfRU5EID0gMTU7XHJcbmV4cG9ydCBjb25zdCBBTklNX1NUQU5EX1NUQVJUID0gMTY7XHJcbmV4cG9ydCBjb25zdCBBTklNX1NUQU5EX0VORCA9IDE3O1xyXG5leHBvcnQgY29uc3QgQU5JTV9JQ0VfU1RBUlQgPSAxODtcclxuZXhwb3J0IGNvbnN0IEFOSU1fSUNFX0VORCA9IDE5O1xyXG5leHBvcnQgY29uc3QgQU5JTV9DUk9VQ0hfU1RBUlQgPSAyMDtcclxuZXhwb3J0IGNvbnN0IEFOSU1fQ1JPVUNIX0VORCA9IDIyO1xyXG5leHBvcnQgY29uc3QgQU5JTV9SSVBfU1RBUlQgPSAyMztcclxuZXhwb3J0IGNvbnN0IEFOSU1fUklQX0VORCA9IDI0O1xyXG5leHBvcnQgY29uc3QgQU5JTV9TTEVFUF9TVEFSVCA9IDI1O1xyXG5leHBvcnQgY29uc3QgQU5JTV9TTEVFUF9FTkQgPSAyNjtcclxuZXhwb3J0IGNvbnN0IFRJTEVfQkFDS0dST1VORCA9IDA7XHJcbmV4cG9ydCBjb25zdCBUSUxFX0JPVEggPSAzMjtcclxuZXhwb3J0IGNvbnN0IFRJTEVfTEVGVCA9IDY0O1xyXG5leHBvcnQgY29uc3QgVElMRV9NSURETEUgPSA5NjtcclxuZXhwb3J0IGNvbnN0IFRJTEVfUklHSFQgPSAxMjg7XHJcblxyXG5leHBvcnQgY29uc3QgT0JKRUNUX09VVCA9IC0xO1xyXG5leHBvcnQgY29uc3QgT0JKRUNUX0JBQ0tHUk9VTkQgPSAwO1xyXG5leHBvcnQgY29uc3QgT0JKRUNUX1dBTEwgPSAxO1xyXG5leHBvcnQgY29uc3QgT0JKRUNUX0lDRSA9IDM7XHJcbmV4cG9ydCBjb25zdCBPQkpFQ1RfTUVUQUwgPSA0O1xyXG5leHBvcnQgY29uc3QgT0JKRUNUX0pBUiA9IDU7XHJcbmV4cG9ydCBjb25zdCBPQkpFQ1RfRklSRSA9IDY7XHJcbmV4cG9ydCBjb25zdCBPQkpFQ1RfUExBWUVSID0gNztcclxuZXhwb3J0IGNvbnN0IEdBTUVfU1RBVEVfUExBWSA9IDE7XHJcbmV4cG9ydCBjb25zdCBHQU1FX1NUQVRFX0lOVFJPID0gMjtcclxuIiwiaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICcuL2tleWJvYXJkJztcclxuaW1wb3J0IHsgU291bmQgfSBmcm9tICcuL3NvdW5kJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcclxuaW1wb3J0IHsgSWNlIH0gZnJvbSAnLi9pY2UnO1xyXG5pbXBvcnQgeyBTcGFya3MgfSBmcm9tICcuL3NmeCc7XHJcbmltcG9ydCAqIGFzIENvbnN0cyBmcm9tICcuL2NvbnN0YW50cyc7XHJcbi8qKlxyXG4gKiBFbmdpbmUgTG9vcFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzLCByZXNvdXJjZXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmN3aWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgICB0aGlzLmNoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gcmVzb3VyY2VzO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gQ29uc3RzLkdBTUVfU1RBVEVfSU5UUk87XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzID0gW107XHJcbiAgICAgICAgdGhpcy5zZnhzID0gW107XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB7fTtcclxuICAgICAgICB0aGlzLmxldmVsID0gMDtcclxuICAgICAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKCk7XHJcbiAgICAgICAgdGhpcy5zb3VuZCA9IG5ldyBTb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgU2NlbmUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID0gMDtcclxuICAgICAgICBjb25zdCBsZXZlbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsZXZlbCcpO1xyXG4gICAgICAgIGlmIChsZXZlbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2VuZS5sb2FkKHRoaXMubGV2ZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsMCx0aGlzLmN3aWR0aCx0aGlzLmNoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMubWFwLmRyYXcoKTtcclxuICAgICAgICAvLyByZXZlcnNlIGxvb3AsIHBsYXllciBkcmF3cyBsYXN0XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc3ByaXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZXNbaV0uZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Z4cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLnNmeHNbaV0uZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb2xsaXNpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZmlyZXMgPSB0aGlzLnNwcml0ZXMuZmlsdGVyKHNwcml0ZSA9PiBzcHJpdGUuaWQgPT09IENvbnN0cy5PQkpFQ1RfRklSRSk7XHJcbiAgICAgICAgaWYgKCFmaXJlcy5sZW5ndGggJiYgIXRoaXMuZWRpdG9yICYmIHRoaXMucGxheWVyLnN0YXRlICE9PSBNT1ZFX09VVFJPKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm91dHJvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5leHRMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLmxldmVsKys7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xldmVsJywgdGhpcy5sZXZlbCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5sb2FkKHRoaXMubGV2ZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVzW2ldLmVuZ2luZU1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNmeHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5zZnhzW2ldLmVuZ2luZU1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNwcml0ZXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldICYmIHRoaXMuc3ByaXRlc1tpXS5pZCAhPT0gQ29uc3RzLk9CSkVDVF9QTEFZRVIgJiYgdGhpcy5zcHJpdGVzW2ldLm1vdmluZykge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlc01vdmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzcHJpdGVzTW92aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgKz0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgbm8gc3ByaXRlcyBoYXZlIG1vdmVkIGZvciAyIHR1cm5zXHJcbiAgICAgICAgaWYgKCFzcHJpdGVzTW92aW5nICYmIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlib2FyZC51cCkge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnBsYXllci5qdW1wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMua2V5Ym9hcmQuZG93biB8fCB0aGlzLmtleWJvYXJkLmFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuaWNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMua2V5Ym9hcmQubGVmdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubGVmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleWJvYXJkLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5yaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleWJvYXJkLmVudGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kLnN0b3AoJ2RhbmdlcicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5sb2FkKHRoaXMubGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlib2FyZC5lbnRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWNlQXQodHgsIHR5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pc1Nwcml0ZUF0KHR4LCB0eSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEljZUJsb2NrKHR4LCB0eSwgZnJvemVuKSB7XHJcbiAgICAgICAgbGV0IGZvdW5kSWNlQmxvY2tzID0gWyBdO1xyXG4gICAgICAgIGZyb3plbiA9ICh0eXBlb2YgbGVuZ3RoID09PSAndW5kZWZpbmVkJykgPyBmYWxzZSA6IGZyb3plbjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlkID09PSBDb25zdHMuT0JKRUNUX0lDRSAmJiB0aGlzLnNwcml0ZXNbaV0ueXRpbGUgPT09IHR5KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWNlID0gdGhpcy5zcHJpdGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGljZS54dGlsZSAtIDEgPT09IHR4IHx8IGljZS54dGlsZSArIGljZS5sZW5ndGggPT09IHR4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRJY2VCbG9ja3MucHVzaChpY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmb3VuZEljZUJsb2Nrcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVzLnB1c2gobmV3IEljZSh0aGlzLCB0eCwgdHksIDEsIGZyb3plbikpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZm91bmRJY2VCbG9ja3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGZvdW5kSWNlQmxvY2tzWzBdLmFkZEJsb2NrKHR4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmpvaW5JY2VCbG9ja3MoZm91bmRJY2VCbG9ja3NbMF0sIGZvdW5kSWNlQmxvY2tzWzFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgam9pbkljZUJsb2NrcyhpY2VibG9ja0EsaWNlYmxvY2tCKSB7XHJcbiAgICAgICAgbGV0IHR4ID0gaWNlYmxvY2tBLnh0aWxlIDw9IGljZWJsb2NrQi54dGlsZSA/IGljZWJsb2NrQS54dGlsZSA6IGljZWJsb2NrQi54dGlsZTtcclxuICAgICAgICBsZXQgdHkgPSBpY2VibG9ja0EueXRpbGU7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IGljZWJsb2NrQS5sZW5ndGggKyBpY2VibG9ja0IubGVuZ3RoICsgMTtcclxuICAgICAgICB0aGlzLmFkZFNwcml0ZShuZXcgSWNlKHRoaXMsIHR4LCB0eSwgbGVuZ3RoKSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTcHJpdGUoaWNlYmxvY2tBKTtcclxuICAgICAgICB0aGlzLnJlbW92ZVNwcml0ZShpY2VibG9ja0IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUljZUJsb2NrKHR4LCB0eSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PQkpFQ1RfSUNFICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZXNbaV0ueXRpbGUgPT09IHR5ICYmXHJcbiAgICAgICAgICAgICAgICB0eCA+PSB0aGlzLnNwcml0ZXNbaV0ueHRpbGUgJiZcclxuICAgICAgICAgICAgICAgIHR4IDwgdGhpcy5zcHJpdGVzW2ldLnh0aWxlICsgdGhpcy5zcHJpdGVzW2ldLmxlbmd0aClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5yZW1vdmVCbG9jayh0eCkgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlcy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVGaXJlKHR4LCB0eSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICh0aGlzLnNwcml0ZXNbaV0ueXRpbGUgPT09IHR5KSAmJlxyXG4gICAgICAgICAgICAgICAgKHR4ID09PSB0aGlzLnNwcml0ZXNbaV0ueHRpbGUpICYmXHJcbiAgICAgICAgICAgICAgICAodGhpcy5zcHJpdGVzW2ldLmlkID09PSBDb25zdHMuT0JKRUNUX0ZJUkUpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVzLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFNwcml0ZShzcHJpdGUpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZXMucHVzaChzcHJpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNwcml0ZShzcHJpdGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldID09PSBzcHJpdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlcy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTcGFya3MoeHRpbGUsIHl0aWxlLCBjb2xvciwgcXVhbnRpdHksIGludGVuc2l0eSkge1xyXG4gICAgICAgIHRoaXMuc2Z4cy5wdXNoKG5ldyBTcGFya3ModGhpcywgeHRpbGUsIHl0aWxlLCBjb2xvciwgcXVhbnRpdHksIGludGVuc2l0eSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNmeChzcHJpdGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Z4cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZnhzW2ldID09PSBzcHJpdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Z4cy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzcHJpdGVUeXBlQXQodHgsIHR5LCBleGNsdWRlSWQpIHtcclxuICAgICAgICBleGNsdWRlSWQgPSAodHlwZW9mIGV4Y2x1ZGVJZCA9PT0gJ3VuZGVmaW5lZCcpID8gQ29uc3RzLk9CSkVDVF9PVVQgOiBleGNsdWRlSWQ7XHJcbiAgICAgICAgaWYgKHR4IDwgMCB8fCB0eSA8IDAgfHwgdHggPiB0aGlzLm1hcC53aWR0aCB8fCB0eSA+IHRoaXMubWFwLmhlaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ29uc3RzLk9CSkVDVF9PVVQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tYXAubWFwW3R5XVt0eF0pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaXNTcHJpdGVBdCh0eCwgdHkpICYmIHRoaXMuc3ByaXRlc1tpXS5pZCAhPT0gZXhjbHVkZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tpXS5pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5tYXBbdHldW3R4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIENvbnN0cy5PQkpFQ1RfQkFDS0dST1VORDtcclxuICAgIH1cclxuXHJcbiAgICBzcHJpdGVBdCh0eCwgdHkpIHtcclxuICAgICAgICBpZiAoIXRoaXMubWFwLm1hcFt0eV1bdHhdKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlzU3ByaXRlQXQodHgsIHR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCAqIGFzIENvbnN0cyBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlyZSBleHRlbmRzIEFuaW1TcHJpdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5KSB7XHJcbiAgICAgICAgc3VwZXIoQ29uc3RzLk9CSkVDVF9GSVJFLCBlbmdpbmUsICdpbWdfZmlyZScsXHJcbiAgICAgICAgICAgIHR4LCB0eSwgQ29uc3RzLlRJTEVfV0lEVEgsIENvbnN0cy5USUxFX1dJRFRILCAwLCAwLCAwLCAzLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9ET1dOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0Rvd24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb2xsaXNpb25zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSwgQ29uc3RzLk9CSkVDVF9GSVJFKSA9PT0gQ29uc3RzLk9CSkVDVF9JQ0UpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnZmlyZS1vZmYnKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlRmlyZSh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlSWNlQmxvY2sodGhpcy54dGlsZSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMjU1LCAxMjYsIDE5OCcsIDE1LCAwLjUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzEyNCwgMjEyLCAyNTUnLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSwgQ29uc3RzLk9CSkVDVF9GSVJFKSA9PT0gQ29uc3RzLk9CSkVDVF9NRVRBTCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVGaXJlKHRoaXMueHRpbGUsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzI1NSwgMTI2LCAxOTgnLCAxNSwgMC41KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdyYXZpdHkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvb3JuZXJzLmQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9ET1dOLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBkb0Rvd24oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVElMRV9XSURUSCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWUnO1xyXG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuL3Jlc291cmNlcyc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGNvbnN0IHJlc291cmNlcyA9IG5ldyBSZXNvdXJjZXMoKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ3RpbGVtYXAnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nX3RpbGVtYXAnKSk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWdfaWNlJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ19pY2UnKSk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWdfamFyJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ19qYXInKSk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWdfZmlyZScsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdfZmlyZScpKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltZ19kb25hJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ19kb25hJykpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnaW1nX2ludHJvJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ19pbnRybycpKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltZ19zdGFydCcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdfc3RhcnQnKSk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWdfbWV0YWwnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nX21ldGFsJykpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnZnJvc3QnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nX2Zyb3plbicpKTtcclxuXHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzLCByZXNvdXJjZXMpO1xyXG4gICAgd2luZG93LmdhbWUgPSBnYW1lO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbC1zZWxlY3RvcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSAnLTEnKSB7XHJcbiAgICAgICAgICAgIGdhbWUuZW5naW5lLmxldmVsID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcclxuICAgICAgICAgICAgZ2FtZS5lbmdpbmUuc2NlbmUubG9hZChnYW1lLmVuZ2luZS5sZXZlbCk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnLi9lbmdpbmUnO1xyXG5pbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0ICogYXMgQ29uc3RzIGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiBHYW1lIExvb3BcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHsqfSBjYW52YXZzICAgVGhlIGNhbnZhcyBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0geyp9IHJlc291cmNlcyAgR2FtZSByZXNvdXJjZXNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzLCByZXNvdXJjZXMpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gQ29uc3RzLkdBTUVfU1RBVEVfSU5UUk87XHJcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgRW5naW5lKGNhbnZhcywgcmVzb3VyY2VzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUludHJvKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lbG9vcCA9IHRoaXMuZ2FtZWxvb3BfLmJpbmQodGhpcyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG4gICAgICAgIHRoaXMuZ2FtZWxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBnYW1lbG9vcF8oKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLkdBTUVfU1RBVEVfSU5UUk86XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvSW50cm8oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5HQU1FX1NUQVRFX1BMQVk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVsb29wKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJbnRybygpIHtcclxuICAgICAgICB0aGlzLmludHJvID0gbmV3IEFuaW1TcHJpdGUobnVsbCwgdGhpcy5lbmdpbmUsICdpbWdfaW50cm8nLCAwLCAwLCA1NDQsIDQxNiwgMCwgMCwgMCwgMCwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgQW5pbVNwcml0ZShudWxsLCB0aGlzLmVuZ2luZSwgJ2ltZ19zdGFydCcsIDcsIDExLCAxNDAsIDI2LCAtMTAsIDAsIDAsIDEsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQuYW5pbURlbGF5ID0gQ29uc3RzLkFOSU1fU1RBTkRBUkRfREVMQVkgKiAyMDtcclxuICAgIH1cclxuXHJcbiAgICBkb0ludHJvKCkge1xyXG4gICAgICAgIHRoaXMuaW50cm8uZHJhdygpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQuZHJhdygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmdpbmUua2V5Ym9hcmQuZW50ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HQU1FX1NUQVRFX1BMQVk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnNvdW5kcmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBDb25zdHMgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEljZSBleHRlbmRzIEFuaW1TcHJpdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5LCBsZW5ndGgsIGZyb3plbikge1xyXG4gICAgICAgIHN1cGVyKENvbnN0cy5PQkpFQ1RfSUNFLCBlbmdpbmUsICdpbWdfaWNlJyxcclxuICAgICAgICAgICAgdHgsIHR5LCBDb25zdHMuVElMRV9XSURUSCwgQ29uc3RzLlRJTEVfV0lEVEgsIDAsIDAsIDAsIDEsIHRydWUpO1xyXG4gICAgICAgIHRoaXMueHRpbGUgPSB0eDtcclxuICAgICAgICB0aGlzLnl0aWxlID0gdHk7XHJcbiAgICAgICAgdGhpcy5mcm96ZW4gPSAodHlwZW9mIGZyb3plbiA9PT0gJ3VuZGVmaW5lZCcpID8gZmFsc2UgOiBmcm96ZW47XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5hbmltRW5kID0gMTtcclxuICAgICAgICB0aGlzLmFuaW1EZWxheSA9IDk7XHJcbiAgICAgICAgdGhpcy5hbmltUm93ID0gMDtcclxuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAwO1xyXG4gICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hlY2tGcmVlemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRCbG9jayh0eCkge1xyXG4gICAgICAgIGNvbnN0IHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZS0xLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBjb25zdCBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlK3RoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICh0eCA+IHRoaXMueHRpbGUgJiYgdGhpcy5nZXRUaWxlKHR4KzEsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT0JKRUNUX1dBTEwpIHx8XHJcbiAgICAgICAgICAgICh0eCA8IHRoaXMueHRpbGUgJiYgdGhpcy5nZXRUaWxlKHR4LTEsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT0JKRUNUX1dBTEwpIHx8XHJcbiAgICAgICAgICAgIChzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID09PSBDb25zdHMuT0JKRUNUX01FVEFMKSB8fFxyXG4gICAgICAgICAgICAoc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9PT0gQ29uc3RzLk9CSkVDVF9KQVIpIHx8XHJcbiAgICAgICAgICAgIChzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9CSkVDVF9NRVRBTCkgfHxcclxuICAgICAgICAgICAgKHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID09PSBDb25zdHMuT0JKRUNUX0pBUilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5mcm96ZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnh0aWxlID0gdHggPCB0aGlzLnh0aWxlID8gdHggOiB0aGlzLnh0aWxlO1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMueHRpbGUgKiBDb25zdHMuVElMRV9XSURUSDtcclxuICAgICAgICB0aGlzLmxlbmd0aCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3ByaXRlQXQodHgsIHR5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMueXRpbGUgPT09IHR5KSB7XHJcbiAgICAgICAgICAgIGlmICh0eCA+PSB0aGlzLnh0aWxlICYmIHR4IDwgKHRoaXMueHRpbGUgKyB0aGlzLmxlbmd0aCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQmxvY2sodHgpIHtcclxuICAgICAgICBpZiAodHggPT09IHRoaXMueHRpbGUpIHtcclxuICAgICAgICAgICAgdGhpcy54dGlsZSArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gQ29uc3RzLlRJTEVfV0lEVEg7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoLS07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eCA9PT0gdGhpcy54dGlsZSt0aGlzLmxlbmd0aC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoLS07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKFxyXG4gICAgICAgICAgICAgICAgbmV3IEljZSh0aGlzLmVuZ2luZSwgdHgrMSwgdGhpcy55dGlsZSwgdGhpcy54dGlsZSt0aGlzLmxlbmd0aC10eC0xKSk7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gdHggLSB0aGlzLnh0aWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuR2xpZGUoZGlyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoICE9PSAxIHx8IHRoaXMuZnJvemVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpciA9PT0gQ29uc3RzLkRJUl9MRUZUICAmJiBUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5sKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXIgPT09IENvbnN0cy5ESVJfUklHSFQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMucikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBncmF2aXR5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb29ybmVycy5kICYmICF0aGlzLmZyb3plbikge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0RPV04sIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZmFsbGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWNvbGxpc2lvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5HbGlkZSh0aGlzLmRpcnJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlycmVjdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGlsZV9kb3duID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZStpLCB0aGlzLnl0aWxlKzEpO1xyXG4gICAgICAgICAgICBpZiAodGlsZV9kb3duICYmIHRpbGVfZG93biAhPT0gQ29uc3RzLk9CSkVDVF9GSVJFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3JuZXJzLmQgPSB0aWxlX2Rvd247XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvb3JuZXJzLmQgPT09IENvbnN0cy5PQkpFQ1RfRklSRSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvb3JuZXJzLmQgPSBDb25zdHMuT0JKRUNUX0JBQ0tHUk9VTkQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29vcm5lcnMuciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUrdGhpcy5sZW5ndGgsIHRoaXMueXRpbGUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mcm96ZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1VuZnJlZXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0lDRV9NT1ZJTkc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9JQ0VfQ0hFQ0s6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0RPV046XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvRG93bigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLTEsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgIGNvbnN0IHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID0gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUrdGhpcy5sZW5ndGgsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgICAgICBpZiAodGhpcy5hbmltRGVsYXlDb3VudCsrID4gdGhpcy5hbmltRGVsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbVJvdyA9IHRoaXMuYW5pbVJvdyA9PT0gMCA/IDEgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIENvbnN0cy5USUxFX1dJRFRIKnRoaXMuYW5pbVJvdywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDEqQ29uc3RzLlRJTEVfV0lEVEgsIENvbnN0cy5USUxFX1dJRFRIKnRoaXMuYW5pbVJvdyxcclxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDMqQ29uc3RzLlRJTEVfV0lEVEgsIENvbnN0cy5USUxFX1dJRFRIKnRoaXMuYW5pbVJvdyxcclxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAgdGhpcy54K0NvbnN0cy5USUxFX1dJRFRILCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMSpDb25zdHMuVElMRV9XSURUSCwgQ29uc3RzLlRJTEVfV0lEVEgqdGhpcy5hbmltUm93LFxyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMypDb25zdHMuVElMRV9XSURUSCwgQ29uc3RzLlRJTEVfV0lEVEgqdGhpcy5hbmltUm93LFxyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICB0aGlzLngrQ29uc3RzLlRJTEVfV0lEVEgqKHRoaXMubGVuZ3RoLTEpLCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7ICBpIDwgdGhpcy5sZW5ndGgtMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMipDb25zdHMuVElMRV9XSURUSCwgQ29uc3RzLlRJTEVfV0lEVEgqdGhpcy5hbmltUm93LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAgdGhpcy54KyhDb25zdHMuVElMRV9XSURUSCppKSwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZnJvemVuKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGlsZSh0aGlzLnh0aWxlLTEsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT0JKRUNUX1dBTEwgfHxcclxuICAgICAgICAgICAgICAgIHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPT09IENvbnN0cy5PQkpFQ1RfTUVUQUwgfHxcclxuICAgICAgICAgICAgICAgIHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPT09IENvbnN0cy5PQkpFQ1RfSkFSXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoJ2Zyb3N0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMueHRpbGUqdGhpcy53aWR0aCktNyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnl0aWxlKnRoaXMuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGlsZSh0aGlzLnh0aWxlK3RoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKSA9PT0gQ29uc3RzLk9CSkVDVF9XQUxMIHx8XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9CSkVDVF9NRVRBTCB8fFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPT09IENvbnN0cy5PQkpFQ1RfSkFSXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoJ2Zyb3N0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMueHRpbGUrdGhpcy5sZW5ndGgpKnRoaXMud2lkdGgtNyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnl0aWxlKnRoaXMuaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2xpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVElMRV9XSURUSCkge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gNCAqIHRoaXMuZGlycmVjdGlvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9Eb3duKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRJTEVfV0lEVEgpIHtcclxuICAgICAgICAgICAgdGhpcy55ICs9IDQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1c2goZGlyKSB7XHJcbiAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gKHR5cGVvZiBkaXIgPT09ICd1bmRlZmluZWQnKSA/IHRoaXMuZGlycmVjdGlvbiA6IGRpcjtcclxuICAgICAgICBpZiAoIXRoaXMuY29sbGlzaW9uKCkgJiYgIXRoaXMuZ3Jhdml0eSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfSUNFX01PVklORywgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja1VuZnJlZXplKCkge1xyXG4gICAgICAgIGNvbnN0IHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZS0xLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBjb25zdCBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlK3RoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VGlsZSh0aGlzLnh0aWxlLTEsIHRoaXMueXRpbGUpICE9PSBDb25zdHMuT0JKRUNUX1dBTEwgJiZcclxuICAgICAgICAgICAgdGhpcy5nZXRUaWxlKHRoaXMueHRpbGUrdGhpcy5sZW5ndGgsIHRoaXMueXRpbGUpICE9PSBDb25zdHMuT0JKRUNUX1dBTEwgJiZcclxuICAgICAgICAgICAgc3ByaXRlVHlwZUF0TGVmdENvcm5lciAhPT0gQ29uc3RzLk9CSkVDVF9NRVRBTCAmJlxyXG4gICAgICAgICAgICBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyICE9PSBDb25zdHMuT0JKRUNUX0pBUiAmJlxyXG4gICAgICAgICAgICBzcHJpdGVUeXBlQXRSaWdodENvcm5lciAhPT0gQ29uc3RzLk9CSkVDVF9NRVRBTCAmJlxyXG4gICAgICAgICAgICBzcHJpdGVUeXBlQXRSaWdodENvcm5lciAhPT0gQ29uc3RzLk9CSkVDVF9KQVJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5mcm96ZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tGcmVlemUoKSB7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLTEsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgIGNvbnN0IHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID0gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUrdGhpcy5sZW5ndGgsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKHRoaXMuZ2V0VGlsZSh0aGlzLnh0aWxlLTEsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT0JKRUNUX1dBTEwpIHx8XHJcbiAgICAgICAgICAgICh0aGlzLmdldFRpbGUodGhpcy54dGlsZSt0aGlzLmxlbmd0aCwgdGhpcy55dGlsZSkgPT09IENvbnN0cy5PQkpFQ1RfV0FMTCkgfHxcclxuICAgICAgICAgICAgKHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPT09IENvbnN0cy5PQkpFQ1RfTUVUQUwpIHx8XHJcbiAgICAgICAgICAgIChzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID09PSBDb25zdHMuT0JKRUNUX0pBUikgfHxcclxuICAgICAgICAgICAgKHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID09PSBDb25zdHMuT0JKRUNUX01FVEFMKSB8fFxyXG4gICAgICAgICAgICAoc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPT09IENvbnN0cy5PQkpFQ1RfSkFSKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmZyb3plbiA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mcm96ZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEtleWJvYXJkIHByZXNzIGVuZ2luZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmtleWRvd24gPSB0aGlzLmtleWRvd25fLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5rZXl1cCA9IHRoaXMua2V5dXBfLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnRybyA9IHRydWU7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duLCBmYWxzZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXl1cCwgZmFsc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW50cm8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW50cm8gPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX2FjdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKCkgPT4gdGhpcy5kb3duID0gdHJ1ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9hY3Rpb24nKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCAoKSA9PiB0aGlzLmRvd24gPSBmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9sZWZ0JykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmxlZnQgPSB0cnVlKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX2xlZnQnKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCAoKSA9PiB0aGlzLmxlZnQgPSBmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9yaWdodCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKCkgPT4gdGhpcy5yaWdodCA9IHRydWUpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fcmlnaHQnKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCAoKSA9PiB0aGlzLnJpZ2h0ID0gZmFsc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fc2VsZWN0JykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgKCkgPT4gdGhpcy5lbnRlciA9IHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBrZXlkb3duXyhlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAzNzogLy8gTGVmdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM4OiAvLyBVcFxyXG4gICAgICAgICAgICAgICAgdGhpcy51cCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOTogLy8gUmlnaHRcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDA6IC8vIERvd25cclxuICAgICAgICAgICAgY2FzZSAzMjogLy8gU3BhY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMzogLy9FbnRlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtleXVwXyhlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAzNzogLy8gTGVmdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzODogLy8gVXBcclxuICAgICAgICAgICAgICAgIHRoaXMudXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM5OiAvLyBSaWdodFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDA6IC8vIERvd25cclxuICAgICAgICAgICAgY2FzZSAzMjogLy8gU3BhY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEzOiAvL0VudGVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgbGV2ZWxzID0gW1xyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6MCxcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjExLFwieVwiOjQsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo4LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjcsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6NixcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo0LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo4LFwieVwiOjQsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjo4LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo3LFwieVwiOjcsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6MTAsXCJ2XCI6MX1dfSxcclxuICAgIHtcIm1hcFwiOltbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwxLDAsMSwwLDAsMCwwLDAsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXV0sXCJ0aGVtZVwiOjEsXCJzcHJpdGVzXCI6W3tcImlkXCI6NyxcInhcIjozLFwieVwiOjcsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NyxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6NCxcInlcIjo3LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo1LFwidlwiOjR9LHtcImlkXCI6NixcInhcIjoxMixcInlcIjo4LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMixcInlcIjo3LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMixcInlcIjo2LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMyxcInlcIjo4LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo4LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo3LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo2LFwidlwiOjF9XX0sXHJcbiAgICB7XCJtYXBcIjpbWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwxLDAsMCwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwxLDAsMCwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDAsMCwxLDEsMSwxLDEsMCwwLDAsMCwxLDEsMV0sWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1dLFwidGhlbWVcIjoyLFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6MTQsXCJ5XCI6NixcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo0LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo5LFwieVwiOjYsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6NSxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6NixcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6NSxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6OCxcInlcIjo2LFwidlwiOjF9XX0sXHJcbiAgICB7XCJtYXBcIjpbWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1dLFwidGhlbWVcIjowLFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6OCxcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMixcInlcIjo4LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMyxcInlcIjo3LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMSxcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjgsXCJ2XCI6NX0se1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjcsXCJ2XCI6M30se1wiaWRcIjozLFwieFwiOjEyLFwieVwiOjYsXCJ2XCI6Mn0se1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6NCxcInlcIjo3LFwidlwiOjN9LHtcImlkXCI6MyxcInhcIjozLFwieVwiOjYsXCJ2XCI6Mn0se1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NCxcInlcIjo4LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjozLFwieVwiOjcsXCJ2XCI6MX1dfSxcclxuICAgIHtcIm1hcFwiOltbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxbMSwxLDEsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxbMSwxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxbMSwxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxbMSwxLDEsMCwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMCwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMCwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXV0sXCJ0aGVtZVwiOjYsXCJzcHJpdGVzXCI6W3tcImlkXCI6NyxcInhcIjoxMSxcInlcIjo4LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjoxMCxcInZcIjozfSx7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6OSxcInZcIjozfSx7XCJpZFwiOjMsXCJ4XCI6NyxcInlcIjo3LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjozLFwieVwiOjUsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjksXCJ5XCI6NyxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MyxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MyxcInlcIjo0LFwidlwiOjF9XX0sXHJcbiAgICB7XCJtYXBcIjpbWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sWzEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1dLFwidGhlbWVcIjo1LFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6MTQsXCJ5XCI6MyxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MTQsXCJ5XCI6NCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MyxcInlcIjo0LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjYsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NixcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6NixcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MSxcInlcIjo4LFwidlwiOjEyfSx7XCJpZFwiOjYsXCJ4XCI6MixcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MyxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NCxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEyLFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMCxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MixcInlcIjo3LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoyLFwieVwiOjUsXCJ2XCI6MX1dfSxcclxuICAgIHtcIm1hcFwiOltbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXV0sXCJ0aGVtZVwiOjEsXCJzcHJpdGVzXCI6W3tcImlkXCI6NyxcInhcIjoxMixcInlcIjo0LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo4LFwieVwiOjExLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo4LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo5LFwieVwiOjExLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMCxcInlcIjoxMSxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6OCxcInlcIjo1LFwidlwiOjV9LHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo0LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjYsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NSxcInZcIjoxfV19LFxyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMCwwLDEsMCwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6MSxcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjgsXCJ5XCI6NixcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjExLFwieVwiOjEwLFwidlwiOjJ9LHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjksXCJ2XCI6N30se1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6OCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6NixcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6NSxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjo1LFwidlwiOjF9XX0sXHJcbiAgICB7XCJtYXBcIjpbWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMV0sWzEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sWzEsMSwwLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwwLDEsMV0sWzEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sWzEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sWzEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sWzEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1dLFwidGhlbWVcIjo2LFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6NSxcInlcIjo0LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo1LFwieVwiOjgsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NSxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6OCxcInlcIjo0LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMSxcInlcIjo4LFwidlwiOjF9XX0sXHJcbiAgICB7XCJtYXBcIjpbWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDEsMSwxLDEsMSwwLDAsMSwxLDEsMV0sWzEsMSwxLDAsMCwwLDAsMSwxLDEsMCwwLDAsMCwxLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1dLFwidGhlbWVcIjoxMCxcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjMsXCJ5XCI6NCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MixcInlcIjo2LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjozLFwieVwiOjcsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjQsXCJ5XCI6OCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo2LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo3LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo4LFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6OCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6NyxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6NixcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MixcInlcIjo1LFwidlwiOjEwfSx7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo0LFwidlwiOjF9XX0sXHJcbiAgICB7XCJtYXBcIjpbWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sWzEsMSwxLDEsMCwwLDEsMSwxLDEsMSwxLDEsMCwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxLDEsMV0sWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMCwxLDEsMV0sWzEsMSwxLDAsMCwwLDAsMCwwLDEsMCwwLDEsMCwxLDEsMV0sWzEsMSwxLDEsMSwwLDAsMCwxLDEsMSwwLDAsMCwxLDEsMV0sWzEsMSwxLDEsMSwwLDAsMCwxLDEsMCwwLDEsMCwxLDEsMV0sWzEsMSwxLDEsMSwwLDAsMCwxLDEsMSwwLDAsMCwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1dLFwidGhlbWVcIjo2LFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6MyxcInlcIjozLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMyxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6NCxcInlcIjo0LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjMsXCJ2XCI6Mn0se1wiaWRcIjozLFwieFwiOjExLFwieVwiOjMsXCJ2XCI6Mn0se1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6MyxcInZcIjoxfV19LFxyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMCwwLDAsMSwxLDEsMSwxLDEsMSwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFsxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMCwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6NyxcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjgsXCJ5XCI6NSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo1LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo1LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoyLFwieVwiOjMsXCJ2XCI6Mn0se1wiaWRcIjozLFwieFwiOjE0LFwieVwiOjQsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjE0LFwieVwiOjQsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjEzLFwieVwiOjMsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjE0LFwieVwiOjMsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjExLFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo1LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMixcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoyLFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo4LFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTMsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MyxcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjozLFwieVwiOjgsXCJ2XCI6MTF9LHtcImlkXCI6NixcInhcIjo0LFwieVwiOjksXCJ2XCI6MX1dfSxcclxuICAgIHtcclxuICAgICAgICBtYXA6IFtcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMCwwLDAsMCwwLDAsMCwxLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwwLDAsMCwwLDEsMSwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNwcml0ZXM6IFtcclxuICAgICAgICAgICAge2lkIDo3LCB4OiAxMywgeTogMiwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6MywgeDogNCwgeTogNCwgdjogOH0sXHJcbiAgICAgICAgICAgIHtpZCA6MywgeDogMTEsIHk6IDMsIHY6IDR9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDMsIHk6IDUsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDQsIHk6IDYsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDUsIHk6IDcsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDEwLCB5OiA2LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiAxMSwgeTogNSwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogMTQsIHk6IDEwLCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiAxNCwgeTogOSwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogMiwgeTogMTAsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDksIHk6IDgsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDIsIHk6IDksIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDgsIHk6IDgsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDcsIHk6IDgsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDYsIHk6IDgsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDgsIHk6IDEwLCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA3LCB5OiAxMCwgdjogMX1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHRoZW1lOiA4XHJcbiAgICB9LFxyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6NixcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjE0LFwieVwiOjEwLFwidlwiOjF9XX0sXHJcbiAgICB7XCJtYXBcIjpbWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwwLDAsMCwwLDAsMSwwLDEsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDEsMSwxLDEsMCwwLDEsMCwxLDEsMCwwLDEsMV0sWzEsMSwwLDEsMCwwLDEsMSwwLDEsMCwxLDAsMSwwLDEsMV0sWzEsMSwwLDEsMSwwLDEsMSwxLDEsMCwxLDAsMSwwLDEsMV0sWzEsMSwwLDEsMCwwLDEsMCwxLDEsMCwxLDAsMSwwLDEsMV0sWzEsMSwwLDEsMCwwLDEsMCwwLDEsMCwxLDAsMSwwLDEsMV0sWzEsMSwwLDEsMSwwLDEsMCwwLDEsMSwxLDEsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1dLFwidGhlbWVcIjo5LFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6MTAsXCJ5XCI6MTEsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6MSxcInZcIjoxfSx7XCJpZFwiOjUsXCJ4XCI6NCxcInlcIjoxMSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjo1LFwidlwiOjF9XX1cclxuXTtcclxuXHJcbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlcyc7XHJcbmltcG9ydCAqIGFzIENvbnN0cyBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcclxuICAgICAgICBzdXBlcihDb25zdHMuT0JKRUNUX1BMQVlFUiwgZW5naW5lLCAnaW1nX2RvbmEnLCB0eCwgdHksIDQ4LCA2NCwgLTEwLCAtMzIsIDIsIDIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMjtcclxuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAwOyAvL3N0YW5kaW5nIHRvcCByaWdodCBkb3duIGxlZnRcclxuICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGlsZVdpZHRoID0gQ29uc3RzLlRJTEVfV0lEVEg7XHJcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gQ29uc3RzLlRJTEVfV0lEVEg7XHJcbiAgICAgICAgdGhpcy5hbmltRGVsYXkgPSAzO1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhbmRDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLmludHJvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGVmdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIC8vaWYgc3RhbmRpbmcgdGhlbiB0dXJuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gIT09IENvbnN0cy5ESVJfTEVGVCkge1xyXG4gICAgICAgICAgICAgICAgLy9pcyBub3QgdW5kZXIgYSBicmlja1xyXG4gICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9UVVJOX1NUQVJULCBDb25zdHMuQU5JTV9UVVJOX0VORCwgZmFsc2UsIENvbnN0cy5BTklNX1JJR0hUX1JPVywgNCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9DUk9VQ0hfU1RBUlQsQ29uc3RzLkFOSU1fQ1JPVUNIX1NUQVJULCBmYWxzZSwgQ29uc3RzLkFOSU1fTEVGVF9ST1csIDQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9UVVJOLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlycmVjdGlvbiA9IENvbnN0cy5ESVJfTEVGVDtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgLy9ydW5uaW5nXHJcbiAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmwpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9ub3QgdW5kZXIgYSBicmlja1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fUlVOX1NUQVJULCBDb25zdHMuQU5JTV9SVU5fRU5ELCBmYWxzZSwgQ29uc3RzLkFOSU1fTEVGVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9DUk9VQ0hfU1RBUlQsIENvbnN0cy5BTklNX0NST1VDSF9FTkQsIGZhbHNlLCBDb25zdHMuQU5JTV9MRUZUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfTEVGVCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2hpdCBhbiBpY2VcclxuICAgICAgICAgICAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSAmJiAodGhpcy5jb29ybmVycy5sID09PSBDb25zdHMuT0JKRUNUX0lDRSB8fCB0aGlzLmNvb3JuZXJzLmwgPT09IENvbnN0cy5PQkpFQ1RfTUVUQUwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2NsaW1iXHJcbiAgICAgICAgICAgICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMubCkgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkgICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudWwpICYmICF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9QVVNIX1NUQVJULENvbnN0cy5BTklNX1BVU0hfU1RBUlQsZmFsc2UsIENvbnN0cy5BTklNX0xFRlRfUk9XKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1VQLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByaWdodCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gIT09IENvbnN0cy5ESVJfUklHSFQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fVFVSTl9TVEFSVCwgQ29uc3RzLkFOSU1fVFVSTl9FTkQsIGZhbHNlLCBDb25zdHMuQU5JTV9MRUZUX1JPVywgNCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9DUk9VQ0hfU1RBUlQsQ29uc3RzLkFOSU1fQ1JPVUNIX1NUQVJULCBmYWxzZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfVFVSTiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSBDb25zdHMuRElSX1JJR0hUO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9SVU5fU1RBUlQsIENvbnN0cy5BTklNX1JVTl9FTkQsIGZhbHNlLCBDb25zdHMuQU5JTV9SSUdIVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9DUk9VQ0hfU1RBUlQsIENvbnN0cy5BTklNX0NST1VDSF9FTkQsIGZhbHNlLCBDb25zdHMuQU5JTV9SSUdIVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1JJR0hULCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSAmJiAodGhpcy5jb29ybmVycy5yID09PSBDb25zdHMuT0JKRUNUX0lDRSB8fCB0aGlzLmNvb3JuZXJzLnIgPT09IENvbnN0cy5PQkpFQ1RfTUVUQUwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMucikgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51cikgJiYgIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX1BVU0hfU1RBUlQsQ29uc3RzLkFOSU1fUFVTSF9TVEFSVCxmYWxzZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1VQLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXJuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBDb25zdHMuTU9WRV9SSVApIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheU9uY2UoJ2RhbmdlcicpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1JJUCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9SSVBfU1RBUlQsQ29uc3RzLkFOSU1fUklQX0VORCwgdHJ1ZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW50cm8oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0JJR19GQUxMX1NUQVJULENvbnN0cy5BTklNX0JJR19GQUxMX0VORCwgdHJ1ZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA0KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0lOVFJPLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnkgLT0gMzI7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0cm8oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0ZBTExfU1RBUlQsIENvbnN0cy5BTklNX0JJR19GQUxMX0VORCwgdHJ1ZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA0KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX09VVFJPLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmlubmVyQ291bnRlciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZG9SaXAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdyYXZpdHkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29vcm5lcnMuZCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcm9yKCd1bmRlZmluZWQgY29vcm5lcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfRE9XTiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mYWxsQ291bnRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheU9uY2UoXCJmYWxsaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmFsbENvdW50ZXIgPj0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9CSUdfRkFMTF9TVEFSVCwgQ29uc3RzLkFOSU1fQklHX0ZBTExfRU5ELCB0cnVlLCBDb25zdHMuQU5JTV9SSUdIVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fQklHX0ZBTExfU1RBUlQsIENvbnN0cy5BTklNX0JJR19GQUxMX0VORCwgdHJ1ZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5zdG9wKFwiZmFsbGluZ1wiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBDb25zdHMuTU9WRV9ET1dOKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnZmFsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZhbGxDb3VudGVyID49IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUgKyAxLCAnMjU1LCAxMzUsIDEyNCcsIDUsIDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSArIDEsICcxMjIsIDIxMSwgMjU1JywgMTAsICAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhbGxDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvb3JuZXJzLmQgPT09IENvbnN0cy5PQkpFQ1RfSkFSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgamFyID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqYXIgJiYgamFyLm9uRmlyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1cm4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWNlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRElSX1JJR0hUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kcikgJiYgdGhpcy5jb29ybmVycy5kciAhPT0gQ29uc3RzLk9CSkVDVF9GSVJFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9JQ0VfU1RBUlQsQ29uc3RzLkFOSU1fSUNFX0VORCxmYWxzZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9JQ0VfTUFLRSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvb3JuZXJzLmRyID09PSBDb25zdHMuT0JKRUNUX0lDRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fSUNFX1NUQVJULENvbnN0cy5BTklNX0lDRV9FTkQsZmFsc2UsIENvbnN0cy5BTklNX1JJR0hUX1JPVywgNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfSUNFX1JFTU9WRSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0lDRV9TVEFSVCxDb25zdHMuQU5JTV9JQ0VfRU5ELGZhbHNlLCBDb25zdHMuQU5JTV9SSUdIVF9ST1csIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0lDRV9GQUlMLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZGwpICYmICh0aGlzLmNvb3JuZXJzLmRsICE9PSBDb25zdHMuT0JKRUNUX0ZJUkUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9JQ0VfU1RBUlQsQ29uc3RzLkFOSU1fSUNFX0VORCxmYWxzZSwgQ29uc3RzLkFOSU1fTEVGVF9ST1csIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0lDRV9NQUtFLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29vcm5lcnMuZGwgPT09IENvbnN0cy5PQkpFQ1RfSUNFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9JQ0VfU1RBUlQsQ29uc3RzLkFOSU1fSUNFX0VORCxmYWxzZSwgQ29uc3RzLkFOSU1fTEVGVF9ST1csIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0lDRV9SRU1PVkUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9JQ0VfU1RBUlQsQ29uc3RzLkFOSU1fSUNFX0VORCxmYWxzZSwgQ29uc3RzLkFOSU1fTEVGVF9ST1csIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0lDRV9GQUlMLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganVtcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5ESVJfUklHSFQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5yKSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudXIpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9QVVNIX1NUQVJULENvbnN0cy5BTklNX1BVU0hfU1RBUlQsZmFsc2UsIENvbnN0cy5BTklNX1JJR0hUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9VUCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMubCkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnVsKSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fUFVTSF9TVEFSVCxDb25zdHMuQU5JTV9QVVNIX1NUQVJULGZhbHNlLCBDb25zdHMuQU5JTV9MRUZUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9VUCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9SdW4oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuQU5JTV9GUkFNRV9DT1VOVCkge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZCAqIHRoaXMuZGlycmVjdGlvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvVHVybigpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIrKztcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID49IENvbnN0cy5BTklNX0ZSQU1FX0NPVU5UKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9PdXRybygpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyICUgMTAgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pbm5lckNvdW50ZXIgKz0gMTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzEyNCwgMjM4LCA2NicsIDIwLCAgMC41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMjU1LCAxMzUsIDEyNCcsIDE1LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPT09IDUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTIyLCAyMTEsIDI1NScsIDEwLCAgMS41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgJSAyID09PSAwICYmIHRoaXMuaW5uZXJDb3VudGVyIDwgNikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnY2xpbWInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgJSAyID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMueSAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPj0gNikge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdzdGF0ZS1sZWF2ZScpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLm5leHRMZXZlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb0ludHJvKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcxMjQsIDIzOCwgNjYnLCAyMCwgIDAuNSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMjU1LCAxMzUsIDEyNCcsIDE1LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcxMjIsIDIxMSwgMjU1JywgMTAsICAxLjUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdzdGFnZS1lbnRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IDE2KSB7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSAyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnN0b3AoXCJmYWxsaW5nXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvR3Jhdml0eSgpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5BTklNX0ZSQU1FX0NPVU5UKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLmZhbGxDb3VudGVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvU3RhbmQoKSB7XHJcbiAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGFuZENvdW50ZXIrKyA+IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX1NMRUVQX1NUQVJULENvbnN0cy5BTklNX1NMRUVQX0VORCx0cnVlLCB0aGlzLmRpcnJlY3Rpb24gIT09IDEgPyBDb25zdHMuQU5JTV9MRUZUX1JPVyA6IENvbnN0cy5BTklNX1JJR0hUX1JPVywgNDgsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX1NUQU5EX1NUQVJULENvbnN0cy5BTklNX1NUQU5EX0VORCx0cnVlLCB0aGlzLmRpcnJlY3Rpb24gIT09IDEgPyBDb25zdHMuQU5JTV9MRUZUX1JPVyA6IENvbnN0cy5BTklNX1JJR0hUX1JPVywgOCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fQ1JPVUNIX1NUQVJULENvbnN0cy5BTklNX0NST1VDSF9TVEFSVCwgZmFsc2UsIHRoaXMuZGlycmVjdGlvbiAhPT0gMSA/IENvbnN0cy5BTklNX0xFRlRfUk9XIDogQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA4LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9VcCgpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IDE4KSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jb3VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnY2xpbWInKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzEyNCwgMjM4LCA2NicsIDEwLCAgMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcyNTUsIDEzNSwgMTI0JywgNSwgMS4yNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX1BVU0hfRU5ELCBDb25zdHMuQU5JTV9QVVNIX0VORCwgZmFsc2UsIHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRJUl9SSUdIVCA/IENvbnN0cy5BTklNX1JJR0hUX1JPVyA6IENvbnN0cy5BTklNX0xFRlRfUk9XKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fSlVNUF9TVEFSVCwgQ29uc3RzLkFOSU1fSlVNUF9TVEFSVCwgZmFsc2UsIHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRJUl9SSUdIVCA/IENvbnN0cy5BTklNX1JJR0hUX1JPVyA6IENvbnN0cy5BTklNX0xFRlRfUk9XKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gOCAqIHRoaXMuZGlycmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fSlVNUF9FTkQsIENvbnN0cy5BTklNX0pVTVBfRU5ELCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRElSX1JJR0hUID8gQ29uc3RzLkFOSU1fUklHSFRfUk9XIDogQ29uc3RzLkFOSU1fTEVGVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oMiwgMiwgZmFsc2UsIHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRJUl9SSUdIVCA/IENvbnN0cy5BTklNX1JJR0hUX1JPVyA6IENvbnN0cy5BTklNX0xFRlRfUk9XKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gOCAqIHRoaXMuZGlycmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTg6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX1NUQU5ELCBDb25zdHMuQU5JTV9TVEFORCwgZmFsc2UsIHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRJUl9SSUdIVCA/IENvbnN0cy5BTklNX1JJR0hUX1JPVyA6IENvbnN0cy5BTklNX0xFRlRfUk9XKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gOCAqIHRoaXMuZGlycmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWtlSWNlKCkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ25ldy1pY2UnKTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRJY2VCbG9jayh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlKzEpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlICsgMSk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUgKyAxLCAnMTI0LCAyMTQsIDI1NScsIDUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUljZUJsb2NrKCkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1yZW1vdmUnKTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVJY2VCbG9jayh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlKzEpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlICsgMSk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUgKyAxLCAnMTI0LCAyMTQsIDI1NScsIDUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2goKSB7XHJcbiAgICAgICAgbGV0IGljZSA9ICB0aGlzLmVuZ2luZS5pY2VBdCh0aGlzLnh0aWxlK3RoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgaWYgKGljZSAmJiBpY2UuY2FuR2xpZGUodGhpcy5kaXJyZWN0aW9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSwgJzI1NSwgMjU1LCAyNTUnLCAzKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUsICcxMjQsIDIxNCwgMjU1JywgMywgMS41KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX1BVU0hfU1RBUlQsIENvbnN0cy5BTklNX1BVU0hfRU5ELCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRElSX1JJR0hUID8gQ29uc3RzLkFOSU1fUklHSFRfUk9XIDogQ29uc3RzLkFOSU1fTEVGVF9ST1csIDMpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1BVU0gsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb1B1c2goKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDI7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuQU5JTV9GUkFNRV9DT1VOVCkge1xyXG4gICAgICAgICAgICAvLyBmaXhtZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpY2UgPSAgdGhpcy5lbmdpbmUuaWNlQXQodGhpcy54dGlsZSt0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUpO1xyXG4gICAgICAgICAgICBpZiAoaWNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtcHVzaCcpO1xyXG4gICAgICAgICAgICAgICAgaWNlLnB1c2godGhpcy5kaXJyZWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvSWNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENvbnN0cy5NT1ZFX0lDRV9NQUtFKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VJY2UoKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJY2VCbG9jaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFOSU1fRlJBTUVfQ09VTlQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb0ZhaWxJY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA9PT0gOCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUgKyAxLCAnODgsNjYsNjYnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+PSBDb25zdHMuQU5JTV9GUkFNRV9DT1VOVCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpc2lvbnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCBDb25zdHMuT0JKRUNUX1BMQVlFUikgPT09IENvbnN0cy5PQkpFQ1RfRklSRSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1cm4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSAoKSB7XHJcbiAgICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb25zKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IENvbnN0cy5NT1ZFX1NUQU5EKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhbmRDb3VudGVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IENvbnN0cy5NT1ZFX0RPV04pIHtcclxuICAgICAgICAgICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX1JJR0hUOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1J1bigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfTEVGVDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9SdW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0RPV046XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvR3Jhdml0eSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfVVA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvVXAoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX1RVUk46XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvVHVybigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfSUNFX01BS0U6XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfSUNFX1JFTU9WRTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9JY2UoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0lDRV9GQUlMOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0ZhaWxJY2UoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX1NUQU5EOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1N0YW5kKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9QVVNIOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1B1c2goKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX1JJUDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9SaXAoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX09VVFJPOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb091dHJvKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9JTlRSTzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9JbnRybygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFJlc291cmNlcyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQobmFtZSwgcmVzb3VyY2UpIHtcclxuICAgICAgICB0aGlzLnJlc291cmNlc1tuYW1lXSA9IHJlc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzW25hbWVdO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBDb25zdHMgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSAnLi90aWxlbWFwJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBJY2UgfSBmcm9tICcuL2ljZSc7XHJcbmltcG9ydCB7IEZpcmUgfSBmcm9tICcuL2ZpcmUnO1xyXG5pbXBvcnQgeyBsZXZlbHMgfSBmcm9tICcuL2xldmVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICBkYXRhLm1hcCA9IHRoaXMuZW5naW5lLm1hcC5tYXA7XHJcbiAgICAgICAgZGF0YS50aGVtZSA9IHRoaXMuZW5naW5lLm1hcC50aGVtZTtcclxuICAgICAgICBkYXRhLnNwcml0ZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiB0aGlzLmVuZ2luZS5zcHJpdGVzKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9ICh0eXBlb2Ygc3ByaXRlLmxlbmd0aCA9PT0gXCJ1bmRlZmluZWRcIikgPyAxIDogc3ByaXRlLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFsdWUgPSBzcHJpdGUuaWQgPT09IENvbnN0cy5PQkpFQ1RfSkFSID8gc3ByaXRlLm9uRmlyZSA6IHZhbHVlO1xyXG4gICAgICAgICAgICBkYXRhLnNwcml0ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IHNwcml0ZS5pZCxcclxuICAgICAgICAgICAgICAgIFwieFwiOiBzcHJpdGUueHRpbGUsXHJcbiAgICAgICAgICAgICAgICBcInlcIjogc3ByaXRlLnl0aWxlLFxyXG4gICAgICAgICAgICAgICAgXCJ2XCI6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZChpbmRleCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbGV2ZWxzW2luZGV4XSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuZ2luZS5sZXZlbCA9IGluZGV4O1xyXG4gICAgICAgIGNvbnN0IGxldmVsID0gbGV2ZWxzW2luZGV4XTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5zcHJpdGVzID0gW107XHJcbiAgICAgICAgdGhpcy5lbmdpbmUubWFwID0gbmV3IFRpbGVNYXAodGhpcy5lbmdpbmUsIGxldmVsLm1hcCwgbGV2ZWwudGhlbWUpO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3ByaXRlIG9mIGxldmVsLnNwcml0ZXMpIHtcclxuICAgICAgICAgICAgc3dpdGNoKHNwcml0ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT0JKRUNUX1BMQVlFUjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZSh0aGlzLmVuZ2luZS5wbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT0JKRUNUX0lDRTpcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGUudiA9IHR5cGVvZiBzcHJpdGUudiA9PT0gXCJ1bmRlZmluZWRcIiA/IDEgOiBzcHJpdGUudjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IEljZSh0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55LCBwYXJzZUludChzcHJpdGUudikpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9NRVRBTDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IE1ldGFsKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnksIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9GSVJFOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShuZXcgRmlyZSh0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PQkpFQ1RfSkFSOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGphciA9IG5ldyBKYXIodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgamFyLm9uRmlyZSA9IHNwcml0ZS52ID09PSBcIjFcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUoamFyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0ICogYXMgQ29uc3RzIGZyb20gJy4vY29uc3RhbnRzJztcclxuY2xhc3MgUGFydGljbGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgY29sb3IsIGludGVuY2l0eSkge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykgPyAnMjU1LDI1NSwyNTUnIDogY29sb3I7XHJcbiAgICAgICAgdGhpcy5yID0gMztcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy52eCA9IChNYXRoLnJhbmRvbSgpICogNCAtIDIpICogaW50ZW5jaXR5O1xyXG4gICAgICAgIHRoaXMudnkgPSAoTWF0aC5yYW5kb20oKSAqIDYgLSA0KSAqIGludGVuY2l0eTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMC4xNTtcclxuICAgICAgICB0aGlzLmxpZmUgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBsZXQgb3BhY2l0eSA9IHRoaXMubGlmZSAvIDI1NTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgnICsgdGhpcy5jb2xvcisgJywnICsgb3BhY2l0eSArICcpJztcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMuciwgMCwgTWF0aC5QSSoyLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy52eDtcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eTtcclxuICAgICAgICB0aGlzLnZ5ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5saWZlIC09IDU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGFya3MgZXh0ZW5kcyBTcHJpdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChlbmdpbmUsIHR4LCB0eSwgY29sb3IsIGxlbmd0aCwgaW50ZW5jaXR5KSB7XHJcbiAgICAgICAgc3VwZXIobnVsbCwgZW5naW5lLCB0eCwgdHksIDMyLCAzMik7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICh0eXBlb2YgY29sb3IgPT09ICd1bmRlZmluZWQnKSA/ICcyNTUsMjU1LDI1NScgOiBjb2xvcjtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9ICh0eXBlb2YgbGVuZ3RoID09PSAndW5kZWZpbmVkJykgPyAxMCA6IGxlbmd0aDtcclxuICAgICAgICB0aGlzLmludGVuY2l0eSA9ICh0eXBlb2YgaW50ZW5jaXR5ID09PSAndW5kZWZpbmVkJykgPyAxIDogaW50ZW5jaXR5O1xyXG4gICAgICAgIHRoaXMucGFydGljbGVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldID0gbmV3IFBhcnRpY2xlKHRoaXMuZW5naW5lLmN0eCwgdHgqQ29uc3RzLlRJTEVfV0lEVEgrMTYsIHR5KkNvbnN0cy5USUxFX1dJRFRIKzE2LCB0aGlzLmNvbG9yLCB0aGlzLmludGVuY2l0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuY3R4LnNhdmUoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmdpbmVNb3ZlKCkge1xyXG4gICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXS5tb3ZlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcnRpY2xlc1tpXS5saWZlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcnRpY2xlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlU2Z4KHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU291bmQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5tdXNpY09uID0gdHJ1ZTtcclxuXHRcdHRoaXMuc291bmRPbiA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy5zZnhWb2x1bWUgPSAwLjM7XHJcblx0XHR0aGlzLnNmeCA9IHtcclxuXHRcdFx0XCJmaXJlLW9mZlwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1maXJlLW9mZicpLFxyXG5cdFx0XHRcImljZS1wdXNoXCIgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Z4LWljZS1wdXNoJyksXHJcblx0XHRcdFwiZmFsbFwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1mYWxsJyksXHJcblx0XHRcdFwiZmFsbGluZ1wiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1mYWxsaW5nJyksXHJcblx0XHRcdFwibmV3LWljZVwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1uZXctaWNlJyksXHJcblx0XHRcdFwiY2xpbWJcIiA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZngtY2xpbWInKSxcclxuXHRcdFx0XCJpY2UtY29sbGlzaW9uXCIgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Z4LWljZS1jb2xsaXNpb24nKSxcclxuXHRcdFx0XCJzdGFnZS1lbnRlclwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1zdGFnZS1lbnRlcicpLFxyXG5cdFx0XHRcImRhbmdlclwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1kYW5nZXInKSxcclxuXHRcdFx0XCJpY2UtcmVtb3ZlXCIgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Z4LWljZS1yZW1vdmUnKSxcclxuXHRcdFx0XCJzdGF0ZS1sZWF2ZVwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1zdGF0ZS1sZWF2ZScpLFxyXG5cdFx0XHRcImljZS1kaXNhYmxlZFwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1kaXNhYmxlZCcpXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cGxheShzZngpIHtcclxuXHRcdGlmICghdGhpcy5zb3VuZE9uKSByZXR1cm47XHJcblx0XHR0aGlzLnNmeFtzZnhdLnZvbHVtZSA9IHRoaXMuc2Z4Vm9sdW1lO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS5jdXJyZW50VGltZSA9IDA7XHJcblx0XHR0aGlzLnNmeFtzZnhdLnBsYXkoKS5jYXRjaCgoKT0+e30pO1xyXG5cdH1cclxuXHJcblx0cGxheU9uY2Uoc2Z4KSB7XHJcblx0XHRpZiAoIXRoaXMuc2Z4W3NmeF0ucGF1c2VkKSByZXR1cm47XHJcblx0XHRpZiAoIXRoaXMuc291bmRPbikgcmV0dXJuO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS52b2x1bWUgPSB0aGlzLnNmeFZvbHVtZTtcclxuXHRcdHRoaXMuc2Z4W3NmeF0uY3VycmVudFRpbWUgPSAwO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS5wbGF5KCkuY2F0Y2goKCk9Pnt9KTtcclxuXHR9XHJcblxyXG5cdHN0b3Aoc2Z4KSB7XHJcblx0XHR0aGlzLnNmeFtzZnhdLnBhdXNlKCk7XHJcblx0XHR0aGlzLnNmeFtzZnhdLmN1cnJlbnRUaW1lID0gMDtcclxuXHR9XHJcblxyXG5cdHNvdW5kcmFjaygpIHtcclxuXHRcdGlmICghdGhpcy5tdXNpY09uKSByZXR1cm47XHJcblx0XHR0aGlzLm11c2ljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1tdXNpYy1zcGFya3MnKTtcclxuXHRcdHRoaXMubXVzaWMubXV0ZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMubXVzaWMudm9sdW1lID0gMC4yO1xyXG5cdFx0dGhpcy5tdXNpYy5sb29wID0gdHJ1ZTtcclxuXHRcdHRoaXMubXVzaWMucGxheSgpLmNhdGNoKCgpPT57fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0ICogYXMgQ29uc3RzIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuL3N0cnVjdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBjbGFzcyBvZiB0aGUgc3ByaXRlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZW5naW5lICAgRW5naW5lIEVuZ2luZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR4ICAgICBQb3NpdGlvbiB0aWxlIHggaW4gdGhlIG1hcFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5ICAgICBQb3NpdGlvbiB0aWxlIHkgaW4gdGhlIG1hcFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoICBXaWR0aCBvZiB0aGUgc3ByaXRlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiB0aGUgc3ByaXRlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBlbmdpbmUsIHR4LCB0eSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmN0eCA9IGVuZ2luZS5jdHg7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycyA9IG5ldyBQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc29saWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5NT1ZFX1NUQU5EO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAwO1xyXG4gICAgICAgIHRoaXMueHRpbGUgPSB0eDtcclxuICAgICAgICB0aGlzLnl0aWxlID0gdHk7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54dGlsZSAqIENvbnN0cy5USUxFX1dJRFRIO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMueXRpbGUgKiBDb25zdHMuVElMRV9XSURUSDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBzcHJpdGUgc3RhdGVzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhdGUgIENvbnN0YW50IG9mIHRoZSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtb3ZpbmcgVHJ1ZSBpZiBzcHJpdGUgaXMgbW92aW5nXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlKHN0YXRlLCBtb3ZpbmcpIHtcclxuICAgICAgICB0aGlzLm1vdmluZyA9ICh0eXBlb2YgbW92aW5nID09PSAndW5kZWZpbmVkJykgPyBmYWxzZSA6IG1vdmluZztcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaWxlKHR4LCB0eSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZ2luZS5tYXAuZ2V0VGlsZSh0eCwgdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3ByaXRlQXQgKHR4LCB0eSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnh0aWxlID09PSB0eCAmJiB0aGlzLnl0aWxlID09PSB0eTtcclxuICAgIH1cclxuXHJcbiAgICBzcHJpdGVUeXBlQXQodHgsIHR5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0eCwgdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUgKCkge31cclxuXHJcbiAgICBlbmdpbmVNb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMudSA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUsIHRoaXMueXRpbGUtMSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy5kID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSsxKTtcclxuICAgICAgICB0aGlzLmNvb3JuZXJzLmwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLTEsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMuciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUrMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy51bCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUtMSwgdGhpcy55dGlsZS0xKTtcclxuICAgICAgICB0aGlzLmNvb3JuZXJzLnVyID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSsxLCB0aGlzLnl0aWxlLTEpO1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMuZGwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLTEsIHRoaXMueXRpbGUrMSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy5kciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUrMSwgdGhpcy55dGlsZSsxKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlKCk7XHJcblxyXG4gICAgICAgIHRoaXMueHRpbGUgPSBNYXRoLmZsb29yKHRoaXMueCAvIENvbnN0cy5USUxFX1dJRFRIKTtcclxuICAgICAgICB0aGlzLnl0aWxlID0gTWF0aC5mbG9vcih0aGlzLnkgLyBDb25zdHMuVElMRV9XSURUSCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiogU3RvcmVzIHBvc2l0aW9uIG9mIHRoZSBjb3JuZXJzIGFuZCB2ZXJ0aWNlc1xyXG4qL1xyXG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51ID0gMDtcclxuICAgICAgICB0aGlzLmQgPSAwO1xyXG4gICAgICAgIHRoaXMubCA9IDA7XHJcbiAgICAgICAgdGhpcy5yID0gMDtcclxuICAgICAgICB0aGlzLnVsID0gMDtcclxuICAgICAgICB0aGlzLnVyID0gMDtcclxuICAgICAgICB0aGlzLmRsID0gMDtcclxuICAgICAgICB0aGlzLmRyID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvb3Ige1xyXG4gICAgY29uc3RydWN0b3IgKHR4LCB0eSkge1xyXG4gICAgICAgIHRoaXMueHRpbGUgPSB0eDtcclxuICAgICAgICB0aGlzLnl0aWxlID0gdHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIENvbnN0cyBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCB7XHJcbiAgICAvKipcclxuICAgICAqIFRpbGVtYXAgY2xhc3NcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgRW5naW5lXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWFwICBNYXRyaXggb2YgdGhlIG1hcFxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCBtYXAsIHRoZW1lKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBlbmdpbmUuY3R4O1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcclxuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IENvbnN0cy5USUxFX1dJRFRIO1xyXG4gICAgICAgIHRoaXMudGlsZUhlaWdodCA9IENvbnN0cy5USUxFX1dJRFRIO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXAubGVuZ3RoIC0gMTtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5tYXBbMF0ubGVuZ3RoIC0gMTtcclxuICAgICAgICB0aGlzLnRpbGVzSW1hZ2UgPSB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCd0aWxlbWFwJyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGNvbnRlbnQgb2YgdGhlIHRpbGUgaW5zaWRlIHRoZSBtYXRyaXhcclxuICAgICAqIGlmIHBvc2l0aW9uIG91dCBvZiBib3VuZHMgcmV0dXJucyBDb25zdHMuT0JKRUNUX09VVFxyXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSB5IHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHggcG9zaXRpb25cclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gICBDb250ZW50IG9mIHRoZSB0aWxlXHJcbiAgICAgKi9cclxuICAgIGdldFRpbGUoeCwgeSkge1xyXG4gICAgICAgIGlmICh4IDwgMCB8fCB5IDwgMCB8fCB4ID4gdGhpcy53aWR0aCB8fCB5ID4gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIENvbnN0cy5PQkpFQ1RfT1VUO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBbeV1beF07XHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmF3cyB0aGUgbWFwXHJcbiAgICAgKiBAcmV0dXJuIHtub25lfVxyXG4gICAgICovXHJcbiAgICBkcmF3KCkge1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy53aWR0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHRoaXMuaGVpZ2h0OyArK2opIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aWxlVHlwZSA9IENvbnN0cy5USUxFX0JBQ0tHUk9VTkQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXBbal1baV0gPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0VGlsZShpLTEsIGopICYmICF0aGlzLmdldFRpbGUoaSsxLCBqKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlVHlwZSA9IENvbnN0cy5USUxFX0JPVEg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5nZXRUaWxlKGktMSwgaikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVElMRV9MRUZUO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2V0VGlsZShpKzEsIGopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRJTEVfUklHSFQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVElMRV9NSURETEU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZXNJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICB0aWxlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW1lICogdGhpcy50aWxlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBpICogdGhpcy50aWxlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaiAqIHRoaXMudGlsZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVIZWlnaHRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7fVxyXG5cclxuICAgIGVuZ2luZU1vdmUoKSB7fVxyXG59XHJcbiIsImltcG9ydCAqIGFzIENvbnN0cyBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgVGlsZSA9IHtcclxuICAgdGlsZXM6IHtcclxuICAgICAgICBbQ29uc3RzLk9CSkVDVF9CQUNLR1JPVU5EXToge1xyXG4gICAgICAgICAgICBzb2xpZDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtDb25zdHMuT0JKRUNUX09VVF06IHtcclxuICAgICAgICAgICAgc29saWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtDb25zdHMuT0JKRUNUX1BMQVlFUl06IHtcclxuICAgICAgICAgICAgc29saWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtDb25zdHMuT0JKRUNUX0lDRV06IHtcclxuICAgICAgICAgICAgc29saWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtDb25zdHMuT0JKRUNUX01FVEFMXToge1xyXG4gICAgICAgICAgICBzb2xpZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW0NvbnN0cy5PQkpFQ1RfV0FMTF06IHtcclxuICAgICAgICAgICAgc29saWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtDb25zdHMuT0JKRUNUX0ZJUkVdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW0NvbnN0cy5PQkpFQ1RfSkFSXToge1xyXG4gICAgICAgICAgICBzb2xpZDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaXNTb2xpZDogZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZXNbaWRdID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VOREVGSU5FRCBPTiBpc1NvbGlkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZXNbaWRdLnNvbGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==