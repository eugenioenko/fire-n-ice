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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
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








window.addEventListener('load', async () => {
  if (window.FIRENICE_EDITOR_MODE) {
    doStartClick();
  }
  loader.addEventListener('click', () => doStartClick());
});

async function doStartClick() {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
  loader.style.opacity = 0;
  const resources = await loadGameResources();
  startGame(resources);
  if (window.FIRENICE_EDITOR_MODE) {
    loadGameEditor();
  }
  window.firenice = true;
}

async function loadGameResources() {
  let resolve;
  const promise = new Promise(res => (resolve = res));
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
    resolve(resources);
  });

  return promise;
}

function loadLevelFromEvent(event) {
  let lvl = event.target.getAttribute('lvl');
  game.engine.level = parseInt(lvl, 10);
  game.engine.scene.load(game.engine.level);
}

function startGame(resources) {
  let canvas = document.getElementById('canvas');
  let game = new _game__WEBPACK_IMPORTED_MODULE_2__.Game(canvas, resources);
  window.game = game;
  document.querySelectorAll('button.lvl').forEach(btn => {
    btn.addEventListener('click', loadLevelFromEvent);
  });
  let lvlSelector = document.getElementById('level-selector');
  lvlSelector.style.opacity = 1;
}

function loadGameEditor() {
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1Rk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLGdEQUFnRDtBQUN4RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLDZDQUE2QztBQUNyRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDJCQUEyQjtBQUNuQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDJCQUEyQjtBQUNuQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLGlEQUFpRDtBQUN6RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLDZDQUE2QztBQUNyRCxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDZDQUE2QztBQUNyRCxRQUFRLDZDQUE2QztBQUNyRCxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDhCQUE4QjtBQUN0QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDZDQUE2QztBQUNyRCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDZCQUE2QjtBQUNyQyxRQUFRLDRCQUE0QjtBQUNwQyxRQUFRLDRCQUE0QjtBQUNwQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDZCQUE2QjtBQUNyQyxRQUFRLDJCQUEyQjtBQUNuQyxRQUFRLDBCQUEwQjtBQUNsQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDZCQUE2QjtBQUNyQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLCtDQUErQztBQUN2RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDZDQUE2QztBQUNyRCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLDhDQUE4QztBQUN0RCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDZDQUE2QztBQUNyRCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDZDQUE2QztBQUNyRCxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLCtDQUErQztBQUN2RCxRQUFRLCtDQUErQztBQUN2RCxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDZDQUE2QztBQUNyRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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ckI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhDQUFNO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsYUFBYSw4Q0FBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhDQUFNO0FBQ25CO0FBQ0E7QUFDQSxhQUFhLDhDQUFNO0FBQ25CLG9DQUFvQyx5Q0FBSztBQUN6QztBQUNBLGFBQWEsOENBQU07QUFDbkIsb0NBQW9DLHVDQUFJO0FBQ3hDO0FBQ0EsYUFBYSw4Q0FBTTtBQUNuQixvQ0FBb0MscUNBQUc7QUFDdkM7QUFDQSxhQUFhLDhDQUFNO0FBQ25CLG9DQUFvQywrQ0FBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvYW5pbXNwcml0ZS5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL2ZpcmUuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvaWNlLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvamFyLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9sZXZlbHMuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9tZXRhbC5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL3Jlc291cmNlcy5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL3NjZW5lLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvc2Z4LmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvc291bmQuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy90ZWxlcG9ydC5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL3RpbGVtYXAuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy90aWxlcy5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpcmUtbi1pY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpcmUtbi1pY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maXJlLW4taWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9maXJlbmljZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltU3ByaXRlIGV4dGVuZHMgU3ByaXRlIHtcclxuICAvKipcclxuICAgKiBBbmltYXRlZCBTcHJpdGUsIGluaGVyaXRzIGZyb20gU3ByaXRlLlxyXG4gICAqIEFkZHMgZHJhd2luZyBvZiBwaWN0dXJlcyBpbiB0aGUgYm9keSBvZiBzcHJpdGVcclxuICAgKiBAcGFyYW0ge29iamVjdH0gZW5naW5lICAgIEVuZ2luZSBFbmdpbmVcclxuICAgKiBAcGFyYW0ge29iamVjdH0gaW1hZ2UgICBEb20gaW1hZ2Ugb2JqZWN0IChpbWcgc3JjPSlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdHggICAgICBUaWxlIFggcG9zaXRpb25cclxuICAgKiBAcGFyYW0ge251bWJlcn0gdHkgICAgICBUaWxlIFkgcG9zaXRpb25cclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggICBXaWR0aCBvZiB0aGUgc3ByaXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAgSGVpZ2h0IG9mIHRoZSBzcHJpdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0WCBPZmZzZXQgWCBvZiBkcmF3aW5nIHRoZSBwaWN0dXJlIGludG8gdGhlIGNhbnZhc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRZIE9mZnNldCBZIG9mIGRyYXdpbmcgdGhlIHBpY3R1cmUgaW50byB0aGUgY2FudmFzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0ICAgQW5pbWF0aW9uIGZyYW1lIHN0YXJ0XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCAgICAgQW5pbWF0aW9uIGZyYW1lIGVuZFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCAgIFJlcGVhdCBhbmltYXRpb25cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihpZCwgZW5naW5lLCBpbWFnZSwgdHgsIHR5LCB3aWR0aCwgaGVpZ2h0LCBvZmZzZXRYLCBvZmZzZXRZLCBzdGFydCwgZW5kLCBsb29wKSB7XHJcbiAgICBzdXBlcihpZCwgZW5naW5lLCB0eCwgdHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy5pbWFnZSA9IHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoaW1hZ2UpO1xyXG4gICAgdGhpcy5hbmltTG9vcCA9IGxvb3A7XHJcbiAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgdGhpcy5hbmltRW5kID0gZW5kO1xyXG4gICAgdGhpcy5hbmltQ291bnQgPSAwO1xyXG4gICAgdGhpcy5hbmltRGVsYXkgPSBDb25zdHMuQW5pbURlZmF1bHREZWxheTtcclxuICAgIHRoaXMuYW5pbURlbGF5Q291bnQgPSAwO1xyXG4gICAgdGhpcy5hbmltUm93ID0gMDtcclxuICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFg7XHJcbiAgICB0aGlzLm9mZnNldFkgPSBvZmZzZXRZO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgc3ByaXRlIGFuaW1hdGlvbiBmcmFtZXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgU3RhcnQgZnJhbWUgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgICBFbmQgZnJhbWUgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCAgSWYgdHJ1ZSwgYW5pbWF0aW9uIHdpbGwgbG9vcFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgICBSb3cgb2YgdGhlIGZyYW1lcyBpbiB0aGUgc3ByaXRlIGltYWdlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IERlbGF5IGJldHdlZW4gZWFjaCBmcmFtZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSAgU2V0cyBhbGwgdGhlIG5ldyB2YWx1ZXMgb25seSBvbmUgdGltZS5cclxuICAgKi9cclxuICBzZXRBbmltKHN0YXJ0LCBlbmQsIGxvb3AsIHJvdywgZGVsYXksIG9uY2UpIHtcclxuICAgIG9uY2UgPSB0eXBlb2Ygb25jZSA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IG9uY2U7XHJcbiAgICBkZWxheSA9IHR5cGVvZiBkZWxheSA9PT0gJ3VuZGVmaW5lZCcgPyBDb25zdHMuQW5pbURlZmF1bHREZWxheSA6IGRlbGF5O1xyXG4gICAgcm93ID0gdHlwZW9mIHJvdyA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmFuaW1Sb3cgOiByb3c7XHJcbiAgICBpZiAoIW9uY2UpIHtcclxuICAgICAgdGhpcy5hbmltU3RhcnQgPSBzdGFydDtcclxuICAgICAgdGhpcy5hbmltRW5kID0gZW5kO1xyXG4gICAgICB0aGlzLmFuaW1Db3VudCA9IHN0YXJ0O1xyXG4gICAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgICAgdGhpcy5hbmltRGVsYXkgPSBkZWxheTtcclxuICAgICAgdGhpcy5hbmltUm93ID0gcm93O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuYW5pbVN0YXJ0ICE9PSBzdGFydCB8fCB0aGlzLmFuaW1FbmQgIT09IGVuZCB8fCB0aGlzLmFuaW1Mb29wICE9PSBsb29wIHx8IHRoaXMuYW5pbVJvdyAhPT0gcm93KSB7XHJcbiAgICAgICAgdGhpcy5hbmltU3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5hbmltQ291bnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgICAgICB0aGlzLmFuaW1EZWxheSA9IGRlbGF5O1xyXG4gICAgICAgIHRoaXMuYW5pbVJvdyA9IHJvdztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBEcmF3cyB0aGUgZnJhbWUgb2YgdGhlIHNwcml0ZSBpbiB0aGUgY2FudmFzXHJcbiAgICovXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgdGhpcy5hbmltQ291bnQgKiB0aGlzLndpZHRoLFxyXG4gICAgICB0aGlzLmFuaW1Sb3cgKiB0aGlzLmhlaWdodCxcclxuICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgIHRoaXMueCArIHRoaXMub2Zmc2V0WCxcclxuICAgICAgdGhpcy55ICsgdGhpcy5vZmZzZXRZLFxyXG4gICAgICB0aGlzLndpZHRoLFxyXG4gICAgICB0aGlzLmhlaWdodCxcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuYW5pbURlbGF5Q291bnQrKyA+IHRoaXMuYW5pbURlbGF5KSB7XHJcbiAgICAgIHRoaXMuYW5pbUNvdW50ICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLmFuaW1Db3VudCA+IHRoaXMuYW5pbUVuZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1Mb29wKSB7XHJcbiAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHRoaXMuYW5pbVN0YXJ0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHRoaXMuYW5pbUVuZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3RnJvc3QoKSB7XHJcbiAgICBjb25zdCBsZWZ0U3ByaXRlID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSAtIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgaWYgKGxlZnRTcHJpdGUgJiYgbGVmdFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJiBsZWZ0U3ByaXRlLmZyb3plbi5yaWdodCkge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSwgdGhpcy54VGlsZSAqIHRoaXMud2lkdGggLSA3LCB0aGlzLnlUaWxlICogdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmlnaHRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlICsgMSwgdGhpcy55VGlsZSk7XHJcbiAgICBpZiAocmlnaHRTcHJpdGUgJiYgcmlnaHRTcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiYgcmlnaHRTcHJpdGUuZnJvemVuLmxlZnQpIHtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoJ2Zyb3N0JyksXHJcbiAgICAgICAgKHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCkgKiB0aGlzLndpZHRoIC0gNyxcclxuICAgICAgICB0aGlzLnlUaWxlICogdGhpcy5oZWlnaHQsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBDb25zdHMgPSBPYmplY3QuZnJlZXplKHtcbiAgVGlsZVdpZHRoOiAzMixcbiAgTW92ZVN0YW5kOiAwLFxuICBNb3ZlTGVmdDogMSxcbiAgTW92ZVJpZ2h0OiAyLFxuICBNb3ZlRG93bjogMyxcbiAgTW92ZVVwOiA0LFxuICBNb3ZlVHVybjogNSxcbiAgTW92ZUljZU1ha2U6IDYsXG4gIE1vdmVJY2VSZW1vdmU6IDcsXG4gIE1vdmVJY2VNb3Zpbmc6IDgsXG4gIE1vdmVJY2VDaGVjazogOSxcbiAgTW92ZVJpcDogMTAsXG4gIE1vdmVQdXNoOiA4LFxuICBNb3ZlSWNlRmFpbDogMTEsXG4gIE1vdmVMZXZlbEV4aXQ6IDEyLFxuICBNb3ZlTGV2ZWxFbnRlcjogMTMsXG4gIE1vdmVUZWxlcG9ydE91dDogMTQsXG4gIE1vdmVUZWxlcG9ydEluOiAxNSxcbiAgRGlyTGVmdDogLTEsXG4gIERpclJpZ2h0OiAxLFxuICBBbmltRGVmYXVsdERlbGF5OiAyLFxuICBBbmltRnJhbWVDb3VudDogMTYsXG4gIEFuaW1MZWZ0Um93OiAxLFxuICBBbmltUmlnaHRSb3c6IDAsXG4gIEFuaW1SdW5TdGFydDogMCxcbiAgQW5pbVJ1bkVuZDogMyxcbiAgQW5pbVN0YW5kOiA0LFxuICBBbmltVHVyblN0YXJ0OiA0LFxuICBBbmltVHVybkVuZDogNyxcbiAgQW5pbUZhbGxTdGFydDogOCxcbiAgQW5pbUZhbGxFbmQ6IDksXG4gIEFuaW1CaWdGYWxsU3RhcnQ6IDEwLFxuICBBbmltQmlnRmFsbEVuZDogMTEsXG4gIEFuaW1QdXNoU3RhcnQ6IDEyLFxuICBBbmltUHVzaEVuZDogMTMsXG4gIEFuaW1KdW1wU3RhcnQ6IDE0LFxuICBBbmltSnVtcEVuZDogMTUsXG4gIEFuaW1TdGFuZFN0YXJ0OiAxNixcbiAgQW5pbVN0YW5kRW5kOiAxNyxcbiAgQW5pbUljZVN0YXJ0OiAxOCxcbiAgQW5pbUljZUVuZDogMTksXG4gIEFuaW1Dcm91Y2hTdGFydDogMjAsXG4gIEFuaW1Dcm91Y2hFbmQ6IDIyLFxuICBBbmltUmlwU3RhcnQ6IDIzLFxuICBBbmltUmlwRW5kOiAyNCxcbiAgQW5pbVNsZWVwU3RhcnQ6IDI1LFxuICBBbmltU2xlZXBFbmQ6IDI2LFxuICBUaWxlQmFja2dyb3VuZDogMCxcbiAgVGlsZUJvdGhTaWRlczogMzIsXG4gIFRpbGVMZWZ0U2lkZTogNjQsXG4gIFRpbGVNaWRkbGU6IDk2LFxuICBUaWxlUmlnaHRTaWRlOiAxMjgsXG4gIE9iamVjdE91dDogLTEsXG4gIE9iamVjdEJhY2tncm91bmQ6IDAsXG4gIE9iamVjdFdhbGw6IDEsXG4gIE9iamVjdEljZTogMyxcbiAgT2JqZWN0TWV0YWw6IDQsXG4gIE9iamVjdEphcjogNSxcbiAgT2JqZWN0RmlyZTogNixcbiAgT2JqZWN0UGxheWVyOiA3LFxuICBPYmplY3RUZWxlcG9ydDogOCxcbiAgR2FtZVN0YXRlUGxheTogMSxcbiAgR2FtZVN0YXRlSW50cm86IDIsXG4gIENvbG9yR3JlZW46ICcxMjQsIDIzOCwgNjYnLFxuICBDb2xvckJsdWU6ICcxMjIsIDIxMSwgMjU1JyxcbiAgQ29sb3JPcmFuZ2U6ICcyNTUsIDg4LCAzMycsXG4gIENvbG9yUmVkOiAnMjU1LCAxMzUsIDEyNCcsXG4gIENvbG9yV2hpdGU6ICcyNTUsIDI1NSwgMjU1Jyxcbn0pO1xuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRnJvc3QgfSBmcm9tICcuL3N0cnVjdCc7XG5pbXBvcnQgeyBJY2UgfSBmcm9tICcuL2ljZSc7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4va2V5Ym9hcmQnO1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSAnLi9zb3VuZCc7XG5pbXBvcnQgeyBTcGFya3MgfSBmcm9tICcuL3NmeCc7XG4vKipcbiAqIEVuZ2luZSBMb29wXG4gKi9cbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIHJlc291cmNlcykge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3dpZHRoID0gY2FudmFzLndpZHRoO1xuICAgIHRoaXMuY2hlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgdGhpcy5yZXNvdXJjZXMgPSByZXNvdXJjZXM7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuc3ByaXRlcyA9IFtdO1xuICAgIHRoaXMuc2Z4cyA9IFtdO1xuICAgIHRoaXMucGxheWVyID0ge307XG4gICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgdGhpcy5rZXlib2FyZCA9IG5ldyBLZXlib2FyZCgpO1xuICAgIHRoaXMuc291bmQgPSBuZXcgU291bmQocmVzb3VyY2VzKTtcbiAgICB0aGlzLnNjZW5lID0gbmV3IFNjZW5lKHRoaXMpO1xuICAgIHRoaXMuZWRpdG9yID0gZmFsc2U7XG4gICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA9IDA7XG4gICAgY29uc3QgbGV2ZWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGV2ZWwnKTtcbiAgICBpZiAobGV2ZWwgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubGV2ZWwgPSBwYXJzZUludChsZXZlbCwgMTApO1xuICAgIH1cbiAgICB0aGlzLnNjZW5lLmxvYWQodGhpcy5sZXZlbCk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmN3aWR0aCwgdGhpcy5jaGVpZ2h0KTtcbiAgICB0aGlzLm1hcC5kcmF3KCk7XG4gICAgLy8gcmV2ZXJzZSBsb29wLCBwbGF5ZXIgZHJhd3MgbGFzdFxuICAgIGZvciAobGV0IGkgPSB0aGlzLnNwcml0ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRoaXMuc3ByaXRlc1tpXS5kcmF3KCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZnhzLmxlbmd0aDsgKytpKSB7XG4gICAgICB0aGlzLnNmeHNbaV0uZHJhdygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJztcbiAgICAgIHRoaXMuY3R4LnN0cm9rZVdpZHRoID0gMTtcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmN3aWR0aDsgeCArPSAzMikge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuY2hlaWdodDsgeSArPSAzMikge1xuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVJlY3QoeCwgeSwgeCArIDMyLCB5ICsgMzIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gIH1cblxuICBjb2xsaXNpb24oKSB7XG4gICAgY29uc3QgZmlyZXMgPSB0aGlzLnNwcml0ZXMuZmlsdGVyKHNwcml0ZSA9PiBzcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RGaXJlKTtcbiAgICBpZiAoIWZpcmVzLmxlbmd0aCAmJiAhdGhpcy5lZGl0b3IgJiYgdGhpcy5wbGF5ZXIuc3RhdGUgIT09IENvbnN0cy5Nb3ZlTGV2ZWxFeGl0KSB7XG4gICAgICB0aGlzLnBsYXllci5vdXRybygpO1xuICAgIH1cbiAgfVxuXG4gIG5leHRMZXZlbCgpIHtcbiAgICB0aGlzLmxldmVsKys7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xldmVsJywgdGhpcy5sZXZlbCk7XG4gICAgdGhpcy5zY2VuZS5sb2FkKHRoaXMubGV2ZWwpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7ICsraSkge1xuICAgICAgdGhpcy5zcHJpdGVzW2ldLmVuZ2luZU1vdmUoKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNmeHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHRoaXMuc2Z4c1tpXS5lbmdpbmVNb3ZlKCk7XG4gICAgfVxuICAgIGxldCBzcHJpdGVzTW92aW5nID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0gJiYgdGhpcy5zcHJpdGVzW2ldLmlkICE9PSBDb25zdHMuT2JqZWN0UGxheWVyICYmIHRoaXMuc3ByaXRlc1tpXS5tb3ZpbmcpIHtcbiAgICAgICAgc3ByaXRlc01vdmluZyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghc3ByaXRlc01vdmluZykge1xuICAgICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID0gMDtcbiAgICB9XG4gICAgLy8gY2hlY2sgaWYgbm8gc3ByaXRlcyBoYXZlIG1vdmVkIGZvciAyIHR1cm5zXG4gICAgaWYgKCFzcHJpdGVzTW92aW5nICYmIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPiAxKSB7XG4gICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID0gMDtcbiAgICAgIHRoaXMuaW5wdXQoKTtcbiAgICB9XG4gICAgdGhpcy5jb2xsaXNpb24oKTtcbiAgfVxuXG4gIGlucHV0KCkge1xuICAgIGlmICh0aGlzLmtleWJvYXJkLmRvd24gfHwgdGhpcy5rZXlib2FyZC5hY3Rpb24pIHtcbiAgICAgIHRoaXMucGxheWVyLmljZU9yVGVsZXBvcnQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMua2V5Ym9hcmQubGVmdCkge1xuICAgICAgdGhpcy5wbGF5ZXIubGVmdCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5rZXlib2FyZC5yaWdodCkge1xuICAgICAgdGhpcy5wbGF5ZXIucmlnaHQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMua2V5Ym9hcmQuZW50ZXIpIHtcbiAgICAgIHRoaXMuc291bmQuc3RvcCgnZGFuZ2VyJyk7XG4gICAgICB0aGlzLnNjZW5lLmxvYWQodGhpcy5sZXZlbCk7XG4gICAgICB0aGlzLmtleWJvYXJkLmVudGVyID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWNlQXQodHgsIHR5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaXNTcHJpdGVBdCh0eCwgdHkpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFkZEljZUJsb2NrKHR4LCB0eSkge1xuICAgIGxldCBmb3VuZEljZUJsb2NrcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmIHRoaXMuc3ByaXRlc1tpXS55VGlsZSA9PT0gdHkpIHtcbiAgICAgICAgbGV0IGljZSA9IHRoaXMuc3ByaXRlc1tpXTtcbiAgICAgICAgaWYgKGljZS54VGlsZSAtIDEgPT09IHR4IHx8IGljZS54VGlsZSArIGljZS5sZW5ndGggPT09IHR4KSB7XG4gICAgICAgICAgZm91bmRJY2VCbG9ja3MucHVzaChpY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZEljZUJsb2Nrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc3ByaXRlcy5wdXNoKG5ldyBJY2UodGhpcywgdHgsIHR5LCAxKSk7XG4gICAgfSBlbHNlIGlmIChmb3VuZEljZUJsb2Nrcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGZvdW5kSWNlQmxvY2tzWzBdLmFkZEJsb2NrKHR4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZvdW5kSWNlQmxvY2tzWzBdLnhUaWxlIDw9IGZvdW5kSWNlQmxvY2tzWzFdLnhUaWxlKSB7XG4gICAgICAgIHRoaXMuam9pbkljZUJsb2Nrcyhmb3VuZEljZUJsb2Nrc1swXSwgZm91bmRJY2VCbG9ja3NbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5qb2luSWNlQmxvY2tzKGZvdW5kSWNlQmxvY2tzWzFdLCBmb3VuZEljZUJsb2Nrc1swXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgam9pbkljZUJsb2NrcyhpY2VibG9ja0EsIGljZWJsb2NrQikge1xuICAgIGxldCB0eCA9IGljZWJsb2NrQS54VGlsZTtcbiAgICBsZXQgdHkgPSBpY2VibG9ja0EueVRpbGU7XG4gICAgbGV0IGxlbmd0aCA9IGljZWJsb2NrQS5sZW5ndGggKyBpY2VibG9ja0IubGVuZ3RoICsgMTtcbiAgICB0aGlzLmFkZFNwcml0ZShuZXcgSWNlKHRoaXMsIHR4LCB0eSwgbGVuZ3RoLCBuZXcgRnJvc3QoaWNlYmxvY2tBLmZyb3plbi5sZWZ0LCBpY2VibG9ja0IuZnJvemVuLnJpZ2h0KSkpO1xuICAgIHRoaXMucmVtb3ZlU3ByaXRlKGljZWJsb2NrQSk7XG4gICAgdGhpcy5yZW1vdmVTcHJpdGUoaWNlYmxvY2tCKTtcbiAgfVxuXG4gIHJlbW92ZUljZUJsb2NrKHR4LCB0eSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuc3ByaXRlc1tpXS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJlxuICAgICAgICB0aGlzLnNwcml0ZXNbaV0ueVRpbGUgPT09IHR5ICYmXG4gICAgICAgIHR4ID49IHRoaXMuc3ByaXRlc1tpXS54VGlsZSAmJlxuICAgICAgICB0eCA8IHRoaXMuc3ByaXRlc1tpXS54VGlsZSArIHRoaXMuc3ByaXRlc1tpXS5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLnJlbW92ZUJsb2NrKHR4KSA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5zcHJpdGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRmlyZSh0eCwgdHkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS55VGlsZSA9PT0gdHkgJiYgdHggPT09IHRoaXMuc3ByaXRlc1tpXS54VGlsZSAmJiB0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PYmplY3RGaXJlKSB7XG4gICAgICAgIHRoaXMuc3ByaXRlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRTcHJpdGUoc3ByaXRlKSB7XG4gICAgdGhpcy5zcHJpdGVzLnB1c2goc3ByaXRlKTtcbiAgfVxuXG4gIHJlbW92ZVNwcml0ZShzcHJpdGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXSA9PT0gc3ByaXRlKSB7XG4gICAgICAgIHRoaXMuc3ByaXRlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhZGRTcGFya3MoeFRpbGUsIHlUaWxlLCBjb2xvciwgcXVhbnRpdHksIGludGVuc2l0eSkge1xuICAgIHRoaXMuc2Z4cy5wdXNoKG5ldyBTcGFya3ModGhpcywgeFRpbGUsIHlUaWxlLCBjb2xvciwgcXVhbnRpdHksIGludGVuc2l0eSkpO1xuICB9XG5cbiAgc3ByaXRlVHlwZUF0KHR4LCB0eSwgZXhjbHVkZUlkKSB7XG4gICAgZXhjbHVkZUlkID0gdHlwZW9mIGV4Y2x1ZGVJZCA9PT0gJ3VuZGVmaW5lZCcgPyBDb25zdHMuT2JqZWN0T3V0IDogZXhjbHVkZUlkO1xuICAgIGlmICh0eCA8IDAgfHwgdHkgPCAwIHx8IHR4ID4gdGhpcy5tYXAud2lkdGggfHwgdHkgPiB0aGlzLm1hcC5oZWlnaHQpIHtcbiAgICAgIHJldHVybiBDb25zdHMuT2JqZWN0T3V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXAubWFwW3R5XVt0eF0pIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5tYXBbdHldW3R4XTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pc1Nwcml0ZUF0KHR4LCB0eSkgJiYgdGhpcy5zcHJpdGVzW2ldLmlkICE9PSBleGNsdWRlSWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW2ldLmlkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBDb25zdHMuT2JqZWN0QmFja2dyb3VuZDtcbiAgfVxuXG4gIHNwcml0ZUF0KHR4LCB0eSkge1xuICAgIGlmICghdGhpcy5tYXAubWFwW3R5XVt0eF0pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaXNTcHJpdGVBdCh0eCwgdHkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlcyc7XG5cbmV4cG9ydCBjbGFzcyBGaXJlIGV4dGVuZHMgQW5pbVNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5KSB7XG4gICAgc3VwZXIoQ29uc3RzLk9iamVjdEZpcmUsIGVuZ2luZSwgJ2ltZ19maXJlJywgdHgsIHR5LCBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoLCAwLCAwLCAwLCAzLCB0cnVlKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgaWYgKCF0aGlzLm1vdmluZykge1xuICAgICAgdGhpcy5jb2xsaXNpb25zKCk7XG4gICAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcbiAgICAgICAgdGhpcy5kb0Rvd24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29sbGlzaW9ucygpIHtcbiAgICBpZiAodGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5PYmplY3RGaXJlKSA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnZmlyZS1vZmYnKTtcbiAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUZpcmUodGhpcy54VGlsZSwgdGhpcy55VGlsZSk7XG4gICAgICB0aGlzLmVuZ2luZS5yZW1vdmVJY2VCbG9jayh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlKTtcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCAnMjU1LCAxMjYsIDE5OCcsIDE1LCAwLjUpO1xuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsICcxMjQsIDIxMiwgMjU1JywgMTApO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5PYmplY3RGaXJlKSA9PT0gQ29uc3RzLk9iamVjdE1ldGFsKSB7XG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xuICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlRmlyZSh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlKTtcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCAnMjU1LCAyMjIsIDEyNycsIDE1LCAwLjUpO1xuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsICc0MSwgNDIsIDkwJywgMTApO1xuICAgIH1cbiAgfVxuXG4gIGdyYXZpdHkoKSB7XG4gICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmIHRoaXMuY29ybmVycy5kICE9PSBDb25zdHMuT2JqZWN0RmlyZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRvRG93bigpIHtcbiAgICB0aGlzLmNvdW50ZXIgKz0gNDtcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcbiAgICAgIHRoaXMueSArPSA0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xuaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnLi9lbmdpbmUnO1xuaW1wb3J0IHsgbGV2ZWxzIH0gZnJvbSAnLi9sZXZlbHMnO1xuXG4vKipcbiAqIEdhbWUgTG9vcFxuICovXG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Kn0gY2FudmFzICAgVGhlIGNhbnZhcyBlbGVtZW50XG4gICAqIEBwYXJhbSB7Kn0gcmVzb3VyY2VzICBHYW1lIHJlc291cmNlc1xuICAgKi9cbiAgY29uc3RydWN0b3IoY2FudmFzLCByZXNvdXJjZXMpIHtcbiAgICB0aGlzLnRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB0aGlzLmVuZ2luZSA9IG5ldyBFbmdpbmUoY2FudmFzLCByZXNvdXJjZXMpO1xuICAgIHRoaXMubGV2ZWxzID0gbGV2ZWxzO1xuICAgIHRoaXMuc3RhdGUgPSBDb25zdHMuR2FtZVN0YXRlUGxheTtcbiAgICB0aGlzLmVuZ2luZS5zb3VuZC5zb3VuZHRyYWNrKCk7XG4gICAgdGhpcy5nYW1lTG9vcCA9IHRoaXMuZ2FtZUxvb3BfLmJpbmQodGhpcyk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIHNldEludGVydmFsKCgpID0+IHRoaXMuZ2FtZUxvb3AoKSwgMTAwMCAvIDYwKTtcbiAgfVxuXG4gIGdhbWVMb29wXygpIHtcbiAgICB0aGlzLmVuZ2luZS5kcmF3KCk7XG4gICAgdGhpcy5lbmdpbmUubW92ZSgpO1xuICB9XG5cbiAgY3JlYXRlSW50cm8oKSB7XG4gICAgdGhpcy5pbnRybyA9IG5ldyBBbmltU3ByaXRlKG51bGwsIHRoaXMuZW5naW5lLCAnaW1nX2ludHJvJywgMCwgMCwgNTQ0LCA0MTYsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICB0aGlzLnN0YXJ0ID0gbmV3IEFuaW1TcHJpdGUobnVsbCwgdGhpcy5lbmdpbmUsICdpbWdfc3RhcnQnLCA3LCAxMSwgMTQwLCAyNiwgLTEwLCAwLCAwLCAxLCB0cnVlKTtcbiAgICB0aGlzLnN0YXJ0LmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5ICogMjA7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGVzJztcclxuaW1wb3J0IHsgRnJvc3QgfSBmcm9tICcuL3N0cnVjdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSWNlIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHksIGxlbmd0aCwgZnJvemVuKSB7XHJcbiAgICBzdXBlcihDb25zdHMuT2JqZWN0SWNlLCBlbmdpbmUsICdpbWdfaWNlJywgdHgsIHR5LCBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoLCAwLCAwLCAwLCAxLCB0cnVlKTtcclxuICAgIHRoaXMueFRpbGUgPSB0eDtcclxuICAgIHRoaXMueVRpbGUgPSB0eTtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5hbmltRW5kID0gMTtcclxuICAgIHRoaXMuYW5pbURlbGF5ID0gOTtcclxuICAgIHRoaXMuYW5pbVJvdyA9IDA7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XHJcbiAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgIGlmICh0eXBlb2YgZnJvemVuICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmZyb3plbiA9IGZyb3plbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJvemVuID0gbmV3IEZyb3N0KGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29ybmVycygpO1xyXG4gICAgICB0aGlzLmNoZWNrRnJlZXplKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRCbG9jayh0eCkge1xyXG4gICAgY29uc3Qgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0eCAtIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgY29uc3Qgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIHRoaXMubGVuZ3RoICsgMSwgdGhpcy55VGlsZSk7XHJcbiAgICBpZiAodHggPiB0aGlzLnhUaWxlKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmdldFRpbGUodHggKyAxLCB0aGlzLnlUaWxlKSA9PT0gQ29uc3RzLk9iamVjdFdhbGwgfHxcclxuICAgICAgICBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9iamVjdE1ldGFsIHx8XHJcbiAgICAgICAgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPT09IENvbnN0cy5PYmplY3RKYXJcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR4IDwgdGhpcy54VGlsZSkge1xyXG4gICAgICB0aGlzLnhUaWxlID0gdHg7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmdldFRpbGUodHggLSAxLCB0aGlzLnlUaWxlKSA9PT0gQ29uc3RzLk9iamVjdFdhbGwgfHxcclxuICAgICAgICBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID09PSBDb25zdHMuT2JqZWN0TWV0YWwgfHxcclxuICAgICAgICBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID09PSBDb25zdHMuT2JqZWN0SmFyXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuZnJvemVuLmxlZnQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnggPSB0aGlzLnhUaWxlICogQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgIHRoaXMubGVuZ3RoICs9IDE7XHJcbiAgfVxyXG5cclxuICBpc1Nwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgaWYgKHRoaXMueVRpbGUgPT09IHR5KSB7XHJcbiAgICAgIGlmICh0eCA+PSB0aGlzLnhUaWxlICYmIHR4IDwgdGhpcy54VGlsZSArIHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVCbG9jayh0eCkge1xyXG4gICAgaWYgKHR4ID09PSB0aGlzLnhUaWxlKSB7XHJcbiAgICAgIHRoaXMueFRpbGUgKz0gMTtcclxuICAgICAgdGhpcy54ICs9IENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICAgIHRoaXMubGVuZ3RoIC09IDE7XHJcbiAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZUxlZnQoKTtcclxuICAgIH0gZWxzZSBpZiAodHggPT09IHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5sZW5ndGggLT0gMTtcclxuICAgICAgdGhpcy5jaGVja1VuZnJlZXplUmlnaHQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShcclxuICAgICAgICBuZXcgSWNlKFxyXG4gICAgICAgICAgdGhpcy5lbmdpbmUsXHJcbiAgICAgICAgICB0eCArIDEsXHJcbiAgICAgICAgICB0aGlzLnlUaWxlLFxyXG4gICAgICAgICAgdGhpcy54VGlsZSArIHRoaXMubGVuZ3RoIC0gdHggLSAxLFxyXG4gICAgICAgICAgbmV3IEZyb3N0KGZhbHNlLCB0aGlzLmZyb3plbi5yaWdodCksXHJcbiAgICAgICAgKSxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5sZW5ndGggPSB0eCAtIHRoaXMueFRpbGU7XHJcbiAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZVJpZ2h0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBjYW5HbGlkZShkaXIpIHtcclxuICAgIGlmICh0aGlzLmxlbmd0aCAhPT0gMSB8fCB0aGlzLmZyb3plbi5sZWZ0IHx8IHRoaXMuZnJvemVuLnJpZ2h0KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChkaXIgPT09IENvbnN0cy5EaXJMZWZ0ICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMubCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpciA9PT0gQ29uc3RzLkRpclJpZ2h0ICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMucikpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpc0Zyb3plbigpIHtcclxuICAgIHJldHVybiB0aGlzLmZyb3plbi5sZWZ0IHx8IHRoaXMuZnJvemVuLnJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eSgpIHtcclxuICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSAmJiAhdGhpcy5pc0Zyb3plbigpKSB7XHJcbiAgICAgIHRoaXMuZmFsbGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVEb3duLCB0cnVlKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mYWxsaW5nKSB7XHJcbiAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtY29sbGlzaW9uJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb2xsaXNpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuY2FuR2xpZGUodGhpcy5kaXJlY3Rpb24pKSB7XHJcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWNvbGxpc2lvbicpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHRpbGVfZG93biA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgKyBpLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICAgIGlmICh0aWxlX2Rvd24gJiYgdGlsZV9kb3duICE9PSBDb25zdHMuT2JqZWN0RmlyZSkge1xyXG4gICAgICAgIHRoaXMuY29ybmVycy5kID0gdGlsZV9kb3duO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvcm5lcnMuciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCwgdGhpcy55VGlsZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNGcm96ZW4oKSkge1xyXG4gICAgICB0aGlzLmNoZWNrVW5mcmVlemVMZWZ0KCk7XHJcbiAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZVJpZ2h0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VNb3Zpbmc6XHJcbiAgICAgICAgdGhpcy5nbGlkZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlQ2hlY2s6XHJcbiAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgIHRoaXMuZG9Eb3duKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgaWYgKHRoaXMuYW5pbURlbGF5Q291bnQrKyA+IHRoaXMuYW5pbURlbGF5KSB7XHJcbiAgICAgIHRoaXMuYW5pbURlbGF5Q291bnQgPSAwO1xyXG4gICAgICB0aGlzLmFuaW1Sb3cgPSB0aGlzLmFuaW1Sb3cgPT09IDAgPyAxIDogMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgdGhpcy55LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXMueCxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgMyAqIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXMueCArIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgdGhpcy55LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICBDb25zdHMuVGlsZVdpZHRoLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgdGhpcy55LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgIDMgKiBDb25zdHMuVGlsZVdpZHRoLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICB0aGlzLnggKyBDb25zdHMuVGlsZVdpZHRoICogKHRoaXMubGVuZ3RoIC0gMSksXHJcbiAgICAgICAgdGhpcy55LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgICAgMiAqIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgICBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgdGhpcy54ICsgQ29uc3RzLlRpbGVXaWR0aCAqIGksXHJcbiAgICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZnJvemVuLmxlZnQpIHtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoJ2Zyb3N0JyksIHRoaXMueFRpbGUgKiB0aGlzLndpZHRoIC0gNywgdGhpcy55VGlsZSAqIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZyb3plbi5yaWdodCkge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcclxuICAgICAgICAodGhpcy54VGlsZSArIHRoaXMubGVuZ3RoKSAqIHRoaXMud2lkdGggLSA3LFxyXG4gICAgICAgIHRoaXMueVRpbGUgKiB0aGlzLmhlaWdodCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBnbGlkZSgpIHtcclxuICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XHJcbiAgICAgIHRoaXMueCArPSA0ICogdGhpcy5kaXJlY3Rpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnB1c2goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvRG93bigpIHtcclxuICAgIHRoaXMuY291bnRlciArPSA0O1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XHJcbiAgICAgIHRoaXMueSArPSA0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdXNoKGRpcikge1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSB0eXBlb2YgZGlyID09PSAndW5kZWZpbmVkJyA/IHRoaXMuZGlyZWN0aW9uIDogZGlyO1xyXG4gICAgaWYgKCF0aGlzLmNvbGxpc2lvbigpICYmICF0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTW92aW5nLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tGcmVlemUoKSB7XHJcbiAgICBpZiAoVGlsZS5pc0ZyZWV6YWJsZSh0aGlzLmNvcm5lcnMubCkpIHtcclxuICAgICAgdGhpcy5mcm96ZW4ubGVmdCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZyb3plbi5sZWZ0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoVGlsZS5pc0ZyZWV6YWJsZSh0aGlzLmNvcm5lcnMucikpIHtcclxuICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrVW5mcmVlemVMZWZ0KCkge1xyXG4gICAgaWYgKHRoaXMuZnJvemVuLmxlZnQgJiYgIVRpbGUuaXNGcmVlemFibGUodGhpcy5jb3JuZXJzLmwpKSB7XHJcbiAgICAgIHRoaXMuZnJvemVuLmxlZnQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrVW5mcmVlemVSaWdodCgpIHtcclxuICAgIGlmICh0aGlzLmZyb3plbi5yaWdodCAmJiAhVGlsZS5pc0ZyZWV6YWJsZSh0aGlzLmNvcm5lcnMucikpIHtcclxuICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBKYXIgZXh0ZW5kcyBBbmltU3ByaXRlIHtcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcbiAgICBzdXBlcihDb25zdHMuT2JqZWN0SmFyLCBlbmdpbmUsICdpbWdfamFyJywgdHgsIHR5LCBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoLCAwLCAwLCAwLCAzLCB0cnVlKTtcbiAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5ICogMjtcbiAgICB0aGlzLm9uRmlyZSA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbVJvdyA9IDA7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcbiAgICAgIHRoaXMuY29sbGlzaW9ucygpO1xuICAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgY2FzZSBDb25zdHMuTW92ZURvd246XG4gICAgICAgIHRoaXMuZG9Eb3duKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbGxpc2lvbnMoKSB7XG4gICAgaWYgKCF0aGlzLm9uRmlyZSAmJiB0aGlzLmNvcm5lcnMudSA9PT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcbiAgICAgIHRoaXMudHVybk9uRmlyZSgpO1xuICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlRmlyZSh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlIC0gMSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9uRmlyZSAmJiB0aGlzLmNvcm5lcnMudSA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xuICAgICAgdGhpcy5tZWx0SWNlKCk7XG4gICAgfVxuICB9XG5cbiAgZ3Jhdml0eSgpIHtcbiAgICBpZiAoIXRoaXMuY29ybmVycy5kKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZG9Eb3duKCkge1xuICAgIHRoaXMuY291bnRlciArPSA0O1xuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xuICAgICAgdGhpcy55ICs9IDQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHR1cm5PbkZpcmUoKSB7XG4gICAgdGhpcy5hbmltUm93ID0gMTtcbiAgICB0aGlzLm9uRmlyZSA9IHRydWU7XG4gICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnZmlyZS1vZmYnKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSAtIDEsIENvbnN0cy5Db2xvck9yYW5nZSwgMzApO1xuICB9XG5cbiAgbWVsdEljZSgpIHtcbiAgICB0aGlzLmVuZ2luZS5yZW1vdmVJY2VCbG9jayh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlIC0gMSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUgLSAxLCBDb25zdHMuQ29sb3JPcmFuZ2UsIDIwKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSAtIDEsIENvbnN0cy5Db2xvckJsdWUsIDEwKTtcbiAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBzdXBlci5kcmF3KCk7XG4gICAgdGhpcy5kcmF3RnJvc3QoKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBLZXlib2FyZCBwcmVzcyBlbmdpbmVcbiAqL1xuZXhwb3J0IGNsYXNzIEtleWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51cCA9IGZhbHNlO1xuICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMua2V5ZG93biA9IHRoaXMua2V5ZG93bl8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmtleXVwID0gdGhpcy5rZXl1cF8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmludHJvID0gdHJ1ZTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXl1cCwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmludHJvKSB7XG4gICAgICAgIHRoaXMuZW50ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5pbnRybyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fYWN0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICB0aGlzLmRvd24gPSB0cnVlO1xuICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9hY3Rpb24nKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCAoKSA9PiAodGhpcy5kb3duID0gZmFsc2UpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX2xlZnQnKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX2xlZnQnKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCAoKSA9PiAodGhpcy5sZWZ0ID0gZmFsc2UpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX3JpZ2h0JykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9yaWdodCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsICgpID0+ICh0aGlzLnJpZ2h0ID0gZmFsc2UpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX3NlbGVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gKHRoaXMuZW50ZXIgPSB0cnVlKSk7XG4gIH1cblxuICBrZXlkb3duXyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIDM3OiAvLyBMZWZ0XG4gICAgICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM4OiAvLyBVcFxuICAgICAgICB0aGlzLnVwID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM5OiAvLyBSaWdodFxuICAgICAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0MDogLy8gRG93blxuICAgICAgY2FzZSAzMjogLy8gU3BhY2VcbiAgICAgICAgdGhpcy5hY3Rpb24gPSB0cnVlO1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvd24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTM6IC8vRW50ZXJcbiAgICAgICAgdGhpcy5lbnRlciA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBrZXl1cF8oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgY2FzZSAzNzogLy8gTGVmdFxuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM4OiAvLyBVcFxuICAgICAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTogLy8gUmlnaHRcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDA6IC8vIERvd25cbiAgICAgIGNhc2UgMzI6IC8vIFNwYWNlXG4gICAgICAgIHRoaXMuYWN0aW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTM6IC8vRW50ZXJcbiAgICAgICAgdGhpcy5lbnRlciA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGxldmVscyA9IFtcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAwLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxMSwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNSwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogOCwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDEsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDMsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA0LCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiA1LCB2OiA0IH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiA2LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMixcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMTQsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNSwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogOCwgeTogNiwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDAsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDgsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNiwgeTogOCwgdjogNSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNywgdjogMyB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMiwgeTogNiwgdjogMiB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDQsIHk6IDcsIHY6IDMgfSxcclxuICAgICAgeyBpZDogMywgeDogMywgeTogNiwgdjogMiB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMywgeTogNywgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDYsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDExLCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiAxMCwgdjogMyB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogOSwgdjogMyB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDMsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogOSwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAzLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAzLCB5OiA0LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNSxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMTMsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMywgeTogNCwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogNiwgeTogNiwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogOCwgeTogNiwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDYsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDIsIHk6IDgsIHY6IDEzLCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDIsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMywgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNSwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxNCwgeTogNCwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDIsIHk6IDUsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDEsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDEyLCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDExLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiAxMSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA1LCB2OiA1IH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogNSwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDEsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDgsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNSwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiAxMCwgdjogMiB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA5LCB2OiA3IH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNiwgeTogNSwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDYsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDUsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNSwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDgsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiAxMCxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMywgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAyLCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDMsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNCwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAyLCB5OiA1LCB2OiAxMCB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA0LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNixcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMywgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNSwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNiwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNCwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiAzLCB2OiAyIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiAzLCB2OiAyIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDMsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA3LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA4LCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMiwgeTogMywgdjogMiB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxNCwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxNCwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiAxMywgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxNCwgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNSwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMiwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDMsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMywgeTogOCwgdjogMTEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNCwgeTogOSwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDIsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDEyLCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDEwLCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogNywgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiAxMCwgeTogMTAsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA1LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAyLCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNSwgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiAzLCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDYsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDgsIHk6IDQsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNSwgeDogNiwgeTogMTEsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNSwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiA3LCB5OiA0LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMSxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMTAsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgZmw6IGZhbHNlLCBmcjogZmFsc2UsIHg6IDEwLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCBmbDogZmFsc2UsIGZyOiBmYWxzZSwgeDogNiwgeTogOSwgdjogNSB9LFxyXG4gICAgICB7IGlkOiAzLCBmbDogZmFsc2UsIGZyOiBmYWxzZSwgeDogNywgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCBmbDogZmFsc2UsIGZyOiBmYWxzZSwgeDogNiwgeTogNywgdjogNSB9LFxyXG4gICAgICB7IGlkOiAzLCBmbDogZmFsc2UsIGZyOiBmYWxzZSwgeDogNiwgeTogNSwgdjogNSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiA0LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNyxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDcsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA5LCB5OiA3LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogNCwgeDogMTAsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNCwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA3LCB4OiA3LCB5OiA1LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNixcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogNCwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogNywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiA3LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDMsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNiwgeTogNywgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDEsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDgsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNSwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA3LCB2OiAzLCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDcsIHk6IDgsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDYsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDUsIHY6IDMsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDksIHk6IDUsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMixcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogNiwgeTogNCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDEwLCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogOSxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogNCwgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA0LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogMywgeDogOCwgeTogNCwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiA0LCB2OiA0LCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiAxMSwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiA1LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDMsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNSwgeDogOCwgeTogMTAsIHY6IGZhbHNlIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMCxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMTAsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogNywgeTogNiwgdjogNCwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA1LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxXSxcclxuICAgICAgWzEsIDAsIDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogMCxcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogOCwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA1LCB4OiA2LCB5OiAxMCwgdjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA1LCB4OiA1LCB5OiA3LCB2OiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDUsIHg6IDgsIHk6IDgsIHY6IHRydWUgfSxcclxuICAgICAgeyBpZDogNiwgeDogNSwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDcsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA0LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiA4LCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDYsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogMywgeDogNCwgeTogNywgdjogMSwgZmw6IHRydWUsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA0LCB5OiA1LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogOSwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDYsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDksIHk6IDExLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDUsIHg6IDEwLCB5OiA4LCB2OiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiAxMSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiAxMSwgeTogMiwgdjogMSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDgsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDEyLCB5OiA0LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDUsIHg6IDExLCB5OiA3LCB2OiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDEwLCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDEwLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogOSwgeTogNSwgdjogNCwgZmw6IHRydWUsIGZyOiBmYWxzZSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA5LCB5OiA0LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgIFswLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDgsXHJcbiAgICBzcHJpdGVzOiBbXHJcbiAgICAgIHsgaWQ6IDcsIHg6IDMsIHk6IDEsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogNCwgeTogMiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiAyLCB5OiAyLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDMsIHk6IDIsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiAzLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDIsIHk6IDMsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogNiwgeTogNSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiA1LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDUsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogNCwgeDogNCwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiAyLCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDMsIHk6IDgsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiA5LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDIsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDEwLCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDQsIHg6IDgsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogOSwgeTogOCwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNCwgeDogMTIsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogMywgeDogMTMsIHk6IDUsIHY6IDEsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcclxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDUsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IHRydWUgfSxcclxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDYsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMywgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiAxMCwgeTogMiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA0LCB4OiA4LCB5OiAyLCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDksIHk6IDIsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIC8qIHtcclxuICAgICAgICBcIm1hcFwiOltcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDAsMCwwLDAsMCwwLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwwLDAsMCwwLDAsMCwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMCwwLDAsMCwwLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMCwwLDEsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwwLDAsMCwwLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwwLDAsMCwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDEsMSwxLDEsMCwwLDEsMSwxLDEsMSwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwxLDEsMSwxLDEsMCwxLDEsMSwxLDEsMCwwLDBdLFxyXG4gICAgICAgICAgICBbMCwwLDAsMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDAsMCwwXSxcclxuICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwidGhlbWVcIjo5LFxyXG4gICAgICAgIFwic3ByaXRlc1wiOltcclxuICAgICAgICAgICAge1wiaWRcIjo3LFwieFwiOjksXCJ5XCI6NSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjozLFwieFwiOjcsXCJ5XCI6NixcInZcIjoyfSxcclxuICAgICAgICAgICAge1wiaWRcIjo0LFwieFwiOjcsXCJ5XCI6NSxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo2LFwieFwiOjYsXCJ5XCI6NyxcInZcIjoxfSxcclxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjcsXCJ5XCI6OSxcInZcIjp0cnVlfSxcclxuICAgICAgICAgICAge1wiaWRcIjo1LFwieFwiOjgsXCJ5XCI6MTAsXCJ2XCI6dHJ1ZX0sXHJcbiAgICAgICAgICAgIHtcImlkXCI6NSxcInhcIjo5LFwieVwiOjgsXCJ2XCI6dHJ1ZX1cclxuICAgICAgICBdXHJcbiAgICB9LCovIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxMywgeTogMiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiAzLCB4OiA0LCB5OiA0LCB2OiA4IH0sXHJcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiAzLCB2OiA0IH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDMsIHk6IDUsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNCwgeTogNiwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA3LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiA2LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiA1LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAxNCwgeTogOSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiAyLCB5OiAxMCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDIsIHk6IDksIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogOCwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiA4LCB2OiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDgsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMTAsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTAsIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogOCxcclxuICB9LFxyXG4gIHtcclxuICAgIG1hcDogW1xyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICBdLFxyXG4gICAgdGhlbWU6IDYsXHJcbiAgICBzcHJpdGVzOiBbeyBpZDogNywgeDogMTQsIHk6IDEwLCB2OiAxIH1dLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbWFwOiBbXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICAgIF0sXHJcbiAgICB0aGVtZTogNixcclxuICAgIHNwcml0ZXM6IFtcclxuICAgICAgeyBpZDogNywgeDogMTAsIHk6IDcsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNSwgeDogOCwgeTogOCwgdjogdHJ1ZSB9LFxyXG4gICAgICB7IGlkOiA4LCB4OiAxNCwgeTogOCwgdjogZmFsc2UsIHJlZjogMSwgbGluazogMiB9LFxyXG4gICAgICB7IGlkOiA4LCB4OiA4LCB5OiA0LCB2OiBmYWxzZSwgcmVmOiAyLCBsaW5rOiAxIH0sXHJcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDksIHY6IDEgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBtYXA6IFtcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDFdLFxyXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXHJcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcclxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG4gICAgXSxcclxuICAgIHRoZW1lOiA5LFxyXG4gICAgc3ByaXRlczogW1xyXG4gICAgICB7IGlkOiA3LCB4OiAxMCwgeTogMTEsIHY6IDEgfSxcclxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA1LCB4OiA0LCB5OiAxMSwgdjogMSB9LFxyXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA1LCB2OiAxIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXRhbCBleHRlbmRzIEFuaW1TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5LCBsZW5ndGgpIHtcclxuICAgIHN1cGVyKENvbnN0cy5PYmplY3RNZXRhbCwgZW5naW5lLCAnaW1nX21ldGFsJywgdHgsIHR5LCBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoLCAwLCAwLCAwLCAxLCB0cnVlKTtcclxuICAgIHRoaXMueFRpbGUgPSB0eDtcclxuICAgIHRoaXMueVRpbGUgPSB0eTtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5hbmltRGVsYXkgPSA5O1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjYW5HbGlkZShkaXIpIHtcclxuICAgIGlmIChkaXIgPT09IENvbnN0cy5EaXJMZWZ0ICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMubCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpciA9PT0gQ29uc3RzLkRpclJpZ2h0ICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMucikpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBmcm96ZW5Ub0ljZSgpIHtcclxuICAgIGNvbnN0IHJpZ2h0U3ByaXRlID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSArIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgY29uc3QgbGVmdFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueFRpbGUgLSAxLCB0aGlzLnlUaWxlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICF0aGlzLmZhbGxpbmcgJiZcclxuICAgICAgKChyaWdodFNwcml0ZSAmJiByaWdodFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJiByaWdodFNwcml0ZS5mcm96ZW4ubGVmdCkgfHxcclxuICAgICAgICAobGVmdFNwcml0ZSAmJiBsZWZ0U3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmIGxlZnRTcHJpdGUuZnJvemVuLnJpZ2h0KSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBncmF2aXR5KCkge1xyXG4gICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmICF0aGlzLmZyb3plblRvSWNlKCkpIHtcclxuICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZhbGxpbmcpIHtcclxuICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbGxpc2lvbigpIHtcclxuICAgIGlmICghdGhpcy5jYW5HbGlkZSh0aGlzLmRpcmVjdGlvbikpIHtcclxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtY29sbGlzaW9uJyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VNb3Zpbmc6XHJcbiAgICAgICAgdGhpcy5nbGlkZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlQ2hlY2s6XHJcbiAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgIHRoaXMuZG9Eb3duKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgc3VwZXIuZHJhdygpO1xyXG4gICAgdGhpcy5kcmF3RnJvc3QoKTtcclxuICB9XHJcblxyXG4gIGdsaWRlKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcclxuICAgICAgdGhpcy54ICs9IDQgKiB0aGlzLmRpcmVjdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9Eb3duKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDQ7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcclxuICAgICAgdGhpcy55ICs9IDQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1c2goZGlyKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHR5cGVvZiBkaXIgPT09ICd1bmRlZmluZWQnID8gdGhpcy5kaXJlY3Rpb24gOiBkaXI7XHJcbiAgICBpZiAoIXRoaXMuY29sbGlzaW9uKCkpIHtcclxuICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTW92aW5nLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xyXG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcclxuICAgIHN1cGVyKENvbnN0cy5PYmplY3RQbGF5ZXIsIGVuZ2luZSwgJ2ltZ19kb25hJywgdHgsIHR5LCA0OCwgNjQsIC0xMCwgLTMyLCAyLCAyLCBmYWxzZSk7XHJcbiAgICB0aGlzLnNwZWVkID0gMjtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcclxuICAgIHRoaXMuc3RhdGUgPSAwOyAvL3N0YW5kaW5nIHRvcCByaWdodCBkb3duIGxlZnRcclxuICAgIHRoaXMubW92aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLnRpbGVXaWR0aCA9IENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICB0aGlzLnRpbGVIZWlnaHQgPSBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgdGhpcy5hbmltRGVsYXkgPSAzO1xyXG4gICAgdGhpcy5jb3VudGVyID0gMDtcclxuICAgIHRoaXMuZmFsbENvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5zdGFuZENvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5pbnRybygpO1xyXG4gIH1cclxuXHJcbiAgbGVmdCgpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvL2lmIHN0YW5kaW5nIHRoZW4gdHVyblxyXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSBDb25zdHMuRGlyTGVmdCkge1xyXG4gICAgICAvL2lzIG5vdCB1bmRlciBhIGJyaWNrXHJcbiAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSkge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVR1cm5TdGFydCwgQ29uc3RzLkFuaW1UdXJuRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3csIDQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVUdXJuLCB0cnVlKTtcclxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBDb25zdHMuRGlyTGVmdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vcnVubmluZ1xyXG4gICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMubCkgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSkge1xyXG4gICAgICAgIC8vbm90IHVuZGVyIGEgYnJpY2tcclxuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudSkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudWwpKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1SdW5TdGFydCwgQ29uc3RzLkFuaW1SdW5FbmQsIHRydWUsIENvbnN0cy5BbmltTGVmdFJvdywgMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LCBDb25zdHMuQW5pbUNyb3VjaEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUxlZnQsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vaGl0IGFuIGljZVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSAmJlxyXG4gICAgICAgICh0aGlzLmNvcm5lcnMubCA9PT0gQ29uc3RzLk9iamVjdEljZSB8fCB0aGlzLmNvcm5lcnMubCA9PT0gQ29uc3RzLk9iamVjdE1ldGFsKVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgfVxyXG4gICAgICAvL2NsaW1iXHJcbiAgICAgIGlmIChcclxuICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmwpICYmXHJcbiAgICAgICAgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSAmJlxyXG4gICAgICAgICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpICYmXHJcbiAgICAgICAgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudWwpICYmXHJcbiAgICAgICAgIXRoaXMubW92aW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVB1c2hTdGFydCwgQ29uc3RzLkFuaW1QdXNoU3RhcnQsIGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3cpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVVcCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJpZ2h0KCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gQ29uc3RzLkRpclJpZ2h0KSB7XHJcbiAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSkge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVR1cm5TdGFydCwgQ29uc3RzLkFuaW1UdXJuRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVUdXJuLCB0cnVlKTtcclxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBDb25zdHMuRGlyUmlnaHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMucikgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSkge1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51cikpIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVJ1blN0YXJ0LCBDb25zdHMuQW5pbVJ1bkVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LCBDb25zdHMuQW5pbUNyb3VjaEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVSaWdodCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiZcclxuICAgICAgICAodGhpcy5jb3JuZXJzLnIgPT09IENvbnN0cy5PYmplY3RJY2UgfHwgdGhpcy5jb3JuZXJzLnIgPT09IENvbnN0cy5PYmplY3RNZXRhbClcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMucikgJiZcclxuICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmXHJcbiAgICAgICAgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudSkgJiZcclxuICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51cikgJiZcclxuICAgICAgICAhdGhpcy5tb3ZpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LCBDb25zdHMuQW5pbVB1c2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3cpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVVcCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1cm4oKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ29uc3RzLk1vdmVSaXApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbmdpbmUuc291bmQucGxheU9uY2UoJ2RhbmdlcicpO1xyXG4gICAgdGhpcy5jb3VudGVyID0gMDtcclxuICAgIHRoaXMuaW5uZXJDb3VudGVyID0gMDtcclxuICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVSaXAsIHRydWUpO1xyXG4gICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUmlwU3RhcnQsIENvbnN0cy5BbmltUmlwRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93KTtcclxuICB9XHJcblxyXG4gIGludHJvKCkge1xyXG4gICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQmlnRmFsbFN0YXJ0LCBDb25zdHMuQW5pbUJpZ0ZhbGxFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUxldmVsRW50ZXIsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgb3V0cm8oKSB7XHJcbiAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1GYWxsU3RhcnQsIENvbnN0cy5BbmltQmlnRmFsbEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlTGV2ZWxFeGl0LCB0cnVlKTtcclxuICAgIHRoaXMuaW5uZXJDb3VudGVyID0gMDtcclxuICB9XHJcblxyXG4gIGRvUmlwKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyICUgMTAgPT09IDApIHtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvclJlZCwgNSwgMS4yKTtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckJsdWUsIDUsIDAuNyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID49IDcwKSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JSZWQsIDE1LCAyLjApO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yQmx1ZSwgMTAsIDMuMCk7XHJcbiAgICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICAgIHRoaXMuZW5naW5lLmtleWJvYXJkLmVudGVyID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdyYXZpdHkoKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvcm5lcnMuZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc29sZS5lcnJvcigndW5kZWZpbmVkIGNvcm5lcicpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVEb3duLCB0cnVlKTtcclxuICAgICAgaWYgKHRoaXMuZmFsbENvdW50ZXIgPj0gMSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXlPbmNlKCdmYWxsaW5nJyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQmlnRmFsbFN0YXJ0LCBDb25zdHMuQW5pbUJpZ0ZhbGxFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUJpZ0ZhbGxTdGFydCwgQ29uc3RzLkFuaW1CaWdGYWxsRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCAzKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQuc3RvcCgnZmFsbGluZycpO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ29uc3RzLk1vdmVEb3duKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnZmFsbCcpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JHcmVlbiwgMTAsIDAuNzUpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JSZWQsIDUsIDEuMjUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmFsbENvdW50ZXIgPSAwO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgaWYgKHRoaXMuY29ybmVycy5kID09PSBDb25zdHMuT2JqZWN0SmFyKSB7XHJcbiAgICAgICAgY29uc3QgamFyID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgICAgIGlmIChqYXIgJiYgamFyLm9uRmlyZSkge1xyXG4gICAgICAgICAgdGhpcy5idXJuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpY2VPclRlbGVwb3J0KCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvcm5lcnMuZCA9PT0gQ29uc3RzLk9iamVjdFRlbGVwb3J0KSB7XHJcbiAgICAgIHRoaXMudGVsZXBvcnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaWNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ZWxlcG9ydCgpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1GYWxsU3RhcnQsIENvbnN0cy5BbmltQmlnRmFsbEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVGVsZXBvcnRPdXQsIHRydWUpO1xyXG4gICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5kb1RlbGVwb3J0SW4oKTtcclxuICB9XHJcblxyXG4gIGljZSgpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSkge1xyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCkge1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kcikgJiYgdGhpcy5jb3JuZXJzLmRyICE9PSBDb25zdHMuT2JqZWN0RmlyZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsIENvbnN0cy5BbmltSWNlRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTWFrZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvcm5lcnMuZHIgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LCBDb25zdHMuQW5pbUljZUVuZCwgZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZVJlbW92ZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LCBDb25zdHMuQW5pbUljZUVuZCwgZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZUZhaWwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZGwpICYmIHRoaXMuY29ybmVycy5kbCAhPT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LCBDb25zdHMuQW5pbUljZUVuZCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTWFrZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvcm5lcnMuZGwgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LCBDb25zdHMuQW5pbUljZUVuZCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlUmVtb3ZlLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsIENvbnN0cy5BbmltSWNlRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VGYWlsLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGp1bXAoKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQpIHtcclxuICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMucikgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudXIpICYmICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LCBDb25zdHMuQW5pbVB1c2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3cpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVVcCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmwpICYmICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnVsKSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSkge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVB1c2hTdGFydCwgQ29uc3RzLkFuaW1QdXNoU3RhcnQsIGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3cpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVVcCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvUnVuKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZCAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1R1cm4oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9PdXRybygpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciAlIDEwID09PSAwKSB7XHJcbiAgICAgIHRoaXMuaW5uZXJDb3VudGVyICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JHcmVlbiwgMjUsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSAzKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvclJlZCwgMzAsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gNSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JCbHVlLCAzNSwgMS41KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgJSAyID09PSAwICYmIHRoaXMuaW5uZXJDb3VudGVyIDwgNikge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2NsaW1iJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlubmVyQ291bnRlciAlIDIgPT09IDEpIHtcclxuICAgICAgdGhpcy55ICs9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnkgLT0gMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA+PSA2KSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ3N0YXRlLWxlYXZlJyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5uZXh0TGV2ZWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvSW50cm8oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDgpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckdyZWVuLCAyMCwgMi41KTtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvclJlZCwgMzUsIDEpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yQmx1ZSwgMjAsIDEuNSk7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ3N0YWdlLWVudGVyJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID49IDMyKSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnN0b3AoJ2ZhbGxpbmcnKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb0dyYXZpdHkoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgIHRoaXMuZmFsbENvdW50ZXIrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvU3RhbmQoKSB7XHJcbiAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudSkpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhbmRDb3VudGVyKysgPiA1MDApIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICBDb25zdHMuQW5pbVNsZWVwU3RhcnQsXHJcbiAgICAgICAgICBDb25zdHMuQW5pbVNsZWVwRW5kLFxyXG4gICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgIHRoaXMuZGlyZWN0aW9uICE9PSAxID8gQ29uc3RzLkFuaW1MZWZ0Um93IDogQ29uc3RzLkFuaW1SaWdodFJvdyxcclxuICAgICAgICAgIDQ4LFxyXG4gICAgICAgICAgdHJ1ZSxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgIENvbnN0cy5BbmltU3RhbmRTdGFydCxcclxuICAgICAgICAgIENvbnN0cy5BbmltU3RhbmRFbmQsXHJcbiAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgdGhpcy5kaXJlY3Rpb24gIT09IDEgPyBDb25zdHMuQW5pbUxlZnRSb3cgOiBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICAgICAgOCxcclxuICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgIENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsXHJcbiAgICAgICAgQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCxcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiAhPT0gMSA/IENvbnN0cy5BbmltTGVmdFJvdyA6IENvbnN0cy5BbmltUmlnaHRSb3csXHJcbiAgICAgICAgOCxcclxuICAgICAgICB0cnVlLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9VcCgpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA8PSAxOCkge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuY291bnRlcikge1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2NsaW1iJyk7XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yR3JlZW4sIDEwLCAwLjc1KTtcclxuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JSZWQsIDUsIDEuMjUpO1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVB1c2hFbmQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUHVzaEVuZCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1KdW1wU3RhcnQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltSnVtcFN0YXJ0LFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3csXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcmVjdGlvbjtcclxuICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbUp1bXBFbmQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltSnVtcEVuZCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oMiwgMiwgZmFsc2UsIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93KTtcclxuICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTg6XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltU3RhbmQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltU3RhbmQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0ID8gQ29uc3RzLkFuaW1SaWdodFJvdyA6IENvbnN0cy5BbmltTGVmdFJvdyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLnggKz0gOCAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYWtlSWNlKCkge1xyXG4gICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnbmV3LWljZScpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkSWNlQmxvY2sodGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSwgQ29uc3RzLkNvbG9yQmx1ZSwgNSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJY2VCbG9jaygpIHtcclxuICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1yZW1vdmUnKTtcclxuICAgIHRoaXMuZW5naW5lLnJlbW92ZUljZUJsb2NrKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSArIDEsIENvbnN0cy5Db2xvckJsdWUsIDUpO1xyXG4gIH1cclxuXHJcbiAgcHVzaCgpIHtcclxuICAgIGxldCBpY2UgPSB0aGlzLmVuZ2luZS5pY2VBdCh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUpO1xyXG4gICAgaWYgKGljZSAmJiBpY2UuY2FuR2xpZGUodGhpcy5kaXJlY3Rpb24pKSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvcldoaXRlLCAzKTtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yQmx1ZSwgMywgMS41KTtcclxuICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgIENvbnN0cy5BbmltUHVzaFN0YXJ0LFxyXG4gICAgICAgIENvbnN0cy5BbmltUHVzaEVuZCxcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0ID8gQ29uc3RzLkFuaW1SaWdodFJvdyA6IENvbnN0cy5BbmltTGVmdFJvdyxcclxuICAgICAgICAzLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlUHVzaCwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1B1c2goKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMjtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPiBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgY29uc3QgaWNlID0gdGhpcy5lbmdpbmUuaWNlQXQodGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlKTtcclxuICAgICAgaWYgKGljZSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1wdXNoJyk7XHJcbiAgICAgICAgaWNlLnB1c2godGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9JY2UoKSB7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID09PSA4KSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBDb25zdHMuTW92ZUljZU1ha2UpIHtcclxuICAgICAgICB0aGlzLm1ha2VJY2UoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUljZUJsb2NrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA+PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb0ZhaWxJY2UoKSB7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID09PSA4KSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1kaXNhYmxlZCcpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSwgJzg4LDY2LDY2Jyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9UZWxlcG9ydEluKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyICUgMTAgPT09IDApIHtcclxuICAgICAgdGhpcy5pbm5lckNvdW50ZXIgKz0gMTtcclxuICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnY2xpbWInKTtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yR3JlZW4sIDEwLCAwLjUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gMikge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JHcmVlbiwgMTAsIDEuNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA+PSAyKSB7XHJcbiAgICAgIHRoaXMuZG9UZWxlcG9ydE91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9UZWxlcG9ydE91dCgpIHtcclxuICAgIGNvbnN0IHRlbGVwb3J0ID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy54ID0gdGVsZXBvcnQubGluay54O1xyXG4gICAgdGhpcy55ID0gdGVsZXBvcnQubGluay55IC0gMzI7XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yR3JlZW4sIDE1LCAxLjUpO1xyXG4gICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLXJlbW92ZScpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb2xsaXNpb25zKCkge1xyXG4gICAgaWYgKHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuT2JqZWN0UGxheWVyKSA9PT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcclxuICAgICAgdGhpcy5idXJuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3ZlKCkge1xyXG4gICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICB0aGlzLmNvbGxpc2lvbnMoKTtcclxuICAgIGlmICh0aGlzLnN0YXRlICE9PSBDb25zdHMuTW92ZVN0YW5kKSB7XHJcbiAgICAgIHRoaXMuc3RhbmRDb3VudGVyID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlICE9PSBDb25zdHMuTW92ZURvd24pIHtcclxuICAgICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZVJpZ2h0OlxyXG4gICAgICAgIHRoaXMuZG9SdW4oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUxlZnQ6XHJcbiAgICAgICAgdGhpcy5kb1J1bigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcclxuICAgICAgICB0aGlzLmRvR3Jhdml0eSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlVXA6XHJcbiAgICAgICAgdGhpcy5kb1VwKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVUdXJuOlxyXG4gICAgICAgIHRoaXMuZG9UdXJuKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VNYWtlOlxyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlUmVtb3ZlOlxyXG4gICAgICAgIHRoaXMuZG9JY2UoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUljZUZhaWw6XHJcbiAgICAgICAgdGhpcy5kb0ZhaWxJY2UoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZVN0YW5kOlxyXG4gICAgICAgIHRoaXMuZG9TdGFuZCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlUHVzaDpcclxuICAgICAgICB0aGlzLmRvUHVzaCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlUmlwOlxyXG4gICAgICAgIHRoaXMuZG9SaXAoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUxldmVsRXhpdDpcclxuICAgICAgICB0aGlzLmRvT3V0cm8oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZVRlbGVwb3J0T3V0OlxyXG4gICAgICAgIHRoaXMuZG9UZWxlcG9ydEluKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVMZXZlbEVudGVyOlxyXG4gICAgICAgIHRoaXMuZG9JbnRybygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUmVzb3VyY2VzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucyA9IFtdO1xuICAgIHRoaXMucmVzb3VyY2VzID0ge307XG4gICAgdGhpcy5sb2FkZWQgPSAwO1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG4gIH1cblxuICBhZGQodHlwZSwgbmFtZSwgc3JjKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKHsgdHlwZTogdHlwZSwgbmFtZTogbmFtZSwgc3JjOiBzcmMgfSk7XG4gIH1cblxuICBnZXQobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlc1tuYW1lXTtcbiAgfVxuXG4gIGNoZWNrKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuY3R4KSB7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgICB0aGlzLmN0eC5maWxsUmVjdCg1MCwgMjUwLCAodGhpcy5sb2FkZWQgKiA0NTApIC8gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsIDQwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubG9hZGVkID09PSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aCkge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICByZWFkeShjYWxsYmFjaykge1xuICAgIGZvciAoY29uc3QgcmVzb3VyY2Ugb2YgdGhpcy5kZWZpbml0aW9ucykge1xuICAgICAgaWYgKHJlc291cmNlLnR5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRlZCArPSAxO1xuICAgICAgICAgIHRoaXMuY2hlY2soY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gcmVzb3VyY2Uuc3JjO1xuICAgICAgICB0aGlzLnJlc291cmNlc1tyZXNvdXJjZS5uYW1lXSA9IGltYWdlO1xuICAgICAgfVxuICAgICAgaWYgKHJlc291cmNlLnR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXNvdXJjZS5uYW1lKTtcbiAgICAgICAgdGhpcy5sb2FkZWQgKz0gMTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNbcmVzb3VyY2UubmFtZV0gPSBhdWRpbztcbiAgICAgICAgdGhpcy5jaGVjayhjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBGcm9zdCB9IGZyb20gJy4vc3RydWN0JztcbmltcG9ydCB7IEZpcmUgfSBmcm9tICcuL2ZpcmUnO1xuaW1wb3J0IHsgSWNlIH0gZnJvbSAnLi9pY2UnO1xuaW1wb3J0IHsgSmFyIH0gZnJvbSAnLi9qYXInO1xuaW1wb3J0IHsgTWV0YWwgfSBmcm9tICcuL21ldGFsJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tICcuL3RpbGVtYXAnO1xuaW1wb3J0IHsgbGV2ZWxzIH0gZnJvbSAnLi9sZXZlbHMnO1xuaW1wb3J0IHsgVGVsZXBvcnQgfSBmcm9tICcuL3RlbGVwb3J0JztcblxuZXhwb3J0IGNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoZW5naW5lKSB7XG4gICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGxldCBkYXRhID0ge307XG4gICAgZGF0YS5tYXAgPSB0aGlzLmVuZ2luZS5tYXAubWFwO1xuICAgIGRhdGEudGhlbWUgPSB0aGlzLmVuZ2luZS5tYXAudGhlbWU7XG4gICAgZGF0YS5zcHJpdGVzID0gW107XG4gICAgZm9yIChjb25zdCBzcHJpdGUgb2YgdGhpcy5lbmdpbmUuc3ByaXRlcykge1xuICAgICAgbGV0IHZhbHVlID0gdHlwZW9mIHNwcml0ZS5sZW5ndGggPT09ICd1bmRlZmluZWQnID8gMSA6IHNwcml0ZS5sZW5ndGg7XG4gICAgICB2YWx1ZSA9IHNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEphciA/IHNwcml0ZS5vbkZpcmUgOiB2YWx1ZTtcbiAgICAgIGxldCBmbCwgZnI7XG4gICAgICBpZiAoc3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SWNlKSB7XG4gICAgICAgIGZsID0gc3ByaXRlLmZyb3plbi5sZWZ0O1xuICAgICAgICBmciA9IHNwcml0ZS5mcm96ZW4ucmlnaHQ7XG4gICAgICB9XG4gICAgICBkYXRhLnNwcml0ZXMucHVzaCh7XG4gICAgICAgIGlkOiBzcHJpdGUuaWQsXG4gICAgICAgIHg6IHNwcml0ZS54VGlsZSxcbiAgICAgICAgeTogc3ByaXRlLnlUaWxlLFxuICAgICAgICB2OiB2YWx1ZSxcbiAgICAgICAgZmw6IGZsLFxuICAgICAgICBmcjogZnIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGxvYWQoaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsc1tpbmRleF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMuZW5naW5lLmxldmVsID0gaW5kZXg7XG4gICAgY29uc3QgbGV2ZWwgPSBsZXZlbHNbaW5kZXhdO1xuICAgIHRoaXMuZW5naW5lLnNwcml0ZXMgPSBbXTtcbiAgICB0aGlzLmVuZ2luZS5tYXAgPSBuZXcgVGlsZU1hcCh0aGlzLmVuZ2luZSwgbGV2ZWwubWFwLCBsZXZlbC50aGVtZSk7XG4gICAgY29uc3QgdGVsZXBvcnRzID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3Qgc3ByaXRlIG9mIGxldmVsLnNwcml0ZXMpIHtcbiAgICAgIHN3aXRjaCAoc3ByaXRlLmlkKSB7XG4gICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdFBsYXllcjpcbiAgICAgICAgICB0aGlzLmVuZ2luZS5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpO1xuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZSh0aGlzLmVuZ2luZS5wbGF5ZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RJY2U6XG4gICAgICAgICAgbGV0IGZyb3plbiA9IG5ldyBGcm9zdCh0cnVlLCB0cnVlKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHNwcml0ZS5mbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGZyb3plbi5sZWZ0ID0gc3ByaXRlLmZsO1xuICAgICAgICAgICAgZnJvemVuLnJpZ2h0ID0gc3ByaXRlLmZyO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IEljZSh0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55LCBwYXJzZUludChzcHJpdGUudiksIGZyb3plbikpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RNZXRhbDpcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IE1ldGFsKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnksIDEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0RmlyZTpcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IEZpcmUodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RKYXI6XG4gICAgICAgICAgY29uc3QgamFyID0gbmV3IEphcih0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55KTtcbiAgICAgICAgICBpZiAoc3ByaXRlLnYgPT0gMSkge1xuICAgICAgICAgICAgamFyLnR1cm5PbkZpcmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKGphcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdFRlbGVwb3J0OlxuICAgICAgICAgIGNvbnN0IHRlbGVwb3J0ID0gbmV3IFRlbGVwb3J0KHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpO1xuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZSh0ZWxlcG9ydCk7XG4gICAgICAgICAgdGVsZXBvcnQubGlua0lkID0gc3ByaXRlLmxpbms7XG4gICAgICAgICAgdGVsZXBvcnRzLnNldChzcHJpdGUucmVmLCB0ZWxlcG9ydCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGxpbmsgdGVsZXBvcnRzXG4gICAgaWYgKHRlbGVwb3J0cy5zaXplKSB7XG4gICAgICBmb3IgKGNvbnN0IHRlbGVwb3J0IG9mIHRlbGVwb3J0cy52YWx1ZXMoKSkge1xuICAgICAgICBjb25zdCBsaW5rZWQgPSB0ZWxlcG9ydHMuZ2V0KHRlbGVwb3J0LmxpbmtJZCk7XG4gICAgICAgIGlmIChsaW5rZWQpIHtcbiAgICAgICAgICB0ZWxlcG9ydC5saW5rID0gbGlua2VkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIFBhcnRpY2xlIHtcbiAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCBjb2xvciwgaW50ZW5zaXR5KSB7XG4gICAgdGhpcy5jb2xvciA9IHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcgPyBDb25zdHMuQ29sb3JXaGl0ZSA6IGNvbG9yO1xuICAgIHRoaXMuciA9IDQ7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMudnggPSAoTWF0aC5yYW5kb20oKSAqIDQgLSAyKSAqIGludGVuc2l0eTtcbiAgICB0aGlzLnZ5ID0gKE1hdGgucmFuZG9tKCkgKiA2IC0gNCkgKiBpbnRlbnNpdHk7XG4gICAgdGhpcy5zcGVlZCA9IDAuMTU7XG4gICAgdGhpcy5saWZlID0gMjU1O1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBvcGFjaXR5ID0gdGhpcy5saWZlIC8gMjU1O1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKCcgKyB0aGlzLmNvbG9yICsgJywnICsgb3BhY2l0eSArICcpJztcbiAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMuciwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMudng7XG4gICAgdGhpcy55ICs9IHRoaXMudnk7XG4gICAgdGhpcy52eSArPSB0aGlzLnNwZWVkO1xuICAgIHRoaXMubGlmZSAtPSA1O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcGFya3MgZXh0ZW5kcyBTcHJpdGUge1xuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSwgY29sb3IsIGxlbmd0aCwgaW50ZW5zaXR5KSB7XG4gICAgc3VwZXIobnVsbCwgZW5naW5lLCB0eCwgdHksIDMyLCAzMik7XG4gICAgdGhpcy5jb2xvciA9IHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcgPyAnMjU1LDI1NSwyNTUnIDogY29sb3I7XG4gICAgdGhpcy5sZW5ndGggPSB0eXBlb2YgbGVuZ3RoID09PSAndW5kZWZpbmVkJyA/IDEwIDogbGVuZ3RoO1xuICAgIHRoaXMuaW50ZW5zaXR5ID0gdHlwZW9mIGludGVuc2l0eSA9PT0gJ3VuZGVmaW5lZCcgPyAxIDogaW50ZW5zaXR5O1xuICAgIHRoaXMucGFydGljbGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnBhcnRpY2xlc1tpXSA9IG5ldyBQYXJ0aWNsZShcbiAgICAgICAgdGhpcy5lbmdpbmUuY3R4LFxuICAgICAgICB0eCAqIENvbnN0cy5UaWxlV2lkdGggKyAxNixcbiAgICAgICAgdHkgKiBDb25zdHMuVGlsZVdpZHRoICsgMTYsXG4gICAgICAgIHRoaXMuY29sb3IsXG4gICAgICAgIHRoaXMuaW50ZW5zaXR5LFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuZW5naW5lLmN0eC5zYXZlKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0uZHJhdygpO1xuICAgIH1cbiAgICB0aGlzLmVuZ2luZS5jdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZW5naW5lTW92ZSgpIHtcbiAgICB0aGlzLm1vdmUoKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0ubW92ZSgpO1xuICAgICAgaWYgKHRoaXMucGFydGljbGVzW2ldLmxpZmUgPCAwKSB7XG4gICAgICAgIHRoaXMucGFydGljbGVzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLnBhcnRpY2xlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVtb3ZlU2VsZigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVNlbGYoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZ2luZS5zZnhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5lbmdpbmUuc2Z4c1tpXSA9PT0gdGhpcykge1xuICAgICAgICB0aGlzLmVuZ2luZS5zZnhzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEVuZ2luZSB9IGZyb20gJy4vZW5naW5lJztcblxuZXhwb3J0IGNsYXNzIFNvdW5kIHtcbiAgY29uc3RydWN0b3IocmVzb3VyY2VzKSB7XG4gICAgdGhpcy5yZXNvdXJjZXMgPSByZXNvdXJjZXM7XG4gICAgdGhpcy5tdXNpY09uID0gdHJ1ZTtcbiAgICB0aGlzLnNvdW5kT24gPSB0cnVlO1xuXG4gICAgdGhpcy5zZnhWb2x1bWUgPSAwLjM7XG4gICAgdGhpcy5zZnggPSB7XG4gICAgICAnZmlyZS1vZmYnOiByZXNvdXJjZXMuZ2V0KCdzZngtZmlyZS1vZmYnKSxcbiAgICAgICdpY2UtcHVzaCc6IHJlc291cmNlcy5nZXQoJ3NmeC1pY2UtcHVzaCcpLFxuICAgICAgZmFsbDogcmVzb3VyY2VzLmdldCgnc2Z4LWZhbGwnKSxcbiAgICAgIGZhbGxpbmc6IHJlc291cmNlcy5nZXQoJ3NmeC1mYWxsaW5nJyksXG4gICAgICAnbmV3LWljZSc6IHJlc291cmNlcy5nZXQoJ3NmeC1uZXctaWNlJyksXG4gICAgICBjbGltYjogcmVzb3VyY2VzLmdldCgnc2Z4LWNsaW1iJyksXG4gICAgICAnaWNlLWNvbGxpc2lvbic6IHJlc291cmNlcy5nZXQoJ3NmeC1pY2UtY29sbGlzaW9uJyksXG4gICAgICAnc3RhZ2UtZW50ZXInOiByZXNvdXJjZXMuZ2V0KCdzZngtc3RhZ2UtZW50ZXInKSxcbiAgICAgIGRhbmdlcjogcmVzb3VyY2VzLmdldCgnc2Z4LWRhbmdlcicpLFxuICAgICAgJ2ljZS1yZW1vdmUnOiByZXNvdXJjZXMuZ2V0KCdzZngtaWNlLXJlbW92ZScpLFxuICAgICAgJ3N0YXRlLWxlYXZlJzogcmVzb3VyY2VzLmdldCgnc2Z4LXN0YXRlLWxlYXZlJyksXG4gICAgICAnaWNlLWRpc2FibGVkJzogcmVzb3VyY2VzLmdldCgnc2Z4LWRpc2FibGVkJyksXG4gICAgfTtcbiAgfVxuXG4gIHBsYXkoc2Z4KSB7XG4gICAgaWYgKCF0aGlzLnNvdW5kT24pIHJldHVybjtcbiAgICB0aGlzLnNmeFtzZnhdLnZvbHVtZSA9IHRoaXMuc2Z4Vm9sdW1lO1xuICAgIHRoaXMuc2Z4W3NmeF0uY3VycmVudFRpbWUgPSAwO1xuICAgIHRoaXMuc2Z4W3NmeF0ucGxheSgpLmNhdGNoKCgpID0+IHt9KTtcbiAgfVxuXG4gIHBsYXlPbmNlKHNmeCkge1xuICAgIGlmICghdGhpcy5zZnhbc2Z4XS5wYXVzZWQpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuc291bmRPbikgcmV0dXJuO1xuICAgIHRoaXMuc2Z4W3NmeF0udm9sdW1lID0gdGhpcy5zZnhWb2x1bWU7XG4gICAgdGhpcy5zZnhbc2Z4XS5jdXJyZW50VGltZSA9IDA7XG4gICAgdGhpcy5zZnhbc2Z4XS5wbGF5KCkuY2F0Y2goKCkgPT4ge30pO1xuICB9XG5cbiAgc3RvcChzZngpIHtcbiAgICB0aGlzLnNmeFtzZnhdLnBhdXNlKCk7XG4gICAgdGhpcy5zZnhbc2Z4XS5jdXJyZW50VGltZSA9IDA7XG4gIH1cblxuICBzb3VuZHRyYWNrKCkge1xuICAgIGlmICghdGhpcy5tdXNpY09uKSByZXR1cm47XG4gICAgdGhpcy5tdXNpYyA9IHRoaXMucmVzb3VyY2VzLmdldCgnc2Z4LW11c2ljLXNwYXJrcycpO1xuICAgIHRoaXMubXVzaWMubXV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm11c2ljLnZvbHVtZSA9IDAuMjtcbiAgICB0aGlzLm11c2ljLmxvb3AgPSB0cnVlO1xuICAgIHRoaXMubXVzaWMucGxheSgpLmNhdGNoKCgpID0+IHt9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4vc3RydWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gIC8qKlxyXG4gICAqIEJhc2UgY2xhc3Mgb2YgdGhlIHNwcml0ZVxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgICBFbmdpbmUgRW5naW5lXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHR4ICAgICBQb3NpdGlvbiB0aWxlIHggaW4gdGhlIG1hcFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eSAgICAgUG9zaXRpb24gdGlsZSB5IGluIHRoZSBtYXBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggIFdpZHRoIG9mIHRoZSBzcHJpdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiB0aGUgc3ByaXRlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoaWQsIGVuZ2luZSwgdHgsIHR5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuY3R4ID0gZW5naW5lLmN0eDtcclxuICAgIHRoaXMuY29ybmVycyA9IG5ldyBQb3NpdGlvbigpO1xyXG4gICAgdGhpcy5zb2xpZCA9IHRydWU7XHJcbiAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5jb3VudGVyID0gZmFsc2U7XHJcbiAgICB0aGlzLnNwZWVkID0gNDtcclxuICAgIHRoaXMuc3RhdGUgPSBDb25zdHMuTW92ZVN0YW5kO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XHJcbiAgICB0aGlzLnhUaWxlID0gdHg7XHJcbiAgICB0aGlzLnlUaWxlID0gdHk7XHJcbiAgICB0aGlzLnggPSB0aGlzLnhUaWxlICogQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgIHRoaXMueSA9IHRoaXMueVRpbGUgKiBDb25zdHMuVGlsZVdpZHRoO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBTZXRzIHNwcml0ZSBzdGF0ZXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhdGUgIENvbnN0YW50IG9mIHRoZSBzdGF0ZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbW92aW5nIFRydWUgaWYgc3ByaXRlIGlzIG1vdmluZ1xyXG4gICAqL1xyXG4gIHNldFN0YXRlKHN0YXRlLCBtb3ZpbmcpIHtcclxuICAgIHRoaXMubW92aW5nID0gdHlwZW9mIG1vdmluZyA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IG1vdmluZztcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgfVxyXG5cclxuICBnZXRUaWxlKHR4LCB0eSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW5naW5lLm1hcC5nZXRUaWxlKHR4LCB0eSk7XHJcbiAgfVxyXG5cclxuICBpc1Nwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgcmV0dXJuIHRoaXMueFRpbGUgPT09IHR4ICYmIHRoaXMueVRpbGUgPT09IHR5O1xyXG4gIH1cclxuXHJcbiAgc3ByaXRlVHlwZUF0KHR4LCB0eSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0eCwgdHkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29ybmVycygpIHtcclxuICAgIHRoaXMuY29ybmVycy51ID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSAtIDEpO1xyXG4gICAgdGhpcy5jb3JuZXJzLmQgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmNvcm5lcnMubCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgLSAxLCB0aGlzLnlUaWxlKTtcclxuICAgIHRoaXMuY29ybmVycy5yID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgdGhpcy5jb3JuZXJzLnVsID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSAtIDEsIHRoaXMueVRpbGUgLSAxKTtcclxuICAgIHRoaXMuY29ybmVycy51ciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgKyAxLCB0aGlzLnlUaWxlIC0gMSk7XHJcbiAgICB0aGlzLmNvcm5lcnMuZGwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlIC0gMSwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy5jb3JuZXJzLmRyID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIDEsIHRoaXMueVRpbGUgKyAxKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgdGhpcy54VGlsZSA9IE1hdGguZmxvb3IodGhpcy54IC8gQ29uc3RzLlRpbGVXaWR0aCk7XHJcbiAgICB0aGlzLnlUaWxlID0gTWF0aC5mbG9vcih0aGlzLnkgLyBDb25zdHMuVGlsZVdpZHRoKTtcclxuICB9XHJcblxyXG4gIG1vdmUoKSB7fVxyXG5cclxuICBlbmdpbmVNb3ZlKCkge1xyXG4gICAgdGhpcy51cGRhdGVDb3JuZXJzKCk7XHJcbiAgICB0aGlzLm1vdmUoKTtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICB9XHJcbn1cclxuIiwiLyoqXG4gKiBTdG9yZXMgcG9zaXRpb24gb2YgdGhlIGNvcm5lcnMgYW5kIHZlcnRpY2VzXG4gKi9cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudSA9IDA7XG4gICAgdGhpcy5kID0gMDtcbiAgICB0aGlzLmwgPSAwO1xuICAgIHRoaXMuciA9IDA7XG4gICAgdGhpcy51bCA9IDA7XG4gICAgdGhpcy51ciA9IDA7XG4gICAgdGhpcy5kbCA9IDA7XG4gICAgdGhpcy5kciA9IDA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvb3Ige1xuICBjb25zdHJ1Y3Rvcih0eCwgdHkpIHtcbiAgICB0aGlzLnhUaWxlID0gdHg7XG4gICAgdGhpcy55VGlsZSA9IHR5O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGcm9zdCB7XG4gIGNvbnN0cnVjdG9yKGxlZnQsIHJpZ2h0KSB7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xuaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgVGVsZXBvcnQgZXh0ZW5kcyBBbmltU3ByaXRlIHtcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcbiAgICBzdXBlcihDb25zdHMuT2JqZWN0VGVsZXBvcnQsIGVuZ2luZSwgJ2ltZ190ZWxlcG9ydCcsIHR4LCB0eSwgQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCwgMCwgMCwgMCwgMywgdHJ1ZSk7XG4gICAgdGhpcy5pc1NvbGlkID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5ICogMjtcbiAgICB0aGlzLm9uRmlyZSA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbVJvdyA9IDA7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcbiAgICAgIHRoaXMuY29sbGlzaW9ucygpO1xuICAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgY2FzZSBDb25zdHMuTW92ZURvd246XG4gICAgICAgIHRoaXMuZG9Eb3duKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbGxpc2lvbnMoKSB7fVxuXG4gIGdyYXZpdHkoKSB7XG4gICAgaWYgKCF0aGlzLmNvcm5lcnMuZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRvRG93bigpIHtcbiAgICB0aGlzLmNvdW50ZXIgKz0gNDtcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcbiAgICAgIHRoaXMueSArPSA0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHN1cGVyLmRyYXcoKTtcbiAgICB0aGlzLmRyYXdGcm9zdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBUaWxlTWFwIHtcbiAgLyoqXG4gICAqIFRpbGVtYXAgY2xhc3NcbiAgICogQHBhcmFtIHtvYmplY3R9IGVuZ2luZSBFbmdpbmVcbiAgICogQHBhcmFtIHtvYmplY3R9IG1hcCAgTWF0cml4IG9mIHRoZSBtYXBcbiAgICovXG5cbiAgY29uc3RydWN0b3IoZW5naW5lLCBtYXAsIHRoZW1lKSB7XG4gICAgdGhpcy5jdHggPSBlbmdpbmUuY3R4O1xuICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIHRoaXMubWFwID0gbWFwO1xuICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcbiAgICB0aGlzLnRpbGVXaWR0aCA9IENvbnN0cy5UaWxlV2lkdGg7XG4gICAgdGhpcy50aWxlSGVpZ2h0ID0gQ29uc3RzLlRpbGVXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMubWFwLmxlbmd0aCAtIDE7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMubWFwWzBdLmxlbmd0aCAtIDE7XG4gICAgdGhpcy50aWxlc0ltYWdlID0gdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgndGlsZW1hcCcpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb250ZW50IG9mIHRoZSB0aWxlIGluc2lkZSB0aGUgbWF0cml4XG4gICAqIGlmIHBvc2l0aW9uIG91dCBvZiBib3VuZHMgcmV0dXJucyBDb25zdHMuT0JKRUNUX09VVFxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHkgcG9zaXRpb25cbiAgICogQHBhcmFtICB7bnVtYmVyfSB4IHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn0gICBDb250ZW50IG9mIHRoZSB0aWxlXG4gICAqL1xuICBnZXRUaWxlKHgsIHkpIHtcbiAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+IHRoaXMud2lkdGggfHwgeSA+IHRoaXMuaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gQ29uc3RzLk9iamVjdE91dDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwW3ldW3hdO1xuICB9XG4gIC8qKlxuICAgKiBEcmF3cyB0aGUgbWFwXG4gICAqIEByZXR1cm4ge25vbmV9XG4gICAqL1xuICBkcmF3KCkge1xuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLndpZHRoOyArK2kpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHRoaXMuaGVpZ2h0OyArK2opIHtcbiAgICAgICAgbGV0IHRpbGVUeXBlID0gQ29uc3RzLlRpbGVCYWNrZ3JvdW5kO1xuICAgICAgICBpZiAodGhpcy5tYXBbal1baV0gPT09IDEpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuZ2V0VGlsZShpIC0gMSwgaikgJiYgIXRoaXMuZ2V0VGlsZShpICsgMSwgaikpIHtcbiAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRpbGVCb3RoU2lkZXM7XG4gICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5nZXRUaWxlKGkgLSAxLCBqKSkge1xuICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZUxlZnRTaWRlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2V0VGlsZShpICsgMSwgaikpIHtcbiAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRpbGVSaWdodFNpZGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRpbGVNaWRkbGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICB0aGlzLnRpbGVzSW1hZ2UsXG4gICAgICAgICAgdGlsZVR5cGUsXG4gICAgICAgICAgdGhpcy50aGVtZSAqIHRoaXMudGlsZUhlaWdodCxcbiAgICAgICAgICB0aGlzLnRpbGVXaWR0aCxcbiAgICAgICAgICB0aGlzLnRpbGVIZWlnaHQsXG4gICAgICAgICAgaSAqIHRoaXMudGlsZVdpZHRoLFxuICAgICAgICAgIGogKiB0aGlzLnRpbGVIZWlnaHQsXG4gICAgICAgICAgdGhpcy50aWxlV2lkdGgsXG4gICAgICAgICAgdGhpcy50aWxlSGVpZ2h0LFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBtb3ZlKCkge31cblxuICBlbmdpbmVNb3ZlKCkge31cbn1cbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgVGlsZSA9IE9iamVjdC5mcmVlemUoe1xuICB0aWxlczoge1xuICAgIFtDb25zdHMuT2JqZWN0QmFja2dyb3VuZF06IHtcbiAgICAgIHNvbGlkOiBmYWxzZSxcbiAgICAgIGZyZWV6ZTogZmFsc2UsXG4gICAgfSxcbiAgICBbQ29uc3RzLk9iamVjdE91dF06IHtcbiAgICAgIHNvbGlkOiB0cnVlLFxuICAgICAgZnJlZXplOiBmYWxzZSxcbiAgICB9LFxuICAgIFtDb25zdHMuT2JqZWN0UGxheWVyXToge1xuICAgICAgc29saWQ6IHRydWUsXG4gICAgICBmcmVlemU6IGZhbHNlLFxuICAgIH0sXG4gICAgW0NvbnN0cy5PYmplY3RJY2VdOiB7XG4gICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgIGZyZWV6ZTogZmFsc2UsXG4gICAgfSxcbiAgICBbQ29uc3RzLk9iamVjdE1ldGFsXToge1xuICAgICAgc29saWQ6IHRydWUsXG4gICAgICBmcmVlemU6IHRydWUsXG4gICAgfSxcbiAgICBbQ29uc3RzLk9iamVjdFdhbGxdOiB7XG4gICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgIGZyZWV6ZTogdHJ1ZSxcbiAgICB9LFxuICAgIFtDb25zdHMuT2JqZWN0RmlyZV06IHtcbiAgICAgIHNvbGlkOiBmYWxzZSxcbiAgICAgIGZyZWV6ZTogZmFsc2UsXG4gICAgfSxcbiAgICBbQ29uc3RzLk9iamVjdEphcl06IHtcbiAgICAgIHNvbGlkOiB0cnVlLFxuICAgICAgZnJlZXplOiB0cnVlLFxuICAgIH0sXG4gICAgW0NvbnN0cy5PYmplY3RUZWxlcG9ydF06IHtcbiAgICAgIHNvbGlkOiB0cnVlLFxuICAgICAgZnJlZXplOiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgaXNTb2xpZDogZnVuY3Rpb24gKGlkKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVzW2lkXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVU5ERUZJTkVEIE9OIGlzU29saWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW2lkXS5zb2xpZDtcbiAgICB9XG4gIH0sXG5cbiAgaXNGcmVlemFibGU6IGZ1bmN0aW9uIChpZCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy50aWxlc1tpZF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVOREVGSU5FRCBPTiBpc0ZyZWV6YWJsZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudGlsZXNbaWRdLmZyZWV6ZTtcbiAgICB9XG4gIH0sXG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRmlyZSB9IGZyb20gJy4vZmlyZSc7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lJztcbmltcG9ydCB7IEphciB9IGZyb20gJy4vamFyJztcbmltcG9ydCB7IE1ldGFsIH0gZnJvbSAnLi9tZXRhbCc7XG5pbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuL3Jlc291cmNlcyc7XG5pbXBvcnQgeyBUZWxlcG9ydCB9IGZyb20gJy4vdGVsZXBvcnQnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcbiAgaWYgKHdpbmRvdy5GSVJFTklDRV9FRElUT1JfTU9ERSkge1xuICAgIGRvU3RhcnRDbGljaygpO1xuICB9XG4gIGxvYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvU3RhcnRDbGljaygpKTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBkb1N0YXJ0Q2xpY2soKSB7XG4gIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKTtcbiAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGxvYWRlci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgY29uc3QgcmVzb3VyY2VzID0gYXdhaXQgbG9hZEdhbWVSZXNvdXJjZXMoKTtcbiAgc3RhcnRHYW1lKHJlc291cmNlcyk7XG4gIGlmICh3aW5kb3cuRklSRU5JQ0VfRURJVE9SX01PREUpIHtcbiAgICBsb2FkR2FtZUVkaXRvcigpO1xuICB9XG4gIHdpbmRvdy5maXJlbmljZSA9IHRydWU7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRHYW1lUmVzb3VyY2VzKCkge1xuICBsZXQgcmVzb2x2ZTtcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlcyA9PiAocmVzb2x2ZSA9IHJlcykpO1xuICBjb25zdCByZXNvdXJjZXMgPSBuZXcgUmVzb3VyY2VzKCk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ3RpbGVtYXAnLCAnaW1hZ2VzL3RpbGVtYXAucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19pY2UnLCAnaW1hZ2VzL2ljZS5wbmcnKTtcbiAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX2phcicsICdpbWFnZXMvamFyLnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfZmlyZScsICdpbWFnZXMvZmlyZS5wbmcnKTtcbiAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX2RvbmEnLCAnaW1hZ2VzL2RvbmEucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19pbnRybycsICdpbWFnZXMvaW50cm8ucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19tZXRhbCcsICdpbWFnZXMvbWV0YWwucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ190ZWxlcG9ydCcsICdpbWFnZXMvdGVsZXBvcnQucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2Zyb3N0JywgJ2ltYWdlcy9mcm96ZW4ucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1pY2UtcHVzaCcsICdzb3VuZHMvc2Z4LWljZS1wdXNoLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZmlyZS1vZmYnLCAnc291bmRzL3NmeC1maXJlLW9mZi5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWZhbGxpbmcnLCAnc291bmRzL3NmeC1mYWxsaW5nLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtbmV3LWljZScsICdzb3VuZHMvc2Z4LW5ldy1pY2UubXAzJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1jbGltYicsICdzb3VuZHMvc2Z4LWNsaW1iLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtaWNlLWNvbGxpc2lvbicsICdzb3VuZHMvc2Z4LWljZS1jb2xsaXNpb24ubXAzJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1zdGFnZS1lbnRlcicsICdzb3VuZHMvc2Z4LXN0YWdlLWVudGVyLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZGFuZ2VyJywgJ3NvdW5kcy9zZngtZGFuZ2VyLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtaWNlLXJlbW92ZScsICdzb3VuZHMvc2Z4LWljZS1yZW1vdmUubXAzJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1zdGF0ZS1sZWF2ZScsICdzb3VuZHMvc2Z4LXN0YXRlLWxlYXZlLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZGlzYWJsZWQnLCAnc291bmRzL3NmeC1kaXNhYmxlZC5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWZhbGwnLCAnc291bmRzL3NmeC1mYWxsLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtbXVzaWMtc3BhcmtzJywgJ211c2ljL3NwYXJrcy5tcDMnKTtcblxuICByZXNvdXJjZXMucmVhZHkoKCkgPT4ge1xuICAgIHJlc29sdmUocmVzb3VyY2VzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGxvYWRMZXZlbEZyb21FdmVudChldmVudCkge1xuICBsZXQgbHZsID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbHZsJyk7XG4gIGdhbWUuZW5naW5lLmxldmVsID0gcGFyc2VJbnQobHZsLCAxMCk7XG4gIGdhbWUuZW5naW5lLnNjZW5lLmxvYWQoZ2FtZS5lbmdpbmUubGV2ZWwpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUocmVzb3VyY2VzKSB7XG4gIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gIGxldCBnYW1lID0gbmV3IEdhbWUoY2FudmFzLCByZXNvdXJjZXMpO1xuICB3aW5kb3cuZ2FtZSA9IGdhbWU7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5sdmwnKS5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZExldmVsRnJvbUV2ZW50KTtcbiAgfSk7XG4gIGxldCBsdmxTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbC1zZWxlY3RvcicpO1xuICBsdmxTZWxlY3Rvci5zdHlsZS5vcGFjaXR5ID0gMTtcbn1cblxuZnVuY3Rpb24gbG9hZEdhbWVFZGl0b3IoKSB7XG4gIGdhbWUuZW5naW5lLnNvdW5kLm11c2ljT24gPSBmYWxzZTtcbiAgZ2FtZS5lbmdpbmUuc291bmQuc291bmRPbiA9IGZhbHNlO1xuICBnYW1lLnN0YXRlID0gQ29uc3RzLkdhbWVTdGF0ZVBsYXk7XG4gIGdhbWUuZW5naW5lLmVkaXRvciA9IHRydWU7XG4gIGdhbWUuZW5naW5lLmtleWJvYXJkLmludHJvID0gZmFsc2U7XG4gIGdhbWUuZW5naW5lLnNvdW5kLm11c2ljLnBhdXNlKCk7XG5cbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY29uc3QgeFRpbGUgPSBNYXRoLmZsb29yKGUub2Zmc2V0WCAvIDMyKTtcbiAgICBjb25zdCB5VGlsZSA9IE1hdGguZmxvb3IoZS5vZmZzZXRZIC8gMzIpO1xuICAgIGlmICh0b29sIDwgMikge1xuICAgICAgZ2FtZS5lbmdpbmUubWFwLm1hcFt5VGlsZV1beFRpbGVdID0gdG9vbDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoICh0b29sKSB7XG4gICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdFBsYXllcjpcbiAgICAgICAgICBnYW1lLmVuZ2luZS5wbGF5ZXIueCA9IHhUaWxlICogMzI7XG4gICAgICAgICAgZ2FtZS5lbmdpbmUucGxheWVyLnkgPSB5VGlsZSAqIDMyO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RJY2U6XG4gICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkSWNlQmxvY2soeFRpbGUsIHlUaWxlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0TWV0YWw6XG4gICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBNZXRhbChnYW1lLmVuZ2luZSwgeFRpbGUsIHlUaWxlLCAxKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdEZpcmU6XG4gICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBGaXJlKGdhbWUuZW5naW5lLCB4VGlsZSwgeVRpbGUpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0SmFyOlxuICAgICAgICAgIGdhbWUuZW5naW5lLmFkZFNwcml0ZShuZXcgSmFyKGdhbWUuZW5naW5lLCB4VGlsZSwgeVRpbGUpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0VGVsZXBvcnQ6XG4gICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBUZWxlcG9ydChnYW1lLmVuZ2luZSwgeFRpbGUsIHlUaWxlKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUtc2VsZWN0b3InKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICBnYW1lLmVuZ2luZS5tYXAudGhlbWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgIGUudGFyZ2V0LmJsdXIoKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zYXZlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R4dC1sZXZlbCcpLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZ2FtZS5lbmdpbmUuc2NlbmUuc2F2ZSgpKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=