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
        this.animDelay = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].AnimDefaultDelay;
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
        delay  = (typeof delay === 'undefined') ? _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].AnimDefaultDelay : delay;
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
    TileWidth: 32,
    MoveStand: 0,
    MoveLeft: 1,
    MoveRight: 2,
    MoveDown: 3,
    MoveUp: 4,
    MoveTurn: 5,
    MoveIceMake: 6,
    MoveIceRemove: 7,
    MoveIceMoving: 8,
    MoveIceCheck: 9,
    MoveRip: 10,
    MovePush: 8,
    MoveIceFail: 11,
    MoveLevelExit: 12,
    MoveLevelEnter: 13,
    DirLeft: -1,
    DirRight: 1,
    AnimDefaultDelay: 2,
    AnimFrameCount: 16,
    AnimLeftRow: 1,
    AnimRightRow: 0,
    AnimRunStart: 0,
    AnimRunEnd: 3,
    AnimStand: 4,
    AnimTurnStart: 4,
    AnimTurnEnd: 7,
    AnimFallStart: 8,
    AnimFallEnd: 9,
    AnimBigFallStart: 10,
    AnimBigFallEnd: 11,
    AnimPushStart: 12,
    AnimPushEnd: 13,
    AnimJumpStart: 14,
    AnimJumpEnd: 15,
    AnimStandStart: 16,
    AnimStandEnd: 17,
    AnimIceStart: 18,
    AnimIceEnd: 19,
    AnimCrouchStart: 20,
    AnimCrouchEnd: 22,
    AnimRipStart: 23,
    AnimRipEnd: 24,
    AnimSleepStart: 25,
    AnimSleepEnd: 26,
    TileBackground: 0,
    TileBothSides: 32,
    TileLeftSide: 64,
    TileMiddle: 96,
    TileRightSide: 128,
    ObjectOut: -1,
    ObjectBackground: 0,
    ObjectWall: 1,
    ObjectIce: 3,
    ObjectMetal: 4,
    ObjectJar: 5,
    ObjectFire: 6,
    ObjectPlayer: 7,
    GameStatePlay: 1,
    GameStateIntro: 2
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
        const fires = this.sprites.filter(sprite => sprite.id === _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].ObjectFire);
        if (!fires.length && !this.editor && this.player.state !== _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].MoveLevelExit) {
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
            if (this.sprites[i] && this.sprites[i].id !== _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].ObjectPlayer && this.sprites[i].moving) {
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
            if (this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].ObjectIce && this.sprites[i].ytile === ty) {
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
            if (this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].ObjectIce &&
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
                (this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].ObjectFire)
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
        excludeId = (typeof excludeId === 'undefined') ? _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].ObjectOut : excludeId;
        if (tx < 0 || ty < 0 || tx > this.map.width || ty > this.map.height) {
            return _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].ObjectOut;
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
        return _constants__WEBPACK_IMPORTED_MODULE_5__["Consts"].ObjectBackground;
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
        super(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectFire, engine, 'img_fire',
            tx, ty, _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TileWidth, _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TileWidth, 0, 0, 0, 3, true);
    }

    move() {
        if (!this.moving) {
            this.collisions();
            this.gravity();
        }
        switch (this.state) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].MoveDown:
                this.doDown();
                break;
        }
    }

    collisions() {
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectFire) === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectIce) {
            this.engine.sound.play('fire-off');
            this.engine.removeFire(this.xtile, this.ytile);
            this.engine.removeIceBlock(this.xtile, this.ytile);
            this.engine.addSparks(this.xtile, this.ytile, '255, 126, 198', 15, 0.5);
            this.engine.addSparks(this.xtile, this.ytile, '124, 212, 255', 10);
        }
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectFire) === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectMetal) {
            this.engine.sound.play('fire-off');
            this.engine.removeFire(this.xtile, this.ytile);
            this.engine.addSparks(this.xtile, this.ytile, '255, 222, 127', 15, 0.5);
            this.engine.addSparks(this.xtile, this.ytile, '41, 42, 90', 10);
        }

    }

    gravity() {
        if (!_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.d)) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].MoveDown, true);
            return true;
        }
        return false;
    }

    doDown() {
        this.counter += 4;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TileWidth) {
            this.y += 4;
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].MoveStand, false);
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
    const loader = document.getElementById('loader');
    loader.addEventListener('click', () => {
        loader.style.display = 'none';
        loader.style.opacity = 0;
        PreloadGame();
    });
});

