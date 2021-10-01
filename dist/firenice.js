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
        window.firenice = true;
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
        this.engine.sound.play('fire-off');
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

    window.addEventListener("keydown", this.keydown, false);
    window.addEventListener("keyup", this.keyup, false);
    document.getElementById("canvas").addEventListener("click", () => {
      if (this.intro) {
        this.enter = true;
      }
      this.intro = false;
    });
    document
      .getElementById("btn_action")
      .addEventListener("pointerdown", () => {
        this.down = true;
        this.left = false;
        this.right = false;
      });
    document
      .getElementById("btn_action")
      .addEventListener("pointerup", () => (this.down = false));
    document.getElementById("btn_left").addEventListener("pointerdown", () => {
      this.left = true;
      this.right = false;
      this.down = false;
    });
    document
      .getElementById("btn_left")
      .addEventListener("pointerup", () => (this.left = false));
    document.getElementById("btn_right").addEventListener("pointerdown", () => {
      this.right = true;
      this.left = false;
      this.down = false;
    });
    document
      .getElementById("btn_right")
      .addEventListener("pointerup", () => (this.right = false));
    document
      .getElementById("btn_select")
      .addEventListener("click", () => (this.enter = true));
  }

  keydown_(e) {
    e.preventDefault();
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
    e.preventDefault();
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
    {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1],
            [1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1],
            [1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1],
            [1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1],
            [1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1],
            [1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":0,
        "sprites":[
            {"id":7,"x":10,"y":5,"v":1},
            {"id":3,"x":7,"y":6,"v":4,"fl":true,"fr":true},
            {"id":6,"x":7,"y":5,"v":1},
            {"id":6,"x":8,"y":5,"v":1},
            {"id":6,"x":9,"y":5,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1],
            [1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1],
            [1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1],
            [1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1],
            [1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1],
            [1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1],
            [1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1],
            [1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1],
            [1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1],
            [1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1],
            [1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":0,
        "sprites":[
            {"id":7,"x":8,"y":5,"v":1},
            {"id":5,"x":6,"y":10,"v":true},
            {"id":5,"x":5,"y":7,"v":true},
            {"id":5,"x":8,"y":8,"v":true},
            {"id":6,"x":5,"y":6,"v":1},
            {"id":6,"x":6,"y":9,"v":1},
            {"id":6,"x":8,"y":7,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1],
            [1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1],
            [1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1],
            [1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1],
            [1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1],
            [1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1],
            [1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1],
            [1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1],
            [1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":4,
        "sprites":[
            {"id":7,"x":8,"y":7,"v":1},
            {"id":3,"x":6,"y":6,"v":1,"fl":false,"fr":true},
            {"id":3,"x":4,"y":7,"v":1,"fl":true,"fr":false},
            {"id":3,"x":4,"y":5,"v":1,"fl":true,"fr":false},
            {"id":6,"x":6,"y":9,"v":1},
            {"id":6,"x":9,"y":9,"v":1}
        ]
    }, {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
            [1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1],
            [1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1],
            [1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1],
            [1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1],
            [1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":6,
        "sprites":[
            {"id":7,"x":9,"y":11,"v":1},
            {"id":5,"x":10,"y":8,"v":true},
            {"id":6,"x":14,"y":11,"v":1},
            {"id":4,"x":11,"y":2,"v":1}
        ]
    },
    {
        "map":[
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1],
            [1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1],
            [1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1],
            [1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1],
            [1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1],
            [1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1],
            [1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1],
            [1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        "theme":8,
            "sprites":[
                {"id":7,"x":12,"y":4,"v":1},
                {"id":5,"x":11,"y":7,"v":true},
                {"id":4,"x":10,"y":6,"v":1},
                {"id":6,"x":9,"y":10,"v":1},
                {"id":6,"x":11,"y":6,"v":1},
                {"id":6,"x":9,"y":6,"v":1},
                {"id":6,"x":14,"y":6,"v":1},
                {"id":3,"x":9,"y":5,"v":4,"fl":true,"fr":false},
                {"id":3,"x":9,"y":4,"v":1,"fl":false,"fr":false}
            ]
    }, {
        "map":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0],
            [0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0],
            [0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0],
            [0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
        "theme":8,
        "sprites":[
            {"id":7,"x":3,"y":1,"v":1}
            ,{"id":4,"x":4,"y":2,"v":1}
            ,{"id":4,"x":2,"y":2,"v":1}
            ,{"id":3,"x":3,"y":2,"v":1,"fl":true,"fr":true}
            ,{"id":6,"x":4,"y":3,"v":1}
            ,{"id":6,"x":2,"y":3,"v":1}
            ,{"id":4,"x":6,"y":5,"v":1}
            ,{"id":3,"x":7,"y":5,"v":1,"fl":true,"fr":false}
            ,{"id":3,"x":5,"y":5,"v":1,"fl":false,"fr":true}
            ,{"id":4,"x":4,"y":8,"v":1}
            ,{"id":4,"x":2,"y":8,"v":1}
            ,{"id":3,"x":3,"y":8,"v":1,"fl":true,"fr":true}
            ,{"id":6,"x":4,"y":9,"v":1}
            ,{"id":6,"x":2,"y":9,"v":1}
            ,{"id":6,"x":7,"y":6,"v":1}
            ,{"id":6,"x":5,"y":6,"v":1}
            ,{"id":4,"x":10,"y":8,"v":1}
            ,{"id":4,"x":8,"y":8,"v":1}
            ,{"id":3,"x":9,"y":8,"v":1,"fl":true,"fr":true}
            ,{"id":6,"x":9,"y":9,"v":1}
            ,{"id":4,"x":12,"y":5,"v":1}
            ,{"id":3,"x":13,"y":5,"v":1,"fl":true,"fr":false}
            ,{"id":3,"x":11,"y":5,"v":1,"fl":false,"fr":true}
            ,{"id":6,"x":12,"y":6,"v":1}
            ,{"id":6,"x":9,"y":3,"v":1}
            ,{"id":4,"x":10,"y":2,"v":1}
            ,{"id":4,"x":8,"y":2,"v":1}
            ,{"id":3,"x":9,"y":2,"v":1,"fl":true,"fr":true}
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
        const opacity = this.life / 255;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlbmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9sZXZlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21ldGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RydWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9E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QUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN2RUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0R0E7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwQkFBMEI7QUFDdkMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5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O0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiZmlyZW5pY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9maXJlbmljZS5qc1wiKTtcbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBBbmltU3ByaXRlIGV4dGVuZHMgU3ByaXRlIHtcbiAgICAvKipcbiAgICAgKiBBbmltYXRlZCBTcHJpdGUsIGluaGVydHMgZnJvbSBTcHJpdGUuXG4gICAgICogQWRkcyBkcmF3aW5nIG9mIHBpY3R1cmVzIGluIHRoZSBib2R5IG9mIHNwcml0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgICAgRW5naW5lIEVuZ2luZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpbWFnZSAgIERvbSBpbWFnZSBvYmplY3QgKGltZyBzcmM9KVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eCAgICAgIFRpbGUgWCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eSAgICAgIFRpbGUgWSBwb3NpdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAgIFdpZHRoIG9mIHRoZSBzcHJpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0ICBIZWlnaHQgb2YgdGhlIHNwcml0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRYIE9mZnNldCBYIG9mIGRyYXdpbmcgdGhlIHBpY3R1cmUgaW50byB0aGUgY2FudmFzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFkgT2Zmc2V0IFkgb2YgZHJhd2luZyB0aGUgcGljdHVyZSBpbnRvIHRoZSBjYW52YXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgICBBbmltYXRpb24gZnJhbWUgc3RhcnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kICAgICBBbmltYXRpb24gZnJhbWUgZW5kXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb29wICAgUmVwZWF0IGFuaW1hdGlvblxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yIChpZCwgZW5naW5lLCBpbWFnZSwgdHgsIHR5LCB3aWR0aCwgaGVpZ2h0LCBvZmZzZXRYLCBvZmZzZXRZLCBzdGFydCwgZW5kLCBsb29wKSB7XG4gICAgICAgIHN1cGVyKGlkLCBlbmdpbmUsIHR4LCB0eSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KGltYWdlKTtcbiAgICAgICAgdGhpcy5hbmltTG9vcCA9IGxvb3A7XG4gICAgICAgIHRoaXMuYW5pbVN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgIHRoaXMuYW5pbUVuZCA9IGVuZDtcbiAgICAgICAgdGhpcy5hbmltQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5O1xuICAgICAgICB0aGlzLmFuaW1EZWxheUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5hbmltUm93ID0gMDtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WDtcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gb2Zmc2V0WTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzcHJpdGUgYW5pbWF0aW9uIGZyYW1lc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBTdGFydCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCAgIEVuZCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb29wICBJZiB0cnVlLCBhbmltYXRpb24gd2lsbCBsb29wXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAgIFJvdyBvZiB0aGUgZnJhbWVzIGluIHRoZSBzcHJpdGUgaW1hZ2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgRGVsYXkgYmV0d2VlbiBlYWNoIGZyYW1lXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvbmNlICBTZXRzIGFsbCB0aGUgbmV3IHZhbHVlcyBvbmx5IG9uZSB0aW1lLlxuICAgICAqL1xuICAgIHNldEFuaW0oc3RhcnQsIGVuZCwgbG9vcCwgcm93LCBkZWxheSwgb25jZSkge1xuICAgICAgICBvbmNlID0gKHR5cGVvZiBvbmNlID09PSAndW5kZWZpbmVkJykgPyBmYWxzZSA6IG9uY2U7XG4gICAgICAgIGRlbGF5ICA9ICh0eXBlb2YgZGVsYXkgPT09ICd1bmRlZmluZWQnKSA/IENvbnN0cy5BbmltRGVmYXVsdERlbGF5IDogZGVsYXk7XG4gICAgICAgIHJvdyA9ICh0eXBlb2Ygcm93ID09PSAndW5kZWZpbmVkJykgPyB0aGlzLmFuaW1Sb3cgOiByb3c7XG4gICAgICAgIGlmICghb25jZSkge1xuICAgICAgICAgICAgdGhpcy5hbmltU3RhcnQgPSBzdGFydDtcbiAgICAgICAgICAgIHRoaXMuYW5pbUVuZCA9IGVuZDtcbiAgICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gc3RhcnQ7XG4gICAgICAgICAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcbiAgICAgICAgICAgIHRoaXMuYW5pbURlbGF5ID0gZGVsYXk7XG4gICAgICAgICAgICB0aGlzLmFuaW1Sb3cgPSByb3c7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbmltU3RhcnQgIT09IHN0YXJ0IHx8IHRoaXMuYW5pbUVuZCAhPT0gZW5kIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltTG9vcCAhPT0gbG9vcCB8fCB0aGlzLmFuaW1Sb3cgIT09IHJvdylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUVuZCA9IGVuZDtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHN0YXJ0O1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbUxvb3AgPSBsb29wO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbURlbGF5ID0gZGVsYXk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltUm93ID0gcm93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERyYXdzIHRoZSBmcmFtZSBvZiB0aGUgc3ByaXRlIGluIHRoZSBjYW52YXNcbiAgICAgKi9cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLmltYWdlLFxuICAgICAgICAgICAgdGhpcy5hbmltQ291bnQgKiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgdGhpcy5hbmltUm93ICogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIHRoaXMueCArIHRoaXMub2Zmc2V0WCxcbiAgICAgICAgICAgIHRoaXMueSArIHRoaXMub2Zmc2V0WSxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHRoaXMuYW5pbURlbGF5Q291bnQrKyA+IHRoaXMuYW5pbURlbGF5KSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1Db3VudCArPSAxO1xuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbUNvdW50ID4gdGhpcy5hbmltRW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbUxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltQ291bnQgPSB0aGlzLmFuaW1TdGFydDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHRoaXMuYW5pbUVuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFuaW1EZWxheUNvdW50ID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdGcm9zdCgpIHtcbiAgICAgICAgY29uc3QgbGVmdFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueHRpbGUgLSAxLCB0aGlzLnl0aWxlKTtcbiAgICAgICAgaWYgKGxlZnRTcHJpdGUgJiYgbGVmdFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJiBsZWZ0U3ByaXRlLmZyb3plbi5yaWdodCkge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoJ2Zyb3N0JyksXG4gICAgICAgICAgICAgICAgKHRoaXMueHRpbGUgKiB0aGlzLndpZHRoKSAtIDcsXG4gICAgICAgICAgICAgICAgdGhpcy55dGlsZSAqIHRoaXMuaGVpZ2h0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJpZ2h0U3ByaXRlID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54dGlsZSArIDEsIHRoaXMueXRpbGUpO1xuICAgICAgICBpZiAocmlnaHRTcHJpdGUgJiYgcmlnaHRTcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiYgcmlnaHRTcHJpdGUuZnJvemVuLmxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLFxuICAgICAgICAgICAgICAgICh0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGgpICogdGhpcy53aWR0aCAtIDcsXG4gICAgICAgICAgICAgICAgdGhpcy55dGlsZSAqIHRoaXMuaGVpZ2h0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IENvbnN0cyA9IE9iamVjdC5mcmVlemUoe1xuICAgIFRpbGVXaWR0aDogMzIsXG4gICAgTW92ZVN0YW5kOiAwLFxuICAgIE1vdmVMZWZ0OiAxLFxuICAgIE1vdmVSaWdodDogMixcbiAgICBNb3ZlRG93bjogMyxcbiAgICBNb3ZlVXA6IDQsXG4gICAgTW92ZVR1cm46IDUsXG4gICAgTW92ZUljZU1ha2U6IDYsXG4gICAgTW92ZUljZVJlbW92ZTogNyxcbiAgICBNb3ZlSWNlTW92aW5nOiA4LFxuICAgIE1vdmVJY2VDaGVjazogOSxcbiAgICBNb3ZlUmlwOiAxMCxcbiAgICBNb3ZlUHVzaDogOCxcbiAgICBNb3ZlSWNlRmFpbDogMTEsXG4gICAgTW92ZUxldmVsRXhpdDogMTIsXG4gICAgTW92ZUxldmVsRW50ZXI6IDEzLFxuICAgIERpckxlZnQ6IC0xLFxuICAgIERpclJpZ2h0OiAxLFxuICAgIEFuaW1EZWZhdWx0RGVsYXk6IDIsXG4gICAgQW5pbUZyYW1lQ291bnQ6IDE2LFxuICAgIEFuaW1MZWZ0Um93OiAxLFxuICAgIEFuaW1SaWdodFJvdzogMCxcbiAgICBBbmltUnVuU3RhcnQ6IDAsXG4gICAgQW5pbVJ1bkVuZDogMyxcbiAgICBBbmltU3RhbmQ6IDQsXG4gICAgQW5pbVR1cm5TdGFydDogNCxcbiAgICBBbmltVHVybkVuZDogNyxcbiAgICBBbmltRmFsbFN0YXJ0OiA4LFxuICAgIEFuaW1GYWxsRW5kOiA5LFxuICAgIEFuaW1CaWdGYWxsU3RhcnQ6IDEwLFxuICAgIEFuaW1CaWdGYWxsRW5kOiAxMSxcbiAgICBBbmltUHVzaFN0YXJ0OiAxMixcbiAgICBBbmltUHVzaEVuZDogMTMsXG4gICAgQW5pbUp1bXBTdGFydDogMTQsXG4gICAgQW5pbUp1bXBFbmQ6IDE1LFxuICAgIEFuaW1TdGFuZFN0YXJ0OiAxNixcbiAgICBBbmltU3RhbmRFbmQ6IDE3LFxuICAgIEFuaW1JY2VTdGFydDogMTgsXG4gICAgQW5pbUljZUVuZDogMTksXG4gICAgQW5pbUNyb3VjaFN0YXJ0OiAyMCxcbiAgICBBbmltQ3JvdWNoRW5kOiAyMixcbiAgICBBbmltUmlwU3RhcnQ6IDIzLFxuICAgIEFuaW1SaXBFbmQ6IDI0LFxuICAgIEFuaW1TbGVlcFN0YXJ0OiAyNSxcbiAgICBBbmltU2xlZXBFbmQ6IDI2LFxuICAgIFRpbGVCYWNrZ3JvdW5kOiAwLFxuICAgIFRpbGVCb3RoU2lkZXM6IDMyLFxuICAgIFRpbGVMZWZ0U2lkZTogNjQsXG4gICAgVGlsZU1pZGRsZTogOTYsXG4gICAgVGlsZVJpZ2h0U2lkZTogMTI4LFxuICAgIE9iamVjdE91dDogLTEsXG4gICAgT2JqZWN0QmFja2dyb3VuZDogMCxcbiAgICBPYmplY3RXYWxsOiAxLFxuICAgIE9iamVjdEljZTogMyxcbiAgICBPYmplY3RNZXRhbDogNCxcbiAgICBPYmplY3RKYXI6IDUsXG4gICAgT2JqZWN0RmlyZTogNixcbiAgICBPYmplY3RQbGF5ZXI6IDcsXG4gICAgR2FtZVN0YXRlUGxheTogMSxcbiAgICBHYW1lU3RhdGVJbnRybzogMlxufSk7XG4iLCJpbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRnJvc3QgfSBmcm9tICcuL3N0cnVjdCc7XG5pbXBvcnQgeyBJY2UgfSBmcm9tICcuL2ljZSc7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4va2V5Ym9hcmQnO1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSAnLi9zb3VuZCc7XG5pbXBvcnQgeyBTcGFya3MgfSBmcm9tICcuL3NmeCc7XG4vKipcbiAqIEVuZ2luZSBMb29wXG4gKi9cbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzLCByZXNvdXJjZXMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3dpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmNoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLnJlc291cmNlcyA9IHJlc291cmNlcztcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLnNwcml0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zZnhzID0gW107XG4gICAgICAgIHRoaXMucGxheWVyID0ge307XG4gICAgICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgICAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKCk7XG4gICAgICAgIHRoaXMuc291bmQgPSBuZXcgU291bmQocmVzb3VyY2VzKTtcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBTY2VuZSh0aGlzKTtcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IGxldmVsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xldmVsJyk7XG4gICAgICAgIGlmIChsZXZlbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IHBhcnNlSW50KGxldmVsLCAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2VuZS5sb2FkKHRoaXMubGV2ZWwpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN3aWR0aCwgdGhpcy5jaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5tYXAuZHJhdygpO1xuICAgICAgICAvLyByZXZlcnNlIGxvb3AsIHBsYXllciBkcmF3cyBsYXN0XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnNwcml0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlc1tpXS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNmeHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuc2Z4c1tpXS5kcmF3KCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJztcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVdpZHRoID0gMTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmN3aWR0aDsgeCArPSAzMikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5jaGVpZ2h0OyB5ICs9IDMyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVJlY3QoeCwgeSwgeCArIDMyLCB5ICsgMzIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlzaW9uKCkge1xuICAgICAgICBjb25zdCBmaXJlcyA9IHRoaXMuc3ByaXRlcy5maWx0ZXIoc3ByaXRlID0+IHNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEZpcmUpO1xuICAgICAgICBpZiAoIWZpcmVzLmxlbmd0aCAmJiAhdGhpcy5lZGl0b3IgJiYgdGhpcy5wbGF5ZXIuc3RhdGUgIT09IENvbnN0cy5Nb3ZlTGV2ZWxFeGl0KSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5vdXRybygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dExldmVsKCkge1xuICAgICAgICB0aGlzLmxldmVsKys7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsZXZlbCcsIHRoaXMubGV2ZWwpO1xuICAgICAgICB0aGlzLnNjZW5lLmxvYWQodGhpcy5sZXZlbCk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlc1tpXS5lbmdpbmVNb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNmeHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuc2Z4c1tpXS5lbmdpbmVNb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNwcml0ZXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0gJiYgdGhpcy5zcHJpdGVzW2ldLmlkICE9PSBDb25zdHMuT2JqZWN0UGxheWVyICYmIHRoaXMuc3ByaXRlc1tpXS5tb3ZpbmcpIHtcbiAgICAgICAgICAgICAgICBzcHJpdGVzTW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNwcml0ZXNNb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGlmIG5vIHNwcml0ZXMgaGF2ZSBtb3ZlZCBmb3IgMiB0dXJuc1xuICAgICAgICBpZiAoIXNwcml0ZXNNb3ZpbmcgJiYgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5pbnB1dCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sbGlzaW9uKCk7XG4gICAgfVxuXG4gICAgaW5wdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmtleWJvYXJkLmRvd24gfHwgdGhpcy5rZXlib2FyZC5hY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleWJvYXJkLmxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmxlZnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlib2FyZC5yaWdodCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucmlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlib2FyZC5lbnRlcikge1xuICAgICAgICAgICAgdGhpcy5zb3VuZC5zdG9wKCdkYW5nZXInKTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcbiAgICAgICAgICAgIHRoaXMua2V5Ym9hcmQuZW50ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGljZUF0KHR4LCB0eSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pc1Nwcml0ZUF0KHR4LCB0eSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGRJY2VCbG9jayh0eCwgdHkpIHtcbiAgICAgICAgbGV0IGZvdW5kSWNlQmxvY2tzID0gWyBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJiB0aGlzLnNwcml0ZXNbaV0ueXRpbGUgPT09IHR5KSB7XG4gICAgICAgICAgICAgICAgbGV0IGljZSA9IHRoaXMuc3ByaXRlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoaWNlLnh0aWxlIC0gMSA9PT0gdHggfHwgaWNlLnh0aWxlICsgaWNlLmxlbmd0aCA9PT0gdHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRJY2VCbG9ja3MucHVzaChpY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZm91bmRJY2VCbG9ja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZXMucHVzaChuZXcgSWNlKHRoaXMsIHR4LCB0eSwgMSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGZvdW5kSWNlQmxvY2tzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgZm91bmRJY2VCbG9ja3NbMF0uYWRkQmxvY2sodHgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGZvdW5kSWNlQmxvY2tzWzBdLnh0aWxlIDw9IGZvdW5kSWNlQmxvY2tzWzFdLnh0aWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5qb2luSWNlQmxvY2tzKGZvdW5kSWNlQmxvY2tzWzBdLCBmb3VuZEljZUJsb2Nrc1sxXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuam9pbkljZUJsb2Nrcyhmb3VuZEljZUJsb2Nrc1sxXSwgZm91bmRJY2VCbG9ja3NbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgam9pbkljZUJsb2NrcyhpY2VibG9ja0EsaWNlYmxvY2tCKSB7XG4gICAgICAgIGxldCB0eCA9IGljZWJsb2NrQS54dGlsZTtcbiAgICAgICAgbGV0IHR5ID0gaWNlYmxvY2tBLnl0aWxlO1xuICAgICAgICBsZXQgbGVuZ3RoID0gaWNlYmxvY2tBLmxlbmd0aCArIGljZWJsb2NrQi5sZW5ndGggKyAxO1xuICAgICAgICB0aGlzLmFkZFNwcml0ZShcbiAgICAgICAgICAgIG5ldyBJY2UodGhpcywgdHgsIHR5LCBsZW5ndGgsIG5ldyBGcm9zdChpY2VibG9ja0EuZnJvemVuLmxlZnQsIGljZWJsb2NrQi5mcm96ZW4ucmlnaHQpKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlbW92ZVNwcml0ZShpY2VibG9ja0EpO1xuICAgICAgICB0aGlzLnJlbW92ZVNwcml0ZShpY2VibG9ja0IpO1xuICAgIH1cblxuICAgIHJlbW92ZUljZUJsb2NrKHR4LCB0eSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlc1tpXS55dGlsZSA9PT0gdHkgJiZcbiAgICAgICAgICAgICAgICB0eCA+PSB0aGlzLnNwcml0ZXNbaV0ueHRpbGUgJiZcbiAgICAgICAgICAgICAgICB0eCA8IHRoaXMuc3ByaXRlc1tpXS54dGlsZSArIHRoaXMuc3ByaXRlc1tpXS5sZW5ndGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5yZW1vdmVCbG9jayh0eCkgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZXMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUZpcmUodHgsIHR5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHRoaXMuc3ByaXRlc1tpXS55dGlsZSA9PT0gdHkpICYmXG4gICAgICAgICAgICAgICAgKHR4ID09PSB0aGlzLnNwcml0ZXNbaV0ueHRpbGUpICYmXG4gICAgICAgICAgICAgICAgKHRoaXMuc3ByaXRlc1tpXS5pZCA9PT0gQ29uc3RzLk9iamVjdEZpcmUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZXMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkU3ByaXRlKHNwcml0ZSkge1xuICAgICAgICB0aGlzLnNwcml0ZXMucHVzaChzcHJpdGUpO1xuICAgIH1cblxuICAgIHJlbW92ZVNwcml0ZShzcHJpdGUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0gPT09IHNwcml0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlcy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkU3BhcmtzKHh0aWxlLCB5dGlsZSwgY29sb3IsIHF1YW50aXR5LCBpbnRlbnNpdHkpIHtcbiAgICAgICAgdGhpcy5zZnhzLnB1c2gobmV3IFNwYXJrcyh0aGlzLCB4dGlsZSwgeXRpbGUsIGNvbG9yLCBxdWFudGl0eSwgaW50ZW5zaXR5KSk7XG4gICAgfVxuXG4gICAgc3ByaXRlVHlwZUF0KHR4LCB0eSwgZXhjbHVkZUlkKSB7XG4gICAgICAgIGV4Y2x1ZGVJZCA9ICh0eXBlb2YgZXhjbHVkZUlkID09PSAndW5kZWZpbmVkJykgPyBDb25zdHMuT2JqZWN0T3V0IDogZXhjbHVkZUlkO1xuICAgICAgICBpZiAodHggPCAwIHx8IHR5IDwgMCB8fCB0eCA+IHRoaXMubWFwLndpZHRoIHx8IHR5ID4gdGhpcy5tYXAuaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gQ29uc3RzLk9iamVjdE91dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXAubWFwW3R5XVt0eF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5tYXBbdHldW3R4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pc1Nwcml0ZUF0KHR4LCB0eSkgJiYgdGhpcy5zcHJpdGVzW2ldLmlkICE9PSBleGNsdWRlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tpXS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIENvbnN0cy5PYmplY3RCYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIHNwcml0ZUF0KHR4LCB0eSkge1xuICAgICAgICBpZiAoIXRoaXMubWFwLm1hcFt0eV1bdHhdKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaXNTcHJpdGVBdCh0eCwgdHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xuaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGVzJztcblxuZXhwb3J0IGNsYXNzIEZpcmUgZXh0ZW5kcyBBbmltU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5KSB7XG4gICAgICAgIHN1cGVyKENvbnN0cy5PYmplY3RGaXJlLCBlbmdpbmUsICdpbWdfZmlyZScsXG4gICAgICAgICAgICB0eCwgdHksIENvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgsIDAsIDAsIDAsIDMsIHRydWUpO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9ucygpO1xuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcbiAgICAgICAgICAgICAgICB0aGlzLmRvRG93bigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlzaW9ucygpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCBDb25zdHMuT2JqZWN0RmlyZSkgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ZpcmUtb2ZmJyk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5yZW1vdmVGaXJlKHRoaXMueHRpbGUsIHRoaXMueXRpbGUpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlSWNlQmxvY2sodGhpcy54dGlsZSwgdGhpcy55dGlsZSk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzI1NSwgMTI2LCAxOTgnLCAxNSwgMC41KTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMTIsIDI1NScsIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUsIHRoaXMueXRpbGUsIENvbnN0cy5PYmplY3RGaXJlKSA9PT0gQ29uc3RzLk9iamVjdE1ldGFsKSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlRmlyZSh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMjU1LCAyMjIsIDEyNycsIDE1LCAwLjUpO1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUsICc0MSwgNDIsIDkwJywgMTApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBncmF2aXR5KCkge1xuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICYmIHRoaXMuY29vcm5lcnMuZCAhPT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVEb3duLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBkb0Rvd24oKSB7XG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMueSArPSA0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBGaXJlIH0gZnJvbSAnLi9maXJlJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IHsgSmFyIH0gZnJvbSAnLi9qYXInO1xuaW1wb3J0IHsgTWV0YWwgfSBmcm9tICcuL21ldGFsJztcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4vcmVzb3VyY2VzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpO1xuICAgIGxvYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGxvYWRlci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgUHJlbG9hZEdhbWUoKTtcbiAgICAgICAgd2luZG93LmZpcmVuaWNlID0gdHJ1ZTtcbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBQcmVsb2FkR2FtZSgpIHtcbiAgICBjb25zdCByZXNvdXJjZXMgPSBuZXcgUmVzb3VyY2VzKCk7XG4gICAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAndGlsZW1hcCcsICdpbWFnZXMvdGlsZW1hcC5wbmcnKTtcbiAgICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfaWNlJywgJ2ltYWdlcy9pY2UucG5nJyk7XG4gICAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX2phcicsICdpbWFnZXMvamFyLnBuZycpO1xuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19maXJlJywgJ2ltYWdlcy9maXJlLnBuZycpO1xuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19kb25hJywgJ2ltYWdlcy9kb25hLnBuZycpO1xuICAgIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19pbnRybycsICdpbWFnZXMvaW50cm8ucG5nJyk7XG4gICAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX21ldGFsJywgJ2ltYWdlcy9tZXRhbC5wbmcnKTtcbiAgICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdmcm9zdCcsICdpbWFnZXMvZnJvemVuLnBuZycpO1xuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1pY2UtcHVzaCcsICdzb3VuZHMvc2Z4LWljZS1wdXNoLm1wMycpO1xuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1maXJlLW9mZicsICdzb3VuZHMvc2Z4LWZpcmUtb2ZmLm1wMycpO1xuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1mYWxsaW5nJywgJ3NvdW5kcy9zZngtZmFsbGluZy5tcDMnKTtcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtbmV3LWljZScsICdzb3VuZHMvc2Z4LW5ldy1pY2UubXAzJyk7XG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWNsaW1iJywgJ3NvdW5kcy9zZngtY2xpbWIubXAzJyk7XG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWljZS1jb2xsaXNpb24nLCAnc291bmRzL3NmeC1pY2UtY29sbGlzaW9uLm1wMycpO1xuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1zdGFnZS1lbnRlcicsICdzb3VuZHMvc2Z4LXN0YWdlLWVudGVyLm1wMycpO1xuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1kYW5nZXInLCAnc291bmRzL3NmeC1kYW5nZXIubXAzJyk7XG4gICAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWljZS1yZW1vdmUnLCAnc291bmRzL3NmeC1pY2UtcmVtb3ZlLm1wMycpO1xuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1zdGF0ZS1sZWF2ZScsICdzb3VuZHMvc2Z4LXN0YXRlLWxlYXZlLm1wMycpO1xuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1kaXNhYmxlZCcsICdzb3VuZHMvc2Z4LWRpc2FibGVkLm1wMycpO1xuICAgIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1mYWxsJywgJ3NvdW5kcy9zZngtZmFsbC5tcDMnKTtcbiAgICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtbXVzaWMtc3BhcmtzJywgJ211c2ljL3NwYXJrcy5tcDMnKTtcblxuICAgIHJlc291cmNlcy5yZWFkeSgoKSA9PiB7XG4gICAgICAgIFN0YXJ0R2FtZShyZXNvdXJjZXMpO1xuICAgICAgICBDaGVja0VkaXRvcigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBTdGFydEdhbWUocmVzb3VyY2VzKSB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgcmVzb3VyY2VzKTtcbiAgICB3aW5kb3cuZ2FtZSA9IGdhbWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsLXNlbGVjdG9yJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSAnLTEnKSB7XG4gICAgICAgICAgICBnYW1lLmVuZ2luZS5sZXZlbCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICAgICAgICBnYW1lLmVuZ2luZS5zY2VuZS5sb2FkKGdhbWUuZW5naW5lLmxldmVsKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBDaGVja0VkaXRvcigpIHtcbiAgICBpZiAod2luZG93LkZJUkVOSUNFX0VESVRPUl9NT0RFKSB7XG4gICAgICAgIGdhbWUuZW5naW5lLnNvdW5kLm11c2ljT24gPSBmYWxzZTtcblx0XHRnYW1lLmVuZ2luZS5zb3VuZC5zb3VuZE9uID0gZmFsc2U7XG4gICAgICAgIGdhbWUuc3RhdGUgPSBDb25zdHMuR2FtZVN0YXRlUGxheTtcbiAgICAgICAgZ2FtZS5lbmdpbmUuZWRpdG9yID0gdHJ1ZTtcbiAgICAgICAgZ2FtZS5lbmdpbmUua2V5Ym9hcmQuaW50cm8gPSBmYWxzZTtcbiAgICAgICAgZ2FtZS5lbmdpbmUuc291bmQubXVzaWMucGF1c2UoKTtcblxuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeHRpbGUgPSBNYXRoLmZsb29yKGUub2Zmc2V0WCAvIDMyKTtcbiAgICAgICAgICAgIGNvbnN0IHl0aWxlID0gTWF0aC5mbG9vcihlLm9mZnNldFkgLyAzMik7XG4gICAgICAgICAgICBpZiAodG9vbCA8IDIpIHtcbiAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5tYXAubWFwW3l0aWxlXVt4dGlsZV0gPSB0b29sO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRvb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0UGxheWVyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUucGxheWVyLnggPSB4dGlsZSAqIDMyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUucGxheWVyLnkgPSB5dGlsZSAqIDMyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdEljZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuZW5naW5lLmFkZEljZUJsb2NrKHh0aWxlLCB5dGlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0TWV0YWw6XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRTcHJpdGUobmV3IE1ldGFsKGdhbWUuZW5naW5lLCB4dGlsZSwgeXRpbGUsIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RGaXJlOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBGaXJlKGdhbWUuZW5naW5lLCB4dGlsZSwgeXRpbGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RKYXI6XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRTcHJpdGUobmV3IEphcihnYW1lLmVuZ2luZSwgeHRpbGUsIHl0aWxlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS1zZWxlY3RvcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICBnYW1lLmVuZ2luZS5tYXAudGhlbWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgICAgICAgZS50YXJnZXQuYmx1cigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwtc2VsZWN0b3InKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSAnLTEnKSB7XG4gICAgICAgICAgICAgICAgZ2FtZS5lbmdpbmUubGV2ZWwgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgIGdhbWUuZW5naW5lLnNjZW5lLmxvYWQoZ2FtZS5lbmdpbmUubGV2ZWwpO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zYXZlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHh0LWxldmVsJykudmFsdWUgPSBKU09OLnN0cmluZ2lmeShnYW1lLmVuZ2luZS5zY2VuZS5zYXZlKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tICcuL2VuZ2luZSc7XG5pbXBvcnQgeyBsZXZlbHMgfSBmcm9tICcuL2xldmVscyc7XG5cbi8qKlxuICogR2FtZSBMb29wXG4gKi9cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IGNhbnZhdnMgICBUaGUgY2FudmFzIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0geyp9IHJlc291cmNlcyAgR2FtZSByZXNvdXJjZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHJlc291cmNlcykge1xuICAgICAgICB0aGlzLmVuZ2luZSA9IG5ldyBFbmdpbmUoY2FudmFzLCByZXNvdXJjZXMpO1xuICAgICAgICB0aGlzLmxldmVscyA9IGxldmVscztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVQbGF5O1xuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5zb3VuZHJhY2soKTtcbiAgICAgICAgdGhpcy5nYW1lbG9vcCA9IHRoaXMuZ2FtZWxvb3BfLmJpbmQodGhpcyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgICAgICB0aGlzLmdhbWVsb29wKCk7XG4gICAgfVxuXG4gICAgZ2FtZWxvb3BfKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLkdhbWVTdGF0ZUludHJvOlxuICAgICAgICAgICAgICAgIHRoaXMuZG9JbnRybygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDb25zdHMuR2FtZVN0YXRlUGxheTpcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5kcmF3KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUubW92ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lbG9vcCk7XG4gICAgfVxuXG4gICAgY3JlYXRlSW50cm8oKSB7XG4gICAgICAgIHRoaXMuaW50cm8gPSBuZXcgQW5pbVNwcml0ZShudWxsLCB0aGlzLmVuZ2luZSwgJ2ltZ19pbnRybycsIDAsIDAsIDU0NCwgNDE2LCAwLCAwLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgQW5pbVNwcml0ZShudWxsLCB0aGlzLmVuZ2luZSwgJ2ltZ19zdGFydCcsIDcsIDExLCAxNDAsIDI2LCAtMTAsIDAsIDAsIDEsIHRydWUpO1xuICAgICAgICB0aGlzLnN0YXJ0LmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5ICogMjA7XG4gICAgfVxuXG4gICAgZG9JbnRybygpIHtcbiAgICAgICAgdGhpcy5pbnRyby5kcmF3KCk7XG4gICAgICAgIHRoaXMuc3RhcnQuZHJhdygpO1xuXG4gICAgICAgIGlmICh0aGlzLmVuZ2luZS5rZXlib2FyZC5lbnRlcikge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUua2V5Ym9hcmQuZW50ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBDb25zdHMuR2FtZVN0YXRlUGxheTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnNvdW5kcmFjaygpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xuaW1wb3J0IHsgRnJvc3QgfSBmcm9tICcuL3N0cnVjdCc7XG5cbmV4cG9ydCBjbGFzcyBJY2UgZXh0ZW5kcyBBbmltU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5LCBsZW5ndGgsIGZyb3plbikge1xuICAgICAgICBzdXBlcihDb25zdHMuT2JqZWN0SWNlLCBlbmdpbmUsICdpbWdfaWNlJyxcbiAgICAgICAgICAgIHR4LCB0eSwgQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCwgMCwgMCwgMCwgMSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMueHRpbGUgPSB0eDtcbiAgICAgICAgdGhpcy55dGlsZSA9IHR5O1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5hbmltRW5kID0gMTtcbiAgICAgICAgdGhpcy5hbmltRGVsYXkgPSA5O1xuICAgICAgICB0aGlzLmFuaW1Sb3cgPSAwO1xuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAwO1xuICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBmcm96ZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmZyb3plbiA9IGZyb3plbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZnJvemVuID0gbmV3IEZyb3N0KGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvb3JuZXJzKCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRnJlZXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRCbG9jayh0eCkge1xuICAgICAgICBjb25zdCBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID0gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHR4IC0gMSwgdGhpcy55dGlsZSk7XG4gICAgICAgIGNvbnN0IHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID0gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUgKyB0aGlzLmxlbmd0aCArIDEsIHRoaXMueXRpbGUpO1xuICAgICAgICBpZiAodHggPiB0aGlzLnh0aWxlKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUaWxlKHR4ICsgMSwgdGhpcy55dGlsZSkgPT09IENvbnN0cy5PYmplY3RXYWxsIHx8XG4gICAgICAgICAgICAgICAgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPT09IENvbnN0cy5PYmplY3RNZXRhbCB8fFxuICAgICAgICAgICAgICAgIHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID09PSBDb25zdHMuT2JqZWN0SmFyXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyb3plbi5yaWdodCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHggPCB0aGlzLnh0aWxlKSB7XG4gICAgICAgICAgICB0aGlzLnh0aWxlID0gdHg7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRUaWxlKHR4IC0gMSwgdGhpcy55dGlsZSkgPT09IENvbnN0cy5PYmplY3RXYWxsIHx8XG4gICAgICAgICAgICAgICAgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9PT0gQ29uc3RzLk9iamVjdE1ldGFsIHx8XG4gICAgICAgICAgICAgICAgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9PT0gQ29uc3RzLk9iamVjdEphclxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcm96ZW4ubGVmdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy54ID0gdGhpcy54dGlsZSAqIENvbnN0cy5UaWxlV2lkdGg7XG4gICAgICAgIHRoaXMubGVuZ3RoICs9IDE7XG4gICAgfVxuXG4gICAgaXNTcHJpdGVBdCh0eCwgdHkpIHtcbiAgICAgICAgaWYgKHRoaXMueXRpbGUgPT09IHR5KSB7XG4gICAgICAgICAgICBpZiAodHggPj0gdGhpcy54dGlsZSAmJiB0eCA8ICh0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmVtb3ZlQmxvY2sodHgpIHtcbiAgICAgICAgaWYgKHR4ID09PSB0aGlzLnh0aWxlKSB7XG4gICAgICAgICAgICB0aGlzLnh0aWxlICs9IDE7XG4gICAgICAgICAgICB0aGlzLnggKz0gQ29uc3RzLlRpbGVXaWR0aDtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoIC09IDE7XG4gICAgICAgICAgICB0aGlzLmNoZWNrVW5mcmVlemVMZWZ0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHggPT09IHRoaXMueHRpbGUgKyB0aGlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoIC09IDE7XG4gICAgICAgICAgICB0aGlzLmNoZWNrVW5mcmVlemVSaWdodCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKFxuICAgICAgICAgICAgICAgIG5ldyBJY2UodGhpcy5lbmdpbmUsIHR4ICsgMSwgdGhpcy55dGlsZSwgdGhpcy54dGlsZSArIHRoaXMubGVuZ3RoIC0gdHggLSAxLCBuZXcgRnJvc3QoZmFsc2UsIHRoaXMuZnJvemVuLnJpZ2h0KSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCA9IHR4IC0gdGhpcy54dGlsZTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZVJpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGNhbkdsaWRlKGRpcikge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggIT09IDEgfHwgdGhpcy5mcm96ZW4ubGVmdCB8fCB0aGlzLmZyb3plbi5yaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXIgPT09IENvbnN0cy5EaXJMZWZ0ICAmJiBUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5sKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXIgPT09IENvbnN0cy5EaXJSaWdodCAmJiBUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5yKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlzRnJvemVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mcm96ZW4ubGVmdCB8fCB0aGlzLmZyb3plbi5yaWdodDtcbiAgICB9XG5cbiAgICBncmF2aXR5KCkge1xuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICYmICF0aGlzLmlzRnJvemVuKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mYWxsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29sbGlzaW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuR2xpZGUodGhpcy5kaXJyZWN0aW9uKSkge1xuICAgICAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gMDtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0aWxlX2Rvd24gPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlK2ksIHRoaXMueXRpbGUrMSk7XG4gICAgICAgICAgICBpZiAodGlsZV9kb3duICYmIHRpbGVfZG93biAhPT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3JuZXJzLmQgPSB0aWxlX2Rvd247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvb3JuZXJzLnIgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlICsgdGhpcy5sZW5ndGgsIHRoaXMueXRpbGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRnJvemVuKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZUxlZnQoKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZVJpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlTW92aW5nOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2xpZGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VDaGVjazpcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2goKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxuICAgICAgICAgICAgICAgIHRoaXMuZG9Eb3duKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIGlmICh0aGlzLmFuaW1EZWxheUNvdW50KysgPiB0aGlzLmFuaW1EZWxheSkge1xuICAgICAgICAgICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLmFuaW1Sb3cgPSB0aGlzLmFuaW1Sb3cgPT09IDAgPyAxIDogMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlLCAwLFxuICAgICAgICAgICAgICAgIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLFxuICAgICAgICAgICAgICAgIENvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSxcbiAgICAgICAgICAgICAgICAzICogQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgICAgICB0aGlzLnggKyBDb25zdHMuVGlsZVdpZHRoLCB0aGlzLnksXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSxcbiAgICAgICAgICAgICAgICBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRoaXMueCwgdGhpcy55LFxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsXG4gICAgICAgICAgICAgICAgMyAqIENvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgdGhpcy54ICsgQ29uc3RzLlRpbGVXaWR0aCAqICh0aGlzLmxlbmd0aCAtIDEpLCB0aGlzLnksXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgIGkgPCB0aGlzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLFxuICAgICAgICAgICAgICAgICAgICAyICogQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArIChDb25zdHMuVGlsZVdpZHRoICogaSksIHRoaXMueSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZyb3plbi5sZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcbiAgICAgICAgICAgICAgICAodGhpcy54dGlsZSAqIHRoaXMud2lkdGgpIC0gNyxcbiAgICAgICAgICAgICAgICB0aGlzLnl0aWxlICogdGhpcy5oZWlnaHRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZnJvemVuLnJpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcbiAgICAgICAgICAgICAgICAodGhpcy54dGlsZSArIHRoaXMubGVuZ3RoKSAqIHRoaXMud2lkdGggLSA3LFxuICAgICAgICAgICAgICAgIHRoaXMueXRpbGUgKiB0aGlzLmhlaWdodFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBnbGlkZSgpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDQ7XG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy54ICs9IDQgKiB0aGlzLmRpcnJlY3Rpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnB1c2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvRG93bigpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDQ7XG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy55ICs9IDQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ3Jhdml0eSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXNoKGRpcikge1xuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAodHlwZW9mIGRpciA9PT0gJ3VuZGVmaW5lZCcpID8gdGhpcy5kaXJyZWN0aW9uIDogZGlyO1xuICAgICAgICBpZiAoIXRoaXMuY29sbGlzaW9uKCkgJiYgIXRoaXMuZ3Jhdml0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTW92aW5nLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tGcmVlemUoKSB7XG4gICAgICAgIGlmIChUaWxlLmlzRnJlZXphYmxlKHRoaXMuY29vcm5lcnMubCkpIHtcbiAgICAgICAgICAgIHRoaXMuZnJvemVuLmxlZnQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mcm96ZW4ubGVmdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChUaWxlLmlzRnJlZXphYmxlKHRoaXMuY29vcm5lcnMucikpIHtcbiAgICAgICAgICAgIHRoaXMuZnJvemVuLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZnJvemVuLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1VuZnJlZXplTGVmdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJvemVuLmxlZnQgJiYgIVRpbGUuaXNGcmVlemFibGUodGhpcy5jb29ybmVycy5sKSkge1xuICAgICAgICAgICAgdGhpcy5mcm96ZW4ubGVmdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tVbmZyZWV6ZVJpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5mcm96ZW4ucmlnaHQgJiYgIVRpbGUuaXNGcmVlemFibGUodGhpcy5jb29ybmVycy5yKSkge1xuICAgICAgICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XG5pbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgSmFyIGV4dGVuZHMgQW5pbVNwcml0ZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSkge1xuICAgICAgICBzdXBlcihDb25zdHMuT2JqZWN0SmFyLCBlbmdpbmUsICdpbWdfamFyJyxcbiAgICAgICAgICAgIHR4LCB0eSwgQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCwgMCwgMCwgMCwgMywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYW5pbURlbGF5ID0gQ29uc3RzLkFuaW1EZWZhdWx0RGVsYXkgKiAyO1xuICAgICAgICB0aGlzLm9uRmlyZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFuaW1Sb3cgPSAwO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9ucygpO1xuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcbiAgICAgICAgICAgICAgICB0aGlzLmRvRG93bigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sbGlzaW9ucygpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9uRmlyZSAmJiB0aGlzLmNvb3JuZXJzLnUgPT09IENvbnN0cy5PYmplY3RGaXJlKSB7XG4gICAgICAgICAgICB0aGlzLnR1cm5PbkZpcmUoKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUZpcmUodGhpcy54dGlsZSwgdGhpcy55dGlsZSAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uRmlyZSAmJiB0aGlzLmNvb3JuZXJzLnUgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcbiAgICAgICAgICAgIHRoaXMubWVsdEljZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ3Jhdml0eSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvb3JuZXJzLmQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVEb3duLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBkb0Rvd24oKSB7XG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMueSArPSA0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0dXJuT25GaXJlKCkge1xuICAgICAgICB0aGlzLmFuaW1Sb3cgPSAxO1xuICAgICAgICB0aGlzLm9uRmlyZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ZpcmUtb2ZmJyk7XG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSwgJzI1NSwgODgsIDMzJywgMzApO1xuICAgIH1cblxuICAgIG1lbHRJY2UoKSB7XG4gICAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUljZUJsb2NrKHRoaXMueHRpbGUsIHRoaXMueXRpbGUgLSAxKTtcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUgLSAxLCAnMjU1LCA4OCwgMzMnLCAzMCk7XG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlIC0gMSwgJzMzLCA4OCwgMjU1JywgNDApO1xuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHN1cGVyLmRyYXcoKTtcbiAgICAgICAgdGhpcy5kcmF3RnJvc3QoKTtcbiAgICB9XG5cbn1cbiIsIi8qKlxuICogS2V5Ym9hcmQgcHJlc3MgZW5naW5lXG4gKi9cbmV4cG9ydCBjbGFzcyBLZXlib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXAgPSBmYWxzZTtcbiAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5hY3Rpb24gPSBmYWxzZTtcbiAgICB0aGlzLmtleWRvd24gPSB0aGlzLmtleWRvd25fLmJpbmQodGhpcyk7XG4gICAgdGhpcy5rZXl1cCA9IHRoaXMua2V5dXBfLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbnRybyA9IHRydWU7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlkb3duLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmludHJvKSB7XG4gICAgICAgIHRoaXMuZW50ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5pbnRybyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJidG5fYWN0aW9uXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5kb3duID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJidG5fYWN0aW9uXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCAoKSA9PiAodGhpcy5kb3duID0gZmFsc2UpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bl9sZWZ0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgfSk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcImJ0bl9sZWZ0XCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCAoKSA9PiAodGhpcy5sZWZ0ID0gZmFsc2UpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bl9yaWdodFwiKS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xuICAgICAgdGhpcy5yaWdodCA9IHRydWU7XG4gICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJidG5fcmlnaHRcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsICgpID0+ICh0aGlzLnJpZ2h0ID0gZmFsc2UpKTtcbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYnRuX3NlbGVjdFwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiAodGhpcy5lbnRlciA9IHRydWUpKTtcbiAgfVxuXG4gIGtleWRvd25fKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgMzc6IC8vIExlZnRcbiAgICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzg6IC8vIFVwXG4gICAgICAgIHRoaXMudXAgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XG4gICAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQwOiAvLyBEb3duXG4gICAgICBjYXNlIDMyOiAvLyBTcGFjZVxuICAgICAgICB0aGlzLmFjdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZG93biA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMzogLy9FbnRlclxuICAgICAgICB0aGlzLmVudGVyID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGtleXVwXyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIDM3OiAvLyBMZWZ0XG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzg6IC8vIFVwXG4gICAgICAgIHRoaXMudXAgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM5OiAvLyBSaWdodFxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0MDogLy8gRG93blxuICAgICAgY2FzZSAzMjogLy8gU3BhY2VcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMzogLy9FbnRlclxuICAgICAgICB0aGlzLmVudGVyID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgbGV2ZWxzID0gW1xuICAgIHtcbiAgICAgICAgXCJtYXBcIjpbXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxuICAgICAgICBdLFxuICAgICAgICBcInRoZW1lXCI6MCxcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjExLFwieVwiOjQsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo5LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6OCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjcsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo2LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo4LFwieVwiOjQsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjo5LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6OCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo3LFwieVwiOjcsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjoxMCxcInZcIjoxfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBcIm1hcFwiOltcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMSwwLDEsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXG4gICAgICAgIF0sXG4gICAgICAgIFwidGhlbWVcIjoxLFxuICAgICAgICBcInNwcml0ZXNcIjpbXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MyxcInlcIjo3LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NyxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo0LFwieVwiOjcsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTAsXCJ5XCI6NSxcInZcIjo0fSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMixcInlcIjo4LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEyLFwieVwiOjcsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6NixcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMyxcInlcIjo4LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjExLFwieVwiOjgsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6NyxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo2LFwidlwiOjF9XG4gICAgICAgIF1cbiAgICB9LCB7XG4gICAgICAgIFwibWFwXCI6W1xuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDAsMCwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMSwxLDEsMSwxLDAsMCwwLDAsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cbiAgICAgICAgXSxcbiAgICAgICAgXCJ0aGVtZVwiOjIsXG4gICAgICAgIFwic3ByaXRlc1wiOltcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoxNCxcInlcIjo2LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEwLFwieVwiOjksXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NSxcInlcIjo0LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6NixcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo5LFwieVwiOjUsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6NixcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo1LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NixcInZcIjoxfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBcIm1hcFwiOltcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXG4gICAgICAgIF0sXG4gICAgICAgIFwidGhlbWVcIjowLFxuICAgICAgICBcInNwcml0ZXNcIjpbXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6OCxcInlcIjo5LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjEyLFwieVwiOjgsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTMsXCJ5XCI6NyxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMSxcInlcIjo5LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6OCxcInZcIjo1fSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo5LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjcsXCJ2XCI6M30sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTIsXCJ5XCI6NixcInZcIjoyfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjksXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NCxcInlcIjo3LFwidlwiOjN9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6NixcInZcIjoyfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo1LFwieVwiOjksXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NCxcInlcIjo4LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjMsXCJ5XCI6NyxcInZcIjoxfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBcIm1hcFwiOltcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMCwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwwLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDAsMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXG4gICAgICAgIF0sXG4gICAgICAgIFwidGhlbWVcIjo2LFxuICAgICAgICBcInNwcml0ZXNcIjpbXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MTEsXCJ5XCI6OCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjoxMCxcInZcIjozfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo5LFwidlwiOjN9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjcsXCJ5XCI6NyxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjozLFwieVwiOjUsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6OSxcInlcIjo3LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjMsXCJ5XCI6MTAsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MyxcInlcIjo0LFwidlwiOjF9XG4gICAgICAgIF1cbiAgICB9LCB7XG4gICAgICAgIFwibWFwXCI6W1xuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cbiAgICAgICAgXSxcbiAgICAgICAgXCJ0aGVtZVwiOjUsXG4gICAgICAgIFwic3ByaXRlc1wiOltcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoxMyxcInlcIjozLFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6NCxcInZcIjoxLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2V9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6NixcInZcIjoxLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2V9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NixcInZcIjoxLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2V9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjYsXCJ2XCI6MSxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoyLFwieVwiOjgsXCJ2XCI6MTMsXCJmbFwiOnRydWUsXCJmclwiOmZhbHNlfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoyLFwieVwiOjcsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MyxcInlcIjoxMCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo0LFwieVwiOjEwLFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6MTAsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjoxMCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo3LFwieVwiOjEwLFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6MTAsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjoxMCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjoxMCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMSxcInlcIjoxMCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMixcInlcIjoxMCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMyxcInlcIjoxMCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxNCxcInlcIjoxMCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxNCxcInlcIjo0LFwidlwiOjEsXCJmbFwiOnRydWUsXCJmclwiOnRydWV9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjIsXCJ5XCI6NSxcInZcIjoxLFwiZmxcIjp0cnVlLFwiZnJcIjp0cnVlfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBcIm1hcFwiOltcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXG4gICAgICAgIF0sXG4gICAgICAgIFwidGhlbWVcIjoxLFxuICAgICAgICBcInNwcml0ZXNcIjpbXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MTIsXCJ5XCI6NCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo4LFwieVwiOjEwLFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6MTEsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6MTEsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6OCxcInlcIjo1LFwidlwiOjV9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjQsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjo2LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NSxcInZcIjoxfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBcIm1hcFwiOltcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMCwwLDEsMCwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXG4gICAgICAgIF0sXG4gICAgICAgIFwidGhlbWVcIjoxLFxuICAgICAgICBcInNwcml0ZXNcIjpbXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6OCxcInlcIjo2LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6MTAsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjoxMCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo3LFwieVwiOjEwLFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6MTAsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjoxMCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjoxMCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjoxMCxcInZcIjoyfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjksXCJ2XCI6N30sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjo4LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjExLFwieVwiOjYsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6NSxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjUsXCJ2XCI6MX1cbiAgICAgICAgXVxuICAgIH0sIHtcbiAgICAgICAgXCJtYXBcIjpbXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxuICAgICAgICBdLFxuICAgICAgICBcInRoZW1lXCI6NixcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjUsXCJ5XCI6NCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo1LFwieVwiOjgsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6OCxcInlcIjo1LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMSxcInlcIjo4LFwidlwiOjF9XG4gICAgICAgIF1cbiAgICB9LCB7XG4gICAgICAgIFwibWFwXCI6W1xuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMSwxLDEsMSwxLDAsMCwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDEsMSwxLDAsMCwwLDAsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cbiAgICAgICAgXSxcbiAgICAgICAgXCJ0aGVtZVwiOjEwLFxuICAgICAgICBcInNwcml0ZXNcIjpbXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MyxcInlcIjo0LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjIsXCJ5XCI6NixcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjozLFwieVwiOjcsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NCxcInlcIjo4LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6OSxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo2LFwieVwiOjEwLFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6MTAsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjo5LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6OCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjo3LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjExLFwieVwiOjYsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MixcInlcIjo1LFwidlwiOjEwfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo1LFwieVwiOjQsXCJ2XCI6MX1cbiAgICAgICAgXVxuICAgIH0sIHtcbiAgICAgICAgXCJtYXBcIjpbXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDAsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwwLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwxLDAsMCwxLDAsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwxLDEsMSwwLDAsMCwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDEsMSwwLDAsMSwwLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMCwwLDAsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxuICAgICAgICBdLFxuICAgICAgICBcInRoZW1lXCI6NixcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjMsXCJ5XCI6MyxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMyxcInlcIjoxMCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo1LFwieVwiOjEwLFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6MTAsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjoxMCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo0LFwieVwiOjQsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjozLFwidlwiOjJ9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjExLFwieVwiOjMsXCJ2XCI6Mn0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjozLFwidlwiOjF9XG4gICAgICAgIF1cbiAgICB9LCB7XG4gICAgICAgIFwibWFwXCI6W1xuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMSwxLDEsMSwxLDEsMSwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDAsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cbiAgICAgICAgXSxcbiAgICAgICAgXCJ0aGVtZVwiOjcsXG4gICAgICAgIFwic3ByaXRlc1wiOltcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjo4LFwieVwiOjUsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo1LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjEwLFwieVwiOjUsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MixcInlcIjozLFwidlwiOjJ9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjE0LFwieVwiOjQsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTQsXCJ5XCI6NCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMyxcInlcIjozLFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjE0LFwieVwiOjMsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6MTAsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjoxMCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMixcInlcIjo5LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjIsXCJ5XCI6OSxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo2LFwieVwiOjksXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NyxcInlcIjo5LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6OSxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo5LFwieVwiOjksXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6OSxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMyxcInlcIjo5LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6OSxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjozLFwieVwiOjgsXCJ2XCI6MTF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjQsXCJ5XCI6OSxcInZcIjoxfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBcIm1hcFwiOltcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXG4gICAgICAgIF0sXG4gICAgICAgIFwidGhlbWVcIjoyLFxuICAgICAgICBcInNwcml0ZXNcIjpbXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MTIsXCJ5XCI6MyxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NCxcInhcIjoxMCxcInlcIjozLFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjcsXCJ5XCI6MyxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjo3LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6MTAsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjQsXCJ4XCI6NyxcInlcIjo3LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo0LFwieFwiOjEwLFwieVwiOjEwLFwidlwiOjF9XG4gICAgICAgIF1cbiAgICB9LCB7XG4gICAgICAgIFwibWFwXCI6W1xuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cbiAgICAgICAgXSxcbiAgICAgICAgXCJ0aGVtZVwiOjUsXG4gICAgICAgIFwic3ByaXRlc1wiOltcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoyLFwieVwiOjMsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NCxcInlcIjozLFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6MyxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NCxcInhcIjozLFwieVwiOjMsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTQsXCJ5XCI6MTAsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTMsXCJ5XCI6MTAsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6MTAsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTIsXCJ5XCI6MTAsXCJ2XCI6MX1cbiAgICAgICAgXVxuICAgIH0sIHtcbiAgICAgICAgXCJtYXBcIjpbXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMSwxLDAsMCwwLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMSwwLDAsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxuICAgICAgICBdLFxuICAgICAgICBcInRoZW1lXCI6NixcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjgsXCJ5XCI6NCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NSxcInhcIjo2LFwieVwiOjExLFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjUsXCJ5XCI6OSxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo4LFwieVwiOjEwLFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo0LFwieFwiOjcsXCJ5XCI6NCxcInZcIjoxfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBcIm1hcFwiOltcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgWzAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDEsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMSwwLDAsMCwwLDAsMSwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgWzAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdXG4gICAgICAgIF0sXG4gICAgICAgIFwidGhlbWVcIjoxLFxuICAgICAgICBcInNwcml0ZXNcIjpbXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MTAsXCJ5XCI6NixcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlLFwieFwiOjEwLFwieVwiOjEwLFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2UsXCJ4XCI6NixcInlcIjo5LFwidlwiOjV9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2UsXCJ4XCI6NyxcInlcIjo4LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2UsXCJ4XCI6NixcInlcIjo3LFwidlwiOjV9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwiZmxcIjpmYWxzZSxcImZyXCI6ZmFsc2UsXCJ4XCI6NixcInlcIjo1LFwidlwiOjV9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6MTAsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6OCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo2LFwieVwiOjYsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6NCxcInZcIjoxfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBcIm1hcFwiOltcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwwLDAsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDEsMSwwLDAsMCwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMCwwLDAsMSwxLDAsMCwwLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwwLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXG4gICAgICAgIF0sXG4gICAgICAgIFwidGhlbWVcIjo3LFxuICAgICAgICBcInNwcml0ZXNcIjpbXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6MTEsXCJ5XCI6NyxcInZcIjoxLFwiZmxcIjp0cnVlLFwiZnJcIjp0cnVlfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo5LFwieVwiOjcsXCJ2XCI6MSxcImZsXCI6dHJ1ZSxcImZyXCI6dHJ1ZX0sXG4gICAgICAgICAgICB7XCJpZFwiOjQsXCJ4XCI6MTAsXCJ5XCI6NyxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMCxcInlcIjo4LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjQsXCJ5XCI6OCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjo3LFwieVwiOjUsXCJ2XCI6MX1cbiAgICAgICAgXVxuICAgIH0sIHtcbiAgICAgICAgXCJtYXBcIjpbXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDFdLFxuICAgICAgICAgICAgWzEsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMV0sXG4gICAgICAgICAgICBbMSwwLDEsMSwwLDAsMCwwLDEsMSwwLDAsMCwxLDEsMCwxXSxcbiAgICAgICAgICAgIFsxLDAsMSwxLDAsMCwwLDAsMSwxLDAsMCwwLDEsMSwwLDFdLFxuICAgICAgICAgICAgWzEsMCwxLDEsMSwxLDAsMCwxLDEsMCwxLDEsMSwxLDAsMV0sXG4gICAgICAgICAgICBbMSwwLDEsMSwwLDAsMCwxLDEsMSwwLDAsMCwxLDEsMCwxXSxcbiAgICAgICAgICAgIFsxLDAsMSwxLDAsMSwwLDAsMCwwLDEsMCwwLDAsMSwwLDFdLFxuICAgICAgICAgICAgWzEsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDAsMV0sXG4gICAgICAgICAgICBbMSwwLDEsMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMCwxXSxcbiAgICAgICAgICAgIFsxLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDFdLFxuICAgICAgICAgICAgWzEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxuICAgICAgICBdLFxuICAgICAgICBcInRoZW1lXCI6NixcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjQsXCJ5XCI6NCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxMyxcInlcIjo3LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo0LFwieFwiOjcsXCJ5XCI6OCxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjozLFwieVwiOjgsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjo3LFwidlwiOjF9XG4gICAgICAgIF1cbiAgICB9LCB7XG4gICAgICAgIFwibWFwXCI6W1xuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxXSxcbiAgICAgICAgICAgIFsxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDFdLFxuICAgICAgICAgICAgWzEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMV0sXG4gICAgICAgICAgICBbMSwwLDAsMSwxLDAsMCwwLDAsMCwwLDAsMSwxLDAsMCwxXSxcbiAgICAgICAgICAgIFsxLDAsMCwxLDEsMCwwLDAsMCwwLDAsMCwxLDEsMCwwLDFdLFxuICAgICAgICAgICAgWzEsMCwwLDEsMSwwLDAsMCwwLDEsMCwwLDEsMSwwLDAsMV0sXG4gICAgICAgICAgICBbMSwwLDAsMSwxLDAsMCwwLDAsMCwxLDEsMSwxLDAsMCwxXSxcbiAgICAgICAgICAgIFsxLDAsMCwxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMCwwLDFdLFxuICAgICAgICAgICAgWzEsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMV0sXG4gICAgICAgICAgICBbMSwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwxXSxcbiAgICAgICAgICAgIFsxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cbiAgICAgICAgXSxcbiAgICAgICAgXCJ0aGVtZVwiOjEsXG4gICAgICAgIFwic3ByaXRlc1wiOltcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjo4LFwieVwiOjgsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjo4LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6NyxcInZcIjozLFwiZmxcIjp0cnVlLFwiZnJcIjpmYWxzZX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NyxcInlcIjo4LFwidlwiOjEsXCJmbFwiOmZhbHNlLFwiZnJcIjpmYWxzZX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTAsXCJ5XCI6NixcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjYsXCJ2XCI6MSxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo2LFwieVwiOjUsXCJ2XCI6MyxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo5LFwieVwiOjUsXCJ2XCI6MSxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBcIm1hcFwiOltcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDAsMCwwLDAsMSwxLDAsMCwwLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwwLDAsMCwxLDEsMCwwLDAsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDAsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDAsMSwwLDAsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXG4gICAgICAgIF0sXG4gICAgICAgIFwidGhlbWVcIjoyLFxuICAgICAgICBcInNwcml0ZXNcIjpbXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6NixcInlcIjo0LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6NSxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo5LFwieVwiOjEwLFwidlwiOjF9XG4gICAgICAgIF1cbiAgICB9LCB7XG4gICAgICAgIFwibWFwXCI6IFtcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDAsMSwxLDAsMSwwLDEsMCwwLDAsMCwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDAsMSwxLDAsMCwwLDEsMSwwLDEsMCwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMCwxLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXG4gICAgICAgIF0sXG4gICAgICAgIFwidGhlbWVcIjogOSxcbiAgICAgICAgXCJzcHJpdGVzXCI6IFtcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjo0LFwieVwiOjMsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NixcInlcIjo0LFwidlwiOjEsXCJmbFwiOnRydWUsXCJmclwiOnRydWV9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjgsXCJ5XCI6NCxcInZcIjoxLFwiZmxcIjp0cnVlLFwiZnJcIjp0cnVlfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjoxMCxcInlcIjo0LFwidlwiOjQsXCJmbFwiOnRydWUsXCJmclwiOnRydWV9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6MyxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NCxcInhcIjoxMSxcInlcIjo5LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo0LFwieFwiOjUsXCJ5XCI6OSxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjozLFwieVwiOjksXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTMsXCJ5XCI6OSxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NSxcInhcIjo4LFwieVwiOjEwLFwidlwiOmZhbHNlfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibWFwXCI6W1xuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDEsMSwxLDEsMSwxLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMSwwLDAsMCwwLDEsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwxLDAsMCwwLDAsMSwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDEsMCwwLDAsMCwxLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMSwwLDAsMCwwLDEsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwxLDEsMSwxLDEsMSwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cbiAgICAgICAgXSxcbiAgICAgICAgXCJ0aGVtZVwiOjAsXG4gICAgICAgIFwic3ByaXRlc1wiOltcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoxMCxcInlcIjo1LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjcsXCJ5XCI6NixcInZcIjo0LFwiZmxcIjp0cnVlLFwiZnJcIjp0cnVlfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo3LFwieVwiOjUsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OCxcInlcIjo1LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6NSxcInZcIjoxfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBcIm1hcFwiOltcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMCwwLDAsMCwwLDAsMCwxLDEsMSwwLDAsMCwwLDAsMV0sXG4gICAgICAgICAgICBbMSwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwxXSxcbiAgICAgICAgICAgIFsxLDAsMCwxLDEsMSwxLDEsMCwwLDAsMSwxLDEsMCwwLDFdLFxuICAgICAgICAgICAgWzEsMCwwLDEsMSwxLDEsMCwwLDAsMCwxLDEsMSwwLDAsMV0sXG4gICAgICAgICAgICBbMSwwLDAsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDAsMCwxXSxcbiAgICAgICAgICAgIFsxLDAsMCwxLDEsMCwwLDAsMSwxLDEsMSwxLDEsMCwwLDFdLFxuICAgICAgICAgICAgWzEsMCwwLDEsMSwwLDAsMCwwLDEsMSwxLDEsMSwwLDAsMV0sXG4gICAgICAgICAgICBbMSwwLDAsMSwxLDEsMCwwLDAsMSwxLDEsMSwxLDAsMCwxXSxcbiAgICAgICAgICAgIFsxLDAsMCwxLDEsMSwwLDEsMSwxLDEsMSwxLDEsMCwwLDFdLFxuICAgICAgICAgICAgWzEsMCwwLDEsMSwxLDAsMSwxLDEsMSwxLDEsMSwwLDAsMV0sXG4gICAgICAgICAgICBbMSwwLDAsMCwwLDAsMSwxLDEsMSwwLDAsMCwwLDAsMCwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXG4gICAgICAgIF0sXG4gICAgICAgIFwidGhlbWVcIjowLFxuICAgICAgICBcInNwcml0ZXNcIjpbXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6OCxcInlcIjo1LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjYsXCJ5XCI6MTAsXCJ2XCI6dHJ1ZX0sXG4gICAgICAgICAgICB7XCJpZFwiOjUsXCJ4XCI6NSxcInlcIjo3LFwidlwiOnRydWV9LFxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjgsXCJ5XCI6OCxcInZcIjp0cnVlfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo1LFwieVwiOjYsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo5LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjgsXCJ5XCI6NyxcInZcIjoxfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBcIm1hcFwiOltcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwxLDEsMSwxLDEsMSwxLDEsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMCwwLDAsMCwwLDAsMSwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDEsMCwwLDAsMCwxLDEsMCwxLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMSwwLDAsMCwxLDEsMSwwLDEsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwxLDAsMCwwLDEsMSwxLDAsMSwxLDEsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMSwwLDAsMSwxLDEsMSwwLDEsMCwxLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwxLDAsMCwwLDEsMSwwLDAsMCwwLDEsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdXG4gICAgICAgIF0sXG4gICAgICAgIFwidGhlbWVcIjo0LFxuICAgICAgICBcInNwcml0ZXNcIjpbXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6OCxcInlcIjo3LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjYsXCJ5XCI6NixcInZcIjoxLFwiZmxcIjpmYWxzZSxcImZyXCI6dHJ1ZX0sXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NCxcInlcIjo3LFwidlwiOjEsXCJmbFwiOnRydWUsXCJmclwiOmZhbHNlfSxcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo0LFwieVwiOjUsXCJ2XCI6MSxcImZsXCI6dHJ1ZSxcImZyXCI6ZmFsc2V9LFxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6OSxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo5LFwieVwiOjksXCJ2XCI6MX1cbiAgICAgICAgXVxuICAgIH0sIHtcbiAgICAgICAgXCJtYXBcIjpbXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwxLDAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMSwwLDAsMCwwLDAsMCwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwxLDEsMSwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwxLDAsMCwwLDAsMCwxLDEsMSwxLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMSwwLDAsMCwwLDAsMSwxLDEsMSwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxuICAgICAgICBdLFxuICAgICAgICBcInRoZW1lXCI6NixcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjksXCJ5XCI6MTEsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjUsXCJ4XCI6MTAsXCJ5XCI6OCxcInZcIjp0cnVlfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxNCxcInlcIjoxMSxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NCxcInhcIjoxMSxcInlcIjoyLFwidlwiOjF9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJtYXBcIjpbXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwxLDEsMSwxLDAsMCwwLDAsMCwwLDAsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDEsMSwxLDEsMCwwLDAsMSwxLDAsMCwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMSwxLDEsMSwwLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwxLDEsMSwxLDAsMCwwLDAsMCwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDEsMSwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMSwxLDAsMCwxLDEsMCwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwxLDEsMSwwLDAsMCwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDEsMSwxLDAsMCwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMSwxLDEsMSwwLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxuICAgICAgICBdLFxuICAgICAgICBcInRoZW1lXCI6OCxcbiAgICAgICAgICAgIFwic3ByaXRlc1wiOltcbiAgICAgICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6MTIsXCJ5XCI6NCxcInZcIjoxfSxcbiAgICAgICAgICAgICAgICB7XCJpZFwiOjUsXCJ4XCI6MTEsXCJ5XCI6NyxcInZcIjp0cnVlfSxcbiAgICAgICAgICAgICAgICB7XCJpZFwiOjQsXCJ4XCI6MTAsXCJ5XCI6NixcInZcIjoxfSxcbiAgICAgICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjoxMCxcInZcIjoxfSxcbiAgICAgICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6MTEsXCJ5XCI6NixcInZcIjoxfSxcbiAgICAgICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6OSxcInlcIjo2LFwidlwiOjF9LFxuICAgICAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjoxNCxcInlcIjo2LFwidlwiOjF9LFxuICAgICAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo5LFwieVwiOjUsXCJ2XCI6NCxcImZsXCI6dHJ1ZSxcImZyXCI6ZmFsc2V9LFxuICAgICAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo5LFwieVwiOjQsXCJ2XCI6MSxcImZsXCI6ZmFsc2UsXCJmclwiOmZhbHNlfVxuICAgICAgICAgICAgXVxuICAgIH0sIHtcbiAgICAgICAgXCJtYXBcIjpbWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgWzAsMCwwLDEsMCwwLDAsMCwxLDAsMSwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICBbMCwwLDEsMSwxLDAsMCwwLDEsMSwxLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDEsMCwwLDAsMCwxLDAsMSwwLDAsMF0sXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDEsMSwxLDAsMCwwLDEsMSwxLDAsMCwwXSxcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgWzAsMCwwLDEsMCwwLDAsMCwxLDAsMSwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICBbMCwwLDEsMSwxLDAsMCwwLDEsMSwxLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF1cbiAgICBdLFxuICAgICAgICBcInRoZW1lXCI6OCxcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjMsXCJ5XCI6MSxcInZcIjoxfVxuICAgICAgICAgICAgLHtcImlkXCI6NCxcInhcIjo0LFwieVwiOjIsXCJ2XCI6MX1cbiAgICAgICAgICAgICx7XCJpZFwiOjQsXCJ4XCI6MixcInlcIjoyLFwidlwiOjF9XG4gICAgICAgICAgICAse1wiaWRcIjozLFwieFwiOjMsXCJ5XCI6MixcInZcIjoxLFwiZmxcIjp0cnVlLFwiZnJcIjp0cnVlfVxuICAgICAgICAgICAgLHtcImlkXCI6NixcInhcIjo0LFwieVwiOjMsXCJ2XCI6MX1cbiAgICAgICAgICAgICx7XCJpZFwiOjYsXCJ4XCI6MixcInlcIjozLFwidlwiOjF9XG4gICAgICAgICAgICAse1wiaWRcIjo0LFwieFwiOjYsXCJ5XCI6NSxcInZcIjoxfVxuICAgICAgICAgICAgLHtcImlkXCI6MyxcInhcIjo3LFwieVwiOjUsXCJ2XCI6MSxcImZsXCI6dHJ1ZSxcImZyXCI6ZmFsc2V9XG4gICAgICAgICAgICAse1wiaWRcIjozLFwieFwiOjUsXCJ5XCI6NSxcInZcIjoxLFwiZmxcIjpmYWxzZSxcImZyXCI6dHJ1ZX1cbiAgICAgICAgICAgICx7XCJpZFwiOjQsXCJ4XCI6NCxcInlcIjo4LFwidlwiOjF9XG4gICAgICAgICAgICAse1wiaWRcIjo0LFwieFwiOjIsXCJ5XCI6OCxcInZcIjoxfVxuICAgICAgICAgICAgLHtcImlkXCI6MyxcInhcIjozLFwieVwiOjgsXCJ2XCI6MSxcImZsXCI6dHJ1ZSxcImZyXCI6dHJ1ZX1cbiAgICAgICAgICAgICx7XCJpZFwiOjYsXCJ4XCI6NCxcInlcIjo5LFwidlwiOjF9XG4gICAgICAgICAgICAse1wiaWRcIjo2LFwieFwiOjIsXCJ5XCI6OSxcInZcIjoxfVxuICAgICAgICAgICAgLHtcImlkXCI6NixcInhcIjo3LFwieVwiOjYsXCJ2XCI6MX1cbiAgICAgICAgICAgICx7XCJpZFwiOjYsXCJ4XCI6NSxcInlcIjo2LFwidlwiOjF9XG4gICAgICAgICAgICAse1wiaWRcIjo0LFwieFwiOjEwLFwieVwiOjgsXCJ2XCI6MX1cbiAgICAgICAgICAgICx7XCJpZFwiOjQsXCJ4XCI6OCxcInlcIjo4LFwidlwiOjF9XG4gICAgICAgICAgICAse1wiaWRcIjozLFwieFwiOjksXCJ5XCI6OCxcInZcIjoxLFwiZmxcIjp0cnVlLFwiZnJcIjp0cnVlfVxuICAgICAgICAgICAgLHtcImlkXCI6NixcInhcIjo5LFwieVwiOjksXCJ2XCI6MX1cbiAgICAgICAgICAgICx7XCJpZFwiOjQsXCJ4XCI6MTIsXCJ5XCI6NSxcInZcIjoxfVxuICAgICAgICAgICAgLHtcImlkXCI6MyxcInhcIjoxMyxcInlcIjo1LFwidlwiOjEsXCJmbFwiOnRydWUsXCJmclwiOmZhbHNlfVxuICAgICAgICAgICAgLHtcImlkXCI6MyxcInhcIjoxMSxcInlcIjo1LFwidlwiOjEsXCJmbFwiOmZhbHNlLFwiZnJcIjp0cnVlfVxuICAgICAgICAgICAgLHtcImlkXCI6NixcInhcIjoxMixcInlcIjo2LFwidlwiOjF9XG4gICAgICAgICAgICAse1wiaWRcIjo2LFwieFwiOjksXCJ5XCI6MyxcInZcIjoxfVxuICAgICAgICAgICAgLHtcImlkXCI6NCxcInhcIjoxMCxcInlcIjoyLFwidlwiOjF9XG4gICAgICAgICAgICAse1wiaWRcIjo0LFwieFwiOjgsXCJ5XCI6MixcInZcIjoxfVxuICAgICAgICAgICAgLHtcImlkXCI6MyxcInhcIjo5LFwieVwiOjIsXCJ2XCI6MSxcImZsXCI6dHJ1ZSxcImZyXCI6dHJ1ZX1cbiAgICAgICAgXVxuICAgIH0sXG4gICAgLyoge1xuICAgICAgICBcIm1hcFwiOltcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMF0sXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDAsMCwwXSxcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwwLDAsMCwwLDAsMCwxLDEsMCwwLDBdLFxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwwLDAsMF0sXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMCwwLDAsMCwwLDEsMSwxLDAsMCwwXSxcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDAsMCwxLDEsMSwxLDEsMCwwLDBdLFxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwwLDAsMF0sXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDAsMCwwXSxcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDAsMCwxLDEsMSwxLDEsMCwwLDBdLFxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwwLDAsMF0sXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwXSxcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdXG4gICAgICAgIF0sXG4gICAgICAgIFwidGhlbWVcIjo5LFxuICAgICAgICBcInNwcml0ZXNcIjpbXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6OSxcInlcIjo1LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjcsXCJ5XCI6NixcInZcIjoyfSxcbiAgICAgICAgICAgIHtcImlkXCI6NCxcInhcIjo3LFwieVwiOjUsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo3LFwidlwiOjF9LFxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjcsXCJ5XCI6OSxcInZcIjp0cnVlfSxcbiAgICAgICAgICAgIHtcImlkXCI6NSxcInhcIjo4LFwieVwiOjEwLFwidlwiOnRydWV9LFxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjksXCJ5XCI6OCxcInZcIjp0cnVlfVxuICAgICAgICBdXG4gICAgfSwqLyB7XG4gICAgICAgIG1hcDogW1xuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDEsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDEsMCwwLDAsMCwwLDAsMCwxLDEsMSwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDAsMCwwLDAsMCwxLDEsMSwxLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cbiAgICAgICAgXSxcbiAgICAgICAgc3ByaXRlczogW1xuICAgICAgICAgICAge2lkIDo3LCB4OiAxMywgeTogMiwgdjogMX0sXG4gICAgICAgICAgICB7aWQgOjMsIHg6IDQsIHk6IDQsIHY6IDh9LFxuICAgICAgICAgICAge2lkIDozLCB4OiAxMSwgeTogMywgdjogNH0sXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDMsIHk6IDUsIHY6IDF9LFxuICAgICAgICAgICAge2lkIDo2LCB4OiA0LCB5OiA2LCB2OiAxfSxcbiAgICAgICAgICAgIHtpZCA6NiwgeDogNSwgeTogNywgdjogMX0sXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDEwLCB5OiA2LCB2OiAxfSxcbiAgICAgICAgICAgIHtpZCA6NiwgeDogMTEsIHk6IDUsIHY6IDF9LFxuICAgICAgICAgICAge2lkIDo2LCB4OiAxNCwgeTogMTAsIHY6IDF9LFxuICAgICAgICAgICAge2lkIDo2LCB4OiAxNCwgeTogOSwgdjogMX0sXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDIsIHk6IDEwLCB2OiAxfSxcbiAgICAgICAgICAgIHtpZCA6NiwgeDogOSwgeTogOCwgdjogMX0sXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDIsIHk6IDksIHY6IDF9LFxuICAgICAgICAgICAge2lkIDo2LCB4OiA4LCB5OiA4LCB2OiAxfSxcbiAgICAgICAgICAgIHtpZCA6NiwgeDogNywgeTogOCwgdjogMX0sXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDYsIHk6IDgsIHY6IDF9LFxuICAgICAgICAgICAge2lkIDo2LCB4OiA4LCB5OiAxMCwgdjogMX0sXG4gICAgICAgICAgICB7aWQgOjYsIHg6IDcsIHk6IDEwLCB2OiAxfVxuICAgICAgICBdLFxuICAgICAgICB0aGVtZTogOFxuICAgIH0sIHtcbiAgICAgICAgXCJtYXBcIjpbXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXVxuICAgICAgICBdLFxuICAgICAgICBcInRoZW1lXCI6NixcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjE0LFwieVwiOjEwLFwidlwiOjF9XG4gICAgICAgIF1cbiAgICB9LCB7XG4gICAgICAgIFwibWFwXCI6W1xuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwxLDAsMSwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMSwxLDEsMSwwLDAsMSwwLDEsMSwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwxLDAsMCwxLDEsMCwxLDAsMSwwLDEsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDEsMSwwLDEsMSwxLDEsMCwxLDAsMSwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMSwwLDAsMSwwLDEsMSwwLDEsMCwxLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwxLDAsMCwxLDAsMCwxLDAsMSwwLDEsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwwLDEsMSwwLDEsMCwwLDEsMSwxLDEsMCwwLDEsMV0sXG4gICAgICAgICAgICBbMSwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwxXSxcbiAgICAgICAgICAgIFsxLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDFdLFxuICAgICAgICAgICAgWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV1cbiAgICAgICAgXSxcbiAgICAgICAgXCJ0aGVtZVwiOjksXG4gICAgICAgIFwic3ByaXRlc1wiOltcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjoxMCxcInlcIjoxMSxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo4LFwieVwiOjEsXCJ2XCI6MX0sXG4gICAgICAgICAgICB7XCJpZFwiOjUsXCJ4XCI6NCxcInlcIjoxMSxcInZcIjoxfSxcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo4LFwieVwiOjUsXCJ2XCI6MX1cbiAgICAgICAgXVxuICAgIH1cbl07XG4iLCJpbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlcyc7XG5cbmV4cG9ydCBjbGFzcyBNZXRhbCBleHRlbmRzIEFuaW1TcHJpdGUge1xuXG4gICAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHksIGxlbmd0aCkge1xuICAgICAgICBzdXBlcihDb25zdHMuT2JqZWN0TWV0YWwsIGVuZ2luZSwgJ2ltZ19tZXRhbCcsXG4gICAgICAgICAgICB0eCwgdHksIENvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgsIDAsIDAsIDAsIDEsIHRydWUpO1xuICAgICAgICB0aGlzLnh0aWxlID0gdHg7XG4gICAgICAgIHRoaXMueXRpbGUgPSB0eTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuYW5pbURlbGF5ID0gOTtcbiAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY2FuR2xpZGUoZGlyKSB7XG4gICAgICAgIGlmIChkaXIgPT09IENvbnN0cy5EaXJMZWZ0ICAmJiBUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5sKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXIgPT09IENvbnN0cy5EaXJSaWdodCAmJiBUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5yKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZyb3plblRvSWNlKCkge1xuICAgICAgICBjb25zdCByaWdodFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueHRpbGUgKyAxLCB0aGlzLnl0aWxlKTtcbiAgICAgICAgY29uc3QgbGVmdFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueHRpbGUgLSAxLCB0aGlzLnl0aWxlKVxuICAgICAgICByZXR1cm4gICF0aGlzLmZhbGxpbmcgJiYgKChyaWdodFNwcml0ZSAmJiByaWdodFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJiByaWdodFNwcml0ZS5mcm96ZW4ubGVmdCkgfHxcbiAgICAgICAgICAgIChsZWZ0U3ByaXRlICYmIGxlZnRTcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiYgbGVmdFNwcml0ZS5mcm96ZW4ucmlnaHQpKTtcbiAgICB9XG5cbiAgICBncmF2aXR5KCkge1xuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICYmICF0aGlzLmZyb3plblRvSWNlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mYWxsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29sbGlzaW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuR2xpZGUodGhpcy5kaXJyZWN0aW9uKSkge1xuICAgICAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gMDtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ3Jhdml0eSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xuICAgICAgICAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlTW92aW5nOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2xpZGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VDaGVjazpcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2goKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxuICAgICAgICAgICAgICAgIHRoaXMuZG9Eb3duKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBzdXBlci5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhd0Zyb3N0KCk7XG4gICAgfVxuXG4gICAgZ2xpZGUoKSB7XG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMueCArPSA0ICogdGhpcy5kaXJyZWN0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb0Rvd24oKSB7XG4gICAgICAgIHRoaXMuY291bnRlciArPSA0O1xuICAgICAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMueSArPSA0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXNoKGRpcikge1xuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAodHlwZW9mIGRpciA9PT0gJ3VuZGVmaW5lZCcpID8gdGhpcy5kaXJyZWN0aW9uIDogZGlyO1xuICAgICAgICBpZiAoIXRoaXMuY29sbGlzaW9uKCkpIHtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VNb3ZpbmcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGVzJztcbmltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBBbmltU3ByaXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5KSB7XG4gICAgICAgIHN1cGVyKENvbnN0cy5PYmplY3RQbGF5ZXIsIGVuZ2luZSwgJ2ltZ19kb25hJywgdHgsIHR5LCA0OCwgNjQsIC0xMCwgLTMyLCAyLCAyLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAyO1xuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSAxO1xuICAgICAgICB0aGlzLnN0YXRlID0gMDsgLy9zdGFuZGluZyB0b3AgcmlnaHQgZG93biBsZWZ0XG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGlsZVdpZHRoID0gQ29uc3RzLlRpbGVXaWR0aDtcbiAgICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gQ29uc3RzLlRpbGVXaWR0aDtcbiAgICAgICAgdGhpcy5hbmltRGVsYXkgPSAzO1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLmZhbGxDb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLnN0YW5kQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuaW50cm8oKTtcbiAgICB9XG5cbiAgICBsZWZ0KCkge1xuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XG4gICAgICAgICAgICAvL2lmIHN0YW5kaW5nIHRoZW4gdHVyblxuICAgICAgICAgICAgaWYgKHRoaXMuZGlycmVjdGlvbiAhPT0gQ29uc3RzLkRpckxlZnQpIHtcbiAgICAgICAgICAgICAgICAvL2lzIG5vdCB1bmRlciBhIGJyaWNrXG4gICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1UdXJuU3RhcnQsIENvbnN0cy5BbmltVHVybkVuZCwgZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3csIDQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVHVybiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gQ29uc3RzLkRpckxlZnQ7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgLy9ydW5uaW5nXG4gICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5sKSAmJiBUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSkge1xuICAgICAgICAgICAgICAgICAgICAvL25vdCB1bmRlciBhIGJyaWNrXG4gICAgICAgICAgICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUnVuU3RhcnQsIENvbnN0cy5BbmltUnVuRW5kLCB0cnVlLCBDb25zdHMuQW5pbUxlZnRSb3csIDIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIENvbnN0cy5BbmltQ3JvdWNoRW5kLCB0cnVlLCBDb25zdHMuQW5pbUxlZnRSb3csIDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVMZWZ0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9oaXQgYW4gaWNlXG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICYmICh0aGlzLmNvb3JuZXJzLmwgPT09IENvbnN0cy5PYmplY3RJY2UgfHwgdGhpcy5jb29ybmVycy5sID09PSBDb25zdHMuT2JqZWN0TWV0YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2NsaW1iXG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmwpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnVsKSAmJiAhdGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LENvbnN0cy5BbmltUHVzaFN0YXJ0LGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3cpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVXAsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJpZ2h0KCkge1xuICAgICAgICBpZiAoIXRoaXMubW92aW5nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXJyZWN0aW9uICE9PSBDb25zdHMuRGlyUmlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVR1cm5TdGFydCwgQ29uc3RzLkFuaW1UdXJuRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCxDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVUdXJuLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSBDb25zdHMuRGlyUmlnaHQ7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5yKSAmJiBUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51cikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVJ1blN0YXJ0LCBDb25zdHMuQW5pbVJ1bkVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgMik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgQ29uc3RzLkFuaW1Dcm91Y2hFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVSaWdodCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSAmJiAodGhpcy5jb29ybmVycy5yID09PSBDb25zdHMuT2JqZWN0SWNlIHx8IHRoaXMuY29vcm5lcnMuciA9PT0gQ29uc3RzLk9iamVjdE1ldGFsKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnB1c2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudXIpICYmICF0aGlzLm1vdmluZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1QdXNoU3RhcnQsQ29uc3RzLkFuaW1QdXNoU3RhcnQsZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3cpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVXAsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1cm4oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBDb25zdHMuTW92ZVJpcCkge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheU9uY2UoJ2RhbmdlcicpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVJpcCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1SaXBTdGFydCxDb25zdHMuQW5pbVJpcEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnRybygpIHtcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQmlnRmFsbFN0YXJ0LENvbnN0cy5BbmltQmlnRmFsbEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVMZXZlbEVudGVyLCB0cnVlKTtcbiAgICB9XG5cbiAgICBvdXRybygpIHtcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltRmFsbFN0YXJ0LCBDb25zdHMuQW5pbUJpZ0ZhbGxFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlTGV2ZWxFeGl0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xuICAgIH1cblxuICAgIGRvUmlwKCkge1xuXG4gICAgfVxuXG4gICAgZ3Jhdml0eSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvb3JuZXJzLmQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVyb3IoJ3VuZGVmaW5lZCBjb29ybmVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZhbGxDb3VudGVyID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheU9uY2UoXCJmYWxsaW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1CaWdGYWxsU3RhcnQsIENvbnN0cy5BbmltQmlnRmFsbEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQmlnRmFsbFN0YXJ0LCBDb25zdHMuQW5pbUJpZ0ZhbGxFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQuc3RvcChcImZhbGxpbmdcIik7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENvbnN0cy5Nb3ZlRG93bikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmYWxsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTI0LCAyMzgsIDY2JywgMTAsICAwLjc1KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUsIHRoaXMueXRpbGUgKyAxLCAnMTIyLCAyMTEsIDI1NScsIDUsICAxLjI1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29vcm5lcnMuZCA9PT0gQ29uc3RzLk9iamVjdEphcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBqYXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqYXIgJiYgamFyLm9uRmlyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idXJuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLmRyKSAmJiB0aGlzLmNvb3JuZXJzLmRyICE9PSBDb25zdHMuT2JqZWN0RmlyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsQ29uc3RzLkFuaW1JY2VFbmQsZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZU1ha2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29vcm5lcnMuZHIgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LENvbnN0cy5BbmltSWNlRW5kLGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VSZW1vdmUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsQ29uc3RzLkFuaW1JY2VFbmQsZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZUZhaWwsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy5kbCkgJiYgKHRoaXMuY29vcm5lcnMuZGwgIT09IENvbnN0cy5PYmplY3RGaXJlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsQ29uc3RzLkFuaW1JY2VFbmQsZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTWFrZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb29ybmVycy5kbCA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsQ29uc3RzLkFuaW1JY2VFbmQsZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlUmVtb3ZlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LENvbnN0cy5BbmltSWNlRW5kLGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3csIDQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZUZhaWwsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAganVtcCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1vdmluZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnIpICYmICFUaWxlLmlzU29saWQodGhpcy5jb29ybmVycy51cikgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVB1c2hTdGFydCxDb25zdHMuQW5pbVB1c2hTdGFydCxmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVVcCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMubCkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvb3JuZXJzLnVsKSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LENvbnN0cy5BbmltUHVzaFN0YXJ0LGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3cpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVXAsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvUnVuKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkICogdGhpcy5kaXJyZWN0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvVHVybigpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvT3V0cm8oKSB7XG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xuICAgICAgICBpZiAodGhpcy5jb3VudGVyICUgMTAgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJDb3VudGVyICs9IDE7XG4gICAgICAgICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzEyNCwgMjM4LCA2NicsIDE1LCAgMC41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gMykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMjU1LCAxMzUsIDEyNCcsIDIwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTIyLCAyMTEsIDI1NScsIDI1LCAgMS41KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciAlIDIgPT09IDAgJiYgdGhpcy5pbm5lckNvdW50ZXIgPCA2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnY2xpbWInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgJSAyID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnkgKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueSAtPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA+PSA2KSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdzdGF0ZS1sZWF2ZScpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5uZXh0TGV2ZWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvSW50cm8oKSB7XG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xuICAgICAgICBpZiAodGhpcy5jb3VudGVyID09PSA4KSB7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzEyNCwgMjM4LCA2NicsIDIwLCAgMC41KTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMjU1LCAxMzUsIDEyNCcsIDE1LCAxKTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMTIyLCAyMTEsIDI1NScsIDEwLCAgMS41KTtcbiAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ3N0YWdlLWVudGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+PSAzMikge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQuc3RvcChcImZhbGxpbmdcIik7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvR3Jhdml0eSgpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICAgICAgICAgIHRoaXMuZmFsbENvdW50ZXIrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvU3RhbmQoKSB7XG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29vcm5lcnMudSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YW5kQ291bnRlcisrID4gNTAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltU2xlZXBTdGFydCxDb25zdHMuQW5pbVNsZWVwRW5kLHRydWUsIHRoaXMuZGlycmVjdGlvbiAhPT0gMSA/IENvbnN0cy5BbmltTGVmdFJvdyA6IENvbnN0cy5BbmltUmlnaHRSb3csIDQ4LCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltU3RhbmRTdGFydCxDb25zdHMuQW5pbVN0YW5kRW5kLHRydWUsIHRoaXMuZGlycmVjdGlvbiAhPT0gMSA/IENvbnN0cy5BbmltTGVmdFJvdyA6IENvbnN0cy5BbmltUmlnaHRSb3csIDgsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgZmFsc2UsIHRoaXMuZGlycmVjdGlvbiAhPT0gMSA/IENvbnN0cy5BbmltTGVmdFJvdyA6IENvbnN0cy5BbmltUmlnaHRSb3csIDgsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9VcCgpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gMTgpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jb3VudGVyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdjbGltYicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSwgdGhpcy55dGlsZSwgJzEyNCwgMjM4LCA2NicsIDEwLCAgMC43NSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlLCAnMjU1LCAxMzUsIDEyNCcsIDUsIDEuMjUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1QdXNoRW5kLCBDb25zdHMuQW5pbVB1c2hFbmQsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3cpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUp1bXBTdGFydCwgQ29uc3RzLkFuaW1KdW1wU3RhcnQsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3cpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gOCAqIHRoaXMuZGlycmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55IC09IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSnVtcEVuZCwgQ29uc3RzLkFuaW1KdW1wRW5kLCBmYWxzZSwgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcnJlY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSAtPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFuaW0oMiwgMiwgZmFsc2UsIHRoaXMuZGlycmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0ID8gQ29uc3RzLkFuaW1SaWdodFJvdyA6IENvbnN0cy5BbmltTGVmdFJvdyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJyZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgLT0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltU3RhbmQsIENvbnN0cy5BbmltU3RhbmQsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3cpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gOCAqIHRoaXMuZGlycmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55IC09IDg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2VJY2UoKSB7XG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ25ldy1pY2UnKTtcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkSWNlQmxvY2sodGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSsxKTtcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUgKyAxKTtcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUgKyAxLCAnMTI0LCAyMTQsIDI1NScsIDUpO1xuICAgIH1cblxuICAgIHJlbW92ZUljZUJsb2NrKCkge1xuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtcmVtb3ZlJyk7XG4gICAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUljZUJsb2NrKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUrMSk7XG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlICsgMSk7XG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnh0aWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlICsgMSwgJzEyNCwgMjE0LCAyNTUnLCA1KTtcbiAgICB9XG5cbiAgICBwdXNoKCkge1xuICAgICAgICBsZXQgaWNlID0gIHRoaXMuZW5naW5lLmljZUF0KHRoaXMueHRpbGUrdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnl0aWxlKTtcbiAgICAgICAgaWYgKGljZSAmJiBpY2UuY2FuR2xpZGUodGhpcy5kaXJyZWN0aW9uKSkge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUsICcyNTUsIDI1NSwgMjU1JywgMyk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSwgJzEyNCwgMjE0LCAyNTUnLCAzLCAxLjUpO1xuICAgICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LCBDb25zdHMuQW5pbVB1c2hFbmQsIGZhbHNlLCB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3csIDMpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVB1c2gsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9QdXNoKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMjtcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA+IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xuICAgICAgICAgICAgY29uc3QgaWNlID0gIHRoaXMuZW5naW5lLmljZUF0KHRoaXMueHRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueXRpbGUpO1xuICAgICAgICAgICAgaWYgKGljZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1wdXNoJyk7XG4gICAgICAgICAgICAgICAgaWNlLnB1c2godGhpcy5kaXJyZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9JY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBDb25zdHMuTW92ZUljZU1ha2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VJY2UoKTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUljZUJsb2NrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3VudGVyICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvRmFpbEljZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA9PT0gOCkge1xuICAgICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWRpc2FibGVkJyk7XG4gICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54dGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55dGlsZSArIDEsICc4OCw2Niw2NicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY291bnRlciArPSAxO1xuICAgICAgICBpZiAodGhpcy5jb3VudGVyID49IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb2xsaXNpb25zKCkge1xuICAgICAgICBpZiAodGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUsIHRoaXMueXRpbGUsIENvbnN0cy5PYmplY3RQbGF5ZXIpID09PSBDb25zdHMuT2JqZWN0RmlyZSkge1xuICAgICAgICAgICAgdGhpcy5idXJuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlICgpIHtcbiAgICAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgICAgIHRoaXMuY29sbGlzaW9ucygpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gQ29uc3RzLk1vdmVTdGFuZCkge1xuICAgICAgICAgICAgdGhpcy5zdGFuZENvdW50ZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBDb25zdHMuTW92ZURvd24pIHtcbiAgICAgICAgICAgIHRoaXMuZmFsbENvdW50ZXIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZVJpZ2h0OlxuICAgICAgICAgICAgICAgIHRoaXMuZG9SdW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVMZWZ0OlxuICAgICAgICAgICAgICAgIHRoaXMuZG9SdW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxuICAgICAgICAgICAgICAgIHRoaXMuZG9HcmF2aXR5KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlVXA6XG4gICAgICAgICAgICAgICAgdGhpcy5kb1VwKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlVHVybjpcbiAgICAgICAgICAgICAgICB0aGlzLmRvVHVybigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZUljZU1ha2U6XG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlUmVtb3ZlOlxuICAgICAgICAgICAgICAgIHRoaXMuZG9JY2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VGYWlsOlxuICAgICAgICAgICAgICAgIHRoaXMuZG9GYWlsSWNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlU3RhbmQ6XG4gICAgICAgICAgICAgICAgdGhpcy5kb1N0YW5kKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlUHVzaDpcbiAgICAgICAgICAgICAgICB0aGlzLmRvUHVzaCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZVJpcDpcbiAgICAgICAgICAgICAgICB0aGlzLmRvUmlwKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENvbnN0cy5Nb3ZlTGV2ZWxFeGl0OlxuICAgICAgICAgICAgICAgIHRoaXMuZG9PdXRybygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDb25zdHMuTW92ZUxldmVsRW50ZXI6XG4gICAgICAgICAgICAgICAgdGhpcy5kb0ludHJvKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUmVzb3VyY2VzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlZmluaXRpb25zID0gW107XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0geyB9O1xuICAgICAgICB0aGlzLmxvYWRlZCA9IDA7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgICAgICBpZiAoY2FudmFzKSB7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGQodHlwZSwgbmFtZSwgc3JjKSB7XG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbnMucHVzaCh7dHlwZTogdHlwZSwgbmFtZTogbmFtZSwgc3JjOiBzcmN9KTtcbiAgICB9XG5cbiAgICBnZXQobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXNbbmFtZV07XG4gICAgfVxuXG4gICAgY2hlY2soY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuY3R4KSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCg1MCwgMjUwLCB0aGlzLmxvYWRlZCAqIDQ1MCAvIHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLCA0MCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubG9hZGVkID09PSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlYWR5KGNhbGxiYWNrKSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzb3VyY2Ugb2YgdGhpcy5kZWZpbml0aW9ucykge1xuICAgICAgICAgICAgaWYgKHJlc291cmNlLnR5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2soY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IHJlc291cmNlLnNyYztcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlc1tyZXNvdXJjZS5uYW1lXSA9IGltYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc291cmNlLnR5cGUgPT09J2F1ZGlvJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVzb3VyY2UubmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQgKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlc1tyZXNvdXJjZS5uYW1lXSA9IGF1ZGlvO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2soY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRnJvc3QgfSBmcm9tICcuL3N0cnVjdCc7XG5pbXBvcnQgeyBGaXJlIH0gZnJvbSAnLi9maXJlJztcbmltcG9ydCB7IEljZSB9IGZyb20gJy4vaWNlJztcbmltcG9ydCB7IEphciB9IGZyb20gJy4vamFyJztcbmltcG9ydCB7IE1ldGFsIH0gZnJvbSAnLi9tZXRhbCc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSAnLi90aWxlbWFwJztcbmltcG9ydCB7IGxldmVscyB9IGZyb20gJy4vbGV2ZWxzJztcblxuZXhwb3J0IGNsYXNzIFNjZW5lIHtcblxuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhLm1hcCA9IHRoaXMuZW5naW5lLm1hcC5tYXA7XG4gICAgICAgIGRhdGEudGhlbWUgPSB0aGlzLmVuZ2luZS5tYXAudGhlbWU7XG4gICAgICAgIGRhdGEuc3ByaXRlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiB0aGlzLmVuZ2luZS5zcHJpdGVzKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSAodHlwZW9mIHNwcml0ZS5sZW5ndGggPT09IFwidW5kZWZpbmVkXCIpID8gMSA6IHNwcml0ZS5sZW5ndGg7XG4gICAgICAgICAgICB2YWx1ZSA9IHNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEphciA/IHNwcml0ZS5vbkZpcmUgOiB2YWx1ZTtcbiAgICAgICAgICAgIGxldCBmbCwgZnI7XG4gICAgICAgICAgICBpZiAoc3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SWNlKSB7XG4gICAgICAgICAgICAgICAgZmwgPSBzcHJpdGUuZnJvemVuLmxlZnQ7XG4gICAgICAgICAgICAgICAgZnIgPSBzcHJpdGUuZnJvemVuLnJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5zcHJpdGVzLnB1c2goe1xuICAgICAgICAgICAgICAgIFwiaWRcIjogc3ByaXRlLmlkLFxuICAgICAgICAgICAgICAgIFwieFwiOiBzcHJpdGUueHRpbGUsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IHNwcml0ZS55dGlsZSxcbiAgICAgICAgICAgICAgICBcInZcIjogdmFsdWUsXG4gICAgICAgICAgICAgICAgXCJmbFwiOiBmbCxcbiAgICAgICAgICAgICAgICBcImZyXCI6IGZyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGxvYWQoaW5kZXgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsZXZlbHNbaW5kZXhdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5naW5lLmxldmVsID0gaW5kZXg7XG4gICAgICAgIGNvbnN0IGxldmVsID0gbGV2ZWxzW2luZGV4XTtcbiAgICAgICAgdGhpcy5lbmdpbmUuc3ByaXRlcyA9IFtdO1xuICAgICAgICB0aGlzLmVuZ2luZS5tYXAgPSBuZXcgVGlsZU1hcCh0aGlzLmVuZ2luZSwgbGV2ZWwubWFwLCBsZXZlbC50aGVtZSk7XG4gICAgICAgIGZvciAoY29uc3Qgc3ByaXRlIG9mIGxldmVsLnNwcml0ZXMpIHtcbiAgICAgICAgICAgIHN3aXRjaChzcHJpdGUuaWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RQbGF5ZXI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZSh0aGlzLmVuZ2luZS5wbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RJY2U6XG4gICAgICAgICAgICAgICAgICAgIGxldCBmcm96ZW4gPSBuZXcgRnJvc3QodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3ByaXRlLmZsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvemVuLmxlZnQgPSBzcHJpdGUuZmw7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm96ZW4ucmlnaHQgPSBzcHJpdGUuZnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKG5ldyBJY2UodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSwgcGFyc2VJbnQoc3ByaXRlLnYpLCBmcm96ZW4pKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0TWV0YWw6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShuZXcgTWV0YWwodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSwgMSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RGaXJlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IEZpcmUodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RKYXI6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGphciA9IG5ldyBKYXIodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzcHJpdGUudiA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqYXIudHVybk9uRmlyZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShqYXIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XG5pbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xuY2xhc3MgUGFydGljbGUge1xuXG4gICAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCBjb2xvciwgaW50ZW5jaXR5KSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykgPyAnMjU1LDI1NSwyNTUnIDogY29sb3I7XG4gICAgICAgIHRoaXMuciA9IDM7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMudnggPSAoTWF0aC5yYW5kb20oKSAqIDQgLSAyKSAqIGludGVuY2l0eTtcbiAgICAgICAgdGhpcy52eSA9IChNYXRoLnJhbmRvbSgpICogNiAtIDQpICogaW50ZW5jaXR5O1xuICAgICAgICB0aGlzLnNwZWVkID0gMC4xNTtcbiAgICAgICAgdGhpcy5saWZlID0gMjU1O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBjb25zdCBvcGFjaXR5ID0gdGhpcy5saWZlIC8gMjU1O1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoJyArIHRoaXMuY29sb3IrICcsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yLCAwLCBNYXRoLlBJKjIsIHRydWUpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZ4O1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eTtcbiAgICAgICAgdGhpcy52eSArPSB0aGlzLnNwZWVkO1xuICAgICAgICB0aGlzLmxpZmUgLT0gNTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcGFya3MgZXh0ZW5kcyBTcHJpdGUge1xuXG4gICAgY29uc3RydWN0b3IgKGVuZ2luZSwgdHgsIHR5LCBjb2xvciwgbGVuZ3RoLCBpbnRlbmNpdHkpIHtcbiAgICAgICAgc3VwZXIobnVsbCwgZW5naW5lLCB0eCwgdHksIDMyLCAzMik7XG4gICAgICAgIHRoaXMuY29sb3IgPSAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykgPyAnMjU1LDI1NSwyNTUnIDogY29sb3I7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gKHR5cGVvZiBsZW5ndGggPT09ICd1bmRlZmluZWQnKSA/IDEwIDogbGVuZ3RoO1xuICAgICAgICB0aGlzLmludGVuY2l0eSA9ICh0eXBlb2YgaW50ZW5jaXR5ID09PSAndW5kZWZpbmVkJykgPyAxIDogaW50ZW5jaXR5O1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldID0gbmV3IFBhcnRpY2xlKHRoaXMuZW5naW5lLmN0eCwgdHgqQ29uc3RzLlRpbGVXaWR0aCsxNiwgdHkqQ29uc3RzLlRpbGVXaWR0aCsxNiwgdGhpcy5jb2xvciwgdGhpcy5pbnRlbmNpdHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUuY3R4LnNhdmUoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0uZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5naW5lLmN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgZW5naW5lTW92ZSgpIHtcbiAgICAgICAgdGhpcy5tb3ZlKCk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0ubW92ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFydGljbGVzW2ldLmxpZmUgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnBhcnRpY2xlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VsZigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlU2VsZigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZ2luZS5zZnhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmdpbmUuc2Z4c1tpXSA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lLnNmeHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tICcuL2VuZ2luZSc7XG5cbmV4cG9ydCBjbGFzcyBTb3VuZCB7XG5cdGNvbnN0cnVjdG9yKHJlc291cmNlcykge1xuXHRcdHRoaXMucmVzb3VyY2VzID0gcmVzb3VyY2VzO1xuXHRcdHRoaXMubXVzaWNPbiA9IHRydWU7XG5cdFx0dGhpcy5zb3VuZE9uID0gdHJ1ZTtcblxuXHRcdHRoaXMuc2Z4Vm9sdW1lID0gMC4zO1xuXHRcdHRoaXMuc2Z4ID0ge1xuXHRcdFx0XCJmaXJlLW9mZlwiOiByZXNvdXJjZXMuZ2V0KCdzZngtZmlyZS1vZmYnKSxcblx0XHRcdFwiaWNlLXB1c2hcIjogcmVzb3VyY2VzLmdldCgnc2Z4LWljZS1wdXNoJyksXG5cdFx0XHRcImZhbGxcIjogcmVzb3VyY2VzLmdldCgnc2Z4LWZhbGwnKSxcblx0XHRcdFwiZmFsbGluZ1wiOiByZXNvdXJjZXMuZ2V0KCdzZngtZmFsbGluZycpLFxuXHRcdFx0XCJuZXctaWNlXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1uZXctaWNlJyksXG5cdFx0XHRcImNsaW1iXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1jbGltYicpLFxuXHRcdFx0XCJpY2UtY29sbGlzaW9uXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1pY2UtY29sbGlzaW9uJyksXG5cdFx0XHRcInN0YWdlLWVudGVyXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1zdGFnZS1lbnRlcicpLFxuXHRcdFx0XCJkYW5nZXJcIjogcmVzb3VyY2VzLmdldCgnc2Z4LWRhbmdlcicpLFxuXHRcdFx0XCJpY2UtcmVtb3ZlXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1pY2UtcmVtb3ZlJyksXG5cdFx0XHRcInN0YXRlLWxlYXZlXCI6IHJlc291cmNlcy5nZXQoJ3NmeC1zdGF0ZS1sZWF2ZScpLFxuXHRcdFx0XCJpY2UtZGlzYWJsZWRcIjogcmVzb3VyY2VzLmdldCgnc2Z4LWRpc2FibGVkJylcblx0XHR9O1xuXHR9XG5cblx0cGxheShzZngpIHtcblx0XHRpZiAoIXRoaXMuc291bmRPbikgcmV0dXJuO1xuXHRcdHRoaXMuc2Z4W3NmeF0udm9sdW1lID0gdGhpcy5zZnhWb2x1bWU7XG5cdFx0dGhpcy5zZnhbc2Z4XS5jdXJyZW50VGltZSA9IDA7XG5cdFx0dGhpcy5zZnhbc2Z4XS5wbGF5KCkuY2F0Y2goKCk9Pnt9KTtcblx0fVxuXG5cdHBsYXlPbmNlKHNmeCkge1xuXHRcdGlmICghdGhpcy5zZnhbc2Z4XS5wYXVzZWQpIHJldHVybjtcblx0XHRpZiAoIXRoaXMuc291bmRPbikgcmV0dXJuO1xuXHRcdHRoaXMuc2Z4W3NmeF0udm9sdW1lID0gdGhpcy5zZnhWb2x1bWU7XG5cdFx0dGhpcy5zZnhbc2Z4XS5jdXJyZW50VGltZSA9IDA7XG5cdFx0dGhpcy5zZnhbc2Z4XS5wbGF5KCkuY2F0Y2goKCk9Pnt9KTtcblx0fVxuXG5cdHN0b3Aoc2Z4KSB7XG5cdFx0dGhpcy5zZnhbc2Z4XS5wYXVzZSgpO1xuXHRcdHRoaXMuc2Z4W3NmeF0uY3VycmVudFRpbWUgPSAwO1xuXHR9XG5cblx0c291bmRyYWNrKCkge1xuXHRcdGlmICghdGhpcy5tdXNpY09uKSByZXR1cm47XG5cdFx0dGhpcy5tdXNpYyA9IHRoaXMucmVzb3VyY2VzLmdldCgnc2Z4LW11c2ljLXNwYXJrcycpO1xuXHRcdHRoaXMubXVzaWMubXV0ZWQgPSBmYWxzZTtcblx0XHR0aGlzLm11c2ljLnZvbHVtZSA9IDAuMjtcblx0XHR0aGlzLm11c2ljLmxvb3AgPSB0cnVlO1xuXHRcdHRoaXMubXVzaWMucGxheSgpLmNhdGNoKCgpPT57fSk7XG5cdH1cbn0iLCJpbXBvcnQgeyBDb25zdHMgfSAgZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuL3N0cnVjdCc7XG5cbmV4cG9ydCBjbGFzcyBTcHJpdGUge1xuICAgIC8qKlxuICAgICAqIEJhc2UgY2xhc3Mgb2YgdGhlIHNwcml0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgICBFbmdpbmUgRW5naW5lXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR4ICAgICBQb3NpdGlvbiB0aWxlIHggaW4gdGhlIG1hcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eSAgICAgUG9zaXRpb24gdGlsZSB5IGluIHRoZSBtYXBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggIFdpZHRoIG9mIHRoZSBzcHJpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiB0aGUgc3ByaXRlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaWQsIGVuZ2luZSwgdHgsIHR5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuY3R4ID0gZW5naW5lLmN0eDtcbiAgICAgICAgdGhpcy5jb29ybmVycyA9IG5ldyBQb3NpdGlvbigpO1xuICAgICAgICB0aGlzLnNvbGlkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3BlZWQgPSA0O1xuICAgICAgICB0aGlzLnN0YXRlID0gQ29uc3RzLk1vdmVTdGFuZDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gMDtcbiAgICAgICAgdGhpcy54dGlsZSA9IHR4O1xuICAgICAgICB0aGlzLnl0aWxlID0gdHk7XG4gICAgICAgIHRoaXMueCA9IHRoaXMueHRpbGUgKiBDb25zdHMuVGlsZVdpZHRoO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLnl0aWxlICogQ29uc3RzLlRpbGVXaWR0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBzcHJpdGUgc3RhdGVzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXRlICBDb25zdGFudCBvZiB0aGUgc3RhdGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1vdmluZyBUcnVlIGlmIHNwcml0ZSBpcyBtb3ZpbmdcbiAgICAgKi9cbiAgICBzZXRTdGF0ZShzdGF0ZSwgbW92aW5nKSB7XG4gICAgICAgIHRoaXMubW92aW5nID0gKHR5cGVvZiBtb3ZpbmcgPT09ICd1bmRlZmluZWQnKSA/IGZhbHNlIDogbW92aW5nO1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgfVxuXG4gICAgZ2V0VGlsZSh0eCwgdHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5naW5lLm1hcC5nZXRUaWxlKHR4LCB0eSk7XG4gICAgfVxuXG4gICAgaXNTcHJpdGVBdCAodHgsIHR5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnh0aWxlID09PSB0eCAmJiB0aGlzLnl0aWxlID09PSB0eTtcbiAgICB9XG5cbiAgICBzcHJpdGVUeXBlQXQodHgsIHR5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodHgsIHR5KTtcbiAgICB9XG5cbiAgICB1cGRhdGVDb29ybmVycygpIHtcbiAgICAgICAgdGhpcy5jb29ybmVycy51ID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSwgdGhpcy55dGlsZSAtIDEpO1xuICAgICAgICB0aGlzLmNvb3JuZXJzLmQgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlLCB0aGlzLnl0aWxlICsgMSk7XG4gICAgICAgIHRoaXMuY29vcm5lcnMubCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUgLSAxLCB0aGlzLnl0aWxlKTtcbiAgICAgICAgdGhpcy5jb29ybmVycy5yID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSArIDEsIHRoaXMueXRpbGUpO1xuICAgICAgICB0aGlzLmNvb3JuZXJzLnVsID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSAtIDEsIHRoaXMueXRpbGUgLSAxKTtcbiAgICAgICAgdGhpcy5jb29ybmVycy51ciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueHRpbGUgKyAxLCB0aGlzLnl0aWxlIC0gMSk7XG4gICAgICAgIHRoaXMuY29vcm5lcnMuZGwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnh0aWxlIC0gMSwgdGhpcy55dGlsZSArIDEpO1xuICAgICAgICB0aGlzLmNvb3JuZXJzLmRyID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54dGlsZSArIDEsIHRoaXMueXRpbGUgKyAxKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgdGhpcy54dGlsZSA9IE1hdGguZmxvb3IodGhpcy54IC8gQ29uc3RzLlRpbGVXaWR0aCk7XG4gICAgICAgIHRoaXMueXRpbGUgPSBNYXRoLmZsb29yKHRoaXMueSAvIENvbnN0cy5UaWxlV2lkdGgpO1xuICAgIH1cblxuICAgIG1vdmUgKCkgeyB9XG5cbiAgICBlbmdpbmVNb3ZlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNvb3JuZXJzKCk7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxufVxuIiwiLyoqXG4qIFN0b3JlcyBwb3NpdGlvbiBvZiB0aGUgY29ybmVycyBhbmQgdmVydGljZXNcbiovXG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnUgPSAwO1xuICAgICAgICB0aGlzLmQgPSAwO1xuICAgICAgICB0aGlzLmwgPSAwO1xuICAgICAgICB0aGlzLnIgPSAwO1xuICAgICAgICB0aGlzLnVsID0gMDtcbiAgICAgICAgdGhpcy51ciA9IDA7XG4gICAgICAgIHRoaXMuZGwgPSAwO1xuICAgICAgICB0aGlzLmRyID0gMDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb29yIHtcbiAgICBjb25zdHJ1Y3RvciAodHgsIHR5KSB7XG4gICAgICAgIHRoaXMueHRpbGUgPSB0eDtcbiAgICAgICAgdGhpcy55dGlsZSA9IHR5O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZyb3N0IHtcbiAgICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCkge1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gIGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIFRpbGVNYXAge1xuICAgIC8qKlxuICAgICAqIFRpbGVtYXAgY2xhc3NcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZW5naW5lIEVuZ2luZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtYXAgIE1hdHJpeCBvZiB0aGUgbWFwXG4gICAgICovXG5cbiAgICBjb25zdHJ1Y3RvcihlbmdpbmUsIG1hcCwgdGhlbWUpIHtcbiAgICAgICAgdGhpcy5jdHggPSBlbmdpbmUuY3R4O1xuICAgICAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcbiAgICAgICAgdGhpcy50aWxlV2lkdGggPSBDb25zdHMuVGlsZVdpZHRoO1xuICAgICAgICB0aGlzLnRpbGVIZWlnaHQgPSBDb25zdHMuVGlsZVdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubWFwLmxlbmd0aCAtIDE7XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLm1hcFswXS5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLnRpbGVzSW1hZ2UgPSB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCd0aWxlbWFwJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNvbnRlbnQgb2YgdGhlIHRpbGUgaW5zaWRlIHRoZSBtYXRyaXhcbiAgICAgKiBpZiBwb3NpdGlvbiBvdXQgb2YgYm91bmRzIHJldHVybnMgQ29uc3RzLk9CSkVDVF9PVVRcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHkgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IHggcG9zaXRpb25cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9ICAgQ29udGVudCBvZiB0aGUgdGlsZVxuICAgICAqL1xuICAgIGdldFRpbGUoeCwgeSkge1xuICAgICAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+IHRoaXMud2lkdGggfHwgeSA+IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gQ29uc3RzLk9iamVjdE91dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tYXBbeV1beF07XG5cbiAgICB9XG4gICAgLyoqXG4gICAgICogRHJhd3MgdGhlIG1hcFxuICAgICAqIEByZXR1cm4ge25vbmV9XG4gICAgICovXG4gICAgZHJhdygpIHtcblxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMud2lkdGg7ICsraSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gdGhpcy5oZWlnaHQ7ICsraikge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlVHlwZSA9IENvbnN0cy5UaWxlQmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXBbal1baV0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmdldFRpbGUoaS0xLCBqKSAmJiAhdGhpcy5nZXRUaWxlKGkrMSwgaikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRpbGVCb3RoU2lkZXM7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2V0VGlsZShpLTEsIGopKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlVHlwZSA9IENvbnN0cy5UaWxlTGVmdFNpZGU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2V0VGlsZShpKzEsIGopKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlVHlwZSA9IENvbnN0cy5UaWxlUmlnaHRTaWRlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZU1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlc0ltYWdlLFxuICAgICAgICAgICAgICAgICAgICB0aWxlVHlwZSwgdGhpcy50aGVtZSAqIHRoaXMudGlsZUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgaSAqIHRoaXMudGlsZVdpZHRoLCBqICogdGhpcy50aWxlSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHt9XG5cbiAgICBlbmdpbmVNb3ZlKCkge31cbn1cbiIsImltcG9ydCB7IENvbnN0cyB9ICBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBUaWxlID0gT2JqZWN0LmZyZWV6ZSh7XG4gICB0aWxlczoge1xuICAgICAgICBbQ29uc3RzLk9iamVjdEJhY2tncm91bmRdOiB7XG4gICAgICAgICAgICBzb2xpZDogZmFsc2UsXG4gICAgICAgICAgICBmcmVlemU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFtDb25zdHMuT2JqZWN0T3V0XToge1xuICAgICAgICAgICAgc29saWQ6IHRydWUsXG4gICAgICAgICAgICBmcmVlemU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFtDb25zdHMuT2JqZWN0UGxheWVyXToge1xuICAgICAgICAgICAgc29saWQ6IHRydWUsXG4gICAgICAgICAgICBmcmVlemU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFtDb25zdHMuT2JqZWN0SWNlXToge1xuICAgICAgICAgICAgc29saWQ6IHRydWUsXG4gICAgICAgICAgICBmcmVlemU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFtDb25zdHMuT2JqZWN0TWV0YWxdOiB7XG4gICAgICAgICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgICAgICAgIGZyZWV6ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBbQ29uc3RzLk9iamVjdFdhbGxdOiB7XG4gICAgICAgICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgICAgICAgIGZyZWV6ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBbQ29uc3RzLk9iamVjdEZpcmVdOiB7XG4gICAgICAgICAgICBzb2xpZDogZmFsc2UsXG4gICAgICAgICAgICBmcmVlemU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIFtDb25zdHMuT2JqZWN0SmFyXToge1xuICAgICAgICAgICAgc29saWQ6IHRydWUsXG4gICAgICAgICAgICBmcmVlemU6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpc1NvbGlkOiBmdW5jdGlvbihpZCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZXNbaWRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVTkRFRklORUQgT04gaXNTb2xpZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZXNbaWRdLnNvbGlkO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGlzRnJlZXphYmxlOiBmdW5jdGlvbihpZCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZXNbaWRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVTkRFRklORUQgT04gaXNGcmVlemFibGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVzW2lkXS5mcmVlemU7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=