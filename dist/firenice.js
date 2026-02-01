/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animsprite.js"
/*!***************************!*\
  !*** ./src/animsprite.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./src/constants.js"
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Consts: () => (/* binding */ Consts)
/* harmony export */ });
const Consts = Object.freeze({
  // Grid
  TileWidth: 32,

  // Physics
  PhysicsSpeed: 4,
  PlayerSpeed: 2,

  // Timing
  SparkInterval: 10,
  RipDuration: 70,
  IntroDuration: 32,
  SleepThreshold: 500,
  PlayerAnimDelay: 3,
  IceAnimDelay: 9,

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
  MovePush: 16,
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
  GameStatePaused: 3,
  GameStateTransition: 4,
  ColorGreen: '124, 238, 66',
  ColorBlue: '122, 211, 255',
  ColorOrange: '255, 88, 33',
  ColorRed: '255, 135, 124',
  ColorWhite: '255, 255, 255',
});


/***/ },

/***/ "./src/engine.js"
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    if (this.onLevelComplete) {
      this.onLevelComplete(this.level);
    }
  }

  loadNextLevel() {
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
    const foundIceBlocks = [];
    for (let i = 0; i < this.sprites.length; i++) {
      if (this.sprites[i].id === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectIce && this.sprites[i].yTile === ty) {
        const ice = this.sprites[i];
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
    const tx = iceblockA.xTile;
    const ty = iceblockA.yTile;
    const length = iceblockA.length + iceblockB.length + 1;
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


/***/ },

/***/ "./src/fire.js"
/*!*********************!*\
  !*** ./src/fire.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    this.counter += _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.PhysicsSpeed;
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.TileWidth) {
      this.y += _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.PhysicsSpeed;
    } else {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.MoveStand, false);
    }
  }
}


/***/ },

/***/ "./src/game.js"
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine */ "./src/engine.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/state.js");
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
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.engine = new _engine__WEBPACK_IMPORTED_MODULE_1__.Engine(canvas, resources);
    this.gameState = new _state__WEBPACK_IMPORTED_MODULE_2__.GameState();
    this.levels = _levels__WEBPACK_IMPORTED_MODULE_3__.levels;
    this.state = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.GameStatePlay;
    this.engine.sound.soundtrack();
    this.gameState.startLevel();
    this.engine.onLevelComplete = levelIndex => this.onLevelComplete(levelIndex);

    // Transition properties
    this.transitionPhase = null; // 'closing' or 'opening'
    this.transitionRadius = 0;
    this.maxRadius = Math.sqrt(this.canvas.width ** 2 + this.canvas.height ** 2) / 2 + 50;
    this.transitionSpeed = 15;
    this.transitionCenterX = 0;
    this.transitionCenterY = 0;

    this.gameLoop = this.gameLoop_.bind(this);
    setInterval(() => this.gameLoop(), 1000 / 60);
  }

  gameLoop_() {
    this.checkPause();

    if (this.state === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.GameStatePaused) {
      this.drawPauseMenu();
      return;
    }

    if (this.state === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.GameStateTransition) {
      this.updateTransition();
      return;
    }

    this.engine.draw();
    this.drawHUD();
    this.engine.move();

    // Draw opening transition on top if active
    if (this.transitionPhase === 'opening') {
      this.drawCircleTransition();
    }
  }

  drawHUD() {
    const fireCount = this.engine.sprites.filter(s => s.id === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectFire).length;

    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this.ctx.fillRect(5, 5, 130, 25);

    this.ctx.fillStyle = '#fff';
    this.ctx.font = '14px monospace';
    this.ctx.textAlign = 'left';
    this.ctx.fillText(` Lvl ${this.engine.level + 1}  🔥 ${fireCount}`, 12, 22);
  }

  onLevelComplete(levelIndex) {
    this.gameState.completeLevel(levelIndex);

    // Start closing transition centered on player
    this.transitionCenterX = this.engine.player.x + 16;
    this.transitionCenterY = this.engine.player.y + 16;
    this.transitionRadius = this.maxRadius;
    this.transitionPhase = 'closing';
    this.state = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.GameStateTransition;
  }

  updateTransition() {
    if (this.transitionPhase === 'closing') {
      // Draw the current game state
      this.engine.draw();

      // Draw closing circle
      this.drawCircleTransition();

      // Shrink the circle
      this.transitionRadius -= this.transitionSpeed;

      if (this.transitionRadius <= 0) {
        this.transitionRadius = 0;

        // Load next level
        this.gameState.startLevel();
        this.engine.loadNextLevel();

        // Switch to opening phase, centered on new player position
        this.transitionPhase = 'opening';
        this.transitionCenterX = this.engine.player.x + 16;
        this.transitionCenterY = this.engine.player.y + 16;
      }
    } else if (this.transitionPhase === 'opening') {
      // Draw the new level
      this.engine.draw();
      this.drawHUD();

      // Draw opening circle
      this.drawCircleTransition();

      // Expand the circle
      this.transitionRadius += this.transitionSpeed;

      if (this.transitionRadius >= this.maxRadius) {
        // Transition complete
        this.transitionPhase = null;
        this.state = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.GameStatePlay;
      }
    }
  }

  drawCircleTransition() {
    this.ctx.save();

    // Create a path that covers the whole canvas except the circle
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.arc(
      this.transitionCenterX,
      this.transitionCenterY,
      Math.max(0, this.transitionRadius),
      0,
      Math.PI * 2,
      true
    );
    this.ctx.closePath();

    this.ctx.fillStyle = '#000';
    this.ctx.fill();

    this.ctx.restore();
  }

  checkPause() {
    if (this.engine.keyboard.escape && this.state === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.GameStatePlay) {
      this.engine.keyboard.escape = false;
      this.state = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.GameStatePaused;
      if (this.engine.sound.music) {
        this.engine.sound.music.pause();
      }
    } else if (this.engine.keyboard.escape && this.state === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.GameStatePaused) {
      this.engine.keyboard.escape = false;
      this.state = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.GameStatePlay;
      if (this.engine.sound.musicOn) {
        this.engine.sound.music.play().catch(() => { });
      }
    }
  }

  drawPauseMenu() {
    // Handle input while paused
    if (this.engine.keyboard.mKey) {
      this.engine.keyboard.mKey = false;
      this.engine.sound.toggleMusic();
    }
    if (this.engine.keyboard.sKey) {
      this.engine.keyboard.sKey = false;
      this.engine.sound.toggleSound();
    }
    if (this.engine.keyboard.enter) {
      this.engine.keyboard.enter = false;
      this.state = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.GameStatePlay;
      this.engine.scene.load(this.engine.level);
      if (this.engine.sound.musicOn && this.engine.sound.music) {
        this.engine.sound.music.play().catch(() => { });
      }
      return;
    }

    // Draw game frame underneath
    this.engine.draw();

    // Draw semi-transparent overlay
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw pause text
    this.ctx.fillStyle = '#fff';
    this.ctx.font = 'bold 32px monospace';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('PAUSED', this.canvas.width / 2, this.canvas.height / 2 - 60);

    this.ctx.font = '16px monospace';
    this.ctx.fillText('ESC - Resume', this.canvas.width / 2, this.canvas.height / 2 - 10);
    this.ctx.fillText('ENTER - Restart level', this.canvas.width / 2, this.canvas.height / 2 + 15);
    this.ctx.fillText(`M - Music: ${this.engine.sound.musicOn ? 'ON' : 'OFF'}`, this.canvas.width / 2, this.canvas.height / 2 + 40);
    this.ctx.fillText(`S - Sound: ${this.engine.sound.soundOn ? 'ON' : 'OFF'}`, this.canvas.width / 2, this.canvas.height / 2 + 65);
  }
}


/***/ },

/***/ "./src/ice.js"
/*!********************!*\
  !*** ./src/ice.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    this.animDelay = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.IceAnimDelay;
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
      const tile_down = this.spriteTypeAt(this.xTile + i, this.yTile + 1);
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
    this.counter += _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.PhysicsSpeed;
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth) {
      this.x += _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.PhysicsSpeed * this.direction;
    } else {
      this.push();
    }
  }

  doDown() {
    this.counter += _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.PhysicsSpeed;
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth) {
      this.y += _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.PhysicsSpeed;
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


/***/ },

/***/ "./src/jar.js"
/*!********************!*\
  !*** ./src/jar.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    this.counter += _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.PhysicsSpeed;
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.TileWidth) {
      this.y += _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.PhysicsSpeed;
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


/***/ },

/***/ "./src/keyboard.js"
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    this.escape = false;
    this.mKey = false;
    this.sKey = false;
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
    switch (e.key) {
      case 'ArrowLeft':
        this.left = true;
        this.right = false;
        break;
      case 'ArrowUp':
        this.up = true;
        break;
      case 'ArrowRight':
        this.right = true;
        this.left = false;
        break;
      case 'ArrowDown':
      case ' ':
        this.action = true;
        this.left = false;
        this.right = false;
        this.down = true;
        break;
      case 'Enter':
        this.enter = false;
        break;
      case 'Escape':
        this.escape = true;
        break;
      case 'm':
      case 'M':
        this.mKey = true;
        break;
      case 's':
      case 'S':
        this.sKey = true;
        break;
    }
  }

  keyup_(e) {
    e.preventDefault();
    switch (e.key) {
      case 'ArrowLeft':
        this.left = false;
        break;
      case 'ArrowUp':
        this.up = false;
        break;
      case 'ArrowRight':
        this.right = false;
        break;
      case 'ArrowDown':
      case ' ':
        this.action = false;
        this.down = false;
        break;
      case 'Enter':
        this.enter = true;
        break;
    }
  }
}


/***/ },

