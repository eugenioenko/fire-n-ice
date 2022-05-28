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
   * Animated Sprite, inherits from Sprite.
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
    this.direction = 0;
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
    if (!this.canGlide(this.direction)) {
      this.direction = 0;
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
      this.x += 4 * this.direction;
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
    this.direction = typeof dir === "undefined" ? this.direction : dir;
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
    this.direction = 0;
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
    if (!this.canGlide(this.direction)) {
      this.direction = 0;
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
      this.x += 4 * this.direction;
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
    this.direction = typeof dir === "undefined" ? this.direction : dir;
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
    this.direction = 1;
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
      if (this.direction !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirLeft) {
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
        this.direction = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirLeft;
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
      if (this.direction !== _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight) {
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
        this.direction = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight;
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
        if (this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight) {
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
      if (this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight) {
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
      this.x += this.speed * this.direction;
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
          this.direction !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
          48,
          true
        );
      } else {
        this.setAnim(
          _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimStandStart,
          _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimStandEnd,
          true,
          this.direction !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
          8,
          true
        );
      }
    } else {
      this.setAnim(
        _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart,
        _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimCrouchStart,
        false,
        this.direction !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow,
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
            this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight
              ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow
              : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow
          );
          break;
        case 6:
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimJumpStart,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimJumpStart,
            false,
            this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight
              ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow
              : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow
          );
          this.x += 8 * this.direction;
          this.y -= 8;
          break;
        case 9:
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimJumpEnd,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimJumpEnd,
            false,
            this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight
              ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow
              : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow
          );
          this.x += 8 * this.direction;
          this.y -= 8;
          break;
        case 12:
          this.setAnim(
            2,
            2,
            false,
            this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight
              ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow
              : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow
          );
          this.x += 8 * this.direction;
          this.y -= 8;
          break;
        case 18:
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimStand,
            _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimStand,
            false,
            this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight
              ? _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimRightRow
              : _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimLeftRow
          );
          this.x += 8 * this.direction;
          this.y -= 8;
          break;
      }
    } else {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].MoveStand, false);
    }
  }

  makeIce() {
    this.engine.sound.play("new-ice");
    this.engine.addIceBlock(this.xTile + this.direction, this.yTile + 1);
    this.engine.addSparks(this.xTile + this.direction, this.yTile + 1);
    this.engine.addSparks(
      this.xTile + this.direction,
      this.yTile + 1,
      "124, 214, 255",
      5
    );
  }

  removeIceBlock() {
    this.engine.sound.play("ice-remove");
    this.engine.removeIceBlock(this.xTile + this.direction, this.yTile + 1);
    this.engine.addSparks(this.xTile + this.direction, this.yTile + 1);
    this.engine.addSparks(
      this.xTile + this.direction,
      this.yTile + 1,
      "124, 214, 255",
      5
    );
  }

  push() {
    let ice = this.engine.iceAt(this.xTile + this.direction, this.yTile);
    if (ice && ice.canGlide(this.direction)) {
      this.engine.addSparks(
        this.xTile + this.direction,
        this.yTile,
        "255, 255, 255",
        3
      );
      this.engine.addSparks(
        this.xTile + this.direction,
        this.yTile,
        "124, 214, 255",
        3,
        1.5
      );
      this.setAnim(
        _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushStart,
        _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].AnimPushEnd,
        false,
        this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].DirRight
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
      const ice = this.engine.iceAt(this.xTile + this.direction, this.yTile);
      if (ice) {
        this.engine.sound.play("ice-push");
        ice.push(this.direction);
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
        this.xTile + this.direction,
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
    this.direction = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9maXJlbmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9sZXZlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21ldGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NmeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RydWN0LmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9E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Q0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0R0E7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxpREFBaUQ7QUFDeEQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTyw4Q0FBOEM7QUFDckQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw0QkFBNEI7QUFDbkM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTyw0QkFBNEI7QUFDbkM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyxrREFBa0Q7QUFDekQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTyw4Q0FBOEM7QUFDckQsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw4Q0FBOEM7QUFDckQsT0FBTyw4Q0FBOEM7QUFDckQsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywrQkFBK0I7QUFDdEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw4Q0FBOEM7QUFDckQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw4QkFBOEI7QUFDckMsT0FBTyw2QkFBNkI7QUFDcEMsT0FBTyw2QkFBNkI7QUFDcEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw4QkFBOEI7QUFDckMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywyQkFBMkI7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw4QkFBOEI7QUFDckMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTyxnREFBZ0Q7QUFDdkQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw4Q0FBOEM7QUFDckQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTywrQ0FBK0M7QUFDdEQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw4Q0FBOEM7QUFDckQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw4Q0FBOEM7QUFDckQsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTyxnREFBZ0Q7QUFDdkQsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw4Q0FBOEM7QUFDckQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSx5QkFBeUI7QUFDdEMsYUFBYSw0QkFBNEI7QUFDekMsYUFBYSw2QkFBNkI7QUFDMUMsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw0QkFBNEI7QUFDbkMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0QkFBNEI7QUFDM0MsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNEJBQTRCO0FBQ25DLE9BQU8sMEJBQTBCO0FBQ2pDLE9BQU8sMkJBQTJCO0FBQ2xDLE9BQU8sMEJBQTBCO0FBQ2pDO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDLzRCQTtBQUFBO0FB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bmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2ZpcmVuaWNlLmpzXCIpO1xuIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1TcHJpdGUgZXh0ZW5kcyBTcHJpdGUge1xyXG4gIC8qKlxyXG4gICAqIEFuaW1hdGVkIFNwcml0ZSwgaW5oZXJpdHMgZnJvbSBTcHJpdGUuXHJcbiAgICogQWRkcyBkcmF3aW5nIG9mIHBpY3R1cmVzIGluIHRoZSBib2R5IG9mIHNwcml0ZVxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgICAgRW5naW5lIEVuZ2luZVxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBpbWFnZSAgIERvbSBpbWFnZSBvYmplY3QgKGltZyBzcmM9KVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eCAgICAgIFRpbGUgWCBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eSAgICAgIFRpbGUgWSBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAgIFdpZHRoIG9mIHRoZSBzcHJpdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0ICBIZWlnaHQgb2YgdGhlIHNwcml0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRYIE9mZnNldCBYIG9mIGRyYXdpbmcgdGhlIHBpY3R1cmUgaW50byB0aGUgY2FudmFzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFkgT2Zmc2V0IFkgb2YgZHJhd2luZyB0aGUgcGljdHVyZSBpbnRvIHRoZSBjYW52YXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgICBBbmltYXRpb24gZnJhbWUgc3RhcnRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZW5kICAgICBBbmltYXRpb24gZnJhbWUgZW5kXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBsb29wICAgUmVwZWF0IGFuaW1hdGlvblxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaWQsXHJcbiAgICBlbmdpbmUsXHJcbiAgICBpbWFnZSxcclxuICAgIHR4LFxyXG4gICAgdHksXHJcbiAgICB3aWR0aCxcclxuICAgIGhlaWdodCxcclxuICAgIG9mZnNldFgsXHJcbiAgICBvZmZzZXRZLFxyXG4gICAgc3RhcnQsXHJcbiAgICBlbmQsXHJcbiAgICBsb29wXHJcbiAgKSB7XHJcbiAgICBzdXBlcihpZCwgZW5naW5lLCB0eCwgdHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy5pbWFnZSA9IHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoaW1hZ2UpO1xyXG4gICAgdGhpcy5hbmltTG9vcCA9IGxvb3A7XHJcbiAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgdGhpcy5hbmltRW5kID0gZW5kO1xyXG4gICAgdGhpcy5hbmltQ291bnQgPSAwO1xyXG4gICAgdGhpcy5hbmltRGVsYXkgPSBDb25zdHMuQW5pbURlZmF1bHREZWxheTtcclxuICAgIHRoaXMuYW5pbURlbGF5Q291bnQgPSAwO1xyXG4gICAgdGhpcy5hbmltUm93ID0gMDtcclxuICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFg7XHJcbiAgICB0aGlzLm9mZnNldFkgPSBvZmZzZXRZO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgc3ByaXRlIGFuaW1hdGlvbiBmcmFtZXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgU3RhcnQgZnJhbWUgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgICBFbmQgZnJhbWUgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCAgSWYgdHJ1ZSwgYW5pbWF0aW9uIHdpbGwgbG9vcFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgICBSb3cgb2YgdGhlIGZyYW1lcyBpbiB0aGUgc3ByaXRlIGltYWdlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IERlbGF5IGJldHdlZW4gZWFjaCBmcmFtZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSAgU2V0cyBhbGwgdGhlIG5ldyB2YWx1ZXMgb25seSBvbmUgdGltZS5cclxuICAgKi9cclxuICBzZXRBbmltKHN0YXJ0LCBlbmQsIGxvb3AsIHJvdywgZGVsYXksIG9uY2UpIHtcclxuICAgIG9uY2UgPSB0eXBlb2Ygb25jZSA9PT0gXCJ1bmRlZmluZWRcIiA/IGZhbHNlIDogb25jZTtcclxuICAgIGRlbGF5ID0gdHlwZW9mIGRlbGF5ID09PSBcInVuZGVmaW5lZFwiID8gQ29uc3RzLkFuaW1EZWZhdWx0RGVsYXkgOiBkZWxheTtcclxuICAgIHJvdyA9IHR5cGVvZiByb3cgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzLmFuaW1Sb3cgOiByb3c7XHJcbiAgICBpZiAoIW9uY2UpIHtcclxuICAgICAgdGhpcy5hbmltU3RhcnQgPSBzdGFydDtcclxuICAgICAgdGhpcy5hbmltRW5kID0gZW5kO1xyXG4gICAgICB0aGlzLmFuaW1Db3VudCA9IHN0YXJ0O1xyXG4gICAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgICAgdGhpcy5hbmltRGVsYXkgPSBkZWxheTtcclxuICAgICAgdGhpcy5hbmltUm93ID0gcm93O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuYW5pbVN0YXJ0ICE9PSBzdGFydCB8fFxyXG4gICAgICAgIHRoaXMuYW5pbUVuZCAhPT0gZW5kIHx8XHJcbiAgICAgICAgdGhpcy5hbmltTG9vcCAhPT0gbG9vcCB8fFxyXG4gICAgICAgIHRoaXMuYW5pbVJvdyAhPT0gcm93XHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuYW5pbVN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5hbmltRW5kID0gZW5kO1xyXG4gICAgICAgIHRoaXMuYW5pbUNvdW50ID0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5hbmltTG9vcCA9IGxvb3A7XHJcbiAgICAgICAgdGhpcy5hbmltRGVsYXkgPSBkZWxheTtcclxuICAgICAgICB0aGlzLmFuaW1Sb3cgPSByb3c7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogRHJhd3MgdGhlIGZyYW1lIG9mIHRoZSBzcHJpdGUgaW4gdGhlIGNhbnZhc1xyXG4gICAqL1xyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgIHRoaXMuYW5pbUNvdW50ICogdGhpcy53aWR0aCxcclxuICAgICAgdGhpcy5hbmltUm93ICogdGhpcy5oZWlnaHQsXHJcbiAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICB0aGlzLnggKyB0aGlzLm9mZnNldFgsXHJcbiAgICAgIHRoaXMueSArIHRoaXMub2Zmc2V0WSxcclxuICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgdGhpcy5oZWlnaHRcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuYW5pbURlbGF5Q291bnQrKyA+IHRoaXMuYW5pbURlbGF5KSB7XHJcbiAgICAgIHRoaXMuYW5pbUNvdW50ICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLmFuaW1Db3VudCA+IHRoaXMuYW5pbUVuZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1Mb29wKSB7XHJcbiAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHRoaXMuYW5pbVN0YXJ0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHRoaXMuYW5pbUVuZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3RnJvc3QoKSB7XHJcbiAgICBjb25zdCBsZWZ0U3ByaXRlID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSAtIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgaWYgKFxyXG4gICAgICBsZWZ0U3ByaXRlICYmXHJcbiAgICAgIGxlZnRTcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiZcclxuICAgICAgbGVmdFNwcml0ZS5mcm96ZW4ucmlnaHRcclxuICAgICkge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldChcImZyb3N0XCIpLFxyXG4gICAgICAgIHRoaXMueFRpbGUgKiB0aGlzLndpZHRoIC0gNyxcclxuICAgICAgICB0aGlzLnlUaWxlICogdGhpcy5oZWlnaHRcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJpZ2h0U3ByaXRlID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSArIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgaWYgKFxyXG4gICAgICByaWdodFNwcml0ZSAmJlxyXG4gICAgICByaWdodFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJlxyXG4gICAgICByaWdodFNwcml0ZS5mcm96ZW4ubGVmdFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KFwiZnJvc3RcIiksXHJcbiAgICAgICAgKHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCkgKiB0aGlzLndpZHRoIC0gNyxcclxuICAgICAgICB0aGlzLnlUaWxlICogdGhpcy5oZWlnaHRcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IENvbnN0cyA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgVGlsZVdpZHRoOiAzMixcclxuICAgIE1vdmVTdGFuZDogMCxcclxuICAgIE1vdmVMZWZ0OiAxLFxyXG4gICAgTW92ZVJpZ2h0OiAyLFxyXG4gICAgTW92ZURvd246IDMsXHJcbiAgICBNb3ZlVXA6IDQsXHJcbiAgICBNb3ZlVHVybjogNSxcclxuICAgIE1vdmVJY2VNYWtlOiA2LFxyXG4gICAgTW92ZUljZVJlbW92ZTogNyxcclxuICAgIE1vdmVJY2VNb3Zpbmc6IDgsXHJcbiAgICBNb3ZlSWNlQ2hlY2s6IDksXHJcbiAgICBNb3ZlUmlwOiAxMCxcclxuICAgIE1vdmVQdXNoOiA4LFxyXG4gICAgTW92ZUljZUZhaWw6IDExLFxyXG4gICAgTW92ZUxldmVsRXhpdDogMTIsXHJcbiAgICBNb3ZlTGV2ZWxFbnRlcjogMTMsXHJcbiAgICBEaXJMZWZ0OiAtMSxcclxuICAgIERpclJpZ2h0OiAxLFxyXG4gICAgQW5pbURlZmF1bHREZWxheTogMixcclxuICAgIEFuaW1GcmFtZUNvdW50OiAxNixcclxuICAgIEFuaW1MZWZ0Um93OiAxLFxyXG4gICAgQW5pbVJpZ2h0Um93OiAwLFxyXG4gICAgQW5pbVJ1blN0YXJ0OiAwLFxyXG4gICAgQW5pbVJ1bkVuZDogMyxcclxuICAgIEFuaW1TdGFuZDogNCxcclxuICAgIEFuaW1UdXJuU3RhcnQ6IDQsXHJcbiAgICBBbmltVHVybkVuZDogNyxcclxuICAgIEFuaW1GYWxsU3RhcnQ6IDgsXHJcbiAgICBBbmltRmFsbEVuZDogOSxcclxuICAgIEFuaW1CaWdGYWxsU3RhcnQ6IDEwLFxyXG4gICAgQW5pbUJpZ0ZhbGxFbmQ6IDExLFxyXG4gICAgQW5pbVB1c2hTdGFydDogMTIsXHJcbiAgICBBbmltUHVzaEVuZDogMTMsXHJcbiAgICBBbmltSnVtcFN0YXJ0OiAxNCxcclxuICAgIEFuaW1KdW1wRW5kOiAxNSxcclxuICAgIEFuaW1TdGFuZFN0YXJ0OiAxNixcclxuICAgIEFuaW1TdGFuZEVuZDogMTcsXHJcbiAgICBBbmltSWNlU3RhcnQ6IDE4LFxyXG4gICAgQW5pbUljZUVuZDogMTksXHJcbiAgICBBbmltQ3JvdWNoU3RhcnQ6IDIwLFxyXG4gICAgQW5pbUNyb3VjaEVuZDogMjIsXHJcbiAgICBBbmltUmlwU3RhcnQ6IDIzLFxyXG4gICAgQW5pbVJpcEVuZDogMjQsXHJcbiAgICBBbmltU2xlZXBTdGFydDogMjUsXHJcbiAgICBBbmltU2xlZXBFbmQ6IDI2LFxyXG4gICAgVGlsZUJhY2tncm91bmQ6IDAsXHJcbiAgICBUaWxlQm90aFNpZGVzOiAzMixcclxuICAgIFRpbGVMZWZ0U2lkZTogNjQsXHJcbiAgICBUaWxlTWlkZGxlOiA5NixcclxuICAgIFRpbGVSaWdodFNpZGU6IDEyOCxcclxuICAgIE9iamVjdE91dDogLTEsXHJcbiAgICBPYmplY3RCYWNrZ3JvdW5kOiAwLFxyXG4gICAgT2JqZWN0V2FsbDogMSxcclxuICAgIE9iamVjdEljZTogMyxcclxuICAgIE9iamVjdE1ldGFsOiA0LFxyXG4gICAgT2JqZWN0SmFyOiA1LFxyXG4gICAgT2JqZWN0RmlyZTogNixcclxuICAgIE9iamVjdFBsYXllcjogNyxcclxuICAgIEdhbWVTdGF0ZVBsYXk6IDEsXHJcbiAgICBHYW1lU3RhdGVJbnRybzogMlxyXG59KTtcclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEZyb3N0IH0gZnJvbSBcIi4vc3RydWN0XCI7XHJcbmltcG9ydCB7IEljZSB9IGZyb20gXCIuL2ljZVwiO1xyXG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gXCIuL2tleWJvYXJkXCI7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgU291bmQgfSBmcm9tIFwiLi9zb3VuZFwiO1xyXG5pbXBvcnQgeyBTcGFya3MgfSBmcm9tIFwiLi9zZnhcIjtcclxuLyoqXHJcbiAqIEVuZ2luZSBMb29wXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW5naW5lIHtcclxuICBjb25zdHJ1Y3RvcihjYW52YXMsIHJlc291cmNlcykge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLmN3aWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgIHRoaXMuY2hlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICB0aGlzLnJlc291cmNlcyA9IHJlc291cmNlcztcclxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgdGhpcy5zcHJpdGVzID0gW107XHJcbiAgICB0aGlzLnNmeHMgPSBbXTtcclxuICAgIHRoaXMucGxheWVyID0ge307XHJcbiAgICB0aGlzLmxldmVsID0gMDtcclxuICAgIHRoaXMua2V5Ym9hcmQgPSBuZXcgS2V5Ym9hcmQoKTtcclxuICAgIHRoaXMuc291bmQgPSBuZXcgU291bmQocmVzb3VyY2VzKTtcclxuICAgIHRoaXMuc2NlbmUgPSBuZXcgU2NlbmUodGhpcyk7XHJcbiAgICB0aGlzLmVkaXRvciA9IGZhbHNlO1xyXG4gICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA9IDA7XHJcbiAgICBjb25zdCBsZXZlbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGV2ZWxcIik7XHJcbiAgICBpZiAobGV2ZWwgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5sZXZlbCA9IHBhcnNlSW50KGxldmVsLCAxMCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNjZW5lLmxvYWQodGhpcy5sZXZlbCk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY3dpZHRoLCB0aGlzLmNoZWlnaHQpO1xyXG4gICAgdGhpcy5tYXAuZHJhdygpO1xyXG4gICAgLy8gcmV2ZXJzZSBsb29wLCBwbGF5ZXIgZHJhd3MgbGFzdFxyXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuc3ByaXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICB0aGlzLnNwcml0ZXNbaV0uZHJhdygpO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNmeHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgdGhpcy5zZnhzW2ldLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcclxuICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiO1xyXG4gICAgICB0aGlzLmN0eC5zdHJva2VXaWR0aCA9IDE7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY3dpZHRoOyB4ICs9IDMyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmNoZWlnaHQ7IHkgKz0gMzIpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVJlY3QoeCwgeSwgeCArIDMyLCB5ICsgMzIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbGxpc2lvbigpIHtcclxuICAgIGNvbnN0IGZpcmVzID0gdGhpcy5zcHJpdGVzLmZpbHRlcihcclxuICAgICAgKHNwcml0ZSkgPT4gc3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0RmlyZVxyXG4gICAgKTtcclxuICAgIGlmIChcclxuICAgICAgIWZpcmVzLmxlbmd0aCAmJlxyXG4gICAgICAhdGhpcy5lZGl0b3IgJiZcclxuICAgICAgdGhpcy5wbGF5ZXIuc3RhdGUgIT09IENvbnN0cy5Nb3ZlTGV2ZWxFeGl0XHJcbiAgICApIHtcclxuICAgICAgdGhpcy5wbGF5ZXIub3V0cm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHRMZXZlbCgpIHtcclxuICAgIHRoaXMubGV2ZWwrKztcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGV2ZWxcIiwgdGhpcy5sZXZlbCk7XHJcbiAgICB0aGlzLnNjZW5lLmxvYWQodGhpcy5sZXZlbCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgdGhpcy5zcHJpdGVzW2ldLmVuZ2luZU1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZnhzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIHRoaXMuc2Z4c1tpXS5lbmdpbmVNb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgc3ByaXRlc01vdmluZyA9IGZhbHNlO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuc3ByaXRlc1tpXSAmJlxyXG4gICAgICAgIHRoaXMuc3ByaXRlc1tpXS5pZCAhPT0gQ29uc3RzLk9iamVjdFBsYXllciAmJlxyXG4gICAgICAgIHRoaXMuc3ByaXRlc1tpXS5tb3ZpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgc3ByaXRlc01vdmluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghc3ByaXRlc01vdmluZykge1xyXG4gICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ICs9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID0gMDtcclxuICAgIH1cclxuICAgIC8vIGNoZWNrIGlmIG5vIHNwcml0ZXMgaGF2ZSBtb3ZlZCBmb3IgMiB0dXJuc1xyXG4gICAgaWYgKCFzcHJpdGVzTW92aW5nICYmIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPiAxKSB7XHJcbiAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xyXG4gICAgICB0aGlzLmlucHV0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbGxpc2lvbigpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQoKSB7XHJcbiAgICBpZiAodGhpcy5rZXlib2FyZC5kb3duIHx8IHRoaXMua2V5Ym9hcmQuYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMucGxheWVyLmljZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMua2V5Ym9hcmQubGVmdCkge1xyXG4gICAgICB0aGlzLnBsYXllci5sZWZ0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5rZXlib2FyZC5yaWdodCkge1xyXG4gICAgICB0aGlzLnBsYXllci5yaWdodCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMua2V5Ym9hcmQuZW50ZXIpIHtcclxuICAgICAgdGhpcy5zb3VuZC5zdG9wKFwiZGFuZ2VyXCIpO1xyXG4gICAgICB0aGlzLnNjZW5lLmxvYWQodGhpcy5sZXZlbCk7XHJcbiAgICAgIHRoaXMua2V5Ym9hcmQuZW50ZXIgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGljZUF0KHR4LCB0eSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pc1Nwcml0ZUF0KHR4LCB0eSkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhZGRJY2VCbG9jayh0eCwgdHkpIHtcclxuICAgIGxldCBmb3VuZEljZUJsb2NrcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuc3ByaXRlc1tpXS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJlxyXG4gICAgICAgIHRoaXMuc3ByaXRlc1tpXS55VGlsZSA9PT0gdHlcclxuICAgICAgKSB7XHJcbiAgICAgICAgbGV0IGljZSA9IHRoaXMuc3ByaXRlc1tpXTtcclxuICAgICAgICBpZiAoaWNlLnhUaWxlIC0gMSA9PT0gdHggfHwgaWNlLnhUaWxlICsgaWNlLmxlbmd0aCA9PT0gdHgpIHtcclxuICAgICAgICAgIGZvdW5kSWNlQmxvY2tzLnB1c2goaWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChmb3VuZEljZUJsb2Nrcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5zcHJpdGVzLnB1c2gobmV3IEljZSh0aGlzLCB0eCwgdHksIDEpKTtcclxuICAgIH0gZWxzZSBpZiAoZm91bmRJY2VCbG9ja3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIGZvdW5kSWNlQmxvY2tzWzBdLmFkZEJsb2NrKHR4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChmb3VuZEljZUJsb2Nrc1swXS54VGlsZSA8PSBmb3VuZEljZUJsb2Nrc1sxXS54VGlsZSkge1xyXG4gICAgICAgIHRoaXMuam9pbkljZUJsb2Nrcyhmb3VuZEljZUJsb2Nrc1swXSwgZm91bmRJY2VCbG9ja3NbMV0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuam9pbkljZUJsb2Nrcyhmb3VuZEljZUJsb2Nrc1sxXSwgZm91bmRJY2VCbG9ja3NbMF0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBqb2luSWNlQmxvY2tzKGljZWJsb2NrQSwgaWNlYmxvY2tCKSB7XHJcbiAgICBsZXQgdHggPSBpY2VibG9ja0EueFRpbGU7XHJcbiAgICBsZXQgdHkgPSBpY2VibG9ja0EueVRpbGU7XHJcbiAgICBsZXQgbGVuZ3RoID0gaWNlYmxvY2tBLmxlbmd0aCArIGljZWJsb2NrQi5sZW5ndGggKyAxO1xyXG4gICAgdGhpcy5hZGRTcHJpdGUoXHJcbiAgICAgIG5ldyBJY2UoXHJcbiAgICAgICAgdGhpcyxcclxuICAgICAgICB0eCxcclxuICAgICAgICB0eSxcclxuICAgICAgICBsZW5ndGgsXHJcbiAgICAgICAgbmV3IEZyb3N0KGljZWJsb2NrQS5mcm96ZW4ubGVmdCwgaWNlYmxvY2tCLmZyb3plbi5yaWdodClcclxuICAgICAgKVxyXG4gICAgKTtcclxuICAgIHRoaXMucmVtb3ZlU3ByaXRlKGljZWJsb2NrQSk7XHJcbiAgICB0aGlzLnJlbW92ZVNwcml0ZShpY2VibG9ja0IpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSWNlQmxvY2sodHgsIHR5KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5zcHJpdGVzW2ldLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmXHJcbiAgICAgICAgdGhpcy5zcHJpdGVzW2ldLnlUaWxlID09PSB0eSAmJlxyXG4gICAgICAgIHR4ID49IHRoaXMuc3ByaXRlc1tpXS54VGlsZSAmJlxyXG4gICAgICAgIHR4IDwgdGhpcy5zcHJpdGVzW2ldLnhUaWxlICsgdGhpcy5zcHJpdGVzW2ldLmxlbmd0aFxyXG4gICAgICApIHtcclxuICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLnJlbW92ZUJsb2NrKHR4KSA8PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLnNwcml0ZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUZpcmUodHgsIHR5KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5zcHJpdGVzW2ldLnlUaWxlID09PSB0eSAmJlxyXG4gICAgICAgIHR4ID09PSB0aGlzLnNwcml0ZXNbaV0ueFRpbGUgJiZcclxuICAgICAgICB0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PYmplY3RGaXJlXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICB0aGlzLnNwcml0ZXMucHVzaChzcHJpdGUpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU3ByaXRlKHNwcml0ZSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXSA9PT0gc3ByaXRlKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWRkU3BhcmtzKHhUaWxlLCB5VGlsZSwgY29sb3IsIHF1YW50aXR5LCBpbnRlbnNpdHkpIHtcclxuICAgIHRoaXMuc2Z4cy5wdXNoKG5ldyBTcGFya3ModGhpcywgeFRpbGUsIHlUaWxlLCBjb2xvciwgcXVhbnRpdHksIGludGVuc2l0eSkpO1xyXG4gIH1cclxuXHJcbiAgc3ByaXRlVHlwZUF0KHR4LCB0eSwgZXhjbHVkZUlkKSB7XHJcbiAgICBleGNsdWRlSWQgPSB0eXBlb2YgZXhjbHVkZUlkID09PSBcInVuZGVmaW5lZFwiID8gQ29uc3RzLk9iamVjdE91dCA6IGV4Y2x1ZGVJZDtcclxuICAgIGlmICh0eCA8IDAgfHwgdHkgPCAwIHx8IHR4ID4gdGhpcy5tYXAud2lkdGggfHwgdHkgPiB0aGlzLm1hcC5oZWlnaHQpIHtcclxuICAgICAgcmV0dXJuIENvbnN0cy5PYmplY3RPdXQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tYXAubWFwW3R5XVt0eF0pIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWFwLm1hcFt0eV1bdHhdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLnNwcml0ZXNbaV0uaXNTcHJpdGVBdCh0eCwgdHkpICYmXHJcbiAgICAgICAgICB0aGlzLnNwcml0ZXNbaV0uaWQgIT09IGV4Y2x1ZGVJZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tpXS5pZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBDb25zdHMuT2JqZWN0QmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIHNwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgaWYgKCF0aGlzLm1hcC5tYXBbdHldW3R4XSkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaXNTcHJpdGVBdCh0eCwgdHkpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tIFwiLi9hbmltc3ByaXRlXCI7XHJcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vdGlsZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaXJlIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBDb25zdHMuT2JqZWN0RmlyZSxcclxuICAgICAgZW5naW5lLFxyXG4gICAgICBcImltZ19maXJlXCIsXHJcbiAgICAgIHR4LFxyXG4gICAgICB0eSxcclxuICAgICAgQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMCxcclxuICAgICAgMyxcclxuICAgICAgdHJ1ZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgIHRoaXMuY29sbGlzaW9ucygpO1xyXG4gICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcclxuICAgICAgICB0aGlzLmRvRG93bigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29sbGlzaW9ucygpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5PYmplY3RGaXJlKSA9PT1cclxuICAgICAgQ29uc3RzLk9iamVjdEljZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoXCJmaXJlLW9mZlwiKTtcclxuICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlRmlyZSh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlKTtcclxuICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlSWNlQmxvY2sodGhpcy54VGlsZSwgdGhpcy55VGlsZSk7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBcIjI1NSwgMTI2LCAxOThcIiwgMTUsIDAuNSk7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBcIjEyNCwgMjEyLCAyNTVcIiwgMTApO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLk9iamVjdEZpcmUpID09PVxyXG4gICAgICBDb25zdHMuT2JqZWN0TWV0YWxcclxuICAgICkge1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KFwiZmlyZS1vZmZcIik7XHJcbiAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUZpcmUodGhpcy54VGlsZSwgdGhpcy55VGlsZSk7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBcIjI1NSwgMjIyLCAxMjdcIiwgMTUsIDAuNSk7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBcIjQxLCA0MiwgOTBcIiwgMTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eSgpIHtcclxuICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSAmJiB0aGlzLmNvcm5lcnMuZCAhPT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRvRG93bigpIHtcclxuICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XHJcbiAgICAgIHRoaXMueSArPSA0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBGaXJlIH0gZnJvbSBcIi4vZmlyZVwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xyXG5pbXBvcnQgeyBKYXIgfSBmcm9tIFwiLi9qYXJcIjtcclxuaW1wb3J0IHsgTWV0YWwgfSBmcm9tIFwiLi9tZXRhbFwiO1xyXG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tIFwiLi9yZXNvdXJjZXNcIjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXJcIik7XHJcbiAgbG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgbG9hZGVyLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgUHJlbG9hZEdhbWUoKTtcclxuICAgIHdpbmRvdy5maXJlbmljZSA9IHRydWU7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gUHJlbG9hZEdhbWUoKSB7XHJcbiAgY29uc3QgcmVzb3VyY2VzID0gbmV3IFJlc291cmNlcygpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJpbWFnZVwiLCBcInRpbGVtYXBcIiwgXCJpbWFnZXMvdGlsZW1hcC5wbmdcIik7XHJcbiAgcmVzb3VyY2VzLmFkZChcImltYWdlXCIsIFwiaW1nX2ljZVwiLCBcImltYWdlcy9pY2UucG5nXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJpbWFnZVwiLCBcImltZ19qYXJcIiwgXCJpbWFnZXMvamFyLnBuZ1wiKTtcclxuICByZXNvdXJjZXMuYWRkKFwiaW1hZ2VcIiwgXCJpbWdfZmlyZVwiLCBcImltYWdlcy9maXJlLnBuZ1wiKTtcclxuICByZXNvdXJjZXMuYWRkKFwiaW1hZ2VcIiwgXCJpbWdfZG9uYVwiLCBcImltYWdlcy9kb25hLnBuZ1wiKTtcclxuICByZXNvdXJjZXMuYWRkKFwiaW1hZ2VcIiwgXCJpbWdfaW50cm9cIiwgXCJpbWFnZXMvaW50cm8ucG5nXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJpbWFnZVwiLCBcImltZ19tZXRhbFwiLCBcImltYWdlcy9tZXRhbC5wbmdcIik7XHJcbiAgcmVzb3VyY2VzLmFkZChcImltYWdlXCIsIFwiZnJvc3RcIiwgXCJpbWFnZXMvZnJvemVuLnBuZ1wiKTtcclxuICByZXNvdXJjZXMuYWRkKFwiYXVkaW9cIiwgXCJzZngtaWNlLXB1c2hcIiwgXCJzb3VuZHMvc2Z4LWljZS1wdXNoLm1wM1wiKTtcclxuICByZXNvdXJjZXMuYWRkKFwiYXVkaW9cIiwgXCJzZngtZmlyZS1vZmZcIiwgXCJzb3VuZHMvc2Z4LWZpcmUtb2ZmLm1wM1wiKTtcclxuICByZXNvdXJjZXMuYWRkKFwiYXVkaW9cIiwgXCJzZngtZmFsbGluZ1wiLCBcInNvdW5kcy9zZngtZmFsbGluZy5tcDNcIik7XHJcbiAgcmVzb3VyY2VzLmFkZChcImF1ZGlvXCIsIFwic2Z4LW5ldy1pY2VcIiwgXCJzb3VuZHMvc2Z4LW5ldy1pY2UubXAzXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJhdWRpb1wiLCBcInNmeC1jbGltYlwiLCBcInNvdW5kcy9zZngtY2xpbWIubXAzXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJhdWRpb1wiLCBcInNmeC1pY2UtY29sbGlzaW9uXCIsIFwic291bmRzL3NmeC1pY2UtY29sbGlzaW9uLm1wM1wiKTtcclxuICByZXNvdXJjZXMuYWRkKFwiYXVkaW9cIiwgXCJzZngtc3RhZ2UtZW50ZXJcIiwgXCJzb3VuZHMvc2Z4LXN0YWdlLWVudGVyLm1wM1wiKTtcclxuICByZXNvdXJjZXMuYWRkKFwiYXVkaW9cIiwgXCJzZngtZGFuZ2VyXCIsIFwic291bmRzL3NmeC1kYW5nZXIubXAzXCIpO1xyXG4gIHJlc291cmNlcy5hZGQoXCJhdWRpb1wiLCBcInNmeC1pY2UtcmVtb3ZlXCIsIFwic291bmRzL3NmeC1pY2UtcmVtb3ZlLm1wM1wiKTtcclxuICByZXNvdXJjZXMuYWRkKFwiYXVkaW9cIiwgXCJzZngtc3RhdGUtbGVhdmVcIiwgXCJzb3VuZHMvc2Z4LXN0YXRlLWxlYXZlLm1wM1wiKTtcclxuICByZXNvdXJjZXMuYWRkKFwiYXVkaW9cIiwgXCJzZngtZGlzYWJsZWRcIiwgXCJzb3VuZHMvc2Z4LWRpc2FibGVkLm1wM1wiKTtcclxuICByZXNvdXJjZXMuYWRkKFwiYXVkaW9cIiwgXCJzZngtZmFsbFwiLCBcInNvdW5kcy9zZngtZmFsbC5tcDNcIik7XHJcbiAgcmVzb3VyY2VzLmFkZChcImF1ZGlvXCIsIFwic2Z4LW11c2ljLXNwYXJrc1wiLCBcIm11c2ljL3NwYXJrcy5tcDNcIik7XHJcblxyXG4gIHJlc291cmNlcy5yZWFkeSgoKSA9PiB7XHJcbiAgICBTdGFydEdhbWUocmVzb3VyY2VzKTtcclxuICAgIENoZWNrRWRpdG9yKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRMZXZlbEZyb21FdmVudChldmVudCkge1xyXG4gIGxldCBsdmwgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwibHZsXCIpO1xyXG4gIGdhbWUuZW5naW5lLmxldmVsID0gcGFyc2VJbnQobHZsLCAxMCk7XHJcbiAgZ2FtZS5lbmdpbmUuc2NlbmUubG9hZChnYW1lLmVuZ2luZS5sZXZlbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN0YXJ0R2FtZShyZXNvdXJjZXMpIHtcclxuICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XHJcbiAgbGV0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMsIHJlc291cmNlcyk7XHJcbiAgd2luZG93LmdhbWUgPSBnYW1lO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b24ubHZsXCIpLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkTGV2ZWxGcm9tRXZlbnQpO1xyXG4gIH0pO1xyXG4gIGxldCBsdmxTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGV2ZWwtc2VsZWN0b3JcIik7XHJcbiAgbHZsU2VsZWN0b3Iuc3R5bGUub3BhY2l0eSA9IDE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENoZWNrRWRpdG9yKCkge1xyXG4gIGlmICh3aW5kb3cuRklSRU5JQ0VfRURJVE9SX01PREUpIHtcclxuICAgIGdhbWUuZW5naW5lLnNvdW5kLm11c2ljT24gPSBmYWxzZTtcclxuICAgIGdhbWUuZW5naW5lLnNvdW5kLnNvdW5kT24gPSBmYWxzZTtcclxuICAgIGdhbWUuc3RhdGUgPSBDb25zdHMuR2FtZVN0YXRlUGxheTtcclxuICAgIGdhbWUuZW5naW5lLmVkaXRvciA9IHRydWU7XHJcbiAgICBnYW1lLmVuZ2luZS5rZXlib2FyZC5pbnRybyA9IGZhbHNlO1xyXG4gICAgZ2FtZS5lbmdpbmUuc291bmQubXVzaWMucGF1c2UoKTtcclxuXHJcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHhUaWxlID0gTWF0aC5mbG9vcihlLm9mZnNldFggLyAzMik7XHJcbiAgICAgIGNvbnN0IHlUaWxlID0gTWF0aC5mbG9vcihlLm9mZnNldFkgLyAzMik7XHJcbiAgICAgIGlmICh0b29sIDwgMikge1xyXG4gICAgICAgIGdhbWUuZW5naW5lLm1hcC5tYXBbeVRpbGVdW3hUaWxlXSA9IHRvb2w7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3dpdGNoICh0b29sKSB7XHJcbiAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RQbGF5ZXI6XHJcbiAgICAgICAgICAgIGdhbWUuZW5naW5lLnBsYXllci54ID0geFRpbGUgKiAzMjtcclxuICAgICAgICAgICAgZ2FtZS5lbmdpbmUucGxheWVyLnkgPSB5VGlsZSAqIDMyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdEljZTpcclxuICAgICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkSWNlQmxvY2soeFRpbGUsIHlUaWxlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RNZXRhbDpcclxuICAgICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBNZXRhbChnYW1lLmVuZ2luZSwgeFRpbGUsIHlUaWxlLCAxKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0RmlyZTpcclxuICAgICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBGaXJlKGdhbWUuZW5naW5lLCB4VGlsZSwgeVRpbGUpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RKYXI6XHJcbiAgICAgICAgICAgIGdhbWUuZW5naW5lLmFkZFNwcml0ZShuZXcgSmFyKGdhbWUuZW5naW5lLCB4VGlsZSwgeVRpbGUpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1zZWxlY3RvclwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGdhbWUuZW5naW5lLm1hcC50aGVtZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgZS50YXJnZXQuYmx1cigpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1zYXZlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0LWxldmVsXCIpLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgZ2FtZS5lbmdpbmUuc2NlbmUuc2F2ZSgpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gXCIuL2FuaW1zcHJpdGVcIjtcclxuaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5pbXBvcnQgeyBsZXZlbHMgfSBmcm9tIFwiLi9sZXZlbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBHYW1lIExvb3BcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAvKipcclxuICAgKiBAcGFyYW0geyp9IGNhbnZhcyAgIFRoZSBjYW52YXMgZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7Kn0gcmVzb3VyY2VzICBHYW1lIHJlc291cmNlc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgcmVzb3VyY2VzKSB7XHJcbiAgICB0aGlzLmVuZ2luZSA9IG5ldyBFbmdpbmUoY2FudmFzLCByZXNvdXJjZXMpO1xyXG4gICAgdGhpcy5sZXZlbHMgPSBsZXZlbHM7XHJcbiAgICB0aGlzLnN0YXRlID0gQ29uc3RzLkdhbWVTdGF0ZVBsYXk7XHJcbiAgICB0aGlzLmVuZ2luZS5zb3VuZC5zb3VuZHRyYWNrKCk7XHJcbiAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcF8uYmluZCh0aGlzKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbiAgICB0aGlzLmdhbWVMb29wKCk7XHJcbiAgfVxyXG5cclxuICBnYW1lTG9vcF8oKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgY2FzZSBDb25zdHMuR2FtZVN0YXRlSW50cm86XHJcbiAgICAgICAgdGhpcy5kb0ludHJvKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLkdhbWVTdGF0ZVBsYXk6XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLm1vdmUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5nYW1lTG9vcCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVJbnRybygpIHtcclxuICAgIHRoaXMuaW50cm8gPSBuZXcgQW5pbVNwcml0ZShcclxuICAgICAgbnVsbCxcclxuICAgICAgdGhpcy5lbmdpbmUsXHJcbiAgICAgIFwiaW1nX2ludHJvXCIsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIDU0NCxcclxuICAgICAgNDE2LFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICAgIHRoaXMuc3RhcnQgPSBuZXcgQW5pbVNwcml0ZShcclxuICAgICAgbnVsbCxcclxuICAgICAgdGhpcy5lbmdpbmUsXHJcbiAgICAgIFwiaW1nX3N0YXJ0XCIsXHJcbiAgICAgIDcsXHJcbiAgICAgIDExLFxyXG4gICAgICAxNDAsXHJcbiAgICAgIDI2LFxyXG4gICAgICAtMTAsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIDEsXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcbiAgICB0aGlzLnN0YXJ0LmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5ICogMjA7XHJcbiAgfVxyXG5cclxuICBkb0ludHJvKCkge1xyXG4gICAgdGhpcy5pbnRyby5kcmF3KCk7XHJcbiAgICB0aGlzLnN0YXJ0LmRyYXcoKTtcclxuXHJcbiAgICBpZiAodGhpcy5lbmdpbmUua2V5Ym9hcmQuZW50ZXIpIHtcclxuICAgICAgdGhpcy5lbmdpbmUua2V5Ym9hcmQuZW50ZXIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVQbGF5O1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5zb3VuZHRyYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSBcIi4vYW5pbXNwcml0ZVwiO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vdGlsZXNcIjtcclxuaW1wb3J0IHsgRnJvc3QgfSBmcm9tIFwiLi9zdHJ1Y3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJY2UgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSwgbGVuZ3RoLCBmcm96ZW4pIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBDb25zdHMuT2JqZWN0SWNlLFxyXG4gICAgICBlbmdpbmUsXHJcbiAgICAgIFwiaW1nX2ljZVwiLFxyXG4gICAgICB0eCxcclxuICAgICAgdHksXHJcbiAgICAgIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIDEsXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcbiAgICB0aGlzLnhUaWxlID0gdHg7XHJcbiAgICB0aGlzLnlUaWxlID0gdHk7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgIHRoaXMuYW5pbUVuZCA9IDE7XHJcbiAgICB0aGlzLmFuaW1EZWxheSA9IDk7XHJcbiAgICB0aGlzLmFuaW1Sb3cgPSAwO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgICBpZiAodHlwZW9mIGZyb3plbiAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB0aGlzLmZyb3plbiA9IGZyb3plbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJvemVuID0gbmV3IEZyb3N0KGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29ybmVycygpO1xyXG4gICAgICB0aGlzLmNoZWNrRnJlZXplKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRCbG9jayh0eCkge1xyXG4gICAgY29uc3Qgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0eCAtIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgY29uc3Qgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQoXHJcbiAgICAgIHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCArIDEsXHJcbiAgICAgIHRoaXMueVRpbGVcclxuICAgICk7XHJcbiAgICBpZiAodHggPiB0aGlzLnhUaWxlKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmdldFRpbGUodHggKyAxLCB0aGlzLnlUaWxlKSA9PT0gQ29uc3RzLk9iamVjdFdhbGwgfHxcclxuICAgICAgICBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9iamVjdE1ldGFsIHx8XHJcbiAgICAgICAgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPT09IENvbnN0cy5PYmplY3RKYXJcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR4IDwgdGhpcy54VGlsZSkge1xyXG4gICAgICB0aGlzLnhUaWxlID0gdHg7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmdldFRpbGUodHggLSAxLCB0aGlzLnlUaWxlKSA9PT0gQ29uc3RzLk9iamVjdFdhbGwgfHxcclxuICAgICAgICBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID09PSBDb25zdHMuT2JqZWN0TWV0YWwgfHxcclxuICAgICAgICBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID09PSBDb25zdHMuT2JqZWN0SmFyXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuZnJvemVuLmxlZnQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnggPSB0aGlzLnhUaWxlICogQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgIHRoaXMubGVuZ3RoICs9IDE7XHJcbiAgfVxyXG5cclxuICBpc1Nwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgaWYgKHRoaXMueVRpbGUgPT09IHR5KSB7XHJcbiAgICAgIGlmICh0eCA+PSB0aGlzLnhUaWxlICYmIHR4IDwgdGhpcy54VGlsZSArIHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVCbG9jayh0eCkge1xyXG4gICAgaWYgKHR4ID09PSB0aGlzLnhUaWxlKSB7XHJcbiAgICAgIHRoaXMueFRpbGUgKz0gMTtcclxuICAgICAgdGhpcy54ICs9IENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICAgIHRoaXMubGVuZ3RoIC09IDE7XHJcbiAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZUxlZnQoKTtcclxuICAgIH0gZWxzZSBpZiAodHggPT09IHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5sZW5ndGggLT0gMTtcclxuICAgICAgdGhpcy5jaGVja1VuZnJlZXplUmlnaHQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShcclxuICAgICAgICBuZXcgSWNlKFxyXG4gICAgICAgICAgdGhpcy5lbmdpbmUsXHJcbiAgICAgICAgICB0eCArIDEsXHJcbiAgICAgICAgICB0aGlzLnlUaWxlLFxyXG4gICAgICAgICAgdGhpcy54VGlsZSArIHRoaXMubGVuZ3RoIC0gdHggLSAxLFxyXG4gICAgICAgICAgbmV3IEZyb3N0KGZhbHNlLCB0aGlzLmZyb3plbi5yaWdodClcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMubGVuZ3RoID0gdHggLSB0aGlzLnhUaWxlO1xyXG4gICAgICB0aGlzLmNoZWNrVW5mcmVlemVSaWdodCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgY2FuR2xpZGUoZGlyKSB7XHJcbiAgICBpZiAodGhpcy5sZW5ndGggIT09IDEgfHwgdGhpcy5mcm96ZW4ubGVmdCB8fCB0aGlzLmZyb3plbi5yaWdodCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlyID09PSBDb25zdHMuRGlyTGVmdCAmJiBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmwpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChkaXIgPT09IENvbnN0cy5EaXJSaWdodCAmJiBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnIpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaXNGcm96ZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mcm96ZW4ubGVmdCB8fCB0aGlzLmZyb3plbi5yaWdodDtcclxuICB9XHJcblxyXG4gIGdyYXZpdHkoKSB7XHJcbiAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiYgIXRoaXMuaXNGcm96ZW4oKSkge1xyXG4gICAgICB0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmFsbGluZykge1xyXG4gICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheShcImljZS1jb2xsaXNpb25cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb2xsaXNpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuY2FuR2xpZGUodGhpcy5kaXJlY3Rpb24pKSB7XHJcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheShcImljZS1jb2xsaXNpb25cIik7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbW92ZSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdGlsZV9kb3duID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIGksIHRoaXMueVRpbGUgKyAxKTtcclxuICAgICAgaWYgKHRpbGVfZG93biAmJiB0aWxlX2Rvd24gIT09IENvbnN0cy5PYmplY3RGaXJlKSB7XHJcbiAgICAgICAgdGhpcy5jb3JuZXJzLmQgPSB0aWxlX2Rvd247XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY29ybmVycy5yID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIHRoaXMubGVuZ3RoLCB0aGlzLnlUaWxlKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0Zyb3plbigpKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZUxlZnQoKTtcclxuICAgICAgdGhpcy5jaGVja1VuZnJlZXplUmlnaHQoKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUljZU1vdmluZzpcclxuICAgICAgICB0aGlzLmdsaWRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VDaGVjazpcclxuICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZURvd246XHJcbiAgICAgICAgdGhpcy5kb0Rvd24oKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICBpZiAodGhpcy5hbmltRGVsYXlDb3VudCsrID4gdGhpcy5hbmltRGVsYXkpIHtcclxuICAgICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICAgIHRoaXMuYW5pbVJvdyA9IHRoaXMuYW5pbVJvdyA9PT0gMCA/IDEgOiAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXMueCxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICBDb25zdHMuVGlsZVdpZHRoLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgdGhpcy55LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHRcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgMyAqIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXMueCArIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgdGhpcy55LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHRcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXMueCxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICAzICogQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgICBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgdGhpcy54ICsgQ29uc3RzLlRpbGVXaWR0aCAqICh0aGlzLmxlbmd0aCAtIDEpLFxyXG4gICAgICAgIHRoaXMueSxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgICAgMiAqIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgICBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgdGhpcy54ICsgQ29uc3RzLlRpbGVXaWR0aCAqIGksXHJcbiAgICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgdGhpcy5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mcm96ZW4ubGVmdCkge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldChcImZyb3N0XCIpLFxyXG4gICAgICAgIHRoaXMueFRpbGUgKiB0aGlzLndpZHRoIC0gNyxcclxuICAgICAgICB0aGlzLnlUaWxlICogdGhpcy5oZWlnaHRcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZyb3plbi5yaWdodCkge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldChcImZyb3N0XCIpLFxyXG4gICAgICAgICh0aGlzLnhUaWxlICsgdGhpcy5sZW5ndGgpICogdGhpcy53aWR0aCAtIDcsXHJcbiAgICAgICAgdGhpcy55VGlsZSAqIHRoaXMuaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2xpZGUoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gNDtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xyXG4gICAgICB0aGlzLnggKz0gNCAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb0Rvd24oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gNDtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xyXG4gICAgICB0aGlzLnkgKz0gNDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5ncmF2aXR5KCkpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVzaChkaXIpIHtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gdHlwZW9mIGRpciA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMuZGlyZWN0aW9uIDogZGlyO1xyXG4gICAgaWYgKCF0aGlzLmNvbGxpc2lvbigpICYmICF0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTW92aW5nLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tGcmVlemUoKSB7XHJcbiAgICBpZiAoVGlsZS5pc0ZyZWV6YWJsZSh0aGlzLmNvcm5lcnMubCkpIHtcclxuICAgICAgdGhpcy5mcm96ZW4ubGVmdCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZyb3plbi5sZWZ0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoVGlsZS5pc0ZyZWV6YWJsZSh0aGlzLmNvcm5lcnMucikpIHtcclxuICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrVW5mcmVlemVMZWZ0KCkge1xyXG4gICAgaWYgKHRoaXMuZnJvemVuLmxlZnQgJiYgIVRpbGUuaXNGcmVlemFibGUodGhpcy5jb3JuZXJzLmwpKSB7XHJcbiAgICAgIHRoaXMuZnJvemVuLmxlZnQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrVW5mcmVlemVSaWdodCgpIHtcclxuICAgIGlmICh0aGlzLmZyb3plbi5yaWdodCAmJiAhVGlsZS5pc0ZyZWV6YWJsZSh0aGlzLmNvcm5lcnMucikpIHtcclxuICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gXCIuL2FuaW1zcHJpdGVcIjtcclxuaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSmFyIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBDb25zdHMuT2JqZWN0SmFyLFxyXG4gICAgICBlbmdpbmUsXHJcbiAgICAgIFwiaW1nX2phclwiLFxyXG4gICAgICB0eCxcclxuICAgICAgdHksXHJcbiAgICAgIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIDMsXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcbiAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5ICogMjtcclxuICAgIHRoaXMub25GaXJlID0gZmFsc2U7XHJcbiAgICB0aGlzLmFuaW1Sb3cgPSAwO1xyXG4gIH1cclxuXHJcbiAgbW92ZSgpIHtcclxuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgdGhpcy5jb2xsaXNpb25zKCk7XHJcbiAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgIHRoaXMuZG9Eb3duKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb2xsaXNpb25zKCkge1xyXG4gICAgaWYgKCF0aGlzLm9uRmlyZSAmJiB0aGlzLmNvcm5lcnMudSA9PT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcclxuICAgICAgdGhpcy50dXJuT25GaXJlKCk7XHJcbiAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUZpcmUodGhpcy54VGlsZSwgdGhpcy55VGlsZSAtIDEpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub25GaXJlICYmIHRoaXMuY29ybmVycy51ID09PSBDb25zdHMuT2JqZWN0SWNlKSB7XHJcbiAgICAgIHRoaXMubWVsdEljZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eSgpIHtcclxuICAgIGlmICghdGhpcy5jb3JuZXJzLmQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRvRG93bigpIHtcclxuICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XHJcbiAgICAgIHRoaXMueSArPSA0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0dXJuT25GaXJlKCkge1xyXG4gICAgdGhpcy5hbmltUm93ID0gMTtcclxuICAgIHRoaXMub25GaXJlID0gdHJ1ZTtcclxuICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoXCJmaXJlLW9mZlwiKTtcclxuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlIC0gMSwgXCIyNTUsIDg4LCAzM1wiLCAzMCk7XHJcbiAgfVxyXG5cclxuICBtZWx0SWNlKCkge1xyXG4gICAgdGhpcy5lbmdpbmUucmVtb3ZlSWNlQmxvY2sodGhpcy54VGlsZSwgdGhpcy55VGlsZSAtIDEpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUgLSAxLCBcIjI1NSwgODgsIDMzXCIsIDIwKTtcclxuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlIC0gMSwgXCIxMjIsIDIxMSwgMjU1XCIsIDEwKTtcclxuICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoXCJmaXJlLW9mZlwiKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBzdXBlci5kcmF3KCk7XHJcbiAgICB0aGlzLmRyYXdGcm9zdCgpO1xyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogS2V5Ym9hcmQgcHJlc3MgZW5naW5lXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51cCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcclxuICAgIHRoaXMuYWN0aW9uID0gZmFsc2U7XHJcbiAgICB0aGlzLmtleWRvd24gPSB0aGlzLmtleWRvd25fLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmtleXVwID0gdGhpcy5rZXl1cF8uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaW50cm8gPSB0cnVlO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleWRvd24sIGZhbHNlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXl1cCwgZmFsc2UpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaW50cm8pIHtcclxuICAgICAgICB0aGlzLmVudGVyID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmludHJvID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcImJ0bl9hY3Rpb25cIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kb3duID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYnRuX2FjdGlvblwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCAoKSA9PiAodGhpcy5kb3duID0gZmFsc2UpKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuX2xlZnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRvd24gPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYnRuX2xlZnRcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgKCkgPT4gKHRoaXMubGVmdCA9IGZhbHNlKSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bl9yaWdodFwiKS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJidG5fcmlnaHRcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgKCkgPT4gKHRoaXMucmlnaHQgPSBmYWxzZSkpO1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYnRuX3NlbGVjdFwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+ICh0aGlzLmVudGVyID0gdHJ1ZSkpO1xyXG4gIH1cclxuXHJcbiAga2V5ZG93bl8oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgY2FzZSAzNzogLy8gTGVmdFxyXG4gICAgICAgIHRoaXMubGVmdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDM4OiAvLyBVcFxyXG4gICAgICAgIHRoaXMudXAgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDM5OiAvLyBSaWdodFxyXG4gICAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQwOiAvLyBEb3duXHJcbiAgICAgIGNhc2UgMzI6IC8vIFNwYWNlXHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRvd24gPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDEzOiAvL0VudGVyXHJcbiAgICAgICAgdGhpcy5lbnRlciA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAga2V5dXBfKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgMzc6IC8vIExlZnRcclxuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAzODogLy8gVXBcclxuICAgICAgICB0aGlzLnVwID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQwOiAvLyBEb3duXHJcbiAgICAgIGNhc2UgMzI6IC8vIFNwYWNlXHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxMzogLy9FbnRlclxyXG4gICAgICAgIHRoaXMuZW50ZXIgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgbGV2ZWxzID0gW1xyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDAsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDExLCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNSwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDEwLCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMSxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMywgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDQsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDUsIHY6IDQgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDYsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAyLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxNCwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA2LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMCxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogOCwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA4LCB2OiA1IH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiA3LCB2OiAzIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEyLCB5OiA2LCB2OiAyIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNCwgeTogNywgdjogMyB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAzLCB5OiA2LCB2OiAyIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNCwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAzLCB5OiA3LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNixcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMTEsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDEwLCB2OiAzIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiA5LCB2OiAzIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDcsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMywgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA5LCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDMsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDMsIHk6IDQsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA1LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxMywgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAzLCB5OiA0LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA2LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA2LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNiwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogMiwgeTogOCwgdjogMTMsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogNiwgeDogMiwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAzLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDE0LCB5OiA0LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogMywgeDogMiwgeTogNSwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMSxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMTIsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMTEsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDExLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDUsIHY6IDUgfSxcclxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNiwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiA1LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMSxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogOCwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDEwLCB2OiAyIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDksIHY6IDcgfSxcclxuICAgICAgeyBpZDogNiwgeDogNSwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA1LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNixcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogNSwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogOCwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogOCwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDEwLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAzLCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDIsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMywgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDIsIHk6IDUsIHY6IDEwIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDQsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA2LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAzLCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA0LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDMsIHY6IDIgfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDMsIHY6IDIgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMywgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDcsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDgsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAyLCB5OiAzLCB2OiAyIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDE0LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDE0LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEzLCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAyLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMywgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAzLCB5OiA4LCB2OiAxMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiA5LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMixcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMTIsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogMTAsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiA3LCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDEwLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDUsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDIsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNCwgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDMsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNixcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogOCwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA1LCB4OiA2LCB5OiAxMSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDcsIHk6IDQsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAxLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxMCwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCBmbDogZmFsc2UsIGZyOiBmYWxzZSwgeDogMTAsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIGZsOiBmYWxzZSwgZnI6IGZhbHNlLCB4OiA2LCB5OiA5LCB2OiA1IH0sXHJcbiAgICAgIHsgaWQ6IDMsIGZsOiBmYWxzZSwgZnI6IGZhbHNlLCB4OiA3LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIGZsOiBmYWxzZSwgZnI6IGZhbHNlLCB4OiA2LCB5OiA3LCB2OiA1IH0sXHJcbiAgICAgIHsgaWQ6IDMsIGZsOiBmYWxzZSwgZnI6IGZhbHNlLCB4OiA2LCB5OiA1LCB2OiA1IH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDQsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA3LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogNywgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDksIHk6IDcsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiAxMCwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDcsIHk6IDUsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA2LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA0LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDcsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMywgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA3LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMSxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogOCwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDcsIHY6IDMsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogNywgeTogOCwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNiwgeTogNiwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogNiwgeTogNSwgdjogMywgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogOSwgeTogNSwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAyLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA2LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMTAsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA5LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA0LCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDQsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA0LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDQsIHY6IDQsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDExLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDUsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMywgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA1LCB4OiA4LCB5OiAxMCwgdjogZmFsc2UgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAwLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxMCwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiA2LCB2OiA0LCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDUsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAwLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA4LCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDUsIHg6IDYsIHk6IDEwLCB2OiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDUsIHg6IDUsIHk6IDcsIHY6IHRydWUgfSxcclxuICAgICAgeyBpZDogNSwgeDogOCwgeTogOCwgdjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogNywgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDQsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDgsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNiwgeTogNiwgdjogMSwgZmw6IGZhbHNlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA0LCB5OiA3LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDQsIHk6IDUsIHY6IDEsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA5LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNixcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogOSwgeTogMTEsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNSwgeDogMTAsIHk6IDgsIHY6IHRydWUgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDExLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDExLCB5OiAyLCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogOCxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMTIsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNSwgeDogMTEsIHk6IDcsIHY6IHRydWUgfSxcclxuICAgICAgeyBpZDogNCwgeDogMTAsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxNCwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA5LCB5OiA1LCB2OiA0LCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDksIHk6IDQsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogOCxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMywgeTogMSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiA0LCB5OiAyLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDIsIHk6IDIsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMywgeTogMiwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMiwgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiA2LCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDcsIHk6IDUsIHY6IDEsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogNSwgeTogNSwgdjogMSwgZmw6IGZhbHNlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiA0LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDIsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMywgeTogOCwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMiwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogMTAsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogOCwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA5LCB5OiA4LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiAxMiwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMywgeTogNSwgdjogMSwgZmw6IHRydWUsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogNSwgdjogMSwgZmw6IGZhbHNlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDEwLCB5OiAyLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDgsIHk6IDIsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogOSwgeTogMiwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgLyoge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMCwwLDAsMCwwLDAsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwwLDAsMCwwLDAsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwwLDAsMSwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwwLDAsMSwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjksXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6OSxcInlcIjo1LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NyxcInlcIjo2LFwidlwiOjJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjQsXCJ4XCI6NyxcInlcIjo1LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjUsXCJ4XCI6NyxcInlcIjo5LFwidlwiOnRydWV9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjUsXCJ4XCI6OCxcInlcIjoxMCxcInZcIjp0cnVlfSxcclxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjksXCJ5XCI6OCxcInZcIjp0cnVlfVxyXG4gICAgICAgIF1cclxuICAgIH0sKi8ge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDEzLCB5OiAyLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDQsIHk6IDQsIHY6IDggfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDMsIHY6IDQgfSxcclxuICAgICAgeyBpZDogNiwgeDogMywgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDIsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMiwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA4LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNixcclxuICAgIHNwcml0ZXM6IFt7IGlkOiA3LCB4OiAxNCwgeTogMTAsIHY6IDEgfV0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA5LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxMCwgeTogMTEsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA1LCB4OiA0LCB5OiAxMSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA1LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSBcIi4vYW5pbXNwcml0ZVwiO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4vdGlsZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXRhbCBleHRlbmRzIEFuaW1TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5LCBsZW5ndGgpIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBDb25zdHMuT2JqZWN0TWV0YWwsXHJcbiAgICAgIGVuZ2luZSxcclxuICAgICAgXCJpbWdfbWV0YWxcIixcclxuICAgICAgdHgsXHJcbiAgICAgIHR5LFxyXG4gICAgICBDb25zdHMuVGlsZVdpZHRoLFxyXG4gICAgICBDb25zdHMuVGlsZVdpZHRoLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAwLFxyXG4gICAgICAxLFxyXG4gICAgICB0cnVlXHJcbiAgICApO1xyXG4gICAgdGhpcy54VGlsZSA9IHR4O1xyXG4gICAgdGhpcy55VGlsZSA9IHR5O1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmFuaW1EZWxheSA9IDk7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XHJcbiAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNhbkdsaWRlKGRpcikge1xyXG4gICAgaWYgKGRpciA9PT0gQ29uc3RzLkRpckxlZnQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5sKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlyID09PSBDb25zdHMuRGlyUmlnaHQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5yKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZyb3plblRvSWNlKCkge1xyXG4gICAgY29uc3QgcmlnaHRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlICsgMSwgdGhpcy55VGlsZSk7XHJcbiAgICBjb25zdCBsZWZ0U3ByaXRlID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSAtIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIXRoaXMuZmFsbGluZyAmJlxyXG4gICAgICAoKHJpZ2h0U3ByaXRlICYmXHJcbiAgICAgICAgcmlnaHRTcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiZcclxuICAgICAgICByaWdodFNwcml0ZS5mcm96ZW4ubGVmdCkgfHxcclxuICAgICAgICAobGVmdFNwcml0ZSAmJlxyXG4gICAgICAgICAgbGVmdFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJlxyXG4gICAgICAgICAgbGVmdFNwcml0ZS5mcm96ZW4ucmlnaHQpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdyYXZpdHkoKSB7XHJcbiAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiYgIXRoaXMuZnJvemVuVG9JY2UoKSkge1xyXG4gICAgICB0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmFsbGluZykge1xyXG4gICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheShcImljZS1jb2xsaXNpb25cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb2xsaXNpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuY2FuR2xpZGUodGhpcy5kaXJlY3Rpb24pKSB7XHJcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheShcImljZS1jb2xsaXNpb25cIik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VNb3Zpbmc6XHJcbiAgICAgICAgdGhpcy5nbGlkZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlQ2hlY2s6XHJcbiAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgIHRoaXMuZG9Eb3duKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgc3VwZXIuZHJhdygpO1xyXG4gICAgdGhpcy5kcmF3RnJvc3QoKTtcclxuICB9XHJcblxyXG4gIGdsaWRlKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcclxuICAgICAgdGhpcy54ICs9IDQgKiB0aGlzLmRpcmVjdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9Eb3duKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcclxuICAgICAgdGhpcy55ICs9IDQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1c2goZGlyKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHR5cGVvZiBkaXIgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzLmRpcmVjdGlvbiA6IGRpcjtcclxuICAgIGlmICghdGhpcy5jb2xsaXNpb24oKSkge1xyXG4gICAgICB0aGlzLm1vdmluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VNb3ZpbmcsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tIFwiLi9hbmltc3ByaXRlXCI7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi90aWxlc1wiO1xyXG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSkge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgIENvbnN0cy5PYmplY3RQbGF5ZXIsXHJcbiAgICAgIGVuZ2luZSxcclxuICAgICAgXCJpbWdfZG9uYVwiLFxyXG4gICAgICB0eCxcclxuICAgICAgdHksXHJcbiAgICAgIDQ4LFxyXG4gICAgICA2NCxcclxuICAgICAgLTEwLFxyXG4gICAgICAtMzIsXHJcbiAgICAgIDIsXHJcbiAgICAgIDIsXHJcbiAgICAgIGZhbHNlXHJcbiAgICApO1xyXG4gICAgdGhpcy5zcGVlZCA9IDI7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XHJcbiAgICB0aGlzLnN0YXRlID0gMDsgLy9zdGFuZGluZyB0b3AgcmlnaHQgZG93biBsZWZ0XHJcbiAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy50aWxlV2lkdGggPSBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgdGhpcy50aWxlSGVpZ2h0ID0gQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgIHRoaXMuYW5pbURlbGF5ID0gMztcclxuICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICB0aGlzLmZhbGxDb3VudGVyID0gMDtcclxuICAgIHRoaXMuaW5uZXJDb3VudGVyID0gMDtcclxuICAgIHRoaXMuc3RhbmRDb3VudGVyID0gMDtcclxuICAgIHRoaXMuaW50cm8oKTtcclxuICB9XHJcblxyXG4gIGxlZnQoKSB7XHJcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgIC8vaWYgc3RhbmRpbmcgdGhlbiB0dXJuXHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gQ29uc3RzLkRpckxlZnQpIHtcclxuICAgICAgICAvL2lzIG5vdCB1bmRlciBhIGJyaWNrXHJcbiAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltVHVyblN0YXJ0LFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVR1cm5FbmQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICAgICAgICA0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbUxlZnRSb3csXHJcbiAgICAgICAgICAgIDRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVUdXJuLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IENvbnN0cy5EaXJMZWZ0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vcnVubmluZ1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5sKSAmJiBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgICAvL25vdCB1bmRlciBhIGJyaWNrXHJcbiAgICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudSkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudWwpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbVJ1blN0YXJ0LFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltUnVuRW5kLFxyXG4gICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltQ3JvdWNoRW5kLFxyXG4gICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVMZWZ0LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9oaXQgYW4gaWNlXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSAmJlxyXG4gICAgICAgICAgKHRoaXMuY29ybmVycy5sID09PSBDb25zdHMuT2JqZWN0SWNlIHx8XHJcbiAgICAgICAgICAgIHRoaXMuY29ybmVycy5sID09PSBDb25zdHMuT2JqZWN0TWV0YWwpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jbGltYlxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMubCkgJiZcclxuICAgICAgICAgIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiZcclxuICAgICAgICAgICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpICYmXHJcbiAgICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51bCkgJiZcclxuICAgICAgICAgICF0aGlzLm1vdmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVB1c2hTdGFydCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1QdXNoU3RhcnQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbUxlZnRSb3dcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVXAsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmlnaHQoKSB7XHJcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gQ29uc3RzLkRpclJpZ2h0KSB7XHJcbiAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltVHVyblN0YXJ0LFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVR1cm5FbmQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbUxlZnRSb3csXHJcbiAgICAgICAgICAgIDRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUmlnaHRSb3csXHJcbiAgICAgICAgICAgIDRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVUdXJuLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IENvbnN0cy5EaXJSaWdodDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMucikgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSkge1xyXG4gICAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpICYmICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnVyKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1SdW5TdGFydCxcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbVJ1bkVuZCxcclxuICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltUmlnaHRSb3csXHJcbiAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1Dcm91Y2hFbmQsXHJcbiAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVSaWdodCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiZcclxuICAgICAgICAgICh0aGlzLmNvcm5lcnMuciA9PT0gQ29uc3RzLk9iamVjdEljZSB8fFxyXG4gICAgICAgICAgICB0aGlzLmNvcm5lcnMuciA9PT0gQ29uc3RzLk9iamVjdE1ldGFsKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMucikgJiZcclxuICAgICAgICAgIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiZcclxuICAgICAgICAgICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpICYmXHJcbiAgICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51cikgJiZcclxuICAgICAgICAgICF0aGlzLm1vdmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVB1c2hTdGFydCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1QdXNoU3RhcnQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVJpZ2h0Um93XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVVwLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1cm4oKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gQ29uc3RzLk1vdmVSaXApIHtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheU9uY2UoXCJkYW5nZXJcIik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVSaXAsIHRydWUpO1xyXG4gICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgQ29uc3RzLkFuaW1SaXBTdGFydCxcclxuICAgICAgICBDb25zdHMuQW5pbVJpcEVuZCxcclxuICAgICAgICB0cnVlLFxyXG4gICAgICAgIENvbnN0cy5BbmltUmlnaHRSb3dcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGludHJvKCkge1xyXG4gICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICBDb25zdHMuQW5pbUJpZ0ZhbGxTdGFydCxcclxuICAgICAgQ29uc3RzLkFuaW1CaWdGYWxsRW5kLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICA0XHJcbiAgICApO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUxldmVsRW50ZXIsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgb3V0cm8oKSB7XHJcbiAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgIENvbnN0cy5BbmltRmFsbFN0YXJ0LFxyXG4gICAgICBDb25zdHMuQW5pbUJpZ0ZhbGxFbmQsXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIENvbnN0cy5BbmltUmlnaHRSb3csXHJcbiAgICAgIDRcclxuICAgICk7XHJcbiAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlTGV2ZWxFeGl0LCB0cnVlKTtcclxuICAgIHRoaXMuaW5uZXJDb3VudGVyID0gMDtcclxuICB9XHJcblxyXG4gIGRvUmlwKCkge31cclxuXHJcbiAgZ3Jhdml0eSgpIHtcclxuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvcm5lcnMuZCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJvcihcInVuZGVmaW5lZCBjb3JuZXJcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmZhbGxDb3VudGVyID49IDEpIHtcclxuICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXlPbmNlKFwiZmFsbGluZ1wiKTtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1CaWdGYWxsU3RhcnQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltQmlnRmFsbEVuZCxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1SaWdodFJvdyxcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbUJpZ0ZhbGxTdGFydCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1CaWdGYWxsRW5kLFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICAgICAgICAzXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5zdG9wKFwiZmFsbGluZ1wiKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ29uc3RzLk1vdmVEb3duKSB7XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KFwiZmFsbFwiKTtcclxuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyhcclxuICAgICAgICAgICAgdGhpcy54VGlsZSxcclxuICAgICAgICAgICAgdGhpcy55VGlsZSxcclxuICAgICAgICAgICAgXCIxMjQsIDIzOCwgNjZcIixcclxuICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgIDAuNzVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3MoXHJcbiAgICAgICAgICAgIHRoaXMueFRpbGUsXHJcbiAgICAgICAgICAgIHRoaXMueVRpbGUgKyAxLFxyXG4gICAgICAgICAgICBcIjEyMiwgMjExLCAyNTVcIixcclxuICAgICAgICAgICAgNSxcclxuICAgICAgICAgICAgMS4yNVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY29ybmVycy5kID09PSBDb25zdHMuT2JqZWN0SmFyKSB7XHJcbiAgICAgICAgICBjb25zdCBqYXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICAgICAgICBpZiAoamFyICYmIGphci5vbkZpcmUpIHtcclxuICAgICAgICAgICAgdGhpcy5idXJuKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpY2UoKSB7XHJcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQpIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZHIpICYmXHJcbiAgICAgICAgICAgIHRoaXMuY29ybmVycy5kciAhPT0gQ29uc3RzLk9iamVjdEZpcmVcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1JY2VTdGFydCxcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbUljZUVuZCxcclxuICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZU1ha2UsIHRydWUpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvcm5lcnMuZHIgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltSWNlU3RhcnQsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1JY2VFbmQsXHJcbiAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1SaWdodFJvdyxcclxuICAgICAgICAgICAgICA0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VSZW1vdmUsIHRydWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltSWNlU3RhcnQsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1JY2VFbmQsXHJcbiAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1SaWdodFJvdyxcclxuICAgICAgICAgICAgICA0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VGYWlsLCB0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kbCkgJiZcclxuICAgICAgICAgICAgdGhpcy5jb3JuZXJzLmRsICE9PSBDb25zdHMuT2JqZWN0RmlyZVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbUljZVN0YXJ0LFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltSWNlRW5kLFxyXG4gICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltTGVmdFJvdyxcclxuICAgICAgICAgICAgICA0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VNYWtlLCB0cnVlKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb3JuZXJzLmRsID09PSBDb25zdHMuT2JqZWN0SWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgICBDb25zdHMuQW5pbUljZVN0YXJ0LFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltSWNlRW5kLFxyXG4gICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltTGVmdFJvdyxcclxuICAgICAgICAgICAgICA0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VSZW1vdmUsIHRydWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICAgIENvbnN0cy5BbmltSWNlU3RhcnQsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1JY2VFbmQsXHJcbiAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgICAgICAgIDRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZUZhaWwsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAganVtcCgpIHtcclxuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnIpICYmXHJcbiAgICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51cikgJiZcclxuICAgICAgICAgICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUHVzaFN0YXJ0LFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVB1c2hTdGFydCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUmlnaHRSb3dcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVXAsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmwpICYmXHJcbiAgICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51bCkgJiZcclxuICAgICAgICAgICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUHVzaFN0YXJ0LFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVB1c2hTdGFydCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltTGVmdFJvd1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVVcCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1J1bigpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQgKiB0aGlzLmRpcmVjdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9UdXJuKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID49IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvT3V0cm8oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgJSAxMCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmlubmVyQ291bnRlciArPSAxO1xyXG4gICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPT09IDEpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgXCIxMjQsIDIzOCwgNjZcIiwgMjUsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSAzKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIFwiMjU1LCAxMzUsIDEyNFwiLCAzMCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSA1KSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIFwiMTIyLCAyMTEsIDI1NVwiLCAzNSwgMS41KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgJSAyID09PSAwICYmIHRoaXMuaW5uZXJDb3VudGVyIDwgNikge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoXCJjbGltYlwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyICUgMiA9PT0gMSkge1xyXG4gICAgICB0aGlzLnkgKz0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMueSAtPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID49IDYpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheShcInN0YXRlLWxlYXZlXCIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgdGhpcy5lbmdpbmUubmV4dExldmVsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb0ludHJvKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID09PSA4KSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBcIjEyNCwgMjM4LCA2NlwiLCAyMCwgMi41KTtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIFwiMjU1LCAxMzUsIDEyNFwiLCAzNSwgMSk7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBcIjEyMiwgMjExLCAyNTVcIiwgMjAsIDEuNSk7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoXCJzdGFnZS1lbnRlclwiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gMzIpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQuc3RvcChcImZhbGxpbmdcIik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9HcmF2aXR5KCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgICB0aGlzLmZhbGxDb3VudGVyKys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1N0YW5kKCkge1xyXG4gICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YW5kQ291bnRlcisrID4gNTAwKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgQ29uc3RzLkFuaW1TbGVlcFN0YXJ0LFxyXG4gICAgICAgICAgQ29uc3RzLkFuaW1TbGVlcEVuZCxcclxuICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICB0aGlzLmRpcmVjdGlvbiAhPT0gMSA/IENvbnN0cy5BbmltTGVmdFJvdyA6IENvbnN0cy5BbmltUmlnaHRSb3csXHJcbiAgICAgICAgICA0OCxcclxuICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgIENvbnN0cy5BbmltU3RhbmRTdGFydCxcclxuICAgICAgICAgIENvbnN0cy5BbmltU3RhbmRFbmQsXHJcbiAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgdGhpcy5kaXJlY3Rpb24gIT09IDEgPyBDb25zdHMuQW5pbUxlZnRSb3cgOiBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICAgICAgOCxcclxuICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCxcclxuICAgICAgICBDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uICE9PSAxID8gQ29uc3RzLkFuaW1MZWZ0Um93IDogQ29uc3RzLkFuaW1SaWdodFJvdyxcclxuICAgICAgICA4LFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvVXAoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gMTgpIHtcclxuICAgICAgc3dpdGNoICh0aGlzLmNvdW50ZXIpIHtcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KFwiY2xpbWJcIik7XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3MoXHJcbiAgICAgICAgICAgIHRoaXMueFRpbGUsXHJcbiAgICAgICAgICAgIHRoaXMueVRpbGUsXHJcbiAgICAgICAgICAgIFwiMTI0LCAyMzgsIDY2XCIsXHJcbiAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICAwLjc1XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKFxyXG4gICAgICAgICAgICB0aGlzLnhUaWxlLFxyXG4gICAgICAgICAgICB0aGlzLnlUaWxlLFxyXG4gICAgICAgICAgICBcIjI1NSwgMTM1LCAxMjRcIixcclxuICAgICAgICAgICAgNSxcclxuICAgICAgICAgICAgMS4yNVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1QdXNoRW5kLFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVB1c2hFbmQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0XHJcbiAgICAgICAgICAgICAgPyBDb25zdHMuQW5pbVJpZ2h0Um93XHJcbiAgICAgICAgICAgICAgOiBDb25zdHMuQW5pbUxlZnRSb3dcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltSnVtcFN0YXJ0LFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbUp1bXBTdGFydCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHRcclxuICAgICAgICAgICAgICA/IENvbnN0cy5BbmltUmlnaHRSb3dcclxuICAgICAgICAgICAgICA6IENvbnN0cy5BbmltTGVmdFJvd1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1KdW1wRW5kLFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbUp1bXBFbmQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0XHJcbiAgICAgICAgICAgICAgPyBDb25zdHMuQW5pbVJpZ2h0Um93XHJcbiAgICAgICAgICAgICAgOiBDb25zdHMuQW5pbUxlZnRSb3dcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLnggKz0gOCAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodFxyXG4gICAgICAgICAgICAgID8gQ29uc3RzLkFuaW1SaWdodFJvd1xyXG4gICAgICAgICAgICAgIDogQ29uc3RzLkFuaW1MZWZ0Um93XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcmVjdGlvbjtcclxuICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxODpcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1TdGFuZCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1TdGFuZCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHRcclxuICAgICAgICAgICAgICA/IENvbnN0cy5BbmltUmlnaHRSb3dcclxuICAgICAgICAgICAgICA6IENvbnN0cy5BbmltTGVmdFJvd1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1ha2VJY2UoKSB7XHJcbiAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KFwibmV3LWljZVwiKTtcclxuICAgIHRoaXMuZW5naW5lLmFkZEljZUJsb2NrKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKFxyXG4gICAgICB0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sXHJcbiAgICAgIHRoaXMueVRpbGUgKyAxLFxyXG4gICAgICBcIjEyNCwgMjE0LCAyNTVcIixcclxuICAgICAgNVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUljZUJsb2NrKCkge1xyXG4gICAgdGhpcy5lbmdpbmUuc291bmQucGxheShcImljZS1yZW1vdmVcIik7XHJcbiAgICB0aGlzLmVuZ2luZS5yZW1vdmVJY2VCbG9jayh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUgKyAxKTtcclxuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUgKyAxKTtcclxuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyhcclxuICAgICAgdGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLFxyXG4gICAgICB0aGlzLnlUaWxlICsgMSxcclxuICAgICAgXCIxMjQsIDIxNCwgMjU1XCIsXHJcbiAgICAgIDVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdXNoKCkge1xyXG4gICAgbGV0IGljZSA9IHRoaXMuZW5naW5lLmljZUF0KHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSk7XHJcbiAgICBpZiAoaWNlICYmIGljZS5jYW5HbGlkZSh0aGlzLmRpcmVjdGlvbikpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKFxyXG4gICAgICAgIHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbixcclxuICAgICAgICB0aGlzLnlUaWxlLFxyXG4gICAgICAgIFwiMjU1LCAyNTUsIDI1NVwiLFxyXG4gICAgICAgIDNcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKFxyXG4gICAgICAgIHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbixcclxuICAgICAgICB0aGlzLnlUaWxlLFxyXG4gICAgICAgIFwiMTI0LCAyMTQsIDI1NVwiLFxyXG4gICAgICAgIDMsXHJcbiAgICAgICAgMS41XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICBDb25zdHMuQW5pbVB1c2hTdGFydCxcclxuICAgICAgICBDb25zdHMuQW5pbVB1c2hFbmQsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodFxyXG4gICAgICAgICAgPyBDb25zdHMuQW5pbVJpZ2h0Um93XHJcbiAgICAgICAgICA6IENvbnN0cy5BbmltTGVmdFJvdyxcclxuICAgICAgICAzXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVQdXNoLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvUHVzaCgpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAyO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA+IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICBjb25zdCBpY2UgPSB0aGlzLmVuZ2luZS5pY2VBdCh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUpO1xyXG4gICAgICBpZiAoaWNlKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheShcImljZS1wdXNoXCIpO1xyXG4gICAgICAgIGljZS5wdXNoKHRoaXMuZGlyZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvSWNlKCkge1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA9PT0gOCkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ29uc3RzLk1vdmVJY2VNYWtlKSB7XHJcbiAgICAgICAgdGhpcy5tYWtlSWNlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVJY2VCbG9jaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9GYWlsSWNlKCkge1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA9PT0gOCkge1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KFwiaWNlLWRpc2FibGVkXCIpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3MoXHJcbiAgICAgICAgdGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLFxyXG4gICAgICAgIHRoaXMueVRpbGUgKyAxLFxyXG4gICAgICAgIFwiODgsNjYsNjZcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID49IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbGxpc2lvbnMoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuT2JqZWN0UGxheWVyKSA9PT1cclxuICAgICAgQ29uc3RzLk9iamVjdEZpcmVcclxuICAgICkge1xyXG4gICAgICB0aGlzLmJ1cm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgIHRoaXMuY29sbGlzaW9ucygpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IENvbnN0cy5Nb3ZlU3RhbmQpIHtcclxuICAgICAgdGhpcy5zdGFuZENvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IENvbnN0cy5Nb3ZlRG93bikge1xyXG4gICAgICB0aGlzLmZhbGxDb3VudGVyID0gMDtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlUmlnaHQ6XHJcbiAgICAgICAgdGhpcy5kb1J1bigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlTGVmdDpcclxuICAgICAgICB0aGlzLmRvUnVuKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgIHRoaXMuZG9HcmF2aXR5KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVVcDpcclxuICAgICAgICB0aGlzLmRvVXAoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZVR1cm46XHJcbiAgICAgICAgdGhpcy5kb1R1cm4oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUljZU1ha2U6XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VSZW1vdmU6XHJcbiAgICAgICAgdGhpcy5kb0ljZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlRmFpbDpcclxuICAgICAgICB0aGlzLmRvRmFpbEljZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlU3RhbmQ6XHJcbiAgICAgICAgdGhpcy5kb1N0YW5kKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVQdXNoOlxyXG4gICAgICAgIHRoaXMuZG9QdXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVSaXA6XHJcbiAgICAgICAgdGhpcy5kb1JpcCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlTGV2ZWxFeGl0OlxyXG4gICAgICAgIHRoaXMuZG9PdXRybygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlTGV2ZWxFbnRlcjpcclxuICAgICAgICB0aGlzLmRvSW50cm8oKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFJlc291cmNlcyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmRlZmluaXRpb25zID0gW107XHJcbiAgICB0aGlzLnJlc291cmNlcyA9IHt9O1xyXG4gICAgdGhpcy5sb2FkZWQgPSAwO1xyXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcclxuICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGQodHlwZSwgbmFtZSwgc3JjKSB7XHJcbiAgICB0aGlzLmRlZmluaXRpb25zLnB1c2goeyB0eXBlOiB0eXBlLCBuYW1lOiBuYW1lLCBzcmM6IHNyYyB9KTtcclxuICB9XHJcblxyXG4gIGdldChuYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXNbbmFtZV07XHJcbiAgfVxyXG5cclxuICBjaGVjayhjYWxsYmFjaykge1xyXG4gICAgaWYgKHRoaXMuY3R4KSB7XHJcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KFxyXG4gICAgICAgIDUwLFxyXG4gICAgICAgIDI1MCxcclxuICAgICAgICAodGhpcy5sb2FkZWQgKiA0NTApIC8gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsXHJcbiAgICAgICAgNDBcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxvYWRlZCA9PT0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgY2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWR5KGNhbGxiYWNrKSB7XHJcbiAgICBmb3IgKGNvbnN0IHJlc291cmNlIG9mIHRoaXMuZGVmaW5pdGlvbnMpIHtcclxuICAgICAgaWYgKHJlc291cmNlLnR5cGUgPT09IFwiaW1hZ2VcIikge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2FkZWQgKz0gMTtcclxuICAgICAgICAgIHRoaXMuY2hlY2soY2FsbGJhY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHJlc291cmNlLnNyYztcclxuICAgICAgICB0aGlzLnJlc291cmNlc1tyZXNvdXJjZS5uYW1lXSA9IGltYWdlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXNvdXJjZS50eXBlID09PSBcImF1ZGlvXCIpIHtcclxuICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlc291cmNlLm5hbWUpO1xyXG4gICAgICAgIHRoaXMubG9hZGVkICs9IDE7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNbcmVzb3VyY2UubmFtZV0gPSBhdWRpbztcclxuICAgICAgICB0aGlzLmNoZWNrKGNhbGxiYWNrKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgRnJvc3QgfSBmcm9tIFwiLi9zdHJ1Y3RcIjtcclxuaW1wb3J0IHsgRmlyZSB9IGZyb20gXCIuL2ZpcmVcIjtcclxuaW1wb3J0IHsgSWNlIH0gZnJvbSBcIi4vaWNlXCI7XHJcbmltcG9ydCB7IEphciB9IGZyb20gXCIuL2phclwiO1xyXG5pbXBvcnQgeyBNZXRhbCB9IGZyb20gXCIuL21ldGFsXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSBcIi4vdGlsZW1hcFwiO1xyXG5pbXBvcnQgeyBsZXZlbHMgfSBmcm9tIFwiLi9sZXZlbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZW5naW5lKSB7XHJcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcclxuICB9XHJcblxyXG4gIHNhdmUoKSB7XHJcbiAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgZGF0YS5tYXAgPSB0aGlzLmVuZ2luZS5tYXAubWFwO1xyXG4gICAgZGF0YS50aGVtZSA9IHRoaXMuZW5naW5lLm1hcC50aGVtZTtcclxuICAgIGRhdGEuc3ByaXRlcyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBzcHJpdGUgb2YgdGhpcy5lbmdpbmUuc3ByaXRlcykge1xyXG4gICAgICBsZXQgdmFsdWUgPSB0eXBlb2Ygc3ByaXRlLmxlbmd0aCA9PT0gXCJ1bmRlZmluZWRcIiA/IDEgOiBzcHJpdGUubGVuZ3RoO1xyXG4gICAgICB2YWx1ZSA9IHNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEphciA/IHNwcml0ZS5vbkZpcmUgOiB2YWx1ZTtcclxuICAgICAgbGV0IGZsLCBmcjtcclxuICAgICAgaWYgKHNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xyXG4gICAgICAgIGZsID0gc3ByaXRlLmZyb3plbi5sZWZ0O1xyXG4gICAgICAgIGZyID0gc3ByaXRlLmZyb3plbi5yaWdodDtcclxuICAgICAgfVxyXG4gICAgICBkYXRhLnNwcml0ZXMucHVzaCh7XHJcbiAgICAgICAgaWQ6IHNwcml0ZS5pZCxcclxuICAgICAgICB4OiBzcHJpdGUueFRpbGUsXHJcbiAgICAgICAgeTogc3ByaXRlLnlUaWxlLFxyXG4gICAgICAgIHY6IHZhbHVlLFxyXG4gICAgICAgIGZsOiBmbCxcclxuICAgICAgICBmcjogZnIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgbG9hZChpbmRleCkge1xyXG4gICAgaWYgKHR5cGVvZiBsZXZlbHNbaW5kZXhdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIHRoaXMuZW5naW5lLmxldmVsID0gaW5kZXg7XHJcbiAgICBjb25zdCBsZXZlbCA9IGxldmVsc1tpbmRleF07XHJcbiAgICB0aGlzLmVuZ2luZS5zcHJpdGVzID0gW107XHJcbiAgICB0aGlzLmVuZ2luZS5tYXAgPSBuZXcgVGlsZU1hcCh0aGlzLmVuZ2luZSwgbGV2ZWwubWFwLCBsZXZlbC50aGVtZSk7XHJcbiAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiBsZXZlbC5zcHJpdGVzKSB7XHJcbiAgICAgIHN3aXRjaCAoc3ByaXRlLmlkKSB7XHJcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0UGxheWVyOlxyXG4gICAgICAgICAgdGhpcy5lbmdpbmUucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55KTtcclxuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZSh0aGlzLmVuZ2luZS5wbGF5ZXIpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0SWNlOlxyXG4gICAgICAgICAgbGV0IGZyb3plbiA9IG5ldyBGcm9zdCh0cnVlLCB0cnVlKTtcclxuICAgICAgICAgIGlmICh0eXBlb2Ygc3ByaXRlLmZsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGZyb3plbi5sZWZ0ID0gc3ByaXRlLmZsO1xyXG4gICAgICAgICAgICBmcm96ZW4ucmlnaHQgPSBzcHJpdGUuZnI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUoXHJcbiAgICAgICAgICAgIG5ldyBJY2UodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSwgcGFyc2VJbnQoc3ByaXRlLnYpLCBmcm96ZW4pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0TWV0YWw6XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IE1ldGFsKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnksIDEpKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdEZpcmU6XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IEZpcmUodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0SmFyOlxyXG4gICAgICAgICAgY29uc3QgamFyID0gbmV3IEphcih0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55KTtcclxuICAgICAgICAgIGlmIChzcHJpdGUudiA9PSAxKSB7XHJcbiAgICAgICAgICAgIGphci50dXJuT25GaXJlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUoamFyKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL3Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuY2xhc3MgUGFydGljbGUge1xyXG4gIGNvbnN0cnVjdG9yKGN0eCwgeCwgeSwgY29sb3IsIGludGVuc2l0eSkge1xyXG4gICAgdGhpcy5jb2xvciA9IHR5cGVvZiBjb2xvciA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiMjU1LDI1NSwyNTVcIiA6IGNvbG9yO1xyXG4gICAgdGhpcy5yID0gMztcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy52eCA9IChNYXRoLnJhbmRvbSgpICogNCAtIDIpICogaW50ZW5zaXR5O1xyXG4gICAgdGhpcy52eSA9IChNYXRoLnJhbmRvbSgpICogNiAtIDQpICogaW50ZW5zaXR5O1xyXG4gICAgdGhpcy5zcGVlZCA9IDAuMTU7XHJcbiAgICB0aGlzLmxpZmUgPSAyNTU7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gdGhpcy5saWZlIC8gMjU1O1xyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoXCIgKyB0aGlzLmNvbG9yICsgXCIsXCIgKyBvcGFjaXR5ICsgXCIpXCI7XHJcbiAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMuciwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlKCkge1xyXG4gICAgdGhpcy54ICs9IHRoaXMudng7XHJcbiAgICB0aGlzLnkgKz0gdGhpcy52eTtcclxuICAgIHRoaXMudnkgKz0gdGhpcy5zcGVlZDtcclxuICAgIHRoaXMubGlmZSAtPSA1O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwYXJrcyBleHRlbmRzIFNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHksIGNvbG9yLCBsZW5ndGgsIGludGVuc2l0eSkge1xyXG4gICAgc3VwZXIobnVsbCwgZW5naW5lLCB0eCwgdHksIDMyLCAzMik7XHJcbiAgICB0aGlzLmNvbG9yID0gdHlwZW9mIGNvbG9yID09PSBcInVuZGVmaW5lZFwiID8gXCIyNTUsMjU1LDI1NVwiIDogY29sb3I7XHJcbiAgICB0aGlzLmxlbmd0aCA9IHR5cGVvZiBsZW5ndGggPT09IFwidW5kZWZpbmVkXCIgPyAxMCA6IGxlbmd0aDtcclxuICAgIHRoaXMuaW50ZW5zaXR5ID0gdHlwZW9mIGludGVuc2l0eSA9PT0gXCJ1bmRlZmluZWRcIiA/IDEgOiBpbnRlbnNpdHk7XHJcbiAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucGFydGljbGVzW2ldID0gbmV3IFBhcnRpY2xlKFxyXG4gICAgICAgIHRoaXMuZW5naW5lLmN0eCxcclxuICAgICAgICB0eCAqIENvbnN0cy5UaWxlV2lkdGggKyAxNixcclxuICAgICAgICB0eSAqIENvbnN0cy5UaWxlV2lkdGggKyAxNixcclxuICAgICAgICB0aGlzLmNvbG9yLFxyXG4gICAgICAgIHRoaXMuaW50ZW5zaXR5XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5lbmdpbmUuY3R4LnNhdmUoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0uZHJhdygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbmdpbmUuY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIGVuZ2luZU1vdmUoKSB7XHJcbiAgICB0aGlzLm1vdmUoKTtcclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMucGFydGljbGVzW2ldLm1vdmUoKTtcclxuICAgICAgaWYgKHRoaXMucGFydGljbGVzW2ldLmxpZmUgPCAwKSB7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMucGFydGljbGVzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLnJlbW92ZVNlbGYoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGYoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5naW5lLnNmeHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuZW5naW5lLnNmeHNbaV0gPT09IHRoaXMpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5zZnhzLnNwbGljZShpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbmdpbmUgfSBmcm9tIFwiLi9lbmdpbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3VuZCB7XHJcbiAgY29uc3RydWN0b3IocmVzb3VyY2VzKSB7XHJcbiAgICB0aGlzLnJlc291cmNlcyA9IHJlc291cmNlcztcclxuICAgIHRoaXMubXVzaWNPbiA9IHRydWU7XHJcbiAgICB0aGlzLnNvdW5kT24gPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2Z4Vm9sdW1lID0gMC4zO1xyXG4gICAgdGhpcy5zZnggPSB7XHJcbiAgICAgIFwiZmlyZS1vZmZcIjogcmVzb3VyY2VzLmdldChcInNmeC1maXJlLW9mZlwiKSxcclxuICAgICAgXCJpY2UtcHVzaFwiOiByZXNvdXJjZXMuZ2V0KFwic2Z4LWljZS1wdXNoXCIpLFxyXG4gICAgICBmYWxsOiByZXNvdXJjZXMuZ2V0KFwic2Z4LWZhbGxcIiksXHJcbiAgICAgIGZhbGxpbmc6IHJlc291cmNlcy5nZXQoXCJzZngtZmFsbGluZ1wiKSxcclxuICAgICAgXCJuZXctaWNlXCI6IHJlc291cmNlcy5nZXQoXCJzZngtbmV3LWljZVwiKSxcclxuICAgICAgY2xpbWI6IHJlc291cmNlcy5nZXQoXCJzZngtY2xpbWJcIiksXHJcbiAgICAgIFwiaWNlLWNvbGxpc2lvblwiOiByZXNvdXJjZXMuZ2V0KFwic2Z4LWljZS1jb2xsaXNpb25cIiksXHJcbiAgICAgIFwic3RhZ2UtZW50ZXJcIjogcmVzb3VyY2VzLmdldChcInNmeC1zdGFnZS1lbnRlclwiKSxcclxuICAgICAgZGFuZ2VyOiByZXNvdXJjZXMuZ2V0KFwic2Z4LWRhbmdlclwiKSxcclxuICAgICAgXCJpY2UtcmVtb3ZlXCI6IHJlc291cmNlcy5nZXQoXCJzZngtaWNlLXJlbW92ZVwiKSxcclxuICAgICAgXCJzdGF0ZS1sZWF2ZVwiOiByZXNvdXJjZXMuZ2V0KFwic2Z4LXN0YXRlLWxlYXZlXCIpLFxyXG4gICAgICBcImljZS1kaXNhYmxlZFwiOiByZXNvdXJjZXMuZ2V0KFwic2Z4LWRpc2FibGVkXCIpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHBsYXkoc2Z4KSB7XHJcbiAgICBpZiAoIXRoaXMuc291bmRPbikgcmV0dXJuO1xyXG4gICAgdGhpcy5zZnhbc2Z4XS52b2x1bWUgPSB0aGlzLnNmeFZvbHVtZTtcclxuICAgIHRoaXMuc2Z4W3NmeF0uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgdGhpcy5zZnhbc2Z4XS5wbGF5KCkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgcGxheU9uY2Uoc2Z4KSB7XHJcbiAgICBpZiAoIXRoaXMuc2Z4W3NmeF0ucGF1c2VkKSByZXR1cm47XHJcbiAgICBpZiAoIXRoaXMuc291bmRPbikgcmV0dXJuO1xyXG4gICAgdGhpcy5zZnhbc2Z4XS52b2x1bWUgPSB0aGlzLnNmeFZvbHVtZTtcclxuICAgIHRoaXMuc2Z4W3NmeF0uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgdGhpcy5zZnhbc2Z4XS5wbGF5KCkuY2F0Y2goKCkgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgc3RvcChzZngpIHtcclxuICAgIHRoaXMuc2Z4W3NmeF0ucGF1c2UoKTtcclxuICAgIHRoaXMuc2Z4W3NmeF0uY3VycmVudFRpbWUgPSAwO1xyXG4gIH1cclxuXHJcbiAgc291bmR0cmFjaygpIHtcclxuICAgIGlmICghdGhpcy5tdXNpY09uKSByZXR1cm47XHJcbiAgICB0aGlzLm11c2ljID0gdGhpcy5yZXNvdXJjZXMuZ2V0KFwic2Z4LW11c2ljLXNwYXJrc1wiKTtcclxuICAgIHRoaXMubXVzaWMubXV0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubXVzaWMudm9sdW1lID0gMC4yO1xyXG4gICAgdGhpcy5tdXNpYy5sb29wID0gdHJ1ZTtcclxuICAgIHRoaXMubXVzaWMucGxheSgpLmNhdGNoKCgpID0+IHt9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vc3RydWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICAvKipcclxuICAgKiBCYXNlIGNsYXNzIG9mIHRoZSBzcHJpdGVcclxuICAgKiBAcGFyYW0ge29iamVjdH0gZW5naW5lICAgRW5naW5lIEVuZ2luZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eCAgICAgUG9zaXRpb24gdGlsZSB4IGluIHRoZSBtYXBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdHkgICAgIFBvc2l0aW9uIHRpbGUgeSBpbiB0aGUgbWFwXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoICBXaWR0aCBvZiB0aGUgc3ByaXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgdGhlIHNwcml0ZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGlkLCBlbmdpbmUsIHR4LCB0eSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmN0eCA9IGVuZ2luZS5jdHg7XHJcbiAgICB0aGlzLmNvcm5lcnMgPSBuZXcgUG9zaXRpb24oKTtcclxuICAgIHRoaXMuc29saWQgPSB0cnVlO1xyXG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuY291bnRlciA9IGZhbHNlO1xyXG4gICAgdGhpcy5zcGVlZCA9IDQ7XHJcbiAgICB0aGlzLnN0YXRlID0gQ29uc3RzLk1vdmVTdGFuZDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgdGhpcy54VGlsZSA9IHR4O1xyXG4gICAgdGhpcy55VGlsZSA9IHR5O1xyXG4gICAgdGhpcy54ID0gdGhpcy54VGlsZSAqIENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICB0aGlzLnkgPSB0aGlzLnlUaWxlICogQ29uc3RzLlRpbGVXaWR0aDtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogU2V0cyBzcHJpdGUgc3RhdGVzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXRlICBDb25zdGFudCBvZiB0aGUgc3RhdGVcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1vdmluZyBUcnVlIGlmIHNwcml0ZSBpcyBtb3ZpbmdcclxuICAgKi9cclxuICBzZXRTdGF0ZShzdGF0ZSwgbW92aW5nKSB7XHJcbiAgICB0aGlzLm1vdmluZyA9IHR5cGVvZiBtb3ZpbmcgPT09IFwidW5kZWZpbmVkXCIgPyBmYWxzZSA6IG1vdmluZztcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgfVxyXG5cclxuICBnZXRUaWxlKHR4LCB0eSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW5naW5lLm1hcC5nZXRUaWxlKHR4LCB0eSk7XHJcbiAgfVxyXG5cclxuICBpc1Nwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgcmV0dXJuIHRoaXMueFRpbGUgPT09IHR4ICYmIHRoaXMueVRpbGUgPT09IHR5O1xyXG4gIH1cclxuXHJcbiAgc3ByaXRlVHlwZUF0KHR4LCB0eSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0eCwgdHkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29ybmVycygpIHtcclxuICAgIHRoaXMuY29ybmVycy51ID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSAtIDEpO1xyXG4gICAgdGhpcy5jb3JuZXJzLmQgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmNvcm5lcnMubCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgLSAxLCB0aGlzLnlUaWxlKTtcclxuICAgIHRoaXMuY29ybmVycy5yID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgdGhpcy5jb3JuZXJzLnVsID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSAtIDEsIHRoaXMueVRpbGUgLSAxKTtcclxuICAgIHRoaXMuY29ybmVycy51ciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgKyAxLCB0aGlzLnlUaWxlIC0gMSk7XHJcbiAgICB0aGlzLmNvcm5lcnMuZGwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlIC0gMSwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy5jb3JuZXJzLmRyID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIDEsIHRoaXMueVRpbGUgKyAxKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgdGhpcy54VGlsZSA9IE1hdGguZmxvb3IodGhpcy54IC8gQ29uc3RzLlRpbGVXaWR0aCk7XHJcbiAgICB0aGlzLnlUaWxlID0gTWF0aC5mbG9vcih0aGlzLnkgLyBDb25zdHMuVGlsZVdpZHRoKTtcclxuICB9XHJcblxyXG4gIG1vdmUoKSB7fVxyXG5cclxuICBlbmdpbmVNb3ZlKCkge1xyXG4gICAgdGhpcy51cGRhdGVDb3JuZXJzKCk7XHJcbiAgICB0aGlzLm1vdmUoKTtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFN0b3JlcyBwb3NpdGlvbiBvZiB0aGUgY29ybmVycyBhbmQgdmVydGljZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQb3NpdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnUgPSAwO1xyXG4gICAgdGhpcy5kID0gMDtcclxuICAgIHRoaXMubCA9IDA7XHJcbiAgICB0aGlzLnIgPSAwO1xyXG4gICAgdGhpcy51bCA9IDA7XHJcbiAgICB0aGlzLnVyID0gMDtcclxuICAgIHRoaXMuZGwgPSAwO1xyXG4gICAgdGhpcy5kciA9IDA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29vciB7XHJcbiAgY29uc3RydWN0b3IodHgsIHR5KSB7XHJcbiAgICB0aGlzLnhUaWxlID0gdHg7XHJcbiAgICB0aGlzLnlUaWxlID0gdHk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRnJvc3Qge1xyXG4gIGNvbnN0cnVjdG9yKGxlZnQsIHJpZ2h0KSB7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlTWFwIHtcclxuICAvKipcclxuICAgKiBUaWxlbWFwIGNsYXNzXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGVuZ2luZSBFbmdpbmVcclxuICAgKiBAcGFyYW0ge29iamVjdH0gbWFwICBNYXRyaXggb2YgdGhlIG1hcFxyXG4gICAqL1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbmdpbmUsIG1hcCwgdGhlbWUpIHtcclxuICAgIHRoaXMuY3R4ID0gZW5naW5lLmN0eDtcclxuICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICB0aGlzLnRoZW1lID0gdGhlbWU7XHJcbiAgICB0aGlzLnRpbGVXaWR0aCA9IENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICB0aGlzLnRpbGVIZWlnaHQgPSBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1hcC5sZW5ndGggLSAxO1xyXG4gICAgdGhpcy53aWR0aCA9IHRoaXMubWFwWzBdLmxlbmd0aCAtIDE7XHJcbiAgICB0aGlzLnRpbGVzSW1hZ2UgPSB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KFwidGlsZW1hcFwiKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgY29udGVudCBvZiB0aGUgdGlsZSBpbnNpZGUgdGhlIG1hdHJpeFxyXG4gICAqIGlmIHBvc2l0aW9uIG91dCBvZiBib3VuZHMgcmV0dXJucyBDb25zdHMuT0JKRUNUX09VVFxyXG4gICAqIEBwYXJhbSAge251bWJlcn0geSBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSAge251bWJlcn0geCBwb3NpdGlvblxyXG4gICAqIEByZXR1cm4ge251bWJlcn0gICBDb250ZW50IG9mIHRoZSB0aWxlXHJcbiAgICovXHJcbiAgZ2V0VGlsZSh4LCB5KSB7XHJcbiAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+IHRoaXMud2lkdGggfHwgeSA+IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybiBDb25zdHMuT2JqZWN0T3V0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubWFwW3ldW3hdO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBEcmF3cyB0aGUgbWFwXHJcbiAgICogQHJldHVybiB7bm9uZX1cclxuICAgKi9cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy53aWR0aDsgKytpKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHRoaXMuaGVpZ2h0OyArK2opIHtcclxuICAgICAgICBsZXQgdGlsZVR5cGUgPSBDb25zdHMuVGlsZUJhY2tncm91bmQ7XHJcbiAgICAgICAgaWYgKHRoaXMubWFwW2pdW2ldID09PSAxKSB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuZ2V0VGlsZShpIC0gMSwgaikgJiYgIXRoaXMuZ2V0VGlsZShpICsgMSwgaikpIHtcclxuICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZUJvdGhTaWRlcztcclxuICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2V0VGlsZShpIC0gMSwgaikpIHtcclxuICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZUxlZnRTaWRlO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5nZXRUaWxlKGkgKyAxLCBqKSkge1xyXG4gICAgICAgICAgICB0aWxlVHlwZSA9IENvbnN0cy5UaWxlUmlnaHRTaWRlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZU1pZGRsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgdGhpcy50aWxlc0ltYWdlLFxyXG4gICAgICAgICAgdGlsZVR5cGUsXHJcbiAgICAgICAgICB0aGlzLnRoZW1lICogdGhpcy50aWxlSGVpZ2h0LFxyXG4gICAgICAgICAgdGhpcy50aWxlV2lkdGgsXHJcbiAgICAgICAgICB0aGlzLnRpbGVIZWlnaHQsXHJcbiAgICAgICAgICBpICogdGhpcy50aWxlV2lkdGgsXHJcbiAgICAgICAgICBqICogdGhpcy50aWxlSGVpZ2h0LFxyXG4gICAgICAgICAgdGhpcy50aWxlV2lkdGgsXHJcbiAgICAgICAgICB0aGlzLnRpbGVIZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlKCkge31cclxuXHJcbiAgZW5naW5lTW92ZSgpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGlsZSA9IE9iamVjdC5mcmVlemUoe1xyXG4gIHRpbGVzOiB7XHJcbiAgICBbQ29uc3RzLk9iamVjdEJhY2tncm91bmRdOiB7XHJcbiAgICAgIHNvbGlkOiBmYWxzZSxcclxuICAgICAgZnJlZXplOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBbQ29uc3RzLk9iamVjdE91dF06IHtcclxuICAgICAgc29saWQ6IHRydWUsXHJcbiAgICAgIGZyZWV6ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgW0NvbnN0cy5PYmplY3RQbGF5ZXJdOiB7XHJcbiAgICAgIHNvbGlkOiB0cnVlLFxyXG4gICAgICBmcmVlemU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIFtDb25zdHMuT2JqZWN0SWNlXToge1xyXG4gICAgICBzb2xpZDogdHJ1ZSxcclxuICAgICAgZnJlZXplOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBbQ29uc3RzLk9iamVjdE1ldGFsXToge1xyXG4gICAgICBzb2xpZDogdHJ1ZSxcclxuICAgICAgZnJlZXplOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIFtDb25zdHMuT2JqZWN0V2FsbF06IHtcclxuICAgICAgc29saWQ6IHRydWUsXHJcbiAgICAgIGZyZWV6ZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBbQ29uc3RzLk9iamVjdEZpcmVdOiB7XHJcbiAgICAgIHNvbGlkOiBmYWxzZSxcclxuICAgICAgZnJlZXplOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBbQ29uc3RzLk9iamVjdEphcl06IHtcclxuICAgICAgc29saWQ6IHRydWUsXHJcbiAgICAgIGZyZWV6ZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgaXNTb2xpZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMudGlsZXNbaWRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVOREVGSU5FRCBPTiBpc1NvbGlkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGlsZXNbaWRdLnNvbGlkO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGlzRnJlZXphYmxlOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy50aWxlc1tpZF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVU5ERUZJTkVEIE9OIGlzRnJlZXphYmxlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGlsZXNbaWRdLmZyZWV6ZTtcclxuICAgIH1cclxuICB9LFxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==