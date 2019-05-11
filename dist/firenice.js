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

    drawFrost() {
        const leftSprite = this.engine.spriteAt(this.xtile - 1, this.ytile);
        if (leftSprite && leftSprite.id === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectIce && leftSprite.frozen.right) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile * this.width) - 7,
                this.ytile * this.height
            );
        }
        const rightSprite = this.engine.spriteAt(this.xtile + 1, this.ytile);
        if (rightSprite && rightSprite.id === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectIce && rightSprite.frozen.left) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile + this.length) * this.width - 7,
                this.ytile * this.height
            );
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _struct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./struct */ "./src/struct.js");
/* harmony import */ var _ice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ice */ "./src/ice.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sound */ "./src/sound.js");
/* harmony import */ var _sfx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sfx */ "./src/sfx.js");







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
        this.keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"]();
        this.sound = new _sound__WEBPACK_IMPORTED_MODULE_5__["Sound"](resources);
        this.scene = new _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"](this);
        this.editor = false;
        this.noSpriteMoveCount = 0;
        const level = localStorage.getItem('level');
        if (level !== null) {
            this.level = parseInt(level, 10);
        }
        this.scene.load(this.level);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.cwidth, this.cheight);
        this.map.draw();
        // reverse loop, player draws last
        for (let i = this.sprites.length - 1; i >= 0; i--) {
            this.sprites[i].draw();
        }
        for (let i = 0; i < this.sfxs.length; ++i) {
            this.sfxs[i].draw();
        }


        if (this.editor) {
            this.ctx.strokeStyle = 'rgba(255,255,255,0.5)';
            this.ctx.strokeWidth = 1;
            this.ctx.beginPath();
            for (let x = 0; x < this.cwidth; x += 32) {
                for (let y = 0; y < this.cheight; y += 32) {
                    this.ctx.strokeRect(x, y, x + 32, y + 32);
                }
            }
            this.ctx.closePath();
        }
    }

    collision() {
        const fires = this.sprites.filter(sprite => sprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectFire);
        if (!fires.length && !this.editor && this.player.state !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveLevelExit) {
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
            if (this.sprites[i] && this.sprites[i].id !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectPlayer && this.sprites[i].moving) {
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
            this.input();
        }
        this.collision();
    }

    input() {
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

    iceAt(tx, ty) {
        for (let i = 0; i < this.sprites.length; i++) {
            if (this.sprites[i].isSpriteAt(tx, ty)) {
                return this.sprites[i];
            }
        }
        return false;
    }

    addIceBlock(tx, ty) {
        let foundIceBlocks = [ ];
        for (let i = 0; i < this.sprites.length; i++) {
            if (this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce && this.sprites[i].ytile === ty) {
                let ice = this.sprites[i];
                if (ice.xtile - 1 === tx || ice.xtile + ice.length === tx) {
                    foundIceBlocks.push(ice);
                }
            }
        }
        if (foundIceBlocks.length === 0) {
            this.sprites.push(new _ice__WEBPACK_IMPORTED_MODULE_2__["Ice"](this, tx, ty, 1));
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
        this.addSprite(
            new _ice__WEBPACK_IMPORTED_MODULE_2__["Ice"](this, tx, ty, length, new _struct__WEBPACK_IMPORTED_MODULE_1__["Frost"](iceblockA.frozen.left, iceblockB.frozen.right))
        );
        this.removeSprite(iceblockA);
        this.removeSprite(iceblockB);
    }

    removeIceBlock(tx, ty) {
        for (let i = 0; i < this.sprites.length; i++) {
            if (this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce &&
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
                (this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectFire)
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
        this.sfxs.push(new _sfx__WEBPACK_IMPORTED_MODULE_6__["Sparks"](this, xtile, ytile, color, quantity, intensity));
    }

    spriteTypeAt(tx, ty, excludeId) {
        excludeId = (typeof excludeId === 'undefined') ? _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectOut : excludeId;
        if (tx < 0 || ty < 0 || tx > this.map.width || ty > this.map.height) {
            return _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectOut;
        }
        if (this.map.map[ty][tx]) {
            return this.map.map[ty][tx];
        } else {
            for (let i = 0; i < this.sprites.length; i++) {
                if (this.sprites[i].isSpriteAt(tx, ty) && this.sprites[i].id !== excludeId) {
                    return this.sprites[i].id;
                }
            }
        }
        return _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectBackground;
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
        if (!_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.d) && this.coorners.d !== _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectFire) {
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
/* harmony import */ var _struct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./struct */ "./src/struct.js");





class Ice extends _animsprite__WEBPACK_IMPORTED_MODULE_1__["AnimSprite"] {

    constructor(engine, tx, ty, length, frozen) {
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
        if (typeof frozen !== 'undefined') {
            this.frozen = frozen;
        } else {
            this.frozen = new _struct__WEBPACK_IMPORTED_MODULE_3__["Frost"](false, false);
            this.updateCoorners();
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
                this.frozen.right = true;
            }
        }

        if (tx < this.xtile) {
            this.xtile = tx;
            if (
                this.getTile(tx - 1, this.ytile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectWall ||
                spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal ||
                spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar
            ) {
                this.frozen.left = true;
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
            this.engine.addSprite(
                new Ice(this.engine, tx + 1, this.ytile, this.xtile + this.length - tx - 1, new _struct__WEBPACK_IMPORTED_MODULE_3__["Frost"](false, this.frozen.right))
            );
            this.length = tx - this.xtile;
            this.checkUnfreezeRight();
        }
        return this.length;
    }

    canGlide(dir) {
        if (this.length !== 1 || this.frozen.left || this.frozen.right) {
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

    isFrozen() {
        return this.frozen.left || this.frozen.right;
    }

    gravity() {
        if (!_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.coorners.d) && !this.isFrozen()) {
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

        if (this.isFrozen()) {
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
            this.ctx.drawImage(
                this.image, 0,
                _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * this.animRow,
                this.width, this.height,
                this.x, this.y,
                this.width, this.height
            );
        } else if (this.length === 2) {
            this.ctx.drawImage(this.image,
                _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * this.animRow,
                this.width, this.height,
                this.x, this.y,
                this.width, this.height
            );
            this.ctx.drawImage(this.image,
                3 * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * this.animRow,
                this.width, this.height,
                this.x + _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, this.y,
                this.width, this.height
            );
        } else {
            this.ctx.drawImage(this.image,
                _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * this.animRow,
                this.width, this.height,
                this.x, this.y,
                this.width, this.height
            );
            this.ctx.drawImage(this.image,
                3 * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * this.animRow,
                this.width, this.height,
                this.x + _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * (this.length - 1), this.y,
                this.width, this.height
            );
            for (let i = 1;  i < this.length - 1; i++) {
                this.ctx.drawImage(this.image,
                    2 * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth, _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * this.animRow,
                    this.width, this.height,
                    this.x + (_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * i), this.y,
                    this.width, this.height
                );
            }
        }
        if (this.frozen.left) {
            this.ctx.drawImage(
                this.engine.resources.get('frost'),
                (this.xtile * this.width) - 7,
                this.ytile * this.height
            );
        }
        if (this.frozen.right) {
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
        if (_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isFreezable(this.coorners.l)) {
            this.frozen.left = true;
        } else {
            this.frozen.left = false;
        }
        if (_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isFreezable(this.coorners.r)) {
            this.frozen.right = true;
        } else {
            this.frozen.right = false;
        }
    }

    checkUnfreezeLeft() {
        if (this.frozen.left && !_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isFreezable(this.coorners.l)) {
            this.frozen.left = false;
        }
    }

    checkUnfreezeRight() {
        if (this.frozen.right && !_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isFreezable(this.coorners.r)) {
            this.frozen.right = false;
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
        if (this.onFire && this.coorners.u === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectIce) {
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
        this.engine.sound.play('fire-off');
        this.engine.addSparks(this.xtile, this.ytile - 1, '255, 88, 33', 30);
    }

    meltIce() {
        this.engine.removeIceBlock(this.xtile, this.ytile - 1);
        this.engine.addSparks(this.xtile, this.ytile - 1, '255, 88, 33', 30);
        this.engine.addSparks(this.xtile, this.ytile - 1, '33, 88, 255', 40);
    }

    draw() {
        super.draw();
        this.drawFrost();
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
        document.getElementById('btn_action').addEventListener('mousedown', () => {
            this.down = true;
            this.left = false;
            this.right = false;
        });
        document.getElementById('btn_action').addEventListener('mouseup', () => this.down = false);
        document.getElementById('btn_left').addEventListener('mousedown', () => {
            this.left = true;
            this.right = false;
            this.down = false;
        });
        document.getElementById('btn_left').addEventListener('mouseup', () => this.left = false);
        document.getElementById('btn_right').addEventListener('mousedown', () => {
            this.right = true;
            this.left = false;
            this.down = false;
        });
        document.getElementById('btn_right').addEventListener('mouseup', () => this.right = false);
        document.getElementById('btn_select').addEventListener('mouseup', () => this.enter = true);
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
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1],
            [1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1],
            [1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1],
            [1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1],
            [1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1],
            [1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1],
            [1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1],
            [1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1],
            [1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":1,
        "sprites":[
            {"id":7,"x":8,"y":8,"v":1},
            {"id":6,"x":5,"y":8,"v":1},
            {"id":3,"x":5,"y":7,"v":3,"fl":true,"fr":false},
            {"id":3,"x":7,"y":8,"v":1,"fl":false,"fr":false},
            {"id":6,"x":10,"y":6,"v":1},
            {"id":3,"x":6,"y":6,"v":1,"fl":false,"fr":false},
            {"id":3,"x":6,"y":5,"v":3,"fl":false,"fr":false},
            {"id":3,"x":9,"y":5,"v":1,"fl":false,"fr":false}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1],
            [1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1],
            [1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1],
            [1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":2,
        "sprites":[
            {"id":7,"x":6,"y":4,"v":1},
            {"id":6,"x":8,"y":5,"v":1},
            {"id":6,"x":9,"y":10,"v":1}
        ]
    }, {
        "map": [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1],
            [1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
            [1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme": 9,
        "sprites": [
            {"id":7,"x":4,"y":3,"v":1},
            {"id":3,"x":6,"y":4,"v":1,"fl":true,"fr":true},
            {"id":3,"x":8,"y":4,"v":1,"fl":true,"fr":true},
            {"id":3,"x":10,"y":4,"v":4,"fl":true,"fr":true},
            {"id":6,"x":8,"y":3,"v":1},
            {"id":4,"x":11,"y":9,"v":1},
            {"id":4,"x":5,"y":9,"v":1},
            {"id":6,"x":3,"y":9,"v":1},
            {"id":6,"x":13,"y":9,"v":1},
            {"id":5,"x":8,"y":10,"v":false}
        ]
    },
    /* {
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
    },*/ {
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
        this.animDelay = 9;
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
        return  !this.falling && ((rightSprite && rightSprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce && rightSprite.frozen.left) ||
            (leftSprite && leftSprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce && leftSprite.frozen.right));
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
        super.draw();
        this.drawFrost();
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
        if (this.counter > _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimFrameCount) {
            const ice =  this.engine.iceAt(this.xtile + this.dirrection, this.ytile);
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
                const audio = document.getElementById(resource.name);
                this.loaded += 1;
                this.resources[resource.name] = audio;
                this.check(callback);
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
/* harmony import */ var _struct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./struct */ "./src/struct.js");
/* harmony import */ var _fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fire */ "./src/fire.js");
/* harmony import */ var _ice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ice */ "./src/ice.js");
/* harmony import */ var _jar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jar */ "./src/jar.js");
/* harmony import */ var _metal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metal */ "./src/metal.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _tilemap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tilemap */ "./src/tilemap.js");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./levels */ "./src/levels.js");










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
                fl = sprite.frozen.left;
                fr = sprite.frozen.right;
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
        if (typeof _levels__WEBPACK_IMPORTED_MODULE_8__["levels"][index] === 'undefined') {
            index = 0;
        }
        this.engine.level = index;
        const level = _levels__WEBPACK_IMPORTED_MODULE_8__["levels"][index];
        this.engine.sprites = [];
        this.engine.map = new _tilemap__WEBPACK_IMPORTED_MODULE_7__["TileMap"](this.engine, level.map, level.theme);
        for (const sprite of level.sprites) {
            switch(sprite.id) {
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectPlayer:
                    this.engine.player = new _player__WEBPACK_IMPORTED_MODULE_6__["Player"](this.engine, sprite.x, sprite.y);
                    this.engine.addSprite(this.engine.player);
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce:
                    let frozen = new _struct__WEBPACK_IMPORTED_MODULE_1__["Frost"](true, true);
                    if (typeof sprite.fl !== 'undefined') {
                        frozen.left = sprite.fl;
                        frozen.right = sprite.fr;
                    }
                    this.engine.addSprite(new _ice__WEBPACK_IMPORTED_MODULE_3__["Ice"](this.engine, sprite.x, sprite.y, parseInt(sprite.v), frozen));
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal:
                    this.engine.addSprite(new _metal__WEBPACK_IMPORTED_MODULE_5__["Metal"](this.engine, sprite.x, sprite.y, 1));
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectFire:
                    this.engine.addSprite(new _fire__WEBPACK_IMPORTED_MODULE_2__["Fire"](this.engine, sprite.x, sprite.y));
                    break;
                case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar:
                    const jar = new _jar__WEBPACK_IMPORTED_MODULE_4__["Jar"](this.engine, sprite.x, sprite.y);
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
            this.removeSelf();
        }
    }

    removeSelf() {
        for (let i = 0; i < this.engine.sfxs.length; i++) {
            if (this.engine.sfxs[i] === this) {
                this.engine.sfxs.splice(i, 1);
            }
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

    updateCoorners() {
        this.coorners.u = this.spriteTypeAt(this.xtile, this.ytile - 1);
        this.coorners.d = this.spriteTypeAt(this.xtile, this.ytile + 1);
        this.coorners.l = this.spriteTypeAt(this.xtile - 1, this.ytile);
        this.coorners.r = this.spriteTypeAt(this.xtile + 1, this.ytile);
        this.coorners.ul = this.spriteTypeAt(this.xtile - 1, this.ytile - 1);
        this.coorners.ur = this.spriteTypeAt(this.xtile + 1, this.ytile - 1);
        this.coorners.dl = this.spriteTypeAt(this.xtile - 1, this.ytile + 1);
        this.coorners.dr = this.spriteTypeAt(this.xtile + 1, this.ytile + 1);
    }

    updatePosition() {
        this.xtile = Math.floor(this.x / _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth);
        this.ytile = Math.floor(this.y / _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth);
    }

    move () { }

    engineMove() {
        this.updateCoorners();
        this.move();
        this.updatePosition();
    }
}


/***/ }),

/***/ "./src/struct.js":
/*!***********************!*\
  !*** ./src/struct.js ***!
  \***********************/
/*! exports provided: Position, Coor, Frost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coor", function() { return Coor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frost", function() { return Frost; });
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

class Frost {
    constructor(left, right) {
        this.left = left;
        this.right = right;
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
                    tileType, this.theme * this.tileHeight,
                    this.tileWidth, this.tileHeight,
                    i * this.tileWidth, j * this.tileHeight,
                    this.tileWidth, this.tileHeight
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


const Tile = Object.freeze({
   tiles: {
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectBackground]: {
            solid: false,
            freeze: false
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectOut]: {
            solid: true,
            freeze: false
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectPlayer]: {
            solid: true,
            freeze: false
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce]: {
            solid: true,
            freeze: false
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal]: {
            solid: true,
            freeze: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectWall]: {
            solid: true,
            freeze: true
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectFire]: {
            solid: false,
            freeze: false
        },
        [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar]: {
            solid: true,
            freeze: true
        }
    },

    isSolid: function(id) {
        if (typeof this.tiles[id] === 'undefined') {
            throw new Error('UNDEFINED ON isSolid');
        } else {
            return this.tiles[id].solid;
        }
    },

    isFreezable: function(id) {
        if (typeof this.tiles[id] === 'undefined') {
            throw new Error('UNDEFINED ON isFreezable');
        } else {
            return this.tiles[id].freeze;
        }
    }
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlbmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9sZXZlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21ldGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RydWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ0k7O0FBRS9CLHlCQUF5Qiw4Q0FBTTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQU07QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlEQUFNO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QyxpREFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxpREFBTTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ0w7QUFDTDtBQUNVO0FBQ047QUFDQTtBQUNEO0FBQy9CO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFRO0FBQ3BDLHlCQUF5Qiw0Q0FBSztBQUM5Qix5QkFBeUIsNENBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QywrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtFQUFrRSxpREFBTTtBQUN4RSxtRUFBbUUsaURBQU07QUFDekU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQsMERBQTBELGlEQUFNO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQsdUNBQXVDLGlEQUFNO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHdDQUFHO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0NBQUcsMkJBQTJCLDZDQUFLO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRCx1Q0FBdUMsaURBQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlEQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDJDQUFNO0FBQ2pDOztBQUVBO0FBQ0EseURBQXlELGlEQUFNO0FBQy9EO0FBQ0EsbUJBQW1CLGlEQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwyQkFBMkIseUJBQXlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFNO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIseUJBQXlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2T0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNKO0FBQ1A7O0FBRXhCLG1CQUFtQixzREFBVTs7QUFFcEM7QUFDQSxjQUFjLGlEQUFNO0FBQ3BCLG9CQUFvQixpREFBTSxZQUFZLGlEQUFNO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpREFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZEQUE2RCxpREFBTSxpQkFBaUIsaURBQU07QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGlEQUFNLGlCQUFpQixpREFBTTtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsYUFBYSwyQ0FBSSxpREFBaUQsaURBQU07QUFDeEUsMEJBQTBCLGlEQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQU07QUFDbEM7QUFDQSxTQUFTO0FBQ1QsMEJBQTBCLGlEQUFNO0FBQ2hDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxQztBQUNQO0FBQ0E7QUFDRjtBQUNJO0FBQ1E7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0EsMEJBQTBCLG9EQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLDBDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFNO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EseUJBQXlCLGlEQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBTTtBQUMvQjtBQUNBO0FBQ0EseUJBQXlCLGlEQUFNO0FBQy9CLGtEQUFrRCw0Q0FBSztBQUN2RDtBQUNBLHlCQUF5QixpREFBTTtBQUMvQixrREFBa0QsMENBQUk7QUFDdEQ7QUFDQSx5QkFBeUIsaURBQU07QUFDL0Isa0RBQWtELHdDQUFHO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDSjtBQUNKO0FBQ0E7O0FBRWxDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxlQUFlLEVBQUU7QUFDakIsZUFBZSxFQUFFO0FBQ2pCO0FBQ0E7QUFDQSwwQkFBMEIsOENBQU07QUFDaEMsc0JBQXNCLDhDQUFNO0FBQzVCLHFCQUFxQixpREFBTTtBQUMzQjtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsaURBQU07QUFDdkI7QUFDQTtBQUNBLGlCQUFpQixpREFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsc0RBQVU7QUFDbkMseUJBQXlCLHNEQUFVO0FBQ25DLCtCQUErQixpREFBTTtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixpREFBTTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0M7QUFDSTtBQUNYO0FBQ0U7O0FBRTFCLGtCQUFrQixzREFBVTs7QUFFbkM7QUFDQSxjQUFjLGlEQUFNO0FBQ3BCLG9CQUFvQixpREFBTSxZQUFZLGlEQUFNO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDhCQUE4Qiw2Q0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGlEQUFNO0FBQzNELDRDQUE0QyxpREFBTTtBQUNsRCw0Q0FBNEMsaURBQU07QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscURBQXFELGlEQUFNO0FBQzNELDJDQUEyQyxpREFBTTtBQUNqRCwyQ0FBMkMsaURBQU07QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaURBQU07QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFNO0FBQzVCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGdHQUFnRyw2Q0FBSztBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQU0sYUFBYSwyQ0FBSTtBQUMzQztBQUNBO0FBQ0Esb0JBQW9CLGlEQUFNLGFBQWEsMkNBQUk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSwyQ0FBSTtBQUNqQjtBQUNBLDBCQUEwQixpREFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0EsMkNBQTJDLGlEQUFNO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFNO0FBQ3ZCO0FBQ0E7QUFDQSxpQkFBaUIsaURBQU07QUFDdkI7QUFDQTtBQUNBLGlCQUFpQixpREFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxnQkFBZ0IsaURBQU0sWUFBWSxpREFBTTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFNLFlBQVksaURBQU07QUFDNUM7QUFDQSx5QkFBeUIsaURBQU07QUFDL0I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGdCQUFnQixpREFBTSxZQUFZLGlEQUFNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQU0sWUFBWSxpREFBTTtBQUM1QztBQUNBLHlCQUF5QixpREFBTTtBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBLHdCQUF3QixpREFBTSxZQUFZLGlEQUFNO0FBQ2hEO0FBQ0EsOEJBQThCLGlEQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQU07QUFDbEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQU07QUFDbEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw4QkFBOEIsaURBQU07QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpREFBTTtBQUNoQyxTQUFTO0FBQ1QsMEJBQTBCLGlEQUFNO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLDJDQUFJO0FBQ2hCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxZQUFZLDJDQUFJO0FBQ2hCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQywyQ0FBSTtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsMkNBQUk7QUFDdEM7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDcFJBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ0o7O0FBRS9CLGtCQUFrQixzREFBVTs7QUFFbkM7QUFDQSxjQUFjLGlEQUFNO0FBQ3BCLG9CQUFvQixpREFBTSxZQUFZLGlEQUFNO0FBQzVDLHlCQUF5QixpREFBTTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0RBQWdELGlEQUFNO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpREFBTTtBQUNyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixpREFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLGlEQUFNO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDBCQUEwQixpREFBTTtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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ZjtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVMsaURBQU07QUFDZjtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVMsaURBQU07QUFDZjtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVMsaURBQU07QUFDZjtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVMsaURBQU07QUFDZjtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVMsaURBQU07QUFDZjtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVMsaURBQU07QUFDZjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJmaXJlbmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2ZpcmVuaWNlLmpzXCIpO1xuIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5pbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1TcHJpdGUgZXh0ZW5kcyBTcHJpdGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRlZCBTcHJpdGUsIGluaGVydHMgZnJvbSBTcHJpdGUuXHJcbiAgICAgKiBBZGRzIGRyYXdpbmcgb2YgcGljdHVyZXMgaW4gdGhlIGJvZHkgb2Ygc3ByaXRlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZW5naW5lICAgIEVuZ2luZSBFbmdpbmVcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpbWFnZSAgIERvbSBpbWFnZSBvYmplY3QgKGltZyBzcmM9KVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR4ICAgICAgVGlsZSBYIHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHkgICAgICBUaWxlIFkgcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAgIFdpZHRoIG9mIHRoZSBzcHJpdGVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgIEhlaWdodCBvZiB0aGUgc3ByaXRlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0WCBPZmZzZXQgWCBvZiBkcmF3aW5nIHRoZSBwaWN0dXJlIGludG8gdGhlIGNhbnZhc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFkgT2Zmc2V0IFkgb2YgZHJhd2luZyB0aGUgcGljdHVyZSBpbnRvIHRoZSBjYW52YXNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAgIEFuaW1hdGlvbiBmcmFtZSBzdGFydFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCAgICAgQW5pbWF0aW9uIGZyYW1lIGVuZFxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb29wICAgUmVwZWF0IGFuaW1hdGlvblxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvciAoaWQsIGVuZ2luZSwgaW1hZ2UsIHR4LCB0eSwgd2lkdGgsIGhlaWdodCwgb2Zmc2V0WCwgb2Zmc2V0WSwgc3RhcnQsIGVuZCwgbG9vcCkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBlbmdpbmUsIHR4LCB0eSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoaW1hZ2UpO1xyXG4gICAgICAgIHRoaXMuYW5pbUxvb3AgPSBsb29wO1xyXG4gICAgICAgIHRoaXMuYW5pbVN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5hbmltRW5kID0gZW5kO1xyXG4gICAgICAgIHRoaXMuYW5pbUNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5O1xyXG4gICAgICAgIHRoaXMuYW5pbURlbGF5Q291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuYW5pbVJvdyA9IDA7XHJcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WDtcclxuICAgICAgICB0aGlzLm9mZnNldFkgPSBvZmZzZXRZO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgc3ByaXRlIGFuaW1hdGlvbiBmcmFtZXNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBTdGFydCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kICAgRW5kIGZyYW1lIG9mIHRoZSBhbmltYXRpb25cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCAgSWYgdHJ1ZSwgYW5pbWF0aW9uIHdpbGwgbG9vcFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAgIFJvdyBvZiB0aGUgZnJhbWVzIGluIHRoZSBzcHJpdGUgaW1hZ2VcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSBEZWxheSBiZXR3ZWVuIGVhY2ggZnJhbWVcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSAgU2V0cyBhbGwgdGhlIG5ldyB2YWx1ZXMgb25seSBvbmUgdGltZS5cclxuICAgICAqL1xyXG4gICAgc2V0QW5pbShzdGFydCwgZW5kLCBsb29wLCByb3csIGRlbGF5LCBvbmNlKSB7XHJcbiAgICAgICAgb25jZSA9ICh0eXBlb2Ygb25jZSA9PT0gJ3VuZGVmaW5lZCcpID8gZmFsc2UgOiBvbmNlO1xyXG4gICAgICAgIGRlbGF5ICA9ICh0eXBlb2YgZGVsYXkgPT09ICd1bmRlZmluZWQnKSA/IENvbnN0cy5BbmltRGVmYXVsdERlbGF5IDogZGVsYXk7XHJcbiAgICAgICAgcm93ID0gKHR5cGVvZiByb3cgPT09ICd1bmRlZmluZWQnKSA/IHRoaXMuYW5pbVJvdyA6IHJvdztcclxuICAgICAgICBpZiAoIW9uY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltU3RhcnQgPSBzdGFydDtcclxuICAgICAgICAgICAgdGhpcy5hbmltRW5kID0gZW5kO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgICAgICAgICAgdGhpcy5hbmltRGVsYXkgPSBkZWxheTtcclxuICAgICAgICAgICAgdGhpcy5hbmltUm93ID0gcm93O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1TdGFydCAhPT0gc3RhcnQgfHwgdGhpcy5hbmltRW5kICE9PSBlbmQgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUxvb3AgIT09IGxvb3AgfHwgdGhpcy5hbmltUm93ICE9PSByb3cpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbVN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltTG9vcCA9IGxvb3A7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1EZWxheSA9IGRlbGF5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltUm93ID0gcm93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmF3cyB0aGUgZnJhbWUgb2YgdGhlIHNwcml0ZSBpbiB0aGUgY2FudmFzXHJcbiAgICAgKi9cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgICAgICB0aGlzLmFuaW1Db3VudCAqIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbVJvdyAqIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgdGhpcy54ICsgdGhpcy5vZmZzZXRYLFxyXG4gICAgICAgICAgICB0aGlzLnkgKyB0aGlzLm9mZnNldFksXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbURlbGF5Q291bnQrKyA+IHRoaXMuYW5pbURlbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbUNvdW50ICs9IDE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1Db3VudCA+IHRoaXMuYW5pbUVuZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbUxvb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHRoaXMuYW5pbVN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHRoaXMuYW5pbUVuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFuaW1EZWxheUNvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0Zyb3N0KCkge1xyXG4gICAgICAgIGNvbnN0IGxlZnRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnh0aWxlIC0gMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgaWYgKGxlZnRTcHJpdGUgJiYgbGVmdFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJiBsZWZ0U3ByaXRlLmZyb3plbi5yaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLFxyXG4gICAgICAgICAgICAgICAgKHRoaXMueHRpbGUgKiB0aGlzLndpZHRoKSAtIDcsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnl0aWxlICogdGhpcy5oZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmlnaHRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnh0aWxlICsgMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgaWYgKHJpZ2h0U3ByaXRlICYmIHJpZ2h0U3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmIHJpZ2h0U3ByaXRlLmZyb3plbi5sZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoJ2Zyb3N0JyksXHJcbiAgICAgICAgICAgICAgICAodGhpcy54dGlsZSArIHRoaXMubGVuZ3RoKSAqIHRoaXMud2lkdGggLSA3LFxyXG4gICAgICAgICAgICAgICAgdGhpcy55dGlsZSAqIHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBDb25zdHMgPSBPYmplY3QuZnJlZXplKHtcclxuICAgIFRpbGVXaWR0aDogMzIsXHJcbiAgICBNb3ZlU3RhbmQ6IDAsXHJcbiAgICBNb3ZlTGVmdDogMSxcclxuICAgIE1vdmVSaWdodDogMixcclxuICAgIE1vdmVEb3duOiAzLFxyXG4gICAgTW92ZVVwOiA0LFxyXG4gICAgTW92ZVR1cm46IDUsXHJcbiAgICBNb3ZlSWNlTWFrZTogNixcclxuICAgIE1vdmVJY2VSZW1vdmU6IDcsXHJcbiAgICBNb3ZlSWNlTW92aW5nOiA4LFxyXG4gICAgTW92ZUljZUNoZWNrOiA5LFxyXG4gICAgTW92ZVJpcDogMTAsXHJcbiAgICBNb3ZlUHVzaDogOCxcclxuICAgIE1vdmVJY2VGYWlsOiAxMSxcclxuICAgIE1vdmVMZXZlbEV4aXQ6IDEyLFxyXG4gICAgTW92ZUxldmVsRW50ZXI6IDEzLFxyXG4gICAgRGlyTGVmdDogLTEsXHJcbiAgICBEaXJSaWdodDogMSxcclxuICAgIEFuaW1EZWZhdWx0RGVsYXk6IDIsXHJcbiAgICBBbmltRnJhbWVDb3VudDogMTYsXHJcbiAgICBBbmltTGVmdFJvdzogMSxcclxuICAgIEFuaW1SaWdodFJvdzogMCxcclxuICAgIEFuaW1SdW5TdGFydDogMCxcclxuICAgIEFuaW1SdW5FbmQ6IDMsXHJcbiAgICBBbmltU3RhbmQ6IDQsXHJcbiAgICBBbmltVHVyblN0YXJ0OiA0LFxyXG4gICAgQW5pbVR1cm5FbmQ6IDcsXHJcbiAgICBBbmltRmFsbFN0YXJ0OiA4LFxyXG4gICAgQW5pbUZhbGxFbmQ6IDksXHJcbiAgICBBbmltQmlnRmFsbFN0YXJ0OiAxMCxcclxuICAgIEFuaW1CaWdGYWxsRW5kOiAxMSxcclxuICAgIEFuaW1QdXNoU3RhcnQ6IDEyLFxyXG4gICAgQW5pbVB1c2hFbmQ6IDEzLFxyXG4gICAgQW5pbUp1bXBTdGFydDogMTQsXHJcbiAgICBBbmltSnVtcEVuZDogMTUsXHJcbiAgICBBbmltU3RhbmRTdGFydDogMTYsXHJcbiAgICBBbmltU3RhbmRFbmQ6IDE3LFxyXG4gICAgQW5pbUljZVN0YXJ0OiAxOCxcclxuICAgIEFuaW1JY2VFbmQ6IDE5LFxyXG4gICAgQW5pbUNyb3VjaFN0YXJ0OiAyMCxcclxuICAgIEFuaW1Dcm91Y2hFbmQ6IDIyLFxyXG4gICAgQW5pbVJpcFN0YXJ0OiAyMyxcclxuICAgIEFuaW1SaXBFbmQ6IDI0LFxyXG4gICAgQW5pbVNsZWVwU3RhcnQ6IDI1LFxyXG4gICAgQW5pbVNsZWVwRW5kOiAyNixcclxuICAgIFRpbGVCYWNrZ3JvdW5kOiAwLFxyXG4gICAgVGlsZUJvdGhTaWRlczogMzIsXHJcbiAgICBUaWxlTGVmdFNpZGU6IDY0LFxyXG4gICAgVGlsZU1pZGRsZTogOTYsXHJcbiAgICBUaWxlUmlnaHRTaWRlOiAxMjgsXHJcbiAgICBPYmplY3RPdXQ6IC0xLFxyXG4gICAgT2JqZWN0QmFja2dyb3VuZDogMCxcclxuICAgIE9iamVjdFdhbGw6IDEsXHJcbiAgICBPYmplY3RJY2U6IDMsXHJcbiAgICBPYmplY3RNZXRhbDogNCxcclxuICAgIE9iamVjdEphcjogNSxcclxuICAgIE9iamVjdEZpcmU6IDYsXHJcbiAgICBPYmplY3RQbGF5ZXI6IDcsXHJcbiAgICBHYW1lU3RhdGVQbGF5OiAxLFxyXG4gICAgR2FtZVN0YXRlSW50cm86IDJcclxufSk7XHJcbiIsImltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEZyb3N0IH0gZnJvbSAnLi9zdHJ1Y3QnO1xyXG5pbXBvcnQgeyBJY2UgfSBmcm9tICcuL2ljZSc7XHJcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9rZXlib2FyZCc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSAnLi9zb3VuZCc7XHJcbmltcG9ydCB7IFNwYXJrcyB9IGZyb20gJy4vc2Z4JztcclxuLyoqXHJcbiAqIEVuZ2luZSBMb29wXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW5naW5lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHJlc291cmNlcykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY3dpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuY2hlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSByZXNvdXJjZXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2Z4cyA9IFtdO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0ge307XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IDA7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZCA9IG5ldyBLZXlib2FyZCgpO1xyXG4gICAgICAgIHRoaXMuc291bmQgPSBuZXcgU291bmQocmVzb3VyY2VzKTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFNjZW5lKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZWRpdG9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA9IDA7XHJcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGV2ZWwnKTtcclxuICAgICAgICBpZiAobGV2ZWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IHBhcnNlSW50KGxldmVsLCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN3aWR0aCwgdGhpcy5jaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLm1hcC5kcmF3KCk7XHJcbiAgICAgICAgLy8gcmV2ZXJzZSBsb29wLCBwbGF5ZXIgZHJhd3MgbGFzdFxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnNwcml0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVzW2ldLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNmeHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5zZnhzW2ldLmRyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5lZGl0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJztcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlV2lkdGggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmN3aWR0aDsgeCArPSAzMikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmNoZWlnaHQ7IHkgKz0gMzIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VSZWN0KHgsIHksIHggKyAzMiwgeSArIDMyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGZpcmVzID0gdGhpcy5zcHJpdGVzLmZpbHRlcihzcHJpdGUgPT4gc3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0RmlyZSk7XHJcbiAgICAgICAgaWYgKCFmaXJlcy5sZW5ndGggJiYgIXRoaXMuZWRpdG9yICYmIHRoaXMucGxheWVyLnN0YXRlICE9PSBDb25zdHMuTW92ZUxldmVsRXhpdCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5vdXRybygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZXh0TGV2ZWwoKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCsrO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsZXZlbCcsIHRoaXMubGV2ZWwpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlc1tpXS5lbmdpbmVNb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZnhzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Z4c1tpXS5lbmdpbmVNb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzcHJpdGVzTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXSAmJiB0aGlzLnNwcml0ZXNbaV0uaWQgIT09IENvbnN0cy5PYmplY3RQbGF5ZXIgJiYgdGhpcy5zcHJpdGVzW2ldLm1vdmluZykge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlc01vdmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzcHJpdGVzTW92aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgKz0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgbm8gc3ByaXRlcyBoYXZlIG1vdmVkIGZvciAyIHR1cm5zXHJcbiAgICAgICAgaWYgKCFzcHJpdGVzTW92aW5nICYmIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5Ym9hcmQuZG93biB8fCB0aGlzLmtleWJvYXJkLmFjdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5pY2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMua2V5Ym9hcmQubGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5sZWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmtleWJvYXJkLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnJpZ2h0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmtleWJvYXJkLmVudGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmQuc3RvcCgnZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcclxuICAgICAgICAgICAgdGhpcy5rZXlib2FyZC5lbnRlciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpY2VBdCh0eCwgdHkpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlzU3ByaXRlQXQodHgsIHR5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSWNlQmxvY2sodHgsIHR5KSB7XHJcbiAgICAgICAgbGV0IGZvdW5kSWNlQmxvY2tzID0gWyBdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiYgdGhpcy5zcHJpdGVzW2ldLnl0aWxlID09PSB0eSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGljZSA9IHRoaXMuc3ByaXRlc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChpY2UueHRpbGUgLSAxID09PSB0eCB8fCBpY2UueHRpbGUgKyBpY2UubGVuZ3RoID09PSB0eCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kSWNlQmxvY2tzLnB1c2goaWNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZm91bmRJY2VCbG9ja3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlcy5wdXNoKG5ldyBJY2UodGhpcywgdHgsIHR5LCAxKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmb3VuZEljZUJsb2Nrcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgZm91bmRJY2VCbG9ja3NbMF0uYWRkQmxvY2sodHgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChmb3VuZEljZUJsb2Nrc1swXS54dGlsZSA8PSBmb3VuZEljZUJsb2Nrc1sxXS54dGlsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5qb2luSWNlQmxvY2tzKGZvdW5kSWNlQmxvY2tzWzBdLCBmb3VuZEljZUJsb2Nrc1sxXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmpvaW5JY2VCbG9ja3MoZm91bmRJY2VCbG9ja3NbMV0sIGZvdW5kSWNlQmxvY2tzWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBqb2luSWNlQmxvY2tzKGljZWJsb2NrQSxpY2VibG9ja0IpIHtcclxuICAgICAgICBsZXQgdHggPSBpY2VibG9ja0EueHRpbGU7XHJcbiAgICAgICAgbGV0IHR5ID0gaWNlYmxvY2tBLnl0aWxlO1xyXG4gICAgICAgIGxldCBsZW5ndGggPSBpY2VibG9ja0EubGVuZ3RoICsgaWNlYmxvY2tCLmxlbmd0aCArIDE7XHJcbiAgICAgICAgdGhpcy5hZGRTcHJpdGUoXHJcbiAgICAgICAgICAgIG5ldyBJY2UodGhpcywgdHgsIHR5LCBsZW5ndGgsIG5ldyBGcm9zdChpY2VibG9ja0EuZnJvemVuLmxlZnQsIGljZWJsb2NrQi5mcm96ZW4ucmlnaHQpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTcHJpdGUoaWNlYmxvY2tBKTtcclxuICAgICAgICB0aGlzLnJlbW92ZVNwcml0ZShpY2VibG9ja0IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUljZUJsb2NrKHR4LCB0eSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlc1tpXS55dGlsZSA9PT0gdHkgJiZcclxuICAgICAgICAgICAgICAgIHR4ID49IHRoaXMuc3ByaXRlc1tpXS54dGlsZSAmJlxyXG4gICAgICAgICAgICAgICAgdHggPCB0aGlzLnNwcml0ZXNbaV0ueHRpbGUgKyB0aGlzLnNwcml0ZXNbaV0ubGVuZ3RoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLnJlbW92ZUJsb2NrKHR4KSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVzLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZpcmUodHgsIHR5KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuc3ByaXRlc1tpXS55dGlsZSA9PT0gdHkpICYmXHJcbiAgICAgICAgICAgICAgICAodHggPT09IHRoaXMuc3ByaXRlc1tpXS54dGlsZSkgJiZcclxuICAgICAgICAgICAgICAgICh0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PYmplY3RGaXJlKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlcy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzLnB1c2goc3ByaXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXSA9PT0gc3ByaXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZXMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3BhcmtzKHh0aWxlLCB5dGlsZSwgY29sb3IsIHF1YW50aXR5LCBpbnRlbnNpdHkpIHtcclxuICAgICAgICB0aGlzLnNmeHMucHVzaChuZXcgU3BhcmtzKHRoaXMsIHh0aWxlLCB5dGlsZSwgY29sb3IsIHF1YW50aXR5LCBpbnRlbnNpdHkpKTtcclxuICAgIH1cclxuXHJcbiAgICBzcHJpdGVUeXBlQXQodHgsIHR5LCBleGNsdWRlSWQpIHtcclxuICAgICAgICBleGNsdWRlSWQgPSAodHlwZW9mIGV4Y2x1ZGVJZCA9PT0gJ3VuZGVmaW5lZCcpID8gQ29uc3RzLk9iamVjdE91dCA6IGV4Y2x1ZGVJZDtcclxuICAgICAgICBpZiAodHggPCAwIHx8IHR5IDwgMCB8fCB0eCA+IHRoaXMubWFwLndpZHRoIHx8IHR5ID4gdGhpcy5tYXAuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDb25zdHMuT2JqZWN0T3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXAubWFwW3R5XVt0eF0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLm1hcFt0eV1bdHhdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlzU3ByaXRlQXQodHgsIHR5KSAmJiB0aGlzLnNwcml0ZXNbaV0uaWQgIT09IGV4Y2x1ZGVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbaV0uaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIENvbnN0cy5PYmplY3RCYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHNwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tYXAubWFwW3R5XVt0eF0pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaXNTcHJpdGVBdCh0eCwgdHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpcmUgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSkge1xyXG4gICAgICAgIHN1cGVyKENvbnN0cy5PYmplY3RGaXJlLCBlbmdpbmUsICdpbWdfZmlyZScsXHJcbiAgICAgICAgICAgIHR4LCB0eSwgQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCwgMCwgMCwgMCwgMywgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0Rvd24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb2xsaXNpb25zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSwgQ29uc3RzLk9iamVjdEZpcmUpID09PSBDb25zdHMuT2JqZWN0SWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ZpcmUtb2ZmJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUZpcmUodGhpcy54dGlsZSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUljZUJsb2NrKHRoaXMueHRpbGUsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzI1NSwgMTI2LCAxOTgnLCAxNSwgMC41KTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcxMjQsIDIxMiwgMjU1JywgMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUsIHRoaXMueXRpbGUsIENvbnN0cy5PYmplY3RGaXJlKSA9PT0gQ29uc3RzLk9iamVjdE1ldGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ZpcmUtb2ZmJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUZpcmUodGhpcy54dGlsZSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMjU1LCAyMjIsIDEyNycsIDE1LCAwLjUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzQxLCA0MiwgOTAnLCAxMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBncmF2aXR5KCkge1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkgJiYgdGhpcy5jb29ybmVycy5kICE9PSBDb25zdHMuT2JqZWN0RmlyZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZG9Eb3duKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBGaXJlIH0gZnJvbSAnLi9maXJlJztcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCB7IEphciB9IGZyb20gJy4vamFyJztcclxuaW1wb3J0IHsgTWV0YWwgfSBmcm9tICcuL21ldGFsJztcclxuaW1wb3J0IHsgUmVzb3VyY2VzIH0gZnJvbSAnLi9yZXNvdXJjZXMnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJyk7XHJcbiAgICBsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIFByZWxvYWRHYW1lKCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBQcmVsb2FkR2FtZSgpIHtcclxuICAgIGNvbnN0IHJlc291cmNlcyA9IG5ldyBSZXNvdXJjZXMoKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ3RpbGVtYXAnLCAnaW1hZ2VzL3RpbGVtYXAucG5nJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfaWNlJywgJ2ltYWdlcy9pY2UucG5nJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfamFyJywgJ2ltYWdlcy9qYXIucG5nJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfZmlyZScsICdpbWFnZXMvZmlyZS5wbmcnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19kb25hJywgJ2ltYWdlcy9kb25hLnBuZycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX2ludHJvJywgJ2ltYWdlcy9pbnRyby5wbmcnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19zdGFydCcsICdpbWFnZXMvc3RhcnQucG5nJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfbWV0YWwnLCAnaW1hZ2VzL21ldGFsLnBuZycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnZnJvc3QnLCAnaW1hZ2VzL2Zyb3plbi5wbmcnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1pY2UtcHVzaCcsICdzb3VuZHMvc2Z4LWljZS1wdXNoLm1wMycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWZpcmUtb2ZmJywgJ3NvdW5kcy9zZngtZmlyZS1vZmYubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZmFsbGluZycsICdzb3VuZHMvc2Z4LWZhbGxpbmcubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtbmV3LWljZScsICdzb3VuZHMvc2Z4LW5ldy1pY2UubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtY2xpbWInLCAnc291bmRzL3NmeC1jbGltYi5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1pY2UtY29sbGlzaW9uJywgJ3NvdW5kcy9zZngtaWNlLWNvbGxpc2lvbi5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1zdGFnZS1lbnRlcicsICdzb3VuZHMvc2Z4LXN0YWdlLWVudGVyLm1wMycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWRhbmdlcicsICdzb3VuZHMvc2Z4LWRhbmdlci5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1pY2UtcmVtb3ZlJywgJ3NvdW5kcy9zZngtaWNlLXJlbW92ZS5tcDMnKTtcclxuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1zdGF0ZS1sZWF2ZScsICdzb3VuZHMvc2Z4LXN0YXRlLWxlYXZlLm1wMycpO1xyXG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWRpc2FibGVkJywgJ3NvdW5kcy9zZngtZGlzYWJsZWQubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZmFsbCcsICdzb3VuZHMvc2Z4LWZhbGwubXAzJyk7XHJcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtbXVzaWMtc3BhcmtzJywgJ211c2ljL3NwYXJrcy5tcDMnKTtcclxuXHJcbiAgICByZXNvdXJjZXMucmVhZHkoKCkgPT4ge1xyXG4gICAgICAgIFN0YXJ0R2FtZShyZXNvdXJjZXMpO1xyXG4gICAgICAgIENoZWNrRWRpdG9yKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3RhcnRHYW1lKHJlc291cmNlcykge1xyXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoY2FudmFzLCByZXNvdXJjZXMpO1xyXG4gICAgd2luZG93LmdhbWUgPSBnYW1lO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsLXNlbGVjdG9yJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgIT09ICctMScpIHtcclxuICAgICAgICAgICAgZ2FtZS5lbmdpbmUubGV2ZWwgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgICAgICAgICBnYW1lLmVuZ2luZS5zY2VuZS5sb2FkKGdhbWUuZW5naW5lLmxldmVsKTtcclxuICAgICAgICAgICAgZS50YXJnZXQuYmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDaGVja0VkaXRvcigpIHtcclxuICAgIGlmICh3aW5kb3cuRklSRU5JQ0VfRURJVE9SX01PREUpIHtcclxuICAgICAgICBnYW1lLmVuZ2luZS5zb3VuZC5tdXNpY09uID0gZmFsc2U7XHJcblx0XHRnYW1lLmVuZ2luZS5zb3VuZC5zb3VuZE9uID0gZmFsc2U7XHJcbiAgICAgICAgZ2FtZS5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVQbGF5O1xyXG4gICAgICAgIGdhbWUuZW5naW5lLmVkaXRvciA9IHRydWU7XHJcbiAgICAgICAgZ2FtZS5lbmdpbmUua2V5Ym9hcmQuaW50cm8gPSBmYWxzZTtcclxuICAgICAgICBnYW1lLmVuZ2luZS5zb3VuZC5tdXNpYy5wYXVzZSgpO1xyXG5cclxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4dGlsZSA9IE1hdGguZmxvb3IoZS5vZmZzZXRYIC8gMzIpO1xyXG4gICAgICAgICAgICBjb25zdCB5dGlsZSA9IE1hdGguZmxvb3IoZS5vZmZzZXRZIC8gMzIpO1xyXG4gICAgICAgICAgICBpZiAodG9vbCA8IDIpIHtcclxuICAgICAgICAgICAgICAgIGdhbWUuZW5naW5lLm1hcC5tYXBbeXRpbGVdW3h0aWxlXSA9IHRvb2w7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRvb2wpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RQbGF5ZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuZW5naW5lLnBsYXllci54ID0geHRpbGUgKiAzMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUucGxheWVyLnkgPSB5dGlsZSAqIDMyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RJY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuZW5naW5lLmFkZEljZUJsb2NrKHh0aWxlLCB5dGlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdE1ldGFsOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRTcHJpdGUobmV3IE1ldGFsKGdhbWUuZW5naW5lLCB4dGlsZSwgeXRpbGUsIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0RmlyZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBGaXJlKGdhbWUuZW5naW5lLCB4dGlsZSwgeXRpbGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0SmFyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRTcHJpdGUobmV3IEphcihnYW1lLmVuZ2luZSwgeHRpbGUsIHl0aWxlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS1zZWxlY3RvcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGdhbWUuZW5naW5lLm1hcC50aGVtZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmJsdXIoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsLXNlbGVjdG9yJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSAnLTEnKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5sZXZlbCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5zY2VuZS5sb2FkKGdhbWUuZW5naW5lLmxldmVsKTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmJsdXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXNhdmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R4dC1sZXZlbCcpLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZ2FtZS5lbmdpbmUuc2NlbmUuc2F2ZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnLi9lbmdpbmUnO1xyXG5pbXBvcnQgeyBsZXZlbHMgfSBmcm9tICcuL2xldmVscyc7XHJcblxyXG4vKipcclxuICogR2FtZSBMb29wXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7Kn0gY2FudmF2cyAgIFRoZSBjYW52YXMgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHsqfSByZXNvdXJjZXMgIEdhbWUgcmVzb3VyY2VzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgcmVzb3VyY2VzKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUgPSBuZXcgRW5naW5lKGNhbnZhcywgcmVzb3VyY2VzKTtcclxuICAgICAgICB0aGlzLmxldmVscyA9IGxldmVscztcclxuICAgICAgICB0aGlzLnN0YXRlID0gQ29uc3RzLkdhbWVTdGF0ZVBsYXk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQuc291bmRyYWNrKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lbG9vcCA9IHRoaXMuZ2FtZWxvb3BfLmJpbmQodGhpcyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG4gICAgICAgIHRoaXMuZ2FtZWxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBnYW1lbG9vcF8oKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLkdhbWVTdGF0ZUludHJvOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0ludHJvKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuR2FtZVN0YXRlUGxheTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLm1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZWxvb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUludHJvKCkge1xyXG4gICAgICAgIHRoaXMuaW50cm8gPSBuZXcgQW5pbVNwcml0ZShudWxsLCB0aGlzLmVuZ2luZSwgJ2ltZ19pbnRybycsIDAsIDAsIDU0NCwgNDE2LCAwLCAwLCAwLCAwLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBBbmltU3ByaXRlKG51bGwsIHRoaXMuZW5naW5lLCAnaW1nX3N0YXJ0JywgNywgMTEsIDE0MCwgMjYsIC0xMCwgMCwgMCwgMSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zdGFydC5hbmltRGVsYXkgPSBDb25zdHMuQW5pbURlZmF1bHREZWxheSAqIDIwO1xyXG4gICAgfVxyXG5cclxuICAgIGRvSW50cm8oKSB7XHJcbiAgICAgICAgdGhpcy5pbnRyby5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5zdGFydC5kcmF3KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVuZ2luZS5rZXlib2FyZC5lbnRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5rZXlib2FyZC5lbnRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gQ29uc3RzLkdhbWVTdGF0ZVBsYXk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnNvdW5kcmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xyXG5pbXBvcnQgeyBGcm9zdCB9IGZyb20gJy4vc3RydWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBJY2UgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSwgbGVuZ3RoLCBmcm96ZW4pIHtcclxuICAgICAgICBzdXBlcihDb25zdHMuT2JqZWN0SWNlLCBlbmdpbmUsICdpbWdfaWNlJyxcclxuICAgICAgICAgICAgdHgsIHR5LCBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoLCAwLCAwLCAwLCAxLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnh0aWxlID0gdHg7XHJcbiAgICAgICAgdGhpcy55dGlsZSA9IHR5O1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuYW5pbUVuZCA9IDE7XHJcbiAgICAgICAgdGhpcy5hbmltRGVsYXkgPSA5O1xyXG4gICAgICAgIHRoaXMuYW5pbVJvdyA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gMDtcclxuICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAodHlwZW9mIGZyb3plbiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5mcm96ZW4gPSBmcm96ZW47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mcm96ZW4gPSBuZXcgRnJvc3QoZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb29ybmVycygpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrRnJlZXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEJsb2NrKHR4KSB7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0eCAtIDEsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgIGNvbnN0IHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID0gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUgKyB0aGlzLmxlbmd0aCArIDEsIHRoaXMueXRpbGUpO1xyXG4gICAgICAgIGlmICh0eCA+IHRoaXMueHRpbGUpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUaWxlKHR4ICsgMSwgdGhpcy55dGlsZSkgPT09IENvbnN0cy5PYmplY3RXYWxsIHx8XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9iamVjdE1ldGFsIHx8XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9iamVjdEphclxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJvemVuLnJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR4IDwgdGhpcy54dGlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnh0aWxlID0gdHg7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGlsZSh0eCAtIDEsIHRoaXMueXRpbGUpID09PSBDb25zdHMuT2JqZWN0V2FsbCB8fFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9PT0gQ29uc3RzLk9iamVjdE1ldGFsIHx8XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID09PSBDb25zdHMuT2JqZWN0SmFyXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm96ZW4ubGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54dGlsZSAqIENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggKz0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Nwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgICAgIGlmICh0aGlzLnl0aWxlID09PSB0eSkge1xyXG4gICAgICAgICAgICBpZiAodHggPj0gdGhpcy54dGlsZSAmJiB0eCA8ICh0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJsb2NrKHR4KSB7XHJcbiAgICAgICAgaWYgKHR4ID09PSB0aGlzLnh0aWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMueHRpbGUgKz0gMTtcclxuICAgICAgICAgICAgdGhpcy54ICs9IENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoIC09IDE7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZUxlZnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR4ID09PSB0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoIC09IDE7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZVJpZ2h0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKFxyXG4gICAgICAgICAgICAgICAgbmV3IEljZSh0aGlzLmVuZ2luZSwgdHggKyAxLCB0aGlzLnl0aWxlLCB0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGggLSB0eCAtIDEsIG5ldyBGcm9zdChmYWxzZSwgdGhpcy5mcm96ZW4ucmlnaHQpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IHR4IC0gdGhpcy54dGlsZTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1VuZnJlZXplUmlnaHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkdsaWRlKGRpcikge1xyXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCAhPT0gMSB8fCB0aGlzLmZyb3plbi5sZWZ0IHx8IHRoaXMuZnJvemVuLnJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpciA9PT0gQ29uc3RzLkRpckxlZnQgICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpciA9PT0gQ29uc3RzLkRpclJpZ2h0ICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGcm96ZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJvemVuLmxlZnQgfHwgdGhpcy5mcm96ZW4ucmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ3Jhdml0eSgpIHtcclxuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICYmICF0aGlzLmlzRnJvemVuKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZmFsbGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWNvbGxpc2lvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5HbGlkZSh0aGlzLmRpcnJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlycmVjdGlvbiA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdGlsZV9kb3duID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZStpLCB0aGlzLnl0aWxlKzEpO1xyXG4gICAgICAgICAgICBpZiAodGlsZV9kb3duICYmIHRpbGVfZG93biAhPT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29vcm5lcnMuZCA9IHRpbGVfZG93bjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy5yID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSArIHRoaXMubGVuZ3RoLCB0aGlzLnl0aWxlKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNGcm96ZW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrVW5mcmVlemVMZWZ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZVJpZ2h0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlTW92aW5nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VDaGVjazpcclxuICAgICAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0Rvd24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgICAgICBpZiAodGhpcy5hbmltRGVsYXlDb3VudCsrID4gdGhpcy5hbmltRGVsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbVJvdyA9IHRoaXMuYW5pbVJvdyA9PT0gMCA/IDEgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZSwgMCxcclxuICAgICAgICAgICAgICAgIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIHRoaXMueCwgdGhpcy55LFxyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSxcclxuICAgICAgICAgICAgICAgIDMgKiBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnggKyBDb25zdHMuVGlsZVdpZHRoLCB0aGlzLnksXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSxcclxuICAgICAgICAgICAgICAgIDMgKiBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnggKyBDb25zdHMuVGlsZVdpZHRoICogKHRoaXMubGVuZ3RoIC0gMSksIHRoaXMueSxcclxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyAgaSA8IHRoaXMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAyICogQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKyAoQ29uc3RzLlRpbGVXaWR0aCAqIGkpLCB0aGlzLnksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZnJvemVuLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLnh0aWxlICogdGhpcy53aWR0aCkgLSA3LFxyXG4gICAgICAgICAgICAgICAgdGhpcy55dGlsZSAqIHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZyb3plbi5yaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLFxyXG4gICAgICAgICAgICAgICAgKHRoaXMueHRpbGUgKyB0aGlzLmxlbmd0aCkgKiB0aGlzLndpZHRoIC0gNyxcclxuICAgICAgICAgICAgICAgIHRoaXMueXRpbGUgKiB0aGlzLmhlaWdodFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsaWRlKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gNCAqIHRoaXMuZGlycmVjdGlvbjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9Eb3duKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gNDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ3Jhdml0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdXNoKGRpcikge1xyXG4gICAgICAgIHRoaXMuZGlycmVjdGlvbiA9ICh0eXBlb2YgZGlyID09PSAndW5kZWZpbmVkJykgPyB0aGlzLmRpcnJlY3Rpb24gOiBkaXI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxpc2lvbigpICYmICF0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTW92aW5nLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tGcmVlemUoKSB7XHJcbiAgICAgICAgaWYgKFRpbGUuaXNGcmVlemFibGUodGhpcy5jb29ybmVycy5sKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZyb3plbi5sZWZ0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZyb3plbi5sZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChUaWxlLmlzRnJlZXphYmxlKHRoaXMuY29vcm5lcnMucikpIHtcclxuICAgICAgICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVuLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVW5mcmVlemVMZWZ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZyb3plbi5sZWZ0ICYmICFUaWxlLmlzRnJlZXphYmxlKHRoaXMuY29vcm5lcnMubCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mcm96ZW4ubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja1VuZnJlZXplUmlnaHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnJvemVuLnJpZ2h0ICYmICFUaWxlLmlzRnJlZXphYmxlKHRoaXMuY29vcm5lcnMucikpIHtcclxuICAgICAgICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xyXG5pbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEphciBleHRlbmRzIEFuaW1TcHJpdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5KSB7XHJcbiAgICAgICAgc3VwZXIoQ29uc3RzLk9iamVjdEphciwgZW5naW5lLCAnaW1nX2phcicsXHJcbiAgICAgICAgICAgIHR4LCB0eSwgQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCwgMCwgMCwgMCwgMywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5hbmltRGVsYXkgPSBDb25zdHMuQW5pbURlZmF1bHREZWxheSAqIDI7XHJcbiAgICAgICAgdGhpcy5vbkZpcmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFuaW1Sb3cgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxpc2lvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9Eb3duKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9ucygpIHtcclxuICAgICAgICBpZiAoIXRoaXMub25GaXJlICYmIHRoaXMuY29vcm5lcnMudSA9PT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcclxuICAgICAgICAgICAgdGhpcy50dXJuT25GaXJlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUZpcmUodGhpcy54dGlsZSwgdGhpcy55dGlsZSAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vbkZpcmUgJiYgdGhpcy5jb29ybmVycy51ID09PSBDb25zdHMuT2JqZWN0SWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVsdEljZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBncmF2aXR5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jb29ybmVycy5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVEb3duLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBkb0Rvd24oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSA0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0dXJuT25GaXJlKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbVJvdyA9IDE7XHJcbiAgICAgICAgdGhpcy5vbkZpcmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ZpcmUtb2ZmJyk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUgLSAxLCAnMjU1LCA4OCwgMzMnLCAzMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVsdEljZSgpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVJY2VCbG9jayh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUgLSAxLCAnMjU1LCA4OCwgMzMnLCAzMCk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUgLSAxLCAnMzMsIDg4LCAyNTUnLCA0MCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICBzdXBlci5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3RnJvc3QoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLyoqXHJcbiAqIEtleWJvYXJkIHByZXNzIGVuZ2luZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJkIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnVwID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5rZXlkb3duID0gdGhpcy5rZXlkb3duXy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMua2V5dXAgPSB0aGlzLmtleXVwXy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW50cm8gPSB0cnVlO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5ZG93biwgZmFsc2UpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5dXAsIGZhbHNlKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmludHJvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmludHJvID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9hY3Rpb24nKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZG93biA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9hY3Rpb24nKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4gdGhpcy5kb3duID0gZmFsc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fbGVmdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX2xlZnQnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4gdGhpcy5sZWZ0ID0gZmFsc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fcmlnaHQnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9yaWdodCcpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB0aGlzLnJpZ2h0ID0gZmFsc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fc2VsZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHRoaXMuZW50ZXIgPSB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBrZXlkb3duXyhlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAzNzogLy8gTGVmdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM4OiAvLyBVcFxyXG4gICAgICAgICAgICAgICAgdGhpcy51cCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOTogLy8gUmlnaHRcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDogLy8gRG93blxyXG4gICAgICAgICAgICBjYXNlIDMyOiAvLyBTcGFjZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTM6IC8vRW50ZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXl1cF8oZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMzc6IC8vIExlZnRcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzg6IC8vIFVwXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOTogLy8gUmlnaHRcclxuICAgICAgICAgICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQwOiAvLyBEb3duXHJcbiAgICAgICAgICAgIGNhc2UgMzI6IC8vIFNwYWNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMzogLy9FbnRlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGxldmVscyA9IFtcclxuICAgIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjowLFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjExLFwieVwiOjQsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjYsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo2LFwieVwiOjQsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo4LFwieVwiOjQsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo3LFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo3LFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo3LFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo5LFwieVwiOjEwLFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMSwwLDEsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjEsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MyxcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NCxcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6NSxcInZcIjo0fSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEyLFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMixcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6NixcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEzLFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjExLFwieVwiOjYsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwxLDEsMSwxLDEsMCwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6MixcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoxNCxcInlcIjo2LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6NCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6NixcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6NSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjExLFwieVwiOjYsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo1LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6OCxcInlcIjo2LFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjAsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6OCxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEzLFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMSxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjo4LFwidlwiOjV9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjcsXCJ2XCI6M30sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMixcInlcIjo2LFwidlwiOjJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NCxcInlcIjo3LFwidlwiOjN9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MyxcInlcIjo2LFwidlwiOjJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NCxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MyxcInlcIjo3LFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjYsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MTEsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjEwLFwidlwiOjN9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6OSxcInZcIjozfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjcsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6NSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjksXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjMsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjozLFwieVwiOjQsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6NSxcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoxMyxcInlcIjozLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MyxcInlcIjo0LFwidlwiOjEsXCJmbFwiOmZhbHNlLFwiZnJcIjpmYWxzZX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjYsXCJ2XCI6MSxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NixcInZcIjoxLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2V9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6NixcInZcIjoxLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2V9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MixcInlcIjo4LFwidlwiOjEzLFwiZmxcIjp0cnVlLFwiZnJcIjpmYWxzZX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoyLFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjozLFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NCxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo2LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo5LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMSxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEyLFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTMsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxNCxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjE0LFwieVwiOjQsXCJ2XCI6MSxcImZsXCI6dHJ1ZSxcImZyXCI6dHJ1ZX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoyLFwieVwiOjUsXCJ2XCI6MSxcImZsXCI6dHJ1ZSxcImZyXCI6dHJ1ZX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6MSxcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoxMixcInlcIjo0LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6MTEsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjoxMSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NSxcInZcIjo1fSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjQsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjYsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo2LFwieVwiOjUsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMCwwLDEsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6MSxcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjo4LFwieVwiOjYsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo1LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo4LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6MTAsXCJ2XCI6Mn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjksXCJ2XCI6N30sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo1LFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo2LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6NSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6NSxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjo2LFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjUsXCJ5XCI6NCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjExLFwieVwiOjgsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMSwxLDEsMSwxLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMSwxLDEsMCwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6MTAsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MyxcInlcIjo0LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MixcInlcIjo2LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MyxcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NCxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo4LFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo5LFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6NixcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjIsXCJ5XCI6NSxcInZcIjoxMH0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjQsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMSwxLDEsMSwxLDEsMSwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMSwwLDAsMSwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwxLDEsMSwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMSwxLDAsMCwxLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDAsMCwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6NixcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjozLFwieVwiOjMsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMyxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo2LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjQsXCJ5XCI6NCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6MyxcInZcIjoyfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjExLFwieVwiOjMsXCJ2XCI6Mn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo5LFwieVwiOjMsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwxLDEsMSwxLDEsMSwxLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6NyxcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjo4LFwieVwiOjUsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo2LFwieVwiOjUsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo1LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MixcInlcIjozLFwidlwiOjJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTQsXCJ5XCI6NCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjE0LFwieVwiOjQsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMyxcInlcIjozLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTQsXCJ5XCI6MyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjExLFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEyLFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoyLFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo2LFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo3LFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo4LFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo5LFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTMsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6OCxcInZcIjoxMX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo0LFwieVwiOjksXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6MixcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoxMixcInlcIjozLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjQsXCJ4XCI6MTAsXCJ5XCI6MyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6MyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo4LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjQsXCJ4XCI6NyxcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjQsXCJ4XCI6MTAsXCJ5XCI6MTAsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6NSxcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoyLFwieVwiOjMsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo0LFwieVwiOjMsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo1LFwieVwiOjMsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NCxcInhcIjozLFwieVwiOjMsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxNCxcInlcIjoxMCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEzLFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMixcInlcIjoxMCxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwxLDEsMCwwLDAsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwxLDAsMCwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjo2LFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjgsXCJ5XCI6NCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjYsXCJ5XCI6MTEsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo1LFwieVwiOjksXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo4LFwieVwiOjEwLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjQsXCJ4XCI6NyxcInlcIjo0LFwidlwiOjF9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjEsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MTAsXCJ5XCI6NixcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2UsXCJ4XCI6MTAsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlLFwieFwiOjYsXCJ5XCI6OSxcInZcIjo1fSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2UsXCJ4XCI6NyxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJmbFwiOmZhbHNlLFwiZnJcIjpmYWxzZSxcInhcIjo2LFwieVwiOjcsXCJ2XCI6NX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlLFwieFwiOjYsXCJ5XCI6NSxcInZcIjo1fSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6MTAsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjo4LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo2LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6NCxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMSwxLDAsMCwwLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDEsMSwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjo3LFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjExLFwieVwiOjcsXCJ2XCI6MSxcImZsXCI6dHJ1ZSxcImZyXCI6dHJ1ZX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo5LFwieVwiOjcsXCJ2XCI6MSxcImZsXCI6dHJ1ZSxcImZyXCI6dHJ1ZX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NCxcInhcIjoxMCxcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjQsXCJ5XCI6OCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjcsXCJ5XCI6NSxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwxLDEsMCwwLDAsMCwxLDEsMCwwLDAsMSwxLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMSwxLDAsMCwwLDAsMSwxLDAsMCwwLDEsMSwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDEsMSwxLDEsMCwwLDEsMSwwLDEsMSwxLDEsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwxLDEsMCwwLDAsMSwxLDEsMCwwLDAsMSwxLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMSwxLDAsMSwwLDAsMCwwLDEsMCwwLDAsMSwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwxLDEsMSwwLDAsMSwxLDEsMSwxLDEsMSwxLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjo2LFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjQsXCJ5XCI6NCxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEzLFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NCxcInhcIjo3LFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjozLFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjcsXCJ2XCI6MX1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwwLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMCwxLDEsMCwwLDAsMCwxLDAsMCwxLDEsMCwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDAsMSwxLDAsMCwwLDAsMCwxLDEsMSwxLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDEsMSwwLDAsMCwwLDEsMSwxLDEsMSwwLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDFdLFxyXG4gICAgICAgICAgICBbMSwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwxXSxcclxuICAgICAgICAgICAgWzEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6MSxcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjo4LFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo1LFwieVwiOjgsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjcsXCJ2XCI6MyxcImZsXCI6dHJ1ZSxcImZyXCI6ZmFsc2V9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NyxcInlcIjo4LFwidlwiOjEsXCJmbFwiOmZhbHNlLFwiZnJcIjpmYWxzZX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjo2LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjo2LFwidlwiOjEsXCJmbFwiOmZhbHNlLFwiZnJcIjpmYWxzZX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjUsXCJ2XCI6MyxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjksXCJ5XCI6NSxcInZcIjoxLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2V9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDEsMSwwLDAsMCwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwxLDEsMCwwLDAsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwwLDEsMCwwLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjIsXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6NixcInlcIjo0LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjo1LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjoxMCxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOiBbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwxLDEsMCwxLDAsMSwwLDAsMCwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMCwxLDEsMCwwLDAsMSwxLDAsMSwwLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMSwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6IDksXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6IFtcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjQsXCJ5XCI6MyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6NCxcInZcIjoxLFwiZmxcIjp0cnVlLFwiZnJcIjp0cnVlfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NCxcInZcIjoxLFwiZmxcIjp0cnVlLFwiZnJcIjp0cnVlfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjQsXCJ2XCI6NCxcImZsXCI6dHJ1ZSxcImZyXCI6dHJ1ZX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo4LFwieVwiOjMsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NCxcInhcIjoxMSxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjQsXCJ4XCI6NSxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MyxcInlcIjo5LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTMsXCJ5XCI6OSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjgsXCJ5XCI6MTAsXCJ2XCI6ZmFsc2V9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIC8qIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwwLDAsMCwwLDAsMCwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMCwwLDAsMCwwLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMCwwLDEsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMCwwLDEsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjo5LFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjksXCJ5XCI6NSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjcsXCJ5XCI6NixcInZcIjoyfSxcclxuICAgICAgICAgICAge1wiaWRcIjo0LFwieFwiOjcsXCJ5XCI6NSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjcsXCJ5XCI6OSxcInZcIjp0cnVlfSxcclxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjgsXCJ5XCI6MTAsXCJ2XCI6dHJ1ZX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NSxcInhcIjo5LFwieVwiOjgsXCJ2XCI6dHJ1ZX1cclxuICAgICAgICBdXHJcbiAgICB9LCovIHtcclxuICAgICAgICBtYXA6IFtcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMCwwLDAsMCwwLDAsMCwxLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwwLDAsMCwwLDEsMSwxLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNwcml0ZXM6IFtcclxuICAgICAgICAgICAge2lkIDo3LCB4OiAxMywgeTogMiwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6MywgeDogNCwgeTogNCwgdjogOH0sXHJcbiAgICAgICAgICAgIHtpZCA6MywgeDogMTEsIHk6IDMsIHY6IDR9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDMsIHk6IDUsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDQsIHk6IDYsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDUsIHk6IDcsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDEwLCB5OiA2LCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiAxMSwgeTogNSwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogMTQsIHk6IDEwLCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiAxNCwgeTogOSwgdjogMX0sXHJcbiAgICAgICAgICAgIHtpZCA6NiwgeDogMiwgeTogMTAsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDksIHk6IDgsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDIsIHk6IDksIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDgsIHk6IDgsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDcsIHk6IDgsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDYsIHk6IDgsIHY6IDF9LFxyXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDgsIHk6IDEwLCB2OiAxfSxcclxuICAgICAgICAgICAge2lkIDo2LCB4OiA3LCB5OiAxMCwgdjogMX1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHRoZW1lOiA4XHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6NixcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoxNCxcInlcIjoxMCxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDEsMCwxLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMSwxLDAsMCwxLDAsMSwxLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwwLDAsMSwxLDAsMSwwLDEsMCwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwwLDEsMSwxLDEsMCwxLDAsMSwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwxLDAsMCwxLDAsMSwxLDAsMSwwLDEsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMSwwLDAsMSwwLDAsMSwwLDEsMCwxLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwwLDEsMSwwLDEsMCwwLDEsMSwxLDEsMCwwLDEsMV0sXHJcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxyXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcclxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjo5LFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjEwLFwieVwiOjExLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjoxLFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjUsXCJ4XCI6NCxcInlcIjoxMSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6NSxcInZcIjoxfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXTtcclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXRhbCBleHRlbmRzIEFuaW1TcHJpdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5LCBsZW5ndGgpIHtcclxuICAgICAgICBzdXBlcihDb25zdHMuT2JqZWN0TWV0YWwsIGVuZ2luZSwgJ2ltZ19tZXRhbCcsXHJcbiAgICAgICAgICAgIHR4LCB0eSwgQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCwgMCwgMCwgMCwgMSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy54dGlsZSA9IHR4O1xyXG4gICAgICAgIHRoaXMueXRpbGUgPSB0eTtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICB0aGlzLmFuaW1EZWxheSA9IDk7XHJcbiAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gMDtcclxuICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5HbGlkZShkaXIpIHtcclxuICAgICAgICBpZiAoZGlyID09PSBDb25zdHMuRGlyTGVmdCAgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMubCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlyID09PSBDb25zdHMuRGlyUmlnaHQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMucikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmcm96ZW5Ub0ljZSgpIHtcclxuICAgICAgICBjb25zdCByaWdodFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueHRpbGUgKyAxLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICBjb25zdCBsZWZ0U3ByaXRlID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54dGlsZSAtIDEsIHRoaXMueXRpbGUpXHJcbiAgICAgICAgcmV0dXJuICAhdGhpcy5mYWxsaW5nICYmICgocmlnaHRTcHJpdGUgJiYgcmlnaHRTcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiYgcmlnaHRTcHJpdGUuZnJvemVuLmxlZnQpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0U3ByaXRlICYmIGxlZnRTcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiYgbGVmdFNwcml0ZS5mcm96ZW4ucmlnaHQpKTtcclxuICAgIH1cclxuXHJcbiAgICBncmF2aXR5KCkge1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkgJiYgIXRoaXMuZnJvemVuVG9JY2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5mYWxsaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtY29sbGlzaW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsaXNpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkdsaWRlKHRoaXMuZGlycmVjdGlvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gMDtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWNvbGxpc2lvbicpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VNb3Zpbmc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZUljZUNoZWNrOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZURvd246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvRG93bigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgc3VwZXIuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZHJhd0Zyb3N0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2xpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSA0ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb0Rvd24oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSArPSA0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdXNoKGRpcikge1xyXG4gICAgICAgIHRoaXMuZGlycmVjdGlvbiA9ICh0eXBlb2YgZGlyID09PSAndW5kZWZpbmVkJykgPyB0aGlzLmRpcnJlY3Rpb24gOiBkaXI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxpc2lvbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZU1vdmluZywgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlcyc7XHJcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcclxuICAgICAgICBzdXBlcihDb25zdHMuT2JqZWN0UGxheWVyLCBlbmdpbmUsICdpbWdfZG9uYScsIHR4LCB0eSwgNDgsIDY0LCAtMTAsIC0zMiwgMiwgMiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAyO1xyXG4gICAgICAgIHRoaXMuZGlycmVjdGlvbiA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IDA7IC8vc3RhbmRpbmcgdG9wIHJpZ2h0IGRvd24gbGVmdFxyXG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aWxlV2lkdGggPSBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgICAgIHRoaXMudGlsZUhlaWdodCA9IENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5hbmltRGVsYXkgPSAzO1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhbmRDb3VudGVyID0gMDtcclxuICAgICAgICB0aGlzLmludHJvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGVmdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIC8vaWYgc3RhbmRpbmcgdGhlbiB0dXJuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gIT09IENvbnN0cy5EaXJMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAvL2lzIG5vdCB1bmRlciBhIGJyaWNrXHJcbiAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltVHVyblN0YXJ0LCBDb25zdHMuQW5pbVR1cm5FbmQsIGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVHVybiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSBDb25zdHMuRGlyTGVmdDtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgLy9ydW5uaW5nXHJcbiAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmwpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9ub3QgdW5kZXIgYSBicmlja1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1SdW5TdGFydCwgQ29uc3RzLkFuaW1SdW5FbmQsIHRydWUsIENvbnN0cy5BbmltTGVmdFJvdywgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIENvbnN0cy5BbmltQ3JvdWNoRW5kLCB0cnVlLCBDb25zdHMuQW5pbUxlZnRSb3csIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlTGVmdCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2hpdCBhbiBpY2VcclxuICAgICAgICAgICAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSAmJiAodGhpcy5jb29ybmVycy5sID09PSBDb25zdHMuT2JqZWN0SWNlIHx8IHRoaXMuY29vcm5lcnMubCA9PT0gQ29uc3RzLk9iamVjdE1ldGFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jbGltYlxyXG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmwpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnVsKSAmJiAhdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1QdXNoU3RhcnQsQ29uc3RzLkFuaW1QdXNoU3RhcnQsZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVVwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByaWdodCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gIT09IENvbnN0cy5EaXJSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVR1cm5TdGFydCwgQ29uc3RzLkFuaW1UdXJuRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVR1cm4sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gQ29uc3RzLkRpclJpZ2h0O1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVJ1blN0YXJ0LCBDb25zdHMuQW5pbVJ1bkVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIENvbnN0cy5BbmltQ3JvdWNoRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVJpZ2h0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSAmJiAodGhpcy5jb29ybmVycy5yID09PSBDb25zdHMuT2JqZWN0SWNlIHx8IHRoaXMuY29vcm5lcnMuciA9PT0gQ29uc3RzLk9iamVjdE1ldGFsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudXIpICYmICF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVB1c2hTdGFydCxDb25zdHMuQW5pbVB1c2hTdGFydCxmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVVwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXJuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBDb25zdHMuTW92ZVJpcCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5T25jZSgnZGFuZ2VyJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVSaXAsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1SaXBTdGFydCxDb25zdHMuQW5pbVJpcEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGludHJvKCkge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUJpZ0ZhbGxTdGFydCxDb25zdHMuQW5pbUJpZ0ZhbGxFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVMZXZlbEVudGVyLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvdXRybygpIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1GYWxsU3RhcnQsIENvbnN0cy5BbmltQmlnRmFsbEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUxldmVsRXhpdCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGRvUmlwKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBncmF2aXR5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvb3JuZXJzLmQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJvcigndW5kZWZpbmVkIGNvb3JuZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mYWxsQ291bnRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheU9uY2UoXCJmYWxsaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUJpZ0ZhbGxTdGFydCwgQ29uc3RzLkFuaW1CaWdGYWxsRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCAxKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQmlnRmFsbFN0YXJ0LCBDb25zdHMuQW5pbUJpZ0ZhbGxFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQuc3RvcChcImZhbGxpbmdcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ29uc3RzLk1vdmVEb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnZmFsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMzgsIDY2JywgMTAsICAwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSArIDEsICcxMjIsIDIxMSwgMjU1JywgNSwgIDEuMjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvb3JuZXJzLmQgPT09IENvbnN0cy5PYmplY3RKYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBqYXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGphciAmJiBqYXIub25GaXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVybigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpY2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICAgICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMuZHIpICYmIHRoaXMuY29vcm5lcnMuZHIgIT09IENvbnN0cy5PYmplY3RGaXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LENvbnN0cy5BbmltSWNlRW5kLGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZU1ha2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb29ybmVycy5kciA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1JY2VTdGFydCxDb25zdHMuQW5pbUljZUVuZCxmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VSZW1vdmUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LENvbnN0cy5BbmltSWNlRW5kLGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZUZhaWwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kbCkgJiYgKHRoaXMuY29vcm5lcnMuZGwgIT09IENvbnN0cy5PYmplY3RGaXJlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1JY2VTdGFydCxDb25zdHMuQW5pbUljZUVuZCxmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZU1ha2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb29ybmVycy5kbCA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1JY2VTdGFydCxDb25zdHMuQW5pbUljZUVuZCxmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZVJlbW92ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsQ29uc3RzLkFuaW1JY2VFbmQsZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VGYWlsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAganVtcCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51cikgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LENvbnN0cy5BbmltUHVzaFN0YXJ0LGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVXAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmwpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51bCkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LENvbnN0cy5BbmltUHVzaFN0YXJ0LGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVVcCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9SdW4oKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQgKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9UdXJuKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb091dHJvKCkge1xyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgJSAxMCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlubmVyQ291bnRlciArPSAxO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMzgsIDY2JywgMTUsICAwLjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcyNTUsIDEzNSwgMTI0JywgMjAsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gNSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcxMjIsIDIxMSwgMjU1JywgMjUsICAxLjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciAlIDIgPT09IDAgJiYgdGhpcy5pbm5lckNvdW50ZXIgPCA2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdjbGltYicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciAlIDIgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy55ICs9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy55IC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA+PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ3N0YXRlLWxlYXZlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5uZXh0TGV2ZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9JbnRybygpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID09PSA4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMzgsIDY2JywgMjAsICAwLjUpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzI1NSwgMTM1LCAxMjQnLCAxNSwgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTIyLCAyMTEsIDI1NScsIDEwLCAgMS41KTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnc3RhZ2UtZW50ZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+PSAzMikge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5zdG9wKFwiZmFsbGluZ1wiKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvR3Jhdml0eSgpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgICAgICAgICAgdGhpcy5mYWxsQ291bnRlcisrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb1N0YW5kKCkge1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhbmRDb3VudGVyKysgPiA1MDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVNsZWVwU3RhcnQsQ29uc3RzLkFuaW1TbGVlcEVuZCx0cnVlLCB0aGlzLmRpcnJlY3Rpb24gIT09IDEgPyBDb25zdHMuQW5pbUxlZnRSb3cgOiBDb25zdHMuQW5pbVJpZ2h0Um93LCA0OCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1TdGFuZFN0YXJ0LENvbnN0cy5BbmltU3RhbmRFbmQsdHJ1ZSwgdGhpcy5kaXJyZWN0aW9uICE9PSAxID8gQ29uc3RzLkFuaW1MZWZ0Um93IDogQ29uc3RzLkFuaW1SaWdodFJvdywgOCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCxDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uICE9PSAxID8gQ29uc3RzLkFuaW1MZWZ0Um93IDogQ29uc3RzLkFuaW1SaWdodFJvdywgOCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvVXAoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSAxOCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY291bnRlcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2NsaW1iJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICcxMjQsIDIzOCwgNjYnLCAxMCwgIDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMjU1LCAxMzUsIDEyNCcsIDUsIDEuMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVB1c2hFbmQsIENvbnN0cy5BbmltUHVzaEVuZCwgZmFsc2UsIHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0ID8gQ29uc3RzLkFuaW1SaWdodFJvdyA6IENvbnN0cy5BbmltTGVmdFJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSnVtcFN0YXJ0LCBDb25zdHMuQW5pbUp1bXBTdGFydCwgZmFsc2UsIHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0ID8gQ29uc3RzLkFuaW1SaWdodFJvdyA6IENvbnN0cy5BbmltTGVmdFJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSnVtcEVuZCwgQ29uc3RzLkFuaW1KdW1wRW5kLCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gOCAqIHRoaXMuZGlycmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKDIsIDIsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxODpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1TdGFuZCwgQ29uc3RzLkFuaW1TdGFuZCwgZmFsc2UsIHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0ID8gQ29uc3RzLkFuaW1SaWdodFJvdyA6IENvbnN0cy5BbmltTGVmdFJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWtlSWNlKCkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ25ldy1pY2UnKTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRJY2VCbG9jayh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlKzEpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlICsgMSk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUgKyAxLCAnMTI0LCAyMTQsIDI1NScsIDUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUljZUJsb2NrKCkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1yZW1vdmUnKTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVJY2VCbG9jayh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlKzEpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlICsgMSk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUgKyAxLCAnMTI0LCAyMTQsIDI1NScsIDUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2goKSB7XHJcbiAgICAgICAgbGV0IGljZSA9ICB0aGlzLmVuZ2luZS5pY2VBdCh0aGlzLnh0aWxlK3RoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgaWYgKGljZSAmJiBpY2UuY2FuR2xpZGUodGhpcy5kaXJyZWN0aW9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSwgJzI1NSwgMjU1LCAyNTUnLCAzKTtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUsICcxMjQsIDIxNCwgMjU1JywgMywgMS41KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LCBDb25zdHMuQW5pbVB1c2hFbmQsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3csIDMpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlUHVzaCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvUHVzaCgpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMjtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID4gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGljZSA9ICB0aGlzLmVuZ2luZS5pY2VBdCh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICAgICAgaWYgKGljZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLXB1c2gnKTtcclxuICAgICAgICAgICAgICAgIGljZS5wdXNoKHRoaXMuZGlycmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvSWNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENvbnN0cy5Nb3ZlSWNlTWFrZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWtlSWNlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSWNlQmxvY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID49IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZG9GYWlsSWNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDgpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWRpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlICsgMSwgJzg4LDY2LDY2Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb2xsaXNpb25zKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSwgQ29uc3RzLk9iamVjdFBsYXllcikgPT09IENvbnN0cy5PYmplY3RGaXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVybigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlICgpIHtcclxuICAgICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbnMoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gQ29uc3RzLk1vdmVTdGFuZCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YW5kQ291bnRlciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBDb25zdHMuTW92ZURvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlUmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvUnVuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZUxlZnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvUnVuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZURvd246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvR3Jhdml0eSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVVcDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9VcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVUdXJuOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1R1cm4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlTWFrZTpcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZUljZVJlbW92ZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9JY2UoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlRmFpbDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9GYWlsSWNlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZVN0YW5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb1N0YW5kKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZVB1c2g6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvUHVzaCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVSaXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvUmlwKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZUxldmVsRXhpdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9PdXRybygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVMZXZlbEVudGVyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kb0ludHJvKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFJlc291cmNlcyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0geyB9O1xyXG4gICAgICAgIHRoaXMubG9hZGVkID0gMDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgICAgICBpZiAoY2FudmFzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKHR5cGUsIG5hbWUsIHNyYykge1xyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbnMucHVzaCh7dHlwZTogdHlwZSwgbmFtZTogbmFtZSwgc3JjOiBzcmN9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc291cmNlc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVjayhjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0aGlzLmN0eCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoNTAsIDI1MCwgdGhpcy5sb2FkZWQgKiA0NTAgLyB0aGlzLmRlZmluaXRpb25zLmxlbmd0aCwgNDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sb2FkZWQgPT09IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlYWR5KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCByZXNvdXJjZSBvZiB0aGlzLmRlZmluaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZS50eXBlID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2soY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSByZXNvdXJjZS5zcmM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlc1tyZXNvdXJjZS5uYW1lXSA9IGltYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZS50eXBlID09PSdhdWRpbycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVzb3VyY2UubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCArPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXNbcmVzb3VyY2UubmFtZV0gPSBhdWRpbztcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2soY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBGcm9zdCB9IGZyb20gJy4vc3RydWN0JztcclxuaW1wb3J0IHsgRmlyZSB9IGZyb20gJy4vZmlyZSc7XHJcbmltcG9ydCB7IEljZSB9IGZyb20gJy4vaWNlJztcclxuaW1wb3J0IHsgSmFyIH0gZnJvbSAnLi9qYXInO1xyXG5pbXBvcnQgeyBNZXRhbCB9IGZyb20gJy4vbWV0YWwnO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tICcuL3RpbGVtYXAnO1xyXG5pbXBvcnQgeyBsZXZlbHMgfSBmcm9tICcuL2xldmVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmUoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICBkYXRhLm1hcCA9IHRoaXMuZW5naW5lLm1hcC5tYXA7XHJcbiAgICAgICAgZGF0YS50aGVtZSA9IHRoaXMuZW5naW5lLm1hcC50aGVtZTtcclxuICAgICAgICBkYXRhLnNwcml0ZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiB0aGlzLmVuZ2luZS5zcHJpdGVzKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9ICh0eXBlb2Ygc3ByaXRlLmxlbmd0aCA9PT0gXCJ1bmRlZmluZWRcIikgPyAxIDogc3ByaXRlLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFsdWUgPSBzcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RKYXIgPyBzcHJpdGUub25GaXJlIDogdmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBmbCwgZnI7XHJcbiAgICAgICAgICAgIGlmIChzcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcclxuICAgICAgICAgICAgICAgIGZsID0gc3ByaXRlLmZyb3plbi5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgZnIgPSBzcHJpdGUuZnJvemVuLnJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGEuc3ByaXRlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogc3ByaXRlLmlkLFxyXG4gICAgICAgICAgICAgICAgXCJ4XCI6IHNwcml0ZS54dGlsZSxcclxuICAgICAgICAgICAgICAgIFwieVwiOiBzcHJpdGUueXRpbGUsXHJcbiAgICAgICAgICAgICAgICBcInZcIjogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBcImZsXCI6IGZsLFxyXG4gICAgICAgICAgICAgICAgXCJmclwiOiBmclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoaW5kZXgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGxldmVsc1tpbmRleF0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmdpbmUubGV2ZWwgPSBpbmRleDtcclxuICAgICAgICBjb25zdCBsZXZlbCA9IGxldmVsc1tpbmRleF07XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc3ByaXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLm1hcCA9IG5ldyBUaWxlTWFwKHRoaXMuZW5naW5lLCBsZXZlbC5tYXAsIGxldmVsLnRoZW1lKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiBsZXZlbC5zcHJpdGVzKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaChzcHJpdGUuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdFBsYXllcjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZSh0aGlzLmVuZ2luZS5wbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0SWNlOlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmcm96ZW4gPSBuZXcgRnJvc3QodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzcHJpdGUuZmwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb3plbi5sZWZ0ID0gc3ByaXRlLmZsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm96ZW4ucmlnaHQgPSBzcHJpdGUuZnI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShuZXcgSWNlKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnksIHBhcnNlSW50KHNwcml0ZS52KSwgZnJvemVuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RNZXRhbDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IE1ldGFsKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnksIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdEZpcmU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKG5ldyBGaXJlKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdEphcjpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBqYXIgPSBuZXcgSmFyKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcHJpdGUudiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGphci50dXJuT25GaXJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShqYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5pbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5jbGFzcyBQYXJ0aWNsZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCBjb2xvciwgaW50ZW5jaXR5KSB7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICh0eXBlb2YgY29sb3IgPT09ICd1bmRlZmluZWQnKSA/ICcyNTUsMjU1LDI1NScgOiBjb2xvcjtcclxuICAgICAgICB0aGlzLnIgPSAzO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnZ4ID0gKE1hdGgucmFuZG9tKCkgKiA0IC0gMikgKiBpbnRlbmNpdHk7XHJcbiAgICAgICAgdGhpcy52eSA9IChNYXRoLnJhbmRvbSgpICogNiAtIDQpICogaW50ZW5jaXR5O1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAwLjE1O1xyXG4gICAgICAgIHRoaXMubGlmZSA9IDI1NTtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIGxldCBvcGFjaXR5ID0gdGhpcy5saWZlIC8gMjU1O1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKCcgKyB0aGlzLmNvbG9yKyAnLCcgKyBvcGFjaXR5ICsgJyknO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yLCAwLCBNYXRoLlBJKjIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge1xyXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZ4O1xyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5O1xyXG4gICAgICAgIHRoaXMudnkgKz0gdGhpcy5zcGVlZDtcclxuICAgICAgICB0aGlzLmxpZmUgLT0gNTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwYXJrcyBleHRlbmRzIFNwcml0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKGVuZ2luZSwgdHgsIHR5LCBjb2xvciwgbGVuZ3RoLCBpbnRlbmNpdHkpIHtcclxuICAgICAgICBzdXBlcihudWxsLCBlbmdpbmUsIHR4LCB0eSwgMzIsIDMyKTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gKHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcpID8gJzI1NSwyNTUsMjU1JyA6IGNvbG9yO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gKHR5cGVvZiBsZW5ndGggPT09ICd1bmRlZmluZWQnKSA/IDEwIDogbGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuaW50ZW5jaXR5ID0gKHR5cGVvZiBpbnRlbmNpdHkgPT09ICd1bmRlZmluZWQnKSA/IDEgOiBpbnRlbmNpdHk7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0gPSBuZXcgUGFydGljbGUodGhpcy5lbmdpbmUuY3R4LCB0eCpDb25zdHMuVGlsZVdpZHRoKzE2LCB0eSpDb25zdHMuVGlsZVdpZHRoKzE2LCB0aGlzLmNvbG9yLCB0aGlzLmludGVuY2l0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuY3R4LnNhdmUoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmdpbmVNb3ZlKCkge1xyXG4gICAgICAgIHRoaXMubW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXS5tb3ZlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcnRpY2xlc1tpXS5saWZlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhcnRpY2xlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNlbGYoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZ2luZS5zZnhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVuZ2luZS5zZnhzW2ldID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zZnhzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnLi9lbmdpbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNvdW5kIHtcclxuXHRjb25zdHJ1Y3RvcihyZXNvdXJjZXMpIHtcclxuXHRcdHRoaXMucmVzb3VyY2VzID0gcmVzb3VyY2VzO1xyXG5cdFx0dGhpcy5tdXNpY09uID0gdHJ1ZTtcclxuXHRcdHRoaXMuc291bmRPbiA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy5zZnhWb2x1bWUgPSAwLjM7XHJcblx0XHR0aGlzLnNmeCA9IHtcclxuXHRcdFx0XCJmaXJlLW9mZlwiOiByZXNvdXJjZXMuZ2V0KCdzZngtZmlyZS1vZmYnKSxcclxuXHRcdFx0XCJpY2UtcHVzaFwiOiByZXNvdXJjZXMuZ2V0KCdzZngtaWNlLXB1c2gnKSxcclxuXHRcdFx0XCJmYWxsXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1mYWxsJyksXHJcblx0XHRcdFwiZmFsbGluZ1wiOiByZXNvdXJjZXMuZ2V0KCdzZngtZmFsbGluZycpLFxyXG5cdFx0XHRcIm5ldy1pY2VcIjogcmVzb3VyY2VzLmdldCgnc2Z4LW5ldy1pY2UnKSxcclxuXHRcdFx0XCJjbGltYlwiOiByZXNvdXJjZXMuZ2V0KCdzZngtY2xpbWInKSxcclxuXHRcdFx0XCJpY2UtY29sbGlzaW9uXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1pY2UtY29sbGlzaW9uJyksXHJcblx0XHRcdFwic3RhZ2UtZW50ZXJcIjogcmVzb3VyY2VzLmdldCgnc2Z4LXN0YWdlLWVudGVyJyksXHJcblx0XHRcdFwiZGFuZ2VyXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1kYW5nZXInKSxcclxuXHRcdFx0XCJpY2UtcmVtb3ZlXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1pY2UtcmVtb3ZlJyksXHJcblx0XHRcdFwic3RhdGUtbGVhdmVcIjogcmVzb3VyY2VzLmdldCgnc2Z4LXN0YXRlLWxlYXZlJyksXHJcblx0XHRcdFwiaWNlLWRpc2FibGVkXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1kaXNhYmxlZCcpXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cGxheShzZngpIHtcclxuXHRcdGlmICghdGhpcy5zb3VuZE9uKSByZXR1cm47XHJcblx0XHR0aGlzLnNmeFtzZnhdLnZvbHVtZSA9IHRoaXMuc2Z4Vm9sdW1lO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS5jdXJyZW50VGltZSA9IDA7XHJcblx0XHR0aGlzLnNmeFtzZnhdLnBsYXkoKS5jYXRjaCgoKT0+e30pO1xyXG5cdH1cclxuXHJcblx0cGxheU9uY2Uoc2Z4KSB7XHJcblx0XHRpZiAoIXRoaXMuc2Z4W3NmeF0ucGF1c2VkKSByZXR1cm47XHJcblx0XHRpZiAoIXRoaXMuc291bmRPbikgcmV0dXJuO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS52b2x1bWUgPSB0aGlzLnNmeFZvbHVtZTtcclxuXHRcdHRoaXMuc2Z4W3NmeF0uY3VycmVudFRpbWUgPSAwO1xyXG5cdFx0dGhpcy5zZnhbc2Z4XS5wbGF5KCkuY2F0Y2goKCk9Pnt9KTtcclxuXHR9XHJcblxyXG5cdHN0b3Aoc2Z4KSB7XHJcblx0XHR0aGlzLnNmeFtzZnhdLnBhdXNlKCk7XHJcblx0XHR0aGlzLnNmeFtzZnhdLmN1cnJlbnRUaW1lID0gMDtcclxuXHR9XHJcblxyXG5cdHNvdW5kcmFjaygpIHtcclxuXHRcdGlmICghdGhpcy5tdXNpY09uKSByZXR1cm47XHJcblx0XHR0aGlzLm11c2ljID0gdGhpcy5yZXNvdXJjZXMuZ2V0KCdzZngtbXVzaWMtc3BhcmtzJyk7XHJcblx0XHR0aGlzLm11c2ljLm11dGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLm11c2ljLnZvbHVtZSA9IDAuMjtcclxuXHRcdHRoaXMubXVzaWMubG9vcCA9IHRydWU7XHJcblx0XHR0aGlzLm11c2ljLnBsYXkoKS5jYXRjaCgoKT0+e30pO1xyXG5cdH1cclxufSIsImltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi9zdHJ1Y3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgICAvKipcclxuICAgICAqIEJhc2UgY2xhc3Mgb2YgdGhlIHNwcml0ZVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGVuZ2luZSAgIEVuZ2luZSBFbmdpbmVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eCAgICAgUG9zaXRpb24gdGlsZSB4IGluIHRoZSBtYXBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eSAgICAgUG9zaXRpb24gdGlsZSB5IGluIHRoZSBtYXBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAgV2lkdGggb2YgdGhlIHNwcml0ZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgdGhlIHNwcml0ZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgZW5naW5lLCB0eCwgdHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSBlbmdpbmUuY3R4O1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMgPSBuZXcgUG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLnNvbGlkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSA0O1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBDb25zdHMuTW92ZVN0YW5kO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAwO1xyXG4gICAgICAgIHRoaXMueHRpbGUgPSB0eDtcclxuICAgICAgICB0aGlzLnl0aWxlID0gdHk7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54dGlsZSAqIENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICAgICAgdGhpcy55ID0gdGhpcy55dGlsZSAqIENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgc3ByaXRlIHN0YXRlc1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXRlICBDb25zdGFudCBvZiB0aGUgc3RhdGVcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbW92aW5nIFRydWUgaWYgc3ByaXRlIGlzIG1vdmluZ1xyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZShzdGF0ZSwgbW92aW5nKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSAodHlwZW9mIG1vdmluZyA9PT0gJ3VuZGVmaW5lZCcpID8gZmFsc2UgOiBtb3Zpbmc7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGlsZSh0eCwgdHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmdpbmUubWFwLmdldFRpbGUodHgsIHR5KTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Nwcml0ZUF0ICh0eCwgdHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54dGlsZSA9PT0gdHggJiYgdGhpcy55dGlsZSA9PT0gdHk7XHJcbiAgICB9XHJcblxyXG4gICAgc3ByaXRlVHlwZUF0KHR4LCB0eSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodHgsIHR5KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb29ybmVycygpIHtcclxuICAgICAgICB0aGlzLmNvb3JuZXJzLnUgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy5kID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSArIDEpO1xyXG4gICAgICAgIHRoaXMuY29vcm5lcnMubCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUgLSAxLCB0aGlzLnl0aWxlKTtcclxuICAgICAgICB0aGlzLmNvb3JuZXJzLnIgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlICsgMSwgdGhpcy55dGlsZSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy51bCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUgLSAxLCB0aGlzLnl0aWxlIC0gMSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy51ciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUgKyAxLCB0aGlzLnl0aWxlIC0gMSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy5kbCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUgLSAxLCB0aGlzLnl0aWxlICsgMSk7XHJcbiAgICAgICAgdGhpcy5jb29ybmVycy5kciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUgKyAxLCB0aGlzLnl0aWxlICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy54dGlsZSA9IE1hdGguZmxvb3IodGhpcy54IC8gQ29uc3RzLlRpbGVXaWR0aCk7XHJcbiAgICAgICAgdGhpcy55dGlsZSA9IE1hdGguZmxvb3IodGhpcy55IC8gQ29uc3RzLlRpbGVXaWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSAoKSB7IH1cclxuXHJcbiAgICBlbmdpbmVNb3ZlKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29vcm5lcnMoKTtcclxuICAgICAgICB0aGlzLm1vdmUoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiogU3RvcmVzIHBvc2l0aW9uIG9mIHRoZSBjb3JuZXJzIGFuZCB2ZXJ0aWNlc1xyXG4qL1xyXG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy51ID0gMDtcclxuICAgICAgICB0aGlzLmQgPSAwO1xyXG4gICAgICAgIHRoaXMubCA9IDA7XHJcbiAgICAgICAgdGhpcy5yID0gMDtcclxuICAgICAgICB0aGlzLnVsID0gMDtcclxuICAgICAgICB0aGlzLnVyID0gMDtcclxuICAgICAgICB0aGlzLmRsID0gMDtcclxuICAgICAgICB0aGlzLmRyID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvb3Ige1xyXG4gICAgY29uc3RydWN0b3IgKHR4LCB0eSkge1xyXG4gICAgICAgIHRoaXMueHRpbGUgPSB0eDtcclxuICAgICAgICB0aGlzLnl0aWxlID0gdHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGcm9zdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCkge1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCB7XHJcbiAgICAvKipcclxuICAgICAqIFRpbGVtYXAgY2xhc3NcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgRW5naW5lXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWFwICBNYXRyaXggb2YgdGhlIG1hcFxyXG4gICAgICovXHJcblxyXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCBtYXAsIHRoZW1lKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBlbmdpbmUuY3R4O1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcclxuICAgICAgICB0aGlzLnRpbGVXaWR0aCA9IENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubWFwLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubWFwWzBdLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgdGhpcy50aWxlc0ltYWdlID0gdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgndGlsZW1hcCcpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBjb250ZW50IG9mIHRoZSB0aWxlIGluc2lkZSB0aGUgbWF0cml4XHJcbiAgICAgKiBpZiBwb3NpdGlvbiBvdXQgb2YgYm91bmRzIHJldHVybnMgQ29uc3RzLk9CSkVDVF9PVVRcclxuICAgICAqIEBwYXJhbSAge251bWJlcn0geSBwb3NpdGlvblxyXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSB4IHBvc2l0aW9uXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9ICAgQ29udGVudCBvZiB0aGUgdGlsZVxyXG4gICAgICovXHJcbiAgICBnZXRUaWxlKHgsIHkpIHtcclxuICAgICAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+IHRoaXMud2lkdGggfHwgeSA+IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDb25zdHMuT2JqZWN0T3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBbeV1beF07XHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmF3cyB0aGUgbWFwXHJcbiAgICAgKiBAcmV0dXJuIHtub25lfVxyXG4gICAgICovXHJcbiAgICBkcmF3KCkge1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy53aWR0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHRoaXMuaGVpZ2h0OyArK2opIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aWxlVHlwZSA9IENvbnN0cy5UaWxlQmFja2dyb3VuZDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcFtqXVtpXSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRUaWxlKGktMSwgaikgJiYgIXRoaXMuZ2V0VGlsZShpKzEsIGopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRpbGVCb3RoU2lkZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5nZXRUaWxlKGktMSwgaikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZUxlZnRTaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2V0VGlsZShpKzEsIGopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRpbGVSaWdodFNpZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZU1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZXNJbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICB0aWxlVHlwZSwgdGhpcy50aGVtZSAqIHRoaXMudGlsZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGkgKiB0aGlzLnRpbGVXaWR0aCwgaiAqIHRoaXMudGlsZUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKCkge31cclxuXHJcbiAgICBlbmdpbmVNb3ZlKCkge31cclxufVxyXG4iLCJpbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbGUgPSBPYmplY3QuZnJlZXplKHtcclxuICAgdGlsZXM6IHtcclxuICAgICAgICBbQ29uc3RzLk9iamVjdEJhY2tncm91bmRdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgZnJlZXplOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW0NvbnN0cy5PYmplY3RPdXRdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICBmcmVlemU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9iamVjdFBsYXllcl06IHtcclxuICAgICAgICAgICAgc29saWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGZyZWV6ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFtDb25zdHMuT2JqZWN0SWNlXToge1xyXG4gICAgICAgICAgICBzb2xpZDogdHJ1ZSxcclxuICAgICAgICAgICAgZnJlZXplOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW0NvbnN0cy5PYmplY3RNZXRhbF06IHtcclxuICAgICAgICAgICAgc29saWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGZyZWV6ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW0NvbnN0cy5PYmplY3RXYWxsXToge1xyXG4gICAgICAgICAgICBzb2xpZDogdHJ1ZSxcclxuICAgICAgICAgICAgZnJlZXplOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBbQ29uc3RzLk9iamVjdEZpcmVdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgZnJlZXplOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW0NvbnN0cy5PYmplY3RKYXJdOiB7XHJcbiAgICAgICAgICAgIHNvbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICBmcmVlemU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGlzU29saWQ6IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVzW2lkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVTkRFRklORUQgT04gaXNTb2xpZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzW2lkXS5zb2xpZDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGlzRnJlZXphYmxlOiBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlc1tpZF0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVU5ERUZJTkVEIE9OIGlzRnJlZXphYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZXNbaWRdLmZyZWV6ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9