/***/ "./src/levels.js"
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   levels: () => (/* binding */ levels)
/* harmony export */ });
const levels = [
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 0,
    sprites: [
      { id: 7, x: 13, y: 5, v: 1 },
      { id: 3, x: 7, y: 10, v: 1 },
      { id: 3, x: 7, y: 9, v: 1 },
      { id: 3, x: 7, y: 8, v: 1 },
      { id: 3, x: 7, y: 7, v: 1 },
      { id: 6, x: 8, y: 5, v: 1 },
      { id: 3, x: 10, y: 5, v: 1 },
      { id: 6, x: 9, y: 10, v: 1 },
      { id: 6, x: 9, y: 9, v: 1 },
      { id: 6, x: 9, y: 8, v: 1 },
      { id: 6, x: 11, y: 11, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 1,
    sprites: [
      { id: 7, x: 5, y: 8, v: 1 },
      { id: 6, x: 8, y: 8, v: 1 },
      { id: 3, x: 6, y: 8, v: 1 },
      { id: 3, x: 12, y: 6, v: 4 },
      { id: 6, x: 14, y: 9, v: 1 },
      { id: 6, x: 14, y: 8, v: 1 },
      { id: 6, x: 14, y: 7, v: 1 },
      { id: 6, x: 15, y: 9, v: 1 },
      { id: 3, x: 13, y: 9, v: 1 },
      { id: 3, x: 13, y: 8, v: 1 },
      { id: 3, x: 13, y: 7, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 2,
    sprites: [
      { id: 7, x: 16, y: 7, v: 1 },
      { id: 6, x: 12, y: 10, v: 1 },
      { id: 3, x: 7, y: 5, v: 1 },
      { id: 6, x: 11, y: 7, v: 1 },
      { id: 6, x: 11, y: 6, v: 1 },
      { id: 3, x: 13, y: 7, v: 1 },
      { id: 3, x: 13, y: 6, v: 1 },
      { id: 3, x: 10, y: 7, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 0,
    sprites: [
      { id: 7, x: 10, y: 10, v: 1 },
      { id: 6, x: 14, y: 9, v: 1 },
      { id: 6, x: 15, y: 8, v: 1 },
      { id: 6, x: 13, y: 10, v: 1 },
      { id: 3, x: 8, y: 9, v: 5 },
      { id: 3, x: 12, y: 10, v: 1 },
      { id: 3, x: 12, y: 8, v: 3 },
      { id: 3, x: 14, y: 7, v: 2 },
      { id: 3, x: 8, y: 10, v: 1 },
      { id: 3, x: 6, y: 8, v: 3 },
      { id: 3, x: 5, y: 7, v: 2 },
      { id: 6, x: 7, y: 10, v: 1 },
      { id: 6, x: 6, y: 9, v: 1 },
      { id: 6, x: 5, y: 8, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [
      { id: 7, x: 13, y: 9, v: 1 },
      { id: 3, x: 12, y: 11, v: 3 },
      { id: 3, x: 12, y: 10, v: 3 },
      { id: 3, x: 9, y: 8, v: 1 },
      { id: 3, x: 5, y: 6, v: 1 },
      { id: 3, x: 11, y: 8, v: 1 },
      { id: 6, x: 5, y: 11, v: 1 },
      { id: 3, x: 5, y: 5, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 5,
    sprites: [
      { id: 7, x: 15, y: 4, v: 1 },
      { id: 3, x: 5, y: 5, v: 1, fl: false, fr: false },
      { id: 3, x: 8, y: 7, v: 1, fl: false, fr: false },
      { id: 3, x: 10, y: 7, v: 1, fl: false, fr: false },
      { id: 3, x: 12, y: 7, v: 1, fl: false, fr: false },
      { id: 3, x: 4, y: 9, v: 13, fl: true, fr: false },
      { id: 6, x: 4, y: 8, v: 1 },
      { id: 6, x: 5, y: 11, v: 1 },
      { id: 6, x: 6, y: 11, v: 1 },
      { id: 6, x: 7, y: 11, v: 1 },
      { id: 6, x: 8, y: 11, v: 1 },
      { id: 6, x: 9, y: 11, v: 1 },
      { id: 6, x: 10, y: 11, v: 1 },
      { id: 6, x: 11, y: 11, v: 1 },
      { id: 6, x: 12, y: 11, v: 1 },
      { id: 6, x: 13, y: 11, v: 1 },
      { id: 6, x: 14, y: 11, v: 1 },
      { id: 6, x: 15, y: 11, v: 1 },
      { id: 6, x: 16, y: 11, v: 1 },
      { id: 3, x: 16, y: 5, v: 1, fl: true, fr: true },
      { id: 3, x: 4, y: 6, v: 1, fl: true, fr: true },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 1,
    sprites: [
      { id: 7, x: 14, y: 5, v: 1 },
      { id: 6, x: 10, y: 11, v: 1 },
      { id: 6, x: 11, y: 12, v: 1 },
      { id: 6, x: 12, y: 12, v: 1 },
      { id: 3, x: 10, y: 6, v: 5 },
      { id: 3, x: 12, y: 5, v: 1 },
      { id: 3, x: 8, y: 7, v: 1 },
      { id: 6, x: 8, y: 6, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 1,
    sprites: [
      { id: 7, x: 10, y: 7, v: 1 },
      { id: 6, x: 7, y: 11, v: 1 },
      { id: 6, x: 8, y: 11, v: 1 },
      { id: 6, x: 9, y: 11, v: 1 },
      { id: 6, x: 10, y: 11, v: 1 },
      { id: 6, x: 11, y: 11, v: 1 },
      { id: 6, x: 12, y: 11, v: 1 },
      { id: 3, x: 13, y: 11, v: 2 },
      { id: 3, x: 7, y: 10, v: 7 },
      { id: 6, x: 7, y: 9, v: 1 },
      { id: 3, x: 13, y: 7, v: 1 },
      { id: 6, x: 13, y: 6, v: 1 },
      { id: 3, x: 8, y: 6, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [
      { id: 7, x: 7, y: 5, v: 1 },
      { id: 6, x: 7, y: 9, v: 1 },
      { id: 3, x: 10, y: 6, v: 1 },
      { id: 3, x: 10, y: 5, v: 1 },
      { id: 6, x: 13, y: 9, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 10,
    sprites: [
      { id: 7, x: 5, y: 5, v: 1 },
      { id: 6, x: 4, y: 7, v: 1 },
      { id: 6, x: 5, y: 8, v: 1 },
      { id: 6, x: 6, y: 9, v: 1 },
      { id: 6, x: 7, y: 10, v: 1 },
      { id: 6, x: 8, y: 11, v: 1 },
      { id: 6, x: 9, y: 11, v: 1 },
      { id: 6, x: 10, y: 10, v: 1 },
      { id: 6, x: 11, y: 9, v: 1 },
      { id: 6, x: 12, y: 8, v: 1 },
      { id: 6, x: 13, y: 7, v: 1 },
      { id: 3, x: 4, y: 6, v: 10 },
      { id: 3, x: 7, y: 5, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [
      { id: 7, x: 5, y: 4, v: 1 },
      { id: 6, x: 15, y: 11, v: 1 },
      { id: 6, x: 7, y: 11, v: 1 },
      { id: 6, x: 8, y: 11, v: 1 },
      { id: 6, x: 9, y: 11, v: 1 },
      { id: 3, x: 6, y: 5, v: 1 },
      { id: 3, x: 8, y: 4, v: 2 },
      { id: 3, x: 13, y: 4, v: 2 },
      { id: 6, x: 11, y: 4, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 7,
    sprites: [
      { id: 7, x: 10, y: 6, v: 1 },
      { id: 6, x: 8, y: 6, v: 1 },
      { id: 3, x: 12, y: 6, v: 1 },
      { id: 3, x: 4, y: 4, v: 2 },
      { id: 3, x: 16, y: 5, v: 1 },
      { id: 3, x: 16, y: 5, v: 1 },
      { id: 3, x: 15, y: 4, v: 1 },
      { id: 6, x: 16, y: 4, v: 1 },
      { id: 6, x: 13, y: 11, v: 1 },
      { id: 6, x: 7, y: 11, v: 1 },
      { id: 6, x: 14, y: 10, v: 1 },
      { id: 6, x: 4, y: 10, v: 1 },
      { id: 6, x: 8, y: 10, v: 1 },
      { id: 6, x: 9, y: 10, v: 1 },
      { id: 6, x: 10, y: 10, v: 1 },
      { id: 6, x: 11, y: 10, v: 1 },
      { id: 6, x: 12, y: 10, v: 1 },
      { id: 6, x: 15, y: 10, v: 1 },
      { id: 3, x: 5, y: 10, v: 1 },
      { id: 3, x: 5, y: 9, v: 11 },
      { id: 6, x: 6, y: 10, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 2,
    sprites: [
      { id: 7, x: 14, y: 4, v: 1 },
      { id: 4, x: 12, y: 4, v: 1 },
      { id: 6, x: 9, y: 4, v: 1 },
      { id: 6, x: 12, y: 8, v: 1 },
      { id: 6, x: 10, y: 11, v: 1 },
      { id: 4, x: 9, y: 8, v: 1 },
      { id: 4, x: 12, y: 11, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 5,
    sprites: [
      { id: 7, x: 4, y: 4, v: 1 },
      { id: 6, x: 6, y: 4, v: 1 },
      { id: 6, x: 7, y: 4, v: 1 },
      { id: 4, x: 5, y: 4, v: 1 },
      { id: 6, x: 16, y: 11, v: 1 },
      { id: 6, x: 15, y: 11, v: 1 },
      { id: 6, x: 13, y: 11, v: 1 },
      { id: 6, x: 14, y: 11, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [
      { id: 7, x: 10, y: 5, v: 1 },
      { id: 5, x: 8, y: 12, v: 1 },
      { id: 6, x: 7, y: 10, v: 1 },
      { id: 6, x: 10, y: 11, v: 1 },
      { id: 4, x: 9, y: 5, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 1,
    sprites: [
      { id: 7, x: 12, y: 7, v: 1 },
      { id: 3, x: 12, y: 11, v: 1, fl: false, fr: false },
      { id: 3, x: 8, y: 10, v: 5, fl: false, fr: false },
      { id: 3, x: 9, y: 9, v: 1, fl: false, fr: false },
      { id: 3, x: 8, y: 8, v: 5, fl: false, fr: false },
      { id: 3, x: 8, y: 6, v: 5, fl: false, fr: false },
      { id: 6, x: 8, y: 11, v: 1 },
      { id: 6, x: 12, y: 9, v: 1 },
      { id: 6, x: 8, y: 7, v: 1 },
      { id: 6, x: 12, y: 5, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 7,
    sprites: [
      { id: 3, x: 13, y: 8, v: 1, fl: true, fr: true },
      { id: 3, x: 11, y: 8, v: 1, fl: true, fr: true },
      { id: 4, x: 12, y: 8, v: 1 },
      { id: 6, x: 12, y: 9, v: 1 },
      { id: 6, x: 6, y: 9, v: 1 },
      { id: 7, x: 9, y: 6, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [
      { id: 7, x: 6, y: 5, v: 1 },
      { id: 6, x: 15, y: 8, v: 1 },
      { id: 4, x: 9, y: 9, v: 1 },
      { id: 6, x: 5, y: 9, v: 1 },
      { id: 3, x: 8, y: 8, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 1,
    sprites: [
      { id: 7, x: 10, y: 9, v: 1 },
      { id: 6, x: 7, y: 9, v: 1 },
      { id: 3, x: 7, y: 8, v: 3, fl: true, fr: false },
      { id: 3, x: 9, y: 9, v: 1, fl: false, fr: false },
      { id: 6, x: 12, y: 7, v: 1 },
      { id: 3, x: 8, y: 7, v: 1, fl: false, fr: false },
      { id: 3, x: 8, y: 6, v: 3, fl: false, fr: false },
      { id: 3, x: 11, y: 6, v: 1, fl: false, fr: false },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 2,
    sprites: [
      { id: 7, x: 8, y: 5, v: 1 },
      { id: 6, x: 10, y: 6, v: 1 },
      { id: 6, x: 11, y: 11, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 9,
    sprites: [
      { id: 7, x: 6, y: 4, v: 1 },
      { id: 3, x: 8, y: 5, v: 1, fl: true, fr: true },
      { id: 3, x: 10, y: 5, v: 1, fl: true, fr: true },
      { id: 3, x: 12, y: 5, v: 4, fl: true, fr: true },
      { id: 6, x: 10, y: 4, v: 1 },
      { id: 4, x: 13, y: 10, v: 1 },
      { id: 4, x: 7, y: 10, v: 1 },
      { id: 6, x: 5, y: 10, v: 1 },
      { id: 6, x: 15, y: 10, v: 1 },
      { id: 5, x: 10, y: 11, v: false },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 0,
    sprites: [
      { id: 7, x: 12, y: 6, v: 1 },
      { id: 3, x: 9, y: 7, v: 4, fl: true, fr: true },
      { id: 6, x: 9, y: 6, v: 1 },
      { id: 6, x: 10, y: 6, v: 1 },
      { id: 6, x: 11, y: 6, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 0,
    sprites: [
      { id: 7, x: 10, y: 6, v: 1 },
      { id: 5, x: 8, y: 11, v: true },
      { id: 5, x: 7, y: 8, v: true },
      { id: 5, x: 10, y: 9, v: true },
      { id: 6, x: 7, y: 7, v: 1 },
      { id: 6, x: 8, y: 10, v: 1 },
      { id: 6, x: 10, y: 8, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 4,
    sprites: [
      { id: 7, x: 10, y: 8, v: 1 },
      { id: 3, x: 8, y: 7, v: 1, fl: false, fr: true },
      { id: 3, x: 6, y: 8, v: 1, fl: true, fr: false },
      { id: 3, x: 6, y: 6, v: 1, fl: true, fr: false },
      { id: 6, x: 8, y: 10, v: 1 },
      { id: 6, x: 11, y: 10, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [
      { id: 7, x: 11, y: 12, v: 1 },
      { id: 5, x: 12, y: 9, v: true },
      { id: 6, x: 16, y: 12, v: 1 },
      { id: 4, x: 13, y: 3, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 8,
    sprites: [
      { id: 7, x: 14, y: 5, v: 1 },
      { id: 5, x: 13, y: 8, v: true },
      { id: 4, x: 12, y: 7, v: 1 },
      { id: 6, x: 11, y: 11, v: 1 },
      { id: 6, x: 13, y: 7, v: 1 },
      { id: 6, x: 11, y: 7, v: 1 },
      { id: 6, x: 16, y: 7, v: 1 },
      { id: 3, x: 11, y: 6, v: 4, fl: true, fr: false },
      { id: 3, x: 11, y: 5, v: 1, fl: false, fr: false },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 8,
    sprites: [
      { id: 7, x: 5, y: 2, v: 1 },
      { id: 4, x: 6, y: 3, v: 1 },
      { id: 4, x: 4, y: 3, v: 1 },
      { id: 3, x: 5, y: 3, v: 1, fl: true, fr: true },
      { id: 6, x: 6, y: 4, v: 1 },
      { id: 6, x: 4, y: 4, v: 1 },
      { id: 4, x: 8, y: 6, v: 1 },
      { id: 3, x: 9, y: 6, v: 1, fl: true, fr: false },
      { id: 3, x: 7, y: 6, v: 1, fl: false, fr: true },
      { id: 4, x: 6, y: 9, v: 1 },
      { id: 4, x: 4, y: 9, v: 1 },
      { id: 3, x: 5, y: 9, v: 1, fl: true, fr: true },
      { id: 6, x: 6, y: 10, v: 1 },
      { id: 6, x: 4, y: 10, v: 1 },
      { id: 6, x: 9, y: 7, v: 1 },
      { id: 6, x: 7, y: 7, v: 1 },
      { id: 4, x: 12, y: 9, v: 1 },
      { id: 4, x: 10, y: 9, v: 1 },
      { id: 3, x: 11, y: 9, v: 1, fl: true, fr: true },
      { id: 6, x: 11, y: 10, v: 1 },
      { id: 4, x: 14, y: 6, v: 1 },
      { id: 3, x: 15, y: 6, v: 1, fl: true, fr: false },
      { id: 3, x: 13, y: 6, v: 1, fl: false, fr: true },
      { id: 6, x: 14, y: 7, v: 1 },
      { id: 6, x: 11, y: 4, v: 1 },
      { id: 4, x: 12, y: 3, v: 1 },
      { id: 4, x: 10, y: 3, v: 1 },
      { id: 3, x: 11, y: 3, v: 1, fl: true, fr: true },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 8,
    sprites: [
      { id: 7, x: 15, y: 3, v: 1 },
      { id: 3, x: 6, y: 5, v: 8 },
      { id: 3, x: 13, y: 4, v: 4 },
      { id: 6, x: 5, y: 6, v: 1 },
      { id: 6, x: 6, y: 7, v: 1 },
      { id: 6, x: 7, y: 8, v: 1 },
      { id: 6, x: 12, y: 7, v: 1 },
      { id: 6, x: 13, y: 6, v: 1 },
      { id: 6, x: 16, y: 11, v: 1 },
      { id: 6, x: 16, y: 10, v: 1 },
      { id: 6, x: 4, y: 11, v: 1 },
      { id: 6, x: 11, y: 9, v: 1 },
      { id: 6, x: 4, y: 10, v: 1 },
      { id: 6, x: 10, y: 9, v: 1 },
      { id: 6, x: 9, y: 9, v: 1 },
      { id: 6, x: 8, y: 9, v: 1 },
      { id: 6, x: 10, y: 11, v: 1 },
      { id: 6, x: 9, y: 11, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [
      { id: 7, x: 16, y: 11, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 6,
    sprites: [
      { id: 7, x: 12, y: 8, v: 1 },
      { id: 5, x: 10, y: 9, v: true },
      { id: 8, x: 16, y: 9, v: false },
      { id: 8, x: 10, y: 5, v: false },
      { id: 6, x: 6, y: 10, v: 1 },
    ],
  },
  {
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    theme: 9,
    sprites: [
      { id: 7, x: 12, y: 12, v: 1 },
      { id: 6, x: 10, y: 2, v: 1 },
      { id: 5, x: 6, y: 12, v: 1 },
      { id: 6, x: 10, y: 6, v: 1 },
    ],
  },
];


/***/ },

/***/ "./src/metal.js"
/*!**********************!*\
  !*** ./src/metal.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    this.counter += _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.PhysicsSpeed;
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth) {
      this.x += _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.PhysicsSpeed * this.direction;
    } else {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveStand, false);
    }
  }

  doDown() {
    this.counter += _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.PhysicsSpeed;
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.TileWidth) {
      this.y += _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.PhysicsSpeed;
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


/***/ },

/***/ "./src/player.js"
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    this.speed = _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.PlayerSpeed;
    this.direction = 1;
    this.state = 0; //standing top right down left
    this.moving = false;
    this.tileWidth = _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.TileWidth;
    this.tileHeight = _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.TileWidth;
    this.animDelay = _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.PlayerAnimDelay;
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
    if (this.counter % _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.SparkInterval === 0) {
      this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorRed, 5, 1.2);
      this.engine.addSparks(this.xTile, this.yTile, _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.ColorBlue, 5, 0.7);
    }
    if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.RipDuration) {
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
    if (this.counter % _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.SparkInterval === 0) {
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
    if (this.counter >= _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.IntroDuration) {
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
      if (this.standCounter++ > _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.SleepThreshold) {
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
    const ice = this.engine.iceAt(this.xTile + this.direction, this.yTile);
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
    if (this.counter % _constants__WEBPACK_IMPORTED_MODULE_2__.Consts.SparkInterval === 0) {
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
    if (!teleport || !teleport.link) {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_2__.Consts.MoveStand, false);
      return;
    }
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


/***/ },

/***/ "./src/resources.js"
/*!**************************!*\
  !*** ./src/resources.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    if (this.canvas) {
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


/***/ },

/***/ "./src/scene.js"
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    const data = {};
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
        case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectIce: {
          const frozen = new _struct__WEBPACK_IMPORTED_MODULE_1__.Frost(true, true);
          if (typeof sprite.fl !== 'undefined') {
            frozen.left = sprite.fl;
            frozen.right = sprite.fr;
          }
          this.engine.addSprite(new _ice__WEBPACK_IMPORTED_MODULE_3__.Ice(this.engine, sprite.x, sprite.y, parseInt(sprite.v), frozen));
          break;
        }
        case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectMetal:
          this.engine.addSprite(new _metal__WEBPACK_IMPORTED_MODULE_5__.Metal(this.engine, sprite.x, sprite.y, 1));
          break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectFire:
          this.engine.addSprite(new _fire__WEBPACK_IMPORTED_MODULE_2__.Fire(this.engine, sprite.x, sprite.y));
          break;
        case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectJar: {
          const jar = new _jar__WEBPACK_IMPORTED_MODULE_4__.Jar(this.engine, sprite.x, sprite.y);
          if (sprite.v === 1) {
            jar.turnOnFire();
          }
          this.engine.addSprite(jar);
          break;
        }
        case _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectTeleport: {
          const teleport = new _teleport__WEBPACK_IMPORTED_MODULE_9__.Teleport(this.engine, sprite.x, sprite.y);
          this.engine.addSprite(teleport);
          teleport.linkId = sprite.link;
          teleports.set(sprite.ref, teleport);
          break;
        }
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


/***/ },

/***/ "./src/sfx.js"
/*!********************!*\
  !*** ./src/sfx.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./src/sound.js"
/*!**********************!*\
  !*** ./src/sound.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sound: () => (/* binding */ Sound)
/* harmony export */ });
class Sound {
  constructor(resources) {
    this.resources = resources;
    this.sfxVolume = 0.3;
    this.musicVolume = 0.2;
    this.music = null;

    // Load preferences from localStorage
    this.loadPreferences();

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

  loadPreferences() {
    try {
      const musicOn = localStorage.getItem('musicOn');
      const soundOn = localStorage.getItem('soundOn');
      this.musicOn = musicOn === null ? true : musicOn === 'true';
      this.soundOn = soundOn === null ? true : soundOn === 'true';
    } catch {
      this.musicOn = true;
      this.soundOn = true;
    }
  }

  savePreferences() {
    try {
      localStorage.setItem('musicOn', String(this.musicOn));
      localStorage.setItem('soundOn', String(this.soundOn));
    } catch {
      // localStorage not available
    }
  }

  toggleMusic() {
    this.musicOn = !this.musicOn;
    this.savePreferences();
    if (this.music) {
      if (this.musicOn) {
        this.music.play().catch(() => {});
      } else {
        this.music.pause();
      }
    }
    return this.musicOn;
  }

  toggleSound() {
    this.soundOn = !this.soundOn;
    this.savePreferences();
    return this.soundOn;
  }

  setSfxVolume(volume) {
    this.sfxVolume = Math.max(0, Math.min(1, volume));
  }

  setMusicVolume(volume) {
    this.musicVolume = Math.max(0, Math.min(1, volume));
    if (this.music) {
      this.music.volume = this.musicVolume;
    }
  }

  play(sfx) {
    if (!this.soundOn) return;
    const audio = this.sfx[sfx];
    if (!audio) return;
    audio.volume = this.sfxVolume;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  playOnce(sfx) {
    const audio = this.sfx[sfx];
    if (!audio || !audio.paused) return;
    if (!this.soundOn) return;
    audio.volume = this.sfxVolume;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  stop(sfx) {
    const audio = this.sfx[sfx];
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  }

  soundtrack() {
    this.music = this.resources.get('sfx-music-sparks');
    if (!this.music) return;
    this.music.muted = false;
    this.music.volume = this.musicVolume;
    this.music.loop = true;
    if (this.musicOn) {
      this.music.play().catch(() => {});
    }
  }
}


/***/ },

/***/ "./src/sprite.js"
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./src/state.js"
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameState: () => (/* binding */ GameState)
/* harmony export */ });
/**
 * Game state manager for tracking score and progress
 */
class GameState {
  constructor() {
    this.score = 0;
    this.levelStartTime = 0;
    this.loadFromStorage();
  }

  loadFromStorage() {
    try {
      const saved = localStorage.getItem('gameState');
      if (saved) {
        const data = JSON.parse(saved);
        this.score = data.score || 0;
        this.bestTimes = data.bestTimes || {};
      } else {
        this.bestTimes = {};
      }
    } catch {
      this.score = 0;
      this.bestTimes = {};
    }
  }

  saveToStorage() {
    try {
      localStorage.setItem(
        'gameState',
        JSON.stringify({
          score: this.score,
          bestTimes: this.bestTimes,
        }),
      );
    } catch {
      // localStorage not available
    }
  }

  startLevel() {
    this.levelStartTime = performance.now();
  }

  completeLevel(levelIndex) {
    const completionTime = Math.floor((performance.now() - this.levelStartTime) / 1000);
    const levelKey = `level_${levelIndex}`;

    // Add score based on completion time (bonus for faster completion)
    const timeBonus = Math.max(0, 100 - completionTime);
    this.score += 100 + timeBonus;

    // Track best time
    if (!this.bestTimes[levelKey] || completionTime < this.bestTimes[levelKey]) {
      this.bestTimes[levelKey] = completionTime;
    }

    this.saveToStorage();
    return { completionTime, timeBonus };
  }

  getBestTime(levelIndex) {
    return this.bestTimes[`level_${levelIndex}`] || null;
  }

  resetScore() {
    this.score = 0;
    this.saveToStorage();
  }
}


/***/ },

/***/ "./src/struct.js"
/*!***********************!*\
  !*** ./src/struct.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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

class Frost {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
}


/***/ },

/***/ "./src/teleport.js"
/*!*************************!*\
  !*** ./src/teleport.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
    this.counter += _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.PhysicsSpeed;
    if (this.counter <= _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.TileWidth) {
      this.y += _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.PhysicsSpeed;
    } else {
      this.setState(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.MoveStand, false);
    }
  }

  draw() {
    super.draw();
    this.drawFrost();
  }
}


/***/ },

/***/ "./src/tilemap.js"
/*!************************!*\
  !*** ./src/tilemap.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./src/tiles.js"
/*!**********************!*\
  !*** ./src/tiles.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
  document.getElementById('loader').addEventListener('click', () => doStartClick());
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
  const lvl = event.target.getAttribute('lvl');
  game.engine.level = parseInt(lvl, 10);
  game.engine.scene.load(game.engine.level);
}

function startGame(resources) {
  const canvas = document.getElementById('canvas');
  const game = new _game__WEBPACK_IMPORTED_MODULE_2__.Game(canvas, resources);
  window.game = game;
  document.querySelectorAll('button.lvl').forEach(btn => {
    btn.addEventListener('click', loadLevelFromEvent);
  });
  const lvlSelector = document.getElementById('level-selector');
  lvlSelector.style.opacity = 1;
}

function loadGameEditor() {
  game.engine.sound.musicOn = false;
  game.engine.sound.soundOn = false;
  game.state = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.GameStatePlay;
  game.engine.editor = true;
  game.engine.keyboard.intro = false;
  game.engine.sound.music.pause();

  let isDrawing = false;
  let lastTileX = -1;
  let lastTileY = -1;

  function getTileCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: Math.floor((e.clientX - rect.left) * scaleX / 32),
      y: Math.floor((e.clientY - rect.top) * scaleY / 32),
    };
  }

  function placeTool(xTile, yTile) {
    if (xTile < 0 || yTile < 0 || xTile >= game.engine.map.map[0].length || yTile >= game.engine.map.map.length) {
      return;
    }
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
  }

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    const { x, y } = getTileCoords(e);
    lastTileX = x;
    lastTileY = y;
    placeTool(x, y);
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    const { x, y } = getTileCoords(e);
    // Only place if we moved to a new tile and tool supports dragging (tiles only)
    if ((x !== lastTileX || y !== lastTileY) && tool < 2) {
      placeTool(x, y);
      lastTileX = x;
      lastTileY = y;
    }
  });

  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    lastTileX = -1;
    lastTileY = -1;
  });

  canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
    lastTileX = -1;
    lastTileY = -1;
  });

  const themeSelector = document.getElementById('theme-selector');
  if (themeSelector) {
    themeSelector.addEventListener('change', (e) => {
      game.engine.map.theme = parseInt(e.target.value, 10);
      e.target.blur();
    });
  }

  document.getElementById('btn-save').addEventListener('click', () => {
    document.getElementById('txt-level').value = JSON.stringify(game.engine.scene.save());
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL2FuaW1zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9maXJlLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL2ljZS5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL2phci5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL2tleWJvYXJkLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvbGV2ZWxzLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvbWV0YWwuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9yZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9zY2VuZS5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL3NmeC5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL3NvdW5kLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvc3ByaXRlLmpzIiwid2VicGFjazovL2ZpcmUtbi1pY2UvLi9zcmMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy90ZWxlcG9ydC5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlLy4vc3JjL3RpbGVtYXAuanMiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy90aWxlcy5qcyIsIndlYnBhY2s6Ly9maXJlLW4taWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpcmUtbi1pY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpcmUtbi1pY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maXJlLW4taWNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmlyZS1uLWljZS8uL3NyYy9maXJlbmljZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltU3ByaXRlIGV4dGVuZHMgU3ByaXRlIHtcclxuICAvKipcclxuICAgKiBBbmltYXRlZCBTcHJpdGUsIGluaGVyaXRzIGZyb20gU3ByaXRlLlxyXG4gICAqIEFkZHMgZHJhd2luZyBvZiBwaWN0dXJlcyBpbiB0aGUgYm9keSBvZiBzcHJpdGVcclxuICAgKiBAcGFyYW0ge29iamVjdH0gZW5naW5lICAgIEVuZ2luZSBFbmdpbmVcclxuICAgKiBAcGFyYW0ge29iamVjdH0gaW1hZ2UgICBEb20gaW1hZ2Ugb2JqZWN0IChpbWcgc3JjPSlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdHggICAgICBUaWxlIFggcG9zaXRpb25cclxuICAgKiBAcGFyYW0ge251bWJlcn0gdHkgICAgICBUaWxlIFkgcG9zaXRpb25cclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggICBXaWR0aCBvZiB0aGUgc3ByaXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAgSGVpZ2h0IG9mIHRoZSBzcHJpdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0WCBPZmZzZXQgWCBvZiBkcmF3aW5nIHRoZSBwaWN0dXJlIGludG8gdGhlIGNhbnZhc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRZIE9mZnNldCBZIG9mIGRyYXdpbmcgdGhlIHBpY3R1cmUgaW50byB0aGUgY2FudmFzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0ICAgQW5pbWF0aW9uIGZyYW1lIHN0YXJ0XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCAgICAgQW5pbWF0aW9uIGZyYW1lIGVuZFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCAgIFJlcGVhdCBhbmltYXRpb25cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihpZCwgZW5naW5lLCBpbWFnZSwgdHgsIHR5LCB3aWR0aCwgaGVpZ2h0LCBvZmZzZXRYLCBvZmZzZXRZLCBzdGFydCwgZW5kLCBsb29wKSB7XHJcbiAgICBzdXBlcihpZCwgZW5naW5lLCB0eCwgdHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy5pbWFnZSA9IHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoaW1hZ2UpO1xyXG4gICAgdGhpcy5hbmltTG9vcCA9IGxvb3A7XHJcbiAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgdGhpcy5hbmltRW5kID0gZW5kO1xyXG4gICAgdGhpcy5hbmltQ291bnQgPSAwO1xyXG4gICAgdGhpcy5hbmltRGVsYXkgPSBDb25zdHMuQW5pbURlZmF1bHREZWxheTtcclxuICAgIHRoaXMuYW5pbURlbGF5Q291bnQgPSAwO1xyXG4gICAgdGhpcy5hbmltUm93ID0gMDtcclxuICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFg7XHJcbiAgICB0aGlzLm9mZnNldFkgPSBvZmZzZXRZO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgc3ByaXRlIGFuaW1hdGlvbiBmcmFtZXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgU3RhcnQgZnJhbWUgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgICBFbmQgZnJhbWUgb2YgdGhlIGFuaW1hdGlvblxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCAgSWYgdHJ1ZSwgYW5pbWF0aW9uIHdpbGwgbG9vcFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3cgICBSb3cgb2YgdGhlIGZyYW1lcyBpbiB0aGUgc3ByaXRlIGltYWdlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5IERlbGF5IGJldHdlZW4gZWFjaCBmcmFtZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSAgU2V0cyBhbGwgdGhlIG5ldyB2YWx1ZXMgb25seSBvbmUgdGltZS5cclxuICAgKi9cclxuICBzZXRBbmltKHN0YXJ0LCBlbmQsIGxvb3AsIHJvdywgZGVsYXksIG9uY2UpIHtcclxuICAgIG9uY2UgPSB0eXBlb2Ygb25jZSA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IG9uY2U7XHJcbiAgICBkZWxheSA9IHR5cGVvZiBkZWxheSA9PT0gJ3VuZGVmaW5lZCcgPyBDb25zdHMuQW5pbURlZmF1bHREZWxheSA6IGRlbGF5O1xyXG4gICAgcm93ID0gdHlwZW9mIHJvdyA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmFuaW1Sb3cgOiByb3c7XHJcbiAgICBpZiAoIW9uY2UpIHtcclxuICAgICAgdGhpcy5hbmltU3RhcnQgPSBzdGFydDtcclxuICAgICAgdGhpcy5hbmltRW5kID0gZW5kO1xyXG4gICAgICB0aGlzLmFuaW1Db3VudCA9IHN0YXJ0O1xyXG4gICAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgICAgdGhpcy5hbmltRGVsYXkgPSBkZWxheTtcclxuICAgICAgdGhpcy5hbmltUm93ID0gcm93O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuYW5pbVN0YXJ0ICE9PSBzdGFydCB8fCB0aGlzLmFuaW1FbmQgIT09IGVuZCB8fCB0aGlzLmFuaW1Mb29wICE9PSBsb29wIHx8IHRoaXMuYW5pbVJvdyAhPT0gcm93KSB7XHJcbiAgICAgICAgdGhpcy5hbmltU3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5hbmltQ291bnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgICAgICB0aGlzLmFuaW1EZWxheSA9IGRlbGF5O1xyXG4gICAgICAgIHRoaXMuYW5pbVJvdyA9IHJvdztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgKiBEcmF3cyB0aGUgZnJhbWUgb2YgdGhlIHNwcml0ZSBpbiB0aGUgY2FudmFzXHJcbiAgICovXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgdGhpcy5hbmltQ291bnQgKiB0aGlzLndpZHRoLFxyXG4gICAgICB0aGlzLmFuaW1Sb3cgKiB0aGlzLmhlaWdodCxcclxuICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgIHRoaXMueCArIHRoaXMub2Zmc2V0WCxcclxuICAgICAgdGhpcy55ICsgdGhpcy5vZmZzZXRZLFxyXG4gICAgICB0aGlzLndpZHRoLFxyXG4gICAgICB0aGlzLmhlaWdodCxcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuYW5pbURlbGF5Q291bnQrKyA+IHRoaXMuYW5pbURlbGF5KSB7XHJcbiAgICAgIHRoaXMuYW5pbUNvdW50ICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLmFuaW1Db3VudCA+IHRoaXMuYW5pbUVuZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1Mb29wKSB7XHJcbiAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHRoaXMuYW5pbVN0YXJ0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHRoaXMuYW5pbUVuZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3RnJvc3QoKSB7XHJcbiAgICBjb25zdCBsZWZ0U3ByaXRlID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSAtIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgaWYgKGxlZnRTcHJpdGUgJiYgbGVmdFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJiBsZWZ0U3ByaXRlLmZyb3plbi5yaWdodCkge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSwgdGhpcy54VGlsZSAqIHRoaXMud2lkdGggLSA3LCB0aGlzLnlUaWxlICogdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmlnaHRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlICsgMSwgdGhpcy55VGlsZSk7XHJcbiAgICBpZiAocmlnaHRTcHJpdGUgJiYgcmlnaHRTcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiYgcmlnaHRTcHJpdGUuZnJvemVuLmxlZnQpIHtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoJ2Zyb3N0JyksXHJcbiAgICAgICAgKHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCkgKiB0aGlzLndpZHRoIC0gNyxcclxuICAgICAgICB0aGlzLnlUaWxlICogdGhpcy5oZWlnaHQsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBDb25zdHMgPSBPYmplY3QuZnJlZXplKHtcbiAgLy8gR3JpZFxuICBUaWxlV2lkdGg6IDMyLFxuXG4gIC8vIFBoeXNpY3NcbiAgUGh5c2ljc1NwZWVkOiA0LFxuICBQbGF5ZXJTcGVlZDogMixcblxuICAvLyBUaW1pbmdcbiAgU3BhcmtJbnRlcnZhbDogMTAsXG4gIFJpcER1cmF0aW9uOiA3MCxcbiAgSW50cm9EdXJhdGlvbjogMzIsXG4gIFNsZWVwVGhyZXNob2xkOiA1MDAsXG4gIFBsYXllckFuaW1EZWxheTogMyxcbiAgSWNlQW5pbURlbGF5OiA5LFxuXG4gIE1vdmVTdGFuZDogMCxcbiAgTW92ZUxlZnQ6IDEsXG4gIE1vdmVSaWdodDogMixcbiAgTW92ZURvd246IDMsXG4gIE1vdmVVcDogNCxcbiAgTW92ZVR1cm46IDUsXG4gIE1vdmVJY2VNYWtlOiA2LFxuICBNb3ZlSWNlUmVtb3ZlOiA3LFxuICBNb3ZlSWNlTW92aW5nOiA4LFxuICBNb3ZlSWNlQ2hlY2s6IDksXG4gIE1vdmVSaXA6IDEwLFxuICBNb3ZlUHVzaDogMTYsXG4gIE1vdmVJY2VGYWlsOiAxMSxcbiAgTW92ZUxldmVsRXhpdDogMTIsXG4gIE1vdmVMZXZlbEVudGVyOiAxMyxcbiAgTW92ZVRlbGVwb3J0T3V0OiAxNCxcbiAgTW92ZVRlbGVwb3J0SW46IDE1LFxuICBEaXJMZWZ0OiAtMSxcbiAgRGlyUmlnaHQ6IDEsXG4gIEFuaW1EZWZhdWx0RGVsYXk6IDIsXG4gIEFuaW1GcmFtZUNvdW50OiAxNixcbiAgQW5pbUxlZnRSb3c6IDEsXG4gIEFuaW1SaWdodFJvdzogMCxcbiAgQW5pbVJ1blN0YXJ0OiAwLFxuICBBbmltUnVuRW5kOiAzLFxuICBBbmltU3RhbmQ6IDQsXG4gIEFuaW1UdXJuU3RhcnQ6IDQsXG4gIEFuaW1UdXJuRW5kOiA3LFxuICBBbmltRmFsbFN0YXJ0OiA4LFxuICBBbmltRmFsbEVuZDogOSxcbiAgQW5pbUJpZ0ZhbGxTdGFydDogMTAsXG4gIEFuaW1CaWdGYWxsRW5kOiAxMSxcbiAgQW5pbVB1c2hTdGFydDogMTIsXG4gIEFuaW1QdXNoRW5kOiAxMyxcbiAgQW5pbUp1bXBTdGFydDogMTQsXG4gIEFuaW1KdW1wRW5kOiAxNSxcbiAgQW5pbVN0YW5kU3RhcnQ6IDE2LFxuICBBbmltU3RhbmRFbmQ6IDE3LFxuICBBbmltSWNlU3RhcnQ6IDE4LFxuICBBbmltSWNlRW5kOiAxOSxcbiAgQW5pbUNyb3VjaFN0YXJ0OiAyMCxcbiAgQW5pbUNyb3VjaEVuZDogMjIsXG4gIEFuaW1SaXBTdGFydDogMjMsXG4gIEFuaW1SaXBFbmQ6IDI0LFxuICBBbmltU2xlZXBTdGFydDogMjUsXG4gIEFuaW1TbGVlcEVuZDogMjYsXG4gIFRpbGVCYWNrZ3JvdW5kOiAwLFxuICBUaWxlQm90aFNpZGVzOiAzMixcbiAgVGlsZUxlZnRTaWRlOiA2NCxcbiAgVGlsZU1pZGRsZTogOTYsXG4gIFRpbGVSaWdodFNpZGU6IDEyOCxcbiAgT2JqZWN0T3V0OiAtMSxcbiAgT2JqZWN0QmFja2dyb3VuZDogMCxcbiAgT2JqZWN0V2FsbDogMSxcbiAgT2JqZWN0SWNlOiAzLFxuICBPYmplY3RNZXRhbDogNCxcbiAgT2JqZWN0SmFyOiA1LFxuICBPYmplY3RGaXJlOiA2LFxuICBPYmplY3RQbGF5ZXI6IDcsXG4gIE9iamVjdFRlbGVwb3J0OiA4LFxuICBHYW1lU3RhdGVQbGF5OiAxLFxuICBHYW1lU3RhdGVJbnRybzogMixcbiAgR2FtZVN0YXRlUGF1c2VkOiAzLFxuICBHYW1lU3RhdGVUcmFuc2l0aW9uOiA0LFxuICBDb2xvckdyZWVuOiAnMTI0LCAyMzgsIDY2JyxcbiAgQ29sb3JCbHVlOiAnMTIyLCAyMTEsIDI1NScsXG4gIENvbG9yT3JhbmdlOiAnMjU1LCA4OCwgMzMnLFxuICBDb2xvclJlZDogJzI1NSwgMTM1LCAxMjQnLFxuICBDb2xvcldoaXRlOiAnMjU1LCAyNTUsIDI1NScsXG59KTtcbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IEZyb3N0IH0gZnJvbSAnLi9zdHJ1Y3QnO1xuaW1wb3J0IHsgSWNlIH0gZnJvbSAnLi9pY2UnO1xuaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICcuL2tleWJvYXJkJztcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XG5pbXBvcnQgeyBTb3VuZCB9IGZyb20gJy4vc291bmQnO1xuaW1wb3J0IHsgU3BhcmtzIH0gZnJvbSAnLi9zZngnO1xuLyoqXG4gKiBFbmdpbmUgTG9vcFxuICovXG5leHBvcnQgY2xhc3MgRW5naW5lIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCByZXNvdXJjZXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN3aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmNoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgIHRoaXMucmVzb3VyY2VzID0gcmVzb3VyY2VzO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnNwcml0ZXMgPSBbXTtcbiAgICB0aGlzLnNmeHMgPSBbXTtcbiAgICB0aGlzLnBsYXllciA9IHt9O1xuICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIHRoaXMua2V5Ym9hcmQgPSBuZXcgS2V5Ym9hcmQoKTtcbiAgICB0aGlzLnNvdW5kID0gbmV3IFNvdW5kKHJlc291cmNlcyk7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBTY2VuZSh0aGlzKTtcbiAgICB0aGlzLmVkaXRvciA9IGZhbHNlO1xuICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xuICAgIGNvbnN0IGxldmVsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xldmVsJyk7XG4gICAgaWYgKGxldmVsICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICB9XG4gICAgdGhpcy5zY2VuZS5sb2FkKHRoaXMubGV2ZWwpO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jd2lkdGgsIHRoaXMuY2hlaWdodCk7XG4gICAgdGhpcy5tYXAuZHJhdygpO1xuICAgIC8vIHJldmVyc2UgbG9vcCwgcGxheWVyIGRyYXdzIGxhc3RcbiAgICBmb3IgKGxldCBpID0gdGhpcy5zcHJpdGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0aGlzLnNwcml0ZXNbaV0uZHJhdygpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Z4cy5sZW5ndGg7ICsraSkge1xuICAgICAgdGhpcy5zZnhzW2ldLmRyYXcoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC41KSc7XG4gICAgICB0aGlzLmN0eC5zdHJva2VXaWR0aCA9IDE7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jd2lkdGg7IHggKz0gMzIpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmNoZWlnaHQ7IHkgKz0gMzIpIHtcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VSZWN0KHgsIHksIHggKyAzMiwgeSArIDMyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuICB9XG5cbiAgY29sbGlzaW9uKCkge1xuICAgIGNvbnN0IGZpcmVzID0gdGhpcy5zcHJpdGVzLmZpbHRlcihzcHJpdGUgPT4gc3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0RmlyZSk7XG4gICAgaWYgKCFmaXJlcy5sZW5ndGggJiYgIXRoaXMuZWRpdG9yICYmIHRoaXMucGxheWVyLnN0YXRlICE9PSBDb25zdHMuTW92ZUxldmVsRXhpdCkge1xuICAgICAgdGhpcy5wbGF5ZXIub3V0cm8oKTtcbiAgICB9XG4gIH1cblxuICBuZXh0TGV2ZWwoKSB7XG4gICAgaWYgKHRoaXMub25MZXZlbENvbXBsZXRlKSB7XG4gICAgICB0aGlzLm9uTGV2ZWxDb21wbGV0ZSh0aGlzLmxldmVsKTtcbiAgICB9XG4gIH1cblxuICBsb2FkTmV4dExldmVsKCkge1xuICAgIHRoaXMubGV2ZWwrKztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGV2ZWwnLCB0aGlzLmxldmVsKTtcbiAgICB0aGlzLnNjZW5lLmxvYWQodGhpcy5sZXZlbCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICB0aGlzLnNwcml0ZXNbaV0uZW5naW5lTW92ZSgpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Z4cy5sZW5ndGg7ICsraSkge1xuICAgICAgdGhpcy5zZnhzW2ldLmVuZ2luZU1vdmUoKTtcbiAgICB9XG4gICAgbGV0IHNwcml0ZXNNb3ZpbmcgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXSAmJiB0aGlzLnNwcml0ZXNbaV0uaWQgIT09IENvbnN0cy5PYmplY3RQbGF5ZXIgJiYgdGhpcy5zcHJpdGVzW2ldLm1vdmluZykge1xuICAgICAgICBzcHJpdGVzTW92aW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFzcHJpdGVzTW92aW5nKSB7XG4gICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xuICAgIH1cbiAgICAvLyBjaGVjayBpZiBubyBzcHJpdGVzIGhhdmUgbW92ZWQgZm9yIDIgdHVybnNcbiAgICBpZiAoIXNwcml0ZXNNb3ZpbmcgJiYgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA+IDEpIHtcbiAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xuICAgICAgdGhpcy5pbnB1dCgpO1xuICAgIH1cbiAgICB0aGlzLmNvbGxpc2lvbigpO1xuICB9XG5cbiAgaW5wdXQoKSB7XG4gICAgaWYgKHRoaXMua2V5Ym9hcmQuZG93biB8fCB0aGlzLmtleWJvYXJkLmFjdGlvbikge1xuICAgICAgdGhpcy5wbGF5ZXIuaWNlT3JUZWxlcG9ydCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5rZXlib2FyZC5sZWZ0KSB7XG4gICAgICB0aGlzLnBsYXllci5sZWZ0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmtleWJvYXJkLnJpZ2h0KSB7XG4gICAgICB0aGlzLnBsYXllci5yaWdodCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5rZXlib2FyZC5lbnRlcikge1xuICAgICAgdGhpcy5zb3VuZC5zdG9wKCdkYW5nZXInKTtcbiAgICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcbiAgICAgIHRoaXMua2V5Ym9hcmQuZW50ZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpY2VBdCh0eCwgdHkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pc1Nwcml0ZUF0KHR4LCB0eSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYWRkSWNlQmxvY2sodHgsIHR5KSB7XG4gICAgY29uc3QgZm91bmRJY2VCbG9ja3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJiB0aGlzLnNwcml0ZXNbaV0ueVRpbGUgPT09IHR5KSB7XG4gICAgICAgIGNvbnN0IGljZSA9IHRoaXMuc3ByaXRlc1tpXTtcbiAgICAgICAgaWYgKGljZS54VGlsZSAtIDEgPT09IHR4IHx8IGljZS54VGlsZSArIGljZS5sZW5ndGggPT09IHR4KSB7XG4gICAgICAgICAgZm91bmRJY2VCbG9ja3MucHVzaChpY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmb3VuZEljZUJsb2Nrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc3ByaXRlcy5wdXNoKG5ldyBJY2UodGhpcywgdHgsIHR5LCAxKSk7XG4gICAgfSBlbHNlIGlmIChmb3VuZEljZUJsb2Nrcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGZvdW5kSWNlQmxvY2tzWzBdLmFkZEJsb2NrKHR4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZvdW5kSWNlQmxvY2tzWzBdLnhUaWxlIDw9IGZvdW5kSWNlQmxvY2tzWzFdLnhUaWxlKSB7XG4gICAgICAgIHRoaXMuam9pbkljZUJsb2Nrcyhmb3VuZEljZUJsb2Nrc1swXSwgZm91bmRJY2VCbG9ja3NbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5qb2luSWNlQmxvY2tzKGZvdW5kSWNlQmxvY2tzWzFdLCBmb3VuZEljZUJsb2Nrc1swXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgam9pbkljZUJsb2NrcyhpY2VibG9ja0EsIGljZWJsb2NrQikge1xuICAgIGNvbnN0IHR4ID0gaWNlYmxvY2tBLnhUaWxlO1xuICAgIGNvbnN0IHR5ID0gaWNlYmxvY2tBLnlUaWxlO1xuICAgIGNvbnN0IGxlbmd0aCA9IGljZWJsb2NrQS5sZW5ndGggKyBpY2VibG9ja0IubGVuZ3RoICsgMTtcbiAgICB0aGlzLmFkZFNwcml0ZShuZXcgSWNlKHRoaXMsIHR4LCB0eSwgbGVuZ3RoLCBuZXcgRnJvc3QoaWNlYmxvY2tBLmZyb3plbi5sZWZ0LCBpY2VibG9ja0IuZnJvemVuLnJpZ2h0KSkpO1xuICAgIHRoaXMucmVtb3ZlU3ByaXRlKGljZWJsb2NrQSk7XG4gICAgdGhpcy5yZW1vdmVTcHJpdGUoaWNlYmxvY2tCKTtcbiAgfVxuXG4gIHJlbW92ZUljZUJsb2NrKHR4LCB0eSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuc3ByaXRlc1tpXS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJlxuICAgICAgICB0aGlzLnNwcml0ZXNbaV0ueVRpbGUgPT09IHR5ICYmXG4gICAgICAgIHR4ID49IHRoaXMuc3ByaXRlc1tpXS54VGlsZSAmJlxuICAgICAgICB0eCA8IHRoaXMuc3ByaXRlc1tpXS54VGlsZSArIHRoaXMuc3ByaXRlc1tpXS5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLnJlbW92ZUJsb2NrKHR4KSA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5zcHJpdGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRmlyZSh0eCwgdHkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS55VGlsZSA9PT0gdHkgJiYgdHggPT09IHRoaXMuc3ByaXRlc1tpXS54VGlsZSAmJiB0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PYmplY3RGaXJlKSB7XG4gICAgICAgIHRoaXMuc3ByaXRlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRTcHJpdGUoc3ByaXRlKSB7XG4gICAgdGhpcy5zcHJpdGVzLnB1c2goc3ByaXRlKTtcbiAgfVxuXG4gIHJlbW92ZVNwcml0ZShzcHJpdGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXSA9PT0gc3ByaXRlKSB7XG4gICAgICAgIHRoaXMuc3ByaXRlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhZGRTcGFya3MoeFRpbGUsIHlUaWxlLCBjb2xvciwgcXVhbnRpdHksIGludGVuc2l0eSkge1xuICAgIHRoaXMuc2Z4cy5wdXNoKG5ldyBTcGFya3ModGhpcywgeFRpbGUsIHlUaWxlLCBjb2xvciwgcXVhbnRpdHksIGludGVuc2l0eSkpO1xuICB9XG5cbiAgc3ByaXRlVHlwZUF0KHR4LCB0eSwgZXhjbHVkZUlkKSB7XG4gICAgZXhjbHVkZUlkID0gdHlwZW9mIGV4Y2x1ZGVJZCA9PT0gJ3VuZGVmaW5lZCcgPyBDb25zdHMuT2JqZWN0T3V0IDogZXhjbHVkZUlkO1xuICAgIGlmICh0eCA8IDAgfHwgdHkgPCAwIHx8IHR4ID4gdGhpcy5tYXAud2lkdGggfHwgdHkgPiB0aGlzLm1hcC5oZWlnaHQpIHtcbiAgICAgIHJldHVybiBDb25zdHMuT2JqZWN0T3V0O1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXAubWFwW3R5XVt0eF0pIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5tYXBbdHldW3R4XTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pc1Nwcml0ZUF0KHR4LCB0eSkgJiYgdGhpcy5zcHJpdGVzW2ldLmlkICE9PSBleGNsdWRlSWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW2ldLmlkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBDb25zdHMuT2JqZWN0QmFja2dyb3VuZDtcbiAgfVxuXG4gIHNwcml0ZUF0KHR4LCB0eSkge1xuICAgIGlmICghdGhpcy5tYXAubWFwW3R5XVt0eF0pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaXNTcHJpdGVBdCh0eCwgdHkpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlcyc7XG5cbmV4cG9ydCBjbGFzcyBGaXJlIGV4dGVuZHMgQW5pbVNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5KSB7XG4gICAgc3VwZXIoQ29uc3RzLk9iamVjdEZpcmUsIGVuZ2luZSwgJ2ltZ19maXJlJywgdHgsIHR5LCBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoLCAwLCAwLCAwLCAzLCB0cnVlKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgaWYgKCF0aGlzLm1vdmluZykge1xuICAgICAgdGhpcy5jb2xsaXNpb25zKCk7XG4gICAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcbiAgICAgICAgdGhpcy5kb0Rvd24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29sbGlzaW9ucygpIHtcbiAgICBpZiAodGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5PYmplY3RGaXJlKSA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnZmlyZS1vZmYnKTtcbiAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUZpcmUodGhpcy54VGlsZSwgdGhpcy55VGlsZSk7XG4gICAgICB0aGlzLmVuZ2luZS5yZW1vdmVJY2VCbG9jayh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlKTtcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCAnMjU1LCAxMjYsIDE5OCcsIDE1LCAwLjUpO1xuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsICcxMjQsIDIxMiwgMjU1JywgMTApO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5PYmplY3RGaXJlKSA9PT0gQ29uc3RzLk9iamVjdE1ldGFsKSB7XG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xuICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlRmlyZSh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlKTtcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCAnMjU1LCAyMjIsIDEyNycsIDE1LCAwLjUpO1xuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsICc0MSwgNDIsIDkwJywgMTApO1xuICAgIH1cbiAgfVxuXG4gIGdyYXZpdHkoKSB7XG4gICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmIHRoaXMuY29ybmVycy5kICE9PSBDb25zdHMuT2JqZWN0RmlyZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRvRG93bigpIHtcbiAgICB0aGlzLmNvdW50ZXIgKz0gQ29uc3RzLlBoeXNpY3NTcGVlZDtcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcbiAgICAgIHRoaXMueSArPSBDb25zdHMuUGh5c2ljc1NwZWVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IEVuZ2luZSB9IGZyb20gJy4vZW5naW5lJztcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgbGV2ZWxzIH0gZnJvbSAnLi9sZXZlbHMnO1xuXG4vKipcbiAqIEdhbWUgTG9vcFxuICovXG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Kn0gY2FudmFzICAgVGhlIGNhbnZhcyBlbGVtZW50XG4gICAqIEBwYXJhbSB7Kn0gcmVzb3VyY2VzICBHYW1lIHJlc291cmNlc1xuICAgKi9cbiAgY29uc3RydWN0b3IoY2FudmFzLCByZXNvdXJjZXMpIHtcbiAgICB0aGlzLnRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuZW5naW5lID0gbmV3IEVuZ2luZShjYW52YXMsIHJlc291cmNlcyk7XG4gICAgdGhpcy5nYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKCk7XG4gICAgdGhpcy5sZXZlbHMgPSBsZXZlbHM7XG4gICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVQbGF5O1xuICAgIHRoaXMuZW5naW5lLnNvdW5kLnNvdW5kdHJhY2soKTtcbiAgICB0aGlzLmdhbWVTdGF0ZS5zdGFydExldmVsKCk7XG4gICAgdGhpcy5lbmdpbmUub25MZXZlbENvbXBsZXRlID0gbGV2ZWxJbmRleCA9PiB0aGlzLm9uTGV2ZWxDb21wbGV0ZShsZXZlbEluZGV4KTtcblxuICAgIC8vIFRyYW5zaXRpb24gcHJvcGVydGllc1xuICAgIHRoaXMudHJhbnNpdGlvblBoYXNlID0gbnVsbDsgLy8gJ2Nsb3NpbmcnIG9yICdvcGVuaW5nJ1xuICAgIHRoaXMudHJhbnNpdGlvblJhZGl1cyA9IDA7XG4gICAgdGhpcy5tYXhSYWRpdXMgPSBNYXRoLnNxcnQodGhpcy5jYW52YXMud2lkdGggKiogMiArIHRoaXMuY2FudmFzLmhlaWdodCAqKiAyKSAvIDIgKyA1MDtcbiAgICB0aGlzLnRyYW5zaXRpb25TcGVlZCA9IDE1O1xuICAgIHRoaXMudHJhbnNpdGlvbkNlbnRlclggPSAwO1xuICAgIHRoaXMudHJhbnNpdGlvbkNlbnRlclkgPSAwO1xuXG4gICAgdGhpcy5nYW1lTG9vcCA9IHRoaXMuZ2FtZUxvb3BfLmJpbmQodGhpcyk7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5nYW1lTG9vcCgpLCAxMDAwIC8gNjApO1xuICB9XG5cbiAgZ2FtZUxvb3BfKCkge1xuICAgIHRoaXMuY2hlY2tQYXVzZSgpO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IENvbnN0cy5HYW1lU3RhdGVQYXVzZWQpIHtcbiAgICAgIHRoaXMuZHJhd1BhdXNlTWVudSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlID09PSBDb25zdHMuR2FtZVN0YXRlVHJhbnNpdGlvbikge1xuICAgICAgdGhpcy51cGRhdGVUcmFuc2l0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbmdpbmUuZHJhdygpO1xuICAgIHRoaXMuZHJhd0hVRCgpO1xuICAgIHRoaXMuZW5naW5lLm1vdmUoKTtcblxuICAgIC8vIERyYXcgb3BlbmluZyB0cmFuc2l0aW9uIG9uIHRvcCBpZiBhY3RpdmVcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uUGhhc2UgPT09ICdvcGVuaW5nJykge1xuICAgICAgdGhpcy5kcmF3Q2lyY2xlVHJhbnNpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdIVUQoKSB7XG4gICAgY29uc3QgZmlyZUNvdW50ID0gdGhpcy5lbmdpbmUuc3ByaXRlcy5maWx0ZXIocyA9PiBzLmlkID09PSBDb25zdHMuT2JqZWN0RmlyZSkubGVuZ3RoO1xuXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC41KSc7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoNSwgNSwgMTMwLCAyNSk7XG5cbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgdGhpcy5jdHguZm9udCA9ICcxNHB4IG1vbm9zcGFjZSc7XG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAgTHZsICR7dGhpcy5lbmdpbmUubGV2ZWwgKyAxfSAg8J+UpSAke2ZpcmVDb3VudH1gLCAxMiwgMjIpO1xuICB9XG5cbiAgb25MZXZlbENvbXBsZXRlKGxldmVsSW5kZXgpIHtcbiAgICB0aGlzLmdhbWVTdGF0ZS5jb21wbGV0ZUxldmVsKGxldmVsSW5kZXgpO1xuXG4gICAgLy8gU3RhcnQgY2xvc2luZyB0cmFuc2l0aW9uIGNlbnRlcmVkIG9uIHBsYXllclxuICAgIHRoaXMudHJhbnNpdGlvbkNlbnRlclggPSB0aGlzLmVuZ2luZS5wbGF5ZXIueCArIDE2O1xuICAgIHRoaXMudHJhbnNpdGlvbkNlbnRlclkgPSB0aGlzLmVuZ2luZS5wbGF5ZXIueSArIDE2O1xuICAgIHRoaXMudHJhbnNpdGlvblJhZGl1cyA9IHRoaXMubWF4UmFkaXVzO1xuICAgIHRoaXMudHJhbnNpdGlvblBoYXNlID0gJ2Nsb3NpbmcnO1xuICAgIHRoaXMuc3RhdGUgPSBDb25zdHMuR2FtZVN0YXRlVHJhbnNpdGlvbjtcbiAgfVxuXG4gIHVwZGF0ZVRyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvblBoYXNlID09PSAnY2xvc2luZycpIHtcbiAgICAgIC8vIERyYXcgdGhlIGN1cnJlbnQgZ2FtZSBzdGF0ZVxuICAgICAgdGhpcy5lbmdpbmUuZHJhdygpO1xuXG4gICAgICAvLyBEcmF3IGNsb3NpbmcgY2lyY2xlXG4gICAgICB0aGlzLmRyYXdDaXJjbGVUcmFuc2l0aW9uKCk7XG5cbiAgICAgIC8vIFNocmluayB0aGUgY2lyY2xlXG4gICAgICB0aGlzLnRyYW5zaXRpb25SYWRpdXMgLT0gdGhpcy50cmFuc2l0aW9uU3BlZWQ7XG5cbiAgICAgIGlmICh0aGlzLnRyYW5zaXRpb25SYWRpdXMgPD0gMCkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25SYWRpdXMgPSAwO1xuXG4gICAgICAgIC8vIExvYWQgbmV4dCBsZXZlbFxuICAgICAgICB0aGlzLmdhbWVTdGF0ZS5zdGFydExldmVsKCk7XG4gICAgICAgIHRoaXMuZW5naW5lLmxvYWROZXh0TGV2ZWwoKTtcblxuICAgICAgICAvLyBTd2l0Y2ggdG8gb3BlbmluZyBwaGFzZSwgY2VudGVyZWQgb24gbmV3IHBsYXllciBwb3NpdGlvblxuICAgICAgICB0aGlzLnRyYW5zaXRpb25QaGFzZSA9ICdvcGVuaW5nJztcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQ2VudGVyWCA9IHRoaXMuZW5naW5lLnBsYXllci54ICsgMTY7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkNlbnRlclkgPSB0aGlzLmVuZ2luZS5wbGF5ZXIueSArIDE2O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50cmFuc2l0aW9uUGhhc2UgPT09ICdvcGVuaW5nJykge1xuICAgICAgLy8gRHJhdyB0aGUgbmV3IGxldmVsXG4gICAgICB0aGlzLmVuZ2luZS5kcmF3KCk7XG4gICAgICB0aGlzLmRyYXdIVUQoKTtcblxuICAgICAgLy8gRHJhdyBvcGVuaW5nIGNpcmNsZVxuICAgICAgdGhpcy5kcmF3Q2lyY2xlVHJhbnNpdGlvbigpO1xuXG4gICAgICAvLyBFeHBhbmQgdGhlIGNpcmNsZVxuICAgICAgdGhpcy50cmFuc2l0aW9uUmFkaXVzICs9IHRoaXMudHJhbnNpdGlvblNwZWVkO1xuXG4gICAgICBpZiAodGhpcy50cmFuc2l0aW9uUmFkaXVzID49IHRoaXMubWF4UmFkaXVzKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gY29tcGxldGVcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uUGhhc2UgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0gQ29uc3RzLkdhbWVTdGF0ZVBsYXk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd0NpcmNsZVRyYW5zaXRpb24oKSB7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuXG4gICAgLy8gQ3JlYXRlIGEgcGF0aCB0aGF0IGNvdmVycyB0aGUgd2hvbGUgY2FudmFzIGV4Y2VwdCB0aGUgY2lyY2xlXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5hcmMoXG4gICAgICB0aGlzLnRyYW5zaXRpb25DZW50ZXJYLFxuICAgICAgdGhpcy50cmFuc2l0aW9uQ2VudGVyWSxcbiAgICAgIE1hdGgubWF4KDAsIHRoaXMudHJhbnNpdGlvblJhZGl1cyksXG4gICAgICAwLFxuICAgICAgTWF0aC5QSSAqIDIsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcbiAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBjaGVja1BhdXNlKCkge1xuICAgIGlmICh0aGlzLmVuZ2luZS5rZXlib2FyZC5lc2NhcGUgJiYgdGhpcy5zdGF0ZSA9PT0gQ29uc3RzLkdhbWVTdGF0ZVBsYXkpIHtcbiAgICAgIHRoaXMuZW5naW5lLmtleWJvYXJkLmVzY2FwZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVQYXVzZWQ7XG4gICAgICBpZiAodGhpcy5lbmdpbmUuc291bmQubXVzaWMpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQubXVzaWMucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZW5naW5lLmtleWJvYXJkLmVzY2FwZSAmJiB0aGlzLnN0YXRlID09PSBDb25zdHMuR2FtZVN0YXRlUGF1c2VkKSB7XG4gICAgICB0aGlzLmVuZ2luZS5rZXlib2FyZC5lc2NhcGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGUgPSBDb25zdHMuR2FtZVN0YXRlUGxheTtcbiAgICAgIGlmICh0aGlzLmVuZ2luZS5zb3VuZC5tdXNpY09uKSB7XG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLm11c2ljLnBsYXkoKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdQYXVzZU1lbnUoKSB7XG4gICAgLy8gSGFuZGxlIGlucHV0IHdoaWxlIHBhdXNlZFxuICAgIGlmICh0aGlzLmVuZ2luZS5rZXlib2FyZC5tS2V5KSB7XG4gICAgICB0aGlzLmVuZ2luZS5rZXlib2FyZC5tS2V5ID0gZmFsc2U7XG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC50b2dnbGVNdXNpYygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbmdpbmUua2V5Ym9hcmQuc0tleSkge1xuICAgICAgdGhpcy5lbmdpbmUua2V5Ym9hcmQuc0tleSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbmdpbmUuc291bmQudG9nZ2xlU291bmQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5naW5lLmtleWJvYXJkLmVudGVyKSB7XG4gICAgICB0aGlzLmVuZ2luZS5rZXlib2FyZC5lbnRlciA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVQbGF5O1xuICAgICAgdGhpcy5lbmdpbmUuc2NlbmUubG9hZCh0aGlzLmVuZ2luZS5sZXZlbCk7XG4gICAgICBpZiAodGhpcy5lbmdpbmUuc291bmQubXVzaWNPbiAmJiB0aGlzLmVuZ2luZS5zb3VuZC5tdXNpYykge1xuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5tdXNpYy5wbGF5KCkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEcmF3IGdhbWUgZnJhbWUgdW5kZXJuZWF0aFxuICAgIHRoaXMuZW5naW5lLmRyYXcoKTtcblxuICAgIC8vIERyYXcgc2VtaS10cmFuc3BhcmVudCBvdmVybGF5XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC43KSc7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAvLyBEcmF3IHBhdXNlIHRleHRcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDMycHggbW9ub3NwYWNlJztcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnUEFVU0VEJywgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNjApO1xuXG4gICAgdGhpcy5jdHguZm9udCA9ICcxNnB4IG1vbm9zcGFjZSc7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ0VTQyAtIFJlc3VtZScsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDEwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnRU5URVIgLSBSZXN0YXJ0IGxldmVsJywgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgMTUpO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBNIC0gTXVzaWM6ICR7dGhpcy5lbmdpbmUuc291bmQubXVzaWNPbiA/ICdPTicgOiAnT0ZGJ31gLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA0MCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoYFMgLSBTb3VuZDogJHt0aGlzLmVuZ2luZS5zb3VuZC5zb3VuZE9uID8gJ09OJyA6ICdPRkYnfWAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDY1KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xyXG5pbXBvcnQgeyBGcm9zdCB9IGZyb20gJy4vc3RydWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBJY2UgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSwgbGVuZ3RoLCBmcm96ZW4pIHtcclxuICAgIHN1cGVyKENvbnN0cy5PYmplY3RJY2UsIGVuZ2luZSwgJ2ltZ19pY2UnLCB0eCwgdHksIENvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgsIDAsIDAsIDAsIDEsIHRydWUpO1xyXG4gICAgdGhpcy54VGlsZSA9IHR4O1xyXG4gICAgdGhpcy55VGlsZSA9IHR5O1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmFuaW1FbmQgPSAxO1xyXG4gICAgdGhpcy5hbmltRGVsYXkgPSBDb25zdHMuSWNlQW5pbURlbGF5O1xyXG4gICAgdGhpcy5hbmltUm93ID0gMDtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcclxuICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG4gICAgaWYgKHR5cGVvZiBmcm96ZW4gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuZnJvemVuID0gZnJvemVuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mcm96ZW4gPSBuZXcgRnJvc3QoZmFsc2UsIGZhbHNlKTtcclxuICAgICAgdGhpcy51cGRhdGVDb3JuZXJzKCk7XHJcbiAgICAgIHRoaXMuY2hlY2tGcmVlemUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEJsb2NrKHR4KSB7XHJcbiAgICBjb25zdCBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID0gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHR4IC0gMSwgdGhpcy55VGlsZSk7XHJcbiAgICBjb25zdCBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlICsgdGhpcy5sZW5ndGggKyAxLCB0aGlzLnlUaWxlKTtcclxuICAgIGlmICh0eCA+IHRoaXMueFRpbGUpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuZ2V0VGlsZSh0eCArIDEsIHRoaXMueVRpbGUpID09PSBDb25zdHMuT2JqZWN0V2FsbCB8fFxyXG4gICAgICAgIHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID09PSBDb25zdHMuT2JqZWN0TWV0YWwgfHxcclxuICAgICAgICBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9iamVjdEphclxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmZyb3plbi5yaWdodCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodHggPCB0aGlzLnhUaWxlKSB7XHJcbiAgICAgIHRoaXMueFRpbGUgPSB0eDtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuZ2V0VGlsZSh0eCAtIDEsIHRoaXMueVRpbGUpID09PSBDb25zdHMuT2JqZWN0V2FsbCB8fFxyXG4gICAgICAgIHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPT09IENvbnN0cy5PYmplY3RNZXRhbCB8fFxyXG4gICAgICAgIHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPT09IENvbnN0cy5PYmplY3RKYXJcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5mcm96ZW4ubGVmdCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMueCA9IHRoaXMueFRpbGUgKiBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgdGhpcy5sZW5ndGggKz0gMTtcclxuICB9XHJcblxyXG4gIGlzU3ByaXRlQXQodHgsIHR5KSB7XHJcbiAgICBpZiAodGhpcy55VGlsZSA9PT0gdHkpIHtcclxuICAgICAgaWYgKHR4ID49IHRoaXMueFRpbGUgJiYgdHggPCB0aGlzLnhUaWxlICsgdGhpcy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUJsb2NrKHR4KSB7XHJcbiAgICBpZiAodHggPT09IHRoaXMueFRpbGUpIHtcclxuICAgICAgdGhpcy54VGlsZSArPSAxO1xyXG4gICAgICB0aGlzLnggKz0gQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgICAgdGhpcy5sZW5ndGggLT0gMTtcclxuICAgICAgdGhpcy5jaGVja1VuZnJlZXplTGVmdCgpO1xyXG4gICAgfSBlbHNlIGlmICh0eCA9PT0gdGhpcy54VGlsZSArIHRoaXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICB0aGlzLmxlbmd0aCAtPSAxO1xyXG4gICAgICB0aGlzLmNoZWNrVW5mcmVlemVSaWdodCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKFxyXG4gICAgICAgIG5ldyBJY2UoXHJcbiAgICAgICAgICB0aGlzLmVuZ2luZSxcclxuICAgICAgICAgIHR4ICsgMSxcclxuICAgICAgICAgIHRoaXMueVRpbGUsXHJcbiAgICAgICAgICB0aGlzLnhUaWxlICsgdGhpcy5sZW5ndGggLSB0eCAtIDEsXHJcbiAgICAgICAgICBuZXcgRnJvc3QoZmFsc2UsIHRoaXMuZnJvemVuLnJpZ2h0KSxcclxuICAgICAgICApLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmxlbmd0aCA9IHR4IC0gdGhpcy54VGlsZTtcclxuICAgICAgdGhpcy5jaGVja1VuZnJlZXplUmlnaHQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGNhbkdsaWRlKGRpcikge1xyXG4gICAgaWYgKHRoaXMubGVuZ3RoICE9PSAxIHx8IHRoaXMuZnJvemVuLmxlZnQgfHwgdGhpcy5mcm96ZW4ucmlnaHQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpciA9PT0gQ29uc3RzLkRpckxlZnQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5sKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlyID09PSBDb25zdHMuRGlyUmlnaHQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5yKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlzRnJvemVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZnJvemVuLmxlZnQgfHwgdGhpcy5mcm96ZW4ucmlnaHQ7XHJcbiAgfVxyXG5cclxuICBncmF2aXR5KCkge1xyXG4gICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmICF0aGlzLmlzRnJvemVuKCkpIHtcclxuICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZhbGxpbmcpIHtcclxuICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbGxpc2lvbigpIHtcclxuICAgIGlmICghdGhpcy5jYW5HbGlkZSh0aGlzLmRpcmVjdGlvbikpIHtcclxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtY29sbGlzaW9uJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbW92ZSgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB0aWxlX2Rvd24gPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlICsgaSwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgICBpZiAodGlsZV9kb3duICYmIHRpbGVfZG93biAhPT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcclxuICAgICAgICB0aGlzLmNvcm5lcnMuZCA9IHRpbGVfZG93bjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jb3JuZXJzLnIgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlICsgdGhpcy5sZW5ndGgsIHRoaXMueVRpbGUpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRnJvemVuKCkpIHtcclxuICAgICAgdGhpcy5jaGVja1VuZnJlZXplTGVmdCgpO1xyXG4gICAgICB0aGlzLmNoZWNrVW5mcmVlemVSaWdodCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLm1vdmluZykge1xyXG4gICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlTW92aW5nOlxyXG4gICAgICAgIHRoaXMuZ2xpZGUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUljZUNoZWNrOlxyXG4gICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcclxuICAgICAgICB0aGlzLmRvRG93bigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY3R4LnNhdmUoKTtcclxuICAgIGlmICh0aGlzLmFuaW1EZWxheUNvdW50KysgPiB0aGlzLmFuaW1EZWxheSkge1xyXG4gICAgICB0aGlzLmFuaW1EZWxheUNvdW50ID0gMDtcclxuICAgICAgdGhpcy5hbmltUm93ID0gdGhpcy5hbmltUm93ID09PSAwID8gMSA6IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgdGhpcy54LFxyXG4gICAgICAgIHRoaXMueSxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICBDb25zdHMuVGlsZVdpZHRoLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgdGhpcy55LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgIDMgKiBDb25zdHMuVGlsZVdpZHRoLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICB0aGlzLnggKyBDb25zdHMuVGlsZVdpZHRoLFxyXG4gICAgICAgIHRoaXMueSxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgICBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgdGhpcy54LFxyXG4gICAgICAgIHRoaXMueSxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICAzICogQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgICBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgdGhpcy54ICsgQ29uc3RzLlRpbGVXaWR0aCAqICh0aGlzLmxlbmd0aCAtIDEpLFxyXG4gICAgICAgIHRoaXMueSxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICApO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICAgIDIgKiBDb25zdHMuVGlsZVdpZHRoLFxyXG4gICAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICAgIHRoaXMueCArIENvbnN0cy5UaWxlV2lkdGggKiBpLFxyXG4gICAgICAgICAgdGhpcy55LFxyXG4gICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZyb3plbi5sZWZ0KSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLCB0aGlzLnhUaWxlICogdGhpcy53aWR0aCAtIDcsIHRoaXMueVRpbGUgKiB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mcm96ZW4ucmlnaHQpIHtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoJ2Zyb3N0JyksXHJcbiAgICAgICAgKHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCkgKiB0aGlzLndpZHRoIC0gNyxcclxuICAgICAgICB0aGlzLnlUaWxlICogdGhpcy5oZWlnaHQsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2xpZGUoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gQ29uc3RzLlBoeXNpY3NTcGVlZDtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xyXG4gICAgICB0aGlzLnggKz0gQ29uc3RzLlBoeXNpY3NTcGVlZCAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb0Rvd24oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gQ29uc3RzLlBoeXNpY3NTcGVlZDtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xyXG4gICAgICB0aGlzLnkgKz0gQ29uc3RzLlBoeXNpY3NTcGVlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5ncmF2aXR5KCkpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVzaChkaXIpIHtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gdHlwZW9mIGRpciA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmRpcmVjdGlvbiA6IGRpcjtcclxuICAgIGlmICghdGhpcy5jb2xsaXNpb24oKSAmJiAhdGhpcy5ncmF2aXR5KCkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZU1vdmluZywgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrRnJlZXplKCkge1xyXG4gICAgaWYgKFRpbGUuaXNGcmVlemFibGUodGhpcy5jb3JuZXJzLmwpKSB7XHJcbiAgICAgIHRoaXMuZnJvemVuLmxlZnQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mcm96ZW4ubGVmdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKFRpbGUuaXNGcmVlemFibGUodGhpcy5jb3JuZXJzLnIpKSB7XHJcbiAgICAgIHRoaXMuZnJvemVuLnJpZ2h0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJvemVuLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1VuZnJlZXplTGVmdCgpIHtcclxuICAgIGlmICh0aGlzLmZyb3plbi5sZWZ0ICYmICFUaWxlLmlzRnJlZXphYmxlKHRoaXMuY29ybmVycy5sKSkge1xyXG4gICAgICB0aGlzLmZyb3plbi5sZWZ0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1VuZnJlZXplUmlnaHQoKSB7XHJcbiAgICBpZiAodGhpcy5mcm96ZW4ucmlnaHQgJiYgIVRpbGUuaXNGcmVlemFibGUodGhpcy5jb3JuZXJzLnIpKSB7XHJcbiAgICAgIHRoaXMuZnJvemVuLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xuaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgSmFyIGV4dGVuZHMgQW5pbVNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5KSB7XG4gICAgc3VwZXIoQ29uc3RzLk9iamVjdEphciwgZW5naW5lLCAnaW1nX2phcicsIHR4LCB0eSwgQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCwgMCwgMCwgMCwgMywgdHJ1ZSk7XG4gICAgdGhpcy5hbmltRGVsYXkgPSBDb25zdHMuQW5pbURlZmF1bHREZWxheSAqIDI7XG4gICAgdGhpcy5vbkZpcmUgPSBmYWxzZTtcbiAgICB0aGlzLmFuaW1Sb3cgPSAwO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XG4gICAgICB0aGlzLmNvbGxpc2lvbnMoKTtcbiAgICAgIHRoaXMuZ3Jhdml0eSgpO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxuICAgICAgICB0aGlzLmRvRG93bigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb2xsaXNpb25zKCkge1xuICAgIGlmICghdGhpcy5vbkZpcmUgJiYgdGhpcy5jb3JuZXJzLnUgPT09IENvbnN0cy5PYmplY3RGaXJlKSB7XG4gICAgICB0aGlzLnR1cm5PbkZpcmUoKTtcbiAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUZpcmUodGhpcy54VGlsZSwgdGhpcy55VGlsZSAtIDEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vbkZpcmUgJiYgdGhpcy5jb3JuZXJzLnUgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcbiAgICAgIHRoaXMubWVsdEljZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdyYXZpdHkoKSB7XG4gICAgaWYgKCF0aGlzLmNvcm5lcnMuZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRvRG93bigpIHtcbiAgICB0aGlzLmNvdW50ZXIgKz0gQ29uc3RzLlBoeXNpY3NTcGVlZDtcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcbiAgICAgIHRoaXMueSArPSBDb25zdHMuUGh5c2ljc1NwZWVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB0dXJuT25GaXJlKCkge1xuICAgIHRoaXMuYW5pbVJvdyA9IDE7XG4gICAgdGhpcy5vbkZpcmUgPSB0cnVlO1xuICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ZpcmUtb2ZmJyk7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUgLSAxLCBDb25zdHMuQ29sb3JPcmFuZ2UsIDMwKTtcbiAgfVxuXG4gIG1lbHRJY2UoKSB7XG4gICAgdGhpcy5lbmdpbmUucmVtb3ZlSWNlQmxvY2sodGhpcy54VGlsZSwgdGhpcy55VGlsZSAtIDEpO1xuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlIC0gMSwgQ29uc3RzLkNvbG9yT3JhbmdlLCAyMCk7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUgLSAxLCBDb25zdHMuQ29sb3JCbHVlLCAxMCk7XG4gICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnZmlyZS1vZmYnKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgc3VwZXIuZHJhdygpO1xuICAgIHRoaXMuZHJhd0Zyb3N0KCk7XG4gIH1cbn1cbiIsIi8qKlxuICogS2V5Ym9hcmQgcHJlc3MgZW5naW5lXG4gKi9cbmV4cG9ydCBjbGFzcyBLZXlib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXAgPSBmYWxzZTtcbiAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5hY3Rpb24gPSBmYWxzZTtcbiAgICB0aGlzLmVzY2FwZSA9IGZhbHNlO1xuICAgIHRoaXMubUtleSA9IGZhbHNlO1xuICAgIHRoaXMuc0tleSA9IGZhbHNlO1xuICAgIHRoaXMua2V5ZG93biA9IHRoaXMua2V5ZG93bl8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmtleXVwID0gdGhpcy5rZXl1cF8uYmluZCh0aGlzKTtcbiAgICB0aGlzLmludHJvID0gdHJ1ZTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXl1cCwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmludHJvKSB7XG4gICAgICAgIHRoaXMuZW50ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5pbnRybyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fYWN0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICB0aGlzLmRvd24gPSB0cnVlO1xuICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9hY3Rpb24nKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCAoKSA9PiAodGhpcy5kb3duID0gZmFsc2UpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX2xlZnQnKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX2xlZnQnKS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCAoKSA9PiAodGhpcy5sZWZ0ID0gZmFsc2UpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX3JpZ2h0JykuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICB0aGlzLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bl9yaWdodCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsICgpID0+ICh0aGlzLnJpZ2h0ID0gZmFsc2UpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX3NlbGVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gKHRoaXMuZW50ZXIgPSB0cnVlKSk7XG4gIH1cblxuICBrZXlkb3duXyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgdGhpcy51cCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgY2FzZSAnICc6XG4gICAgICAgIHRoaXMuYWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb3duID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIHRoaXMuZW50ZXIgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICB0aGlzLmVzY2FwZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbSc6XG4gICAgICBjYXNlICdNJzpcbiAgICAgICAgdGhpcy5tS2V5ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzJzpcbiAgICAgIGNhc2UgJ1MnOlxuICAgICAgICB0aGlzLnNLZXkgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBrZXl1cF8oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgIGNhc2UgJyAnOlxuICAgICAgICB0aGlzLmFjdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIHRoaXMuZW50ZXIgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBsZXZlbHMgPSBbXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiAwLFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDEzLCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNywgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNywgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNywgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOCwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDUsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogMTEsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMSxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiA1LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMiwgeTogNiwgdjogNCB9LFxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNCwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTUsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEzLCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMywgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTMsIHk6IDcsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMixcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxNiwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEzLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMywgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDcsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMCxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxMCwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNSwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA5LCB2OiA1IH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMiwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEyLCB5OiA4LCB2OiAzIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxNCwgeTogNywgdjogMiB9LFxuICAgICAgeyBpZDogMywgeDogOCwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDgsIHY6IDMgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDcsIHY6IDIgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA4LCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDYsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogMTMsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEyLCB5OiAxMSwgdjogMyB9LFxuICAgICAgeyBpZDogMywgeDogMTIsIHk6IDEwLCB2OiAzIH0sXG4gICAgICB7IGlkOiAzLCB4OiA5LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA2LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNSwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDUsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogNSxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxNSwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNSwgeTogNSwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDcsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNywgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEyLCB5OiA3LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgeDogNCwgeTogOSwgdjogMTMsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNCwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE1LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTYsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxNiwgeTogNSwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXG4gICAgICB7IGlkOiAzLCB4OiA0LCB5OiA2LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMSxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxNCwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogMTIsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiAxMiwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDYsIHY6IDUgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEyLCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA2LCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDEsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogMTAsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEzLCB5OiAxMSwgdjogMiB9LFxuICAgICAgeyBpZDogMywgeDogNywgeTogMTAsIHY6IDcgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEzLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogOCwgeTogNiwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA2LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDcsIHk6IDUsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiA2LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDksIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMTAsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogNSwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNCwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNSwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNiwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA0LCB5OiA2LCB2OiAxMCB9LFxuICAgICAgeyBpZDogMywgeDogNywgeTogNSwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA2LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDUsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE1LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNiwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogOCwgeTogNCwgdjogMiB9LFxuICAgICAgeyBpZDogMywgeDogMTMsIHk6IDQsIHY6IDIgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiA0LCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDcsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogMTAsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEyLCB5OiA2LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA0LCB5OiA0LCB2OiAyIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxNiwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTYsIHk6IDUsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDE1LCB5OiA0LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNiwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNSwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA5LCB2OiAxMSB9LFxuICAgICAgeyBpZDogNiwgeDogNiwgeTogMTAsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMixcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxNCwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogMTIsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDksIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDEyLCB5OiAxMSwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA1LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDQsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDUsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE2LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTUsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiAxMSwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA2LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDEwLCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiA1LCB4OiA4LCB5OiAxMiwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogOSwgeTogNSwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiAxLFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDEyLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMiwgeTogMTEsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiAxMCwgdjogNSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDksIHk6IDksIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA4LCB2OiA1LCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgeDogOCwgeTogNiwgdjogNSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOCwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDUsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogNyxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiAzLCB4OiAxMywgeTogOCwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogOCwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXG4gICAgICB7IGlkOiA0LCB4OiAxMiwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDcsIHg6IDksIHk6IDYsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogNixcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiA2LCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNSwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogOSwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNSwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogOCwgeTogOCwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiAxLFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDEwLCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiA4LCB2OiAzLCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiA5LCB5OiA5LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDcsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA2LCB2OiAzLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDYsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDIsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogOCwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMSwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA5LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDYsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDUsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDUsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxuICAgICAgeyBpZDogMywgeDogMTIsIHk6IDUsIHY6IDQsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDEzLCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogNywgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNSwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDUsIHg6IDEwLCB5OiAxMSwgdjogZmFsc2UgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMCxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxMiwgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogOSwgeTogNywgdjogNCwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA2LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDYsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMCxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxMCwgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogNSwgeDogOCwgeTogMTEsIHY6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDUsIHg6IDcsIHk6IDgsIHY6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDUsIHg6IDEwLCB5OiA5LCB2OiB0cnVlIH0sXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDgsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogNCxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxMCwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogOCwgeTogNywgdjogMSwgZmw6IGZhbHNlLCBmcjogdHJ1ZSB9LFxuICAgICAgeyBpZDogMywgeDogNiwgeTogOCwgdjogMSwgZmw6IHRydWUsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgeDogNiwgeTogNiwgdjogMSwgZmw6IHRydWUsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMCwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA2LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDExLCB5OiAxMiwgdjogMSB9LFxuICAgICAgeyBpZDogNSwgeDogMTIsIHk6IDksIHY6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE2LCB5OiAxMiwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogMTMsIHk6IDMsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogOCxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxNCwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogNSwgeDogMTMsIHk6IDgsIHY6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDEyLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTYsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiA2LCB2OiA0LCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogNSwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogOCxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiA1LCB5OiAyLCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiA2LCB5OiAzLCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiA0LCB5OiAzLCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiAzLCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDgsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDksIHk6IDYsIHY6IDEsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDcsIHk6IDYsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDYsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDQsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDksIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxuICAgICAgeyBpZDogNiwgeDogNiwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiAxMiwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogMTAsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiA5LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogMTQsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDE1LCB5OiA2LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMywgeTogNiwgdjogMSwgZmw6IGZhbHNlLCBmcjogdHJ1ZSB9LFxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiA0LCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiAxMiwgeTogMywgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogMTAsIHk6IDMsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiAzLCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogOCxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxNSwgeTogMywgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNiwgeTogNSwgdjogOCB9LFxuICAgICAgeyBpZDogMywgeDogMTMsIHk6IDQsIHY6IDQgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTYsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNiwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNCwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDExLCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDYsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogMTYsIHk6IDExLCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDYsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogMTIsIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDUsIHg6IDEwLCB5OiA5LCB2OiB0cnVlIH0sXG4gICAgICB7IGlkOiA4LCB4OiAxNiwgeTogOSwgdjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDgsIHg6IDEwLCB5OiA1LCB2OiBmYWxzZSB9LFxuICAgICAgeyBpZDogNiwgeDogNiwgeTogMTAsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogOSxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxMiwgeTogMTIsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiAyLCB2OiAxIH0sXG4gICAgICB7IGlkOiA1LCB4OiA2LCB5OiAxMiwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDYsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuXTtcbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXRhbCBleHRlbmRzIEFuaW1TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5LCBsZW5ndGgpIHtcclxuICAgIHN1cGVyKENvbnN0cy5PYmplY3RNZXRhbCwgZW5naW5lLCAnaW1nX21ldGFsJywgdHgsIHR5LCBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoLCAwLCAwLCAwLCAxLCB0cnVlKTtcclxuICAgIHRoaXMueFRpbGUgPSB0eDtcclxuICAgIHRoaXMueVRpbGUgPSB0eTtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5hbmltRGVsYXkgPSA5O1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjYW5HbGlkZShkaXIpIHtcclxuICAgIGlmIChkaXIgPT09IENvbnN0cy5EaXJMZWZ0ICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMubCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpciA9PT0gQ29uc3RzLkRpclJpZ2h0ICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMucikpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBmcm96ZW5Ub0ljZSgpIHtcclxuICAgIGNvbnN0IHJpZ2h0U3ByaXRlID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSArIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgY29uc3QgbGVmdFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueFRpbGUgLSAxLCB0aGlzLnlUaWxlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICF0aGlzLmZhbGxpbmcgJiZcclxuICAgICAgKChyaWdodFNwcml0ZSAmJiByaWdodFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJiByaWdodFNwcml0ZS5mcm96ZW4ubGVmdCkgfHxcclxuICAgICAgICAobGVmdFNwcml0ZSAmJiBsZWZ0U3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmIGxlZnRTcHJpdGUuZnJvemVuLnJpZ2h0KSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBncmF2aXR5KCkge1xyXG4gICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmICF0aGlzLmZyb3plblRvSWNlKCkpIHtcclxuICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZhbGxpbmcpIHtcclxuICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbGxpc2lvbigpIHtcclxuICAgIGlmICghdGhpcy5jYW5HbGlkZSh0aGlzLmRpcmVjdGlvbikpIHtcclxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtY29sbGlzaW9uJyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VNb3Zpbmc6XHJcbiAgICAgICAgdGhpcy5nbGlkZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlQ2hlY2s6XHJcbiAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgIHRoaXMuZG9Eb3duKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgc3VwZXIuZHJhdygpO1xyXG4gICAgdGhpcy5kcmF3RnJvc3QoKTtcclxuICB9XHJcblxyXG4gIGdsaWRlKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IENvbnN0cy5QaHlzaWNzU3BlZWQ7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcclxuICAgICAgdGhpcy54ICs9IENvbnN0cy5QaHlzaWNzU3BlZWQgKiB0aGlzLmRpcmVjdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9Eb3duKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IENvbnN0cy5QaHlzaWNzU3BlZWQ7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcclxuICAgICAgdGhpcy55ICs9IENvbnN0cy5QaHlzaWNzU3BlZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1c2goZGlyKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHR5cGVvZiBkaXIgPT09ICd1bmRlZmluZWQnID8gdGhpcy5kaXJlY3Rpb24gOiBkaXI7XHJcbiAgICBpZiAoIXRoaXMuY29sbGlzaW9uKCkpIHtcclxuICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTW92aW5nLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xyXG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcclxuICAgIHN1cGVyKENvbnN0cy5PYmplY3RQbGF5ZXIsIGVuZ2luZSwgJ2ltZ19kb25hJywgdHgsIHR5LCA0OCwgNjQsIC0xMCwgLTMyLCAyLCAyLCBmYWxzZSk7XHJcbiAgICB0aGlzLnNwZWVkID0gQ29uc3RzLlBsYXllclNwZWVkO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xyXG4gICAgdGhpcy5zdGF0ZSA9IDA7IC8vc3RhbmRpbmcgdG9wIHJpZ2h0IGRvd24gbGVmdFxyXG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMudGlsZVdpZHRoID0gQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgIHRoaXMudGlsZUhlaWdodCA9IENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5QbGF5ZXJBbmltRGVsYXk7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICB0aGlzLmlubmVyQ291bnRlciA9IDA7XHJcbiAgICB0aGlzLnN0YW5kQ291bnRlciA9IDA7XHJcbiAgICB0aGlzLmludHJvKCk7XHJcbiAgfVxyXG5cclxuICBsZWZ0KCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vaWYgc3RhbmRpbmcgdGhlbiB0dXJuXHJcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09IENvbnN0cy5EaXJMZWZ0KSB7XHJcbiAgICAgIC8vaXMgbm90IHVuZGVyIGEgYnJpY2tcclxuICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltVHVyblN0YXJ0LCBDb25zdHMuQW5pbVR1cm5FbmQsIGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVR1cm4sIHRydWUpO1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IENvbnN0cy5EaXJMZWZ0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9ydW5uaW5nXHJcbiAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5sKSAmJiBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgLy9ub3QgdW5kZXIgYSBicmlja1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51bCkpIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVJ1blN0YXJ0LCBDb25zdHMuQW5pbVJ1bkVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIENvbnN0cy5BbmltQ3JvdWNoRW5kLCB0cnVlLCBDb25zdHMuQW5pbUxlZnRSb3csIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlTGVmdCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy9oaXQgYW4gaWNlXHJcbiAgICAgIGlmIChcclxuICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmXHJcbiAgICAgICAgKHRoaXMuY29ybmVycy5sID09PSBDb25zdHMuT2JqZWN0SWNlIHx8IHRoaXMuY29ybmVycy5sID09PSBDb25zdHMuT2JqZWN0TWV0YWwpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vY2xpbWJcclxuICAgICAgaWYgKFxyXG4gICAgICAgIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMubCkgJiZcclxuICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmXHJcbiAgICAgICAgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudSkgJiZcclxuICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51bCkgJiZcclxuICAgICAgICAhdGhpcy5tb3ZpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LCBDb25zdHMuQW5pbVB1c2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVVwLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmlnaHQoKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSBDb25zdHMuRGlyUmlnaHQpIHtcclxuICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltVHVyblN0YXJ0LCBDb25zdHMuQW5pbVR1cm5FbmQsIGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3csIDQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LCBDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVR1cm4sIHRydWUpO1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IENvbnN0cy5EaXJSaWdodDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5yKSAmJiBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpICYmICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnVyKSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUnVuU3RhcnQsIENvbnN0cy5BbmltUnVuRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIENvbnN0cy5BbmltQ3JvdWNoRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVJpZ2h0LCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSAmJlxyXG4gICAgICAgICh0aGlzLmNvcm5lcnMuciA9PT0gQ29uc3RzLk9iamVjdEljZSB8fCB0aGlzLmNvcm5lcnMuciA9PT0gQ29uc3RzLk9iamVjdE1ldGFsKVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5yKSAmJlxyXG4gICAgICAgIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiZcclxuICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSAmJlxyXG4gICAgICAgICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnVyKSAmJlxyXG4gICAgICAgICF0aGlzLm1vdmluZ1xyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1QdXNoU3RhcnQsIENvbnN0cy5BbmltUHVzaFN0YXJ0LCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVVwLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnVybigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSBDb25zdHMuTW92ZVJpcCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5T25jZSgnZGFuZ2VyJyk7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVJpcCwgdHJ1ZSk7XHJcbiAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1SaXBTdGFydCwgQ29uc3RzLkFuaW1SaXBFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3cpO1xyXG4gIH1cclxuXHJcbiAgaW50cm8oKSB7XHJcbiAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1CaWdGYWxsU3RhcnQsIENvbnN0cy5BbmltQmlnRmFsbEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlTGV2ZWxFbnRlciwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBvdXRybygpIHtcclxuICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUZhbGxTdGFydCwgQ29uc3RzLkFuaW1CaWdGYWxsRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVMZXZlbEV4aXQsIHRydWUpO1xyXG4gICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gIH1cclxuXHJcbiAgZG9SaXAoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgJSBDb25zdHMuU3BhcmtJbnRlcnZhbCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yUmVkLCA1LCAxLjIpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yQmx1ZSwgNSwgMC43KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLlJpcER1cmF0aW9uKSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JSZWQsIDE1LCAyLjApO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yQmx1ZSwgMTAsIDMuMCk7XHJcbiAgICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICAgIHRoaXMuZW5naW5lLmtleWJvYXJkLmVudGVyID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdyYXZpdHkoKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvcm5lcnMuZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc29sZS5lcnJvcigndW5kZWZpbmVkIGNvcm5lcicpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVEb3duLCB0cnVlKTtcclxuICAgICAgaWYgKHRoaXMuZmFsbENvdW50ZXIgPj0gMSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXlPbmNlKCdmYWxsaW5nJyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQmlnRmFsbFN0YXJ0LCBDb25zdHMuQW5pbUJpZ0ZhbGxFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUJpZ0ZhbGxTdGFydCwgQ29uc3RzLkFuaW1CaWdGYWxsRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCAzKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQuc3RvcCgnZmFsbGluZycpO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ29uc3RzLk1vdmVEb3duKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnZmFsbCcpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JHcmVlbiwgMTAsIDAuNzUpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JSZWQsIDUsIDEuMjUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmFsbENvdW50ZXIgPSAwO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgaWYgKHRoaXMuY29ybmVycy5kID09PSBDb25zdHMuT2JqZWN0SmFyKSB7XHJcbiAgICAgICAgY29uc3QgamFyID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgICAgIGlmIChqYXIgJiYgamFyLm9uRmlyZSkge1xyXG4gICAgICAgICAgdGhpcy5idXJuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpY2VPclRlbGVwb3J0KCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvcm5lcnMuZCA9PT0gQ29uc3RzLk9iamVjdFRlbGVwb3J0KSB7XHJcbiAgICAgIHRoaXMudGVsZXBvcnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaWNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ZWxlcG9ydCgpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1GYWxsU3RhcnQsIENvbnN0cy5BbmltQmlnRmFsbEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVGVsZXBvcnRPdXQsIHRydWUpO1xyXG4gICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5kb1RlbGVwb3J0SW4oKTtcclxuICB9XHJcblxyXG4gIGljZSgpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSkge1xyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCkge1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kcikgJiYgdGhpcy5jb3JuZXJzLmRyICE9PSBDb25zdHMuT2JqZWN0RmlyZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsIENvbnN0cy5BbmltSWNlRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTWFrZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvcm5lcnMuZHIgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LCBDb25zdHMuQW5pbUljZUVuZCwgZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZVJlbW92ZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LCBDb25zdHMuQW5pbUljZUVuZCwgZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZUZhaWwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZGwpICYmIHRoaXMuY29ybmVycy5kbCAhPT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LCBDb25zdHMuQW5pbUljZUVuZCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTWFrZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvcm5lcnMuZGwgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LCBDb25zdHMuQW5pbUljZUVuZCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlUmVtb3ZlLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsIENvbnN0cy5BbmltSWNlRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VGYWlsLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGp1bXAoKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQpIHtcclxuICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMucikgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudXIpICYmICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LCBDb25zdHMuQW5pbVB1c2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3cpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVVcCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmwpICYmICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnVsKSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSkge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVB1c2hTdGFydCwgQ29uc3RzLkFuaW1QdXNoU3RhcnQsIGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3cpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVVcCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvUnVuKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZCAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1R1cm4oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9PdXRybygpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciAlIENvbnN0cy5TcGFya0ludGVydmFsID09PSAwKSB7XHJcbiAgICAgIHRoaXMuaW5uZXJDb3VudGVyICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JHcmVlbiwgMjUsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSAzKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvclJlZCwgMzAsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gNSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JCbHVlLCAzNSwgMS41KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgJSAyID09PSAwICYmIHRoaXMuaW5uZXJDb3VudGVyIDwgNikge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2NsaW1iJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlubmVyQ291bnRlciAlIDIgPT09IDEpIHtcclxuICAgICAgdGhpcy55ICs9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnkgLT0gMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA+PSA2KSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ3N0YXRlLWxlYXZlJyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5uZXh0TGV2ZWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvSW50cm8oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDgpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckdyZWVuLCAyMCwgMi41KTtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvclJlZCwgMzUsIDEpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yQmx1ZSwgMjAsIDEuNSk7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ3N0YWdlLWVudGVyJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID49IENvbnN0cy5JbnRyb0R1cmF0aW9uKSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnN0b3AoJ2ZhbGxpbmcnKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb0dyYXZpdHkoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgIHRoaXMuZmFsbENvdW50ZXIrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvU3RhbmQoKSB7XHJcbiAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudSkpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhbmRDb3VudGVyKysgPiBDb25zdHMuU2xlZXBUaHJlc2hvbGQpIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICBDb25zdHMuQW5pbVNsZWVwU3RhcnQsXHJcbiAgICAgICAgICBDb25zdHMuQW5pbVNsZWVwRW5kLFxyXG4gICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgIHRoaXMuZGlyZWN0aW9uICE9PSAxID8gQ29uc3RzLkFuaW1MZWZ0Um93IDogQ29uc3RzLkFuaW1SaWdodFJvdyxcclxuICAgICAgICAgIDQ4LFxyXG4gICAgICAgICAgdHJ1ZSxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgIENvbnN0cy5BbmltU3RhbmRTdGFydCxcclxuICAgICAgICAgIENvbnN0cy5BbmltU3RhbmRFbmQsXHJcbiAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgdGhpcy5kaXJlY3Rpb24gIT09IDEgPyBDb25zdHMuQW5pbUxlZnRSb3cgOiBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICAgICAgOCxcclxuICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgIENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsXHJcbiAgICAgICAgQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCxcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiAhPT0gMSA/IENvbnN0cy5BbmltTGVmdFJvdyA6IENvbnN0cy5BbmltUmlnaHRSb3csXHJcbiAgICAgICAgOCxcclxuICAgICAgICB0cnVlLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9VcCgpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA8PSAxOCkge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuY291bnRlcikge1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2NsaW1iJyk7XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yR3JlZW4sIDEwLCAwLjc1KTtcclxuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JSZWQsIDUsIDEuMjUpO1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVB1c2hFbmQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUHVzaEVuZCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1KdW1wU3RhcnQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltSnVtcFN0YXJ0LFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3csXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcmVjdGlvbjtcclxuICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbUp1bXBFbmQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltSnVtcEVuZCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oMiwgMiwgZmFsc2UsIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93KTtcclxuICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTg6XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltU3RhbmQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltU3RhbmQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0ID8gQ29uc3RzLkFuaW1SaWdodFJvdyA6IENvbnN0cy5BbmltTGVmdFJvdyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLnggKz0gOCAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYWtlSWNlKCkge1xyXG4gICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnbmV3LWljZScpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkSWNlQmxvY2sodGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSwgQ29uc3RzLkNvbG9yQmx1ZSwgNSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJY2VCbG9jaygpIHtcclxuICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1yZW1vdmUnKTtcclxuICAgIHRoaXMuZW5naW5lLnJlbW92ZUljZUJsb2NrKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSArIDEsIENvbnN0cy5Db2xvckJsdWUsIDUpO1xyXG4gIH1cclxuXHJcbiAgcHVzaCgpIHtcclxuICAgIGNvbnN0IGljZSA9IHRoaXMuZW5naW5lLmljZUF0KHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSk7XHJcbiAgICBpZiAoaWNlICYmIGljZS5jYW5HbGlkZSh0aGlzLmRpcmVjdGlvbikpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yV2hpdGUsIDMpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JCbHVlLCAzLCAxLjUpO1xyXG4gICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgQ29uc3RzLkFuaW1QdXNoU3RhcnQsXHJcbiAgICAgICAgQ29uc3RzLkFuaW1QdXNoRW5kLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgIDMsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVQdXNoLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvUHVzaCgpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAyO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA+IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICBjb25zdCBpY2UgPSB0aGlzLmVuZ2luZS5pY2VBdCh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUpO1xyXG4gICAgICBpZiAoaWNlKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLXB1c2gnKTtcclxuICAgICAgICBpY2UucHVzaCh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb0ljZSgpIHtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDgpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENvbnN0cy5Nb3ZlSWNlTWFrZSkge1xyXG4gICAgICAgIHRoaXMubWFrZUljZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlSWNlQmxvY2soKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID49IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvRmFpbEljZSgpIHtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDgpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWRpc2FibGVkJyk7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUgKyAxLCAnODgsNjYsNjYnKTtcclxuICAgIH1cclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA+PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1RlbGVwb3J0SW4oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgJSBDb25zdHMuU3BhcmtJbnRlcnZhbCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmlubmVyQ291bnRlciArPSAxO1xyXG4gICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPT09IDEpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdjbGltYicpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JHcmVlbiwgMTAsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSAyKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckdyZWVuLCAxMCwgMS41KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID49IDIpIHtcclxuICAgICAgdGhpcy5kb1RlbGVwb3J0T3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1RlbGVwb3J0T3V0KCkge1xyXG4gICAgY29uc3QgdGVsZXBvcnQgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICBpZiAoIXRlbGVwb3J0IHx8ICF0ZWxlcG9ydC5saW5rKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnggPSB0ZWxlcG9ydC5saW5rLng7XHJcbiAgICB0aGlzLnkgPSB0ZWxlcG9ydC5saW5rLnkgLSAzMjtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JHcmVlbiwgMTUsIDEuNSk7XHJcbiAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtcmVtb3ZlJyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbGxpc2lvbnMoKSB7XHJcbiAgICBpZiAodGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5PYmplY3RQbGF5ZXIpID09PSBDb25zdHMuT2JqZWN0RmlyZSkge1xyXG4gICAgICB0aGlzLmJ1cm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgIHRoaXMuY29sbGlzaW9ucygpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IENvbnN0cy5Nb3ZlU3RhbmQpIHtcclxuICAgICAgdGhpcy5zdGFuZENvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IENvbnN0cy5Nb3ZlRG93bikge1xyXG4gICAgICB0aGlzLmZhbGxDb3VudGVyID0gMDtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlUmlnaHQ6XHJcbiAgICAgICAgdGhpcy5kb1J1bigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlTGVmdDpcclxuICAgICAgICB0aGlzLmRvUnVuKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgIHRoaXMuZG9HcmF2aXR5KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVVcDpcclxuICAgICAgICB0aGlzLmRvVXAoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZVR1cm46XHJcbiAgICAgICAgdGhpcy5kb1R1cm4oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUljZU1ha2U6XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VSZW1vdmU6XHJcbiAgICAgICAgdGhpcy5kb0ljZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlRmFpbDpcclxuICAgICAgICB0aGlzLmRvRmFpbEljZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlU3RhbmQ6XHJcbiAgICAgICAgdGhpcy5kb1N0YW5kKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVQdXNoOlxyXG4gICAgICAgIHRoaXMuZG9QdXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVSaXA6XHJcbiAgICAgICAgdGhpcy5kb1JpcCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlTGV2ZWxFeGl0OlxyXG4gICAgICAgIHRoaXMuZG9PdXRybygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlVGVsZXBvcnRPdXQ6XHJcbiAgICAgICAgdGhpcy5kb1RlbGVwb3J0SW4oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUxldmVsRW50ZXI6XHJcbiAgICAgICAgdGhpcy5kb0ludHJvKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBSZXNvdXJjZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gW107XG4gICAgdGhpcy5yZXNvdXJjZXMgPSB7fTtcbiAgICB0aGlzLmxvYWRlZCA9IDA7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgaWYgKHRoaXMuY2FudmFzKSB7XG4gICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuICB9XG5cbiAgYWRkKHR5cGUsIG5hbWUsIHNyYykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMucHVzaCh7IHR5cGU6IHR5cGUsIG5hbWU6IG5hbWUsIHNyYzogc3JjIH0pO1xuICB9XG5cbiAgZ2V0KG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXNbbmFtZV07XG4gIH1cblxuICBjaGVjayhjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLmN0eCkge1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoNTAsIDI1MCwgKHRoaXMubG9hZGVkICogNDUwKSAvIHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLCA0MCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxvYWRlZCA9PT0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcmVhZHkoY2FsbGJhY2spIHtcbiAgICBmb3IgKGNvbnN0IHJlc291cmNlIG9mIHRoaXMuZGVmaW5pdGlvbnMpIHtcbiAgICAgIGlmIChyZXNvdXJjZS50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkZWQgKz0gMTtcbiAgICAgICAgICB0aGlzLmNoZWNrKGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGltYWdlLnNyYyA9IHJlc291cmNlLnNyYztcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNbcmVzb3VyY2UubmFtZV0gPSBpbWFnZTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXNvdXJjZS50eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVzb3VyY2UubmFtZSk7XG4gICAgICAgIHRoaXMubG9hZGVkICs9IDE7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzW3Jlc291cmNlLm5hbWVdID0gYXVkaW87XG4gICAgICAgIHRoaXMuY2hlY2soY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRnJvc3QgfSBmcm9tICcuL3N0cnVjdCc7XG5pbXBvcnQgeyBGaXJlIH0gZnJvbSAnLi9maXJlJztcbmltcG9ydCB7IEljZSB9IGZyb20gJy4vaWNlJztcbmltcG9ydCB7IEphciB9IGZyb20gJy4vamFyJztcbmltcG9ydCB7IE1ldGFsIH0gZnJvbSAnLi9tZXRhbCc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSAnLi90aWxlbWFwJztcbmltcG9ydCB7IGxldmVscyB9IGZyb20gJy4vbGV2ZWxzJztcbmltcG9ydCB7IFRlbGVwb3J0IH0gZnJvbSAnLi90ZWxlcG9ydCc7XG5cbmV4cG9ydCBjbGFzcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgZGF0YS5tYXAgPSB0aGlzLmVuZ2luZS5tYXAubWFwO1xuICAgIGRhdGEudGhlbWUgPSB0aGlzLmVuZ2luZS5tYXAudGhlbWU7XG4gICAgZGF0YS5zcHJpdGVzID0gW107XG4gICAgZm9yIChjb25zdCBzcHJpdGUgb2YgdGhpcy5lbmdpbmUuc3ByaXRlcykge1xuICAgICAgbGV0IHZhbHVlID0gdHlwZW9mIHNwcml0ZS5sZW5ndGggPT09ICd1bmRlZmluZWQnID8gMSA6IHNwcml0ZS5sZW5ndGg7XG4gICAgICB2YWx1ZSA9IHNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEphciA/IHNwcml0ZS5vbkZpcmUgOiB2YWx1ZTtcbiAgICAgIGxldCBmbCwgZnI7XG4gICAgICBpZiAoc3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SWNlKSB7XG4gICAgICAgIGZsID0gc3ByaXRlLmZyb3plbi5sZWZ0O1xuICAgICAgICBmciA9IHNwcml0ZS5mcm96ZW4ucmlnaHQ7XG4gICAgICB9XG4gICAgICBkYXRhLnNwcml0ZXMucHVzaCh7XG4gICAgICAgIGlkOiBzcHJpdGUuaWQsXG4gICAgICAgIHg6IHNwcml0ZS54VGlsZSxcbiAgICAgICAgeTogc3ByaXRlLnlUaWxlLFxuICAgICAgICB2OiB2YWx1ZSxcbiAgICAgICAgZmw6IGZsLFxuICAgICAgICBmcjogZnIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGxvYWQoaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsc1tpbmRleF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMuZW5naW5lLmxldmVsID0gaW5kZXg7XG4gICAgY29uc3QgbGV2ZWwgPSBsZXZlbHNbaW5kZXhdO1xuICAgIHRoaXMuZW5naW5lLnNwcml0ZXMgPSBbXTtcbiAgICB0aGlzLmVuZ2luZS5tYXAgPSBuZXcgVGlsZU1hcCh0aGlzLmVuZ2luZSwgbGV2ZWwubWFwLCBsZXZlbC50aGVtZSk7XG4gICAgY29uc3QgdGVsZXBvcnRzID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3Qgc3ByaXRlIG9mIGxldmVsLnNwcml0ZXMpIHtcbiAgICAgIHN3aXRjaCAoc3ByaXRlLmlkKSB7XG4gICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdFBsYXllcjpcbiAgICAgICAgICB0aGlzLmVuZ2luZS5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpO1xuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZSh0aGlzLmVuZ2luZS5wbGF5ZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RJY2U6IHtcbiAgICAgICAgICBjb25zdCBmcm96ZW4gPSBuZXcgRnJvc3QodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzcHJpdGUuZmwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBmcm96ZW4ubGVmdCA9IHNwcml0ZS5mbDtcbiAgICAgICAgICAgIGZyb3plbi5yaWdodCA9IHNwcml0ZS5mcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKG5ldyBJY2UodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSwgcGFyc2VJbnQoc3ByaXRlLnYpLCBmcm96ZW4pKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RNZXRhbDpcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IE1ldGFsKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnksIDEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0RmlyZTpcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IEZpcmUodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RKYXI6IHtcbiAgICAgICAgICBjb25zdCBqYXIgPSBuZXcgSmFyKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpO1xuICAgICAgICAgIGlmIChzcHJpdGUudiA9PT0gMSkge1xuICAgICAgICAgICAgamFyLnR1cm5PbkZpcmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKGphcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0VGVsZXBvcnQ6IHtcbiAgICAgICAgICBjb25zdCB0ZWxlcG9ydCA9IG5ldyBUZWxlcG9ydCh0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55KTtcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUodGVsZXBvcnQpO1xuICAgICAgICAgIHRlbGVwb3J0LmxpbmtJZCA9IHNwcml0ZS5saW5rO1xuICAgICAgICAgIHRlbGVwb3J0cy5zZXQoc3ByaXRlLnJlZiwgdGVsZXBvcnQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGxpbmsgdGVsZXBvcnRzXG4gICAgaWYgKHRlbGVwb3J0cy5zaXplKSB7XG4gICAgICBmb3IgKGNvbnN0IHRlbGVwb3J0IG9mIHRlbGVwb3J0cy52YWx1ZXMoKSkge1xuICAgICAgICBjb25zdCBsaW5rZWQgPSB0ZWxlcG9ydHMuZ2V0KHRlbGVwb3J0LmxpbmtJZCk7XG4gICAgICAgIGlmIChsaW5rZWQpIHtcbiAgICAgICAgICB0ZWxlcG9ydC5saW5rID0gbGlua2VkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIFBhcnRpY2xlIHtcbiAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCBjb2xvciwgaW50ZW5zaXR5KSB7XG4gICAgdGhpcy5jb2xvciA9IHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcgPyBDb25zdHMuQ29sb3JXaGl0ZSA6IGNvbG9yO1xuICAgIHRoaXMuciA9IDQ7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMudnggPSAoTWF0aC5yYW5kb20oKSAqIDQgLSAyKSAqIGludGVuc2l0eTtcbiAgICB0aGlzLnZ5ID0gKE1hdGgucmFuZG9tKCkgKiA2IC0gNCkgKiBpbnRlbnNpdHk7XG4gICAgdGhpcy5zcGVlZCA9IDAuMTU7XG4gICAgdGhpcy5saWZlID0gMjU1O1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBvcGFjaXR5ID0gdGhpcy5saWZlIC8gMjU1O1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKCcgKyB0aGlzLmNvbG9yICsgJywnICsgb3BhY2l0eSArICcpJztcbiAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMuciwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMudng7XG4gICAgdGhpcy55ICs9IHRoaXMudnk7XG4gICAgdGhpcy52eSArPSB0aGlzLnNwZWVkO1xuICAgIHRoaXMubGlmZSAtPSA1O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcGFya3MgZXh0ZW5kcyBTcHJpdGUge1xuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSwgY29sb3IsIGxlbmd0aCwgaW50ZW5zaXR5KSB7XG4gICAgc3VwZXIobnVsbCwgZW5naW5lLCB0eCwgdHksIDMyLCAzMik7XG4gICAgdGhpcy5jb2xvciA9IHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcgPyAnMjU1LDI1NSwyNTUnIDogY29sb3I7XG4gICAgdGhpcy5sZW5ndGggPSB0eXBlb2YgbGVuZ3RoID09PSAndW5kZWZpbmVkJyA/IDEwIDogbGVuZ3RoO1xuICAgIHRoaXMuaW50ZW5zaXR5ID0gdHlwZW9mIGludGVuc2l0eSA9PT0gJ3VuZGVmaW5lZCcgPyAxIDogaW50ZW5zaXR5O1xuICAgIHRoaXMucGFydGljbGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnBhcnRpY2xlc1tpXSA9IG5ldyBQYXJ0aWNsZShcbiAgICAgICAgdGhpcy5lbmdpbmUuY3R4LFxuICAgICAgICB0eCAqIENvbnN0cy5UaWxlV2lkdGggKyAxNixcbiAgICAgICAgdHkgKiBDb25zdHMuVGlsZVdpZHRoICsgMTYsXG4gICAgICAgIHRoaXMuY29sb3IsXG4gICAgICAgIHRoaXMuaW50ZW5zaXR5LFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuZW5naW5lLmN0eC5zYXZlKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0uZHJhdygpO1xuICAgIH1cbiAgICB0aGlzLmVuZ2luZS5jdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZW5naW5lTW92ZSgpIHtcbiAgICB0aGlzLm1vdmUoKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0ubW92ZSgpO1xuICAgICAgaWYgKHRoaXMucGFydGljbGVzW2ldLmxpZmUgPCAwKSB7XG4gICAgICAgIHRoaXMucGFydGljbGVzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLnBhcnRpY2xlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVtb3ZlU2VsZigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVNlbGYoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZ2luZS5zZnhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5lbmdpbmUuc2Z4c1tpXSA9PT0gdGhpcykge1xuICAgICAgICB0aGlzLmVuZ2luZS5zZnhzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHJlc291cmNlcykge1xuICAgIHRoaXMucmVzb3VyY2VzID0gcmVzb3VyY2VzO1xuICAgIHRoaXMuc2Z4Vm9sdW1lID0gMC4zO1xuICAgIHRoaXMubXVzaWNWb2x1bWUgPSAwLjI7XG4gICAgdGhpcy5tdXNpYyA9IG51bGw7XG5cbiAgICAvLyBMb2FkIHByZWZlcmVuY2VzIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgdGhpcy5sb2FkUHJlZmVyZW5jZXMoKTtcblxuICAgIHRoaXMuc2Z4ID0ge1xuICAgICAgJ2ZpcmUtb2ZmJzogcmVzb3VyY2VzLmdldCgnc2Z4LWZpcmUtb2ZmJyksXG4gICAgICAnaWNlLXB1c2gnOiByZXNvdXJjZXMuZ2V0KCdzZngtaWNlLXB1c2gnKSxcbiAgICAgIGZhbGw6IHJlc291cmNlcy5nZXQoJ3NmeC1mYWxsJyksXG4gICAgICBmYWxsaW5nOiByZXNvdXJjZXMuZ2V0KCdzZngtZmFsbGluZycpLFxuICAgICAgJ25ldy1pY2UnOiByZXNvdXJjZXMuZ2V0KCdzZngtbmV3LWljZScpLFxuICAgICAgY2xpbWI6IHJlc291cmNlcy5nZXQoJ3NmeC1jbGltYicpLFxuICAgICAgJ2ljZS1jb2xsaXNpb24nOiByZXNvdXJjZXMuZ2V0KCdzZngtaWNlLWNvbGxpc2lvbicpLFxuICAgICAgJ3N0YWdlLWVudGVyJzogcmVzb3VyY2VzLmdldCgnc2Z4LXN0YWdlLWVudGVyJyksXG4gICAgICBkYW5nZXI6IHJlc291cmNlcy5nZXQoJ3NmeC1kYW5nZXInKSxcbiAgICAgICdpY2UtcmVtb3ZlJzogcmVzb3VyY2VzLmdldCgnc2Z4LWljZS1yZW1vdmUnKSxcbiAgICAgICdzdGF0ZS1sZWF2ZSc6IHJlc291cmNlcy5nZXQoJ3NmeC1zdGF0ZS1sZWF2ZScpLFxuICAgICAgJ2ljZS1kaXNhYmxlZCc6IHJlc291cmNlcy5nZXQoJ3NmeC1kaXNhYmxlZCcpLFxuICAgIH07XG4gIH1cblxuICBsb2FkUHJlZmVyZW5jZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG11c2ljT24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXVzaWNPbicpO1xuICAgICAgY29uc3Qgc291bmRPbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3VuZE9uJyk7XG4gICAgICB0aGlzLm11c2ljT24gPSBtdXNpY09uID09PSBudWxsID8gdHJ1ZSA6IG11c2ljT24gPT09ICd0cnVlJztcbiAgICAgIHRoaXMuc291bmRPbiA9IHNvdW5kT24gPT09IG51bGwgPyB0cnVlIDogc291bmRPbiA9PT0gJ3RydWUnO1xuICAgIH0gY2F0Y2gge1xuICAgICAgdGhpcy5tdXNpY09uID0gdHJ1ZTtcbiAgICAgIHRoaXMuc291bmRPbiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc2F2ZVByZWZlcmVuY2VzKCkge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVzaWNPbicsIFN0cmluZyh0aGlzLm11c2ljT24pKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzb3VuZE9uJywgU3RyaW5nKHRoaXMuc291bmRPbikpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gbG9jYWxTdG9yYWdlIG5vdCBhdmFpbGFibGVcbiAgICB9XG4gIH1cblxuICB0b2dnbGVNdXNpYygpIHtcbiAgICB0aGlzLm11c2ljT24gPSAhdGhpcy5tdXNpY09uO1xuICAgIHRoaXMuc2F2ZVByZWZlcmVuY2VzKCk7XG4gICAgaWYgKHRoaXMubXVzaWMpIHtcbiAgICAgIGlmICh0aGlzLm11c2ljT24pIHtcbiAgICAgICAgdGhpcy5tdXNpYy5wbGF5KCkuY2F0Y2goKCkgPT4ge30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tdXNpYy5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tdXNpY09uO1xuICB9XG5cbiAgdG9nZ2xlU291bmQoKSB7XG4gICAgdGhpcy5zb3VuZE9uID0gIXRoaXMuc291bmRPbjtcbiAgICB0aGlzLnNhdmVQcmVmZXJlbmNlcygpO1xuICAgIHJldHVybiB0aGlzLnNvdW5kT247XG4gIH1cblxuICBzZXRTZnhWb2x1bWUodm9sdW1lKSB7XG4gICAgdGhpcy5zZnhWb2x1bWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2b2x1bWUpKTtcbiAgfVxuXG4gIHNldE11c2ljVm9sdW1lKHZvbHVtZSkge1xuICAgIHRoaXMubXVzaWNWb2x1bWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2b2x1bWUpKTtcbiAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgdGhpcy5tdXNpYy52b2x1bWUgPSB0aGlzLm11c2ljVm9sdW1lO1xuICAgIH1cbiAgfVxuXG4gIHBsYXkoc2Z4KSB7XG4gICAgaWYgKCF0aGlzLnNvdW5kT24pIHJldHVybjtcbiAgICBjb25zdCBhdWRpbyA9IHRoaXMuc2Z4W3NmeF07XG4gICAgaWYgKCFhdWRpbykgcmV0dXJuO1xuICAgIGF1ZGlvLnZvbHVtZSA9IHRoaXMuc2Z4Vm9sdW1lO1xuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICBhdWRpby5wbGF5KCkuY2F0Y2goKCkgPT4ge30pO1xuICB9XG5cbiAgcGxheU9uY2Uoc2Z4KSB7XG4gICAgY29uc3QgYXVkaW8gPSB0aGlzLnNmeFtzZnhdO1xuICAgIGlmICghYXVkaW8gfHwgIWF1ZGlvLnBhdXNlZCkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5zb3VuZE9uKSByZXR1cm47XG4gICAgYXVkaW8udm9sdW1lID0gdGhpcy5zZnhWb2x1bWU7XG4gICAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgIGF1ZGlvLnBsYXkoKS5jYXRjaCgoKSA9PiB7fSk7XG4gIH1cblxuICBzdG9wKHNmeCkge1xuICAgIGNvbnN0IGF1ZGlvID0gdGhpcy5zZnhbc2Z4XTtcbiAgICBpZiAoIWF1ZGlvKSByZXR1cm47XG4gICAgYXVkaW8ucGF1c2UoKTtcbiAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gIH1cblxuICBzb3VuZHRyYWNrKCkge1xuICAgIHRoaXMubXVzaWMgPSB0aGlzLnJlc291cmNlcy5nZXQoJ3NmeC1tdXNpYy1zcGFya3MnKTtcbiAgICBpZiAoIXRoaXMubXVzaWMpIHJldHVybjtcbiAgICB0aGlzLm11c2ljLm11dGVkID0gZmFsc2U7XG4gICAgdGhpcy5tdXNpYy52b2x1bWUgPSB0aGlzLm11c2ljVm9sdW1lO1xuICAgIHRoaXMubXVzaWMubG9vcCA9IHRydWU7XG4gICAgaWYgKHRoaXMubXVzaWNPbikge1xuICAgICAgdGhpcy5tdXNpYy5wbGF5KCkuY2F0Y2goKCkgPT4ge30pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4vc3RydWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gIC8qKlxyXG4gICAqIEJhc2UgY2xhc3Mgb2YgdGhlIHNwcml0ZVxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgICBFbmdpbmUgRW5naW5lXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHR4ICAgICBQb3NpdGlvbiB0aWxlIHggaW4gdGhlIG1hcFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eSAgICAgUG9zaXRpb24gdGlsZSB5IGluIHRoZSBtYXBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggIFdpZHRoIG9mIHRoZSBzcHJpdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiB0aGUgc3ByaXRlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoaWQsIGVuZ2luZSwgdHgsIHR5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuY3R4ID0gZW5naW5lLmN0eDtcclxuICAgIHRoaXMuY29ybmVycyA9IG5ldyBQb3NpdGlvbigpO1xyXG4gICAgdGhpcy5zb2xpZCA9IHRydWU7XHJcbiAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5jb3VudGVyID0gZmFsc2U7XHJcbiAgICB0aGlzLnNwZWVkID0gNDtcclxuICAgIHRoaXMuc3RhdGUgPSBDb25zdHMuTW92ZVN0YW5kO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XHJcbiAgICB0aGlzLnhUaWxlID0gdHg7XHJcbiAgICB0aGlzLnlUaWxlID0gdHk7XHJcbiAgICB0aGlzLnggPSB0aGlzLnhUaWxlICogQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgIHRoaXMueSA9IHRoaXMueVRpbGUgKiBDb25zdHMuVGlsZVdpZHRoO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBTZXRzIHNwcml0ZSBzdGF0ZXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhdGUgIENvbnN0YW50IG9mIHRoZSBzdGF0ZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbW92aW5nIFRydWUgaWYgc3ByaXRlIGlzIG1vdmluZ1xyXG4gICAqL1xyXG4gIHNldFN0YXRlKHN0YXRlLCBtb3ZpbmcpIHtcclxuICAgIHRoaXMubW92aW5nID0gdHlwZW9mIG1vdmluZyA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IG1vdmluZztcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgfVxyXG5cclxuICBnZXRUaWxlKHR4LCB0eSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW5naW5lLm1hcC5nZXRUaWxlKHR4LCB0eSk7XHJcbiAgfVxyXG5cclxuICBpc1Nwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgcmV0dXJuIHRoaXMueFRpbGUgPT09IHR4ICYmIHRoaXMueVRpbGUgPT09IHR5O1xyXG4gIH1cclxuXHJcbiAgc3ByaXRlVHlwZUF0KHR4LCB0eSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0eCwgdHkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29ybmVycygpIHtcclxuICAgIHRoaXMuY29ybmVycy51ID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSAtIDEpO1xyXG4gICAgdGhpcy5jb3JuZXJzLmQgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmNvcm5lcnMubCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgLSAxLCB0aGlzLnlUaWxlKTtcclxuICAgIHRoaXMuY29ybmVycy5yID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgdGhpcy5jb3JuZXJzLnVsID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSAtIDEsIHRoaXMueVRpbGUgLSAxKTtcclxuICAgIHRoaXMuY29ybmVycy51ciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgKyAxLCB0aGlzLnlUaWxlIC0gMSk7XHJcbiAgICB0aGlzLmNvcm5lcnMuZGwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlIC0gMSwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy5jb3JuZXJzLmRyID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIDEsIHRoaXMueVRpbGUgKyAxKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgdGhpcy54VGlsZSA9IE1hdGguZmxvb3IodGhpcy54IC8gQ29uc3RzLlRpbGVXaWR0aCk7XHJcbiAgICB0aGlzLnlUaWxlID0gTWF0aC5mbG9vcih0aGlzLnkgLyBDb25zdHMuVGlsZVdpZHRoKTtcclxuICB9XHJcblxyXG4gIG1vdmUoKSB7fVxyXG5cclxuICBlbmdpbmVNb3ZlKCkge1xyXG4gICAgdGhpcy51cGRhdGVDb3JuZXJzKCk7XHJcbiAgICB0aGlzLm1vdmUoKTtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICB9XHJcbn1cclxuIiwiLyoqXG4gKiBHYW1lIHN0YXRlIG1hbmFnZXIgZm9yIHRyYWNraW5nIHNjb3JlIGFuZCBwcm9ncmVzc1xuICovXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5sZXZlbFN0YXJ0VGltZSA9IDA7XG4gICAgdGhpcy5sb2FkRnJvbVN0b3JhZ2UoKTtcbiAgfVxuXG4gIGxvYWRGcm9tU3RvcmFnZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRlJyk7XG4gICAgICBpZiAoc2F2ZWQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xuICAgICAgICB0aGlzLnNjb3JlID0gZGF0YS5zY29yZSB8fCAwO1xuICAgICAgICB0aGlzLmJlc3RUaW1lcyA9IGRhdGEuYmVzdFRpbWVzIHx8IHt9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5iZXN0VGltZXMgPSB7fTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgdGhpcy5iZXN0VGltZXMgPSB7fTtcbiAgICB9XG4gIH1cblxuICBzYXZlVG9TdG9yYWdlKCkge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgJ2dhbWVTdGF0ZScsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBzY29yZTogdGhpcy5zY29yZSxcbiAgICAgICAgICBiZXN0VGltZXM6IHRoaXMuYmVzdFRpbWVzLFxuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBsb2NhbFN0b3JhZ2Ugbm90IGF2YWlsYWJsZVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0TGV2ZWwoKSB7XG4gICAgdGhpcy5sZXZlbFN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICB9XG5cbiAgY29tcGxldGVMZXZlbChsZXZlbEluZGV4KSB7XG4gICAgY29uc3QgY29tcGxldGlvblRpbWUgPSBNYXRoLmZsb29yKChwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGV2ZWxTdGFydFRpbWUpIC8gMTAwMCk7XG4gICAgY29uc3QgbGV2ZWxLZXkgPSBgbGV2ZWxfJHtsZXZlbEluZGV4fWA7XG5cbiAgICAvLyBBZGQgc2NvcmUgYmFzZWQgb24gY29tcGxldGlvbiB0aW1lIChib251cyBmb3IgZmFzdGVyIGNvbXBsZXRpb24pXG4gICAgY29uc3QgdGltZUJvbnVzID0gTWF0aC5tYXgoMCwgMTAwIC0gY29tcGxldGlvblRpbWUpO1xuICAgIHRoaXMuc2NvcmUgKz0gMTAwICsgdGltZUJvbnVzO1xuXG4gICAgLy8gVHJhY2sgYmVzdCB0aW1lXG4gICAgaWYgKCF0aGlzLmJlc3RUaW1lc1tsZXZlbEtleV0gfHwgY29tcGxldGlvblRpbWUgPCB0aGlzLmJlc3RUaW1lc1tsZXZlbEtleV0pIHtcbiAgICAgIHRoaXMuYmVzdFRpbWVzW2xldmVsS2V5XSA9IGNvbXBsZXRpb25UaW1lO1xuICAgIH1cblxuICAgIHRoaXMuc2F2ZVRvU3RvcmFnZSgpO1xuICAgIHJldHVybiB7IGNvbXBsZXRpb25UaW1lLCB0aW1lQm9udXMgfTtcbiAgfVxuXG4gIGdldEJlc3RUaW1lKGxldmVsSW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5iZXN0VGltZXNbYGxldmVsXyR7bGV2ZWxJbmRleH1gXSB8fCBudWxsO1xuICB9XG5cbiAgcmVzZXRTY29yZSgpIHtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnNhdmVUb1N0b3JhZ2UoKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBTdG9yZXMgcG9zaXRpb24gb2YgdGhlIGNvcm5lcnMgYW5kIHZlcnRpY2VzXG4gKi9cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudSA9IDA7XG4gICAgdGhpcy5kID0gMDtcbiAgICB0aGlzLmwgPSAwO1xuICAgIHRoaXMuciA9IDA7XG4gICAgdGhpcy51bCA9IDA7XG4gICAgdGhpcy51ciA9IDA7XG4gICAgdGhpcy5kbCA9IDA7XG4gICAgdGhpcy5kciA9IDA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZyb3N0IHtcbiAgY29uc3RydWN0b3IobGVmdCwgcmlnaHQpIHtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBUZWxlcG9ydCBleHRlbmRzIEFuaW1TcHJpdGUge1xuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSkge1xuICAgIHN1cGVyKENvbnN0cy5PYmplY3RUZWxlcG9ydCwgZW5naW5lLCAnaW1nX3RlbGVwb3J0JywgdHgsIHR5LCBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoLCAwLCAwLCAwLCAzLCB0cnVlKTtcbiAgICB0aGlzLmlzU29saWQgPSB0cnVlO1xuICAgIHRoaXMuYW5pbURlbGF5ID0gQ29uc3RzLkFuaW1EZWZhdWx0RGVsYXkgKiAyO1xuICAgIHRoaXMub25GaXJlID0gZmFsc2U7XG4gICAgdGhpcy5hbmltUm93ID0gMDtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgaWYgKCF0aGlzLm1vdmluZykge1xuICAgICAgdGhpcy5jb2xsaXNpb25zKCk7XG4gICAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcbiAgICAgICAgdGhpcy5kb0Rvd24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29sbGlzaW9ucygpIHt9XG5cbiAgZ3Jhdml0eSgpIHtcbiAgICBpZiAoIXRoaXMuY29ybmVycy5kKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZG9Eb3duKCkge1xuICAgIHRoaXMuY291bnRlciArPSBDb25zdHMuUGh5c2ljc1NwZWVkO1xuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xuICAgICAgdGhpcy55ICs9IENvbnN0cy5QaHlzaWNzU3BlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgc3VwZXIuZHJhdygpO1xuICAgIHRoaXMuZHJhd0Zyb3N0KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIFRpbGVNYXAge1xuICAvKipcbiAgICogVGlsZW1hcCBjbGFzc1xuICAgKiBAcGFyYW0ge29iamVjdH0gZW5naW5lIEVuZ2luZVxuICAgKiBAcGFyYW0ge29iamVjdH0gbWFwICBNYXRyaXggb2YgdGhlIG1hcFxuICAgKi9cblxuICBjb25zdHJ1Y3RvcihlbmdpbmUsIG1hcCwgdGhlbWUpIHtcbiAgICB0aGlzLmN0eCA9IGVuZ2luZS5jdHg7XG4gICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgdGhpcy50aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMudGlsZVdpZHRoID0gQ29uc3RzLlRpbGVXaWR0aDtcbiAgICB0aGlzLnRpbGVIZWlnaHQgPSBDb25zdHMuVGlsZVdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5tYXAubGVuZ3RoIC0gMTtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5tYXBbMF0ubGVuZ3RoIC0gMTtcbiAgICB0aGlzLnRpbGVzSW1hZ2UgPSB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCd0aWxlbWFwJyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvbnRlbnQgb2YgdGhlIHRpbGUgaW5zaWRlIHRoZSBtYXRyaXhcbiAgICogaWYgcG9zaXRpb24gb3V0IG9mIGJvdW5kcyByZXR1cm5zIENvbnN0cy5PQkpFQ1RfT1VUXG4gICAqIEBwYXJhbSAge251bWJlcn0geSBwb3NpdGlvblxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHggcG9zaXRpb25cbiAgICogQHJldHVybiB7bnVtYmVyfSAgIENvbnRlbnQgb2YgdGhlIHRpbGVcbiAgICovXG4gIGdldFRpbGUoeCwgeSkge1xuICAgIGlmICh4IDwgMCB8fCB5IDwgMCB8fCB4ID4gdGhpcy53aWR0aCB8fCB5ID4gdGhpcy5oZWlnaHQpIHtcbiAgICAgIHJldHVybiBDb25zdHMuT2JqZWN0T3V0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXBbeV1beF07XG4gIH1cbiAgLyoqXG4gICAqIERyYXdzIHRoZSBtYXBcbiAgICogQHJldHVybiB7bm9uZX1cbiAgICovXG4gIGRyYXcoKSB7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMud2lkdGg7ICsraSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gdGhpcy5oZWlnaHQ7ICsraikge1xuICAgICAgICBsZXQgdGlsZVR5cGUgPSBDb25zdHMuVGlsZUJhY2tncm91bmQ7XG4gICAgICAgIGlmICh0aGlzLm1hcFtqXVtpXSA9PT0gMSkge1xuICAgICAgICAgIGlmICghdGhpcy5nZXRUaWxlKGkgLSAxLCBqKSAmJiAhdGhpcy5nZXRUaWxlKGkgKyAxLCBqKSkge1xuICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZUJvdGhTaWRlcztcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmdldFRpbGUoaSAtIDEsIGopKSB7XG4gICAgICAgICAgICB0aWxlVHlwZSA9IENvbnN0cy5UaWxlTGVmdFNpZGU7XG4gICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5nZXRUaWxlKGkgKyAxLCBqKSkge1xuICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZVJpZ2h0U2lkZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZU1pZGRsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgIHRoaXMudGlsZXNJbWFnZSxcbiAgICAgICAgICB0aWxlVHlwZSxcbiAgICAgICAgICB0aGlzLnRoZW1lICogdGhpcy50aWxlSGVpZ2h0LFxuICAgICAgICAgIHRoaXMudGlsZVdpZHRoLFxuICAgICAgICAgIHRoaXMudGlsZUhlaWdodCxcbiAgICAgICAgICBpICogdGhpcy50aWxlV2lkdGgsXG4gICAgICAgICAgaiAqIHRoaXMudGlsZUhlaWdodCxcbiAgICAgICAgICB0aGlzLnRpbGVXaWR0aCxcbiAgICAgICAgICB0aGlzLnRpbGVIZWlnaHQsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgfVxuXG4gIG1vdmUoKSB7fVxuXG4gIGVuZ2luZU1vdmUoKSB7fVxufVxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBUaWxlID0gT2JqZWN0LmZyZWV6ZSh7XG4gIHRpbGVzOiB7XG4gICAgW0NvbnN0cy5PYmplY3RCYWNrZ3JvdW5kXToge1xuICAgICAgc29saWQ6IGZhbHNlLFxuICAgICAgZnJlZXplOiBmYWxzZSxcbiAgICB9LFxuICAgIFtDb25zdHMuT2JqZWN0T3V0XToge1xuICAgICAgc29saWQ6IHRydWUsXG4gICAgICBmcmVlemU6IGZhbHNlLFxuICAgIH0sXG4gICAgW0NvbnN0cy5PYmplY3RQbGF5ZXJdOiB7XG4gICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgIGZyZWV6ZTogZmFsc2UsXG4gICAgfSxcbiAgICBbQ29uc3RzLk9iamVjdEljZV06IHtcbiAgICAgIHNvbGlkOiB0cnVlLFxuICAgICAgZnJlZXplOiBmYWxzZSxcbiAgICB9LFxuICAgIFtDb25zdHMuT2JqZWN0TWV0YWxdOiB7XG4gICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgIGZyZWV6ZTogdHJ1ZSxcbiAgICB9LFxuICAgIFtDb25zdHMuT2JqZWN0V2FsbF06IHtcbiAgICAgIHNvbGlkOiB0cnVlLFxuICAgICAgZnJlZXplOiB0cnVlLFxuICAgIH0sXG4gICAgW0NvbnN0cy5PYmplY3RGaXJlXToge1xuICAgICAgc29saWQ6IGZhbHNlLFxuICAgICAgZnJlZXplOiBmYWxzZSxcbiAgICB9LFxuICAgIFtDb25zdHMuT2JqZWN0SmFyXToge1xuICAgICAgc29saWQ6IHRydWUsXG4gICAgICBmcmVlemU6IHRydWUsXG4gICAgfSxcbiAgICBbQ29uc3RzLk9iamVjdFRlbGVwb3J0XToge1xuICAgICAgc29saWQ6IHRydWUsXG4gICAgICBmcmVlemU6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBpc1NvbGlkOiBmdW5jdGlvbiAoaWQpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudGlsZXNbaWRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVTkRFRklORUQgT04gaXNTb2xpZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudGlsZXNbaWRdLnNvbGlkO1xuICAgIH1cbiAgfSxcblxuICBpc0ZyZWV6YWJsZTogZnVuY3Rpb24gKGlkKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVzW2lkXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVU5ERUZJTkVEIE9OIGlzRnJlZXphYmxlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy50aWxlc1tpZF0uZnJlZXplO1xuICAgIH1cbiAgfSxcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IEZpcmUgfSBmcm9tICcuL2ZpcmUnO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgeyBKYXIgfSBmcm9tICcuL2phcic7XG5pbXBvcnQgeyBNZXRhbCB9IGZyb20gJy4vbWV0YWwnO1xuaW1wb3J0IHsgUmVzb3VyY2VzIH0gZnJvbSAnLi9yZXNvdXJjZXMnO1xuaW1wb3J0IHsgVGVsZXBvcnQgfSBmcm9tICcuL3RlbGVwb3J0Jztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG4gIGlmICh3aW5kb3cuRklSRU5JQ0VfRURJVE9SX01PREUpIHtcbiAgICBkb1N0YXJ0Q2xpY2soKTtcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb1N0YXJ0Q2xpY2soKSk7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gZG9TdGFydENsaWNrKCkge1xuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJyk7XG4gIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBsb2FkZXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gIGNvbnN0IHJlc291cmNlcyA9IGF3YWl0IGxvYWRHYW1lUmVzb3VyY2VzKCk7XG4gIHN0YXJ0R2FtZShyZXNvdXJjZXMpO1xuICBpZiAod2luZG93LkZJUkVOSUNFX0VESVRPUl9NT0RFKSB7XG4gICAgbG9hZEdhbWVFZGl0b3IoKTtcbiAgfVxuICB3aW5kb3cuZmlyZW5pY2UgPSB0cnVlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkR2FtZVJlc291cmNlcygpIHtcbiAgbGV0IHJlc29sdmU7XG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyZXMgPT4gKHJlc29sdmUgPSByZXMpKTtcbiAgY29uc3QgcmVzb3VyY2VzID0gbmV3IFJlc291cmNlcygpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICd0aWxlbWFwJywgJ2ltYWdlcy90aWxlbWFwLnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfaWNlJywgJ2ltYWdlcy9pY2UucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19qYXInLCAnaW1hZ2VzL2phci5wbmcnKTtcbiAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX2ZpcmUnLCAnaW1hZ2VzL2ZpcmUucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19kb25hJywgJ2ltYWdlcy9kb25hLnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfaW50cm8nLCAnaW1hZ2VzL2ludHJvLnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfbWV0YWwnLCAnaW1hZ2VzL21ldGFsLnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfdGVsZXBvcnQnLCAnaW1hZ2VzL3RlbGVwb3J0LnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdmcm9zdCcsICdpbWFnZXMvZnJvemVuLnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtaWNlLXB1c2gnLCAnc291bmRzL3NmeC1pY2UtcHVzaC5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWZpcmUtb2ZmJywgJ3NvdW5kcy9zZngtZmlyZS1vZmYubXAzJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1mYWxsaW5nJywgJ3NvdW5kcy9zZngtZmFsbGluZy5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LW5ldy1pY2UnLCAnc291bmRzL3NmeC1uZXctaWNlLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtY2xpbWInLCAnc291bmRzL3NmeC1jbGltYi5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWljZS1jb2xsaXNpb24nLCAnc291bmRzL3NmeC1pY2UtY29sbGlzaW9uLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtc3RhZ2UtZW50ZXInLCAnc291bmRzL3NmeC1zdGFnZS1lbnRlci5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWRhbmdlcicsICdzb3VuZHMvc2Z4LWRhbmdlci5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWljZS1yZW1vdmUnLCAnc291bmRzL3NmeC1pY2UtcmVtb3ZlLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtc3RhdGUtbGVhdmUnLCAnc291bmRzL3NmeC1zdGF0ZS1sZWF2ZS5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWRpc2FibGVkJywgJ3NvdW5kcy9zZngtZGlzYWJsZWQubXAzJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1mYWxsJywgJ3NvdW5kcy9zZngtZmFsbC5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LW11c2ljLXNwYXJrcycsICdtdXNpYy9zcGFya3MubXAzJyk7XG5cbiAgcmVzb3VyY2VzLnJlYWR5KCgpID0+IHtcbiAgICByZXNvbHZlKHJlc291cmNlcyk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBsb2FkTGV2ZWxGcm9tRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgbHZsID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbHZsJyk7XG4gIGdhbWUuZW5naW5lLmxldmVsID0gcGFyc2VJbnQobHZsLCAxMCk7XG4gIGdhbWUuZW5naW5lLnNjZW5lLmxvYWQoZ2FtZS5lbmdpbmUubGV2ZWwpO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUocmVzb3VyY2VzKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgcmVzb3VyY2VzKTtcbiAgd2luZG93LmdhbWUgPSBnYW1lO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24ubHZsJykuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRMZXZlbEZyb21FdmVudCk7XG4gIH0pO1xuICBjb25zdCBsdmxTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbC1zZWxlY3RvcicpO1xuICBsdmxTZWxlY3Rvci5zdHlsZS5vcGFjaXR5ID0gMTtcbn1cblxuZnVuY3Rpb24gbG9hZEdhbWVFZGl0b3IoKSB7XG4gIGdhbWUuZW5naW5lLnNvdW5kLm11c2ljT24gPSBmYWxzZTtcbiAgZ2FtZS5lbmdpbmUuc291bmQuc291bmRPbiA9IGZhbHNlO1xuICBnYW1lLnN0YXRlID0gQ29uc3RzLkdhbWVTdGF0ZVBsYXk7XG4gIGdhbWUuZW5naW5lLmVkaXRvciA9IHRydWU7XG4gIGdhbWUuZW5naW5lLmtleWJvYXJkLmludHJvID0gZmFsc2U7XG4gIGdhbWUuZW5naW5lLnNvdW5kLm11c2ljLnBhdXNlKCk7XG5cbiAgbGV0IGlzRHJhd2luZyA9IGZhbHNlO1xuICBsZXQgbGFzdFRpbGVYID0gLTE7XG4gIGxldCBsYXN0VGlsZVkgPSAtMTtcblxuICBmdW5jdGlvbiBnZXRUaWxlQ29vcmRzKGUpIHtcbiAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHNjYWxlWCA9IGNhbnZhcy53aWR0aCAvIHJlY3Qud2lkdGg7XG4gICAgY29uc3Qgc2NhbGVZID0gY2FudmFzLmhlaWdodCAvIHJlY3QuaGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICB4OiBNYXRoLmZsb29yKChlLmNsaWVudFggLSByZWN0LmxlZnQpICogc2NhbGVYIC8gMzIpLFxuICAgICAgeTogTWF0aC5mbG9vcigoZS5jbGllbnRZIC0gcmVjdC50b3ApICogc2NhbGVZIC8gMzIpLFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVRvb2woeFRpbGUsIHlUaWxlKSB7XG4gICAgaWYgKHhUaWxlIDwgMCB8fCB5VGlsZSA8IDAgfHwgeFRpbGUgPj0gZ2FtZS5lbmdpbmUubWFwLm1hcFswXS5sZW5ndGggfHwgeVRpbGUgPj0gZ2FtZS5lbmdpbmUubWFwLm1hcC5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRvb2wgPCAyKSB7XG4gICAgICBnYW1lLmVuZ2luZS5tYXAubWFwW3lUaWxlXVt4VGlsZV0gPSB0b29sO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKHRvb2wpIHtcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0UGxheWVyOlxuICAgICAgICAgIGdhbWUuZW5naW5lLnBsYXllci54ID0geFRpbGUgKiAzMjtcbiAgICAgICAgICBnYW1lLmVuZ2luZS5wbGF5ZXIueSA9IHlUaWxlICogMzI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdEljZTpcbiAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRJY2VCbG9jayh4VGlsZSwgeVRpbGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RNZXRhbDpcbiAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRTcHJpdGUobmV3IE1ldGFsKGdhbWUuZW5naW5lLCB4VGlsZSwgeVRpbGUsIDEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0RmlyZTpcbiAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRTcHJpdGUobmV3IEZpcmUoZ2FtZS5lbmdpbmUsIHhUaWxlLCB5VGlsZSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RKYXI6XG4gICAgICAgICAgZ2FtZS5lbmdpbmUuYWRkU3ByaXRlKG5ldyBKYXIoZ2FtZS5lbmdpbmUsIHhUaWxlLCB5VGlsZSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RUZWxlcG9ydDpcbiAgICAgICAgICBnYW1lLmVuZ2luZS5hZGRTcHJpdGUobmV3IFRlbGVwb3J0KGdhbWUuZW5naW5lLCB4VGlsZSwgeVRpbGUpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICBpc0RyYXdpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gZ2V0VGlsZUNvb3JkcyhlKTtcbiAgICBsYXN0VGlsZVggPSB4O1xuICAgIGxhc3RUaWxlWSA9IHk7XG4gICAgcGxhY2VUb29sKHgsIHkpO1xuICB9KTtcblxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICBpZiAoIWlzRHJhd2luZykgcmV0dXJuO1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gZ2V0VGlsZUNvb3JkcyhlKTtcbiAgICAvLyBPbmx5IHBsYWNlIGlmIHdlIG1vdmVkIHRvIGEgbmV3IHRpbGUgYW5kIHRvb2wgc3VwcG9ydHMgZHJhZ2dpbmcgKHRpbGVzIG9ubHkpXG4gICAgaWYgKCh4ICE9PSBsYXN0VGlsZVggfHwgeSAhPT0gbGFzdFRpbGVZKSAmJiB0b29sIDwgMikge1xuICAgICAgcGxhY2VUb29sKHgsIHkpO1xuICAgICAgbGFzdFRpbGVYID0geDtcbiAgICAgIGxhc3RUaWxlWSA9IHk7XG4gICAgfVxuICB9KTtcblxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICBpc0RyYXdpbmcgPSBmYWxzZTtcbiAgICBsYXN0VGlsZVggPSAtMTtcbiAgICBsYXN0VGlsZVkgPSAtMTtcbiAgfSk7XG5cbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgaXNEcmF3aW5nID0gZmFsc2U7XG4gICAgbGFzdFRpbGVYID0gLTE7XG4gICAgbGFzdFRpbGVZID0gLTE7XG4gIH0pO1xuXG4gIGNvbnN0IHRoZW1lU2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUtc2VsZWN0b3InKTtcbiAgaWYgKHRoZW1lU2VsZWN0b3IpIHtcbiAgICB0aGVtZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBnYW1lLmVuZ2luZS5tYXAudGhlbWUgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgZS50YXJnZXQuYmx1cigpO1xuICAgIH0pO1xuICB9XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zYXZlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R4dC1sZXZlbCcpLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZ2FtZS5lbmdpbmUuc2NlbmUuc2F2ZSgpKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9