function PreloadGame() {
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
}

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
        game.state = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].GameStatePlay;
        game.engine.editor = true;
        game.engine.keyboard.intro = false;
        game.engine.sound.music.pause();

        canvas.addEventListener('click', (e) => {
            const xtile = Math.floor(e.offsetX / 32);
            const ytile = Math.floor(e.offsetY / 32);
            if (tool < 2) {
                game.engine.map.map[ytile][xtile] = tool;
            } else {
                switch (tool) {
                    case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectPlayer:
                        game.engine.player.x = xtile * 32;
                        game.engine.player.y = ytile * 32;
                        break;
                    case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce:
                        game.engine.addIceBlock(xtile, ytile);
                        break;
                    case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal:
                        game.engine.addSprite(new _metal__WEBPACK_IMPORTED_MODULE_4__["Metal"](game.engine, xtile, ytile, 1));
                        break;
                    case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectFire:
                        game.engine.addSprite(new _fire__WEBPACK_IMPORTED_MODULE_1__["Fire"](game.engine, xtile, ytile));
                        break;
                    case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar:
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
        this.engine = new _engine__WEBPACK_IMPORTED_MODULE_2__["Engine"](canvas, resources);
        this.levels = _levels__WEBPACK_IMPORTED_MODULE_3__["levels"];
        this.state = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].GameStatePlay;
        this.engine.sound.soundrack();
        this.gameloop = this.gameloop_.bind(this); // jshint ignore:line
        this.gameloop();
    }

    gameloop_() {
        switch (this.state) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].GameStateIntro:
                this.doIntro();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].GameStatePlay:
                this.engine.draw();
                this.engine.move();
                break;
        }
        window.requestAnimationFrame(this.gameloop);
    }

    createIntro() {
        this.intro = new _animsprite__WEBPACK_IMPORTED_MODULE_0__["AnimSprite"](null, this.engine, 'img_intro', 0, 0, 544, 416, 0, 0, 0, 0, false);
        this.start = new _animsprite__WEBPACK_IMPORTED_MODULE_0__["AnimSprite"](null, this.engine, 'img_start', 7, 11, 140, 26, -10, 0, 0, 1, true);
        this.start.animDelay = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].AnimDefaultDelay * 20;
    }

    doIntro() {
        this.intro.draw();
        this.start.draw();

        if (this.engine.keyboard.enter) {
            this.engine.keyboard.enter = false;
            this.state = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].GameStatePlay;
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
        super(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce, engine, 'img_ice',
            tx, ty, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, 0, 0, 0, 1, true);
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
                this.getTile(tx + 1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectWall ||
                spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal ||
                spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar
            ) {
                this.frozenRight = true;
            }
        }

        if (tx < this.xtile) {
            this.xtile = tx;
            if (
                this.getTile(tx - 1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectWall ||
                spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal ||
                spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar
            ) {
                this.frozenLeft = true;
            }
        }
        this.x = this.xtile * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth;
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
            this.x += _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth;
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
        if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].DirLeft  && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.l)) {
            return false;
        }
        if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].DirRight && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.r)) {
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
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveDown, true);
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
            if (tile_down && tile_down !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectFire) {
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
            case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveIceMoving:
                this.glide();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveIceCheck:
                this.push();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveDown:
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
            this.ctx.drawImage(this.image, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth*this.animRow, this.width, this.height,  this.x, this.y, this.width, this.height);
        } else if (this.length === 2) {
            this.ctx.drawImage(this.image, 1*_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth*this.animRow,
                this.width, this.height,  this.x, this.y, this.width, this.height);
            this.ctx.drawImage(this.image, 3*_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth*this.animRow,
                this.width, this.height,  this.x+_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, this.y, this.width, this.height);
        } else {
            this.ctx.drawImage(this.image, 1*_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth*this.animRow,
                this.width, this.height,  this.x, this.y, this.width, this.height);
            this.ctx.drawImage(this.image, 3*_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth*this.animRow,
                this.width, this.height,  this.x+_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth*(this.length-1), this.y, this.width, this.height);
            for (let i = 1;  i < this.length-1; i++) {
                this.ctx.drawImage(this.image, 2*_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth*this.animRow,
                    this.width, this.height,  this.x+(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth*i), this.y, this.width, this.height);
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
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth) {
            this.x += 4 * this.dirrection;
        } else {
            this.push();
        }
    }

    doDown() {
        this.counter += 4;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth) {
            this.y += 4;
        } else {
            if (!this.gravity()) {
                this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveStand, false);
            }
        }
    }

    push(dir) {
        this.dirrection = (typeof dir === 'undefined') ? this.dirrection : dir;
        if (!this.collision() && !this.gravity()) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveIceMoving, true);
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveStand, false);
        }
    }

    checkFreeze() {
        const leftSprite = this.engine.spriteTypeAt(this.xtile - 1, this.ytile);
        const rightSprite = this.engine.spriteTypeAt(this.xtile + this.length, this.ytile);
        if (
            this.getTile(this.xtile - 1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectWall ||
            leftSprite === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal ||
            leftSprite === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar
         ) {
            this.frozenLeft = true;
        } else {
            this.frozenLeft = false;
        }
        if (
            this.getTile(this.xtile + this.length, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectWall ||
            rightSprite === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal ||
            rightSprite === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar
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
            this.getTile(this.xtile - 1, this.ytile) !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectWall &&
            leftSprite !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal &&
            leftSprite !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar
         ) {
            this.frozenLeft = false;
        }
    }

    checkUnfreezeRight() {
        const rightSprite = this.engine.spriteTypeAt(this.xtile + this.length, this.ytile);
        if (
            this.frozenRight &&
            this.getTile(this.xtile + this.length, this.ytile) !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectWall &&
            rightSprite !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal &&
            rightSprite !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar
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
        super(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectJar, engine, 'img_jar',
            tx, ty, _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TileWidth, _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TileWidth, 0, 0, 0, 3, true);
        this.animDelay = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].AnimDefaultDelay * 2;
        this.onFire = false;
        this.animRow = 0;
    }

    move() {
        if (!this.moving) {
            this.collisions();
            this.gravity();
        }
        switch (this.state) {
            case _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].MoveDown:
                this.doDown();
                break;
        }
    }

    collisions() {
        if (!this.onFire && this.coorners.u === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectFire) {
            this.turnOnFire();
            this.engine.removeFire(this.xtile, this.ytile - 1);
        }
        if (this.onFire && this.engine.spriteTypeAt(this.xtile, this.ytile - 1) === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectIce) {
            this.meltIce();
        }
    }

    gravity() {
        if (!this.coorners.d) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].MoveDown, true);
            return true;
        }
        return false;
    }

    doDown() {
        this.counter += 4;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TileWidth) {
            this.y += 4;
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].MoveStand, false);
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
            this.engine.spriteTypeAt(this.xtile - 1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectIce &&
            this.engine.spriteAt(this.xtile - 1, this.ytile).frozenRight
        ) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile * this.width) - 7,
                this.ytile * this.height
            );
        }
        if (
            this.engine.spriteTypeAt(this.xtile+this.length, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectIce &&
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
        super(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal, engine, 'img_metal',
            tx, ty, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, 0, 0, 0, 1, true);
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
        if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].DirLeft  && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.l)) {
            return false;
        }
        if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].DirRight && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.r)) {
            return false;
        }
        return true;
    }

    frozenToIce() {
        const rightSprite = this.engine.spriteAt(this.xtile + 1, this.ytile);
        const leftSprite = this.engine.spriteAt(this.xtile - 1, this.ytile)
        return  !this.falling && ((rightSprite && rightSprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce && rightSprite.frozenLeft) ||
            (leftSprite && leftSprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce && leftSprite.frozenRight));
    }

    gravity() {
        if (!_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.d) && !this.frozenToIce()) {
            this.falling = true;
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveDown, true);
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
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveStand, false);
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
            case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveIceMoving:
                this.glide();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveIceCheck:
                this.push();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveDown:
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
        this.ctx.drawImage(this.image, 0, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth*this.animRow, this.width, this.height,  this.x, this.y, this.width, this.height);

        if (
            this.engine.spriteTypeAt(this.xtile - 1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce &&
            this.engine.spriteAt(this.xtile - 1, this.ytile).frozenRight
        ) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile * this.width) - 7,
                this.ytile * this.height
            );
        }
        if (
            this.engine.spriteTypeAt(this.xtile+this.length, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce &&
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
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth) {
            this.x += 4 * this.dirrection;
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveStand, false);
        }
    }

    doDown() {
        this.counter += 4;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth) {
            this.y += 4;
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveStand, false);
        }
    }

    push(dir) {
        this.dirrection = (typeof dir === 'undefined') ? this.dirrection : dir;
        if (!this.collision()) {
            this.moving = true;
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveIceMoving, true);
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveStand, false);
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
        super(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectPlayer, engine, 'img_dona', tx, ty, 48, 64, -10, -32, 2, 2, false);
        this.speed = 2;
        this.dirrection = 1;
        this.state = 0; //standing top right down left
        this.moving = false;
        this.tileWidth = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].TileWidth;
        this.tileHeight = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].TileWidth;
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
            if (this.dirrection !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirLeft) {
                //is not under a brick
                if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u)) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimTurnStart, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimTurnEnd, false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow, 4);
                } else {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart, false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow, 4);
                }
                this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveTurn, true);
                this.dirrection = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirLeft;
            } else{
                //running
                if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.l) && _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d)) {
                    //not under a brick
                    if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ul)) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRunStart, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRunEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow, 2);
                    } else {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow, 2);
                    }
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveLeft, true);
                }
                //hit an ice
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d) && (this.coorners.l === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectIce || this.coorners.l === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectMetal)) {
                    this.push();
                }
                //climb
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.l) && _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d)  && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ul) && !this.moving) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow);
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveUp, true);
                }
            }
        }
    }

    right() {
        if (!this.moving) {
            if (this.dirrection !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight) {
                if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u)) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimTurnStart, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimTurnEnd, false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow, 4);
                } else {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart, false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow, 4);
                }
                this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveTurn, true);
                this.dirrection = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight;
            } else{
                if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.r) && _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d)) {
                    if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ur)) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRunStart, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRunEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow, 2);
                    } else {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow, 2);
                    }
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveRight, true);
                }
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d) && (this.coorners.r === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectIce || this.coorners.r === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectMetal)) {
                    this.push();
                }
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.r) && _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.d) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ur) && !this.moving) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow);
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveUp, true);
                }
            }
        }
    }

    burn() {
        if (this.state !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveRip) {
            this.engine.sound.playOnce('danger');
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveRip, true);
            this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRipStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRipEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow);
        }
    }

    intro() {
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimBigFallStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimBigFallEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow, 4);
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveLevelEnter, true);
    }

    outro() {
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimFallStart, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimBigFallEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow, 4);
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveLevelExit, true);
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
                this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveDown, true);
                if (this.fallCounter >= 1) {
                    this.engine.sound.playOnce("falling");
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimBigFallStart, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimBigFallEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow, 1);
                } else {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimBigFallStart, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimBigFallEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow, 3);
                }
            } else {
                this.engine.sound.stop("falling");
                if (this.state === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveDown) {
                    this.engine.sound.play('fall');
                    this.engine.addSparks(this.xtile, this.ytile, '124, 238, 66', 10,  0.75);
                    this.engine.addSparks(this.xtile, this.ytile + 1, '122, 211, 255', 5,  1.25);
                }
                this.fallCounter = 0;
                this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand, false);
                if (this.coorners.d === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectJar) {
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
                if (this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight) {
                    if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.dr) && this.coorners.dr !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectFire) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceEnd,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow, 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceMake, true);
                    } else if (this.coorners.dr === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectIce) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceEnd,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow, 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceRemove, true);
                    } else {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceEnd,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow, 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceFail, true);
                    }
                } else {
                    if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.dl) && (this.coorners.dl !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectFire)) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceEnd,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow, 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceMake, true);
                    } else if (this.coorners.dl === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectIce) {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceEnd,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow, 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceRemove, true);
                    } else {
                        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceEnd,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow, 4);
                        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceFail, true);
                    }
                }
            }
        }
    }

    jump() {
        if (!this.moving) {
            if (this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight) {
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.r) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ur) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u)) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow);
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveUp, true);
                }
            } else {
                if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.l) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.ul) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.coorners.u)) {
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,false, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow);
                    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveUp, true);
                }
            }
        }
    }

    doRun() {
        this.counter += 1;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimFrameCount) {
            this.x += this.speed * this.dirrection;
        } else {
           this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand, false);
        }
    }

    doTurn() {
        this.counter += 1;
        if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimFrameCount) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand, false);
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
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand, false);
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
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand, false);
        }
    }

    doGravity() {
        this.counter += 1;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimFrameCount) {
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
                this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimSleepStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimSleepEnd,true, this.dirrection !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow, 48, true);
            } else {
                this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimStandStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimStandEnd,true, this.dirrection !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow, 8, true);
            }
        } else {
            this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart,_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart, false, this.dirrection !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow, 8, true);
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
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushEnd, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushEnd, false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow);
                    break;
                case 6:
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimJumpStart, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimJumpStart, false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 9:
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimJumpEnd, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimJumpEnd, false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 12:
                    this.setAnim(2, 2, false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 18:
                    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimStand, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimStand, false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                break;
            }
        } else {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand, false);
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
            this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushEnd, false, this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow, 3);
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MovePush, true);
        }
    }

    doPush() {
        this.counter += 2;
        if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimFrameCount) {
            // fixme
        } else {
            let ice =  this.engine.iceAt(this.xtile+this.dirrection, this.ytile);
            if (ice) {
                this.engine.sound.play('ice-push');
                ice.push(this.dirrection);
            }
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand, false);
        }
    }

    doIce() {
        if (this.counter === 8) {
            if (this.state === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceMake) {
                this.makeIce();
            } else{
                this.removeIceBlock();
            }
        }
        this.counter += 1;
        if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimFrameCount) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand, false);
        }
    }

    doFailIce() {
        if (this.counter === 8) {
            this.engine.sound.play('ice-disabled');
            this.engine.addSparks(this.xtile + this.dirrection, this.ytile + 1, '88,66,66');
        }
        this.counter += 1;
        if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimFrameCount) {
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand, false);
        }
    }

    collisions() {
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectPlayer) === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectFire) {
            this.burn();
        }
    }

    move () {
        this.gravity();
        this.collisions();
        if (this.state !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand) {
            this.standCounter = 0;
        }
        if (this.state !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveDown) {
            this.fallCounter = 0;
        }
        switch (this.state) {
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveRight:
                this.doRun();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveLeft:
                this.doRun();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveDown:
                this.doGravity();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveUp:
                this.doUp();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveTurn:
                this.doTurn();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceMake:
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceRemove:
                this.doIce();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceFail:
                this.doFailIce();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand:
                this.doStand();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MovePush:
                this.doPush();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveRip:
                this.doRip();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveLevelExit:
                this.doOutro();
                break;
            case _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveLevelEnter:
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
            value = sprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar ? sprite.onFire : value;
            let fl, fr;
            if (sprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce) {
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
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectPlayer:
                    this.engine.player = new _player__WEBPACK_IMPORTED_MODULE_5__["Player"](this.engine, sprite.x, sprite.y);
                    this.engine.addSprite(this.engine.player);
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce:
                    this.engine.addSprite(new _ice__WEBPACK_IMPORTED_MODULE_2__["Ice"](this.engine, sprite.x, sprite.y, parseInt(sprite.v), sprite.fl, sprite.fr));
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal:
                    this.engine.addSprite(new _metal__WEBPACK_IMPORTED_MODULE_4__["Metal"](this.engine, sprite.x, sprite.y, 1));
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectFire:
                    this.engine.addSprite(new _fire__WEBPACK_IMPORTED_MODULE_1__["Fire"](this.engine, sprite.x, sprite.y));
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar:
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
            this.particles[i] = new Particle(this.engine.ctx, tx*_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TileWidth+16, ty*_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TileWidth+16, this.color, this.intencity);
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
        this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveStand;
        this.height = height;
        this.width = width;
        this.dirrection = 0;
        this.xtile = tx;
        this.ytile = ty;
        this.x = this.xtile * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth;
        this.y = this.ytile * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth;
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

    move () { }

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

        this.xtile = Math.floor(this.x / _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth);
        this.ytile = Math.floor(this.y / _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth);
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
        this.tileWidth = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth;
        this.tileHeight = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth;
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
            return _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectOut;
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
                let tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileBackground;
                if (this.map[j][i] === 1) {
                    if (!this.getTile(i-1, j) && !this.getTile(i+1, j)) {
                        tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileBothSides;
                    } else if (!this.getTile(i-1, j)) {
                        tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileLeftSide;
                    } else if (!this.getTile(i+1, j)) {
                        tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileRightSide;
                    } else {
                        tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileMiddle;
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
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectBackground]: {
            solid: false
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectOut]: {
            solid: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectPlayer]: {
            solid: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce]: {
            solid: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal]: {
            solid: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectWall]: {
            solid: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectFire]: {
            solid: false
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar]: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlbmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9sZXZlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21ldGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RydWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ0k7O0FBRS9CLHlCQUF5Qiw4Q0FBTTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQU07QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlEQUFNO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDN0REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0M7QUFDTjtBQUNBO0FBQ0o7QUFDRztBQUNPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFRO0FBQ3BDLHlCQUF5Qiw0Q0FBSztBQUM5Qix5QkFBeUIsNENBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtFQUFrRSxpREFBTTtBQUN4RSxtRUFBbUUsaURBQU07QUFDekU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQsMERBQTBELGlEQUFNO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRCx1Q0FBdUMsaURBQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msd0NBQUc7QUFDckMsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0NBQUc7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRCx1Q0FBdUMsaURBQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlEQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDJDQUFNO0FBQ2pDOztBQUVBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RCxpREFBTTtBQUMvRDtBQUNBLG1CQUFtQixpREFBTTtBQUN6QjtBQUNBO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZUFBZSxpREFBTTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaE9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDSjtBQUNQOztBQUV4QixtQkFBbUIsc0RBQVU7O0FBRXBDO0FBQ0EsY0FBYyxpREFBTTtBQUNwQixvQkFBb0IsaURBQU0sWUFBWSxpREFBTTtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaURBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2REFBNkQsaURBQU0saUJBQWlCLGlEQUFNO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxpREFBTSxpQkFBaUIsaURBQU07QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGFBQWEsMkNBQUk7QUFDakIsMEJBQTBCLGlEQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQU07QUFDbEM7QUFDQSxTQUFTO0FBQ1QsMEJBQTBCLGlEQUFNO0FBQ2hDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxQztBQUNQO0FBQ0E7QUFDRjtBQUNJO0FBQ1E7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0EsMEJBQTBCLG9EQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLDBDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFNO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EseUJBQXlCLGlEQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBTTtBQUMvQjtBQUNBO0FBQ0EseUJBQXlCLGlEQUFNO0FBQy9CLGtEQUFrRCw0Q0FBSztBQUN2RDtBQUNBLHlCQUF5QixpREFBTTtBQUMvQixrREFBa0QsMENBQUk7QUFDdEQ7QUFDQSx5QkFBeUIsaURBQU07QUFDL0Isa0RBQWtELHdDQUFHO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNqSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ0o7QUFDSjtBQUNBOztBQUVsQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGVBQWUsRUFBRTtBQUNqQjtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFNO0FBQ2hDLHNCQUFzQiw4Q0FBTTtBQUM1QixxQkFBcUIsaURBQU07QUFDM0I7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFNO0FBQ3ZCO0FBQ0E7QUFDQSxpQkFBaUIsaURBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHNEQUFVO0FBQ25DLHlCQUF5QixzREFBVTtBQUNuQywrQkFBK0IsaURBQU07QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQU07QUFDL0I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNJO0FBQ1g7O0FBRXhCLGtCQUFrQixzREFBVTs7QUFFbkM7QUFDQSxjQUFjLGlEQUFNO0FBQ3BCLG9CQUFvQixpREFBTSxZQUFZLGlEQUFNO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsaURBQU07QUFDM0QsNENBQTRDLGlEQUFNO0FBQ2xELDRDQUE0QyxpREFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsaURBQU07QUFDM0QsMkNBQTJDLGlEQUFNO0FBQ2pELDJDQUEyQyxpREFBTTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpREFBTTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQU07QUFDNUI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBTSxhQUFhLDJDQUFJO0FBQzNDO0FBQ0E7QUFDQSxvQkFBb0IsaURBQU0sYUFBYSwyQ0FBSTtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMkNBQUk7QUFDakI7QUFDQSwwQkFBMEIsaURBQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBLDJDQUEyQyxpREFBTTtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpREFBTTtBQUN2QjtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFNO0FBQ3ZCO0FBQ0E7QUFDQSxpQkFBaUIsaURBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsaURBQU07QUFDcEQsU0FBUztBQUNULDZDQUE2QyxpREFBTSxZQUFZLGlEQUFNO0FBQ3JFO0FBQ0EsNkNBQTZDLGlEQUFNLFlBQVksaURBQU07QUFDckUsaURBQWlELGlEQUFNO0FBQ3ZELFNBQVM7QUFDVCw2Q0FBNkMsaURBQU0sWUFBWSxpREFBTTtBQUNyRTtBQUNBLDZDQUE2QyxpREFBTSxZQUFZLGlEQUFNO0FBQ3JFLGlEQUFpRCxpREFBTTtBQUN2RCwyQkFBMkIsb0JBQW9CO0FBQy9DLGlEQUFpRCxpREFBTSxZQUFZLGlEQUFNO0FBQ3pFLHNEQUFzRCxpREFBTTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQU07QUFDbEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQU07QUFDbEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw4QkFBOEIsaURBQU07QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpREFBTTtBQUNoQyxTQUFTO0FBQ1QsMEJBQTBCLGlEQUFNO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsaURBQU07QUFDL0QsMkJBQTJCLGlEQUFNO0FBQ2pDLDJCQUEyQixpREFBTTtBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxpREFBTTtBQUN6RSw0QkFBNEIsaURBQU07QUFDbEMsNEJBQTRCLGlEQUFNO0FBQ2xDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGlEQUFNO0FBQy9ELDJCQUEyQixpREFBTTtBQUNqQywyQkFBMkIsaURBQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsaURBQU07QUFDekUsNEJBQTRCLGlEQUFNO0FBQ2xDLDRCQUE0QixpREFBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzNRQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNKOztBQUUvQixrQkFBa0Isc0RBQVU7O0FBRW5DO0FBQ0EsY0FBYyxpREFBTTtBQUNwQixvQkFBb0IsaURBQU0sWUFBWSxpREFBTTtBQUM1Qyx5QkFBeUIsaURBQU07QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpREFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRCxpREFBTTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsaURBQU07QUFDMUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsaURBQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixpREFBTTtBQUNsQztBQUNBLFNBQVM7QUFDVCwwQkFBMEIsaURBQU07QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLGlEQUFNO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSxpREFBTTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSw0QkFBNEI7QUFDekMsYUFBYSw2QkFBNkI7QUFDMUMsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNB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REFBTTtBQUN6QyxxQkFBcUI7QUFDckIsbUNBQW1DLGlEQUFNO0FBQ3pDLHFCQUFxQjtBQUNyQixtQ0FBbUMsaURBQU07QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUFBO0FBQUE7QUFBc0M7O0FBRS9CO0FBQ1A7QUFDQSxTQUFTLGlEQUFNO0FBQ2Y7QUFDQSxTQUFTO0FBQ1QsU0FBUyxpREFBTTtBQUNmO0FBQ0EsU0FBUztBQUNULFNBQVMsaURBQU07QUFDZjtBQUNBLFNBQVM7QUFDVCxTQUFTLGlEQUFNO0FBQ2Y7QUFDQSxTQUFTO0FBQ1QsU0FBUyxpREFBTTtBQUNmO0FBQ0EsU0FBUztBQUNULFNBQVMsaURBQU07QUFDZjtBQUNBLFNBQVM7QUFDVCxTQUFTLGlEQUFNO0FBQ2Y7QUFDQSxTQUFTO0FBQ1QsU0FBUyxpREFBTTtBQUNmO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmaXJlbmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2ZpcmVuaWNlLmpzXCIpO1xuIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5pbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1TcHJpdGUgZXh0ZW5kcyBTcHJpdGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRlZCBTcHJpdGUsIGluaGVydHMgZnJvbSBTcHJpdGUuXHJcbiAgICAgKiBBZGRzIGRyYXdpbmcgb2YgcGljdHVyZXMgaW4gdGhlIGJvZHkgb2Ygc3ByaXRlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZW5naW5lICAgIEVuZ2luZSBFbmdpbmVcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpbWFnZSAgIERvbSBpbWFnZSBvYmplY3QgKGltZyBzcmM9KVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR4ICAgICAgVGlsZSBYIHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHkgICAgICBUaWxlIFkgcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAgIFdpZHRoIG9mIHRoZSBzcHJpdGVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgIEhlaWdodCBvZiB0aGUgc3ByaXRlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0WCBPZmZzZXQgWCBvZiBkcmF3aW5nIHRoZSBwaWN0dXJlIGludG8gdGhlIGNhbnZhc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFkgT2Zmc2V0IFkgb2YgZHJhd2luZyB0aGUgcGljdHVyZSBpbnRvIHRoZSBjYW52YXNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAgIEFuaW1hdGlvbiBmcmFtZSBzdGFydFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCAgICAgQW5pbWF0aW9uIGZyYW1lIGVuZFxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb29wICAgUmVwZWF0IGFuaW1hdGlvblxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvciAoaWQsIGVuZ2luZSwgaW1hZ2UsIHR4LCB0eSwgd2lkdGgsIGhlaWdodCwgb2Zmc2V0WCwgb2Zmc2V0WSwgc3RhcnQsIGVuZCwgbG9vcCkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBlbmdpbmUsIHR4LCB0eSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoaW1hZ2UpO1xyXG4gICAgICAgIHRoaXMuYW5pbUxvb3AgPSBsb29wO1xyXG4gICAgICAgIHRoaXMuYW5pbVN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5hbmltRW5kID0gZW5kO1xyXG4gICAgICAgIHRoaXMuYW5pbUNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5O1xyXG4gICAgICAgIHRoaXMuYW5pbURlbGF5Q291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuYW5pbVJvdyA9IDA7XHJcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WDtcclxuICAgICAgICB0aGlzLm9mZnNldFkgPSBvZmZzZXRZO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgc3ByaXRlIGFuaW1hdGlvbiBmcmFtZXNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBTdGFydCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kICAgRW5kIGZyYW1lIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCAgSWYgdHJ1ZSwgYW5pbWF0aW9uIHdpbGwgbG9vcFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAgIFJvdyBvZiB0aGUgZnJhbWVzIGluIHRoZSBzcHJpdGUgaW1hZ2VcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSBEZWxheSBiZXR3ZWVuIGVhY2ggZnJhbWVcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSAgU2V0cyBhbGwgdGhlIG5ldyB2YWx1ZXMgb25seSBvbmUgdGltZS5cclxuICAgICAqL1xyXG4gICAgc2V0QW5pbShzdGFydCwgZW5kLCBsb29wLCByb3csIGRlbGF5LCBvbmNlKSB7XHJcbiAgICAgICAgb25jZSA9ICh0eXBlb2Ygb25jZSA9PT0gJ3VuZGVmaW5lZCcpID8gZmFsc2UgOiBvbmNlO1xyXG4gICAgICAgIGRlbGF5ICA9ICh0eXBlb2YgZGVsYXkgPT09ICd1bmRlZmluZWQnKSA/IENvbnN0cy5BbmltRGVmYXVsdERlbGF5IDogZGVsYXk7XHJcbiAgICAgICAgcm93ID0gKHR5cGVvZiByb3cgPT09ICd1bmRlZmluZWQnKSA/IHRoaXMuYW5pbVJvdyA6IHJvdztcclxuICAgICAgICBpZiAoIW9uY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltU3RhcnQgPSBzdGFydDtcclxuICAgICAgICAgICAgdGhpcy5hbmltRW5kID0gZW5kO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgICAgICAgICAgdGhpcy5hbmltRGVsYXkgPSBkZWxheTtcclxuICAgICAgICAgICAgdGhpcy5hbmltUm93ID0gcm93O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1TdGFydCAhPT0gc3RhcnQgfHwgdGhpcy5hbmltRW5kICE9PSBlbmQgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUxvb3AgIT09IGxvb3AgfHwgdGhpcy5hbmltUm93ICE9PSByb3cpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbVN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltTG9vcCA9IGxvb3A7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1EZWxheSA9IGRlbGF5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltUm93ID0gcm93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmF3cyB0aGUgZnJhbWUgb2YgdGhlIHNwcml0ZSBpbiB0aGUgY2FudmFzXHJcbiAgICAgKi9cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgICAgICB0aGlzLmFuaW1Db3VudCAqIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbVJvdyAqIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgdGhpcy54ICsgdGhpcy5vZmZzZXRYLFxyXG4gICAgICAgICAgICB0aGlzLnkgKyB0aGlzLm9mZnNldFksXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbURlbGF5Q291bnQrKyA+IHRoaXMuYW5pbURlbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbUNvdW50ICs9IDE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1Db3VudCA+IHRoaXMuYW5pbUVuZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbUxvb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHRoaXMuYW5pbVN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHRoaXMuYW5pbUVuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFuaW1EZWxheUNvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IENvbnN0cyA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgVGlsZVdpZHRoOiAzMixcclxuICAgIE1vdmVTdGFuZDogMCxcclxuICAgIE1vdmVMZWZ0OiAxLFxyXG4gICAgTW92ZVJpZ2h0OiAyLFxyXG4gICAgTW92ZURvd246IDMsXHJcbiAgICBNb3ZlVXA6IDQsXHJcbiAgICBNb3ZlVHVybjogNSxcclxuICAgIE1vdmVJY2VNYWtlOiA2LFxyXG4gICAgTW92ZUljZVJlbW92ZTogNyxcclxuICAgIE1vdmVJY2VNb3Zpbmc6IDgsXHJcbiAgICBNb3ZlSWNlQ2hlY2s6IDksXHJcbiAgICBNb3ZlUmlwOiAxMCxcclxuICAgIE1vdmVQdXNoOiA4LFxyXG4gICAgTW92ZUljZUZhaWw6IDExLFxyXG4gICAgTW92ZUxldmVsRXhpdDogMTIsXHJcbiAgICBNb3ZlTGV2ZWxFbnRlcjogMTMsXHJcbiAgICBEaXJMZWZ0OiAtMSxcclxuICAgIERpclJpZ2h0OiAxLFxyXG4gICAgQW5pbURlZmF1bHREZWxheTogMixcclxuICAgIEFuaW1GcmFtZUNvdW50OiAxNixcclxuICAgIEFuaW1MZWZ0Um93OiAxLFxyXG4gICAgQW5pbVJpZ2h0Um93OiAwLFxyXG4gICAgQW5pbVJ1blN0YXJ0OiAwLFxyXG4gICAgQW5pbVJ1bkVuZDogMyxcclxuICAgIEFuaW1TdGFuZDogNCxcclxuICAgIEFuaW1UdXJuU3RhcnQ6IDQsXHJcbiAgICBBbmltVHVybkVuZDogNyxcclxuICAgIEFuaW1GYWxsU3RhcnQ6IDgsXHJcbiAgICBBbmltRmFsbEVuZDogOSxcclxuICAgIEFuaW1CaWdGYWxsU3RhcnQ6IDEwLFxyXG4gICAgQW5pbUJpZ0ZhbGxFbmQ6IDExLFxyXG4gICAgQW5pbVB1c2hTdGFydDogMTIsXHJcbiAgICBBbmltUHVzaEVuZDogMTMsXHJcbiAgICBBbmltSnVtcFN0YXJ0OiAxNCxcclxuICAgIEFuaW1KdW1wRW5kOiAxNSxcclxuICAgIEFuaW1TdGFuZFN0YXJ0OiAxNixcclxuICAgIEFuaW1TdGFuZEVuZDogMTcsXHJcbiAgICBBbmltSWNlU3RhcnQ6IDE4LFxyXG4gICAgQW5pbUljZUVuZDogMTksXHJcbiAgICBBbmltQ3JvdWNoU3RhcnQ6IDIwLFxyXG4gICAgQW5pbUNyb3VjaEVuZDogMjIsXHJcbiAgICBBbmltUmlwU3RhcnQ6IDIzLFxyXG4gICAgQW5pbVJpcEVuZDogMjQsXHJcbiAgICBBbmltU2xlZXBTdGFydDogMjUsXHJcbiAgICBBbmltU2xlZXBFbmQ6IDI2LFxyXG4gICAgVGlsZUJhY2tncm91bmQ6IDAsXHJcbiAgICBUaWxlQm90aFNpZGVzOiAzMixcclxuICAgIFRpbGVMZWZ0U2lkZTogNjQsXHJcbiAgICBUaWxlTWlkZGxlOiA5NixcclxuICAgIFRpbGVSaWdodFNpZGU6IDEyOCxcclxuICAgIE9iamVjdE91dDogLTEsXHJcbiAgICBPYmplY3RCYWNrZ3JvdW5kOiAwLFxyXG4gICAgT2JqZWN0V2FsbDogMSxcclxuICAgIE9iamVjdEljZTogMyxcclxuICAgIE9iamVjdE1ldGFsOiA0LFxyXG4gICAgT2JqZWN0SmFyOiA1LFxyXG4gICAgT2JqZWN0RmlyZTogNixcclxuICAgIE9iamVjdFBsYXllcjogNyxcclxuICAgIEdhbWVTdGF0ZVBsYXk6IDEsXHJcbiAgICBHYW1lU3RhdGVJbnRybzogMlxyXG59KTtcclxuIiwiaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICcuL2tleWJvYXJkJztcclxuaW1wb3J0IHsgU291bmQgfSBmcm9tICcuL3NvdW5kJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcclxuaW1wb3J0IHsgSWNlIH0gZnJvbSAnLi9pY2UnO1xyXG5pbXBvcnQgeyBTcGFya3MgfSBmcm9tICcuL3NmeCc7XHJcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcbi8qKlxyXG4gKiBFbmdpbmUgTG9vcFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzLCByZXNvdXJjZXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmN3aWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgICB0aGlzLmNoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gcmVzb3VyY2VzO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLnNwcml0ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnNmeHMgPSBbXTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHt9O1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAwO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmQgPSBuZXcgS2V5Ym9hcmQoKTtcclxuICAgICAgICB0aGlzLnNvdW5kID0gbmV3IFNvdW5kKHJlc291cmNlcyk7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBTY2VuZSh0aGlzKTtcclxuICAgICAgICB0aGlzLmVkaXRvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGxldmVsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xldmVsJyk7XHJcbiAgICAgICAgaWYgKGxldmVsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSBwYXJzZUludChsZXZlbCwgMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjZW5lLmxvYWQodGhpcy5sZXZlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwwLHRoaXMuY3dpZHRoLHRoaXMuY2hlaWdodCk7XHJcbiAgICAgICAgdGhpcy5tYXAuZHJhdygpO1xyXG4gICAgICAgIC8vIHJldmVyc2UgbG9vcCwgcGxheWVyIGRyYXdzIGxhc3RcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zcHJpdGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlc1tpXS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZnhzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Z4c1tpXS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpc2lvbigpIHtcclxuICAgICAgICBjb25zdCBmaXJlcyA9IHRoaXMuc3ByaXRlcy5maWx0ZXIoc3ByaXRlID0+IHNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEZpcmUpO1xyXG4gICAgICAgIGlmICghZmlyZXMubGVuZ3RoICYmICF0aGlzLmVkaXRvciAmJiB0aGlzLnBsYXllci5zdGF0ZSAhPT0gQ29uc3RzLk1vdmVMZXZlbEV4aXQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIub3V0cm8oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dExldmVsKCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWwrKztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGV2ZWwnLCB0aGlzLmxldmVsKTtcclxuICAgICAgICB0aGlzLnNjZW5lLmxvYWQodGhpcy5sZXZlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZXNbaV0uZW5naW5lTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Z4cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLnNmeHNbaV0uZW5naW5lTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3ByaXRlc01vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0gJiYgdGhpcy5zcHJpdGVzW2ldLmlkICE9PSBDb25zdHMuT2JqZWN0UGxheWVyICYmIHRoaXMuc3ByaXRlc1tpXS5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZXNNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3ByaXRlc01vdmluZykge1xyXG4gICAgICAgICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNoZWNrIGlmIG5vIHNwcml0ZXMgaGF2ZSBtb3ZlZCBmb3IgMiB0dXJuc1xyXG4gICAgICAgIGlmICghc3ByaXRlc01vdmluZyAmJiB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID0gMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMua2V5Ym9hcmQudXApIHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5wbGF5ZXIuanVtcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleWJvYXJkLmRvd24gfHwgdGhpcy5rZXlib2FyZC5hY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmljZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmtleWJvYXJkLmxlZnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxlZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlib2FyZC5yaWdodCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXlib2FyZC5lbnRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZC5zdG9wKCdkYW5nZXInKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmQuZW50ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbGxpc2lvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGljZUF0KHR4LCB0eSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaXNTcHJpdGVBdCh0eCwgdHkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJY2VCbG9jayh0eCwgdHksIGZyb3plbkxlZnQsIGZyb3plblJpZ2h0KSB7XHJcbiAgICAgICAgbGV0IGZvdW5kSWNlQmxvY2tzID0gWyBdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiYgdGhpcy5zcHJpdGVzW2ldLnl0aWxlID09PSB0eSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGljZSA9IHRoaXMuc3ByaXRlc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChpY2UueHRpbGUgLSAxID09PSB0eCB8fCBpY2UueHRpbGUgKyBpY2UubGVuZ3RoID09PSB0eCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kSWNlQmxvY2tzLnB1c2goaWNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZm91bmRJY2VCbG9ja3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlcy5wdXNoKG5ldyBJY2UodGhpcywgdHgsIHR5LCAxLCBmcm96ZW5MZWZ0LCBmcm96ZW5SaWdodCkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZm91bmRJY2VCbG9ja3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGZvdW5kSWNlQmxvY2tzWzBdLmFkZEJsb2NrKHR4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZm91bmRJY2VCbG9ja3NbMF0ueHRpbGUgPD0gZm91bmRJY2VCbG9ja3NbMV0ueHRpbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuam9pbkljZUJsb2Nrcyhmb3VuZEljZUJsb2Nrc1swXSwgZm91bmRJY2VCbG9ja3NbMV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qb2luSWNlQmxvY2tzKGZvdW5kSWNlQmxvY2tzWzFdLCBmb3VuZEljZUJsb2Nrc1swXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgam9pbkljZUJsb2NrcyhpY2VibG9ja0EsaWNlYmxvY2tCKSB7XHJcbiAgICAgICAgbGV0IHR4ID0gaWNlYmxvY2tBLnh0aWxlO1xyXG4gICAgICAgIGxldCB0eSA9IGljZWJsb2NrQS55dGlsZTtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gaWNlYmxvY2tBLmxlbmd0aCArIGljZWJsb2NrQi5sZW5ndGggKyAxO1xyXG4gICAgICAgIHRoaXMuYWRkU3ByaXRlKG5ldyBJY2UodGhpcywgdHgsIHR5LCBsZW5ndGgsIGljZWJsb2NrQS5mcm96ZW5MZWZ0LCBpY2VibG9ja0IuZnJvemVuUmlnaHQpKTtcclxuICAgICAgICB0aGlzLnJlbW92ZVNwcml0ZShpY2VibG9ja0EpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU3ByaXRlKGljZWJsb2NrQik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSWNlQmxvY2sodHgsIHR5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVzW2ldLnl0aWxlID09PSB0eSAmJlxyXG4gICAgICAgICAgICAgICAgdHggPj0gdGhpcy5zcHJpdGVzW2ldLnh0aWxlICYmXHJcbiAgICAgICAgICAgICAgICB0eCA8IHRoaXMuc3ByaXRlc1tpXS54dGlsZSArIHRoaXMuc3ByaXRlc1tpXS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0ucmVtb3ZlQmxvY2sodHgpIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZXMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRmlyZSh0eCwgdHkpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAodGhpcy5zcHJpdGVzW2ldLnl0aWxlID09PSB0eSkgJiZcclxuICAgICAgICAgICAgICAgICh0eCA9PT0gdGhpcy5zcHJpdGVzW2ldLnh0aWxlKSAmJlxyXG4gICAgICAgICAgICAgICAgKHRoaXMuc3ByaXRlc1tpXS5pZCA9PT0gQ29uc3RzLk9iamVjdEZpcmUpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVzLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFNwcml0ZShzcHJpdGUpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZXMucHVzaChzcHJpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNwcml0ZShzcHJpdGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldID09PSBzcHJpdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlcy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTcGFya3MoeHRpbGUsIHl0aWxlLCBjb2xvciwgcXVhbnRpdHksIGludGVuc2l0eSkge1xyXG4gICAgICAgIHRoaXMuc2Z4cy5wdXNoKG5ldyBTcGFya3ModGhpcywgeHRpbGUsIHl0aWxlLCBjb2xvciwgcXVhbnRpdHksIGludGVuc2l0eSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNmeChzcHJpdGUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Z4cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZnhzW2ldID09PSBzcHJpdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Z4cy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzcHJpdGVUeXBlQXQodHgsIHR5LCBleGNsdWRlSWQpIHtcclxuICAgICAgICBleGNsdWRlSWQgPSAodHlwZW9mIGV4Y2x1ZGVJZCA9PT0gJ3VuZGVmaW5lZCcpID8gQ29uc3RzLk9iamVjdE91dCA6IGV4Y2x1ZGVJZDtcclxuICAgICAgICBpZiAodHggPCAwIHx8IHR5IDwgMCB8fCB0eCA+IHRoaXMubWFwLndpZHRoIHx8IHR5ID4gdGhpcy5tYXAuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDb25zdHMuT2JqZWN0T3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubWFwLm1hcFt0eV1bdHhdKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlzU3ByaXRlQXQodHgsIHR5KSAmJiB0aGlzLnNwcml0ZXNbaV0uaWQgIT09IGV4Y2x1ZGVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbaV0uaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAubWFwW3R5XVt0eF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBDb25zdHMuT2JqZWN0QmFja2dyb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBzcHJpdGVBdCh0eCwgdHkpIHtcclxuICAgICAgICBpZiAoIXRoaXMubWFwLm1hcFt0eV1bdHhdKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlzU3ByaXRlQXQodHgsIHR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaXJlIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcclxuICAgICAgICBzdXBlcihDb25zdHMuT2JqZWN0RmlyZSwgZW5naW5lLCAnaW1nX2ZpcmUnLFxyXG4gICAgICAgICAgICB0eCwgdHksIENvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgsIDAsIDAsIDAsIDMsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9Eb3duKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9ucygpIHtcclxuICAgICAgICBpZiAodGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUsIHRoaXMueXRpbGUsIENvbnN0cy5PYmplY3RGaXJlKSA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVGaXJlKHRoaXMueHRpbGUsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVJY2VCbG9jayh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcyNTUsIDEyNiwgMTk4JywgMTUsIDAuNSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMTIsIDI1NScsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCBDb25zdHMuT2JqZWN0RmlyZSkgPT09IENvbnN0cy5PYmplY3RNZXRhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVGaXJlKHRoaXMueHRpbGUsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzI1NSwgMjIyLCAxMjcnLCAxNSwgMC41KTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICc0MSwgNDIsIDkwJywgMTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ3Jhdml0eSgpIHtcclxuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVEb3duLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBkb0Rvd24oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSA0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEZpcmUgfSBmcm9tICcuL2ZpcmUnO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lJztcclxuaW1wb3J0IHsgSmFyIH0gZnJvbSAnLi9qYXInO1xyXG5pbXBvcnQgeyBNZXRhbCB9IGZyb20gJy4vbWV0YWwnO1xyXG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuL3Jlc291cmNlcyc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKTtcclxuICAgIGxvYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBsb2FkZXIuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgUHJlbG9hZEdhbWUoKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIFByZWxvYWRHYW1lKCkge1xyXG4gICAgY29uc3QgcmVzb3VyY2VzID0gbmV3IFJlc291cmNlcygpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAndGlsZW1hcCcsICdpbWFnZXMvdGlsZW1hcC5wbmcnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19pY2UnLCAnaW1hZ2VzL2ljZS5wbmcnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19qYXInLCAnaW1hZ2VzL2phci5wbmcnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19maXJlJywgJ2ltYWdlcy9maXJlLnBuZycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX2RvbmEnLCAnaW1hZ2VzL2RvbmEucG5nJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfaW50cm8nLCAnaW1hZ2VzL2ludHJvLnBuZycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX3N0YXJ0JywgJ2ltYWdlcy9zdGFydC5wbmcnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19tZXRhbCcsICdpbWFnZXMvbWV0YWwucG5nJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdmcm9zdCcsICdpbWFnZXMvZnJvemVuLnBuZycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWljZS1wdXNoJywgJ3NvdW5kcy9zZngtaWNlLXB1c2gubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZmlyZS1vZmYnLCAnc291bmRzL3NmeC1maXJlLW9mZi5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1mYWxsaW5nJywgJ3NvdW5kcy9zZngtZmFsbGluZy5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1uZXctaWNlJywgJ3NvdW5kcy9zZngtbmV3LWljZS5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1jbGltYicsICdzb3VuZHMvc2Z4LWNsaW1iLm1wMycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWljZS1jb2xsaXNpb24nLCAnc291bmRzL3NmeC1pY2UtY29sbGlzaW9uLm1wMycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LXN0YWdlLWVudGVyJywgJ3NvdW5kcy9zZngtc3RhZ2UtZW50ZXIubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZGFuZ2VyJywgJ3NvdW5kcy9zZngtZGFuZ2VyLm1wMycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWljZS1yZW1vdmUnLCAnc291bmRzL3NmeC1pY2UtcmVtb3ZlLm1wMycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LXN0YXRlLWxlYXZlJywgJ3NvdW5kcy9zZngtc3RhdGUtbGVhdmUubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZGlzYWJsZWQnLCAnc291bmRzL3NmeC1kaXNhYmxlZC5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1mYWxsJywgJ3NvdW5kcy9zZngtZmFsbC5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1tdXNpYy1zcGFya3MnLCAnbXVzaWMvc3BhcmtzLm1wMycpO1xyXG5cclxuICAgIHJlc291cmNlcy5yZWFkeSgoKSA9PiB7XHJcbiAgICAgICAgU3RhcnRHYW1lKHJlc291cmNlcyk7XHJcbiAgICAgICAgQ2hlY2tFZGl0b3IoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTdGFydEdhbWUocmVzb3VyY2VzKSB7XHJcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMsIHJlc291cmNlcyk7XHJcbiAgICB3aW5kb3cuZ2FtZSA9IGdhbWU7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwtc2VsZWN0b3InKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gJy0xJykge1xyXG4gICAgICAgICAgICBnYW1lLmVuZ2luZS5sZXZlbCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgIGdhbWUuZW5naW5lLnNjZW5lLmxvYWQoZ2FtZS5lbmdpbmUubGV2ZWwpO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5ibHVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENoZWNrRWRpdG9yKCkge1xyXG4gICAgaWYgKHdpbmRvdy5GSVJFTklDRV9FRElUT1JfTU9ERSkge1xyXG4gICAgICAgIGdhbWUuZW5naW5lLnNvdW5kLm11c2ljT24gPSBmYWxzZTtcclxuXHRcdGdhbWUuZW5naW5lLnNvdW5kLnNvdW5kT24gPSBmYWxzZTtcclxuICAgICAgICBnYW1lLnN0YXRlID0gQ29uc3RzLkdhbWVTdGF0ZVBsYXk7XHJcbiAgICAgICAgZ2FtZS5lbmdpbmUuZWRpdG9yID0gdHJ1ZTtcclxuICAgICAgICBnYW1lLmVuZ2luZS5rZXlib2FyZC5pbnRybyA9IGZhbHNlO1xyXG4gICAgICAgIGdhbWUuZW5naW5lLnNvdW5kLm11c2ljLnBhdXNlKCk7XHJcblxyXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHh0aWxlID0gTWF0aC5mbG9vcihlLm9mZnNldFggLyAzMik7XHJcbiAgICAgICAgICAgIGNvbnN0IHl0aWxlID0gTWF0aC5mbG9vcihlLm9mZnNldFkgLyAzMik7XHJcbiAgICAgICAgICAgIGlmICh0b29sIDwgMikge1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUubWFwLm1hcFt5dGlsZV1beHRpbGVdID0gdG9vbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodG9vbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdFBsYXllcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUucGxheWVyLnggPSB4dGlsZSAqIDMyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5wbGF5ZXIueSA9IHl0aWxlICogMzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdEljZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkSWNlQmxvY2soeHRpbGUsIHl0aWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0TWV0YWw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuZW5naW5lLmFkZFNwcml0ZShuZXcgTWV0YWwoZ2FtZS5lbmdpbmUsIHh0aWxlLCB5dGlsZSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RGaXJlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRTcHJpdGUobmV3IEZpcmUoZ2FtZS5lbmdpbmUsIHh0aWxlLCB5dGlsZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RKYXI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuZW5naW5lLmFkZFNwcml0ZShuZXcgSmFyKGdhbWUuZW5naW5lLCB4dGlsZSwgeXRpbGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLXNlbGVjdG9yJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZ2FtZS5lbmdpbmUubWFwLnRoZW1lID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcclxuICAgICAgICAgICAgZS50YXJnZXQuYmx1cigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwtc2VsZWN0b3InKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09ICctMScpIHtcclxuICAgICAgICAgICAgICAgIGdhbWUuZW5naW5lLmxldmVsID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcclxuICAgICAgICAgICAgICAgIGdhbWUuZW5naW5lLnNjZW5lLmxvYWQoZ2FtZS5lbmdpbmUubGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuYmx1cigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tc2F2ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHh0LWxldmVsJykudmFsdWUgPSBKU09OLnN0cmluZ2lmeShnYW1lLmVuZ2luZS5zY2VuZS5zYXZlKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gJy4vZW5naW5lJztcclxuaW1wb3J0IHsgbGV2ZWxzIH0gZnJvbSAnLi9sZXZlbHMnO1xyXG5cclxuLyoqXHJcbiAqIEdhbWUgTG9vcFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhdnMgICBUaGUgY2FudmFzIGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7Kn0gcmVzb3VyY2VzICBHYW1lIHJlc291cmNlc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHJlc291cmNlcykge1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gbmV3IEVuZ2luZShjYW52YXMsIHJlc291cmNlcyk7XHJcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBsZXZlbHM7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVQbGF5O1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnNvdW5kcmFjaygpO1xyXG4gICAgICAgIHRoaXMuZ2FtZWxvb3AgPSB0aGlzLmdhbWVsb29wXy5iaW5kKHRoaXMpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgICAgICB0aGlzLmdhbWVsb29wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZWxvb3BfKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5HYW1lU3RhdGVJbnRybzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9JbnRybygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLkdhbWVTdGF0ZVBsYXk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVsb29wKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJbnRybygpIHtcclxuICAgICAgICB0aGlzLmludHJvID0gbmV3IEFuaW1TcHJpdGUobnVsbCwgdGhpcy5lbmdpbmUsICdpbWdfaW50cm8nLCAwLCAwLCA1NDQsIDQxNiwgMCwgMCwgMCwgMCwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgQW5pbVNwcml0ZShudWxsLCB0aGlzLmVuZ2luZSwgJ2ltZ19zdGFydCcsIDcsIDExLCAxNDAsIDI2LCAtMTAsIDAsIDAsIDEsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQuYW5pbURlbGF5ID0gQ29uc3RzLkFuaW1EZWZhdWx0RGVsYXkgKiAyMDtcclxuICAgIH1cclxuXHJcbiAgICBkb0ludHJvKCkge1xyXG4gICAgICAgIHRoaXMuaW50cm8uZHJhdygpO1xyXG4gICAgICAgIHRoaXMuc3RhcnQuZHJhdygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmdpbmUua2V5Ym9hcmQuZW50ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUua2V5Ym9hcmQuZW50ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVQbGF5O1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5zb3VuZHJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJY2UgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSwgbGVuZ3RoLCBmcm96ZW5MZWZ0LCBmcm96ZW5SaWdodCkge1xyXG4gICAgICAgIHN1cGVyKENvbnN0cy5PYmplY3RJY2UsIGVuZ2luZSwgJ2ltZ19pY2UnLFxyXG4gICAgICAgICAgICB0eCwgdHksIENvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgsIDAsIDAsIDAsIDEsIHRydWUpO1xyXG4gICAgICAgIHRoaXMueHRpbGUgPSB0eDtcclxuICAgICAgICB0aGlzLnl0aWxlID0gdHk7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5hbmltRW5kID0gMTtcclxuICAgICAgICB0aGlzLmFuaW1EZWxheSA9IDk7XHJcbiAgICAgICAgdGhpcy5hbmltUm93ID0gMDtcclxuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAwO1xyXG4gICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZnJvemVuTGVmdCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5mcm96ZW5MZWZ0ID0gZnJvemVuTGVmdDtcclxuICAgICAgICAgICAgdGhpcy5mcm96ZW5SaWdodCA9IGZyb3plblJpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGcmVlemUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQmxvY2sodHgpIHtcclxuICAgICAgICBjb25zdCBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID0gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHR4IC0gMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSArIHRoaXMubGVuZ3RoICsgMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgaWYgKHR4ID4gdGhpcy54dGlsZSkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRpbGUodHggKyAxLCB0aGlzLnl0aWxlKSA9PT0gQ29uc3RzLk9iamVjdFdhbGwgfHxcclxuICAgICAgICAgICAgICAgIHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID09PSBDb25zdHMuT2JqZWN0TWV0YWwgfHxcclxuICAgICAgICAgICAgICAgIHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID09PSBDb25zdHMuT2JqZWN0SmFyXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm96ZW5SaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eCA8IHRoaXMueHRpbGUpIHtcclxuICAgICAgICAgICAgdGhpcy54dGlsZSA9IHR4O1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFRpbGUodHggLSAxLCB0aGlzLnl0aWxlKSA9PT0gQ29uc3RzLk9iamVjdFdhbGwgfHxcclxuICAgICAgICAgICAgICAgIHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPT09IENvbnN0cy5PYmplY3RNZXRhbCB8fFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9PT0gQ29uc3RzLk9iamVjdEphclxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJvemVuTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54dGlsZSAqIENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Nwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgICAgIGlmICh0aGlzLnl0aWxlID09PSB0eSkge1xyXG4gICAgICAgICAgICBpZiAodHggPj0gdGhpcy54dGlsZSAmJiB0eCA8ICh0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJsb2NrKHR4KSB7XHJcbiAgICAgICAgaWYgKHR4ID09PSB0aGlzLnh0aWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMueHRpbGUgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy54ICs9IENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoIC09IDE7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZUxlZnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR4ID09PSB0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoIC09IDE7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZVJpZ2h0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKG5ldyBJY2UodGhpcy5lbmdpbmUsIHR4ICsgMSwgdGhpcy55dGlsZSwgdGhpcy54dGlsZSArIHRoaXMubGVuZ3RoIC0gdHggLSAxLCBmYWxzZSwgdGhpcy5mcm96ZW5SaWdodCkpO1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IHR4IC0gdGhpcy54dGlsZTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1VuZnJlZXplUmlnaHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkdsaWRlKGRpcikge1xyXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCAhPT0gMSB8fCB0aGlzLmZyb3plbkxlZnQgfHwgdGhpcy5mcm96ZW5SaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXIgPT09IENvbnN0cy5EaXJMZWZ0ICAmJiBUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5sKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXIgPT09IENvbnN0cy5EaXJSaWdodCAmJiBUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZyb3plbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mcm96ZW5MZWZ0IHx8IHRoaXMuZnJvemVuUmlnaHQ7XHJcbiAgICB9XHJcbiAgICBncmF2aXR5KCkge1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkgJiYgIXRoaXMuZnJvemVuKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZmFsbGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWNvbGxpc2lvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5HbGlkZSh0aGlzLmRpcnJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlycmVjdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGlsZV9kb3duID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZStpLCB0aGlzLnl0aWxlKzEpO1xyXG4gICAgICAgICAgICBpZiAodGlsZV9kb3duICYmIHRpbGVfZG93biAhPT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29vcm5lcnMuZCA9IHRpbGVfZG93bjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy5yID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSArIHRoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnJvemVuKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1VuZnJlZXplTGVmdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrVW5mcmVlemVSaWdodCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZUljZU1vdmluZzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2xpZGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlQ2hlY2s6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9Eb3duKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbURlbGF5Q291bnQrKyA+IHRoaXMuYW5pbURlbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbURlbGF5Q291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1Sb3cgPSB0aGlzLmFuaW1Sb3cgPT09IDAgPyAxIDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCBDb25zdHMuVGlsZVdpZHRoKnRoaXMuYW5pbVJvdywgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDEqQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCp0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAzKkNvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgqdGhpcy5hbmltUm93LFxyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICB0aGlzLngrQ29uc3RzLlRpbGVXaWR0aCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDEqQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCp0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAzKkNvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgqdGhpcy5hbmltUm93LFxyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsICB0aGlzLngrQ29uc3RzLlRpbGVXaWR0aCoodGhpcy5sZW5ndGgtMSksIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgIGkgPCB0aGlzLmxlbmd0aC0xOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAyKkNvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgqdGhpcy5hbmltUm93LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAgdGhpcy54KyhDb25zdHMuVGlsZVdpZHRoKmkpLCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5mcm96ZW5MZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoJ2Zyb3N0JyksXHJcbiAgICAgICAgICAgICAgICAodGhpcy54dGlsZSAqIHRoaXMud2lkdGgpIC0gNyxcclxuICAgICAgICAgICAgICAgIHRoaXMueXRpbGUgKiB0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5mcm96ZW5SaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLFxyXG4gICAgICAgICAgICAgICAgKHRoaXMueHRpbGUgKyB0aGlzLmxlbmd0aCkgKiB0aGlzLndpZHRoIC0gNyxcclxuICAgICAgICAgICAgICAgIHRoaXMueXRpbGUgKiB0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsaWRlKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gNCAqIHRoaXMuZGlycmVjdGlvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9Eb3duKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ3Jhdml0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdXNoKGRpcikge1xyXG4gICAgICAgIHRoaXMuZGlycmVjdGlvbiA9ICh0eXBlb2YgZGlyID09PSAndW5kZWZpbmVkJykgPyB0aGlzLmRpcnJlY3Rpb24gOiBkaXI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxpc2lvbigpICYmICF0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTW92aW5nLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tGcmVlemUoKSB7XHJcbiAgICAgICAgY29uc3QgbGVmdFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlIC0gMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgY29uc3QgcmlnaHRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSArIHRoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VGlsZSh0aGlzLnh0aWxlIC0gMSwgdGhpcy55dGlsZSkgPT09IENvbnN0cy5PYmplY3RXYWxsIHx8XHJcbiAgICAgICAgICAgIGxlZnRTcHJpdGUgPT09IENvbnN0cy5PYmplY3RNZXRhbCB8fFxyXG4gICAgICAgICAgICBsZWZ0U3ByaXRlID09PSBDb25zdHMuT2JqZWN0SmFyXHJcbiAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmZyb3plbkxlZnQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VGlsZSh0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGgsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT2JqZWN0V2FsbCB8fFxyXG4gICAgICAgICAgICByaWdodFNwcml0ZSA9PT0gQ29uc3RzLk9iamVjdE1ldGFsIHx8XHJcbiAgICAgICAgICAgIHJpZ2h0U3ByaXRlID09PSBDb25zdHMuT2JqZWN0SmFyXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tVbmZyZWV6ZUxlZnQoKSB7XHJcbiAgICAgICAgY29uc3QgbGVmdFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlIC0gMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmZyb3plbkxlZnQgJiZcclxuICAgICAgICAgICAgdGhpcy5nZXRUaWxlKHRoaXMueHRpbGUgLSAxLCB0aGlzLnl0aWxlKSAhPT0gQ29uc3RzLk9iamVjdFdhbGwgJiZcclxuICAgICAgICAgICAgbGVmdFNwcml0ZSAhPT0gQ29uc3RzLk9iamVjdE1ldGFsICYmXHJcbiAgICAgICAgICAgIGxlZnRTcHJpdGUgIT09IENvbnN0cy5PYmplY3RKYXJcclxuICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja1VuZnJlZXplUmlnaHQoKSB7XHJcbiAgICAgICAgY29uc3QgcmlnaHRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSArIHRoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuUmlnaHQgJiZcclxuICAgICAgICAgICAgdGhpcy5nZXRUaWxlKHRoaXMueHRpbGUgKyB0aGlzLmxlbmd0aCwgdGhpcy55dGlsZSkgIT09IENvbnN0cy5PYmplY3RXYWxsICYmXHJcbiAgICAgICAgICAgIHJpZ2h0U3ByaXRlICE9PSBDb25zdHMuT2JqZWN0TWV0YWwgJiZcclxuICAgICAgICAgICAgcmlnaHRTcHJpdGUgIT09IENvbnN0cy5PYmplY3RKYXJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5mcm96ZW5SaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSmFyIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcclxuICAgICAgICBzdXBlcihDb25zdHMuT2JqZWN0SmFyLCBlbmdpbmUsICdpbWdfamFyJyxcclxuICAgICAgICAgICAgdHgsIHR5LCBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoLCAwLCAwLCAwLCAzLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5ICogMjtcclxuICAgICAgICB0aGlzLm9uRmlyZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYW5pbVJvdyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0Rvd24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb2xsaXNpb25zKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vbkZpcmUgJiYgdGhpcy5jb29ybmVycy51ID09PSBDb25zdHMuT2JqZWN0RmlyZSkge1xyXG4gICAgICAgICAgICB0aGlzLnR1cm5PbkZpcmUoKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlRmlyZSh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9uRmlyZSAmJiB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSAtIDEpID09PSBDb25zdHMuT2JqZWN0SWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVsdEljZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBncmF2aXR5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb29ybmVycy5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVEb3duLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBkb0Rvd24oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSA0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0dXJuT25GaXJlKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbVJvdyA9IDE7XHJcbiAgICAgICAgdGhpcy5vbkZpcmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSwgJzI1NSwgODgsIDMzJywgMzApO1xyXG4gICAgfVxyXG5cclxuICAgIG1lbHRJY2UoKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlSWNlQmxvY2sodGhpcy54dGlsZSwgdGhpcy55dGlsZSAtIDEpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSwgJzI1NSwgODgsIDMzJywgMzApO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSwgJzMzLCA4OCwgMjU1JywgNDApO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUgLSAxLCB0aGlzLnl0aWxlKSA9PT0gQ29uc3RzLk9iamVjdEljZSAmJlxyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnh0aWxlIC0gMSwgdGhpcy55dGlsZSkuZnJvemVuUmlnaHRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLnh0aWxlICogdGhpcy53aWR0aCkgLSA3LFxyXG4gICAgICAgICAgICAgICAgdGhpcy55dGlsZSAqIHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUrdGhpcy5sZW5ndGgsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT2JqZWN0SWNlICYmXHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueHRpbGUrdGhpcy5sZW5ndGgsIHRoaXMueXRpbGUpLmZyb3plbkxlZnRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGgpICogdGhpcy53aWR0aCAtIDcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnl0aWxlICogdGhpcy5oZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEtleWJvYXJkIHByZXNzIGVuZ2luZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmtleWRvd24gPSB0aGlzLmtleWRvd25fLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5rZXl1cCA9IHRoaXMua2V5dXBfLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnRybyA9IHRydWU7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duLCBmYWxzZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXl1cCwgZmFsc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW50cm8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW50cm8gPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX2FjdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fYWN0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgKCkgPT4gdGhpcy5kb3duID0gZmFsc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fbGVmdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fbGVmdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsICgpID0+IHRoaXMubGVmdCA9IGZhbHNlKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX3JpZ2h0JykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9yaWdodCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsICgpID0+IHRoaXMucmlnaHQgPSBmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9zZWxlY3QnKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCAoKSA9PiB0aGlzLmVudGVyID0gdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGtleWRvd25fKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDM3OiAvLyBMZWZ0XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzg6IC8vIFVwXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM5OiAvLyBSaWdodFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQwOiAvLyBEb3duXHJcbiAgICAgICAgICAgIGNhc2UgMzI6IC8vIFNwYWNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMzogLy9FbnRlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtleXVwXyhlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAzNzogLy8gTGVmdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzODogLy8gVXBcclxuICAgICAgICAgICAgICAgIHRoaXMudXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM5OiAvLyBSaWdodFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDA6IC8vIERvd25cclxuICAgICAgICAgICAgY2FzZSAzMjogLy8gU3BhY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEzOiAvL0VudGVyXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgbGV2ZWxzID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjAsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MTEsXCJ5XCI6NCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6NixcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6MTAsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwxLDAsMSwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6MSxcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjozLFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo2LFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo0LFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo1LFwidlwiOjR9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEyLFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMixcInlcIjo2LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTMsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjExLFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6NixcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDEsMSwxLDEsMSwwLDAsMCwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjoyLFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjE0LFwieVwiOjYsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo0LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjo2LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjo1LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6NixcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjExLFwieVwiOjUsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo4LFwieVwiOjYsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6MCxcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjo4LFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMixcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTMsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjExLFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjgsXCJ2XCI6NX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6NyxcInZcIjozfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjEyLFwieVwiOjYsXCJ2XCI6Mn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo0LFwieVwiOjcsXCJ2XCI6M30sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjozLFwieVwiOjYsXCJ2XCI6Mn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo1LFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo0LFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjozLFwieVwiOjcsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6NixcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoxMSxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6MTAsXCJ2XCI6M30sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo5LFwidlwiOjN9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NyxcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MyxcInlcIjo1LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6OSxcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MyxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6NCxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjo1LFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjEzLFwieVwiOjMsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjozLFwieVwiOjQsXCJ2XCI6MSxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6NixcInZcIjoxLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2V9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6OCxcInlcIjo2LFwidlwiOjEsXCJmbFwiOmZhbHNlLFwiZnJcIjpmYWxzZX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo2LFwidlwiOjEsXCJmbFwiOmZhbHNlLFwiZnJcIjpmYWxzZX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoyLFwieVwiOjgsXCJ2XCI6MTMsXCJmbFwiOnRydWUsXCJmclwiOmZhbHNlfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjIsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjMsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo0LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo3LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjExLFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMyxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjE0LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTQsXCJ5XCI6NCxcInZcIjoxLFwiZmxcIjp0cnVlLFwiZnJcIjp0cnVlfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjIsXCJ5XCI6NSxcInZcIjoxLFwiZmxcIjp0cnVlLFwiZnJcIjp0cnVlfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjoxLFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjEyLFwieVwiOjQsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo4LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjoxMSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjExLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6OCxcInlcIjo1LFwidlwiOjV9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6NCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6NixcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NSxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwwLDAsMSwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjoxLFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjgsXCJ5XCI6NixcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo2LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo5LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjoxMCxcInZcIjoyfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6OSxcInZcIjo3fSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjExLFwieVwiOjYsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMSxcInlcIjo1LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjo1LFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjYsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6NSxcInlcIjo0LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6OCxcInlcIjo1LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6OCxcInlcIjo0LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6OCxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwxLDEsMSwxLDEsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwxLDEsMSwwLDAsMCwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwwLDAsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjoxMCxcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjozLFwieVwiOjQsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoyLFwieVwiOjYsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjozLFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo0LFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo1LFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo2LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMSxcInlcIjo2LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MixcInlcIjo1LFwidlwiOjEwfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6NCxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwxLDAsMCwxLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDAsMCwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwxLDEsMCwwLDEsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjo2LFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjMsXCJ5XCI6MyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEzLFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo3LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NCxcInlcIjo0LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjozLFwidlwiOjJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6MyxcInZcIjoyfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6MyxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDEsMSwxLDEsMSwxLDEsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjo3LFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjgsXCJ5XCI6NSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjUsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoyLFwieVwiOjMsXCJ2XCI6Mn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxNCxcInlcIjo0LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTQsXCJ5XCI6NCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjEzLFwieVwiOjMsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxNCxcInlcIjozLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo1LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjIsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMyxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MyxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MyxcInlcIjo4LFwidlwiOjExfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjQsXCJ5XCI6OSxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjoyLFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjEyLFwieVwiOjMsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NCxcInhcIjoxMCxcInlcIjozLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjozLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NCxcInhcIjo3LFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NCxcInhcIjoxMCxcInlcIjoxMCxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjo1LFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjIsXCJ5XCI6MyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjQsXCJ5XCI6MyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6MyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo0LFwieFwiOjMsXCJ5XCI6MyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjE0LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTMsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMSxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEyLFwieVwiOjEwLFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDEsMSwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDEsMCwwLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjYsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6OCxcInlcIjo0LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjUsXCJ4XCI6NixcInlcIjoxMSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NCxcInhcIjo3LFwieVwiOjQsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6MSxcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoxMCxcInlcIjo2LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJmbFwiOmZhbHNlLFwiZnJcIjpmYWxzZSxcInhcIjoxMCxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2UsXCJ4XCI6NixcInlcIjo5LFwidlwiOjV9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJmbFwiOmZhbHNlLFwiZnJcIjpmYWxzZSxcInhcIjo3LFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlLFwieFwiOjYsXCJ5XCI6NyxcInZcIjo1fSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2UsXCJ4XCI6NixcInlcIjo1LFwidlwiOjV9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo2LFwieVwiOjYsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjo0LFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDAsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwxLDEsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMSwxLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjcsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6NyxcInZcIjoxLFwiZmxcIjp0cnVlLFwiZnJcIjp0cnVlfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjksXCJ5XCI6NyxcInZcIjoxLFwiZmxcIjp0cnVlLFwiZnJcIjp0cnVlfSxcclxuICAgICAgICAgICAge1wiaWRcIjo0LFwieFwiOjEwLFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NCxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6NyxcInlcIjo1LFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDEsMSwwLDAsMCwwLDEsMSwwLDAsMCwxLDEsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwxLDEsMCwwLDAsMCwxLDEsMCwwLDAsMSwxLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMSwxLDEsMSwwLDAsMSwxLDAsMSwxLDEsMSwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDEsMSwwLDAsMCwxLDEsMSwwLDAsMCwxLDEsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwxLDEsMCwxLDAsMCwwLDAsMSwwLDAsMCwxLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDEsMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjYsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6NCxcInlcIjo0LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTMsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo0LFwieFwiOjcsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjMsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6NyxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwwLDAsMCwwLDAsMCwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMCwwLDAsMCwwLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMCwwLDEsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMCwwLDEsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjo5LFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjksXCJ5XCI6NSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjcsXCJ5XCI6NixcInZcIjoyfSxcclxuICAgICAgICAgICAge1wiaWRcIjo0LFwieFwiOjcsXCJ5XCI6NSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjcsXCJ5XCI6OSxcInZcIjp0cnVlfSxcclxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjgsXCJ5XCI6MTAsXCJ2XCI6dHJ1ZX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NSxcInhcIjo5LFwieVwiOjgsXCJ2XCI6dHJ1ZX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbWFwOiBbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDAsMCwwLDAsMCwwLDAsMSwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDAsMCwwLDAsMCwxLDEsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzcHJpdGVzOiBbXHJcbiAgICAgICAgICAgIHtpZCA6NywgeDogMTMsIHk6IDIsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjMsIHg6IDQsIHk6IDQsIHY6IDh9LFxyXG4gICAgICAgICAgICB7aWQgOjMsIHg6IDExLCB5OiAzLCB2OiA0fSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiAzLCB5OiA1LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA0LCB5OiA2LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA1LCB5OiA3LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiAxMCwgeTogNiwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogMTEsIHk6IDUsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDE0LCB5OiAxMCwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogMTQsIHk6IDksIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDIsIHk6IDEwLCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA5LCB5OiA4LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiAyLCB5OiA5LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA4LCB5OiA4LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA3LCB5OiA4LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA2LCB5OiA4LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA4LCB5OiAxMCwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogNywgeTogMTAsIHY6IDF9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB0aGVtZTogOFxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjYsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MTQsXCJ5XCI6MTAsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwxLDAsMSwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDEsMSwwLDAsMSwwLDEsMSwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMCwwLDEsMSwwLDEsMCwxLDAsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwxLDEsMSwxLDAsMSwwLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwwLDAsMSwwLDEsMSwwLDEsMCwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMCwwLDEsMCwwLDEsMCwxLDAsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwxLDAsMCwxLDEsMSwxLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6OSxcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoxMCxcInlcIjoxMSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6MSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjQsXCJ5XCI6MTEsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo4LFwieVwiOjUsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbl07XHJcblxyXG4iLCJpbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ldGFsIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHksIGxlbmd0aCkge1xyXG4gICAgICAgIHN1cGVyKENvbnN0cy5PYmplY3RNZXRhbCwgZW5naW5lLCAnaW1nX21ldGFsJyxcclxuICAgICAgICAgICAgdHgsIHR5LCBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoLCAwLCAwLCAwLCAxLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnh0aWxlID0gdHg7XHJcbiAgICAgICAgdGhpcy55dGlsZSA9IHR5O1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuYW5pbUVuZCA9IDE7XHJcbiAgICAgICAgdGhpcy5hbmltRGVsYXkgPSA5O1xyXG4gICAgICAgIHRoaXMuYW5pbVJvdyA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gMDtcclxuICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5HbGlkZShkaXIpIHtcclxuICAgICAgICBpZiAoZGlyID09PSBDb25zdHMuRGlyTGVmdCAgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMubCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlyID09PSBDb25zdHMuRGlyUmlnaHQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMucikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmcm96ZW5Ub0ljZSgpIHtcclxuICAgICAgICBjb25zdCByaWdodFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueHRpbGUgKyAxLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBjb25zdCBsZWZ0U3ByaXRlID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54dGlsZSAtIDEsIHRoaXMueXRpbGUpXHJcbiAgICAgICAgcmV0dXJuICAhdGhpcy5mYWxsaW5nICYmICgocmlnaHRTcHJpdGUgJiYgcmlnaHRTcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiYgcmlnaHRTcHJpdGUuZnJvemVuTGVmdCkgfHxcclxuICAgICAgICAgICAgKGxlZnRTcHJpdGUgJiYgbGVmdFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJiBsZWZ0U3ByaXRlLmZyb3plblJpZ2h0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ3Jhdml0eSgpIHtcclxuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICYmICF0aGlzLmZyb3plblRvSWNlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZmFsbGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWNvbGxpc2lvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5HbGlkZSh0aGlzLmRpcnJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlycmVjdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ncmF2aXR5KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlTW92aW5nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VDaGVjazpcclxuICAgICAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0Rvd24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgICAgICBpZiAodGhpcy5hbmltRGVsYXlDb3VudCsrID4gdGhpcy5hbmltRGVsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbVJvdyA9IHRoaXMuYW5pbVJvdyA9PT0gMCA/IDEgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgQ29uc3RzLlRpbGVXaWR0aCp0aGlzLmFuaW1Sb3csIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSAtIDEsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT2JqZWN0SWNlICYmXHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueHRpbGUgLSAxLCB0aGlzLnl0aWxlKS5mcm96ZW5SaWdodFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLFxyXG4gICAgICAgICAgICAgICAgKHRoaXMueHRpbGUgKiB0aGlzLndpZHRoKSAtIDcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnl0aWxlICogdGhpcy5oZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSt0aGlzLmxlbmd0aCwgdGhpcy55dGlsZSkgPT09IENvbnN0cy5PYmplY3RJY2UgJiZcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54dGlsZSt0aGlzLmxlbmd0aCwgdGhpcy55dGlsZSkuZnJvemVuTGVmdFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLFxyXG4gICAgICAgICAgICAgICAgKHRoaXMueHRpbGUgKyB0aGlzLmxlbmd0aCkgKiB0aGlzLndpZHRoIC0gNyxcclxuICAgICAgICAgICAgICAgIHRoaXMueXRpbGUgKiB0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2xpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSA0ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb0Rvd24oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSA0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdXNoKGRpcikge1xyXG4gICAgICAgIHRoaXMuZGlycmVjdGlvbiA9ICh0eXBlb2YgZGlyID09PSAndW5kZWZpbmVkJykgPyB0aGlzLmRpcnJlY3Rpb24gOiBkaXI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxpc2lvbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZU1vdmluZywgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlcyc7XHJcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcclxuICAgICAgICBzdXBlcihDb25zdHMuT2JqZWN0UGxheWVyLCBlbmdpbmUsICdpbWdfZG9uYScsIHR4LCB0eSwgNDgsIDY0LCAtMTAsIC0zMiwgMiwgMiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAyO1xyXG4gICAgICAgIHRoaXMuZGlycmVjdGlvbiA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDA7IC8vc3RhbmRpbmcgdG9wIHJpZ2h0IGRvd24gbGVmdFxyXG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aWxlV2lkdGggPSBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgICAgIHRoaXMudGlsZUhlaWdodCA9IENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5hbmltRGVsYXkgPSAzO1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhbmRDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLmludHJvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGVmdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIC8vaWYgc3RhbmRpbmcgdGhlbiB0dXJuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gIT09IENvbnN0cy5EaXJMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAvL2lzIG5vdCB1bmRlciBhIGJyaWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltVHVyblN0YXJ0LCBDb25zdHMuQW5pbVR1cm5FbmQsIGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVHVybiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSBDb25zdHMuRGlyTGVmdDtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgLy9ydW5uaW5nXHJcbiAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmwpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9ub3QgdW5kZXIgYSBicmlja1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1SdW5TdGFydCwgQ29uc3RzLkFuaW1SdW5FbmQsIHRydWUsIENvbnN0cy5BbmltTGVmdFJvdywgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIENvbnN0cy5BbmltQ3JvdWNoRW5kLCB0cnVlLCBDb25zdHMuQW5pbUxlZnRSb3csIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlTGVmdCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2hpdCBhbiBpY2VcclxuICAgICAgICAgICAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSAmJiAodGhpcy5jb29ybmVycy5sID09PSBDb25zdHMuT2JqZWN0SWNlIHx8IHRoaXMuY29vcm5lcnMubCA9PT0gQ29uc3RzLk9iamVjdE1ldGFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jbGltYlxyXG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmwpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnVsKSAmJiAhdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1QdXNoU3RhcnQsQ29uc3RzLkFuaW1QdXNoU3RhcnQsZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVVwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByaWdodCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gIT09IENvbnN0cy5EaXJSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVR1cm5TdGFydCwgQ29uc3RzLkFuaW1UdXJuRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVR1cm4sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gQ29uc3RzLkRpclJpZ2h0O1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVJ1blN0YXJ0LCBDb25zdHMuQW5pbVJ1bkVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIENvbnN0cy5BbmltQ3JvdWNoRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVJpZ2h0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSAmJiAodGhpcy5jb29ybmVycy5yID09PSBDb25zdHMuT2JqZWN0SWNlIHx8IHRoaXMuY29vcm5lcnMuciA9PT0gQ29uc3RzLk9iamVjdE1ldGFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudXIpICYmICF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVB1c2hTdGFydCxDb25zdHMuQW5pbVB1c2hTdGFydCxmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVVwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXJuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBDb25zdHMuTW92ZVJpcCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5T25jZSgnZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVSaXAsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1SaXBTdGFydCxDb25zdHMuQW5pbVJpcEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGludHJvKCkge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUJpZ0ZhbGxTdGFydCxDb25zdHMuQW5pbUJpZ0ZhbGxFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVMZXZlbEVudGVyLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRybygpIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1GYWxsU3RhcnQsIENvbnN0cy5BbmltQmlnRmFsbEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUxldmVsRXhpdCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGRvUmlwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBncmF2aXR5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvb3JuZXJzLmQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJvcigndW5kZWZpbmVkIGNvb3JuZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mYWxsQ291bnRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheU9uY2UoXCJmYWxsaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUJpZ0ZhbGxTdGFydCwgQ29uc3RzLkFuaW1CaWdGYWxsRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCAxKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQmlnRmFsbFN0YXJ0LCBDb25zdHMuQW5pbUJpZ0ZhbGxFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQuc3RvcChcImZhbGxpbmdcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ29uc3RzLk1vdmVEb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnZmFsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMzgsIDY2JywgMTAsICAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSArIDEsICcxMjIsIDIxMSwgMjU1JywgNSwgIDEuMjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvb3JuZXJzLmQgPT09IENvbnN0cy5PYmplY3RKYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBqYXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGphciAmJiBqYXIub25GaXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVybigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpY2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZHIpICYmIHRoaXMuY29vcm5lcnMuZHIgIT09IENvbnN0cy5PYmplY3RGaXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LENvbnN0cy5BbmltSWNlRW5kLGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZU1ha2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb29ybmVycy5kciA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1JY2VTdGFydCxDb25zdHMuQW5pbUljZUVuZCxmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VSZW1vdmUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LENvbnN0cy5BbmltSWNlRW5kLGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZUZhaWwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kbCkgJiYgKHRoaXMuY29vcm5lcnMuZGwgIT09IENvbnN0cy5PYmplY3RGaXJlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1JY2VTdGFydCxDb25zdHMuQW5pbUljZUVuZCxmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZU1ha2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb29ybmVycy5kbCA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1JY2VTdGFydCxDb25zdHMuQW5pbUljZUVuZCxmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZVJlbW92ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsQ29uc3RzLkFuaW1JY2VFbmQsZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VGYWlsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganVtcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51cikgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LENvbnN0cy5BbmltUHVzaFN0YXJ0LGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVXAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmwpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51bCkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LENvbnN0cy5BbmltUHVzaFN0YXJ0LGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVVcCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9SdW4oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQgKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9UdXJuKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb091dHJvKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgJSAxMCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlubmVyQ291bnRlciArPSAxO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMzgsIDY2JywgMTUsICAwLjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcyNTUsIDEzNSwgMTI0JywgMjAsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gNSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcxMjIsIDIxMSwgMjU1JywgMjUsICAxLjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciAlIDIgPT09IDAgJiYgdGhpcy5pbm5lckNvdW50ZXIgPCA2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdjbGltYicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciAlIDIgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy55ICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy55IC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA+PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ3N0YXRlLWxlYXZlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5uZXh0TGV2ZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9JbnRybygpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID09PSA4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMzgsIDY2JywgMjAsICAwLjUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzI1NSwgMTM1LCAxMjQnLCAxNSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTIyLCAyMTEsIDI1NScsIDEwLCAgMS41KTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnc3RhZ2UtZW50ZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+PSAzMikge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5zdG9wKFwiZmFsbGluZ1wiKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvR3Jhdml0eSgpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgICAgICAgICAgdGhpcy5mYWxsQ291bnRlcisrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb1N0YW5kKCkge1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhbmRDb3VudGVyKysgPiA1MDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVNsZWVwU3RhcnQsQ29uc3RzLkFuaW1TbGVlcEVuZCx0cnVlLCB0aGlzLmRpcnJlY3Rpb24gIT09IDEgPyBDb25zdHMuQW5pbUxlZnRSb3cgOiBDb25zdHMuQW5pbVJpZ2h0Um93LCA0OCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1TdGFuZFN0YXJ0LENvbnN0cy5BbmltU3RhbmRFbmQsdHJ1ZSwgdGhpcy5kaXJyZWN0aW9uICE9PSAxID8gQ29uc3RzLkFuaW1MZWZ0Um93IDogQ29uc3RzLkFuaW1SaWdodFJvdywgOCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCxDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uICE9PSAxID8gQ29uc3RzLkFuaW1MZWZ0Um93IDogQ29uc3RzLkFuaW1SaWdodFJvdywgOCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvVXAoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSAxOCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY291bnRlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2NsaW1iJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcxMjQsIDIzOCwgNjYnLCAxMCwgIDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMjU1LCAxMzUsIDEyNCcsIDUsIDEuMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVB1c2hFbmQsIENvbnN0cy5BbmltUHVzaEVuZCwgZmFsc2UsIHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0ID8gQ29uc3RzLkFuaW1SaWdodFJvdyA6IENvbnN0cy5BbmltTGVmdFJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSnVtcFN0YXJ0LCBDb25zdHMuQW5pbUp1bXBTdGFydCwgZmFsc2UsIHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0ID8gQ29uc3RzLkFuaW1SaWdodFJvdyA6IENvbnN0cy5BbmltTGVmdFJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSnVtcEVuZCwgQ29uc3RzLkFuaW1KdW1wRW5kLCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gOCAqIHRoaXMuZGlycmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKDIsIDIsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxODpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1TdGFuZCwgQ29uc3RzLkFuaW1TdGFuZCwgZmFsc2UsIHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0ID8gQ29uc3RzLkFuaW1SaWdodFJvdyA6IENvbnN0cy5BbmltTGVmdFJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWtlSWNlKCkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ25ldy1pY2UnKTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRJY2VCbG9jayh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlKzEpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlICsgMSk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUgKyAxLCAnMTI0LCAyMTQsIDI1NScsIDUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUljZUJsb2NrKCkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1yZW1vdmUnKTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVJY2VCbG9jayh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlKzEpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlICsgMSk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUgKyAxLCAnMTI0LCAyMTQsIDI1NScsIDUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2goKSB7XHJcbiAgICAgICAgbGV0IGljZSA9ICB0aGlzLmVuZ2luZS5pY2VBdCh0aGlzLnh0aWxlK3RoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgaWYgKGljZSAmJiBpY2UuY2FuR2xpZGUodGhpcy5kaXJyZWN0aW9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSwgJzI1NSwgMjU1LCAyNTUnLCAzKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUsICcxMjQsIDIxNCwgMjU1JywgMywgMS41KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LCBDb25zdHMuQW5pbVB1c2hFbmQsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3csIDMpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlUHVzaCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvUHVzaCgpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMjtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICAgICAgICAvLyBmaXhtZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpY2UgPSAgdGhpcy5lbmdpbmUuaWNlQXQodGhpcy54dGlsZSt0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUpO1xyXG4gICAgICAgICAgICBpZiAoaWNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtcHVzaCcpO1xyXG4gICAgICAgICAgICAgICAgaWNlLnB1c2godGhpcy5kaXJyZWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9JY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA9PT0gOCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ29uc3RzLk1vdmVJY2VNYWtlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VJY2UoKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJY2VCbG9jaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb0ZhaWxJY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA9PT0gOCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUgKyAxLCAnODgsNjYsNjYnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpc2lvbnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCBDb25zdHMuT2JqZWN0UGxheWVyKSA9PT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcclxuICAgICAgICAgICAgdGhpcy5idXJuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmUgKCkge1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9ucygpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBDb25zdHMuTW92ZVN0YW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhbmRDb3VudGVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IENvbnN0cy5Nb3ZlRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGxDb3VudGVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVSaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9SdW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlTGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9SdW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9HcmF2aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZVVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1VwKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZVR1cm46XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvVHVybigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VNYWtlOlxyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlUmVtb3ZlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0ljZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VGYWlsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0ZhaWxJY2UoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlU3RhbmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvU3RhbmQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlUHVzaDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9QdXNoKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZVJpcDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9SaXAoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlTGV2ZWxFeGl0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb091dHJvKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZUxldmVsRW50ZXI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvSW50cm8oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBSZXNvdXJjZXMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLnJlc291cmNlcyA9IHsgfTtcclxuICAgICAgICB0aGlzLmxvYWRlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICAgICAgaWYgKGNhbnZhcykge1xyXG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZCh0eXBlLCBuYW1lLCBzcmMpIHtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb25zLnB1c2goe3R5cGU6IHR5cGUsIG5hbWU6IG5hbWUsIHNyYzogc3JjfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXNbbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2soY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodGhpcy5jdHgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDUwLCAyNTAsIHRoaXMubG9hZGVkICogNDUwIC8gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsIDQwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZGVkID09PSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlYWR5KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCByZXNvdXJjZSBvZiB0aGlzLmRlZmluaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZS50eXBlID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2soY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSByZXNvdXJjZS5zcmM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlc1tyZXNvdXJjZS5uYW1lXSA9IGltYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZS50eXBlID09PSdhdWRpbycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKHJlc291cmNlLnNyYyk7XHJcbiAgICAgICAgICAgICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5dGhyb3VnaCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2soY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlc1tyZXNvdXJjZS5uYW1lXSA9IGF1ZGlvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBGaXJlIH0gZnJvbSAnLi9maXJlJztcclxuaW1wb3J0IHsgSWNlIH0gZnJvbSAnLi9pY2UnO1xyXG5pbXBvcnQgeyBKYXIgfSBmcm9tICcuL2phcic7XHJcbmltcG9ydCB7IE1ldGFsIH0gZnJvbSAnLi9tZXRhbCc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgVGlsZU1hcCB9IGZyb20gJy4vdGlsZW1hcCc7XHJcbmltcG9ydCB7IGxldmVscyB9IGZyb20gJy4vbGV2ZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgIGRhdGEubWFwID0gdGhpcy5lbmdpbmUubWFwLm1hcDtcclxuICAgICAgICBkYXRhLnRoZW1lID0gdGhpcy5lbmdpbmUubWFwLnRoZW1lO1xyXG4gICAgICAgIGRhdGEuc3ByaXRlcyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc3ByaXRlIG9mIHRoaXMuZW5naW5lLnNwcml0ZXMpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gKHR5cGVvZiBzcHJpdGUubGVuZ3RoID09PSBcInVuZGVmaW5lZFwiKSA/IDEgOiBzcHJpdGUubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEphciA/IHNwcml0ZS5vbkZpcmUgOiB2YWx1ZTtcclxuICAgICAgICAgICAgbGV0IGZsLCBmcjtcclxuICAgICAgICAgICAgaWYgKHNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xyXG4gICAgICAgICAgICAgICAgZmwgPSBzcHJpdGUuZnJvemVuTGVmdDtcclxuICAgICAgICAgICAgICAgIGZyID0gc3ByaXRlLmZyb3plblJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGEuc3ByaXRlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogc3ByaXRlLmlkLFxyXG4gICAgICAgICAgICAgICAgXCJ4XCI6IHNwcml0ZS54dGlsZSxcclxuICAgICAgICAgICAgICAgIFwieVwiOiBzcHJpdGUueXRpbGUsXHJcbiAgICAgICAgICAgICAgICBcInZcIjogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBcImZsXCI6IGZsLFxyXG4gICAgICAgICAgICAgICAgXCJmclwiOiBmclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoaW5kZXgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGxldmVsc1tpbmRleF0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmdpbmUubGV2ZWwgPSBpbmRleDtcclxuICAgICAgICBjb25zdCBsZXZlbCA9IGxldmVsc1tpbmRleF07XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc3ByaXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLm1hcCA9IG5ldyBUaWxlTWFwKHRoaXMuZW5naW5lLCBsZXZlbC5tYXAsIGxldmVsLnRoZW1lKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiBsZXZlbC5zcHJpdGVzKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaChzcHJpdGUuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdFBsYXllcjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZSh0aGlzLmVuZ2luZS5wbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0SWNlOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShuZXcgSWNlKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnksIHBhcnNlSW50KHNwcml0ZS52KSwgc3ByaXRlLmZsLCBzcHJpdGUuZnIpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdE1ldGFsOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShuZXcgTWV0YWwodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0RmlyZTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IEZpcmUodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0SmFyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGphciA9IG5ldyBKYXIodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwcml0ZS52ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgamFyLnR1cm5PbkZpcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKGphcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmNsYXNzIFBhcnRpY2xlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIGNvbG9yLCBpbnRlbmNpdHkpIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gKHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcpID8gJzI1NSwyNTUsMjU1JyA6IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuciA9IDM7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudnggPSAoTWF0aC5yYW5kb20oKSAqIDQgLSAyKSAqIGludGVuY2l0eTtcclxuICAgICAgICB0aGlzLnZ5ID0gKE1hdGgucmFuZG9tKCkgKiA2IC0gNCkgKiBpbnRlbmNpdHk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDAuMTU7XHJcbiAgICAgICAgdGhpcy5saWZlID0gMjU1O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgbGV0IG9wYWNpdHkgPSB0aGlzLmxpZmUgLyAyNTU7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoJyArIHRoaXMuY29sb3IrICcsJyArIG9wYWNpdHkgKyAnKSc7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnIsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMudng7XHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudnk7XHJcbiAgICAgICAgdGhpcy52eSArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMubGlmZSAtPSA1O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3BhcmtzIGV4dGVuZHMgU3ByaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoZW5naW5lLCB0eCwgdHksIGNvbG9yLCBsZW5ndGgsIGludGVuY2l0eSkge1xyXG4gICAgICAgIHN1cGVyKG51bGwsIGVuZ2luZSwgdHgsIHR5LCAzMiwgMzIpO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykgPyAnMjU1LDI1NSwyNTUnIDogY29sb3I7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSAodHlwZW9mIGxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpID8gMTAgOiBsZW5ndGg7XHJcbiAgICAgICAgdGhpcy5pbnRlbmNpdHkgPSAodHlwZW9mIGludGVuY2l0eSA9PT0gJ3VuZGVmaW5lZCcpID8gMSA6IGludGVuY2l0eTtcclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXSA9IG5ldyBQYXJ0aWNsZSh0aGlzLmVuZ2luZS5jdHgsIHR4KkNvbnN0cy5UaWxlV2lkdGgrMTYsIHR5KkNvbnN0cy5UaWxlV2lkdGgrMTYsIHRoaXMuY29sb3IsIHRoaXMuaW50ZW5jaXR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5jdHguc2F2ZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0uZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuZ2luZS5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZ2luZU1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldLm1vdmUoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFydGljbGVzW2ldLmxpZmUgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucGFydGljbGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVTZngodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJy4vZW5naW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3VuZCB7XHJcblx0Y29uc3RydWN0b3IocmVzb3VyY2VzKSB7XHJcblx0XHR0aGlzLnJlc291cmNlcyA9IHJlc291cmNlcztcclxuXHRcdHRoaXMubXVzaWNPbiA9IHRydWU7XHJcblx0XHR0aGlzLnNvdW5kT24gPSB0cnVlO1xyXG5cclxuXHRcdHRoaXMuc2Z4Vm9sdW1lID0gMC4zO1xyXG5cdFx0dGhpcy5zZnggPSB7XHJcblx0XHRcdFwiZmlyZS1vZmZcIjogcmVzb3VyY2VzLmdldCgnc2Z4LWZpcmUtb2ZmJyksXHJcblx0XHRcdFwiaWNlLXB1c2hcIjogcmVzb3VyY2VzLmdldCgnc2Z4LWljZS1wdXNoJyksXHJcblx0XHRcdFwiZmFsbFwiOiByZXNvdXJjZXMuZ2V0KCdzZngtZmFsbCcpLFxyXG5cdFx0XHRcImZhbGxpbmdcIjogcmVzb3VyY2VzLmdldCgnc2Z4LWZhbGxpbmcnKSxcclxuXHRcdFx0XCJuZXctaWNlXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1uZXctaWNlJyksXHJcblx0XHRcdFwiY2xpbWJcIjogcmVzb3VyY2VzLmdldCgnc2Z4LWNsaW1iJyksXHJcblx0XHRcdFwiaWNlLWNvbGxpc2lvblwiOiByZXNvdXJjZXMuZ2V0KCdzZngtaWNlLWNvbGxpc2lvbicpLFxyXG5cdFx0XHRcInN0YWdlLWVudGVyXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1zdGFnZS1lbnRlcicpLFxyXG5cdFx0XHRcImRhbmdlclwiOiByZXNvdXJjZXMuZ2V0KCdzZngtZGFuZ2VyJyksXHJcblx0XHRcdFwiaWNlLXJlbW92ZVwiOiByZXNvdXJjZXMuZ2V0KCdzZngtaWNlLXJlbW92ZScpLFxyXG5cdFx0XHRcInN0YXRlLWxlYXZlXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1zdGF0ZS1sZWF2ZScpLFxyXG5cdFx0XHRcImljZS1kaXNhYmxlZFwiOiByZXNvdXJjZXMuZ2V0KCdzZngtZGlzYWJsZWQnKVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHBsYXkoc2Z4KSB7XHJcblx0XHRpZiAoIXRoaXMuc291bmRPbikgcmV0dXJuO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS52b2x1bWUgPSB0aGlzLnNmeFZvbHVtZTtcclxuXHRcdHRoaXMuc2Z4W3NmeF0uY3VycmVudFRpbWUgPSAwO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS5wbGF5KCkuY2F0Y2goKCk9Pnt9KTtcclxuXHR9XHJcblxyXG5cdHBsYXlPbmNlKHNmeCkge1xyXG5cdFx0aWYgKCF0aGlzLnNmeFtzZnhdLnBhdXNlZCkgcmV0dXJuO1xyXG5cdFx0aWYgKCF0aGlzLnNvdW5kT24pIHJldHVybjtcclxuXHRcdHRoaXMuc2Z4W3NmeF0udm9sdW1lID0gdGhpcy5zZnhWb2x1bWU7XHJcblx0XHR0aGlzLnNmeFtzZnhdLmN1cnJlbnRUaW1lID0gMDtcclxuXHRcdHRoaXMuc2Z4W3NmeF0ucGxheSgpLmNhdGNoKCgpPT57fSk7XHJcblx0fVxyXG5cclxuXHRzdG9wKHNmeCkge1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS5wYXVzZSgpO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS5jdXJyZW50VGltZSA9IDA7XHJcblx0fVxyXG5cclxuXHRzb3VuZHJhY2soKSB7XHJcblx0XHRpZiAoIXRoaXMubXVzaWNPbikgcmV0dXJuO1xyXG5cdFx0dGhpcy5tdXNpYyA9IHRoaXMucmVzb3VyY2VzLmdldCgnc2Z4LW11c2ljLXNwYXJrcycpO1xyXG5cdFx0dGhpcy5tdXNpYy5tdXRlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tdXNpYy52b2x1bWUgPSAwLjI7XHJcblx0XHR0aGlzLm11c2ljLmxvb3AgPSB0cnVlO1xyXG5cdFx0dGhpcy5tdXNpYy5wbGF5KCkuY2F0Y2goKCk9Pnt9KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4vc3RydWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIGNsYXNzIG9mIHRoZSBzcHJpdGVcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgICBFbmdpbmUgRW5naW5lXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHggICAgIFBvc2l0aW9uIHRpbGUgeCBpbiB0aGUgbWFwXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHkgICAgIFBvc2l0aW9uIHRpbGUgeSBpbiB0aGUgbWFwXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggIFdpZHRoIG9mIHRoZSBzcHJpdGVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIHRoZSBzcHJpdGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoaWQsIGVuZ2luZSwgdHgsIHR5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gZW5naW5lLmN0eDtcclxuICAgICAgICB0aGlzLmNvb3JuZXJzID0gbmV3IFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zb2xpZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gNDtcclxuICAgICAgICB0aGlzLnN0YXRlID0gQ29uc3RzLk1vdmVTdGFuZDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gMDtcclxuICAgICAgICB0aGlzLnh0aWxlID0gdHg7XHJcbiAgICAgICAgdGhpcy55dGlsZSA9IHR5O1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMueHRpbGUgKiBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMueXRpbGUgKiBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHNwcml0ZSBzdGF0ZXNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGF0ZSAgQ29uc3RhbnQgb2YgdGhlIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1vdmluZyBUcnVlIGlmIHNwcml0ZSBpcyBtb3ZpbmdcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGUoc3RhdGUsIG1vdmluZykge1xyXG4gICAgICAgIHRoaXMubW92aW5nID0gKHR5cGVvZiBtb3ZpbmcgPT09ICd1bmRlZmluZWQnKSA/IGZhbHNlIDogbW92aW5nO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbGUodHgsIHR5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5naW5lLm1hcC5nZXRUaWxlKHR4LCB0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTcHJpdGVBdCAodHgsIHR5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueHRpbGUgPT09IHR4ICYmIHRoaXMueXRpbGUgPT09IHR5O1xyXG4gICAgfVxyXG5cclxuICAgIHNwcml0ZVR5cGVBdCh0eCwgdHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHR4LCB0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSAoKSB7IH1cclxuXHJcbiAgICBlbmdpbmVNb3ZlKCkge1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMudSA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUsIHRoaXMueXRpbGUtMSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy5kID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSsxKTtcclxuICAgICAgICB0aGlzLmNvb3JuZXJzLmwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLTEsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMuciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUrMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy51bCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUtMSwgdGhpcy55dGlsZS0xKTtcclxuICAgICAgICB0aGlzLmNvb3JuZXJzLnVyID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSsxLCB0aGlzLnl0aWxlLTEpO1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMuZGwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLTEsIHRoaXMueXRpbGUrMSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy5kciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUrMSwgdGhpcy55dGlsZSsxKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb3ZlKCk7XHJcblxyXG4gICAgICAgIHRoaXMueHRpbGUgPSBNYXRoLmZsb29yKHRoaXMueCAvIENvbnN0cy5UaWxlV2lkdGgpO1xyXG4gICAgICAgIHRoaXMueXRpbGUgPSBNYXRoLmZsb29yKHRoaXMueSAvIENvbnN0cy5UaWxlV2lkdGgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4qIFN0b3JlcyBwb3NpdGlvbiBvZiB0aGUgY29ybmVycyBhbmQgdmVydGljZXNcclxuKi9cclxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudSA9IDA7XHJcbiAgICAgICAgdGhpcy5kID0gMDtcclxuICAgICAgICB0aGlzLmwgPSAwO1xyXG4gICAgICAgIHRoaXMuciA9IDA7XHJcbiAgICAgICAgdGhpcy51bCA9IDA7XHJcbiAgICAgICAgdGhpcy51ciA9IDA7XHJcbiAgICAgICAgdGhpcy5kbCA9IDA7XHJcbiAgICAgICAgdGhpcy5kciA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb29yIHtcclxuICAgIGNvbnN0cnVjdG9yICh0eCwgdHkpIHtcclxuICAgICAgICB0aGlzLnh0aWxlID0gdHg7XHJcbiAgICAgICAgdGhpcy55dGlsZSA9IHR5O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCB7XHJcbiAgICAvKipcclxuICAgICAqIFRpbGVtYXAgY2xhc3NcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgRW5naW5lXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWFwICBNYXRyaXggb2YgdGhlIG1hcFxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCBtYXAsIHRoZW1lKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBlbmdpbmUuY3R4O1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcclxuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubWFwLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWFwWzBdLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdGhpcy50aWxlc0ltYWdlID0gdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgndGlsZW1hcCcpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBjb250ZW50IG9mIHRoZSB0aWxlIGluc2lkZSB0aGUgbWF0cml4XHJcbiAgICAgKiBpZiBwb3NpdGlvbiBvdXQgb2YgYm91bmRzIHJldHVybnMgQ29uc3RzLk9CSkVDVF9PVVRcclxuICAgICAqIEBwYXJhbSAge251bWJlcn0geSBwb3NpdGlvblxyXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSB4IHBvc2l0aW9uXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9ICAgQ29udGVudCBvZiB0aGUgdGlsZVxyXG4gICAgICovXHJcbiAgICBnZXRUaWxlKHgsIHkpIHtcclxuICAgICAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+IHRoaXMud2lkdGggfHwgeSA+IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDb25zdHMuT2JqZWN0T3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBbeV1beF07XHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmF3cyB0aGUgbWFwXHJcbiAgICAgKiBAcmV0dXJuIHtub25lfVxyXG4gICAgICovXHJcbiAgICBkcmF3KCkge1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy53aWR0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHRoaXMuaGVpZ2h0OyArK2opIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aWxlVHlwZSA9IENvbnN0cy5UaWxlQmFja2dyb3VuZDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcFtqXVtpXSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRUaWxlKGktMSwgaikgJiYgIXRoaXMuZ2V0VGlsZShpKzEsIGopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRpbGVCb3RoU2lkZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5nZXRUaWxlKGktMSwgaikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZUxlZnRTaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2V0VGlsZShpKzEsIGopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRpbGVSaWdodFNpZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZU1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZXNJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICB0aWxlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW1lICogdGhpcy50aWxlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBpICogdGhpcy50aWxlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaiAqIHRoaXMudGlsZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVIZWlnaHRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7fVxyXG5cclxuICAgIGVuZ2luZU1vdmUoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgVGlsZSA9IHtcclxuICAgdGlsZXM6IHtcclxuICAgICAgICBbQ29uc3RzLk9iamVjdEJhY2tncm91bmRdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW0NvbnN0cy5PYmplY3RPdXRdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9iamVjdFBsYXllcl06IHtcclxuICAgICAgICAgICAgc29saWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtDb25zdHMuT2JqZWN0SWNlXToge1xyXG4gICAgICAgICAgICBzb2xpZDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW0NvbnN0cy5PYmplY3RNZXRhbF06IHtcclxuICAgICAgICAgICAgc29saWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtDb25zdHMuT2JqZWN0V2FsbF06IHtcclxuICAgICAgICAgICAgc29saWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtDb25zdHMuT2JqZWN0RmlyZV06IHtcclxuICAgICAgICAgICAgc29saWQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9iamVjdEphcl06IHtcclxuICAgICAgICAgICAgc29saWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGlzU29saWQ6IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVzW2lkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVTkRFRklORUQgT04gaXNTb2xpZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzW2lkXS5zb2xpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=