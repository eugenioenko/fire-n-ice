/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animsprite.js":
/*!***************************!*\
  !*** ./src/animsprite.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimSprite: () => (/* binding */ AnimSprite)
/* harmony export */ });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



class AnimSprite extends _sprite__WEBPACK_IMPORTED_MODULE_0__.Sprite {
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
  constructor(id, engine, image, tx, ty, width, height, offsetX, offsetY, start, end, loop) {
    super(id, engine, tx, ty, width, height);
    this.image = this.engine.resources.get(image);
    this.animLoop = loop;
    this.animStart = start;
    this.animEnd = end;
    this.animCount = 0;
    this.animDelay = _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.AnimDefaultDelay;
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
    once = typeof once === 'undefined' ? false : once;
    delay = typeof delay === 'undefined' ? _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.AnimDefaultDelay : delay;
    row = typeof row === 'undefined' ? this.animRow : row;
    if (!once) {
      this.animStart = start;
      this.animEnd = end;
      this.animCount = start;
      this.animLoop = loop;
      this.animDelay = delay;
      this.animRow = row;
    } else {
      if (this.animStart !== start || this.animEnd !== end || this.animLoop !== loop || this.animRow !== row) {
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
      this.height,
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
    if (leftSprite && leftSprite.id === _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ObjectIce && leftSprite.frozen.right) {
      this.ctx.drawImage(this.engine.resources.get('frost'), this.xTile * this.width - 7, this.yTile * this.height);
    }
    const rightSprite = this.engine.spriteAt(this.xTile + 1, this.yTile);
    if (rightSprite && rightSprite.id === _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ObjectIce && rightSprite.frozen.left) {
      this.ctx.drawImage(
        this.engine.resources.get('frost'),
        (this.xTile + this.length) * this.width - 7,
        this.yTile * this.height,
      );
    }
  }
}


/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Consts: () => (/* binding */ Consts)
/* harmony export */ });
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
  MoveTeleportOut: 14,
  MoveTeleportIn: 15,
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
  ObjectTeleport: 8,
  GameStatePlay: 1,
  GameStateIntro: 2,
  ColorGreen: '124, 238, 66',
  ColorBlue: '122, 211, 255',
  ColorOrange: '255, 88, 33',
  ColorRed: '255, 135, 124',
  ColorWhite: '255, 255, 255',
});


/***/ }),

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Engine: () => (/* binding */ Engine)
/* harmony export */ });
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
    this.keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard();
    this.sound = new _sound__WEBPACK_IMPORTED_MODULE_5__.Sound(resources);
    this.scene = new _scene__WEBPACK_IMPORTED_MODULE_4__.Scene(this);
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
    const fires = this.sprites.filter(sprite => sprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectFire);
    if (!fires.length && !this.editor && this.player.state !== _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveLevelExit) {
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
      if (this.sprites[i] && this.sprites[i].id !== _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectPlayer && this.sprites[i].moving) {
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
      this.player.iceOrTeleport();
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
    let foundIceBlocks = [];
    for (let i = 0; i < this.sprites.length; i++) {
      if (this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectIce && this.sprites[i].yTile === ty) {
        let ice = this.sprites[i];
        if (ice.xTile - 1 === tx || ice.xTile + ice.length === tx) {
          foundIceBlocks.push(ice);
        }
      }
    }
    if (foundIceBlocks.length === 0) {
      this.sprites.push(new _ice__WEBPACK_IMPORTED_MODULE_2__.Ice(this, tx, ty, 1));
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
    this.addSprite(new _ice__WEBPACK_IMPORTED_MODULE_2__.Ice(this, tx, ty, length, new _struct__WEBPACK_IMPORTED_MODULE_1__.Frost(iceblockA.frozen.left, iceblockB.frozen.right)));
    this.removeSprite(iceblockA);
    this.removeSprite(iceblockB);
  }

  removeIceBlock(tx, ty) {
    for (let i = 0; i < this.sprites.length; i++) {
      if (
        this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectIce &&
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
      if (this.sprites[i].yTile === ty && tx === this.sprites[i].xTile && this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectFire) {
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
    this.sfxs.push(new _sfx__WEBPACK_IMPORTED_MODULE_6__.Sparks(this, xTile, yTile, color, quantity, intensity));
  }

  spriteTypeAt(tx, ty, excludeId) {
    excludeId = typeof excludeId === 'undefined' ? _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectOut : excludeId;
    if (tx < 0 || ty < 0 || tx > this.map.width || ty > this.map.height) {
      return _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectOut;
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
    return _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectBackground;
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fire: () => (/* binding */ Fire)
/* harmony export */ });
/* harmony import */ var _animsprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animsprite */ "./src/animsprite.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _tiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tiles */ "./src/tiles.js");




class Fire extends _animsprite__WEBPACK_IMPORTED_MODULE_0__.AnimSprite {
  constructor(engine, tx, ty) {
    super(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ObjectFire, engine, 'img_fire', tx, ty, _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.TileWidth, _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.TileWidth, 0, 0, 0, 3, true);
  }

  move() {
    if (!this.moving) {
      this.collisions();
      this.gravity();
    }
    switch (this.state) {
      case _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.MoveDown:
        this.doDown();
        break;
    }
  }

  collisions() {
    if (this.engine.spriteTypeAt(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ObjectFire) === _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ObjectIce) {
      this.engine.sound.play('fire-off');
      this.engine.removeFire(this.xTile, this.yTile);
      this.engine.removeIceBlock(this.xTile, this.yTile);
      this.engine.addSparks(this.xTile, this.yTile, '255, 126, 198', 15, 0.5);
      this.engine.addSparks(this.xTile, this.yTile, '124, 212, 255', 10);
    }
    if (this.engine.spriteTypeAt(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ObjectFire) === _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ObjectMetal) {
      this.engine.sound.play('fire-off');
      this.engine.removeFire(this.xTile, this.yTile);
      this.engine.addSparks(this.xTile, this.yTile, '255, 222, 127', 15, 0.5);
      this.engine.addSparks(this.xTile, this.yTile, '41, 42, 90', 10);
    }
  }

  gravity() {
    if (!_tiles__WEBPACK_IMPORTED_MODULE_2__.Tile.isSolid(this.corners.d) && this.corners.d !== _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ObjectFire) {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.MoveDown, true);
      return true;
    }
    return false;
  }

  doDown() {
    this.counter += 4;
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.TileWidth) {
      this.y += 4;
    } else {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.MoveStand, false);
    }
  }
}


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
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
    this.time = performance.now();
    this.engine = new _engine__WEBPACK_IMPORTED_MODULE_2__.Engine(canvas, resources);
    this.levels = _levels__WEBPACK_IMPORTED_MODULE_3__.levels;
    this.state = _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.GameStatePlay;
    this.engine.sound.soundtrack();
    this.gameLoop = this.gameLoop_.bind(this); // jshint ignore:line
    setInterval(() => this.gameLoop(), 1000 / 60);
  }

  gameLoop_() {
    this.engine.draw();
    this.engine.move();
  }

  createIntro() {
    this.intro = new _animsprite__WEBPACK_IMPORTED_MODULE_0__.AnimSprite(null, this.engine, 'img_intro', 0, 0, 544, 416, 0, 0, 0, 0, false);
    this.start = new _animsprite__WEBPACK_IMPORTED_MODULE_0__.AnimSprite(null, this.engine, 'img_start', 7, 11, 140, 26, -10, 0, 0, 1, true);
    this.start.animDelay = _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.AnimDefaultDelay * 20;
  }
}


/***/ }),

/***/ "./src/ice.js":
/*!********************!*\
  !*** ./src/ice.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ice: () => (/* binding */ Ice)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _animsprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animsprite */ "./src/animsprite.js");
/* harmony import */ var _tiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tiles */ "./src/tiles.js");
/* harmony import */ var _struct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./struct */ "./src/struct.js");





class Ice extends _animsprite__WEBPACK_IMPORTED_MODULE_1__.AnimSprite {
  constructor(engine, tx, ty, length, frozen) {
    super(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectIce, engine, 'img_ice', tx, ty, _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth, _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth, 0, 0, 0, 1, true);
    this.xTile = tx;
    this.yTile = ty;
    this.length = length;
    this.animEnd = 1;
    this.animDelay = 9;
    this.animRow = 0;
    this.direction = 0;
    this.falling = false;
    if (typeof frozen !== 'undefined') {
      this.frozen = frozen;
    } else {
      this.frozen = new _struct__WEBPACK_IMPORTED_MODULE_3__.Frost(false, false);
      this.updateCorners();
      this.checkFreeze();
    }
  }

  addBlock(tx) {
    const spriteTypeAtLeftCorner = this.engine.spriteTypeAt(tx - 1, this.yTile);
    const spriteTypeAtRightCorner = this.engine.spriteTypeAt(this.xTile + this.length + 1, this.yTile);
    if (tx > this.xTile) {
      if (
        this.getTile(tx + 1, this.yTile) === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectWall ||
        spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectMetal ||
        spriteTypeAtRightCorner === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectJar
      ) {
        this.frozen.right = true;
      }
    }

    if (tx < this.xTile) {
      this.xTile = tx;
      if (
        this.getTile(tx - 1, this.yTile) === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectWall ||
        spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectMetal ||
        spriteTypeAtLeftCorner === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectJar
      ) {
        this.frozen.left = true;
      }
    }
    this.x = this.xTile * _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth;
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
      this.x += _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth;
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
          new _struct__WEBPACK_IMPORTED_MODULE_3__.Frost(false, this.frozen.right),
        ),
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
    if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.DirLeft && _tiles__WEBPACK_IMPORTED_MODULE_2__.Tile.isSolid(this.corners.l)) {
      return false;
    }
    if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.DirRight && _tiles__WEBPACK_IMPORTED_MODULE_2__.Tile.isSolid(this.corners.r)) {
      return false;
    }
    return true;
  }

  isFrozen() {
    return this.frozen.left || this.frozen.right;
  }

  gravity() {
    if (!_tiles__WEBPACK_IMPORTED_MODULE_2__.Tile.isSolid(this.corners.d) && !this.isFrozen()) {
      this.falling = true;
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveDown, true);
      return true;
    }
    if (this.falling) {
      this.falling = false;
      this.engine.sound.play('ice-collision');
    }
    return false;
  }

  collision() {
    if (!this.canGlide(this.direction)) {
      this.direction = 0;
      this.engine.sound.play('ice-collision');
      return true;
    }
    return false;
  }

  move() {
    for (let i = 0; i < this.length; i++) {
      let tile_down = this.spriteTypeAt(this.xTile + i, this.yTile + 1);
      if (tile_down && tile_down !== _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectFire) {
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
      case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveIceMoving:
        this.glide();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveIceCheck:
        this.push();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveDown:
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
        _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth * this.animRow,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height,
      );
    } else if (this.length === 2) {
      this.ctx.drawImage(
        this.image,
        _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth,
        _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth * this.animRow,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height,
      );
      this.ctx.drawImage(
        this.image,
        3 * _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth,
        _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth * this.animRow,
        this.width,
        this.height,
        this.x + _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth,
        this.y,
        this.width,
        this.height,
      );
    } else {
      this.ctx.drawImage(
        this.image,
        _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth,
        _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth * this.animRow,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height,
      );
      this.ctx.drawImage(
        this.image,
        3 * _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth,
        _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth * this.animRow,
        this.width,
        this.height,
        this.x + _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth * (this.length - 1),
        this.y,
        this.width,
        this.height,
      );
      for (let i = 1; i < this.length - 1; i++) {
        this.ctx.drawImage(
          this.image,
          2 * _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth,
          _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth * this.animRow,
          this.width,
          this.height,
          this.x + _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth * i,
          this.y,
          this.width,
          this.height,
        );
      }
    }
    if (this.frozen.left) {
      this.ctx.drawImage(this.engine.resources.get('frost'), this.xTile * this.width - 7, this.yTile * this.height);
    }
    if (this.frozen.right) {
      this.ctx.drawImage(
        this.engine.resources.get('frost'),
        (this.xTile + this.length) * this.width - 7,
        this.yTile * this.height,
      );
    }

    this.ctx.restore();
  }

  glide() {
    this.counter += 4;
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth) {
      this.x += 4 * this.direction;
    } else {
      this.push();
    }
  }

  doDown() {
    this.counter += 4;
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth) {
      this.y += 4;
    } else {
      if (!this.gravity()) {
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveStand, false);
      }
    }
  }

  push(dir) {
    this.direction = typeof dir === 'undefined' ? this.direction : dir;
    if (!this.collision() && !this.gravity()) {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveIceMoving, true);
    } else {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveStand, false);
    }
  }

  checkFreeze() {
    if (_tiles__WEBPACK_IMPORTED_MODULE_2__.Tile.isFreezable(this.corners.l)) {
      this.frozen.left = true;
    } else {
      this.frozen.left = false;
    }
    if (_tiles__WEBPACK_IMPORTED_MODULE_2__.Tile.isFreezable(this.corners.r)) {
      this.frozen.right = true;
    } else {
      this.frozen.right = false;
    }
  }

  checkUnfreezeLeft() {
    if (this.frozen.left && !_tiles__WEBPACK_IMPORTED_MODULE_2__.Tile.isFreezable(this.corners.l)) {
      this.frozen.left = false;
    }
  }

  checkUnfreezeRight() {
    if (this.frozen.right && !_tiles__WEBPACK_IMPORTED_MODULE_2__.Tile.isFreezable(this.corners.r)) {
      this.frozen.right = false;
    }
  }
}


/***/ }),

/***/ "./src/jar.js":
/*!********************!*\
  !*** ./src/jar.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jar: () => (/* binding */ Jar)
/* harmony export */ });
/* harmony import */ var _animsprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animsprite */ "./src/animsprite.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



class Jar extends _animsprite__WEBPACK_IMPORTED_MODULE_0__.AnimSprite {
  constructor(engine, tx, ty) {
    super(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ObjectJar, engine, 'img_jar', tx, ty, _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.TileWidth, _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.TileWidth, 0, 0, 0, 3, true);
    this.animDelay = _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.AnimDefaultDelay * 2;
    this.onFire = false;
    this.animRow = 0;
  }

  move() {
    if (!this.moving) {
      this.collisions();
      this.gravity();
    }
    switch (this.state) {
      case _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.MoveDown:
        this.doDown();
        break;
    }
  }

  collisions() {
    if (!this.onFire && this.corners.u === _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ObjectFire) {
      this.turnOnFire();
      this.engine.removeFire(this.xTile, this.yTile - 1);
    }
    if (this.onFire && this.corners.u === _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ObjectIce) {
      this.meltIce();
    }
  }

  gravity() {
    if (!this.corners.d) {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.MoveDown, true);
      return true;
    }
    return false;
  }

  doDown() {
    this.counter += 4;
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.TileWidth) {
      this.y += 4;
    } else {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.MoveStand, false);
    }
  }

  turnOnFire() {
    this.animRow = 1;
    this.onFire = true;
    this.engine.sound.play('fire-off');
    this.engine.addSparks(this.xTile, this.yTile - 1, _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ColorOrange, 30);
  }

  meltIce() {
    this.engine.removeIceBlock(this.xTile, this.yTile - 1);
    this.engine.addSparks(this.xTile, this.yTile - 1, _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ColorOrange, 20);
    this.engine.addSparks(this.xTile, this.yTile - 1, _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ColorBlue, 10);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Keyboard: () => (/* binding */ Keyboard)
/* harmony export */ });
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
    document.getElementById('btn_action').addEventListener('pointerup', () => (this.down = false));
    document.getElementById('btn_left').addEventListener('pointerdown', () => {
      this.left = true;
      this.right = false;
      this.down = false;
    });
    document.getElementById('btn_left').addEventListener('pointerup', () => (this.left = false));
    document.getElementById('btn_right').addEventListener('pointerdown', () => {
      this.right = true;
      this.left = false;
      this.down = false;
    });
    document.getElementById('btn_right').addEventListener('pointerup', () => (this.right = false));
    document.getElementById('btn_select').addEventListener('click', () => (this.enter = true));
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   levels: () => (/* binding */ levels)
/* harmony export */ });
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
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [
      { id: 7, x: 10, y: 7, v: 1 },
      { id: 5, x: 8, y: 8, v: true },
      { id: 8, x: 14, y: 8, v: false, ref: 1, link: 2 },
      { id: 8, x: 8, y: 4, v: false, ref: 2, link: 1 },
      { id: 6, x: 4, y: 9, v: 1 },
    ],
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Metal: () => (/* binding */ Metal)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _animsprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animsprite */ "./src/animsprite.js");
/* harmony import */ var _tiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tiles */ "./src/tiles.js");




class Metal extends _animsprite__WEBPACK_IMPORTED_MODULE_1__.AnimSprite {
  constructor(engine, tx, ty, length) {
    super(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectMetal, engine, 'img_metal', tx, ty, _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth, _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth, 0, 0, 0, 1, true);
    this.xTile = tx;
    this.yTile = ty;
    this.length = length;
    this.animDelay = 9;
    this.direction = 0;
    this.falling = false;
  }

  canGlide(dir) {
    if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.DirLeft && _tiles__WEBPACK_IMPORTED_MODULE_2__.Tile.isSolid(this.corners.l)) {
      return false;
    }
    if (dir === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.DirRight && _tiles__WEBPACK_IMPORTED_MODULE_2__.Tile.isSolid(this.corners.r)) {
      return false;
    }
    return true;
  }

  frozenToIce() {
    const rightSprite = this.engine.spriteAt(this.xTile + 1, this.yTile);
    const leftSprite = this.engine.spriteAt(this.xTile - 1, this.yTile);
    return (
      !this.falling &&
      ((rightSprite && rightSprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectIce && rightSprite.frozen.left) ||
        (leftSprite && leftSprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectIce && leftSprite.frozen.right))
    );
  }

  gravity() {
    if (!_tiles__WEBPACK_IMPORTED_MODULE_2__.Tile.isSolid(this.corners.d) && !this.frozenToIce()) {
      this.falling = true;
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveDown, true);
      return true;
    }
    if (this.falling) {
      this.falling = false;
      this.engine.sound.play('ice-collision');
    }
    return false;
  }

  collision() {
    if (!this.canGlide(this.direction)) {
      this.direction = 0;
      this.engine.sound.play('ice-collision');
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveStand, false);
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
      case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveIceMoving:
        this.glide();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveIceCheck:
        this.push();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveDown:
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
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth) {
      this.x += 4 * this.direction;
    } else {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveStand, false);
    }
  }

  doDown() {
    this.counter += 4;
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth) {
      this.y += 4;
    } else {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveStand, false);
    }
  }

  push(dir) {
    this.direction = typeof dir === 'undefined' ? this.direction : dir;
    if (!this.collision()) {
      this.moving = true;
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveIceMoving, true);
    } else {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveStand, false);
    }
  }
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _animsprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animsprite */ "./src/animsprite.js");
/* harmony import */ var _tiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiles */ "./src/tiles.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");




