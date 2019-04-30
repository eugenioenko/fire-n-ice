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
        this.animDelay = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ANIM_STANDARD_DELAY;
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
        let _delay = (typeof delay === 'undefined') ? _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ANIM_STANDARD_DELAY : delay;
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
/*! exports provided: Consts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consts", function() { return Consts; });
const Consts = Object.freeze({
    TILE_WIDTH: 32,
    MOVE_STAND: 0,
    MOVE_LEFT: 1,
    MOVE_RIGHT: 2,
    MOVE_DOWN: 3,
    MOVE_UP: 4,
    MOVE_TURN: 5,
    MOVE_ICE_MAKE: 6,
    MOVE_ICE_REMOVE: 7,
    MOVE_ICE_MOVING: 8,
    MOVE_ICE_CHECK: 9,
    MOVE_RIP: 10,
    MOVE_PUSH: 8,
    MOVE_ICE_FAIL: 11,
    MOVE_OUTRO: 12,
    MOVE_INTRO: 13,
    DIR_LEFT: -1,
    DIR_RIGHT: 1,
    ANIM_STANDARD_DELAY: 2,
    ANIM_FRAME_COUNT: 16,
    ANIM_LEFT_ROW: 1,
    ANIM_RIGHT_ROW: 0,
    ANIM_RUN_START: 0,
    ANIM_RUN_END: 3,
    ANIM_STAND: 4,
    ANIM_TURN_START: 4,
    ANIM_TURN_END: 7,
    ANIM_FALL_START: 8,
    ANIM_FALL_END: 9,
    ANIM_BIG_FALL_START: 10,
    ANIM_BIG_FALL_END: 11,
    ANIM_PUSH_START: 12,
    ANIM_PUSH_END: 13,
    ANIM_JUMP_START: 14,
    ANIM_JUMP_END: 15,
    ANIM_STAND_START: 16,
    ANIM_STAND_END: 17,
    ANIM_ICE_START: 18,
    ANIM_ICE_END: 19,
    ANIM_CROUCH_START: 20,
    ANIM_CROUCH_END: 22,
    ANIM_RIP_START: 23,
    ANIM_RIP_END: 24,
    ANIM_SLEEP_START: 25,
    ANIM_SLEEP_END: 26,
    TILE_BACKGROUND: 0,
    TILE_BOTH: 32,
    TILE_LEFT: 64,
    TILE_MIDDLE: 96,
    TILE_RIGHT: 128,
    OBJECT_OUT: -1,
    OBJECT_BACKGROUND: 0,
    OBJECT_WALL: 1,
    OBJECT_ICE: 3,
    OBJECT_METAL: 4,
    OBJECT_JAR: 5,
    OBJECT_FIRE: 6,
    OBJECT_PLAYER: 7,
    GAME_STATE_PLAY: 1,
    GAME_STATE_INTRO: 2
});


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
        this.state = _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].GAME_STATE_INTRO;
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
        const fires = this.sprites.filter(sprite => sprite.id === _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].OBJECT_FIRE);
        if (!fires.length && !this.editor && this.player.state !== _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].MOVE_OUTRO) {
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
            if (this.sprites[i] && this.sprites[i].id !== _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].OBJECT_PLAYER && this.sprites[i].moving) {
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
            if (this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].OBJECT_ICE && this.sprites[i].ytile === ty) {
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
            if (this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].OBJECT_ICE &&
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
                (this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].OBJECT_FIRE)
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
        excludeId = (typeof excludeId === 'undefined') ? _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].OBJECT_OUT : excludeId;
        if (tx < 0 || ty < 0 || tx > this.map.width || ty > this.map.height) {
            return _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].OBJECT_OUT;
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
        return _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].OBJECT_BACKGROUND;
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
        super(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_FIRE, engine, 'img_fire',
            tx, ty, _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TILE_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TILE_WIDTH, 0, 0, 0, 3, true);
    }

    move() {
        if (!this.moving) {
            this.collisions();
            this.gravity();
        }
        switch (this.state) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].MOVE_DOWN:
                this.doDown();
                break;
        }
    }

    collisions() {
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_FIRE) === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_ICE) {
            this.engine.sound.play('fire-off');
            this.engine.removeFire(this.xtile, this.ytile);
            this.engine.removeIceBlock(this.xtile, this.ytile);
            this.engine.addSparks(this.xtile, this.ytile, '255, 126, 198', 15, 0.5);
            this.engine.addSparks(this.xtile, this.ytile, '124, 212, 255', 10);
        }
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_FIRE) === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_METAL) {
            this.engine.sound.play('fire-off');
            this.engine.removeFire(this.xtile, this.ytile);
            this.engine.addSparks(this.xtile, this.ytile, '255, 126, 198', 15, 0.5);
        }

    }

    gravity() {
        if (!this.coorners.d) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].MOVE_DOWN, true);
            return true;
        }
        return false;
    }

    doDown() {
        this.counter += 4;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TILE_WIDTH) {
            this.y += 4;
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].MOVE_STAND, false);
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources */ "./src/resources.js");
/* harmony import */ var _fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fire */ "./src/fire.js");
/* harmony import */ var _jar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jar */ "./src/jar.js");






window.addEventListener('load', () => {
    const resources = new _resources__WEBPACK_IMPORTED_MODULE_2__["Resources"]();
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

    if (FIRENICE_EDITOR_MODE) {
        game.engine.sound.musicOn = false;
		game.engine.sound.soundOn = false;
        game.state = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].GAME_STATE_PLAY;
        game.engine.editor = true;
        game.engine.keyboard.intro = false;

        canvas.addEventListener('click', (e) => {
            const xtile = Math.floor(e.offsetX / 32);
            const ytile = Math.floor(e.offsetY / 32);
            if (tool < 2) {
                game.engine.map.map[ytile][xtile] = tool;
            } else {
                switch (tool) {
                    case _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_PLAYER:
                        game.engine.player.x = xtile * 32;
                        game.engine.player.y = ytile * 32;
                        break;
                    case _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_ICE:
                        game.engine.addIceBlock(xtile, ytile);
                        break;
                    case _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_METAL:
                        game.engine.addSprite(new Metal(game.engine, xtile, ytile, 1));
                        break;
                    case _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_FIRE:
                        game.engine.addSprite(new _fire__WEBPACK_IMPORTED_MODULE_3__["Fire"](game.engine, xtile, ytile));
                        break;
                    case _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_JAR:
                        game.engine.addSprite(new _jar__WEBPACK_IMPORTED_MODULE_4__["Jar"](game.engine, xtile, ytile));
                        break;
                }
            }
        });

        document.getElementById('theme-selector').addEventListener('change', (e) => {
            game.engine.map.theme = parseInt(e.target.value, 10);
            e.target.blur();
        });

        document.getElementById('level-selector').addEventListener('change', (e) => {
            if (e.target.value !== '-1') {
                game.engine.level = parseInt(e.target.value, 10);
                game.engine.scene.load(game.engine.level);
                e.target.blur();
            }
        });

        document.getElementById('btn-save').addEventListener('click', () => {
            document.getElementById('txt-level').value = JSON.stringify(game.engine.scene.save());
        });
    }
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
        this.state = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].GAME_STATE_INTRO;
        this.engine = new _engine__WEBPACK_IMPORTED_MODULE_0__["Engine"](canvas, resources);
        this.createIntro();
        this.gameloop = this.gameloop_.bind(this); // jshint ignore:line
        this.gameloop();
    }

    gameloop_() {
        switch (this.state) {
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].GAME_STATE_INTRO:
                this.doIntro();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].GAME_STATE_PLAY:
                this.engine.draw();
                this.engine.move();
                break;
        }
        window.requestAnimationFrame(this.gameloop);
    }

    createIntro() {
        this.intro = new _animsprite__WEBPACK_IMPORTED_MODULE_1__["AnimSprite"](null, this.engine, 'img_intro', 0, 0, 544, 416, 0, 0, 0, 0, false);
        this.start = new _animsprite__WEBPACK_IMPORTED_MODULE_1__["AnimSprite"](null, this.engine, 'img_start', 7, 11, 140, 26, -10, 0, 0, 1, true);
        this.start.animDelay = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_STANDARD_DELAY * 20;
    }

    doIntro() {
        this.intro.draw();
        this.start.draw();

        if (this.engine.keyboard.enter) {
            this.state = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].GAME_STATE_PLAY;
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
        super(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_ICE, engine, 'img_ice',
            tx, ty, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH, 0, 0, 0, 1, true);
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
            (tx > this.xtile && this.getTile(tx+1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL) ||
            (tx < this.xtile && this.getTile(tx-1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL) ||
            (spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL) ||
            (spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR) ||
            (spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL) ||
            (spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR)
        ) {
            this.frozen = true;
        }
        this.xtile = tx < this.xtile ? tx : this.xtile;
        this.x = this.xtile * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH;
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
            this.x += _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH;
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
        if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].DIR_LEFT  && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.l)) {
            return false;
        }
        if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].DIR_RIGHT && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.r)) {
            return false;
        }
        return true;
    }

    gravity() {
        if (!this.coorners.d && !this.frozen) {
            this.falling = true;
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MOVE_DOWN, true);
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
            if (tile_down && tile_down !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_FIRE) {
                this.coorners.d = tile_down;
            }

        }
        if (this.coorners.d === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_FIRE) {
            this.coorners.d = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_BACKGROUND;
        }
        this.coorners.r = this.spriteTypeAt(this.xtile+this.length, this.ytile);

        if (this.frozen) {
            this.checkUnfreeze();
        }
        if (!this.moving) {
            this.gravity();
        }
        switch (this.state) {
            case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MOVE_ICE_MOVING:
                this.glide();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MOVE_ICE_CHECK:
                this.push();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MOVE_DOWN:
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
            this.ctx.drawImage(this.image, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH*this.animRow, this.width, this.height,  this.x, this.y, this.width, this.height);
        } else if (this.length === 2) {
            this.ctx.drawImage(this.image, 1*_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH*this.animRow,
                this.width, this.height,  this.x, this.y, this.width, this.height);
            this.ctx.drawImage(this.image, 3*_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH*this.animRow,
                this.width, this.height,  this.x+_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH, this.y, this.width, this.height);
        } else {
            this.ctx.drawImage(this.image, 1*_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH*this.animRow,
                this.width, this.height,  this.x, this.y, this.width, this.height);
            this.ctx.drawImage(this.image, 3*_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH*this.animRow,
                this.width, this.height,  this.x+_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH*(this.length-1), this.y, this.width, this.height);
            for (let i = 1;  i < this.length-1; i++) {
                this.ctx.drawImage(this.image, 2*_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH*this.animRow,
                    this.width, this.height,  this.x+(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH*i), this.y, this.width, this.height);
            }
        }
        if (this.frozen) {
            if (
                this.getTile(this.xtile-1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL ||
                spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL ||
                spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR
            ) {
                this.ctx.drawImage(
                    this.engine.resources.get('frost'),
                    (this.xtile*this.width)-7,
                    this.ytile*this.height
                );
            }
            if (
                this.getTile(this.xtile+this.length, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL ||
                spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL ||
                spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR
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
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH) {
            this.x += 4 * this.dirrection;
        } else {
            this.push();
        }
    }

    doDown() {
        this.counter += 4;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH) {
            this.y += 4;
        } else {
            if (!this.gravity()) {
                this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MOVE_STAND, false);
            }
        }
    }

    push(dir) {
        this.dirrection = (typeof dir === 'undefined') ? this.dirrection : dir;
        if (!this.collision() && !this.gravity()) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MOVE_ICE_MOVING, true);
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MOVE_STAND, false);
        }
    }

    checkUnfreeze() {
        const spriteTypeAtLeftCorner = this.engine.spriteTypeAt(this.xtile-1, this.ytile);
        const spriteTypeAtRightCorner = this.engine.spriteTypeAt(this.xtile+this.length, this.ytile);
        if (
            this.getTile(this.xtile-1, this.ytile) !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL &&
            this.getTile(this.xtile+this.length, this.ytile) !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL &&
            spriteTypeAtLeftCorner !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL &&
            spriteTypeAtLeftCorner !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR &&
            spriteTypeAtRightCorner !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL &&
            spriteTypeAtRightCorner !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR
        ) {
            this.frozen = false;
        }
    }

    checkFreeze() {
        const spriteTypeAtLeftCorner = this.engine.spriteTypeAt(this.xtile-1, this.ytile);
        const spriteTypeAtRightCorner = this.engine.spriteTypeAt(this.xtile+this.length, this.ytile);
        if (
            (this.getTile(this.xtile-1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL) ||
            (this.getTile(this.xtile+this.length, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL) ||
            (spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL) ||
            (spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR) ||
            (spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL) ||
            (spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR)
        ) {
            this.frozen = true;
        } else {
            this.frozen = false;
        }
    }
}


/***/ }),

/***/ "./src/jar.js":
/*!********************!*\
  !*** ./src/jar.js ***!
  \********************/
/*! exports provided: Jar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jar", function() { return Jar; });
/* harmony import */ var _animsprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animsprite */ "./src/animsprite.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



class Jar extends _animsprite__WEBPACK_IMPORTED_MODULE_0__["AnimSprite"] {

