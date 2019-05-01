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
        this.sprites = [];
        this.sfxs = [];
        this.player = {};
        this.level = 0;
        this.keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_0__["Keyboard"]();
        this.sound = new _sound__WEBPACK_IMPORTED_MODULE_1__["Sound"](resources);
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
        this.addSprite(new _ice__WEBPACK_IMPORTED_MODULE_3__["Ice"](this, tx, ty, length, iceblockA.frozen || iceblockB.frozen));
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
/* harmony import */ var _tiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tiles */ "./src/tiles.js");




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
            this.engine.addSparks(this.xtile, this.ytile, '255, 222, 127', 15, 0.5);
            this.engine.addSparks(this.xtile, this.ytile, '41, 42, 90', 10);
        }

    }

    gravity() {
        if (!_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.d)) {
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _fire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fire */ "./src/fire.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _jar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jar */ "./src/jar.js");
/* harmony import */ var _metal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metal */ "./src/metal.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources */ "./src/resources.js");







window.addEventListener('load', () => {
    const resources = new _resources__WEBPACK_IMPORTED_MODULE_5__["Resources"]();
    resources.add('image', 'tilemap', 'images/tilemap.png');
    resources.add('image', 'img_ice', 'images/ice.png');
    resources.add('image', 'img_jar', 'images/jar.png');
    resources.add('image', 'img_fire', 'images/fire.png');
    resources.add('image', 'img_dona', 'images/dona.png');
    resources.add('image', 'img_intro', 'images/intro.png');
    resources.add('image', 'img_start', 'images/start.png');
    resources.add('image', 'img_metal', 'images/metal.png');
    resources.add('image', 'frost', 'images/frozen.png');
    resources.add('audio', 'sfx-ice-push', 'sounds/sfx-ice-push.mp3');
    resources.add('audio', 'sfx-fire-off', 'sounds/sfx-fire-off.mp3');
    resources.add('audio', 'sfx-falling', 'sounds/sfx-falling.mp3');
    resources.add('audio', 'sfx-new-ice', 'sounds/sfx-new-ice.mp3');
    resources.add('audio', 'sfx-climb', 'sounds/sfx-climb.mp3');
    resources.add('audio', 'sfx-ice-collision', 'sounds/sfx-ice-collision.mp3');
    resources.add('audio', 'sfx-stage-enter', 'sounds/sfx-stage-enter.mp3');
    resources.add('audio', 'sfx-danger', 'sounds/sfx-danger.mp3');
    resources.add('audio', 'sfx-ice-remove', 'sounds/sfx-ice-remove.mp3');
    resources.add('audio', 'sfx-state-leave', 'sounds/sfx-state-leave.mp3');
    resources.add('audio', 'sfx-disabled', 'sounds/sfx-disabled.mp3');
    resources.add('audio', 'sfx-fall', 'sounds/sfx-fall.mp3');
    resources.add('audio', 'sfx-music-sparks', 'music/sparks.mp3');

    resources.ready(() => {
        StartGame(resources);
        CheckEditor();
    });
});

function StartGame(resources) {
    let canvas = document.getElementById('canvas');
    let game = new _game__WEBPACK_IMPORTED_MODULE_2__["Game"](canvas, resources);
    window.game = game;
    document.getElementById('level-selector').addEventListener('change', (e) => {
        if (e.target.value !== '-1') {
            game.engine.level = parseInt(e.target.value, 10);
            game.engine.scene.load(game.engine.level);
            e.target.blur();
        }
    });
}

function CheckEditor() {
    if (window.FIRENICE_EDITOR_MODE) {
        game.engine.sound.musicOn = false;
		game.engine.sound.soundOn = false;
        game.state = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].GAME_STATE_PLAY;
        game.engine.editor = true;
        game.engine.keyboard.intro = false;

        canvas.addEventListener('click', (e) => {
            const xtile = Math.floor(e.offsetX / 32);
            const ytile = Math.floor(e.offsetY / 32);
            if (tool < 2) {
                game.engine.map.map[ytile][xtile] = tool;
            } else {
                switch (tool) {
                    case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_PLAYER:
                        game.engine.player.x = xtile * 32;
                        game.engine.player.y = ytile * 32;
                        break;
                    case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_ICE:
                        game.engine.addIceBlock(xtile, ytile);
                        break;
                    case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL:
                        game.engine.addSprite(new _metal__WEBPACK_IMPORTED_MODULE_4__["Metal"](game.engine, xtile, ytile, 1));
                        break;
                    case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_FIRE:
                        game.engine.addSprite(new _fire__WEBPACK_IMPORTED_MODULE_1__["Fire"](game.engine, xtile, ytile));
                        break;
                    case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR:
                        game.engine.addSprite(new _jar__WEBPACK_IMPORTED_MODULE_3__["Jar"](game.engine, xtile, ytile));
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
}

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
            this.engine.keyboard.enter = false;
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
        this.length = length;
        this.animEnd = 1;
        this.animDelay = 9;
        this.animRow = 0;
        this.dirrection = 0;
        this.falling = false;
        if (typeof frozen !== 'undefined') {
            this.frozen = frozen;
        } else {
            this.checkFreeze();
        }
    }

    addBlock(tx) {
        const spriteTypeAtLeftCorner = this.engine.spriteTypeAt(this.xtile-1, this.ytile);
        const spriteTypeAtRightCorner = this.engine.spriteTypeAt(this.xtile+this.length, this.ytile);
        if (tx > this.xtile) {
            if (
                this.getTile(tx + 1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL ||
                spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL ||
                spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR
            ) {
                this.frozen = true;
            }
        }

        if (tx < this.xtile) {
            if (
                this.getTile(tx - 1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL ||
                spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL ||
                spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR
            ) {
                this.frozen = true;
            }
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
            this.engine.addSprite(new Ice(this.engine, tx+1, this.ytile, this.xtile + this.length - tx - 1, this.frozen));
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
        if (!_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.d) && !this.frozen) {
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
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":1,"sprites":[{"id":7,"x":12,"y":4,"v":1},{"id":6,"x":8,"y":10,"v":1},{"id":6,"x":9,"y":11,"v":1},{"id":6,"x":10,"y":11,"v":1},{"id":3,"x":8,"y":5,"v":5},{"id":3,"x":10,"y":4,"v":1},{"id":3,"x":6,"y":6,"v":1},{"id":6,"x":6,"y":5,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":1,"sprites":[{"id":7,"x":8,"y":6,"v":1},{"id":6,"x":5,"y":10,"v":1},{"id":6,"x":6,"y":10,"v":1},{"id":6,"x":7,"y":10,"v":1},{"id":6,"x":8,"y":10,"v":1},{"id":6,"x":9,"y":10,"v":1},{"id":6,"x":10,"y":10,"v":1},{"id":3,"x":11,"y":10,"v":2},{"id":3,"x":5,"y":9,"v":7},{"id":6,"x":5,"y":8,"v":1},{"id":3,"x":11,"y":6,"v":1},{"id":6,"x":11,"y":5,"v":1},{"id":3,"x":6,"y":5,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":6,"sprites":[{"id":7,"x":5,"y":4,"v":1},{"id":6,"x":5,"y":8,"v":1},{"id":3,"x":8,"y":5,"v":1},{"id":3,"x":8,"y":4,"v":1},{"id":6,"x":11,"y":8,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1],[1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":10,"sprites":[{"id":7,"x":3,"y":4,"v":1},{"id":6,"x":2,"y":6,"v":1},{"id":6,"x":3,"y":7,"v":1},{"id":6,"x":4,"y":8,"v":1},{"id":6,"x":5,"y":9,"v":1},{"id":6,"x":6,"y":10,"v":1},{"id":6,"x":7,"y":10,"v":1},{"id":6,"x":8,"y":9,"v":1},{"id":6,"x":9,"y":8,"v":1},{"id":6,"x":10,"y":7,"v":1},{"id":6,"x":11,"y":6,"v":1},{"id":3,"x":2,"y":5,"v":10},{"id":3,"x":5,"y":4,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1],[1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1],[1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1],[1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":6,"sprites":[{"id":7,"x":3,"y":3,"v":1},{"id":6,"x":13,"y":10,"v":1},{"id":6,"x":5,"y":10,"v":1},{"id":6,"x":6,"y":10,"v":1},{"id":6,"x":7,"y":10,"v":1},{"id":3,"x":4,"y":4,"v":1},{"id":3,"x":6,"y":3,"v":2},{"id":3,"x":11,"y":3,"v":2},{"id":6,"x":9,"y":3,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],[1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":7,"sprites":[{"id":7,"x":8,"y":5,"v":1},{"id":6,"x":6,"y":5,"v":1},{"id":3,"x":10,"y":5,"v":1},{"id":3,"x":2,"y":3,"v":2},{"id":3,"x":14,"y":4,"v":1},{"id":3,"x":14,"y":4,"v":1},{"id":3,"x":13,"y":3,"v":1},{"id":6,"x":14,"y":3,"v":1},{"id":6,"x":11,"y":10,"v":1},{"id":6,"x":5,"y":10,"v":1},{"id":6,"x":12,"y":9,"v":1},{"id":6,"x":2,"y":9,"v":1},{"id":6,"x":6,"y":9,"v":1},{"id":6,"x":7,"y":9,"v":1},{"id":6,"x":8,"y":9,"v":1},{"id":6,"x":9,"y":9,"v":1},{"id":6,"x":10,"y":9,"v":1},{"id":6,"x":13,"y":9,"v":1},{"id":3,"x":3,"y":9,"v":1},{"id":3,"x":3,"y":8,"v":11},{"id":6,"x":4,"y":9,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":2,"sprites":[{"id":7,"x":12,"y":3,"v":1},{"id":4,"x":10,"y":3,"v":1},{"id":6,"x":7,"y":3,"v":1},{"id":6,"x":10,"y":7,"v":1},{"id":6,"x":8,"y":10,"v":1},{"id":4,"x":7,"y":7,"v":1},{"id":4,"x":10,"y":10,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":5,"sprites":[{"id":7,"x":2,"y":3,"v":1},{"id":6,"x":4,"y":3,"v":1},{"id":6,"x":5,"y":3,"v":1},{"id":4,"x":3,"y":3,"v":1},{"id":6,"x":14,"y":10,"v":1},{"id":6,"x":13,"y":10,"v":1},{"id":6,"x":11,"y":10,"v":1},{"id":6,"x":12,"y":10,"v":1}]},
    {"map":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1],[1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1],[1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],"theme":6,"sprites":[{"id":7,"x":8,"y":4,"v":1},{"id":5,"x":6,"y":11,"v":1},{"id":6,"x":5,"y":9,"v":1},{"id":6,"x":8,"y":10,"v":1},{"id":4,"x":7,"y":4,"v":1}]},
    {"map":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"theme":1,"sprites":[{"id":7,"x":10,"y":6,"v":1},{"id":3,"f":1,"x":10,"y":10,"v":1},{"id":3,"f":1,"x":6,"y":9,"v":5},{"id":3,"f":1,"x":7,"y":8,"v":1},{"id":3,"f":1,"x":6,"y":7,"v":5},{"id":3,"f":1,"x":6,"y":5,"v":5},{"id":6,"x":6,"y":10,"v":1},{"id":6,"x":10,"y":8,"v":1},{"id":6,"x":6,"y":6,"v":1},{"id":6,"x":10,"y":4,"v":1}]},
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

/***/ "./src/metal.js":
/*!**********************!*\
  !*** ./src/metal.js ***!
  \**********************/
/*! exports provided: Metal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Metal", function() { return Metal; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _animsprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animsprite */ "./src/animsprite.js");
/* harmony import */ var _tiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tiles */ "./src/tiles.js");




class Metal extends _animsprite__WEBPACK_IMPORTED_MODULE_1__["AnimSprite"] {

    constructor(engine, tx, ty, length) {
        super(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL, engine, 'img_metal',
            tx, ty, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH, 0, 0, 0, 1, true);
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
        if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].DIR_LEFT  && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.l)) {
            return false;
        }
        if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].DIR_RIGHT && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.r)) {
            return false;
        }
        return true;
    }

    gravity() {
        if (!_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.d)) {
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
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MOVE_STAND, false);
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
        this.ctx.save();
        if (this.animDelayCount++ > this.animDelay) {
            this.animDelayCount = 0;
            this.animRow = this.animRow === 0 ? 1 : 0;
        }
        this.ctx.drawImage(this.image, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH*this.animRow, this.width, this.height,  this.x, this.y, this.width, this.height);

        if (
            this.engine.spriteTypeAt(this.xtile-1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_ICE &&
            this.engine.spriteAt(this.xtile-1, this.ytile).frozen
        ) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile*this.width)-7,
                this.ytile*this.height
            );
        }
        if (
            this.engine.spriteTypeAt(this.xtile+this.length, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_ICE &&
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
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH) {
            this.x += 4 * this.dirrection;
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MOVE_STAND, false);
        }
    }

    doDown() {
        this.counter += 4;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH) {
            this.y += 4;
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MOVE_STAND, false);
        }
    }

    push(dir) {
        this.dirrection = (typeof dir === 'undefined') ? this.dirrection : dir;
        if (!this.collision()) {
            this.moving = true;
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MOVE_ICE_MOVING, true);
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MOVE_STAND, false);
        }
    }
}


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
        if (this.counter === 8) {
            this.engine.addSparks(this.xtile, this.ytile, '124, 238, 66', 20,  0.5);
            this.engine.addSparks(this.xtile, this.ytile, '255, 135, 124', 15, 1);
            this.engine.addSparks(this.xtile, this.ytile, '122, 211, 255', 10,  1.5);
            this.engine.sound.play('stage-enter');
        }
        if (this.counter >= 32) {
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
        this.definitions = [];
        this.resources = { };
        this.loaded = 0;
        this.canvas = document.getElementById('canvas');
        if (canvas) {
            this.ctx = this.canvas.getContext('2d');
        }
    }

    add(type, name, src) {
        this.definitions.push({type: type, name: name, src: src});
    }

    get(name) {
        return this.resources[name];
    }

    check(callback) {
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = '#fff';
            this.ctx.fillRect(50, 250, this.loaded * 450 / this.definitions.length, 40);
        }
        if (this.loaded === this.definitions.length) {
            callback();
        }
    }
    ready(callback) {
        for (const resource of this.definitions) {
            if (resource.type === 'image') {
                const image = new Image();
                image.addEventListener('load', () => {
                    this.loaded += 1;
                    this.check(callback);
                });
                image.src = resource.src;
                this.resources[resource.name] = image;
            }
            if (resource.type ==='audio') {
                const audio = new Audio(resource.src);
                audio.addEventListener('canplaythrough', () => {
                    this.loaded += 1;
                    this.check(callback);
                });
                this.resources[resource.name] = audio;
            }
        }
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
/* harmony import */ var _fire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fire */ "./src/fire.js");
/* harmony import */ var _ice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ice */ "./src/ice.js");
/* harmony import */ var _jar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jar */ "./src/jar.js");
/* harmony import */ var _metal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metal */ "./src/metal.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _tilemap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tilemap */ "./src/tilemap.js");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./levels */ "./src/levels.js");









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
        if (typeof _levels__WEBPACK_IMPORTED_MODULE_7__["levels"][index] === 'undefined') {
            index = 0;
        }
        this.engine.level = index;
        const level = _levels__WEBPACK_IMPORTED_MODULE_7__["levels"][index];
        this.engine.sprites = [];
        this.engine.map = new _tilemap__WEBPACK_IMPORTED_MODULE_6__["TileMap"](this.engine, level.map, level.theme);
        for (const sprite of level.sprites) {
            switch(sprite.id) {
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_PLAYER:
                    this.engine.player = new _player__WEBPACK_IMPORTED_MODULE_5__["Player"](this.engine, sprite.x, sprite.y);
                    this.engine.addSprite(this.engine.player);
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_ICE:
                    sprite.v = typeof sprite.v === "undefined" ? 1 : sprite.v;
                    const ice = new _ice__WEBPACK_IMPORTED_MODULE_2__["Ice"](this.engine, sprite.x, sprite.y, parseInt(sprite.v));
                    this.engine.addSprite(ice);
                    if (typeof sprite.f !== 'undefined') {
                        ice.frozen = false;
                    }
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL:
                    this.engine.addSprite(new _metal__WEBPACK_IMPORTED_MODULE_4__["Metal"](this.engine, sprite.x, sprite.y, 1));
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_FIRE:
                    this.engine.addSprite(new _fire__WEBPACK_IMPORTED_MODULE_1__["Fire"](this.engine, sprite.x, sprite.y));
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR:
                    const jar = new _jar__WEBPACK_IMPORTED_MODULE_3__["Jar"](this.engine, sprite.x, sprite.y);
                    if (sprite.v == 1) {
                        jar.turnOnFire();
                    }
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
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ "./src/engine.js");


class Sound {
	constructor(resources) {
		this.resources = resources;
		this.musicOn = true;
		this.soundOn = true;

		this.sfxVolume = 0.3;
		this.sfx = {
			"fire-off": resources.get('sfx-fire-off'),
			"ice-push": resources.get('sfx-ice-push'),
			"fall": resources.get('sfx-fall'),
			"falling": resources.get('sfx-falling'),
			"new-ice": resources.get('sfx-new-ice'),
			"climb": resources.get('sfx-climb'),
			"ice-collision": resources.get('sfx-ice-collision'),
			"stage-enter": resources.get('sfx-stage-enter'),
			"danger": resources.get('sfx-danger'),
			"ice-remove": resources.get('sfx-ice-remove'),
			"state-leave": resources.get('sfx-state-leave'),
			"ice-disabled": resources.get('sfx-disabled')
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
		this.music = this.resources.get('sfx-music-sparks');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlbmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9sZXZlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21ldGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RydWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9E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QUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZpcmVuaWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZmlyZW5pY2UuanNcIik7XG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbVNwcml0ZSBleHRlbmRzIFNwcml0ZSB7XHJcbiAgICAvKipcclxuICAgICAqIEFuaW1hdGVkIFNwcml0ZSwgaW5oZXJ0cyBmcm9tIFNwcml0ZS5cclxuICAgICAqIEFkZHMgZHJhd2luZyBvZiBwaWN0dXJlcyBpbiB0aGUgYm9keSBvZiBzcHJpdGVcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgICAgRW5naW5lIEVuZ2luZVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGltYWdlICAgRG9tIGltYWdlIG9iamVjdCAoaW1nIHNyYz0pXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHggICAgICBUaWxlIFggcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eSAgICAgIFRpbGUgWSBwb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoICAgV2lkdGggb2YgdGhlIHNwcml0ZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAgSGVpZ2h0IG9mIHRoZSBzcHJpdGVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRYIE9mZnNldCBYIG9mIGRyYXdpbmcgdGhlIHBpY3R1cmUgaW50byB0aGUgY2FudmFzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0WSBPZmZzZXQgWSBvZiBkcmF3aW5nIHRoZSBwaWN0dXJlIGludG8gdGhlIGNhbnZhc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0ICAgQW5pbWF0aW9uIGZyYW1lIHN0YXJ0XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kICAgICBBbmltYXRpb24gZnJhbWUgZW5kXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb3AgICBSZXBlYXQgYW5pbWF0aW9uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yIChpZCwgZW5naW5lLCBpbWFnZSwgdHgsIHR5LCB3aWR0aCwgaGVpZ2h0LCBvZmZzZXRYLCBvZmZzZXRZLCBzdGFydCwgZW5kLCBsb29wKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIGVuZ2luZSwgdHgsIHR5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldChpbWFnZSk7XHJcbiAgICAgICAgdGhpcy5hbmltTG9vcCA9IGxvb3A7XHJcbiAgICAgICAgdGhpcy5hbmltU3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5hbmltQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuYW5pbURlbGF5ID0gQ29uc3RzLkFOSU1fU1RBTkRBUkRfREVMQVk7XHJcbiAgICAgICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5hbmltUm93ID0gMDtcclxuICAgICAgICB0aGlzLm9mZnNldFggPSBvZmZzZXRYO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IG9mZnNldFk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzcHJpdGUgYW5pbWF0aW9uIGZyYW1lc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFN0YXJ0IGZyYW1lIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgICBFbmQgZnJhbWUgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb29wICBJZiB0cnVlLCBhbmltYXRpb24gd2lsbCBsb29wXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93ICAgUm93IG9mIHRoZSBmcmFtZXMgaW4gdGhlIHNwcml0ZSBpbWFnZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IERlbGF5IGJldHdlZW4gZWFjaCBmcmFtZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvbmNlICBTZXRzIGFsbCB0aGUgbmV3IHZhbHVlcyBvbmx5IG9uZSB0aW1lLlxyXG4gICAgICovXHJcbiAgICBzZXRBbmltKHN0YXJ0LCBlbmQsIGxvb3AsIHJvdywgZGVsYXksIG9uY2UpIHtcclxuICAgICAgICBsZXQgX29uY2UgPSAodHlwZW9mIG9uY2UgPT09ICd1bmRlZmluZWQnKSA/IGZhbHNlIDogb25jZTtcclxuICAgICAgICBsZXQgX2RlbGF5ID0gKHR5cGVvZiBkZWxheSA9PT0gJ3VuZGVmaW5lZCcpID8gQ29uc3RzLkFOSU1fU1RBTkRBUkRfREVMQVkgOiBkZWxheTtcclxuICAgICAgICBsZXQgX3JvdyA9ICh0eXBlb2Ygcm93ID09PSAndW5kZWZpbmVkJykgPyB0aGlzLmFuaW1Sb3cgOiByb3c7XHJcbiAgICAgICAgaWYgKCFfb25jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gc3RhcnQ7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbUxvb3AgPSBsb29wO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1EZWxheSA9IF9kZWxheTtcclxuICAgICAgICAgICAgdGhpcy5hbmltUm93ID0gX3JvdztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbmltU3RhcnQgIT09IHN0YXJ0IHx8IHRoaXMuYW5pbUVuZCAhPT0gZW5kIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1Mb29wICE9PSBsb29wIHx8IHRoaXMuYW5pbVJvdyAhPT0gX3JvdylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltU3RhcnQgPSBzdGFydDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUVuZCA9IGVuZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbURlbGF5ID0gX2RlbGF5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltUm93ID0gX3JvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRHJhd3MgdGhlIGZyYW1lIG9mIHRoZSBzcHJpdGUgaW4gdGhlIGNhbnZhc1xyXG4gICAgICovXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy5hbmltQ291bnQqdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5hbmltUm93ICogdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICB0aGlzLngrdGhpcy5vZmZzZXRYLCB0aGlzLnkrdGhpcy5vZmZzZXRZLFxyXG4gICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbURlbGF5Q291bnQrKyA+IHRoaXMuYW5pbURlbGF5KSB7XHJcbiAgICAgICAgICAgIGlmICgrK3RoaXMuYW5pbUNvdW50ID4gdGhpcy5hbmltRW5kKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltTG9vcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gdGhpcy5hbmltU3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gdGhpcy5hbmltRW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbURlbGF5Q291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IENvbnN0cyA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgVElMRV9XSURUSDogMzIsXHJcbiAgICBNT1ZFX1NUQU5EOiAwLFxyXG4gICAgTU9WRV9MRUZUOiAxLFxyXG4gICAgTU9WRV9SSUdIVDogMixcclxuICAgIE1PVkVfRE9XTjogMyxcclxuICAgIE1PVkVfVVA6IDQsXHJcbiAgICBNT1ZFX1RVUk46IDUsXHJcbiAgICBNT1ZFX0lDRV9NQUtFOiA2LFxyXG4gICAgTU9WRV9JQ0VfUkVNT1ZFOiA3LFxyXG4gICAgTU9WRV9JQ0VfTU9WSU5HOiA4LFxyXG4gICAgTU9WRV9JQ0VfQ0hFQ0s6IDksXHJcbiAgICBNT1ZFX1JJUDogMTAsXHJcbiAgICBNT1ZFX1BVU0g6IDgsXHJcbiAgICBNT1ZFX0lDRV9GQUlMOiAxMSxcclxuICAgIE1PVkVfT1VUUk86IDEyLFxyXG4gICAgTU9WRV9JTlRSTzogMTMsXHJcbiAgICBESVJfTEVGVDogLTEsXHJcbiAgICBESVJfUklHSFQ6IDEsXHJcbiAgICBBTklNX1NUQU5EQVJEX0RFTEFZOiAyLFxyXG4gICAgQU5JTV9GUkFNRV9DT1VOVDogMTYsXHJcbiAgICBBTklNX0xFRlRfUk9XOiAxLFxyXG4gICAgQU5JTV9SSUdIVF9ST1c6IDAsXHJcbiAgICBBTklNX1JVTl9TVEFSVDogMCxcclxuICAgIEFOSU1fUlVOX0VORDogMyxcclxuICAgIEFOSU1fU1RBTkQ6IDQsXHJcbiAgICBBTklNX1RVUk5fU1RBUlQ6IDQsXHJcbiAgICBBTklNX1RVUk5fRU5EOiA3LFxyXG4gICAgQU5JTV9GQUxMX1NUQVJUOiA4LFxyXG4gICAgQU5JTV9GQUxMX0VORDogOSxcclxuICAgIEFOSU1fQklHX0ZBTExfU1RBUlQ6IDEwLFxyXG4gICAgQU5JTV9CSUdfRkFMTF9FTkQ6IDExLFxyXG4gICAgQU5JTV9QVVNIX1NUQVJUOiAxMixcclxuICAgIEFOSU1fUFVTSF9FTkQ6IDEzLFxyXG4gICAgQU5JTV9KVU1QX1NUQVJUOiAxNCxcclxuICAgIEFOSU1fSlVNUF9FTkQ6IDE1LFxyXG4gICAgQU5JTV9TVEFORF9TVEFSVDogMTYsXHJcbiAgICBBTklNX1NUQU5EX0VORDogMTcsXHJcbiAgICBBTklNX0lDRV9TVEFSVDogMTgsXHJcbiAgICBBTklNX0lDRV9FTkQ6IDE5LFxyXG4gICAgQU5JTV9DUk9VQ0hfU1RBUlQ6IDIwLFxyXG4gICAgQU5JTV9DUk9VQ0hfRU5EOiAyMixcclxuICAgIEFOSU1fUklQX1NUQVJUOiAyMyxcclxuICAgIEFOSU1fUklQX0VORDogMjQsXHJcbiAgICBBTklNX1NMRUVQX1NUQVJUOiAyNSxcclxuICAgIEFOSU1fU0xFRVBfRU5EOiAyNixcclxuICAgIFRJTEVfQkFDS0dST1VORDogMCxcclxuICAgIFRJTEVfQk9USDogMzIsXHJcbiAgICBUSUxFX0xFRlQ6IDY0LFxyXG4gICAgVElMRV9NSURETEU6IDk2LFxyXG4gICAgVElMRV9SSUdIVDogMTI4LFxyXG4gICAgT0JKRUNUX09VVDogLTEsXHJcbiAgICBPQkpFQ1RfQkFDS0dST1VORDogMCxcclxuICAgIE9CSkVDVF9XQUxMOiAxLFxyXG4gICAgT0JKRUNUX0lDRTogMyxcclxuICAgIE9CSkVDVF9NRVRBTDogNCxcclxuICAgIE9CSkVDVF9KQVI6IDUsXHJcbiAgICBPQkpFQ1RfRklSRTogNixcclxuICAgIE9CSkVDVF9QTEFZRVI6IDcsXHJcbiAgICBHQU1FX1NUQVRFX1BMQVk6IDEsXHJcbiAgICBHQU1FX1NUQVRFX0lOVFJPOiAyXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4va2V5Ym9hcmQnO1xyXG5pbXBvcnQgeyBTb3VuZCB9IGZyb20gJy4vc291bmQnO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xyXG5pbXBvcnQgeyBJY2UgfSBmcm9tICcuL2ljZSc7XHJcbmltcG9ydCB7IFNwYXJrcyB9IGZyb20gJy4vc2Z4JztcclxuaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuLyoqXHJcbiAqIEVuZ2luZSBMb29wXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW5naW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHJlc291cmNlcykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY3dpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuY2hlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSByZXNvdXJjZXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2Z4cyA9IFtdO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0ge307XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IDA7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZCA9IG5ldyBLZXlib2FyZCgpO1xyXG4gICAgICAgIHRoaXMuc291bmQgPSBuZXcgU291bmQocmVzb3VyY2VzKTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFNjZW5lKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZWRpdG9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA9IDA7XHJcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGV2ZWwnKTtcclxuICAgICAgICBpZiAobGV2ZWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IHBhcnNlSW50KGxldmVsLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLDAsdGhpcy5jd2lkdGgsdGhpcy5jaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLm1hcC5kcmF3KCk7XHJcbiAgICAgICAgLy8gcmV2ZXJzZSBsb29wLCBwbGF5ZXIgZHJhd3MgbGFzdFxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnNwcml0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVzW2ldLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNmeHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5zZnhzW2ldLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGZpcmVzID0gdGhpcy5zcHJpdGVzLmZpbHRlcihzcHJpdGUgPT4gc3ByaXRlLmlkID09PSBDb25zdHMuT0JKRUNUX0ZJUkUpO1xyXG4gICAgICAgIGlmICghZmlyZXMubGVuZ3RoICYmICF0aGlzLmVkaXRvciAmJiB0aGlzLnBsYXllci5zdGF0ZSAhPT0gQ29uc3RzLk1PVkVfT1VUUk8pIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIub3V0cm8oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dExldmVsKCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWwrKztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGV2ZWwnLCB0aGlzLmxldmVsKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmxvYWQodGhpcy5sZXZlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZXNbaV0uZW5naW5lTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Z4cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLnNmeHNbaV0uZW5naW5lTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3ByaXRlc01vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0gJiYgdGhpcy5zcHJpdGVzW2ldLmlkICE9PSBDb25zdHMuT0JKRUNUX1BMQVlFUiAmJiB0aGlzLnNwcml0ZXNbaV0ubW92aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVzTW92aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNwcml0ZXNNb3ZpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCArPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjaGVjayBpZiBubyBzcHJpdGVzIGhhdmUgbW92ZWQgZm9yIDIgdHVybnNcclxuICAgICAgICBpZiAoIXNwcml0ZXNNb3ZpbmcgJiYgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleWJvYXJkLnVwKSB7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMucGxheWVyLmp1bXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlib2FyZC5kb3duIHx8IHRoaXMua2V5Ym9hcmQuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5pY2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlib2FyZC5sZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5sZWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMua2V5Ym9hcmQucmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnJpZ2h0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMua2V5Ym9hcmQuZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc291bmQuc3RvcCgnZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmxvYWQodGhpcy5sZXZlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkLmVudGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBpY2VBdCh0eCwgdHkpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlzU3ByaXRlQXQodHgsIHR5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSWNlQmxvY2sodHgsIHR5LCBmcm96ZW4pIHtcclxuICAgICAgICBsZXQgZm91bmRJY2VCbG9ja3MgPSBbIF07XHJcbiAgICAgICAgZnJvemVuID0gKHR5cGVvZiBsZW5ndGggPT09ICd1bmRlZmluZWQnKSA/IGZhbHNlIDogZnJvemVuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PQkpFQ1RfSUNFICYmIHRoaXMuc3ByaXRlc1tpXS55dGlsZSA9PT0gdHkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpY2UgPSB0aGlzLnNwcml0ZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaWNlLnh0aWxlIC0gMSA9PT0gdHggfHwgaWNlLnh0aWxlICsgaWNlLmxlbmd0aCA9PT0gdHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZEljZUJsb2Nrcy5wdXNoKGljZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvdW5kSWNlQmxvY2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZXMucHVzaChuZXcgSWNlKHRoaXMsIHR4LCB0eSwgMSwgZnJvemVuKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmb3VuZEljZUJsb2Nrcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgZm91bmRJY2VCbG9ja3NbMF0uYWRkQmxvY2sodHgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuam9pbkljZUJsb2Nrcyhmb3VuZEljZUJsb2Nrc1swXSwgZm91bmRJY2VCbG9ja3NbMV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBqb2luSWNlQmxvY2tzKGljZWJsb2NrQSxpY2VibG9ja0IpIHtcclxuICAgICAgICBsZXQgdHggPSBpY2VibG9ja0EueHRpbGUgPD0gaWNlYmxvY2tCLnh0aWxlID8gaWNlYmxvY2tBLnh0aWxlIDogaWNlYmxvY2tCLnh0aWxlO1xyXG4gICAgICAgIGxldCB0eSA9IGljZWJsb2NrQS55dGlsZTtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gaWNlYmxvY2tBLmxlbmd0aCArIGljZWJsb2NrQi5sZW5ndGggKyAxO1xyXG4gICAgICAgIHRoaXMuYWRkU3ByaXRlKG5ldyBJY2UodGhpcywgdHgsIHR5LCBsZW5ndGgsIGljZWJsb2NrQS5mcm96ZW4gfHwgaWNlYmxvY2tCLmZyb3plbikpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU3ByaXRlKGljZWJsb2NrQSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTcHJpdGUoaWNlYmxvY2tCKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVJY2VCbG9jayh0eCwgdHkpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlkID09PSBDb25zdHMuT0JKRUNUX0lDRSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVzW2ldLnl0aWxlID09PSB0eSAmJlxyXG4gICAgICAgICAgICAgICAgdHggPj0gdGhpcy5zcHJpdGVzW2ldLnh0aWxlICYmXHJcbiAgICAgICAgICAgICAgICB0eCA8IHRoaXMuc3ByaXRlc1tpXS54dGlsZSArIHRoaXMuc3ByaXRlc1tpXS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0ucmVtb3ZlQmxvY2sodHgpIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZXMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRmlyZSh0eCwgdHkpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAodGhpcy5zcHJpdGVzW2ldLnl0aWxlID09PSB0eSkgJiZcclxuICAgICAgICAgICAgICAgICh0eCA9PT0gdGhpcy5zcHJpdGVzW2ldLnh0aWxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKHRoaXMuc3ByaXRlc1tpXS5pZCA9PT0gQ29uc3RzLk9CSkVDVF9GSVJFKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlcy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzLnB1c2goc3ByaXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXSA9PT0gc3ByaXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZXMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3BhcmtzKHh0aWxlLCB5dGlsZSwgY29sb3IsIHF1YW50aXR5LCBpbnRlbnNpdHkpIHtcclxuICAgICAgICB0aGlzLnNmeHMucHVzaChuZXcgU3BhcmtzKHRoaXMsIHh0aWxlLCB5dGlsZSwgY29sb3IsIHF1YW50aXR5LCBpbnRlbnNpdHkpKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTZngoc3ByaXRlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNmeHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2Z4c1tpXSA9PT0gc3ByaXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNmeHMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3ByaXRlVHlwZUF0KHR4LCB0eSwgZXhjbHVkZUlkKSB7XHJcbiAgICAgICAgZXhjbHVkZUlkID0gKHR5cGVvZiBleGNsdWRlSWQgPT09ICd1bmRlZmluZWQnKSA/IENvbnN0cy5PQkpFQ1RfT1VUIDogZXhjbHVkZUlkO1xyXG4gICAgICAgIGlmICh0eCA8IDAgfHwgdHkgPCAwIHx8IHR4ID4gdGhpcy5tYXAud2lkdGggfHwgdHkgPiB0aGlzLm1hcC5oZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIENvbnN0cy5PQkpFQ1RfT1VUO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubWFwLm1hcFt0eV1bdHhdKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlzU3ByaXRlQXQodHgsIHR5KSAmJiB0aGlzLnNwcml0ZXNbaV0uaWQgIT09IGV4Y2x1ZGVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbaV0uaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAubWFwW3R5XVt0eF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBDb25zdHMuT0JKRUNUX0JBQ0tHUk9VTkQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3ByaXRlQXQodHgsIHR5KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1hcC5tYXBbdHldW3R4XSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pc1Nwcml0ZUF0KHR4LCB0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xyXG5pbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlyZSBleHRlbmRzIEFuaW1TcHJpdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5KSB7XHJcbiAgICAgICAgc3VwZXIoQ29uc3RzLk9CSkVDVF9GSVJFLCBlbmdpbmUsICdpbWdfZmlyZScsXHJcbiAgICAgICAgICAgIHR4LCB0eSwgQ29uc3RzLlRJTEVfV0lEVEgsIENvbnN0cy5USUxFX1dJRFRILCAwLCAwLCAwLCAzLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9ET1dOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0Rvd24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb2xsaXNpb25zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSwgQ29uc3RzLk9CSkVDVF9GSVJFKSA9PT0gQ29uc3RzLk9CSkVDVF9JQ0UpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnZmlyZS1vZmYnKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlRmlyZSh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlSWNlQmxvY2sodGhpcy54dGlsZSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMjU1LCAxMjYsIDE5OCcsIDE1LCAwLjUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzEyNCwgMjEyLCAyNTUnLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSwgQ29uc3RzLk9CSkVDVF9GSVJFKSA9PT0gQ29uc3RzLk9CSkVDVF9NRVRBTCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVGaXJlKHRoaXMueHRpbGUsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzI1NSwgMjIyLCAxMjcnLCAxNSwgMC41KTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICc0MSwgNDIsIDkwJywgMTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ3Jhdml0eSgpIHtcclxuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfRE9XTiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZG9Eb3duKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRJTEVfV0lEVEgpIHtcclxuICAgICAgICAgICAgdGhpcy55ICs9IDQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEZpcmUgfSBmcm9tICcuL2ZpcmUnO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lJztcclxuaW1wb3J0IHsgSmFyIH0gZnJvbSAnLi9qYXInO1xyXG5pbXBvcnQgeyBNZXRhbCB9IGZyb20gJy4vbWV0YWwnO1xyXG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuL3Jlc291cmNlcyc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGNvbnN0IHJlc291cmNlcyA9IG5ldyBSZXNvdXJjZXMoKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ3RpbGVtYXAnLCAnaW1hZ2VzL3RpbGVtYXAucG5nJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfaWNlJywgJ2ltYWdlcy9pY2UucG5nJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfamFyJywgJ2ltYWdlcy9qYXIucG5nJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfZmlyZScsICdpbWFnZXMvZmlyZS5wbmcnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19kb25hJywgJ2ltYWdlcy9kb25hLnBuZycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX2ludHJvJywgJ2ltYWdlcy9pbnRyby5wbmcnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19zdGFydCcsICdpbWFnZXMvc3RhcnQucG5nJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfbWV0YWwnLCAnaW1hZ2VzL21ldGFsLnBuZycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnZnJvc3QnLCAnaW1hZ2VzL2Zyb3plbi5wbmcnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1pY2UtcHVzaCcsICdzb3VuZHMvc2Z4LWljZS1wdXNoLm1wMycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWZpcmUtb2ZmJywgJ3NvdW5kcy9zZngtZmlyZS1vZmYubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZmFsbGluZycsICdzb3VuZHMvc2Z4LWZhbGxpbmcubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtbmV3LWljZScsICdzb3VuZHMvc2Z4LW5ldy1pY2UubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtY2xpbWInLCAnc291bmRzL3NmeC1jbGltYi5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1pY2UtY29sbGlzaW9uJywgJ3NvdW5kcy9zZngtaWNlLWNvbGxpc2lvbi5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1zdGFnZS1lbnRlcicsICdzb3VuZHMvc2Z4LXN0YWdlLWVudGVyLm1wMycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWRhbmdlcicsICdzb3VuZHMvc2Z4LWRhbmdlci5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1pY2UtcmVtb3ZlJywgJ3NvdW5kcy9zZngtaWNlLXJlbW92ZS5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1zdGF0ZS1sZWF2ZScsICdzb3VuZHMvc2Z4LXN0YXRlLWxlYXZlLm1wMycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWRpc2FibGVkJywgJ3NvdW5kcy9zZngtZGlzYWJsZWQubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZmFsbCcsICdzb3VuZHMvc2Z4LWZhbGwubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtbXVzaWMtc3BhcmtzJywgJ211c2ljL3NwYXJrcy5tcDMnKTtcclxuXHJcbiAgICByZXNvdXJjZXMucmVhZHkoKCkgPT4ge1xyXG4gICAgICAgIFN0YXJ0R2FtZShyZXNvdXJjZXMpO1xyXG4gICAgICAgIENoZWNrRWRpdG9yKCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBTdGFydEdhbWUocmVzb3VyY2VzKSB7XHJcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMsIHJlc291cmNlcyk7XHJcbiAgICB3aW5kb3cuZ2FtZSA9IGdhbWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwtc2VsZWN0b3InKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gJy0xJykge1xyXG4gICAgICAgICAgICBnYW1lLmVuZ2luZS5sZXZlbCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgIGdhbWUuZW5naW5lLnNjZW5lLmxvYWQoZ2FtZS5lbmdpbmUubGV2ZWwpO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5ibHVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENoZWNrRWRpdG9yKCkge1xyXG4gICAgaWYgKHdpbmRvdy5GSVJFTklDRV9FRElUT1JfTU9ERSkge1xyXG4gICAgICAgIGdhbWUuZW5naW5lLnNvdW5kLm11c2ljT24gPSBmYWxzZTtcclxuXHRcdGdhbWUuZW5naW5lLnNvdW5kLnNvdW5kT24gPSBmYWxzZTtcclxuICAgICAgICBnYW1lLnN0YXRlID0gQ29uc3RzLkdBTUVfU1RBVEVfUExBWTtcclxuICAgICAgICBnYW1lLmVuZ2luZS5lZGl0b3IgPSB0cnVlO1xyXG4gICAgICAgIGdhbWUuZW5naW5lLmtleWJvYXJkLmludHJvID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHh0aWxlID0gTWF0aC5mbG9vcihlLm9mZnNldFggLyAzMik7XHJcbiAgICAgICAgICAgIGNvbnN0IHl0aWxlID0gTWF0aC5mbG9vcihlLm9mZnNldFkgLyAzMik7XHJcbiAgICAgICAgICAgIGlmICh0b29sIDwgMikge1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUubWFwLm1hcFt5dGlsZV1beHRpbGVdID0gdG9vbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodG9vbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9QTEFZRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuZW5naW5lLnBsYXllci54ID0geHRpbGUgKiAzMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUucGxheWVyLnkgPSB5dGlsZSAqIDMyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PQkpFQ1RfSUNFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRJY2VCbG9jayh4dGlsZSwgeXRpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PQkpFQ1RfTUVUQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuZW5naW5lLmFkZFNwcml0ZShuZXcgTWV0YWwoZ2FtZS5lbmdpbmUsIHh0aWxlLCB5dGlsZSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PQkpFQ1RfRklSRTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBGaXJlKGdhbWUuZW5naW5lLCB4dGlsZSwgeXRpbGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT0JKRUNUX0pBUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBKYXIoZ2FtZS5lbmdpbmUsIHh0aWxlLCB5dGlsZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUtc2VsZWN0b3InKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBnYW1lLmVuZ2luZS5tYXAudGhlbWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5ibHVyKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbC1zZWxlY3RvcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gJy0xJykge1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUubGV2ZWwgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUuc2NlbmUubG9hZChnYW1lLmVuZ2luZS5sZXZlbCk7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5ibHVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zYXZlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eHQtbGV2ZWwnKS52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGdhbWUuZW5naW5lLnNjZW5lLnNhdmUoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tICcuL2VuZ2luZSc7XHJcbmltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xyXG5pbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqIEdhbWUgTG9vcFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhdnMgICBUaGUgY2FudmFzIGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7Kn0gcmVzb3VyY2VzICBHYW1lIHJlc291cmNlc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHJlc291cmNlcykge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBDb25zdHMuR0FNRV9TVEFURV9JTlRSTztcclxuICAgICAgICB0aGlzLmVuZ2luZSA9IG5ldyBFbmdpbmUoY2FudmFzLCByZXNvdXJjZXMpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSW50cm8oKTtcclxuICAgICAgICB0aGlzLmdhbWVsb29wID0gdGhpcy5nYW1lbG9vcF8uYmluZCh0aGlzKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbiAgICAgICAgdGhpcy5nYW1lbG9vcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdhbWVsb29wXygpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuR0FNRV9TVEFURV9JTlRSTzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9JbnRybygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLkdBTUVfU1RBVEVfUExBWTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLm1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZWxvb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUludHJvKCkge1xyXG4gICAgICAgIHRoaXMuaW50cm8gPSBuZXcgQW5pbVNwcml0ZShudWxsLCB0aGlzLmVuZ2luZSwgJ2ltZ19pbnRybycsIDAsIDAsIDU0NCwgNDE2LCAwLCAwLCAwLCAwLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBBbmltU3ByaXRlKG51bGwsIHRoaXMuZW5naW5lLCAnaW1nX3N0YXJ0JywgNywgMTEsIDE0MCwgMjYsIC0xMCwgMCwgMCwgMSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zdGFydC5hbmltRGVsYXkgPSBDb25zdHMuQU5JTV9TVEFOREFSRF9ERUxBWSAqIDIwO1xyXG4gICAgfVxyXG5cclxuICAgIGRvSW50cm8oKSB7XHJcbiAgICAgICAgdGhpcy5pbnRyby5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5zdGFydC5kcmF3KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVuZ2luZS5rZXlib2FyZC5lbnRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5rZXlib2FyZC5lbnRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gQ29uc3RzLkdBTUVfU1RBVEVfUExBWTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQuc291bmRyYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSWNlIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHksIGxlbmd0aCwgZnJvemVuKSB7XHJcbiAgICAgICAgc3VwZXIoQ29uc3RzLk9CSkVDVF9JQ0UsIGVuZ2luZSwgJ2ltZ19pY2UnLFxyXG4gICAgICAgICAgICB0eCwgdHksIENvbnN0cy5USUxFX1dJRFRILCBDb25zdHMuVElMRV9XSURUSCwgMCwgMCwgMCwgMSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy54dGlsZSA9IHR4O1xyXG4gICAgICAgIHRoaXMueXRpbGUgPSB0eTtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICB0aGlzLmFuaW1FbmQgPSAxO1xyXG4gICAgICAgIHRoaXMuYW5pbURlbGF5ID0gOTtcclxuICAgICAgICB0aGlzLmFuaW1Sb3cgPSAwO1xyXG4gICAgICAgIHRoaXMuZGlycmVjdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmcm96ZW4gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuID0gZnJvemVuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGcmVlemUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQmxvY2sodHgpIHtcclxuICAgICAgICBjb25zdCBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID0gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUtMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSt0aGlzLmxlbmd0aCwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgaWYgKHR4ID4gdGhpcy54dGlsZSkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRpbGUodHggKyAxLCB0aGlzLnl0aWxlKSA9PT0gQ29uc3RzLk9CSkVDVF9XQUxMIHx8XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9CSkVDVF9NRVRBTCB8fFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPT09IENvbnN0cy5PQkpFQ1RfSkFSXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm96ZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHggPCB0aGlzLnh0aWxlKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGlsZSh0eCAtIDEsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT0JKRUNUX1dBTEwgfHxcclxuICAgICAgICAgICAgICAgIHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPT09IENvbnN0cy5PQkpFQ1RfTUVUQUwgfHxcclxuICAgICAgICAgICAgICAgIHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPT09IENvbnN0cy5PQkpFQ1RfSkFSXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm96ZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy54dGlsZSA9IHR4IDwgdGhpcy54dGlsZSA/IHR4IDogdGhpcy54dGlsZTtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnh0aWxlICogQ29uc3RzLlRJTEVfV0lEVEg7XHJcbiAgICAgICAgdGhpcy5sZW5ndGgrKztcclxuICAgIH1cclxuXHJcbiAgICBpc1Nwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgICAgIGlmICh0aGlzLnl0aWxlID09PSB0eSkge1xyXG4gICAgICAgICAgICBpZiAodHggPj0gdGhpcy54dGlsZSAmJiB0eCA8ICh0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJsb2NrKHR4KSB7XHJcbiAgICAgICAgaWYgKHR4ID09PSB0aGlzLnh0aWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMueHRpbGUgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy54ICs9IENvbnN0cy5USUxFX1dJRFRIO1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aC0tO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHggPT09IHRoaXMueHRpbGUrdGhpcy5sZW5ndGgtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aC0tO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShuZXcgSWNlKHRoaXMuZW5naW5lLCB0eCsxLCB0aGlzLnl0aWxlLCB0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGggLSB0eCAtIDEsIHRoaXMuZnJvemVuKSk7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoID0gdHggLSB0aGlzLnh0aWxlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuR2xpZGUoZGlyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoICE9PSAxIHx8IHRoaXMuZnJvemVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpciA9PT0gQ29uc3RzLkRJUl9MRUZUICAmJiBUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5sKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXIgPT09IENvbnN0cy5ESVJfUklHSFQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMucikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBncmF2aXR5KCkge1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkgJiYgIXRoaXMuZnJvemVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfRE9XTiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5mYWxsaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtY29sbGlzaW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsaXNpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkdsaWRlKHRoaXMuZGlycmVjdGlvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gMDtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWNvbGxpc2lvbicpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0aWxlX2Rvd24gPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlK2ksIHRoaXMueXRpbGUrMSk7XHJcbiAgICAgICAgICAgIGlmICh0aWxlX2Rvd24gJiYgdGlsZV9kb3duICE9PSBDb25zdHMuT0JKRUNUX0ZJUkUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29vcm5lcnMuZCA9IHRpbGVfZG93bjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy5yID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSt0aGlzLmxlbmd0aCwgdGhpcy55dGlsZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZyb3plbikge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrVW5mcmVlemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfSUNFX01PVklORzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2xpZGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0lDRV9DSEVDSzpcclxuICAgICAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfRE9XTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9Eb3duKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBjb25zdCBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID0gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUtMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSt0aGlzLmxlbmd0aCwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1EZWxheUNvdW50KysgPiB0aGlzLmFuaW1EZWxheSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1EZWxheUNvdW50ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5hbmltUm93ID0gdGhpcy5hbmltUm93ID09PSAwID8gMSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgQ29uc3RzLlRJTEVfV0lEVEgqdGhpcy5hbmltUm93LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMSpDb25zdHMuVElMRV9XSURUSCwgQ29uc3RzLlRJTEVfV0lEVEgqdGhpcy5hbmltUm93LFxyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMypDb25zdHMuVElMRV9XSURUSCwgQ29uc3RzLlRJTEVfV0lEVEgqdGhpcy5hbmltUm93LFxyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICB0aGlzLngrQ29uc3RzLlRJTEVfV0lEVEgsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAxKkNvbnN0cy5USUxFX1dJRFRILCBDb25zdHMuVElMRV9XSURUSCp0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAzKkNvbnN0cy5USUxFX1dJRFRILCBDb25zdHMuVElMRV9XSURUSCp0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgIHRoaXMueCtDb25zdHMuVElMRV9XSURUSCoodGhpcy5sZW5ndGgtMSksIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgIGkgPCB0aGlzLmxlbmd0aC0xOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAyKkNvbnN0cy5USUxFX1dJRFRILCBDb25zdHMuVElMRV9XSURUSCp0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICB0aGlzLngrKENvbnN0cy5USUxFX1dJRFRIKmkpLCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5mcm96ZW4pIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUaWxlKHRoaXMueHRpbGUtMSwgdGhpcy55dGlsZSkgPT09IENvbnN0cy5PQkpFQ1RfV0FMTCB8fFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9PT0gQ29uc3RzLk9CSkVDVF9NRVRBTCB8fFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9PT0gQ29uc3RzLk9CSkVDVF9KQVJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy54dGlsZSp0aGlzLndpZHRoKS03LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueXRpbGUqdGhpcy5oZWlnaHRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUaWxlKHRoaXMueHRpbGUrdGhpcy5sZW5ndGgsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT0JKRUNUX1dBTEwgfHxcclxuICAgICAgICAgICAgICAgIHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID09PSBDb25zdHMuT0JKRUNUX01FVEFMIHx8XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9CSkVDVF9KQVJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy54dGlsZSt0aGlzLmxlbmd0aCkqdGhpcy53aWR0aC03LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueXRpbGUqdGhpcy5oZWlnaHRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnbGlkZSgpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gNDtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5USUxFX1dJRFRIKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSA0ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb0Rvd24oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVElMRV9XSURUSCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ3Jhdml0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaChkaXIpIHtcclxuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAodHlwZW9mIGRpciA9PT0gJ3VuZGVmaW5lZCcpID8gdGhpcy5kaXJyZWN0aW9uIDogZGlyO1xyXG4gICAgICAgIGlmICghdGhpcy5jb2xsaXNpb24oKSAmJiAhdGhpcy5ncmF2aXR5KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9JQ0VfTU9WSU5HLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVW5mcmVlemUoKSB7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLTEsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgIGNvbnN0IHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID0gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUrdGhpcy5sZW5ndGgsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5nZXRUaWxlKHRoaXMueHRpbGUtMSwgdGhpcy55dGlsZSkgIT09IENvbnN0cy5PQkpFQ1RfV0FMTCAmJlxyXG4gICAgICAgICAgICB0aGlzLmdldFRpbGUodGhpcy54dGlsZSt0aGlzLmxlbmd0aCwgdGhpcy55dGlsZSkgIT09IENvbnN0cy5PQkpFQ1RfV0FMTCAmJlxyXG4gICAgICAgICAgICBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyICE9PSBDb25zdHMuT0JKRUNUX01FVEFMICYmXHJcbiAgICAgICAgICAgIHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgIT09IENvbnN0cy5PQkpFQ1RfSkFSICYmXHJcbiAgICAgICAgICAgIHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyICE9PSBDb25zdHMuT0JKRUNUX01FVEFMICYmXHJcbiAgICAgICAgICAgIHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyICE9PSBDb25zdHMuT0JKRUNUX0pBUlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmZyb3plbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0ZyZWV6ZSgpIHtcclxuICAgICAgICBjb25zdCBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID0gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUtMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSt0aGlzLmxlbmd0aCwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAodGhpcy5nZXRUaWxlKHRoaXMueHRpbGUtMSwgdGhpcy55dGlsZSkgPT09IENvbnN0cy5PQkpFQ1RfV0FMTCkgfHxcclxuICAgICAgICAgICAgKHRoaXMuZ2V0VGlsZSh0aGlzLnh0aWxlK3RoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKSA9PT0gQ29uc3RzLk9CSkVDVF9XQUxMKSB8fFxyXG4gICAgICAgICAgICAoc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9PT0gQ29uc3RzLk9CSkVDVF9NRVRBTCkgfHxcclxuICAgICAgICAgICAgKHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPT09IENvbnN0cy5PQkpFQ1RfSkFSKSB8fFxyXG4gICAgICAgICAgICAoc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPT09IENvbnN0cy5PQkpFQ1RfTUVUQUwpIHx8XHJcbiAgICAgICAgICAgIChzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9CSkVDVF9KQVIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZyb3plbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBKYXIgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSkge1xyXG4gICAgICAgIHN1cGVyKENvbnN0cy5PQkpFQ1RfSkFSLCBlbmdpbmUsICdpbWdfamFyJyxcclxuICAgICAgICAgICAgdHgsIHR5LCBDb25zdHMuVElMRV9XSURUSCwgQ29uc3RzLlRJTEVfV0lEVEgsIDAsIDAsIDAsIDMsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuYW5pbURlbGF5ID0gQ29uc3RzLkFOSU1fU1RBTkRBUkRfREVMQVkgKiAyO1xyXG4gICAgICAgIHRoaXMub25GaXJlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hbmltUm93ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9ET1dOOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0Rvd24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb2xsaXNpb25zKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vbkZpcmUgJiYgdGhpcy5jb29ybmVycy51ID09PSBDb25zdHMuT0JKRUNUX0ZJUkUpIHtcclxuICAgICAgICAgICAgdGhpcy50dXJuT25GaXJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9uRmlyZSAmJiB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSAtIDEpID09PSBDb25zdHMuT0JKRUNUX0lDRSkge1xyXG4gICAgICAgICAgICB0aGlzLm1lbHRJY2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ3Jhdml0eSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29vcm5lcnMuZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0RPV04sIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGRvRG93bigpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gNDtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5USUxFX1dJRFRIKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSA0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHVybk9uRmlyZSgpIHtcclxuICAgICAgICB0aGlzLmFuaW1Sb3cgPSAxO1xyXG4gICAgICAgIHRoaXMub25GaXJlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSAtIDEsICcyNTUsIDg4LCAzMycsIDMwKTtcclxuICAgIH1cclxuXHJcbiAgICBtZWx0SWNlKCkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUljZUJsb2NrKHRoaXMueHRpbGUsIHRoaXMueXRpbGUgLSAxKTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSAtIDEsICcyNTUsIDg4LCAzMycsIDMwKTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSAtIDEsICczMywgODgsIDI1NScsIDQwKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSAtIDEsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT0JKRUNUX0lDRSAmJlxyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnh0aWxlIC0gMSwgdGhpcy55dGlsZSkuZnJvemVuXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoJ2Zyb3N0JyksXHJcbiAgICAgICAgICAgICAgICAodGhpcy54dGlsZSAqIHRoaXMud2lkdGgpLTcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnl0aWxlICogdGhpcy5oZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSArIDEsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT0JKRUNUX0lDRSAmJlxyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnh0aWxlICsgMSwgdGhpcy55dGlsZSkuZnJvemVuXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoJ2Zyb3N0JyksXHJcbiAgICAgICAgICAgICAgICAodGhpcy54dGlsZSArIDEpICogdGhpcy53aWR0aC03LFxyXG4gICAgICAgICAgICAgICAgdGhpcy55dGlsZSAqIHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogS2V5Ym9hcmQgcHJlc3MgZW5naW5lXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMua2V5ZG93biA9IHRoaXMua2V5ZG93bl8uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmtleXVwID0gdGhpcy5rZXl1cF8uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmludHJvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleWRvd24sIGZhbHNlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleXVwLCBmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnRybykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbnRybyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fYWN0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmRvd24gPSB0cnVlKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX2FjdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsICgpID0+IHRoaXMuZG93biA9IGZhbHNlKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX2xlZnQnKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsICgpID0+IHRoaXMubGVmdCA9IHRydWUpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fbGVmdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsICgpID0+IHRoaXMubGVmdCA9IGZhbHNlKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX3JpZ2h0JykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLnJpZ2h0ID0gdHJ1ZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9yaWdodCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsICgpID0+IHRoaXMucmlnaHQgPSBmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9zZWxlY3QnKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCAoKSA9PiB0aGlzLmVudGVyID0gdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGtleWRvd25fKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDM3OiAvLyBMZWZ0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzg6IC8vIFVwXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM5OiAvLyBSaWdodFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDogLy8gRG93blxyXG4gICAgICAgICAgICBjYXNlIDMyOiAvLyBTcGFjZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEzOiAvL0VudGVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAga2V5dXBfKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDM3OiAvLyBMZWZ0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM4OiAvLyBVcFxyXG4gICAgICAgICAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDogLy8gRG93blxyXG4gICAgICAgICAgICBjYXNlIDMyOiAvLyBTcGFjZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTM6IC8vRW50ZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBsZXZlbHMgPSBbXHJcbiAgICB7XCJtYXBcIjpbWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1dLFwidGhlbWVcIjowLFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6MTEsXCJ5XCI6NCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjgsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6NyxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo2LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo2LFwieVwiOjQsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo3LFwieVwiOjgsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6NyxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjoxMCxcInZcIjoxfV19LFxyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDFdLFsxLDEsMCwwLDAsMCwwLDEsMCwxLDAsMCwwLDAsMCwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6MSxcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjMsXCJ5XCI6NyxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo3LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo0LFwieVwiOjcsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjUsXCJ2XCI6NH0se1wiaWRcIjo2LFwieFwiOjEyLFwieVwiOjgsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEyLFwieVwiOjcsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEyLFwieVwiOjYsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEzLFwieVwiOjgsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjExLFwieVwiOjgsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjExLFwieVwiOjcsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjExLFwieVwiOjYsXCJ2XCI6MX1dfSxcclxuICAgIHtcIm1hcFwiOltbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDEsMCwwLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDEsMCwwLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMCwwLDEsMSwxLDEsMSwwLDAsMCwwLDEsMSwxXSxbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXV0sXCJ0aGVtZVwiOjIsXCJzcHJpdGVzXCI6W3tcImlkXCI6NyxcInhcIjoxNCxcInlcIjo2LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMCxcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjQsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6NixcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjo1LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo2LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo1LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo4LFwieVwiOjYsXCJ2XCI6MX1dfSxcclxuICAgIHtcIm1hcFwiOltbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXV0sXCJ0aGVtZVwiOjAsXCJzcHJpdGVzXCI6W3tcImlkXCI6NyxcInhcIjo4LFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEyLFwieVwiOjgsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEzLFwieVwiOjcsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjExLFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6OCxcInZcIjo1fSx7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6NyxcInZcIjozfSx7XCJpZFwiOjMsXCJ4XCI6MTIsXCJ5XCI6NixcInZcIjoyfSx7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo0LFwieVwiOjcsXCJ2XCI6M30se1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6NixcInZcIjoyfSx7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo0LFwieVwiOjgsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjMsXCJ5XCI6NyxcInZcIjoxfV19LFxyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFsxLDEsMSwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFsxLDEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFsxLDEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFsxLDEsMSwwLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwwLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwwLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6NixcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjExLFwieVwiOjgsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjEwLFwidlwiOjN9LHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo5LFwidlwiOjN9LHtcImlkXCI6MyxcInhcIjo3LFwieVwiOjcsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6NSxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6OSxcInlcIjo3LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjozLFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjozLFwieVwiOjQsXCJ2XCI6MX1dfSxcclxuICAgIHtcIm1hcFwiOltbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXV0sXCJ0aGVtZVwiOjUsXCJzcHJpdGVzXCI6W3tcImlkXCI6NyxcInhcIjoxNCxcInlcIjozLFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxNCxcInlcIjo0LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjozLFwieVwiOjQsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6NixcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6OCxcInlcIjo2LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo2LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxLFwieVwiOjgsXCJ2XCI6MTJ9LHtcImlkXCI6NixcInhcIjoyLFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjozLFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo1LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo0LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo2LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo3LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo4LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo5LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMSxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoyLFwieVwiOjcsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjIsXCJ5XCI6NSxcInZcIjoxfV19LFxyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6MSxcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjEyLFwieVwiOjQsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6MTEsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjExLFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo4LFwieVwiOjUsXCJ2XCI6NX0se1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjQsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6NixcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo1LFwidlwiOjF9XX0sXHJcbiAgICB7XCJtYXBcIjpbWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwwLDAsMSwwLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1dLFwidGhlbWVcIjoxLFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6OCxcInlcIjo2LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo1LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo2LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo3LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo4LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo5LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMCxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6MTAsXCJ2XCI6Mn0se1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6OSxcInZcIjo3fSx7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjo4LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo2LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMSxcInlcIjo1LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjUsXCJ2XCI6MX1dfSxcclxuICAgIHtcIm1hcFwiOltbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxXSxbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxbMSwxLDAsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDAsMSwxXSxbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxbMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXV0sXCJ0aGVtZVwiOjYsXCJzcHJpdGVzXCI6W3tcImlkXCI6NyxcInhcIjo1LFwieVwiOjQsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6OCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6OCxcInlcIjo1LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo4LFwieVwiOjQsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjExLFwieVwiOjgsXCJ2XCI6MX1dfSxcclxuICAgIHtcIm1hcFwiOltbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMSwxLDEsMSwxLDAsMCwxLDEsMSwxXSxbMSwxLDEsMCwwLDAsMCwxLDEsMSwwLDAsMCwwLDEsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwwLDAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXV0sXCJ0aGVtZVwiOjEwLFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6MyxcInlcIjo0LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoyLFwieVwiOjYsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjMsXCJ5XCI6NyxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NCxcInlcIjo4LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo1LFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjo4LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMCxcInlcIjo3LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMSxcInlcIjo2LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjoyLFwieVwiOjUsXCJ2XCI6MTB9LHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjQsXCJ2XCI6MX1dfSxcclxuICAgIHtcIm1hcFwiOltbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxbMSwxLDEsMSwwLDAsMSwxLDEsMSwxLDEsMSwwLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMSwxXSxbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwwLDEsMSwxXSxbMSwxLDEsMCwwLDAsMCwwLDAsMSwwLDAsMSwwLDEsMSwxXSxbMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDAsMCwwLDEsMSwxXSxbMSwxLDEsMSwxLDAsMCwwLDEsMSwwLDAsMSwwLDEsMSwxXSxbMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDAsMCwwLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXV0sXCJ0aGVtZVwiOjYsXCJzcHJpdGVzXCI6W3tcImlkXCI6NyxcInhcIjozLFwieVwiOjMsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEzLFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo1LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo2LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo3LFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjo0LFwieVwiOjQsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6MyxcInZcIjoyfSx7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6MyxcInZcIjoyfSx7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjozLFwidlwiOjF9XX0sXHJcbiAgICB7XCJtYXBcIjpbWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwwLDAsMCwxLDEsMSwxLDEsMSwxLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sWzEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sWzEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwxLDEsMSwwLDEsMSwxLDEsMSwwLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1dLFwidGhlbWVcIjo3LFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6OCxcInlcIjo1LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo2LFwieVwiOjUsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjUsXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjIsXCJ5XCI6MyxcInZcIjoyfSx7XCJpZFwiOjMsXCJ4XCI6MTQsXCJ5XCI6NCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MTQsXCJ5XCI6NCxcInZcIjoxfSx7XCJpZFwiOjMsXCJ4XCI6MTMsXCJ5XCI6MyxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTQsXCJ5XCI6MyxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEyLFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjIsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo3LFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMCxcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMyxcInlcIjo5LFwidlwiOjF9LHtcImlkXCI6MyxcInhcIjozLFwieVwiOjksXCJ2XCI6MX0se1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6OCxcInZcIjoxMX0se1wiaWRcIjo2LFwieFwiOjQsXCJ5XCI6OSxcInZcIjoxfV19LFxyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6MixcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjEyLFwieVwiOjMsXCJ2XCI6MX0se1wiaWRcIjo0LFwieFwiOjEwLFwieVwiOjMsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6MyxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6NyxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjQsXCJ4XCI6NyxcInlcIjo3LFwidlwiOjF9LHtcImlkXCI6NCxcInhcIjoxMCxcInlcIjoxMCxcInZcIjoxfV19LFxyXG4gICAge1wibWFwXCI6W1sxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXSxcInRoZW1lXCI6NSxcInNwcml0ZXNcIjpbe1wiaWRcIjo3LFwieFwiOjIsXCJ5XCI6MyxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6NCxcInlcIjozLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjo1LFwieVwiOjMsXCJ2XCI6MX0se1wiaWRcIjo0LFwieFwiOjMsXCJ5XCI6MyxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTQsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEzLFwieVwiOjEwLFwidlwiOjF9LHtcImlkXCI6NixcInhcIjoxMSxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6MTAsXCJ2XCI6MX1dfSxcclxuICAgIHtcIm1hcFwiOltbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDAsMCwxLDEsMCwwLDAsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDAsMCwxLDAsMCwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxXSxbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXV0sXCJ0aGVtZVwiOjYsXCJzcHJpdGVzXCI6W3tcImlkXCI6NyxcInhcIjo4LFwieVwiOjQsXCJ2XCI6MX0se1wiaWRcIjo1LFwieFwiOjYsXCJ5XCI6MTEsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6OSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjQsXCJ4XCI6NyxcInlcIjo0LFwidlwiOjF9XX0sXHJcbiAgICB7XCJtYXBcIjpbWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF0sWzAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMF0sWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sWzAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMF0sWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF1dLFwidGhlbWVcIjoxLFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6MTAsXCJ5XCI6NixcInZcIjoxfSx7XCJpZFwiOjMsXCJmXCI6MSxcInhcIjoxMCxcInlcIjoxMCxcInZcIjoxfSx7XCJpZFwiOjMsXCJmXCI6MSxcInhcIjo2LFwieVwiOjksXCJ2XCI6NX0se1wiaWRcIjozLFwiZlwiOjEsXCJ4XCI6NyxcInlcIjo4LFwidlwiOjF9LHtcImlkXCI6MyxcImZcIjoxLFwieFwiOjYsXCJ5XCI6NyxcInZcIjo1fSx7XCJpZFwiOjMsXCJmXCI6MSxcInhcIjo2LFwieVwiOjUsXCJ2XCI6NX0se1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6MTAsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjgsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NixcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6NCxcInZcIjoxfV19LFxyXG4gICAge1xyXG4gICAgICAgIG1hcDogW1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwwLDAsMCwwLDAsMCwwLDEsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwwLDAsMCwwLDAsMSwxLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3ByaXRlczogW1xyXG4gICAgICAgICAgICB7aWQgOjcsIHg6IDEzLCB5OiAyLCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDozLCB4OiA0LCB5OiA0LCB2OiA4fSxcclxuICAgICAgICAgICAge2lkIDozLCB4OiAxMSwgeTogMywgdjogNH0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogMywgeTogNSwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogNCwgeTogNiwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogNSwgeTogNywgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogMTAsIHk6IDYsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDExLCB5OiA1LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiAxNCwgeTogMTAsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDE0LCB5OiA5LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiAyLCB5OiAxMCwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogOSwgeTogOCwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogMiwgeTogOSwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogOCwgeTogOCwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogNywgeTogOCwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogNiwgeTogOCwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogOCwgeTogMTAsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDcsIHk6IDEwLCB2OiAxfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGhlbWU6IDhcclxuICAgIH0sXHJcbiAgICB7XCJtYXBcIjpbWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1dLFwidGhlbWVcIjo2LFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6MTQsXCJ5XCI6MTAsXCJ2XCI6MX1dfSxcclxuXHJcbiAgICB7XCJtYXBcIjpbWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sWzEsMSwwLDAsMCwwLDAsMSwwLDEsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDEsMSwxLDEsMCwwLDEsMCwxLDEsMCwwLDEsMV0sWzEsMSwwLDEsMCwwLDEsMSwwLDEsMCwxLDAsMSwwLDEsMV0sWzEsMSwwLDEsMSwwLDEsMSwxLDEsMCwxLDAsMSwwLDEsMV0sWzEsMSwwLDEsMCwwLDEsMCwxLDEsMCwxLDAsMSwwLDEsMV0sWzEsMSwwLDEsMCwwLDEsMCwwLDEsMCwxLDAsMSwwLDEsMV0sWzEsMSwwLDEsMSwwLDEsMCwwLDEsMSwxLDEsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1dLFwidGhlbWVcIjo5LFwic3ByaXRlc1wiOlt7XCJpZFwiOjcsXCJ4XCI6MTAsXCJ5XCI6MTEsXCJ2XCI6MX0se1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6MSxcInZcIjoxfSx7XCJpZFwiOjUsXCJ4XCI6NCxcInlcIjoxMSxcInZcIjoxfSx7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjo1LFwidlwiOjF9XX1cclxuXTtcclxuXHJcbiIsImltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWV0YWwgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSwgbGVuZ3RoKSB7XHJcbiAgICAgICAgc3VwZXIoQ29uc3RzLk9CSkVDVF9NRVRBTCwgZW5naW5lLCAnaW1nX21ldGFsJyxcclxuICAgICAgICAgICAgdHgsIHR5LCBDb25zdHMuVElMRV9XSURUSCwgQ29uc3RzLlRJTEVfV0lEVEgsIDAsIDAsIDAsIDEsIHRydWUpO1xyXG4gICAgICAgIHRoaXMueHRpbGUgPSB0eDtcclxuICAgICAgICB0aGlzLnl0aWxlID0gdHk7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5hbmltRW5kID0gMTtcclxuICAgICAgICB0aGlzLmFuaW1EZWxheSA9IDk7XHJcbiAgICAgICAgdGhpcy5hbmltUm93ID0gMDtcclxuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAwO1xyXG4gICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkdsaWRlKGRpcikge1xyXG4gICAgICAgIGlmIChkaXIgPT09IENvbnN0cy5ESVJfTEVGVCAgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMubCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlyID09PSBDb25zdHMuRElSX1JJR0hUICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ3Jhdml0eSgpIHtcclxuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfRE9XTiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5mYWxsaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtY29sbGlzaW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsaXNpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkdsaWRlKHRoaXMuZGlycmVjdGlvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gMDtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWNvbGxpc2lvbicpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ncmF2aXR5KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge1xyXG5cclxuICAgICAgICAvKmlmICh0aGlzLmNvb3JuZXJzLmQgPT09IENvbnN0cy5PQkpFQ1RfRklSRSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvb3JuZXJzLmQgPSBDb25zdHMuT0JKRUNUX0JBQ0tHUk9VTkQ7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0lDRV9NT1ZJTkc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9JQ0VfQ0hFQ0s6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0RPV046XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvRG93bigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1EZWxheUNvdW50KysgPiB0aGlzLmFuaW1EZWxheSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1EZWxheUNvdW50ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5hbmltUm93ID0gdGhpcy5hbmltUm93ID09PSAwID8gMSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCBDb25zdHMuVElMRV9XSURUSCp0aGlzLmFuaW1Sb3csIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZS0xLCB0aGlzLnl0aWxlKSA9PT0gQ29uc3RzLk9CSkVDVF9JQ0UgJiZcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54dGlsZS0xLCB0aGlzLnl0aWxlKS5mcm96ZW5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLnh0aWxlKnRoaXMud2lkdGgpLTcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnl0aWxlKnRoaXMuaGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUrdGhpcy5sZW5ndGgsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT0JKRUNUX0lDRSAmJlxyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnh0aWxlK3RoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKS5mcm96ZW5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLnh0aWxlK3RoaXMubGVuZ3RoKSp0aGlzLndpZHRoLTcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnl0aWxlKnRoaXMuaGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnbGlkZSgpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gNDtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5USUxFX1dJRFRIKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSA0ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9Eb3duKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRJTEVfV0lEVEgpIHtcclxuICAgICAgICAgICAgdGhpcy55ICs9IDQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdXNoKGRpcikge1xyXG4gICAgICAgIHRoaXMuZGlycmVjdGlvbiA9ICh0eXBlb2YgZGlyID09PSAndW5kZWZpbmVkJykgPyB0aGlzLmRpcnJlY3Rpb24gOiBkaXI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxpc2lvbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9JQ0VfTU9WSU5HLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlcyc7XHJcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcclxuICAgICAgICBzdXBlcihDb25zdHMuT0JKRUNUX1BMQVlFUiwgZW5naW5lLCAnaW1nX2RvbmEnLCB0eCwgdHksIDQ4LCA2NCwgLTEwLCAtMzIsIDIsIDIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMjtcclxuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAwOyAvL3N0YW5kaW5nIHRvcCByaWdodCBkb3duIGxlZnRcclxuICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGlsZVdpZHRoID0gQ29uc3RzLlRJTEVfV0lEVEg7XHJcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gQ29uc3RzLlRJTEVfV0lEVEg7XHJcbiAgICAgICAgdGhpcy5hbmltRGVsYXkgPSAzO1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhbmRDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLmludHJvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGVmdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIC8vaWYgc3RhbmRpbmcgdGhlbiB0dXJuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gIT09IENvbnN0cy5ESVJfTEVGVCkge1xyXG4gICAgICAgICAgICAgICAgLy9pcyBub3QgdW5kZXIgYSBicmlja1xyXG4gICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9UVVJOX1NUQVJULCBDb25zdHMuQU5JTV9UVVJOX0VORCwgZmFsc2UsIENvbnN0cy5BTklNX1JJR0hUX1JPVywgNCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9DUk9VQ0hfU1RBUlQsQ29uc3RzLkFOSU1fQ1JPVUNIX1NUQVJULCBmYWxzZSwgQ29uc3RzLkFOSU1fTEVGVF9ST1csIDQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9UVVJOLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlycmVjdGlvbiA9IENvbnN0cy5ESVJfTEVGVDtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgLy9ydW5uaW5nXHJcbiAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmwpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9ub3QgdW5kZXIgYSBicmlja1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fUlVOX1NUQVJULCBDb25zdHMuQU5JTV9SVU5fRU5ELCBmYWxzZSwgQ29uc3RzLkFOSU1fTEVGVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9DUk9VQ0hfU1RBUlQsIENvbnN0cy5BTklNX0NST1VDSF9FTkQsIGZhbHNlLCBDb25zdHMuQU5JTV9MRUZUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfTEVGVCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2hpdCBhbiBpY2VcclxuICAgICAgICAgICAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSAmJiAodGhpcy5jb29ybmVycy5sID09PSBDb25zdHMuT0JKRUNUX0lDRSB8fCB0aGlzLmNvb3JuZXJzLmwgPT09IENvbnN0cy5PQkpFQ1RfTUVUQUwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2NsaW1iXHJcbiAgICAgICAgICAgICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMubCkgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkgICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudWwpICYmICF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9QVVNIX1NUQVJULENvbnN0cy5BTklNX1BVU0hfU1RBUlQsZmFsc2UsIENvbnN0cy5BTklNX0xFRlRfUk9XKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1VQLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByaWdodCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gIT09IENvbnN0cy5ESVJfUklHSFQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fVFVSTl9TVEFSVCwgQ29uc3RzLkFOSU1fVFVSTl9FTkQsIGZhbHNlLCBDb25zdHMuQU5JTV9MRUZUX1JPVywgNCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9DUk9VQ0hfU1RBUlQsQ29uc3RzLkFOSU1fQ1JPVUNIX1NUQVJULCBmYWxzZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfVFVSTiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSBDb25zdHMuRElSX1JJR0hUO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9SVU5fU1RBUlQsIENvbnN0cy5BTklNX1JVTl9FTkQsIGZhbHNlLCBDb25zdHMuQU5JTV9SSUdIVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9DUk9VQ0hfU1RBUlQsIENvbnN0cy5BTklNX0NST1VDSF9FTkQsIGZhbHNlLCBDb25zdHMuQU5JTV9SSUdIVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1JJR0hULCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSAmJiAodGhpcy5jb29ybmVycy5yID09PSBDb25zdHMuT0JKRUNUX0lDRSB8fCB0aGlzLmNvb3JuZXJzLnIgPT09IENvbnN0cy5PQkpFQ1RfTUVUQUwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMucikgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51cikgJiYgIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX1BVU0hfU1RBUlQsQ29uc3RzLkFOSU1fUFVTSF9TVEFSVCxmYWxzZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1VQLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXJuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBDb25zdHMuTU9WRV9SSVApIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheU9uY2UoJ2RhbmdlcicpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1JJUCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9SSVBfU1RBUlQsQ29uc3RzLkFOSU1fUklQX0VORCwgdHJ1ZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW50cm8oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0JJR19GQUxMX1NUQVJULENvbnN0cy5BTklNX0JJR19GQUxMX0VORCwgdHJ1ZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA0KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0lOVFJPLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRybygpIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fRkFMTF9TVEFSVCwgQ29uc3RzLkFOSU1fQklHX0ZBTExfRU5ELCB0cnVlLCBDb25zdHMuQU5JTV9SSUdIVF9ST1csIDQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfT1VUUk8sIHRydWUpO1xyXG4gICAgICAgIHRoaXMuaW5uZXJDb3VudGVyID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBkb1JpcCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ3Jhdml0eSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb29ybmVycy5kID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVyb3IoJ3VuZGVmaW5lZCBjb29ybmVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9ET1dOLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZhbGxDb3VudGVyID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5T25jZShcImZhbGxpbmdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mYWxsQ291bnRlciA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0JJR19GQUxMX1NUQVJULCBDb25zdHMuQU5JTV9CSUdfRkFMTF9FTkQsIHRydWUsIENvbnN0cy5BTklNX1JJR0hUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9CSUdfRkFMTF9TVEFSVCwgQ29uc3RzLkFOSU1fQklHX0ZBTExfRU5ELCB0cnVlLCBDb25zdHMuQU5JTV9SSUdIVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnN0b3AoXCJmYWxsaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENvbnN0cy5NT1ZFX0RPV04pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmYWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmFsbENvdW50ZXIgPj0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSArIDEsICcyNTUsIDEzNSwgMTI0JywgNSwgMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlICsgMSwgJzEyMiwgMjExLCAyNTUnLCAxMCwgIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZmFsbENvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29vcm5lcnMuZCA9PT0gQ29uc3RzLk9CSkVDVF9KQVIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBqYXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGphciAmJiBqYXIub25GaXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVybigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpY2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5ESVJfUklHSFQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmRyKSAmJiB0aGlzLmNvb3JuZXJzLmRyICE9PSBDb25zdHMuT0JKRUNUX0ZJUkUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0lDRV9TVEFSVCxDb25zdHMuQU5JTV9JQ0VfRU5ELGZhbHNlLCBDb25zdHMuQU5JTV9SSUdIVF9ST1csIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0lDRV9NQUtFLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29vcm5lcnMuZHIgPT09IENvbnN0cy5PQkpFQ1RfSUNFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9JQ0VfU1RBUlQsQ29uc3RzLkFOSU1fSUNFX0VORCxmYWxzZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9JQ0VfUkVNT1ZFLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fSUNFX1NUQVJULENvbnN0cy5BTklNX0lDRV9FTkQsZmFsc2UsIENvbnN0cy5BTklNX1JJR0hUX1JPVywgNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfSUNFX0ZBSUwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kbCkgJiYgKHRoaXMuY29vcm5lcnMuZGwgIT09IENvbnN0cy5PQkpFQ1RfRklSRSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0lDRV9TVEFSVCxDb25zdHMuQU5JTV9JQ0VfRU5ELGZhbHNlLCBDb25zdHMuQU5JTV9MRUZUX1JPVywgNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfSUNFX01BS0UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb29ybmVycy5kbCA9PT0gQ29uc3RzLk9CSkVDVF9JQ0UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0lDRV9TVEFSVCxDb25zdHMuQU5JTV9JQ0VfRU5ELGZhbHNlLCBDb25zdHMuQU5JTV9MRUZUX1JPVywgNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfSUNFX1JFTU9WRSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0lDRV9TVEFSVCxDb25zdHMuQU5JTV9JQ0VfRU5ELGZhbHNlLCBDb25zdHMuQU5JTV9MRUZUX1JPVywgNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfSUNFX0ZBSUwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBqdW1wKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRJUl9SSUdIVCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51cikgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX1BVU0hfU1RBUlQsQ29uc3RzLkFOSU1fUFVTSF9TVEFSVCxmYWxzZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1VQLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5sKSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudWwpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9QVVNIX1NUQVJULENvbnN0cy5BTklNX1BVU0hfU1RBUlQsZmFsc2UsIENvbnN0cy5BTklNX0xFRlRfUk9XKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1VQLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb1J1bigpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIrKztcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5BTklNX0ZSQU1FX0NPVU5UKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9UdXJuKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlcisrO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFOSU1fRlJBTUVfQ09VTlQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb091dHJvKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgJSAxMCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlubmVyQ291bnRlciArPSAxO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMzgsIDY2JywgMjAsICAwLjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcyNTUsIDEzNSwgMTI0JywgMTUsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gNSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcxMjIsIDIxMSwgMjU1JywgMTAsICAxLjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciAlIDIgPT09IDAgJiYgdGhpcy5pbm5lckNvdW50ZXIgPCA2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdjbGltYicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciAlIDIgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy55ICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy55IC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA+PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ3N0YXRlLWxlYXZlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUubmV4dExldmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvSW50cm8oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA9PT0gOCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzEyNCwgMjM4LCA2NicsIDIwLCAgMC41KTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcyNTUsIDEzNSwgMTI0JywgMTUsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzEyMiwgMjExLCAyNTUnLCAxMCwgIDEuNSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ3N0YWdlLWVudGVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gMzIpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQuc3RvcChcImZhbGxpbmdcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9HcmF2aXR5KCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLkFOSU1fRlJBTUVfQ09VTlQpIHtcclxuICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmFsbENvdW50ZXIrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9TdGFuZCgpIHtcclxuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YW5kQ291bnRlcisrID4gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fU0xFRVBfU1RBUlQsQ29uc3RzLkFOSU1fU0xFRVBfRU5ELHRydWUsIHRoaXMuZGlycmVjdGlvbiAhPT0gMSA/IENvbnN0cy5BTklNX0xFRlRfUk9XIDogQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA0OCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fU1RBTkRfU1RBUlQsQ29uc3RzLkFOSU1fU1RBTkRfRU5ELHRydWUsIHRoaXMuZGlycmVjdGlvbiAhPT0gMSA/IENvbnN0cy5BTklNX0xFRlRfUk9XIDogQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA4LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9DUk9VQ0hfU1RBUlQsQ29uc3RzLkFOSU1fQ1JPVUNIX1NUQVJULCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uICE9PSAxID8gQ29uc3RzLkFOSU1fTEVGVF9ST1cgOiBDb25zdHMuQU5JTV9SSUdIVF9ST1csIDgsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb1VwKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gMTgpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmNvdW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdjbGltYicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMzgsIDY2JywgMTAsICAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzI1NSwgMTM1LCAxMjQnLCA1LCAxLjI1KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fUFVTSF9FTkQsIENvbnN0cy5BTklNX1BVU0hfRU5ELCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRElSX1JJR0hUID8gQ29uc3RzLkFOSU1fUklHSFRfUk9XIDogQ29uc3RzLkFOSU1fTEVGVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9KVU1QX1NUQVJULCBDb25zdHMuQU5JTV9KVU1QX1NUQVJULCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRElSX1JJR0hUID8gQ29uc3RzLkFOSU1fUklHSFRfUk9XIDogQ29uc3RzLkFOSU1fTEVGVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9KVU1QX0VORCwgQ29uc3RzLkFOSU1fSlVNUF9FTkQsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5ESVJfUklHSFQgPyBDb25zdHMuQU5JTV9SSUdIVF9ST1cgOiBDb25zdHMuQU5JTV9MRUZUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbSgyLCAyLCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRElSX1JJR0hUID8gQ29uc3RzLkFOSU1fUklHSFRfUk9XIDogQ29uc3RzLkFOSU1fTEVGVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxODpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fU1RBTkQsIENvbnN0cy5BTklNX1NUQU5ELCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRElSX1JJR0hUID8gQ29uc3RzLkFOSU1fUklHSFRfUk9XIDogQ29uc3RzLkFOSU1fTEVGVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ha2VJY2UoKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnbmV3LWljZScpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZEljZUJsb2NrKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUrMSk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUgKyAxKTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSArIDEsICcxMjQsIDIxNCwgMjU1JywgNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSWNlQmxvY2soKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLXJlbW92ZScpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUljZUJsb2NrKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUrMSk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUgKyAxKTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSArIDEsICcxMjQsIDIxNCwgMjU1JywgNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaCgpIHtcclxuICAgICAgICBsZXQgaWNlID0gIHRoaXMuZW5naW5lLmljZUF0KHRoaXMueHRpbGUrdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBpZiAoaWNlICYmIGljZS5jYW5HbGlkZSh0aGlzLmRpcnJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlLCAnMjU1LCAyNTUsIDI1NScsIDMpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSwgJzEyNCwgMjE0LCAyNTUnLCAzLCAxLjUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fUFVTSF9TVEFSVCwgQ29uc3RzLkFOSU1fUFVTSF9FTkQsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5ESVJfUklHSFQgPyBDb25zdHMuQU5JTV9SSUdIVF9ST1cgOiBDb25zdHMuQU5JTV9MRUZUX1JPVywgMyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfUFVTSCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvUHVzaCgpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMjtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5BTklNX0ZSQU1FX0NPVU5UKSB7XHJcbiAgICAgICAgICAgIC8vIGZpeG1lXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGljZSA9ICB0aGlzLmVuZ2luZS5pY2VBdCh0aGlzLnh0aWxlK3RoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgICAgIGlmIChpY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1wdXNoJyk7XHJcbiAgICAgICAgICAgICAgICBpY2UucHVzaCh0aGlzLmRpcnJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9JY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA9PT0gOCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ29uc3RzLk1PVkVfSUNFX01BS0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFrZUljZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUljZUJsb2NrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+PSBDb25zdHMuQU5JTV9GUkFNRV9DT1VOVCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvRmFpbEljZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID09PSA4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1kaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSArIDEsICc4OCw2Niw2NicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID49IENvbnN0cy5BTklNX0ZSQU1FX0NPVU5UKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9ucygpIHtcclxuICAgICAgICBpZiAodGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUsIHRoaXMueXRpbGUsIENvbnN0cy5PQkpFQ1RfUExBWUVSKSA9PT0gQ29uc3RzLk9CSkVDVF9GSVJFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVybigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlICgpIHtcclxuICAgICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbnMoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gQ29uc3RzLk1PVkVfU1RBTkQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFuZENvdW50ZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gQ29uc3RzLk1PVkVfRE9XTikge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGxDb3VudGVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfUklHSFQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvUnVuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9MRUZUOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1J1bigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfRE9XTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9HcmF2aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9VUDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9VcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfVFVSTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9UdXJuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9JQ0VfTUFLRTpcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9JQ0VfUkVNT1ZFOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0ljZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfSUNFX0ZBSUw6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvRmFpbEljZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfU1RBTkQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvU3RhbmQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX1BVU0g6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvUHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfUklQOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1JpcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfT1VUUk86XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvT3V0cm8oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0lOVFJPOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0ludHJvKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgUmVzb3VyY2VzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSB7IH07XHJcbiAgICAgICAgdGhpcy5sb2FkZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGQodHlwZSwgbmFtZSwgc3JjKSB7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKHt0eXBlOiB0eXBlLCBuYW1lOiBuYW1lLCBzcmM6IHNyY30pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3R4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmYnO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCg1MCwgMjUwLCB0aGlzLmxvYWRlZCAqIDQ1MCAvIHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLCA0MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvYWRlZCA9PT0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWFkeShjYWxsYmFjaykge1xyXG4gICAgICAgIGZvciAoY29uc3QgcmVzb3VyY2Ugb2YgdGhpcy5kZWZpbml0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAocmVzb3VyY2UudHlwZSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gcmVzb3VyY2Uuc3JjO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXNbcmVzb3VyY2UubmFtZV0gPSBpbWFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzb3VyY2UudHlwZSA9PT0nYXVkaW8nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhyZXNvdXJjZS5zcmMpO1xyXG4gICAgICAgICAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXNbcmVzb3VyY2UubmFtZV0gPSBhdWRpbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgRmlyZSB9IGZyb20gJy4vZmlyZSc7XHJcbmltcG9ydCB7IEljZSB9IGZyb20gJy4vaWNlJztcclxuaW1wb3J0IHsgSmFyIH0gZnJvbSAnLi9qYXInO1xyXG5pbXBvcnQgeyBNZXRhbCB9IGZyb20gJy4vbWV0YWwnO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tICcuL3RpbGVtYXAnO1xyXG5pbXBvcnQgeyBsZXZlbHMgfSBmcm9tICcuL2xldmVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICBkYXRhLm1hcCA9IHRoaXMuZW5naW5lLm1hcC5tYXA7XHJcbiAgICAgICAgZGF0YS50aGVtZSA9IHRoaXMuZW5naW5lLm1hcC50aGVtZTtcclxuICAgICAgICBkYXRhLnNwcml0ZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiB0aGlzLmVuZ2luZS5zcHJpdGVzKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9ICh0eXBlb2Ygc3ByaXRlLmxlbmd0aCA9PT0gXCJ1bmRlZmluZWRcIikgPyAxIDogc3ByaXRlLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFsdWUgPSBzcHJpdGUuaWQgPT09IENvbnN0cy5PQkpFQ1RfSkFSID8gc3ByaXRlLm9uRmlyZSA6IHZhbHVlO1xyXG4gICAgICAgICAgICBkYXRhLnNwcml0ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IHNwcml0ZS5pZCxcclxuICAgICAgICAgICAgICAgIFwieFwiOiBzcHJpdGUueHRpbGUsXHJcbiAgICAgICAgICAgICAgICBcInlcIjogc3ByaXRlLnl0aWxlLFxyXG4gICAgICAgICAgICAgICAgXCJ2XCI6IHZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZChpbmRleCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbGV2ZWxzW2luZGV4XSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuZ2luZS5sZXZlbCA9IGluZGV4O1xyXG4gICAgICAgIGNvbnN0IGxldmVsID0gbGV2ZWxzW2luZGV4XTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5zcHJpdGVzID0gW107XHJcbiAgICAgICAgdGhpcy5lbmdpbmUubWFwID0gbmV3IFRpbGVNYXAodGhpcy5lbmdpbmUsIGxldmVsLm1hcCwgbGV2ZWwudGhlbWUpO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3ByaXRlIG9mIGxldmVsLnNwcml0ZXMpIHtcclxuICAgICAgICAgICAgc3dpdGNoKHNwcml0ZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT0JKRUNUX1BMQVlFUjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZSh0aGlzLmVuZ2luZS5wbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT0JKRUNUX0lDRTpcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGUudiA9IHR5cGVvZiBzcHJpdGUudiA9PT0gXCJ1bmRlZmluZWRcIiA/IDEgOiBzcHJpdGUudjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpY2UgPSBuZXcgSWNlKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnksIHBhcnNlSW50KHNwcml0ZS52KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKGljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzcHJpdGUuZiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNlLmZyb3plbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9NRVRBTDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IE1ldGFsKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnksIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9GSVJFOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShuZXcgRmlyZSh0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PQkpFQ1RfSkFSOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGphciA9IG5ldyBKYXIodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwcml0ZS52ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgamFyLnR1cm5PbkZpcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKGphcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmNsYXNzIFBhcnRpY2xlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIGNvbG9yLCBpbnRlbmNpdHkpIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gKHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcpID8gJzI1NSwyNTUsMjU1JyA6IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuciA9IDM7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudnggPSAoTWF0aC5yYW5kb20oKSAqIDQgLSAyKSAqIGludGVuY2l0eTtcclxuICAgICAgICB0aGlzLnZ5ID0gKE1hdGgucmFuZG9tKCkgKiA2IC0gNCkgKiBpbnRlbmNpdHk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDAuMTU7XHJcbiAgICAgICAgdGhpcy5saWZlID0gMjU1O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgbGV0IG9wYWNpdHkgPSB0aGlzLmxpZmUgLyAyNTU7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoJyArIHRoaXMuY29sb3IrICcsJyArIG9wYWNpdHkgKyAnKSc7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnIsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMudng7XHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudnk7XHJcbiAgICAgICAgdGhpcy52eSArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMubGlmZSAtPSA1O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3BhcmtzIGV4dGVuZHMgU3ByaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoZW5naW5lLCB0eCwgdHksIGNvbG9yLCBsZW5ndGgsIGludGVuY2l0eSkge1xyXG4gICAgICAgIHN1cGVyKG51bGwsIGVuZ2luZSwgdHgsIHR5LCAzMiwgMzIpO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykgPyAnMjU1LDI1NSwyNTUnIDogY29sb3I7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSAodHlwZW9mIGxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpID8gMTAgOiBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5pbnRlbmNpdHkgPSAodHlwZW9mIGludGVuY2l0eSA9PT0gJ3VuZGVmaW5lZCcpID8gMSA6IGludGVuY2l0eTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXSA9IG5ldyBQYXJ0aWNsZSh0aGlzLmVuZ2luZS5jdHgsIHR4KkNvbnN0cy5USUxFX1dJRFRIKzE2LCB0eSpDb25zdHMuVElMRV9XSURUSCsxNiwgdGhpcy5jb2xvciwgdGhpcy5pbnRlbmNpdHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5naW5lLmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5naW5lTW92ZSgpIHtcclxuICAgICAgICB0aGlzLm1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0ubW92ZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJ0aWNsZXNbaV0ubGlmZSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5wYXJ0aWNsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbW92ZVNmeCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnLi9lbmdpbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNvdW5kIHtcclxuXHRjb25zdHJ1Y3RvcihyZXNvdXJjZXMpIHtcclxuXHRcdHRoaXMucmVzb3VyY2VzID0gcmVzb3VyY2VzO1xyXG5cdFx0dGhpcy5tdXNpY09uID0gdHJ1ZTtcclxuXHRcdHRoaXMuc291bmRPbiA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy5zZnhWb2x1bWUgPSAwLjM7XHJcblx0XHR0aGlzLnNmeCA9IHtcclxuXHRcdFx0XCJmaXJlLW9mZlwiOiByZXNvdXJjZXMuZ2V0KCdzZngtZmlyZS1vZmYnKSxcclxuXHRcdFx0XCJpY2UtcHVzaFwiOiByZXNvdXJjZXMuZ2V0KCdzZngtaWNlLXB1c2gnKSxcclxuXHRcdFx0XCJmYWxsXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1mYWxsJyksXHJcblx0XHRcdFwiZmFsbGluZ1wiOiByZXNvdXJjZXMuZ2V0KCdzZngtZmFsbGluZycpLFxyXG5cdFx0XHRcIm5ldy1pY2VcIjogcmVzb3VyY2VzLmdldCgnc2Z4LW5ldy1pY2UnKSxcclxuXHRcdFx0XCJjbGltYlwiOiByZXNvdXJjZXMuZ2V0KCdzZngtY2xpbWInKSxcclxuXHRcdFx0XCJpY2UtY29sbGlzaW9uXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1pY2UtY29sbGlzaW9uJyksXHJcblx0XHRcdFwic3RhZ2UtZW50ZXJcIjogcmVzb3VyY2VzLmdldCgnc2Z4LXN0YWdlLWVudGVyJyksXHJcblx0XHRcdFwiZGFuZ2VyXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1kYW5nZXInKSxcclxuXHRcdFx0XCJpY2UtcmVtb3ZlXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1pY2UtcmVtb3ZlJyksXHJcblx0XHRcdFwic3RhdGUtbGVhdmVcIjogcmVzb3VyY2VzLmdldCgnc2Z4LXN0YXRlLWxlYXZlJyksXHJcblx0XHRcdFwiaWNlLWRpc2FibGVkXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1kaXNhYmxlZCcpXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cGxheShzZngpIHtcclxuXHRcdGlmICghdGhpcy5zb3VuZE9uKSByZXR1cm47XHJcblx0XHR0aGlzLnNmeFtzZnhdLnZvbHVtZSA9IHRoaXMuc2Z4Vm9sdW1lO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS5jdXJyZW50VGltZSA9IDA7XHJcblx0XHR0aGlzLnNmeFtzZnhdLnBsYXkoKS5jYXRjaCgoKT0+e30pO1xyXG5cdH1cclxuXHJcblx0cGxheU9uY2Uoc2Z4KSB7XHJcblx0XHRpZiAoIXRoaXMuc2Z4W3NmeF0ucGF1c2VkKSByZXR1cm47XHJcblx0XHRpZiAoIXRoaXMuc291bmRPbikgcmV0dXJuO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS52b2x1bWUgPSB0aGlzLnNmeFZvbHVtZTtcclxuXHRcdHRoaXMuc2Z4W3NmeF0uY3VycmVudFRpbWUgPSAwO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS5wbGF5KCkuY2F0Y2goKCk9Pnt9KTtcclxuXHR9XHJcblxyXG5cdHN0b3Aoc2Z4KSB7XHJcblx0XHR0aGlzLnNmeFtzZnhdLnBhdXNlKCk7XHJcblx0XHR0aGlzLnNmeFtzZnhdLmN1cnJlbnRUaW1lID0gMDtcclxuXHR9XHJcblxyXG5cdHNvdW5kcmFjaygpIHtcclxuXHRcdGlmICghdGhpcy5tdXNpY09uKSByZXR1cm47XHJcblx0XHR0aGlzLm11c2ljID0gdGhpcy5yZXNvdXJjZXMuZ2V0KCdzZngtbXVzaWMtc3BhcmtzJyk7XHJcblx0XHR0aGlzLm11c2ljLm11dGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLm11c2ljLnZvbHVtZSA9IDAuMjtcclxuXHRcdHRoaXMubXVzaWMubG9vcCA9IHRydWU7XHJcblx0XHR0aGlzLm11c2ljLnBsYXkoKS5jYXRjaCgoKT0+e30pO1xyXG5cdH1cclxufSIsImltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi9zdHJ1Y3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgICAvKipcclxuICAgICAqIEJhc2UgY2xhc3Mgb2YgdGhlIHNwcml0ZVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGVuZ2luZSAgIEVuZ2luZSBFbmdpbmVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eCAgICAgUG9zaXRpb24gdGlsZSB4IGluIHRoZSBtYXBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eSAgICAgUG9zaXRpb24gdGlsZSB5IGluIHRoZSBtYXBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAgV2lkdGggb2YgdGhlIHNwcml0ZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgdGhlIHNwcml0ZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZW5naW5lLCB0eCwgdHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSBlbmdpbmUuY3R4O1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMgPSBuZXcgUG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLnNvbGlkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSA0O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBDb25zdHMuTU9WRV9TVEFORDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gMDtcclxuICAgICAgICB0aGlzLnh0aWxlID0gdHg7XHJcbiAgICAgICAgdGhpcy55dGlsZSA9IHR5O1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMueHRpbGUgKiBDb25zdHMuVElMRV9XSURUSDtcclxuICAgICAgICB0aGlzLnkgPSB0aGlzLnl0aWxlICogQ29uc3RzLlRJTEVfV0lEVEg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgc3ByaXRlIHN0YXRlc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXRlICBDb25zdGFudCBvZiB0aGUgc3RhdGVcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbW92aW5nIFRydWUgaWYgc3ByaXRlIGlzIG1vdmluZ1xyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZShzdGF0ZSwgbW92aW5nKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSAodHlwZW9mIG1vdmluZyA9PT0gJ3VuZGVmaW5lZCcpID8gZmFsc2UgOiBtb3Zpbmc7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGlsZSh0eCwgdHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmdpbmUubWFwLmdldFRpbGUodHgsIHR5KTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Nwcml0ZUF0ICh0eCwgdHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54dGlsZSA9PT0gdHggJiYgdGhpcy55dGlsZSA9PT0gdHk7XHJcbiAgICB9XHJcblxyXG4gICAgc3ByaXRlVHlwZUF0KHR4LCB0eSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodHgsIHR5KTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlICgpIHt9XHJcblxyXG4gICAgZW5naW5lTW92ZSgpIHtcclxuICAgICAgICB0aGlzLmNvb3JuZXJzLnUgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLTEpO1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMuZCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUsIHRoaXMueXRpbGUrMSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy5sID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZS0xLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICB0aGlzLmNvb3JuZXJzLnIgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlKzEsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMudWwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLTEsIHRoaXMueXRpbGUtMSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy51ciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUrMSwgdGhpcy55dGlsZS0xKTtcclxuICAgICAgICB0aGlzLmNvb3JuZXJzLmRsID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZS0xLCB0aGlzLnl0aWxlKzEpO1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMuZHIgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlKzEsIHRoaXMueXRpbGUrMSk7XHJcblxyXG4gICAgICAgIHRoaXMubW92ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnh0aWxlID0gTWF0aC5mbG9vcih0aGlzLnggLyBDb25zdHMuVElMRV9XSURUSCk7XHJcbiAgICAgICAgdGhpcy55dGlsZSA9IE1hdGguZmxvb3IodGhpcy55IC8gQ29uc3RzLlRJTEVfV0lEVEgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4qIFN0b3JlcyBwb3NpdGlvbiBvZiB0aGUgY29ybmVycyBhbmQgdmVydGljZXNcclxuKi9cclxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudSA9IDA7XHJcbiAgICAgICAgdGhpcy5kID0gMDtcclxuICAgICAgICB0aGlzLmwgPSAwO1xyXG4gICAgICAgIHRoaXMuciA9IDA7XHJcbiAgICAgICAgdGhpcy51bCA9IDA7XHJcbiAgICAgICAgdGhpcy51ciA9IDA7XHJcbiAgICAgICAgdGhpcy5kbCA9IDA7XHJcbiAgICAgICAgdGhpcy5kciA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb29yIHtcclxuICAgIGNvbnN0cnVjdG9yICh0eCwgdHkpIHtcclxuICAgICAgICB0aGlzLnh0aWxlID0gdHg7XHJcbiAgICAgICAgdGhpcy55dGlsZSA9IHR5O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufVxyXG4iLCJpbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVNYXAge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaWxlbWFwIGNsYXNzXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZW5naW5lIEVuZ2luZVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1hcCAgTWF0cml4IG9mIHRoZSBtYXBcclxuICAgICAqL1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSwgbWFwLCB0aGVtZSkge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gZW5naW5lLmN0eDtcclxuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcclxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgICAgICB0aGlzLnRoZW1lID0gdGhlbWU7XHJcbiAgICAgICAgdGhpcy50aWxlV2lkdGggPSBDb25zdHMuVElMRV9XSURUSDtcclxuICAgICAgICB0aGlzLnRpbGVIZWlnaHQgPSBDb25zdHMuVElMRV9XSURUSDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubWFwLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWFwWzBdLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdGhpcy50aWxlc0ltYWdlID0gdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgndGlsZW1hcCcpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBjb250ZW50IG9mIHRoZSB0aWxlIGluc2lkZSB0aGUgbWF0cml4XHJcbiAgICAgKiBpZiBwb3NpdGlvbiBvdXQgb2YgYm91bmRzIHJldHVybnMgQ29uc3RzLk9CSkVDVF9PVVRcclxuICAgICAqIEBwYXJhbSAge251bWJlcn0geSBwb3NpdGlvblxyXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSB4IHBvc2l0aW9uXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9ICAgQ29udGVudCBvZiB0aGUgdGlsZVxyXG4gICAgICovXHJcbiAgICBnZXRUaWxlKHgsIHkpIHtcclxuICAgICAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+IHRoaXMud2lkdGggfHwgeSA+IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDb25zdHMuT0JKRUNUX09VVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwW3ldW3hdO1xyXG5cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRHJhd3MgdGhlIG1hcFxyXG4gICAgICogQHJldHVybiB7bm9uZX1cclxuICAgICAqL1xyXG4gICAgZHJhdygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMud2lkdGg7ICsraSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSB0aGlzLmhlaWdodDsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGlsZVR5cGUgPSBDb25zdHMuVElMRV9CQUNLR1JPVU5EO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWFwW2pdW2ldID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdldFRpbGUoaS0xLCBqKSAmJiAhdGhpcy5nZXRUaWxlKGkrMSwgaikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVElMRV9CT1RIO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2V0VGlsZShpLTEsIGopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRJTEVfTEVGVDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmdldFRpbGUoaSsxLCBqKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlVHlwZSA9IENvbnN0cy5USUxFX1JJR0hUO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRJTEVfTUlERExFO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlc0ltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhlbWUgKiB0aGlzLnRpbGVIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGkgKiB0aGlzLnRpbGVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBqICogdGhpcy50aWxlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUhlaWdodFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHt9XHJcblxyXG4gICAgZW5naW5lTW92ZSgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBUaWxlID0ge1xyXG4gICB0aWxlczoge1xyXG4gICAgICAgIFtDb25zdHMuT0JKRUNUX0JBQ0tHUk9VTkRdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW0NvbnN0cy5PQkpFQ1RfT1VUXToge1xyXG4gICAgICAgICAgICBzb2xpZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW0NvbnN0cy5PQkpFQ1RfUExBWUVSXToge1xyXG4gICAgICAgICAgICBzb2xpZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW0NvbnN0cy5PQkpFQ1RfSUNFXToge1xyXG4gICAgICAgICAgICBzb2xpZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW0NvbnN0cy5PQkpFQ1RfTUVUQUxdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9CSkVDVF9XQUxMXToge1xyXG4gICAgICAgICAgICBzb2xpZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW0NvbnN0cy5PQkpFQ1RfRklSRV06IHtcclxuICAgICAgICAgICAgc29saWQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9CSkVDVF9KQVJdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpc1NvbGlkOiBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlc1tpZF0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVU5ERUZJTkVEIE9OIGlzU29saWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aWxlc1tpZF0uc29saWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9