class Player extends _animsprite__WEBPACK_IMPORTED_MODULE_0__.AnimSprite {
  constructor(engine, tx, ty) {
    super(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ObjectPlayer, engine, 'img_dona', tx, ty, 48, 64, -10, -32, 2, 2, false);
    this.speed = 2;
    this.direction = 1;
    this.state = 0; //standing top right down left
    this.moving = false;
    this.tileWidth = _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.TileWidth;
    this.tileHeight = _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.TileWidth;
    this.animDelay = 3;
    this.counter = 0;
    this.fallCounter = 0;
    this.innerCounter = 0;
    this.standCounter = 0;
    this.intro();
  }

  left() {
    if (this.moving) {
      return;
    }
    //if standing then turn
    if (this.direction !== _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.DirLeft) {
      //is not under a brick
      if (!_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.u)) {
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimTurnStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimTurnEnd, false, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow, 4);
      } else {
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimCrouchStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimCrouchStart, false, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow, 4);
      }
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveTurn, true);
      this.direction = _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.DirLeft;
    } else {
      //running
      if (!_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.l) && _tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.d)) {
        //not under a brick
        if (!_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.ul)) {
          this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRunStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRunEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow, 2);
        } else {
          this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimCrouchStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimCrouchEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow, 2);
        }
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveLeft, true);
      }
      //hit an ice
      if (
        _tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.d) &&
        (this.corners.l === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ObjectIce || this.corners.l === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ObjectMetal)
      ) {
        this.push();
      }
      //climb
      if (
        _tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.l) &&
        _tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.d) &&
        !_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.u) &&
        !_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.ul) &&
        !this.moving
      ) {
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimPushStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimPushStart, false, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow);
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveUp, true);
      }
    }
  }

  right() {
    if (this.moving) {
      return;
    }
    if (this.direction !== _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.DirRight) {
      if (!_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.u)) {
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimTurnStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimTurnEnd, false, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow, 4);
      } else {
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimCrouchStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimCrouchStart, false, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow, 4);
      }
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveTurn, true);
      this.direction = _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.DirRight;
    } else {
      if (!_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.r) && _tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.d)) {
        if (!_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.u) && !_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.ur)) {
          this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRunStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRunEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow, 2);
        } else {
          this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimCrouchStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimCrouchEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow, 2);
        }
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveRight, true);
      }
      if (
        _tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.d) &&
        (this.corners.r === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ObjectIce || this.corners.r === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ObjectMetal)
      ) {
        this.push();
      }
      if (
        _tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.r) &&
        _tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.d) &&
        !_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.u) &&
        !_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.ur) &&
        !this.moving
      ) {
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimPushStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimPushStart, false, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow);
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveUp, true);
      }
    }
  }

  burn() {
    if (this.state === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveRip) {
      return;
    }
    this.engine.sound.playOnce('danger');
    this.counter = 0;
    this.innerCounter = 0;
    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveRip, true);
    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRipStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRipEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow);
  }

  intro() {
    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimBigFallStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimBigFallEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow, 4);
    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveLevelEnter, true);
  }

  outro() {
    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimFallStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimBigFallEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow, 4);
    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveLevelExit, true);
    this.innerCounter = 0;
  }

  doRip() {
    this.counter += 1;
    if (this.counter % 10 === 0) {
      this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorRed, 5, 1.2);
      this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorBlue, 5, 0.7);
    }
    if (this.counter >= 70) {
      this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorRed, 15, 2.0);
      this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorBlue, 10, 3.0);
      this.counter = 0;
      this.engine.keyboard.enter = true;
    }
  }

  gravity() {
    if (this.moving) {
      return;
    }
    if (typeof this.corners.d === 'undefined') {
      console.error('undefined corner');
    }
    if (!_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.d)) {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveDown, true);
      if (this.fallCounter >= 1) {
        this.engine.sound.playOnce('falling');
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimBigFallStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimBigFallEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow, 1);
      } else {
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimBigFallStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimBigFallEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow, 3);
      }
    } else {
      this.engine.sound.stop('falling');
      if (this.state === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveDown) {
        this.engine.sound.play('fall');
        this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorGreen, 10, 0.75);
        this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorRed, 5, 1.25);
      }
      this.fallCounter = 0;
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveStand, false);
      if (this.corners.d === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ObjectJar) {
        const jar = this.engine.spriteAt(this.xTile, this.yTile + 1);
        if (jar && jar.onFire) {
          this.burn();
        }
      }
    }
  }

  iceOrTeleport() {
    if (this.moving) {
      return;
    }
    if (this.corners.d === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ObjectTeleport) {
      this.teleport();
    } else {
      this.ice();
    }
  }

  teleport() {
    if (this.moving) {
      return;
    }
    this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimFallStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimBigFallEnd, true, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow, 4);
    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveTeleportOut, true);
    this.innerCounter = 0;
    this.doTeleportIn();
  }

  ice() {
    if (this.moving) {
      return;
    }
    if (_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.d)) {
      if (this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.DirRight) {
        if (!_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.dr) && this.corners.dr !== _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ObjectFire) {
          this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimIceStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimIceEnd, false, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow, 4);
          this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveIceMake, true);
        } else if (this.corners.dr === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ObjectIce) {
          this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimIceStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimIceEnd, false, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow, 4);
          this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveIceRemove, true);
        } else {
          this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimIceStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimIceEnd, false, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow, 4);
          this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveIceFail, true);
        }
      } else {
        if (!_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.dl) && this.corners.dl !== _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ObjectFire) {
          this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimIceStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimIceEnd, false, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow, 4);
          this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveIceMake, true);
        } else if (this.corners.dl === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ObjectIce) {
          this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimIceStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimIceEnd, false, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow, 4);
          this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveIceRemove, true);
        } else {
          this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimIceStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimIceEnd, false, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow, 4);
          this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveIceFail, true);
        }
      }
    }
  }

  jump() {
    if (this.moving) {
      return;
    }
    if (this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.DirRight) {
      if (_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.r) && !_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.ur) && !_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.u)) {
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimPushStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimPushStart, false, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow);
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveUp, true);
      }
    } else {
      if (_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.l) && !_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.ul) && !_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.u)) {
        this.setAnim(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimPushStart, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimPushStart, false, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow);
        this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveUp, true);
      }
    }
  }

  doRun() {
    this.counter += 1;
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimFrameCount) {
      this.x += this.speed * this.direction;
    } else {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveStand, false);
    }
  }

  doTurn() {
    this.counter += 1;
    if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimFrameCount) {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveStand, false);
    }
  }

  doOutro() {
    this.counter += 1;
    if (this.counter % 10 === 0) {
      this.innerCounter += 1;
      if (this.innerCounter === 1) {
        this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorGreen, 25, 0.5);
      }
      if (this.innerCounter === 3) {
        this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorRed, 30, 1);
      }
      if (this.innerCounter === 5) {
        this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorBlue, 35, 1.5);
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
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveStand, false);
      this.engine.nextLevel();
    }
  }

  doIntro() {
    this.counter += 1;
    if (this.counter === 8) {
      this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorGreen, 20, 2.5);
      this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorRed, 35, 1);
      this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorBlue, 20, 1.5);
      this.engine.sound.play('stage-enter');
    }
    if (this.counter >= 32) {
      this.engine.sound.stop('falling');
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveStand, false);
    }
  }

  doGravity() {
    this.counter += 1;
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimFrameCount) {
      this.y += this.speed;
    } else {
      this.moving = false;
      this.gravity();
      this.fallCounter++;
    }
  }

  doStand() {
    if (!_tiles__WEBPACK_IMPORTED_MODULE_1__.Tile.isSolid(this.corners.u)) {
      if (this.standCounter++ > 500) {
        this.setAnim(
          _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimSleepStart,
          _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimSleepEnd,
          true,
          this.direction !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow : _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow,
          48,
          true,
        );
      } else {
        this.setAnim(
          _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimStandStart,
          _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimStandEnd,
          true,
          this.direction !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow : _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow,
          8,
          true,
        );
      }
    } else {
      this.setAnim(
        _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimCrouchStart,
        _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimCrouchStart,
        false,
        this.direction !== 1 ? _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow : _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow,
        8,
        true,
      );
    }
  }

  doUp() {
    this.counter += 1;
    if (this.counter <= 18) {
      switch (this.counter) {
        case 3:
          this.engine.sound.play('climb');
          this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorGreen, 10, 0.75);
          this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorRed, 5, 1.25);
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimPushEnd,
            _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimPushEnd,
            false,
            this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.DirRight ? _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow : _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow,
          );
          break;
        case 6:
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimJumpStart,
            _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimJumpStart,
            false,
            this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.DirRight ? _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow : _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow,
          );
          this.x += 8 * this.direction;
          this.y -= 8;
          break;
        case 9:
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimJumpEnd,
            _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimJumpEnd,
            false,
            this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.DirRight ? _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow : _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow,
          );
          this.x += 8 * this.direction;
          this.y -= 8;
          break;
        case 12:
          this.setAnim(2, 2, false, this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.DirRight ? _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow : _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow);
          this.x += 8 * this.direction;
          this.y -= 8;
          break;
        case 18:
          this.setAnim(
            _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimStand,
            _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimStand,
            false,
            this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.DirRight ? _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow : _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow,
          );
          this.x += 8 * this.direction;
          this.y -= 8;
          break;
      }
    } else {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveStand, false);
    }
  }

  makeIce() {
    this.engine.sound.play('new-ice');
    this.engine.addIceBlock(this.xTile + this.direction, this.yTile + 1);
    this.engine.addSparks(this.xTile + this.direction, this.yTile + 1);
    this.engine.addSparks(this.xTile + this.direction, this.yTile + 1, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorBlue, 5);
  }

  removeIceBlock() {
    this.engine.sound.play('ice-remove');
    this.engine.removeIceBlock(this.xTile + this.direction, this.yTile + 1);
    this.engine.addSparks(this.xTile + this.direction, this.yTile + 1);
    this.engine.addSparks(this.xTile + this.direction, this.yTile + 1, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorBlue, 5);
  }

  push() {
    let ice = this.engine.iceAt(this.xTile + this.direction, this.yTile);
    if (ice && ice.canGlide(this.direction)) {
      this.engine.addSparks(this.xTile + this.direction, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorWhite, 3);
      this.engine.addSparks(this.xTile + this.direction, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorBlue, 3, 1.5);
      this.setAnim(
        _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimPushStart,
        _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimPushEnd,
        false,
        this.direction === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.DirRight ? _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimRightRow : _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimLeftRow,
        3,
      );
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MovePush, true);
    }
  }

  doPush() {
    this.counter += 2;
    if (this.counter > _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimFrameCount) {
      const ice = this.engine.iceAt(this.xTile + this.direction, this.yTile);
      if (ice) {
        this.engine.sound.play('ice-push');
        ice.push(this.direction);
      }
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveStand, false);
    }
  }

  doIce() {
    if (this.counter === 8) {
      if (this.state === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveIceMake) {
        this.makeIce();
      } else {
        this.removeIceBlock();
      }
    }
    this.counter += 1;
    if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimFrameCount) {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveStand, false);
    }
  }

  doFailIce() {
    if (this.counter === 8) {
      this.engine.sound.play('ice-disabled');
      this.engine.addSparks(this.xTile + this.direction, this.yTile + 1, '88,66,66');
    }
    this.counter += 1;
    if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.AnimFrameCount) {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveStand, false);
    }
  }

  doTeleportIn() {
    this.counter += 1;
    if (this.counter % 10 === 0) {
      this.innerCounter += 1;
      if (this.innerCounter === 1) {
        this.engine.sound.play('climb');
        this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorGreen, 10, 0.5);
      }
      if (this.innerCounter === 2) {
        this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorGreen, 10, 1.5);
      }
    }
    if (this.innerCounter >= 2) {
      this.doTeleportOut();
    }
  }

  doTeleportOut() {
    const teleport = this.engine.spriteAt(this.xTile, this.yTile + 1);
    this.x = teleport.link.x;
    this.y = teleport.link.y - 32;
    this.updatePosition();
    this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorGreen, 15, 1.5);
    this.engine.sound.play('ice-remove');
    this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveStand, false);
  }

  collisions() {
    if (this.engine.spriteTypeAt(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ObjectPlayer) === _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ObjectFire) {
      this.burn();
    }
  }

  move() {
    this.gravity();
    this.collisions();
    if (this.state !== _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveStand) {
      this.standCounter = 0;
    }
    if (this.state !== _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveDown) {
      this.fallCounter = 0;
    }
    switch (this.state) {
      case _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveRight:
        this.doRun();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveLeft:
        this.doRun();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveDown:
        this.doGravity();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveUp:
        this.doUp();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveTurn:
        this.doTurn();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveIceMake:
      case _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveIceRemove:
        this.doIce();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveIceFail:
        this.doFailIce();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveStand:
        this.doStand();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MovePush:
        this.doPush();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveRip:
        this.doRip();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveLevelExit:
        this.doOutro();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveTeleportOut:
        this.doTeleportIn();
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveLevelEnter:
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Resources: () => (/* binding */ Resources)
/* harmony export */ });
class Resources {
  constructor() {
    this.definitions = [];
    this.resources = {};
    this.loaded = 0;
    this.canvas = document.getElementById('canvas');
    if (canvas) {
      this.ctx = this.canvas.getContext('2d');
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
      this.ctx.fillStyle = '#fff';
      this.ctx.fillRect(50, 250, (this.loaded * 450) / this.definitions.length, 40);
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
      if (resource.type === 'audio') {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scene: () => (/* binding */ Scene)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _struct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./struct */ "./src/struct.js");
/* harmony import */ var _fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fire */ "./src/fire.js");
/* harmony import */ var _ice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ice */ "./src/ice.js");
/* harmony import */ var _jar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jar */ "./src/jar.js");
/* harmony import */ var _metal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metal */ "./src/metal.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _tilemap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tilemap */ "./src/tilemap.js");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./levels */ "./src/levels.js");
/* harmony import */ var _teleport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teleport */ "./src/teleport.js");











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
      let value = typeof sprite.length === 'undefined' ? 1 : sprite.length;
      value = sprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectJar ? sprite.onFire : value;
      let fl, fr;
      if (sprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectIce) {
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
    if (typeof _levels__WEBPACK_IMPORTED_MODULE_8__.levels[index] === 'undefined') {
      index = 0;
    }
    this.engine.level = index;
    const level = _levels__WEBPACK_IMPORTED_MODULE_8__.levels[index];
    this.engine.sprites = [];
    this.engine.map = new _tilemap__WEBPACK_IMPORTED_MODULE_7__.TileMap(this.engine, level.map, level.theme);
    const teleports = new Map();
    for (const sprite of level.sprites) {
      switch (sprite.id) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectPlayer:
          this.engine.player = new _player__WEBPACK_IMPORTED_MODULE_6__.Player(this.engine, sprite.x, sprite.y);
          this.engine.addSprite(this.engine.player);
          break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectIce:
          let frozen = new _struct__WEBPACK_IMPORTED_MODULE_1__.Frost(true, true);
          if (typeof sprite.fl !== 'undefined') {
            frozen.left = sprite.fl;
            frozen.right = sprite.fr;
          }
          this.engine.addSprite(new _ice__WEBPACK_IMPORTED_MODULE_3__.Ice(this.engine, sprite.x, sprite.y, parseInt(sprite.v), frozen));
          break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectMetal:
          this.engine.addSprite(new _metal__WEBPACK_IMPORTED_MODULE_5__.Metal(this.engine, sprite.x, sprite.y, 1));
          break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectFire:
          this.engine.addSprite(new _fire__WEBPACK_IMPORTED_MODULE_2__.Fire(this.engine, sprite.x, sprite.y));
          break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectJar:
          const jar = new _jar__WEBPACK_IMPORTED_MODULE_4__.Jar(this.engine, sprite.x, sprite.y);
          if (sprite.v == 1) {
            jar.turnOnFire();
          }
          this.engine.addSprite(jar);
          break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectTeleport:
          const teleport = new _teleport__WEBPACK_IMPORTED_MODULE_9__.Teleport(this.engine, sprite.x, sprite.y);
          this.engine.addSprite(teleport);
          teleport.linkId = sprite.link;
          teleports.set(sprite.ref, teleport);
          break;
      }
    }
    // link teleports
    if (teleports.size) {
      for (const teleport of teleports.values()) {
        const linked = teleports.get(teleport.linkId);
        if (linked) {
          teleport.link = linked;
        }
      }
    }
  }
}


/***/ }),

/***/ "./src/sfx.js":
/*!********************!*\
  !*** ./src/sfx.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sparks: () => (/* binding */ Sparks)
/* harmony export */ });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



class Particle {
  constructor(ctx, x, y, color, intensity) {
    this.color = typeof color === 'undefined' ? _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ColorWhite : color;
    this.r = 4;
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
    this.ctx.fillStyle = 'rgba(' + this.color + ',' + opacity + ')';
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

class Sparks extends _sprite__WEBPACK_IMPORTED_MODULE_0__.Sprite {
  constructor(engine, tx, ty, color, length, intensity) {
    super(null, engine, tx, ty, 32, 32);
    this.color = typeof color === 'undefined' ? '255,255,255' : color;
    this.length = typeof length === 'undefined' ? 10 : length;
    this.intensity = typeof intensity === 'undefined' ? 1 : intensity;
    this.particles = [];
    for (let i = 0; i < this.length; i++) {
      this.particles[i] = new Particle(
        this.engine.ctx,
        tx * _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.TileWidth + 16,
        ty * _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.TileWidth + 16,
        this.color,
        this.intensity,
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sound: () => (/* binding */ Sound)
/* harmony export */ });
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ "./src/engine.js");


class Sound {
  constructor(resources) {
    this.resources = resources;
    this.musicOn = true;
    this.soundOn = true;

    this.sfxVolume = 0.3;
    this.sfx = {
      'fire-off': resources.get('sfx-fire-off'),
      'ice-push': resources.get('sfx-ice-push'),
      fall: resources.get('sfx-fall'),
      falling: resources.get('sfx-falling'),
      'new-ice': resources.get('sfx-new-ice'),
      climb: resources.get('sfx-climb'),
      'ice-collision': resources.get('sfx-ice-collision'),
      'stage-enter': resources.get('sfx-stage-enter'),
      danger: resources.get('sfx-danger'),
      'ice-remove': resources.get('sfx-ice-remove'),
      'state-leave': resources.get('sfx-state-leave'),
      'ice-disabled': resources.get('sfx-disabled'),
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
    this.music = this.resources.get('sfx-music-sparks');
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sprite: () => (/* binding */ Sprite)
/* harmony export */ });
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
    this.corners = new _struct__WEBPACK_IMPORTED_MODULE_1__.Position();
    this.solid = true;
    this.moving = false;
    this.counter = false;
    this.speed = 4;
    this.state = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveStand;
    this.height = height;
    this.width = width;
    this.direction = 0;
    this.xTile = tx;
    this.yTile = ty;
    this.x = this.xTile * _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth;
    this.y = this.yTile * _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth;
  }
  /**
   * Sets sprite states
   * @param {number} state  Constant of the state
   * @param {boolean} moving True if sprite is moving
   */
  setState(state, moving) {
    this.moving = typeof moving === 'undefined' ? false : moving;
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
    this.xTile = Math.floor(this.x / _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth);
    this.yTile = Math.floor(this.y / _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Coor: () => (/* binding */ Coor),
/* harmony export */   Frost: () => (/* binding */ Frost),
/* harmony export */   Position: () => (/* binding */ Position)
/* harmony export */ });
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

/***/ "./src/teleport.js":
/*!*************************!*\
  !*** ./src/teleport.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Teleport: () => (/* binding */ Teleport)
/* harmony export */ });
/* harmony import */ var _animsprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animsprite */ "./src/animsprite.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



