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
        once = (typeof once === 'undefined') ? false : once;
        delay  = (typeof delay === 'undefined') ? _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ANIM_STANDARD_DELAY : delay;
        row = (typeof row === 'undefined') ? this.animRow : row;
        if (!once) {
            this.animStart = start;
            this.animEnd = end;
            this.animCount = start;
            this.animLoop = loop;
            this.animDelay = delay;
            this.animRow = row;
        } else {
            if (this.animStart !== start || this.animEnd !== end ||
                this.animLoop !== loop || this.animRow !== row)
            {
                this.animStart = start;
                this.animEnd = end;
                this.animCount = start;
                this.animLoop = loop;
                this.animDelay = delay;
                this.animRow = row;
            }
        }
    }
    /**
     * Draws the frame of the sprite in the canvas
     */
    draw() {
        this.ctx.drawImage(
            this.image,
            this.animCount * this.width,
            this.animRow * this.height,
            this.width, this.height,
            this.x + this.offsetX,
            this.y + this.offsetY,
            this.width, this.height
        );

        if (this.animDelayCount++ > this.animDelay) {
            this.animCount += 1;
            if (this.animCount > this.animEnd) {
                if (this.animLoop) {
                    this.animCount = this.animStart;
                } else {
                    this.animCount = this.animEnd;
                }
            }
            this.animDelayCount = 0;
        }
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

    addIceBlock(tx, ty, frozenLeft, frozenRight) {
        let foundIceBlocks = [ ];
        for (let i = 0; i < this.sprites.length; i++) {
            if (this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].OBJECT_ICE && this.sprites[i].ytile === ty) {
                let ice = this.sprites[i];
                if (ice.xtile - 1 === tx || ice.xtile + ice.length === tx) {
                    foundIceBlocks.push(ice);
                }
            }
        }
        if (foundIceBlocks.length === 0) {
            this.sprites.push(new _ice__WEBPACK_IMPORTED_MODULE_3__["Ice"](this, tx, ty, 1, frozenLeft, frozenRight));
        } else if (foundIceBlocks.length === 1) {
            foundIceBlocks[0].addBlock(tx);
        } else {
            if (foundIceBlocks[0].xtile <= foundIceBlocks[1].xtile) {
                this.joinIceBlocks(foundIceBlocks[0], foundIceBlocks[1]);
            } else {
                this.joinIceBlocks(foundIceBlocks[1], foundIceBlocks[0]);
            }
        }
    }

    joinIceBlocks(iceblockA,iceblockB) {
        let tx = iceblockA.xtile;
        let ty = iceblockA.ytile;
        let length = iceblockA.length + iceblockB.length + 1;
        this.addSprite(new _ice__WEBPACK_IMPORTED_MODULE_3__["Ice"](this, tx, ty, length, iceblockA.frozenLeft, iceblockB.frozenRight));
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
/* harmony import */ var _animsprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animsprite */ "./src/animsprite.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine */ "./src/engine.js");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels */ "./src/levels.js");





/**
 * Game Loop
 */
class Game {
    /**
     * @param {*} canvavs   The canvas element
     * @param {*} resources  Game resources
     */
    constructor(canvas, resources) {
        this.state = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].GAME_STATE_INTRO;
        this.engine = new _engine__WEBPACK_IMPORTED_MODULE_2__["Engine"](canvas, resources);
        this.levels = _levels__WEBPACK_IMPORTED_MODULE_3__["levels"];
        this.createIntro();
        this.gameloop = this.gameloop_.bind(this); // jshint ignore:line
        this.gameloop();
    }

    gameloop_() {
        switch (this.state) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].GAME_STATE_INTRO:
                this.doIntro();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].GAME_STATE_PLAY:
                this.engine.draw();
                this.engine.move();
                break;
        }
        window.requestAnimationFrame(this.gameloop);
    }

    createIntro() {
        this.intro = new _animsprite__WEBPACK_IMPORTED_MODULE_0__["AnimSprite"](null, this.engine, 'img_intro', 0, 0, 544, 416, 0, 0, 0, 0, false);
        this.start = new _animsprite__WEBPACK_IMPORTED_MODULE_0__["AnimSprite"](null, this.engine, 'img_start', 7, 11, 140, 26, -10, 0, 0, 1, true);
        this.start.animDelay = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ANIM_STANDARD_DELAY * 20;
    }

    doIntro() {
        this.intro.draw();
        this.start.draw();

        if (this.engine.keyboard.enter) {
            this.engine.keyboard.enter = false;
            this.state = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].GAME_STATE_PLAY;
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

    constructor(engine, tx, ty, length, frozenLeft, frozenRight) {
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
                this.getTile(tx + 1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL ||
                spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL ||
                spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR
            ) {
                this.frozenRight = true;
            }
        }

        if (tx < this.xtile) {
            this.xtile = tx;
            if (
                this.getTile(tx - 1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL ||
                spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL ||
                spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR
            ) {
                this.frozenLeft = true;
            }
        }
        this.x = this.xtile * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH;
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
            this.x += _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TILE_WIDTH;
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
        if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].DIR_LEFT  && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.l)) {
            return false;
        }
        if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].DIR_RIGHT && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.r)) {
            return false;
        }
        return true;
    }

    frozen() {
        return this.frozenLeft || this.frozenRight;
    }
    gravity() {
        if (!_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.d) && !this.frozen()) {
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
        this.coorners.r = this.spriteTypeAt(this.xtile + this.length, this.ytile);

        if (this.frozen()) {
            this.checkUnfreezeLeft();
            this.checkUnfreezeRight();
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

    checkFreeze() {
        const leftSprite = this.engine.spriteTypeAt(this.xtile - 1, this.ytile);
        const rightSprite = this.engine.spriteTypeAt(this.xtile + this.length, this.ytile);
        if (
            this.getTile(this.xtile - 1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL ||
            leftSprite === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL ||
            leftSprite === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR
         ) {
            this.frozenLeft = true;
        } else {
            this.frozenLeft = false;
        }
        if (
            this.getTile(this.xtile + this.length, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL ||
            rightSprite === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL ||
            rightSprite === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR
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
            this.getTile(this.xtile - 1, this.ytile) !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL &&
            leftSprite !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL &&
            leftSprite !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR
         ) {
            this.frozenLeft = false;
        }
    }

    checkUnfreezeRight() {
        const rightSprite = this.engine.spriteTypeAt(this.xtile + this.length, this.ytile);
        if (
            this.frozenRight &&
            this.getTile(this.xtile + this.length, this.ytile) !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_WALL &&
            rightSprite !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_METAL &&
            rightSprite !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_JAR
        ) {
            this.frozenRight = false;
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
            this.engine.removeFire(this.xtile, this.ytile - 1);
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
        super.draw();
        if (
            this.engine.spriteTypeAt(this.xtile - 1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_ICE &&
            this.engine.spriteAt(this.xtile - 1, this.ytile).frozenRight
        ) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile * this.width) - 7,
                this.ytile * this.height
            );
        }
        if (
            this.engine.spriteTypeAt(this.xtile+this.length, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].OBJECT_ICE &&
            this.engine.spriteAt(this.xtile+this.length, this.ytile).frozenLeft
        ) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile + this.length) * this.width - 7,
                this.ytile * this.height
            );
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
        document.getElementById('btn_action').addEventListener('pointerdown', () => {
            this.down = true;
            this.left = false;
            this.right = false;
        });
        document.getElementById('btn_action').addEventListener('pointerup', () => this.down = false);
        document.getElementById('btn_left').addEventListener('pointerdown', () => {
            this.left = true;
            this.right = false;
            this.down = false;
        });
        document.getElementById('btn_left').addEventListener('pointerup', () => this.left = false);
        document.getElementById('btn_right').addEventListener('pointerdown', () => {
            this.right = true;
            this.left = false;
            this.down = false;
        });
        document.getElementById('btn_right').addEventListener('pointerup', () => this.right = false);
        document.getElementById('btn_select').addEventListener('pointerup', () => this.enter = true);
    }


    keydown_(e) {
        switch (e.keyCode) {
            case 37: // Left
                this.left = true;
                this.right = false;
                break;
            case 38: // Up
                this.up = true;
                break;
            case 39: // Right
                this.right = true;
                this.left = false;
                break;
            case 40: // Down
            case 32: // Space
                this.action = true;
                this.left = false;
                this.right = false;
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
    {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":0,
        "sprites":[
            {"id":7,"x":11,"y":4,"v":1},
            {"id":3,"x":5,"y":9,"v":1},
            {"id":3,"x":5,"y":8,"v":1},
            {"id":3,"x":5,"y":7,"v":1},
            {"id":3,"x":5,"y":6,"v":1},
            {"id":6,"x":6,"y":4,"v":1},
            {"id":3,"x":8,"y":4,"v":1},
            {"id":6,"x":7,"y":9,"v":1},
            {"id":6,"x":7,"y":8,"v":1},
            {"id":6,"x":7,"y":7,"v":1},
            {"id":6,"x":9,"y":10,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":1,
        "sprites":[
            {"id":7,"x":3,"y":7,"v":1},
            {"id":6,"x":6,"y":7,"v":1},
            {"id":3,"x":4,"y":7,"v":1},
            {"id":3,"x":10,"y":5,"v":4},
            {"id":6,"x":12,"y":8,"v":1},
            {"id":6,"x":12,"y":7,"v":1},
            {"id":6,"x":12,"y":6,"v":1},
            {"id":6,"x":13,"y":8,"v":1},
            {"id":3,"x":11,"y":8,"v":1},
            {"id":3,"x":11,"y":7,"v":1},
            {"id":3,"x":11,"y":6,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":2,
        "sprites":[
            {"id":7,"x":14,"y":6,"v":1},
            {"id":6,"x":10,"y":9,"v":1},
            {"id":3,"x":5,"y":4,"v":1},
            {"id":6,"x":9,"y":6,"v":1},
            {"id":6,"x":9,"y":5,"v":1},
            {"id":3,"x":11,"y":6,"v":1},
            {"id":3,"x":11,"y":5,"v":1},
            {"id":3,"x":8,"y":6,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":0,
        "sprites":[
            {"id":7,"x":8,"y":9,"v":1},
            {"id":6,"x":12,"y":8,"v":1},
            {"id":6,"x":13,"y":7,"v":1},
            {"id":6,"x":11,"y":9,"v":1},
            {"id":3,"x":6,"y":8,"v":5},
            {"id":3,"x":10,"y":9,"v":1},
            {"id":3,"x":10,"y":7,"v":3},
            {"id":3,"x":12,"y":6,"v":2},
            {"id":3,"x":6,"y":9,"v":1},
            {"id":3,"x":4,"y":7,"v":3},
            {"id":3,"x":3,"y":6,"v":2},
            {"id":6,"x":5,"y":9,"v":1},
            {"id":6,"x":4,"y":8,"v":1},
            {"id":6,"x":3,"y":7,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
            [1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1],
            [1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1],
            [1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":6,
        "sprites":[
            {"id":7,"x":11,"y":8,"v":1},
            {"id":3,"x":10,"y":10,"v":3},
            {"id":3,"x":10,"y":9,"v":3},
            {"id":3,"x":7,"y":7,"v":1},
            {"id":3,"x":3,"y":5,"v":1},
            {"id":3,"x":9,"y":7,"v":1},
            {"id":6,"x":3,"y":10,"v":1},
            {"id":3,"x":3,"y":4,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1],
            [1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":5,
        "sprites":[
            {"id":7,"x":13,"y":3,"v":1},
            {"id":3,"x":3,"y":4,"v":1,"fl":false,"fr":false},
            {"id":3,"x":6,"y":6,"v":1,"fl":false,"fr":false},
            {"id":3,"x":8,"y":6,"v":1,"fl":false,"fr":false},
            {"id":3,"x":10,"y":6,"v":1,"fl":false,"fr":false},
            {"id":3,"x":2,"y":8,"v":13,"fl":true,"fr":false},
            {"id":6,"x":2,"y":7,"v":1},
            {"id":6,"x":3,"y":10,"v":1},
            {"id":6,"x":4,"y":10,"v":1},
            {"id":6,"x":5,"y":10,"v":1},
            {"id":6,"x":6,"y":10,"v":1},
            {"id":6,"x":7,"y":10,"v":1},
            {"id":6,"x":8,"y":10,"v":1},
            {"id":6,"x":9,"y":10,"v":1},
            {"id":6,"x":10,"y":10,"v":1},
            {"id":6,"x":11,"y":10,"v":1},
            {"id":6,"x":12,"y":10,"v":1},
            {"id":6,"x":13,"y":10,"v":1},
            {"id":6,"x":14,"y":10,"v":1},
            {"id":3,"x":14,"y":4,"v":1,"fl":true,"fr":true},
            {"id":3,"x":2,"y":5,"v":1,"fl":true,"fr":true}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1],
            [1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":1,
        "sprites":[
            {"id":7,"x":12,"y":4,"v":1},
            {"id":6,"x":8,"y":10,"v":1},
            {"id":6,"x":9,"y":11,"v":1},
            {"id":6,"x":10,"y":11,"v":1},
            {"id":3,"x":8,"y":5,"v":5},
            {"id":3,"x":10,"y":4,"v":1},
            {"id":3,"x":6,"y":6,"v":1},
            {"id":6,"x":6,"y":5,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":1,
        "sprites":[
            {"id":7,"x":8,"y":6,"v":1},
            {"id":6,"x":5,"y":10,"v":1},
            {"id":6,"x":6,"y":10,"v":1},
            {"id":6,"x":7,"y":10,"v":1},
            {"id":6,"x":8,"y":10,"v":1},
            {"id":6,"x":9,"y":10,"v":1},
            {"id":6,"x":10,"y":10,"v":1},
            {"id":3,"x":11,"y":10,"v":2},
            {"id":3,"x":5,"y":9,"v":7},
            {"id":6,"x":5,"y":8,"v":1},
            {"id":3,"x":11,"y":6,"v":1},
            {"id":6,"x":11,"y":5,"v":1},
            {"id":3,"x":6,"y":5,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],
            [1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],
            [1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1],
            [1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],
            [1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],
            [1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],
            [1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":6,
        "sprites":[
            {"id":7,"x":5,"y":4,"v":1},
            {"id":6,"x":5,"y":8,"v":1},
            {"id":3,"x":8,"y":5,"v":1},
            {"id":3,"x":8,"y":4,"v":1},
            {"id":6,"x":11,"y":8,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1],
            [1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1],
            [1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":10,
        "sprites":[
            {"id":7,"x":3,"y":4,"v":1},
            {"id":6,"x":2,"y":6,"v":1},
            {"id":6,"x":3,"y":7,"v":1},
            {"id":6,"x":4,"y":8,"v":1},
            {"id":6,"x":5,"y":9,"v":1},
            {"id":6,"x":6,"y":10,"v":1},
            {"id":6,"x":7,"y":10,"v":1},
            {"id":6,"x":8,"y":9,"v":1},
            {"id":6,"x":9,"y":8,"v":1},
            {"id":6,"x":10,"y":7,"v":1},
            {"id":6,"x":11,"y":6,"v":1},
            {"id":3,"x":2,"y":5,"v":10},
            {"id":3,"x":5,"y":4,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1],
            [1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1],
            [1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1],
            [1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1],
            [1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":6,
        "sprites":[
            {"id":7,"x":3,"y":3,"v":1},
            {"id":6,"x":13,"y":10,"v":1},
            {"id":6,"x":5,"y":10,"v":1},
            {"id":6,"x":6,"y":10,"v":1},
            {"id":6,"x":7,"y":10,"v":1},
            {"id":3,"x":4,"y":4,"v":1},
            {"id":3,"x":6,"y":3,"v":2},
            {"id":3,"x":11,"y":3,"v":2},
            {"id":6,"x":9,"y":3,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],
            [1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1],
            [1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":7,
        "sprites":[
            {"id":7,"x":8,"y":5,"v":1},
            {"id":6,"x":6,"y":5,"v":1},
            {"id":3,"x":10,"y":5,"v":1},
            {"id":3,"x":2,"y":3,"v":2},
            {"id":3,"x":14,"y":4,"v":1},
            {"id":3,"x":14,"y":4,"v":1},
            {"id":3,"x":13,"y":3,"v":1},
            {"id":6,"x":14,"y":3,"v":1},
            {"id":6,"x":11,"y":10,"v":1},
            {"id":6,"x":5,"y":10,"v":1},
            {"id":6,"x":12,"y":9,"v":1},
            {"id":6,"x":2,"y":9,"v":1},
            {"id":6,"x":6,"y":9,"v":1},
            {"id":6,"x":7,"y":9,"v":1},
            {"id":6,"x":8,"y":9,"v":1},
            {"id":6,"x":9,"y":9,"v":1},
            {"id":6,"x":10,"y":9,"v":1},
            {"id":6,"x":13,"y":9,"v":1},
            {"id":3,"x":3,"y":9,"v":1},
            {"id":3,"x":3,"y":8,"v":11},
            {"id":6,"x":4,"y":9,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1],
            [1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":2,
        "sprites":[
            {"id":7,"x":12,"y":3,"v":1},
            {"id":4,"x":10,"y":3,"v":1},
            {"id":6,"x":7,"y":3,"v":1},
            {"id":6,"x":10,"y":7,"v":1},
            {"id":6,"x":8,"y":10,"v":1},
            {"id":4,"x":7,"y":7,"v":1},
            {"id":4,"x":10,"y":10,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":5,
        "sprites":[
            {"id":7,"x":2,"y":3,"v":1},
            {"id":6,"x":4,"y":3,"v":1},
            {"id":6,"x":5,"y":3,"v":1},
            {"id":4,"x":3,"y":3,"v":1},
            {"id":6,"x":14,"y":10,"v":1},
            {"id":6,"x":13,"y":10,"v":1},
            {"id":6,"x":11,"y":10,"v":1},
            {"id":6,"x":12,"y":10,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1],
            [1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1],
            [1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":6,
        "sprites":[
            {"id":7,"x":8,"y":4,"v":1},
            {"id":5,"x":6,"y":11,"v":1},
            {"id":6,"x":5,"y":9,"v":1},
            {"id":6,"x":8,"y":10,"v":1},
            {"id":4,"x":7,"y":4,"v":1}
        ]
    }, {
        "map":[
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "theme":1,
        "sprites":[
            {"id":7,"x":10,"y":6,"v":1},
            {"id":3,"fl":false,"fr":false,"x":10,"y":10,"v":1},
            {"id":3,"fl":false,"fr":false,"x":6,"y":9,"v":5},
            {"id":3,"fl":false,"fr":false,"x":7,"y":8,"v":1},
            {"id":3,"fl":false,"fr":false,"x":6,"y":7,"v":5},
            {"id":3,"fl":false,"fr":false,"x":6,"y":5,"v":5},
            {"id":6,"x":6,"y":10,"v":1},
            {"id":6,"x":10,"y":8,"v":1},
            {"id":6,"x":6,"y":6,"v":1},
            {"id":6,"x":10,"y":4,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1],
            [1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1],
            [1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1],
            [1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1],
            [1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":7,
        "sprites":[
            {"id":3,"x":11,"y":7,"v":1,"fl":true,"fr":true},
            {"id":3,"x":9,"y":7,"v":1,"fl":true,"fr":true},
            {"id":4,"x":10,"y":7,"v":1},
            {"id":6,"x":10,"y":8,"v":1},
            {"id":6,"x":4,"y":8,"v":1},
            {"id":7,"x":7,"y":5,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
            [1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1],
            [1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1],
            [1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1],
            [1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1],
            [1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1],
            [1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1],
            [1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":6,
        "sprites":[
            {"id":7,"x":4,"y":4,"v":1},
            {"id":6,"x":13,"y":7,"v":1},
            {"id":4,"x":7,"y":8,"v":1},
            {"id":6,"x":3,"y":8,"v":1},
            {"id":3,"x":6,"y":7,"v":1}
        ]
    }, {
        "map":[
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
            [0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0],
            [0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0],
            [0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0],
            [0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0],
            [0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0],
            [0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0],
            [0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0],
            [0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0],
            [0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0],
            [0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ],
        "theme":9,
        "sprites":[
            {"id":7,"x":9,"y":5,"v":1},
            {"id":3,"x":7,"y":6,"v":2},
            {"id":4,"x":7,"y":5,"v":1},
            {"id":6,"x":6,"y":7,"v":1},
            {"id":5,"x":7,"y":9,"v":true},
            {"id":5,"x":8,"y":10,"v":true},
            {"id":5,"x":9,"y":8,"v":true}
        ]
    }, {
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
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":6,
        "sprites":[
            {"id":7,"x":14,"y":10,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1],
            [1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1],
            [1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1],
            [1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1],
            [1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1],
            [1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":9,
        "sprites":[
            {"id":7,"x":10,"y":11,"v":1},
            {"id":6,"x":8,"y":1,"v":1},
            {"id":5,"x":4,"y":11,"v":1},
            {"id":6,"x":8,"y":5,"v":1}
        ]
    }
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

    frozenToIce() {
        const rightSprite = this.engine.spriteAt(this.xtile + 1, this.ytile);
        const leftSprite = this.engine.spriteAt(this.xtile - 1, this.ytile)
        return  !this.falling && ((rightSprite && rightSprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_ICE && rightSprite.frozenLeft) ||
            (leftSprite && leftSprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_ICE && leftSprite.frozenRight));
    }

    gravity() {
        if (!_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.d) && !this.frozenToIce()) {
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
            this.engine.spriteTypeAt(this.xtile - 1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_ICE &&
            this.engine.spriteAt(this.xtile - 1, this.ytile).frozenRight
        ) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile * this.width) - 7,
                this.ytile * this.height
            );
        }
        if (
            this.engine.spriteTypeAt(this.xtile+this.length, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_ICE &&
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
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RUN_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RUN_END, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW, 2);
                    } else {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_CROUCH_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_CROUCH_END, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_LEFT_ROW, 2);
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
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RUN_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RUN_END, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW, 2);
                    } else {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_CROUCH_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_CROUCH_END, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW, 2);
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
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_BIG_FALL_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_BIG_FALL_END, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW, 1);
                } else {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_BIG_FALL_START, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_BIG_FALL_END, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_RIGHT_ROW, 3);
                }
            } else {
                this.engine.sound.stop("falling");
                if (this.state === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_DOWN) {
                    this.engine.sound.play('fall');
                    this.engine.addSparks(this.xtile, this.ytile, '124, 238, 66', 10,  0.75);
                    this.engine.addSparks(this.xtile, this.ytile + 1, '122, 211, 255', 5,  1.25);
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
        this.counter += 1;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_FRAME_COUNT) {
            this.x += this.speed * this.dirrection;
        } else {
           this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_STAND, false);
        }
    }

    doTurn() {
        this.counter += 1;
        if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ANIM_FRAME_COUNT) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MOVE_STAND, false);
        }
    }

    doOutro() {
        this.counter += 1;
        if (this.counter % 10 === 0) {
            this.innerCounter += 1;
            if (this.innerCounter === 1) {
                this.engine.addSparks(this.xtile, this.ytile, '124, 238, 66', 15,  0.5);
            }
            if (this.innerCounter === 3) {
                this.engine.addSparks(this.xtile, this.ytile, '255, 135, 124', 20, 1);
            }
            if (this.innerCounter === 5) {
                this.engine.addSparks(this.xtile, this.ytile, '122, 211, 255', 25,  1.5);
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
            let fl, fr;
            if (sprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].OBJECT_ICE) {
                fl = sprite.frozenLeft;
                fr = sprite.frozenRight;
            }
            data.sprites.push({
                "id": sprite.id,
                "x": sprite.xtile,
                "y": sprite.ytile,
                "v": value,
                "fl": fl,
                "fr": fr
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
                    this.engine.addSprite(new _ice__WEBPACK_IMPORTED_MODULE_2__["Ice"](this.engine, sprite.x, sprite.y, parseInt(sprite.v), sprite.fl, sprite.fr));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlbmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9sZXZlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21ldGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RydWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9E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O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDBCQUEwQjtBQUN2Qyxh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O0FBQ3RDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSw0QkFBNEI7QUFDekMsYUFBYSw2QkFBNkI7QUFDMUMsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ3pDLHFCQUFxQjtBQUNyQixtQ0FBbUMsaURBQU07QUFDekMscUJBQXFCO0FBQ3JCLG1DQUFtQyxpREFBTTtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQUE7QUFBQTtBQUFzQzs7QUFFL0I7QUFDUDtBQUNBLFNBQVMsaURBQU07QUFDZjtBQUNBLFNBQVM7QUFDVCxTQUFTLGlEQUFNO0FBQ2Y7QUFDQSxTQUFTO0FBQ1QsU0FBUyxpREFBTTtBQUNmO0FBQ0EsU0FBUztBQUNULFNBQVMsaURBQU07QUFDZjtBQUNBLFNBQVM7QUFDVCxTQUFTLGlEQUFNO0FBQ2Y7QUFDQSxTQUFTO0FBQ1QsU0FBUyxpREFBTTtBQUNmO0FBQ0EsU0FBUztBQUNULFNBQVMsaURBQU07QUFDZjtBQUNBLFNBQVM7QUFDVCxTQUFTLGlEQUFNO0FBQ2Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZpcmVuaWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZmlyZW5pY2UuanNcIik7XG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbVNwcml0ZSBleHRlbmRzIFNwcml0ZSB7XHJcbiAgICAvKipcclxuICAgICAqIEFuaW1hdGVkIFNwcml0ZSwgaW5oZXJ0cyBmcm9tIFNwcml0ZS5cclxuICAgICAqIEFkZHMgZHJhd2luZyBvZiBwaWN0dXJlcyBpbiB0aGUgYm9keSBvZiBzcHJpdGVcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgICAgRW5naW5lIEVuZ2luZVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGltYWdlICAgRG9tIGltYWdlIG9iamVjdCAoaW1nIHNyYz0pXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHggICAgICBUaWxlIFggcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eSAgICAgIFRpbGUgWSBwb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoICAgV2lkdGggb2YgdGhlIHNwcml0ZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAgSGVpZ2h0IG9mIHRoZSBzcHJpdGVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRYIE9mZnNldCBYIG9mIGRyYXdpbmcgdGhlIHBpY3R1cmUgaW50byB0aGUgY2FudmFzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0WSBPZmZzZXQgWSBvZiBkcmF3aW5nIHRoZSBwaWN0dXJlIGludG8gdGhlIGNhbnZhc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0ICAgQW5pbWF0aW9uIGZyYW1lIHN0YXJ0XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kICAgICBBbmltYXRpb24gZnJhbWUgZW5kXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb3AgICBSZXBlYXQgYW5pbWF0aW9uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yIChpZCwgZW5naW5lLCBpbWFnZSwgdHgsIHR5LCB3aWR0aCwgaGVpZ2h0LCBvZmZzZXRYLCBvZmZzZXRZLCBzdGFydCwgZW5kLCBsb29wKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIGVuZ2luZSwgdHgsIHR5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldChpbWFnZSk7XHJcbiAgICAgICAgdGhpcy5hbmltTG9vcCA9IGxvb3A7XHJcbiAgICAgICAgdGhpcy5hbmltU3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5hbmltQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuYW5pbURlbGF5ID0gQ29uc3RzLkFOSU1fU1RBTkRBUkRfREVMQVk7XHJcbiAgICAgICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5hbmltUm93ID0gMDtcclxuICAgICAgICB0aGlzLm9mZnNldFggPSBvZmZzZXRYO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IG9mZnNldFk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBzcHJpdGUgYW5pbWF0aW9uIGZyYW1lc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFN0YXJ0IGZyYW1lIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgICBFbmQgZnJhbWUgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb29wICBJZiB0cnVlLCBhbmltYXRpb24gd2lsbCBsb29wXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93ICAgUm93IG9mIHRoZSBmcmFtZXMgaW4gdGhlIHNwcml0ZSBpbWFnZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IERlbGF5IGJldHdlZW4gZWFjaCBmcmFtZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvbmNlICBTZXRzIGFsbCB0aGUgbmV3IHZhbHVlcyBvbmx5IG9uZSB0aW1lLlxyXG4gICAgICovXHJcbiAgICBzZXRBbmltKHN0YXJ0LCBlbmQsIGxvb3AsIHJvdywgZGVsYXksIG9uY2UpIHtcclxuICAgICAgICBvbmNlID0gKHR5cGVvZiBvbmNlID09PSAndW5kZWZpbmVkJykgPyBmYWxzZSA6IG9uY2U7XHJcbiAgICAgICAgZGVsYXkgID0gKHR5cGVvZiBkZWxheSA9PT0gJ3VuZGVmaW5lZCcpID8gQ29uc3RzLkFOSU1fU1RBTkRBUkRfREVMQVkgOiBkZWxheTtcclxuICAgICAgICByb3cgPSAodHlwZW9mIHJvdyA9PT0gJ3VuZGVmaW5lZCcpID8gdGhpcy5hbmltUm93IDogcm93O1xyXG4gICAgICAgIGlmICghb25jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gc3RhcnQ7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbUxvb3AgPSBsb29wO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1EZWxheSA9IGRlbGF5O1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1Sb3cgPSByb3c7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbVN0YXJ0ICE9PSBzdGFydCB8fCB0aGlzLmFuaW1FbmQgIT09IGVuZCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltTG9vcCAhPT0gbG9vcCB8fCB0aGlzLmFuaW1Sb3cgIT09IHJvdylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltU3RhcnQgPSBzdGFydDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUVuZCA9IGVuZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbURlbGF5ID0gZGVsYXk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1Sb3cgPSByb3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIERyYXdzIHRoZSBmcmFtZSBvZiB0aGUgc3ByaXRlIGluIHRoZSBjYW52YXNcclxuICAgICAqL1xyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbUNvdW50ICogdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5hbmltUm93ICogdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICB0aGlzLnggKyB0aGlzLm9mZnNldFgsXHJcbiAgICAgICAgICAgIHRoaXMueSArIHRoaXMub2Zmc2V0WSxcclxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hbmltRGVsYXlDb3VudCsrID4gdGhpcy5hbmltRGVsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbUNvdW50ID4gdGhpcy5hbmltRW5kKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltTG9vcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gdGhpcy5hbmltU3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gdGhpcy5hbmltRW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbURlbGF5Q291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgQ29uc3RzID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBUSUxFX1dJRFRIOiAzMixcclxuICAgIE1PVkVfU1RBTkQ6IDAsXHJcbiAgICBNT1ZFX0xFRlQ6IDEsXHJcbiAgICBNT1ZFX1JJR0hUOiAyLFxyXG4gICAgTU9WRV9ET1dOOiAzLFxyXG4gICAgTU9WRV9VUDogNCxcclxuICAgIE1PVkVfVFVSTjogNSxcclxuICAgIE1PVkVfSUNFX01BS0U6IDYsXHJcbiAgICBNT1ZFX0lDRV9SRU1PVkU6IDcsXHJcbiAgICBNT1ZFX0lDRV9NT1ZJTkc6IDgsXHJcbiAgICBNT1ZFX0lDRV9DSEVDSzogOSxcclxuICAgIE1PVkVfUklQOiAxMCxcclxuICAgIE1PVkVfUFVTSDogOCxcclxuICAgIE1PVkVfSUNFX0ZBSUw6IDExLFxyXG4gICAgTU9WRV9PVVRSTzogMTIsXHJcbiAgICBNT1ZFX0lOVFJPOiAxMyxcclxuICAgIERJUl9MRUZUOiAtMSxcclxuICAgIERJUl9SSUdIVDogMSxcclxuICAgIEFOSU1fU1RBTkRBUkRfREVMQVk6IDIsXHJcbiAgICBBTklNX0ZSQU1FX0NPVU5UOiAxNixcclxuICAgIEFOSU1fTEVGVF9ST1c6IDEsXHJcbiAgICBBTklNX1JJR0hUX1JPVzogMCxcclxuICAgIEFOSU1fUlVOX1NUQVJUOiAwLFxyXG4gICAgQU5JTV9SVU5fRU5EOiAzLFxyXG4gICAgQU5JTV9TVEFORDogNCxcclxuICAgIEFOSU1fVFVSTl9TVEFSVDogNCxcclxuICAgIEFOSU1fVFVSTl9FTkQ6IDcsXHJcbiAgICBBTklNX0ZBTExfU1RBUlQ6IDgsXHJcbiAgICBBTklNX0ZBTExfRU5EOiA5LFxyXG4gICAgQU5JTV9CSUdfRkFMTF9TVEFSVDogMTAsXHJcbiAgICBBTklNX0JJR19GQUxMX0VORDogMTEsXHJcbiAgICBBTklNX1BVU0hfU1RBUlQ6IDEyLFxyXG4gICAgQU5JTV9QVVNIX0VORDogMTMsXHJcbiAgICBBTklNX0pVTVBfU1RBUlQ6IDE0LFxyXG4gICAgQU5JTV9KVU1QX0VORDogMTUsXHJcbiAgICBBTklNX1NUQU5EX1NUQVJUOiAxNixcclxuICAgIEFOSU1fU1RBTkRfRU5EOiAxNyxcclxuICAgIEFOSU1fSUNFX1NUQVJUOiAxOCxcclxuICAgIEFOSU1fSUNFX0VORDogMTksXHJcbiAgICBBTklNX0NST1VDSF9TVEFSVDogMjAsXHJcbiAgICBBTklNX0NST1VDSF9FTkQ6IDIyLFxyXG4gICAgQU5JTV9SSVBfU1RBUlQ6IDIzLFxyXG4gICAgQU5JTV9SSVBfRU5EOiAyNCxcclxuICAgIEFOSU1fU0xFRVBfU1RBUlQ6IDI1LFxyXG4gICAgQU5JTV9TTEVFUF9FTkQ6IDI2LFxyXG4gICAgVElMRV9CQUNLR1JPVU5EOiAwLFxyXG4gICAgVElMRV9CT1RIOiAzMixcclxuICAgIFRJTEVfTEVGVDogNjQsXHJcbiAgICBUSUxFX01JRERMRTogOTYsXHJcbiAgICBUSUxFX1JJR0hUOiAxMjgsXHJcbiAgICBPQkpFQ1RfT1VUOiAtMSxcclxuICAgIE9CSkVDVF9CQUNLR1JPVU5EOiAwLFxyXG4gICAgT0JKRUNUX1dBTEw6IDEsXHJcbiAgICBPQkpFQ1RfSUNFOiAzLFxyXG4gICAgT0JKRUNUX01FVEFMOiA0LFxyXG4gICAgT0JKRUNUX0pBUjogNSxcclxuICAgIE9CSkVDVF9GSVJFOiA2LFxyXG4gICAgT0JKRUNUX1BMQVlFUjogNyxcclxuICAgIEdBTUVfU1RBVEVfUExBWTogMSxcclxuICAgIEdBTUVfU1RBVEVfSU5UUk86IDJcclxufSk7XHJcbiIsImltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9rZXlib2FyZCc7XHJcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSAnLi9zb3VuZCc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcbmltcG9ydCB7IEljZSB9IGZyb20gJy4vaWNlJztcclxuaW1wb3J0IHsgU3BhcmtzIH0gZnJvbSAnLi9zZngnO1xyXG5pbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG4vKipcclxuICogRW5naW5lIExvb3BcclxuICovXHJcbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgcmVzb3VyY2VzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jd2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgICB0aGlzLnJlc291cmNlcyA9IHJlc291cmNlcztcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzID0gW107XHJcbiAgICAgICAgdGhpcy5zZnhzID0gW107XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB7fTtcclxuICAgICAgICB0aGlzLmxldmVsID0gMDtcclxuICAgICAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKCk7XHJcbiAgICAgICAgdGhpcy5zb3VuZCA9IG5ldyBTb3VuZChyZXNvdXJjZXMpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgU2NlbmUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID0gMDtcclxuICAgICAgICBjb25zdCBsZXZlbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsZXZlbCcpO1xyXG4gICAgICAgIGlmIChsZXZlbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2VuZS5sb2FkKHRoaXMubGV2ZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsMCx0aGlzLmN3aWR0aCx0aGlzLmNoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMubWFwLmRyYXcoKTtcclxuICAgICAgICAvLyByZXZlcnNlIGxvb3AsIHBsYXllciBkcmF3cyBsYXN0XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc3ByaXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZXNbaV0uZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Z4cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLnNmeHNbaV0uZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb2xsaXNpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZmlyZXMgPSB0aGlzLnNwcml0ZXMuZmlsdGVyKHNwcml0ZSA9PiBzcHJpdGUuaWQgPT09IENvbnN0cy5PQkpFQ1RfRklSRSk7XHJcbiAgICAgICAgaWYgKCFmaXJlcy5sZW5ndGggJiYgIXRoaXMuZWRpdG9yICYmIHRoaXMucGxheWVyLnN0YXRlICE9PSBDb25zdHMuTU9WRV9PVVRSTykge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5vdXRybygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZXh0TGV2ZWwoKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCsrO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsZXZlbCcsIHRoaXMubGV2ZWwpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlc1tpXS5lbmdpbmVNb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZnhzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Z4c1tpXS5lbmdpbmVNb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzcHJpdGVzTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXSAmJiB0aGlzLnNwcml0ZXNbaV0uaWQgIT09IENvbnN0cy5PQkpFQ1RfUExBWUVSICYmIHRoaXMuc3ByaXRlc1tpXS5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZXNNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3ByaXRlc01vdmluZykge1xyXG4gICAgICAgICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNoZWNrIGlmIG5vIHNwcml0ZXMgaGF2ZSBtb3ZlZCBmb3IgMiB0dXJuc1xyXG4gICAgICAgIGlmICghc3ByaXRlc01vdmluZyAmJiB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID0gMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMua2V5Ym9hcmQudXApIHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5wbGF5ZXIuanVtcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleWJvYXJkLmRvd24gfHwgdGhpcy5rZXlib2FyZC5hY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmljZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleWJvYXJkLmxlZnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxlZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlib2FyZC5yaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlib2FyZC5lbnRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZC5zdG9wKCdkYW5nZXInKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmQuZW50ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbGxpc2lvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGljZUF0KHR4LCB0eSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaXNTcHJpdGVBdCh0eCwgdHkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJY2VCbG9jayh0eCwgdHksIGZyb3plbkxlZnQsIGZyb3plblJpZ2h0KSB7XHJcbiAgICAgICAgbGV0IGZvdW5kSWNlQmxvY2tzID0gWyBdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PQkpFQ1RfSUNFICYmIHRoaXMuc3ByaXRlc1tpXS55dGlsZSA9PT0gdHkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpY2UgPSB0aGlzLnNwcml0ZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaWNlLnh0aWxlIC0gMSA9PT0gdHggfHwgaWNlLnh0aWxlICsgaWNlLmxlbmd0aCA9PT0gdHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZEljZUJsb2Nrcy5wdXNoKGljZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZvdW5kSWNlQmxvY2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZXMucHVzaChuZXcgSWNlKHRoaXMsIHR4LCB0eSwgMSwgZnJvemVuTGVmdCwgZnJvemVuUmlnaHQpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZvdW5kSWNlQmxvY2tzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICBmb3VuZEljZUJsb2Nrc1swXS5hZGRCbG9jayh0eCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGZvdW5kSWNlQmxvY2tzWzBdLnh0aWxlIDw9IGZvdW5kSWNlQmxvY2tzWzFdLnh0aWxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpvaW5JY2VCbG9ja3MoZm91bmRJY2VCbG9ja3NbMF0sIGZvdW5kSWNlQmxvY2tzWzFdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuam9pbkljZUJsb2Nrcyhmb3VuZEljZUJsb2Nrc1sxXSwgZm91bmRJY2VCbG9ja3NbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGpvaW5JY2VCbG9ja3MoaWNlYmxvY2tBLGljZWJsb2NrQikge1xyXG4gICAgICAgIGxldCB0eCA9IGljZWJsb2NrQS54dGlsZTtcclxuICAgICAgICBsZXQgdHkgPSBpY2VibG9ja0EueXRpbGU7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IGljZWJsb2NrQS5sZW5ndGggKyBpY2VibG9ja0IubGVuZ3RoICsgMTtcclxuICAgICAgICB0aGlzLmFkZFNwcml0ZShuZXcgSWNlKHRoaXMsIHR4LCB0eSwgbGVuZ3RoLCBpY2VibG9ja0EuZnJvemVuTGVmdCwgaWNlYmxvY2tCLmZyb3plblJpZ2h0KSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTcHJpdGUoaWNlYmxvY2tBKTtcclxuICAgICAgICB0aGlzLnJlbW92ZVNwcml0ZShpY2VibG9ja0IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUljZUJsb2NrKHR4LCB0eSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PQkpFQ1RfSUNFICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZXNbaV0ueXRpbGUgPT09IHR5ICYmXHJcbiAgICAgICAgICAgICAgICB0eCA+PSB0aGlzLnNwcml0ZXNbaV0ueHRpbGUgJiZcclxuICAgICAgICAgICAgICAgIHR4IDwgdGhpcy5zcHJpdGVzW2ldLnh0aWxlICsgdGhpcy5zcHJpdGVzW2ldLmxlbmd0aClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5yZW1vdmVCbG9jayh0eCkgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlcy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVGaXJlKHR4LCB0eSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICh0aGlzLnNwcml0ZXNbaV0ueXRpbGUgPT09IHR5KSAmJlxyXG4gICAgICAgICAgICAgICAgKHR4ID09PSB0aGlzLnNwcml0ZXNbaV0ueHRpbGUpICYmXHJcbiAgICAgICAgICAgICAgICAodGhpcy5zcHJpdGVzW2ldLmlkID09PSBDb25zdHMuT0JKRUNUX0ZJUkUpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVzLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFNwcml0ZShzcHJpdGUpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZXMucHVzaChzcHJpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNwcml0ZShzcHJpdGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldID09PSBzcHJpdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlcy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTcGFya3MoeHRpbGUsIHl0aWxlLCBjb2xvciwgcXVhbnRpdHksIGludGVuc2l0eSkge1xyXG4gICAgICAgIHRoaXMuc2Z4cy5wdXNoKG5ldyBTcGFya3ModGhpcywgeHRpbGUsIHl0aWxlLCBjb2xvciwgcXVhbnRpdHksIGludGVuc2l0eSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNmeChzcHJpdGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Z4cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZnhzW2ldID09PSBzcHJpdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Z4cy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzcHJpdGVUeXBlQXQodHgsIHR5LCBleGNsdWRlSWQpIHtcclxuICAgICAgICBleGNsdWRlSWQgPSAodHlwZW9mIGV4Y2x1ZGVJZCA9PT0gJ3VuZGVmaW5lZCcpID8gQ29uc3RzLk9CSkVDVF9PVVQgOiBleGNsdWRlSWQ7XHJcbiAgICAgICAgaWYgKHR4IDwgMCB8fCB0eSA8IDAgfHwgdHggPiB0aGlzLm1hcC53aWR0aCB8fCB0eSA+IHRoaXMubWFwLmhlaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ29uc3RzLk9CSkVDVF9PVVQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tYXAubWFwW3R5XVt0eF0pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaXNTcHJpdGVBdCh0eCwgdHkpICYmIHRoaXMuc3ByaXRlc1tpXS5pZCAhPT0gZXhjbHVkZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tpXS5pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5tYXBbdHldW3R4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIENvbnN0cy5PQkpFQ1RfQkFDS0dST1VORDtcclxuICAgIH1cclxuXHJcbiAgICBzcHJpdGVBdCh0eCwgdHkpIHtcclxuICAgICAgICBpZiAoIXRoaXMubWFwLm1hcFt0eV1bdHhdKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlzU3ByaXRlQXQodHgsIHR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaXJlIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcclxuICAgICAgICBzdXBlcihDb25zdHMuT0JKRUNUX0ZJUkUsIGVuZ2luZSwgJ2ltZ19maXJlJyxcclxuICAgICAgICAgICAgdHgsIHR5LCBDb25zdHMuVElMRV9XSURUSCwgQ29uc3RzLlRJTEVfV0lEVEgsIDAsIDAsIDAsIDMsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0RPV046XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvRG93bigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpc2lvbnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCBDb25zdHMuT0JKRUNUX0ZJUkUpID09PSBDb25zdHMuT0JKRUNUX0lDRSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVGaXJlKHRoaXMueHRpbGUsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVJY2VCbG9jayh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcyNTUsIDEyNiwgMTk4JywgMTUsIDAuNSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMTIsIDI1NScsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCBDb25zdHMuT0JKRUNUX0ZJUkUpID09PSBDb25zdHMuT0JKRUNUX01FVEFMKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ZpcmUtb2ZmJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUZpcmUodGhpcy54dGlsZSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMjU1LCAyMjIsIDEyNycsIDE1LCAwLjUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzQxLCA0MiwgOTAnLCAxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBncmF2aXR5KCkge1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9ET1dOLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBkb0Rvd24oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVElMRV9XSURUSCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgRmlyZSB9IGZyb20gJy4vZmlyZSc7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWUnO1xyXG5pbXBvcnQgeyBKYXIgfSBmcm9tICcuL2phcic7XHJcbmltcG9ydCB7IE1ldGFsIH0gZnJvbSAnLi9tZXRhbCc7XHJcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4vcmVzb3VyY2VzJztcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzb3VyY2VzID0gbmV3IFJlc291cmNlcygpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAndGlsZW1hcCcsICdpbWFnZXMvdGlsZW1hcC5wbmcnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19pY2UnLCAnaW1hZ2VzL2ljZS5wbmcnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19qYXInLCAnaW1hZ2VzL2phci5wbmcnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19maXJlJywgJ2ltYWdlcy9maXJlLnBuZycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX2RvbmEnLCAnaW1hZ2VzL2RvbmEucG5nJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfaW50cm8nLCAnaW1hZ2VzL2ludHJvLnBuZycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX3N0YXJ0JywgJ2ltYWdlcy9zdGFydC5wbmcnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19tZXRhbCcsICdpbWFnZXMvbWV0YWwucG5nJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdmcm9zdCcsICdpbWFnZXMvZnJvemVuLnBuZycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWljZS1wdXNoJywgJ3NvdW5kcy9zZngtaWNlLXB1c2gubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZmlyZS1vZmYnLCAnc291bmRzL3NmeC1maXJlLW9mZi5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1mYWxsaW5nJywgJ3NvdW5kcy9zZngtZmFsbGluZy5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1uZXctaWNlJywgJ3NvdW5kcy9zZngtbmV3LWljZS5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1jbGltYicsICdzb3VuZHMvc2Z4LWNsaW1iLm1wMycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWljZS1jb2xsaXNpb24nLCAnc291bmRzL3NmeC1pY2UtY29sbGlzaW9uLm1wMycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LXN0YWdlLWVudGVyJywgJ3NvdW5kcy9zZngtc3RhZ2UtZW50ZXIubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZGFuZ2VyJywgJ3NvdW5kcy9zZngtZGFuZ2VyLm1wMycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWljZS1yZW1vdmUnLCAnc291bmRzL3NmeC1pY2UtcmVtb3ZlLm1wMycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LXN0YXRlLWxlYXZlJywgJ3NvdW5kcy9zZngtc3RhdGUtbGVhdmUubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZGlzYWJsZWQnLCAnc291bmRzL3NmeC1kaXNhYmxlZC5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1mYWxsJywgJ3NvdW5kcy9zZngtZmFsbC5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1tdXNpYy1zcGFya3MnLCAnbXVzaWMvc3BhcmtzLm1wMycpO1xyXG5cclxuICAgIHJlc291cmNlcy5yZWFkeSgoKSA9PiB7XHJcbiAgICAgICAgU3RhcnRHYW1lKHJlc291cmNlcyk7XHJcbiAgICAgICAgQ2hlY2tFZGl0b3IoKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFN0YXJ0R2FtZShyZXNvdXJjZXMpIHtcclxuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgcmVzb3VyY2VzKTtcclxuICAgIHdpbmRvdy5nYW1lID0gZ2FtZTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbC1zZWxlY3RvcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSAnLTEnKSB7XHJcbiAgICAgICAgICAgIGdhbWUuZW5naW5lLmxldmVsID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcclxuICAgICAgICAgICAgZ2FtZS5lbmdpbmUuc2NlbmUubG9hZChnYW1lLmVuZ2luZS5sZXZlbCk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ2hlY2tFZGl0b3IoKSB7XHJcbiAgICBpZiAod2luZG93LkZJUkVOSUNFX0VESVRPUl9NT0RFKSB7XHJcbiAgICAgICAgZ2FtZS5lbmdpbmUuc291bmQubXVzaWNPbiA9IGZhbHNlO1xyXG5cdFx0Z2FtZS5lbmdpbmUuc291bmQuc291bmRPbiA9IGZhbHNlO1xyXG4gICAgICAgIGdhbWUuc3RhdGUgPSBDb25zdHMuR0FNRV9TVEFURV9QTEFZO1xyXG4gICAgICAgIGdhbWUuZW5naW5lLmVkaXRvciA9IHRydWU7XHJcbiAgICAgICAgZ2FtZS5lbmdpbmUua2V5Ym9hcmQuaW50cm8gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeHRpbGUgPSBNYXRoLmZsb29yKGUub2Zmc2V0WCAvIDMyKTtcclxuICAgICAgICAgICAgY29uc3QgeXRpbGUgPSBNYXRoLmZsb29yKGUub2Zmc2V0WSAvIDMyKTtcclxuICAgICAgICAgICAgaWYgKHRvb2wgPCAyKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5tYXAubWFwW3l0aWxlXVt4dGlsZV0gPSB0b29sO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0b29sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT0JKRUNUX1BMQVlFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUucGxheWVyLnggPSB4dGlsZSAqIDMyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5wbGF5ZXIueSA9IHl0aWxlICogMzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9JQ0U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuZW5naW5lLmFkZEljZUJsb2NrKHh0aWxlLCB5dGlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9NRVRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBNZXRhbChnYW1lLmVuZ2luZSwgeHRpbGUsIHl0aWxlLCAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9GSVJFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRTcHJpdGUobmV3IEZpcmUoZ2FtZS5lbmdpbmUsIHh0aWxlLCB5dGlsZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PQkpFQ1RfSkFSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRTcHJpdGUobmV3IEphcihnYW1lLmVuZ2luZSwgeHRpbGUsIHl0aWxlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS1zZWxlY3RvcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGdhbWUuZW5naW5lLm1hcC50aGVtZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmJsdXIoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsLXNlbGVjdG9yJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSAnLTEnKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5sZXZlbCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5zY2VuZS5sb2FkKGdhbWUuZW5naW5lLmxldmVsKTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmJsdXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXNhdmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R4dC1sZXZlbCcpLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZ2FtZS5lbmdpbmUuc2NlbmUuc2F2ZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xyXG5pbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tICcuL2VuZ2luZSc7XHJcbmltcG9ydCB7IGxldmVscyB9IGZyb20gJy4vbGV2ZWxzJztcclxuXHJcbi8qKlxyXG4gKiBHYW1lIExvb3BcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHsqfSBjYW52YXZzICAgVGhlIGNhbnZhcyBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0geyp9IHJlc291cmNlcyAgR2FtZSByZXNvdXJjZXNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzLCByZXNvdXJjZXMpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gQ29uc3RzLkdBTUVfU1RBVEVfSU5UUk87XHJcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgRW5naW5lKGNhbnZhcywgcmVzb3VyY2VzKTtcclxuICAgICAgICB0aGlzLmxldmVscyA9IGxldmVscztcclxuICAgICAgICB0aGlzLmNyZWF0ZUludHJvKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lbG9vcCA9IHRoaXMuZ2FtZWxvb3BfLmJpbmQodGhpcyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG4gICAgICAgIHRoaXMuZ2FtZWxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBnYW1lbG9vcF8oKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLkdBTUVfU1RBVEVfSU5UUk86XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvSW50cm8oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5HQU1FX1NUQVRFX1BMQVk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVsb29wKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJbnRybygpIHtcclxuICAgICAgICB0aGlzLmludHJvID0gbmV3IEFuaW1TcHJpdGUobnVsbCwgdGhpcy5lbmdpbmUsICdpbWdfaW50cm8nLCAwLCAwLCA1NDQsIDQxNiwgMCwgMCwgMCwgMCwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgQW5pbVNwcml0ZShudWxsLCB0aGlzLmVuZ2luZSwgJ2ltZ19zdGFydCcsIDcsIDExLCAxNDAsIDI2LCAtMTAsIDAsIDAsIDEsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQuYW5pbURlbGF5ID0gQ29uc3RzLkFOSU1fU1RBTkRBUkRfREVMQVkgKiAyMDtcclxuICAgIH1cclxuXHJcbiAgICBkb0ludHJvKCkge1xyXG4gICAgICAgIHRoaXMuaW50cm8uZHJhdygpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQuZHJhdygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmdpbmUua2V5Ym9hcmQuZW50ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUua2V5Ym9hcmQuZW50ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HQU1FX1NUQVRFX1BMQVk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnNvdW5kcmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEljZSBleHRlbmRzIEFuaW1TcHJpdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5LCBsZW5ndGgsIGZyb3plbkxlZnQsIGZyb3plblJpZ2h0KSB7XHJcbiAgICAgICAgc3VwZXIoQ29uc3RzLk9CSkVDVF9JQ0UsIGVuZ2luZSwgJ2ltZ19pY2UnLFxyXG4gICAgICAgICAgICB0eCwgdHksIENvbnN0cy5USUxFX1dJRFRILCBDb25zdHMuVElMRV9XSURUSCwgMCwgMCwgMCwgMSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy54dGlsZSA9IHR4O1xyXG4gICAgICAgIHRoaXMueXRpbGUgPSB0eTtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICB0aGlzLmFuaW1FbmQgPSAxO1xyXG4gICAgICAgIHRoaXMuYW5pbURlbGF5ID0gOTtcclxuICAgICAgICB0aGlzLmFuaW1Sb3cgPSAwO1xyXG4gICAgICAgIHRoaXMuZGlycmVjdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBmcm96ZW5MZWZ0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLmZyb3plbkxlZnQgPSBmcm96ZW5MZWZ0O1xyXG4gICAgICAgICAgICB0aGlzLmZyb3plblJpZ2h0ID0gZnJvemVuUmlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0ZyZWV6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRCbG9jayh0eCkge1xyXG4gICAgICAgIGNvbnN0IHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodHggLSAxLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBjb25zdCBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGggKyAxLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBpZiAodHggPiB0aGlzLnh0aWxlKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGlsZSh0eCArIDEsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT0JKRUNUX1dBTEwgfHxcclxuICAgICAgICAgICAgICAgIHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID09PSBDb25zdHMuT0JKRUNUX01FVEFMIHx8XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9CSkVDVF9KQVJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyb3plblJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR4IDwgdGhpcy54dGlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnh0aWxlID0gdHg7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGlsZSh0eCAtIDEsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT0JKRUNUX1dBTEwgfHxcclxuICAgICAgICAgICAgICAgIHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPT09IENvbnN0cy5PQkpFQ1RfTUVUQUwgfHxcclxuICAgICAgICAgICAgICAgIHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPT09IENvbnN0cy5PQkpFQ1RfSkFSXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm96ZW5MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnggPSB0aGlzLnh0aWxlICogQ29uc3RzLlRJTEVfV0lEVEg7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Nwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgICAgIGlmICh0aGlzLnl0aWxlID09PSB0eSkge1xyXG4gICAgICAgICAgICBpZiAodHggPj0gdGhpcy54dGlsZSAmJiB0eCA8ICh0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJsb2NrKHR4KSB7XHJcbiAgICAgICAgaWYgKHR4ID09PSB0aGlzLnh0aWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMueHRpbGUgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy54ICs9IENvbnN0cy5USUxFX1dJRFRIO1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCAtPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrVW5mcmVlemVMZWZ0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eCA9PT0gdGhpcy54dGlsZSArIHRoaXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCAtPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrVW5mcmVlemVSaWdodCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShuZXcgSWNlKHRoaXMuZW5naW5lLCB0eCArIDEsIHRoaXMueXRpbGUsIHRoaXMueHRpbGUgKyB0aGlzLmxlbmd0aCAtIHR4IC0gMSwgZmFsc2UsIHRoaXMuZnJvemVuUmlnaHQpKTtcclxuICAgICAgICAgICAgdGhpcy5sZW5ndGggPSB0eCAtIHRoaXMueHRpbGU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZVJpZ2h0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjYW5HbGlkZShkaXIpIHtcclxuICAgICAgICBpZiAodGhpcy5sZW5ndGggIT09IDEgfHwgdGhpcy5mcm96ZW5MZWZ0IHx8IHRoaXMuZnJvemVuUmlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlyID09PSBDb25zdHMuRElSX0xFRlQgICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpciA9PT0gQ29uc3RzLkRJUl9SSUdIVCAmJiBUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZyb3plbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mcm96ZW5MZWZ0IHx8IHRoaXMuZnJvemVuUmlnaHQ7XHJcbiAgICB9XHJcbiAgICBncmF2aXR5KCkge1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkgJiYgIXRoaXMuZnJvemVuKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9ET1dOLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZhbGxpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpc2lvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuR2xpZGUodGhpcy5kaXJyZWN0aW9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtY29sbGlzaW9uJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRpbGVfZG93biA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUraSwgdGhpcy55dGlsZSsxKTtcclxuICAgICAgICAgICAgaWYgKHRpbGVfZG93biAmJiB0aWxlX2Rvd24gIT09IENvbnN0cy5PQkpFQ1RfRklSRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb29ybmVycy5kID0gdGlsZV9kb3duO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvb3JuZXJzLnIgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGgsIHRoaXMueXRpbGUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mcm96ZW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrVW5mcmVlemVMZWZ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZVJpZ2h0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0lDRV9NT1ZJTkc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9JQ0VfQ0hFQ0s6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0RPV046XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvRG93bigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1EZWxheUNvdW50KysgPiB0aGlzLmFuaW1EZWxheSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1EZWxheUNvdW50ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5hbmltUm93ID0gdGhpcy5hbmltUm93ID09PSAwID8gMSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgQ29uc3RzLlRJTEVfV0lEVEgqdGhpcy5hbmltUm93LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMSpDb25zdHMuVElMRV9XSURUSCwgQ29uc3RzLlRJTEVfV0lEVEgqdGhpcy5hbmltUm93LFxyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMypDb25zdHMuVElMRV9XSURUSCwgQ29uc3RzLlRJTEVfV0lEVEgqdGhpcy5hbmltUm93LFxyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICB0aGlzLngrQ29uc3RzLlRJTEVfV0lEVEgsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAxKkNvbnN0cy5USUxFX1dJRFRILCBDb25zdHMuVElMRV9XSURUSCp0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAzKkNvbnN0cy5USUxFX1dJRFRILCBDb25zdHMuVElMRV9XSURUSCp0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgIHRoaXMueCtDb25zdHMuVElMRV9XSURUSCoodGhpcy5sZW5ndGgtMSksIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgIGkgPCB0aGlzLmxlbmd0aC0xOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAyKkNvbnN0cy5USUxFX1dJRFRILCBDb25zdHMuVElMRV9XSURUSCp0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICB0aGlzLngrKENvbnN0cy5USUxFX1dJRFRIKmkpLCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5mcm96ZW5MZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoJ2Zyb3N0JyksXHJcbiAgICAgICAgICAgICAgICAodGhpcy54dGlsZSAqIHRoaXMud2lkdGgpIC0gNyxcclxuICAgICAgICAgICAgICAgIHRoaXMueXRpbGUgKiB0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5mcm96ZW5SaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLFxyXG4gICAgICAgICAgICAgICAgKHRoaXMueHRpbGUgKyB0aGlzLmxlbmd0aCkgKiB0aGlzLndpZHRoIC0gNyxcclxuICAgICAgICAgICAgICAgIHRoaXMueXRpbGUgKiB0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsaWRlKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRJTEVfV0lEVEgpIHtcclxuICAgICAgICAgICAgdGhpcy54ICs9IDQgKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvRG93bigpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gNDtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5USUxFX1dJRFRIKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSA0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5ncmF2aXR5KCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdXNoKGRpcikge1xyXG4gICAgICAgIHRoaXMuZGlycmVjdGlvbiA9ICh0eXBlb2YgZGlyID09PSAndW5kZWZpbmVkJykgPyB0aGlzLmRpcnJlY3Rpb24gOiBkaXI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxpc2lvbigpICYmICF0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0lDRV9NT1ZJTkcsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tGcmVlemUoKSB7XHJcbiAgICAgICAgY29uc3QgbGVmdFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlIC0gMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgY29uc3QgcmlnaHRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSArIHRoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VGlsZSh0aGlzLnh0aWxlIC0gMSwgdGhpcy55dGlsZSkgPT09IENvbnN0cy5PQkpFQ1RfV0FMTCB8fFxyXG4gICAgICAgICAgICBsZWZ0U3ByaXRlID09PSBDb25zdHMuT0JKRUNUX01FVEFMIHx8XHJcbiAgICAgICAgICAgIGxlZnRTcHJpdGUgPT09IENvbnN0cy5PQkpFQ1RfSkFSXHJcbiAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmZyb3plbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VGlsZSh0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGgsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT0JKRUNUX1dBTEwgfHxcclxuICAgICAgICAgICAgcmlnaHRTcHJpdGUgPT09IENvbnN0cy5PQkpFQ1RfTUVUQUwgfHxcclxuICAgICAgICAgICAgcmlnaHRTcHJpdGUgPT09IENvbnN0cy5PQkpFQ1RfSkFSXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tVbmZyZWV6ZUxlZnQoKSB7XHJcbiAgICAgICAgY29uc3QgbGVmdFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlIC0gMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmZyb3plbkxlZnQgJiZcclxuICAgICAgICAgICAgdGhpcy5nZXRUaWxlKHRoaXMueHRpbGUgLSAxLCB0aGlzLnl0aWxlKSAhPT0gQ29uc3RzLk9CSkVDVF9XQUxMICYmXHJcbiAgICAgICAgICAgIGxlZnRTcHJpdGUgIT09IENvbnN0cy5PQkpFQ1RfTUVUQUwgJiZcclxuICAgICAgICAgICAgbGVmdFNwcml0ZSAhPT0gQ29uc3RzLk9CSkVDVF9KQVJcclxuICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja1VuZnJlZXplUmlnaHQoKSB7XHJcbiAgICAgICAgY29uc3QgcmlnaHRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSArIHRoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuUmlnaHQgJiZcclxuICAgICAgICAgICAgdGhpcy5nZXRUaWxlKHRoaXMueHRpbGUgKyB0aGlzLmxlbmd0aCwgdGhpcy55dGlsZSkgIT09IENvbnN0cy5PQkpFQ1RfV0FMTCAmJlxyXG4gICAgICAgICAgICByaWdodFNwcml0ZSAhPT0gQ29uc3RzLk9CSkVDVF9NRVRBTCAmJlxyXG4gICAgICAgICAgICByaWdodFNwcml0ZSAhPT0gQ29uc3RzLk9CSkVDVF9KQVJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5mcm96ZW5SaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSmFyIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcclxuICAgICAgICBzdXBlcihDb25zdHMuT0JKRUNUX0pBUiwgZW5naW5lLCAnaW1nX2phcicsXHJcbiAgICAgICAgICAgIHR4LCB0eSwgQ29uc3RzLlRJTEVfV0lEVEgsIENvbnN0cy5USUxFX1dJRFRILCAwLCAwLCAwLCAzLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5BTklNX1NUQU5EQVJEX0RFTEFZICogMjtcclxuICAgICAgICB0aGlzLm9uRmlyZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYW5pbVJvdyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfRE9XTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9Eb3duKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9ucygpIHtcclxuICAgICAgICBpZiAoIXRoaXMub25GaXJlICYmIHRoaXMuY29vcm5lcnMudSA9PT0gQ29uc3RzLk9CSkVDVF9GSVJFKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHVybk9uRmlyZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVGaXJlKHRoaXMueHRpbGUsIHRoaXMueXRpbGUgLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub25GaXJlICYmIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSkgPT09IENvbnN0cy5PQkpFQ1RfSUNFKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVsdEljZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBncmF2aXR5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb29ybmVycy5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfRE9XTiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZG9Eb3duKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRJTEVfV0lEVEgpIHtcclxuICAgICAgICAgICAgdGhpcy55ICs9IDQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0dXJuT25GaXJlKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbVJvdyA9IDE7XHJcbiAgICAgICAgdGhpcy5vbkZpcmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSwgJzI1NSwgODgsIDMzJywgMzApO1xyXG4gICAgfVxyXG5cclxuICAgIG1lbHRJY2UoKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlSWNlQmxvY2sodGhpcy54dGlsZSwgdGhpcy55dGlsZSAtIDEpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSwgJzI1NSwgODgsIDMzJywgMzApO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSwgJzMzLCA4OCwgMjU1JywgNDApO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUgLSAxLCB0aGlzLnl0aWxlKSA9PT0gQ29uc3RzLk9CSkVDVF9JQ0UgJiZcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54dGlsZSAtIDEsIHRoaXMueXRpbGUpLmZyb3plblJpZ2h0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoJ2Zyb3N0JyksXHJcbiAgICAgICAgICAgICAgICAodGhpcy54dGlsZSAqIHRoaXMud2lkdGgpIC0gNyxcclxuICAgICAgICAgICAgICAgIHRoaXMueXRpbGUgKiB0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlK3RoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKSA9PT0gQ29uc3RzLk9CSkVDVF9JQ0UgJiZcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54dGlsZSt0aGlzLmxlbmd0aCwgdGhpcy55dGlsZSkuZnJvemVuTGVmdFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLFxyXG4gICAgICAgICAgICAgICAgKHRoaXMueHRpbGUgKyB0aGlzLmxlbmd0aCkgKiB0aGlzLndpZHRoIC0gNyxcclxuICAgICAgICAgICAgICAgIHRoaXMueXRpbGUgKiB0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogS2V5Ym9hcmQgcHJlc3MgZW5naW5lXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMua2V5ZG93biA9IHRoaXMua2V5ZG93bl8uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmtleXVwID0gdGhpcy5rZXl1cF8uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmludHJvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleWRvd24sIGZhbHNlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleXVwLCBmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnRybykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbnRybyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fYWN0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZG93biA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9hY3Rpb24nKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCAoKSA9PiB0aGlzLmRvd24gPSBmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9sZWZ0JykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9sZWZ0JykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgKCkgPT4gdGhpcy5sZWZ0ID0gZmFsc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fcmlnaHQnKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX3JpZ2h0JykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgKCkgPT4gdGhpcy5yaWdodCA9IGZhbHNlKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX3NlbGVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsICgpID0+IHRoaXMuZW50ZXIgPSB0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAga2V5ZG93bl8oZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzc6IC8vIExlZnRcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzODogLy8gVXBcclxuICAgICAgICAgICAgICAgIHRoaXMudXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDA6IC8vIERvd25cclxuICAgICAgICAgICAgY2FzZSAzMjogLy8gU3BhY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEzOiAvL0VudGVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAga2V5dXBfKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDM3OiAvLyBMZWZ0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM4OiAvLyBVcFxyXG4gICAgICAgICAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDogLy8gRG93blxyXG4gICAgICAgICAgICBjYXNlIDMyOiAvLyBTcGFjZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTM6IC8vRW50ZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBsZXZlbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6MCxcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoxMSxcInlcIjo0LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo2LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo0LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6OCxcInlcIjo0LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjoxMCxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDEsMCwxLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjoxLFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjMsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjQsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjUsXCJ2XCI6NH0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMixcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEyLFwieVwiOjYsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMyxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjExLFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo2LFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMSwxLDEsMSwxLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjIsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MTQsXCJ5XCI6NixcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjQsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo5LFwieVwiOjYsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo5LFwieVwiOjUsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo2LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6NSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NixcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjowLFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjgsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEyLFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMyxcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6OCxcInZcIjo1fSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo3LFwidlwiOjN9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTIsXCJ5XCI6NixcInZcIjoyfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjQsXCJ5XCI6NyxcInZcIjozfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6NixcInZcIjoyfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjQsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjMsXCJ5XCI6NyxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjo2LFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjExLFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjoxMCxcInZcIjozfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjksXCJ2XCI6M30sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo3LFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjozLFwieVwiOjUsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo5LFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjozLFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MyxcInlcIjo0LFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjUsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MTMsXCJ5XCI6MyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6NCxcInZcIjoxLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2V9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjo2LFwidlwiOjEsXCJmbFwiOmZhbHNlLFwiZnJcIjpmYWxzZX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo4LFwieVwiOjYsXCJ2XCI6MSxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjYsXCJ2XCI6MSxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjIsXCJ5XCI6OCxcInZcIjoxMyxcImZsXCI6dHJ1ZSxcImZyXCI6ZmFsc2V9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MixcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MyxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjQsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo1LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo4LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMixcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEzLFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTQsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxNCxcInlcIjo0LFwidlwiOjEsXCJmbFwiOnRydWUsXCJmclwiOnRydWV9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MixcInlcIjo1LFwidlwiOjEsXCJmbFwiOnRydWUsXCJmclwiOnRydWV9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjEsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MTIsXCJ5XCI6NCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo5LFwieVwiOjExLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6MTEsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo4LFwieVwiOjUsXCJ2XCI6NX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo0LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjo2LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo1LFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDAsMCwxLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjEsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6OCxcInlcIjo2LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo3LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjExLFwieVwiOjEwLFwidlwiOjJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo5LFwidlwiOjd9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6NixcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjExLFwieVwiOjUsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjUsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6NixcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjo1LFwieVwiOjQsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo1LFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo4LFwieVwiOjUsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo4LFwieVwiOjQsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMSxcInlcIjo4LFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDEsMSwxLDEsMSwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDEsMSwxLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjEwLFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjMsXCJ5XCI6NCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjIsXCJ5XCI6NixcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjMsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjQsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo3LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjExLFwieVwiOjYsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoyLFwieVwiOjUsXCJ2XCI6MTB9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo0LFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDEsMSwxLDEsMSwxLDEsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDEsMCwwLDEsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDEsMSwwLDAsMSwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwxLDEsMSwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjYsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MyxcInlcIjozLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTMsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo1LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo0LFwieVwiOjQsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjMsXCJ2XCI6Mn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjozLFwidlwiOjJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjozLFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMSwxLDEsMSwxLDEsMSwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDEsMSwxLDEsMSwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjcsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6OCxcInlcIjo1LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo1LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6NSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjIsXCJ5XCI6MyxcInZcIjoyfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjE0LFwieVwiOjQsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxNCxcInlcIjo0LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTMsXCJ5XCI6MyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjE0LFwieVwiOjMsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMSxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMixcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MixcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEzLFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjozLFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjozLFwieVwiOjgsXCJ2XCI6MTF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NCxcInlcIjo5LFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjIsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MTIsXCJ5XCI6MyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo0LFwieFwiOjEwLFwieVwiOjMsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo3LFwieVwiOjMsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo0LFwieFwiOjcsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo0LFwieFwiOjEwLFwieVwiOjEwLFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjUsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MixcInlcIjozLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NCxcInlcIjozLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjozLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjQsXCJ4XCI6MyxcInlcIjozLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTQsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMyxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjExLFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6MTAsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMSwxLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMSwwLDAsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6NixcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjo4LFwieVwiOjQsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NSxcInhcIjo2LFwieVwiOjExLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo0LFwieFwiOjcsXCJ5XCI6NCxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjoxLFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjEwLFwieVwiOjYsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlLFwieFwiOjEwLFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJmbFwiOmZhbHNlLFwiZnJcIjpmYWxzZSxcInhcIjo2LFwieVwiOjksXCJ2XCI6NX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlLFwieFwiOjcsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2UsXCJ4XCI6NixcInlcIjo3LFwidlwiOjV9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJmbFwiOmZhbHNlLFwiZnJcIjpmYWxzZSxcInhcIjo2LFwieVwiOjUsXCJ2XCI6NX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo2LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NixcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjQsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDAsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDEsMSwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwxLDEsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6NyxcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo3LFwidlwiOjEsXCJmbFwiOnRydWUsXCJmclwiOnRydWV9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6OSxcInlcIjo3LFwidlwiOjEsXCJmbFwiOnRydWUsXCJmclwiOnRydWV9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjQsXCJ4XCI6MTAsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo0LFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjo3LFwieVwiOjUsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMSwxLDAsMCwwLDAsMSwxLDAsMCwwLDEsMSwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDEsMSwwLDAsMCwwLDEsMSwwLDAsMCwxLDEsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwxLDEsMSwxLDAsMCwxLDEsMCwxLDEsMSwxLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMSwxLDAsMCwwLDEsMSwxLDAsMCwwLDEsMSwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDEsMSwwLDEsMCwwLDAsMCwxLDAsMCwwLDEsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMSwxLDEsMCwwLDEsMSwxLDEsMSwxLDEsMSwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6NixcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjo0LFwieVwiOjQsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMyxcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjQsXCJ4XCI6NyxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MyxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjo3LFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMCwwLDAsMCwwLDAsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwwLDAsMCwwLDAsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwwLDAsMSwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwwLDAsMSwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjksXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6OSxcInlcIjo1LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NyxcInlcIjo2LFwidlwiOjJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjQsXCJ4XCI6NyxcInlcIjo1LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjUsXCJ4XCI6NyxcInlcIjo5LFwidlwiOnRydWV9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjUsXCJ4XCI6OCxcInlcIjoxMCxcInZcIjp0cnVlfSxcclxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjksXCJ5XCI6OCxcInZcIjp0cnVlfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBtYXA6IFtcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMCwwLDAsMCwwLDAsMCwxLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwwLDAsMCwwLDEsMSwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNwcml0ZXM6IFtcclxuICAgICAgICAgICAge2lkIDo3LCB4OiAxMywgeTogMiwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6MywgeDogNCwgeTogNCwgdjogOH0sXHJcbiAgICAgICAgICAgIHtpZCA6MywgeDogMTEsIHk6IDMsIHY6IDR9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDMsIHk6IDUsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDQsIHk6IDYsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDUsIHk6IDcsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDEwLCB5OiA2LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiAxMSwgeTogNSwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogMTQsIHk6IDEwLCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiAxNCwgeTogOSwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogMiwgeTogMTAsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDksIHk6IDgsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDIsIHk6IDksIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDgsIHk6IDgsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDcsIHk6IDgsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDYsIHk6IDgsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDgsIHk6IDEwLCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA3LCB5OiAxMCwgdjogMX1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHRoZW1lOiA4XHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6NixcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoxNCxcInlcIjoxMCxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDEsMCwxLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMSwxLDAsMCwxLDAsMSwxLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwwLDAsMSwxLDAsMSwwLDEsMCwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwwLDEsMSwxLDEsMCwxLDAsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDAsMCwxLDAsMSwxLDAsMSwwLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwwLDAsMSwwLDAsMSwwLDEsMCwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwwLDEsMCwwLDEsMSwxLDEsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjo5LFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjEwLFwieVwiOjExLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjoxLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjUsXCJ4XCI6NCxcInlcIjoxMSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6NSxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXTtcclxuXHJcbiIsImltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWV0YWwgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSwgbGVuZ3RoKSB7XHJcbiAgICAgICAgc3VwZXIoQ29uc3RzLk9CSkVDVF9NRVRBTCwgZW5naW5lLCAnaW1nX21ldGFsJyxcclxuICAgICAgICAgICAgdHgsIHR5LCBDb25zdHMuVElMRV9XSURUSCwgQ29uc3RzLlRJTEVfV0lEVEgsIDAsIDAsIDAsIDEsIHRydWUpO1xyXG4gICAgICAgIHRoaXMueHRpbGUgPSB0eDtcclxuICAgICAgICB0aGlzLnl0aWxlID0gdHk7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5hbmltRW5kID0gMTtcclxuICAgICAgICB0aGlzLmFuaW1EZWxheSA9IDk7XHJcbiAgICAgICAgdGhpcy5hbmltUm93ID0gMDtcclxuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAwO1xyXG4gICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkdsaWRlKGRpcikge1xyXG4gICAgICAgIGlmIChkaXIgPT09IENvbnN0cy5ESVJfTEVGVCAgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMubCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlyID09PSBDb25zdHMuRElSX1JJR0hUICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnJvemVuVG9JY2UoKSB7XHJcbiAgICAgICAgY29uc3QgcmlnaHRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnh0aWxlICsgMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgY29uc3QgbGVmdFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueHRpbGUgLSAxLCB0aGlzLnl0aWxlKVxyXG4gICAgICAgIHJldHVybiAgIXRoaXMuZmFsbGluZyAmJiAoKHJpZ2h0U3ByaXRlICYmIHJpZ2h0U3ByaXRlLmlkID09PSBDb25zdHMuT0JKRUNUX0lDRSAmJiByaWdodFNwcml0ZS5mcm96ZW5MZWZ0KSB8fFxyXG4gICAgICAgICAgICAobGVmdFNwcml0ZSAmJiBsZWZ0U3ByaXRlLmlkID09PSBDb25zdHMuT0JKRUNUX0lDRSAmJiBsZWZ0U3ByaXRlLmZyb3plblJpZ2h0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ3Jhdml0eSgpIHtcclxuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICYmICF0aGlzLmZyb3plblRvSWNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9ET1dOLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZhbGxpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpc2lvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuR2xpZGUodGhpcy5kaXJyZWN0aW9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtY29sbGlzaW9uJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfSUNFX01PVklORzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2xpZGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0lDRV9DSEVDSzpcclxuICAgICAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfRE9XTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9Eb3duKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbURlbGF5Q291bnQrKyA+IHRoaXMuYW5pbURlbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbURlbGF5Q291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1Sb3cgPSB0aGlzLmFuaW1Sb3cgPT09IDAgPyAxIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIENvbnN0cy5USUxFX1dJRFRIKnRoaXMuYW5pbVJvdywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlIC0gMSwgdGhpcy55dGlsZSkgPT09IENvbnN0cy5PQkpFQ1RfSUNFICYmXHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueHRpbGUgLSAxLCB0aGlzLnl0aWxlKS5mcm96ZW5SaWdodFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLFxyXG4gICAgICAgICAgICAgICAgKHRoaXMueHRpbGUgKiB0aGlzLndpZHRoKSAtIDcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnl0aWxlICogdGhpcy5oZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSt0aGlzLmxlbmd0aCwgdGhpcy55dGlsZSkgPT09IENvbnN0cy5PQkpFQ1RfSUNFICYmXHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueHRpbGUrdGhpcy5sZW5ndGgsIHRoaXMueXRpbGUpLmZyb3plbkxlZnRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGgpICogdGhpcy53aWR0aCAtIDcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnl0aWxlICogdGhpcy5oZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsaWRlKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRJTEVfV0lEVEgpIHtcclxuICAgICAgICAgICAgdGhpcy54ICs9IDQgKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb0Rvd24oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVElMRV9XSURUSCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1c2goZGlyKSB7XHJcbiAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gKHR5cGVvZiBkaXIgPT09ICd1bmRlZmluZWQnKSA/IHRoaXMuZGlycmVjdGlvbiA6IGRpcjtcclxuICAgICAgICBpZiAoIXRoaXMuY29sbGlzaW9uKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0lDRV9NT1ZJTkcsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGVzJztcclxuaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSkge1xyXG4gICAgICAgIHN1cGVyKENvbnN0cy5PQkpFQ1RfUExBWUVSLCBlbmdpbmUsICdpbWdfZG9uYScsIHR4LCB0eSwgNDgsIDY0LCAtMTAsIC0zMiwgMiwgMiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAyO1xyXG4gICAgICAgIHRoaXMuZGlycmVjdGlvbiA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDA7IC8vc3RhbmRpbmcgdG9wIHJpZ2h0IGRvd24gbGVmdFxyXG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aWxlV2lkdGggPSBDb25zdHMuVElMRV9XSURUSDtcclxuICAgICAgICB0aGlzLnRpbGVIZWlnaHQgPSBDb25zdHMuVElMRV9XSURUSDtcclxuICAgICAgICB0aGlzLmFuaW1EZWxheSA9IDM7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLmZhbGxDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLmlubmVyQ291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFuZENvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuaW50cm8oKTtcclxuICAgIH1cclxuXHJcbiAgICBsZWZ0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgLy9pZiBzdGFuZGluZyB0aGVuIHR1cm5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlycmVjdGlvbiAhPT0gQ29uc3RzLkRJUl9MRUZUKSB7XHJcbiAgICAgICAgICAgICAgICAvL2lzIG5vdCB1bmRlciBhIGJyaWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX1RVUk5fU1RBUlQsIENvbnN0cy5BTklNX1RVUk5fRU5ELCBmYWxzZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0NST1VDSF9TVEFSVCxDb25zdHMuQU5JTV9DUk9VQ0hfU1RBUlQsIGZhbHNlLCBDb25zdHMuQU5JTV9MRUZUX1JPVywgNCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1RVUk4sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gQ29uc3RzLkRJUl9MRUZUO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAvL3J1bm5pbmdcclxuICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMubCkgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL25vdCB1bmRlciBhIGJyaWNrXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9SVU5fU1RBUlQsIENvbnN0cy5BTklNX1JVTl9FTkQsIHRydWUsIENvbnN0cy5BTklNX0xFRlRfUk9XLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fQ1JPVUNIX1NUQVJULCBDb25zdHMuQU5JTV9DUk9VQ0hfRU5ELCB0cnVlLCBDb25zdHMuQU5JTV9MRUZUX1JPVywgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfTEVGVCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2hpdCBhbiBpY2VcclxuICAgICAgICAgICAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSAmJiAodGhpcy5jb29ybmVycy5sID09PSBDb25zdHMuT0JKRUNUX0lDRSB8fCB0aGlzLmNvb3JuZXJzLmwgPT09IENvbnN0cy5PQkpFQ1RfTUVUQUwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2NsaW1iXHJcbiAgICAgICAgICAgICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMubCkgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkgICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudWwpICYmICF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9QVVNIX1NUQVJULENvbnN0cy5BTklNX1BVU0hfU1RBUlQsZmFsc2UsIENvbnN0cy5BTklNX0xFRlRfUk9XKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1VQLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByaWdodCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gIT09IENvbnN0cy5ESVJfUklHSFQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fVFVSTl9TVEFSVCwgQ29uc3RzLkFOSU1fVFVSTl9FTkQsIGZhbHNlLCBDb25zdHMuQU5JTV9MRUZUX1JPVywgNCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9DUk9VQ0hfU1RBUlQsQ29uc3RzLkFOSU1fQ1JPVUNIX1NUQVJULCBmYWxzZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfVFVSTiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSBDb25zdHMuRElSX1JJR0hUO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9SVU5fU1RBUlQsIENvbnN0cy5BTklNX1JVTl9FTkQsIHRydWUsIENvbnN0cy5BTklNX1JJR0hUX1JPVywgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0NST1VDSF9TVEFSVCwgQ29uc3RzLkFOSU1fQ1JPVUNIX0VORCwgdHJ1ZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XLCAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9SSUdIVCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkgJiYgKHRoaXMuY29vcm5lcnMuciA9PT0gQ29uc3RzLk9CSkVDVF9JQ0UgfHwgdGhpcy5jb29ybmVycy5yID09PSBDb25zdHMuT0JKRUNUX01FVEFMKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudXIpICYmICF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9QVVNIX1NUQVJULENvbnN0cy5BTklNX1BVU0hfU1RBUlQsZmFsc2UsIENvbnN0cy5BTklNX1JJR0hUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9VUCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnVybigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gQ29uc3RzLk1PVkVfUklQKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXlPbmNlKCdkYW5nZXInKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9SSVAsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fUklQX1NUQVJULENvbnN0cy5BTklNX1JJUF9FTkQsIHRydWUsIENvbnN0cy5BTklNX1JJR0hUX1JPVyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGludHJvKCkge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9CSUdfRkFMTF9TVEFSVCxDb25zdHMuQU5JTV9CSUdfRkFMTF9FTkQsIHRydWUsIENvbnN0cy5BTklNX1JJR0hUX1JPVywgNCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9JTlRSTywgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3V0cm8oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0ZBTExfU1RBUlQsIENvbnN0cy5BTklNX0JJR19GQUxMX0VORCwgdHJ1ZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA0KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX09VVFJPLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmlubmVyQ291bnRlciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZG9SaXAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdyYXZpdHkoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29vcm5lcnMuZCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcm9yKCd1bmRlZmluZWQgY29vcm5lcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfRE9XTiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mYWxsQ291bnRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheU9uY2UoXCJmYWxsaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9CSUdfRkFMTF9TVEFSVCwgQ29uc3RzLkFOSU1fQklHX0ZBTExfRU5ELCB0cnVlLCBDb25zdHMuQU5JTV9SSUdIVF9ST1csIDEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fQklHX0ZBTExfU1RBUlQsIENvbnN0cy5BTklNX0JJR19GQUxMX0VORCwgdHJ1ZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XLCAzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnN0b3AoXCJmYWxsaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENvbnN0cy5NT1ZFX0RPV04pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmYWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcxMjQsIDIzOCwgNjYnLCAxMCwgIDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlICsgMSwgJzEyMiwgMjExLCAyNTUnLCA1LCAgMS4yNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhbGxDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvb3JuZXJzLmQgPT09IENvbnN0cy5PQkpFQ1RfSkFSKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgamFyID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqYXIgJiYgamFyLm9uRmlyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1cm4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWNlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRElSX1JJR0hUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kcikgJiYgdGhpcy5jb29ybmVycy5kciAhPT0gQ29uc3RzLk9CSkVDVF9GSVJFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9JQ0VfU1RBUlQsQ29uc3RzLkFOSU1fSUNFX0VORCxmYWxzZSwgQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9JQ0VfTUFLRSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvb3JuZXJzLmRyID09PSBDb25zdHMuT0JKRUNUX0lDRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fSUNFX1NUQVJULENvbnN0cy5BTklNX0lDRV9FTkQsZmFsc2UsIENvbnN0cy5BTklNX1JJR0hUX1JPVywgNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfSUNFX1JFTU9WRSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BTklNX0lDRV9TVEFSVCxDb25zdHMuQU5JTV9JQ0VfRU5ELGZhbHNlLCBDb25zdHMuQU5JTV9SSUdIVF9ST1csIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0lDRV9GQUlMLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZGwpICYmICh0aGlzLmNvb3JuZXJzLmRsICE9PSBDb25zdHMuT0JKRUNUX0ZJUkUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9JQ0VfU1RBUlQsQ29uc3RzLkFOSU1fSUNFX0VORCxmYWxzZSwgQ29uc3RzLkFOSU1fTEVGVF9ST1csIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0lDRV9NQUtFLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29vcm5lcnMuZGwgPT09IENvbnN0cy5PQkpFQ1RfSUNFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9JQ0VfU1RBUlQsQ29uc3RzLkFOSU1fSUNFX0VORCxmYWxzZSwgQ29uc3RzLkFOSU1fTEVGVF9ST1csIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0lDRV9SRU1PVkUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9JQ0VfU1RBUlQsQ29uc3RzLkFOSU1fSUNFX0VORCxmYWxzZSwgQ29uc3RzLkFOSU1fTEVGVF9ST1csIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX0lDRV9GQUlMLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganVtcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5ESVJfUklHSFQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5yKSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudXIpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9QVVNIX1NUQVJULENvbnN0cy5BTklNX1BVU0hfU1RBUlQsZmFsc2UsIENvbnN0cy5BTklNX1JJR0hUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9VUCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMubCkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnVsKSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fUFVTSF9TVEFSVCxDb25zdHMuQU5JTV9QVVNIX1NUQVJULGZhbHNlLCBDb25zdHMuQU5JTV9MRUZUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9VUCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9SdW4oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuQU5JTV9GUkFNRV9DT1VOVCkge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZCAqIHRoaXMuZGlycmVjdGlvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9UdXJuKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFOSU1fRlJBTUVfQ09VTlQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTU9WRV9TVEFORCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb091dHJvKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgJSAxMCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlubmVyQ291bnRlciArPSAxO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMzgsIDY2JywgMTUsICAwLjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcyNTUsIDEzNSwgMTI0JywgMjAsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gNSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcxMjIsIDIxMSwgMjU1JywgMjUsICAxLjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciAlIDIgPT09IDAgJiYgdGhpcy5pbm5lckNvdW50ZXIgPCA2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdjbGltYicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciAlIDIgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy55ICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy55IC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA+PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ3N0YXRlLWxlYXZlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUubmV4dExldmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvSW50cm8oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA9PT0gOCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzEyNCwgMjM4LCA2NicsIDIwLCAgMC41KTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcyNTUsIDEzNSwgMTI0JywgMTUsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzEyMiwgMjExLCAyNTUnLCAxMCwgIDEuNSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ3N0YWdlLWVudGVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gMzIpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQuc3RvcChcImZhbGxpbmdcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9HcmF2aXR5KCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLkFOSU1fRlJBTUVfQ09VTlQpIHtcclxuICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmFsbENvdW50ZXIrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9TdGFuZCgpIHtcclxuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YW5kQ291bnRlcisrID4gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fU0xFRVBfU1RBUlQsQ29uc3RzLkFOSU1fU0xFRVBfRU5ELHRydWUsIHRoaXMuZGlycmVjdGlvbiAhPT0gMSA/IENvbnN0cy5BTklNX0xFRlRfUk9XIDogQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA0OCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fU1RBTkRfU1RBUlQsQ29uc3RzLkFOSU1fU1RBTkRfRU5ELHRydWUsIHRoaXMuZGlycmVjdGlvbiAhPT0gMSA/IENvbnN0cy5BTklNX0xFRlRfUk9XIDogQ29uc3RzLkFOSU1fUklHSFRfUk9XLCA4LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9DUk9VQ0hfU1RBUlQsQ29uc3RzLkFOSU1fQ1JPVUNIX1NUQVJULCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uICE9PSAxID8gQ29uc3RzLkFOSU1fTEVGVF9ST1cgOiBDb25zdHMuQU5JTV9SSUdIVF9ST1csIDgsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb1VwKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gMTgpIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmNvdW50ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdjbGltYicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMzgsIDY2JywgMTAsICAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzI1NSwgMTM1LCAxMjQnLCA1LCAxLjI1KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fUFVTSF9FTkQsIENvbnN0cy5BTklNX1BVU0hfRU5ELCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRElSX1JJR0hUID8gQ29uc3RzLkFOSU1fUklHSFRfUk9XIDogQ29uc3RzLkFOSU1fTEVGVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9KVU1QX1NUQVJULCBDb25zdHMuQU5JTV9KVU1QX1NUQVJULCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRElSX1JJR0hUID8gQ29uc3RzLkFOSU1fUklHSFRfUk9XIDogQ29uc3RzLkFOSU1fTEVGVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQU5JTV9KVU1QX0VORCwgQ29uc3RzLkFOSU1fSlVNUF9FTkQsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5ESVJfUklHSFQgPyBDb25zdHMuQU5JTV9SSUdIVF9ST1cgOiBDb25zdHMuQU5JTV9MRUZUX1JPVyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbSgyLCAyLCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRElSX1JJR0hUID8gQ29uc3RzLkFOSU1fUklHSFRfUk9XIDogQ29uc3RzLkFOSU1fTEVGVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxODpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fU1RBTkQsIENvbnN0cy5BTklNX1NUQU5ELCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRElSX1JJR0hUID8gQ29uc3RzLkFOSU1fUklHSFRfUk9XIDogQ29uc3RzLkFOSU1fTEVGVF9ST1cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ha2VJY2UoKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnbmV3LWljZScpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZEljZUJsb2NrKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUrMSk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUgKyAxKTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSArIDEsICcxMjQsIDIxNCwgMjU1JywgNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSWNlQmxvY2soKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLXJlbW92ZScpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUljZUJsb2NrKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUrMSk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUgKyAxKTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSArIDEsICcxMjQsIDIxNCwgMjU1JywgNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaCgpIHtcclxuICAgICAgICBsZXQgaWNlID0gIHRoaXMuZW5naW5lLmljZUF0KHRoaXMueHRpbGUrdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBpZiAoaWNlICYmIGljZS5jYW5HbGlkZSh0aGlzLmRpcnJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlLCAnMjU1LCAyNTUsIDI1NScsIDMpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSwgJzEyNCwgMjE0LCAyNTUnLCAzLCAxLjUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFOSU1fUFVTSF9TVEFSVCwgQ29uc3RzLkFOSU1fUFVTSF9FTkQsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5ESVJfUklHSFQgPyBDb25zdHMuQU5JTV9SSUdIVF9ST1cgOiBDb25zdHMuQU5JTV9MRUZUX1JPVywgMyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfUFVTSCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvUHVzaCgpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMjtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5BTklNX0ZSQU1FX0NPVU5UKSB7XHJcbiAgICAgICAgICAgIC8vIGZpeG1lXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGljZSA9ICB0aGlzLmVuZ2luZS5pY2VBdCh0aGlzLnh0aWxlK3RoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgICAgIGlmIChpY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1wdXNoJyk7XHJcbiAgICAgICAgICAgICAgICBpY2UucHVzaCh0aGlzLmRpcnJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9JY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA9PT0gOCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ29uc3RzLk1PVkVfSUNFX01BS0UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFrZUljZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUljZUJsb2NrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+PSBDb25zdHMuQU5JTV9GUkFNRV9DT1VOVCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5NT1ZFX1NUQU5ELCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvRmFpbEljZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID09PSA4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1kaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSArIDEsICc4OCw2Niw2NicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID49IENvbnN0cy5BTklNX0ZSQU1FX0NPVU5UKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1PVkVfU1RBTkQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9ucygpIHtcclxuICAgICAgICBpZiAodGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUsIHRoaXMueXRpbGUsIENvbnN0cy5PQkpFQ1RfUExBWUVSKSA9PT0gQ29uc3RzLk9CSkVDVF9GSVJFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVybigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlICgpIHtcclxuICAgICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbnMoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gQ29uc3RzLk1PVkVfU1RBTkQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFuZENvdW50ZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gQ29uc3RzLk1PVkVfRE9XTikge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGxDb3VudGVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfUklHSFQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvUnVuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9MRUZUOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1J1bigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfRE9XTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9HcmF2aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9VUDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9VcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfVFVSTjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9UdXJuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9JQ0VfTUFLRTpcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTU9WRV9JQ0VfUkVNT1ZFOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0ljZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfSUNFX0ZBSUw6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvRmFpbEljZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfU1RBTkQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvU3RhbmQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX1BVU0g6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvUHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfUklQOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1JpcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1PVkVfT1VUUk86XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvT3V0cm8oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5NT1ZFX0lOVFJPOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0ludHJvKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgUmVzb3VyY2VzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSB7IH07XHJcbiAgICAgICAgdGhpcy5sb2FkZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGQodHlwZSwgbmFtZSwgc3JjKSB7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKHt0eXBlOiB0eXBlLCBuYW1lOiBuYW1lLCBzcmM6IHNyY30pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3R4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmYnO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCg1MCwgMjUwLCB0aGlzLmxvYWRlZCAqIDQ1MCAvIHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLCA0MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvYWRlZCA9PT0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWFkeShjYWxsYmFjaykge1xyXG4gICAgICAgIGZvciAoY29uc3QgcmVzb3VyY2Ugb2YgdGhpcy5kZWZpbml0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAocmVzb3VyY2UudHlwZSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gcmVzb3VyY2Uuc3JjO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXNbcmVzb3VyY2UubmFtZV0gPSBpbWFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzb3VyY2UudHlwZSA9PT0nYXVkaW8nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhyZXNvdXJjZS5zcmMpO1xyXG4gICAgICAgICAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheXRocm91Z2gnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXNbcmVzb3VyY2UubmFtZV0gPSBhdWRpbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgRmlyZSB9IGZyb20gJy4vZmlyZSc7XHJcbmltcG9ydCB7IEljZSB9IGZyb20gJy4vaWNlJztcclxuaW1wb3J0IHsgSmFyIH0gZnJvbSAnLi9qYXInO1xyXG5pbXBvcnQgeyBNZXRhbCB9IGZyb20gJy4vbWV0YWwnO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tICcuL3RpbGVtYXAnO1xyXG5pbXBvcnQgeyBsZXZlbHMgfSBmcm9tICcuL2xldmVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICBkYXRhLm1hcCA9IHRoaXMuZW5naW5lLm1hcC5tYXA7XHJcbiAgICAgICAgZGF0YS50aGVtZSA9IHRoaXMuZW5naW5lLm1hcC50aGVtZTtcclxuICAgICAgICBkYXRhLnNwcml0ZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiB0aGlzLmVuZ2luZS5zcHJpdGVzKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9ICh0eXBlb2Ygc3ByaXRlLmxlbmd0aCA9PT0gXCJ1bmRlZmluZWRcIikgPyAxIDogc3ByaXRlLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFsdWUgPSBzcHJpdGUuaWQgPT09IENvbnN0cy5PQkpFQ1RfSkFSID8gc3ByaXRlLm9uRmlyZSA6IHZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgZmwsIGZyO1xyXG4gICAgICAgICAgICBpZiAoc3ByaXRlLmlkID09PSBDb25zdHMuT0JKRUNUX0lDRSkge1xyXG4gICAgICAgICAgICAgICAgZmwgPSBzcHJpdGUuZnJvemVuTGVmdDtcclxuICAgICAgICAgICAgICAgIGZyID0gc3ByaXRlLmZyb3plblJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGEuc3ByaXRlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogc3ByaXRlLmlkLFxyXG4gICAgICAgICAgICAgICAgXCJ4XCI6IHNwcml0ZS54dGlsZSxcclxuICAgICAgICAgICAgICAgIFwieVwiOiBzcHJpdGUueXRpbGUsXHJcbiAgICAgICAgICAgICAgICBcInZcIjogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBcImZsXCI6IGZsLFxyXG4gICAgICAgICAgICAgICAgXCJmclwiOiBmclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoaW5kZXgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGxldmVsc1tpbmRleF0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmdpbmUubGV2ZWwgPSBpbmRleDtcclxuICAgICAgICBjb25zdCBsZXZlbCA9IGxldmVsc1tpbmRleF07XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc3ByaXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLm1hcCA9IG5ldyBUaWxlTWFwKHRoaXMuZW5naW5lLCBsZXZlbC5tYXAsIGxldmVsLnRoZW1lKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiBsZXZlbC5zcHJpdGVzKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaChzcHJpdGUuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9QTEFZRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUodGhpcy5lbmdpbmUucGxheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9JQ0U6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKG5ldyBJY2UodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSwgcGFyc2VJbnQoc3ByaXRlLnYpLCBzcHJpdGUuZmwsIHNwcml0ZS5mcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT0JKRUNUX01FVEFMOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShuZXcgTWV0YWwodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT0JKRUNUX0ZJUkU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKG5ldyBGaXJlKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9CSkVDVF9KQVI6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgamFyID0gbmV3IEphcih0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ByaXRlLnYgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqYXIudHVybk9uRmlyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUoamFyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuY2xhc3MgUGFydGljbGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgY29sb3IsIGludGVuY2l0eSkge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykgPyAnMjU1LDI1NSwyNTUnIDogY29sb3I7XHJcbiAgICAgICAgdGhpcy5yID0gMztcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy52eCA9IChNYXRoLnJhbmRvbSgpICogNCAtIDIpICogaW50ZW5jaXR5O1xyXG4gICAgICAgIHRoaXMudnkgPSAoTWF0aC5yYW5kb20oKSAqIDYgLSA0KSAqIGludGVuY2l0eTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMC4xNTtcclxuICAgICAgICB0aGlzLmxpZmUgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBsZXQgb3BhY2l0eSA9IHRoaXMubGlmZSAvIDI1NTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiYSgnICsgdGhpcy5jb2xvcisgJywnICsgb3BhY2l0eSArICcpJztcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMuciwgMCwgTWF0aC5QSSoyLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy52eDtcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eTtcclxuICAgICAgICB0aGlzLnZ5ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5saWZlIC09IDU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGFya3MgZXh0ZW5kcyBTcHJpdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChlbmdpbmUsIHR4LCB0eSwgY29sb3IsIGxlbmd0aCwgaW50ZW5jaXR5KSB7XHJcbiAgICAgICAgc3VwZXIobnVsbCwgZW5naW5lLCB0eCwgdHksIDMyLCAzMik7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICh0eXBlb2YgY29sb3IgPT09ICd1bmRlZmluZWQnKSA/ICcyNTUsMjU1LDI1NScgOiBjb2xvcjtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9ICh0eXBlb2YgbGVuZ3RoID09PSAndW5kZWZpbmVkJykgPyAxMCA6IGxlbmd0aDtcclxuICAgICAgICB0aGlzLmludGVuY2l0eSA9ICh0eXBlb2YgaW50ZW5jaXR5ID09PSAndW5kZWZpbmVkJykgPyAxIDogaW50ZW5jaXR5O1xyXG4gICAgICAgIHRoaXMucGFydGljbGVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldID0gbmV3IFBhcnRpY2xlKHRoaXMuZW5naW5lLmN0eCwgdHgqQ29uc3RzLlRJTEVfV0lEVEgrMTYsIHR5KkNvbnN0cy5USUxFX1dJRFRIKzE2LCB0aGlzLmNvbG9yLCB0aGlzLmludGVuY2l0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuY3R4LnNhdmUoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmdpbmVNb3ZlKCkge1xyXG4gICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXS5tb3ZlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcnRpY2xlc1tpXS5saWZlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcnRpY2xlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlU2Z4KHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tICcuL2VuZ2luZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU291bmQge1xyXG5cdGNvbnN0cnVjdG9yKHJlc291cmNlcykge1xyXG5cdFx0dGhpcy5yZXNvdXJjZXMgPSByZXNvdXJjZXM7XHJcblx0XHR0aGlzLm11c2ljT24gPSB0cnVlO1xyXG5cdFx0dGhpcy5zb3VuZE9uID0gdHJ1ZTtcclxuXHJcblx0XHR0aGlzLnNmeFZvbHVtZSA9IDAuMztcclxuXHRcdHRoaXMuc2Z4ID0ge1xyXG5cdFx0XHRcImZpcmUtb2ZmXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1maXJlLW9mZicpLFxyXG5cdFx0XHRcImljZS1wdXNoXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1pY2UtcHVzaCcpLFxyXG5cdFx0XHRcImZhbGxcIjogcmVzb3VyY2VzLmdldCgnc2Z4LWZhbGwnKSxcclxuXHRcdFx0XCJmYWxsaW5nXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1mYWxsaW5nJyksXHJcblx0XHRcdFwibmV3LWljZVwiOiByZXNvdXJjZXMuZ2V0KCdzZngtbmV3LWljZScpLFxyXG5cdFx0XHRcImNsaW1iXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1jbGltYicpLFxyXG5cdFx0XHRcImljZS1jb2xsaXNpb25cIjogcmVzb3VyY2VzLmdldCgnc2Z4LWljZS1jb2xsaXNpb24nKSxcclxuXHRcdFx0XCJzdGFnZS1lbnRlclwiOiByZXNvdXJjZXMuZ2V0KCdzZngtc3RhZ2UtZW50ZXInKSxcclxuXHRcdFx0XCJkYW5nZXJcIjogcmVzb3VyY2VzLmdldCgnc2Z4LWRhbmdlcicpLFxyXG5cdFx0XHRcImljZS1yZW1vdmVcIjogcmVzb3VyY2VzLmdldCgnc2Z4LWljZS1yZW1vdmUnKSxcclxuXHRcdFx0XCJzdGF0ZS1sZWF2ZVwiOiByZXNvdXJjZXMuZ2V0KCdzZngtc3RhdGUtbGVhdmUnKSxcclxuXHRcdFx0XCJpY2UtZGlzYWJsZWRcIjogcmVzb3VyY2VzLmdldCgnc2Z4LWRpc2FibGVkJylcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRwbGF5KHNmeCkge1xyXG5cdFx0aWYgKCF0aGlzLnNvdW5kT24pIHJldHVybjtcclxuXHRcdHRoaXMuc2Z4W3NmeF0udm9sdW1lID0gdGhpcy5zZnhWb2x1bWU7XHJcblx0XHR0aGlzLnNmeFtzZnhdLmN1cnJlbnRUaW1lID0gMDtcclxuXHRcdHRoaXMuc2Z4W3NmeF0ucGxheSgpLmNhdGNoKCgpPT57fSk7XHJcblx0fVxyXG5cclxuXHRwbGF5T25jZShzZngpIHtcclxuXHRcdGlmICghdGhpcy5zZnhbc2Z4XS5wYXVzZWQpIHJldHVybjtcclxuXHRcdGlmICghdGhpcy5zb3VuZE9uKSByZXR1cm47XHJcblx0XHR0aGlzLnNmeFtzZnhdLnZvbHVtZSA9IHRoaXMuc2Z4Vm9sdW1lO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS5jdXJyZW50VGltZSA9IDA7XHJcblx0XHR0aGlzLnNmeFtzZnhdLnBsYXkoKS5jYXRjaCgoKT0+e30pO1xyXG5cdH1cclxuXHJcblx0c3RvcChzZngpIHtcclxuXHRcdHRoaXMuc2Z4W3NmeF0ucGF1c2UoKTtcclxuXHRcdHRoaXMuc2Z4W3NmeF0uY3VycmVudFRpbWUgPSAwO1xyXG5cdH1cclxuXHJcblx0c291bmRyYWNrKCkge1xyXG5cdFx0aWYgKCF0aGlzLm11c2ljT24pIHJldHVybjtcclxuXHRcdHRoaXMubXVzaWMgPSB0aGlzLnJlc291cmNlcy5nZXQoJ3NmeC1tdXNpYy1zcGFya3MnKTtcclxuXHRcdHRoaXMubXVzaWMubXV0ZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMubXVzaWMudm9sdW1lID0gMC4yO1xyXG5cdFx0dGhpcy5tdXNpYy5sb29wID0gdHJ1ZTtcclxuXHRcdHRoaXMubXVzaWMucGxheSgpLmNhdGNoKCgpPT57fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuL3N0cnVjdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBjbGFzcyBvZiB0aGUgc3ByaXRlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZW5naW5lICAgRW5naW5lIEVuZ2luZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR4ICAgICBQb3NpdGlvbiB0aWxlIHggaW4gdGhlIG1hcFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5ICAgICBQb3NpdGlvbiB0aWxlIHkgaW4gdGhlIG1hcFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoICBXaWR0aCBvZiB0aGUgc3ByaXRlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiB0aGUgc3ByaXRlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGlkLCBlbmdpbmUsIHR4LCB0eSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmN0eCA9IGVuZ2luZS5jdHg7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycyA9IG5ldyBQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc29saWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5NT1ZFX1NUQU5EO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAwO1xyXG4gICAgICAgIHRoaXMueHRpbGUgPSB0eDtcclxuICAgICAgICB0aGlzLnl0aWxlID0gdHk7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54dGlsZSAqIENvbnN0cy5USUxFX1dJRFRIO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMueXRpbGUgKiBDb25zdHMuVElMRV9XSURUSDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBzcHJpdGUgc3RhdGVzXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhdGUgIENvbnN0YW50IG9mIHRoZSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtb3ZpbmcgVHJ1ZSBpZiBzcHJpdGUgaXMgbW92aW5nXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlKHN0YXRlLCBtb3ZpbmcpIHtcclxuICAgICAgICB0aGlzLm1vdmluZyA9ICh0eXBlb2YgbW92aW5nID09PSAndW5kZWZpbmVkJykgPyBmYWxzZSA6IG1vdmluZztcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaWxlKHR4LCB0eSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZ2luZS5tYXAuZ2V0VGlsZSh0eCwgdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU3ByaXRlQXQgKHR4LCB0eSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnh0aWxlID09PSB0eCAmJiB0aGlzLnl0aWxlID09PSB0eTtcclxuICAgIH1cclxuXHJcbiAgICBzcHJpdGVUeXBlQXQodHgsIHR5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0eCwgdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUgKCkge31cclxuXHJcbiAgICBlbmdpbmVNb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMudSA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUsIHRoaXMueXRpbGUtMSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy5kID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSsxKTtcclxuICAgICAgICB0aGlzLmNvb3JuZXJzLmwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLTEsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMuciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUrMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy51bCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUtMSwgdGhpcy55dGlsZS0xKTtcclxuICAgICAgICB0aGlzLmNvb3JuZXJzLnVyID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSsxLCB0aGlzLnl0aWxlLTEpO1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMuZGwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLTEsIHRoaXMueXRpbGUrMSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy5kciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUrMSwgdGhpcy55dGlsZSsxKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlKCk7XHJcblxyXG4gICAgICAgIHRoaXMueHRpbGUgPSBNYXRoLmZsb29yKHRoaXMueCAvIENvbnN0cy5USUxFX1dJRFRIKTtcclxuICAgICAgICB0aGlzLnl0aWxlID0gTWF0aC5mbG9vcih0aGlzLnkgLyBDb25zdHMuVElMRV9XSURUSCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiogU3RvcmVzIHBvc2l0aW9uIG9mIHRoZSBjb3JuZXJzIGFuZCB2ZXJ0aWNlc1xyXG4qL1xyXG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51ID0gMDtcclxuICAgICAgICB0aGlzLmQgPSAwO1xyXG4gICAgICAgIHRoaXMubCA9IDA7XHJcbiAgICAgICAgdGhpcy5yID0gMDtcclxuICAgICAgICB0aGlzLnVsID0gMDtcclxuICAgICAgICB0aGlzLnVyID0gMDtcclxuICAgICAgICB0aGlzLmRsID0gMDtcclxuICAgICAgICB0aGlzLmRyID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvb3Ige1xyXG4gICAgY29uc3RydWN0b3IgKHR4LCB0eSkge1xyXG4gICAgICAgIHRoaXMueHRpbGUgPSB0eDtcclxuICAgICAgICB0aGlzLnl0aWxlID0gdHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59XHJcbiIsImltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCB7XHJcbiAgICAvKipcclxuICAgICAqIFRpbGVtYXAgY2xhc3NcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgRW5naW5lXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWFwICBNYXRyaXggb2YgdGhlIG1hcFxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCBtYXAsIHRoZW1lKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBlbmdpbmUuY3R4O1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcclxuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IENvbnN0cy5USUxFX1dJRFRIO1xyXG4gICAgICAgIHRoaXMudGlsZUhlaWdodCA9IENvbnN0cy5USUxFX1dJRFRIO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXAubGVuZ3RoIC0gMTtcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5tYXBbMF0ubGVuZ3RoIC0gMTtcclxuICAgICAgICB0aGlzLnRpbGVzSW1hZ2UgPSB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCd0aWxlbWFwJyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGNvbnRlbnQgb2YgdGhlIHRpbGUgaW5zaWRlIHRoZSBtYXRyaXhcclxuICAgICAqIGlmIHBvc2l0aW9uIG91dCBvZiBib3VuZHMgcmV0dXJucyBDb25zdHMuT0JKRUNUX09VVFxyXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSB5IHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHggcG9zaXRpb25cclxuICAgICAqIEByZXR1cm4ge251bWJlcn0gICBDb250ZW50IG9mIHRoZSB0aWxlXHJcbiAgICAgKi9cclxuICAgIGdldFRpbGUoeCwgeSkge1xyXG4gICAgICAgIGlmICh4IDwgMCB8fCB5IDwgMCB8fCB4ID4gdGhpcy53aWR0aCB8fCB5ID4gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIENvbnN0cy5PQkpFQ1RfT1VUO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBbeV1beF07XHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmF3cyB0aGUgbWFwXHJcbiAgICAgKiBAcmV0dXJuIHtub25lfVxyXG4gICAgICovXHJcbiAgICBkcmF3KCkge1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy53aWR0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHRoaXMuaGVpZ2h0OyArK2opIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aWxlVHlwZSA9IENvbnN0cy5USUxFX0JBQ0tHUk9VTkQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXBbal1baV0gPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZ2V0VGlsZShpLTEsIGopICYmICF0aGlzLmdldFRpbGUoaSsxLCBqKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlVHlwZSA9IENvbnN0cy5USUxFX0JPVEg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5nZXRUaWxlKGktMSwgaikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVElMRV9MRUZUO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2V0VGlsZShpKzEsIGopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRJTEVfUklHSFQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVElMRV9NSURETEU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVzSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdGlsZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVtZSAqIHRoaXMudGlsZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgaSAqIHRoaXMudGlsZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGogKiB0aGlzLnRpbGVIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge31cclxuXHJcbiAgICBlbmdpbmVNb3ZlKCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbGUgPSB7XHJcbiAgIHRpbGVzOiB7XHJcbiAgICAgICAgW0NvbnN0cy5PQkpFQ1RfQkFDS0dST1VORF06IHtcclxuICAgICAgICAgICAgc29saWQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9CSkVDVF9PVVRdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9CSkVDVF9QTEFZRVJdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9CSkVDVF9JQ0VdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9CSkVDVF9NRVRBTF06IHtcclxuICAgICAgICAgICAgc29saWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtDb25zdHMuT0JKRUNUX1dBTExdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9CSkVDVF9GSVJFXToge1xyXG4gICAgICAgICAgICBzb2xpZDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtDb25zdHMuT0JKRUNUX0pBUl06IHtcclxuICAgICAgICAgICAgc29saWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGlzU29saWQ6IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVzW2lkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVTkRFRklORUQgT04gaXNTb2xpZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzW2lkXS5zb2xpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=