    constructor(engine, tx, ty) {
        super(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_JAR, engine, 'img_jar',
            tx, ty, _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TILE_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TILE_WIDTH, 0, 0, 0, 3, true);
        this.animDelay = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ANIM_STANDARD_DELAY * 2;
        this.onFire = false;
        this.animRow = 0;
    }

    move() {
        if (!this.moving) {
            this.collisions();
            this.gravity();
        }
        switch (this.state) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].MOVE_DOWN:
                this.doDown();
                break;
        }
    }

    collisions() {
        if (!this.onFire && this.coorners.u === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_FIRE) {
            this.turnOnFire();
        }
        if (this.onFire && this.engine.spriteTypeAt(this.xtile, this.ytile - 1) === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_ICE) {
            this.meltIce();
        }
    }

    gravity() {
        if (!this.coorners.d) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].MOVE_DOWN, true);
            return true;
        }
        return false;
    }

    doDown() {
        this.counter += 4;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TILE_WIDTH) {
            this.y += 4;
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].MOVE_STAND, false);
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
            this.engine.spriteTypeAt(this.xtile - 1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_ICE &&
            this.engine.spriteAt(this.xtile - 1, this.ytile).frozen
        ) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile * this.width)-7,
                this.ytile * this.height
            );
        }
        if (
            this.engine.spriteTypeAt(this.xtile + 1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_ICE &&
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
        super(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].OBJECT_PLAYER, engine, 'img_dona', tx, ty, 48, 64, -10, -32, 2, 2, false);
        this.speed = 2;
        this.dirrection = 1;
        this.state = 0; //standing top right down left
        this.moving = false;
        this.tileWidth = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].TILE_WIDTH;
        this.tileHeight = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].TILE_WIDTH;
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
            if (this.dirrection !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DIR_LEFT) {
                //is not under a brick
                if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u)) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_TURN_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_TURN_END, false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW, 4);
                } else {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_CROUCH_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_CROUCH_START, false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW, 4);
                }
                this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_TURN, true);
                this.dirrection = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DIR_LEFT;
            } else{
                //running
                if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.l) && _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d)) {
                    //not under a brick
                    if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ul)) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RUN_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RUN_END, false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW);
                    } else {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_CROUCH_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_CROUCH_END, false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW);
                    }
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_LEFT, true);
                }
                //hit an ice
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d) && (this.coorners.l === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].OBJECT_ICE || this.coorners.l === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].OBJECT_METAL)) {
                    this.push();
                }
                //climb
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.l) && _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d)  && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ul) && !this.moving) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_PUSH_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_PUSH_START,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW);
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_UP, true);
                }
            }
        }
    }

    right() {
        if (!this.moving) {
            if (this.dirrection !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DIR_RIGHT) {
                if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u)) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_TURN_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_TURN_END, false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW, 4);
                } else {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_CROUCH_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_CROUCH_START, false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW, 4);
                }
                this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_TURN, true);
                this.dirrection = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DIR_RIGHT;
            } else{
                if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.r) && _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d)) {
                    if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ur)) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RUN_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RUN_END, false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW);
                    } else {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_CROUCH_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_CROUCH_END, false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW);
                    }
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_RIGHT, true);
                }
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d) && (this.coorners.r === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].OBJECT_ICE || this.coorners.r === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].OBJECT_METAL)) {
                    this.push();
                }
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.r) && _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ur) && !this.moving) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_PUSH_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_PUSH_START,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW);
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_UP, true);
                }
            }
        }
    }

    burn() {
        if (this.state !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_RIP) {
            this.engine.sound.playOnce('danger');
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_RIP, true);
            this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIP_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIP_END, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW);
        }
    }

    intro() {
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_BIG_FALL_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_BIG_FALL_END, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW, 4);
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_INTRO, true);
        this.y -= 32;
    }

    outro() {
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_FALL_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_BIG_FALL_END, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW, 4);
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_OUTRO, true);
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
                this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_DOWN, true);
                if (this.fallCounter >= 1) {
                    this.engine.sound.playOnce("falling");
                }
                if (this.fallCounter >= 2) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_BIG_FALL_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_BIG_FALL_END, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW);
                } else {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_BIG_FALL_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_BIG_FALL_END, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW);
                }
            } else {

                this.engine.sound.stop("falling");
                if (this.state === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_DOWN) {
                    this.engine.sound.play('fall');
                    if (this.fallCounter >= 2) {
                        this.engine.addSparks(this.xtile, this.ytile + 1, '255, 135, 124', 5, 0.75);
                        this.engine.addSparks(this.xtile, this.ytile + 1, '122, 211, 255', 10,  1);
                    }
                }
                this.fallCounter = 0;
                this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_STAND, false);
                if (this.coorners.d === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].OBJECT_JAR) {
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
                if (this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DIR_RIGHT) {
                    if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.dr) && this.coorners.dr !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].OBJECT_FIRE) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_ICE_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_ICE_END,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW, 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_ICE_MAKE, true);
                    } else if (this.coorners.dr === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].OBJECT_ICE) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_ICE_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_ICE_END,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW, 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_ICE_REMOVE, true);
                    } else {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_ICE_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_ICE_END,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW, 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_ICE_FAIL, true);
                    }
                } else {
                    if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.dl) && (this.coorners.dl !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].OBJECT_FIRE)) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_ICE_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_ICE_END,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW, 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_ICE_MAKE, true);
                    } else if (this.coorners.dl === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].OBJECT_ICE) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_ICE_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_ICE_END,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW, 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_ICE_REMOVE, true);
                    } else {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_ICE_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_ICE_END,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW, 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_ICE_FAIL, true);
                    }
                }
            }
        }
    }

    jump() {
        if (!this.moving) {
            if (this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DIR_RIGHT) {
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.r) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ur) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u)) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_PUSH_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_PUSH_START,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW);
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_UP, true);
                }
            } else {
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.l) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ul) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u)) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_PUSH_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_PUSH_START,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW);
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_UP, true);
                }
            }
        }
    }

    doRun() {
        this.counter++;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_FRAME_COUNT) {
            this.x += this.speed * this.dirrection;
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_STAND, false);
        }
    }

    doTurn() {
        this.counter++;
        if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_FRAME_COUNT) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_STAND, false);
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
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_STAND, false);
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
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_STAND, false);
        }
    }

    doGravity() {
        this.counter += 1;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_FRAME_COUNT) {
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
                this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_SLEEP_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_SLEEP_END,true, this.dirrection !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW, 48, true);
            } else {
                this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_STAND_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_STAND_END,true, this.dirrection !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW, 8, true);
            }
        } else {
            this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_CROUCH_START,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_CROUCH_START, false, this.dirrection !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW, 8, true);
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
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_PUSH_END, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_PUSH_END, false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DIR_RIGHT ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW);
                    break;
                case 6:
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_JUMP_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_JUMP_START, false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DIR_RIGHT ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 9:
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_JUMP_END, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_JUMP_END, false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DIR_RIGHT ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 12:
                    this.setAnim(2, 2, false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DIR_RIGHT ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 18:
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_STAND, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_STAND, false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DIR_RIGHT ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                break;
            }
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_STAND, false);
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
            this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_PUSH_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_PUSH_END, false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DIR_RIGHT ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW, 3);
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_PUSH, true);
        }
    }

    doPush() {
        this.counter += 2;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_FRAME_COUNT) {
            // fixme
        } else {
            let ice =  this.engine.iceAt(this.xtile+this.dirrection, this.ytile);
            if (ice) {
                this.engine.sound.play('ice-push');
                ice.push(this.dirrection);
            }
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_STAND, false);
        }
    }

    doIce() {
        if (this.counter === 8) {
            if (this.state === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_ICE_MAKE) {
                this.makeIce();
            } else{
                this.removeIceBlock();
            }
        }
        this.counter += 1;
        if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_FRAME_COUNT) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_STAND, false);
        }
    }

    doFailIce() {
        if (this.counter === 8) {
            this.engine.sound.play('ice-disabled');
            this.engine.addSparks(this.xtile + this.dirrection, this.ytile + 1, '88,66,66');
        }
        this.counter += 1;
        if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_FRAME_COUNT) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_STAND, false);
        }
    }

    collisions() {
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].OBJECT_PLAYER) === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].OBJECT_FIRE) {
            this.burn();
        }
    }

    move () {
        this.gravity();
        this.collisions();
        if (this.state !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_STAND) {
            this.standCounter = 0;
        }
        if (this.state !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_DOWN) {
            this.fallCounter = 0;
        }
        switch (this.state) {
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_RIGHT:
                this.doRun();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_LEFT:
                this.doRun();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_DOWN:
                this.doGravity();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_UP:
                this.doUp();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_TURN:
                this.doTurn();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_ICE_MAKE:
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_ICE_REMOVE:
                this.doIce();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_ICE_FAIL:
                this.doFailIce();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_STAND:
                this.doStand();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_PUSH:
                this.doPush();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_RIP:
                this.doRip();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_OUTRO:
                this.doOutro();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_INTRO:
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
/* harmony import */ var _jar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jar */ "./src/jar.js");








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
            value = sprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR ? sprite.onFire : value;
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
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_PLAYER:
                    this.engine.player = new _player__WEBPACK_IMPORTED_MODULE_2__["Player"](this.engine, sprite.x, sprite.y);
                    this.engine.addSprite(this.engine.player);
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_ICE:
                    sprite.v = typeof sprite.v === "undefined" ? 1 : sprite.v;
                    this.engine.addSprite(new _ice__WEBPACK_IMPORTED_MODULE_3__["Ice"](this.engine, sprite.x, sprite.y, parseInt(sprite.v)));
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL:
                    this.engine.addSprite(new Metal(this.engine, sprite.x, sprite.y, 1));
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_FIRE:
                    this.engine.addSprite(new _fire__WEBPACK_IMPORTED_MODULE_4__["Fire"](this.engine, sprite.x, sprite.y));
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR:
                    const jar = new _jar__WEBPACK_IMPORTED_MODULE_6__["Jar"](this.engine, sprite.x, sprite.y);
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
            this.particles[i] = new Particle(this.engine.ctx, tx*_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TILE_WIDTH+16, ty*_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TILE_WIDTH+16, this.color, this.intencity);
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
        this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MOVE_STAND;
        this.height = height;
        this.width = width;
        this.dirrection = 0;
        this.xtile = tx;
        this.ytile = ty;
        this.x = this.xtile * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH;
        this.y = this.ytile * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH;
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

        this.xtile = Math.floor(this.x / _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH);
        this.ytile = Math.floor(this.y / _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH);
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
        this.tileWidth = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH;
        this.tileHeight = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH;
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
            return _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_OUT;
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
                let tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_BACKGROUND;
                if (this.map[j][i] === 1) {
                    if (!this.getTile(i-1, j) && !this.getTile(i+1, j)) {
                        tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_BOTH;
                    } else if (!this.getTile(i-1, j)) {
                        tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_LEFT;
                    } else if (!this.getTile(i+1, j)) {
                        tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_RIGHT;
                    } else {
                        tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_MIDDLE;
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
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_BACKGROUND]: {
            solid: false
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_OUT]: {
            solid: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_PLAYER]: {
            solid: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_ICE]: {
            solid: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL]: {
            solid: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL]: {
            solid: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_FIRE]: {
            solid: false
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR]: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlbmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9sZXZlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Z4LmpzIiwid2VicGFjazovLy8uL3NyYy9zb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbGVtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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aGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9maXJlbmljZS5qc1wiKTtcbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltU3ByaXRlIGV4dGVuZHMgU3ByaXRlIHtcclxuICAgIC8qKlxyXG4gICAgICogQW5pbWF0ZWQgU3ByaXRlLCBpbmhlcnRzIGZyb20gU3ByaXRlLlxyXG4gICAgICogQWRkcyBkcmF3aW5nIG9mIHBpY3R1cmVzIGluIHRoZSBib2R5IG9mIHNwcml0ZVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGVuZ2luZSAgICBFbmdpbmUgRW5naW5lXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaW1hZ2UgICBEb20gaW1hZ2Ugb2JqZWN0IChpbWcgc3JjPSlcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eCAgICAgIFRpbGUgWCBwb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5ICAgICAgVGlsZSBZIHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggICBXaWR0aCBvZiB0aGUgc3ByaXRlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0ICBIZWlnaHQgb2YgdGhlIHNwcml0ZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFggT2Zmc2V0IFggb2YgZHJhd2luZyB0aGUgcGljdHVyZSBpbnRvIHRoZSBjYW52YXNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRZIE9mZnNldCBZIG9mIGRyYXdpbmcgdGhlIHBpY3R1cmUgaW50byB0aGUgY2FudmFzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgICBBbmltYXRpb24gZnJhbWUgc3RhcnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgICAgIEFuaW1hdGlvbiBmcmFtZSBlbmRcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCAgIFJlcGVhdCBhbmltYXRpb25cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IgKGlkLCBlbmdpbmUsIGltYWdlLCB0eCwgdHksIHdpZHRoLCBoZWlnaHQsIG9mZnNldFgsIG9mZnNldFksIHN0YXJ0LCBlbmQsIGxvb3ApIHtcclxuICAgICAgICBzdXBlcihpZCwgZW5naW5lLCB0eCwgdHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KGltYWdlKTtcclxuICAgICAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgICAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuYW5pbUVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLmFuaW1Db3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5hbmltRGVsYXkgPSBDb25zdHMuQU5JTV9TVEFOREFSRF9ERUxBWTtcclxuICAgICAgICB0aGlzLmFuaW1EZWxheUNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmFuaW1Sb3cgPSAwO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFg7XHJcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gb2Zmc2V0WTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHNwcml0ZSBhbmltYXRpb24gZnJhbWVzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgU3RhcnQgZnJhbWUgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCAgIEVuZCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb3AgIElmIHRydWUsIGFuaW1hdGlvbiB3aWxsIGxvb3BcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgICBSb3cgb2YgdGhlIGZyYW1lcyBpbiB0aGUgc3ByaXRlIGltYWdlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgRGVsYXkgYmV0d2VlbiBlYWNoIGZyYW1lXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgIFNldHMgYWxsIHRoZSBuZXcgdmFsdWVzIG9ubHkgb25lIHRpbWUuXHJcbiAgICAgKi9cclxuICAgIHNldEFuaW0oc3RhcnQsIGVuZCwgbG9vcCwgcm93LCBkZWxheSwgb25jZSkge1xyXG4gICAgICAgIGxldCBfb25jZSA9ICh0eXBlb2Ygb25jZSA9PT0gJ3VuZGVmaW5lZCcpID8gZmFsc2UgOiBvbmNlO1xyXG4gICAgICAgIGxldCBfZGVsYXkgPSAodHlwZW9mIGRlbGF5ID09PSAndW5kZWZpbmVkJykgPyBDb25zdHMuQU5JTV9TVEFOREFSRF9ERUxBWSA6IGRlbGF5O1xyXG4gICAgICAgIGxldCBfcm93ID0gKHR5cGVvZiByb3cgPT09ICd1bmRlZmluZWQnKSA/IHRoaXMuYW5pbVJvdyA6IHJvdztcclxuICAgICAgICBpZiAoIV9vbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbVN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbUVuZCA9IGVuZDtcclxuICAgICAgICAgICAgdGhpcy5hbmltQ291bnQgPSBzdGFydDtcclxuICAgICAgICAgICAgdGhpcy5hbmltTG9vcCA9IGxvb3A7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbURlbGF5ID0gX2RlbGF5O1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1Sb3cgPSBfcm93O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1TdGFydCAhPT0gc3RhcnQgfHwgdGhpcy5hbmltRW5kICE9PSBlbmQgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUxvb3AgIT09IGxvb3AgfHwgdGhpcy5hbmltUm93ICE9PSBfcm93KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltRW5kID0gZW5kO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltQ291bnQgPSBzdGFydDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUxvb3AgPSBsb29wO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltRGVsYXkgPSBfZGVsYXk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1Sb3cgPSBfcm93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmF3cyB0aGUgZnJhbWUgb2YgdGhlIHNwcml0ZSBpbiB0aGUgY2FudmFzXHJcbiAgICAgKi9cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCB0aGlzLmFuaW1Db3VudCp0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmFuaW1Sb3cgKiB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMueCt0aGlzLm9mZnNldFgsIHRoaXMueSt0aGlzLm9mZnNldFksXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICBpZiAodGhpcy5hbmltRGVsYXlDb3VudCsrID4gdGhpcy5hbmltRGVsYXkpIHtcclxuICAgICAgICAgICAgaWYgKCsrdGhpcy5hbmltQ291bnQgPiB0aGlzLmFuaW1FbmQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1Mb29wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltQ291bnQgPSB0aGlzLmFuaW1TdGFydDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltQ291bnQgPSB0aGlzLmFuaW1FbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgQ29uc3RzID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBUSUxFX1dJRFRIOiAzMixcclxuICAgIE1PVkVfU1RBTkQ6IDAsXHJcbiAgICBNT1ZFX0xFRlQ6IDEsXHJcbiAgICBNT1ZFX1JJR0hUOiAyLFxyXG4gICAgTU9WRV9ET1dOOiAzLFxyXG4gICAgTU9WRV9VUDogNCxcclxuICAgIE1PVkVfVFVSTjogNSxcclxuICAgIE1PVkVfSUNFX01BS0U6IDYsXHJcbiAgICBNT1ZFX0lDRV9SRU1PVkU6IDcsXHJcbiAgICBNT1ZFX0lDRV9NT1ZJTkc6IDgsXHJcbiAgICBNT1ZFX0lDRV9DSEVDSzogOSxcclxuICAgIE1PVkVfUklQOiAxMCxcclxuICAgIE1PVkVfUFVTSDogOCxcclxuICAgIE1PVkVfSUNFX0ZBSUw6IDExLFxyXG4gICAgTU9WRV9PVVRSTzogMTIsXHJcbiAgICBNT1ZFX0lOVFJPOiAxMyxcclxuICAgIERJUl9MRUZUOiAtMSxcclxuICAgIERJUl9SSUdIVDogMSxcclxuICAgIEFOSU1fU1RBTkRBUkRfREVMQVk6IDIsXHJcbiAgICBBTklNX0ZSQU1FX0NPVU5UOiAxNixcclxuICAgIEFOSU1fTEVGVF9ST1c6IDEsXHJcbiAgICBBTklNX1JJR0hUX1JPVzogMCxcclxuICAgIEFOSU1fUlVOX1NUQVJUOiAwLFxyXG4gICAgQU5JTV9SVU5fRU5EOiAzLFxyXG4gICAgQU5JTV9TVEFORDogNCxcclxuICAgIEFOSU1fVFVSTl9TVEFSVDogNCxcclxuICAgIEFOSU1fVFVSTl9FTkQ6IDcsXHJcbiAgICBBTklNX0ZBTExfU1RBUlQ6IDgsXHJcbiAgICBBTklNX0ZBTExfRU5EOiA5LFxyXG4gICAgQU5JTV9CSUdfRkFMTF9TVEFSVDogMTAsXHJcbiAgICBBTklNX0JJR19GQUxMX0VORDogMTEsXHJcbiAgICBBTklNX1BVU0hfU1RBUlQ6IDEyLFxyXG4gICAgQU5JTV9QVVNIX0VORDogMTMsXHJcbiAgICBBTklNX0pVTVBfU1RBUlQ6IDE0LFxyXG4gICAgQU5JTV9KVU1QX0VORDogMTUsXHJcbiAgICBBTklNX1NUQU5EX1NUQVJUOiAxNixcclxuICAgIEFOSU1fU1RBTkRfRU5EOiAxNyxcclxuICAgIEFOSU1fSUNFX1NUQVJUOiAxOCxcclxuICAgIEFOSU1fSUNFX0VORDogMTksXHJcbiAgICBBTklNX0NST1VDSF9TVEFSVDogMjAsXHJcbiAgICBBTklNX0NST1VDSF9FTkQ6IDIyLFxyXG4gICAgQU5JTV9SSVBfU1RBUlQ6IDIzLFxyXG4gICAgQU5JTV9SSVBfRU5EOiAyNCxcclxuICAgIEFOSU1fU0xFRVBfU1RBUlQ6IDI1LFxyXG4gICAgQU5JTV9TTEVFUF9FTkQ6IDI2LFxyXG4gICAgVElMRV9CQUNLR1JPVU5EOiAwLFxyXG4gICAgVElMRV9CT1RIOiAzMixcclxuICAgIFRJTEVfTEVGVDogNjQsXHJcbiAgICBUSUxFX01JRERMRTogOTYsXHJcbiAgICBUSUxFX1JJR0hUOiAxMjgsXHJcbiAgICBPQkpFQ1RfT1VUOiAtMSxcclxuICAgIE9CSkVDVF9CQUNLR1JPVU5EOiAwLFxyXG4gICAgT0JKRUNUX1dBTEw6IDEsXHJcbiAgICBPQkpFQ1RfSUNFOiAzLFxyXG4gICAgT0JKRUNUX01FVEFMOiA0LFxyXG4gICAgT0JKRUNUX0pBUjogNSxcclxuICAgIE9CSkVDVF9GSVJFOiA2LFxyXG4gICAgT0JKRUNUX1BMQVlFUjogNyxcclxuICAgIEdBTUVfU1RBVEVfUExBWTogMSxcclxuICAgIEdBTUVfU1RBVEVfSU5UUk86IDJcclxufSk7XHJcbiIsImltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9rZXlib2FyZCc7XHJcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSAnLi9zb3VuZCc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcbmltcG9ydCB7IEljZSB9IGZyb20gJy4vaWNlJztcclxuaW1wb3J0IHsgU3BhcmtzIH0gZnJvbSAnLi9zZngnO1xyXG5pbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG4vKipcclxuICogRW5naW5lIExvb3BcclxuICovXHJcbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgcmVzb3VyY2VzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jd2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgICB0aGlzLnJlc291cmNlcyA9IHJlc291cmNlcztcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HQU1FX1NUQVRFX0lOVFJPO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2Z4cyA9IFtdO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0ge307XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IDA7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZCA9IG5ldyBLZXlib2FyZCgpO1xyXG4gICAgICAgIHRoaXMuc291bmQgPSBuZXcgU291bmQoKTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFNjZW5lKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZWRpdG9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA9IDA7XHJcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGV2ZWwnKTtcclxuICAgICAgICBpZiAobGV2ZWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IHBhcnNlSW50KGxldmVsLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLDAsdGhpcy5jd2lkdGgsdGhpcy5jaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLm1hcC5kcmF3KCk7XHJcbiAgICAgICAgLy8gcmV2ZXJzZSBsb29wLCBwbGF5ZXIgZHJhd3MgbGFzdFxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnNwcml0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVzW2ldLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNmeHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5zZnhzW2ldLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGZpcmVzID0gdGhpcy5zcHJpdGVzLmZpbHRlcihzcHJpdGUgPT4gc3ByaXRlLmlkID09PSBDb25zdHMuT0JKRUNUX0ZJUkUpO1xyXG4gICAgICAgIGlmICghZmlyZXMubGVuZ3RoICYmICF0aGlzLmVkaXRvciAmJiB0aGlzLnBsYXllci5zdGF0ZSAhPT0gQ29uc3RzLk1PVkVfT1VUUk8pIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIub3V0cm8oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dExldmVsKCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWwrKztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGV2ZWwnLCB0aGlzLmxldmVsKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmxvYWQodGhpcy5sZXZlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZXNbaV0uZW5naW5lTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Z4cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLnNmeHNbaV0uZW5naW5lTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3ByaXRlc01vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0gJiYgdGhpcy5zcHJpdGVzW2ldLmlkICE9PSBDb25zdHMuT0JKRUNUX1BMQVlFUiAmJiB0aGlzLnNwcml0ZXNbaV0ubW92aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVzTW92aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwcml0ZXNNb3ZpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCArPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjaGVjayBpZiBubyBzcHJpdGVzIGhhdmUgbW92ZWQgZm9yIDIgdHVybnNcclxuICAgICAgICBpZiAoIXNwcml0ZXNNb3ZpbmcgJiYgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleWJvYXJkLnVwKSB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMucGxheWVyLmp1bXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlib2FyZC5kb3duIHx8IHRoaXMua2V5Ym9hcmQuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5pY2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlib2FyZC5sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5sZWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMua2V5Ym9hcmQucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnJpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMua2V5Ym9hcmQuZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc291bmQuc3RvcCgnZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmxvYWQodGhpcy5sZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkLmVudGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBpY2VBdCh0eCwgdHkpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlzU3ByaXRlQXQodHgsIHR5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSWNlQmxvY2sodHgsIHR5LCBmcm96ZW4pIHtcclxuICAgICAgICBsZXQgZm91bmRJY2VCbG9ja3MgPSBbIF07XHJcbiAgICAgICAgZnJvemVuID0gKHR5cGVvZiBsZW5ndGggPT09ICd1bmRlZmluZWQnKSA/IGZhbHNlIDogZnJvemVuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PQkpFQ1RfSUNFICYmIHRoaXMuc3ByaXRlc1tpXS55dGlsZSA9PT0gdHkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpY2UgPSB0aGlzLnNwcml0ZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaWNlLnh0aWxlIC0gMSA9PT0gdHggfHwgaWNlLnh0aWxlICsgaWNlLmxlbmd0aCA9PT0gdHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZEljZUJsb2Nrcy5wdXNoKGljZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvdW5kSWNlQmxvY2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZXMucHVzaChuZXcgSWNlKHRoaXMsIHR4LCB0eSwgMSwgZnJvemVuKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmb3VuZEljZUJsb2Nrcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgZm91bmRJY2VCbG9ja3NbMF0uYWRkQmxvY2sodHgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuam9pbkljZUJsb2Nrcyhmb3VuZEljZUJsb2Nrc1swXSwgZm91bmRJY2VCbG9ja3NbMV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBqb2luSWNlQmxvY2tzKGljZWJsb2NrQSxpY2VibG9ja0IpIHtcclxuICAgICAgICBsZXQgdHggPSBpY2VibG9ja0EueHRpbGUgPD0gaWNlYmxvY2tCLnh0aWxlID8gaWNlYmxvY2tBLnh0aWxlIDogaWNlYmxvY2tCLnh0aWxlO1xyXG4gICAgICAgIGxldCB0eSA9IGljZWJsb2NrQS55dGlsZTtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gaWNlYmxvY2tBLmxlbmd0aCArIGljZWJsb2NrQi5sZW5ndGggKyAxO1xyXG4gICAgICAgIHRoaXMuYWRkU3ByaXRlKG5ldyBJY2UodGhpcywgdHgsIHR5LCBsZW5ndGgpKTtcclxuICAgICAgICB0aGlzLnJlbW92ZVNwcml0ZShpY2VibG9ja0EpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU3ByaXRlKGljZWJsb2NrQik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSWNlQmxvY2sodHgsIHR5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pZCA9PT0gQ29uc3RzLk9CSkVDVF9JQ0UgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlc1tpXS55dGlsZSA9PT0gdHkgJiZcclxuICAgICAgICAgICAgICAgIHR4ID49IHRoaXMuc3ByaXRlc1tpXS54dGlsZSAmJlxyXG4gICAgICAgICAgICAgICAgdHggPCB0aGlzLnNwcml0ZXNbaV0ueHRpbGUgKyB0aGlzLnNwcml0ZXNbaV0ubGVuZ3RoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLnJlbW92ZUJsb2NrKHR4KSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVzLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZpcmUodHgsIHR5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuc3ByaXRlc1tpXS55dGlsZSA9PT0gdHkpICYmXHJcbiAgICAgICAgICAgICAgICAodHggPT09IHRoaXMuc3ByaXRlc1tpXS54dGlsZSkgJiZcclxuICAgICAgICAgICAgICAgICh0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PQkpFQ1RfRklSRSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZXMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3ByaXRlKHNwcml0ZSkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlcy5wdXNoKHNwcml0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3ByaXRlKHNwcml0ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0gPT09IHNwcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVzLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFNwYXJrcyh4dGlsZSwgeXRpbGUsIGNvbG9yLCBxdWFudGl0eSwgaW50ZW5zaXR5KSB7XHJcbiAgICAgICAgdGhpcy5zZnhzLnB1c2gobmV3IFNwYXJrcyh0aGlzLCB4dGlsZSwgeXRpbGUsIGNvbG9yLCBxdWFudGl0eSwgaW50ZW5zaXR5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU2Z4KHNwcml0ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZnhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNmeHNbaV0gPT09IHNwcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZnhzLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNwcml0ZVR5cGVBdCh0eCwgdHksIGV4Y2x1ZGVJZCkge1xyXG4gICAgICAgIGV4Y2x1ZGVJZCA9ICh0eXBlb2YgZXhjbHVkZUlkID09PSAndW5kZWZpbmVkJykgPyBDb25zdHMuT0JKRUNUX09VVCA6IGV4Y2x1ZGVJZDtcclxuICAgICAgICBpZiAodHggPCAwIHx8IHR5IDwgMCB8fCB0eCA+IHRoaXMubWFwLndpZHRoIHx8IHR5ID4gdGhpcy5tYXAuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDb25zdHMuT0JKRUNUX09VVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLm1hcC5tYXBbdHldW3R4XSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pc1Nwcml0ZUF0KHR4LCB0eSkgJiYgdGhpcy5zcHJpdGVzW2ldLmlkICE9PSBleGNsdWRlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW2ldLmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLm1hcFt0eV1bdHhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQ29uc3RzLk9CSkVDVF9CQUNLR1JPVU5EO1xyXG4gICAgfVxyXG5cclxuICAgIHNwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tYXAubWFwW3R5XVt0eF0pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaXNTcHJpdGVBdCh0eCwgdHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaXJlIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcclxuICAgICAgICBzdXBlcihDb25zdHMuT0JKRUNUX0ZJUkUsIGVuZ2luZSwgJ2ltZ19maXJlJyxcclxuICAgICAgICAgICAgdHgsIHR5LCBDb25zdHMuVElMRV9XSURUSCwgQ29uc3RzLlRJTEVfV0lEVEgsIDAsIDAsIDAsIDMsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0RPV046XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvRG93bigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpc2lvbnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCBDb25zdHMuT0JKRUNUX0ZJUkUpID09PSBDb25zdHMuT0JKRUNUX0lDRSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVGaXJlKHRoaXMueHRpbGUsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVJY2VCbG9jayh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcyNTUsIDEyNiwgMTk4JywgMTUsIDAuNSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMTIsIDI1NScsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCBDb25zdHMuT0JKRUNUX0ZJUkUpID09PSBDb25zdHMuT0JKRUNUX01FVEFMKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ZpcmUtb2ZmJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUZpcmUodGhpcy54dGlsZSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMjU1LCAxMjYsIDE5OCcsIDE1LCAwLjUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ3Jhdml0eSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29vcm5lcnMuZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0RPV04sIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGRvRG93bigpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gNDtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5USUxFX1dJRFRIKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSA0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgUmVzb3VyY2VzIH0gZnJvbSAnLi9yZXNvdXJjZXMnO1xyXG5pbXBvcnQgeyBGaXJlIH0gZnJvbSAnLi9maXJlJztcclxuaW1wb3J0IHsgSmFyIH0gZnJvbSAnLi9qYXInO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNvdXJjZXMgPSBuZXcgUmVzb3VyY2VzKCk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCd0aWxlbWFwJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ190aWxlbWFwJykpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnaW1nX2ljZScsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdfaWNlJykpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnaW1nX2phcicsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdfamFyJykpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnaW1nX2ZpcmUnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nX2ZpcmUnKSk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWdfZG9uYScsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdfZG9uYScpKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltZ19pbnRybycsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdfaW50cm8nKSk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWdfc3RhcnQnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nX3N0YXJ0JykpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnaW1nX21ldGFsJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ19tZXRhbCcpKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2Zyb3N0JywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ19mcm96ZW4nKSk7XHJcblxyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgcmVzb3VyY2VzKTtcclxuICAgIHdpbmRvdy5nYW1lID0gZ2FtZTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwtc2VsZWN0b3InKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gJy0xJykge1xyXG4gICAgICAgICAgICBnYW1lLmVuZ2luZS5sZXZlbCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgIGdhbWUuZW5naW5lLnNjZW5lLmxvYWQoZ2FtZS5lbmdpbmUubGV2ZWwpO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5ibHVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKEZJUkVOSUNFX0VESVRPUl9NT0RFKSB7XHJcbiAgICAgICAgZ2FtZS5lbmdpbmUuc291bmQubXVzaWNPbiA9IGZhbHNlO1xyXG5cdFx0Z2FtZS5lbmdpbmUuc291bmQuc291bmRPbiA9IGZhbHNlO1xyXG4gICAgICAgIGdhbWUuc3RhdGUgPSBDb25zdHMuR0FNRV9TVEFURV9QTEFZO1xyXG4gICAgICAgIGdhbWUuZW5naW5lLmVkaXRvciA9IHRydWU7XHJcbiAgICAgICAgZ2FtZS5lbmdpbmUua2V5Ym9hcmQuaW50cm8gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeHRpbGUgPSBNYXRoLmZsb29yKGUub2Zmc2V0WCAvIDMyKTtcclxuICAgICAgICAgICAgY29uc3QgeXRpbGUgPSBNYXRoLmZsb29yKGUub2Zmc2V0WSAvIDMyKTtcclxuICAgICAgICAgICAgaWYgKHRvb2wgPCAyKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5tYXAubWFwW3l0aWxlXVt4dGlsZV0gPSB0b29sO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0b29sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT0JKRUNUX1BMQVlFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUucGxheWVyLnggPSB4dGlsZSAqIDMyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5wbGF5ZXIueSA9IHl0aWxlICogMzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9JQ0U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuZW5naW5lLmFkZEljZUJsb2NrKHh0aWxlLCB5dGlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9NRVRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBNZXRhbChnYW1lLmVuZ2luZSwgeHRpbGUsIHl0aWxlLCAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9GSVJFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRTcHJpdGUobmV3IEZpcmUoZ2FtZS5lbmdpbmUsIHh0aWxlLCB5dGlsZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PQkpFQ1RfSkFSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRTcHJpdGUobmV3IEphcihnYW1lLmVuZ2luZSwgeHRpbGUsIHl0aWxlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS1zZWxlY3RvcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGdhbWUuZW5naW5lLm1hcC50aGVtZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmJsdXIoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsLXNlbGVjdG9yJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSAnLTEnKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5sZXZlbCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5zY2VuZS5sb2FkKGdhbWUuZW5naW5lLmxldmVsKTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmJsdXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXNhdmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R4dC1sZXZlbCcpLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZ2FtZS5lbmdpbmUuc2NlbmUuc2F2ZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbiIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJy4vZW5naW5lJztcclxuaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICogR2FtZSBMb29wXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmF2cyAgIFRoZSBjYW52YXMgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHsqfSByZXNvdXJjZXMgIEdhbWUgcmVzb3VyY2VzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgcmVzb3VyY2VzKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HQU1FX1NUQVRFX0lOVFJPO1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gbmV3IEVuZ2luZShjYW52YXMsIHJlc291cmNlcyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbnRybygpO1xyXG4gICAgICAgIHRoaXMuZ2FtZWxvb3AgPSB0aGlzLmdhbWVsb29wXy5iaW5kKHRoaXMpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgICAgICB0aGlzLmdhbWVsb29wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZWxvb3BfKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5HQU1FX1NUQVRFX0lOVFJPOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0ludHJvKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuR0FNRV9TVEFURV9QTEFZOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUubW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lbG9vcCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSW50cm8oKSB7XHJcbiAgICAgICAgdGhpcy5pbnRybyA9IG5ldyBBbmltU3ByaXRlKG51bGwsIHRoaXMuZW5naW5lLCAnaW1nX2ludHJvJywgMCwgMCwgNTQ0LCA0MTYsIDAsIDAsIDAsIDAsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gbmV3IEFuaW1TcHJpdGUobnVsbCwgdGhpcy5lbmdpbmUsICdpbWdfc3RhcnQnLCA3LCAxMSwgMTQwLCAyNiwgLTEwLCAwLCAwLCAxLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnN0YXJ0LmFuaW1EZWxheSA9IENvbnN0cy5BTklNX1NUQU5EQVJEX0RFTEFZICogMjA7XHJcbiAgICB9XHJcblxyXG4gICAgZG9JbnRybygpIHtcclxuICAgICAgICB0aGlzLmludHJvLmRyYXcoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0LmRyYXcoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW5naW5lLmtleWJvYXJkLmVudGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBDb25zdHMuR0FNRV9TVEFURV9QTEFZO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5zb3VuZHJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJY2UgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSwgbGVuZ3RoLCBmcm96ZW4pIHtcclxuICAgICAgICBzdXBlcihDb25zdHMuT0JKRUNUX0lDRSwgZW5naW5lLCAnaW1nX2ljZScsXHJcbiAgICAgICAgICAgIHR4LCB0eSwgQ29uc3RzLlRJTEVfV0lEVEgsIENvbnN0cy5USUxFX1dJRFRILCAwLCAwLCAwLCAxLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnh0aWxlID0gdHg7XHJcbiAgICAgICAgdGhpcy55dGlsZSA9IHR5O1xyXG4gICAgICAgIHRoaXMuZnJvemVuID0gKHR5cGVvZiBmcm96ZW4gPT09ICd1bmRlZmluZWQnKSA/IGZhbHNlIDogZnJvemVuO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuYW5pbUVuZCA9IDE7XHJcbiAgICAgICAgdGhpcy5hbmltRGVsYXkgPSA5O1xyXG4gICAgICAgIHRoaXMuYW5pbVJvdyA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gMDtcclxuICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNoZWNrRnJlZXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQmxvY2sodHgpIHtcclxuICAgICAgICBjb25zdCBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID0gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUtMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSt0aGlzLmxlbmd0aCwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAodHggPiB0aGlzLnh0aWxlICYmIHRoaXMuZ2V0VGlsZSh0eCsxLCB0aGlzLnl0aWxlKSA9PT0gQ29uc3RzLk9CSkVDVF9XQUxMKSB8fFxyXG4gICAgICAgICAgICAodHggPCB0aGlzLnh0aWxlICYmIHRoaXMuZ2V0VGlsZSh0eC0xLCB0aGlzLnl0aWxlKSA9PT0gQ29uc3RzLk9CSkVDVF9XQUxMKSB8fFxyXG4gICAgICAgICAgICAoc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9PT0gQ29uc3RzLk9CSkVDVF9NRVRBTCkgfHxcclxuICAgICAgICAgICAgKHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPT09IENvbnN0cy5PQkpFQ1RfSkFSKSB8fFxyXG4gICAgICAgICAgICAoc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPT09IENvbnN0cy5PQkpFQ1RfTUVUQUwpIHx8XHJcbiAgICAgICAgICAgIChzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9CSkVDVF9KQVIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy54dGlsZSA9IHR4IDwgdGhpcy54dGlsZSA/IHR4IDogdGhpcy54dGlsZTtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnh0aWxlICogQ29uc3RzLlRJTEVfV0lEVEg7XHJcbiAgICAgICAgdGhpcy5sZW5ndGgrKztcclxuICAgIH1cclxuXHJcbiAgICBpc1Nwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgICAgIGlmICh0aGlzLnl0aWxlID09PSB0eSkge1xyXG4gICAgICAgICAgICBpZiAodHggPj0gdGhpcy54dGlsZSAmJiB0eCA8ICh0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJsb2NrKHR4KSB7XHJcbiAgICAgICAgaWYgKHR4ID09PSB0aGlzLnh0aWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMueHRpbGUgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy54ICs9IENvbnN0cy5USUxFX1dJRFRIO1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aC0tO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHggPT09IHRoaXMueHRpbGUrdGhpcy5sZW5ndGgtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aC0tO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShcclxuICAgICAgICAgICAgICAgIG5ldyBJY2UodGhpcy5lbmdpbmUsIHR4KzEsIHRoaXMueXRpbGUsIHRoaXMueHRpbGUrdGhpcy5sZW5ndGgtdHgtMSkpO1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IHR4IC0gdGhpcy54dGlsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkdsaWRlKGRpcikge1xyXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCAhPT0gMSB8fCB0aGlzLmZyb3plbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXIgPT09IENvbnN0cy5ESVJfTEVGVCAgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMubCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlyID09PSBDb25zdHMuRElSX1JJR0hUICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ3Jhdml0eSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29vcm5lcnMuZCAmJiAhdGhpcy5mcm96ZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9ET1dOLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZhbGxpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpc2lvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuR2xpZGUodGhpcy5kaXJyZWN0aW9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtY29sbGlzaW9uJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRpbGVfZG93biA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUraSwgdGhpcy55dGlsZSsxKTtcclxuICAgICAgICAgICAgaWYgKHRpbGVfZG93biAmJiB0aWxlX2Rvd24gIT09IENvbnN0cy5PQkpFQ1RfRklSRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb29ybmVycy5kID0gdGlsZV9kb3duO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jb29ybmVycy5kID09PSBDb25zdHMuT0JKRUNUX0ZJUkUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb29ybmVycy5kID0gQ29uc3RzLk9CSkVDVF9CQUNLR1JPVU5EO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvb3JuZXJzLnIgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlK3RoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnJvemVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9JQ0VfTU9WSU5HOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfSUNFX0NIRUNLOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9ET1dOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0Rvd24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIGNvbnN0IHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZS0xLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBjb25zdCBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlK3RoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbURlbGF5Q291bnQrKyA+IHRoaXMuYW5pbURlbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbURlbGF5Q291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1Sb3cgPSB0aGlzLmFuaW1Sb3cgPT09IDAgPyAxIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCBDb25zdHMuVElMRV9XSURUSCp0aGlzLmFuaW1Sb3csIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAxKkNvbnN0cy5USUxFX1dJRFRILCBDb25zdHMuVElMRV9XSURUSCp0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAzKkNvbnN0cy5USUxFX1dJRFRILCBDb25zdHMuVElMRV9XSURUSCp0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgIHRoaXMueCtDb25zdHMuVElMRV9XSURUSCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDEqQ29uc3RzLlRJTEVfV0lEVEgsIENvbnN0cy5USUxFX1dJRFRIKnRoaXMuYW5pbVJvdyxcclxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDMqQ29uc3RzLlRJTEVfV0lEVEgsIENvbnN0cy5USUxFX1dJRFRIKnRoaXMuYW5pbVJvdyxcclxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAgdGhpcy54K0NvbnN0cy5USUxFX1dJRFRIKih0aGlzLmxlbmd0aC0xKSwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyAgaSA8IHRoaXMubGVuZ3RoLTE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDIqQ29uc3RzLlRJTEVfV0lEVEgsIENvbnN0cy5USUxFX1dJRFRIKnRoaXMuYW5pbVJvdyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgIHRoaXMueCsoQ29uc3RzLlRJTEVfV0lEVEgqaSksIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZyb3plbikge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRpbGUodGhpcy54dGlsZS0xLCB0aGlzLnl0aWxlKSA9PT0gQ29uc3RzLk9CSkVDVF9XQUxMIHx8XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID09PSBDb25zdHMuT0JKRUNUX01FVEFMIHx8XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID09PSBDb25zdHMuT0JKRUNUX0pBUlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnh0aWxlKnRoaXMud2lkdGgpLTcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55dGlsZSp0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRpbGUodGhpcy54dGlsZSt0aGlzLmxlbmd0aCwgdGhpcy55dGlsZSkgPT09IENvbnN0cy5PQkpFQ1RfV0FMTCB8fFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPT09IENvbnN0cy5PQkpFQ1RfTUVUQUwgfHxcclxuICAgICAgICAgICAgICAgIHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID09PSBDb25zdHMuT0JKRUNUX0pBUlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnh0aWxlK3RoaXMubGVuZ3RoKSp0aGlzLndpZHRoLTcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55dGlsZSp0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsaWRlKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRJTEVfV0lEVEgpIHtcclxuICAgICAgICAgICAgdGhpcy54ICs9IDQgKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvRG93bigpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gNDtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5USUxFX1dJRFRIKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSA0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5ncmF2aXR5KCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdXNoKGRpcikge1xyXG4gICAgICAgIHRoaXMuZGlycmVjdGlvbiA9ICh0eXBlb2YgZGlyID09PSAndW5kZWZpbmVkJykgPyB0aGlzLmRpcnJlY3Rpb24gOiBkaXI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxpc2lvbigpICYmICF0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0lDRV9NT1ZJTkcsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tVbmZyZWV6ZSgpIHtcclxuICAgICAgICBjb25zdCBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID0gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUtMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSt0aGlzLmxlbmd0aCwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmdldFRpbGUodGhpcy54dGlsZS0xLCB0aGlzLnl0aWxlKSAhPT0gQ29uc3RzLk9CSkVDVF9XQUxMICYmXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VGlsZSh0aGlzLnh0aWxlK3RoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKSAhPT0gQ29uc3RzLk9CSkVDVF9XQUxMICYmXHJcbiAgICAgICAgICAgIHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgIT09IENvbnN0cy5PQkpFQ1RfTUVUQUwgJiZcclxuICAgICAgICAgICAgc3ByaXRlVHlwZUF0TGVmdENvcm5lciAhPT0gQ29uc3RzLk9CSkVDVF9KQVIgJiZcclxuICAgICAgICAgICAgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgIT09IENvbnN0cy5PQkpFQ1RfTUVUQUwgJiZcclxuICAgICAgICAgICAgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgIT09IENvbnN0cy5PQkpFQ1RfSkFSXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRnJlZXplKCkge1xyXG4gICAgICAgIGNvbnN0IHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZS0xLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBjb25zdCBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlK3RoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICh0aGlzLmdldFRpbGUodGhpcy54dGlsZS0xLCB0aGlzLnl0aWxlKSA9PT0gQ29uc3RzLk9CSkVDVF9XQUxMKSB8fFxyXG4gICAgICAgICAgICAodGhpcy5nZXRUaWxlKHRoaXMueHRpbGUrdGhpcy5sZW5ndGgsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT0JKRUNUX1dBTEwpIHx8XHJcbiAgICAgICAgICAgIChzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID09PSBDb25zdHMuT0JKRUNUX01FVEFMKSB8fFxyXG4gICAgICAgICAgICAoc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9PT0gQ29uc3RzLk9CSkVDVF9KQVIpIHx8XHJcbiAgICAgICAgICAgIChzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9CSkVDVF9NRVRBTCkgfHxcclxuICAgICAgICAgICAgKHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID09PSBDb25zdHMuT0JKRUNUX0pBUilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5mcm96ZW4gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xyXG5pbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEphciBleHRlbmRzIEFuaW1TcHJpdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5KSB7XHJcbiAgICAgICAgc3VwZXIoQ29uc3RzLk9CSkVDVF9KQVIsIGVuZ2luZSwgJ2ltZ19qYXInLFxyXG4gICAgICAgICAgICB0eCwgdHksIENvbnN0cy5USUxFX1dJRFRILCBDb25zdHMuVElMRV9XSURUSCwgMCwgMCwgMCwgMywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5hbmltRGVsYXkgPSBDb25zdHMuQU5JTV9TVEFOREFSRF9ERUxBWSAqIDI7XHJcbiAgICAgICAgdGhpcy5vbkZpcmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFuaW1Sb3cgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0RPV046XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvRG93bigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpc2lvbnMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9uRmlyZSAmJiB0aGlzLmNvb3JuZXJzLnUgPT09IENvbnN0cy5PQkpFQ1RfRklSRSkge1xyXG4gICAgICAgICAgICB0aGlzLnR1cm5PbkZpcmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub25GaXJlICYmIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSkgPT09IENvbnN0cy5PQkpFQ1RfSUNFKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVsdEljZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBncmF2aXR5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb29ybmVycy5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfRE9XTiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZG9Eb3duKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRJTEVfV0lEVEgpIHtcclxuICAgICAgICAgICAgdGhpcy55ICs9IDQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0dXJuT25GaXJlKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbVJvdyA9IDE7XHJcbiAgICAgICAgdGhpcy5vbkZpcmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSwgJzI1NSwgODgsIDMzJywgMzApO1xyXG4gICAgfVxyXG5cclxuICAgIG1lbHRJY2UoKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlSWNlQmxvY2sodGhpcy54dGlsZSwgdGhpcy55dGlsZSAtIDEpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSwgJzI1NSwgODgsIDMzJywgMzApO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSwgJzMzLCA4OCwgMjU1JywgNDApO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIHN1cGVyLmRyYXcoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlIC0gMSwgdGhpcy55dGlsZSkgPT09IENvbnN0cy5PQkpFQ1RfSUNFICYmXHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueHRpbGUgLSAxLCB0aGlzLnl0aWxlKS5mcm96ZW5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLnh0aWxlICogdGhpcy53aWR0aCktNyxcclxuICAgICAgICAgICAgICAgIHRoaXMueXRpbGUgKiB0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlICsgMSwgdGhpcy55dGlsZSkgPT09IENvbnN0cy5PQkpFQ1RfSUNFICYmXHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueHRpbGUgKyAxLCB0aGlzLnl0aWxlKS5mcm96ZW5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLnh0aWxlICsgMSkgKiB0aGlzLndpZHRoLTcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnl0aWxlICogdGhpcy5oZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBLZXlib2FyZCBwcmVzcyBlbmdpbmVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBLZXlib2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnVwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5rZXlkb3duID0gdGhpcy5rZXlkb3duXy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMua2V5dXAgPSB0aGlzLmtleXVwXy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW50cm8gPSB0cnVlO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5ZG93biwgZmFsc2UpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5dXAsIGZhbHNlKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmludHJvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmludHJvID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9hY3Rpb24nKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsICgpID0+IHRoaXMuZG93biA9IHRydWUpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fYWN0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgKCkgPT4gdGhpcy5kb3duID0gZmFsc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fbGVmdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKCkgPT4gdGhpcy5sZWZ0ID0gdHJ1ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9sZWZ0JykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgKCkgPT4gdGhpcy5sZWZ0ID0gZmFsc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fcmlnaHQnKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsICgpID0+IHRoaXMucmlnaHQgPSB0cnVlKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX3JpZ2h0JykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgKCkgPT4gdGhpcy5yaWdodCA9IGZhbHNlKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX3NlbGVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsICgpID0+IHRoaXMuZW50ZXIgPSB0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAga2V5ZG93bl8oZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzc6IC8vIExlZnRcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzODogLy8gVXBcclxuICAgICAgICAgICAgICAgIHRoaXMudXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQwOiAvLyBEb3duXHJcbiAgICAgICAgICAgIGNhc2UgMzI6IC8vIFNwYWNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTM6IC8vRW50ZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXl1cF8oZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzc6IC8vIExlZnRcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzg6IC8vIFVwXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOTogLy8gUmlnaHRcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQwOiAvLyBEb3duXHJcbiAgICAgICAgICAgIGNhc2UgMzI6IC8vIFNwYWNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMzogLy9FbnRlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGxldmVscyA9IFtcclxuICAgIHtcIm1hcFwiOltbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXV0sXCJ0aGVtZVwiOjAsXCJzcHJpdGVzXCI6W3tcImlkXCI6NyxcInhcIjoxMSxcInlcIjo0LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6OCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo3LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjYsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6OCxcInlcIjo0LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo3LFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6OCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjo3LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo5LFwieVwiOjEwLFwidlwiOjF9XX0sXHJcbiAgICB7XCJtYXBcIjpbWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMSwwLDEsMCwwLDAsMCwwLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1dLFwidGhlbWVcIjoxLFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6MyxcInlcIjo3LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo2LFwieVwiOjcsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjQsXCJ5XCI6NyxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6NSxcInZcIjo0fSx7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6OCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6NyxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6NixcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTMsXCJ5XCI6OCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6OCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6NyxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6NixcInZcIjoxfV19LFxyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMSwwLDAsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMSwwLDAsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMSwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwwLDAsMSwxLDEsMSwxLDAsMCwwLDAsMSwxLDFdLFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6MixcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjE0LFwieVwiOjYsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6NCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjo2LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo5LFwieVwiOjUsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjExLFwieVwiOjYsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjExLFwieVwiOjUsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NixcInZcIjoxfV19LFxyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6MCxcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjgsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6OCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTMsXCJ5XCI6NyxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjo4LFwidlwiOjV9LHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo3LFwidlwiOjN9LHtcImlkXCI6MyxcInhcIjoxMixcInlcIjo2LFwidlwiOjJ9LHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjQsXCJ5XCI6NyxcInZcIjozfSx7XCJpZFwiOjMsXCJ4XCI6MyxcInlcIjo2LFwidlwiOjJ9LHtcImlkXCI6NixcInhcIjo1LFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjQsXCJ5XCI6OCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MyxcInlcIjo3LFwidlwiOjF9XX0sXHJcbiAgICB7XCJtYXBcIjpbWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sWzEsMSwxLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sWzEsMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sWzEsMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sWzEsMSwxLDAsMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDAsMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDAsMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1dLFwidGhlbWVcIjo2LFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6MTEsXCJ5XCI6OCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6MTAsXCJ2XCI6M30se1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjksXCJ2XCI6M30se1wiaWRcIjozLFwieFwiOjcsXCJ5XCI6NyxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MyxcInlcIjo1LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo5LFwieVwiOjcsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjMsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6NCxcInZcIjoxfV19LFxyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6NSxcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjE0LFwieVwiOjMsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjE0LFwieVwiOjQsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6NCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjo2LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo4LFwieVwiOjYsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjYsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjEsXCJ5XCI6OCxcInZcIjoxMn0se1wiaWRcIjo2LFwieFwiOjIsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjMsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjQsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjExLFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMixcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjIsXCJ5XCI6NyxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MixcInlcIjo1LFwidlwiOjF9XX0sXHJcbiAgICB7XCJtYXBcIjpbWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1dLFwidGhlbWVcIjoxLFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6MTIsXCJ5XCI6NCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjoxMSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjoxMSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6MTEsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NSxcInZcIjo1fSx7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6NCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjo2LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo2LFwieVwiOjUsXCJ2XCI6MX1dfSxcclxuICAgIHtcIm1hcFwiOltbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDAsMCwxLDAsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXV0sXCJ0aGVtZVwiOjEsXCJzcHJpdGVzXCI6W3tcImlkXCI6NyxcInhcIjo4LFwieVwiOjYsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjoxMCxcInZcIjoyfSx7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo5LFwidlwiOjd9LHtcImlkXCI6NixcInhcIjo1LFwieVwiOjgsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjExLFwieVwiOjYsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjExLFwieVwiOjUsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6NSxcInZcIjoxfV19LFxyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxLDFdLFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFsxLDEsMCwxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMCwxLDFdLFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFsxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6NixcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjUsXCJ5XCI6NCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjo4LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo4LFwieVwiOjUsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6OCxcInZcIjoxfV19LFxyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwxLDEsMSwxLDEsMCwwLDEsMSwxLDFdLFsxLDEsMSwwLDAsMCwwLDEsMSwxLDAsMCwwLDAsMSwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwwLDAsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6MTAsXCJzcHJpdGVzXCI6W3tcImlkXCI6NyxcInhcIjozLFwieVwiOjQsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjIsXCJ5XCI6NixcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MyxcInlcIjo3LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo0LFwieVwiOjgsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo5LFwieVwiOjgsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjcsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjExLFwieVwiOjYsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjIsXCJ5XCI6NSxcInZcIjoxMH0se1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6NCxcInZcIjoxfV19LFxyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFsxLDEsMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDAsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxLDFdLFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMSwxLDFdLFsxLDEsMSwwLDAsMCwwLDAsMCwxLDAsMCwxLDAsMSwxLDFdLFsxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMCwwLDAsMSwxLDFdLFsxLDEsMSwxLDEsMCwwLDAsMSwxLDAsMCwxLDAsMSwxLDFdLFsxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMCwwLDAsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6NixcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjMsXCJ5XCI6MyxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTMsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjQsXCJ5XCI6NCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjozLFwidlwiOjJ9LHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjozLFwidlwiOjJ9LHtcImlkXCI6NixcInhcIjo5LFwieVwiOjMsXCJ2XCI6MX1dfSxcclxuICAgIHtcIm1hcFwiOltbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDAsMCwwLDEsMSwxLDEsMSwxLDEsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxbMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDAsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXV0sXCJ0aGVtZVwiOjcsXCJzcHJpdGVzXCI6W3tcImlkXCI6NyxcInhcIjo4LFwieVwiOjUsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NSxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6NSxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MixcInlcIjozLFwidlwiOjJ9LHtcImlkXCI6MyxcInhcIjoxNCxcInlcIjo0LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxNCxcInlcIjo0LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxMyxcInlcIjozLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxNCxcInlcIjozLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMSxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MixcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo2LFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo5LFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEzLFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MyxcInlcIjo4LFwidlwiOjExfSx7XCJpZFwiOjYsXCJ4XCI6NCxcInlcIjo5LFwidlwiOjF9XX0sXHJcbiAgICB7XHJcbiAgICAgICAgbWFwOiBbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDAsMCwwLDAsMCwwLDAsMSwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDAsMCwwLDAsMCwxLDEsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzcHJpdGVzOiBbXHJcbiAgICAgICAgICAgIHtpZCA6NywgeDogMTMsIHk6IDIsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjMsIHg6IDQsIHk6IDQsIHY6IDh9LFxyXG4gICAgICAgICAgICB7aWQgOjMsIHg6IDExLCB5OiAzLCB2OiA0fSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiAzLCB5OiA1LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA0LCB5OiA2LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA1LCB5OiA3LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiAxMCwgeTogNiwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogMTEsIHk6IDUsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDE0LCB5OiAxMCwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogMTQsIHk6IDksIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDIsIHk6IDEwLCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA5LCB5OiA4LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiAyLCB5OiA5LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA4LCB5OiA4LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA3LCB5OiA4LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA2LCB5OiA4LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA4LCB5OiAxMCwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogNywgeTogMTAsIHY6IDF9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB0aGVtZTogOFxyXG4gICAgfSxcclxuICAgIHtcIm1hcFwiOltbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXV0sXCJ0aGVtZVwiOjYsXCJzcHJpdGVzXCI6W3tcImlkXCI6NyxcInhcIjoxNCxcInlcIjoxMCxcInZcIjoxfV19LFxyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMCwwLDAsMCwwLDEsMCwxLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwxLDEsMSwxLDAsMCwxLDAsMSwxLDAsMCwxLDFdLFsxLDEsMCwxLDAsMCwxLDEsMCwxLDAsMSwwLDEsMCwxLDFdLFsxLDEsMCwxLDEsMCwxLDEsMSwxLDAsMSwwLDEsMCwxLDFdLFsxLDEsMCwxLDAsMCwxLDAsMSwxLDAsMSwwLDEsMCwxLDFdLFsxLDEsMCwxLDAsMCwxLDAsMCwxLDAsMSwwLDEsMCwxLDFdLFsxLDEsMCwxLDEsMCwxLDAsMCwxLDEsMSwxLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6OSxcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjEwLFwieVwiOjExLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo4LFwieVwiOjEsXCJ2XCI6MX0se1wiaWRcIjo1LFwieFwiOjQsXCJ5XCI6MTEsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6NSxcInZcIjoxfV19XHJcbl07XHJcblxyXG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xyXG5pbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEFuaW1TcHJpdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5KSB7XHJcbiAgICAgICAgc3VwZXIoQ29uc3RzLk9CSkVDVF9QTEFZRVIsIGVuZ2luZSwgJ2ltZ19kb25hJywgdHgsIHR5LCA0OCwgNjQsIC0xMCwgLTMyLCAyLCAyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDI7XHJcbiAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gMTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gMDsgLy9zdGFuZGluZyB0b3AgcmlnaHQgZG93biBsZWZ0XHJcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IENvbnN0cy5USUxFX1dJRFRIO1xyXG4gICAgICAgIHRoaXMudGlsZUhlaWdodCA9IENvbnN0cy5USUxFX1dJRFRIO1xyXG4gICAgICAgIHRoaXMuYW5pbURlbGF5ID0gMztcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuZmFsbENvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuaW5uZXJDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLnN0YW5kQ291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5pbnRybygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxlZnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICAvL2lmIHN0YW5kaW5nIHRoZW4gdHVyblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJyZWN0aW9uICE9PSBDb25zdHMuRElSX0xFRlQpIHtcclxuICAgICAgICAgICAgICAgIC8vaXMgbm90IHVuZGVyIGEgYnJpY2tcclxuICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fVFVSTl9TVEFSVCwgQ29uc3RzLkFOSU1fVFVSTl9FTkQsIGZhbHNlLCBDb25zdHMuQU5JTV9SSUdIVF9ST1csIDQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fQ1JPVUNIX1NUQVJULENvbnN0cy5BTklNX0NST1VDSF9TVEFSVCwgZmFsc2UsIENvbnN0cy5BTklNX0xFRlRfUk9XLCA0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfVFVSTiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSBDb25zdHMuRElSX0xFRlQ7XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vcnVubmluZ1xyXG4gICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5sKSAmJiBUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbm90IHVuZGVyIGEgYnJpY2tcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51bCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX1JVTl9TVEFSVCwgQ29uc3RzLkFOSU1fUlVOX0VORCwgZmFsc2UsIENvbnN0cy5BTklNX0xFRlRfUk9XKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fQ1JPVUNIX1NUQVJULCBDb25zdHMuQU5JTV9DUk9VQ0hfRU5ELCBmYWxzZSwgQ29uc3RzLkFOSU1fTEVGVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0xFRlQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9oaXQgYW4gaWNlXHJcbiAgICAgICAgICAgICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkgJiYgKHRoaXMuY29vcm5lcnMubCA9PT0gQ29uc3RzLk9CSkVDVF9JQ0UgfHwgdGhpcy5jb29ybmVycy5sID09PSBDb25zdHMuT0JKRUNUX01FVEFMKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jbGltYlxyXG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmwpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnVsKSAmJiAhdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fUFVTSF9TVEFSVCxDb25zdHMuQU5JTV9QVVNIX1NUQVJULGZhbHNlLCBDb25zdHMuQU5JTV9MRUZUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9VUCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmlnaHQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJyZWN0aW9uICE9PSBDb25zdHMuRElSX1JJR0hUKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX1RVUk5fU1RBUlQsIENvbnN0cy5BTklNX1RVUk5fRU5ELCBmYWxzZSwgQ29uc3RzLkFOSU1fTEVGVF9ST1csIDQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fQ1JPVUNIX1NUQVJULENvbnN0cy5BTklNX0NST1VDSF9TVEFSVCwgZmFsc2UsIENvbnN0cy5BTklNX1JJR0hUX1JPVywgNCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1RVUk4sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gQ29uc3RzLkRJUl9SSUdIVDtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5yKSAmJiBUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fUlVOX1NUQVJULCBDb25zdHMuQU5JTV9SVU5fRU5ELCBmYWxzZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fQ1JPVUNIX1NUQVJULCBDb25zdHMuQU5JTV9DUk9VQ0hfRU5ELCBmYWxzZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9SSUdIVCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkgJiYgKHRoaXMuY29vcm5lcnMuciA9PT0gQ29uc3RzLk9CSkVDVF9JQ0UgfHwgdGhpcy5jb29ybmVycy5yID09PSBDb25zdHMuT0JKRUNUX01FVEFMKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudXIpICYmICF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9QVVNIX1NUQVJULENvbnN0cy5BTklNX1BVU0hfU1RBUlQsZmFsc2UsIENvbnN0cy5BTklNX1JJR0hUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9VUCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnVybigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gQ29uc3RzLk1PVkVfUklQKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXlPbmNlKCdkYW5nZXInKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9SSVAsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fUklQX1NUQVJULENvbnN0cy5BTklNX1JJUF9FTkQsIHRydWUsIENvbnN0cy5BTklNX1JJR0hUX1JPVyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGludHJvKCkge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9CSUdfRkFMTF9TVEFSVCxDb25zdHMuQU5JTV9CSUdfRkFMTF9FTkQsIHRydWUsIENvbnN0cy5BTklNX1JJR0hUX1JPVywgNCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9JTlRSTywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy55IC09IDMyO1xyXG4gICAgfVxyXG5cclxuICAgIG91dHJvKCkge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9GQUxMX1NUQVJULCBDb25zdHMuQU5JTV9CSUdfRkFMTF9FTkQsIHRydWUsIENvbnN0cy5BTklNX1JJR0hUX1JPVywgNCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9PVVRSTywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGRvUmlwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBncmF2aXR5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvb3JuZXJzLmQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJvcigndW5kZWZpbmVkIGNvb3JuZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0RPV04sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmFsbENvdW50ZXIgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXlPbmNlKFwiZmFsbGluZ1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZhbGxDb3VudGVyID49IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fQklHX0ZBTExfU1RBUlQsIENvbnN0cy5BTklNX0JJR19GQUxMX0VORCwgdHJ1ZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0JJR19GQUxMX1NUQVJULCBDb25zdHMuQU5JTV9CSUdfRkFMTF9FTkQsIHRydWUsIENvbnN0cy5BTklNX1JJR0hUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQuc3RvcChcImZhbGxpbmdcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ29uc3RzLk1PVkVfRE9XTikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ZhbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mYWxsQ291bnRlciA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlICsgMSwgJzI1NSwgMTM1LCAxMjQnLCA1LCAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUgKyAxLCAnMTIyLCAyMTEsIDI1NScsIDEwLCAgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb29ybmVycy5kID09PSBDb25zdHMuT0JKRUNUX0pBUikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGphciA9IHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueHRpbGUsIHRoaXMueXRpbGUgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoamFyICYmIGphci5vbkZpcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idXJuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGljZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRJUl9SSUdIVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZHIpICYmIHRoaXMuY29vcm5lcnMuZHIgIT09IENvbnN0cy5PQkpFQ1RfRklSRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fSUNFX1NUQVJULENvbnN0cy5BTklNX0lDRV9FTkQsZmFsc2UsIENvbnN0cy5BTklNX1JJR0hUX1JPVywgNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfSUNFX01BS0UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb29ybmVycy5kciA9PT0gQ29uc3RzLk9CSkVDVF9JQ0UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0lDRV9TVEFSVCxDb25zdHMuQU5JTV9JQ0VfRU5ELGZhbHNlLCBDb25zdHMuQU5JTV9SSUdIVF9ST1csIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0lDRV9SRU1PVkUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9JQ0VfU1RBUlQsQ29uc3RzLkFOSU1fSUNFX0VORCxmYWxzZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9JQ0VfRkFJTCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmRsKSAmJiAodGhpcy5jb29ybmVycy5kbCAhPT0gQ29uc3RzLk9CSkVDVF9GSVJFKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fSUNFX1NUQVJULENvbnN0cy5BTklNX0lDRV9FTkQsZmFsc2UsIENvbnN0cy5BTklNX0xFRlRfUk9XLCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9JQ0VfTUFLRSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvb3JuZXJzLmRsID09PSBDb25zdHMuT0JKRUNUX0lDRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fSUNFX1NUQVJULENvbnN0cy5BTklNX0lDRV9FTkQsZmFsc2UsIENvbnN0cy5BTklNX0xFRlRfUk9XLCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9JQ0VfUkVNT1ZFLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fSUNFX1NUQVJULENvbnN0cy5BTklNX0lDRV9FTkQsZmFsc2UsIENvbnN0cy5BTklNX0xFRlRfUk9XLCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9JQ0VfRkFJTCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGp1bXAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRElSX1JJR0hUKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMucikgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnVyKSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fUFVTSF9TVEFSVCxDb25zdHMuQU5JTV9QVVNIX1NUQVJULGZhbHNlLCBDb25zdHMuQU5JTV9SSUdIVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfVVAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmwpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51bCkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX1BVU0hfU1RBUlQsQ29uc3RzLkFOSU1fUFVTSF9TVEFSVCxmYWxzZSwgQ29uc3RzLkFOSU1fTEVGVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfVVAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvUnVuKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlcisrO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLkFOSU1fRlJBTUVfQ09VTlQpIHtcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQgKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb1R1cm4oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+PSBDb25zdHMuQU5JTV9GUkFNRV9DT1VOVCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvT3V0cm8oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciAlIDEwID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5uZXJDb3VudGVyICs9IDE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcxMjQsIDIzOCwgNjYnLCAyMCwgIDAuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzI1NSwgMTM1LCAxMjQnLCAxNSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSA1KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzEyMiwgMjExLCAyNTUnLCAxMCwgIDEuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyICUgMiA9PT0gMCAmJiB0aGlzLmlubmVyQ291bnRlciA8IDYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2NsaW1iJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyICUgMiA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnkgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID49IDYpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnc3RhdGUtbGVhdmUnKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5uZXh0TGV2ZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9JbnRybygpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID09PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMzgsIDY2JywgMjAsICAwLjUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzI1NSwgMTM1LCAxMjQnLCAxNSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTIyLCAyMTEsIDI1NScsIDEwLCAgMS41KTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnc3RhZ2UtZW50ZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSAxNikge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gMjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5zdG9wKFwiZmFsbGluZ1wiKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb0dyYXZpdHkoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuQU5JTV9GUkFNRV9DT1VOVCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgICAgICAgICAgdGhpcy5mYWxsQ291bnRlcisrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb1N0YW5kKCkge1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhbmRDb3VudGVyKysgPiA1MDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9TTEVFUF9TVEFSVCxDb25zdHMuQU5JTV9TTEVFUF9FTkQsdHJ1ZSwgdGhpcy5kaXJyZWN0aW9uICE9PSAxID8gQ29uc3RzLkFOSU1fTEVGVF9ST1cgOiBDb25zdHMuQU5JTV9SSUdIVF9ST1csIDQ4LCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9TVEFORF9TVEFSVCxDb25zdHMuQU5JTV9TVEFORF9FTkQsdHJ1ZSwgdGhpcy5kaXJyZWN0aW9uICE9PSAxID8gQ29uc3RzLkFOSU1fTEVGVF9ST1cgOiBDb25zdHMuQU5JTV9SSUdIVF9ST1csIDgsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0NST1VDSF9TVEFSVCxDb25zdHMuQU5JTV9DUk9VQ0hfU1RBUlQsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gIT09IDEgPyBDb25zdHMuQU5JTV9MRUZUX1JPVyA6IENvbnN0cy5BTklNX1JJR0hUX1JPVywgOCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvVXAoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSAxOCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY291bnRlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2NsaW1iJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcxMjQsIDIzOCwgNjYnLCAxMCwgIDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMjU1LCAxMzUsIDEyNCcsIDUsIDEuMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9QVVNIX0VORCwgQ29uc3RzLkFOSU1fUFVTSF9FTkQsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5ESVJfUklHSFQgPyBDb25zdHMuQU5JTV9SSUdIVF9ST1cgOiBDb25zdHMuQU5JTV9MRUZUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0pVTVBfU1RBUlQsIENvbnN0cy5BTklNX0pVTVBfU1RBUlQsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5ESVJfUklHSFQgPyBDb25zdHMuQU5JTV9SSUdIVF9ST1cgOiBDb25zdHMuQU5JTV9MRUZUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0pVTVBfRU5ELCBDb25zdHMuQU5JTV9KVU1QX0VORCwgZmFsc2UsIHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRJUl9SSUdIVCA/IENvbnN0cy5BTklNX1JJR0hUX1JPVyA6IENvbnN0cy5BTklNX0xFRlRfUk9XKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gOCAqIHRoaXMuZGlycmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKDIsIDIsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5ESVJfUklHSFQgPyBDb25zdHMuQU5JTV9SSUdIVF9ST1cgOiBDb25zdHMuQU5JTV9MRUZUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE4OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9TVEFORCwgQ29uc3RzLkFOSU1fU1RBTkQsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5ESVJfUklHSFQgPyBDb25zdHMuQU5JTV9SSUdIVF9ST1cgOiBDb25zdHMuQU5JTV9MRUZUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZUljZSgpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCduZXctaWNlJyk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkSWNlQmxvY2sodGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSsxKTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSArIDEpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlICsgMSwgJzEyNCwgMjE0LCAyNTUnLCA1KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVJY2VCbG9jaygpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtcmVtb3ZlJyk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlSWNlQmxvY2sodGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSsxKTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSArIDEpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlICsgMSwgJzEyNCwgMjE0LCAyNTUnLCA1KTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoKCkge1xyXG4gICAgICAgIGxldCBpY2UgPSAgdGhpcy5lbmdpbmUuaWNlQXQodGhpcy54dGlsZSt0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUpO1xyXG4gICAgICAgIGlmIChpY2UgJiYgaWNlLmNhbkdsaWRlKHRoaXMuZGlycmVjdGlvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUsICcyNTUsIDI1NSwgMjU1JywgMyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlLCAnMTI0LCAyMTQsIDI1NScsIDMsIDEuNSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9QVVNIX1NUQVJULCBDb25zdHMuQU5JTV9QVVNIX0VORCwgZmFsc2UsIHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRJUl9SSUdIVCA/IENvbnN0cy5BTklNX1JJR0hUX1JPVyA6IENvbnN0cy5BTklNX0xFRlRfUk9XLCAzKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9QVVNILCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9QdXNoKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAyO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLkFOSU1fRlJBTUVfQ09VTlQpIHtcclxuICAgICAgICAgICAgLy8gZml4bWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgaWNlID0gIHRoaXMuZW5naW5lLmljZUF0KHRoaXMueHRpbGUrdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICAgICAgaWYgKGljZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLXB1c2gnKTtcclxuICAgICAgICAgICAgICAgIGljZS5wdXNoKHRoaXMuZGlycmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb0ljZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID09PSA4KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBDb25zdHMuTU9WRV9JQ0VfTUFLRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWtlSWNlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSWNlQmxvY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID49IENvbnN0cy5BTklNX0ZSQU1FX0NPVU5UKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9GYWlsSWNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDgpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWRpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlICsgMSwgJzg4LDY2LDY2Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFOSU1fRlJBTUVfQ09VTlQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb2xsaXNpb25zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSwgQ29uc3RzLk9CSkVDVF9QTEFZRVIpID09PSBDb25zdHMuT0JKRUNUX0ZJUkUpIHtcclxuICAgICAgICAgICAgdGhpcy5idXJuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmUgKCkge1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9ucygpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBDb25zdHMuTU9WRV9TVEFORCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YW5kQ291bnRlciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBDb25zdHMuTU9WRV9ET1dOKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFsbENvdW50ZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9SSUdIVDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9SdW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0xFRlQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvUnVuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9ET1dOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0dyYXZpdHkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX1VQOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1VwKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9UVVJOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1R1cm4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0lDRV9NQUtFOlxyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0lDRV9SRU1PVkU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvSWNlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9JQ0VfRkFJTDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9GYWlsSWNlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9TVEFORDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9TdGFuZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfUFVTSDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9QdXNoKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9SSVA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvUmlwKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9PVVRSTzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9PdXRybygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfSU5UUk86XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvSW50cm8oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBSZXNvdXJjZXMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKG5hbWUsIHJlc291cmNlKSB7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNbbmFtZV0gPSByZXNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc291cmNlc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVGlsZU1hcCB9IGZyb20gJy4vdGlsZW1hcCc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgSWNlIH0gZnJvbSAnLi9pY2UnO1xyXG5pbXBvcnQgeyBGaXJlIH0gZnJvbSAnLi9maXJlJztcclxuaW1wb3J0IHsgbGV2ZWxzIH0gZnJvbSAnLi9sZXZlbHMnO1xyXG5pbXBvcnQgeyBKYXIgfSBmcm9tICcuL2phcic7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICBkYXRhLm1hcCA9IHRoaXMuZW5naW5lLm1hcC5tYXA7XHJcbiAgICAgICAgZGF0YS50aGVtZSA9IHRoaXMuZW5naW5lLm1hcC50aGVtZTtcclxuICAgICAgICBkYXRhLnNwcml0ZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiB0aGlzLmVuZ2luZS5zcHJpdGVzKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9ICh0eXBlb2Ygc3ByaXRlLmxlbmd0aCA9PT0gXCJ1bmRlZmluZWRcIikgPyAxIDogc3ByaXRlLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFsdWUgPSBzcHJpdGUuaWQgPT09IENvbnN0cy5PQkpFQ1RfSkFSID8gc3ByaXRlLm9uRmlyZSA6IHZhbHVlO1xyXG4gICAgICAgICAgICBkYXRhLnNwcml0ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IHNwcml0ZS5pZCxcclxuICAgICAgICAgICAgICAgIFwieFwiOiBzcHJpdGUueHRpbGUsXHJcbiAgICAgICAgICAgICAgICBcInlcIjogc3ByaXRlLnl0aWxlLFxyXG4gICAgICAgICAgICAgICAgXCJ2XCI6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZChpbmRleCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbGV2ZWxzW2luZGV4XSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuZ2luZS5sZXZlbCA9IGluZGV4O1xyXG4gICAgICAgIGNvbnN0IGxldmVsID0gbGV2ZWxzW2luZGV4XTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5zcHJpdGVzID0gW107XHJcbiAgICAgICAgdGhpcy5lbmdpbmUubWFwID0gbmV3IFRpbGVNYXAodGhpcy5lbmdpbmUsIGxldmVsLm1hcCwgbGV2ZWwudGhlbWUpO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3ByaXRlIG9mIGxldmVsLnNwcml0ZXMpIHtcclxuICAgICAgICAgICAgc3dpdGNoKHNwcml0ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT0JKRUNUX1BMQVlFUjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZSh0aGlzLmVuZ2luZS5wbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT0JKRUNUX0lDRTpcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGUudiA9IHR5cGVvZiBzcHJpdGUudiA9PT0gXCJ1bmRlZmluZWRcIiA/IDEgOiBzcHJpdGUudjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IEljZSh0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55LCBwYXJzZUludChzcHJpdGUudikpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9NRVRBTDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IE1ldGFsKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnksIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9GSVJFOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShuZXcgRmlyZSh0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PQkpFQ1RfSkFSOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGphciA9IG5ldyBKYXIodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgamFyLm9uRmlyZSA9IHNwcml0ZS52ID09PSBcIjFcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUoamFyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuY2xhc3MgUGFydGljbGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgY29sb3IsIGludGVuY2l0eSkge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykgPyAnMjU1LDI1NSwyNTUnIDogY29sb3I7XHJcbiAgICAgICAgdGhpcy5yID0gMztcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy52eCA9IChNYXRoLnJhbmRvbSgpICogNCAtIDIpICogaW50ZW5jaXR5O1xyXG4gICAgICAgIHRoaXMudnkgPSAoTWF0aC5yYW5kb20oKSAqIDYgLSA0KSAqIGludGVuY2l0eTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMC4xNTtcclxuICAgICAgICB0aGlzLmxpZmUgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBsZXQgb3BhY2l0eSA9IHRoaXMubGlmZSAvIDI1NTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgnICsgdGhpcy5jb2xvcisgJywnICsgb3BhY2l0eSArICcpJztcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMuciwgMCwgTWF0aC5QSSoyLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy52eDtcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eTtcclxuICAgICAgICB0aGlzLnZ5ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5saWZlIC09IDU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGFya3MgZXh0ZW5kcyBTcHJpdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChlbmdpbmUsIHR4LCB0eSwgY29sb3IsIGxlbmd0aCwgaW50ZW5jaXR5KSB7XHJcbiAgICAgICAgc3VwZXIobnVsbCwgZW5naW5lLCB0eCwgdHksIDMyLCAzMik7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICh0eXBlb2YgY29sb3IgPT09ICd1bmRlZmluZWQnKSA/ICcyNTUsMjU1LDI1NScgOiBjb2xvcjtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9ICh0eXBlb2YgbGVuZ3RoID09PSAndW5kZWZpbmVkJykgPyAxMCA6IGxlbmd0aDtcclxuICAgICAgICB0aGlzLmludGVuY2l0eSA9ICh0eXBlb2YgaW50ZW5jaXR5ID09PSAndW5kZWZpbmVkJykgPyAxIDogaW50ZW5jaXR5O1xyXG4gICAgICAgIHRoaXMucGFydGljbGVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldID0gbmV3IFBhcnRpY2xlKHRoaXMuZW5naW5lLmN0eCwgdHgqQ29uc3RzLlRJTEVfV0lEVEgrMTYsIHR5KkNvbnN0cy5USUxFX1dJRFRIKzE2LCB0aGlzLmNvbG9yLCB0aGlzLmludGVuY2l0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuY3R4LnNhdmUoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmdpbmVNb3ZlKCkge1xyXG4gICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXS5tb3ZlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcnRpY2xlc1tpXS5saWZlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcnRpY2xlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlU2Z4KHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU291bmQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5tdXNpY09uID0gdHJ1ZTtcclxuXHRcdHRoaXMuc291bmRPbiA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy5zZnhWb2x1bWUgPSAwLjM7XHJcblx0XHR0aGlzLnNmeCA9IHtcclxuXHRcdFx0XCJmaXJlLW9mZlwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1maXJlLW9mZicpLFxyXG5cdFx0XHRcImljZS1wdXNoXCIgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Z4LWljZS1wdXNoJyksXHJcblx0XHRcdFwiZmFsbFwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1mYWxsJyksXHJcblx0XHRcdFwiZmFsbGluZ1wiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1mYWxsaW5nJyksXHJcblx0XHRcdFwibmV3LWljZVwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1uZXctaWNlJyksXHJcblx0XHRcdFwiY2xpbWJcIiA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZngtY2xpbWInKSxcclxuXHRcdFx0XCJpY2UtY29sbGlzaW9uXCIgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Z4LWljZS1jb2xsaXNpb24nKSxcclxuXHRcdFx0XCJzdGFnZS1lbnRlclwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1zdGFnZS1lbnRlcicpLFxyXG5cdFx0XHRcImRhbmdlclwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1kYW5nZXInKSxcclxuXHRcdFx0XCJpY2UtcmVtb3ZlXCIgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Z4LWljZS1yZW1vdmUnKSxcclxuXHRcdFx0XCJzdGF0ZS1sZWF2ZVwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1zdGF0ZS1sZWF2ZScpLFxyXG5cdFx0XHRcImljZS1kaXNhYmxlZFwiIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1kaXNhYmxlZCcpXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cGxheShzZngpIHtcclxuXHRcdGlmICghdGhpcy5zb3VuZE9uKSByZXR1cm47XHJcblx0XHR0aGlzLnNmeFtzZnhdLnZvbHVtZSA9IHRoaXMuc2Z4Vm9sdW1lO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS5jdXJyZW50VGltZSA9IDA7XHJcblx0XHR0aGlzLnNmeFtzZnhdLnBsYXkoKS5jYXRjaCgoKT0+e30pO1xyXG5cdH1cclxuXHJcblx0cGxheU9uY2Uoc2Z4KSB7XHJcblx0XHRpZiAoIXRoaXMuc2Z4W3NmeF0ucGF1c2VkKSByZXR1cm47XHJcblx0XHRpZiAoIXRoaXMuc291bmRPbikgcmV0dXJuO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS52b2x1bWUgPSB0aGlzLnNmeFZvbHVtZTtcclxuXHRcdHRoaXMuc2Z4W3NmeF0uY3VycmVudFRpbWUgPSAwO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS5wbGF5KCkuY2F0Y2goKCk9Pnt9KTtcclxuXHR9XHJcblxyXG5cdHN0b3Aoc2Z4KSB7XHJcblx0XHR0aGlzLnNmeFtzZnhdLnBhdXNlKCk7XHJcblx0XHR0aGlzLnNmeFtzZnhdLmN1cnJlbnRUaW1lID0gMDtcclxuXHR9XHJcblxyXG5cdHNvdW5kcmFjaygpIHtcclxuXHRcdGlmICghdGhpcy5tdXNpY09uKSByZXR1cm47XHJcblx0XHR0aGlzLm11c2ljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NmeC1tdXNpYy1zcGFya3MnKTtcclxuXHRcdHRoaXMubXVzaWMubXV0ZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMubXVzaWMudm9sdW1lID0gMC4yO1xyXG5cdFx0dGhpcy5tdXNpYy5sb29wID0gdHJ1ZTtcclxuXHRcdHRoaXMubXVzaWMucGxheSgpLmNhdGNoKCgpPT57fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuL3N0cnVjdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBjbGFzcyBvZiB0aGUgc3ByaXRlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZW5naW5lICAgRW5naW5lIEVuZ2luZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR4ICAgICBQb3NpdGlvbiB0aWxlIHggaW4gdGhlIG1hcFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5ICAgICBQb3NpdGlvbiB0aWxlIHkgaW4gdGhlIG1hcFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoICBXaWR0aCBvZiB0aGUgc3ByaXRlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiB0aGUgc3ByaXRlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBlbmdpbmUsIHR4LCB0eSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmN0eCA9IGVuZ2luZS5jdHg7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycyA9IG5ldyBQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc29saWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5NT1ZFX1NUQU5EO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAwO1xyXG4gICAgICAgIHRoaXMueHRpbGUgPSB0eDtcclxuICAgICAgICB0aGlzLnl0aWxlID0gdHk7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54dGlsZSAqIENvbnN0cy5USUxFX1dJRFRIO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMueXRpbGUgKiBDb25zdHMuVElMRV9XSURUSDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBzcHJpdGUgc3RhdGVzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhdGUgIENvbnN0YW50IG9mIHRoZSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtb3ZpbmcgVHJ1ZSBpZiBzcHJpdGUgaXMgbW92aW5nXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlKHN0YXRlLCBtb3ZpbmcpIHtcclxuICAgICAgICB0aGlzLm1vdmluZyA9ICh0eXBlb2YgbW92aW5nID09PSAndW5kZWZpbmVkJykgPyBmYWxzZSA6IG1vdmluZztcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaWxlKHR4LCB0eSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZ2luZS5tYXAuZ2V0VGlsZSh0eCwgdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3ByaXRlQXQgKHR4LCB0eSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnh0aWxlID09PSB0eCAmJiB0aGlzLnl0aWxlID09PSB0eTtcclxuICAgIH1cclxuXHJcbiAgICBzcHJpdGVUeXBlQXQodHgsIHR5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0eCwgdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUgKCkge31cclxuXHJcbiAgICBlbmdpbmVNb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMudSA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUsIHRoaXMueXRpbGUtMSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy5kID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSsxKTtcclxuICAgICAgICB0aGlzLmNvb3JuZXJzLmwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLTEsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMuciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUrMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy51bCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUtMSwgdGhpcy55dGlsZS0xKTtcclxuICAgICAgICB0aGlzLmNvb3JuZXJzLnVyID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSsxLCB0aGlzLnl0aWxlLTEpO1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMuZGwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLTEsIHRoaXMueXRpbGUrMSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy5kciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUrMSwgdGhpcy55dGlsZSsxKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlKCk7XHJcblxyXG4gICAgICAgIHRoaXMueHRpbGUgPSBNYXRoLmZsb29yKHRoaXMueCAvIENvbnN0cy5USUxFX1dJRFRIKTtcclxuICAgICAgICB0aGlzLnl0aWxlID0gTWF0aC5mbG9vcih0aGlzLnkgLyBDb25zdHMuVElMRV9XSURUSCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiogU3RvcmVzIHBvc2l0aW9uIG9mIHRoZSBjb3JuZXJzIGFuZCB2ZXJ0aWNlc1xyXG4qL1xyXG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51ID0gMDtcclxuICAgICAgICB0aGlzLmQgPSAwO1xyXG4gICAgICAgIHRoaXMubCA9IDA7XHJcbiAgICAgICAgdGhpcy5yID0gMDtcclxuICAgICAgICB0aGlzLnVsID0gMDtcclxuICAgICAgICB0aGlzLnVyID0gMDtcclxuICAgICAgICB0aGlzLmRsID0gMDtcclxuICAgICAgICB0aGlzLmRyID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvb3Ige1xyXG4gICAgY29uc3RydWN0b3IgKHR4LCB0eSkge1xyXG4gICAgICAgIHRoaXMueHRpbGUgPSB0eDtcclxuICAgICAgICB0aGlzLnl0aWxlID0gdHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcbiIsImltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCB7XHJcbiAgICAvKipcclxuICAgICAqIFRpbGVtYXAgY2xhc3NcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgRW5naW5lXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWFwICBNYXRyaXggb2YgdGhlIG1hcFxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCBtYXAsIHRoZW1lKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBlbmdpbmUuY3R4O1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcclxuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IENvbnN0cy5USUxFX1dJRFRIO1xyXG4gICAgICAgIHRoaXMudGlsZUhlaWdodCA9IENvbnN0cy5USUxFX1dJRFRIO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXAubGVuZ3RoIC0gMTtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5tYXBbMF0ubGVuZ3RoIC0gMTtcclxuICAgICAgICB0aGlzLnRpbGVzSW1hZ2UgPSB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCd0aWxlbWFwJyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGNvbnRlbnQgb2YgdGhlIHRpbGUgaW5zaWRlIHRoZSBtYXRyaXhcclxuICAgICAqIGlmIHBvc2l0aW9uIG91dCBvZiBib3VuZHMgcmV0dXJucyBDb25zdHMuT0JKRUNUX09VVFxyXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSB5IHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHggcG9zaXRpb25cclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gICBDb250ZW50IG9mIHRoZSB0aWxlXHJcbiAgICAgKi9cclxuICAgIGdldFRpbGUoeCwgeSkge1xyXG4gICAgICAgIGlmICh4IDwgMCB8fCB5IDwgMCB8fCB4ID4gdGhpcy53aWR0aCB8fCB5ID4gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIENvbnN0cy5PQkpFQ1RfT1VUO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBbeV1beF07XHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmF3cyB0aGUgbWFwXHJcbiAgICAgKiBAcmV0dXJuIHtub25lfVxyXG4gICAgICovXHJcbiAgICBkcmF3KCkge1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy53aWR0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHRoaXMuaGVpZ2h0OyArK2opIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aWxlVHlwZSA9IENvbnN0cy5USUxFX0JBQ0tHUk9VTkQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXBbal1baV0gPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0VGlsZShpLTEsIGopICYmICF0aGlzLmdldFRpbGUoaSsxLCBqKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlVHlwZSA9IENvbnN0cy5USUxFX0JPVEg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5nZXRUaWxlKGktMSwgaikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVElMRV9MRUZUO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2V0VGlsZShpKzEsIGopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRJTEVfUklHSFQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVElMRV9NSURETEU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVzSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVtZSAqIHRoaXMudGlsZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgaSAqIHRoaXMudGlsZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGogKiB0aGlzLnRpbGVIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge31cclxuXHJcbiAgICBlbmdpbmVNb3ZlKCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbGUgPSB7XHJcbiAgIHRpbGVzOiB7XHJcbiAgICAgICAgW0NvbnN0cy5PQkpFQ1RfQkFDS0dST1VORF06IHtcclxuICAgICAgICAgICAgc29saWQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9CSkVDVF9PVVRdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9CSkVDVF9QTEFZRVJdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9CSkVDVF9JQ0VdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9CSkVDVF9NRVRBTF06IHtcclxuICAgICAgICAgICAgc29saWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtDb25zdHMuT0JKRUNUX1dBTExdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9CSkVDVF9GSVJFXToge1xyXG4gICAgICAgICAgICBzb2xpZDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtDb25zdHMuT0JKRUNUX0pBUl06IHtcclxuICAgICAgICAgICAgc29saWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGlzU29saWQ6IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVzW2lkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVTkRFRklORUQgT04gaXNTb2xpZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzW2lkXS5zb2xpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=