var FireNIce;
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
  /**
   * @param {Object} options - Engine options
   * @param {HTMLCanvasElement} options.canvas - The canvas element
   * @param {Object} options.resources - Game resources
   * @param {Function} [options.onLevelComplete] - Callback for level completion
   * @param {Object} [options.level] - Initial level data
   */
  constructor({ canvas, resources, onLevelComplete = null, level = null }) {
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
    this.scene = new _scene__WEBPACK_IMPORTED_MODULE_4__.Scene(this, level);
    this.gameMode = 'game';
    this.onLevelCompleteCallback = onLevelComplete;
    this.noSpriteMoveCount = 0;

    const lvl = localStorage.getItem('level');
    if (level !== null) {
      this.level = parseInt(lvl, 10);
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
  }

  collision() {
    const gameIsEditorMode = this.gameMode === 'editor';
    const fires = this.sprites.filter(sprite => sprite.id === _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.ObjectFire);
    if (!fires.length && !gameIsEditorMode && this.player.state !== _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.MoveLevelExit) {
      this.player.outro();
    }
  }

  nextLevel() {
    const gameIsEditor = this.gameMode === 'editor';
    if (this.onLevelCompleteCallback && !gameIsEditor) {
      this.onLevelCompleteCallback(this.level);
    }
  }

  loadNextLevel() {
    this.level++;
    if (this.gameMode === 'game') {
      localStorage.setItem('level', this.level);
    }
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
   * @param {Object} options - Game options
   * @param {HTMLCanvasElement} options.canvas - The canvas element
   * @param {Object} options.resources - Game resources
   * @param {string} options.gameMode - Game mode: 'game', 'level', or 'editor'
   * @param {onLevelComplete} [options.onLevelComplete] - Callback for level completion
   * @param {Object} [options.level] - Initial level data
   */
  constructor({ canvas, resources, gameMode = 'game', onLevelComplete = null, level = null }) {
    this.time = performance.now();
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.engine = new _engine__WEBPACK_IMPORTED_MODULE_1__.Engine({
      canvas,
      resources,
      level,
      onLevelComplete: (levelIndex) => this.onLevelComplete(levelIndex)
    });
    this.gameState = new _state__WEBPACK_IMPORTED_MODULE_2__.GameState();
    this.levels = _levels__WEBPACK_IMPORTED_MODULE_3__.levels;
    this.state = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.GameStatePlay;
    this.gameMode = gameMode;
    this.engine.gameMode = gameMode;
    this.engine.sound.soundtrack();
    this.gameState.startLevelTimer();
    this.onLevelCompleteCallback = onLevelComplete;

    // Transition properties
    this.transitionPhase = null; // 'closing' or 'opening'
    this.transitionRadius = 0;
    this.maxRadius = Math.sqrt(this.canvas.width ** 2 + this.canvas.height ** 2) / 2 + 50;
    this.transitionSpeed = 15;
    this.transitionCenterX = 0;
    this.transitionCenterY = 0;

    this.gameLoop = this.gameLoop_.bind(this);
    this.intervalId = setInterval(() => this.gameLoop(), 1000 / 60);
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
    this.engine.move();

    // Draw opening transition on top if active
    if (this.transitionPhase === 'opening') {
      this.drawCircleTransition();
    }
  }

  startNextlevel() {
    this.gameState.startLevelTimer();
    this.engine.loadNextLevel();
    // Switch to opening phase, centered on new player position
    this.transitionPhase = 'opening';
    this.transitionCenterX = this.engine.player.x + 16;
    this.transitionCenterY = this.engine.player.y + 16;
  }

  onLevelComplete(levelIndex) {
    this.gameState.completeLevel(levelIndex);

    // Start closing transition centered on player
    this.transitionCenterX = this.engine.player.x + 16;
    this.transitionCenterY = this.engine.player.y + 16;
    this.transitionRadius = this.maxRadius;
    this.transitionPhase = 'closing';
    this.state = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.GameStateTransition;

    if (this.onLevelCompleteCallback) {
      this.onLevelCompleteCallback(levelIndex);
    }
  }

  updateTransition() {
    if (this.transitionPhase === 'closing') {
      this.engine.draw();
      this.drawCircleTransition();
      this.transitionRadius -= this.transitionSpeed;
      if (this.transitionRadius <= 0) {
        this.transitionRadius = 0;

        // Load next level
        const isGameModeGame = this.gameMode === 'game';
        if (isGameModeGame) {
          this.startNextlevel();
        }

      }
    } else if (this.transitionPhase === 'opening') {
      this.engine.draw();
      this.drawCircleTransition();
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

  destroy() {
    // Clear the game loop interval
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    // Destroy keyboard to remove event listeners
    if (this.engine && this.engine.keyboard) {
      this.engine.keyboard.destroy();
    }
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
    this.mobileHandlers = [];

    window.addEventListener('keydown', this.keydown, false);
    window.addEventListener('keyup', this.keyup, false);

    // Canvas click to start
    const canvas = document.getElementById('canvas');
    this.canvasClickHandler = () => {
      if (this.intro) {
        this.enter = true;
      }
      this.intro = false;
    };
    if (canvas) {
      // todo enable for game mode
      // canvas.addEventListener('click', this.canvasClickHandler);
    }

    // Mobile controls - bind with null checks for compatibility
    this.bindMobileButton('btn_action', 'pointerdown', () => {
      this.down = true;
      this.action = true;
      this.left = false;
      this.right = false;
    });
    this.bindMobileButton('btn_action', 'pointerup', () => {
      this.down = false;
      this.action = false;
    });
    this.bindMobileButton('btn_action', 'pointerleave', () => {
      this.down = false;
      this.action = false;
    });

    this.bindMobileButton('btn_left', 'pointerdown', () => {
      this.left = true;
      this.right = false;
    });
    this.bindMobileButton('btn_left', 'pointerup', () => (this.left = false));
    this.bindMobileButton('btn_left', 'pointerleave', () => (this.left = false));

    this.bindMobileButton('btn_right', 'pointerdown', () => {
      this.right = true;
      this.left = false;
    });
    this.bindMobileButton('btn_right', 'pointerup', () => (this.right = false));
    this.bindMobileButton('btn_right', 'pointerleave', () => (this.right = false));

    this.bindMobileButton('btn_up', 'pointerdown', () => (this.up = true));
    this.bindMobileButton('btn_up', 'pointerup', () => (this.up = false));
    this.bindMobileButton('btn_up', 'pointerleave', () => (this.up = false));

    this.bindMobileButton('btn_down', 'pointerdown', () => {
      this.down = true;
      this.action = true;
    });
    this.bindMobileButton('btn_down', 'pointerup', () => {
      this.down = false;
      this.action = false;
    });
    this.bindMobileButton('btn_down', 'pointerleave', () => {
      this.down = false;
      this.action = false;
    });

    this.bindMobileButton('btn_select', 'click', () => (this.enter = true));
  }

  bindMobileButton(id, event, handler) {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener(event, handler);
      this.mobileHandlers.push({ element: el, event, handler });
    }
  }

  destroy() {
    // Remove window event listeners
    window.removeEventListener('keydown', this.keydown, false);
    window.removeEventListener('keyup', this.keyup, false);

    // Remove canvas click listener
    const canvas = document.getElementById('canvas');
    if (canvas && this.canvasClickHandler) {
      canvas.removeEventListener('click', this.canvasClickHandler);
    }

    // Remove all mobile button listeners
    for (const { element, event, handler } of this.mobileHandlers) {
      element.removeEventListener(event, handler);
    }
    this.mobileHandlers = [];
  }

  keydown_(e) {
    const tag = e.target && e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
      return;
    }
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
/* harmony export */   Resources: () => (/* binding */ Resources),
/* harmony export */   loadGameResources: () => (/* binding */ loadGameResources)
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



async function loadGameResources() {
  let resolve;
  const promise = new Promise((res) => (resolve = res));
  const resources = new Resources();
  resources.add('image', 'tilemap', '/images/tilemap.png');
  resources.add('image', 'img_ice', '/images/ice.png');
  resources.add('image', 'img_jar', '/images/jar.png');
  resources.add('image', 'img_fire', '/images/fire.png');
  resources.add('image', 'img_dona', '/images/dona.png');
  resources.add('image', 'img_intro', '/images/intro.png');
  resources.add('image', 'img_metal', '/images/metal.png');
  resources.add('image', 'img_teleport', '/images/teleport.png');
  resources.add('image', 'frost', '/images/frozen.png');
  resources.add('audio', 'sfx-ice-push', '/sounds/sfx-ice-push.mp3');
  resources.add('audio', 'sfx-fire-off', '/sounds/sfx-fire-off.mp3');
  resources.add('audio', 'sfx-falling', '/sounds/sfx-falling.mp3');
  resources.add('audio', 'sfx-new-ice', '/sounds/sfx-new-ice.mp3');
  resources.add('audio', 'sfx-climb', '/sounds/sfx-climb.mp3');
  resources.add('audio', 'sfx-ice-collision', '/sounds/sfx-ice-collision.mp3');
  resources.add('audio', 'sfx-stage-enter', '/sounds/sfx-stage-enter.mp3');
  resources.add('audio', 'sfx-danger', '/sounds/sfx-danger.mp3');
  resources.add('audio', 'sfx-ice-remove', '/sounds/sfx-ice-remove.mp3');
  resources.add('audio', 'sfx-state-leave', '/sounds/sfx-state-leave.mp3');
  resources.add('audio', 'sfx-disabled', '/sounds/sfx-disabled.mp3');
  resources.add('audio', 'sfx-fall', '/sounds/sfx-fall.mp3');
  resources.add('audio', 'sfx-music-sparks', '/music/sparks.mp3');

  resources.ready(() => {
    resolve(resources);
  });

  return promise;
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
  constructor(engine, level = null) {
    this.engine = engine;
    this.level = level;
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

    let level;
    if (this.level) {
      level = this.level;
    } else {
      level = _levels__WEBPACK_IMPORTED_MODULE_8__.levels[index];
    }

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
        this.music.play().catch(() => { });
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
    audio.play().catch(() => { });
  }

  playOnce(sfx) {
    const audio = this.sfx[sfx];
    if (!audio || !audio.paused) return;
    if (!this.soundOn) return;
    audio.volume = this.sfxVolume;
    audio.currentTime = 0;
    audio.play().catch(() => { });
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
      this.music.play().catch(() => {
        // Browser blocked autoplay — resume on first user interaction                                                                          
        const resume = () => {
          if (this.musicOn && this.music) {
            this.music.play().catch(() => { });
          }
          document.removeEventListener('keydown', resume);
        };
        document.addEventListener('keydown', resume, { once: true });
      });
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

  startLevelTimer() {
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimSprite: () => (/* reexport safe */ _animsprite__WEBPACK_IMPORTED_MODULE_12__.AnimSprite),
/* harmony export */   Consts: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.Consts),
/* harmony export */   Engine: () => (/* reexport safe */ _engine__WEBPACK_IMPORTED_MODULE_7__.Engine),
/* harmony export */   Fire: () => (/* reexport safe */ _fire__WEBPACK_IMPORTED_MODULE_2__.Fire),
/* harmony export */   Frost: () => (/* reexport safe */ _struct__WEBPACK_IMPORTED_MODULE_19__.Frost),
/* harmony export */   Game: () => (/* reexport safe */ _game__WEBPACK_IMPORTED_MODULE_3__.Game),
/* harmony export */   GameState: () => (/* reexport safe */ _state__WEBPACK_IMPORTED_MODULE_9__.GameState),
/* harmony export */   Ice: () => (/* reexport safe */ _ice__WEBPACK_IMPORTED_MODULE_14__.Ice),
/* harmony export */   Jar: () => (/* reexport safe */ _jar__WEBPACK_IMPORTED_MODULE_4__.Jar),
/* harmony export */   Keyboard: () => (/* reexport safe */ _keyboard__WEBPACK_IMPORTED_MODULE_10__.Keyboard),
/* harmony export */   Metal: () => (/* reexport safe */ _metal__WEBPACK_IMPORTED_MODULE_5__.Metal),
/* harmony export */   Player: () => (/* reexport safe */ _player__WEBPACK_IMPORTED_MODULE_13__.Player),
/* harmony export */   Position: () => (/* reexport safe */ _struct__WEBPACK_IMPORTED_MODULE_19__.Position),
/* harmony export */   Resources: () => (/* reexport safe */ _resources__WEBPACK_IMPORTED_MODULE_0__.Resources),
/* harmony export */   Scene: () => (/* reexport safe */ _scene__WEBPACK_IMPORTED_MODULE_8__.Scene),
/* harmony export */   Sound: () => (/* reexport safe */ _sound__WEBPACK_IMPORTED_MODULE_16__.Sound),
/* harmony export */   Sparks: () => (/* reexport safe */ _sfx__WEBPACK_IMPORTED_MODULE_17__.Sparks),
/* harmony export */   Sprite: () => (/* reexport safe */ _sprite__WEBPACK_IMPORTED_MODULE_11__.Sprite),
/* harmony export */   Teleport: () => (/* reexport safe */ _teleport__WEBPACK_IMPORTED_MODULE_6__.Teleport),
/* harmony export */   Tile: () => (/* reexport safe */ _tiles__WEBPACK_IMPORTED_MODULE_18__.Tile),
/* harmony export */   TileMap: () => (/* reexport safe */ _tilemap__WEBPACK_IMPORTED_MODULE_15__.TileMap),
/* harmony export */   levels: () => (/* reexport safe */ _levels__WEBPACK_IMPORTED_MODULE_20__.levels),
/* harmony export */   loadGameResources: () => (/* reexport safe */ _resources__WEBPACK_IMPORTED_MODULE_0__.loadGameResources)
/* harmony export */ });
/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources */ "./src/resources.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fire */ "./src/fire.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _jar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jar */ "./src/jar.js");
/* harmony import */ var _metal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metal */ "./src/metal.js");
/* harmony import */ var _teleport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teleport */ "./src/teleport.js");
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./engine */ "./src/engine.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
/* harmony import */ var _animsprite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./animsprite */ "./src/animsprite.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ice */ "./src/ice.js");
/* harmony import */ var _tilemap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tilemap */ "./src/tilemap.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sound */ "./src/sound.js");
/* harmony import */ var _sfx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sfx */ "./src/sfx.js");
/* harmony import */ var _tiles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tiles */ "./src/tiles.js");
/* harmony import */ var _struct__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./struct */ "./src/struct.js");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./levels */ "./src/levels.js");
























})();