class Teleport extends _animsprite__WEBPACK_IMPORTED_MODULE_0__.AnimSprite {
  constructor(engine, tx, ty) {
    super(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.ObjectTeleport, engine, 'img_teleport', tx, ty, _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.TileWidth, _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.TileWidth, 0, 0, 0, 3, true);
    this.isSolid = true;
    this.animDelay = _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.AnimDefaultDelay * 2;
    this.onFire = false;
    this.animRow = 0;
  }

  move() {
    if (!this.moving) {
      this.collisions();
      this.gravity();
    }
    switch (this.state) {
      case _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.MoveDown:
        this.doDown();
        break;
    }
  }

  collisions() {}

  gravity() {
    if (!this.corners.d) {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.MoveDown, true);
      return true;
    }
    return false;
  }

  doDown() {
    this.counter += 4;
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.TileWidth) {
      this.y += 4;
    } else {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.MoveStand, false);
    }
  }

  draw() {
    super.draw();
    this.drawFrost();
  }
}


/***/ }),

/***/ "./src/tilemap.js":
/*!************************!*\
  !*** ./src/tilemap.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TileMap: () => (/* binding */ TileMap)
/* harmony export */ });
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
    this.tileWidth = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth;
    this.tileHeight = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth;
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
      return _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectOut;
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
        let tileType = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileBackground;
        if (this.map[j][i] === 1) {
          if (!this.getTile(i - 1, j) && !this.getTile(i + 1, j)) {
            tileType = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileBothSides;
          } else if (!this.getTile(i - 1, j)) {
            tileType = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileLeftSide;
          } else if (!this.getTile(i + 1, j)) {
            tileType = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileRightSide;
          } else {
            tileType = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileMiddle;
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
          this.tileHeight,
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tile: () => (/* binding */ Tile)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


const Tile = Object.freeze({
  tiles: {
    [_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectBackground]: {
      solid: false,
      freeze: false,
    },
    [_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectOut]: {
      solid: true,
      freeze: false,
    },
    [_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectPlayer]: {
      solid: true,
      freeze: false,
    },
    [_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectIce]: {
      solid: true,
      freeze: false,
    },
    [_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectMetal]: {
      solid: true,
      freeze: true,
    },
    [_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectWall]: {
      solid: true,
      freeze: true,
    },
    [_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectFire]: {
      solid: false,
      freeze: false,
    },
    [_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectJar]: {
      solid: true,
      freeze: true,
    },
    [_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectTeleport]: {
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

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/firenice.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _fire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fire */ "./src/fire.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _jar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jar */ "./src/jar.js");
/* harmony import */ var _metal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metal */ "./src/metal.js");
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources */ "./src/resources.js");
/* harmony import */ var _teleport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teleport */ "./src/teleport.js");








window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  function onStartClick() {
    loader.style.display = 'none';
    loader.style.opacity = 0;
    PreloadGame();
    window.firenice = true;
  }
  if (window.FIRENICE_EDITOR_MODE) {
    onStartClick();
  }
  loader.addEventListener('click', () => onStartClick());
});

function PreloadGame() {
  const resources = new _resources__WEBPACK_IMPORTED_MODULE_5__.Resources();
  resources.add('image', 'tilemap', 'images/tilemap.png');
  resources.add('image', 'img_ice', 'images/ice.png');
  resources.add('image', 'img_jar', 'images/jar.png');
  resources.add('image', 'img_fire', 'images/fire.png');
  resources.add('image', 'img_dona', 'images/dona.png');
  resources.add('image', 'img_intro', 'images/intro.png');
  resources.add('image', 'img_metal', 'images/metal.png');
  resources.add('image', 'img_teleport', 'images/teleport.png');
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

function loadLevelFromEvent(event) {
  let lvl = event.target.getAttribute('lvl');
  game.engine.level = parseInt(lvl, 10);
  game.engine.scene.load(game.engine.level);
}

function StartGame(resources) {
  let canvas = document.getElementById('canvas');
  let game = new _game__WEBPACK_IMPORTED_MODULE_2__.Game(canvas, resources);
  window.game = game;
  document.querySelectorAll('button.lvl').forEach(btn => {
    btn.addEventListener('click', loadLevelFromEvent);
  });
  let lvlSelector = document.getElementById('level-selector');
  lvlSelector.style.opacity = 1;
}

function CheckEditor() {
  if (window.FIRENICE_EDITOR_MODE) {
    game.engine.sound.musicOn = false;
    game.engine.sound.soundOn = false;
    game.state = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.GameStatePlay;
    game.engine.editor = true;
    game.engine.keyboard.intro = false;
    game.engine.sound.music.pause();

    canvas.addEventListener('click', e => {
      const xTile = Math.floor(e.offsetX / 32);
      const yTile = Math.floor(e.offsetY / 32);
      if (tool < 2) {
        game.engine.map.map[yTile][xTile] = tool;
      } else {
        switch (tool) {
          case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectPlayer:
            game.engine.player.x = xTile * 32;
            game.engine.player.y = yTile * 32;
            break;
          case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectIce:
            game.engine.addIceBlock(xTile, yTile);
            break;
          case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectMetal:
            game.engine.addSprite(new _metal__WEBPACK_IMPORTED_MODULE_4__.Metal(game.engine, xTile, yTile, 1));
            break;
          case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectFire:
            game.engine.addSprite(new _fire__WEBPACK_IMPORTED_MODULE_1__.Fire(game.engine, xTile, yTile));
            break;
          case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectJar:
            game.engine.addSprite(new _jar__WEBPACK_IMPORTED_MODULE_3__.Jar(game.engine, xTile, yTile));
            break;
          case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectTeleport:
            game.engine.addSprite(new _teleport__WEBPACK_IMPORTED_MODULE_6__.Teleport(game.engine, xTile, yTile));
            break;
        }
      }
    });

    document.getElementById('theme-selector').addEventListener('change', e => {
      game.engine.map.theme = parseInt(e.target.value, 10);
      e.target.blur();
    });

    document.getElementById('btn-save').addEventListener('click', () => {
      document.getElementById('txt-level').value = JSON.stringify(game.engine.scene.save());
    });
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZW5pY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNHO0FBQ3JDO0FBQ08seUJBQXlCLDJDQUFNO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4Q0FBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDhDQUFNO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDhDQUFNO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyw4Q0FBTTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzR087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFb0M7QUFDSjtBQUNMO0FBQ1U7QUFDTjtBQUNBO0FBQ0Q7QUFDL0I7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrQ0FBUTtBQUNoQyxxQkFBcUIseUNBQUs7QUFDMUIscUJBQXFCLHlDQUFLO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsUUFBUTtBQUNsRDtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qyx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUE4RCw4Q0FBTTtBQUNwRSwrREFBK0QsOENBQU07QUFDckU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0Msb0RBQW9ELDhDQUFNO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0MsaUNBQWlDLDhDQUFNO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFDQUFHO0FBQy9CLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFDQUFHLDJCQUEyQiwwQ0FBSztBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0EsK0JBQStCLDhDQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDLGlHQUFpRyw4Q0FBTTtBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsd0NBQU07QUFDN0I7O0FBRUE7QUFDQSxtREFBbUQsOENBQU07QUFDekQ7QUFDQSxhQUFhLDhDQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhDQUFNO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hPMEM7QUFDTDtBQUNOOztBQUV4QixtQkFBbUIsbURBQVU7QUFDcEM7QUFDQSxVQUFVLDhDQUFNLHlDQUF5Qyw4Q0FBTSxZQUFZLDhDQUFNO0FBQ2pGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOENBQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQsOENBQU0saUJBQWlCLDhDQUFNO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCw4Q0FBTSxpQkFBaUIsOENBQU07QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyx3Q0FBSSwrQ0FBK0MsOENBQU07QUFDbEUsb0JBQW9CLDhDQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsOENBQU07QUFDOUI7QUFDQSxNQUFNO0FBQ04sb0JBQW9CLDhDQUFNO0FBQzFCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEMEM7QUFDTDtBQUNIO0FBQ0E7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkNBQU07QUFDNUIsa0JBQWtCLDJDQUFNO0FBQ3hCLGlCQUFpQiw4Q0FBTTtBQUN2QjtBQUNBLCtDQUErQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLG1EQUFVO0FBQy9CLHFCQUFxQixtREFBVTtBQUMvQiwyQkFBMkIsOENBQU07QUFDakM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDcUM7QUFDSztBQUNYO0FBQ0U7QUFDakM7QUFDTyxrQkFBa0IsbURBQVU7QUFDbkM7QUFDQSxVQUFVLDhDQUFNLHVDQUF1Qyw4Q0FBTSxZQUFZLDhDQUFNO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHdCQUF3QiwwQ0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw4Q0FBTTtBQUNuRCxvQ0FBb0MsOENBQU07QUFDMUMsb0NBQW9DLDhDQUFNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsOENBQU07QUFDbkQsbUNBQW1DLDhDQUFNO0FBQ3pDLG1DQUFtQyw4Q0FBTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4Q0FBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFNO0FBQ3RCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBDQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBTSxZQUFZLHdDQUFJO0FBQ3RDO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQU0sYUFBYSx3Q0FBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsd0NBQUk7QUFDYjtBQUNBLG9CQUFvQiw4Q0FBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQSxxQ0FBcUMsOENBQU07QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhDQUFNO0FBQ2pCO0FBQ0E7QUFDQSxXQUFXLDhDQUFNO0FBQ2pCO0FBQ0E7QUFDQSxXQUFXLDhDQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOENBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUSw4Q0FBTTtBQUNkLFFBQVEsOENBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhDQUFNO0FBQ2xCLFFBQVEsOENBQU07QUFDZDtBQUNBO0FBQ0EsaUJBQWlCLDhDQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRLDhDQUFNO0FBQ2QsUUFBUSw4Q0FBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOENBQU07QUFDbEIsUUFBUSw4Q0FBTTtBQUNkO0FBQ0E7QUFDQSxpQkFBaUIsOENBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQSxjQUFjLDhDQUFNO0FBQ3BCLFVBQVUsOENBQU07QUFDaEI7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4Q0FBTTtBQUM5QjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOENBQU07QUFDOUI7QUFDQSxNQUFNO0FBQ047QUFDQSxzQkFBc0IsOENBQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOENBQU07QUFDMUIsTUFBTTtBQUNOLG9CQUFvQiw4Q0FBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0NBQUk7QUFDWjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUSx3Q0FBSTtBQUNaO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsd0NBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3Q0FBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UzBDO0FBQ0w7O0FBRTlCLGtCQUFrQixtREFBVTtBQUNuQztBQUNBLFVBQVUsOENBQU0sdUNBQXVDLDhDQUFNLFlBQVksOENBQU07QUFDL0UscUJBQXFCLDhDQUFNO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhDQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLDhDQUFNO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyw4Q0FBTTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUFNO0FBQzlCO0FBQ0EsTUFBTTtBQUNOLG9CQUFvQiw4Q0FBTTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDhDQUFNO0FBQzVEOztBQUVBO0FBQ0E7QUFDQSxzREFBc0QsOENBQU07QUFDNUQsc0RBQXNELDhDQUFNO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1Rk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLGdEQUFnRDtBQUN4RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLDZDQUE2QztBQUNyRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDJCQUEyQjtBQUNuQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLGlEQUFpRDtBQUN6RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLDZDQUE2QztBQUNyRCxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDZDQUE2QztBQUNyRCxRQUFRLDZDQUE2QztBQUNyRCxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDhCQUE4QjtBQUN0QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDZDQUE2QztBQUNyRCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDZCQUE2QjtBQUNyQyxRQUFRLDRCQUE0QjtBQUNwQyxRQUFRLDRCQUE0QjtBQUNwQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDZCQUE2QjtBQUNyQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDBCQUEwQjtBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDZCQUE2QjtBQUNyQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLCtDQUErQztBQUN2RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDZDQUE2QztBQUNyRCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDZDQUE2QztBQUNyRCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDZDQUE2QztBQUNyRCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDZDQUE2QztBQUNyRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhDQUFNO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsZUFBZSw4Q0FBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhDQUFNO0FBQ3JCO0FBQ0E7QUFDQSxlQUFlLDhDQUFNO0FBQ3JCLHNDQUFzQyx5Q0FBSztBQUMzQztBQUNBLGVBQWUsOENBQU07QUFDckIsc0NBQXNDLHVDQUFJO0FBQzFDO0FBQ0EsZUFBZSw4Q0FBTTtBQUNyQixzQ0FBc0MscUNBQUc7QUFDekM7QUFDQSxlQUFlLDhDQUFNO0FBQ3JCLHNDQUFzQywrQ0FBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9hbmltc3ByaXRlLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvZW5naW5lLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvZmlyZS5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9pY2UuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9qYXIuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL2xldmVscy5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL21ldGFsLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvcmVzb3VyY2VzLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9zZnguanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9zb3VuZC5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL3N0cnVjdC5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL3RlbGVwb3J0LmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvdGlsZW1hcC5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL3RpbGVzLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpcmUtbi1pY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL2ZpcmVuaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1TcHJpdGUgZXh0ZW5kcyBTcHJpdGUge1xyXG4gIC8qKlxyXG4gICAqIEFuaW1hdGVkIFNwcml0ZSwgaW5oZXJpdHMgZnJvbSBTcHJpdGUuXHJcbiAgICogQWRkcyBkcmF3aW5nIG9mIHBpY3R1cmVzIGluIHRoZSBib2R5IG9mIHNwcml0ZVxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgICAgRW5naW5lIEVuZ2luZVxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBpbWFnZSAgIERvbSBpbWFnZSBvYmplY3QgKGltZyBzcmM9KVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eCAgICAgIFRpbGUgWCBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eSAgICAgIFRpbGUgWSBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAgIFdpZHRoIG9mIHRoZSBzcHJpdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0ICBIZWlnaHQgb2YgdGhlIHNwcml0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRYIE9mZnNldCBYIG9mIGRyYXdpbmcgdGhlIHBpY3R1cmUgaW50byB0aGUgY2FudmFzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFkgT2Zmc2V0IFkgb2YgZHJhd2luZyB0aGUgcGljdHVyZSBpbnRvIHRoZSBjYW52YXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgICBBbmltYXRpb24gZnJhbWUgc3RhcnRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZW5kICAgICBBbmltYXRpb24gZnJhbWUgZW5kXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBsb29wICAgUmVwZWF0IGFuaW1hdGlvblxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGlkLCBlbmdpbmUsIGltYWdlLCB0eCwgdHksIHdpZHRoLCBoZWlnaHQsIG9mZnNldFgsIG9mZnNldFksIHN0YXJ0LCBlbmQsIGxvb3ApIHtcclxuICAgIHN1cGVyKGlkLCBlbmdpbmUsIHR4LCB0eSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLmltYWdlID0gdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldChpbWFnZSk7XHJcbiAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgIHRoaXMuYW5pbVN0YXJ0ID0gc3RhcnQ7XHJcbiAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICB0aGlzLmFuaW1Db3VudCA9IDA7XHJcbiAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5O1xyXG4gICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICB0aGlzLmFuaW1Sb3cgPSAwO1xyXG4gICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WDtcclxuICAgIHRoaXMub2Zmc2V0WSA9IG9mZnNldFk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBzcHJpdGUgYW5pbWF0aW9uIGZyYW1lc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBTdGFydCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCAgIEVuZCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBsb29wICBJZiB0cnVlLCBhbmltYXRpb24gd2lsbCBsb29wXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAgIFJvdyBvZiB0aGUgZnJhbWVzIGluIHRoZSBzcHJpdGUgaW1hZ2VcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgRGVsYXkgYmV0d2VlbiBlYWNoIGZyYW1lXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlICBTZXRzIGFsbCB0aGUgbmV3IHZhbHVlcyBvbmx5IG9uZSB0aW1lLlxyXG4gICAqL1xyXG4gIHNldEFuaW0oc3RhcnQsIGVuZCwgbG9vcCwgcm93LCBkZWxheSwgb25jZSkge1xyXG4gICAgb25jZSA9IHR5cGVvZiBvbmNlID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogb25jZTtcclxuICAgIGRlbGF5ID0gdHlwZW9mIGRlbGF5ID09PSAndW5kZWZpbmVkJyA/IENvbnN0cy5BbmltRGVmYXVsdERlbGF5IDogZGVsYXk7XHJcbiAgICByb3cgPSB0eXBlb2Ygcm93ID09PSAndW5kZWZpbmVkJyA/IHRoaXMuYW5pbVJvdyA6IHJvdztcclxuICAgIGlmICghb25jZSkge1xyXG4gICAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICAgIHRoaXMuYW5pbUNvdW50ID0gc3RhcnQ7XHJcbiAgICAgIHRoaXMuYW5pbUxvb3AgPSBsb29wO1xyXG4gICAgICB0aGlzLmFuaW1EZWxheSA9IGRlbGF5O1xyXG4gICAgICB0aGlzLmFuaW1Sb3cgPSByb3c7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5hbmltU3RhcnQgIT09IHN0YXJ0IHx8IHRoaXMuYW5pbUVuZCAhPT0gZW5kIHx8IHRoaXMuYW5pbUxvb3AgIT09IGxvb3AgfHwgdGhpcy5hbmltUm93ICE9PSByb3cpIHtcclxuICAgICAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuYW5pbUVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuYW5pbUxvb3AgPSBsb29wO1xyXG4gICAgICAgIHRoaXMuYW5pbURlbGF5ID0gZGVsYXk7XHJcbiAgICAgICAgdGhpcy5hbmltUm93ID0gcm93O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIERyYXdzIHRoZSBmcmFtZSBvZiB0aGUgc3ByaXRlIGluIHRoZSBjYW52YXNcclxuICAgKi9cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLmltYWdlLFxyXG4gICAgICB0aGlzLmFuaW1Db3VudCAqIHRoaXMud2lkdGgsXHJcbiAgICAgIHRoaXMuYW5pbVJvdyAqIHRoaXMuaGVpZ2h0LFxyXG4gICAgICB0aGlzLndpZHRoLFxyXG4gICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgdGhpcy54ICsgdGhpcy5vZmZzZXRYLFxyXG4gICAgICB0aGlzLnkgKyB0aGlzLm9mZnNldFksXHJcbiAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5hbmltRGVsYXlDb3VudCsrID4gdGhpcy5hbmltRGVsYXkpIHtcclxuICAgICAgdGhpcy5hbmltQ291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMuYW5pbUNvdW50ID4gdGhpcy5hbmltRW5kKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbUxvb3ApIHtcclxuICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gdGhpcy5hbmltU3RhcnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gdGhpcy5hbmltRW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFuaW1EZWxheUNvdW50ID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdGcm9zdCgpIHtcclxuICAgIGNvbnN0IGxlZnRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlIC0gMSwgdGhpcy55VGlsZSk7XHJcbiAgICBpZiAobGVmdFNwcml0ZSAmJiBsZWZ0U3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmIGxlZnRTcHJpdGUuZnJvemVuLnJpZ2h0KSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLCB0aGlzLnhUaWxlICogdGhpcy53aWR0aCAtIDcsIHRoaXMueVRpbGUgKiB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByaWdodFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueFRpbGUgKyAxLCB0aGlzLnlUaWxlKTtcclxuICAgIGlmIChyaWdodFNwcml0ZSAmJiByaWdodFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJiByaWdodFNwcml0ZS5mcm96ZW4ubGVmdCkge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcclxuICAgICAgICAodGhpcy54VGlsZSArIHRoaXMubGVuZ3RoKSAqIHRoaXMud2lkdGggLSA3LFxyXG4gICAgICAgIHRoaXMueVRpbGUgKiB0aGlzLmhlaWdodCxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IENvbnN0cyA9IE9iamVjdC5mcmVlemUoe1xuICBUaWxlV2lkdGg6IDMyLFxuICBNb3ZlU3RhbmQ6IDAsXG4gIE1vdmVMZWZ0OiAxLFxuICBNb3ZlUmlnaHQ6IDIsXG4gIE1vdmVEb3duOiAzLFxuICBNb3ZlVXA6IDQsXG4gIE1vdmVUdXJuOiA1LFxuICBNb3ZlSWNlTWFrZTogNixcbiAgTW92ZUljZVJlbW92ZTogNyxcbiAgTW92ZUljZU1vdmluZzogOCxcbiAgTW92ZUljZUNoZWNrOiA5LFxuICBNb3ZlUmlwOiAxMCxcbiAgTW92ZVB1c2g6IDgsXG4gIE1vdmVJY2VGYWlsOiAxMSxcbiAgTW92ZUxldmVsRXhpdDogMTIsXG4gIE1vdmVMZXZlbEVudGVyOiAxMyxcbiAgTW92ZVRlbGVwb3J0T3V0OiAxNCxcbiAgTW92ZVRlbGVwb3J0SW46IDE1LFxuICBEaXJMZWZ0OiAtMSxcbiAgRGlyUmlnaHQ6IDEsXG4gIEFuaW1EZWZhdWx0RGVsYXk6IDIsXG4gIEFuaW1GcmFtZUNvdW50OiAxNixcbiAgQW5pbUxlZnRSb3c6IDEsXG4gIEFuaW1SaWdodFJvdzogMCxcbiAgQW5pbVJ1blN0YXJ0OiAwLFxuICBBbmltUnVuRW5kOiAzLFxuICBBbmltU3RhbmQ6IDQsXG4gIEFuaW1UdXJuU3RhcnQ6IDQsXG4gIEFuaW1UdXJuRW5kOiA3LFxuICBBbmltRmFsbFN0YXJ0OiA4LFxuICBBbmltRmFsbEVuZDogOSxcbiAgQW5pbUJpZ0ZhbGxTdGFydDogMTAsXG4gIEFuaW1CaWdGYWxsRW5kOiAxMSxcbiAgQW5pbVB1c2hTdGFydDogMTIsXG4gIEFuaW1QdXNoRW5kOiAxMyxcbiAgQW5pbUp1bXBTdGFydDogMTQsXG4gIEFuaW1KdW1wRW5kOiAxNSxcbiAgQW5pbVN0YW5kU3RhcnQ6IDE2LFxuICBBbmltU3RhbmRFbmQ6IDE3LFxuICBBbmltSWNlU3RhcnQ6IDE4LFxuICBBbmltSWNlRW5kOiAxOSxcbiAgQW5pbUNyb3VjaFN0YXJ0OiAyMCxcbiAgQW5pbUNyb3VjaEVuZDogMjIsXG4gIEFuaW1SaXBTdGFydDogMjMsXG4gIEFuaW1SaXBFbmQ6IDI0LFxuICBBbmltU2xlZXBTdGFydDogMjUsXG4gIEFuaW1TbGVlcEVuZDogMjYsXG4gIFRpbGVCYWNrZ3JvdW5kOiAwLFxuICBUaWxlQm90aFNpZGVzOiAzMixcbiAgVGlsZUxlZnRTaWRlOiA2NCxcbiAgVGlsZU1pZGRsZTogOTYsXG4gIFRpbGVSaWdodFNpZGU6IDEyOCxcbiAgT2JqZWN0T3V0OiAtMSxcbiAgT2JqZWN0QmFja2dyb3VuZDogMCxcbiAgT2JqZWN0V2FsbDogMSxcbiAgT2JqZWN0SWNlOiAzLFxuICBPYmplY3RNZXRhbDogNCxcbiAgT2JqZWN0SmFyOiA1LFxuICBPYmplY3RGaXJlOiA2LFxuICBPYmplY3RQbGF5ZXI6IDcsXG4gIE9iamVjdFRlbGVwb3J0OiA4LFxuICBHYW1lU3RhdGVQbGF5OiAxLFxuICBHYW1lU3RhdGVJbnRybzogMixcbiAgQ29sb3JHcmVlbjogJzEyNCwgMjM4LCA2NicsXG4gIENvbG9yQmx1ZTogJzEyMiwgMjExLCAyNTUnLFxuICBDb2xvck9yYW5nZTogJzI1NSwgODgsIDMzJyxcbiAgQ29sb3JSZWQ6ICcyNTUsIDEzNSwgMTI0JyxcbiAgQ29sb3JXaGl0ZTogJzI1NSwgMjU1LCAyNTUnLFxufSk7XG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBGcm9zdCB9IGZyb20gJy4vc3RydWN0JztcbmltcG9ydCB7IEljZSB9IGZyb20gJy4vaWNlJztcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9rZXlib2FyZCc7XG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xuaW1wb3J0IHsgU291bmQgfSBmcm9tICcuL3NvdW5kJztcbmltcG9ydCB7IFNwYXJrcyB9IGZyb20gJy4vc2Z4Jztcbi8qKlxuICogRW5naW5lIExvb3BcbiAqL1xuZXhwb3J0IGNsYXNzIEVuZ2luZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgcmVzb3VyY2VzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jd2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgdGhpcy5jaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICB0aGlzLnJlc291cmNlcyA9IHJlc291cmNlcztcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5zcHJpdGVzID0gW107XG4gICAgdGhpcy5zZnhzID0gW107XG4gICAgdGhpcy5wbGF5ZXIgPSB7fTtcbiAgICB0aGlzLmxldmVsID0gMDtcbiAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKCk7XG4gICAgdGhpcy5zb3VuZCA9IG5ldyBTb3VuZChyZXNvdXJjZXMpO1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgU2NlbmUodGhpcyk7XG4gICAgdGhpcy5lZGl0b3IgPSBmYWxzZTtcbiAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID0gMDtcbiAgICBjb25zdCBsZXZlbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsZXZlbCcpO1xuICAgIGlmIChsZXZlbCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5sZXZlbCA9IHBhcnNlSW50KGxldmVsLCAxMCk7XG4gICAgfVxuICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY3dpZHRoLCB0aGlzLmNoZWlnaHQpO1xuICAgIHRoaXMubWFwLmRyYXcoKTtcbiAgICAvLyByZXZlcnNlIGxvb3AsIHBsYXllciBkcmF3cyBsYXN0XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuc3ByaXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdGhpcy5zcHJpdGVzW2ldLmRyYXcoKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNmeHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHRoaXMuc2Z4c1tpXS5kcmF3KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlV2lkdGggPSAxO1xuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY3dpZHRoOyB4ICs9IDMyKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5jaGVpZ2h0OyB5ICs9IDMyKSB7XG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlUmVjdCh4LCB5LCB4ICsgMzIsIHkgKyAzMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbGxpc2lvbigpIHtcbiAgICBjb25zdCBmaXJlcyA9IHRoaXMuc3ByaXRlcy5maWx0ZXIoc3ByaXRlID0+IHNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEZpcmUpO1xuICAgIGlmICghZmlyZXMubGVuZ3RoICYmICF0aGlzLmVkaXRvciAmJiB0aGlzLnBsYXllci5zdGF0ZSAhPT0gQ29uc3RzLk1vdmVMZXZlbEV4aXQpIHtcbiAgICAgIHRoaXMucGxheWVyLm91dHJvKCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dExldmVsKCkge1xuICAgIHRoaXMubGV2ZWwrKztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGV2ZWwnLCB0aGlzLmxldmVsKTtcbiAgICB0aGlzLnNjZW5lLmxvYWQodGhpcy5sZXZlbCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICB0aGlzLnNwcml0ZXNbaV0uZW5naW5lTW92ZSgpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Z4cy5sZW5ndGg7ICsraSkge1xuICAgICAgdGhpcy5zZnhzW2ldLmVuZ2luZU1vdmUoKTtcbiAgICB9XG4gICAgbGV0IHNwcml0ZXNNb3ZpbmcgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXSAmJiB0aGlzLnNwcml0ZXNbaV0uaWQgIT09IENvbnN0cy5PYmplY3RQbGF5ZXIgJiYgdGhpcy5zcHJpdGVzW2ldLm1vdmluZykge1xuICAgICAgICBzcHJpdGVzTW92aW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFzcHJpdGVzTW92aW5nKSB7XG4gICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xuICAgIH1cbiAgICAvLyBjaGVjayBpZiBubyBzcHJpdGVzIGhhdmUgbW92ZWQgZm9yIDIgdHVybnNcbiAgICBpZiAoIXNwcml0ZXNNb3ZpbmcgJiYgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA+IDEpIHtcbiAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xuICAgICAgdGhpcy5pbnB1dCgpO1xuICAgIH1cbiAgICB0aGlzLmNvbGxpc2lvbigpO1xuICB9XG5cbiAgaW5wdXQoKSB7XG4gICAgaWYgKHRoaXMua2V5Ym9hcmQuZG93biB8fCB0aGlzLmtleWJvYXJkLmFjdGlvbikge1xuICAgICAgdGhpcy5wbGF5ZXIuaWNlT3JUZWxlcG9ydCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5rZXlib2FyZC5sZWZ0KSB7XG4gICAgICB0aGlzLnBsYXllci5sZWZ0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmtleWJvYXJkLnJpZ2h0KSB7XG4gICAgICB0aGlzLnBsYXllci5yaWdodCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5rZXlib2FyZC5lbnRlcikge1xuICAgICAgdGhpcy5zb3VuZC5zdG9wKCdkYW5nZXInKTtcbiAgICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcbiAgICAgIHRoaXMua2V5Ym9hcmQuZW50ZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpY2VBdCh0eCwgdHkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pc1Nwcml0ZUF0KHR4LCB0eSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYWRkSWNlQmxvY2sodHgsIHR5KSB7XG4gICAgbGV0IGZvdW5kSWNlQmxvY2tzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiYgdGhpcy5zcHJpdGVzW2ldLnlUaWxlID09PSB0eSkge1xuICAgICAgICBsZXQgaWNlID0gdGhpcy5zcHJpdGVzW2ldO1xuICAgICAgICBpZiAoaWNlLnhUaWxlIC0gMSA9PT0gdHggfHwgaWNlLnhUaWxlICsgaWNlLmxlbmd0aCA9PT0gdHgpIHtcbiAgICAgICAgICBmb3VuZEljZUJsb2Nrcy5wdXNoKGljZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvdW5kSWNlQmxvY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zcHJpdGVzLnB1c2gobmV3IEljZSh0aGlzLCB0eCwgdHksIDEpKTtcbiAgICB9IGVsc2UgaWYgKGZvdW5kSWNlQmxvY2tzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZm91bmRJY2VCbG9ja3NbMF0uYWRkQmxvY2sodHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZm91bmRJY2VCbG9ja3NbMF0ueFRpbGUgPD0gZm91bmRJY2VCbG9ja3NbMV0ueFRpbGUpIHtcbiAgICAgICAgdGhpcy5qb2luSWNlQmxvY2tzKGZvdW5kSWNlQmxvY2tzWzBdLCBmb3VuZEljZUJsb2Nrc1sxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmpvaW5JY2VCbG9ja3MoZm91bmRJY2VCbG9ja3NbMV0sIGZvdW5kSWNlQmxvY2tzWzBdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBqb2luSWNlQmxvY2tzKGljZWJsb2NrQSwgaWNlYmxvY2tCKSB7XG4gICAgbGV0IHR4ID0gaWNlYmxvY2tBLnhUaWxlO1xuICAgIGxldCB0eSA9IGljZWJsb2NrQS55VGlsZTtcbiAgICBsZXQgbGVuZ3RoID0gaWNlYmxvY2tBLmxlbmd0aCArIGljZWJsb2NrQi5sZW5ndGggKyAxO1xuICAgIHRoaXMuYWRkU3ByaXRlKG5ldyBJY2UodGhpcywgdHgsIHR5LCBsZW5ndGgsIG5ldyBGcm9zdChpY2VibG9ja0EuZnJvemVuLmxlZnQsIGljZWJsb2NrQi5mcm96ZW4ucmlnaHQpKSk7XG4gICAgdGhpcy5yZW1vdmVTcHJpdGUoaWNlYmxvY2tBKTtcbiAgICB0aGlzLnJlbW92ZVNwcml0ZShpY2VibG9ja0IpO1xuICB9XG5cbiAgcmVtb3ZlSWNlQmxvY2sodHgsIHR5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zcHJpdGVzW2ldLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmXG4gICAgICAgIHRoaXMuc3ByaXRlc1tpXS55VGlsZSA9PT0gdHkgJiZcbiAgICAgICAgdHggPj0gdGhpcy5zcHJpdGVzW2ldLnhUaWxlICYmXG4gICAgICAgIHR4IDwgdGhpcy5zcHJpdGVzW2ldLnhUaWxlICsgdGhpcy5zcHJpdGVzW2ldLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0ucmVtb3ZlQmxvY2sodHgpIDw9IDApIHtcbiAgICAgICAgICB0aGlzLnNwcml0ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVGaXJlKHR4LCB0eSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLnlUaWxlID09PSB0eSAmJiB0eCA9PT0gdGhpcy5zcHJpdGVzW2ldLnhUaWxlICYmIHRoaXMuc3ByaXRlc1tpXS5pZCA9PT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcbiAgICAgICAgdGhpcy5zcHJpdGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZFNwcml0ZShzcHJpdGUpIHtcbiAgICB0aGlzLnNwcml0ZXMucHVzaChzcHJpdGUpO1xuICB9XG5cbiAgcmVtb3ZlU3ByaXRlKHNwcml0ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zcHJpdGVzW2ldID09PSBzcHJpdGUpIHtcbiAgICAgICAgdGhpcy5zcHJpdGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFkZFNwYXJrcyh4VGlsZSwgeVRpbGUsIGNvbG9yLCBxdWFudGl0eSwgaW50ZW5zaXR5KSB7XG4gICAgdGhpcy5zZnhzLnB1c2gobmV3IFNwYXJrcyh0aGlzLCB4VGlsZSwgeVRpbGUsIGNvbG9yLCBxdWFudGl0eSwgaW50ZW5zaXR5KSk7XG4gIH1cblxuICBzcHJpdGVUeXBlQXQodHgsIHR5LCBleGNsdWRlSWQpIHtcbiAgICBleGNsdWRlSWQgPSB0eXBlb2YgZXhjbHVkZUlkID09PSAndW5kZWZpbmVkJyA/IENvbnN0cy5PYmplY3RPdXQgOiBleGNsdWRlSWQ7XG4gICAgaWYgKHR4IDwgMCB8fCB0eSA8IDAgfHwgdHggPiB0aGlzLm1hcC53aWR0aCB8fCB0eSA+IHRoaXMubWFwLmhlaWdodCkge1xuICAgICAgcmV0dXJuIENvbnN0cy5PYmplY3RPdXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLm1hcC5tYXBbdHldW3R4XSkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLm1hcFt0eV1bdHhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlzU3ByaXRlQXQodHgsIHR5KSAmJiB0aGlzLnNwcml0ZXNbaV0uaWQgIT09IGV4Y2x1ZGVJZCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbaV0uaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIENvbnN0cy5PYmplY3RCYWNrZ3JvdW5kO1xuICB9XG5cbiAgc3ByaXRlQXQodHgsIHR5KSB7XG4gICAgaWYgKCF0aGlzLm1hcC5tYXBbdHldW3R4XSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pc1Nwcml0ZUF0KHR4LCB0eSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGVzJztcblxuZXhwb3J0IGNsYXNzIEZpcmUgZXh0ZW5kcyBBbmltU3ByaXRlIHtcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcbiAgICBzdXBlcihDb25zdHMuT2JqZWN0RmlyZSwgZW5naW5lLCAnaW1nX2ZpcmUnLCB0eCwgdHksIENvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgsIDAsIDAsIDAsIDMsIHRydWUpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XG4gICAgICB0aGlzLmNvbGxpc2lvbnMoKTtcbiAgICAgIHRoaXMuZ3Jhdml0eSgpO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxuICAgICAgICB0aGlzLmRvRG93bigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb2xsaXNpb25zKCkge1xuICAgIGlmICh0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLk9iamVjdEZpcmUpID09PSBDb25zdHMuT2JqZWN0SWNlKSB7XG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xuICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlRmlyZSh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlKTtcbiAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUljZUJsb2NrKHRoaXMueFRpbGUsIHRoaXMueVRpbGUpO1xuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsICcyNTUsIDEyNiwgMTk4JywgMTUsIDAuNSk7XG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgJzEyNCwgMjEyLCAyNTUnLCAxMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLk9iamVjdEZpcmUpID09PSBDb25zdHMuT2JqZWN0TWV0YWwpIHtcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ZpcmUtb2ZmJyk7XG4gICAgICB0aGlzLmVuZ2luZS5yZW1vdmVGaXJlKHRoaXMueFRpbGUsIHRoaXMueVRpbGUpO1xuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsICcyNTUsIDIyMiwgMTI3JywgMTUsIDAuNSk7XG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgJzQxLCA0MiwgOTAnLCAxMCk7XG4gICAgfVxuICB9XG5cbiAgZ3Jhdml0eSgpIHtcbiAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiYgdGhpcy5jb3JuZXJzLmQgIT09IENvbnN0cy5PYmplY3RGaXJlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZG9Eb3duKCkge1xuICAgIHRoaXMuY291bnRlciArPSA0O1xuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xuICAgICAgdGhpcy55ICs9IDQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tICcuL2VuZ2luZSc7XG5pbXBvcnQgeyBsZXZlbHMgfSBmcm9tICcuL2xldmVscyc7XG5cbi8qKlxuICogR2FtZSBMb29wXG4gKi9cblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAvKipcbiAgICogQHBhcmFtIHsqfSBjYW52YXMgICBUaGUgY2FudmFzIGVsZW1lbnRcbiAgICogQHBhcmFtIHsqfSByZXNvdXJjZXMgIEdhbWUgcmVzb3VyY2VzXG4gICAqL1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIHJlc291cmNlcykge1xuICAgIHRoaXMudGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMuZW5naW5lID0gbmV3IEVuZ2luZShjYW52YXMsIHJlc291cmNlcyk7XG4gICAgdGhpcy5sZXZlbHMgPSBsZXZlbHM7XG4gICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVQbGF5O1xuICAgIHRoaXMuZW5naW5lLnNvdW5kLnNvdW5kdHJhY2soKTtcbiAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcF8uYmluZCh0aGlzKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5nYW1lTG9vcCgpLCAxMDAwIC8gNjApO1xuICB9XG5cbiAgZ2FtZUxvb3BfKCkge1xuICAgIHRoaXMuZW5naW5lLmRyYXcoKTtcbiAgICB0aGlzLmVuZ2luZS5tb3ZlKCk7XG4gIH1cblxuICBjcmVhdGVJbnRybygpIHtcbiAgICB0aGlzLmludHJvID0gbmV3IEFuaW1TcHJpdGUobnVsbCwgdGhpcy5lbmdpbmUsICdpbWdfaW50cm8nLCAwLCAwLCA1NDQsIDQxNiwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgIHRoaXMuc3RhcnQgPSBuZXcgQW5pbVNwcml0ZShudWxsLCB0aGlzLmVuZ2luZSwgJ2ltZ19zdGFydCcsIDcsIDExLCAxNDAsIDI2LCAtMTAsIDAsIDAsIDEsIHRydWUpO1xuICAgIHRoaXMuc3RhcnQuYW5pbURlbGF5ID0gQ29uc3RzLkFuaW1EZWZhdWx0RGVsYXkgKiAyMDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xyXG5pbXBvcnQgeyBGcm9zdCB9IGZyb20gJy4vc3RydWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBJY2UgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSwgbGVuZ3RoLCBmcm96ZW4pIHtcclxuICAgIHN1cGVyKENvbnN0cy5PYmplY3RJY2UsIGVuZ2luZSwgJ2ltZ19pY2UnLCB0eCwgdHksIENvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgsIDAsIDAsIDAsIDEsIHRydWUpO1xyXG4gICAgdGhpcy54VGlsZSA9IHR4O1xyXG4gICAgdGhpcy55VGlsZSA9IHR5O1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmFuaW1FbmQgPSAxO1xyXG4gICAgdGhpcy5hbmltRGVsYXkgPSA5O1xyXG4gICAgdGhpcy5hbmltUm93ID0gMDtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcclxuICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG4gICAgaWYgKHR5cGVvZiBmcm96ZW4gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuZnJvemVuID0gZnJvemVuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mcm96ZW4gPSBuZXcgRnJvc3QoZmFsc2UsIGZhbHNlKTtcclxuICAgICAgdGhpcy51cGRhdGVDb3JuZXJzKCk7XHJcbiAgICAgIHRoaXMuY2hlY2tGcmVlemUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEJsb2NrKHR4KSB7XHJcbiAgICBjb25zdCBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID0gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHR4IC0gMSwgdGhpcy55VGlsZSk7XHJcbiAgICBjb25zdCBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlICsgdGhpcy5sZW5ndGggKyAxLCB0aGlzLnlUaWxlKTtcclxuICAgIGlmICh0eCA+IHRoaXMueFRpbGUpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuZ2V0VGlsZSh0eCArIDEsIHRoaXMueVRpbGUpID09PSBDb25zdHMuT2JqZWN0V2FsbCB8fFxyXG4gICAgICAgIHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID09PSBDb25zdHMuT2JqZWN0TWV0YWwgfHxcclxuICAgICAgICBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9iamVjdEphclxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmZyb3plbi5yaWdodCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodHggPCB0aGlzLnhUaWxlKSB7XHJcbiAgICAgIHRoaXMueFRpbGUgPSB0eDtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuZ2V0VGlsZSh0eCAtIDEsIHRoaXMueVRpbGUpID09PSBDb25zdHMuT2JqZWN0V2FsbCB8fFxyXG4gICAgICAgIHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPT09IENvbnN0cy5PYmplY3RNZXRhbCB8fFxyXG4gICAgICAgIHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPT09IENvbnN0cy5PYmplY3RKYXJcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5mcm96ZW4ubGVmdCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMueCA9IHRoaXMueFRpbGUgKiBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgdGhpcy5sZW5ndGggKz0gMTtcclxuICB9XHJcblxyXG4gIGlzU3ByaXRlQXQodHgsIHR5KSB7XHJcbiAgICBpZiAodGhpcy55VGlsZSA9PT0gdHkpIHtcclxuICAgICAgaWYgKHR4ID49IHRoaXMueFRpbGUgJiYgdHggPCB0aGlzLnhUaWxlICsgdGhpcy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUJsb2NrKHR4KSB7XHJcbiAgICBpZiAodHggPT09IHRoaXMueFRpbGUpIHtcclxuICAgICAgdGhpcy54VGlsZSArPSAxO1xyXG4gICAgICB0aGlzLnggKz0gQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgICAgdGhpcy5sZW5ndGggLT0gMTtcclxuICAgICAgdGhpcy5jaGVja1VuZnJlZXplTGVmdCgpO1xyXG4gICAgfSBlbHNlIGlmICh0eCA9PT0gdGhpcy54VGlsZSArIHRoaXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICB0aGlzLmxlbmd0aCAtPSAxO1xyXG4gICAgICB0aGlzLmNoZWNrVW5mcmVlemVSaWdodCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKFxyXG4gICAgICAgIG5ldyBJY2UoXHJcbiAgICAgICAgICB0aGlzLmVuZ2luZSxcclxuICAgICAgICAgIHR4ICsgMSxcclxuICAgICAgICAgIHRoaXMueVRpbGUsXHJcbiAgICAgICAgICB0aGlzLnhUaWxlICsgdGhpcy5sZW5ndGggLSB0eCAtIDEsXHJcbiAgICAgICAgICBuZXcgRnJvc3QoZmFsc2UsIHRoaXMuZnJvemVuLnJpZ2h0KSxcclxuICAgICAgICApLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmxlbmd0aCA9IHR4IC0gdGhpcy54VGlsZTtcclxuICAgICAgdGhpcy5jaGVja1VuZnJlZXplUmlnaHQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGNhbkdsaWRlKGRpcikge1xyXG4gICAgaWYgKHRoaXMubGVuZ3RoICE9PSAxIHx8IHRoaXMuZnJvemVuLmxlZnQgfHwgdGhpcy5mcm96ZW4ucmlnaHQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpciA9PT0gQ29uc3RzLkRpckxlZnQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5sKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlyID09PSBDb25zdHMuRGlyUmlnaHQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5yKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlzRnJvemVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZnJvemVuLmxlZnQgfHwgdGhpcy5mcm96ZW4ucmlnaHQ7XHJcbiAgfVxyXG5cclxuICBncmF2aXR5KCkge1xyXG4gICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmICF0aGlzLmlzRnJvemVuKCkpIHtcclxuICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZhbGxpbmcpIHtcclxuICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbGxpc2lvbigpIHtcclxuICAgIGlmICghdGhpcy5jYW5HbGlkZSh0aGlzLmRpcmVjdGlvbikpIHtcclxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtY29sbGlzaW9uJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbW92ZSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdGlsZV9kb3duID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIGksIHRoaXMueVRpbGUgKyAxKTtcclxuICAgICAgaWYgKHRpbGVfZG93biAmJiB0aWxlX2Rvd24gIT09IENvbnN0cy5PYmplY3RGaXJlKSB7XHJcbiAgICAgICAgdGhpcy5jb3JuZXJzLmQgPSB0aWxlX2Rvd247XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY29ybmVycy5yID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIHRoaXMubGVuZ3RoLCB0aGlzLnlUaWxlKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0Zyb3plbigpKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZUxlZnQoKTtcclxuICAgICAgdGhpcy5jaGVja1VuZnJlZXplUmlnaHQoKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUljZU1vdmluZzpcclxuICAgICAgICB0aGlzLmdsaWRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VDaGVjazpcclxuICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZURvd246XHJcbiAgICAgICAgdGhpcy5kb0Rvd24oKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICBpZiAodGhpcy5hbmltRGVsYXlDb3VudCsrID4gdGhpcy5hbmltRGVsYXkpIHtcclxuICAgICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICAgIHRoaXMuYW5pbVJvdyA9IHRoaXMuYW5pbVJvdyA9PT0gMCA/IDEgOiAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXMueCxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgICBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgdGhpcy54LFxyXG4gICAgICAgIHRoaXMueSxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICAzICogQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgICBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgdGhpcy54ICsgQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXMueCxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgMyAqIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXMueCArIENvbnN0cy5UaWxlV2lkdGggKiAodGhpcy5sZW5ndGggLSAxKSxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgICAyICogQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgICAgIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICB0aGlzLnggKyBDb25zdHMuVGlsZVdpZHRoICogaSxcclxuICAgICAgICAgIHRoaXMueSxcclxuICAgICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mcm96ZW4ubGVmdCkge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSwgdGhpcy54VGlsZSAqIHRoaXMud2lkdGggLSA3LCB0aGlzLnlUaWxlICogdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZnJvemVuLnJpZ2h0KSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLFxyXG4gICAgICAgICh0aGlzLnhUaWxlICsgdGhpcy5sZW5ndGgpICogdGhpcy53aWR0aCAtIDcsXHJcbiAgICAgICAgdGhpcy55VGlsZSAqIHRoaXMuaGVpZ2h0LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIGdsaWRlKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcclxuICAgICAgdGhpcy54ICs9IDQgKiB0aGlzLmRpcmVjdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9Eb3duKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcclxuICAgICAgdGhpcy55ICs9IDQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMuZ3Jhdml0eSgpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1c2goZGlyKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHR5cGVvZiBkaXIgPT09ICd1bmRlZmluZWQnID8gdGhpcy5kaXJlY3Rpb24gOiBkaXI7XHJcbiAgICBpZiAoIXRoaXMuY29sbGlzaW9uKCkgJiYgIXRoaXMuZ3Jhdml0eSgpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VNb3ZpbmcsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0ZyZWV6ZSgpIHtcclxuICAgIGlmIChUaWxlLmlzRnJlZXphYmxlKHRoaXMuY29ybmVycy5sKSkge1xyXG4gICAgICB0aGlzLmZyb3plbi5sZWZ0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJvemVuLmxlZnQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChUaWxlLmlzRnJlZXphYmxlKHRoaXMuY29ybmVycy5yKSkge1xyXG4gICAgICB0aGlzLmZyb3plbi5yaWdodCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZyb3plbi5yaWdodCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tVbmZyZWV6ZUxlZnQoKSB7XHJcbiAgICBpZiAodGhpcy5mcm96ZW4ubGVmdCAmJiAhVGlsZS5pc0ZyZWV6YWJsZSh0aGlzLmNvcm5lcnMubCkpIHtcclxuICAgICAgdGhpcy5mcm96ZW4ubGVmdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tVbmZyZWV6ZVJpZ2h0KCkge1xyXG4gICAgaWYgKHRoaXMuZnJvemVuLnJpZ2h0ICYmICFUaWxlLmlzRnJlZXphYmxlKHRoaXMuY29ybmVycy5yKSkge1xyXG4gICAgICB0aGlzLmZyb3plbi5yaWdodCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIEphciBleHRlbmRzIEFuaW1TcHJpdGUge1xuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSkge1xuICAgIHN1cGVyKENvbnN0cy5PYmplY3RKYXIsIGVuZ2luZSwgJ2ltZ19qYXInLCB0eCwgdHksIENvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgsIDAsIDAsIDAsIDMsIHRydWUpO1xuICAgIHRoaXMuYW5pbURlbGF5ID0gQ29uc3RzLkFuaW1EZWZhdWx0RGVsYXkgKiAyO1xuICAgIHRoaXMub25GaXJlID0gZmFsc2U7XG4gICAgdGhpcy5hbmltUm93ID0gMDtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgaWYgKCF0aGlzLm1vdmluZykge1xuICAgICAgdGhpcy5jb2xsaXNpb25zKCk7XG4gICAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcbiAgICAgICAgdGhpcy5kb0Rvd24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29sbGlzaW9ucygpIHtcbiAgICBpZiAoIXRoaXMub25GaXJlICYmIHRoaXMuY29ybmVycy51ID09PSBDb25zdHMuT2JqZWN0RmlyZSkge1xuICAgICAgdGhpcy50dXJuT25GaXJlKCk7XG4gICAgICB0aGlzLmVuZ2luZS5yZW1vdmVGaXJlKHRoaXMueFRpbGUsIHRoaXMueVRpbGUgLSAxKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub25GaXJlICYmIHRoaXMuY29ybmVycy51ID09PSBDb25zdHMuT2JqZWN0SWNlKSB7XG4gICAgICB0aGlzLm1lbHRJY2UoKTtcbiAgICB9XG4gIH1cblxuICBncmF2aXR5KCkge1xuICAgIGlmICghdGhpcy5jb3JuZXJzLmQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVEb3duLCB0cnVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkb0Rvd24oKSB7XG4gICAgdGhpcy5jb3VudGVyICs9IDQ7XG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XG4gICAgICB0aGlzLnkgKz0gNDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdHVybk9uRmlyZSgpIHtcbiAgICB0aGlzLmFuaW1Sb3cgPSAxO1xuICAgIHRoaXMub25GaXJlID0gdHJ1ZTtcbiAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlIC0gMSwgQ29uc3RzLkNvbG9yT3JhbmdlLCAzMCk7XG4gIH1cblxuICBtZWx0SWNlKCkge1xuICAgIHRoaXMuZW5naW5lLnJlbW92ZUljZUJsb2NrKHRoaXMueFRpbGUsIHRoaXMueVRpbGUgLSAxKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSAtIDEsIENvbnN0cy5Db2xvck9yYW5nZSwgMjApO1xuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlIC0gMSwgQ29uc3RzLkNvbG9yQmx1ZSwgMTApO1xuICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ZpcmUtb2ZmJyk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHN1cGVyLmRyYXcoKTtcbiAgICB0aGlzLmRyYXdGcm9zdCgpO1xuICB9XG59XG4iLCIvKipcbiAqIEtleWJvYXJkIHByZXNzIGVuZ2luZVxuICovXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5rZXlkb3duID0gdGhpcy5rZXlkb3duXy5iaW5kKHRoaXMpO1xuICAgIHRoaXMua2V5dXAgPSB0aGlzLmtleXVwXy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW50cm8gPSB0cnVlO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleWRvd24sIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleXVwLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaW50cm8pIHtcbiAgICAgICAgdGhpcy5lbnRlciA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLmludHJvID0gZmFsc2U7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9hY3Rpb24nKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgIHRoaXMuZG93biA9IHRydWU7XG4gICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX2FjdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsICgpID0+ICh0aGlzLmRvd24gPSBmYWxzZSkpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fbGVmdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fbGVmdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsICgpID0+ICh0aGlzLmxlZnQgPSBmYWxzZSkpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fcmlnaHQnKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX3JpZ2h0JykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgKCkgPT4gKHRoaXMucmlnaHQgPSBmYWxzZSkpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fc2VsZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiAodGhpcy5lbnRlciA9IHRydWUpKTtcbiAgfVxuXG4gIGtleWRvd25fKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgMzc6IC8vIExlZnRcbiAgICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzg6IC8vIFVwXG4gICAgICAgIHRoaXMudXAgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XG4gICAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQwOiAvLyBEb3duXG4gICAgICBjYXNlIDMyOiAvLyBTcGFjZVxuICAgICAgICB0aGlzLmFjdGlvbiA9IHRydWU7XG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZG93biA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMzogLy9FbnRlclxuICAgICAgICB0aGlzLmVudGVyID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGtleXVwXyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIDM3OiAvLyBMZWZ0XG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzg6IC8vIFVwXG4gICAgICAgIHRoaXMudXAgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM5OiAvLyBSaWdodFxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0MDogLy8gRG93blxuICAgICAgY2FzZSAzMjogLy8gU3BhY2VcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxMzogLy9FbnRlclxuICAgICAgICB0aGlzLmVudGVyID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgbGV2ZWxzID0gW1xyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDAsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDExLCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNSwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDEwLCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMSxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMywgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDQsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDUsIHY6IDQgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDYsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAyLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxNCwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA2LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMCxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogOCwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA4LCB2OiA1IH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiA3LCB2OiAzIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEyLCB5OiA2LCB2OiAyIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNCwgeTogNywgdjogMyB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAzLCB5OiA2LCB2OiAyIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNCwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAzLCB5OiA3LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNixcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMTEsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDEwLCB2OiAzIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiA5LCB2OiAzIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDcsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMywgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA5LCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDMsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDMsIHk6IDQsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA1LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxMywgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAzLCB5OiA0LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA2LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA2LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNiwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogMiwgeTogOCwgdjogMTMsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogNiwgeDogMiwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAzLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDE0LCB5OiA0LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogMywgeDogMiwgeTogNSwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMSxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMTIsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMTEsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDExLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDUsIHY6IDUgfSxcclxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNiwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiA1LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMSxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogOCwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDEwLCB2OiAyIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDksIHY6IDcgfSxcclxuICAgICAgeyBpZDogNiwgeDogNSwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA1LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNixcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogNSwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogOCwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogOCwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDEwLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAzLCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDIsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMywgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDIsIHk6IDUsIHY6IDEwIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDQsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA2LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAzLCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA0LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDMsIHY6IDIgfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDMsIHY6IDIgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMywgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDcsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDgsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAyLCB5OiAzLCB2OiAyIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDE0LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDE0LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEzLCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAyLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMywgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAzLCB5OiA4LCB2OiAxMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiA5LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMixcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMTIsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogMTAsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiA3LCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDEwLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDUsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDIsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNCwgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDMsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNixcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogOCwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA1LCB4OiA2LCB5OiAxMSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDcsIHk6IDQsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAxLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxMCwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCBmbDogZmFsc2UsIGZyOiBmYWxzZSwgeDogMTAsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIGZsOiBmYWxzZSwgZnI6IGZhbHNlLCB4OiA2LCB5OiA5LCB2OiA1IH0sXHJcbiAgICAgIHsgaWQ6IDMsIGZsOiBmYWxzZSwgZnI6IGZhbHNlLCB4OiA3LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIGZsOiBmYWxzZSwgZnI6IGZhbHNlLCB4OiA2LCB5OiA3LCB2OiA1IH0sXHJcbiAgICAgIHsgaWQ6IDMsIGZsOiBmYWxzZSwgZnI6IGZhbHNlLCB4OiA2LCB5OiA1LCB2OiA1IH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDQsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA3LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogNywgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDksIHk6IDcsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiAxMCwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDcsIHk6IDUsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA2LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA0LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDcsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMywgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA3LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMSxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogOCwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDcsIHY6IDMsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogNywgeTogOCwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNiwgeTogNiwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogNiwgeTogNSwgdjogMywgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogOSwgeTogNSwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAyLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA2LCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMTAsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA5LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA0LCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDQsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA0LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDQsIHY6IDQsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDExLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDUsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMywgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA1LCB4OiA4LCB5OiAxMCwgdjogZmFsc2UgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAwLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxMCwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiA2LCB2OiA0LCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDUsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAwLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA4LCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDUsIHg6IDYsIHk6IDEwLCB2OiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDUsIHg6IDUsIHk6IDcsIHY6IHRydWUgfSxcclxuICAgICAgeyBpZDogNSwgeDogOCwgeTogOCwgdjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogNywgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDQsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDgsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNiwgeTogNiwgdjogMSwgZmw6IGZhbHNlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA0LCB5OiA3LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDQsIHk6IDUsIHY6IDEsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA5LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNixcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogOSwgeTogMTEsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNSwgeDogMTAsIHk6IDgsIHY6IHRydWUgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDExLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDExLCB5OiAyLCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogOCxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMTIsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNSwgeDogMTEsIHk6IDcsIHY6IHRydWUgfSxcclxuICAgICAgeyBpZDogNCwgeDogMTAsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxNCwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA5LCB5OiA1LCB2OiA0LCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDksIHk6IDQsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogOCxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMywgeTogMSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiA0LCB5OiAyLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDIsIHk6IDIsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMywgeTogMiwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMiwgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiA2LCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDcsIHk6IDUsIHY6IDEsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogNSwgeTogNSwgdjogMSwgZmw6IGZhbHNlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiA0LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDIsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMywgeTogOCwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMiwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogMTAsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogOCwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA5LCB5OiA4LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiAxMiwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMywgeTogNSwgdjogMSwgZmw6IHRydWUsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogNSwgdjogMSwgZmw6IGZhbHNlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDEwLCB5OiAyLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDgsIHk6IDIsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogOSwgeTogMiwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgLyoge1xyXG4gICAgICAgIFwibWFwXCI6W1xyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMSwxLDEsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMCwwLDAsMCwwLDAsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwwLDAsMCwwLDAsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwwLDAsMSwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDAsMCwwLDAsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDAsMCwwLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwwLDAsMSwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMSwwLDEsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJ0aGVtZVwiOjksXHJcbiAgICAgICAgXCJzcHJpdGVzXCI6W1xyXG4gICAgICAgICAgICB7XCJpZFwiOjcsXCJ4XCI6OSxcInlcIjo1LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjMsXCJ4XCI6NyxcInlcIjo2LFwidlwiOjJ9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjQsXCJ4XCI6NyxcInlcIjo1LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjYsXCJ4XCI6NixcInlcIjo3LFwidlwiOjF9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjUsXCJ4XCI6NyxcInlcIjo5LFwidlwiOnRydWV9LFxyXG4gICAgICAgICAgICB7XCJpZFwiOjUsXCJ4XCI6OCxcInlcIjoxMCxcInZcIjp0cnVlfSxcclxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjksXCJ5XCI6OCxcInZcIjp0cnVlfVxyXG4gICAgICAgIF1cclxuICAgIH0sKi8ge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDEzLCB5OiAyLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDQsIHk6IDQsIHY6IDggfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDMsIHY6IDQgfSxcclxuICAgICAgeyBpZDogNiwgeDogMywgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDIsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMiwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA4LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNixcclxuICAgIHNwcml0ZXM6IFt7IGlkOiA3LCB4OiAxNCwgeTogMTAsIHY6IDEgfV0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA2LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxMCwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA1LCB4OiA4LCB5OiA4LCB2OiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDgsIHg6IDE0LCB5OiA4LCB2OiBmYWxzZSwgcmVmOiAxLCBsaW5rOiAyIH0sXHJcbiAgICAgIHsgaWQ6IDgsIHg6IDgsIHk6IDQsIHY6IGZhbHNlLCByZWY6IDIsIGxpbms6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNCwgeTogOSwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDksXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDEwLCB5OiAxMSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDUsIHg6IDQsIHk6IDExLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDUsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ldGFsIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHksIGxlbmd0aCkge1xyXG4gICAgc3VwZXIoQ29uc3RzLk9iamVjdE1ldGFsLCBlbmdpbmUsICdpbWdfbWV0YWwnLCB0eCwgdHksIENvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgsIDAsIDAsIDAsIDEsIHRydWUpO1xyXG4gICAgdGhpcy54VGlsZSA9IHR4O1xyXG4gICAgdGhpcy55VGlsZSA9IHR5O1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmFuaW1EZWxheSA9IDk7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XHJcbiAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNhbkdsaWRlKGRpcikge1xyXG4gICAgaWYgKGRpciA9PT0gQ29uc3RzLkRpckxlZnQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5sKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlyID09PSBDb25zdHMuRGlyUmlnaHQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5yKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZyb3plblRvSWNlKCkge1xyXG4gICAgY29uc3QgcmlnaHRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlICsgMSwgdGhpcy55VGlsZSk7XHJcbiAgICBjb25zdCBsZWZ0U3ByaXRlID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSAtIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIXRoaXMuZmFsbGluZyAmJlxyXG4gICAgICAoKHJpZ2h0U3ByaXRlICYmIHJpZ2h0U3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmIHJpZ2h0U3ByaXRlLmZyb3plbi5sZWZ0KSB8fFxyXG4gICAgICAgIChsZWZ0U3ByaXRlICYmIGxlZnRTcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiYgbGVmdFNwcml0ZS5mcm96ZW4ucmlnaHQpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdyYXZpdHkoKSB7XHJcbiAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiYgIXRoaXMuZnJvemVuVG9JY2UoKSkge1xyXG4gICAgICB0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmFsbGluZykge1xyXG4gICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWNvbGxpc2lvbicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29sbGlzaW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmNhbkdsaWRlKHRoaXMuZGlyZWN0aW9uKSkge1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ3Jhdml0eSgpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbW92ZSgpIHtcclxuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUljZU1vdmluZzpcclxuICAgICAgICB0aGlzLmdsaWRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VDaGVjazpcclxuICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZURvd246XHJcbiAgICAgICAgdGhpcy5kb0Rvd24oKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBzdXBlci5kcmF3KCk7XHJcbiAgICB0aGlzLmRyYXdGcm9zdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2xpZGUoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gNDtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xyXG4gICAgICB0aGlzLnggKz0gNCAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb0Rvd24oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gNDtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xyXG4gICAgICB0aGlzLnkgKz0gNDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVzaChkaXIpIHtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gdHlwZW9mIGRpciA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmRpcmVjdGlvbiA6IGRpcjtcclxuICAgIGlmICghdGhpcy5jb2xsaXNpb24oKSkge1xyXG4gICAgICB0aGlzLm1vdmluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VNb3ZpbmcsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlcyc7XHJcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSkge1xyXG4gICAgc3VwZXIoQ29uc3RzLk9iamVjdFBsYXllciwgZW5naW5lLCAnaW1nX2RvbmEnLCB0eCwgdHksIDQ4LCA2NCwgLTEwLCAtMzIsIDIsIDIsIGZhbHNlKTtcclxuICAgIHRoaXMuc3BlZWQgPSAyO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xyXG4gICAgdGhpcy5zdGF0ZSA9IDA7IC8vc3RhbmRpbmcgdG9wIHJpZ2h0IGRvd24gbGVmdFxyXG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMudGlsZVdpZHRoID0gQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgIHRoaXMudGlsZUhlaWdodCA9IENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICB0aGlzLmFuaW1EZWxheSA9IDM7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICB0aGlzLmlubmVyQ291bnRlciA9IDA7XHJcbiAgICB0aGlzLnN0YW5kQ291bnRlciA9IDA7XHJcbiAgICB0aGlzLmludHJvKCk7XHJcbiAgfVxyXG5cclxuICBsZWZ0KCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vaWYgc3RhbmRpbmcgdGhlbiB0dXJuXHJcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09IENvbnN0cy5EaXJMZWZ0KSB7XHJcbiAgICAgIC8vaXMgbm90IHVuZGVyIGEgYnJpY2tcclxuICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltVHVyblN0YXJ0LCBDb25zdHMuQW5pbVR1cm5FbmQsIGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVR1cm4sIHRydWUpO1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IENvbnN0cy5EaXJMZWZ0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9ydW5uaW5nXHJcbiAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5sKSAmJiBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgLy9ub3QgdW5kZXIgYSBicmlja1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51bCkpIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVJ1blN0YXJ0LCBDb25zdHMuQW5pbVJ1bkVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIENvbnN0cy5BbmltQ3JvdWNoRW5kLCB0cnVlLCBDb25zdHMuQW5pbUxlZnRSb3csIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlTGVmdCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy9oaXQgYW4gaWNlXHJcbiAgICAgIGlmIChcclxuICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmXHJcbiAgICAgICAgKHRoaXMuY29ybmVycy5sID09PSBDb25zdHMuT2JqZWN0SWNlIHx8IHRoaXMuY29ybmVycy5sID09PSBDb25zdHMuT2JqZWN0TWV0YWwpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vY2xpbWJcclxuICAgICAgaWYgKFxyXG4gICAgICAgIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMubCkgJiZcclxuICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmXHJcbiAgICAgICAgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudSkgJiZcclxuICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51bCkgJiZcclxuICAgICAgICAhdGhpcy5tb3ZpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LCBDb25zdHMuQW5pbVB1c2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVVwLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmlnaHQoKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSBDb25zdHMuRGlyUmlnaHQpIHtcclxuICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltVHVyblN0YXJ0LCBDb25zdHMuQW5pbVR1cm5FbmQsIGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3csIDQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LCBDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVR1cm4sIHRydWUpO1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IENvbnN0cy5EaXJSaWdodDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5yKSAmJiBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpICYmICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnVyKSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUnVuU3RhcnQsIENvbnN0cy5BbmltUnVuRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIENvbnN0cy5BbmltQ3JvdWNoRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVJpZ2h0LCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSAmJlxyXG4gICAgICAgICh0aGlzLmNvcm5lcnMuciA9PT0gQ29uc3RzLk9iamVjdEljZSB8fCB0aGlzLmNvcm5lcnMuciA9PT0gQ29uc3RzLk9iamVjdE1ldGFsKVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5yKSAmJlxyXG4gICAgICAgIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiZcclxuICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSAmJlxyXG4gICAgICAgICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnVyKSAmJlxyXG4gICAgICAgICF0aGlzLm1vdmluZ1xyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1QdXNoU3RhcnQsIENvbnN0cy5BbmltUHVzaFN0YXJ0LCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVVwLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnVybigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSBDb25zdHMuTW92ZVJpcCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5T25jZSgnZGFuZ2VyJyk7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVJpcCwgdHJ1ZSk7XHJcbiAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1SaXBTdGFydCwgQ29uc3RzLkFuaW1SaXBFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3cpO1xyXG4gIH1cclxuXHJcbiAgaW50cm8oKSB7XHJcbiAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1CaWdGYWxsU3RhcnQsIENvbnN0cy5BbmltQmlnRmFsbEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlTGV2ZWxFbnRlciwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBvdXRybygpIHtcclxuICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUZhbGxTdGFydCwgQ29uc3RzLkFuaW1CaWdGYWxsRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVMZXZlbEV4aXQsIHRydWUpO1xyXG4gICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gIH1cclxuXHJcbiAgZG9SaXAoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgJSAxMCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yUmVkLCA1LCAxLjIpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yQmx1ZSwgNSwgMC43KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gNzApIHtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvclJlZCwgMTUsIDIuMCk7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JCbHVlLCAxMCwgMy4wKTtcclxuICAgICAgdGhpcy5jb3VudGVyID0gMDtcclxuICAgICAgdGhpcy5lbmdpbmUua2V5Ym9hcmQuZW50ZXIgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eSgpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuY29ybmVycy5kID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCd1bmRlZmluZWQgY29ybmVyJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xyXG4gICAgICBpZiAodGhpcy5mYWxsQ291bnRlciA+PSAxKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheU9uY2UoJ2ZhbGxpbmcnKTtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1CaWdGYWxsU3RhcnQsIENvbnN0cy5BbmltQmlnRmFsbEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQmlnRmFsbFN0YXJ0LCBDb25zdHMuQW5pbUJpZ0ZhbGxFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5zdG9wKCdmYWxsaW5nJyk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBDb25zdHMuTW92ZURvd24pIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmYWxsJyk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckdyZWVuLCAxMCwgMC43NSk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvclJlZCwgNSwgMS4yNSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICBpZiAodGhpcy5jb3JuZXJzLmQgPT09IENvbnN0cy5PYmplY3RKYXIpIHtcclxuICAgICAgICBjb25zdCBqYXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICAgICAgaWYgKGphciAmJiBqYXIub25GaXJlKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1cm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGljZU9yVGVsZXBvcnQoKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY29ybmVycy5kID09PSBDb25zdHMuT2JqZWN0VGVsZXBvcnQpIHtcclxuICAgICAgdGhpcy50ZWxlcG9ydCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pY2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlbGVwb3J0KCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUZhbGxTdGFydCwgQ29uc3RzLkFuaW1CaWdGYWxsRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVUZWxlcG9ydE91dCwgdHJ1ZSk7XHJcbiAgICB0aGlzLmlubmVyQ291bnRlciA9IDA7XHJcbiAgICB0aGlzLmRvVGVsZXBvcnRJbigpO1xyXG4gIH1cclxuXHJcbiAgaWNlKCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpKSB7XHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0KSB7XHJcbiAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmRyKSAmJiB0aGlzLmNvcm5lcnMuZHIgIT09IENvbnN0cy5PYmplY3RGaXJlKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1JY2VTdGFydCwgQ29uc3RzLkFuaW1JY2VFbmQsIGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VNYWtlLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29ybmVycy5kciA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsIENvbnN0cy5BbmltSWNlRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlUmVtb3ZlLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsIENvbnN0cy5BbmltSWNlRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlRmFpbCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kbCkgJiYgdGhpcy5jb3JuZXJzLmRsICE9PSBDb25zdHMuT2JqZWN0RmlyZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsIENvbnN0cy5BbmltSWNlRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VNYWtlLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29ybmVycy5kbCA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsIENvbnN0cy5BbmltSWNlRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VSZW1vdmUsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1JY2VTdGFydCwgQ29uc3RzLkFuaW1JY2VFbmQsIGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3csIDQpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZUZhaWwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAganVtcCgpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCkge1xyXG4gICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5yKSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51cikgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudSkpIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1QdXNoU3RhcnQsIENvbnN0cy5BbmltUHVzaFN0YXJ0LCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVVwLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMubCkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudWwpICYmICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LCBDb25zdHMuQW5pbVB1c2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVVwLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9SdW4oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkICogdGhpcy5kaXJlY3Rpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvVHVybigpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA+PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb091dHJvKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyICUgMTAgPT09IDApIHtcclxuICAgICAgdGhpcy5pbm5lckNvdW50ZXIgKz0gMTtcclxuICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckdyZWVuLCAyNSwgMC41KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPT09IDMpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yUmVkLCAzMCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSA1KSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckJsdWUsIDM1LCAxLjUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciAlIDIgPT09IDAgJiYgdGhpcy5pbm5lckNvdW50ZXIgPCA2KSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnY2xpbWInKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyICUgMiA9PT0gMSkge1xyXG4gICAgICB0aGlzLnkgKz0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMueSAtPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID49IDYpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnc3RhdGUtbGVhdmUnKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuZW5naW5lLm5leHRMZXZlbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9JbnRybygpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA9PT0gOCkge1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yR3JlZW4sIDIwLCAyLjUpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yUmVkLCAzNSwgMSk7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JCbHVlLCAyMCwgMS41KTtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnc3RhZ2UtZW50ZXInKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gMzIpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQuc3RvcCgnZmFsbGluZycpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvR3Jhdml0eSgpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgICAgdGhpcy5mYWxsQ291bnRlcisrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9TdGFuZCgpIHtcclxuICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSkge1xyXG4gICAgICBpZiAodGhpcy5zdGFuZENvdW50ZXIrKyA+IDUwMCkge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgIENvbnN0cy5BbmltU2xlZXBTdGFydCxcclxuICAgICAgICAgIENvbnN0cy5BbmltU2xlZXBFbmQsXHJcbiAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgdGhpcy5kaXJlY3Rpb24gIT09IDEgPyBDb25zdHMuQW5pbUxlZnRSb3cgOiBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICAgICAgNDgsXHJcbiAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgQ29uc3RzLkFuaW1TdGFuZFN0YXJ0LFxyXG4gICAgICAgICAgQ29uc3RzLkFuaW1TdGFuZEVuZCxcclxuICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICB0aGlzLmRpcmVjdGlvbiAhPT0gMSA/IENvbnN0cy5BbmltTGVmdFJvdyA6IENvbnN0cy5BbmltUmlnaHRSb3csXHJcbiAgICAgICAgICA4LFxyXG4gICAgICAgICAgdHJ1ZSxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCxcclxuICAgICAgICBDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uICE9PSAxID8gQ29uc3RzLkFuaW1MZWZ0Um93IDogQ29uc3RzLkFuaW1SaWdodFJvdyxcclxuICAgICAgICA4LFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1VwKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IDE4KSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5jb3VudGVyKSB7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnY2xpbWInKTtcclxuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JHcmVlbiwgMTAsIDAuNzUpO1xyXG4gICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvclJlZCwgNSwgMS4yNSk7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUHVzaEVuZCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1QdXNoRW5kLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3csXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbUp1bXBTdGFydCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1KdW1wU3RhcnQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0ID8gQ29uc3RzLkFuaW1SaWdodFJvdyA6IENvbnN0cy5BbmltTGVmdFJvdyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLnggKz0gOCAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltSnVtcEVuZCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1KdW1wRW5kLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3csXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcmVjdGlvbjtcclxuICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbSgyLCAyLCBmYWxzZSwgdGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3cpO1xyXG4gICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcmVjdGlvbjtcclxuICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxODpcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1TdGFuZCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1TdGFuZCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1ha2VJY2UoKSB7XHJcbiAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCduZXctaWNlJyk7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRJY2VCbG9jayh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUgKyAxKTtcclxuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUgKyAxKTtcclxuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUgKyAxLCBDb25zdHMuQ29sb3JCbHVlLCA1KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUljZUJsb2NrKCkge1xyXG4gICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLXJlbW92ZScpO1xyXG4gICAgdGhpcy5lbmdpbmUucmVtb3ZlSWNlQmxvY2sodGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSwgQ29uc3RzLkNvbG9yQmx1ZSwgNSk7XHJcbiAgfVxyXG5cclxuICBwdXNoKCkge1xyXG4gICAgbGV0IGljZSA9IHRoaXMuZW5naW5lLmljZUF0KHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSk7XHJcbiAgICBpZiAoaWNlICYmIGljZS5jYW5HbGlkZSh0aGlzLmRpcmVjdGlvbikpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yV2hpdGUsIDMpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JCbHVlLCAzLCAxLjUpO1xyXG4gICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgQ29uc3RzLkFuaW1QdXNoU3RhcnQsXHJcbiAgICAgICAgQ29uc3RzLkFuaW1QdXNoRW5kLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgIDMsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVQdXNoLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvUHVzaCgpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAyO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA+IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICBjb25zdCBpY2UgPSB0aGlzLmVuZ2luZS5pY2VBdCh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUpO1xyXG4gICAgICBpZiAoaWNlKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLXB1c2gnKTtcclxuICAgICAgICBpY2UucHVzaCh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb0ljZSgpIHtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDgpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENvbnN0cy5Nb3ZlSWNlTWFrZSkge1xyXG4gICAgICAgIHRoaXMubWFrZUljZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlSWNlQmxvY2soKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID49IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvRmFpbEljZSgpIHtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDgpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWRpc2FibGVkJyk7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUgKyAxLCAnODgsNjYsNjYnKTtcclxuICAgIH1cclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA+PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1RlbGVwb3J0SW4oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgJSAxMCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmlubmVyQ291bnRlciArPSAxO1xyXG4gICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPT09IDEpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdjbGltYicpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JHcmVlbiwgMTAsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSAyKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckdyZWVuLCAxMCwgMS41KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID49IDIpIHtcclxuICAgICAgdGhpcy5kb1RlbGVwb3J0T3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1RlbGVwb3J0T3V0KCkge1xyXG4gICAgY29uc3QgdGVsZXBvcnQgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLnggPSB0ZWxlcG9ydC5saW5rLng7XHJcbiAgICB0aGlzLnkgPSB0ZWxlcG9ydC5saW5rLnkgLSAzMjtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JHcmVlbiwgMTUsIDEuNSk7XHJcbiAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtcmVtb3ZlJyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbGxpc2lvbnMoKSB7XHJcbiAgICBpZiAodGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5PYmplY3RQbGF5ZXIpID09PSBDb25zdHMuT2JqZWN0RmlyZSkge1xyXG4gICAgICB0aGlzLmJ1cm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgIHRoaXMuY29sbGlzaW9ucygpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IENvbnN0cy5Nb3ZlU3RhbmQpIHtcclxuICAgICAgdGhpcy5zdGFuZENvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IENvbnN0cy5Nb3ZlRG93bikge1xyXG4gICAgICB0aGlzLmZhbGxDb3VudGVyID0gMDtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlUmlnaHQ6XHJcbiAgICAgICAgdGhpcy5kb1J1bigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlTGVmdDpcclxuICAgICAgICB0aGlzLmRvUnVuKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgIHRoaXMuZG9HcmF2aXR5KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVVcDpcclxuICAgICAgICB0aGlzLmRvVXAoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZVR1cm46XHJcbiAgICAgICAgdGhpcy5kb1R1cm4oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUljZU1ha2U6XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VSZW1vdmU6XHJcbiAgICAgICAgdGhpcy5kb0ljZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlRmFpbDpcclxuICAgICAgICB0aGlzLmRvRmFpbEljZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlU3RhbmQ6XHJcbiAgICAgICAgdGhpcy5kb1N0YW5kKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVQdXNoOlxyXG4gICAgICAgIHRoaXMuZG9QdXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVSaXA6XHJcbiAgICAgICAgdGhpcy5kb1JpcCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlTGV2ZWxFeGl0OlxyXG4gICAgICAgIHRoaXMuZG9PdXRybygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlVGVsZXBvcnRPdXQ6XHJcbiAgICAgICAgdGhpcy5kb1RlbGVwb3J0SW4oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUxldmVsRW50ZXI6XHJcbiAgICAgICAgdGhpcy5kb0ludHJvKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBSZXNvdXJjZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gW107XG4gICAgdGhpcy5yZXNvdXJjZXMgPSB7fTtcbiAgICB0aGlzLmxvYWRlZCA9IDA7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cbiAgfVxuXG4gIGFkZCh0eXBlLCBuYW1lLCBzcmMpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zLnB1c2goeyB0eXBlOiB0eXBlLCBuYW1lOiBuYW1lLCBzcmM6IHNyYyB9KTtcbiAgfVxuXG4gIGdldChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzW25hbWVdO1xuICB9XG5cbiAgY2hlY2soY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5jdHgpIHtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZmJztcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDUwLCAyNTAsICh0aGlzLmxvYWRlZCAqIDQ1MCkgLyB0aGlzLmRlZmluaXRpb25zLmxlbmd0aCwgNDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5sb2FkZWQgPT09IHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIHJlYWR5KGNhbGxiYWNrKSB7XG4gICAgZm9yIChjb25zdCByZXNvdXJjZSBvZiB0aGlzLmRlZmluaXRpb25zKSB7XG4gICAgICBpZiAocmVzb3VyY2UudHlwZSA9PT0gJ2ltYWdlJykge1xuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZGVkICs9IDE7XG4gICAgICAgICAgdGhpcy5jaGVjayhjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbWFnZS5zcmMgPSByZXNvdXJjZS5zcmM7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzW3Jlc291cmNlLm5hbWVdID0gaW1hZ2U7XG4gICAgICB9XG4gICAgICBpZiAocmVzb3VyY2UudHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlc291cmNlLm5hbWUpO1xuICAgICAgICB0aGlzLmxvYWRlZCArPSAxO1xuICAgICAgICB0aGlzLnJlc291cmNlc1tyZXNvdXJjZS5uYW1lXSA9IGF1ZGlvO1xuICAgICAgICB0aGlzLmNoZWNrKGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IEZyb3N0IH0gZnJvbSAnLi9zdHJ1Y3QnO1xuaW1wb3J0IHsgRmlyZSB9IGZyb20gJy4vZmlyZSc7XG5pbXBvcnQgeyBJY2UgfSBmcm9tICcuL2ljZSc7XG5pbXBvcnQgeyBKYXIgfSBmcm9tICcuL2phcic7XG5pbXBvcnQgeyBNZXRhbCB9IGZyb20gJy4vbWV0YWwnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHsgVGlsZU1hcCB9IGZyb20gJy4vdGlsZW1hcCc7XG5pbXBvcnQgeyBsZXZlbHMgfSBmcm9tICcuL2xldmVscyc7XG5pbXBvcnQgeyBUZWxlcG9ydCB9IGZyb20gJy4vdGVsZXBvcnQnO1xuXG5leHBvcnQgY2xhc3MgU2NlbmUge1xuICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBkYXRhLm1hcCA9IHRoaXMuZW5naW5lLm1hcC5tYXA7XG4gICAgZGF0YS50aGVtZSA9IHRoaXMuZW5naW5lLm1hcC50aGVtZTtcbiAgICBkYXRhLnNwcml0ZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiB0aGlzLmVuZ2luZS5zcHJpdGVzKSB7XG4gICAgICBsZXQgdmFsdWUgPSB0eXBlb2Ygc3ByaXRlLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcgPyAxIDogc3ByaXRlLmxlbmd0aDtcbiAgICAgIHZhbHVlID0gc3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SmFyID8gc3ByaXRlLm9uRmlyZSA6IHZhbHVlO1xuICAgICAgbGV0IGZsLCBmcjtcbiAgICAgIGlmIChzcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcbiAgICAgICAgZmwgPSBzcHJpdGUuZnJvemVuLmxlZnQ7XG4gICAgICAgIGZyID0gc3ByaXRlLmZyb3plbi5yaWdodDtcbiAgICAgIH1cbiAgICAgIGRhdGEuc3ByaXRlcy5wdXNoKHtcbiAgICAgICAgaWQ6IHNwcml0ZS5pZCxcbiAgICAgICAgeDogc3ByaXRlLnhUaWxlLFxuICAgICAgICB5OiBzcHJpdGUueVRpbGUsXG4gICAgICAgIHY6IHZhbHVlLFxuICAgICAgICBmbDogZmwsXG4gICAgICAgIGZyOiBmcixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgbG9hZChpbmRleCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWxzW2luZGV4XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG4gICAgdGhpcy5lbmdpbmUubGV2ZWwgPSBpbmRleDtcbiAgICBjb25zdCBsZXZlbCA9IGxldmVsc1tpbmRleF07XG4gICAgdGhpcy5lbmdpbmUuc3ByaXRlcyA9IFtdO1xuICAgIHRoaXMuZW5naW5lLm1hcCA9IG5ldyBUaWxlTWFwKHRoaXMuZW5naW5lLCBsZXZlbC5tYXAsIGxldmVsLnRoZW1lKTtcbiAgICBjb25zdCB0ZWxlcG9ydHMgPSBuZXcgTWFwKCk7XG4gICAgZm9yIChjb25zdCBzcHJpdGUgb2YgbGV2ZWwuc3ByaXRlcykge1xuICAgICAgc3dpdGNoIChzcHJpdGUuaWQpIHtcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0UGxheWVyOlxuICAgICAgICAgIHRoaXMuZW5naW5lLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSk7XG4gICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKHRoaXMuZW5naW5lLnBsYXllcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdEljZTpcbiAgICAgICAgICBsZXQgZnJvemVuID0gbmV3IEZyb3N0KHRydWUsIHRydWUpO1xuICAgICAgICAgIGlmICh0eXBlb2Ygc3ByaXRlLmZsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZnJvemVuLmxlZnQgPSBzcHJpdGUuZmw7XG4gICAgICAgICAgICBmcm96ZW4ucmlnaHQgPSBzcHJpdGUuZnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShuZXcgSWNlKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnksIHBhcnNlSW50KHNwcml0ZS52KSwgZnJvemVuKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdE1ldGFsOlxuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShuZXcgTWV0YWwodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSwgMSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RGaXJlOlxuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShuZXcgRmlyZSh0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdEphcjpcbiAgICAgICAgICBjb25zdCBqYXIgPSBuZXcgSmFyKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpO1xuICAgICAgICAgIGlmIChzcHJpdGUudiA9PSAxKSB7XG4gICAgICAgICAgICBqYXIudHVybk9uRmlyZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUoamFyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0VGVsZXBvcnQ6XG4gICAgICAgICAgY29uc3QgdGVsZXBvcnQgPSBuZXcgVGVsZXBvcnQodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSk7XG4gICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKHRlbGVwb3J0KTtcbiAgICAgICAgICB0ZWxlcG9ydC5saW5rSWQgPSBzcHJpdGUubGluaztcbiAgICAgICAgICB0ZWxlcG9ydHMuc2V0KHNwcml0ZS5yZWYsIHRlbGVwb3J0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gbGluayB0ZWxlcG9ydHNcbiAgICBpZiAodGVsZXBvcnRzLnNpemUpIHtcbiAgICAgIGZvciAoY29uc3QgdGVsZXBvcnQgb2YgdGVsZXBvcnRzLnZhbHVlcygpKSB7XG4gICAgICAgIGNvbnN0IGxpbmtlZCA9IHRlbGVwb3J0cy5nZXQodGVsZXBvcnQubGlua0lkKTtcbiAgICAgICAgaWYgKGxpbmtlZCkge1xuICAgICAgICAgIHRlbGVwb3J0LmxpbmsgPSBsaW5rZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgUGFydGljbGUge1xuICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIGNvbG9yLCBpbnRlbnNpdHkpIHtcbiAgICB0aGlzLmNvbG9yID0gdHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJyA/IENvbnN0cy5Db2xvcldoaXRlIDogY29sb3I7XG4gICAgdGhpcy5yID0gNDtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy52eCA9IChNYXRoLnJhbmRvbSgpICogNCAtIDIpICogaW50ZW5zaXR5O1xuICAgIHRoaXMudnkgPSAoTWF0aC5yYW5kb20oKSAqIDYgLSA0KSAqIGludGVuc2l0eTtcbiAgICB0aGlzLnNwZWVkID0gMC4xNTtcbiAgICB0aGlzLmxpZmUgPSAyNTU7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IG9wYWNpdHkgPSB0aGlzLmxpZmUgLyAyNTU7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoJyArIHRoaXMuY29sb3IgKyAnLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy52eDtcbiAgICB0aGlzLnkgKz0gdGhpcy52eTtcbiAgICB0aGlzLnZ5ICs9IHRoaXMuc3BlZWQ7XG4gICAgdGhpcy5saWZlIC09IDU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwYXJrcyBleHRlbmRzIFNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5LCBjb2xvciwgbGVuZ3RoLCBpbnRlbnNpdHkpIHtcbiAgICBzdXBlcihudWxsLCBlbmdpbmUsIHR4LCB0eSwgMzIsIDMyKTtcbiAgICB0aGlzLmNvbG9yID0gdHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJyA/ICcyNTUsMjU1LDI1NScgOiBjb2xvcjtcbiAgICB0aGlzLmxlbmd0aCA9IHR5cGVvZiBsZW5ndGggPT09ICd1bmRlZmluZWQnID8gMTAgOiBsZW5ndGg7XG4gICAgdGhpcy5pbnRlbnNpdHkgPSB0eXBlb2YgaW50ZW5zaXR5ID09PSAndW5kZWZpbmVkJyA/IDEgOiBpbnRlbnNpdHk7XG4gICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucGFydGljbGVzW2ldID0gbmV3IFBhcnRpY2xlKFxuICAgICAgICB0aGlzLmVuZ2luZS5jdHgsXG4gICAgICAgIHR4ICogQ29uc3RzLlRpbGVXaWR0aCArIDE2LFxuICAgICAgICB0eSAqIENvbnN0cy5UaWxlV2lkdGggKyAxNixcbiAgICAgICAgdGhpcy5jb2xvcixcbiAgICAgICAgdGhpcy5pbnRlbnNpdHksXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgdGhpcy5lbmdpbmUuY3R4LnNhdmUoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnBhcnRpY2xlc1tpXS5kcmF3KCk7XG4gICAgfVxuICAgIHRoaXMuZW5naW5lLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBlbmdpbmVNb3ZlKCkge1xuICAgIHRoaXMubW92ZSgpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnBhcnRpY2xlc1tpXS5tb3ZlKCk7XG4gICAgICBpZiAodGhpcy5wYXJ0aWNsZXNbaV0ubGlmZSA8IDApIHtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMucGFydGljbGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZW1vdmVTZWxmKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlU2VsZigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5naW5lLnNmeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmVuZ2luZS5zZnhzW2ldID09PSB0aGlzKSB7XG4gICAgICAgIHRoaXMuZW5naW5lLnNmeHMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnLi9lbmdpbmUnO1xuXG5leHBvcnQgY2xhc3MgU291bmQge1xuICBjb25zdHJ1Y3RvcihyZXNvdXJjZXMpIHtcbiAgICB0aGlzLnJlc291cmNlcyA9IHJlc291cmNlcztcbiAgICB0aGlzLm11c2ljT24gPSB0cnVlO1xuICAgIHRoaXMuc291bmRPbiA9IHRydWU7XG5cbiAgICB0aGlzLnNmeFZvbHVtZSA9IDAuMztcbiAgICB0aGlzLnNmeCA9IHtcbiAgICAgICdmaXJlLW9mZic6IHJlc291cmNlcy5nZXQoJ3NmeC1maXJlLW9mZicpLFxuICAgICAgJ2ljZS1wdXNoJzogcmVzb3VyY2VzLmdldCgnc2Z4LWljZS1wdXNoJyksXG4gICAgICBmYWxsOiByZXNvdXJjZXMuZ2V0KCdzZngtZmFsbCcpLFxuICAgICAgZmFsbGluZzogcmVzb3VyY2VzLmdldCgnc2Z4LWZhbGxpbmcnKSxcbiAgICAgICduZXctaWNlJzogcmVzb3VyY2VzLmdldCgnc2Z4LW5ldy1pY2UnKSxcbiAgICAgIGNsaW1iOiByZXNvdXJjZXMuZ2V0KCdzZngtY2xpbWInKSxcbiAgICAgICdpY2UtY29sbGlzaW9uJzogcmVzb3VyY2VzLmdldCgnc2Z4LWljZS1jb2xsaXNpb24nKSxcbiAgICAgICdzdGFnZS1lbnRlcic6IHJlc291cmNlcy5nZXQoJ3NmeC1zdGFnZS1lbnRlcicpLFxuICAgICAgZGFuZ2VyOiByZXNvdXJjZXMuZ2V0KCdzZngtZGFuZ2VyJyksXG4gICAgICAnaWNlLXJlbW92ZSc6IHJlc291cmNlcy5nZXQoJ3NmeC1pY2UtcmVtb3ZlJyksXG4gICAgICAnc3RhdGUtbGVhdmUnOiByZXNvdXJjZXMuZ2V0KCdzZngtc3RhdGUtbGVhdmUnKSxcbiAgICAgICdpY2UtZGlzYWJsZWQnOiByZXNvdXJjZXMuZ2V0KCdzZngtZGlzYWJsZWQnKSxcbiAgICB9O1xuICB9XG5cbiAgcGxheShzZngpIHtcbiAgICBpZiAoIXRoaXMuc291bmRPbikgcmV0dXJuO1xuICAgIHRoaXMuc2Z4W3NmeF0udm9sdW1lID0gdGhpcy5zZnhWb2x1bWU7XG4gICAgdGhpcy5zZnhbc2Z4XS5jdXJyZW50VGltZSA9IDA7XG4gICAgdGhpcy5zZnhbc2Z4XS5wbGF5KCkuY2F0Y2goKCkgPT4ge30pO1xuICB9XG5cbiAgcGxheU9uY2Uoc2Z4KSB7XG4gICAgaWYgKCF0aGlzLnNmeFtzZnhdLnBhdXNlZCkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5zb3VuZE9uKSByZXR1cm47XG4gICAgdGhpcy5zZnhbc2Z4XS52b2x1bWUgPSB0aGlzLnNmeFZvbHVtZTtcbiAgICB0aGlzLnNmeFtzZnhdLmN1cnJlbnRUaW1lID0gMDtcbiAgICB0aGlzLnNmeFtzZnhdLnBsYXkoKS5jYXRjaCgoKSA9PiB7fSk7XG4gIH1cblxuICBzdG9wKHNmeCkge1xuICAgIHRoaXMuc2Z4W3NmeF0ucGF1c2UoKTtcbiAgICB0aGlzLnNmeFtzZnhdLmN1cnJlbnRUaW1lID0gMDtcbiAgfVxuXG4gIHNvdW5kdHJhY2soKSB7XG4gICAgaWYgKCF0aGlzLm11c2ljT24pIHJldHVybjtcbiAgICB0aGlzLm11c2ljID0gdGhpcy5yZXNvdXJjZXMuZ2V0KCdzZngtbXVzaWMtc3BhcmtzJyk7XG4gICAgdGhpcy5tdXNpYy5tdXRlZCA9IGZhbHNlO1xuICAgIHRoaXMubXVzaWMudm9sdW1lID0gMC4yO1xuICAgIHRoaXMubXVzaWMubG9vcCA9IHRydWU7XG4gICAgdGhpcy5tdXNpYy5wbGF5KCkuY2F0Y2goKCkgPT4ge30pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi9zdHJ1Y3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgLyoqXHJcbiAgICogQmFzZSBjbGFzcyBvZiB0aGUgc3ByaXRlXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGVuZ2luZSAgIEVuZ2luZSBFbmdpbmVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdHggICAgIFBvc2l0aW9uIHRpbGUgeCBpbiB0aGUgbWFwXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHR5ICAgICBQb3NpdGlvbiB0aWxlIHkgaW4gdGhlIG1hcFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAgV2lkdGggb2YgdGhlIHNwcml0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIHRoZSBzcHJpdGVcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihpZCwgZW5naW5lLCB0eCwgdHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5jdHggPSBlbmdpbmUuY3R4O1xyXG4gICAgdGhpcy5jb3JuZXJzID0gbmV3IFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLnNvbGlkID0gdHJ1ZTtcclxuICAgIHRoaXMubW92aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSBmYWxzZTtcclxuICAgIHRoaXMuc3BlZWQgPSA0O1xyXG4gICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5Nb3ZlU3RhbmQ7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcclxuICAgIHRoaXMueFRpbGUgPSB0eDtcclxuICAgIHRoaXMueVRpbGUgPSB0eTtcclxuICAgIHRoaXMueCA9IHRoaXMueFRpbGUgKiBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgdGhpcy55ID0gdGhpcy55VGlsZSAqIENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFNldHMgc3ByaXRlIHN0YXRlc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGF0ZSAgQ29uc3RhbnQgb2YgdGhlIHN0YXRlXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBtb3ZpbmcgVHJ1ZSBpZiBzcHJpdGUgaXMgbW92aW5nXHJcbiAgICovXHJcbiAgc2V0U3RhdGUoc3RhdGUsIG1vdmluZykge1xyXG4gICAgdGhpcy5tb3ZpbmcgPSB0eXBlb2YgbW92aW5nID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogbW92aW5nO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgdGhpcy5jb3VudGVyID0gMDtcclxuICB9XHJcblxyXG4gIGdldFRpbGUodHgsIHR5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbmdpbmUubWFwLmdldFRpbGUodHgsIHR5KTtcclxuICB9XHJcblxyXG4gIGlzU3ByaXRlQXQodHgsIHR5KSB7XHJcbiAgICByZXR1cm4gdGhpcy54VGlsZSA9PT0gdHggJiYgdGhpcy55VGlsZSA9PT0gdHk7XHJcbiAgfVxyXG5cclxuICBzcHJpdGVUeXBlQXQodHgsIHR5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHR4LCB0eSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb3JuZXJzKCkge1xyXG4gICAgdGhpcy5jb3JuZXJzLnUgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlIC0gMSk7XHJcbiAgICB0aGlzLmNvcm5lcnMuZCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUsIHRoaXMueVRpbGUgKyAxKTtcclxuICAgIHRoaXMuY29ybmVycy5sID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSAtIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgdGhpcy5jb3JuZXJzLnIgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlICsgMSwgdGhpcy55VGlsZSk7XHJcbiAgICB0aGlzLmNvcm5lcnMudWwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlIC0gMSwgdGhpcy55VGlsZSAtIDEpO1xyXG4gICAgdGhpcy5jb3JuZXJzLnVyID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIDEsIHRoaXMueVRpbGUgLSAxKTtcclxuICAgIHRoaXMuY29ybmVycy5kbCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgLSAxLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmNvcm5lcnMuZHIgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlICsgMSwgdGhpcy55VGlsZSArIDEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICB0aGlzLnhUaWxlID0gTWF0aC5mbG9vcih0aGlzLnggLyBDb25zdHMuVGlsZVdpZHRoKTtcclxuICAgIHRoaXMueVRpbGUgPSBNYXRoLmZsb29yKHRoaXMueSAvIENvbnN0cy5UaWxlV2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgbW92ZSgpIHt9XHJcblxyXG4gIGVuZ2luZU1vdmUoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUNvcm5lcnMoKTtcclxuICAgIHRoaXMubW92ZSgpO1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gIH1cclxufVxyXG4iLCIvKipcbiAqIFN0b3JlcyBwb3NpdGlvbiBvZiB0aGUgY29ybmVycyBhbmQgdmVydGljZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51ID0gMDtcbiAgICB0aGlzLmQgPSAwO1xuICAgIHRoaXMubCA9IDA7XG4gICAgdGhpcy5yID0gMDtcbiAgICB0aGlzLnVsID0gMDtcbiAgICB0aGlzLnVyID0gMDtcbiAgICB0aGlzLmRsID0gMDtcbiAgICB0aGlzLmRyID0gMDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29vciB7XG4gIGNvbnN0cnVjdG9yKHR4LCB0eSkge1xuICAgIHRoaXMueFRpbGUgPSB0eDtcbiAgICB0aGlzLnlUaWxlID0gdHk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZyb3N0IHtcbiAgY29uc3RydWN0b3IobGVmdCwgcmlnaHQpIHtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBUZWxlcG9ydCBleHRlbmRzIEFuaW1TcHJpdGUge1xuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSkge1xuICAgIHN1cGVyKENvbnN0cy5PYmplY3RUZWxlcG9ydCwgZW5naW5lLCAnaW1nX3RlbGVwb3J0JywgdHgsIHR5LCBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoLCAwLCAwLCAwLCAzLCB0cnVlKTtcbiAgICB0aGlzLmlzU29saWQgPSB0cnVlO1xuICAgIHRoaXMuYW5pbURlbGF5ID0gQ29uc3RzLkFuaW1EZWZhdWx0RGVsYXkgKiAyO1xuICAgIHRoaXMub25GaXJlID0gZmFsc2U7XG4gICAgdGhpcy5hbmltUm93ID0gMDtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgaWYgKCF0aGlzLm1vdmluZykge1xuICAgICAgdGhpcy5jb2xsaXNpb25zKCk7XG4gICAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcbiAgICAgICAgdGhpcy5kb0Rvd24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29sbGlzaW9ucygpIHt9XG5cbiAgZ3Jhdml0eSgpIHtcbiAgICBpZiAoIXRoaXMuY29ybmVycy5kKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZG9Eb3duKCkge1xuICAgIHRoaXMuY291bnRlciArPSA0O1xuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xuICAgICAgdGhpcy55ICs9IDQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgc3VwZXIuZHJhdygpO1xuICAgIHRoaXMuZHJhd0Zyb3N0KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIFRpbGVNYXAge1xuICAvKipcbiAgICogVGlsZW1hcCBjbGFzc1xuICAgKiBAcGFyYW0ge29iamVjdH0gZW5naW5lIEVuZ2luZVxuICAgKiBAcGFyYW0ge29iamVjdH0gbWFwICBNYXRyaXggb2YgdGhlIG1hcFxuICAgKi9cblxuICBjb25zdHJ1Y3RvcihlbmdpbmUsIG1hcCwgdGhlbWUpIHtcbiAgICB0aGlzLmN0eCA9IGVuZ2luZS5jdHg7XG4gICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgdGhpcy50aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMudGlsZVdpZHRoID0gQ29uc3RzLlRpbGVXaWR0aDtcbiAgICB0aGlzLnRpbGVIZWlnaHQgPSBDb25zdHMuVGlsZVdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXAubGVuZ3RoIC0gMTtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5tYXBbMF0ubGVuZ3RoIC0gMTtcbiAgICB0aGlzLnRpbGVzSW1hZ2UgPSB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCd0aWxlbWFwJyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbnRlbnQgb2YgdGhlIHRpbGUgaW5zaWRlIHRoZSBtYXRyaXhcbiAgICogaWYgcG9zaXRpb24gb3V0IG9mIGJvdW5kcyByZXR1cm5zIENvbnN0cy5PQkpFQ1RfT1VUXG4gICAqIEBwYXJhbSAge251bWJlcn0geSBwb3NpdGlvblxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHggcG9zaXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfSAgIENvbnRlbnQgb2YgdGhlIHRpbGVcbiAgICovXG4gIGdldFRpbGUoeCwgeSkge1xuICAgIGlmICh4IDwgMCB8fCB5IDwgMCB8fCB4ID4gdGhpcy53aWR0aCB8fCB5ID4gdGhpcy5oZWlnaHQpIHtcbiAgICAgIHJldHVybiBDb25zdHMuT2JqZWN0T3V0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXBbeV1beF07XG4gIH1cbiAgLyoqXG4gICAqIERyYXdzIHRoZSBtYXBcbiAgICogQHJldHVybiB7bm9uZX1cbiAgICovXG4gIGRyYXcoKSB7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMud2lkdGg7ICsraSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gdGhpcy5oZWlnaHQ7ICsraikge1xuICAgICAgICBsZXQgdGlsZVR5cGUgPSBDb25zdHMuVGlsZUJhY2tncm91bmQ7XG4gICAgICAgIGlmICh0aGlzLm1hcFtqXVtpXSA9PT0gMSkge1xuICAgICAgICAgIGlmICghdGhpcy5nZXRUaWxlKGkgLSAxLCBqKSAmJiAhdGhpcy5nZXRUaWxlKGkgKyAxLCBqKSkge1xuICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZUJvdGhTaWRlcztcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmdldFRpbGUoaSAtIDEsIGopKSB7XG4gICAgICAgICAgICB0aWxlVHlwZSA9IENvbnN0cy5UaWxlTGVmdFNpZGU7XG4gICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5nZXRUaWxlKGkgKyAxLCBqKSkge1xuICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZVJpZ2h0U2lkZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZU1pZGRsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgIHRoaXMudGlsZXNJbWFnZSxcbiAgICAgICAgICB0aWxlVHlwZSxcbiAgICAgICAgICB0aGlzLnRoZW1lICogdGhpcy50aWxlSGVpZ2h0LFxuICAgICAgICAgIHRoaXMudGlsZVdpZHRoLFxuICAgICAgICAgIHRoaXMudGlsZUhlaWdodCxcbiAgICAgICAgICBpICogdGhpcy50aWxlV2lkdGgsXG4gICAgICAgICAgaiAqIHRoaXMudGlsZUhlaWdodCxcbiAgICAgICAgICB0aGlzLnRpbGVXaWR0aCxcbiAgICAgICAgICB0aGlzLnRpbGVIZWlnaHQsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIG1vdmUoKSB7fVxuXG4gIGVuZ2luZU1vdmUoKSB7fVxufVxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBUaWxlID0gT2JqZWN0LmZyZWV6ZSh7XG4gIHRpbGVzOiB7XG4gICAgW0NvbnN0cy5PYmplY3RCYWNrZ3JvdW5kXToge1xuICAgICAgc29saWQ6IGZhbHNlLFxuICAgICAgZnJlZXplOiBmYWxzZSxcbiAgICB9LFxuICAgIFtDb25zdHMuT2JqZWN0T3V0XToge1xuICAgICAgc29saWQ6IHRydWUsXG4gICAgICBmcmVlemU6IGZhbHNlLFxuICAgIH0sXG4gICAgW0NvbnN0cy5PYmplY3RQbGF5ZXJdOiB7XG4gICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgIGZyZWV6ZTogZmFsc2UsXG4gICAgfSxcbiAgICBbQ29uc3RzLk9iamVjdEljZV06IHtcbiAgICAgIHNvbGlkOiB0cnVlLFxuICAgICAgZnJlZXplOiBmYWxzZSxcbiAgICB9LFxuICAgIFtDb25zdHMuT2JqZWN0TWV0YWxdOiB7XG4gICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgIGZyZWV6ZTogdHJ1ZSxcbiAgICB9LFxuICAgIFtDb25zdHMuT2JqZWN0V2FsbF06IHtcbiAgICAgIHNvbGlkOiB0cnVlLFxuICAgICAgZnJlZXplOiB0cnVlLFxuICAgIH0sXG4gICAgW0NvbnN0cy5PYmplY3RGaXJlXToge1xuICAgICAgc29saWQ6IGZhbHNlLFxuICAgICAgZnJlZXplOiBmYWxzZSxcbiAgICB9LFxuICAgIFtDb25zdHMuT2JqZWN0SmFyXToge1xuICAgICAgc29saWQ6IHRydWUsXG4gICAgICBmcmVlemU6IHRydWUsXG4gICAgfSxcbiAgICBbQ29uc3RzLk9iamVjdFRlbGVwb3J0XToge1xuICAgICAgc29saWQ6IHRydWUsXG4gICAgICBmcmVlemU6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBpc1NvbGlkOiBmdW5jdGlvbiAoaWQpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudGlsZXNbaWRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVTkRFRklORUQgT04gaXNTb2xpZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudGlsZXNbaWRdLnNvbGlkO1xuICAgIH1cbiAgfSxcblxuICBpc0ZyZWV6YWJsZTogZnVuY3Rpb24gKGlkKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVzW2lkXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVU5ERUZJTkVEIE9OIGlzRnJlZXphYmxlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy50aWxlc1tpZF0uZnJlZXplO1xuICAgIH1cbiAgfSxcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBGaXJlIH0gZnJvbSAnLi9maXJlJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IHsgSmFyIH0gZnJvbSAnLi9qYXInO1xuaW1wb3J0IHsgTWV0YWwgfSBmcm9tICcuL21ldGFsJztcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gJy4vcmVzb3VyY2VzJztcbmltcG9ydCB7IFRlbGVwb3J0IH0gZnJvbSAnLi90ZWxlcG9ydCc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJyk7XG5cbiAgZnVuY3Rpb24gb25TdGFydENsaWNrKCkge1xuICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGxvYWRlci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBQcmVsb2FkR2FtZSgpO1xuICAgIHdpbmRvdy5maXJlbmljZSA9IHRydWU7XG4gIH1cbiAgaWYgKHdpbmRvdy5GSVJFTklDRV9FRElUT1JfTU9ERSkge1xuICAgIG9uU3RhcnRDbGljaygpO1xuICB9XG4gIGxvYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9uU3RhcnRDbGljaygpKTtcbn0pO1xuXG5mdW5jdGlvbiBQcmVsb2FkR2FtZSgpIHtcbiAgY29uc3QgcmVzb3VyY2VzID0gbmV3IFJlc291cmNlcygpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICd0aWxlbWFwJywgJ2ltYWdlcy90aWxlbWFwLnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfaWNlJywgJ2ltYWdlcy9pY2UucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19qYXInLCAnaW1hZ2VzL2phci5wbmcnKTtcbiAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX2ZpcmUnLCAnaW1hZ2VzL2ZpcmUucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19kb25hJywgJ2ltYWdlcy9kb25hLnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfaW50cm8nLCAnaW1hZ2VzL2ludHJvLnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfbWV0YWwnLCAnaW1hZ2VzL21ldGFsLnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfdGVsZXBvcnQnLCAnaW1hZ2VzL3RlbGVwb3J0LnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdmcm9zdCcsICdpbWFnZXMvZnJvemVuLnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtaWNlLXB1c2gnLCAnc291bmRzL3NmeC1pY2UtcHVzaC5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWZpcmUtb2ZmJywgJ3NvdW5kcy9zZngtZmlyZS1vZmYubXAzJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1mYWxsaW5nJywgJ3NvdW5kcy9zZngtZmFsbGluZy5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LW5ldy1pY2UnLCAnc291bmRzL3NmeC1uZXctaWNlLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtY2xpbWInLCAnc291bmRzL3NmeC1jbGltYi5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWljZS1jb2xsaXNpb24nLCAnc291bmRzL3NmeC1pY2UtY29sbGlzaW9uLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtc3RhZ2UtZW50ZXInLCAnc291bmRzL3NmeC1zdGFnZS1lbnRlci5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWRhbmdlcicsICdzb3VuZHMvc2Z4LWRhbmdlci5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWljZS1yZW1vdmUnLCAnc291bmRzL3NmeC1pY2UtcmVtb3ZlLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtc3RhdGUtbGVhdmUnLCAnc291bmRzL3NmeC1zdGF0ZS1sZWF2ZS5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWRpc2FibGVkJywgJ3NvdW5kcy9zZngtZGlzYWJsZWQubXAzJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1mYWxsJywgJ3NvdW5kcy9zZngtZmFsbC5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LW11c2ljLXNwYXJrcycsICdtdXNpYy9zcGFya3MubXAzJyk7XG5cbiAgcmVzb3VyY2VzLnJlYWR5KCgpID0+IHtcbiAgICBTdGFydEdhbWUocmVzb3VyY2VzKTtcbiAgICBDaGVja0VkaXRvcigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZExldmVsRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGxldCBsdmwgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdsdmwnKTtcbiAgZ2FtZS5lbmdpbmUubGV2ZWwgPSBwYXJzZUludChsdmwsIDEwKTtcbiAgZ2FtZS5lbmdpbmUuc2NlbmUubG9hZChnYW1lLmVuZ2luZS5sZXZlbCk7XG59XG5cbmZ1bmN0aW9uIFN0YXJ0R2FtZShyZXNvdXJjZXMpIHtcbiAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgbGV0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMsIHJlc291cmNlcyk7XG4gIHdpbmRvdy5nYW1lID0gZ2FtZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLmx2bCcpLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTGV2ZWxGcm9tRXZlbnQpO1xuICB9KTtcbiAgbGV0IGx2bFNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsLXNlbGVjdG9yJyk7XG4gIGx2bFNlbGVjdG9yLnN0eWxlLm9wYWNpdHkgPSAxO1xufVxuXG5mdW5jdGlvbiBDaGVja0VkaXRvcigpIHtcbiAgaWYgKHdpbmRvdy5GSVJFTklDRV9FRElUT1JfTU9ERSkge1xuICAgIGdhbWUuZW5naW5lLnNvdW5kLm11c2ljT24gPSBmYWxzZTtcbiAgICBnYW1lLmVuZ2luZS5zb3VuZC5zb3VuZE9uID0gZmFsc2U7XG4gICAgZ2FtZS5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVQbGF5O1xuICAgIGdhbWUuZW5naW5lLmVkaXRvciA9IHRydWU7XG4gICAgZ2FtZS5lbmdpbmUua2V5Ym9hcmQuaW50cm8gPSBmYWxzZTtcbiAgICBnYW1lLmVuZ2luZS5zb3VuZC5tdXNpYy5wYXVzZSgpO1xuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCB4VGlsZSA9IE1hdGguZmxvb3IoZS5vZmZzZXRYIC8gMzIpO1xuICAgICAgY29uc3QgeVRpbGUgPSBNYXRoLmZsb29yKGUub2Zmc2V0WSAvIDMyKTtcbiAgICAgIGlmICh0b29sIDwgMikge1xuICAgICAgICBnYW1lLmVuZ2luZS5tYXAubWFwW3lUaWxlXVt4VGlsZV0gPSB0b29sO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0UGxheWVyOlxuICAgICAgICAgICAgZ2FtZS5lbmdpbmUucGxheWVyLnggPSB4VGlsZSAqIDMyO1xuICAgICAgICAgICAgZ2FtZS5lbmdpbmUucGxheWVyLnkgPSB5VGlsZSAqIDMyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0SWNlOlxuICAgICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkSWNlQmxvY2soeFRpbGUsIHlUaWxlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdE1ldGFsOlxuICAgICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBNZXRhbChnYW1lLmVuZ2luZSwgeFRpbGUsIHlUaWxlLCAxKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RGaXJlOlxuICAgICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBGaXJlKGdhbWUuZW5naW5lLCB4VGlsZSwgeVRpbGUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdEphcjpcbiAgICAgICAgICAgIGdhbWUuZW5naW5lLmFkZFNwcml0ZShuZXcgSmFyKGdhbWUuZW5naW5lLCB4VGlsZSwgeVRpbGUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdFRlbGVwb3J0OlxuICAgICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBUZWxlcG9ydChnYW1lLmVuZ2luZSwgeFRpbGUsIHlUaWxlKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLXNlbGVjdG9yJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICBnYW1lLmVuZ2luZS5tYXAudGhlbWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgZS50YXJnZXQuYmx1cigpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zYXZlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHh0LWxldmVsJykudmFsdWUgPSBKU09OLnN0cmluZ2lmeShnYW1lLmVuZ2luZS5zY2VuZS5zYXZlKCkpO1xuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=