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
  constructor(
    id,
    engine,
    image,
    tx,
    ty,
    width,
    height,
    offsetX,
    offsetY,
    start,
    end,
    loop
  ) {
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
    once = typeof once === "undefined" ? false : once;
    delay = typeof delay === "undefined" ? _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].AnimDefaultDelay : delay;
    row = typeof row === "undefined" ? this.animRow : row;
    if (!once) {
      this.animStart = start;
      this.animEnd = end;
      this.animCount = start;
      this.animLoop = loop;
      this.animDelay = delay;
      this.animRow = row;
    } else {
      if (
        this.animStart !== start ||
        this.animEnd !== end ||
        this.animLoop !== loop ||
        this.animRow !== row
      ) {
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
      this.width,
      this.height,
      this.x + this.offsetX,
      this.y + this.offsetY,
      this.width,
      this.height
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
    const leftSprite = this.engine.spriteAt(this.xTile - 1, this.yTile);
    if (
      leftSprite &&
      leftSprite.id === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectIce &&
      leftSprite.frozen.right
    ) {
      this.ctx.drawImage(
        this.engine.resources.get("frost"),
        this.xTile * this.width - 7,
        this.yTile * this.height
      );
    }
    const rightSprite = this.engine.spriteAt(this.xTile + 1, this.yTile);
    if (
      rightSprite &&
      rightSprite.id === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectIce &&
      rightSprite.frozen.left
    ) {
      this.ctx.drawImage(
        this.engine.resources.get("frost"),
        (this.xTile + this.length) * this.width - 7,
        this.yTile * this.height
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
    this.ctx = this.canvas.getContext("2d");
    this.sprites = [];
    this.sfxs = [];
    this.player = {};
    this.level = 0;
    this.keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_3__["Keyboard"]();
    this.sound = new _sound__WEBPACK_IMPORTED_MODULE_5__["Sound"](resources);
    this.scene = new _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"](this);
    this.editor = false;
    this.noSpriteMoveCount = 0;
    const level = localStorage.getItem("level");
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
      this.ctx.strokeStyle = "rgba(255,255,255,0.5)";
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
    const fires = this.sprites.filter(
      (sprite) => sprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectFire
    );
    if (
      !fires.length &&
      !this.editor &&
      this.player.state !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveLevelExit
    ) {
      this.player.outro();
    }
  }

  nextLevel() {
    this.level++;
    localStorage.setItem("level", this.level);
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
      if (
        this.sprites[i] &&
        this.sprites[i].id !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectPlayer &&
        this.sprites[i].moving
      ) {
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
      this.sound.stop("danger");
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
    let foundIceBlocks = [];
    for (let i = 0; i < this.sprites.length; i++) {
      if (
        this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce &&
        this.sprites[i].yTile === ty
      ) {
        let ice = this.sprites[i];
        if (ice.xTile - 1 === tx || ice.xTile + ice.length === tx) {
          foundIceBlocks.push(ice);
        }
      }
    }
    if (foundIceBlocks.length === 0) {
      this.sprites.push(new _ice__WEBPACK_IMPORTED_MODULE_2__["Ice"](this, tx, ty, 1));
    } else if (foundIceBlocks.length === 1) {
      foundIceBlocks[0].addBlock(tx);
    } else {
      if (foundIceBlocks[0].xTile <= foundIceBlocks[1].xTile) {
        this.joinIceBlocks(foundIceBlocks[0], foundIceBlocks[1]);
      } else {
        this.joinIceBlocks(foundIceBlocks[1], foundIceBlocks[0]);
      }
    }
  }

  joinIceBlocks(iceblockA, iceblockB) {
    let tx = iceblockA.xTile;
    let ty = iceblockA.yTile;
    let length = iceblockA.length + iceblockB.length + 1;
    this.addSprite(
      new _ice__WEBPACK_IMPORTED_MODULE_2__["Ice"](
        this,
        tx,
        ty,
        length,
        new _struct__WEBPACK_IMPORTED_MODULE_1__["Frost"](iceblockA.frozen.left, iceblockB.frozen.right)
      )
    );
    this.removeSprite(iceblockA);
    this.removeSprite(iceblockB);
  }

  removeIceBlock(tx, ty) {
    for (let i = 0; i < this.sprites.length; i++) {
      if (
        this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce &&
        this.sprites[i].yTile === ty &&
        tx >= this.sprites[i].xTile &&
        tx < this.sprites[i].xTile + this.sprites[i].length
      ) {
        if (this.sprites[i].removeBlock(tx) <= 0) {
          this.sprites.splice(i, 1);
        }
        return;
      }
    }
  }

  removeFire(tx, ty) {
    for (let i = 0; i < this.sprites.length; i++) {
      if (
        this.sprites[i].yTile === ty &&
        tx === this.sprites[i].xTile &&
        this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectFire
      ) {
        this.sprites.splice(i, 1);
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
        this.sprites.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  addSparks(xTile, yTile, color, quantity, intensity) {
    this.sfxs.push(new _sfx__WEBPACK_IMPORTED_MODULE_6__["Sparks"](this, xTile, yTile, color, quantity, intensity));
  }

  spriteTypeAt(tx, ty, excludeId) {
    excludeId = typeof excludeId === "undefined" ? _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectOut : excludeId;
    if (tx < 0 || ty < 0 || tx > this.map.width || ty > this.map.height) {
      return _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectOut;
    }
    if (this.map.map[ty][tx]) {
      return this.map.map[ty][tx];
    } else {
      for (let i = 0; i < this.sprites.length; i++) {
        if (
          this.sprites[i].isSpriteAt(tx, ty) &&
          this.sprites[i].id !== excludeId
        ) {
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
    super(
      _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectFire,
      engine,
      "img_fire",
      tx,
      ty,
      _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TileWidth,
      _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TileWidth,
      0,
      0,
      0,
      3,
      true
    );
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
    if (
      this.engine.spriteTypeAt(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectFire) ===
      _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectIce
    ) {
      this.engine.sound.play("fire-off");
      this.engine.removeFire(this.xTile, this.yTile);
      this.engine.removeIceBlock(this.xTile, this.yTile);
      this.engine.addSparks(this.xTile, this.yTile, "255, 126, 198", 15, 0.5);
      this.engine.addSparks(this.xTile, this.yTile, "124, 212, 255", 10);
    }
    if (
      this.engine.spriteTypeAt(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectFire) ===
      _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectMetal
    ) {
      this.engine.sound.play("fire-off");
      this.engine.removeFire(this.xTile, this.yTile);
      this.engine.addSparks(this.xTile, this.yTile, "255, 222, 127", 15, 0.5);
      this.engine.addSparks(this.xTile, this.yTile, "41, 42, 90", 10);
    }
  }

  gravity() {
    if (!_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.corners.d) && this.corners.d !== _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectFire) {
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







window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.addEventListener("click", () => {
    loader.style.display = "none";
    loader.style.opacity = 0;
    PreloadGame();
    window.firenice = true;
  });
});

function PreloadGame() {
  const resources = new _resources__WEBPACK_IMPORTED_MODULE_5__["Resources"]();
  resources.add("image", "tilemap", "images/tilemap.png");
  resources.add("image", "img_ice", "images/ice.png");
  resources.add("image", "img_jar", "images/jar.png");
  resources.add("image", "img_fire", "images/fire.png");
  resources.add("image", "img_dona", "images/dona.png");
  resources.add("image", "img_intro", "images/intro.png");
  resources.add("image", "img_metal", "images/metal.png");
  resources.add("image", "frost", "images/frozen.png");
  resources.add("audio", "sfx-ice-push", "sounds/sfx-ice-push.mp3");
  resources.add("audio", "sfx-fire-off", "sounds/sfx-fire-off.mp3");
  resources.add("audio", "sfx-falling", "sounds/sfx-falling.mp3");
  resources.add("audio", "sfx-new-ice", "sounds/sfx-new-ice.mp3");
  resources.add("audio", "sfx-climb", "sounds/sfx-climb.mp3");
  resources.add("audio", "sfx-ice-collision", "sounds/sfx-ice-collision.mp3");
  resources.add("audio", "sfx-stage-enter", "sounds/sfx-stage-enter.mp3");
  resources.add("audio", "sfx-danger", "sounds/sfx-danger.mp3");
  resources.add("audio", "sfx-ice-remove", "sounds/sfx-ice-remove.mp3");
  resources.add("audio", "sfx-state-leave", "sounds/sfx-state-leave.mp3");
  resources.add("audio", "sfx-disabled", "sounds/sfx-disabled.mp3");
  resources.add("audio", "sfx-fall", "sounds/sfx-fall.mp3");
  resources.add("audio", "sfx-music-sparks", "music/sparks.mp3");

  resources.ready(() => {
    StartGame(resources);
    CheckEditor();
  });
}

function loadLevelFromEvent(event) {
  let lvl = event.target.getAttribute("lvl");
  game.engine.level = parseInt(lvl, 10);
  game.engine.scene.load(game.engine.level);
}

function StartGame(resources) {
  let canvas = document.getElementById("canvas");
  let game = new _game__WEBPACK_IMPORTED_MODULE_2__["Game"](canvas, resources);
  window.game = game;
  document.querySelectorAll("button.lvl").forEach((btn) => {
    btn.addEventListener("click", loadLevelFromEvent);
  });
  let lvlSelector = document.getElementById("level-selector");
  lvlSelector.style.opacity = 1;
}

function CheckEditor() {
  if (window.FIRENICE_EDITOR_MODE) {
    game.engine.sound.musicOn = false;
    game.engine.sound.soundOn = false;
    game.state = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].GameStatePlay;
    game.engine.editor = true;
    game.engine.keyboard.intro = false;
    game.engine.sound.music.pause();

    canvas.addEventListener("click", (e) => {
      const xTile = Math.floor(e.offsetX / 32);
      const yTile = Math.floor(e.offsetY / 32);
      if (tool < 2) {
        game.engine.map.map[yTile][xTile] = tool;
      } else {
        switch (tool) {
          case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectPlayer:
            game.engine.player.x = xTile * 32;
            game.engine.player.y = yTile * 32;
            break;
          case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce:
            game.engine.addIceBlock(xTile, yTile);
            break;
          case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal:
            game.engine.addSprite(new _metal__WEBPACK_IMPORTED_MODULE_4__["Metal"](game.engine, xTile, yTile, 1));
            break;
          case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectFire:
            game.engine.addSprite(new _fire__WEBPACK_IMPORTED_MODULE_1__["Fire"](game.engine, xTile, yTile));
            break;
          case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar:
            game.engine.addSprite(new _jar__WEBPACK_IMPORTED_MODULE_3__["Jar"](game.engine, xTile, yTile));
            break;
        }
      }
    });

    document
      .getElementById("theme-selector")
      .addEventListener("change", (e) => {
        game.engine.map.theme = parseInt(e.target.value, 10);
        e.target.blur();
      });

    document.getElementById("btn-save").addEventListener("click", () => {
      document.getElementById("txt-level").value = JSON.stringify(
        game.engine.scene.save()
      );
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
   * @param {*} canvas   The canvas element
   * @param {*} resources  Game resources
   */
  constructor(canvas, resources) {
    this.engine = new _engine__WEBPACK_IMPORTED_MODULE_2__["Engine"](canvas, resources);
    this.levels = _levels__WEBPACK_IMPORTED_MODULE_3__["levels"];
    this.state = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].GameStatePlay;
    this.engine.sound.soundtrack();
    this.gameLoop = this.gameLoop_.bind(this); // jshint ignore:line
    this.gameLoop();
  }

  gameLoop_() {
    switch (this.state) {
      case _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].GameStateIntro:
        this.doIntro();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].GameStatePlay:
        this.engine.draw();
        this.engine.move();
        break;
    }
    window.requestAnimationFrame(this.gameLoop);
  }

  createIntro() {
    this.intro = new _animsprite__WEBPACK_IMPORTED_MODULE_0__["AnimSprite"](
      null,
      this.engine,
      "img_intro",
      0,
      0,
      544,
      416,
      0,
      0,
      0,
      0,
      false
    );
    this.start = new _animsprite__WEBPACK_IMPORTED_MODULE_0__["AnimSprite"](
      null,
      this.engine,
      "img_start",
      7,
      11,
      140,
      26,
      -10,
      0,
      0,
      1,
      true
    );
    this.start.animDelay = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].AnimDefaultDelay * 20;
  }

  doIntro() {
    this.intro.draw();
    this.start.draw();

    if (this.engine.keyboard.enter) {
      this.engine.keyboard.enter = false;
      this.state = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].GameStatePlay;
      this.engine.sound.soundtrack();
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
    super(
      _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce,
      engine,
      "img_ice",
      tx,
      ty,
      _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth,
      _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth,
      0,
      0,
      0,
      1,
      true
    );
    this.xTile = tx;
    this.yTile = ty;
    this.length = length;
    this.animEnd = 1;
    this.animDelay = 9;
    this.animRow = 0;
    this.dirrection = 0;
    this.falling = false;
    if (typeof frozen !== "undefined") {
      this.frozen = frozen;
    } else {
      this.frozen = new _struct__WEBPACK_IMPORTED_MODULE_3__["Frost"](false, false);
      this.updateCorners();
      this.checkFreeze();
    }
  }

  addBlock(tx) {
    const spriteTypeAtLeftCorner = this.engine.spriteTypeAt(tx - 1, this.yTile);
    const spriteTypeAtRightCorner = this.engine.spriteTypeAt(
      this.xTile + this.length + 1,
      this.yTile
    );
    if (tx > this.xTile) {
      if (
        this.getTile(tx + 1, this.yTile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectWall ||
        spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal ||
        spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar
      ) {
        this.frozen.right = true;
      }
    }

    if (tx < this.xTile) {
      this.xTile = tx;
      if (
        this.getTile(tx - 1, this.yTile) === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectWall ||
        spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal ||
        spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar
      ) {
        this.frozen.left = true;
      }
    }
    this.x = this.xTile * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth;
    this.length += 1;
  }

  isSpriteAt(tx, ty) {
    if (this.yTile === ty) {
      if (tx >= this.xTile && tx < this.xTile + this.length) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  removeBlock(tx) {
    if (tx === this.xTile) {
      this.xTile += 1;
      this.x += _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth;
      this.length -= 1;
      this.checkUnfreezeLeft();
    } else if (tx === this.xTile + this.length - 1) {
      this.length -= 1;
      this.checkUnfreezeRight();
    } else {
      this.engine.addSprite(
        new Ice(
          this.engine,
          tx + 1,
          this.yTile,
          this.xTile + this.length - tx - 1,
          new _struct__WEBPACK_IMPORTED_MODULE_3__["Frost"](false, this.frozen.right)
        )
      );
      this.length = tx - this.xTile;
      this.checkUnfreezeRight();
    }
    return this.length;
  }

  canGlide(dir) {
    if (this.length !== 1 || this.frozen.left || this.frozen.right) {
      return false;
    }
    if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].DirLeft && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.corners.l)) {
      return false;
    }
    if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].DirRight && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.corners.r)) {
      return false;
    }
    return true;
  }

  isFrozen() {
    return this.frozen.left || this.frozen.right;
  }

  gravity() {
    if (!_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.corners.d) && !this.isFrozen()) {
      this.falling = true;
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveDown, true);
      return true;
    }
    if (this.falling) {
      this.falling = false;
      this.engine.sound.play("ice-collision");
    }
    return false;
  }

  collision() {
    if (!this.canGlide(this.dirrection)) {
      this.dirrection = 0;
      this.engine.sound.play("ice-collision");
      return true;
    }
    return false;
  }

  move() {
    for (let i = 0; i < this.length; i++) {
      let tile_down = this.spriteTypeAt(this.xTile + i, this.yTile + 1);
      if (tile_down && tile_down !== _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectFire) {
        this.corners.d = tile_down;
      }
    }
    this.corners.r = this.spriteTypeAt(this.xTile + this.length, this.yTile);

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
        this.image,
        0,
        _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * this.animRow,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
    } else if (this.length === 2) {
      this.ctx.drawImage(
        this.image,
        _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth,
        _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * this.animRow,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.image,
        3 * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth,
        _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * this.animRow,
        this.width,
        this.height,
        this.x + _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth,
        this.y,
        this.width,
        this.height
      );
    } else {
      this.ctx.drawImage(
        this.image,
        _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth,
        _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * this.animRow,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
      this.ctx.drawImage(
        this.image,
        3 * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth,
        _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * this.animRow,
        this.width,
        this.height,
        this.x + _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * (this.length - 1),
        this.y,
        this.width,
        this.height
      );
      for (let i = 1; i < this.length - 1; i++) {
        this.ctx.drawImage(
          this.image,
          2 * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth,
          _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * this.animRow,
          this.width,
          this.height,
          this.x + _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth * i,
          this.y,
          this.width,
          this.height
        );
      }
    }
    if (this.frozen.left) {
      this.ctx.drawImage(
        this.engine.resources.get("frost"),
        this.xTile * this.width - 7,
        this.yTile * this.height
      );
    }
    if (this.frozen.right) {
      this.ctx.drawImage(
        this.engine.resources.get("frost"),
        (this.xTile + this.length) * this.width - 7,
        this.yTile * this.height
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
    this.dirrection = typeof dir === "undefined" ? this.dirrection : dir;
    if (!this.collision() && !this.gravity()) {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveIceMoving, true);
    } else {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveStand, false);
    }
  }

  checkFreeze() {
    if (_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isFreezable(this.corners.l)) {
      this.frozen.left = true;
    } else {
      this.frozen.left = false;
    }
    if (_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isFreezable(this.corners.r)) {
      this.frozen.right = true;
    } else {
      this.frozen.right = false;
    }
  }

  checkUnfreezeLeft() {
    if (this.frozen.left && !_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isFreezable(this.corners.l)) {
      this.frozen.left = false;
    }
  }

  checkUnfreezeRight() {
    if (this.frozen.right && !_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isFreezable(this.corners.r)) {
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
    super(
      _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectJar,
      engine,
      "img_jar",
      tx,
      ty,
      _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TileWidth,
      _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TileWidth,
      0,
      0,
      0,
      3,
      true
    );
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
    if (!this.onFire && this.corners.u === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectFire) {
      this.turnOnFire();
      this.engine.removeFire(this.xTile, this.yTile - 1);
    }
    if (this.onFire && this.corners.u === _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].ObjectIce) {
      this.meltIce();
    }
  }

  gravity() {
    if (!this.corners.d) {
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
    this.engine.sound.play("fire-off");
    this.engine.addSparks(this.xTile, this.yTile - 1, "255, 88, 33", 30);
  }

  meltIce() {
    this.engine.removeIceBlock(this.xTile, this.yTile - 1);
    this.engine.addSparks(this.xTile, this.yTile - 1, "255, 88, 33", 20);
    this.engine.addSparks(this.xTile, this.yTile - 1, "122, 211, 255", 10);
    this.engine.sound.play("fire-off");
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
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 0,
    sprites: [
      { id: 7, x: 11, y: 4, v: 1 },
      { id: 3, x: 5, y: 9, v: 1 },
      { id: 3, x: 5, y: 8, v: 1 },
      { id: 3, x: 5, y: 7, v: 1 },
      { id: 3, x: 5, y: 6, v: 1 },
      { id: 6, x: 6, y: 4, v: 1 },
      { id: 3, x: 8, y: 4, v: 1 },
      { id: 6, x: 7, y: 9, v: 1 },
      { id: 6, x: 7, y: 8, v: 1 },
      { id: 6, x: 7, y: 7, v: 1 },
      { id: 6, x: 9, y: 10, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 1,
    sprites: [
      { id: 7, x: 3, y: 7, v: 1 },
      { id: 6, x: 6, y: 7, v: 1 },
      { id: 3, x: 4, y: 7, v: 1 },
      { id: 3, x: 10, y: 5, v: 4 },
      { id: 6, x: 12, y: 8, v: 1 },
      { id: 6, x: 12, y: 7, v: 1 },
      { id: 6, x: 12, y: 6, v: 1 },
      { id: 6, x: 13, y: 8, v: 1 },
      { id: 3, x: 11, y: 8, v: 1 },
      { id: 3, x: 11, y: 7, v: 1 },
      { id: 3, x: 11, y: 6, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 2,
    sprites: [
      { id: 7, x: 14, y: 6, v: 1 },
      { id: 6, x: 10, y: 9, v: 1 },
      { id: 3, x: 5, y: 4, v: 1 },
      { id: 6, x: 9, y: 6, v: 1 },
      { id: 6, x: 9, y: 5, v: 1 },
      { id: 3, x: 11, y: 6, v: 1 },
      { id: 3, x: 11, y: 5, v: 1 },
      { id: 3, x: 8, y: 6, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 0,
    sprites: [
      { id: 7, x: 8, y: 9, v: 1 },
      { id: 6, x: 12, y: 8, v: 1 },
      { id: 6, x: 13, y: 7, v: 1 },
      { id: 6, x: 11, y: 9, v: 1 },
      { id: 3, x: 6, y: 8, v: 5 },
      { id: 3, x: 10, y: 9, v: 1 },
      { id: 3, x: 10, y: 7, v: 3 },
      { id: 3, x: 12, y: 6, v: 2 },
      { id: 3, x: 6, y: 9, v: 1 },
      { id: 3, x: 4, y: 7, v: 3 },
      { id: 3, x: 3, y: 6, v: 2 },
      { id: 6, x: 5, y: 9, v: 1 },
      { id: 6, x: 4, y: 8, v: 1 },
      { id: 6, x: 3, y: 7, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [
      { id: 7, x: 11, y: 8, v: 1 },
      { id: 3, x: 10, y: 10, v: 3 },
      { id: 3, x: 10, y: 9, v: 3 },
      { id: 3, x: 7, y: 7, v: 1 },
      { id: 3, x: 3, y: 5, v: 1 },
      { id: 3, x: 9, y: 7, v: 1 },
      { id: 6, x: 3, y: 10, v: 1 },
      { id: 3, x: 3, y: 4, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 5,
    sprites: [
      { id: 7, x: 13, y: 3, v: 1 },
      { id: 3, x: 3, y: 4, v: 1, fl: false, fr: false },
      { id: 3, x: 6, y: 6, v: 1, fl: false, fr: false },
      { id: 3, x: 8, y: 6, v: 1, fl: false, fr: false },
      { id: 3, x: 10, y: 6, v: 1, fl: false, fr: false },
      { id: 3, x: 2, y: 8, v: 13, fl: true, fr: false },
      { id: 6, x: 2, y: 7, v: 1 },
      { id: 6, x: 3, y: 10, v: 1 },
      { id: 6, x: 4, y: 10, v: 1 },
      { id: 6, x: 5, y: 10, v: 1 },
      { id: 6, x: 6, y: 10, v: 1 },
      { id: 6, x: 7, y: 10, v: 1 },
      { id: 6, x: 8, y: 10, v: 1 },
      { id: 6, x: 9, y: 10, v: 1 },
      { id: 6, x: 10, y: 10, v: 1 },
      { id: 6, x: 11, y: 10, v: 1 },
      { id: 6, x: 12, y: 10, v: 1 },
      { id: 6, x: 13, y: 10, v: 1 },
      { id: 6, x: 14, y: 10, v: 1 },
      { id: 3, x: 14, y: 4, v: 1, fl: true, fr: true },
      { id: 3, x: 2, y: 5, v: 1, fl: true, fr: true },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 1,
    sprites: [
      { id: 7, x: 12, y: 4, v: 1 },
      { id: 6, x: 8, y: 10, v: 1 },
      { id: 6, x: 9, y: 11, v: 1 },
      { id: 6, x: 10, y: 11, v: 1 },
      { id: 3, x: 8, y: 5, v: 5 },
      { id: 3, x: 10, y: 4, v: 1 },
      { id: 3, x: 6, y: 6, v: 1 },
      { id: 6, x: 6, y: 5, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 1,
    sprites: [
      { id: 7, x: 8, y: 6, v: 1 },
      { id: 6, x: 5, y: 10, v: 1 },
      { id: 6, x: 6, y: 10, v: 1 },
      { id: 6, x: 7, y: 10, v: 1 },
      { id: 6, x: 8, y: 10, v: 1 },
      { id: 6, x: 9, y: 10, v: 1 },
      { id: 6, x: 10, y: 10, v: 1 },
      { id: 3, x: 11, y: 10, v: 2 },
      { id: 3, x: 5, y: 9, v: 7 },
      { id: 6, x: 5, y: 8, v: 1 },
      { id: 3, x: 11, y: 6, v: 1 },
      { id: 6, x: 11, y: 5, v: 1 },
      { id: 3, x: 6, y: 5, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [
      { id: 7, x: 5, y: 4, v: 1 },
      { id: 6, x: 5, y: 8, v: 1 },
      { id: 3, x: 8, y: 5, v: 1 },
      { id: 3, x: 8, y: 4, v: 1 },
      { id: 6, x: 11, y: 8, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 10,
    sprites: [
      { id: 7, x: 3, y: 4, v: 1 },
      { id: 6, x: 2, y: 6, v: 1 },
      { id: 6, x: 3, y: 7, v: 1 },
      { id: 6, x: 4, y: 8, v: 1 },
      { id: 6, x: 5, y: 9, v: 1 },
      { id: 6, x: 6, y: 10, v: 1 },
      { id: 6, x: 7, y: 10, v: 1 },
      { id: 6, x: 8, y: 9, v: 1 },
      { id: 6, x: 9, y: 8, v: 1 },
      { id: 6, x: 10, y: 7, v: 1 },
      { id: 6, x: 11, y: 6, v: 1 },
      { id: 3, x: 2, y: 5, v: 10 },
      { id: 3, x: 5, y: 4, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [
      { id: 7, x: 3, y: 3, v: 1 },
      { id: 6, x: 13, y: 10, v: 1 },
      { id: 6, x: 5, y: 10, v: 1 },
      { id: 6, x: 6, y: 10, v: 1 },
      { id: 6, x: 7, y: 10, v: 1 },
      { id: 3, x: 4, y: 4, v: 1 },
      { id: 3, x: 6, y: 3, v: 2 },
      { id: 3, x: 11, y: 3, v: 2 },
      { id: 6, x: 9, y: 3, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 7,
    sprites: [
      { id: 7, x: 8, y: 5, v: 1 },
      { id: 6, x: 6, y: 5, v: 1 },
      { id: 3, x: 10, y: 5, v: 1 },
      { id: 3, x: 2, y: 3, v: 2 },
      { id: 3, x: 14, y: 4, v: 1 },
      { id: 3, x: 14, y: 4, v: 1 },
      { id: 3, x: 13, y: 3, v: 1 },
      { id: 6, x: 14, y: 3, v: 1 },
      { id: 6, x: 11, y: 10, v: 1 },
      { id: 6, x: 5, y: 10, v: 1 },
      { id: 6, x: 12, y: 9, v: 1 },
      { id: 6, x: 2, y: 9, v: 1 },
      { id: 6, x: 6, y: 9, v: 1 },
      { id: 6, x: 7, y: 9, v: 1 },
      { id: 6, x: 8, y: 9, v: 1 },
      { id: 6, x: 9, y: 9, v: 1 },
      { id: 6, x: 10, y: 9, v: 1 },
      { id: 6, x: 13, y: 9, v: 1 },
      { id: 3, x: 3, y: 9, v: 1 },
      { id: 3, x: 3, y: 8, v: 11 },
      { id: 6, x: 4, y: 9, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 2,
    sprites: [
      { id: 7, x: 12, y: 3, v: 1 },
      { id: 4, x: 10, y: 3, v: 1 },
      { id: 6, x: 7, y: 3, v: 1 },
      { id: 6, x: 10, y: 7, v: 1 },
      { id: 6, x: 8, y: 10, v: 1 },
      { id: 4, x: 7, y: 7, v: 1 },
      { id: 4, x: 10, y: 10, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 5,
    sprites: [
      { id: 7, x: 2, y: 3, v: 1 },
      { id: 6, x: 4, y: 3, v: 1 },
      { id: 6, x: 5, y: 3, v: 1 },
      { id: 4, x: 3, y: 3, v: 1 },
      { id: 6, x: 14, y: 10, v: 1 },
      { id: 6, x: 13, y: 10, v: 1 },
      { id: 6, x: 11, y: 10, v: 1 },
      { id: 6, x: 12, y: 10, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [
      { id: 7, x: 8, y: 4, v: 1 },
      { id: 5, x: 6, y: 11, v: 1 },
      { id: 6, x: 5, y: 9, v: 1 },
      { id: 6, x: 8, y: 10, v: 1 },
      { id: 4, x: 7, y: 4, v: 1 },
    ],
  },
  {
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    theme: 1,
    sprites: [
      { id: 7, x: 10, y: 6, v: 1 },
      { id: 3, fl: false, fr: false, x: 10, y: 10, v: 1 },
      { id: 3, fl: false, fr: false, x: 6, y: 9, v: 5 },
      { id: 3, fl: false, fr: false, x: 7, y: 8, v: 1 },
      { id: 3, fl: false, fr: false, x: 6, y: 7, v: 5 },
      { id: 3, fl: false, fr: false, x: 6, y: 5, v: 5 },
      { id: 6, x: 6, y: 10, v: 1 },
      { id: 6, x: 10, y: 8, v: 1 },
      { id: 6, x: 6, y: 6, v: 1 },
      { id: 6, x: 10, y: 4, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 7,
    sprites: [
      { id: 3, x: 11, y: 7, v: 1, fl: true, fr: true },
      { id: 3, x: 9, y: 7, v: 1, fl: true, fr: true },
      { id: 4, x: 10, y: 7, v: 1 },
      { id: 6, x: 10, y: 8, v: 1 },
      { id: 6, x: 4, y: 8, v: 1 },
      { id: 7, x: 7, y: 5, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1],
      [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1],
      [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [
      { id: 7, x: 4, y: 4, v: 1 },
      { id: 6, x: 13, y: 7, v: 1 },
      { id: 4, x: 7, y: 8, v: 1 },
      { id: 6, x: 3, y: 8, v: 1 },
      { id: 3, x: 6, y: 7, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 1,
    sprites: [
      { id: 7, x: 8, y: 8, v: 1 },
      { id: 6, x: 5, y: 8, v: 1 },
      { id: 3, x: 5, y: 7, v: 3, fl: true, fr: false },
      { id: 3, x: 7, y: 8, v: 1, fl: false, fr: false },
      { id: 6, x: 10, y: 6, v: 1 },
      { id: 3, x: 6, y: 6, v: 1, fl: false, fr: false },
      { id: 3, x: 6, y: 5, v: 3, fl: false, fr: false },
      { id: 3, x: 9, y: 5, v: 1, fl: false, fr: false },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 2,
    sprites: [
      { id: 7, x: 6, y: 4, v: 1 },
      { id: 6, x: 8, y: 5, v: 1 },
      { id: 6, x: 9, y: 10, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 9,
    sprites: [
      { id: 7, x: 4, y: 3, v: 1 },
      { id: 3, x: 6, y: 4, v: 1, fl: true, fr: true },
      { id: 3, x: 8, y: 4, v: 1, fl: true, fr: true },
      { id: 3, x: 10, y: 4, v: 4, fl: true, fr: true },
      { id: 6, x: 8, y: 3, v: 1 },
      { id: 4, x: 11, y: 9, v: 1 },
      { id: 4, x: 5, y: 9, v: 1 },
      { id: 6, x: 3, y: 9, v: 1 },
      { id: 6, x: 13, y: 9, v: 1 },
      { id: 5, x: 8, y: 10, v: false },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 0,
    sprites: [
      { id: 7, x: 10, y: 5, v: 1 },
      { id: 3, x: 7, y: 6, v: 4, fl: true, fr: true },
      { id: 6, x: 7, y: 5, v: 1 },
      { id: 6, x: 8, y: 5, v: 1 },
      { id: 6, x: 9, y: 5, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 0,
    sprites: [
      { id: 7, x: 8, y: 5, v: 1 },
      { id: 5, x: 6, y: 10, v: true },
      { id: 5, x: 5, y: 7, v: true },
      { id: 5, x: 8, y: 8, v: true },
      { id: 6, x: 5, y: 6, v: 1 },
      { id: 6, x: 6, y: 9, v: 1 },
      { id: 6, x: 8, y: 7, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
      [1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1],
      [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1],
      [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
      [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 4,
    sprites: [
      { id: 7, x: 8, y: 7, v: 1 },
      { id: 3, x: 6, y: 6, v: 1, fl: false, fr: true },
      { id: 3, x: 4, y: 7, v: 1, fl: true, fr: false },
      { id: 3, x: 4, y: 5, v: 1, fl: true, fr: false },
      { id: 6, x: 6, y: 9, v: 1 },
      { id: 6, x: 9, y: 9, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [
      { id: 7, x: 9, y: 11, v: 1 },
      { id: 5, x: 10, y: 8, v: true },
      { id: 6, x: 14, y: 11, v: 1 },
      { id: 4, x: 11, y: 2, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1],
      [1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 8,
    sprites: [
      { id: 7, x: 12, y: 4, v: 1 },
      { id: 5, x: 11, y: 7, v: true },
      { id: 4, x: 10, y: 6, v: 1 },
      { id: 6, x: 9, y: 10, v: 1 },
      { id: 6, x: 11, y: 6, v: 1 },
      { id: 6, x: 9, y: 6, v: 1 },
      { id: 6, x: 14, y: 6, v: 1 },
      { id: 3, x: 9, y: 5, v: 4, fl: true, fr: false },
      { id: 3, x: 9, y: 4, v: 1, fl: false, fr: false },
    ],
  },
  {
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    theme: 8,
    sprites: [
      { id: 7, x: 3, y: 1, v: 1 },
      { id: 4, x: 4, y: 2, v: 1 },
      { id: 4, x: 2, y: 2, v: 1 },
      { id: 3, x: 3, y: 2, v: 1, fl: true, fr: true },
      { id: 6, x: 4, y: 3, v: 1 },
      { id: 6, x: 2, y: 3, v: 1 },
      { id: 4, x: 6, y: 5, v: 1 },
      { id: 3, x: 7, y: 5, v: 1, fl: true, fr: false },
      { id: 3, x: 5, y: 5, v: 1, fl: false, fr: true },
      { id: 4, x: 4, y: 8, v: 1 },
      { id: 4, x: 2, y: 8, v: 1 },
      { id: 3, x: 3, y: 8, v: 1, fl: true, fr: true },
      { id: 6, x: 4, y: 9, v: 1 },
      { id: 6, x: 2, y: 9, v: 1 },
      { id: 6, x: 7, y: 6, v: 1 },
      { id: 6, x: 5, y: 6, v: 1 },
      { id: 4, x: 10, y: 8, v: 1 },
      { id: 4, x: 8, y: 8, v: 1 },
      { id: 3, x: 9, y: 8, v: 1, fl: true, fr: true },
      { id: 6, x: 9, y: 9, v: 1 },
      { id: 4, x: 12, y: 5, v: 1 },
      { id: 3, x: 13, y: 5, v: 1, fl: true, fr: false },
      { id: 3, x: 11, y: 5, v: 1, fl: false, fr: true },
      { id: 6, x: 12, y: 6, v: 1 },
      { id: 6, x: 9, y: 3, v: 1 },
      { id: 4, x: 10, y: 2, v: 1 },
      { id: 4, x: 8, y: 2, v: 1 },
      { id: 3, x: 9, y: 2, v: 1, fl: true, fr: true },
    ],
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
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    sprites: [
      { id: 7, x: 13, y: 2, v: 1 },
      { id: 3, x: 4, y: 4, v: 8 },
      { id: 3, x: 11, y: 3, v: 4 },
      { id: 6, x: 3, y: 5, v: 1 },
      { id: 6, x: 4, y: 6, v: 1 },
      { id: 6, x: 5, y: 7, v: 1 },
      { id: 6, x: 10, y: 6, v: 1 },
      { id: 6, x: 11, y: 5, v: 1 },
      { id: 6, x: 14, y: 10, v: 1 },
      { id: 6, x: 14, y: 9, v: 1 },
      { id: 6, x: 2, y: 10, v: 1 },
      { id: 6, x: 9, y: 8, v: 1 },
      { id: 6, x: 2, y: 9, v: 1 },
      { id: 6, x: 8, y: 8, v: 1 },
      { id: 6, x: 7, y: 8, v: 1 },
      { id: 6, x: 6, y: 8, v: 1 },
      { id: 6, x: 8, y: 10, v: 1 },
      { id: 6, x: 7, y: 10, v: 1 },
    ],
    theme: 8,
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [{ id: 7, x: 14, y: 10, v: 1 }],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
      [1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 9,
    sprites: [
      { id: 7, x: 10, y: 11, v: 1 },
      { id: 6, x: 8, y: 1, v: 1 },
      { id: 5, x: 4, y: 11, v: 1 },
      { id: 6, x: 8, y: 5, v: 1 },
    ],
  },
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
    super(
      _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal,
      engine,
      "img_metal",
      tx,
      ty,
      _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth,
      _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth,
      0,
      0,
      0,
      1,
      true
    );
    this.xTile = tx;
    this.yTile = ty;
    this.length = length;
    this.animDelay = 9;
    this.dirrection = 0;
    this.falling = false;
  }

  canGlide(dir) {
    if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].DirLeft && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.corners.l)) {
      return false;
    }
    if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].DirRight && _tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.corners.r)) {
      return false;
    }
    return true;
  }

  frozenToIce() {
    const rightSprite = this.engine.spriteAt(this.xTile + 1, this.yTile);
    const leftSprite = this.engine.spriteAt(this.xTile - 1, this.yTile);
    return (
      !this.falling &&
      ((rightSprite &&
        rightSprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce &&
        rightSprite.frozen.left) ||
        (leftSprite &&
          leftSprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce &&
          leftSprite.frozen.right))
    );
  }

  gravity() {
    if (!_tiles__WEBPACK_IMPORTED_MODULE_2__["Tile"].isSolid(this.corners.d) && !this.frozenToIce()) {
      this.falling = true;
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveDown, true);
      return true;
    }
    if (this.falling) {
      this.falling = false;
      this.engine.sound.play("ice-collision");
    }
    return false;
  }

  collision() {
    if (!this.canGlide(this.dirrection)) {
      this.dirrection = 0;
      this.engine.sound.play("ice-collision");
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
    this.dirrection = typeof dir === "undefined" ? this.dirrection : dir;
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
    super(
      _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectPlayer,
      engine,
      "img_dona",
      tx,
      ty,
      48,
      64,
      -10,
      -32,
      2,
      2,
      false
    );
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
        if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.u)) {
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimTurnStart,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimTurnEnd,
            false,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
            4
          );
        } else {
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart,
            false,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow,
            4
          );
        }
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveTurn, true);
        this.dirrection = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirLeft;
      } else {
        //running
        if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.l) && _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.d)) {
          //not under a brick
          if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.ul)) {
            this.setAnim(
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRunStart,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRunEnd,
              true,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow,
              2
            );
          } else {
            this.setAnim(
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchEnd,
              true,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow,
              2
            );
          }
          this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveLeft, true);
        }
        //hit an ice
        if (
          _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.d) &&
          (this.corners.l === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectIce ||
            this.corners.l === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectMetal)
        ) {
          this.push();
        }
        //climb
        if (
          _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.l) &&
          _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.d) &&
          !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.u) &&
          !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.ul) &&
          !this.moving
        ) {
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,
            false,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow
          );
          this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveUp, true);
        }
      }
    }
  }

  right() {
    if (!this.moving) {
      if (this.dirrection !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight) {
        if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.u)) {
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimTurnStart,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimTurnEnd,
            false,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow,
            4
          );
        } else {
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart,
            false,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
            4
          );
        }
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveTurn, true);
        this.dirrection = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight;
      } else {
        if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.r) && _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.d)) {
          if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.ur)) {
            this.setAnim(
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRunStart,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRunEnd,
              true,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
              2
            );
          } else {
            this.setAnim(
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchEnd,
              true,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
              2
            );
          }
          this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveRight, true);
        }
        if (
          _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.d) &&
          (this.corners.r === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectIce ||
            this.corners.r === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectMetal)
        ) {
          this.push();
        }
        if (
          _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.r) &&
          _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.d) &&
          !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.u) &&
          !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.ur) &&
          !this.moving
        ) {
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,
            false,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow
          );
          this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveUp, true);
        }
      }
    }
  }

  burn() {
    if (this.state !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveRip) {
      this.engine.sound.playOnce("danger");
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveRip, true);
      this.setAnim(
        _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRipStart,
        _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRipEnd,
        true,
        _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow
      );
    }
  }

  intro() {
    this.setAnim(
      _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimBigFallStart,
      _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimBigFallEnd,
      true,
      _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
      4
    );
    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveLevelEnter, true);
  }

  outro() {
    this.setAnim(
      _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimFallStart,
      _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimBigFallEnd,
      true,
      _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
      4
    );
    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveLevelExit, true);
    this.innerCounter = 0;
  }

  doRip() {}

  gravity() {
    if (!this.moving) {
      if (typeof this.corners.d === "undefined") {
        console.eror("undefined corner");
      }
      if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.d)) {
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveDown, true);
        if (this.fallCounter >= 1) {
          this.engine.sound.playOnce("falling");
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimBigFallStart,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimBigFallEnd,
            true,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
            1
          );
        } else {
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimBigFallStart,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimBigFallEnd,
            true,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
            3
          );
        }
      } else {
        this.engine.sound.stop("falling");
        if (this.state === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveDown) {
          this.engine.sound.play("fall");
          this.engine.addSparks(
            this.xTile,
            this.yTile,
            "124, 238, 66",
            10,
            0.75
          );
          this.engine.addSparks(
            this.xTile,
            this.yTile + 1,
            "122, 211, 255",
            5,
            1.25
          );
        }
        this.fallCounter = 0;
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand, false);
        if (this.corners.d === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectJar) {
          const jar = this.engine.spriteAt(this.xTile, this.yTile + 1);
          if (jar && jar.onFire) {
            this.burn();
          }
        }
      }
    }
  }

  ice() {
    if (!this.moving) {
      if (_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.d)) {
        if (this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight) {
          if (
            !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.dr) &&
            this.corners.dr !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectFire
          ) {
            this.setAnim(
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceStart,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceEnd,
              false,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
              4
            );
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceMake, true);
          } else if (this.corners.dr === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectIce) {
            this.setAnim(
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceStart,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceEnd,
              false,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
              4
            );
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceRemove, true);
          } else {
            this.setAnim(
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceStart,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceEnd,
              false,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
              4
            );
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceFail, true);
          }
        } else {
          if (
            !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.dl) &&
            this.corners.dl !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectFire
          ) {
            this.setAnim(
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceStart,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceEnd,
              false,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow,
              4
            );
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceMake, true);
          } else if (this.corners.dl === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectIce) {
            this.setAnim(
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceStart,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceEnd,
              false,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow,
              4
            );
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceRemove, true);
          } else {
            this.setAnim(
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceStart,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimIceEnd,
              false,
              _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow,
              4
            );
            this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceFail, true);
          }
        }
      }
    }
  }

  jump() {
    if (!this.moving) {
      if (this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight) {
        if (
          _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.r) &&
          !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.ur) &&
          !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.u)
        ) {
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,
            false,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow
          );
          this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveUp, true);
        }
      } else {
        if (
          _tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.l) &&
          !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.ul) &&
          !_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.u)
        ) {
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,
            false,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow
          );
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
        this.engine.addSparks(this.xTile, this.yTile, "124, 238, 66", 25, 0.5);
      }
      if (this.innerCounter === 3) {
        this.engine.addSparks(this.xTile, this.yTile, "255, 135, 124", 30, 1);
      }
      if (this.innerCounter === 5) {
        this.engine.addSparks(this.xTile, this.yTile, "122, 211, 255", 35, 1.5);
      }
      if (this.innerCounter % 2 === 0 && this.innerCounter < 6) {
        this.engine.sound.play("climb");
      }
    }
    if (this.innerCounter % 2 === 1) {
      this.y += 1;
    } else {
      this.y -= 1;
    }
    if (this.innerCounter >= 6) {
      this.engine.sound.play("state-leave");
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand, false);
      this.engine.nextLevel();
    }
  }

  doIntro() {
    this.counter += 1;
    if (this.counter === 8) {
      this.engine.addSparks(this.xTile, this.yTile, "124, 238, 66", 20, 2.5);
      this.engine.addSparks(this.xTile, this.yTile, "255, 135, 124", 35, 1);
      this.engine.addSparks(this.xTile, this.yTile, "122, 211, 255", 20, 1.5);
      this.engine.sound.play("stage-enter");
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
    if (!_tiles__WEBPACK_IMPORTED_MODULE_1__["Tile"].isSolid(this.corners.u)) {
      if (this.standCounter++ > 500) {
        this.setAnim(
          _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimSleepStart,
          _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimSleepEnd,
          true,
          this.dirrection !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
          48,
          true
        );
      } else {
        this.setAnim(
          _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimStandStart,
          _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimStandEnd,
          true,
          this.dirrection !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
          8,
          true
        );
      }
    } else {
      this.setAnim(
        _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart,
        _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart,
        false,
        this.dirrection !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
        8,
        true
      );
    }
  }

  doUp() {
    this.counter += 1;
    if (this.counter <= 18) {
      switch (this.counter) {
        case 3:
          this.engine.sound.play("climb");
          this.engine.addSparks(
            this.xTile,
            this.yTile,
            "124, 238, 66",
            10,
            0.75
          );
          this.engine.addSparks(
            this.xTile,
            this.yTile,
            "255, 135, 124",
            5,
            1.25
          );
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushEnd,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushEnd,
            false,
            this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight
              ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow
              : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow
          );
          break;
        case 6:
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimJumpStart,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimJumpStart,
            false,
            this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight
              ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow
              : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow
          );
          this.x += 8 * this.dirrection;
          this.y -= 8;
          break;
        case 9:
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimJumpEnd,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimJumpEnd,
            false,
            this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight
              ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow
              : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow
          );
          this.x += 8 * this.dirrection;
          this.y -= 8;
          break;
        case 12:
          this.setAnim(
            2,
            2,
            false,
            this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight
              ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow
              : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow
          );
          this.x += 8 * this.dirrection;
          this.y -= 8;
          break;
        case 18:
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimStand,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimStand,
            false,
            this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight
              ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow
              : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow
          );
          this.x += 8 * this.dirrection;
          this.y -= 8;
          break;
      }
    } else {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand, false);
    }
  }

  makeIce() {
    this.engine.sound.play("new-ice");
    this.engine.addIceBlock(this.xTile + this.dirrection, this.yTile + 1);
    this.engine.addSparks(this.xTile + this.dirrection, this.yTile + 1);
    this.engine.addSparks(
      this.xTile + this.dirrection,
      this.yTile + 1,
      "124, 214, 255",
      5
    );
  }

  removeIceBlock() {
    this.engine.sound.play("ice-remove");
    this.engine.removeIceBlock(this.xTile + this.dirrection, this.yTile + 1);
    this.engine.addSparks(this.xTile + this.dirrection, this.yTile + 1);
    this.engine.addSparks(
      this.xTile + this.dirrection,
      this.yTile + 1,
      "124, 214, 255",
      5
    );
  }

  push() {
    let ice = this.engine.iceAt(this.xTile + this.dirrection, this.yTile);
    if (ice && ice.canGlide(this.dirrection)) {
      this.engine.addSparks(
        this.xTile + this.dirrection,
        this.yTile,
        "255, 255, 255",
        3
      );
      this.engine.addSparks(
        this.xTile + this.dirrection,
        this.yTile,
        "124, 214, 255",
        3,
        1.5
      );
      this.setAnim(
        _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,
        _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushEnd,
        false,
        this.dirrection === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight
          ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow
          : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow,
        3
      );
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MovePush, true);
    }
  }

  doPush() {
    this.counter += 2;
    if (this.counter > _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimFrameCount) {
      const ice = this.engine.iceAt(this.xTile + this.dirrection, this.yTile);
      if (ice) {
        this.engine.sound.play("ice-push");
        ice.push(this.dirrection);
      }
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand, false);
    }
  }

  doIce() {
    if (this.counter === 8) {
      if (this.state === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveIceMake) {
        this.makeIce();
      } else {
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
      this.engine.sound.play("ice-disabled");
      this.engine.addSparks(
        this.xTile + this.dirrection,
        this.yTile + 1,
        "88,66,66"
      );
    }
    this.counter += 1;
    if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimFrameCount) {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand, false);
    }
  }

  collisions() {
    if (
      this.engine.spriteTypeAt(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectPlayer) ===
      _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].ObjectFire
    ) {
      this.burn();
    }
  }

  move() {
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
    this.resources = {};
    this.loaded = 0;
    this.canvas = document.getElementById("canvas");
    if (canvas) {
      this.ctx = this.canvas.getContext("2d");
    }
  }

  add(type, name, src) {
    this.definitions.push({ type: type, name: name, src: src });
  }

  get(name) {
    return this.resources[name];
  }

  check(callback) {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = "#fff";
      this.ctx.fillRect(
        50,
        250,
        (this.loaded * 450) / this.definitions.length,
        40
      );
    }
    if (this.loaded === this.definitions.length) {
      callback();
    }
  }

  ready(callback) {
    for (const resource of this.definitions) {
      if (resource.type === "image") {
        const image = new Image();
        image.addEventListener("load", () => {
          this.loaded += 1;
          this.check(callback);
        });
        image.src = resource.src;
        this.resources[resource.name] = image;
      }
      if (resource.type === "audio") {
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
      let value = typeof sprite.length === "undefined" ? 1 : sprite.length;
      value = sprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar ? sprite.onFire : value;
      let fl, fr;
      if (sprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce) {
        fl = sprite.frozen.left;
        fr = sprite.frozen.right;
      }
      data.sprites.push({
        id: sprite.id,
        x: sprite.xTile,
        y: sprite.yTile,
        v: value,
        fl: fl,
        fr: fr,
      });
    }

    return data;
  }

  load(index) {
    if (typeof _levels__WEBPACK_IMPORTED_MODULE_8__["levels"][index] === "undefined") {
      index = 0;
    }
    this.engine.level = index;
    const level = _levels__WEBPACK_IMPORTED_MODULE_8__["levels"][index];
    this.engine.sprites = [];
    this.engine.map = new _tilemap__WEBPACK_IMPORTED_MODULE_7__["TileMap"](this.engine, level.map, level.theme);
    for (const sprite of level.sprites) {
      switch (sprite.id) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectPlayer:
          this.engine.player = new _player__WEBPACK_IMPORTED_MODULE_6__["Player"](this.engine, sprite.x, sprite.y);
          this.engine.addSprite(this.engine.player);
          break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce:
          let frozen = new _struct__WEBPACK_IMPORTED_MODULE_1__["Frost"](true, true);
          if (typeof sprite.fl !== "undefined") {
            frozen.left = sprite.fl;
            frozen.right = sprite.fr;
          }
          this.engine.addSprite(
            new _ice__WEBPACK_IMPORTED_MODULE_3__["Ice"](this.engine, sprite.x, sprite.y, parseInt(sprite.v), frozen)
          );
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
  constructor(ctx, x, y, color, intensity) {
    this.color = typeof color === "undefined" ? "255,255,255" : color;
    this.r = 3;
    this.x = x;
    this.y = y;
    this.vx = (Math.random() * 4 - 2) * intensity;
    this.vy = (Math.random() * 6 - 4) * intensity;
    this.speed = 0.15;
    this.life = 255;
    this.ctx = ctx;
  }

  draw() {
    const opacity = this.life / 255;
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(" + this.color + "," + opacity + ")";
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
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
  constructor(engine, tx, ty, color, length, intensity) {
    super(null, engine, tx, ty, 32, 32);
    this.color = typeof color === "undefined" ? "255,255,255" : color;
    this.length = typeof length === "undefined" ? 10 : length;
    this.intensity = typeof intensity === "undefined" ? 1 : intensity;
    this.particles = [];
    for (let i = 0; i < this.length; i++) {
      this.particles[i] = new Particle(
        this.engine.ctx,
        tx * _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TileWidth + 16,
        ty * _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].TileWidth + 16,
        this.color,
        this.intensity
      );
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
        this.particles.splice(i, 1);
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
      "fire-off": resources.get("sfx-fire-off"),
      "ice-push": resources.get("sfx-ice-push"),
      fall: resources.get("sfx-fall"),
      falling: resources.get("sfx-falling"),
      "new-ice": resources.get("sfx-new-ice"),
      climb: resources.get("sfx-climb"),
      "ice-collision": resources.get("sfx-ice-collision"),
      "stage-enter": resources.get("sfx-stage-enter"),
      danger: resources.get("sfx-danger"),
      "ice-remove": resources.get("sfx-ice-remove"),
      "state-leave": resources.get("sfx-state-leave"),
      "ice-disabled": resources.get("sfx-disabled"),
    };
  }

  play(sfx) {
    if (!this.soundOn) return;
    this.sfx[sfx].volume = this.sfxVolume;
    this.sfx[sfx].currentTime = 0;
    this.sfx[sfx].play().catch(() => {});
  }

  playOnce(sfx) {
    if (!this.sfx[sfx].paused) return;
    if (!this.soundOn) return;
    this.sfx[sfx].volume = this.sfxVolume;
    this.sfx[sfx].currentTime = 0;
    this.sfx[sfx].play().catch(() => {});
  }

  stop(sfx) {
    this.sfx[sfx].pause();
    this.sfx[sfx].currentTime = 0;
  }

  soundtrack() {
    if (!this.musicOn) return;
    this.music = this.resources.get("sfx-music-sparks");
    this.music.muted = false;
    this.music.volume = 0.2;
    this.music.loop = true;
    this.music.play().catch(() => {});
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
    this.corners = new _struct__WEBPACK_IMPORTED_MODULE_1__["Position"]();
    this.solid = true;
    this.moving = false;
    this.counter = false;
    this.speed = 4;
    this.state = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].MoveStand;
    this.height = height;
    this.width = width;
    this.dirrection = 0;
    this.xTile = tx;
    this.yTile = ty;
    this.x = this.xTile * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth;
    this.y = this.yTile * _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth;
  }
  /**
   * Sets sprite states
   * @param {number} state  Constant of the state
   * @param {boolean} moving True if sprite is moving
   */
  setState(state, moving) {
    this.moving = typeof moving === "undefined" ? false : moving;
    this.state = state;
    this.counter = 0;
  }

  getTile(tx, ty) {
    return this.engine.map.getTile(tx, ty);
  }

  isSpriteAt(tx, ty) {
    return this.xTile === tx && this.yTile === ty;
  }

  spriteTypeAt(tx, ty) {
    return this.engine.spriteTypeAt(tx, ty);
  }

  updateCorners() {
    this.corners.u = this.spriteTypeAt(this.xTile, this.yTile - 1);
    this.corners.d = this.spriteTypeAt(this.xTile, this.yTile + 1);
    this.corners.l = this.spriteTypeAt(this.xTile - 1, this.yTile);
    this.corners.r = this.spriteTypeAt(this.xTile + 1, this.yTile);
    this.corners.ul = this.spriteTypeAt(this.xTile - 1, this.yTile - 1);
    this.corners.ur = this.spriteTypeAt(this.xTile + 1, this.yTile - 1);
    this.corners.dl = this.spriteTypeAt(this.xTile - 1, this.yTile + 1);
    this.corners.dr = this.spriteTypeAt(this.xTile + 1, this.yTile + 1);
  }

  updatePosition() {
    this.xTile = Math.floor(this.x / _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth);
    this.yTile = Math.floor(this.y / _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileWidth);
  }

  move() {}

  engineMove() {
    this.updateCorners();
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
  constructor(tx, ty) {
    this.xTile = tx;
    this.yTile = ty;
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
    this.tilesImage = this.engine.resources.get("tilemap");
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
          if (!this.getTile(i - 1, j) && !this.getTile(i + 1, j)) {
            tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileBothSides;
          } else if (!this.getTile(i - 1, j)) {
            tileType = _constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].TileLeftSide;
          } else if (!this.getTile(i + 1, j)) {
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


const Tile = Object.freeze({
  tiles: {
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectBackground]: {
      solid: false,
      freeze: false,
    },
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectOut]: {
      solid: true,
      freeze: false,
    },
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectPlayer]: {
      solid: true,
      freeze: false,
    },
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectIce]: {
      solid: true,
      freeze: false,
    },
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectMetal]: {
      solid: true,
      freeze: true,
    },
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectWall]: {
      solid: true,
      freeze: true,
    },
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectFire]: {
      solid: false,
      freeze: false,
    },
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Consts"].ObjectJar]: {
      solid: true,
      freeze: true,
    },
  },

  isSolid: function (id) {
    if (typeof this.tiles[id] === "undefined") {
      throw new Error("UNDEFINED ON isSolid");
    } else {
      return this.tiles[id].solid;
    }
  },

  isFreezable: function (id) {
    if (typeof this.tiles[id] === "undefined") {
      throw new Error("UNDEFINED ON isFreezable");
    } else {
      return this.tiles[id].freeze;
    }
  },
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlbmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9sZXZlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21ldGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RydWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9E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Q0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0R0E7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxpREFBaUQ7QUFDeEQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTyw4Q0FBOEM7QUFDckQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw0QkFBNEI7QUFDbkM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyxrREFBa0Q7QUFDekQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTyw4Q0FBOEM7QUFDckQsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw4Q0FBOEM7QUFDckQsT0FBTyw4Q0FBOEM7QUFDckQsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywrQkFBK0I7QUFDdEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw4Q0FBOEM7QUFDckQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw4QkFBOEI7QUFDckMsT0FBTyw2QkFBNkI7QUFDcEMsT0FBTyw2QkFBNkI7QUFDcEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw4QkFBOEI7QUFDckMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw4QkFBOEI7QUFDckMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTyxnREFBZ0Q7QUFDdkQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw4Q0FBOEM7QUFDckQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw4Q0FBOEM7QUFDckQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw4Q0FBOEM7QUFDckQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw4Q0FBOEM7QUFDckQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSw0QkFBNEI7QUFDekMsYUFBYSw2QkFBNkI7QUFDMUMsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0QkFBNEI7QUFDM0MsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNEJBQTRCO0FBQ25DLE9BQU8sMEJBQTBCO0FBQ2pDLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sMEJBQTBCO0FBQ2pDO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDLzRCQTtBQUFBO0FB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bmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2ZpcmVuaWNlLmpzXCIpO1xuIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1TcHJpdGUgZXh0ZW5kcyBTcHJpdGUge1xyXG4gIC8qKlxyXG4gICAqIEFuaW1hdGVkIFNwcml0ZSwgaW5oZXJ0cyBmcm9tIFNwcml0ZS5cclxuICAgKiBBZGRzIGRyYXdpbmcgb2YgcGljdHVyZXMgaW4gdGhlIGJvZHkgb2Ygc3ByaXRlXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGVuZ2luZSAgICBFbmdpbmUgRW5naW5lXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGltYWdlICAgRG9tIGltYWdlIG9iamVjdCAoaW1nIHNyYz0pXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHR4ICAgICAgVGlsZSBYIHBvc2l0aW9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHR5ICAgICAgVGlsZSBZIHBvc2l0aW9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoICAgV2lkdGggb2YgdGhlIHNwcml0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgIEhlaWdodCBvZiB0aGUgc3ByaXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFggT2Zmc2V0IFggb2YgZHJhd2luZyB0aGUgcGljdHVyZSBpbnRvIHRoZSBjYW52YXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0WSBPZmZzZXQgWSBvZiBkcmF3aW5nIHRoZSBwaWN0dXJlIGludG8gdGhlIGNhbnZhc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCAgIEFuaW1hdGlvbiBmcmFtZSBzdGFydFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgICAgIEFuaW1hdGlvbiBmcmFtZSBlbmRcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb3AgICBSZXBlYXQgYW5pbWF0aW9uXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpZCxcclxuICAgIGVuZ2luZSxcclxuICAgIGltYWdlLFxyXG4gICAgdHgsXHJcbiAgICB0eSxcclxuICAgIHdpZHRoLFxyXG4gICAgaGVpZ2h0LFxyXG4gICAgb2Zmc2V0WCxcclxuICAgIG9mZnNldFksXHJcbiAgICBzdGFydCxcclxuICAgIGVuZCxcclxuICAgIGxvb3BcclxuICApIHtcclxuICAgIHN1cGVyKGlkLCBlbmdpbmUsIHR4LCB0eSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLmltYWdlID0gdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldChpbWFnZSk7XHJcbiAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgIHRoaXMuYW5pbVN0YXJ0ID0gc3RhcnQ7XHJcbiAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICB0aGlzLmFuaW1Db3VudCA9IDA7XHJcbiAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5O1xyXG4gICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICB0aGlzLmFuaW1Sb3cgPSAwO1xyXG4gICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WDtcclxuICAgIHRoaXMub2Zmc2V0WSA9IG9mZnNldFk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBzcHJpdGUgYW5pbWF0aW9uIGZyYW1lc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBTdGFydCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCAgIEVuZCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBsb29wICBJZiB0cnVlLCBhbmltYXRpb24gd2lsbCBsb29wXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAgIFJvdyBvZiB0aGUgZnJhbWVzIGluIHRoZSBzcHJpdGUgaW1hZ2VcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgRGVsYXkgYmV0d2VlbiBlYWNoIGZyYW1lXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlICBTZXRzIGFsbCB0aGUgbmV3IHZhbHVlcyBvbmx5IG9uZSB0aW1lLlxyXG4gICAqL1xyXG4gIHNldEFuaW0oc3RhcnQsIGVuZCwgbG9vcCwgcm93LCBkZWxheSwgb25jZSkge1xyXG4gICAgb25jZSA9IHR5cGVvZiBvbmNlID09PSBcInVuZGVmaW5lZFwiID8gZmFsc2UgOiBvbmNlO1xyXG4gICAgZGVsYXkgPSB0eXBlb2YgZGVsYXkgPT09IFwidW5kZWZpbmVkXCIgPyBDb25zdHMuQW5pbURlZmF1bHREZWxheSA6IGRlbGF5O1xyXG4gICAgcm93ID0gdHlwZW9mIHJvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMuYW5pbVJvdyA6IHJvdztcclxuICAgIGlmICghb25jZSkge1xyXG4gICAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICAgIHRoaXMuYW5pbUNvdW50ID0gc3RhcnQ7XHJcbiAgICAgIHRoaXMuYW5pbUxvb3AgPSBsb29wO1xyXG4gICAgICB0aGlzLmFuaW1EZWxheSA9IGRlbGF5O1xyXG4gICAgICB0aGlzLmFuaW1Sb3cgPSByb3c7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5hbmltU3RhcnQgIT09IHN0YXJ0IHx8XHJcbiAgICAgICAgdGhpcy5hbmltRW5kICE9PSBlbmQgfHxcclxuICAgICAgICB0aGlzLmFuaW1Mb29wICE9PSBsb29wIHx8XHJcbiAgICAgICAgdGhpcy5hbmltUm93ICE9PSByb3dcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5hbmltU3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5hbmltQ291bnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgICAgICB0aGlzLmFuaW1EZWxheSA9IGRlbGF5O1xyXG4gICAgICAgIHRoaXMuYW5pbVJvdyA9IHJvdztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBEcmF3cyB0aGUgZnJhbWUgb2YgdGhlIHNwcml0ZSBpbiB0aGUgY2FudmFzXHJcbiAgICovXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgdGhpcy5hbmltQ291bnQgKiB0aGlzLndpZHRoLFxyXG4gICAgICB0aGlzLmFuaW1Sb3cgKiB0aGlzLmhlaWdodCxcclxuICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgIHRoaXMueCArIHRoaXMub2Zmc2V0WCxcclxuICAgICAgdGhpcy55ICsgdGhpcy5vZmZzZXRZLFxyXG4gICAgICB0aGlzLndpZHRoLFxyXG4gICAgICB0aGlzLmhlaWdodFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5hbmltRGVsYXlDb3VudCsrID4gdGhpcy5hbmltRGVsYXkpIHtcclxuICAgICAgdGhpcy5hbmltQ291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMuYW5pbUNvdW50ID4gdGhpcy5hbmltRW5kKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbUxvb3ApIHtcclxuICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gdGhpcy5hbmltU3RhcnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gdGhpcy5hbmltRW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFuaW1EZWxheUNvdW50ID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdGcm9zdCgpIHtcclxuICAgIGNvbnN0IGxlZnRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlIC0gMSwgdGhpcy55VGlsZSk7XHJcbiAgICBpZiAoXHJcbiAgICAgIGxlZnRTcHJpdGUgJiZcclxuICAgICAgbGVmdFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJlxyXG4gICAgICBsZWZ0U3ByaXRlLmZyb3plbi5yaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KFwiZnJvc3RcIiksXHJcbiAgICAgICAgdGhpcy54VGlsZSAqIHRoaXMud2lkdGggLSA3LFxyXG4gICAgICAgIHRoaXMueVRpbGUgKiB0aGlzLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmlnaHRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlICsgMSwgdGhpcy55VGlsZSk7XHJcbiAgICBpZiAoXHJcbiAgICAgIHJpZ2h0U3ByaXRlICYmXHJcbiAgICAgIHJpZ2h0U3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmXHJcbiAgICAgIHJpZ2h0U3ByaXRlLmZyb3plbi5sZWZ0XHJcbiAgICApIHtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoXCJmcm9zdFwiKSxcclxuICAgICAgICAodGhpcy54VGlsZSArIHRoaXMubGVuZ3RoKSAqIHRoaXMud2lkdGggLSA3LFxyXG4gICAgICAgIHRoaXMueVRpbGUgKiB0aGlzLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgQ29uc3RzID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBUaWxlV2lkdGg6IDMyLFxyXG4gICAgTW92ZVN0YW5kOiAwLFxyXG4gICAgTW92ZUxlZnQ6IDEsXHJcbiAgICBNb3ZlUmlnaHQ6IDIsXHJcbiAgICBNb3ZlRG93bjogMyxcclxuICAgIE1vdmVVcDogNCxcclxuICAgIE1vdmVUdXJuOiA1LFxyXG4gICAgTW92ZUljZU1ha2U6IDYsXHJcbiAgICBNb3ZlSWNlUmVtb3ZlOiA3LFxyXG4gICAgTW92ZUljZU1vdmluZzogOCxcclxuICAgIE1vdmVJY2VDaGVjazogOSxcclxuICAgIE1vdmVSaXA6IDEwLFxyXG4gICAgTW92ZVB1c2g6IDgsXHJcbiAgICBNb3ZlSWNlRmFpbDogMTEsXHJcbiAgICBNb3ZlTGV2ZWxFeGl0OiAxMixcclxuICAgIE1vdmVMZXZlbEVudGVyOiAxMyxcclxuICAgIERpckxlZnQ6IC0xLFxyXG4gICAgRGlyUmlnaHQ6IDEsXHJcbiAgICBBbmltRGVmYXVsdERlbGF5OiAyLFxyXG4gICAgQW5pbUZyYW1lQ291bnQ6IDE2LFxyXG4gICAgQW5pbUxlZnRSb3c6IDEsXHJcbiAgICBBbmltUmlnaHRSb3c6IDAsXHJcbiAgICBBbmltUnVuU3RhcnQ6IDAsXHJcbiAgICBBbmltUnVuRW5kOiAzLFxyXG4gICAgQW5pbVN0YW5kOiA0LFxyXG4gICAgQW5pbVR1cm5TdGFydDogNCxcclxuICAgIEFuaW1UdXJuRW5kOiA3LFxyXG4gICAgQW5pbUZhbGxTdGFydDogOCxcclxuICAgIEFuaW1GYWxsRW5kOiA5LFxyXG4gICAgQW5pbUJpZ0ZhbGxTdGFydDogMTAsXHJcbiAgICBBbmltQmlnRmFsbEVuZDogMTEsXHJcbiAgICBBbmltUHVzaFN0YXJ0OiAxMixcclxuICAgIEFuaW1QdXNoRW5kOiAxMyxcclxuICAgIEFuaW1KdW1wU3RhcnQ6IDE0LFxyXG4gICAgQW5pbUp1bXBFbmQ6IDE1LFxyXG4gICAgQW5pbVN0YW5kU3RhcnQ6IDE2LFxyXG4gICAgQW5pbVN0YW5kRW5kOiAxNyxcclxuICAgIEFuaW1JY2VTdGFydDogMTgsXHJcbiAgICBBbmltSWNlRW5kOiAxOSxcclxuICAgIEFuaW1Dcm91Y2hTdGFydDogMjAsXHJcbiAgICBBbmltQ3JvdWNoRW5kOiAyMixcclxuICAgIEFuaW1SaXBTdGFydDogMjMsXHJcbiAgICBBbmltUmlwRW5kOiAyNCxcclxuICAgIEFuaW1TbGVlcFN0YXJ0OiAyNSxcclxuICAgIEFuaW1TbGVlcEVuZDogMjYsXHJcbiAgICBUaWxlQmFja2dyb3VuZDogMCxcclxuICAgIFRpbGVCb3RoU2lkZXM6IDMyLFxyXG4gICAgVGlsZUxlZnRTaWRlOiA2NCxcclxuICAgIFRpbGVNaWRkbGU6IDk2LFxyXG4gICAgVGlsZVJpZ2h0U2lkZTogMTI4LFxyXG4gICAgT2JqZWN0T3V0OiAtMSxcclxuICAgIE9iamVjdEJhY2tncm91bmQ6IDAsXHJcbiAgICBPYmplY3RXYWxsOiAxLFxyXG4gICAgT2JqZWN0SWNlOiAzLFxyXG4gICAgT2JqZWN0TWV0YWw6IDQsXHJcbiAgICBPYmplY3RKYXI6IDUsXHJcbiAgICBPYmplY3RGaXJlOiA2LFxyXG4gICAgT2JqZWN0UGxheWVyOiA3LFxyXG4gICAgR2FtZVN0YXRlUGxheTogMSxcclxuICAgIEdhbWVTdGF0ZUludHJvOiAyXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgRnJvc3QgfSBmcm9tIFwiLi9zdHJ1Y3RcIjtcclxuaW1wb3J0IHsgSWNlIH0gZnJvbSBcIi4vaWNlXCI7XHJcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSBcIi4va2V5Ym9hcmRcIjtcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi9zY2VuZVwiO1xyXG5pbXBvcnQgeyBTb3VuZCB9IGZyb20gXCIuL3NvdW5kXCI7XHJcbmltcG9ydCB7IFNwYXJrcyB9IGZyb20gXCIuL3NmeFwiO1xyXG4vKipcclxuICogRW5naW5lIExvb3BcclxuICovXHJcbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xyXG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgcmVzb3VyY2VzKSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMuY3dpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgdGhpcy5jaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgIHRoaXMucmVzb3VyY2VzID0gcmVzb3VyY2VzO1xyXG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB0aGlzLnNwcml0ZXMgPSBbXTtcclxuICAgIHRoaXMuc2Z4cyA9IFtdO1xyXG4gICAgdGhpcy5wbGF5ZXIgPSB7fTtcclxuICAgIHRoaXMubGV2ZWwgPSAwO1xyXG4gICAgdGhpcy5rZXlib2FyZCA9IG5ldyBLZXlib2FyZCgpO1xyXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBTb3VuZChyZXNvdXJjZXMpO1xyXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBTY2VuZSh0aGlzKTtcclxuICAgIHRoaXMuZWRpdG9yID0gZmFsc2U7XHJcbiAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID0gMDtcclxuICAgIGNvbnN0IGxldmVsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsZXZlbFwiKTtcclxuICAgIGlmIChsZXZlbCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jd2lkdGgsIHRoaXMuY2hlaWdodCk7XHJcbiAgICB0aGlzLm1hcC5kcmF3KCk7XHJcbiAgICAvLyByZXZlcnNlIGxvb3AsIHBsYXllciBkcmF3cyBsYXN0XHJcbiAgICBmb3IgKGxldCBpID0gdGhpcy5zcHJpdGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIHRoaXMuc3ByaXRlc1tpXS5kcmF3KCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Z4cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICB0aGlzLnNmeHNbaV0uZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmVkaXRvcikge1xyXG4gICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCI7XHJcbiAgICAgIHRoaXMuY3R4LnN0cm9rZVdpZHRoID0gMTtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jd2lkdGg7IHggKz0gMzIpIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuY2hlaWdodDsgeSArPSAzMikge1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlUmVjdCh4LCB5LCB4ICsgMzIsIHkgKyAzMik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29sbGlzaW9uKCkge1xyXG4gICAgY29uc3QgZmlyZXMgPSB0aGlzLnNwcml0ZXMuZmlsdGVyKFxyXG4gICAgICAoc3ByaXRlKSA9PiBzcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RGaXJlXHJcbiAgICApO1xyXG4gICAgaWYgKFxyXG4gICAgICAhZmlyZXMubGVuZ3RoICYmXHJcbiAgICAgICF0aGlzLmVkaXRvciAmJlxyXG4gICAgICB0aGlzLnBsYXllci5zdGF0ZSAhPT0gQ29uc3RzLk1vdmVMZXZlbEV4aXRcclxuICAgICkge1xyXG4gICAgICB0aGlzLnBsYXllci5vdXRybygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dExldmVsKCkge1xyXG4gICAgdGhpcy5sZXZlbCsrO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsZXZlbFwiLCB0aGlzLmxldmVsKTtcclxuICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICB0aGlzLnNwcml0ZXNbaV0uZW5naW5lTW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNmeHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgdGhpcy5zZnhzW2ldLmVuZ2luZU1vdmUoKTtcclxuICAgIH1cclxuICAgIGxldCBzcHJpdGVzTW92aW5nID0gZmFsc2U7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5zcHJpdGVzW2ldICYmXHJcbiAgICAgICAgdGhpcy5zcHJpdGVzW2ldLmlkICE9PSBDb25zdHMuT2JqZWN0UGxheWVyICYmXHJcbiAgICAgICAgdGhpcy5zcHJpdGVzW2ldLm1vdmluZ1xyXG4gICAgICApIHtcclxuICAgICAgICBzcHJpdGVzTW92aW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFzcHJpdGVzTW92aW5nKSB7XHJcbiAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgKz0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xyXG4gICAgfVxyXG4gICAgLy8gY2hlY2sgaWYgbm8gc3ByaXRlcyBoYXZlIG1vdmVkIGZvciAyIHR1cm5zXHJcbiAgICBpZiAoIXNwcml0ZXNNb3ZpbmcgJiYgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA+IDEpIHtcclxuICAgICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA9IDA7XHJcbiAgICAgIHRoaXMuaW5wdXQoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY29sbGlzaW9uKCk7XHJcbiAgfVxyXG5cclxuICBpbnB1dCgpIHtcclxuICAgIGlmICh0aGlzLmtleWJvYXJkLmRvd24gfHwgdGhpcy5rZXlib2FyZC5hY3Rpb24pIHtcclxuICAgICAgdGhpcy5wbGF5ZXIuaWNlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5rZXlib2FyZC5sZWZ0KSB7XHJcbiAgICAgIHRoaXMucGxheWVyLmxlZnQoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmtleWJvYXJkLnJpZ2h0KSB7XHJcbiAgICAgIHRoaXMucGxheWVyLnJpZ2h0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5rZXlib2FyZC5lbnRlcikge1xyXG4gICAgICB0aGlzLnNvdW5kLnN0b3AoXCJkYW5nZXJcIik7XHJcbiAgICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcclxuICAgICAgdGhpcy5rZXlib2FyZC5lbnRlciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWNlQXQodHgsIHR5KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlzU3ByaXRlQXQodHgsIHR5KSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFkZEljZUJsb2NrKHR4LCB0eSkge1xyXG4gICAgbGV0IGZvdW5kSWNlQmxvY2tzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5zcHJpdGVzW2ldLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmXHJcbiAgICAgICAgdGhpcy5zcHJpdGVzW2ldLnlUaWxlID09PSB0eVxyXG4gICAgICApIHtcclxuICAgICAgICBsZXQgaWNlID0gdGhpcy5zcHJpdGVzW2ldO1xyXG4gICAgICAgIGlmIChpY2UueFRpbGUgLSAxID09PSB0eCB8fCBpY2UueFRpbGUgKyBpY2UubGVuZ3RoID09PSB0eCkge1xyXG4gICAgICAgICAgZm91bmRJY2VCbG9ja3MucHVzaChpY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGZvdW5kSWNlQmxvY2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnNwcml0ZXMucHVzaChuZXcgSWNlKHRoaXMsIHR4LCB0eSwgMSkpO1xyXG4gICAgfSBlbHNlIGlmIChmb3VuZEljZUJsb2Nrcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgZm91bmRJY2VCbG9ja3NbMF0uYWRkQmxvY2sodHgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGZvdW5kSWNlQmxvY2tzWzBdLnhUaWxlIDw9IGZvdW5kSWNlQmxvY2tzWzFdLnhUaWxlKSB7XHJcbiAgICAgICAgdGhpcy5qb2luSWNlQmxvY2tzKGZvdW5kSWNlQmxvY2tzWzBdLCBmb3VuZEljZUJsb2Nrc1sxXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5qb2luSWNlQmxvY2tzKGZvdW5kSWNlQmxvY2tzWzFdLCBmb3VuZEljZUJsb2Nrc1swXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGpvaW5JY2VCbG9ja3MoaWNlYmxvY2tBLCBpY2VibG9ja0IpIHtcclxuICAgIGxldCB0eCA9IGljZWJsb2NrQS54VGlsZTtcclxuICAgIGxldCB0eSA9IGljZWJsb2NrQS55VGlsZTtcclxuICAgIGxldCBsZW5ndGggPSBpY2VibG9ja0EubGVuZ3RoICsgaWNlYmxvY2tCLmxlbmd0aCArIDE7XHJcbiAgICB0aGlzLmFkZFNwcml0ZShcclxuICAgICAgbmV3IEljZShcclxuICAgICAgICB0aGlzLFxyXG4gICAgICAgIHR4LFxyXG4gICAgICAgIHR5LFxyXG4gICAgICAgIGxlbmd0aCxcclxuICAgICAgICBuZXcgRnJvc3QoaWNlYmxvY2tBLmZyb3plbi5sZWZ0LCBpY2VibG9ja0IuZnJvemVuLnJpZ2h0KVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gICAgdGhpcy5yZW1vdmVTcHJpdGUoaWNlYmxvY2tBKTtcclxuICAgIHRoaXMucmVtb3ZlU3ByaXRlKGljZWJsb2NrQik7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJY2VCbG9jayh0eCwgdHkpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiZcclxuICAgICAgICB0aGlzLnNwcml0ZXNbaV0ueVRpbGUgPT09IHR5ICYmXHJcbiAgICAgICAgdHggPj0gdGhpcy5zcHJpdGVzW2ldLnhUaWxlICYmXHJcbiAgICAgICAgdHggPCB0aGlzLnNwcml0ZXNbaV0ueFRpbGUgKyB0aGlzLnNwcml0ZXNbaV0ubGVuZ3RoXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0ucmVtb3ZlQmxvY2sodHgpIDw9IDApIHtcclxuICAgICAgICAgIHRoaXMuc3ByaXRlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRmlyZSh0eCwgdHkpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLnNwcml0ZXNbaV0ueVRpbGUgPT09IHR5ICYmXHJcbiAgICAgICAgdHggPT09IHRoaXMuc3ByaXRlc1tpXS54VGlsZSAmJlxyXG4gICAgICAgIHRoaXMuc3ByaXRlc1tpXS5pZCA9PT0gQ29uc3RzLk9iamVjdEZpcmVcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFNwcml0ZShzcHJpdGUpIHtcclxuICAgIHRoaXMuc3ByaXRlcy5wdXNoKHNwcml0ZSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5zcHJpdGVzW2ldID09PSBzcHJpdGUpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhZGRTcGFya3MoeFRpbGUsIHlUaWxlLCBjb2xvciwgcXVhbnRpdHksIGludGVuc2l0eSkge1xyXG4gICAgdGhpcy5zZnhzLnB1c2gobmV3IFNwYXJrcyh0aGlzLCB4VGlsZSwgeVRpbGUsIGNvbG9yLCBxdWFudGl0eSwgaW50ZW5zaXR5KSk7XHJcbiAgfVxyXG5cclxuICBzcHJpdGVUeXBlQXQodHgsIHR5LCBleGNsdWRlSWQpIHtcclxuICAgIGV4Y2x1ZGVJZCA9IHR5cGVvZiBleGNsdWRlSWQgPT09IFwidW5kZWZpbmVkXCIgPyBDb25zdHMuT2JqZWN0T3V0IDogZXhjbHVkZUlkO1xyXG4gICAgaWYgKHR4IDwgMCB8fCB0eSA8IDAgfHwgdHggPiB0aGlzLm1hcC53aWR0aCB8fCB0eSA+IHRoaXMubWFwLmhlaWdodCkge1xyXG4gICAgICByZXR1cm4gQ29uc3RzLk9iamVjdE91dDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1hcC5tYXBbdHldW3R4XSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tYXAubWFwW3R5XVt0eF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMuc3ByaXRlc1tpXS5pc1Nwcml0ZUF0KHR4LCB0eSkgJiZcclxuICAgICAgICAgIHRoaXMuc3ByaXRlc1tpXS5pZCAhPT0gZXhjbHVkZUlkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW2ldLmlkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIENvbnN0cy5PYmplY3RCYWNrZ3JvdW5kO1xyXG4gIH1cclxuXHJcbiAgc3ByaXRlQXQodHgsIHR5KSB7XHJcbiAgICBpZiAoIXRoaXMubWFwLm1hcFt0eV1bdHhdKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pc1Nwcml0ZUF0KHR4LCB0eSkpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gXCIuL2FuaW1zcHJpdGVcIjtcclxuaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi90aWxlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpcmUgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSkge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgIENvbnN0cy5PYmplY3RGaXJlLFxyXG4gICAgICBlbmdpbmUsXHJcbiAgICAgIFwiaW1nX2ZpcmVcIixcclxuICAgICAgdHgsXHJcbiAgICAgIHR5LFxyXG4gICAgICBDb25zdHMuVGlsZVdpZHRoLFxyXG4gICAgICBDb25zdHMuVGlsZVdpZHRoLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAzLFxyXG4gICAgICB0cnVlXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbW92ZSgpIHtcclxuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgdGhpcy5jb2xsaXNpb25zKCk7XHJcbiAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgIHRoaXMuZG9Eb3duKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb2xsaXNpb25zKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLk9iamVjdEZpcmUpID09PVxyXG4gICAgICBDb25zdHMuT2JqZWN0SWNlXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheShcImZpcmUtb2ZmXCIpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5yZW1vdmVGaXJlKHRoaXMueFRpbGUsIHRoaXMueVRpbGUpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5yZW1vdmVJY2VCbG9jayh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlKTtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIFwiMjU1LCAxMjYsIDE5OFwiLCAxNSwgMC41KTtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIFwiMTI0LCAyMTIsIDI1NVwiLCAxMCk7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuT2JqZWN0RmlyZSkgPT09XHJcbiAgICAgIENvbnN0cy5PYmplY3RNZXRhbFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoXCJmaXJlLW9mZlwiKTtcclxuICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlRmlyZSh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlKTtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIFwiMjU1LCAyMjIsIDEyN1wiLCAxNSwgMC41KTtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIFwiNDEsIDQyLCA5MFwiLCAxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBncmF2aXR5KCkge1xyXG4gICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmIHRoaXMuY29ybmVycy5kICE9PSBDb25zdHMuT2JqZWN0RmlyZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZG9Eb3duKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcclxuICAgICAgdGhpcy55ICs9IDQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEZpcmUgfSBmcm9tIFwiLi9maXJlXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XHJcbmltcG9ydCB7IEphciB9IGZyb20gXCIuL2phclwiO1xyXG5pbXBvcnQgeyBNZXRhbCB9IGZyb20gXCIuL21ldGFsXCI7XHJcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gXCIuL3Jlc291cmNlc1wiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlclwiKTtcclxuICBsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBsb2FkZXIuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBQcmVsb2FkR2FtZSgpO1xyXG4gICAgd2luZG93LmZpcmVuaWNlID0gdHJ1ZTtcclxuICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBQcmVsb2FkR2FtZSgpIHtcclxuICBjb25zdCByZXNvdXJjZXMgPSBuZXcgUmVzb3VyY2VzKCk7XHJcbiAgcmVzb3VyY2VzLmFkZChcImltYWdlXCIsIFwidGlsZW1hcFwiLCBcImltYWdlcy90aWxlbWFwLnBuZ1wiKTtcclxuICByZXNvdXJjZXMuYWRkKFwiaW1hZ2VcIiwgXCJpbWdfaWNlXCIsIFwiaW1hZ2VzL2ljZS5wbmdcIik7XHJcbiAgcmVzb3VyY2VzLmFkZChcImltYWdlXCIsIFwiaW1nX2phclwiLCBcImltYWdlcy9qYXIucG5nXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJpbWFnZVwiLCBcImltZ19maXJlXCIsIFwiaW1hZ2VzL2ZpcmUucG5nXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJpbWFnZVwiLCBcImltZ19kb25hXCIsIFwiaW1hZ2VzL2RvbmEucG5nXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJpbWFnZVwiLCBcImltZ19pbnRyb1wiLCBcImltYWdlcy9pbnRyby5wbmdcIik7XHJcbiAgcmVzb3VyY2VzLmFkZChcImltYWdlXCIsIFwiaW1nX21ldGFsXCIsIFwiaW1hZ2VzL21ldGFsLnBuZ1wiKTtcclxuICByZXNvdXJjZXMuYWRkKFwiaW1hZ2VcIiwgXCJmcm9zdFwiLCBcImltYWdlcy9mcm96ZW4ucG5nXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJhdWRpb1wiLCBcInNmeC1pY2UtcHVzaFwiLCBcInNvdW5kcy9zZngtaWNlLXB1c2gubXAzXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJhdWRpb1wiLCBcInNmeC1maXJlLW9mZlwiLCBcInNvdW5kcy9zZngtZmlyZS1vZmYubXAzXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJhdWRpb1wiLCBcInNmeC1mYWxsaW5nXCIsIFwic291bmRzL3NmeC1mYWxsaW5nLm1wM1wiKTtcclxuICByZXNvdXJjZXMuYWRkKFwiYXVkaW9cIiwgXCJzZngtbmV3LWljZVwiLCBcInNvdW5kcy9zZngtbmV3LWljZS5tcDNcIik7XHJcbiAgcmVzb3VyY2VzLmFkZChcImF1ZGlvXCIsIFwic2Z4LWNsaW1iXCIsIFwic291bmRzL3NmeC1jbGltYi5tcDNcIik7XHJcbiAgcmVzb3VyY2VzLmFkZChcImF1ZGlvXCIsIFwic2Z4LWljZS1jb2xsaXNpb25cIiwgXCJzb3VuZHMvc2Z4LWljZS1jb2xsaXNpb24ubXAzXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJhdWRpb1wiLCBcInNmeC1zdGFnZS1lbnRlclwiLCBcInNvdW5kcy9zZngtc3RhZ2UtZW50ZXIubXAzXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJhdWRpb1wiLCBcInNmeC1kYW5nZXJcIiwgXCJzb3VuZHMvc2Z4LWRhbmdlci5tcDNcIik7XHJcbiAgcmVzb3VyY2VzLmFkZChcImF1ZGlvXCIsIFwic2Z4LWljZS1yZW1vdmVcIiwgXCJzb3VuZHMvc2Z4LWljZS1yZW1vdmUubXAzXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJhdWRpb1wiLCBcInNmeC1zdGF0ZS1sZWF2ZVwiLCBcInNvdW5kcy9zZngtc3RhdGUtbGVhdmUubXAzXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJhdWRpb1wiLCBcInNmeC1kaXNhYmxlZFwiLCBcInNvdW5kcy9zZngtZGlzYWJsZWQubXAzXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJhdWRpb1wiLCBcInNmeC1mYWxsXCIsIFwic291bmRzL3NmeC1mYWxsLm1wM1wiKTtcclxuICByZXNvdXJjZXMuYWRkKFwiYXVkaW9cIiwgXCJzZngtbXVzaWMtc3BhcmtzXCIsIFwibXVzaWMvc3BhcmtzLm1wM1wiKTtcclxuXHJcbiAgcmVzb3VyY2VzLnJlYWR5KCgpID0+IHtcclxuICAgIFN0YXJ0R2FtZShyZXNvdXJjZXMpO1xyXG4gICAgQ2hlY2tFZGl0b3IoKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZExldmVsRnJvbUV2ZW50KGV2ZW50KSB7XHJcbiAgbGV0IGx2bCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJsdmxcIik7XHJcbiAgZ2FtZS5lbmdpbmUubGV2ZWwgPSBwYXJzZUludChsdmwsIDEwKTtcclxuICBnYW1lLmVuZ2luZS5zY2VuZS5sb2FkKGdhbWUuZW5naW5lLmxldmVsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3RhcnRHYW1lKHJlc291cmNlcykge1xyXG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgcmVzb3VyY2VzKTtcclxuICB3aW5kb3cuZ2FtZSA9IGdhbWU7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvbi5sdmxcIikuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRMZXZlbEZyb21FdmVudCk7XHJcbiAgfSk7XHJcbiAgbGV0IGx2bFNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZXZlbC1zZWxlY3RvclwiKTtcclxuICBsdmxTZWxlY3Rvci5zdHlsZS5vcGFjaXR5ID0gMTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ2hlY2tFZGl0b3IoKSB7XHJcbiAgaWYgKHdpbmRvdy5GSVJFTklDRV9FRElUT1JfTU9ERSkge1xyXG4gICAgZ2FtZS5lbmdpbmUuc291bmQubXVzaWNPbiA9IGZhbHNlO1xyXG4gICAgZ2FtZS5lbmdpbmUuc291bmQuc291bmRPbiA9IGZhbHNlO1xyXG4gICAgZ2FtZS5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVQbGF5O1xyXG4gICAgZ2FtZS5lbmdpbmUuZWRpdG9yID0gdHJ1ZTtcclxuICAgIGdhbWUuZW5naW5lLmtleWJvYXJkLmludHJvID0gZmFsc2U7XHJcbiAgICBnYW1lLmVuZ2luZS5zb3VuZC5tdXNpYy5wYXVzZSgpO1xyXG5cclxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgeFRpbGUgPSBNYXRoLmZsb29yKGUub2Zmc2V0WCAvIDMyKTtcclxuICAgICAgY29uc3QgeVRpbGUgPSBNYXRoLmZsb29yKGUub2Zmc2V0WSAvIDMyKTtcclxuICAgICAgaWYgKHRvb2wgPCAyKSB7XHJcbiAgICAgICAgZ2FtZS5lbmdpbmUubWFwLm1hcFt5VGlsZV1beFRpbGVdID0gdG9vbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzd2l0Y2ggKHRvb2wpIHtcclxuICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdFBsYXllcjpcclxuICAgICAgICAgICAgZ2FtZS5lbmdpbmUucGxheWVyLnggPSB4VGlsZSAqIDMyO1xyXG4gICAgICAgICAgICBnYW1lLmVuZ2luZS5wbGF5ZXIueSA9IHlUaWxlICogMzI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0SWNlOlxyXG4gICAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRJY2VCbG9jayh4VGlsZSwgeVRpbGUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdE1ldGFsOlxyXG4gICAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRTcHJpdGUobmV3IE1ldGFsKGdhbWUuZW5naW5lLCB4VGlsZSwgeVRpbGUsIDEpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RGaXJlOlxyXG4gICAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRTcHJpdGUobmV3IEZpcmUoZ2FtZS5lbmdpbmUsIHhUaWxlLCB5VGlsZSkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdEphcjpcclxuICAgICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBKYXIoZ2FtZS5lbmdpbmUsIHhUaWxlLCB5VGlsZSkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcInRoZW1lLXNlbGVjdG9yXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZ2FtZS5lbmdpbmUubWFwLnRoZW1lID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcclxuICAgICAgICBlLnRhcmdldC5ibHVyKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXNhdmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHQtbGV2ZWxcIikudmFsdWUgPSBKU09OLnN0cmluZ2lmeShcclxuICAgICAgICBnYW1lLmVuZ2luZS5zY2VuZS5zYXZlKClcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSBcIi4vYW5pbXNwcml0ZVwiO1xyXG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSBcIi4vZW5naW5lXCI7XHJcbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCIuL2xldmVsc1wiO1xyXG5cclxuLyoqXHJcbiAqIEdhbWUgTG9vcFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Kn0gY2FudmFzICAgVGhlIGNhbnZhcyBlbGVtZW50XHJcbiAgICogQHBhcmFtIHsqfSByZXNvdXJjZXMgIEdhbWUgcmVzb3VyY2VzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoY2FudmFzLCByZXNvdXJjZXMpIHtcclxuICAgIHRoaXMuZW5naW5lID0gbmV3IEVuZ2luZShjYW52YXMsIHJlc291cmNlcyk7XHJcbiAgICB0aGlzLmxldmVscyA9IGxldmVscztcclxuICAgIHRoaXMuc3RhdGUgPSBDb25zdHMuR2FtZVN0YXRlUGxheTtcclxuICAgIHRoaXMuZW5naW5lLnNvdW5kLnNvdW5kdHJhY2soKTtcclxuICAgIHRoaXMuZ2FtZUxvb3AgPSB0aGlzLmdhbWVMb29wXy5iaW5kKHRoaXMpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuICAgIHRoaXMuZ2FtZUxvb3AoKTtcclxuICB9XHJcblxyXG4gIGdhbWVMb29wXygpIHtcclxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICBjYXNlIENvbnN0cy5HYW1lU3RhdGVJbnRybzpcclxuICAgICAgICB0aGlzLmRvSW50cm8oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuR2FtZVN0YXRlUGxheTpcclxuICAgICAgICB0aGlzLmVuZ2luZS5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUubW92ZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUludHJvKCkge1xyXG4gICAgdGhpcy5pbnRybyA9IG5ldyBBbmltU3ByaXRlKFxyXG4gICAgICBudWxsLFxyXG4gICAgICB0aGlzLmVuZ2luZSxcclxuICAgICAgXCJpbWdfaW50cm9cIixcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgNTQ0LFxyXG4gICAgICA0MTYsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgdGhpcy5zdGFydCA9IG5ldyBBbmltU3ByaXRlKFxyXG4gICAgICBudWxsLFxyXG4gICAgICB0aGlzLmVuZ2luZSxcclxuICAgICAgXCJpbWdfc3RhcnRcIixcclxuICAgICAgNyxcclxuICAgICAgMTEsXHJcbiAgICAgIDE0MCxcclxuICAgICAgMjYsXHJcbiAgICAgIC0xMCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICAgIHRoaXMuc3RhcnQuYW5pbURlbGF5ID0gQ29uc3RzLkFuaW1EZWZhdWx0RGVsYXkgKiAyMDtcclxuICB9XHJcblxyXG4gIGRvSW50cm8oKSB7XHJcbiAgICB0aGlzLmludHJvLmRyYXcoKTtcclxuICAgIHRoaXMuc3RhcnQuZHJhdygpO1xyXG5cclxuICAgIGlmICh0aGlzLmVuZ2luZS5rZXlib2FyZC5lbnRlcikge1xyXG4gICAgICB0aGlzLmVuZ2luZS5rZXlib2FyZC5lbnRlciA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnN0YXRlID0gQ29uc3RzLkdhbWVTdGF0ZVBsYXk7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnNvdW5kdHJhY2soKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tIFwiLi9hbmltc3ByaXRlXCI7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi90aWxlc1wiO1xyXG5pbXBvcnQgeyBGcm9zdCB9IGZyb20gXCIuL3N0cnVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEljZSBleHRlbmRzIEFuaW1TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5LCBsZW5ndGgsIGZyb3plbikge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgIENvbnN0cy5PYmplY3RJY2UsXHJcbiAgICAgIGVuZ2luZSxcclxuICAgICAgXCJpbWdfaWNlXCIsXHJcbiAgICAgIHR4LFxyXG4gICAgICB0eSxcclxuICAgICAgQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMSxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICAgIHRoaXMueFRpbGUgPSB0eDtcclxuICAgIHRoaXMueVRpbGUgPSB0eTtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5hbmltRW5kID0gMTtcclxuICAgIHRoaXMuYW5pbURlbGF5ID0gOTtcclxuICAgIHRoaXMuYW5pbVJvdyA9IDA7XHJcbiAgICB0aGlzLmRpcnJlY3Rpb24gPSAwO1xyXG4gICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgICBpZiAodHlwZW9mIGZyb3plbiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB0aGlzLmZyb3plbiA9IGZyb3plbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJvemVuID0gbmV3IEZyb3N0KGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29ybmVycygpO1xyXG4gICAgICB0aGlzLmNoZWNrRnJlZXplKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRCbG9jayh0eCkge1xyXG4gICAgY29uc3Qgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0eCAtIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgY29uc3Qgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQoXHJcbiAgICAgIHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCArIDEsXHJcbiAgICAgIHRoaXMueVRpbGVcclxuICAgICk7XHJcbiAgICBpZiAodHggPiB0aGlzLnhUaWxlKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmdldFRpbGUodHggKyAxLCB0aGlzLnlUaWxlKSA9PT0gQ29uc3RzLk9iamVjdFdhbGwgfHxcclxuICAgICAgICBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9iamVjdE1ldGFsIHx8XHJcbiAgICAgICAgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPT09IENvbnN0cy5PYmplY3RKYXJcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR4IDwgdGhpcy54VGlsZSkge1xyXG4gICAgICB0aGlzLnhUaWxlID0gdHg7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmdldFRpbGUodHggLSAxLCB0aGlzLnlUaWxlKSA9PT0gQ29uc3RzLk9iamVjdFdhbGwgfHxcclxuICAgICAgICBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID09PSBDb25zdHMuT2JqZWN0TWV0YWwgfHxcclxuICAgICAgICBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID09PSBDb25zdHMuT2JqZWN0SmFyXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuZnJvemVuLmxlZnQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnggPSB0aGlzLnhUaWxlICogQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgIHRoaXMubGVuZ3RoICs9IDE7XHJcbiAgfVxyXG5cclxuICBpc1Nwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgaWYgKHRoaXMueVRpbGUgPT09IHR5KSB7XHJcbiAgICAgIGlmICh0eCA+PSB0aGlzLnhUaWxlICYmIHR4IDwgdGhpcy54VGlsZSArIHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVCbG9jayh0eCkge1xyXG4gICAgaWYgKHR4ID09PSB0aGlzLnhUaWxlKSB7XHJcbiAgICAgIHRoaXMueFRpbGUgKz0gMTtcclxuICAgICAgdGhpcy54ICs9IENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICAgIHRoaXMubGVuZ3RoIC09IDE7XHJcbiAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZUxlZnQoKTtcclxuICAgIH0gZWxzZSBpZiAodHggPT09IHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5sZW5ndGggLT0gMTtcclxuICAgICAgdGhpcy5jaGVja1VuZnJlZXplUmlnaHQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShcclxuICAgICAgICBuZXcgSWNlKFxyXG4gICAgICAgICAgdGhpcy5lbmdpbmUsXHJcbiAgICAgICAgICB0eCArIDEsXHJcbiAgICAgICAgICB0aGlzLnlUaWxlLFxyXG4gICAgICAgICAgdGhpcy54VGlsZSArIHRoaXMubGVuZ3RoIC0gdHggLSAxLFxyXG4gICAgICAgICAgbmV3IEZyb3N0KGZhbHNlLCB0aGlzLmZyb3plbi5yaWdodClcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMubGVuZ3RoID0gdHggLSB0aGlzLnhUaWxlO1xyXG4gICAgICB0aGlzLmNoZWNrVW5mcmVlemVSaWdodCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgY2FuR2xpZGUoZGlyKSB7XHJcbiAgICBpZiAodGhpcy5sZW5ndGggIT09IDEgfHwgdGhpcy5mcm96ZW4ubGVmdCB8fCB0aGlzLmZyb3plbi5yaWdodCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlyID09PSBDb25zdHMuRGlyTGVmdCAmJiBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmwpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChkaXIgPT09IENvbnN0cy5EaXJSaWdodCAmJiBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnIpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaXNGcm96ZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mcm96ZW4ubGVmdCB8fCB0aGlzLmZyb3plbi5yaWdodDtcclxuICB9XHJcblxyXG4gIGdyYXZpdHkoKSB7XHJcbiAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiYgIXRoaXMuaXNGcm96ZW4oKSkge1xyXG4gICAgICB0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmFsbGluZykge1xyXG4gICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheShcImljZS1jb2xsaXNpb25cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb2xsaXNpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuY2FuR2xpZGUodGhpcy5kaXJyZWN0aW9uKSkge1xyXG4gICAgICB0aGlzLmRpcnJlY3Rpb24gPSAwO1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KFwiaWNlLWNvbGxpc2lvblwiKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBtb3ZlKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0aWxlX2Rvd24gPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlICsgaSwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgICBpZiAodGlsZV9kb3duICYmIHRpbGVfZG93biAhPT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcclxuICAgICAgICB0aGlzLmNvcm5lcnMuZCA9IHRpbGVfZG93bjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jb3JuZXJzLnIgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlICsgdGhpcy5sZW5ndGgsIHRoaXMueVRpbGUpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRnJvemVuKCkpIHtcclxuICAgICAgdGhpcy5jaGVja1VuZnJlZXplTGVmdCgpO1xyXG4gICAgICB0aGlzLmNoZWNrVW5mcmVlemVSaWdodCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlTW92aW5nOlxyXG4gICAgICAgIHRoaXMuZ2xpZGUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUljZUNoZWNrOlxyXG4gICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcclxuICAgICAgICB0aGlzLmRvRG93bigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgIGlmICh0aGlzLmFuaW1EZWxheUNvdW50KysgPiB0aGlzLmFuaW1EZWxheSkge1xyXG4gICAgICB0aGlzLmFuaW1EZWxheUNvdW50ID0gMDtcclxuICAgICAgdGhpcy5hbmltUm93ID0gdGhpcy5hbmltUm93ID09PSAwID8gMSA6IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgdGhpcy54LFxyXG4gICAgICAgIHRoaXMueSxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXMueCxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICAzICogQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgICBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgdGhpcy54ICsgQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgICBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgdGhpcy54LFxyXG4gICAgICAgIHRoaXMueSxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgIDMgKiBDb25zdHMuVGlsZVdpZHRoLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICB0aGlzLnggKyBDb25zdHMuVGlsZVdpZHRoICogKHRoaXMubGVuZ3RoIC0gMSksXHJcbiAgICAgICAgdGhpcy55LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHRcclxuICAgICAgKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgICAyICogQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgICAgIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICB0aGlzLnggKyBDb25zdHMuVGlsZVdpZHRoICogaSxcclxuICAgICAgICAgIHRoaXMueSxcclxuICAgICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICB0aGlzLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZyb3plbi5sZWZ0KSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KFwiZnJvc3RcIiksXHJcbiAgICAgICAgdGhpcy54VGlsZSAqIHRoaXMud2lkdGggLSA3LFxyXG4gICAgICAgIHRoaXMueVRpbGUgKiB0aGlzLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZnJvemVuLnJpZ2h0KSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KFwiZnJvc3RcIiksXHJcbiAgICAgICAgKHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCkgKiB0aGlzLndpZHRoIC0gNyxcclxuICAgICAgICB0aGlzLnlUaWxlICogdGhpcy5oZWlnaHRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBnbGlkZSgpIHtcclxuICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XHJcbiAgICAgIHRoaXMueCArPSA0ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb0Rvd24oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gNDtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xyXG4gICAgICB0aGlzLnkgKz0gNDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5ncmF2aXR5KCkpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVzaChkaXIpIHtcclxuICAgIHRoaXMuZGlycmVjdGlvbiA9IHR5cGVvZiBkaXIgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzLmRpcnJlY3Rpb24gOiBkaXI7XHJcbiAgICBpZiAoIXRoaXMuY29sbGlzaW9uKCkgJiYgIXRoaXMuZ3Jhdml0eSgpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VNb3ZpbmcsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0ZyZWV6ZSgpIHtcclxuICAgIGlmIChUaWxlLmlzRnJlZXphYmxlKHRoaXMuY29ybmVycy5sKSkge1xyXG4gICAgICB0aGlzLmZyb3plbi5sZWZ0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJvemVuLmxlZnQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChUaWxlLmlzRnJlZXphYmxlKHRoaXMuY29ybmVycy5yKSkge1xyXG4gICAgICB0aGlzLmZyb3plbi5yaWdodCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZyb3plbi5yaWdodCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tVbmZyZWV6ZUxlZnQoKSB7XHJcbiAgICBpZiAodGhpcy5mcm96ZW4ubGVmdCAmJiAhVGlsZS5pc0ZyZWV6YWJsZSh0aGlzLmNvcm5lcnMubCkpIHtcclxuICAgICAgdGhpcy5mcm96ZW4ubGVmdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tVbmZyZWV6ZVJpZ2h0KCkge1xyXG4gICAgaWYgKHRoaXMuZnJvemVuLnJpZ2h0ICYmICFUaWxlLmlzRnJlZXphYmxlKHRoaXMuY29ybmVycy5yKSkge1xyXG4gICAgICB0aGlzLmZyb3plbi5yaWdodCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSBcIi4vYW5pbXNwcml0ZVwiO1xyXG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBKYXIgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSkge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgIENvbnN0cy5PYmplY3RKYXIsXHJcbiAgICAgIGVuZ2luZSxcclxuICAgICAgXCJpbWdfamFyXCIsXHJcbiAgICAgIHR4LFxyXG4gICAgICB0eSxcclxuICAgICAgQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMyxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICAgIHRoaXMuYW5pbURlbGF5ID0gQ29uc3RzLkFuaW1EZWZhdWx0RGVsYXkgKiAyO1xyXG4gICAgdGhpcy5vbkZpcmUgPSBmYWxzZTtcclxuICAgIHRoaXMuYW5pbVJvdyA9IDA7XHJcbiAgfVxyXG5cclxuICBtb3ZlKCkge1xyXG4gICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICB0aGlzLmNvbGxpc2lvbnMoKTtcclxuICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZURvd246XHJcbiAgICAgICAgdGhpcy5kb0Rvd24oKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbGxpc2lvbnMoKSB7XHJcbiAgICBpZiAoIXRoaXMub25GaXJlICYmIHRoaXMuY29ybmVycy51ID09PSBDb25zdHMuT2JqZWN0RmlyZSkge1xyXG4gICAgICB0aGlzLnR1cm5PbkZpcmUoKTtcclxuICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlRmlyZSh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlIC0gMSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vbkZpcmUgJiYgdGhpcy5jb3JuZXJzLnUgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcclxuICAgICAgdGhpcy5tZWx0SWNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBncmF2aXR5KCkge1xyXG4gICAgaWYgKCF0aGlzLmNvcm5lcnMuZCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZG9Eb3duKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcclxuICAgICAgdGhpcy55ICs9IDQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHR1cm5PbkZpcmUoKSB7XHJcbiAgICB0aGlzLmFuaW1Sb3cgPSAxO1xyXG4gICAgdGhpcy5vbkZpcmUgPSB0cnVlO1xyXG4gICAgdGhpcy5lbmdpbmUuc291bmQucGxheShcImZpcmUtb2ZmXCIpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUgLSAxLCBcIjI1NSwgODgsIDMzXCIsIDMwKTtcclxuICB9XHJcblxyXG4gIG1lbHRJY2UoKSB7XHJcbiAgICB0aGlzLmVuZ2luZS5yZW1vdmVJY2VCbG9jayh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlIC0gMSk7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSAtIDEsIFwiMjU1LCA4OCwgMzNcIiwgMjApO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUgLSAxLCBcIjEyMiwgMjExLCAyNTVcIiwgMTApO1xyXG4gICAgdGhpcy5lbmdpbmUuc291bmQucGxheShcImZpcmUtb2ZmXCIpO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHN1cGVyLmRyYXcoKTtcclxuICAgIHRoaXMuZHJhd0Zyb3N0KCk7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBLZXlib2FyZCBwcmVzcyBlbmdpbmVcclxuICovXHJcbmV4cG9ydCBjbGFzcyBLZXlib2FyZCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnVwID0gZmFsc2U7XHJcbiAgICB0aGlzLmRvd24gPSBmYWxzZTtcclxuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgdGhpcy5hY3Rpb24gPSBmYWxzZTtcclxuICAgIHRoaXMua2V5ZG93biA9IHRoaXMua2V5ZG93bl8uYmluZCh0aGlzKTtcclxuICAgIHRoaXMua2V5dXAgPSB0aGlzLmtleXVwXy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5pbnRybyA9IHRydWU7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5ZG93biwgZmFsc2UpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwLCBmYWxzZSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5pbnRybykge1xyXG4gICAgICAgIHRoaXMuZW50ZXIgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaW50cm8gPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYnRuX2FjdGlvblwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLmRvd24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJidG5fYWN0aW9uXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsICgpID0+ICh0aGlzLmRvd24gPSBmYWxzZSkpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5fbGVmdFwiKS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmxlZnQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJidG5fbGVmdFwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCAoKSA9PiAodGhpcy5sZWZ0ID0gZmFsc2UpKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuX3JpZ2h0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcImJ0bl9yaWdodFwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCAoKSA9PiAodGhpcy5yaWdodCA9IGZhbHNlKSk7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJidG5fc2VsZWN0XCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gKHRoaXMuZW50ZXIgPSB0cnVlKSk7XHJcbiAgfVxyXG5cclxuICBrZXlkb3duXyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIDM3OiAvLyBMZWZ0XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzg6IC8vIFVwXHJcbiAgICAgICAgdGhpcy51cCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDA6IC8vIERvd25cclxuICAgICAgY2FzZSAzMjogLy8gU3BhY2VcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZG93biA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTM6IC8vRW50ZXJcclxuICAgICAgICB0aGlzLmVudGVyID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBrZXl1cF8oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgY2FzZSAzNzogLy8gTGVmdFxyXG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDM4OiAvLyBVcFxyXG4gICAgICAgIHRoaXMudXAgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzOTogLy8gUmlnaHRcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDA6IC8vIERvd25cclxuICAgICAgY2FzZSAzMjogLy8gU3BhY2VcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDEzOiAvL0VudGVyXHJcbiAgICAgICAgdGhpcy5lbnRlciA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBsZXZlbHMgPSBbXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMCxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMTEsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNSwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNSwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMTAsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAxLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAzLCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNCwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNSwgdjogNCB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogNiwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDIsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDE0LCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDYsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAwLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA4LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDgsIHY6IDUgfSxcclxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDcsIHY6IDMgfSxcclxuICAgICAgeyBpZDogMywgeDogMTIsIHk6IDYsIHY6IDIgfSxcclxuICAgICAgeyBpZDogMywgeDogNiwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA0LCB5OiA3LCB2OiAzIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDMsIHk6IDYsIHY6IDIgfSxcclxuICAgICAgeyBpZDogNiwgeDogNSwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDMsIHk6IDcsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA2LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxMSwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogMTAsIHY6IDMgfSxcclxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDksIHY6IDMgfSxcclxuICAgICAgeyBpZDogMywgeDogNywgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAzLCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDksIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMywgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMywgeTogNCwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDUsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDEzLCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDMsIHk6IDQsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDYsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDYsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiA2LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAyLCB5OiA4LCB2OiAxMywgZmw6IHRydWUsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAyLCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDMsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxNCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTQsIHk6IDQsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAyLCB5OiA1LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAxLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxMiwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAxMSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogMTEsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogOCwgeTogNSwgdjogNSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDUsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAxLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA4LCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogMTAsIHY6IDIgfSxcclxuICAgICAgeyBpZDogMywgeDogNSwgeTogOSwgdjogNyB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDUsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA2LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA1LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogOCwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiA4LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMTAsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDMsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMiwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAzLCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNSwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMiwgeTogNSwgdjogMTAgfSxcclxuICAgICAgeyBpZDogMywgeDogNSwgeTogNCwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDYsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDMsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDQsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNiwgeTogMywgdjogMiB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogMywgdjogMiB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAzLCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNyxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogOCwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDIsIHk6IDMsIHY6IDIgfSxcclxuICAgICAgeyBpZDogMywgeDogMTQsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTQsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTMsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDIsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAzLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDMsIHk6IDgsIHY6IDExIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDksIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAyLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxMiwgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiAxMCwgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDcsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogMTAsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNSxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMiwgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogMywgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxNCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogMTAsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA2LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA4LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDUsIHg6IDYsIHk6IDExLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogNywgeTogNCwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDEsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDEwLCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIGZsOiBmYWxzZSwgZnI6IGZhbHNlLCB4OiAxMCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgZmw6IGZhbHNlLCBmcjogZmFsc2UsIHg6IDYsIHk6IDksIHY6IDUgfSxcclxuICAgICAgeyBpZDogMywgZmw6IGZhbHNlLCBmcjogZmFsc2UsIHg6IDcsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgZmw6IGZhbHNlLCBmcjogZmFsc2UsIHg6IDYsIHk6IDcsIHY6IDUgfSxcclxuICAgICAgeyBpZDogMywgZmw6IGZhbHNlLCBmcjogZmFsc2UsIHg6IDYsIHk6IDUsIHY6IDUgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogNCwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDcsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiA3LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogMywgeDogOSwgeTogNywgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDEwLCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNywgeDogNywgeTogNSwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDYsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDQsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogNywgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAzLCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDcsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAxLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA4LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNSwgeTogNywgdjogMywgZmw6IHRydWUsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiA4LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA2LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA1LCB2OiAzLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA5LCB5OiA1LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDIsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDYsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDksXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDQsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNiwgeTogNCwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDQsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNCwgdjogNCwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogMTEsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogNSwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAzLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDUsIHg6IDgsIHk6IDEwLCB2OiBmYWxzZSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDAsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDEwLCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDcsIHk6IDYsIHY6IDQsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogNSwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDAsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDgsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNSwgeDogNiwgeTogMTAsIHY6IHRydWUgfSxcclxuICAgICAgeyBpZDogNSwgeDogNSwgeTogNywgdjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA1LCB4OiA4LCB5OiA4LCB2OiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA3LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNCxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogOCwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA2LCB2OiAxLCBmbDogZmFsc2UsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDQsIHk6IDcsIHY6IDEsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogNCwgeTogNSwgdjogMSwgZmw6IHRydWUsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDksIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA2LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA5LCB5OiAxMSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA1LCB4OiAxMCwgeTogOCwgdjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxNCwgeTogMTEsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogMTEsIHk6IDIsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA4LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxMiwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA1LCB4OiAxMSwgeTogNywgdjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiAxMCwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDksIHk6IDUsIHY6IDQsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogOSwgeTogNCwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA4LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAzLCB5OiAxLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDQsIHk6IDIsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogMiwgeTogMiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAzLCB5OiAyLCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogNiwgeDogNCwgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAyLCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDYsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNywgeTogNSwgdjogMSwgZmw6IHRydWUsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA1LCB2OiAxLCBmbDogZmFsc2UsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDQsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogMiwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAzLCB5OiA4LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogNiwgeDogNCwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAyLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNSwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiAxMCwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiA4LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDksIHk6IDgsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDEyLCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEzLCB5OiA1LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiA1LCB2OiAxLCBmbDogZmFsc2UsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogMTAsIHk6IDIsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogOCwgeTogMiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA5LCB5OiAyLCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICAvKiB7XHJcbiAgICAgICAgXCJtYXBcIjpbXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMCwwLDAsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwwLDAsMCwwLDAsMCwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMCwwLDAsMCwwLDAsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDAsMCwwLDAsMCwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDAsMCwxLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMCwwLDAsMCwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMCwwLDAsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDAsMCwxLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwxLDAsMSwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcInRoZW1lXCI6OSxcclxuICAgICAgICBcInNwcml0ZXNcIjpbXHJcbiAgICAgICAgICAgIHtcImlkXCI6NyxcInhcIjo5LFwieVwiOjUsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6MyxcInhcIjo3LFwieVwiOjYsXCJ2XCI6Mn0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NCxcInhcIjo3LFwieVwiOjUsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NixcInhcIjo2LFwieVwiOjcsXCJ2XCI6MX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NSxcInhcIjo3LFwieVwiOjksXCJ2XCI6dHJ1ZX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NSxcInhcIjo4LFwieVwiOjEwLFwidlwiOnRydWV9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjUsXCJ4XCI6OSxcInlcIjo4LFwidlwiOnRydWV9XHJcbiAgICAgICAgXVxyXG4gICAgfSwqLyB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMTMsIHk6IDIsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNCwgeTogNCwgdjogOCB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogMywgdjogNCB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAzLCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNSwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxNCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMiwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAyLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDgsXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA2LFxyXG4gICAgc3ByaXRlczogW3sgaWQ6IDcsIHg6IDE0LCB5OiAxMCwgdjogMSB9XSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDksXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDEwLCB5OiAxMSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDUsIHg6IDQsIHk6IDExLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDUsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tIFwiLi9hbmltc3ByaXRlXCI7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi90aWxlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ldGFsIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHksIGxlbmd0aCkge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgIENvbnN0cy5PYmplY3RNZXRhbCxcclxuICAgICAgZW5naW5lLFxyXG4gICAgICBcImltZ19tZXRhbFwiLFxyXG4gICAgICB0eCxcclxuICAgICAgdHksXHJcbiAgICAgIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIDEsXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcbiAgICB0aGlzLnhUaWxlID0gdHg7XHJcbiAgICB0aGlzLnlUaWxlID0gdHk7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgIHRoaXMuYW5pbURlbGF5ID0gOTtcclxuICAgIHRoaXMuZGlycmVjdGlvbiA9IDA7XHJcbiAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNhbkdsaWRlKGRpcikge1xyXG4gICAgaWYgKGRpciA9PT0gQ29uc3RzLkRpckxlZnQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5sKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlyID09PSBDb25zdHMuRGlyUmlnaHQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5yKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZyb3plblRvSWNlKCkge1xyXG4gICAgY29uc3QgcmlnaHRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlICsgMSwgdGhpcy55VGlsZSk7XHJcbiAgICBjb25zdCBsZWZ0U3ByaXRlID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSAtIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIXRoaXMuZmFsbGluZyAmJlxyXG4gICAgICAoKHJpZ2h0U3ByaXRlICYmXHJcbiAgICAgICAgcmlnaHRTcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiZcclxuICAgICAgICByaWdodFNwcml0ZS5mcm96ZW4ubGVmdCkgfHxcclxuICAgICAgICAobGVmdFNwcml0ZSAmJlxyXG4gICAgICAgICAgbGVmdFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJlxyXG4gICAgICAgICAgbGVmdFNwcml0ZS5mcm96ZW4ucmlnaHQpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdyYXZpdHkoKSB7XHJcbiAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiYgIXRoaXMuZnJvemVuVG9JY2UoKSkge1xyXG4gICAgICB0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmFsbGluZykge1xyXG4gICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheShcImljZS1jb2xsaXNpb25cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb2xsaXNpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuY2FuR2xpZGUodGhpcy5kaXJyZWN0aW9uKSkge1xyXG4gICAgICB0aGlzLmRpcnJlY3Rpb24gPSAwO1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KFwiaWNlLWNvbGxpc2lvblwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ3Jhdml0eSgpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbW92ZSgpIHtcclxuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUljZU1vdmluZzpcclxuICAgICAgICB0aGlzLmdsaWRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VDaGVjazpcclxuICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZURvd246XHJcbiAgICAgICAgdGhpcy5kb0Rvd24oKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBzdXBlci5kcmF3KCk7XHJcbiAgICB0aGlzLmRyYXdGcm9zdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2xpZGUoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gNDtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xyXG4gICAgICB0aGlzLnggKz0gNCAqIHRoaXMuZGlycmVjdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9Eb3duKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcclxuICAgICAgdGhpcy55ICs9IDQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1c2goZGlyKSB7XHJcbiAgICB0aGlzLmRpcnJlY3Rpb24gPSB0eXBlb2YgZGlyID09PSBcInVuZGVmaW5lZFwiID8gdGhpcy5kaXJyZWN0aW9uIDogZGlyO1xyXG4gICAgaWYgKCF0aGlzLmNvbGxpc2lvbigpKSB7XHJcbiAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZU1vdmluZywgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gXCIuL2FuaW1zcHJpdGVcIjtcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL3RpbGVzXCI7XHJcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEFuaW1TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5KSB7XHJcbiAgICBzdXBlcihcclxuICAgICAgQ29uc3RzLk9iamVjdFBsYXllcixcclxuICAgICAgZW5naW5lLFxyXG4gICAgICBcImltZ19kb25hXCIsXHJcbiAgICAgIHR4LFxyXG4gICAgICB0eSxcclxuICAgICAgNDgsXHJcbiAgICAgIDY0LFxyXG4gICAgICAtMTAsXHJcbiAgICAgIC0zMixcclxuICAgICAgMixcclxuICAgICAgMixcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgICB0aGlzLnNwZWVkID0gMjtcclxuICAgIHRoaXMuZGlycmVjdGlvbiA9IDE7XHJcbiAgICB0aGlzLnN0YXRlID0gMDsgLy9zdGFuZGluZyB0b3AgcmlnaHQgZG93biBsZWZ0XHJcbiAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy50aWxlV2lkdGggPSBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgdGhpcy50aWxlSGVpZ2h0ID0gQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgIHRoaXMuYW5pbURlbGF5ID0gMztcclxuICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICB0aGlzLmZhbGxDb3VudGVyID0gMDtcclxuICAgIHRoaXMuaW5uZXJDb3VudGVyID0gMDtcclxuICAgIHRoaXMuc3RhbmRDb3VudGVyID0gMDtcclxuICAgIHRoaXMuaW50cm8oKTtcclxuICB9XHJcblxyXG4gIGxlZnQoKSB7XHJcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgIC8vaWYgc3RhbmRpbmcgdGhlbiB0dXJuXHJcbiAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gIT09IENvbnN0cy5EaXJMZWZ0KSB7XHJcbiAgICAgICAgLy9pcyBub3QgdW5kZXIgYSBicmlja1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVR1cm5TdGFydCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1UdXJuRW5kLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1SaWdodFJvdyxcclxuICAgICAgICAgICAgNFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgICAgICA0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVHVybiwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5kaXJyZWN0aW9uID0gQ29uc3RzLkRpckxlZnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9ydW5uaW5nXHJcbiAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmwpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkpIHtcclxuICAgICAgICAgIC8vbm90IHVuZGVyIGEgYnJpY2tcclxuICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51bCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltUnVuU3RhcnQsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1SdW5FbmQsXHJcbiAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbUxlZnRSb3csXHJcbiAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1Dcm91Y2hFbmQsXHJcbiAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbUxlZnRSb3csXHJcbiAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUxlZnQsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2hpdCBhbiBpY2VcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmXHJcbiAgICAgICAgICAodGhpcy5jb3JuZXJzLmwgPT09IENvbnN0cy5PYmplY3RJY2UgfHxcclxuICAgICAgICAgICAgdGhpcy5jb3JuZXJzLmwgPT09IENvbnN0cy5PYmplY3RNZXRhbClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NsaW1iXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5sKSAmJlxyXG4gICAgICAgICAgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSAmJlxyXG4gICAgICAgICAgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudSkgJiZcclxuICAgICAgICAgICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnVsKSAmJlxyXG4gICAgICAgICAgIXRoaXMubW92aW5nXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUHVzaFN0YXJ0LFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVB1c2hTdGFydCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltTGVmdFJvd1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVVcCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByaWdodCgpIHtcclxuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgaWYgKHRoaXMuZGlycmVjdGlvbiAhPT0gQ29uc3RzLkRpclJpZ2h0KSB7XHJcbiAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltVHVyblN0YXJ0LFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVR1cm5FbmQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbUxlZnRSb3csXHJcbiAgICAgICAgICAgIDRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUmlnaHRSb3csXHJcbiAgICAgICAgICAgIDRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVUdXJuLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPSBDb25zdHMuRGlyUmlnaHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnIpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkpIHtcclxuICAgICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51cikpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltUnVuU3RhcnQsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1SdW5FbmQsXHJcbiAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltQ3JvdWNoRW5kLFxyXG4gICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1SaWdodFJvdyxcclxuICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlUmlnaHQsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmXHJcbiAgICAgICAgICAodGhpcy5jb3JuZXJzLnIgPT09IENvbnN0cy5PYmplY3RJY2UgfHxcclxuICAgICAgICAgICAgdGhpcy5jb3JuZXJzLnIgPT09IENvbnN0cy5PYmplY3RNZXRhbClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnIpICYmXHJcbiAgICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmXHJcbiAgICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSAmJlxyXG4gICAgICAgICAgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudXIpICYmXHJcbiAgICAgICAgICAhdGhpcy5tb3ZpbmdcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1QdXNoU3RhcnQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUHVzaFN0YXJ0LFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1SaWdodFJvd1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVVcCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXJuKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IENvbnN0cy5Nb3ZlUmlwKSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXlPbmNlKFwiZGFuZ2VyXCIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlUmlwLCB0cnVlKTtcclxuICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgIENvbnN0cy5BbmltUmlwU3RhcnQsXHJcbiAgICAgICAgQ29uc3RzLkFuaW1SaXBFbmQsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICBDb25zdHMuQW5pbVJpZ2h0Um93XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnRybygpIHtcclxuICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgQ29uc3RzLkFuaW1CaWdGYWxsU3RhcnQsXHJcbiAgICAgIENvbnN0cy5BbmltQmlnRmFsbEVuZCxcclxuICAgICAgdHJ1ZSxcclxuICAgICAgQ29uc3RzLkFuaW1SaWdodFJvdyxcclxuICAgICAgNFxyXG4gICAgKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVMZXZlbEVudGVyLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIG91dHJvKCkge1xyXG4gICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICBDb25zdHMuQW5pbUZhbGxTdGFydCxcclxuICAgICAgQ29uc3RzLkFuaW1CaWdGYWxsRW5kLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICA0XHJcbiAgICApO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUxldmVsRXhpdCwgdHJ1ZSk7XHJcbiAgICB0aGlzLmlubmVyQ291bnRlciA9IDA7XHJcbiAgfVxyXG5cclxuICBkb1JpcCgpIHt9XHJcblxyXG4gIGdyYXZpdHkoKSB7XHJcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb3JuZXJzLmQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBjb25zb2xlLmVyb3IoXCJ1bmRlZmluZWQgY29ybmVyXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVEb3duLCB0cnVlKTtcclxuICAgICAgICBpZiAodGhpcy5mYWxsQ291bnRlciA+PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5T25jZShcImZhbGxpbmdcIik7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltQmlnRmFsbFN0YXJ0LFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbUJpZ0ZhbGxFbmQsXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUmlnaHRSb3csXHJcbiAgICAgICAgICAgIDFcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1CaWdGYWxsU3RhcnQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltQmlnRmFsbEVuZCxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1SaWdodFJvdyxcclxuICAgICAgICAgICAgM1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQuc3RvcChcImZhbGxpbmdcIik7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENvbnN0cy5Nb3ZlRG93bikge1xyXG4gICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheShcImZhbGxcIik7XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3MoXHJcbiAgICAgICAgICAgIHRoaXMueFRpbGUsXHJcbiAgICAgICAgICAgIHRoaXMueVRpbGUsXHJcbiAgICAgICAgICAgIFwiMTI0LCAyMzgsIDY2XCIsXHJcbiAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICAwLjc1XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKFxyXG4gICAgICAgICAgICB0aGlzLnhUaWxlLFxyXG4gICAgICAgICAgICB0aGlzLnlUaWxlICsgMSxcclxuICAgICAgICAgICAgXCIxMjIsIDIxMSwgMjU1XCIsXHJcbiAgICAgICAgICAgIDUsXHJcbiAgICAgICAgICAgIDEuMjVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmFsbENvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvcm5lcnMuZCA9PT0gQ29uc3RzLk9iamVjdEphcikge1xyXG4gICAgICAgICAgY29uc3QgamFyID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgICAgICAgaWYgKGphciAmJiBqYXIub25GaXJlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVybigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWNlKCkge1xyXG4gICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCkge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kcikgJiZcclxuICAgICAgICAgICAgdGhpcy5jb3JuZXJzLmRyICE9PSBDb25zdHMuT2JqZWN0RmlyZVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbUljZVN0YXJ0LFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltSWNlRW5kLFxyXG4gICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltUmlnaHRSb3csXHJcbiAgICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTWFrZSwgdHJ1ZSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29ybmVycy5kciA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1JY2VTdGFydCxcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbUljZUVuZCxcclxuICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZVJlbW92ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1JY2VTdGFydCxcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbUljZUVuZCxcclxuICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZUZhaWwsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmRsKSAmJlxyXG4gICAgICAgICAgICB0aGlzLmNvcm5lcnMuZGwgIT09IENvbnN0cy5PYmplY3RGaXJlXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltSWNlU3RhcnQsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1JY2VFbmQsXHJcbiAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZU1ha2UsIHRydWUpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvcm5lcnMuZGwgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltSWNlU3RhcnQsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1JY2VFbmQsXHJcbiAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZVJlbW92ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1JY2VTdGFydCxcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbUljZUVuZCxcclxuICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbUxlZnRSb3csXHJcbiAgICAgICAgICAgICAgNFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlRmFpbCwgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBqdW1wKCkge1xyXG4gICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICBpZiAodGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnIpICYmXHJcbiAgICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51cikgJiZcclxuICAgICAgICAgICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUHVzaFN0YXJ0LFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVB1c2hTdGFydCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUmlnaHRSb3dcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVXAsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmwpICYmXHJcbiAgICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51bCkgJiZcclxuICAgICAgICAgICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUHVzaFN0YXJ0LFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVB1c2hTdGFydCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltTGVmdFJvd1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVVcCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1J1bigpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQgKiB0aGlzLmRpcnJlY3Rpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvVHVybigpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA+PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb091dHJvKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyICUgMTAgPT09IDApIHtcclxuICAgICAgdGhpcy5pbm5lckNvdW50ZXIgKz0gMTtcclxuICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIFwiMTI0LCAyMzgsIDY2XCIsIDI1LCAwLjUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gMykge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBcIjI1NSwgMTM1LCAxMjRcIiwgMzAsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gNSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBcIjEyMiwgMjExLCAyNTVcIiwgMzUsIDEuNSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyICUgMiA9PT0gMCAmJiB0aGlzLmlubmVyQ291bnRlciA8IDYpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KFwiY2xpbWJcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlubmVyQ291bnRlciAlIDIgPT09IDEpIHtcclxuICAgICAgdGhpcy55ICs9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnkgLT0gMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA+PSA2KSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoXCJzdGF0ZS1sZWF2ZVwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuZW5naW5lLm5leHRMZXZlbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9JbnRybygpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA9PT0gOCkge1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgXCIxMjQsIDIzOCwgNjZcIiwgMjAsIDIuNSk7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBcIjI1NSwgMTM1LCAxMjRcIiwgMzUsIDEpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgXCIxMjIsIDIxMSwgMjU1XCIsIDIwLCAxLjUpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KFwic3RhZ2UtZW50ZXJcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID49IDMyKSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnN0b3AoXCJmYWxsaW5nXCIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvR3Jhdml0eSgpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgICAgdGhpcy5mYWxsQ291bnRlcisrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9TdGFuZCgpIHtcclxuICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSkge1xyXG4gICAgICBpZiAodGhpcy5zdGFuZENvdW50ZXIrKyA+IDUwMCkge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgIENvbnN0cy5BbmltU2xlZXBTdGFydCxcclxuICAgICAgICAgIENvbnN0cy5BbmltU2xlZXBFbmQsXHJcbiAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgdGhpcy5kaXJyZWN0aW9uICE9PSAxID8gQ29uc3RzLkFuaW1MZWZ0Um93IDogQ29uc3RzLkFuaW1SaWdodFJvdyxcclxuICAgICAgICAgIDQ4LFxyXG4gICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgQ29uc3RzLkFuaW1TdGFuZFN0YXJ0LFxyXG4gICAgICAgICAgQ29uc3RzLkFuaW1TdGFuZEVuZCxcclxuICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICB0aGlzLmRpcnJlY3Rpb24gIT09IDEgPyBDb25zdHMuQW5pbUxlZnRSb3cgOiBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICAgICAgOCxcclxuICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCxcclxuICAgICAgICBDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIHRoaXMuZGlycmVjdGlvbiAhPT0gMSA/IENvbnN0cy5BbmltTGVmdFJvdyA6IENvbnN0cy5BbmltUmlnaHRSb3csXHJcbiAgICAgICAgOCxcclxuICAgICAgICB0cnVlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1VwKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IDE4KSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5jb3VudGVyKSB7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheShcImNsaW1iXCIpO1xyXG4gICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKFxyXG4gICAgICAgICAgICB0aGlzLnhUaWxlLFxyXG4gICAgICAgICAgICB0aGlzLnlUaWxlLFxyXG4gICAgICAgICAgICBcIjEyNCwgMjM4LCA2NlwiLFxyXG4gICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgMC43NVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyhcclxuICAgICAgICAgICAgdGhpcy54VGlsZSxcclxuICAgICAgICAgICAgdGhpcy55VGlsZSxcclxuICAgICAgICAgICAgXCIyNTUsIDEzNSwgMTI0XCIsXHJcbiAgICAgICAgICAgIDUsXHJcbiAgICAgICAgICAgIDEuMjVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUHVzaEVuZCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1QdXNoRW5kLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHRcclxuICAgICAgICAgICAgICA/IENvbnN0cy5BbmltUmlnaHRSb3dcclxuICAgICAgICAgICAgICA6IENvbnN0cy5BbmltTGVmdFJvd1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1KdW1wU3RhcnQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltSnVtcFN0YXJ0LFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHRcclxuICAgICAgICAgICAgICA/IENvbnN0cy5BbmltUmlnaHRSb3dcclxuICAgICAgICAgICAgICA6IENvbnN0cy5BbmltTGVmdFJvd1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltSnVtcEVuZCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1KdW1wRW5kLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHRcclxuICAgICAgICAgICAgICA/IENvbnN0cy5BbmltUmlnaHRSb3dcclxuICAgICAgICAgICAgICA6IENvbnN0cy5BbmltTGVmdFJvd1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHRcclxuICAgICAgICAgICAgICA/IENvbnN0cy5BbmltUmlnaHRSb3dcclxuICAgICAgICAgICAgICA6IENvbnN0cy5BbmltTGVmdFJvd1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE4OlxyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVN0YW5kLFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVN0YW5kLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgdGhpcy5kaXJyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHRcclxuICAgICAgICAgICAgICA/IENvbnN0cy5BbmltUmlnaHRSb3dcclxuICAgICAgICAgICAgICA6IENvbnN0cy5BbmltTGVmdFJvd1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJyZWN0aW9uO1xyXG4gICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYWtlSWNlKCkge1xyXG4gICAgdGhpcy5lbmdpbmUuc291bmQucGxheShcIm5ldy1pY2VcIik7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRJY2VCbG9jayh0aGlzLnhUaWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKFxyXG4gICAgICB0aGlzLnhUaWxlICsgdGhpcy5kaXJyZWN0aW9uLFxyXG4gICAgICB0aGlzLnlUaWxlICsgMSxcclxuICAgICAgXCIxMjQsIDIxNCwgMjU1XCIsXHJcbiAgICAgIDVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJY2VCbG9jaygpIHtcclxuICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoXCJpY2UtcmVtb3ZlXCIpO1xyXG4gICAgdGhpcy5lbmdpbmUucmVtb3ZlSWNlQmxvY2sodGhpcy54VGlsZSArIHRoaXMuZGlycmVjdGlvbiwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sIHRoaXMueVRpbGUgKyAxKTtcclxuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyhcclxuICAgICAgdGhpcy54VGlsZSArIHRoaXMuZGlycmVjdGlvbixcclxuICAgICAgdGhpcy55VGlsZSArIDEsXHJcbiAgICAgIFwiMTI0LCAyMTQsIDI1NVwiLFxyXG4gICAgICA1XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVzaCgpIHtcclxuICAgIGxldCBpY2UgPSB0aGlzLmVuZ2luZS5pY2VBdCh0aGlzLnhUaWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnlUaWxlKTtcclxuICAgIGlmIChpY2UgJiYgaWNlLmNhbkdsaWRlKHRoaXMuZGlycmVjdGlvbikpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKFxyXG4gICAgICAgIHRoaXMueFRpbGUgKyB0aGlzLmRpcnJlY3Rpb24sXHJcbiAgICAgICAgdGhpcy55VGlsZSxcclxuICAgICAgICBcIjI1NSwgMjU1LCAyNTVcIixcclxuICAgICAgICAzXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyhcclxuICAgICAgICB0aGlzLnhUaWxlICsgdGhpcy5kaXJyZWN0aW9uLFxyXG4gICAgICAgIHRoaXMueVRpbGUsXHJcbiAgICAgICAgXCIxMjQsIDIxNCwgMjU1XCIsXHJcbiAgICAgICAgMyxcclxuICAgICAgICAxLjVcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgIENvbnN0cy5BbmltUHVzaFN0YXJ0LFxyXG4gICAgICAgIENvbnN0cy5BbmltUHVzaEVuZCxcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICB0aGlzLmRpcnJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodFxyXG4gICAgICAgICAgPyBDb25zdHMuQW5pbVJpZ2h0Um93XHJcbiAgICAgICAgICA6IENvbnN0cy5BbmltTGVmdFJvdyxcclxuICAgICAgICAzXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVQdXNoLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvUHVzaCgpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAyO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA+IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICBjb25zdCBpY2UgPSB0aGlzLmVuZ2luZS5pY2VBdCh0aGlzLnhUaWxlICsgdGhpcy5kaXJyZWN0aW9uLCB0aGlzLnlUaWxlKTtcclxuICAgICAgaWYgKGljZSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoXCJpY2UtcHVzaFwiKTtcclxuICAgICAgICBpY2UucHVzaCh0aGlzLmRpcnJlY3Rpb24pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9JY2UoKSB7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID09PSA4KSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBDb25zdHMuTW92ZUljZU1ha2UpIHtcclxuICAgICAgICB0aGlzLm1ha2VJY2UoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUljZUJsb2NrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA+PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb0ZhaWxJY2UoKSB7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID09PSA4KSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoXCJpY2UtZGlzYWJsZWRcIik7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyhcclxuICAgICAgICB0aGlzLnhUaWxlICsgdGhpcy5kaXJyZWN0aW9uLFxyXG4gICAgICAgIHRoaXMueVRpbGUgKyAxLFxyXG4gICAgICAgIFwiODgsNjYsNjZcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID49IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbGxpc2lvbnMoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuT2JqZWN0UGxheWVyKSA9PT1cclxuICAgICAgQ29uc3RzLk9iamVjdEZpcmVcclxuICAgICkge1xyXG4gICAgICB0aGlzLmJ1cm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgIHRoaXMuY29sbGlzaW9ucygpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IENvbnN0cy5Nb3ZlU3RhbmQpIHtcclxuICAgICAgdGhpcy5zdGFuZENvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IENvbnN0cy5Nb3ZlRG93bikge1xyXG4gICAgICB0aGlzLmZhbGxDb3VudGVyID0gMDtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlUmlnaHQ6XHJcbiAgICAgICAgdGhpcy5kb1J1bigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlTGVmdDpcclxuICAgICAgICB0aGlzLmRvUnVuKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgIHRoaXMuZG9HcmF2aXR5KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVVcDpcclxuICAgICAgICB0aGlzLmRvVXAoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZVR1cm46XHJcbiAgICAgICAgdGhpcy5kb1R1cm4oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUljZU1ha2U6XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VSZW1vdmU6XHJcbiAgICAgICAgdGhpcy5kb0ljZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlRmFpbDpcclxuICAgICAgICB0aGlzLmRvRmFpbEljZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlU3RhbmQ6XHJcbiAgICAgICAgdGhpcy5kb1N0YW5kKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVQdXNoOlxyXG4gICAgICAgIHRoaXMuZG9QdXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVSaXA6XHJcbiAgICAgICAgdGhpcy5kb1JpcCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlTGV2ZWxFeGl0OlxyXG4gICAgICAgIHRoaXMuZG9PdXRybygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlTGV2ZWxFbnRlcjpcclxuICAgICAgICB0aGlzLmRvSW50cm8oKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFJlc291cmNlcyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmRlZmluaXRpb25zID0gW107XHJcbiAgICB0aGlzLnJlc291cmNlcyA9IHt9O1xyXG4gICAgdGhpcy5sb2FkZWQgPSAwO1xyXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGQodHlwZSwgbmFtZSwgc3JjKSB7XHJcbiAgICB0aGlzLmRlZmluaXRpb25zLnB1c2goeyB0eXBlOiB0eXBlLCBuYW1lOiBuYW1lLCBzcmM6IHNyYyB9KTtcclxuICB9XHJcblxyXG4gIGdldChuYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXNbbmFtZV07XHJcbiAgfVxyXG5cclxuICBjaGVjayhjYWxsYmFjaykge1xyXG4gICAgaWYgKHRoaXMuY3R4KSB7XHJcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxyXG4gICAgICAgIDUwLFxyXG4gICAgICAgIDI1MCxcclxuICAgICAgICAodGhpcy5sb2FkZWQgKiA0NTApIC8gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsXHJcbiAgICAgICAgNDBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxvYWRlZCA9PT0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgY2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWR5KGNhbGxiYWNrKSB7XHJcbiAgICBmb3IgKGNvbnN0IHJlc291cmNlIG9mIHRoaXMuZGVmaW5pdGlvbnMpIHtcclxuICAgICAgaWYgKHJlc291cmNlLnR5cGUgPT09IFwiaW1hZ2VcIikge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2FkZWQgKz0gMTtcclxuICAgICAgICAgIHRoaXMuY2hlY2soY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHJlc291cmNlLnNyYztcclxuICAgICAgICB0aGlzLnJlc291cmNlc1tyZXNvdXJjZS5uYW1lXSA9IGltYWdlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXNvdXJjZS50eXBlID09PSBcImF1ZGlvXCIpIHtcclxuICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlc291cmNlLm5hbWUpO1xyXG4gICAgICAgIHRoaXMubG9hZGVkICs9IDE7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNbcmVzb3VyY2UubmFtZV0gPSBhdWRpbztcclxuICAgICAgICB0aGlzLmNoZWNrKGNhbGxiYWNrKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgRnJvc3QgfSBmcm9tIFwiLi9zdHJ1Y3RcIjtcclxuaW1wb3J0IHsgRmlyZSB9IGZyb20gXCIuL2ZpcmVcIjtcclxuaW1wb3J0IHsgSWNlIH0gZnJvbSBcIi4vaWNlXCI7XHJcbmltcG9ydCB7IEphciB9IGZyb20gXCIuL2phclwiO1xyXG5pbXBvcnQgeyBNZXRhbCB9IGZyb20gXCIuL21ldGFsXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSBcIi4vdGlsZW1hcFwiO1xyXG5pbXBvcnQgeyBsZXZlbHMgfSBmcm9tIFwiLi9sZXZlbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZW5naW5lKSB7XHJcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgZGF0YS5tYXAgPSB0aGlzLmVuZ2luZS5tYXAubWFwO1xyXG4gICAgZGF0YS50aGVtZSA9IHRoaXMuZW5naW5lLm1hcC50aGVtZTtcclxuICAgIGRhdGEuc3ByaXRlcyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBzcHJpdGUgb2YgdGhpcy5lbmdpbmUuc3ByaXRlcykge1xyXG4gICAgICBsZXQgdmFsdWUgPSB0eXBlb2Ygc3ByaXRlLmxlbmd0aCA9PT0gXCJ1bmRlZmluZWRcIiA/IDEgOiBzcHJpdGUubGVuZ3RoO1xyXG4gICAgICB2YWx1ZSA9IHNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEphciA/IHNwcml0ZS5vbkZpcmUgOiB2YWx1ZTtcclxuICAgICAgbGV0IGZsLCBmcjtcclxuICAgICAgaWYgKHNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xyXG4gICAgICAgIGZsID0gc3ByaXRlLmZyb3plbi5sZWZ0O1xyXG4gICAgICAgIGZyID0gc3ByaXRlLmZyb3plbi5yaWdodDtcclxuICAgICAgfVxyXG4gICAgICBkYXRhLnNwcml0ZXMucHVzaCh7XHJcbiAgICAgICAgaWQ6IHNwcml0ZS5pZCxcclxuICAgICAgICB4OiBzcHJpdGUueFRpbGUsXHJcbiAgICAgICAgeTogc3ByaXRlLnlUaWxlLFxyXG4gICAgICAgIHY6IHZhbHVlLFxyXG4gICAgICAgIGZsOiBmbCxcclxuICAgICAgICBmcjogZnIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgbG9hZChpbmRleCkge1xyXG4gICAgaWYgKHR5cGVvZiBsZXZlbHNbaW5kZXhdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIHRoaXMuZW5naW5lLmxldmVsID0gaW5kZXg7XHJcbiAgICBjb25zdCBsZXZlbCA9IGxldmVsc1tpbmRleF07XHJcbiAgICB0aGlzLmVuZ2luZS5zcHJpdGVzID0gW107XHJcbiAgICB0aGlzLmVuZ2luZS5tYXAgPSBuZXcgVGlsZU1hcCh0aGlzLmVuZ2luZSwgbGV2ZWwubWFwLCBsZXZlbC50aGVtZSk7XHJcbiAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiBsZXZlbC5zcHJpdGVzKSB7XHJcbiAgICAgIHN3aXRjaCAoc3ByaXRlLmlkKSB7XHJcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0UGxheWVyOlxyXG4gICAgICAgICAgdGhpcy5lbmdpbmUucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55KTtcclxuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZSh0aGlzLmVuZ2luZS5wbGF5ZXIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0SWNlOlxyXG4gICAgICAgICAgbGV0IGZyb3plbiA9IG5ldyBGcm9zdCh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgIGlmICh0eXBlb2Ygc3ByaXRlLmZsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGZyb3plbi5sZWZ0ID0gc3ByaXRlLmZsO1xyXG4gICAgICAgICAgICBmcm96ZW4ucmlnaHQgPSBzcHJpdGUuZnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUoXHJcbiAgICAgICAgICAgIG5ldyBJY2UodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSwgcGFyc2VJbnQoc3ByaXRlLnYpLCBmcm96ZW4pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0TWV0YWw6XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IE1ldGFsKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnksIDEpKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdEZpcmU6XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IEZpcmUodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0SmFyOlxyXG4gICAgICAgICAgY29uc3QgamFyID0gbmV3IEphcih0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55KTtcclxuICAgICAgICAgIGlmIChzcHJpdGUudiA9PSAxKSB7XHJcbiAgICAgICAgICAgIGphci50dXJuT25GaXJlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUoamFyKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuY2xhc3MgUGFydGljbGUge1xyXG4gIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgY29sb3IsIGludGVuc2l0eSkge1xyXG4gICAgdGhpcy5jb2xvciA9IHR5cGVvZiBjb2xvciA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiMjU1LDI1NSwyNTVcIiA6IGNvbG9yO1xyXG4gICAgdGhpcy5yID0gMztcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy52eCA9IChNYXRoLnJhbmRvbSgpICogNCAtIDIpICogaW50ZW5zaXR5O1xyXG4gICAgdGhpcy52eSA9IChNYXRoLnJhbmRvbSgpICogNiAtIDQpICogaW50ZW5zaXR5O1xyXG4gICAgdGhpcy5zcGVlZCA9IDAuMTU7XHJcbiAgICB0aGlzLmxpZmUgPSAyNTU7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gdGhpcy5saWZlIC8gMjU1O1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoXCIgKyB0aGlzLmNvbG9yICsgXCIsXCIgKyBvcGFjaXR5ICsgXCIpXCI7XHJcbiAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMuciwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlKCkge1xyXG4gICAgdGhpcy54ICs9IHRoaXMudng7XHJcbiAgICB0aGlzLnkgKz0gdGhpcy52eTtcclxuICAgIHRoaXMudnkgKz0gdGhpcy5zcGVlZDtcclxuICAgIHRoaXMubGlmZSAtPSA1O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwYXJrcyBleHRlbmRzIFNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHksIGNvbG9yLCBsZW5ndGgsIGludGVuc2l0eSkge1xyXG4gICAgc3VwZXIobnVsbCwgZW5naW5lLCB0eCwgdHksIDMyLCAzMik7XHJcbiAgICB0aGlzLmNvbG9yID0gdHlwZW9mIGNvbG9yID09PSBcInVuZGVmaW5lZFwiID8gXCIyNTUsMjU1LDI1NVwiIDogY29sb3I7XHJcbiAgICB0aGlzLmxlbmd0aCA9IHR5cGVvZiBsZW5ndGggPT09IFwidW5kZWZpbmVkXCIgPyAxMCA6IGxlbmd0aDtcclxuICAgIHRoaXMuaW50ZW5zaXR5ID0gdHlwZW9mIGludGVuc2l0eSA9PT0gXCJ1bmRlZmluZWRcIiA/IDEgOiBpbnRlbnNpdHk7XHJcbiAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucGFydGljbGVzW2ldID0gbmV3IFBhcnRpY2xlKFxyXG4gICAgICAgIHRoaXMuZW5naW5lLmN0eCxcclxuICAgICAgICB0eCAqIENvbnN0cy5UaWxlV2lkdGggKyAxNixcclxuICAgICAgICB0eSAqIENvbnN0cy5UaWxlV2lkdGggKyAxNixcclxuICAgICAgICB0aGlzLmNvbG9yLFxyXG4gICAgICAgIHRoaXMuaW50ZW5zaXR5XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5lbmdpbmUuY3R4LnNhdmUoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0uZHJhdygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbmdpbmUuY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIGVuZ2luZU1vdmUoKSB7XHJcbiAgICB0aGlzLm1vdmUoKTtcclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucGFydGljbGVzW2ldLm1vdmUoKTtcclxuICAgICAgaWYgKHRoaXMucGFydGljbGVzW2ldLmxpZmUgPCAwKSB7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMucGFydGljbGVzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnJlbW92ZVNlbGYoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGYoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5naW5lLnNmeHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuZW5naW5lLnNmeHNbaV0gPT09IHRoaXMpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5zZnhzLnNwbGljZShpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tIFwiLi9lbmdpbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3VuZCB7XHJcbiAgY29uc3RydWN0b3IocmVzb3VyY2VzKSB7XHJcbiAgICB0aGlzLnJlc291cmNlcyA9IHJlc291cmNlcztcclxuICAgIHRoaXMubXVzaWNPbiA9IHRydWU7XHJcbiAgICB0aGlzLnNvdW5kT24gPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2Z4Vm9sdW1lID0gMC4zO1xyXG4gICAgdGhpcy5zZnggPSB7XHJcbiAgICAgIFwiZmlyZS1vZmZcIjogcmVzb3VyY2VzLmdldChcInNmeC1maXJlLW9mZlwiKSxcclxuICAgICAgXCJpY2UtcHVzaFwiOiByZXNvdXJjZXMuZ2V0KFwic2Z4LWljZS1wdXNoXCIpLFxyXG4gICAgICBmYWxsOiByZXNvdXJjZXMuZ2V0KFwic2Z4LWZhbGxcIiksXHJcbiAgICAgIGZhbGxpbmc6IHJlc291cmNlcy5nZXQoXCJzZngtZmFsbGluZ1wiKSxcclxuICAgICAgXCJuZXctaWNlXCI6IHJlc291cmNlcy5nZXQoXCJzZngtbmV3LWljZVwiKSxcclxuICAgICAgY2xpbWI6IHJlc291cmNlcy5nZXQoXCJzZngtY2xpbWJcIiksXHJcbiAgICAgIFwiaWNlLWNvbGxpc2lvblwiOiByZXNvdXJjZXMuZ2V0KFwic2Z4LWljZS1jb2xsaXNpb25cIiksXHJcbiAgICAgIFwic3RhZ2UtZW50ZXJcIjogcmVzb3VyY2VzLmdldChcInNmeC1zdGFnZS1lbnRlclwiKSxcclxuICAgICAgZGFuZ2VyOiByZXNvdXJjZXMuZ2V0KFwic2Z4LWRhbmdlclwiKSxcclxuICAgICAgXCJpY2UtcmVtb3ZlXCI6IHJlc291cmNlcy5nZXQoXCJzZngtaWNlLXJlbW92ZVwiKSxcclxuICAgICAgXCJzdGF0ZS1sZWF2ZVwiOiByZXNvdXJjZXMuZ2V0KFwic2Z4LXN0YXRlLWxlYXZlXCIpLFxyXG4gICAgICBcImljZS1kaXNhYmxlZFwiOiByZXNvdXJjZXMuZ2V0KFwic2Z4LWRpc2FibGVkXCIpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHBsYXkoc2Z4KSB7XHJcbiAgICBpZiAoIXRoaXMuc291bmRPbikgcmV0dXJuO1xyXG4gICAgdGhpcy5zZnhbc2Z4XS52b2x1bWUgPSB0aGlzLnNmeFZvbHVtZTtcclxuICAgIHRoaXMuc2Z4W3NmeF0uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgdGhpcy5zZnhbc2Z4XS5wbGF5KCkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgcGxheU9uY2Uoc2Z4KSB7XHJcbiAgICBpZiAoIXRoaXMuc2Z4W3NmeF0ucGF1c2VkKSByZXR1cm47XHJcbiAgICBpZiAoIXRoaXMuc291bmRPbikgcmV0dXJuO1xyXG4gICAgdGhpcy5zZnhbc2Z4XS52b2x1bWUgPSB0aGlzLnNmeFZvbHVtZTtcclxuICAgIHRoaXMuc2Z4W3NmeF0uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgdGhpcy5zZnhbc2Z4XS5wbGF5KCkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgc3RvcChzZngpIHtcclxuICAgIHRoaXMuc2Z4W3NmeF0ucGF1c2UoKTtcclxuICAgIHRoaXMuc2Z4W3NmeF0uY3VycmVudFRpbWUgPSAwO1xyXG4gIH1cclxuXHJcbiAgc291bmR0cmFjaygpIHtcclxuICAgIGlmICghdGhpcy5tdXNpY09uKSByZXR1cm47XHJcbiAgICB0aGlzLm11c2ljID0gdGhpcy5yZXNvdXJjZXMuZ2V0KFwic2Z4LW11c2ljLXNwYXJrc1wiKTtcclxuICAgIHRoaXMubXVzaWMubXV0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubXVzaWMudm9sdW1lID0gMC4yO1xyXG4gICAgdGhpcy5tdXNpYy5sb29wID0gdHJ1ZTtcclxuICAgIHRoaXMubXVzaWMucGxheSgpLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vc3RydWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICAvKipcclxuICAgKiBCYXNlIGNsYXNzIG9mIHRoZSBzcHJpdGVcclxuICAgKiBAcGFyYW0ge29iamVjdH0gZW5naW5lICAgRW5naW5lIEVuZ2luZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eCAgICAgUG9zaXRpb24gdGlsZSB4IGluIHRoZSBtYXBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdHkgICAgIFBvc2l0aW9uIHRpbGUgeSBpbiB0aGUgbWFwXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoICBXaWR0aCBvZiB0aGUgc3ByaXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgdGhlIHNwcml0ZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGlkLCBlbmdpbmUsIHR4LCB0eSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmN0eCA9IGVuZ2luZS5jdHg7XHJcbiAgICB0aGlzLmNvcm5lcnMgPSBuZXcgUG9zaXRpb24oKTtcclxuICAgIHRoaXMuc29saWQgPSB0cnVlO1xyXG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuY291bnRlciA9IGZhbHNlO1xyXG4gICAgdGhpcy5zcGVlZCA9IDQ7XHJcbiAgICB0aGlzLnN0YXRlID0gQ29uc3RzLk1vdmVTdGFuZDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5kaXJyZWN0aW9uID0gMDtcclxuICAgIHRoaXMueFRpbGUgPSB0eDtcclxuICAgIHRoaXMueVRpbGUgPSB0eTtcclxuICAgIHRoaXMueCA9IHRoaXMueFRpbGUgKiBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgdGhpcy55ID0gdGhpcy55VGlsZSAqIENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFNldHMgc3ByaXRlIHN0YXRlc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGF0ZSAgQ29uc3RhbnQgb2YgdGhlIHN0YXRlXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBtb3ZpbmcgVHJ1ZSBpZiBzcHJpdGUgaXMgbW92aW5nXHJcbiAgICovXHJcbiAgc2V0U3RhdGUoc3RhdGUsIG1vdmluZykge1xyXG4gICAgdGhpcy5tb3ZpbmcgPSB0eXBlb2YgbW92aW5nID09PSBcInVuZGVmaW5lZFwiID8gZmFsc2UgOiBtb3Zpbmc7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGlsZSh0eCwgdHkpIHtcclxuICAgIHJldHVybiB0aGlzLmVuZ2luZS5tYXAuZ2V0VGlsZSh0eCwgdHkpO1xyXG4gIH1cclxuXHJcbiAgaXNTcHJpdGVBdCh0eCwgdHkpIHtcclxuICAgIHJldHVybiB0aGlzLnhUaWxlID09PSB0eCAmJiB0aGlzLnlUaWxlID09PSB0eTtcclxuICB9XHJcblxyXG4gIHNwcml0ZVR5cGVBdCh0eCwgdHkpIHtcclxuICAgIHJldHVybiB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodHgsIHR5KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvcm5lcnMoKSB7XHJcbiAgICB0aGlzLmNvcm5lcnMudSA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUsIHRoaXMueVRpbGUgLSAxKTtcclxuICAgIHRoaXMuY29ybmVycy5kID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy5jb3JuZXJzLmwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlIC0gMSwgdGhpcy55VGlsZSk7XHJcbiAgICB0aGlzLmNvcm5lcnMuciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgKyAxLCB0aGlzLnlUaWxlKTtcclxuICAgIHRoaXMuY29ybmVycy51bCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgLSAxLCB0aGlzLnlUaWxlIC0gMSk7XHJcbiAgICB0aGlzLmNvcm5lcnMudXIgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlICsgMSwgdGhpcy55VGlsZSAtIDEpO1xyXG4gICAgdGhpcy5jb3JuZXJzLmRsID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSAtIDEsIHRoaXMueVRpbGUgKyAxKTtcclxuICAgIHRoaXMuY29ybmVycy5kciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgKyAxLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb3NpdGlvbigpIHtcclxuICAgIHRoaXMueFRpbGUgPSBNYXRoLmZsb29yKHRoaXMueCAvIENvbnN0cy5UaWxlV2lkdGgpO1xyXG4gICAgdGhpcy55VGlsZSA9IE1hdGguZmxvb3IodGhpcy55IC8gQ29uc3RzLlRpbGVXaWR0aCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlKCkge31cclxuXHJcbiAgZW5naW5lTW92ZSgpIHtcclxuICAgIHRoaXMudXBkYXRlQ29ybmVycygpO1xyXG4gICAgdGhpcy5tb3ZlKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBTdG9yZXMgcG9zaXRpb24gb2YgdGhlIGNvcm5lcnMgYW5kIHZlcnRpY2VzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51ID0gMDtcclxuICAgIHRoaXMuZCA9IDA7XHJcbiAgICB0aGlzLmwgPSAwO1xyXG4gICAgdGhpcy5yID0gMDtcclxuICAgIHRoaXMudWwgPSAwO1xyXG4gICAgdGhpcy51ciA9IDA7XHJcbiAgICB0aGlzLmRsID0gMDtcclxuICAgIHRoaXMuZHIgPSAwO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvb3Ige1xyXG4gIGNvbnN0cnVjdG9yKHR4LCB0eSkge1xyXG4gICAgdGhpcy54VGlsZSA9IHR4O1xyXG4gICAgdGhpcy55VGlsZSA9IHR5O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZyb3N0IHtcclxuICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCkge1xyXG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcclxuICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCB7XHJcbiAgLyoqXHJcbiAgICogVGlsZW1hcCBjbGFzc1xyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgRW5naW5lXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG1hcCAgTWF0cml4IG9mIHRoZSBtYXBcclxuICAgKi9cclxuXHJcbiAgY29uc3RydWN0b3IoZW5naW5lLCBtYXAsIHRoZW1lKSB7XHJcbiAgICB0aGlzLmN0eCA9IGVuZ2luZS5jdHg7XHJcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcclxuICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgdGhpcy50aGVtZSA9IHRoZW1lO1xyXG4gICAgdGhpcy50aWxlV2lkdGggPSBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgdGhpcy50aWxlSGVpZ2h0ID0gQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXAubGVuZ3RoIC0gMTtcclxuICAgIHRoaXMud2lkdGggPSB0aGlzLm1hcFswXS5sZW5ndGggLSAxO1xyXG4gICAgdGhpcy50aWxlc0ltYWdlID0gdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldChcInRpbGVtYXBcIik7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGNvbnRlbnQgb2YgdGhlIHRpbGUgaW5zaWRlIHRoZSBtYXRyaXhcclxuICAgKiBpZiBwb3NpdGlvbiBvdXQgb2YgYm91bmRzIHJldHVybnMgQ29uc3RzLk9CSkVDVF9PVVRcclxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHkgcG9zaXRpb25cclxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHggcG9zaXRpb25cclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9ICAgQ29udGVudCBvZiB0aGUgdGlsZVxyXG4gICAqL1xyXG4gIGdldFRpbGUoeCwgeSkge1xyXG4gICAgaWYgKHggPCAwIHx8IHkgPCAwIHx8IHggPiB0aGlzLndpZHRoIHx8IHkgPiB0aGlzLmhlaWdodCkge1xyXG4gICAgICByZXR1cm4gQ29uc3RzLk9iamVjdE91dDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLm1hcFt5XVt4XTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogRHJhd3MgdGhlIG1hcFxyXG4gICAqIEByZXR1cm4ge25vbmV9XHJcbiAgICovXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMud2lkdGg7ICsraSkge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSB0aGlzLmhlaWdodDsgKytqKSB7XHJcbiAgICAgICAgbGV0IHRpbGVUeXBlID0gQ29uc3RzLlRpbGVCYWNrZ3JvdW5kO1xyXG4gICAgICAgIGlmICh0aGlzLm1hcFtqXVtpXSA9PT0gMSkge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmdldFRpbGUoaSAtIDEsIGopICYmICF0aGlzLmdldFRpbGUoaSArIDEsIGopKSB7XHJcbiAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRpbGVCb3RoU2lkZXM7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmdldFRpbGUoaSAtIDEsIGopKSB7XHJcbiAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRpbGVMZWZ0U2lkZTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2V0VGlsZShpICsgMSwgaikpIHtcclxuICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZVJpZ2h0U2lkZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRpbGVNaWRkbGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgIHRoaXMudGlsZXNJbWFnZSxcclxuICAgICAgICAgIHRpbGVUeXBlLFxyXG4gICAgICAgICAgdGhpcy50aGVtZSAqIHRoaXMudGlsZUhlaWdodCxcclxuICAgICAgICAgIHRoaXMudGlsZVdpZHRoLFxyXG4gICAgICAgICAgdGhpcy50aWxlSGVpZ2h0LFxyXG4gICAgICAgICAgaSAqIHRoaXMudGlsZVdpZHRoLFxyXG4gICAgICAgICAgaiAqIHRoaXMudGlsZUhlaWdodCxcclxuICAgICAgICAgIHRoaXMudGlsZVdpZHRoLFxyXG4gICAgICAgICAgdGhpcy50aWxlSGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgbW92ZSgpIHt9XHJcblxyXG4gIGVuZ2luZU1vdmUoKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbGUgPSBPYmplY3QuZnJlZXplKHtcclxuICB0aWxlczoge1xyXG4gICAgW0NvbnN0cy5PYmplY3RCYWNrZ3JvdW5kXToge1xyXG4gICAgICBzb2xpZDogZmFsc2UsXHJcbiAgICAgIGZyZWV6ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgW0NvbnN0cy5PYmplY3RPdXRdOiB7XHJcbiAgICAgIHNvbGlkOiB0cnVlLFxyXG4gICAgICBmcmVlemU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIFtDb25zdHMuT2JqZWN0UGxheWVyXToge1xyXG4gICAgICBzb2xpZDogdHJ1ZSxcclxuICAgICAgZnJlZXplOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBbQ29uc3RzLk9iamVjdEljZV06IHtcclxuICAgICAgc29saWQ6IHRydWUsXHJcbiAgICAgIGZyZWV6ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgW0NvbnN0cy5PYmplY3RNZXRhbF06IHtcclxuICAgICAgc29saWQ6IHRydWUsXHJcbiAgICAgIGZyZWV6ZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBbQ29uc3RzLk9iamVjdFdhbGxdOiB7XHJcbiAgICAgIHNvbGlkOiB0cnVlLFxyXG4gICAgICBmcmVlemU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgW0NvbnN0cy5PYmplY3RGaXJlXToge1xyXG4gICAgICBzb2xpZDogZmFsc2UsXHJcbiAgICAgIGZyZWV6ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgW0NvbnN0cy5PYmplY3RKYXJdOiB7XHJcbiAgICAgIHNvbGlkOiB0cnVlLFxyXG4gICAgICBmcmVlemU6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGlzU29saWQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVzW2lkXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVTkRFRklORUQgT04gaXNTb2xpZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW2lkXS5zb2xpZDtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBpc0ZyZWV6YWJsZTogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMudGlsZXNbaWRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVOREVGSU5FRCBPTiBpc0ZyZWV6YWJsZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW2lkXS5mcmVlemU7XHJcbiAgICB9XHJcbiAgfSxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=