FireNIce = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlLTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDJCQUEyQjtBQUNuQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5QkFBeUI7QUFDakMsUUFBUSx5QkFBeUI7QUFDakMsUUFBUSx5QkFBeUI7QUFDakMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwwQkFBMEI7QUFDbEMsUUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5QkFBeUI7QUFDakMsUUFBUSwyQkFBMkI7QUFDbkMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSx5QkFBeUI7QUFDakMsUUFBUSx5QkFBeUI7QUFDakMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwwQkFBMEI7QUFDbEM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEseUJBQXlCO0FBQ2pDLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEseUJBQXlCO0FBQ2pDLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEsMkJBQTJCO0FBQ25DLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEsMkJBQTJCO0FBQ25DLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEsMkJBQTJCO0FBQ25DLFFBQVEsMkJBQTJCO0FBQ25DLFFBQVEsMkJBQTJCO0FBQ25DLFFBQVEsMkJBQTJCO0FBQ25DLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEsMEJBQTBCO0FBQ2xDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNs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QUNyQjtBQUNKO0FBQ0Y7QUFDSTtBQUNFO0FBQ0o7QUFDUTtBQUNSO0FBQ047QUFDUTtBQUNKO0FBQ0Q7QUFDQTtBQUNZO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy9hbmltc3ByaXRlLmpzIiwid2VicGFjazovL0ZpcmVOSWNlLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2UvLi9zcmMvZmlyZS5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL0ZpcmVOSWNlLy4vc3JjL2ljZS5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy9qYXIuanMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2UvLi9zcmMva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2UvLi9zcmMvbGV2ZWxzLmpzIiwid2VicGFjazovL0ZpcmVOSWNlLy4vc3JjL21ldGFsLmpzIiwid2VicGFjazovL0ZpcmVOSWNlLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy9yZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2UvLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2UvLi9zcmMvc2Z4LmpzIiwid2VicGFjazovL0ZpcmVOSWNlLy4vc3JjL3NvdW5kLmpzIiwid2VicGFjazovL0ZpcmVOSWNlLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy9zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2UvLi9zcmMvdGVsZXBvcnQuanMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2UvLi9zcmMvdGlsZW1hcC5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy90aWxlcy5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9GaXJlTkljZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9GaXJlTkljZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0ZpcmVOSWNlLy4vc3JjL2ZpcmVuaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1TcHJpdGUgZXh0ZW5kcyBTcHJpdGUge1xyXG4gIC8qKlxyXG4gICAqIEFuaW1hdGVkIFNwcml0ZSwgaW5oZXJpdHMgZnJvbSBTcHJpdGUuXHJcbiAgICogQWRkcyBkcmF3aW5nIG9mIHBpY3R1cmVzIGluIHRoZSBib2R5IG9mIHNwcml0ZVxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgICAgRW5naW5lIEVuZ2luZVxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBpbWFnZSAgIERvbSBpbWFnZSBvYmplY3QgKGltZyBzcmM9KVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eCAgICAgIFRpbGUgWCBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eSAgICAgIFRpbGUgWSBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAgIFdpZHRoIG9mIHRoZSBzcHJpdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0ICBIZWlnaHQgb2YgdGhlIHNwcml0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRYIE9mZnNldCBYIG9mIGRyYXdpbmcgdGhlIHBpY3R1cmUgaW50byB0aGUgY2FudmFzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFkgT2Zmc2V0IFkgb2YgZHJhd2luZyB0aGUgcGljdHVyZSBpbnRvIHRoZSBjYW52YXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgICBBbmltYXRpb24gZnJhbWUgc3RhcnRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZW5kICAgICBBbmltYXRpb24gZnJhbWUgZW5kXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBsb29wICAgUmVwZWF0IGFuaW1hdGlvblxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGlkLCBlbmdpbmUsIGltYWdlLCB0eCwgdHksIHdpZHRoLCBoZWlnaHQsIG9mZnNldFgsIG9mZnNldFksIHN0YXJ0LCBlbmQsIGxvb3ApIHtcclxuICAgIHN1cGVyKGlkLCBlbmdpbmUsIHR4LCB0eSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLmltYWdlID0gdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldChpbWFnZSk7XHJcbiAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgIHRoaXMuYW5pbVN0YXJ0ID0gc3RhcnQ7XHJcbiAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICB0aGlzLmFuaW1Db3VudCA9IDA7XHJcbiAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5O1xyXG4gICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICB0aGlzLmFuaW1Sb3cgPSAwO1xyXG4gICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WDtcclxuICAgIHRoaXMub2Zmc2V0WSA9IG9mZnNldFk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBzcHJpdGUgYW5pbWF0aW9uIGZyYW1lc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBTdGFydCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCAgIEVuZCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBsb29wICBJZiB0cnVlLCBhbmltYXRpb24gd2lsbCBsb29wXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAgIFJvdyBvZiB0aGUgZnJhbWVzIGluIHRoZSBzcHJpdGUgaW1hZ2VcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgRGVsYXkgYmV0d2VlbiBlYWNoIGZyYW1lXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlICBTZXRzIGFsbCB0aGUgbmV3IHZhbHVlcyBvbmx5IG9uZSB0aW1lLlxyXG4gICAqL1xyXG4gIHNldEFuaW0oc3RhcnQsIGVuZCwgbG9vcCwgcm93LCBkZWxheSwgb25jZSkge1xyXG4gICAgb25jZSA9IHR5cGVvZiBvbmNlID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogb25jZTtcclxuICAgIGRlbGF5ID0gdHlwZW9mIGRlbGF5ID09PSAndW5kZWZpbmVkJyA/IENvbnN0cy5BbmltRGVmYXVsdERlbGF5IDogZGVsYXk7XHJcbiAgICByb3cgPSB0eXBlb2Ygcm93ID09PSAndW5kZWZpbmVkJyA/IHRoaXMuYW5pbVJvdyA6IHJvdztcclxuICAgIGlmICghb25jZSkge1xyXG4gICAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICAgIHRoaXMuYW5pbUNvdW50ID0gc3RhcnQ7XHJcbiAgICAgIHRoaXMuYW5pbUxvb3AgPSBsb29wO1xyXG4gICAgICB0aGlzLmFuaW1EZWxheSA9IGRlbGF5O1xyXG4gICAgICB0aGlzLmFuaW1Sb3cgPSByb3c7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5hbmltU3RhcnQgIT09IHN0YXJ0IHx8IHRoaXMuYW5pbUVuZCAhPT0gZW5kIHx8IHRoaXMuYW5pbUxvb3AgIT09IGxvb3AgfHwgdGhpcy5hbmltUm93ICE9PSByb3cpIHtcclxuICAgICAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuYW5pbUVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuYW5pbUxvb3AgPSBsb29wO1xyXG4gICAgICAgIHRoaXMuYW5pbURlbGF5ID0gZGVsYXk7XHJcbiAgICAgICAgdGhpcy5hbmltUm93ID0gcm93O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIERyYXdzIHRoZSBmcmFtZSBvZiB0aGUgc3ByaXRlIGluIHRoZSBjYW52YXNcclxuICAgKi9cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLmltYWdlLFxyXG4gICAgICB0aGlzLmFuaW1Db3VudCAqIHRoaXMud2lkdGgsXHJcbiAgICAgIHRoaXMuYW5pbVJvdyAqIHRoaXMuaGVpZ2h0LFxyXG4gICAgICB0aGlzLndpZHRoLFxyXG4gICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgdGhpcy54ICsgdGhpcy5vZmZzZXRYLFxyXG4gICAgICB0aGlzLnkgKyB0aGlzLm9mZnNldFksXHJcbiAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5hbmltRGVsYXlDb3VudCsrID4gdGhpcy5hbmltRGVsYXkpIHtcclxuICAgICAgdGhpcy5hbmltQ291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMuYW5pbUNvdW50ID4gdGhpcy5hbmltRW5kKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbUxvb3ApIHtcclxuICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gdGhpcy5hbmltU3RhcnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gdGhpcy5hbmltRW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFuaW1EZWxheUNvdW50ID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdGcm9zdCgpIHtcclxuICAgIGNvbnN0IGxlZnRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlIC0gMSwgdGhpcy55VGlsZSk7XHJcbiAgICBpZiAobGVmdFNwcml0ZSAmJiBsZWZ0U3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmIGxlZnRTcHJpdGUuZnJvemVuLnJpZ2h0KSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLCB0aGlzLnhUaWxlICogdGhpcy53aWR0aCAtIDcsIHRoaXMueVRpbGUgKiB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByaWdodFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueFRpbGUgKyAxLCB0aGlzLnlUaWxlKTtcclxuICAgIGlmIChyaWdodFNwcml0ZSAmJiByaWdodFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJiByaWdodFNwcml0ZS5mcm96ZW4ubGVmdCkge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcclxuICAgICAgICAodGhpcy54VGlsZSArIHRoaXMubGVuZ3RoKSAqIHRoaXMud2lkdGggLSA3LFxyXG4gICAgICAgIHRoaXMueVRpbGUgKiB0aGlzLmhlaWdodCxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IENvbnN0cyA9IE9iamVjdC5mcmVlemUoe1xuICAvLyBHcmlkXG4gIFRpbGVXaWR0aDogMzIsXG5cbiAgLy8gUGh5c2ljc1xuICBQaHlzaWNzU3BlZWQ6IDQsXG4gIFBsYXllclNwZWVkOiAyLFxuXG4gIC8vIFRpbWluZ1xuICBTcGFya0ludGVydmFsOiAxMCxcbiAgUmlwRHVyYXRpb246IDcwLFxuICBJbnRyb0R1cmF0aW9uOiAzMixcbiAgU2xlZXBUaHJlc2hvbGQ6IDUwMCxcbiAgUGxheWVyQW5pbURlbGF5OiAzLFxuICBJY2VBbmltRGVsYXk6IDksXG5cbiAgTW92ZVN0YW5kOiAwLFxuICBNb3ZlTGVmdDogMSxcbiAgTW92ZVJpZ2h0OiAyLFxuICBNb3ZlRG93bjogMyxcbiAgTW92ZVVwOiA0LFxuICBNb3ZlVHVybjogNSxcbiAgTW92ZUljZU1ha2U6IDYsXG4gIE1vdmVJY2VSZW1vdmU6IDcsXG4gIE1vdmVJY2VNb3Zpbmc6IDgsXG4gIE1vdmVJY2VDaGVjazogOSxcbiAgTW92ZVJpcDogMTAsXG4gIE1vdmVQdXNoOiAxNixcbiAgTW92ZUljZUZhaWw6IDExLFxuICBNb3ZlTGV2ZWxFeGl0OiAxMixcbiAgTW92ZUxldmVsRW50ZXI6IDEzLFxuICBNb3ZlVGVsZXBvcnRPdXQ6IDE0LFxuICBNb3ZlVGVsZXBvcnRJbjogMTUsXG4gIERpckxlZnQ6IC0xLFxuICBEaXJSaWdodDogMSxcbiAgQW5pbURlZmF1bHREZWxheTogMixcbiAgQW5pbUZyYW1lQ291bnQ6IDE2LFxuICBBbmltTGVmdFJvdzogMSxcbiAgQW5pbVJpZ2h0Um93OiAwLFxuICBBbmltUnVuU3RhcnQ6IDAsXG4gIEFuaW1SdW5FbmQ6IDMsXG4gIEFuaW1TdGFuZDogNCxcbiAgQW5pbVR1cm5TdGFydDogNCxcbiAgQW5pbVR1cm5FbmQ6IDcsXG4gIEFuaW1GYWxsU3RhcnQ6IDgsXG4gIEFuaW1GYWxsRW5kOiA5LFxuICBBbmltQmlnRmFsbFN0YXJ0OiAxMCxcbiAgQW5pbUJpZ0ZhbGxFbmQ6IDExLFxuICBBbmltUHVzaFN0YXJ0OiAxMixcbiAgQW5pbVB1c2hFbmQ6IDEzLFxuICBBbmltSnVtcFN0YXJ0OiAxNCxcbiAgQW5pbUp1bXBFbmQ6IDE1LFxuICBBbmltU3RhbmRTdGFydDogMTYsXG4gIEFuaW1TdGFuZEVuZDogMTcsXG4gIEFuaW1JY2VTdGFydDogMTgsXG4gIEFuaW1JY2VFbmQ6IDE5LFxuICBBbmltQ3JvdWNoU3RhcnQ6IDIwLFxuICBBbmltQ3JvdWNoRW5kOiAyMixcbiAgQW5pbVJpcFN0YXJ0OiAyMyxcbiAgQW5pbVJpcEVuZDogMjQsXG4gIEFuaW1TbGVlcFN0YXJ0OiAyNSxcbiAgQW5pbVNsZWVwRW5kOiAyNixcbiAgVGlsZUJhY2tncm91bmQ6IDAsXG4gIFRpbGVCb3RoU2lkZXM6IDMyLFxuICBUaWxlTGVmdFNpZGU6IDY0LFxuICBUaWxlTWlkZGxlOiA5NixcbiAgVGlsZVJpZ2h0U2lkZTogMTI4LFxuICBPYmplY3RPdXQ6IC0xLFxuICBPYmplY3RCYWNrZ3JvdW5kOiAwLFxuICBPYmplY3RXYWxsOiAxLFxuICBPYmplY3RJY2U6IDMsXG4gIE9iamVjdE1ldGFsOiA0LFxuICBPYmplY3RKYXI6IDUsXG4gIE9iamVjdEZpcmU6IDYsXG4gIE9iamVjdFBsYXllcjogNyxcbiAgT2JqZWN0VGVsZXBvcnQ6IDgsXG4gIEdhbWVTdGF0ZVBsYXk6IDEsXG4gIEdhbWVTdGF0ZUludHJvOiAyLFxuICBHYW1lU3RhdGVQYXVzZWQ6IDMsXG4gIEdhbWVTdGF0ZVRyYW5zaXRpb246IDQsXG4gIENvbG9yR3JlZW46ICcxMjQsIDIzOCwgNjYnLFxuICBDb2xvckJsdWU6ICcxMjIsIDIxMSwgMjU1JyxcbiAgQ29sb3JPcmFuZ2U6ICcyNTUsIDg4LCAzMycsXG4gIENvbG9yUmVkOiAnMjU1LCAxMzUsIDEyNCcsXG4gIENvbG9yV2hpdGU6ICcyNTUsIDI1NSwgMjU1Jyxcbn0pO1xuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRnJvc3QgfSBmcm9tICcuL3N0cnVjdCc7XG5pbXBvcnQgeyBJY2UgfSBmcm9tICcuL2ljZSc7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4va2V5Ym9hcmQnO1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSAnLi9zb3VuZCc7XG5pbXBvcnQgeyBTcGFya3MgfSBmcm9tICcuL3NmeCc7XG4vKipcbiAqIEVuZ2luZSBMb29wXG4gKi9cbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBFbmdpbmUgb3B0aW9uc1xuICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBvcHRpb25zLmNhbnZhcyAtIFRoZSBjYW52YXMgZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5yZXNvdXJjZXMgLSBHYW1lIHJlc291cmNlc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5vbkxldmVsQ29tcGxldGVdIC0gQ2FsbGJhY2sgZm9yIGxldmVsIGNvbXBsZXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmxldmVsXSAtIEluaXRpYWwgbGV2ZWwgZGF0YVxuICAgKi9cbiAgY29uc3RydWN0b3IoeyBjYW52YXMsIHJlc291cmNlcywgb25MZXZlbENvbXBsZXRlID0gbnVsbCwgbGV2ZWwgPSBudWxsIH0pIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN3aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmNoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgIHRoaXMucmVzb3VyY2VzID0gcmVzb3VyY2VzO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnNwcml0ZXMgPSBbXTtcbiAgICB0aGlzLnNmeHMgPSBbXTtcbiAgICB0aGlzLnBsYXllciA9IHt9O1xuICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIHRoaXMua2V5Ym9hcmQgPSBuZXcgS2V5Ym9hcmQoKTtcbiAgICB0aGlzLnNvdW5kID0gbmV3IFNvdW5kKHJlc291cmNlcyk7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBTY2VuZSh0aGlzLCBsZXZlbCk7XG4gICAgdGhpcy5nYW1lTW9kZSA9ICdnYW1lJztcbiAgICB0aGlzLm9uTGV2ZWxDb21wbGV0ZUNhbGxiYWNrID0gb25MZXZlbENvbXBsZXRlO1xuICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xuXG4gICAgY29uc3QgbHZsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xldmVsJyk7XG4gICAgaWYgKGxldmVsICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmxldmVsID0gcGFyc2VJbnQobHZsLCAxMCk7XG4gICAgfVxuICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY3dpZHRoLCB0aGlzLmNoZWlnaHQpO1xuICAgIHRoaXMubWFwLmRyYXcoKTtcbiAgICAvLyByZXZlcnNlIGxvb3AsIHBsYXllciBkcmF3cyBsYXN0XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuc3ByaXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdGhpcy5zcHJpdGVzW2ldLmRyYXcoKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNmeHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHRoaXMuc2Z4c1tpXS5kcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgY29sbGlzaW9uKCkge1xuICAgIGNvbnN0IGdhbWVJc0VkaXRvck1vZGUgPSB0aGlzLmdhbWVNb2RlID09PSAnZWRpdG9yJztcbiAgICBjb25zdCBmaXJlcyA9IHRoaXMuc3ByaXRlcy5maWx0ZXIoc3ByaXRlID0+IHNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEZpcmUpO1xuICAgIGlmICghZmlyZXMubGVuZ3RoICYmICFnYW1lSXNFZGl0b3JNb2RlICYmIHRoaXMucGxheWVyLnN0YXRlICE9PSBDb25zdHMuTW92ZUxldmVsRXhpdCkge1xuICAgICAgdGhpcy5wbGF5ZXIub3V0cm8oKTtcbiAgICB9XG4gIH1cblxuICBuZXh0TGV2ZWwoKSB7XG4gICAgY29uc3QgZ2FtZUlzRWRpdG9yID0gdGhpcy5nYW1lTW9kZSA9PT0gJ2VkaXRvcic7XG4gICAgaWYgKHRoaXMub25MZXZlbENvbXBsZXRlQ2FsbGJhY2sgJiYgIWdhbWVJc0VkaXRvcikge1xuICAgICAgdGhpcy5vbkxldmVsQ29tcGxldGVDYWxsYmFjayh0aGlzLmxldmVsKTtcbiAgICB9XG4gIH1cblxuICBsb2FkTmV4dExldmVsKCkge1xuICAgIHRoaXMubGV2ZWwrKztcbiAgICBpZiAodGhpcy5nYW1lTW9kZSA9PT0gJ2dhbWUnKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGV2ZWwnLCB0aGlzLmxldmVsKTtcbiAgICB9XG4gICAgdGhpcy5zY2VuZS5sb2FkKHRoaXMubGV2ZWwpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7ICsraSkge1xuICAgICAgdGhpcy5zcHJpdGVzW2ldLmVuZ2luZU1vdmUoKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNmeHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHRoaXMuc2Z4c1tpXS5lbmdpbmVNb3ZlKCk7XG4gICAgfVxuICAgIGxldCBzcHJpdGVzTW92aW5nID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0gJiYgdGhpcy5zcHJpdGVzW2ldLmlkICE9PSBDb25zdHMuT2JqZWN0UGxheWVyICYmIHRoaXMuc3ByaXRlc1tpXS5tb3ZpbmcpIHtcbiAgICAgICAgc3ByaXRlc01vdmluZyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghc3ByaXRlc01vdmluZykge1xuICAgICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID0gMDtcbiAgICB9XG4gICAgLy8gY2hlY2sgaWYgbm8gc3ByaXRlcyBoYXZlIG1vdmVkIGZvciAyIHR1cm5zXG4gICAgaWYgKCFzcHJpdGVzTW92aW5nICYmIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPiAxKSB7XG4gICAgICB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID0gMDtcbiAgICAgIHRoaXMuaW5wdXQoKTtcbiAgICB9XG4gICAgdGhpcy5jb2xsaXNpb24oKTtcbiAgfVxuXG4gIGlucHV0KCkge1xuICAgIGlmICh0aGlzLmtleWJvYXJkLmRvd24gfHwgdGhpcy5rZXlib2FyZC5hY3Rpb24pIHtcbiAgICAgIHRoaXMucGxheWVyLmljZU9yVGVsZXBvcnQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMua2V5Ym9hcmQubGVmdCkge1xuICAgICAgdGhpcy5wbGF5ZXIubGVmdCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5rZXlib2FyZC5yaWdodCkge1xuICAgICAgdGhpcy5wbGF5ZXIucmlnaHQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMua2V5Ym9hcmQuZW50ZXIpIHtcbiAgICAgIHRoaXMuc291bmQuc3RvcCgnZGFuZ2VyJyk7XG4gICAgICB0aGlzLnNjZW5lLmxvYWQodGhpcy5sZXZlbCk7XG4gICAgICB0aGlzLmtleWJvYXJkLmVudGVyID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWNlQXQodHgsIHR5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaXNTcHJpdGVBdCh0eCwgdHkpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFkZEljZUJsb2NrKHR4LCB0eSkge1xuICAgIGNvbnN0IGZvdW5kSWNlQmxvY2tzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiYgdGhpcy5zcHJpdGVzW2ldLnlUaWxlID09PSB0eSkge1xuICAgICAgICBjb25zdCBpY2UgPSB0aGlzLnNwcml0ZXNbaV07XG4gICAgICAgIGlmIChpY2UueFRpbGUgLSAxID09PSB0eCB8fCBpY2UueFRpbGUgKyBpY2UubGVuZ3RoID09PSB0eCkge1xuICAgICAgICAgIGZvdW5kSWNlQmxvY2tzLnB1c2goaWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZm91bmRJY2VCbG9ja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNwcml0ZXMucHVzaChuZXcgSWNlKHRoaXMsIHR4LCB0eSwgMSkpO1xuICAgIH0gZWxzZSBpZiAoZm91bmRJY2VCbG9ja3MubGVuZ3RoID09PSAxKSB7XG4gICAgICBmb3VuZEljZUJsb2Nrc1swXS5hZGRCbG9jayh0eCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChmb3VuZEljZUJsb2Nrc1swXS54VGlsZSA8PSBmb3VuZEljZUJsb2Nrc1sxXS54VGlsZSkge1xuICAgICAgICB0aGlzLmpvaW5JY2VCbG9ja3MoZm91bmRJY2VCbG9ja3NbMF0sIGZvdW5kSWNlQmxvY2tzWzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuam9pbkljZUJsb2Nrcyhmb3VuZEljZUJsb2Nrc1sxXSwgZm91bmRJY2VCbG9ja3NbMF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGpvaW5JY2VCbG9ja3MoaWNlYmxvY2tBLCBpY2VibG9ja0IpIHtcbiAgICBjb25zdCB0eCA9IGljZWJsb2NrQS54VGlsZTtcbiAgICBjb25zdCB0eSA9IGljZWJsb2NrQS55VGlsZTtcbiAgICBjb25zdCBsZW5ndGggPSBpY2VibG9ja0EubGVuZ3RoICsgaWNlYmxvY2tCLmxlbmd0aCArIDE7XG4gICAgdGhpcy5hZGRTcHJpdGUobmV3IEljZSh0aGlzLCB0eCwgdHksIGxlbmd0aCwgbmV3IEZyb3N0KGljZWJsb2NrQS5mcm96ZW4ubGVmdCwgaWNlYmxvY2tCLmZyb3plbi5yaWdodCkpKTtcbiAgICB0aGlzLnJlbW92ZVNwcml0ZShpY2VibG9ja0EpO1xuICAgIHRoaXMucmVtb3ZlU3ByaXRlKGljZWJsb2NrQik7XG4gIH1cblxuICByZW1vdmVJY2VCbG9jayh0eCwgdHkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnNwcml0ZXNbaV0uaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiZcbiAgICAgICAgdGhpcy5zcHJpdGVzW2ldLnlUaWxlID09PSB0eSAmJlxuICAgICAgICB0eCA+PSB0aGlzLnNwcml0ZXNbaV0ueFRpbGUgJiZcbiAgICAgICAgdHggPCB0aGlzLnNwcml0ZXNbaV0ueFRpbGUgKyB0aGlzLnNwcml0ZXNbaV0ubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5yZW1vdmVCbG9jayh0eCkgPD0gMCkge1xuICAgICAgICAgIHRoaXMuc3ByaXRlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUZpcmUodHgsIHR5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0ueVRpbGUgPT09IHR5ICYmIHR4ID09PSB0aGlzLnNwcml0ZXNbaV0ueFRpbGUgJiYgdGhpcy5zcHJpdGVzW2ldLmlkID09PSBDb25zdHMuT2JqZWN0RmlyZSkge1xuICAgICAgICB0aGlzLnNwcml0ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkU3ByaXRlKHNwcml0ZSkge1xuICAgIHRoaXMuc3ByaXRlcy5wdXNoKHNwcml0ZSk7XG4gIH1cblxuICByZW1vdmVTcHJpdGUoc3ByaXRlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0gPT09IHNwcml0ZSkge1xuICAgICAgICB0aGlzLnNwcml0ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYWRkU3BhcmtzKHhUaWxlLCB5VGlsZSwgY29sb3IsIHF1YW50aXR5LCBpbnRlbnNpdHkpIHtcbiAgICB0aGlzLnNmeHMucHVzaChuZXcgU3BhcmtzKHRoaXMsIHhUaWxlLCB5VGlsZSwgY29sb3IsIHF1YW50aXR5LCBpbnRlbnNpdHkpKTtcbiAgfVxuXG4gIHNwcml0ZVR5cGVBdCh0eCwgdHksIGV4Y2x1ZGVJZCkge1xuICAgIGV4Y2x1ZGVJZCA9IHR5cGVvZiBleGNsdWRlSWQgPT09ICd1bmRlZmluZWQnID8gQ29uc3RzLk9iamVjdE91dCA6IGV4Y2x1ZGVJZDtcbiAgICBpZiAodHggPCAwIHx8IHR5IDwgMCB8fCB0eCA+IHRoaXMubWFwLndpZHRoIHx8IHR5ID4gdGhpcy5tYXAuaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gQ29uc3RzLk9iamVjdE91dDtcbiAgICB9XG4gICAgaWYgKHRoaXMubWFwLm1hcFt0eV1bdHhdKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAubWFwW3R5XVt0eF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0uaXNTcHJpdGVBdCh0eCwgdHkpICYmIHRoaXMuc3ByaXRlc1tpXS5pZCAhPT0gZXhjbHVkZUlkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tpXS5pZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQ29uc3RzLk9iamVjdEJhY2tncm91bmQ7XG4gIH1cblxuICBzcHJpdGVBdCh0eCwgdHkpIHtcbiAgICBpZiAoIXRoaXMubWFwLm1hcFt0eV1bdHhdKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlzU3ByaXRlQXQodHgsIHR5KSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xuaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xuXG5leHBvcnQgY2xhc3MgRmlyZSBleHRlbmRzIEFuaW1TcHJpdGUge1xuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSkge1xuICAgIHN1cGVyKENvbnN0cy5PYmplY3RGaXJlLCBlbmdpbmUsICdpbWdfZmlyZScsIHR4LCB0eSwgQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCwgMCwgMCwgMCwgMywgdHJ1ZSk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcbiAgICAgIHRoaXMuY29sbGlzaW9ucygpO1xuICAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgY2FzZSBDb25zdHMuTW92ZURvd246XG4gICAgICAgIHRoaXMuZG9Eb3duKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbGxpc2lvbnMoKSB7XG4gICAgaWYgKHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuT2JqZWN0RmlyZSkgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ZpcmUtb2ZmJyk7XG4gICAgICB0aGlzLmVuZ2luZS5yZW1vdmVGaXJlKHRoaXMueFRpbGUsIHRoaXMueVRpbGUpO1xuICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlSWNlQmxvY2sodGhpcy54VGlsZSwgdGhpcy55VGlsZSk7XG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgJzI1NSwgMTI2LCAxOTgnLCAxNSwgMC41KTtcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCAnMTI0LCAyMTIsIDI1NScsIDEwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuT2JqZWN0RmlyZSkgPT09IENvbnN0cy5PYmplY3RNZXRhbCkge1xuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnZmlyZS1vZmYnKTtcbiAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUZpcmUodGhpcy54VGlsZSwgdGhpcy55VGlsZSk7XG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgJzI1NSwgMjIyLCAxMjcnLCAxNSwgMC41KTtcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCAnNDEsIDQyLCA5MCcsIDEwKTtcbiAgICB9XG4gIH1cblxuICBncmF2aXR5KCkge1xuICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSAmJiB0aGlzLmNvcm5lcnMuZCAhPT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVEb3duLCB0cnVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkb0Rvd24oKSB7XG4gICAgdGhpcy5jb3VudGVyICs9IENvbnN0cy5QaHlzaWNzU3BlZWQ7XG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XG4gICAgICB0aGlzLnkgKz0gQ29uc3RzLlBoeXNpY3NTcGVlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBFbmdpbmUgfSBmcm9tICcuL2VuZ2luZSc7XG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGxldmVscyB9IGZyb20gJy4vbGV2ZWxzJztcblxuLyoqXG4gKiBHYW1lIExvb3BcbiAqL1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIEdhbWUgb3B0aW9uc1xuICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBvcHRpb25zLmNhbnZhcyAtIFRoZSBjYW52YXMgZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5yZXNvdXJjZXMgLSBHYW1lIHJlc291cmNlc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5nYW1lTW9kZSAtIEdhbWUgbW9kZTogJ2dhbWUnLCAnbGV2ZWwnLCBvciAnZWRpdG9yJ1xuICAgKiBAcGFyYW0ge29uTGV2ZWxDb21wbGV0ZX0gW29wdGlvbnMub25MZXZlbENvbXBsZXRlXSAtIENhbGxiYWNrIGZvciBsZXZlbCBjb21wbGV0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5sZXZlbF0gLSBJbml0aWFsIGxldmVsIGRhdGFcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgY2FudmFzLCByZXNvdXJjZXMsIGdhbWVNb2RlID0gJ2dhbWUnLCBvbkxldmVsQ29tcGxldGUgPSBudWxsLCBsZXZlbCA9IG51bGwgfSkge1xuICAgIHRoaXMudGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5lbmdpbmUgPSBuZXcgRW5naW5lKHtcbiAgICAgIGNhbnZhcyxcbiAgICAgIHJlc291cmNlcyxcbiAgICAgIGxldmVsLFxuICAgICAgb25MZXZlbENvbXBsZXRlOiAobGV2ZWxJbmRleCkgPT4gdGhpcy5vbkxldmVsQ29tcGxldGUobGV2ZWxJbmRleClcbiAgICB9KTtcbiAgICB0aGlzLmdhbWVTdGF0ZSA9IG5ldyBHYW1lU3RhdGUoKTtcbiAgICB0aGlzLmxldmVscyA9IGxldmVscztcbiAgICB0aGlzLnN0YXRlID0gQ29uc3RzLkdhbWVTdGF0ZVBsYXk7XG4gICAgdGhpcy5nYW1lTW9kZSA9IGdhbWVNb2RlO1xuICAgIHRoaXMuZW5naW5lLmdhbWVNb2RlID0gZ2FtZU1vZGU7XG4gICAgdGhpcy5lbmdpbmUuc291bmQuc291bmR0cmFjaygpO1xuICAgIHRoaXMuZ2FtZVN0YXRlLnN0YXJ0TGV2ZWxUaW1lcigpO1xuICAgIHRoaXMub25MZXZlbENvbXBsZXRlQ2FsbGJhY2sgPSBvbkxldmVsQ29tcGxldGU7XG5cbiAgICAvLyBUcmFuc2l0aW9uIHByb3BlcnRpZXNcbiAgICB0aGlzLnRyYW5zaXRpb25QaGFzZSA9IG51bGw7IC8vICdjbG9zaW5nJyBvciAnb3BlbmluZydcbiAgICB0aGlzLnRyYW5zaXRpb25SYWRpdXMgPSAwO1xuICAgIHRoaXMubWF4UmFkaXVzID0gTWF0aC5zcXJ0KHRoaXMuY2FudmFzLndpZHRoICoqIDIgKyB0aGlzLmNhbnZhcy5oZWlnaHQgKiogMikgLyAyICsgNTA7XG4gICAgdGhpcy50cmFuc2l0aW9uU3BlZWQgPSAxNTtcbiAgICB0aGlzLnRyYW5zaXRpb25DZW50ZXJYID0gMDtcbiAgICB0aGlzLnRyYW5zaXRpb25DZW50ZXJZID0gMDtcblxuICAgIHRoaXMuZ2FtZUxvb3AgPSB0aGlzLmdhbWVMb29wXy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHRoaXMuZ2FtZUxvb3AoKSwgMTAwMCAvIDYwKTtcbiAgfVxuXG4gIGdhbWVMb29wXygpIHtcbiAgICB0aGlzLmNoZWNrUGF1c2UoKTtcblxuICAgIGlmICh0aGlzLnN0YXRlID09PSBDb25zdHMuR2FtZVN0YXRlUGF1c2VkKSB7XG4gICAgICB0aGlzLmRyYXdQYXVzZU1lbnUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ29uc3RzLkdhbWVTdGF0ZVRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlVHJhbnNpdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZW5naW5lLmRyYXcoKTtcbiAgICB0aGlzLmVuZ2luZS5tb3ZlKCk7XG5cbiAgICAvLyBEcmF3IG9wZW5pbmcgdHJhbnNpdGlvbiBvbiB0b3AgaWYgYWN0aXZlXG4gICAgaWYgKHRoaXMudHJhbnNpdGlvblBoYXNlID09PSAnb3BlbmluZycpIHtcbiAgICAgIHRoaXMuZHJhd0NpcmNsZVRyYW5zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBzdGFydE5leHRsZXZlbCgpIHtcbiAgICB0aGlzLmdhbWVTdGF0ZS5zdGFydExldmVsVGltZXIoKTtcbiAgICB0aGlzLmVuZ2luZS5sb2FkTmV4dExldmVsKCk7XG4gICAgLy8gU3dpdGNoIHRvIG9wZW5pbmcgcGhhc2UsIGNlbnRlcmVkIG9uIG5ldyBwbGF5ZXIgcG9zaXRpb25cbiAgICB0aGlzLnRyYW5zaXRpb25QaGFzZSA9ICdvcGVuaW5nJztcbiAgICB0aGlzLnRyYW5zaXRpb25DZW50ZXJYID0gdGhpcy5lbmdpbmUucGxheWVyLnggKyAxNjtcbiAgICB0aGlzLnRyYW5zaXRpb25DZW50ZXJZID0gdGhpcy5lbmdpbmUucGxheWVyLnkgKyAxNjtcbiAgfVxuXG4gIG9uTGV2ZWxDb21wbGV0ZShsZXZlbEluZGV4KSB7XG4gICAgdGhpcy5nYW1lU3RhdGUuY29tcGxldGVMZXZlbChsZXZlbEluZGV4KTtcblxuICAgIC8vIFN0YXJ0IGNsb3NpbmcgdHJhbnNpdGlvbiBjZW50ZXJlZCBvbiBwbGF5ZXJcbiAgICB0aGlzLnRyYW5zaXRpb25DZW50ZXJYID0gdGhpcy5lbmdpbmUucGxheWVyLnggKyAxNjtcbiAgICB0aGlzLnRyYW5zaXRpb25DZW50ZXJZID0gdGhpcy5lbmdpbmUucGxheWVyLnkgKyAxNjtcbiAgICB0aGlzLnRyYW5zaXRpb25SYWRpdXMgPSB0aGlzLm1heFJhZGl1cztcbiAgICB0aGlzLnRyYW5zaXRpb25QaGFzZSA9ICdjbG9zaW5nJztcbiAgICB0aGlzLnN0YXRlID0gQ29uc3RzLkdhbWVTdGF0ZVRyYW5zaXRpb247XG5cbiAgICBpZiAodGhpcy5vbkxldmVsQ29tcGxldGVDYWxsYmFjaykge1xuICAgICAgdGhpcy5vbkxldmVsQ29tcGxldGVDYWxsYmFjayhsZXZlbEluZGV4KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUcmFuc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLnRyYW5zaXRpb25QaGFzZSA9PT0gJ2Nsb3NpbmcnKSB7XG4gICAgICB0aGlzLmVuZ2luZS5kcmF3KCk7XG4gICAgICB0aGlzLmRyYXdDaXJjbGVUcmFuc2l0aW9uKCk7XG4gICAgICB0aGlzLnRyYW5zaXRpb25SYWRpdXMgLT0gdGhpcy50cmFuc2l0aW9uU3BlZWQ7XG4gICAgICBpZiAodGhpcy50cmFuc2l0aW9uUmFkaXVzIDw9IDApIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uUmFkaXVzID0gMDtcblxuICAgICAgICAvLyBMb2FkIG5leHQgbGV2ZWxcbiAgICAgICAgY29uc3QgaXNHYW1lTW9kZUdhbWUgPSB0aGlzLmdhbWVNb2RlID09PSAnZ2FtZSc7XG4gICAgICAgIGlmIChpc0dhbWVNb2RlR2FtZSkge1xuICAgICAgICAgIHRoaXMuc3RhcnROZXh0bGV2ZWwoKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnRyYW5zaXRpb25QaGFzZSA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICB0aGlzLmVuZ2luZS5kcmF3KCk7XG4gICAgICB0aGlzLmRyYXdDaXJjbGVUcmFuc2l0aW9uKCk7XG4gICAgICB0aGlzLnRyYW5zaXRpb25SYWRpdXMgKz0gdGhpcy50cmFuc2l0aW9uU3BlZWQ7XG4gICAgICBpZiAodGhpcy50cmFuc2l0aW9uUmFkaXVzID49IHRoaXMubWF4UmFkaXVzKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gY29tcGxldGVcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uUGhhc2UgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0gQ29uc3RzLkdhbWVTdGF0ZVBsYXk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd0NpcmNsZVRyYW5zaXRpb24oKSB7XG4gICAgdGhpcy5jdHguc2F2ZSgpO1xuXG4gICAgLy8gQ3JlYXRlIGEgcGF0aCB0aGF0IGNvdmVycyB0aGUgd2hvbGUgY2FudmFzIGV4Y2VwdCB0aGUgY2lyY2xlXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLmN0eC5hcmMoXG4gICAgICB0aGlzLnRyYW5zaXRpb25DZW50ZXJYLFxuICAgICAgdGhpcy50cmFuc2l0aW9uQ2VudGVyWSxcbiAgICAgIE1hdGgubWF4KDAsIHRoaXMudHJhbnNpdGlvblJhZGl1cyksXG4gICAgICAwLFxuICAgICAgTWF0aC5QSSAqIDIsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcbiAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBjaGVja1BhdXNlKCkge1xuICAgIGlmICh0aGlzLmVuZ2luZS5rZXlib2FyZC5lc2NhcGUgJiYgdGhpcy5zdGF0ZSA9PT0gQ29uc3RzLkdhbWVTdGF0ZVBsYXkpIHtcbiAgICAgIHRoaXMuZW5naW5lLmtleWJvYXJkLmVzY2FwZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVQYXVzZWQ7XG4gICAgICBpZiAodGhpcy5lbmdpbmUuc291bmQubXVzaWMpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQubXVzaWMucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZW5naW5lLmtleWJvYXJkLmVzY2FwZSAmJiB0aGlzLnN0YXRlID09PSBDb25zdHMuR2FtZVN0YXRlUGF1c2VkKSB7XG4gICAgICB0aGlzLmVuZ2luZS5rZXlib2FyZC5lc2NhcGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGUgPSBDb25zdHMuR2FtZVN0YXRlUGxheTtcbiAgICAgIGlmICh0aGlzLmVuZ2luZS5zb3VuZC5tdXNpY09uKSB7XG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLm11c2ljLnBsYXkoKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdQYXVzZU1lbnUoKSB7XG4gICAgLy8gSGFuZGxlIGlucHV0IHdoaWxlIHBhdXNlZFxuICAgIGlmICh0aGlzLmVuZ2luZS5rZXlib2FyZC5tS2V5KSB7XG4gICAgICB0aGlzLmVuZ2luZS5rZXlib2FyZC5tS2V5ID0gZmFsc2U7XG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC50b2dnbGVNdXNpYygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbmdpbmUua2V5Ym9hcmQuc0tleSkge1xuICAgICAgdGhpcy5lbmdpbmUua2V5Ym9hcmQuc0tleSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbmdpbmUuc291bmQudG9nZ2xlU291bmQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5naW5lLmtleWJvYXJkLmVudGVyKSB7XG4gICAgICB0aGlzLmVuZ2luZS5rZXlib2FyZC5lbnRlciA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVQbGF5O1xuICAgICAgdGhpcy5lbmdpbmUuc2NlbmUubG9hZCh0aGlzLmVuZ2luZS5sZXZlbCk7XG4gICAgICBpZiAodGhpcy5lbmdpbmUuc291bmQubXVzaWNPbiAmJiB0aGlzLmVuZ2luZS5zb3VuZC5tdXNpYykge1xuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5tdXNpYy5wbGF5KCkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEcmF3IGdhbWUgZnJhbWUgdW5kZXJuZWF0aFxuICAgIHRoaXMuZW5naW5lLmRyYXcoKTtcblxuICAgIC8vIERyYXcgc2VtaS10cmFuc3BhcmVudCBvdmVybGF5XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC43KSc7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAvLyBEcmF3IHBhdXNlIHRleHRcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgdGhpcy5jdHguZm9udCA9ICdib2xkIDMycHggbW9ub3NwYWNlJztcbiAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnUEFVU0VEJywgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyIC0gNjApO1xuXG4gICAgdGhpcy5jdHguZm9udCA9ICcxNnB4IG1vbm9zcGFjZSc7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ0VTQyAtIFJlc3VtZScsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDEwKTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dCgnRU5URVIgLSBSZXN0YXJ0IGxldmVsJywgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgMTUpO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBNIC0gTXVzaWM6ICR7dGhpcy5lbmdpbmUuc291bmQubXVzaWNPbiA/ICdPTicgOiAnT0ZGJ31gLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA0MCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoYFMgLSBTb3VuZDogJHt0aGlzLmVuZ2luZS5zb3VuZC5zb3VuZE9uID8gJ09OJyA6ICdPRkYnfWAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDY1KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgLy8gQ2xlYXIgdGhlIGdhbWUgbG9vcCBpbnRlcnZhbFxuICAgIGlmICh0aGlzLmludGVydmFsSWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gRGVzdHJveSBrZXlib2FyZCB0byByZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gICAgaWYgKHRoaXMuZW5naW5lICYmIHRoaXMuZW5naW5lLmtleWJvYXJkKSB7XG4gICAgICB0aGlzLmVuZ2luZS5rZXlib2FyZC5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlcyc7XHJcbmltcG9ydCB7IEZyb3N0IH0gZnJvbSAnLi9zdHJ1Y3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEljZSBleHRlbmRzIEFuaW1TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5LCBsZW5ndGgsIGZyb3plbikge1xyXG4gICAgc3VwZXIoQ29uc3RzLk9iamVjdEljZSwgZW5naW5lLCAnaW1nX2ljZScsIHR4LCB0eSwgQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCwgMCwgMCwgMCwgMSwgdHJ1ZSk7XHJcbiAgICB0aGlzLnhUaWxlID0gdHg7XHJcbiAgICB0aGlzLnlUaWxlID0gdHk7XHJcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgIHRoaXMuYW5pbUVuZCA9IDE7XHJcbiAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5JY2VBbmltRGVsYXk7XHJcbiAgICB0aGlzLmFuaW1Sb3cgPSAwO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgICBpZiAodHlwZW9mIGZyb3plbiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5mcm96ZW4gPSBmcm96ZW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZyb3plbiA9IG5ldyBGcm9zdChmYWxzZSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvcm5lcnMoKTtcclxuICAgICAgdGhpcy5jaGVja0ZyZWV6ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkQmxvY2sodHgpIHtcclxuICAgIGNvbnN0IHNwcml0ZVR5cGVBdExlZnRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodHggLSAxLCB0aGlzLnlUaWxlKTtcclxuICAgIGNvbnN0IHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID0gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCArIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgaWYgKHR4ID4gdGhpcy54VGlsZSkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5nZXRUaWxlKHR4ICsgMSwgdGhpcy55VGlsZSkgPT09IENvbnN0cy5PYmplY3RXYWxsIHx8XHJcbiAgICAgICAgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPT09IENvbnN0cy5PYmplY3RNZXRhbCB8fFxyXG4gICAgICAgIHNwcml0ZVR5cGVBdFJpZ2h0Q29ybmVyID09PSBDb25zdHMuT2JqZWN0SmFyXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuZnJvemVuLnJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eCA8IHRoaXMueFRpbGUpIHtcclxuICAgICAgdGhpcy54VGlsZSA9IHR4O1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5nZXRUaWxlKHR4IC0gMSwgdGhpcy55VGlsZSkgPT09IENvbnN0cy5PYmplY3RXYWxsIHx8XHJcbiAgICAgICAgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9PT0gQ29uc3RzLk9iamVjdE1ldGFsIHx8XHJcbiAgICAgICAgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9PT0gQ29uc3RzLk9iamVjdEphclxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmZyb3plbi5sZWZ0ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy54ID0gdGhpcy54VGlsZSAqIENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICB0aGlzLmxlbmd0aCArPSAxO1xyXG4gIH1cclxuXHJcbiAgaXNTcHJpdGVBdCh0eCwgdHkpIHtcclxuICAgIGlmICh0aGlzLnlUaWxlID09PSB0eSkge1xyXG4gICAgICBpZiAodHggPj0gdGhpcy54VGlsZSAmJiB0eCA8IHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQmxvY2sodHgpIHtcclxuICAgIGlmICh0eCA9PT0gdGhpcy54VGlsZSkge1xyXG4gICAgICB0aGlzLnhUaWxlICs9IDE7XHJcbiAgICAgIHRoaXMueCArPSBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgICB0aGlzLmxlbmd0aCAtPSAxO1xyXG4gICAgICB0aGlzLmNoZWNrVW5mcmVlemVMZWZ0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHR4ID09PSB0aGlzLnhUaWxlICsgdGhpcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMubGVuZ3RoIC09IDE7XHJcbiAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZVJpZ2h0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUoXHJcbiAgICAgICAgbmV3IEljZShcclxuICAgICAgICAgIHRoaXMuZW5naW5lLFxyXG4gICAgICAgICAgdHggKyAxLFxyXG4gICAgICAgICAgdGhpcy55VGlsZSxcclxuICAgICAgICAgIHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCAtIHR4IC0gMSxcclxuICAgICAgICAgIG5ldyBGcm9zdChmYWxzZSwgdGhpcy5mcm96ZW4ucmlnaHQpLFxyXG4gICAgICAgICksXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMubGVuZ3RoID0gdHggLSB0aGlzLnhUaWxlO1xyXG4gICAgICB0aGlzLmNoZWNrVW5mcmVlemVSaWdodCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgY2FuR2xpZGUoZGlyKSB7XHJcbiAgICBpZiAodGhpcy5sZW5ndGggIT09IDEgfHwgdGhpcy5mcm96ZW4ubGVmdCB8fCB0aGlzLmZyb3plbi5yaWdodCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlyID09PSBDb25zdHMuRGlyTGVmdCAmJiBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmwpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChkaXIgPT09IENvbnN0cy5EaXJSaWdodCAmJiBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnIpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaXNGcm96ZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mcm96ZW4ubGVmdCB8fCB0aGlzLmZyb3plbi5yaWdodDtcclxuICB9XHJcblxyXG4gIGdyYXZpdHkoKSB7XHJcbiAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiYgIXRoaXMuaXNGcm96ZW4oKSkge1xyXG4gICAgICB0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmFsbGluZykge1xyXG4gICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWNvbGxpc2lvbicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29sbGlzaW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmNhbkdsaWRlKHRoaXMuZGlyZWN0aW9uKSkge1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBtb3ZlKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRpbGVfZG93biA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgKyBpLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICAgIGlmICh0aWxlX2Rvd24gJiYgdGlsZV9kb3duICE9PSBDb25zdHMuT2JqZWN0RmlyZSkge1xyXG4gICAgICAgIHRoaXMuY29ybmVycy5kID0gdGlsZV9kb3duO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvcm5lcnMuciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCwgdGhpcy55VGlsZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNGcm96ZW4oKSkge1xyXG4gICAgICB0aGlzLmNoZWNrVW5mcmVlemVMZWZ0KCk7XHJcbiAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZVJpZ2h0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VNb3Zpbmc6XHJcbiAgICAgICAgdGhpcy5nbGlkZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlQ2hlY2s6XHJcbiAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgIHRoaXMuZG9Eb3duKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5jdHguc2F2ZSgpO1xyXG4gICAgaWYgKHRoaXMuYW5pbURlbGF5Q291bnQrKyA+IHRoaXMuYW5pbURlbGF5KSB7XHJcbiAgICAgIHRoaXMuYW5pbURlbGF5Q291bnQgPSAwO1xyXG4gICAgICB0aGlzLmFuaW1Sb3cgPSB0aGlzLmFuaW1Sb3cgPT09IDAgPyAxIDogMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICAwLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgdGhpcy55LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXMueCxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgMyAqIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXMueCArIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgdGhpcy55LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICBDb25zdHMuVGlsZVdpZHRoLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgdGhpcy55LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgIDMgKiBDb25zdHMuVGlsZVdpZHRoLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICB0aGlzLnggKyBDb25zdHMuVGlsZVdpZHRoICogKHRoaXMubGVuZ3RoIC0gMSksXHJcbiAgICAgICAgdGhpcy55LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgICAgMiAqIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgICBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgdGhpcy54ICsgQ29uc3RzLlRpbGVXaWR0aCAqIGksXHJcbiAgICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZnJvemVuLmxlZnQpIHtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoJ2Zyb3N0JyksIHRoaXMueFRpbGUgKiB0aGlzLndpZHRoIC0gNywgdGhpcy55VGlsZSAqIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZyb3plbi5yaWdodCkge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcclxuICAgICAgICAodGhpcy54VGlsZSArIHRoaXMubGVuZ3RoKSAqIHRoaXMud2lkdGggLSA3LFxyXG4gICAgICAgIHRoaXMueVRpbGUgKiB0aGlzLmhlaWdodCxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBnbGlkZSgpIHtcclxuICAgIHRoaXMuY291bnRlciArPSBDb25zdHMuUGh5c2ljc1NwZWVkO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XHJcbiAgICAgIHRoaXMueCArPSBDb25zdHMuUGh5c2ljc1NwZWVkICogdGhpcy5kaXJlY3Rpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnB1c2goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvRG93bigpIHtcclxuICAgIHRoaXMuY291bnRlciArPSBDb25zdHMuUGh5c2ljc1NwZWVkO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XHJcbiAgICAgIHRoaXMueSArPSBDb25zdHMuUGh5c2ljc1NwZWVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdXNoKGRpcikge1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSB0eXBlb2YgZGlyID09PSAndW5kZWZpbmVkJyA/IHRoaXMuZGlyZWN0aW9uIDogZGlyO1xyXG4gICAgaWYgKCF0aGlzLmNvbGxpc2lvbigpICYmICF0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTW92aW5nLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tGcmVlemUoKSB7XHJcbiAgICBpZiAoVGlsZS5pc0ZyZWV6YWJsZSh0aGlzLmNvcm5lcnMubCkpIHtcclxuICAgICAgdGhpcy5mcm96ZW4ubGVmdCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZyb3plbi5sZWZ0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoVGlsZS5pc0ZyZWV6YWJsZSh0aGlzLmNvcm5lcnMucikpIHtcclxuICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrVW5mcmVlemVMZWZ0KCkge1xyXG4gICAgaWYgKHRoaXMuZnJvemVuLmxlZnQgJiYgIVRpbGUuaXNGcmVlemFibGUodGhpcy5jb3JuZXJzLmwpKSB7XHJcbiAgICAgIHRoaXMuZnJvemVuLmxlZnQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrVW5mcmVlemVSaWdodCgpIHtcclxuICAgIGlmICh0aGlzLmZyb3plbi5yaWdodCAmJiAhVGlsZS5pc0ZyZWV6YWJsZSh0aGlzLmNvcm5lcnMucikpIHtcclxuICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBKYXIgZXh0ZW5kcyBBbmltU3ByaXRlIHtcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcbiAgICBzdXBlcihDb25zdHMuT2JqZWN0SmFyLCBlbmdpbmUsICdpbWdfamFyJywgdHgsIHR5LCBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoLCAwLCAwLCAwLCAzLCB0cnVlKTtcbiAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5ICogMjtcbiAgICB0aGlzLm9uRmlyZSA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbVJvdyA9IDA7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcbiAgICAgIHRoaXMuY29sbGlzaW9ucygpO1xuICAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgY2FzZSBDb25zdHMuTW92ZURvd246XG4gICAgICAgIHRoaXMuZG9Eb3duKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbGxpc2lvbnMoKSB7XG4gICAgaWYgKCF0aGlzLm9uRmlyZSAmJiB0aGlzLmNvcm5lcnMudSA9PT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcbiAgICAgIHRoaXMudHVybk9uRmlyZSgpO1xuICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlRmlyZSh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlIC0gMSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9uRmlyZSAmJiB0aGlzLmNvcm5lcnMudSA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xuICAgICAgdGhpcy5tZWx0SWNlKCk7XG4gICAgfVxuICB9XG5cbiAgZ3Jhdml0eSgpIHtcbiAgICBpZiAoIXRoaXMuY29ybmVycy5kKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZG9Eb3duKCkge1xuICAgIHRoaXMuY291bnRlciArPSBDb25zdHMuUGh5c2ljc1NwZWVkO1xuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xuICAgICAgdGhpcy55ICs9IENvbnN0cy5QaHlzaWNzU3BlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHR1cm5PbkZpcmUoKSB7XG4gICAgdGhpcy5hbmltUm93ID0gMTtcbiAgICB0aGlzLm9uRmlyZSA9IHRydWU7XG4gICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnZmlyZS1vZmYnKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSAtIDEsIENvbnN0cy5Db2xvck9yYW5nZSwgMzApO1xuICB9XG5cbiAgbWVsdEljZSgpIHtcbiAgICB0aGlzLmVuZ2luZS5yZW1vdmVJY2VCbG9jayh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlIC0gMSk7XG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUgLSAxLCBDb25zdHMuQ29sb3JPcmFuZ2UsIDIwKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSAtIDEsIENvbnN0cy5Db2xvckJsdWUsIDEwKTtcbiAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBzdXBlci5kcmF3KCk7XG4gICAgdGhpcy5kcmF3RnJvc3QoKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBLZXlib2FyZCBwcmVzcyBlbmdpbmVcbiAqL1xuZXhwb3J0IGNsYXNzIEtleWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51cCA9IGZhbHNlO1xuICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMuZXNjYXBlID0gZmFsc2U7XG4gICAgdGhpcy5tS2V5ID0gZmFsc2U7XG4gICAgdGhpcy5zS2V5ID0gZmFsc2U7XG4gICAgdGhpcy5rZXlkb3duID0gdGhpcy5rZXlkb3duXy5iaW5kKHRoaXMpO1xuICAgIHRoaXMua2V5dXAgPSB0aGlzLmtleXVwXy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW50cm8gPSB0cnVlO1xuICAgIHRoaXMubW9iaWxlSGFuZGxlcnMgPSBbXTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlkb3duLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXl1cCwgZmFsc2UpO1xuXG4gICAgLy8gQ2FudmFzIGNsaWNrIHRvIHN0YXJ0XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY2FudmFzQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaW50cm8pIHtcbiAgICAgICAgdGhpcy5lbnRlciA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLmludHJvID0gZmFsc2U7XG4gICAgfTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICAvLyB0b2RvIGVuYWJsZSBmb3IgZ2FtZSBtb2RlXG4gICAgICAvLyBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNhbnZhc0NsaWNrSGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gTW9iaWxlIGNvbnRyb2xzIC0gYmluZCB3aXRoIG51bGwgY2hlY2tzIGZvciBjb21wYXRpYmlsaXR5XG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fYWN0aW9uJywgJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgdGhpcy5kb3duID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWN0aW9uID0gdHJ1ZTtcbiAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuYmluZE1vYmlsZUJ1dHRvbignYnRuX2FjdGlvbicsICdwb2ludGVydXAnLCAoKSA9PiB7XG4gICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuYWN0aW9uID0gZmFsc2U7XG4gICAgfSk7XG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fYWN0aW9uJywgJ3BvaW50ZXJsZWF2ZScsICgpID0+IHtcbiAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5hY3Rpb24gPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIHRoaXMuYmluZE1vYmlsZUJ1dHRvbignYnRuX2xlZnQnLCAncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuYmluZE1vYmlsZUJ1dHRvbignYnRuX2xlZnQnLCAncG9pbnRlcnVwJywgKCkgPT4gKHRoaXMubGVmdCA9IGZhbHNlKSk7XG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fbGVmdCcsICdwb2ludGVybGVhdmUnLCAoKSA9PiAodGhpcy5sZWZ0ID0gZmFsc2UpKTtcblxuICAgIHRoaXMuYmluZE1vYmlsZUJ1dHRvbignYnRuX3JpZ2h0JywgJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgdGhpcy5yaWdodCA9IHRydWU7XG4gICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLmJpbmRNb2JpbGVCdXR0b24oJ2J0bl9yaWdodCcsICdwb2ludGVydXAnLCAoKSA9PiAodGhpcy5yaWdodCA9IGZhbHNlKSk7XG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fcmlnaHQnLCAncG9pbnRlcmxlYXZlJywgKCkgPT4gKHRoaXMucmlnaHQgPSBmYWxzZSkpO1xuXG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fdXAnLCAncG9pbnRlcmRvd24nLCAoKSA9PiAodGhpcy51cCA9IHRydWUpKTtcbiAgICB0aGlzLmJpbmRNb2JpbGVCdXR0b24oJ2J0bl91cCcsICdwb2ludGVydXAnLCAoKSA9PiAodGhpcy51cCA9IGZhbHNlKSk7XG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fdXAnLCAncG9pbnRlcmxlYXZlJywgKCkgPT4gKHRoaXMudXAgPSBmYWxzZSkpO1xuXG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fZG93bicsICdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgIHRoaXMuZG93biA9IHRydWU7XG4gICAgICB0aGlzLmFjdGlvbiA9IHRydWU7XG4gICAgfSk7XG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fZG93bicsICdwb2ludGVydXAnLCAoKSA9PiB7XG4gICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuYWN0aW9uID0gZmFsc2U7XG4gICAgfSk7XG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fZG93bicsICdwb2ludGVybGVhdmUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuYWN0aW9uID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICB0aGlzLmJpbmRNb2JpbGVCdXR0b24oJ2J0bl9zZWxlY3QnLCAnY2xpY2snLCAoKSA9PiAodGhpcy5lbnRlciA9IHRydWUpKTtcbiAgfVxuXG4gIGJpbmRNb2JpbGVCdXR0b24oaWQsIGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgIHRoaXMubW9iaWxlSGFuZGxlcnMucHVzaCh7IGVsZW1lbnQ6IGVsLCBldmVudCwgaGFuZGxlciB9KTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIC8vIFJlbW92ZSB3aW5kb3cgZXZlbnQgbGlzdGVuZXJzXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleWRvd24sIGZhbHNlKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmtleXVwLCBmYWxzZSk7XG5cbiAgICAvLyBSZW1vdmUgY2FudmFzIGNsaWNrIGxpc3RlbmVyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIGlmIChjYW52YXMgJiYgdGhpcy5jYW52YXNDbGlja0hhbmRsZXIpIHtcbiAgICAgIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2FudmFzQ2xpY2tIYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYWxsIG1vYmlsZSBidXR0b24gbGlzdGVuZXJzXG4gICAgZm9yIChjb25zdCB7IGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyIH0gb2YgdGhpcy5tb2JpbGVIYW5kbGVycykge1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICB9XG4gICAgdGhpcy5tb2JpbGVIYW5kbGVycyA9IFtdO1xuICB9XG5cbiAga2V5ZG93bl8oZSkge1xuICAgIGNvbnN0IHRhZyA9IGUudGFyZ2V0ICYmIGUudGFyZ2V0LnRhZ05hbWU7XG4gICAgaWYgKHRhZyA9PT0gJ0lOUFVUJyB8fCB0YWcgPT09ICdURVhUQVJFQScgfHwgdGFnID09PSAnU0VMRUNUJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICB0aGlzLnVwID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgdGhpcy5yaWdodCA9IHRydWU7XG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICBjYXNlICcgJzpcbiAgICAgICAgdGhpcy5hY3Rpb24gPSB0cnVlO1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvd24gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgdGhpcy5lbnRlciA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgIHRoaXMuZXNjYXBlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtJzpcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgICB0aGlzLm1LZXkgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3MnOlxuICAgICAgY2FzZSAnUyc6XG4gICAgICAgIHRoaXMuc0tleSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGtleXVwXyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgY2FzZSAnICc6XG4gICAgICAgIHRoaXMuYWN0aW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgdGhpcy5lbnRlciA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGxldmVscyA9IFtcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDAsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogMTMsIHk6IDUsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDcsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMSwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiAxLFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDUsIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEyLCB5OiA2LCB2OiA0IH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNCwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNSwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTMsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEzLCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMywgeTogNywgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiAyLFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDE2LCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDcsIHk6IDUsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTMsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEzLCB5OiA2LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNywgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiAwLFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDEwLCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE1LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDksIHY6IDUgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEyLCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTIsIHk6IDgsIHY6IDMgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDE0LCB5OiA3LCB2OiAyIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNiwgeTogOCwgdjogMyB9LFxuICAgICAgeyBpZDogMywgeDogNSwgeTogNywgdjogMiB9LFxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDgsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogNixcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxMywgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTIsIHk6IDExLCB2OiAzIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMiwgeTogMTAsIHY6IDMgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDksIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNSwgeTogNSwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA1LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDE1LCB5OiA0LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA1LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgeDogOCwgeTogNywgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiA3LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgeDogMTIsIHk6IDcsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiA0LCB5OiA5LCB2OiAxMywgZmw6IHRydWUsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogNiwgeDogNCwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNSwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTUsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNiwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDE2LCB5OiA1LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDQsIHk6IDYsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiAxLFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDE0LCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMiwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDEyLCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNiwgdjogNSB9LFxuICAgICAgeyBpZDogMywgeDogMTIsIHk6IDUsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDYsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMSxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxMCwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTMsIHk6IDExLCB2OiAyIH0sXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiAxMCwgdjogNyB9LFxuICAgICAgeyBpZDogNiwgeDogNywgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTMsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiA2LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA2LCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDYsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogNywgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNywgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogOSwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiAxMCxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiA1LCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDQsIHk6IDYsIHY6IDEwIH0sXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiA1LCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDYsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogNSwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTUsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA0LCB2OiAyIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMywgeTogNCwgdjogMiB9LFxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDQsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogNyxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxMCwgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOCwgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTIsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDQsIHk6IDQsIHY6IDIgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDE2LCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxNiwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTUsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE2LCB5OiA0LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNCwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE1LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNSwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDksIHY6IDExIH0sXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiAxMCwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiAyLFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDE0LCB5OiA0LCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiAxMiwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOSwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogOSwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogMTIsIHk6IDExLCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDUsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogNCwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNiwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNywgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogNSwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTYsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNSwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDExLCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDYsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogMTAsIHk6IDUsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDUsIHg6IDgsIHk6IDEyLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiA5LCB5OiA1LCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDEsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogMTIsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEyLCB5OiAxMSwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDEwLCB2OiA1LCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgeDogOSwgeTogOSwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDgsIHY6IDUsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA2LCB2OiA1LCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogNSwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA3LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDMsIHg6IDEzLCB5OiA4LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiA4LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDEyLCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNiwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNywgeDogOSwgeTogNiwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA2LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDYsIHk6IDUsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE1LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiA5LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA4LCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDEsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogMTAsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDcsIHk6IDgsIHY6IDMsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDksIHk6IDksIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogOCwgeTogNywgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDYsIHY6IDMsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogNiwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMixcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiA4LCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDExLCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDksXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogNiwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogOCwgeTogNSwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNSwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMiwgeTogNSwgdjogNCwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogMTMsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiA3LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNSwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE1LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNSwgeDogMTAsIHk6IDExLCB2OiBmYWxzZSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiAwLFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDEyLCB5OiA2LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA5LCB5OiA3LCB2OiA0LCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiA2LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogNiwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiAwLFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDEwLCB5OiA2LCB2OiAxIH0sXG4gICAgICB7IGlkOiA1LCB4OiA4LCB5OiAxMSwgdjogdHJ1ZSB9LFxuICAgICAgeyBpZDogNSwgeDogNywgeTogOCwgdjogdHJ1ZSB9LFxuICAgICAgeyBpZDogNSwgeDogMTAsIHk6IDksIHY6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogOCwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA0LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDEwLCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA3LCB2OiAxLCBmbDogZmFsc2UsIGZyOiB0cnVlIH0sXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA4LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA2LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDEwLCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDYsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogMTEsIHk6IDEyLCB2OiAxIH0sXG4gICAgICB7IGlkOiA1LCB4OiAxMiwgeTogOSwgdjogdHJ1ZSB9LFxuICAgICAgeyBpZDogNiwgeDogMTYsIHk6IDEyLCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiAxMywgeTogMywgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA4LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDE0LCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiA1LCB4OiAxMywgeTogOCwgdjogdHJ1ZSB9LFxuICAgICAgeyBpZDogNCwgeDogMTIsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNiwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDYsIHY6IDQsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiA1LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA4LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDUsIHk6IDIsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDYsIHk6IDMsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDQsIHk6IDMsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDMsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxuICAgICAgeyBpZDogNiwgeDogNiwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNCwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogOCwgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogOSwgeTogNiwgdjogMSwgZmw6IHRydWUsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgeDogNywgeTogNiwgdjogMSwgZmw6IGZhbHNlLCBmcjogdHJ1ZSB9LFxuICAgICAgeyBpZDogNCwgeDogNiwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogNCwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNSwgeTogOSwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNCwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDEyLCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiAxMCwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDksIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiAxNCwgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTUsIHk6IDYsIHY6IDEsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEzLCB5OiA2LCB2OiAxLCBmbDogZmFsc2UsIGZyOiB0cnVlIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNCwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDEyLCB5OiAzLCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiAxMCwgeTogMywgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDMsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA4LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDE1LCB5OiAzLCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA1LCB2OiA4IH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMywgeTogNCwgdjogNCB9LFxuICAgICAgeyBpZDogNiwgeDogNSwgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNiwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNywgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiA2LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNiwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE2LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNCwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMTEsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogNixcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxNiwgeTogMTEsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogNixcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxMiwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogNSwgeDogMTAsIHk6IDksIHY6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDgsIHg6IDE2LCB5OiA5LCB2OiBmYWxzZSB9LFxuICAgICAgeyBpZDogOCwgeDogMTAsIHk6IDUsIHY6IGZhbHNlIH0sXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiAxMCwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA5LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDEyLCB5OiAxMiwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDIsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDUsIHg6IDYsIHk6IDEyLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogNiwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG5dO1xuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ldGFsIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHksIGxlbmd0aCkge1xyXG4gICAgc3VwZXIoQ29uc3RzLk9iamVjdE1ldGFsLCBlbmdpbmUsICdpbWdfbWV0YWwnLCB0eCwgdHksIENvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgsIDAsIDAsIDAsIDEsIHRydWUpO1xyXG4gICAgdGhpcy54VGlsZSA9IHR4O1xyXG4gICAgdGhpcy55VGlsZSA9IHR5O1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmFuaW1EZWxheSA9IDk7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XHJcbiAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNhbkdsaWRlKGRpcikge1xyXG4gICAgaWYgKGRpciA9PT0gQ29uc3RzLkRpckxlZnQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5sKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoZGlyID09PSBDb25zdHMuRGlyUmlnaHQgJiYgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5yKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZyb3plblRvSWNlKCkge1xyXG4gICAgY29uc3QgcmlnaHRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlICsgMSwgdGhpcy55VGlsZSk7XHJcbiAgICBjb25zdCBsZWZ0U3ByaXRlID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSAtIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIXRoaXMuZmFsbGluZyAmJlxyXG4gICAgICAoKHJpZ2h0U3ByaXRlICYmIHJpZ2h0U3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmIHJpZ2h0U3ByaXRlLmZyb3plbi5sZWZ0KSB8fFxyXG4gICAgICAgIChsZWZ0U3ByaXRlICYmIGxlZnRTcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RJY2UgJiYgbGVmdFNwcml0ZS5mcm96ZW4ucmlnaHQpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdyYXZpdHkoKSB7XHJcbiAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiYgIXRoaXMuZnJvemVuVG9JY2UoKSkge1xyXG4gICAgICB0aGlzLmZhbGxpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZmFsbGluZykge1xyXG4gICAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWNvbGxpc2lvbicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29sbGlzaW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmNhbkdsaWRlKHRoaXMuZGlyZWN0aW9uKSkge1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ3Jhdml0eSgpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbW92ZSgpIHtcclxuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUljZU1vdmluZzpcclxuICAgICAgICB0aGlzLmdsaWRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VDaGVjazpcclxuICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZURvd246XHJcbiAgICAgICAgdGhpcy5kb0Rvd24oKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBzdXBlci5kcmF3KCk7XHJcbiAgICB0aGlzLmRyYXdGcm9zdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2xpZGUoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gQ29uc3RzLlBoeXNpY3NTcGVlZDtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xyXG4gICAgICB0aGlzLnggKz0gQ29uc3RzLlBoeXNpY3NTcGVlZCAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb0Rvd24oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gQ29uc3RzLlBoeXNpY3NTcGVlZDtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xyXG4gICAgICB0aGlzLnkgKz0gQ29uc3RzLlBoeXNpY3NTcGVlZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVzaChkaXIpIHtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gdHlwZW9mIGRpciA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmRpcmVjdGlvbiA6IGRpcjtcclxuICAgIGlmICghdGhpcy5jb2xsaXNpb24oKSkge1xyXG4gICAgICB0aGlzLm1vdmluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VNb3ZpbmcsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlcyc7XHJcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBBbmltU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSkge1xyXG4gICAgc3VwZXIoQ29uc3RzLk9iamVjdFBsYXllciwgZW5naW5lLCAnaW1nX2RvbmEnLCB0eCwgdHksIDQ4LCA2NCwgLTEwLCAtMzIsIDIsIDIsIGZhbHNlKTtcclxuICAgIHRoaXMuc3BlZWQgPSBDb25zdHMuUGxheWVyU3BlZWQ7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IDE7XHJcbiAgICB0aGlzLnN0YXRlID0gMDsgLy9zdGFuZGluZyB0b3AgcmlnaHQgZG93biBsZWZ0XHJcbiAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy50aWxlV2lkdGggPSBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgdGhpcy50aWxlSGVpZ2h0ID0gQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgIHRoaXMuYW5pbURlbGF5ID0gQ29uc3RzLlBsYXllckFuaW1EZWxheTtcclxuICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICB0aGlzLmZhbGxDb3VudGVyID0gMDtcclxuICAgIHRoaXMuaW5uZXJDb3VudGVyID0gMDtcclxuICAgIHRoaXMuc3RhbmRDb3VudGVyID0gMDtcclxuICAgIHRoaXMuaW50cm8oKTtcclxuICB9XHJcblxyXG4gIGxlZnQoKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy9pZiBzdGFuZGluZyB0aGVuIHR1cm5cclxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPT0gQ29uc3RzLkRpckxlZnQpIHtcclxuICAgICAgLy9pcyBub3QgdW5kZXIgYSBicmlja1xyXG4gICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudSkpIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1UdXJuU3RhcnQsIENvbnN0cy5BbmltVHVybkVuZCwgZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LCBDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LCBmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVHVybiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gQ29uc3RzLkRpckxlZnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL3J1bm5pbmdcclxuICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmwpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkpIHtcclxuICAgICAgICAvL25vdCB1bmRlciBhIGJyaWNrXHJcbiAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpICYmICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnVsKSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUnVuU3RhcnQsIENvbnN0cy5BbmltUnVuRW5kLCB0cnVlLCBDb25zdHMuQW5pbUxlZnRSb3csIDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgQ29uc3RzLkFuaW1Dcm91Y2hFbmQsIHRydWUsIENvbnN0cy5BbmltTGVmdFJvdywgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVMZWZ0LCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICAvL2hpdCBhbiBpY2VcclxuICAgICAgaWYgKFxyXG4gICAgICAgIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiZcclxuICAgICAgICAodGhpcy5jb3JuZXJzLmwgPT09IENvbnN0cy5PYmplY3RJY2UgfHwgdGhpcy5jb3JuZXJzLmwgPT09IENvbnN0cy5PYmplY3RNZXRhbClcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgIH1cclxuICAgICAgLy9jbGltYlxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5sKSAmJlxyXG4gICAgICAgIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiZcclxuICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSAmJlxyXG4gICAgICAgICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnVsKSAmJlxyXG4gICAgICAgICF0aGlzLm1vdmluZ1xyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1QdXNoU3RhcnQsIENvbnN0cy5BbmltUHVzaFN0YXJ0LCBmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVXAsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByaWdodCgpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09IENvbnN0cy5EaXJSaWdodCkge1xyXG4gICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudSkpIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1UdXJuU3RhcnQsIENvbnN0cy5BbmltVHVybkVuZCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVHVybiwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gQ29uc3RzLkRpclJpZ2h0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnIpICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkpIHtcclxuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudSkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudXIpKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1SdW5TdGFydCwgQ29uc3RzLkFuaW1SdW5FbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgQ29uc3RzLkFuaW1Dcm91Y2hFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlUmlnaHQsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmXHJcbiAgICAgICAgKHRoaXMuY29ybmVycy5yID09PSBDb25zdHMuT2JqZWN0SWNlIHx8IHRoaXMuY29ybmVycy5yID09PSBDb25zdHMuT2JqZWN0TWV0YWwpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnIpICYmXHJcbiAgICAgICAgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSAmJlxyXG4gICAgICAgICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpICYmXHJcbiAgICAgICAgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudXIpICYmXHJcbiAgICAgICAgIXRoaXMubW92aW5nXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVB1c2hTdGFydCwgQ29uc3RzLkFuaW1QdXNoU3RhcnQsIGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVXAsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXJuKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IENvbnN0cy5Nb3ZlUmlwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXlPbmNlKCdkYW5nZXInKTtcclxuICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICB0aGlzLmlubmVyQ291bnRlciA9IDA7XHJcbiAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlUmlwLCB0cnVlKTtcclxuICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVJpcFN0YXJ0LCBDb25zdHMuQW5pbVJpcEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdyk7XHJcbiAgfVxyXG5cclxuICBpbnRybygpIHtcclxuICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUJpZ0ZhbGxTdGFydCwgQ29uc3RzLkFuaW1CaWdGYWxsRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVMZXZlbEVudGVyLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIG91dHJvKCkge1xyXG4gICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltRmFsbFN0YXJ0LCBDb25zdHMuQW5pbUJpZ0ZhbGxFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUxldmVsRXhpdCwgdHJ1ZSk7XHJcbiAgICB0aGlzLmlubmVyQ291bnRlciA9IDA7XHJcbiAgfVxyXG5cclxuICBkb1JpcCgpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciAlIENvbnN0cy5TcGFya0ludGVydmFsID09PSAwKSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JSZWQsIDUsIDEuMik7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JCbHVlLCA1LCAwLjcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY291bnRlciA+PSBDb25zdHMuUmlwRHVyYXRpb24pIHtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvclJlZCwgMTUsIDIuMCk7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JCbHVlLCAxMCwgMy4wKTtcclxuICAgICAgdGhpcy5jb3VudGVyID0gMDtcclxuICAgICAgdGhpcy5lbmdpbmUua2V5Ym9hcmQuZW50ZXIgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eSgpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuY29ybmVycy5kID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCd1bmRlZmluZWQgY29ybmVyJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xyXG4gICAgICBpZiAodGhpcy5mYWxsQ291bnRlciA+PSAxKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheU9uY2UoJ2ZhbGxpbmcnKTtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1CaWdGYWxsU3RhcnQsIENvbnN0cy5BbmltQmlnRmFsbEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQmlnRmFsbFN0YXJ0LCBDb25zdHMuQW5pbUJpZ0ZhbGxFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5zdG9wKCdmYWxsaW5nJyk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBDb25zdHMuTW92ZURvd24pIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmYWxsJyk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckdyZWVuLCAxMCwgMC43NSk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvclJlZCwgNSwgMS4yNSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICBpZiAodGhpcy5jb3JuZXJzLmQgPT09IENvbnN0cy5PYmplY3RKYXIpIHtcclxuICAgICAgICBjb25zdCBqYXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICAgICAgaWYgKGphciAmJiBqYXIub25GaXJlKSB7XHJcbiAgICAgICAgICB0aGlzLmJ1cm4oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGljZU9yVGVsZXBvcnQoKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY29ybmVycy5kID09PSBDb25zdHMuT2JqZWN0VGVsZXBvcnQpIHtcclxuICAgICAgdGhpcy50ZWxlcG9ydCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pY2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlbGVwb3J0KCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUZhbGxTdGFydCwgQ29uc3RzLkFuaW1CaWdGYWxsRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVUZWxlcG9ydE91dCwgdHJ1ZSk7XHJcbiAgICB0aGlzLmlubmVyQ291bnRlciA9IDA7XHJcbiAgICB0aGlzLmRvVGVsZXBvcnRJbigpO1xyXG4gIH1cclxuXHJcbiAgaWNlKCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpKSB7XHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0KSB7XHJcbiAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmRyKSAmJiB0aGlzLmNvcm5lcnMuZHIgIT09IENvbnN0cy5PYmplY3RGaXJlKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1JY2VTdGFydCwgQ29uc3RzLkFuaW1JY2VFbmQsIGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VNYWtlLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29ybmVycy5kciA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsIENvbnN0cy5BbmltSWNlRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlUmVtb3ZlLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsIENvbnN0cy5BbmltSWNlRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlRmFpbCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kbCkgJiYgdGhpcy5jb3JuZXJzLmRsICE9PSBDb25zdHMuT2JqZWN0RmlyZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsIENvbnN0cy5BbmltSWNlRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VNYWtlLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29ybmVycy5kbCA9PT0gQ29uc3RzLk9iamVjdEljZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsIENvbnN0cy5BbmltSWNlRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VSZW1vdmUsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1JY2VTdGFydCwgQ29uc3RzLkFuaW1JY2VFbmQsIGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3csIDQpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZUZhaWwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAganVtcCgpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCkge1xyXG4gICAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5yKSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51cikgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudSkpIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1QdXNoU3RhcnQsIENvbnN0cy5BbmltUHVzaFN0YXJ0LCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVVwLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMubCkgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudWwpICYmICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LCBDb25zdHMuQW5pbVB1c2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVVwLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9SdW4oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkICogdGhpcy5kaXJlY3Rpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvVHVybigpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA+PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb091dHJvKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyICUgQ29uc3RzLlNwYXJrSW50ZXJ2YWwgPT09IDApIHtcclxuICAgICAgdGhpcy5pbm5lckNvdW50ZXIgKz0gMTtcclxuICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckdyZWVuLCAyNSwgMC41KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPT09IDMpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yUmVkLCAzMCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSA1KSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckJsdWUsIDM1LCAxLjUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciAlIDIgPT09IDAgJiYgdGhpcy5pbm5lckNvdW50ZXIgPCA2KSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnY2xpbWInKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyICUgMiA9PT0gMSkge1xyXG4gICAgICB0aGlzLnkgKz0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMueSAtPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID49IDYpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnc3RhdGUtbGVhdmUnKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuZW5naW5lLm5leHRMZXZlbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9JbnRybygpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA9PT0gOCkge1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yR3JlZW4sIDIwLCAyLjUpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yUmVkLCAzNSwgMSk7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JCbHVlLCAyMCwgMS41KTtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnc3RhZ2UtZW50ZXInKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkludHJvRHVyYXRpb24pIHtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQuc3RvcCgnZmFsbGluZycpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvR3Jhdml0eSgpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgICAgdGhpcy5mYWxsQ291bnRlcisrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9TdGFuZCgpIHtcclxuICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSkge1xyXG4gICAgICBpZiAodGhpcy5zdGFuZENvdW50ZXIrKyA+IENvbnN0cy5TbGVlcFRocmVzaG9sZCkge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgIENvbnN0cy5BbmltU2xlZXBTdGFydCxcclxuICAgICAgICAgIENvbnN0cy5BbmltU2xlZXBFbmQsXHJcbiAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgdGhpcy5kaXJlY3Rpb24gIT09IDEgPyBDb25zdHMuQW5pbUxlZnRSb3cgOiBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICAgICAgNDgsXHJcbiAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgQ29uc3RzLkFuaW1TdGFuZFN0YXJ0LFxyXG4gICAgICAgICAgQ29uc3RzLkFuaW1TdGFuZEVuZCxcclxuICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICB0aGlzLmRpcmVjdGlvbiAhPT0gMSA/IENvbnN0cy5BbmltTGVmdFJvdyA6IENvbnN0cy5BbmltUmlnaHRSb3csXHJcbiAgICAgICAgICA4LFxyXG4gICAgICAgICAgdHJ1ZSxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCxcclxuICAgICAgICBDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uICE9PSAxID8gQ29uc3RzLkFuaW1MZWZ0Um93IDogQ29uc3RzLkFuaW1SaWdodFJvdyxcclxuICAgICAgICA4LFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1VwKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IDE4KSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5jb3VudGVyKSB7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnY2xpbWInKTtcclxuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JHcmVlbiwgMTAsIDAuNzUpO1xyXG4gICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvclJlZCwgNSwgMS4yNSk7XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUHVzaEVuZCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1QdXNoRW5kLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3csXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbUp1bXBTdGFydCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1KdW1wU3RhcnQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0ID8gQ29uc3RzLkFuaW1SaWdodFJvdyA6IENvbnN0cy5BbmltTGVmdFJvdyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLnggKz0gOCAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltSnVtcEVuZCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1KdW1wRW5kLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3csXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcmVjdGlvbjtcclxuICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbSgyLCAyLCBmYWxzZSwgdGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3cpO1xyXG4gICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcmVjdGlvbjtcclxuICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxODpcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1TdGFuZCxcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1TdGFuZCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1ha2VJY2UoKSB7XHJcbiAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCduZXctaWNlJyk7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRJY2VCbG9jayh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUgKyAxKTtcclxuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUgKyAxKTtcclxuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUgKyAxLCBDb25zdHMuQ29sb3JCbHVlLCA1KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUljZUJsb2NrKCkge1xyXG4gICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLXJlbW92ZScpO1xyXG4gICAgdGhpcy5lbmdpbmUucmVtb3ZlSWNlQmxvY2sodGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSwgQ29uc3RzLkNvbG9yQmx1ZSwgNSk7XHJcbiAgfVxyXG5cclxuICBwdXNoKCkge1xyXG4gICAgY29uc3QgaWNlID0gdGhpcy5lbmdpbmUuaWNlQXQodGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlKTtcclxuICAgIGlmIChpY2UgJiYgaWNlLmNhbkdsaWRlKHRoaXMuZGlyZWN0aW9uKSkge1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JXaGl0ZSwgMyk7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckJsdWUsIDMsIDEuNSk7XHJcbiAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICBDb25zdHMuQW5pbVB1c2hTdGFydCxcclxuICAgICAgICBDb25zdHMuQW5pbVB1c2hFbmQsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3csXHJcbiAgICAgICAgMyxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVB1c2gsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9QdXNoKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDI7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID4gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgIGNvbnN0IGljZSA9IHRoaXMuZW5naW5lLmljZUF0KHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSk7XHJcbiAgICAgIGlmIChpY2UpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtcHVzaCcpO1xyXG4gICAgICAgIGljZS5wdXNoKHRoaXMuZGlyZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvSWNlKCkge1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA9PT0gOCkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ29uc3RzLk1vdmVJY2VNYWtlKSB7XHJcbiAgICAgICAgdGhpcy5tYWtlSWNlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVJY2VCbG9jaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9GYWlsSWNlKCkge1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA9PT0gOCkge1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtZGlzYWJsZWQnKTtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSArIDEsICc4OCw2Niw2NicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID49IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvVGVsZXBvcnRJbigpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciAlIENvbnN0cy5TcGFya0ludGVydmFsID09PSAwKSB7XHJcbiAgICAgIHRoaXMuaW5uZXJDb3VudGVyICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2NsaW1iJyk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckdyZWVuLCAxMCwgMC41KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPT09IDIpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yR3JlZW4sIDEwLCAxLjUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPj0gMikge1xyXG4gICAgICB0aGlzLmRvVGVsZXBvcnRPdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvVGVsZXBvcnRPdXQoKSB7XHJcbiAgICBjb25zdCB0ZWxlcG9ydCA9IHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueFRpbGUsIHRoaXMueVRpbGUgKyAxKTtcclxuICAgIGlmICghdGVsZXBvcnQgfHwgIXRlbGVwb3J0LmxpbmspIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMueCA9IHRlbGVwb3J0LmxpbmsueDtcclxuICAgIHRoaXMueSA9IHRlbGVwb3J0LmxpbmsueSAtIDMyO1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckdyZWVuLCAxNSwgMS41KTtcclxuICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1yZW1vdmUnKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29sbGlzaW9ucygpIHtcclxuICAgIGlmICh0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLk9iamVjdFBsYXllcikgPT09IENvbnN0cy5PYmplY3RGaXJlKSB7XHJcbiAgICAgIHRoaXMuYnVybigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZSgpIHtcclxuICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgdGhpcy5jb2xsaXNpb25zKCk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gQ29uc3RzLk1vdmVTdGFuZCkge1xyXG4gICAgICB0aGlzLnN0YW5kQ291bnRlciA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gQ29uc3RzLk1vdmVEb3duKSB7XHJcbiAgICAgIHRoaXMuZmFsbENvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVSaWdodDpcclxuICAgICAgICB0aGlzLmRvUnVuKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVMZWZ0OlxyXG4gICAgICAgIHRoaXMuZG9SdW4oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZURvd246XHJcbiAgICAgICAgdGhpcy5kb0dyYXZpdHkoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZVVwOlxyXG4gICAgICAgIHRoaXMuZG9VcCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlVHVybjpcclxuICAgICAgICB0aGlzLmRvVHVybigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlTWFrZTpcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUljZVJlbW92ZTpcclxuICAgICAgICB0aGlzLmRvSWNlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VGYWlsOlxyXG4gICAgICAgIHRoaXMuZG9GYWlsSWNlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVTdGFuZDpcclxuICAgICAgICB0aGlzLmRvU3RhbmQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZVB1c2g6XHJcbiAgICAgICAgdGhpcy5kb1B1c2goKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZVJpcDpcclxuICAgICAgICB0aGlzLmRvUmlwKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVMZXZlbEV4aXQ6XHJcbiAgICAgICAgdGhpcy5kb091dHJvKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVUZWxlcG9ydE91dDpcclxuICAgICAgICB0aGlzLmRvVGVsZXBvcnRJbigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlTGV2ZWxFbnRlcjpcclxuICAgICAgICB0aGlzLmRvSW50cm8oKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFJlc291cmNlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSBbXTtcbiAgICB0aGlzLnJlc291cmNlcyA9IHt9O1xuICAgIHRoaXMubG9hZGVkID0gMDtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICBpZiAodGhpcy5jYW52YXMpIHtcbiAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG4gIH1cblxuICBhZGQodHlwZSwgbmFtZSwgc3JjKSB7XG4gICAgdGhpcy5kZWZpbml0aW9ucy5wdXNoKHsgdHlwZTogdHlwZSwgbmFtZTogbmFtZSwgc3JjOiBzcmMgfSk7XG4gIH1cblxuICBnZXQobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlc1tuYW1lXTtcbiAgfVxuXG4gIGNoZWNrKGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuY3R4KSB7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgICB0aGlzLmN0eC5maWxsUmVjdCg1MCwgMjUwLCAodGhpcy5sb2FkZWQgKiA0NTApIC8gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgsIDQwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubG9hZGVkID09PSB0aGlzLmRlZmluaXRpb25zLmxlbmd0aCkge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICByZWFkeShjYWxsYmFjaykge1xuICAgIGZvciAoY29uc3QgcmVzb3VyY2Ugb2YgdGhpcy5kZWZpbml0aW9ucykge1xuICAgICAgaWYgKHJlc291cmNlLnR5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRlZCArPSAxO1xuICAgICAgICAgIHRoaXMuY2hlY2soY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gcmVzb3VyY2Uuc3JjO1xuICAgICAgICB0aGlzLnJlc291cmNlc1tyZXNvdXJjZS5uYW1lXSA9IGltYWdlO1xuICAgICAgfVxuICAgICAgaWYgKHJlc291cmNlLnR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZXNvdXJjZS5uYW1lKTtcbiAgICAgICAgdGhpcy5sb2FkZWQgKz0gMTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNbcmVzb3VyY2UubmFtZV0gPSBhdWRpbztcbiAgICAgICAgdGhpcy5jaGVjayhjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdhbWVSZXNvdXJjZXMoKSB7XG4gIGxldCByZXNvbHZlO1xuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlcykgPT4gKHJlc29sdmUgPSByZXMpKTtcbiAgY29uc3QgcmVzb3VyY2VzID0gbmV3IFJlc291cmNlcygpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICd0aWxlbWFwJywgJy9pbWFnZXMvdGlsZW1hcC5wbmcnKTtcbiAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX2ljZScsICcvaW1hZ2VzL2ljZS5wbmcnKTtcbiAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX2phcicsICcvaW1hZ2VzL2phci5wbmcnKTtcbiAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX2ZpcmUnLCAnL2ltYWdlcy9maXJlLnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfZG9uYScsICcvaW1hZ2VzL2RvbmEucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19pbnRybycsICcvaW1hZ2VzL2ludHJvLnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfbWV0YWwnLCAnL2ltYWdlcy9tZXRhbC5wbmcnKTtcbiAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX3RlbGVwb3J0JywgJy9pbWFnZXMvdGVsZXBvcnQucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2Zyb3N0JywgJy9pbWFnZXMvZnJvemVuLnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtaWNlLXB1c2gnLCAnL3NvdW5kcy9zZngtaWNlLXB1c2gubXAzJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1maXJlLW9mZicsICcvc291bmRzL3NmeC1maXJlLW9mZi5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWZhbGxpbmcnLCAnL3NvdW5kcy9zZngtZmFsbGluZy5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LW5ldy1pY2UnLCAnL3NvdW5kcy9zZngtbmV3LWljZS5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWNsaW1iJywgJy9zb3VuZHMvc2Z4LWNsaW1iLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtaWNlLWNvbGxpc2lvbicsICcvc291bmRzL3NmeC1pY2UtY29sbGlzaW9uLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtc3RhZ2UtZW50ZXInLCAnL3NvdW5kcy9zZngtc3RhZ2UtZW50ZXIubXAzJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1kYW5nZXInLCAnL3NvdW5kcy9zZngtZGFuZ2VyLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtaWNlLXJlbW92ZScsICcvc291bmRzL3NmeC1pY2UtcmVtb3ZlLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtc3RhdGUtbGVhdmUnLCAnL3NvdW5kcy9zZngtc3RhdGUtbGVhdmUubXAzJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1kaXNhYmxlZCcsICcvc291bmRzL3NmeC1kaXNhYmxlZC5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWZhbGwnLCAnL3NvdW5kcy9zZngtZmFsbC5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LW11c2ljLXNwYXJrcycsICcvbXVzaWMvc3BhcmtzLm1wMycpO1xuXG4gIHJlc291cmNlcy5yZWFkeSgoKSA9PiB7XG4gICAgcmVzb2x2ZShyZXNvdXJjZXMpO1xuICB9KTtcblxuICByZXR1cm4gcHJvbWlzZTtcbn0iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBGcm9zdCB9IGZyb20gJy4vc3RydWN0JztcbmltcG9ydCB7IEZpcmUgfSBmcm9tICcuL2ZpcmUnO1xuaW1wb3J0IHsgSWNlIH0gZnJvbSAnLi9pY2UnO1xuaW1wb3J0IHsgSmFyIH0gZnJvbSAnLi9qYXInO1xuaW1wb3J0IHsgTWV0YWwgfSBmcm9tICcuL21ldGFsJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tICcuL3RpbGVtYXAnO1xuaW1wb3J0IHsgbGV2ZWxzIH0gZnJvbSAnLi9sZXZlbHMnO1xuaW1wb3J0IHsgVGVsZXBvcnQgfSBmcm9tICcuL3RlbGVwb3J0JztcblxuZXhwb3J0IGNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoZW5naW5lLCBsZXZlbCA9IG51bGwpIHtcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBkYXRhLm1hcCA9IHRoaXMuZW5naW5lLm1hcC5tYXA7XG4gICAgZGF0YS50aGVtZSA9IHRoaXMuZW5naW5lLm1hcC50aGVtZTtcbiAgICBkYXRhLnNwcml0ZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IHNwcml0ZSBvZiB0aGlzLmVuZ2luZS5zcHJpdGVzKSB7XG4gICAgICBsZXQgdmFsdWUgPSB0eXBlb2Ygc3ByaXRlLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcgPyAxIDogc3ByaXRlLmxlbmd0aDtcbiAgICAgIHZhbHVlID0gc3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SmFyID8gc3ByaXRlLm9uRmlyZSA6IHZhbHVlO1xuICAgICAgbGV0IGZsLCBmcjtcbiAgICAgIGlmIChzcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcbiAgICAgICAgZmwgPSBzcHJpdGUuZnJvemVuLmxlZnQ7XG4gICAgICAgIGZyID0gc3ByaXRlLmZyb3plbi5yaWdodDtcbiAgICAgIH1cbiAgICAgIGRhdGEuc3ByaXRlcy5wdXNoKHtcbiAgICAgICAgaWQ6IHNwcml0ZS5pZCxcbiAgICAgICAgeDogc3ByaXRlLnhUaWxlLFxuICAgICAgICB5OiBzcHJpdGUueVRpbGUsXG4gICAgICAgIHY6IHZhbHVlLFxuICAgICAgICBmbDogZmwsXG4gICAgICAgIGZyOiBmcixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgbG9hZChpbmRleCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWxzW2luZGV4XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG4gICAgdGhpcy5lbmdpbmUubGV2ZWwgPSBpbmRleDtcblxuICAgIGxldCBsZXZlbDtcbiAgICBpZiAodGhpcy5sZXZlbCkge1xuICAgICAgbGV2ZWwgPSB0aGlzLmxldmVsO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXZlbCA9IGxldmVsc1tpbmRleF07XG4gICAgfVxuXG4gICAgdGhpcy5lbmdpbmUuc3ByaXRlcyA9IFtdO1xuICAgIHRoaXMuZW5naW5lLm1hcCA9IG5ldyBUaWxlTWFwKHRoaXMuZW5naW5lLCBsZXZlbC5tYXAsIGxldmVsLnRoZW1lKTtcbiAgICBjb25zdCB0ZWxlcG9ydHMgPSBuZXcgTWFwKCk7XG4gICAgZm9yIChjb25zdCBzcHJpdGUgb2YgbGV2ZWwuc3ByaXRlcykge1xuICAgICAgc3dpdGNoIChzcHJpdGUuaWQpIHtcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0UGxheWVyOlxuICAgICAgICAgIHRoaXMuZW5naW5lLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSk7XG4gICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKHRoaXMuZW5naW5lLnBsYXllcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdEljZToge1xuICAgICAgICAgIGNvbnN0IGZyb3plbiA9IG5ldyBGcm9zdCh0cnVlLCB0cnVlKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHNwcml0ZS5mbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGZyb3plbi5sZWZ0ID0gc3ByaXRlLmZsO1xuICAgICAgICAgICAgZnJvemVuLnJpZ2h0ID0gc3ByaXRlLmZyO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IEljZSh0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55LCBwYXJzZUludChzcHJpdGUudiksIGZyb3plbikpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdE1ldGFsOlxuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShuZXcgTWV0YWwodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSwgMSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RGaXJlOlxuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShuZXcgRmlyZSh0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55KSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdEphcjoge1xuICAgICAgICAgIGNvbnN0IGphciA9IG5ldyBKYXIodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSk7XG4gICAgICAgICAgaWYgKHNwcml0ZS52ID09PSAxKSB7XG4gICAgICAgICAgICBqYXIudHVybk9uRmlyZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUoamFyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RUZWxlcG9ydDoge1xuICAgICAgICAgIGNvbnN0IHRlbGVwb3J0ID0gbmV3IFRlbGVwb3J0KHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpO1xuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZSh0ZWxlcG9ydCk7XG4gICAgICAgICAgdGVsZXBvcnQubGlua0lkID0gc3ByaXRlLmxpbms7XG4gICAgICAgICAgdGVsZXBvcnRzLnNldChzcHJpdGUucmVmLCB0ZWxlcG9ydCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gbGluayB0ZWxlcG9ydHNcbiAgICBpZiAodGVsZXBvcnRzLnNpemUpIHtcbiAgICAgIGZvciAoY29uc3QgdGVsZXBvcnQgb2YgdGVsZXBvcnRzLnZhbHVlcygpKSB7XG4gICAgICAgIGNvbnN0IGxpbmtlZCA9IHRlbGVwb3J0cy5nZXQodGVsZXBvcnQubGlua0lkKTtcbiAgICAgICAgaWYgKGxpbmtlZCkge1xuICAgICAgICAgIHRlbGVwb3J0LmxpbmsgPSBsaW5rZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuY2xhc3MgUGFydGljbGUge1xuICBjb25zdHJ1Y3RvcihjdHgsIHgsIHksIGNvbG9yLCBpbnRlbnNpdHkpIHtcbiAgICB0aGlzLmNvbG9yID0gdHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJyA/IENvbnN0cy5Db2xvcldoaXRlIDogY29sb3I7XG4gICAgdGhpcy5yID0gNDtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy52eCA9IChNYXRoLnJhbmRvbSgpICogNCAtIDIpICogaW50ZW5zaXR5O1xuICAgIHRoaXMudnkgPSAoTWF0aC5yYW5kb20oKSAqIDYgLSA0KSAqIGludGVuc2l0eTtcbiAgICB0aGlzLnNwZWVkID0gMC4xNTtcbiAgICB0aGlzLmxpZmUgPSAyNTU7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IG9wYWNpdHkgPSB0aGlzLmxpZmUgLyAyNTU7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoJyArIHRoaXMuY29sb3IgKyAnLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy52eDtcbiAgICB0aGlzLnkgKz0gdGhpcy52eTtcbiAgICB0aGlzLnZ5ICs9IHRoaXMuc3BlZWQ7XG4gICAgdGhpcy5saWZlIC09IDU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwYXJrcyBleHRlbmRzIFNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5LCBjb2xvciwgbGVuZ3RoLCBpbnRlbnNpdHkpIHtcbiAgICBzdXBlcihudWxsLCBlbmdpbmUsIHR4LCB0eSwgMzIsIDMyKTtcbiAgICB0aGlzLmNvbG9yID0gdHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJyA/ICcyNTUsMjU1LDI1NScgOiBjb2xvcjtcbiAgICB0aGlzLmxlbmd0aCA9IHR5cGVvZiBsZW5ndGggPT09ICd1bmRlZmluZWQnID8gMTAgOiBsZW5ndGg7XG4gICAgdGhpcy5pbnRlbnNpdHkgPSB0eXBlb2YgaW50ZW5zaXR5ID09PSAndW5kZWZpbmVkJyA/IDEgOiBpbnRlbnNpdHk7XG4gICAgdGhpcy5wYXJ0aWNsZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucGFydGljbGVzW2ldID0gbmV3IFBhcnRpY2xlKFxuICAgICAgICB0aGlzLmVuZ2luZS5jdHgsXG4gICAgICAgIHR4ICogQ29uc3RzLlRpbGVXaWR0aCArIDE2LFxuICAgICAgICB0eSAqIENvbnN0cy5UaWxlV2lkdGggKyAxNixcbiAgICAgICAgdGhpcy5jb2xvcixcbiAgICAgICAgdGhpcy5pbnRlbnNpdHksXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgdGhpcy5lbmdpbmUuY3R4LnNhdmUoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnBhcnRpY2xlc1tpXS5kcmF3KCk7XG4gICAgfVxuICAgIHRoaXMuZW5naW5lLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBlbmdpbmVNb3ZlKCkge1xuICAgIHRoaXMubW92ZSgpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnBhcnRpY2xlc1tpXS5tb3ZlKCk7XG4gICAgICBpZiAodGhpcy5wYXJ0aWNsZXNbaV0ubGlmZSA8IDApIHtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMucGFydGljbGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZW1vdmVTZWxmKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlU2VsZigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5naW5lLnNmeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmVuZ2luZS5zZnhzW2ldID09PSB0aGlzKSB7XG4gICAgICAgIHRoaXMuZW5naW5lLnNmeHMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNvdW5kIHtcbiAgY29uc3RydWN0b3IocmVzb3VyY2VzKSB7XG4gICAgdGhpcy5yZXNvdXJjZXMgPSByZXNvdXJjZXM7XG4gICAgdGhpcy5zZnhWb2x1bWUgPSAwLjM7XG4gICAgdGhpcy5tdXNpY1ZvbHVtZSA9IDAuMjtcbiAgICB0aGlzLm11c2ljID0gbnVsbDtcblxuICAgIC8vIExvYWQgcHJlZmVyZW5jZXMgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICB0aGlzLmxvYWRQcmVmZXJlbmNlcygpO1xuXG4gICAgdGhpcy5zZnggPSB7XG4gICAgICAnZmlyZS1vZmYnOiByZXNvdXJjZXMuZ2V0KCdzZngtZmlyZS1vZmYnKSxcbiAgICAgICdpY2UtcHVzaCc6IHJlc291cmNlcy5nZXQoJ3NmeC1pY2UtcHVzaCcpLFxuICAgICAgZmFsbDogcmVzb3VyY2VzLmdldCgnc2Z4LWZhbGwnKSxcbiAgICAgIGZhbGxpbmc6IHJlc291cmNlcy5nZXQoJ3NmeC1mYWxsaW5nJyksXG4gICAgICAnbmV3LWljZSc6IHJlc291cmNlcy5nZXQoJ3NmeC1uZXctaWNlJyksXG4gICAgICBjbGltYjogcmVzb3VyY2VzLmdldCgnc2Z4LWNsaW1iJyksXG4gICAgICAnaWNlLWNvbGxpc2lvbic6IHJlc291cmNlcy5nZXQoJ3NmeC1pY2UtY29sbGlzaW9uJyksXG4gICAgICAnc3RhZ2UtZW50ZXInOiByZXNvdXJjZXMuZ2V0KCdzZngtc3RhZ2UtZW50ZXInKSxcbiAgICAgIGRhbmdlcjogcmVzb3VyY2VzLmdldCgnc2Z4LWRhbmdlcicpLFxuICAgICAgJ2ljZS1yZW1vdmUnOiByZXNvdXJjZXMuZ2V0KCdzZngtaWNlLXJlbW92ZScpLFxuICAgICAgJ3N0YXRlLWxlYXZlJzogcmVzb3VyY2VzLmdldCgnc2Z4LXN0YXRlLWxlYXZlJyksXG4gICAgICAnaWNlLWRpc2FibGVkJzogcmVzb3VyY2VzLmdldCgnc2Z4LWRpc2FibGVkJyksXG4gICAgfTtcbiAgfVxuXG4gIGxvYWRQcmVmZXJlbmNlcygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbXVzaWNPbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtdXNpY09uJyk7XG4gICAgICBjb25zdCBzb3VuZE9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvdW5kT24nKTtcbiAgICAgIHRoaXMubXVzaWNPbiA9IG11c2ljT24gPT09IG51bGwgPyB0cnVlIDogbXVzaWNPbiA9PT0gJ3RydWUnO1xuICAgICAgdGhpcy5zb3VuZE9uID0gc291bmRPbiA9PT0gbnVsbCA/IHRydWUgOiBzb3VuZE9uID09PSAndHJ1ZSc7XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aGlzLm11c2ljT24gPSB0cnVlO1xuICAgICAgdGhpcy5zb3VuZE9uID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzYXZlUHJlZmVyZW5jZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtdXNpY09uJywgU3RyaW5nKHRoaXMubXVzaWNPbikpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NvdW5kT24nLCBTdHJpbmcodGhpcy5zb3VuZE9uKSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBsb2NhbFN0b3JhZ2Ugbm90IGF2YWlsYWJsZVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZU11c2ljKCkge1xuICAgIHRoaXMubXVzaWNPbiA9ICF0aGlzLm11c2ljT247XG4gICAgdGhpcy5zYXZlUHJlZmVyZW5jZXMoKTtcbiAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgaWYgKHRoaXMubXVzaWNPbikge1xuICAgICAgICB0aGlzLm11c2ljLnBsYXkoKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tdXNpYy5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tdXNpY09uO1xuICB9XG5cbiAgdG9nZ2xlU291bmQoKSB7XG4gICAgdGhpcy5zb3VuZE9uID0gIXRoaXMuc291bmRPbjtcbiAgICB0aGlzLnNhdmVQcmVmZXJlbmNlcygpO1xuICAgIHJldHVybiB0aGlzLnNvdW5kT247XG4gIH1cblxuICBzZXRTZnhWb2x1bWUodm9sdW1lKSB7XG4gICAgdGhpcy5zZnhWb2x1bWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2b2x1bWUpKTtcbiAgfVxuXG4gIHNldE11c2ljVm9sdW1lKHZvbHVtZSkge1xuICAgIHRoaXMubXVzaWNWb2x1bWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2b2x1bWUpKTtcbiAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgdGhpcy5tdXNpYy52b2x1bWUgPSB0aGlzLm11c2ljVm9sdW1lO1xuICAgIH1cbiAgfVxuXG4gIHBsYXkoc2Z4KSB7XG4gICAgaWYgKCF0aGlzLnNvdW5kT24pIHJldHVybjtcbiAgICBjb25zdCBhdWRpbyA9IHRoaXMuc2Z4W3NmeF07XG4gICAgaWYgKCFhdWRpbykgcmV0dXJuO1xuICAgIGF1ZGlvLnZvbHVtZSA9IHRoaXMuc2Z4Vm9sdW1lO1xuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICBhdWRpby5wbGF5KCkuY2F0Y2goKCkgPT4geyB9KTtcbiAgfVxuXG4gIHBsYXlPbmNlKHNmeCkge1xuICAgIGNvbnN0IGF1ZGlvID0gdGhpcy5zZnhbc2Z4XTtcbiAgICBpZiAoIWF1ZGlvIHx8ICFhdWRpby5wYXVzZWQpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuc291bmRPbikgcmV0dXJuO1xuICAgIGF1ZGlvLnZvbHVtZSA9IHRoaXMuc2Z4Vm9sdW1lO1xuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICBhdWRpby5wbGF5KCkuY2F0Y2goKCkgPT4geyB9KTtcbiAgfVxuXG4gIHN0b3Aoc2Z4KSB7XG4gICAgY29uc3QgYXVkaW8gPSB0aGlzLnNmeFtzZnhdO1xuICAgIGlmICghYXVkaW8pIHJldHVybjtcbiAgICBhdWRpby5wYXVzZSgpO1xuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgfVxuXG4gIHNvdW5kdHJhY2soKSB7XG4gICAgdGhpcy5tdXNpYyA9IHRoaXMucmVzb3VyY2VzLmdldCgnc2Z4LW11c2ljLXNwYXJrcycpO1xuICAgIGlmICghdGhpcy5tdXNpYykgcmV0dXJuO1xuICAgIHRoaXMubXVzaWMubXV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm11c2ljLnZvbHVtZSA9IHRoaXMubXVzaWNWb2x1bWU7XG4gICAgdGhpcy5tdXNpYy5sb29wID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5tdXNpY09uKSB7XG4gICAgICB0aGlzLm11c2ljLnBsYXkoKS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIC8vIEJyb3dzZXIgYmxvY2tlZCBhdXRvcGxheSDigJQgcmVzdW1lIG9uIGZpcnN0IHVzZXIgaW50ZXJhY3Rpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBjb25zdCByZXN1bWUgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMubXVzaWNPbiAmJiB0aGlzLm11c2ljKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLnBsYXkoKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgcmVzdW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHJlc3VtZSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi9zdHJ1Y3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgLyoqXHJcbiAgICogQmFzZSBjbGFzcyBvZiB0aGUgc3ByaXRlXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IGVuZ2luZSAgIEVuZ2luZSBFbmdpbmVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdHggICAgIFBvc2l0aW9uIHRpbGUgeCBpbiB0aGUgbWFwXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHR5ICAgICBQb3NpdGlvbiB0aWxlIHkgaW4gdGhlIG1hcFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAgV2lkdGggb2YgdGhlIHNwcml0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIHRoZSBzcHJpdGVcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihpZCwgZW5naW5lLCB0eCwgdHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5jdHggPSBlbmdpbmUuY3R4O1xyXG4gICAgdGhpcy5jb3JuZXJzID0gbmV3IFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLnNvbGlkID0gdHJ1ZTtcclxuICAgIHRoaXMubW92aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSBmYWxzZTtcclxuICAgIHRoaXMuc3BlZWQgPSA0O1xyXG4gICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5Nb3ZlU3RhbmQ7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcclxuICAgIHRoaXMueFRpbGUgPSB0eDtcclxuICAgIHRoaXMueVRpbGUgPSB0eTtcclxuICAgIHRoaXMueCA9IHRoaXMueFRpbGUgKiBDb25zdHMuVGlsZVdpZHRoO1xyXG4gICAgdGhpcy55ID0gdGhpcy55VGlsZSAqIENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFNldHMgc3ByaXRlIHN0YXRlc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGF0ZSAgQ29uc3RhbnQgb2YgdGhlIHN0YXRlXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBtb3ZpbmcgVHJ1ZSBpZiBzcHJpdGUgaXMgbW92aW5nXHJcbiAgICovXHJcbiAgc2V0U3RhdGUoc3RhdGUsIG1vdmluZykge1xyXG4gICAgdGhpcy5tb3ZpbmcgPSB0eXBlb2YgbW92aW5nID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogbW92aW5nO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgdGhpcy5jb3VudGVyID0gMDtcclxuICB9XHJcblxyXG4gIGdldFRpbGUodHgsIHR5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbmdpbmUubWFwLmdldFRpbGUodHgsIHR5KTtcclxuICB9XHJcblxyXG4gIGlzU3ByaXRlQXQodHgsIHR5KSB7XHJcbiAgICByZXR1cm4gdGhpcy54VGlsZSA9PT0gdHggJiYgdGhpcy55VGlsZSA9PT0gdHk7XHJcbiAgfVxyXG5cclxuICBzcHJpdGVUeXBlQXQodHgsIHR5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHR4LCB0eSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb3JuZXJzKCkge1xyXG4gICAgdGhpcy5jb3JuZXJzLnUgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlIC0gMSk7XHJcbiAgICB0aGlzLmNvcm5lcnMuZCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUsIHRoaXMueVRpbGUgKyAxKTtcclxuICAgIHRoaXMuY29ybmVycy5sID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSAtIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgdGhpcy5jb3JuZXJzLnIgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlICsgMSwgdGhpcy55VGlsZSk7XHJcbiAgICB0aGlzLmNvcm5lcnMudWwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlIC0gMSwgdGhpcy55VGlsZSAtIDEpO1xyXG4gICAgdGhpcy5jb3JuZXJzLnVyID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIDEsIHRoaXMueVRpbGUgLSAxKTtcclxuICAgIHRoaXMuY29ybmVycy5kbCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgLSAxLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmNvcm5lcnMuZHIgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlICsgMSwgdGhpcy55VGlsZSArIDEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICB0aGlzLnhUaWxlID0gTWF0aC5mbG9vcih0aGlzLnggLyBDb25zdHMuVGlsZVdpZHRoKTtcclxuICAgIHRoaXMueVRpbGUgPSBNYXRoLmZsb29yKHRoaXMueSAvIENvbnN0cy5UaWxlV2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgbW92ZSgpIHt9XHJcblxyXG4gIGVuZ2luZU1vdmUoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUNvcm5lcnMoKTtcclxuICAgIHRoaXMubW92ZSgpO1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gIH1cclxufVxyXG4iLCIvKipcbiAqIEdhbWUgc3RhdGUgbWFuYWdlciBmb3IgdHJhY2tpbmcgc2NvcmUgYW5kIHByb2dyZXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLmxldmVsU3RhcnRUaW1lID0gMDtcbiAgICB0aGlzLmxvYWRGcm9tU3RvcmFnZSgpO1xuICB9XG5cbiAgbG9hZEZyb21TdG9yYWdlKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdGUnKTtcbiAgICAgIGlmIChzYXZlZCkge1xuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShzYXZlZCk7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBkYXRhLnNjb3JlIHx8IDA7XG4gICAgICAgIHRoaXMuYmVzdFRpbWVzID0gZGF0YS5iZXN0VGltZXMgfHwge307XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJlc3RUaW1lcyA9IHt9O1xuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICB0aGlzLmJlc3RUaW1lcyA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIHNhdmVUb1N0b3JhZ2UoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAnZ2FtZVN0YXRlJyxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHNjb3JlOiB0aGlzLnNjb3JlLFxuICAgICAgICAgIGJlc3RUaW1lczogdGhpcy5iZXN0VGltZXMsXG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGxvY2FsU3RvcmFnZSBub3QgYXZhaWxhYmxlXG4gICAgfVxuICB9XG5cbiAgc3RhcnRMZXZlbFRpbWVyKCkge1xuICAgIHRoaXMubGV2ZWxTdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgfVxuXG4gIGNvbXBsZXRlTGV2ZWwobGV2ZWxJbmRleCkge1xuICAgIGNvbnN0IGNvbXBsZXRpb25UaW1lID0gTWF0aC5mbG9vcigocGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLmxldmVsU3RhcnRUaW1lKSAvIDEwMDApO1xuICAgIGNvbnN0IGxldmVsS2V5ID0gYGxldmVsXyR7bGV2ZWxJbmRleH1gO1xuXG4gICAgLy8gQWRkIHNjb3JlIGJhc2VkIG9uIGNvbXBsZXRpb24gdGltZSAoYm9udXMgZm9yIGZhc3RlciBjb21wbGV0aW9uKVxuICAgIGNvbnN0IHRpbWVCb251cyA9IE1hdGgubWF4KDAsIDEwMCAtIGNvbXBsZXRpb25UaW1lKTtcbiAgICB0aGlzLnNjb3JlICs9IDEwMCArIHRpbWVCb251cztcblxuICAgIC8vIFRyYWNrIGJlc3QgdGltZVxuICAgIGlmICghdGhpcy5iZXN0VGltZXNbbGV2ZWxLZXldIHx8IGNvbXBsZXRpb25UaW1lIDwgdGhpcy5iZXN0VGltZXNbbGV2ZWxLZXldKSB7XG4gICAgICB0aGlzLmJlc3RUaW1lc1tsZXZlbEtleV0gPSBjb21wbGV0aW9uVGltZTtcbiAgICB9XG5cbiAgICB0aGlzLnNhdmVUb1N0b3JhZ2UoKTtcbiAgICByZXR1cm4geyBjb21wbGV0aW9uVGltZSwgdGltZUJvbnVzIH07XG4gIH1cblxuICBnZXRCZXN0VGltZShsZXZlbEluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuYmVzdFRpbWVzW2BsZXZlbF8ke2xldmVsSW5kZXh9YF0gfHwgbnVsbDtcbiAgfVxuXG4gIHJlc2V0U2NvcmUoKSB7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5zYXZlVG9TdG9yYWdlKCk7XG4gIH1cbn1cbiIsIi8qKlxuICogU3RvcmVzIHBvc2l0aW9uIG9mIHRoZSBjb3JuZXJzIGFuZCB2ZXJ0aWNlc1xuICovXG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnUgPSAwO1xuICAgIHRoaXMuZCA9IDA7XG4gICAgdGhpcy5sID0gMDtcbiAgICB0aGlzLnIgPSAwO1xuICAgIHRoaXMudWwgPSAwO1xuICAgIHRoaXMudXIgPSAwO1xuICAgIHRoaXMuZGwgPSAwO1xuICAgIHRoaXMuZHIgPSAwO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGcm9zdCB7XG4gIGNvbnN0cnVjdG9yKGxlZnQsIHJpZ2h0KSB7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xuaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgVGVsZXBvcnQgZXh0ZW5kcyBBbmltU3ByaXRlIHtcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcbiAgICBzdXBlcihDb25zdHMuT2JqZWN0VGVsZXBvcnQsIGVuZ2luZSwgJ2ltZ190ZWxlcG9ydCcsIHR4LCB0eSwgQ29uc3RzLlRpbGVXaWR0aCwgQ29uc3RzLlRpbGVXaWR0aCwgMCwgMCwgMCwgMywgdHJ1ZSk7XG4gICAgdGhpcy5pc1NvbGlkID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5ICogMjtcbiAgICB0aGlzLm9uRmlyZSA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbVJvdyA9IDA7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcbiAgICAgIHRoaXMuY29sbGlzaW9ucygpO1xuICAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xuICAgICAgY2FzZSBDb25zdHMuTW92ZURvd246XG4gICAgICAgIHRoaXMuZG9Eb3duKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbGxpc2lvbnMoKSB7fVxuXG4gIGdyYXZpdHkoKSB7XG4gICAgaWYgKCF0aGlzLmNvcm5lcnMuZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGRvRG93bigpIHtcbiAgICB0aGlzLmNvdW50ZXIgKz0gQ29uc3RzLlBoeXNpY3NTcGVlZDtcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcbiAgICAgIHRoaXMueSArPSBDb25zdHMuUGh5c2ljc1NwZWVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHN1cGVyLmRyYXcoKTtcbiAgICB0aGlzLmRyYXdGcm9zdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjbGFzcyBUaWxlTWFwIHtcbiAgLyoqXG4gICAqIFRpbGVtYXAgY2xhc3NcbiAgICogQHBhcmFtIHtvYmplY3R9IGVuZ2luZSBFbmdpbmVcbiAgICogQHBhcmFtIHtvYmplY3R9IG1hcCAgTWF0cml4IG9mIHRoZSBtYXBcbiAgICovXG5cbiAgY29uc3RydWN0b3IoZW5naW5lLCBtYXAsIHRoZW1lKSB7XG4gICAgdGhpcy5jdHggPSBlbmdpbmUuY3R4O1xuICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIHRoaXMubWFwID0gbWFwO1xuICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcbiAgICB0aGlzLnRpbGVXaWR0aCA9IENvbnN0cy5UaWxlV2lkdGg7XG4gICAgdGhpcy50aWxlSGVpZ2h0ID0gQ29uc3RzLlRpbGVXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMubWFwLmxlbmd0aCAtIDE7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMubWFwWzBdLmxlbmd0aCAtIDE7XG4gICAgdGhpcy50aWxlc0ltYWdlID0gdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgndGlsZW1hcCcpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb250ZW50IG9mIHRoZSB0aWxlIGluc2lkZSB0aGUgbWF0cml4XG4gICAqIGlmIHBvc2l0aW9uIG91dCBvZiBib3VuZHMgcmV0dXJucyBDb25zdHMuT0JKRUNUX09VVFxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHkgcG9zaXRpb25cbiAgICogQHBhcmFtICB7bnVtYmVyfSB4IHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge251bWJlcn0gICBDb250ZW50IG9mIHRoZSB0aWxlXG4gICAqL1xuICBnZXRUaWxlKHgsIHkpIHtcbiAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeCA+IHRoaXMud2lkdGggfHwgeSA+IHRoaXMuaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gQ29uc3RzLk9iamVjdE91dDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwW3ldW3hdO1xuICB9XG4gIC8qKlxuICAgKiBEcmF3cyB0aGUgbWFwXG4gICAqIEByZXR1cm4ge25vbmV9XG4gICAqL1xuICBkcmF3KCkge1xuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLndpZHRoOyArK2kpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHRoaXMuaGVpZ2h0OyArK2opIHtcbiAgICAgICAgbGV0IHRpbGVUeXBlID0gQ29uc3RzLlRpbGVCYWNrZ3JvdW5kO1xuICAgICAgICBpZiAodGhpcy5tYXBbal1baV0gPT09IDEpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuZ2V0VGlsZShpIC0gMSwgaikgJiYgIXRoaXMuZ2V0VGlsZShpICsgMSwgaikpIHtcbiAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRpbGVCb3RoU2lkZXM7XG4gICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5nZXRUaWxlKGkgLSAxLCBqKSkge1xuICAgICAgICAgICAgdGlsZVR5cGUgPSBDb25zdHMuVGlsZUxlZnRTaWRlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2V0VGlsZShpICsgMSwgaikpIHtcbiAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRpbGVSaWdodFNpZGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRpbGVNaWRkbGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICB0aGlzLnRpbGVzSW1hZ2UsXG4gICAgICAgICAgdGlsZVR5cGUsXG4gICAgICAgICAgdGhpcy50aGVtZSAqIHRoaXMudGlsZUhlaWdodCxcbiAgICAgICAgICB0aGlzLnRpbGVXaWR0aCxcbiAgICAgICAgICB0aGlzLnRpbGVIZWlnaHQsXG4gICAgICAgICAgaSAqIHRoaXMudGlsZVdpZHRoLFxuICAgICAgICAgIGogKiB0aGlzLnRpbGVIZWlnaHQsXG4gICAgICAgICAgdGhpcy50aWxlV2lkdGgsXG4gICAgICAgICAgdGhpcy50aWxlSGVpZ2h0LFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBtb3ZlKCkge31cblxuICBlbmdpbmVNb3ZlKCkge31cbn1cbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgVGlsZSA9IE9iamVjdC5mcmVlemUoe1xuICB0aWxlczoge1xuICAgIFtDb25zdHMuT2JqZWN0QmFja2dyb3VuZF06IHtcbiAgICAgIHNvbGlkOiBmYWxzZSxcbiAgICAgIGZyZWV6ZTogZmFsc2UsXG4gICAgfSxcbiAgICBbQ29uc3RzLk9iamVjdE91dF06IHtcbiAgICAgIHNvbGlkOiB0cnVlLFxuICAgICAgZnJlZXplOiBmYWxzZSxcbiAgICB9LFxuICAgIFtDb25zdHMuT2JqZWN0UGxheWVyXToge1xuICAgICAgc29saWQ6IHRydWUsXG4gICAgICBmcmVlemU6IGZhbHNlLFxuICAgIH0sXG4gICAgW0NvbnN0cy5PYmplY3RJY2VdOiB7XG4gICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgIGZyZWV6ZTogZmFsc2UsXG4gICAgfSxcbiAgICBbQ29uc3RzLk9iamVjdE1ldGFsXToge1xuICAgICAgc29saWQ6IHRydWUsXG4gICAgICBmcmVlemU6IHRydWUsXG4gICAgfSxcbiAgICBbQ29uc3RzLk9iamVjdFdhbGxdOiB7XG4gICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgIGZyZWV6ZTogdHJ1ZSxcbiAgICB9LFxuICAgIFtDb25zdHMuT2JqZWN0RmlyZV06IHtcbiAgICAgIHNvbGlkOiBmYWxzZSxcbiAgICAgIGZyZWV6ZTogZmFsc2UsXG4gICAgfSxcbiAgICBbQ29uc3RzLk9iamVjdEphcl06IHtcbiAgICAgIHNvbGlkOiB0cnVlLFxuICAgICAgZnJlZXplOiB0cnVlLFxuICAgIH0sXG4gICAgW0NvbnN0cy5PYmplY3RUZWxlcG9ydF06IHtcbiAgICAgIHNvbGlkOiB0cnVlLFxuICAgICAgZnJlZXplOiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgaXNTb2xpZDogZnVuY3Rpb24gKGlkKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVzW2lkXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVU5ERUZJTkVEIE9OIGlzU29saWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW2lkXS5zb2xpZDtcbiAgICB9XG4gIH0sXG5cbiAgaXNGcmVlemFibGU6IGZ1bmN0aW9uIChpZCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy50aWxlc1tpZF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVOREVGSU5FRCBPTiBpc0ZyZWV6YWJsZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudGlsZXNbaWRdLmZyZWV6ZTtcbiAgICB9XG4gIH0sXG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBSZXNvdXJjZXMgfSBmcm9tICcuL3Jlc291cmNlcyc7XG5cbmV4cG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmV4cG9ydCB7IEZpcmUgfSBmcm9tICcuL2ZpcmUnO1xuZXhwb3J0IHsgR2FtZSB9IGZyb20gJy4vZ2FtZSc7XG5leHBvcnQgeyBKYXIgfSBmcm9tICcuL2phcic7XG5leHBvcnQgeyBNZXRhbCB9IGZyb20gJy4vbWV0YWwnO1xuZXhwb3J0IHsgUmVzb3VyY2VzLCBsb2FkR2FtZVJlc291cmNlcyB9IGZyb20gJy4vcmVzb3VyY2VzJztcbmV4cG9ydCB7IFRlbGVwb3J0IH0gZnJvbSAnLi90ZWxlcG9ydCc7XG5leHBvcnQgeyBFbmdpbmUgfSBmcm9tICcuL2VuZ2luZSc7XG5leHBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xuZXhwb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5leHBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4va2V5Ym9hcmQnO1xuZXhwb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xuZXhwb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XG5leHBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5leHBvcnQgeyBJY2UgfSBmcm9tICcuL2ljZSc7XG5leHBvcnQgeyBUaWxlTWFwIH0gZnJvbSAnLi90aWxlbWFwJztcbmV4cG9ydCB7IFNvdW5kIH0gZnJvbSAnLi9zb3VuZCc7XG5leHBvcnQgeyBTcGFya3MgfSBmcm9tICcuL3NmeCc7XG5leHBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlcyc7XG5leHBvcnQgeyBQb3NpdGlvbiwgRnJvc3QgfSBmcm9tICcuL3N0cnVjdCc7XG5leHBvcnQgeyBsZXZlbHMgfSBmcm9tICcuL2xldmVscyc7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9