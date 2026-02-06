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

    if (this.gameMode === 'editor') {
      this.ctx.strokeStyle = 'rgba(0,0,0,0.5)';
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

    // Canvas click to start
    const canvas = document.getElementById('canvas');
    if (canvas) {
      canvas.addEventListener('click', () => {
        if (this.intro) {
          this.enter = true;
        }
        this.intro = false;
      });
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
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BKTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLDBCQUEwQjtBQUNsQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLHlCQUF5QjtBQUNqQyxRQUFRLDJCQUEyQjtBQUNuQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5QkFBeUI7QUFDakMsUUFBUSx5QkFBeUI7QUFDakMsUUFBUSx5QkFBeUI7QUFDakMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwwQkFBMEI7QUFDbEMsUUFBUSwwQkFBMEI7QUFDbEM7QUFDQSxHQUFH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WDtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUssOENBQU07QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUssOENBQU07QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUssOENBQU07QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUssOENBQU07QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUssOENBQU07QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUssOENBQU07QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7VUN6REQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOd0M7O0FBRUg7QUFDUDtBQUNBO0FBQ0Y7QUFDSTtBQUMyQjtBQUNyQjtBQUNKO0FBQ0Y7QUFDSTtBQUNFO0FBQ0o7QUFDUTtBQUNSO0FBQ047QUFDUTtBQUNKO0FBQ0Q7QUFDQTtBQUNZO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy9hbmltc3ByaXRlLmpzIiwid2VicGFjazovL0ZpcmVOSWNlLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2UvLi9zcmMvZmlyZS5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL0ZpcmVOSWNlLy4vc3JjL2ljZS5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy9qYXIuanMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2UvLi9zcmMva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2UvLi9zcmMvbGV2ZWxzLmpzIiwid2VicGFjazovL0ZpcmVOSWNlLy4vc3JjL21ldGFsLmpzIiwid2VicGFjazovL0ZpcmVOSWNlLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy9yZXNvdXJjZXMuanMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2UvLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2UvLi9zcmMvc2Z4LmpzIiwid2VicGFjazovL0ZpcmVOSWNlLy4vc3JjL3NvdW5kLmpzIiwid2VicGFjazovL0ZpcmVOSWNlLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy9zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2UvLi9zcmMvdGVsZXBvcnQuanMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2UvLi9zcmMvdGlsZW1hcC5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS8uL3NyYy90aWxlcy5qcyIsIndlYnBhY2s6Ly9GaXJlTkljZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9GaXJlTkljZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vRmlyZU5JY2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9GaXJlTkljZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0ZpcmVOSWNlLy4vc3JjL2ZpcmVuaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1TcHJpdGUgZXh0ZW5kcyBTcHJpdGUge1xyXG4gIC8qKlxyXG4gICAqIEFuaW1hdGVkIFNwcml0ZSwgaW5oZXJpdHMgZnJvbSBTcHJpdGUuXHJcbiAgICogQWRkcyBkcmF3aW5nIG9mIHBpY3R1cmVzIGluIHRoZSBib2R5IG9mIHNwcml0ZVxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgICAgRW5naW5lIEVuZ2luZVxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBpbWFnZSAgIERvbSBpbWFnZSBvYmplY3QgKGltZyBzcmM9KVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eCAgICAgIFRpbGUgWCBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eSAgICAgIFRpbGUgWSBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAgIFdpZHRoIG9mIHRoZSBzcHJpdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0ICBIZWlnaHQgb2YgdGhlIHNwcml0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXRYIE9mZnNldCBYIG9mIGRyYXdpbmcgdGhlIHBpY3R1cmUgaW50byB0aGUgY2FudmFzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFkgT2Zmc2V0IFkgb2YgZHJhd2luZyB0aGUgcGljdHVyZSBpbnRvIHRoZSBjYW52YXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgICBBbmltYXRpb24gZnJhbWUgc3RhcnRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZW5kICAgICBBbmltYXRpb24gZnJhbWUgZW5kXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBsb29wICAgUmVwZWF0IGFuaW1hdGlvblxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGlkLCBlbmdpbmUsIGltYWdlLCB0eCwgdHksIHdpZHRoLCBoZWlnaHQsIG9mZnNldFgsIG9mZnNldFksIHN0YXJ0LCBlbmQsIGxvb3ApIHtcclxuICAgIHN1cGVyKGlkLCBlbmdpbmUsIHR4LCB0eSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLmltYWdlID0gdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldChpbWFnZSk7XHJcbiAgICB0aGlzLmFuaW1Mb29wID0gbG9vcDtcclxuICAgIHRoaXMuYW5pbVN0YXJ0ID0gc3RhcnQ7XHJcbiAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICB0aGlzLmFuaW1Db3VudCA9IDA7XHJcbiAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5BbmltRGVmYXVsdERlbGF5O1xyXG4gICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICB0aGlzLmFuaW1Sb3cgPSAwO1xyXG4gICAgdGhpcy5vZmZzZXRYID0gb2Zmc2V0WDtcclxuICAgIHRoaXMub2Zmc2V0WSA9IG9mZnNldFk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBzcHJpdGUgYW5pbWF0aW9uIGZyYW1lc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBTdGFydCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCAgIEVuZCBmcmFtZSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBsb29wICBJZiB0cnVlLCBhbmltYXRpb24gd2lsbCBsb29wXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdyAgIFJvdyBvZiB0aGUgZnJhbWVzIGluIHRoZSBzcHJpdGUgaW1hZ2VcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgRGVsYXkgYmV0d2VlbiBlYWNoIGZyYW1lXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlICBTZXRzIGFsbCB0aGUgbmV3IHZhbHVlcyBvbmx5IG9uZSB0aW1lLlxyXG4gICAqL1xyXG4gIHNldEFuaW0oc3RhcnQsIGVuZCwgbG9vcCwgcm93LCBkZWxheSwgb25jZSkge1xyXG4gICAgb25jZSA9IHR5cGVvZiBvbmNlID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogb25jZTtcclxuICAgIGRlbGF5ID0gdHlwZW9mIGRlbGF5ID09PSAndW5kZWZpbmVkJyA/IENvbnN0cy5BbmltRGVmYXVsdERlbGF5IDogZGVsYXk7XHJcbiAgICByb3cgPSB0eXBlb2Ygcm93ID09PSAndW5kZWZpbmVkJyA/IHRoaXMuYW5pbVJvdyA6IHJvdztcclxuICAgIGlmICghb25jZSkge1xyXG4gICAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgICB0aGlzLmFuaW1FbmQgPSBlbmQ7XHJcbiAgICAgIHRoaXMuYW5pbUNvdW50ID0gc3RhcnQ7XHJcbiAgICAgIHRoaXMuYW5pbUxvb3AgPSBsb29wO1xyXG4gICAgICB0aGlzLmFuaW1EZWxheSA9IGRlbGF5O1xyXG4gICAgICB0aGlzLmFuaW1Sb3cgPSByb3c7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5hbmltU3RhcnQgIT09IHN0YXJ0IHx8IHRoaXMuYW5pbUVuZCAhPT0gZW5kIHx8IHRoaXMuYW5pbUxvb3AgIT09IGxvb3AgfHwgdGhpcy5hbmltUm93ICE9PSByb3cpIHtcclxuICAgICAgICB0aGlzLmFuaW1TdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuYW5pbUVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLmFuaW1Db3VudCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuYW5pbUxvb3AgPSBsb29wO1xyXG4gICAgICAgIHRoaXMuYW5pbURlbGF5ID0gZGVsYXk7XHJcbiAgICAgICAgdGhpcy5hbmltUm93ID0gcm93O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIERyYXdzIHRoZSBmcmFtZSBvZiB0aGUgc3ByaXRlIGluIHRoZSBjYW52YXNcclxuICAgKi9cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICB0aGlzLmltYWdlLFxyXG4gICAgICB0aGlzLmFuaW1Db3VudCAqIHRoaXMud2lkdGgsXHJcbiAgICAgIHRoaXMuYW5pbVJvdyAqIHRoaXMuaGVpZ2h0LFxyXG4gICAgICB0aGlzLndpZHRoLFxyXG4gICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgdGhpcy54ICsgdGhpcy5vZmZzZXRYLFxyXG4gICAgICB0aGlzLnkgKyB0aGlzLm9mZnNldFksXHJcbiAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5hbmltRGVsYXlDb3VudCsrID4gdGhpcy5hbmltRGVsYXkpIHtcclxuICAgICAgdGhpcy5hbmltQ291bnQgKz0gMTtcclxuICAgICAgaWYgKHRoaXMuYW5pbUNvdW50ID4gdGhpcy5hbmltRW5kKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbUxvb3ApIHtcclxuICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gdGhpcy5hbmltU3RhcnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYW5pbUNvdW50ID0gdGhpcy5hbmltRW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFuaW1EZWxheUNvdW50ID0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdGcm9zdCgpIHtcclxuICAgIGNvbnN0IGxlZnRTcHJpdGUgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlIC0gMSwgdGhpcy55VGlsZSk7XHJcbiAgICBpZiAobGVmdFNwcml0ZSAmJiBsZWZ0U3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmIGxlZnRTcHJpdGUuZnJvemVuLnJpZ2h0KSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLCB0aGlzLnhUaWxlICogdGhpcy53aWR0aCAtIDcsIHRoaXMueVRpbGUgKiB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByaWdodFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueFRpbGUgKyAxLCB0aGlzLnlUaWxlKTtcclxuICAgIGlmIChyaWdodFNwcml0ZSAmJiByaWdodFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJiByaWdodFNwcml0ZS5mcm96ZW4ubGVmdCkge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSxcclxuICAgICAgICAodGhpcy54VGlsZSArIHRoaXMubGVuZ3RoKSAqIHRoaXMud2lkdGggLSA3LFxyXG4gICAgICAgIHRoaXMueVRpbGUgKiB0aGlzLmhlaWdodCxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IENvbnN0cyA9IE9iamVjdC5mcmVlemUoe1xuICAvLyBHcmlkXG4gIFRpbGVXaWR0aDogMzIsXG5cbiAgLy8gUGh5c2ljc1xuICBQaHlzaWNzU3BlZWQ6IDQsXG4gIFBsYXllclNwZWVkOiAyLFxuXG4gIC8vIFRpbWluZ1xuICBTcGFya0ludGVydmFsOiAxMCxcbiAgUmlwRHVyYXRpb246IDcwLFxuICBJbnRyb0R1cmF0aW9uOiAzMixcbiAgU2xlZXBUaHJlc2hvbGQ6IDUwMCxcbiAgUGxheWVyQW5pbURlbGF5OiAzLFxuICBJY2VBbmltRGVsYXk6IDksXG5cbiAgTW92ZVN0YW5kOiAwLFxuICBNb3ZlTGVmdDogMSxcbiAgTW92ZVJpZ2h0OiAyLFxuICBNb3ZlRG93bjogMyxcbiAgTW92ZVVwOiA0LFxuICBNb3ZlVHVybjogNSxcbiAgTW92ZUljZU1ha2U6IDYsXG4gIE1vdmVJY2VSZW1vdmU6IDcsXG4gIE1vdmVJY2VNb3Zpbmc6IDgsXG4gIE1vdmVJY2VDaGVjazogOSxcbiAgTW92ZVJpcDogMTAsXG4gIE1vdmVQdXNoOiAxNixcbiAgTW92ZUljZUZhaWw6IDExLFxuICBNb3ZlTGV2ZWxFeGl0OiAxMixcbiAgTW92ZUxldmVsRW50ZXI6IDEzLFxuICBNb3ZlVGVsZXBvcnRPdXQ6IDE0LFxuICBNb3ZlVGVsZXBvcnRJbjogMTUsXG4gIERpckxlZnQ6IC0xLFxuICBEaXJSaWdodDogMSxcbiAgQW5pbURlZmF1bHREZWxheTogMixcbiAgQW5pbUZyYW1lQ291bnQ6IDE2LFxuICBBbmltTGVmdFJvdzogMSxcbiAgQW5pbVJpZ2h0Um93OiAwLFxuICBBbmltUnVuU3RhcnQ6IDAsXG4gIEFuaW1SdW5FbmQ6IDMsXG4gIEFuaW1TdGFuZDogNCxcbiAgQW5pbVR1cm5TdGFydDogNCxcbiAgQW5pbVR1cm5FbmQ6IDcsXG4gIEFuaW1GYWxsU3RhcnQ6IDgsXG4gIEFuaW1GYWxsRW5kOiA5LFxuICBBbmltQmlnRmFsbFN0YXJ0OiAxMCxcbiAgQW5pbUJpZ0ZhbGxFbmQ6IDExLFxuICBBbmltUHVzaFN0YXJ0OiAxMixcbiAgQW5pbVB1c2hFbmQ6IDEzLFxuICBBbmltSnVtcFN0YXJ0OiAxNCxcbiAgQW5pbUp1bXBFbmQ6IDE1LFxuICBBbmltU3RhbmRTdGFydDogMTYsXG4gIEFuaW1TdGFuZEVuZDogMTcsXG4gIEFuaW1JY2VTdGFydDogMTgsXG4gIEFuaW1JY2VFbmQ6IDE5LFxuICBBbmltQ3JvdWNoU3RhcnQ6IDIwLFxuICBBbmltQ3JvdWNoRW5kOiAyMixcbiAgQW5pbVJpcFN0YXJ0OiAyMyxcbiAgQW5pbVJpcEVuZDogMjQsXG4gIEFuaW1TbGVlcFN0YXJ0OiAyNSxcbiAgQW5pbVNsZWVwRW5kOiAyNixcbiAgVGlsZUJhY2tncm91bmQ6IDAsXG4gIFRpbGVCb3RoU2lkZXM6IDMyLFxuICBUaWxlTGVmdFNpZGU6IDY0LFxuICBUaWxlTWlkZGxlOiA5NixcbiAgVGlsZVJpZ2h0U2lkZTogMTI4LFxuICBPYmplY3RPdXQ6IC0xLFxuICBPYmplY3RCYWNrZ3JvdW5kOiAwLFxuICBPYmplY3RXYWxsOiAxLFxuICBPYmplY3RJY2U6IDMsXG4gIE9iamVjdE1ldGFsOiA0LFxuICBPYmplY3RKYXI6IDUsXG4gIE9iamVjdEZpcmU6IDYsXG4gIE9iamVjdFBsYXllcjogNyxcbiAgT2JqZWN0VGVsZXBvcnQ6IDgsXG4gIEdhbWVTdGF0ZVBsYXk6IDEsXG4gIEdhbWVTdGF0ZUludHJvOiAyLFxuICBHYW1lU3RhdGVQYXVzZWQ6IDMsXG4gIEdhbWVTdGF0ZVRyYW5zaXRpb246IDQsXG4gIENvbG9yR3JlZW46ICcxMjQsIDIzOCwgNjYnLFxuICBDb2xvckJsdWU6ICcxMjIsIDIxMSwgMjU1JyxcbiAgQ29sb3JPcmFuZ2U6ICcyNTUsIDg4LCAzMycsXG4gIENvbG9yUmVkOiAnMjU1LCAxMzUsIDEyNCcsXG4gIENvbG9yV2hpdGU6ICcyNTUsIDI1NSwgMjU1Jyxcbn0pO1xuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRnJvc3QgfSBmcm9tICcuL3N0cnVjdCc7XG5pbXBvcnQgeyBJY2UgfSBmcm9tICcuL2ljZSc7XG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4va2V5Ym9hcmQnO1xuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcbmltcG9ydCB7IFNvdW5kIH0gZnJvbSAnLi9zb3VuZCc7XG5pbXBvcnQgeyBTcGFya3MgfSBmcm9tICcuL3NmeCc7XG4vKipcbiAqIEVuZ2luZSBMb29wXG4gKi9cbmV4cG9ydCBjbGFzcyBFbmdpbmUge1xuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBFbmdpbmUgb3B0aW9uc1xuICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBvcHRpb25zLmNhbnZhcyAtIFRoZSBjYW52YXMgZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5yZXNvdXJjZXMgLSBHYW1lIHJlc291cmNlc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy5vbkxldmVsQ29tcGxldGVdIC0gQ2FsbGJhY2sgZm9yIGxldmVsIGNvbXBsZXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmxldmVsXSAtIEluaXRpYWwgbGV2ZWwgZGF0YVxuICAgKi9cbiAgY29uc3RydWN0b3IoeyBjYW52YXMsIHJlc291cmNlcywgb25MZXZlbENvbXBsZXRlID0gbnVsbCwgbGV2ZWwgPSBudWxsIH0pIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN3aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmNoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgIHRoaXMucmVzb3VyY2VzID0gcmVzb3VyY2VzO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnNwcml0ZXMgPSBbXTtcbiAgICB0aGlzLnNmeHMgPSBbXTtcbiAgICB0aGlzLnBsYXllciA9IHt9O1xuICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIHRoaXMua2V5Ym9hcmQgPSBuZXcgS2V5Ym9hcmQoKTtcbiAgICB0aGlzLnNvdW5kID0gbmV3IFNvdW5kKHJlc291cmNlcyk7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBTY2VuZSh0aGlzLCBsZXZlbCk7XG4gICAgdGhpcy5nYW1lTW9kZSA9ICdnYW1lJztcbiAgICB0aGlzLm9uTGV2ZWxDb21wbGV0ZUNhbGxiYWNrID0gb25MZXZlbENvbXBsZXRlO1xuICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgPSAwO1xuXG4gICAgY29uc3QgbHZsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xldmVsJyk7XG4gICAgaWYgKGxldmVsICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmxldmVsID0gcGFyc2VJbnQobHZsLCAxMCk7XG4gICAgfVxuICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY3dpZHRoLCB0aGlzLmNoZWlnaHQpO1xuICAgIHRoaXMubWFwLmRyYXcoKTtcbiAgICAvLyByZXZlcnNlIGxvb3AsIHBsYXllciBkcmF3cyBsYXN0XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuc3ByaXRlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdGhpcy5zcHJpdGVzW2ldLmRyYXcoKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNmeHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHRoaXMuc2Z4c1tpXS5kcmF3KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2FtZU1vZGUgPT09ICdlZGl0b3InKSB7XG4gICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuNSknO1xuICAgICAgdGhpcy5jdHguc3Ryb2tlV2lkdGggPSAxO1xuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY3dpZHRoOyB4ICs9IDMyKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5jaGVpZ2h0OyB5ICs9IDMyKSB7XG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlUmVjdCh4LCB5LCB4ICsgMzIsIHkgKyAzMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbGxpc2lvbigpIHtcbiAgICBjb25zdCBnYW1lSXNFZGl0b3JNb2RlID0gdGhpcy5nYW1lTW9kZSA9PT0gJ2VkaXRvcic7XG4gICAgY29uc3QgZmlyZXMgPSB0aGlzLnNwcml0ZXMuZmlsdGVyKHNwcml0ZSA9PiBzcHJpdGUuaWQgPT09IENvbnN0cy5PYmplY3RGaXJlKTtcbiAgICBpZiAoIWZpcmVzLmxlbmd0aCAmJiAhZ2FtZUlzRWRpdG9yTW9kZSAmJiB0aGlzLnBsYXllci5zdGF0ZSAhPT0gQ29uc3RzLk1vdmVMZXZlbEV4aXQpIHtcbiAgICAgIHRoaXMucGxheWVyLm91dHJvKCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dExldmVsKCkge1xuICAgIGNvbnN0IGdhbWVJc0VkaXRvciA9IHRoaXMuZ2FtZU1vZGUgPT09ICdlZGl0b3InO1xuICAgIGlmICh0aGlzLm9uTGV2ZWxDb21wbGV0ZUNhbGxiYWNrICYmICFnYW1lSXNFZGl0b3IpIHtcbiAgICAgIHRoaXMub25MZXZlbENvbXBsZXRlQ2FsbGJhY2sodGhpcy5sZXZlbCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZE5leHRMZXZlbCgpIHtcbiAgICB0aGlzLmxldmVsKys7XG4gICAgaWYgKHRoaXMuZ2FtZU1vZGUgPT09ICdnYW1lJykge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xldmVsJywgdGhpcy5sZXZlbCk7XG4gICAgfVxuICAgIHRoaXMuc2NlbmUubG9hZCh0aGlzLmxldmVsKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHRoaXMuc3ByaXRlc1tpXS5lbmdpbmVNb3ZlKCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZnhzLmxlbmd0aDsgKytpKSB7XG4gICAgICB0aGlzLnNmeHNbaV0uZW5naW5lTW92ZSgpO1xuICAgIH1cbiAgICBsZXQgc3ByaXRlc01vdmluZyA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAodGhpcy5zcHJpdGVzW2ldICYmIHRoaXMuc3ByaXRlc1tpXS5pZCAhPT0gQ29uc3RzLk9iamVjdFBsYXllciAmJiB0aGlzLnNwcml0ZXNbaV0ubW92aW5nKSB7XG4gICAgICAgIHNwcml0ZXNNb3ZpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXNwcml0ZXNNb3ZpbmcpIHtcbiAgICAgIHRoaXMubm9TcHJpdGVNb3ZlQ291bnQgKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA9IDA7XG4gICAgfVxuICAgIC8vIGNoZWNrIGlmIG5vIHNwcml0ZXMgaGF2ZSBtb3ZlZCBmb3IgMiB0dXJuc1xuICAgIGlmICghc3ByaXRlc01vdmluZyAmJiB0aGlzLm5vU3ByaXRlTW92ZUNvdW50ID4gMSkge1xuICAgICAgdGhpcy5ub1Nwcml0ZU1vdmVDb3VudCA9IDA7XG4gICAgICB0aGlzLmlucHV0KCk7XG4gICAgfVxuICAgIHRoaXMuY29sbGlzaW9uKCk7XG4gIH1cblxuICBpbnB1dCgpIHtcbiAgICBpZiAodGhpcy5rZXlib2FyZC5kb3duIHx8IHRoaXMua2V5Ym9hcmQuYWN0aW9uKSB7XG4gICAgICB0aGlzLnBsYXllci5pY2VPclRlbGVwb3J0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmtleWJvYXJkLmxlZnQpIHtcbiAgICAgIHRoaXMucGxheWVyLmxlZnQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMua2V5Ym9hcmQucmlnaHQpIHtcbiAgICAgIHRoaXMucGxheWVyLnJpZ2h0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmtleWJvYXJkLmVudGVyKSB7XG4gICAgICB0aGlzLnNvdW5kLnN0b3AoJ2RhbmdlcicpO1xuICAgICAgdGhpcy5zY2VuZS5sb2FkKHRoaXMubGV2ZWwpO1xuICAgICAgdGhpcy5rZXlib2FyZC5lbnRlciA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGljZUF0KHR4LCB0eSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlzU3ByaXRlQXQodHgsIHR5KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhZGRJY2VCbG9jayh0eCwgdHkpIHtcbiAgICBjb25zdCBmb3VuZEljZUJsb2NrcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmIHRoaXMuc3ByaXRlc1tpXS55VGlsZSA9PT0gdHkpIHtcbiAgICAgICAgY29uc3QgaWNlID0gdGhpcy5zcHJpdGVzW2ldO1xuICAgICAgICBpZiAoaWNlLnhUaWxlIC0gMSA9PT0gdHggfHwgaWNlLnhUaWxlICsgaWNlLmxlbmd0aCA9PT0gdHgpIHtcbiAgICAgICAgICBmb3VuZEljZUJsb2Nrcy5wdXNoKGljZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvdW5kSWNlQmxvY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zcHJpdGVzLnB1c2gobmV3IEljZSh0aGlzLCB0eCwgdHksIDEpKTtcbiAgICB9IGVsc2UgaWYgKGZvdW5kSWNlQmxvY2tzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZm91bmRJY2VCbG9ja3NbMF0uYWRkQmxvY2sodHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZm91bmRJY2VCbG9ja3NbMF0ueFRpbGUgPD0gZm91bmRJY2VCbG9ja3NbMV0ueFRpbGUpIHtcbiAgICAgICAgdGhpcy5qb2luSWNlQmxvY2tzKGZvdW5kSWNlQmxvY2tzWzBdLCBmb3VuZEljZUJsb2Nrc1sxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmpvaW5JY2VCbG9ja3MoZm91bmRJY2VCbG9ja3NbMV0sIGZvdW5kSWNlQmxvY2tzWzBdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBqb2luSWNlQmxvY2tzKGljZWJsb2NrQSwgaWNlYmxvY2tCKSB7XG4gICAgY29uc3QgdHggPSBpY2VibG9ja0EueFRpbGU7XG4gICAgY29uc3QgdHkgPSBpY2VibG9ja0EueVRpbGU7XG4gICAgY29uc3QgbGVuZ3RoID0gaWNlYmxvY2tBLmxlbmd0aCArIGljZWJsb2NrQi5sZW5ndGggKyAxO1xuICAgIHRoaXMuYWRkU3ByaXRlKG5ldyBJY2UodGhpcywgdHgsIHR5LCBsZW5ndGgsIG5ldyBGcm9zdChpY2VibG9ja0EuZnJvemVuLmxlZnQsIGljZWJsb2NrQi5mcm96ZW4ucmlnaHQpKSk7XG4gICAgdGhpcy5yZW1vdmVTcHJpdGUoaWNlYmxvY2tBKTtcbiAgICB0aGlzLnJlbW92ZVNwcml0ZShpY2VibG9ja0IpO1xuICB9XG5cbiAgcmVtb3ZlSWNlQmxvY2sodHgsIHR5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zcHJpdGVzW2ldLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmXG4gICAgICAgIHRoaXMuc3ByaXRlc1tpXS55VGlsZSA9PT0gdHkgJiZcbiAgICAgICAgdHggPj0gdGhpcy5zcHJpdGVzW2ldLnhUaWxlICYmXG4gICAgICAgIHR4IDwgdGhpcy5zcHJpdGVzW2ldLnhUaWxlICsgdGhpcy5zcHJpdGVzW2ldLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZXNbaV0ucmVtb3ZlQmxvY2sodHgpIDw9IDApIHtcbiAgICAgICAgICB0aGlzLnNwcml0ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVGaXJlKHR4LCB0eSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLnlUaWxlID09PSB0eSAmJiB0eCA9PT0gdGhpcy5zcHJpdGVzW2ldLnhUaWxlICYmIHRoaXMuc3ByaXRlc1tpXS5pZCA9PT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcbiAgICAgICAgdGhpcy5zcHJpdGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZFNwcml0ZShzcHJpdGUpIHtcbiAgICB0aGlzLnNwcml0ZXMucHVzaChzcHJpdGUpO1xuICB9XG5cbiAgcmVtb3ZlU3ByaXRlKHNwcml0ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcHJpdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zcHJpdGVzW2ldID09PSBzcHJpdGUpIHtcbiAgICAgICAgdGhpcy5zcHJpdGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFkZFNwYXJrcyh4VGlsZSwgeVRpbGUsIGNvbG9yLCBxdWFudGl0eSwgaW50ZW5zaXR5KSB7XG4gICAgdGhpcy5zZnhzLnB1c2gobmV3IFNwYXJrcyh0aGlzLCB4VGlsZSwgeVRpbGUsIGNvbG9yLCBxdWFudGl0eSwgaW50ZW5zaXR5KSk7XG4gIH1cblxuICBzcHJpdGVUeXBlQXQodHgsIHR5LCBleGNsdWRlSWQpIHtcbiAgICBleGNsdWRlSWQgPSB0eXBlb2YgZXhjbHVkZUlkID09PSAndW5kZWZpbmVkJyA/IENvbnN0cy5PYmplY3RPdXQgOiBleGNsdWRlSWQ7XG4gICAgaWYgKHR4IDwgMCB8fCB0eSA8IDAgfHwgdHggPiB0aGlzLm1hcC53aWR0aCB8fCB0eSA+IHRoaXMubWFwLmhlaWdodCkge1xuICAgICAgcmV0dXJuIENvbnN0cy5PYmplY3RPdXQ7XG4gICAgfVxuICAgIGlmICh0aGlzLm1hcC5tYXBbdHldW3R4XSkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLm1hcFt0eV1bdHhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVzW2ldLmlzU3ByaXRlQXQodHgsIHR5KSAmJiB0aGlzLnNwcml0ZXNbaV0uaWQgIT09IGV4Y2x1ZGVJZCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbaV0uaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIENvbnN0cy5PYmplY3RCYWNrZ3JvdW5kO1xuICB9XG5cbiAgc3ByaXRlQXQodHgsIHR5KSB7XG4gICAgaWYgKCF0aGlzLm1hcC5tYXBbdHldW3R4XSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNwcml0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tpXS5pc1Nwcml0ZUF0KHR4LCB0eSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGVzJztcblxuZXhwb3J0IGNsYXNzIEZpcmUgZXh0ZW5kcyBBbmltU3ByaXRlIHtcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcbiAgICBzdXBlcihDb25zdHMuT2JqZWN0RmlyZSwgZW5naW5lLCAnaW1nX2ZpcmUnLCB0eCwgdHksIENvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgsIDAsIDAsIDAsIDMsIHRydWUpO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XG4gICAgICB0aGlzLmNvbGxpc2lvbnMoKTtcbiAgICAgIHRoaXMuZ3Jhdml0eSgpO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxuICAgICAgICB0aGlzLmRvRG93bigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb2xsaXNpb25zKCkge1xuICAgIGlmICh0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLk9iamVjdEZpcmUpID09PSBDb25zdHMuT2JqZWN0SWNlKSB7XG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xuICAgICAgdGhpcy5lbmdpbmUucmVtb3ZlRmlyZSh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlKTtcbiAgICAgIHRoaXMuZW5naW5lLnJlbW92ZUljZUJsb2NrKHRoaXMueFRpbGUsIHRoaXMueVRpbGUpO1xuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsICcyNTUsIDEyNiwgMTk4JywgMTUsIDAuNSk7XG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgJzEyNCwgMjEyLCAyNTUnLCAxMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLk9iamVjdEZpcmUpID09PSBDb25zdHMuT2JqZWN0TWV0YWwpIHtcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ZpcmUtb2ZmJyk7XG4gICAgICB0aGlzLmVuZ2luZS5yZW1vdmVGaXJlKHRoaXMueFRpbGUsIHRoaXMueVRpbGUpO1xuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsICcyNTUsIDIyMiwgMTI3JywgMTUsIDAuNSk7XG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgJzQxLCA0MiwgOTAnLCAxMCk7XG4gICAgfVxuICB9XG5cbiAgZ3Jhdml0eSgpIHtcbiAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiYgdGhpcy5jb3JuZXJzLmQgIT09IENvbnN0cy5PYmplY3RGaXJlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlRG93biwgdHJ1ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZG9Eb3duKCkge1xuICAgIHRoaXMuY291bnRlciArPSBDb25zdHMuUGh5c2ljc1NwZWVkO1xuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLlRpbGVXaWR0aCkge1xuICAgICAgdGhpcy55ICs9IENvbnN0cy5QaHlzaWNzU3BlZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRW5naW5lIH0gZnJvbSAnLi9lbmdpbmUnO1xuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBsZXZlbHMgfSBmcm9tICcuL2xldmVscyc7XG5cbi8qKlxuICogR2FtZSBMb29wXG4gKi9cblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBHYW1lIG9wdGlvbnNcbiAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gb3B0aW9ucy5jYW52YXMgLSBUaGUgY2FudmFzIGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMucmVzb3VyY2VzIC0gR2FtZSByZXNvdXJjZXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuZ2FtZU1vZGUgLSBHYW1lIG1vZGU6ICdnYW1lJywgJ2xldmVsJywgb3IgJ2VkaXRvcidcbiAgICogQHBhcmFtIHtvbkxldmVsQ29tcGxldGV9IFtvcHRpb25zLm9uTGV2ZWxDb21wbGV0ZV0gLSBDYWxsYmFjayBmb3IgbGV2ZWwgY29tcGxldGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMubGV2ZWxdIC0gSW5pdGlhbCBsZXZlbCBkYXRhXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IGNhbnZhcywgcmVzb3VyY2VzLCBnYW1lTW9kZSA9ICdnYW1lJywgb25MZXZlbENvbXBsZXRlID0gbnVsbCwgbGV2ZWwgPSBudWxsIH0pIHtcbiAgICB0aGlzLnRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuZW5naW5lID0gbmV3IEVuZ2luZSh7XG4gICAgICBjYW52YXMsXG4gICAgICByZXNvdXJjZXMsXG4gICAgICBsZXZlbCxcbiAgICAgIG9uTGV2ZWxDb21wbGV0ZTogKGxldmVsSW5kZXgpID0+IHRoaXMub25MZXZlbENvbXBsZXRlKGxldmVsSW5kZXgpXG4gICAgfSk7XG4gICAgdGhpcy5nYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKCk7XG4gICAgdGhpcy5sZXZlbHMgPSBsZXZlbHM7XG4gICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVQbGF5O1xuICAgIHRoaXMuZ2FtZU1vZGUgPSBnYW1lTW9kZTtcbiAgICB0aGlzLmVuZ2luZS5nYW1lTW9kZSA9IGdhbWVNb2RlO1xuICAgIHRoaXMuZW5naW5lLnNvdW5kLnNvdW5kdHJhY2soKTtcbiAgICB0aGlzLmdhbWVTdGF0ZS5zdGFydExldmVsVGltZXIoKTtcbiAgICB0aGlzLm9uTGV2ZWxDb21wbGV0ZUNhbGxiYWNrID0gb25MZXZlbENvbXBsZXRlO1xuXG4gICAgLy8gVHJhbnNpdGlvbiBwcm9wZXJ0aWVzXG4gICAgdGhpcy50cmFuc2l0aW9uUGhhc2UgPSBudWxsOyAvLyAnY2xvc2luZycgb3IgJ29wZW5pbmcnXG4gICAgdGhpcy50cmFuc2l0aW9uUmFkaXVzID0gMDtcbiAgICB0aGlzLm1heFJhZGl1cyA9IE1hdGguc3FydCh0aGlzLmNhbnZhcy53aWR0aCAqKiAyICsgdGhpcy5jYW52YXMuaGVpZ2h0ICoqIDIpIC8gMiArIDUwO1xuICAgIHRoaXMudHJhbnNpdGlvblNwZWVkID0gMTU7XG4gICAgdGhpcy50cmFuc2l0aW9uQ2VudGVyWCA9IDA7XG4gICAgdGhpcy50cmFuc2l0aW9uQ2VudGVyWSA9IDA7XG5cbiAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcF8uYmluZCh0aGlzKTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmdhbWVMb29wKCksIDEwMDAgLyA2MCk7XG4gIH1cblxuICBnYW1lTG9vcF8oKSB7XG4gICAgdGhpcy5jaGVja1BhdXNlKCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ29uc3RzLkdhbWVTdGF0ZVBhdXNlZCkge1xuICAgICAgdGhpcy5kcmF3UGF1c2VNZW51KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IENvbnN0cy5HYW1lU3RhdGVUcmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRyYW5zaXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVuZ2luZS5kcmF3KCk7XG4gICAgdGhpcy5lbmdpbmUubW92ZSgpO1xuXG4gICAgLy8gRHJhdyBvcGVuaW5nIHRyYW5zaXRpb24gb24gdG9wIGlmIGFjdGl2ZVxuICAgIGlmICh0aGlzLnRyYW5zaXRpb25QaGFzZSA9PT0gJ29wZW5pbmcnKSB7XG4gICAgICB0aGlzLmRyYXdDaXJjbGVUcmFuc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnROZXh0bGV2ZWwoKSB7XG4gICAgdGhpcy5nYW1lU3RhdGUuc3RhcnRMZXZlbFRpbWVyKCk7XG4gICAgdGhpcy5lbmdpbmUubG9hZE5leHRMZXZlbCgpO1xuICAgIC8vIFN3aXRjaCB0byBvcGVuaW5nIHBoYXNlLCBjZW50ZXJlZCBvbiBuZXcgcGxheWVyIHBvc2l0aW9uXG4gICAgdGhpcy50cmFuc2l0aW9uUGhhc2UgPSAnb3BlbmluZyc7XG4gICAgdGhpcy50cmFuc2l0aW9uQ2VudGVyWCA9IHRoaXMuZW5naW5lLnBsYXllci54ICsgMTY7XG4gICAgdGhpcy50cmFuc2l0aW9uQ2VudGVyWSA9IHRoaXMuZW5naW5lLnBsYXllci55ICsgMTY7XG4gIH1cblxuICBvbkxldmVsQ29tcGxldGUobGV2ZWxJbmRleCkge1xuICAgIHRoaXMuZ2FtZVN0YXRlLmNvbXBsZXRlTGV2ZWwobGV2ZWxJbmRleCk7XG5cbiAgICAvLyBTdGFydCBjbG9zaW5nIHRyYW5zaXRpb24gY2VudGVyZWQgb24gcGxheWVyXG4gICAgdGhpcy50cmFuc2l0aW9uQ2VudGVyWCA9IHRoaXMuZW5naW5lLnBsYXllci54ICsgMTY7XG4gICAgdGhpcy50cmFuc2l0aW9uQ2VudGVyWSA9IHRoaXMuZW5naW5lLnBsYXllci55ICsgMTY7XG4gICAgdGhpcy50cmFuc2l0aW9uUmFkaXVzID0gdGhpcy5tYXhSYWRpdXM7XG4gICAgdGhpcy50cmFuc2l0aW9uUGhhc2UgPSAnY2xvc2luZyc7XG4gICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVUcmFuc2l0aW9uO1xuXG4gICAgaWYgKHRoaXMub25MZXZlbENvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMub25MZXZlbENvbXBsZXRlQ2FsbGJhY2sobGV2ZWxJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVHJhbnNpdGlvbigpIHtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uUGhhc2UgPT09ICdjbG9zaW5nJykge1xuICAgICAgdGhpcy5lbmdpbmUuZHJhdygpO1xuICAgICAgdGhpcy5kcmF3Q2lyY2xlVHJhbnNpdGlvbigpO1xuICAgICAgdGhpcy50cmFuc2l0aW9uUmFkaXVzIC09IHRoaXMudHJhbnNpdGlvblNwZWVkO1xuICAgICAgaWYgKHRoaXMudHJhbnNpdGlvblJhZGl1cyA8PSAwKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvblJhZGl1cyA9IDA7XG5cbiAgICAgICAgLy8gTG9hZCBuZXh0IGxldmVsXG4gICAgICAgIGNvbnN0IGlzR2FtZU1vZGVHYW1lID0gdGhpcy5nYW1lTW9kZSA9PT0gJ2dhbWUnO1xuICAgICAgICBpZiAoaXNHYW1lTW9kZUdhbWUpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0TmV4dGxldmVsKCk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50cmFuc2l0aW9uUGhhc2UgPT09ICdvcGVuaW5nJykge1xuICAgICAgdGhpcy5lbmdpbmUuZHJhdygpO1xuICAgICAgdGhpcy5kcmF3Q2lyY2xlVHJhbnNpdGlvbigpO1xuICAgICAgdGhpcy50cmFuc2l0aW9uUmFkaXVzICs9IHRoaXMudHJhbnNpdGlvblNwZWVkO1xuICAgICAgaWYgKHRoaXMudHJhbnNpdGlvblJhZGl1cyA+PSB0aGlzLm1heFJhZGl1cykge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIGNvbXBsZXRlXG4gICAgICAgIHRoaXMudHJhbnNpdGlvblBoYXNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IENvbnN0cy5HYW1lU3RhdGVQbGF5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdDaXJjbGVUcmFuc2l0aW9uKCkge1xuICAgIHRoaXMuY3R4LnNhdmUoKTtcblxuICAgIC8vIENyZWF0ZSBhIHBhdGggdGhhdCBjb3ZlcnMgdGhlIHdob2xlIGNhbnZhcyBleGNlcHQgdGhlIGNpcmNsZVxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgdGhpcy5jdHguYXJjKFxuICAgICAgdGhpcy50cmFuc2l0aW9uQ2VudGVyWCxcbiAgICAgIHRoaXMudHJhbnNpdGlvbkNlbnRlclksXG4gICAgICBNYXRoLm1heCgwLCB0aGlzLnRyYW5zaXRpb25SYWRpdXMpLFxuICAgICAgMCxcbiAgICAgIE1hdGguUEkgKiAyLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuXG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgY2hlY2tQYXVzZSgpIHtcbiAgICBpZiAodGhpcy5lbmdpbmUua2V5Ym9hcmQuZXNjYXBlICYmIHRoaXMuc3RhdGUgPT09IENvbnN0cy5HYW1lU3RhdGVQbGF5KSB7XG4gICAgICB0aGlzLmVuZ2luZS5rZXlib2FyZC5lc2NhcGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGUgPSBDb25zdHMuR2FtZVN0YXRlUGF1c2VkO1xuICAgICAgaWYgKHRoaXMuZW5naW5lLnNvdW5kLm11c2ljKSB7XG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLm11c2ljLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmVuZ2luZS5rZXlib2FyZC5lc2NhcGUgJiYgdGhpcy5zdGF0ZSA9PT0gQ29uc3RzLkdhbWVTdGF0ZVBhdXNlZCkge1xuICAgICAgdGhpcy5lbmdpbmUua2V5Ym9hcmQuZXNjYXBlID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXRlID0gQ29uc3RzLkdhbWVTdGF0ZVBsYXk7XG4gICAgICBpZiAodGhpcy5lbmdpbmUuc291bmQubXVzaWNPbikge1xuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5tdXNpYy5wbGF5KCkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3UGF1c2VNZW51KCkge1xuICAgIC8vIEhhbmRsZSBpbnB1dCB3aGlsZSBwYXVzZWRcbiAgICBpZiAodGhpcy5lbmdpbmUua2V5Ym9hcmQubUtleSkge1xuICAgICAgdGhpcy5lbmdpbmUua2V5Ym9hcmQubUtleSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbmdpbmUuc291bmQudG9nZ2xlTXVzaWMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5naW5lLmtleWJvYXJkLnNLZXkpIHtcbiAgICAgIHRoaXMuZW5naW5lLmtleWJvYXJkLnNLZXkgPSBmYWxzZTtcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnRvZ2dsZVNvdW5kKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVuZ2luZS5rZXlib2FyZC5lbnRlcikge1xuICAgICAgdGhpcy5lbmdpbmUua2V5Ym9hcmQuZW50ZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGUgPSBDb25zdHMuR2FtZVN0YXRlUGxheTtcbiAgICAgIHRoaXMuZW5naW5lLnNjZW5lLmxvYWQodGhpcy5lbmdpbmUubGV2ZWwpO1xuICAgICAgaWYgKHRoaXMuZW5naW5lLnNvdW5kLm11c2ljT24gJiYgdGhpcy5lbmdpbmUuc291bmQubXVzaWMpIHtcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQubXVzaWMucGxheSgpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRHJhdyBnYW1lIGZyYW1lIHVuZGVybmVhdGhcbiAgICB0aGlzLmVuZ2luZS5kcmF3KCk7XG5cbiAgICAvLyBEcmF3IHNlbWktdHJhbnNwYXJlbnQgb3ZlcmxheVxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuNyknO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gRHJhdyBwYXVzZSB0ZXh0XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIHRoaXMuY3R4LmZvbnQgPSAnYm9sZCAzMnB4IG1vbm9zcGFjZSc7XG4gICAgdGhpcy5jdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ1BBVVNFRCcsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiAtIDYwKTtcblxuICAgIHRoaXMuY3R4LmZvbnQgPSAnMTZweCBtb25vc3BhY2UnO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KCdFU0MgLSBSZXN1bWUnLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgLSAxMCk7XG4gICAgdGhpcy5jdHguZmlsbFRleHQoJ0VOVEVSIC0gUmVzdGFydCBsZXZlbCcsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDE1KTtcbiAgICB0aGlzLmN0eC5maWxsVGV4dChgTSAtIE11c2ljOiAke3RoaXMuZW5naW5lLnNvdW5kLm11c2ljT24gPyAnT04nIDogJ09GRid9YCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgNDApO1xuICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBTIC0gU291bmQ6ICR7dGhpcy5lbmdpbmUuc291bmQuc291bmRPbiA/ICdPTicgOiAnT0ZGJ31gLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyA2NSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGVzJztcclxuaW1wb3J0IHsgRnJvc3QgfSBmcm9tICcuL3N0cnVjdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSWNlIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHksIGxlbmd0aCwgZnJvemVuKSB7XHJcbiAgICBzdXBlcihDb25zdHMuT2JqZWN0SWNlLCBlbmdpbmUsICdpbWdfaWNlJywgdHgsIHR5LCBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoLCAwLCAwLCAwLCAxLCB0cnVlKTtcclxuICAgIHRoaXMueFRpbGUgPSB0eDtcclxuICAgIHRoaXMueVRpbGUgPSB0eTtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5hbmltRW5kID0gMTtcclxuICAgIHRoaXMuYW5pbURlbGF5ID0gQ29uc3RzLkljZUFuaW1EZWxheTtcclxuICAgIHRoaXMuYW5pbVJvdyA9IDA7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XHJcbiAgICB0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuICAgIGlmICh0eXBlb2YgZnJvemVuICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmZyb3plbiA9IGZyb3plbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJvemVuID0gbmV3IEZyb3N0KGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29ybmVycygpO1xyXG4gICAgICB0aGlzLmNoZWNrRnJlZXplKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRCbG9jayh0eCkge1xyXG4gICAgY29uc3Qgc3ByaXRlVHlwZUF0TGVmdENvcm5lciA9IHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0eCAtIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgY29uc3Qgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPSB0aGlzLmVuZ2luZS5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIHRoaXMubGVuZ3RoICsgMSwgdGhpcy55VGlsZSk7XHJcbiAgICBpZiAodHggPiB0aGlzLnhUaWxlKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmdldFRpbGUodHggKyAxLCB0aGlzLnlUaWxlKSA9PT0gQ29uc3RzLk9iamVjdFdhbGwgfHxcclxuICAgICAgICBzcHJpdGVUeXBlQXRSaWdodENvcm5lciA9PT0gQ29uc3RzLk9iamVjdE1ldGFsIHx8XHJcbiAgICAgICAgc3ByaXRlVHlwZUF0UmlnaHRDb3JuZXIgPT09IENvbnN0cy5PYmplY3RKYXJcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5mcm96ZW4ucmlnaHQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR4IDwgdGhpcy54VGlsZSkge1xyXG4gICAgICB0aGlzLnhUaWxlID0gdHg7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmdldFRpbGUodHggLSAxLCB0aGlzLnlUaWxlKSA9PT0gQ29uc3RzLk9iamVjdFdhbGwgfHxcclxuICAgICAgICBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID09PSBDb25zdHMuT2JqZWN0TWV0YWwgfHxcclxuICAgICAgICBzcHJpdGVUeXBlQXRMZWZ0Q29ybmVyID09PSBDb25zdHMuT2JqZWN0SmFyXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuZnJvemVuLmxlZnQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnggPSB0aGlzLnhUaWxlICogQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgIHRoaXMubGVuZ3RoICs9IDE7XHJcbiAgfVxyXG5cclxuICBpc1Nwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgaWYgKHRoaXMueVRpbGUgPT09IHR5KSB7XHJcbiAgICAgIGlmICh0eCA+PSB0aGlzLnhUaWxlICYmIHR4IDwgdGhpcy54VGlsZSArIHRoaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVCbG9jayh0eCkge1xyXG4gICAgaWYgKHR4ID09PSB0aGlzLnhUaWxlKSB7XHJcbiAgICAgIHRoaXMueFRpbGUgKz0gMTtcclxuICAgICAgdGhpcy54ICs9IENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICAgIHRoaXMubGVuZ3RoIC09IDE7XHJcbiAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZUxlZnQoKTtcclxuICAgIH0gZWxzZSBpZiAodHggPT09IHRoaXMueFRpbGUgKyB0aGlzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5sZW5ndGggLT0gMTtcclxuICAgICAgdGhpcy5jaGVja1VuZnJlZXplUmlnaHQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZShcclxuICAgICAgICBuZXcgSWNlKFxyXG4gICAgICAgICAgdGhpcy5lbmdpbmUsXHJcbiAgICAgICAgICB0eCArIDEsXHJcbiAgICAgICAgICB0aGlzLnlUaWxlLFxyXG4gICAgICAgICAgdGhpcy54VGlsZSArIHRoaXMubGVuZ3RoIC0gdHggLSAxLFxyXG4gICAgICAgICAgbmV3IEZyb3N0KGZhbHNlLCB0aGlzLmZyb3plbi5yaWdodCksXHJcbiAgICAgICAgKSxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5sZW5ndGggPSB0eCAtIHRoaXMueFRpbGU7XHJcbiAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZVJpZ2h0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBjYW5HbGlkZShkaXIpIHtcclxuICAgIGlmICh0aGlzLmxlbmd0aCAhPT0gMSB8fCB0aGlzLmZyb3plbi5sZWZ0IHx8IHRoaXMuZnJvemVuLnJpZ2h0KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChkaXIgPT09IENvbnN0cy5EaXJMZWZ0ICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMubCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpciA9PT0gQ29uc3RzLkRpclJpZ2h0ICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMucikpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpc0Zyb3plbigpIHtcclxuICAgIHJldHVybiB0aGlzLmZyb3plbi5sZWZ0IHx8IHRoaXMuZnJvemVuLnJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgZ3Jhdml0eSgpIHtcclxuICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSAmJiAhdGhpcy5pc0Zyb3plbigpKSB7XHJcbiAgICAgIHRoaXMuZmFsbGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVEb3duLCB0cnVlKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mYWxsaW5nKSB7XHJcbiAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtY29sbGlzaW9uJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb2xsaXNpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuY2FuR2xpZGUodGhpcy5kaXJlY3Rpb24pKSB7XHJcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWNvbGxpc2lvbicpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgdGlsZV9kb3duID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIGksIHRoaXMueVRpbGUgKyAxKTtcclxuICAgICAgaWYgKHRpbGVfZG93biAmJiB0aWxlX2Rvd24gIT09IENvbnN0cy5PYmplY3RGaXJlKSB7XHJcbiAgICAgICAgdGhpcy5jb3JuZXJzLmQgPSB0aWxlX2Rvd247XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY29ybmVycy5yID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIHRoaXMubGVuZ3RoLCB0aGlzLnlUaWxlKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0Zyb3plbigpKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tVbmZyZWV6ZUxlZnQoKTtcclxuICAgICAgdGhpcy5jaGVja1VuZnJlZXplUmlnaHQoKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUljZU1vdmluZzpcclxuICAgICAgICB0aGlzLmdsaWRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VDaGVjazpcclxuICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZURvd246XHJcbiAgICAgICAgdGhpcy5kb0Rvd24oKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5zYXZlKCk7XHJcbiAgICBpZiAodGhpcy5hbmltRGVsYXlDb3VudCsrID4gdGhpcy5hbmltRGVsYXkpIHtcclxuICAgICAgdGhpcy5hbmltRGVsYXlDb3VudCA9IDA7XHJcbiAgICAgIHRoaXMuYW5pbVJvdyA9IHRoaXMuYW5pbVJvdyA9PT0gMCA/IDEgOiAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXMueCxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgICBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgdGhpcy54LFxyXG4gICAgICAgIHRoaXMueSxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICAzICogQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgICBDb25zdHMuVGlsZVdpZHRoICogdGhpcy5hbmltUm93LFxyXG4gICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgdGhpcy54ICsgQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmltYWdlLFxyXG4gICAgICAgIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXMueCxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgMyAqIENvbnN0cy5UaWxlV2lkdGgsXHJcbiAgICAgICAgQ29uc3RzLlRpbGVXaWR0aCAqIHRoaXMuYW5pbVJvdyxcclxuICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgIHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHRoaXMueCArIENvbnN0cy5UaWxlV2lkdGggKiAodGhpcy5sZW5ndGggLSAxKSxcclxuICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgICAyICogQ29uc3RzLlRpbGVXaWR0aCxcclxuICAgICAgICAgIENvbnN0cy5UaWxlV2lkdGggKiB0aGlzLmFuaW1Sb3csXHJcbiAgICAgICAgICB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgICB0aGlzLnggKyBDb25zdHMuVGlsZVdpZHRoICogaSxcclxuICAgICAgICAgIHRoaXMueSxcclxuICAgICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICB0aGlzLmhlaWdodCxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mcm96ZW4ubGVmdCkge1xyXG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5lbmdpbmUucmVzb3VyY2VzLmdldCgnZnJvc3QnKSwgdGhpcy54VGlsZSAqIHRoaXMud2lkdGggLSA3LCB0aGlzLnlUaWxlICogdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZnJvemVuLnJpZ2h0KSB7XHJcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICB0aGlzLmVuZ2luZS5yZXNvdXJjZXMuZ2V0KCdmcm9zdCcpLFxyXG4gICAgICAgICh0aGlzLnhUaWxlICsgdGhpcy5sZW5ndGgpICogdGhpcy53aWR0aCAtIDcsXHJcbiAgICAgICAgdGhpcy55VGlsZSAqIHRoaXMuaGVpZ2h0LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIGdsaWRlKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IENvbnN0cy5QaHlzaWNzU3BlZWQ7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcclxuICAgICAgdGhpcy54ICs9IENvbnN0cy5QaHlzaWNzU3BlZWQgKiB0aGlzLmRpcmVjdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9Eb3duKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IENvbnN0cy5QaHlzaWNzU3BlZWQ7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcclxuICAgICAgdGhpcy55ICs9IENvbnN0cy5QaHlzaWNzU3BlZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMuZ3Jhdml0eSgpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1c2goZGlyKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHR5cGVvZiBkaXIgPT09ICd1bmRlZmluZWQnID8gdGhpcy5kaXJlY3Rpb24gOiBkaXI7XHJcbiAgICBpZiAoIXRoaXMuY29sbGlzaW9uKCkgJiYgIXRoaXMuZ3Jhdml0eSgpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VNb3ZpbmcsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0ZyZWV6ZSgpIHtcclxuICAgIGlmIChUaWxlLmlzRnJlZXphYmxlKHRoaXMuY29ybmVycy5sKSkge1xyXG4gICAgICB0aGlzLmZyb3plbi5sZWZ0ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZnJvemVuLmxlZnQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChUaWxlLmlzRnJlZXphYmxlKHRoaXMuY29ybmVycy5yKSkge1xyXG4gICAgICB0aGlzLmZyb3plbi5yaWdodCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZyb3plbi5yaWdodCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tVbmZyZWV6ZUxlZnQoKSB7XHJcbiAgICBpZiAodGhpcy5mcm96ZW4ubGVmdCAmJiAhVGlsZS5pc0ZyZWV6YWJsZSh0aGlzLmNvcm5lcnMubCkpIHtcclxuICAgICAgdGhpcy5mcm96ZW4ubGVmdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tVbmZyZWV6ZVJpZ2h0KCkge1xyXG4gICAgaWYgKHRoaXMuZnJvemVuLnJpZ2h0ICYmICFUaWxlLmlzRnJlZXphYmxlKHRoaXMuY29ybmVycy5yKSkge1xyXG4gICAgICB0aGlzLmZyb3plbi5yaWdodCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIEphciBleHRlbmRzIEFuaW1TcHJpdGUge1xuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSkge1xuICAgIHN1cGVyKENvbnN0cy5PYmplY3RKYXIsIGVuZ2luZSwgJ2ltZ19qYXInLCB0eCwgdHksIENvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgsIDAsIDAsIDAsIDMsIHRydWUpO1xuICAgIHRoaXMuYW5pbURlbGF5ID0gQ29uc3RzLkFuaW1EZWZhdWx0RGVsYXkgKiAyO1xuICAgIHRoaXMub25GaXJlID0gZmFsc2U7XG4gICAgdGhpcy5hbmltUm93ID0gMDtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgaWYgKCF0aGlzLm1vdmluZykge1xuICAgICAgdGhpcy5jb2xsaXNpb25zKCk7XG4gICAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlRG93bjpcbiAgICAgICAgdGhpcy5kb0Rvd24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29sbGlzaW9ucygpIHtcbiAgICBpZiAoIXRoaXMub25GaXJlICYmIHRoaXMuY29ybmVycy51ID09PSBDb25zdHMuT2JqZWN0RmlyZSkge1xuICAgICAgdGhpcy50dXJuT25GaXJlKCk7XG4gICAgICB0aGlzLmVuZ2luZS5yZW1vdmVGaXJlKHRoaXMueFRpbGUsIHRoaXMueVRpbGUgLSAxKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub25GaXJlICYmIHRoaXMuY29ybmVycy51ID09PSBDb25zdHMuT2JqZWN0SWNlKSB7XG4gICAgICB0aGlzLm1lbHRJY2UoKTtcbiAgICB9XG4gIH1cblxuICBncmF2aXR5KCkge1xuICAgIGlmICghdGhpcy5jb3JuZXJzLmQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVEb3duLCB0cnVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkb0Rvd24oKSB7XG4gICAgdGhpcy5jb3VudGVyICs9IENvbnN0cy5QaHlzaWNzU3BlZWQ7XG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XG4gICAgICB0aGlzLnkgKz0gQ29uc3RzLlBoeXNpY3NTcGVlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdHVybk9uRmlyZSgpIHtcbiAgICB0aGlzLmFuaW1Sb3cgPSAxO1xuICAgIHRoaXMub25GaXJlID0gdHJ1ZTtcbiAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdmaXJlLW9mZicpO1xuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlIC0gMSwgQ29uc3RzLkNvbG9yT3JhbmdlLCAzMCk7XG4gIH1cblxuICBtZWx0SWNlKCkge1xuICAgIHRoaXMuZW5naW5lLnJlbW92ZUljZUJsb2NrKHRoaXMueFRpbGUsIHRoaXMueVRpbGUgLSAxKTtcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSAtIDEsIENvbnN0cy5Db2xvck9yYW5nZSwgMjApO1xuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlIC0gMSwgQ29uc3RzLkNvbG9yQmx1ZSwgMTApO1xuICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ZpcmUtb2ZmJyk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHN1cGVyLmRyYXcoKTtcbiAgICB0aGlzLmRyYXdGcm9zdCgpO1xuICB9XG59XG4iLCIvKipcbiAqIEtleWJvYXJkIHByZXNzIGVuZ2luZVxuICovXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgdGhpcy5kb3duID0gZmFsc2U7XG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuYWN0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5lc2NhcGUgPSBmYWxzZTtcbiAgICB0aGlzLm1LZXkgPSBmYWxzZTtcbiAgICB0aGlzLnNLZXkgPSBmYWxzZTtcbiAgICB0aGlzLmtleWRvd24gPSB0aGlzLmtleWRvd25fLmJpbmQodGhpcyk7XG4gICAgdGhpcy5rZXl1cCA9IHRoaXMua2V5dXBfLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbnRybyA9IHRydWU7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5ZG93biwgZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5dXAsIGZhbHNlKTtcblxuICAgIC8vIENhbnZhcyBjbGljayB0byBzdGFydFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmludHJvKSB7XG4gICAgICAgICAgdGhpcy5lbnRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnRybyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTW9iaWxlIGNvbnRyb2xzIC0gYmluZCB3aXRoIG51bGwgY2hlY2tzIGZvciBjb21wYXRpYmlsaXR5XG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fYWN0aW9uJywgJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgdGhpcy5kb3duID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWN0aW9uID0gdHJ1ZTtcbiAgICAgIHRoaXMubGVmdCA9IGZhbHNlO1xuICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuYmluZE1vYmlsZUJ1dHRvbignYnRuX2FjdGlvbicsICdwb2ludGVydXAnLCAoKSA9PiB7XG4gICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuYWN0aW9uID0gZmFsc2U7XG4gICAgfSk7XG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fYWN0aW9uJywgJ3BvaW50ZXJsZWF2ZScsICgpID0+IHtcbiAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5hY3Rpb24gPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIHRoaXMuYmluZE1vYmlsZUJ1dHRvbignYnRuX2xlZnQnLCAncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICB0aGlzLmxlZnQgPSB0cnVlO1xuICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHRoaXMuYmluZE1vYmlsZUJ1dHRvbignYnRuX2xlZnQnLCAncG9pbnRlcnVwJywgKCkgPT4gKHRoaXMubGVmdCA9IGZhbHNlKSk7XG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fbGVmdCcsICdwb2ludGVybGVhdmUnLCAoKSA9PiAodGhpcy5sZWZ0ID0gZmFsc2UpKTtcblxuICAgIHRoaXMuYmluZE1vYmlsZUJ1dHRvbignYnRuX3JpZ2h0JywgJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgdGhpcy5yaWdodCA9IHRydWU7XG4gICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLmJpbmRNb2JpbGVCdXR0b24oJ2J0bl9yaWdodCcsICdwb2ludGVydXAnLCAoKSA9PiAodGhpcy5yaWdodCA9IGZhbHNlKSk7XG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fcmlnaHQnLCAncG9pbnRlcmxlYXZlJywgKCkgPT4gKHRoaXMucmlnaHQgPSBmYWxzZSkpO1xuXG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fdXAnLCAncG9pbnRlcmRvd24nLCAoKSA9PiAodGhpcy51cCA9IHRydWUpKTtcbiAgICB0aGlzLmJpbmRNb2JpbGVCdXR0b24oJ2J0bl91cCcsICdwb2ludGVydXAnLCAoKSA9PiAodGhpcy51cCA9IGZhbHNlKSk7XG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fdXAnLCAncG9pbnRlcmxlYXZlJywgKCkgPT4gKHRoaXMudXAgPSBmYWxzZSkpO1xuXG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fZG93bicsICdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgIHRoaXMuZG93biA9IHRydWU7XG4gICAgICB0aGlzLmFjdGlvbiA9IHRydWU7XG4gICAgfSk7XG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fZG93bicsICdwb2ludGVydXAnLCAoKSA9PiB7XG4gICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuYWN0aW9uID0gZmFsc2U7XG4gICAgfSk7XG4gICAgdGhpcy5iaW5kTW9iaWxlQnV0dG9uKCdidG5fZG93bicsICdwb2ludGVybGVhdmUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMuYWN0aW9uID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICB0aGlzLmJpbmRNb2JpbGVCdXR0b24oJ2J0bl9zZWxlY3QnLCAnY2xpY2snLCAoKSA9PiAodGhpcy5lbnRlciA9IHRydWUpKTtcbiAgfVxuXG4gIGJpbmRNb2JpbGVCdXR0b24oaWQsIGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBrZXlkb3duXyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIHRoaXMubGVmdCA9IHRydWU7XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgdGhpcy51cCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIHRoaXMucmlnaHQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgY2FzZSAnICc6XG4gICAgICAgIHRoaXMuYWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kb3duID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIHRoaXMuZW50ZXIgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICB0aGlzLmVzY2FwZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbSc6XG4gICAgICBjYXNlICdNJzpcbiAgICAgICAgdGhpcy5tS2V5ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzJzpcbiAgICAgIGNhc2UgJ1MnOlxuICAgICAgICB0aGlzLnNLZXkgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBrZXl1cF8oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgIGNhc2UgJyAnOlxuICAgICAgICB0aGlzLmFjdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIHRoaXMuZW50ZXIgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBsZXZlbHMgPSBbXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiAwLFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDEzLCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNywgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNywgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNywgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOCwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDUsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogMTEsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMSxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiA1LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA2LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMiwgeTogNiwgdjogNCB9LFxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNCwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTUsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEzLCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMywgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTMsIHk6IDcsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMixcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxNiwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEzLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMywgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDcsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMCxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxMCwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNSwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA5LCB2OiA1IH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMiwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEyLCB5OiA4LCB2OiAzIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxNCwgeTogNywgdjogMiB9LFxuICAgICAgeyBpZDogMywgeDogOCwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDYsIHk6IDgsIHY6IDMgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDcsIHY6IDIgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA1LCB5OiA4LCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDYsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogMTMsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEyLCB5OiAxMSwgdjogMyB9LFxuICAgICAgeyBpZDogMywgeDogMTIsIHk6IDEwLCB2OiAzIH0sXG4gICAgICB7IGlkOiAzLCB4OiA5LCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA2LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNSwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDUsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogNSxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxNSwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNSwgeTogNSwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDcsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNywgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEyLCB5OiA3LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgeDogNCwgeTogOSwgdjogMTMsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA2LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNCwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE1LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTYsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxNiwgeTogNSwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXG4gICAgICB7IGlkOiAzLCB4OiA0LCB5OiA2LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMSxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxNCwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogMTIsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiAxMiwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDYsIHY6IDUgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEyLCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA2LCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDEsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogMTAsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOSwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEzLCB5OiAxMSwgdjogMiB9LFxuICAgICAgeyBpZDogMywgeDogNywgeTogMTAsIHY6IDcgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEzLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogOCwgeTogNiwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA2LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDcsIHk6IDUsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEwLCB5OiA2LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMCwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDksIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMTAsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogNSwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNCwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNSwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNiwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA0LCB5OiA2LCB2OiAxMCB9LFxuICAgICAgeyBpZDogMywgeDogNywgeTogNSwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA2LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDUsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE1LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNiwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogOCwgeTogNCwgdjogMiB9LFxuICAgICAgeyBpZDogMywgeDogMTMsIHk6IDQsIHY6IDIgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiA0LCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDcsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogMTAsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDEyLCB5OiA2LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA0LCB5OiA0LCB2OiAyIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxNiwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogMTYsIHk6IDUsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDE1LCB5OiA0LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNiwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTMsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA0LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNSwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiA5LCB2OiAxMSB9LFxuICAgICAgeyBpZDogNiwgeDogNiwgeTogMTAsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMixcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxNCwgeTogNCwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogMTIsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiA4LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDksIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDEyLCB5OiAxMSwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA1LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDQsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDUsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE2LCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTUsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE0LCB5OiAxMSwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA2LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDEwLCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiA1LCB4OiA4LCB5OiAxMiwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNywgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiAxMSwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogOSwgeTogNSwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiAxLFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDEyLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMiwgeTogMTEsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiAxMCwgdjogNSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDksIHk6IDksIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA4LCB2OiA1LCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgeDogOCwgeTogNiwgdjogNSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDgsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMiwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogOCwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDUsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogNyxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiAzLCB4OiAxMywgeTogOCwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogOCwgdjogMSwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXG4gICAgICB7IGlkOiA0LCB4OiAxMiwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDcsIHg6IDksIHk6IDYsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogNixcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiA2LCB5OiA1LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNSwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogOSwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNSwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogOCwgeTogOCwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiAxLFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDEwLCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA3LCB5OiA4LCB2OiAzLCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiA5LCB5OiA5LCB2OiAxLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogNiwgeDogMTIsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDcsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiA4LCB5OiA2LCB2OiAzLCBmbDogZmFsc2UsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgeDogMTEsIHk6IDYsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IGZhbHNlIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDIsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogOCwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMSwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA5LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDYsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDgsIHk6IDUsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxuICAgICAgeyBpZDogMywgeDogMTAsIHk6IDUsIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxuICAgICAgeyBpZDogMywgeDogMTIsIHk6IDUsIHY6IDQsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDEzLCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogNywgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNSwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDUsIHg6IDEwLCB5OiAxMSwgdjogZmFsc2UgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMCxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxMiwgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogOSwgeTogNywgdjogNCwgZmw6IHRydWUsIGZyOiB0cnVlIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA2LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTEsIHk6IDYsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogMCxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxMCwgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogNSwgeDogOCwgeTogMTEsIHY6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDUsIHg6IDcsIHk6IDgsIHY6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDUsIHg6IDEwLCB5OiA5LCB2OiB0cnVlIH0sXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDgsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogNCxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxMCwgeTogOCwgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogOCwgeTogNywgdjogMSwgZmw6IGZhbHNlLCBmcjogdHJ1ZSB9LFxuICAgICAgeyBpZDogMywgeDogNiwgeTogOCwgdjogMSwgZmw6IHRydWUsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogMywgeDogNiwgeTogNiwgdjogMSwgZmw6IHRydWUsIGZyOiBmYWxzZSB9LFxuICAgICAgeyBpZDogNiwgeDogOCwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMCwgdjogMSB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtYXA6IFtcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgICBdLFxuICAgIHRoZW1lOiA2LFxuICAgIHNwcml0ZXM6IFtcbiAgICAgIHsgaWQ6IDcsIHg6IDExLCB5OiAxMiwgdjogMSB9LFxuICAgICAgeyBpZDogNSwgeDogMTIsIHk6IDksIHY6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDE2LCB5OiAxMiwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogMTMsIHk6IDMsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogOCxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxNCwgeTogNSwgdjogMSB9LFxuICAgICAgeyBpZDogNSwgeDogMTMsIHk6IDgsIHY6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDEyLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEzLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogNywgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTYsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiA2LCB2OiA0LCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMSwgeTogNSwgdjogMSwgZmw6IGZhbHNlLCBmcjogZmFsc2UgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogOCxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiA1LCB5OiAyLCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiA2LCB5OiAzLCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiA0LCB5OiAzLCB2OiAxIH0sXG4gICAgICB7IGlkOiAzLCB4OiA1LCB5OiAzLCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDQsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDgsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDksIHk6IDYsIHY6IDEsIGZsOiB0cnVlLCBmcjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDcsIHk6IDYsIHY6IDEsIGZsOiBmYWxzZSwgZnI6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDYsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDQsIHg6IDQsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDUsIHk6IDksIHY6IDEsIGZsOiB0cnVlLCBmcjogdHJ1ZSB9LFxuICAgICAgeyBpZDogNiwgeDogNiwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDEwLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA3LCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiAxMiwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogMTAsIHk6IDksIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiA5LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiAxMCwgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogMTQsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDE1LCB5OiA2LCB2OiAxLCBmbDogdHJ1ZSwgZnI6IGZhbHNlIH0sXG4gICAgICB7IGlkOiAzLCB4OiAxMywgeTogNiwgdjogMSwgZmw6IGZhbHNlLCBmcjogdHJ1ZSB9LFxuICAgICAgeyBpZDogNiwgeDogMTQsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDExLCB5OiA0LCB2OiAxIH0sXG4gICAgICB7IGlkOiA0LCB4OiAxMiwgeTogMywgdjogMSB9LFxuICAgICAgeyBpZDogNCwgeDogMTAsIHk6IDMsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDMsIHg6IDExLCB5OiAzLCB2OiAxLCBmbDogdHJ1ZSwgZnI6IHRydWUgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogOCxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxNSwgeTogMywgdjogMSB9LFxuICAgICAgeyBpZDogMywgeDogNiwgeTogNSwgdjogOCB9LFxuICAgICAgeyBpZDogMywgeDogMTMsIHk6IDQsIHY6IDQgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDUsIHk6IDYsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDYsIHk6IDcsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDcsIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEyLCB5OiA3LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMywgeTogNiwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTYsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxNiwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDQsIHk6IDExLCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMSwgeTogOSwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogNCwgeTogMTAsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA5LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiA4LCB5OiA5LCB2OiAxIH0sXG4gICAgICB7IGlkOiA2LCB4OiAxMCwgeTogMTEsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDksIHk6IDExLCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDYsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogMTYsIHk6IDExLCB2OiAxIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1hcDogW1xuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICAgIF0sXG4gICAgdGhlbWU6IDYsXG4gICAgc3ByaXRlczogW1xuICAgICAgeyBpZDogNywgeDogMTIsIHk6IDgsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDUsIHg6IDEwLCB5OiA5LCB2OiB0cnVlIH0sXG4gICAgICB7IGlkOiA4LCB4OiAxNiwgeTogOSwgdjogZmFsc2UgfSxcbiAgICAgIHsgaWQ6IDgsIHg6IDEwLCB5OiA1LCB2OiBmYWxzZSB9LFxuICAgICAgeyBpZDogNiwgeDogNiwgeTogMTAsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbWFwOiBbXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gICAgXSxcbiAgICB0aGVtZTogOSxcbiAgICBzcHJpdGVzOiBbXG4gICAgICB7IGlkOiA3LCB4OiAxMiwgeTogMTIsIHY6IDEgfSxcbiAgICAgIHsgaWQ6IDYsIHg6IDEwLCB5OiAyLCB2OiAxIH0sXG4gICAgICB7IGlkOiA1LCB4OiA2LCB5OiAxMiwgdjogMSB9LFxuICAgICAgeyBpZDogNiwgeDogMTAsIHk6IDYsIHY6IDEgfSxcbiAgICBdLFxuICB9LFxuXTtcbiIsImltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQW5pbVNwcml0ZSB9IGZyb20gJy4vYW5pbXNwcml0ZSc7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXRhbCBleHRlbmRzIEFuaW1TcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5LCBsZW5ndGgpIHtcclxuICAgIHN1cGVyKENvbnN0cy5PYmplY3RNZXRhbCwgZW5naW5lLCAnaW1nX21ldGFsJywgdHgsIHR5LCBDb25zdHMuVGlsZVdpZHRoLCBDb25zdHMuVGlsZVdpZHRoLCAwLCAwLCAwLCAxLCB0cnVlKTtcclxuICAgIHRoaXMueFRpbGUgPSB0eDtcclxuICAgIHRoaXMueVRpbGUgPSB0eTtcclxuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgdGhpcy5hbmltRGVsYXkgPSA5O1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjYW5HbGlkZShkaXIpIHtcclxuICAgIGlmIChkaXIgPT09IENvbnN0cy5EaXJMZWZ0ICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMubCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGRpciA9PT0gQ29uc3RzLkRpclJpZ2h0ICYmIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMucikpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBmcm96ZW5Ub0ljZSgpIHtcclxuICAgIGNvbnN0IHJpZ2h0U3ByaXRlID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSArIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgY29uc3QgbGVmdFNwcml0ZSA9IHRoaXMuZW5naW5lLnNwcml0ZUF0KHRoaXMueFRpbGUgLSAxLCB0aGlzLnlUaWxlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICF0aGlzLmZhbGxpbmcgJiZcclxuICAgICAgKChyaWdodFNwcml0ZSAmJiByaWdodFNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEljZSAmJiByaWdodFNwcml0ZS5mcm96ZW4ubGVmdCkgfHxcclxuICAgICAgICAobGVmdFNwcml0ZSAmJiBsZWZ0U3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SWNlICYmIGxlZnRTcHJpdGUuZnJvemVuLnJpZ2h0KSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBncmF2aXR5KCkge1xyXG4gICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmICF0aGlzLmZyb3plblRvSWNlKCkpIHtcclxuICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZURvd24sIHRydWUpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZhbGxpbmcpIHtcclxuICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1jb2xsaXNpb24nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbGxpc2lvbigpIHtcclxuICAgIGlmICghdGhpcy5jYW5HbGlkZSh0aGlzLmRpcmVjdGlvbikpIHtcclxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtY29sbGlzaW9uJyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdyYXZpdHkoKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XHJcbiAgICAgIHRoaXMuZ3Jhdml0eSgpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VNb3Zpbmc6XHJcbiAgICAgICAgdGhpcy5nbGlkZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlQ2hlY2s6XHJcbiAgICAgICAgdGhpcy5wdXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgIHRoaXMuZG9Eb3duKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgc3VwZXIuZHJhdygpO1xyXG4gICAgdGhpcy5kcmF3RnJvc3QoKTtcclxuICB9XHJcblxyXG4gIGdsaWRlKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IENvbnN0cy5QaHlzaWNzU3BlZWQ7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcclxuICAgICAgdGhpcy54ICs9IENvbnN0cy5QaHlzaWNzU3BlZWQgKiB0aGlzLmRpcmVjdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9Eb3duKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IENvbnN0cy5QaHlzaWNzU3BlZWQ7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5UaWxlV2lkdGgpIHtcclxuICAgICAgdGhpcy55ICs9IENvbnN0cy5QaHlzaWNzU3BlZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1c2goZGlyKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHR5cGVvZiBkaXIgPT09ICd1bmRlZmluZWQnID8gdGhpcy5kaXJlY3Rpb24gOiBkaXI7XHJcbiAgICBpZiAoIXRoaXMuY29sbGlzaW9uKCkpIHtcclxuICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTW92aW5nLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xyXG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQW5pbVNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IoZW5naW5lLCB0eCwgdHkpIHtcclxuICAgIHN1cGVyKENvbnN0cy5PYmplY3RQbGF5ZXIsIGVuZ2luZSwgJ2ltZ19kb25hJywgdHgsIHR5LCA0OCwgNjQsIC0xMCwgLTMyLCAyLCAyLCBmYWxzZSk7XHJcbiAgICB0aGlzLnNwZWVkID0gQ29uc3RzLlBsYXllclNwZWVkO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xyXG4gICAgdGhpcy5zdGF0ZSA9IDA7IC8vc3RhbmRpbmcgdG9wIHJpZ2h0IGRvd24gbGVmdFxyXG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMudGlsZVdpZHRoID0gQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgIHRoaXMudGlsZUhlaWdodCA9IENvbnN0cy5UaWxlV2lkdGg7XHJcbiAgICB0aGlzLmFuaW1EZWxheSA9IENvbnN0cy5QbGF5ZXJBbmltRGVsYXk7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5mYWxsQ291bnRlciA9IDA7XHJcbiAgICB0aGlzLmlubmVyQ291bnRlciA9IDA7XHJcbiAgICB0aGlzLnN0YW5kQ291bnRlciA9IDA7XHJcbiAgICB0aGlzLmludHJvKCk7XHJcbiAgfVxyXG5cclxuICBsZWZ0KCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vaWYgc3RhbmRpbmcgdGhlbiB0dXJuXHJcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT09IENvbnN0cy5EaXJMZWZ0KSB7XHJcbiAgICAgIC8vaXMgbm90IHVuZGVyIGEgYnJpY2tcclxuICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltVHVyblN0YXJ0LCBDb25zdHMuQW5pbVR1cm5FbmQsIGZhbHNlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVR1cm4sIHRydWUpO1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IENvbnN0cy5EaXJMZWZ0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9ydW5uaW5nXHJcbiAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5sKSAmJiBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgLy9ub3QgdW5kZXIgYSBicmlja1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51bCkpIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVJ1blN0YXJ0LCBDb25zdHMuQW5pbVJ1bkVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIENvbnN0cy5BbmltQ3JvdWNoRW5kLCB0cnVlLCBDb25zdHMuQW5pbUxlZnRSb3csIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlTGVmdCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy9oaXQgYW4gaWNlXHJcbiAgICAgIGlmIChcclxuICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmXHJcbiAgICAgICAgKHRoaXMuY29ybmVycy5sID09PSBDb25zdHMuT2JqZWN0SWNlIHx8IHRoaXMuY29ybmVycy5sID09PSBDb25zdHMuT2JqZWN0TWV0YWwpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMucHVzaCgpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vY2xpbWJcclxuICAgICAgaWYgKFxyXG4gICAgICAgIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMubCkgJiZcclxuICAgICAgICBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpICYmXHJcbiAgICAgICAgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudSkgJiZcclxuICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51bCkgJiZcclxuICAgICAgICAhdGhpcy5tb3ZpbmdcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LCBDb25zdHMuQW5pbVB1c2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVVwLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmlnaHQoKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSBDb25zdHMuRGlyUmlnaHQpIHtcclxuICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltVHVyblN0YXJ0LCBDb25zdHMuQW5pbVR1cm5FbmQsIGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3csIDQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LCBDb25zdHMuQW5pbUNyb3VjaFN0YXJ0LCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVR1cm4sIHRydWUpO1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IENvbnN0cy5EaXJSaWdodDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5yKSAmJiBUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpKSB7XHJcbiAgICAgICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpICYmICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnVyKSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUnVuU3RhcnQsIENvbnN0cy5BbmltUnVuRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCAyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsIENvbnN0cy5BbmltQ3JvdWNoRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVJpZ2h0LCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSAmJlxyXG4gICAgICAgICh0aGlzLmNvcm5lcnMuciA9PT0gQ29uc3RzLk9iamVjdEljZSB8fCB0aGlzLmNvcm5lcnMuciA9PT0gQ29uc3RzLk9iamVjdE1ldGFsKVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnB1c2goKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5yKSAmJlxyXG4gICAgICAgIFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZCkgJiZcclxuICAgICAgICAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSAmJlxyXG4gICAgICAgICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnVyKSAmJlxyXG4gICAgICAgICF0aGlzLm1vdmluZ1xyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1QdXNoU3RhcnQsIENvbnN0cy5BbmltUHVzaFN0YXJ0LCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVVwLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnVybigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSBDb25zdHMuTW92ZVJpcCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5T25jZSgnZGFuZ2VyJyk7XHJcbiAgICB0aGlzLmNvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVJpcCwgdHJ1ZSk7XHJcbiAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1SaXBTdGFydCwgQ29uc3RzLkFuaW1SaXBFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3cpO1xyXG4gIH1cclxuXHJcbiAgaW50cm8oKSB7XHJcbiAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1CaWdGYWxsU3RhcnQsIENvbnN0cy5BbmltQmlnRmFsbEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlTGV2ZWxFbnRlciwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBvdXRybygpIHtcclxuICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUZhbGxTdGFydCwgQ29uc3RzLkFuaW1CaWdGYWxsRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCA0KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVMZXZlbEV4aXQsIHRydWUpO1xyXG4gICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gIH1cclxuXHJcbiAgZG9SaXAoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgJSBDb25zdHMuU3BhcmtJbnRlcnZhbCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yUmVkLCA1LCAxLjIpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yQmx1ZSwgNSwgMC43KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLlJpcER1cmF0aW9uKSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JSZWQsIDE1LCAyLjApO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yQmx1ZSwgMTAsIDMuMCk7XHJcbiAgICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICAgIHRoaXMuZW5naW5lLmtleWJvYXJkLmVudGVyID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdyYXZpdHkoKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvcm5lcnMuZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc29sZS5lcnJvcigndW5kZWZpbmVkIGNvcm5lcicpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmQpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVEb3duLCB0cnVlKTtcclxuICAgICAgaWYgKHRoaXMuZmFsbENvdW50ZXIgPj0gMSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXlPbmNlKCdmYWxsaW5nJyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltQmlnRmFsbFN0YXJ0LCBDb25zdHMuQW5pbUJpZ0ZhbGxFbmQsIHRydWUsIENvbnN0cy5BbmltUmlnaHRSb3csIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUJpZ0ZhbGxTdGFydCwgQ29uc3RzLkFuaW1CaWdGYWxsRW5kLCB0cnVlLCBDb25zdHMuQW5pbVJpZ2h0Um93LCAzKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQuc3RvcCgnZmFsbGluZycpO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQ29uc3RzLk1vdmVEb3duKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnZmFsbCcpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JHcmVlbiwgMTAsIDAuNzUpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JSZWQsIDUsIDEuMjUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZmFsbENvdW50ZXIgPSAwO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgICAgaWYgKHRoaXMuY29ybmVycy5kID09PSBDb25zdHMuT2JqZWN0SmFyKSB7XHJcbiAgICAgICAgY29uc3QgamFyID0gdGhpcy5lbmdpbmUuc3ByaXRlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgICAgIGlmIChqYXIgJiYgamFyLm9uRmlyZSkge1xyXG4gICAgICAgICAgdGhpcy5idXJuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpY2VPclRlbGVwb3J0KCkge1xyXG4gICAgaWYgKHRoaXMubW92aW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvcm5lcnMuZCA9PT0gQ29uc3RzLk9iamVjdFRlbGVwb3J0KSB7XHJcbiAgICAgIHRoaXMudGVsZXBvcnQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaWNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ZWxlcG9ydCgpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldEFuaW0oQ29uc3RzLkFuaW1GYWxsU3RhcnQsIENvbnN0cy5BbmltQmlnRmFsbEVuZCwgdHJ1ZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlVGVsZXBvcnRPdXQsIHRydWUpO1xyXG4gICAgdGhpcy5pbm5lckNvdW50ZXIgPSAwO1xyXG4gICAgdGhpcy5kb1RlbGVwb3J0SW4oKTtcclxuICB9XHJcblxyXG4gIGljZSgpIHtcclxuICAgIGlmICh0aGlzLm1vdmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kKSkge1xyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCkge1xyXG4gICAgICAgIGlmICghVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy5kcikgJiYgdGhpcy5jb3JuZXJzLmRyICE9PSBDb25zdHMuT2JqZWN0RmlyZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsIENvbnN0cy5BbmltSWNlRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1SaWdodFJvdywgNCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTWFrZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvcm5lcnMuZHIgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LCBDb25zdHMuQW5pbUljZUVuZCwgZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZVJlbW92ZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LCBDb25zdHMuQW5pbUljZUVuZCwgZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3csIDQpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZUljZUZhaWwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMuZGwpICYmIHRoaXMuY29ybmVycy5kbCAhPT0gQ29uc3RzLk9iamVjdEZpcmUpIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LCBDb25zdHMuQW5pbUljZUVuZCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlTWFrZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvcm5lcnMuZGwgPT09IENvbnN0cy5PYmplY3RJY2UpIHtcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbUljZVN0YXJ0LCBDb25zdHMuQW5pbUljZUVuZCwgZmFsc2UsIENvbnN0cy5BbmltTGVmdFJvdywgNCk7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlSWNlUmVtb3ZlLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltSWNlU3RhcnQsIENvbnN0cy5BbmltSWNlRW5kLCBmYWxzZSwgQ29uc3RzLkFuaW1MZWZ0Um93LCA0KTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVJY2VGYWlsLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGp1bXAoKSB7XHJcbiAgICBpZiAodGhpcy5tb3ZpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQpIHtcclxuICAgICAgaWYgKFRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMucikgJiYgIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudXIpICYmICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltKENvbnN0cy5BbmltUHVzaFN0YXJ0LCBDb25zdHMuQW5pbVB1c2hTdGFydCwgZmFsc2UsIENvbnN0cy5BbmltUmlnaHRSb3cpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVVcCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLmwpICYmICFUaWxlLmlzU29saWQodGhpcy5jb3JuZXJzLnVsKSAmJiAhVGlsZS5pc1NvbGlkKHRoaXMuY29ybmVycy51KSkge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShDb25zdHMuQW5pbVB1c2hTdGFydCwgQ29uc3RzLkFuaW1QdXNoU3RhcnQsIGZhbHNlLCBDb25zdHMuQW5pbUxlZnRSb3cpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVVcCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvUnVuKCkge1xyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyIDw9IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZCAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1R1cm4oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9PdXRybygpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciAlIENvbnN0cy5TcGFya0ludGVydmFsID09PSAwKSB7XHJcbiAgICAgIHRoaXMuaW5uZXJDb3VudGVyICs9IDE7XHJcbiAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JHcmVlbiwgMjUsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSAzKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvclJlZCwgMzAsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA9PT0gNSkge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JCbHVlLCAzNSwgMS41KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgJSAyID09PSAwICYmIHRoaXMuaW5uZXJDb3VudGVyIDwgNikge1xyXG4gICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2NsaW1iJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlubmVyQ291bnRlciAlIDIgPT09IDEpIHtcclxuICAgICAgdGhpcy55ICs9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnkgLT0gMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlubmVyQ291bnRlciA+PSA2KSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ3N0YXRlLWxlYXZlJyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5uZXh0TGV2ZWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvSW50cm8oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDgpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckdyZWVuLCAyMCwgMi41KTtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvclJlZCwgMzUsIDEpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yQmx1ZSwgMjAsIDEuNSk7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ3N0YWdlLWVudGVyJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID49IENvbnN0cy5JbnRyb0R1cmF0aW9uKSB7XHJcbiAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnN0b3AoJ2ZhbGxpbmcnKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb0dyYXZpdHkoKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPD0gQ29uc3RzLkFuaW1GcmFtZUNvdW50KSB7XHJcbiAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5ncmF2aXR5KCk7XHJcbiAgICAgIHRoaXMuZmFsbENvdW50ZXIrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvU3RhbmQoKSB7XHJcbiAgICBpZiAoIVRpbGUuaXNTb2xpZCh0aGlzLmNvcm5lcnMudSkpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhbmRDb3VudGVyKysgPiBDb25zdHMuU2xlZXBUaHJlc2hvbGQpIHtcclxuICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICBDb25zdHMuQW5pbVNsZWVwU3RhcnQsXHJcbiAgICAgICAgICBDb25zdHMuQW5pbVNsZWVwRW5kLFxyXG4gICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgIHRoaXMuZGlyZWN0aW9uICE9PSAxID8gQ29uc3RzLkFuaW1MZWZ0Um93IDogQ29uc3RzLkFuaW1SaWdodFJvdyxcclxuICAgICAgICAgIDQ4LFxyXG4gICAgICAgICAgdHJ1ZSxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgIENvbnN0cy5BbmltU3RhbmRTdGFydCxcclxuICAgICAgICAgIENvbnN0cy5BbmltU3RhbmRFbmQsXHJcbiAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgdGhpcy5kaXJlY3Rpb24gIT09IDEgPyBDb25zdHMuQW5pbUxlZnRSb3cgOiBDb25zdHMuQW5pbVJpZ2h0Um93LFxyXG4gICAgICAgICAgOCxcclxuICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgIENvbnN0cy5BbmltQ3JvdWNoU3RhcnQsXHJcbiAgICAgICAgQ29uc3RzLkFuaW1Dcm91Y2hTdGFydCxcclxuICAgICAgICBmYWxzZSxcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiAhPT0gMSA/IENvbnN0cy5BbmltTGVmdFJvdyA6IENvbnN0cy5BbmltUmlnaHRSb3csXHJcbiAgICAgICAgOCxcclxuICAgICAgICB0cnVlLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZG9VcCgpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA8PSAxOCkge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuY291bnRlcikge1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2NsaW1iJyk7XHJcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yR3JlZW4sIDEwLCAwLjc1KTtcclxuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JSZWQsIDUsIDEuMjUpO1xyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbVB1c2hFbmQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltUHVzaEVuZCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgIHRoaXMuc2V0QW5pbShcclxuICAgICAgICAgICAgQ29uc3RzLkFuaW1KdW1wU3RhcnQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltSnVtcFN0YXJ0LFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPT09IENvbnN0cy5EaXJSaWdodCA/IENvbnN0cy5BbmltUmlnaHRSb3cgOiBDb25zdHMuQW5pbUxlZnRSb3csXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy54ICs9IDggKiB0aGlzLmRpcmVjdGlvbjtcclxuICAgICAgICAgIHRoaXMueSAtPSA4O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgdGhpcy5zZXRBbmltKFxyXG4gICAgICAgICAgICBDb25zdHMuQW5pbUp1bXBFbmQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltSnVtcEVuZCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oMiwgMiwgZmFsc2UsIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93KTtcclxuICAgICAgICAgIHRoaXMueCArPSA4ICogdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICB0aGlzLnkgLT0gODtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTg6XHJcbiAgICAgICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltU3RhbmQsXHJcbiAgICAgICAgICAgIENvbnN0cy5BbmltU3RhbmQsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9PT0gQ29uc3RzLkRpclJpZ2h0ID8gQ29uc3RzLkFuaW1SaWdodFJvdyA6IENvbnN0cy5BbmltTGVmdFJvdyxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICB0aGlzLnggKz0gOCAqIHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgdGhpcy55IC09IDg7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYWtlSWNlKCkge1xyXG4gICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnbmV3LWljZScpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkSWNlQmxvY2sodGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlICsgMSwgQ29uc3RzLkNvbG9yQmx1ZSwgNSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJY2VCbG9jaygpIHtcclxuICAgIHRoaXMuZW5naW5lLnNvdW5kLnBsYXkoJ2ljZS1yZW1vdmUnKTtcclxuICAgIHRoaXMuZW5naW5lLnJlbW92ZUljZUJsb2NrKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSArIDEsIENvbnN0cy5Db2xvckJsdWUsIDUpO1xyXG4gIH1cclxuXHJcbiAgcHVzaCgpIHtcclxuICAgIGNvbnN0IGljZSA9IHRoaXMuZW5naW5lLmljZUF0KHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSk7XHJcbiAgICBpZiAoaWNlICYmIGljZS5jYW5HbGlkZSh0aGlzLmRpcmVjdGlvbikpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUgKyB0aGlzLmRpcmVjdGlvbiwgdGhpcy55VGlsZSwgQ29uc3RzLkNvbG9yV2hpdGUsIDMpO1xyXG4gICAgICB0aGlzLmVuZ2luZS5hZGRTcGFya3ModGhpcy54VGlsZSArIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JCbHVlLCAzLCAxLjUpO1xyXG4gICAgICB0aGlzLnNldEFuaW0oXHJcbiAgICAgICAgQ29uc3RzLkFuaW1QdXNoU3RhcnQsXHJcbiAgICAgICAgQ29uc3RzLkFuaW1QdXNoRW5kLFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID09PSBDb25zdHMuRGlyUmlnaHQgPyBDb25zdHMuQW5pbVJpZ2h0Um93IDogQ29uc3RzLkFuaW1MZWZ0Um93LFxyXG4gICAgICAgIDMsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVQdXNoLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvUHVzaCgpIHtcclxuICAgIHRoaXMuY291bnRlciArPSAyO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA+IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICBjb25zdCBpY2UgPSB0aGlzLmVuZ2luZS5pY2VBdCh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUpO1xyXG4gICAgICBpZiAoaWNlKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLXB1c2gnKTtcclxuICAgICAgICBpY2UucHVzaCh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb0ljZSgpIHtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDgpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENvbnN0cy5Nb3ZlSWNlTWFrZSkge1xyXG4gICAgICAgIHRoaXMubWFrZUljZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlSWNlQmxvY2soKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jb3VudGVyICs9IDE7XHJcbiAgICBpZiAodGhpcy5jb3VudGVyID49IENvbnN0cy5BbmltRnJhbWVDb3VudCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRvRmFpbEljZSgpIHtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDgpIHtcclxuICAgICAgdGhpcy5lbmdpbmUuc291bmQucGxheSgnaWNlLWRpc2FibGVkJyk7XHJcbiAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlICsgdGhpcy5kaXJlY3Rpb24sIHRoaXMueVRpbGUgKyAxLCAnODgsNjYsNjYnKTtcclxuICAgIH1cclxuICAgIHRoaXMuY291bnRlciArPSAxO1xyXG4gICAgaWYgKHRoaXMuY291bnRlciA+PSBDb25zdHMuQW5pbUZyYW1lQ291bnQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1RlbGVwb3J0SW4oKSB7XHJcbiAgICB0aGlzLmNvdW50ZXIgKz0gMTtcclxuICAgIGlmICh0aGlzLmNvdW50ZXIgJSBDb25zdHMuU3BhcmtJbnRlcnZhbCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmlubmVyQ291bnRlciArPSAxO1xyXG4gICAgICBpZiAodGhpcy5pbm5lckNvdW50ZXIgPT09IDEpIHtcclxuICAgICAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdjbGltYicpO1xyXG4gICAgICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JHcmVlbiwgMTAsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID09PSAyKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3BhcmtzKHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5Db2xvckdyZWVuLCAxMCwgMS41KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW5uZXJDb3VudGVyID49IDIpIHtcclxuICAgICAgdGhpcy5kb1RlbGVwb3J0T3V0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkb1RlbGVwb3J0T3V0KCkge1xyXG4gICAgY29uc3QgdGVsZXBvcnQgPSB0aGlzLmVuZ2luZS5zcHJpdGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICBpZiAoIXRlbGVwb3J0IHx8ICF0ZWxlcG9ydC5saW5rKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVTdGFuZCwgZmFsc2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnggPSB0ZWxlcG9ydC5saW5rLng7XHJcbiAgICB0aGlzLnkgPSB0ZWxlcG9ydC5saW5rLnkgLSAzMjtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIHRoaXMuZW5naW5lLmFkZFNwYXJrcyh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlLCBDb25zdHMuQ29sb3JHcmVlbiwgMTUsIDEuNSk7XHJcbiAgICB0aGlzLmVuZ2luZS5zb3VuZC5wbGF5KCdpY2UtcmVtb3ZlJyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKENvbnN0cy5Nb3ZlU3RhbmQsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbGxpc2lvbnMoKSB7XHJcbiAgICBpZiAodGhpcy5lbmdpbmUuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUsIHRoaXMueVRpbGUsIENvbnN0cy5PYmplY3RQbGF5ZXIpID09PSBDb25zdHMuT2JqZWN0RmlyZSkge1xyXG4gICAgICB0aGlzLmJ1cm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdmUoKSB7XHJcbiAgICB0aGlzLmdyYXZpdHkoKTtcclxuICAgIHRoaXMuY29sbGlzaW9ucygpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IENvbnN0cy5Nb3ZlU3RhbmQpIHtcclxuICAgICAgdGhpcy5zdGFuZENvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IENvbnN0cy5Nb3ZlRG93bikge1xyXG4gICAgICB0aGlzLmZhbGxDb3VudGVyID0gMDtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlUmlnaHQ6XHJcbiAgICAgICAgdGhpcy5kb1J1bigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlTGVmdDpcclxuICAgICAgICB0aGlzLmRvUnVuKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxyXG4gICAgICAgIHRoaXMuZG9HcmF2aXR5KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVVcDpcclxuICAgICAgICB0aGlzLmRvVXAoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZVR1cm46XHJcbiAgICAgICAgdGhpcy5kb1R1cm4oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUljZU1ha2U6XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVJY2VSZW1vdmU6XHJcbiAgICAgICAgdGhpcy5kb0ljZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlSWNlRmFpbDpcclxuICAgICAgICB0aGlzLmRvRmFpbEljZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlU3RhbmQ6XHJcbiAgICAgICAgdGhpcy5kb1N0YW5kKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVQdXNoOlxyXG4gICAgICAgIHRoaXMuZG9QdXNoKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVSaXA6XHJcbiAgICAgICAgdGhpcy5kb1JpcCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlTGV2ZWxFeGl0OlxyXG4gICAgICAgIHRoaXMuZG9PdXRybygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbnN0cy5Nb3ZlVGVsZXBvcnRPdXQ6XHJcbiAgICAgICAgdGhpcy5kb1RlbGVwb3J0SW4oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb25zdHMuTW92ZUxldmVsRW50ZXI6XHJcbiAgICAgICAgdGhpcy5kb0ludHJvKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBSZXNvdXJjZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRlZmluaXRpb25zID0gW107XG4gICAgdGhpcy5yZXNvdXJjZXMgPSB7fTtcbiAgICB0aGlzLmxvYWRlZCA9IDA7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgaWYgKHRoaXMuY2FudmFzKSB7XG4gICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuICB9XG5cbiAgYWRkKHR5cGUsIG5hbWUsIHNyYykge1xuICAgIHRoaXMuZGVmaW5pdGlvbnMucHVzaCh7IHR5cGU6IHR5cGUsIG5hbWU6IG5hbWUsIHNyYzogc3JjIH0pO1xuICB9XG5cbiAgZ2V0KG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXNbbmFtZV07XG4gIH1cblxuICBjaGVjayhjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLmN0eCkge1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoNTAsIDI1MCwgKHRoaXMubG9hZGVkICogNDUwKSAvIHRoaXMuZGVmaW5pdGlvbnMubGVuZ3RoLCA0MCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxvYWRlZCA9PT0gdGhpcy5kZWZpbml0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcmVhZHkoY2FsbGJhY2spIHtcbiAgICBmb3IgKGNvbnN0IHJlc291cmNlIG9mIHRoaXMuZGVmaW5pdGlvbnMpIHtcbiAgICAgIGlmIChyZXNvdXJjZS50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkZWQgKz0gMTtcbiAgICAgICAgICB0aGlzLmNoZWNrKGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGltYWdlLnNyYyA9IHJlc291cmNlLnNyYztcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNbcmVzb3VyY2UubmFtZV0gPSBpbWFnZTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXNvdXJjZS50eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVzb3VyY2UubmFtZSk7XG4gICAgICAgIHRoaXMubG9hZGVkICs9IDE7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzW3Jlc291cmNlLm5hbWVdID0gYXVkaW87XG4gICAgICAgIHRoaXMuY2hlY2soY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHYW1lUmVzb3VyY2VzKCkge1xuICBsZXQgcmVzb2x2ZTtcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMpID0+IChyZXNvbHZlID0gcmVzKSk7XG4gIGNvbnN0IHJlc291cmNlcyA9IG5ldyBSZXNvdXJjZXMoKTtcbiAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAndGlsZW1hcCcsICcvaW1hZ2VzL3RpbGVtYXAucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19pY2UnLCAnL2ltYWdlcy9pY2UucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19qYXInLCAnL2ltYWdlcy9qYXIucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ19maXJlJywgJy9pbWFnZXMvZmlyZS5wbmcnKTtcbiAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX2RvbmEnLCAnL2ltYWdlcy9kb25hLnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdpbWdfaW50cm8nLCAnL2ltYWdlcy9pbnRyby5wbmcnKTtcbiAgcmVzb3VyY2VzLmFkZCgnaW1hZ2UnLCAnaW1nX21ldGFsJywgJy9pbWFnZXMvbWV0YWwucG5nJyk7XG4gIHJlc291cmNlcy5hZGQoJ2ltYWdlJywgJ2ltZ190ZWxlcG9ydCcsICcvaW1hZ2VzL3RlbGVwb3J0LnBuZycpO1xuICByZXNvdXJjZXMuYWRkKCdpbWFnZScsICdmcm9zdCcsICcvaW1hZ2VzL2Zyb3plbi5wbmcnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWljZS1wdXNoJywgJy9zb3VuZHMvc2Z4LWljZS1wdXNoLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZmlyZS1vZmYnLCAnL3NvdW5kcy9zZngtZmlyZS1vZmYubXAzJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1mYWxsaW5nJywgJy9zb3VuZHMvc2Z4LWZhbGxpbmcubXAzJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1uZXctaWNlJywgJy9zb3VuZHMvc2Z4LW5ldy1pY2UubXAzJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1jbGltYicsICcvc291bmRzL3NmeC1jbGltYi5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWljZS1jb2xsaXNpb24nLCAnL3NvdW5kcy9zZngtaWNlLWNvbGxpc2lvbi5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LXN0YWdlLWVudGVyJywgJy9zb3VuZHMvc2Z4LXN0YWdlLWVudGVyLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZGFuZ2VyJywgJy9zb3VuZHMvc2Z4LWRhbmdlci5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LWljZS1yZW1vdmUnLCAnL3NvdW5kcy9zZngtaWNlLXJlbW92ZS5tcDMnKTtcbiAgcmVzb3VyY2VzLmFkZCgnYXVkaW8nLCAnc2Z4LXN0YXRlLWxlYXZlJywgJy9zb3VuZHMvc2Z4LXN0YXRlLWxlYXZlLm1wMycpO1xuICByZXNvdXJjZXMuYWRkKCdhdWRpbycsICdzZngtZGlzYWJsZWQnLCAnL3NvdW5kcy9zZngtZGlzYWJsZWQubXAzJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1mYWxsJywgJy9zb3VuZHMvc2Z4LWZhbGwubXAzJyk7XG4gIHJlc291cmNlcy5hZGQoJ2F1ZGlvJywgJ3NmeC1tdXNpYy1zcGFya3MnLCAnL211c2ljL3NwYXJrcy5tcDMnKTtcblxuICByZXNvdXJjZXMucmVhZHkoKCkgPT4ge1xuICAgIHJlc29sdmUocmVzb3VyY2VzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb21pc2U7XG59IiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRnJvc3QgfSBmcm9tICcuL3N0cnVjdCc7XG5pbXBvcnQgeyBGaXJlIH0gZnJvbSAnLi9maXJlJztcbmltcG9ydCB7IEljZSB9IGZyb20gJy4vaWNlJztcbmltcG9ydCB7IEphciB9IGZyb20gJy4vamFyJztcbmltcG9ydCB7IE1ldGFsIH0gZnJvbSAnLi9tZXRhbCc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSAnLi90aWxlbWFwJztcbmltcG9ydCB7IGxldmVscyB9IGZyb20gJy4vbGV2ZWxzJztcbmltcG9ydCB7IFRlbGVwb3J0IH0gZnJvbSAnLi90ZWxlcG9ydCc7XG5cbmV4cG9ydCBjbGFzcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKGVuZ2luZSwgbGV2ZWwgPSBudWxsKSB7XG4gICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgZGF0YS5tYXAgPSB0aGlzLmVuZ2luZS5tYXAubWFwO1xuICAgIGRhdGEudGhlbWUgPSB0aGlzLmVuZ2luZS5tYXAudGhlbWU7XG4gICAgZGF0YS5zcHJpdGVzID0gW107XG4gICAgZm9yIChjb25zdCBzcHJpdGUgb2YgdGhpcy5lbmdpbmUuc3ByaXRlcykge1xuICAgICAgbGV0IHZhbHVlID0gdHlwZW9mIHNwcml0ZS5sZW5ndGggPT09ICd1bmRlZmluZWQnID8gMSA6IHNwcml0ZS5sZW5ndGg7XG4gICAgICB2YWx1ZSA9IHNwcml0ZS5pZCA9PT0gQ29uc3RzLk9iamVjdEphciA/IHNwcml0ZS5vbkZpcmUgOiB2YWx1ZTtcbiAgICAgIGxldCBmbCwgZnI7XG4gICAgICBpZiAoc3ByaXRlLmlkID09PSBDb25zdHMuT2JqZWN0SWNlKSB7XG4gICAgICAgIGZsID0gc3ByaXRlLmZyb3plbi5sZWZ0O1xuICAgICAgICBmciA9IHNwcml0ZS5mcm96ZW4ucmlnaHQ7XG4gICAgICB9XG4gICAgICBkYXRhLnNwcml0ZXMucHVzaCh7XG4gICAgICAgIGlkOiBzcHJpdGUuaWQsXG4gICAgICAgIHg6IHNwcml0ZS54VGlsZSxcbiAgICAgICAgeTogc3ByaXRlLnlUaWxlLFxuICAgICAgICB2OiB2YWx1ZSxcbiAgICAgICAgZmw6IGZsLFxuICAgICAgICBmcjogZnIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGxvYWQoaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsc1tpbmRleF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMuZW5naW5lLmxldmVsID0gaW5kZXg7XG5cbiAgICBsZXQgbGV2ZWw7XG4gICAgaWYgKHRoaXMubGV2ZWwpIHtcbiAgICAgIGxldmVsID0gdGhpcy5sZXZlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV2ZWwgPSBsZXZlbHNbaW5kZXhdO1xuICAgIH1cblxuICAgIHRoaXMuZW5naW5lLnNwcml0ZXMgPSBbXTtcbiAgICB0aGlzLmVuZ2luZS5tYXAgPSBuZXcgVGlsZU1hcCh0aGlzLmVuZ2luZSwgbGV2ZWwubWFwLCBsZXZlbC50aGVtZSk7XG4gICAgY29uc3QgdGVsZXBvcnRzID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3Qgc3ByaXRlIG9mIGxldmVsLnNwcml0ZXMpIHtcbiAgICAgIHN3aXRjaCAoc3ByaXRlLmlkKSB7XG4gICAgICAgIGNhc2UgQ29uc3RzLk9iamVjdFBsYXllcjpcbiAgICAgICAgICB0aGlzLmVuZ2luZS5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpO1xuICAgICAgICAgIHRoaXMuZW5naW5lLmFkZFNwcml0ZSh0aGlzLmVuZ2luZS5wbGF5ZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RJY2U6IHtcbiAgICAgICAgICBjb25zdCBmcm96ZW4gPSBuZXcgRnJvc3QodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzcHJpdGUuZmwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBmcm96ZW4ubGVmdCA9IHNwcml0ZS5mbDtcbiAgICAgICAgICAgIGZyb3plbi5yaWdodCA9IHNwcml0ZS5mcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKG5ldyBJY2UodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSwgcGFyc2VJbnQoc3ByaXRlLnYpLCBmcm96ZW4pKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RNZXRhbDpcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IE1ldGFsKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnksIDEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0RmlyZTpcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUobmV3IEZpcmUodGhpcy5lbmdpbmUsIHNwcml0ZS54LCBzcHJpdGUueSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIENvbnN0cy5PYmplY3RKYXI6IHtcbiAgICAgICAgICBjb25zdCBqYXIgPSBuZXcgSmFyKHRoaXMuZW5naW5lLCBzcHJpdGUueCwgc3ByaXRlLnkpO1xuICAgICAgICAgIGlmIChzcHJpdGUudiA9PT0gMSkge1xuICAgICAgICAgICAgamFyLnR1cm5PbkZpcmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5lbmdpbmUuYWRkU3ByaXRlKGphcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDb25zdHMuT2JqZWN0VGVsZXBvcnQ6IHtcbiAgICAgICAgICBjb25zdCB0ZWxlcG9ydCA9IG5ldyBUZWxlcG9ydCh0aGlzLmVuZ2luZSwgc3ByaXRlLngsIHNwcml0ZS55KTtcbiAgICAgICAgICB0aGlzLmVuZ2luZS5hZGRTcHJpdGUodGVsZXBvcnQpO1xuICAgICAgICAgIHRlbGVwb3J0LmxpbmtJZCA9IHNwcml0ZS5saW5rO1xuICAgICAgICAgIHRlbGVwb3J0cy5zZXQoc3ByaXRlLnJlZiwgdGVsZXBvcnQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGxpbmsgdGVsZXBvcnRzXG4gICAgaWYgKHRlbGVwb3J0cy5zaXplKSB7XG4gICAgICBmb3IgKGNvbnN0IHRlbGVwb3J0IG9mIHRlbGVwb3J0cy52YWx1ZXMoKSkge1xuICAgICAgICBjb25zdCBsaW5rZWQgPSB0ZWxlcG9ydHMuZ2V0KHRlbGVwb3J0LmxpbmtJZCk7XG4gICAgICAgIGlmIChsaW5rZWQpIHtcbiAgICAgICAgICB0ZWxlcG9ydC5saW5rID0gbGlua2VkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XG5pbXBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNsYXNzIFBhcnRpY2xlIHtcbiAgY29uc3RydWN0b3IoY3R4LCB4LCB5LCBjb2xvciwgaW50ZW5zaXR5KSB7XG4gICAgdGhpcy5jb2xvciA9IHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcgPyBDb25zdHMuQ29sb3JXaGl0ZSA6IGNvbG9yO1xuICAgIHRoaXMuciA9IDQ7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMudnggPSAoTWF0aC5yYW5kb20oKSAqIDQgLSAyKSAqIGludGVuc2l0eTtcbiAgICB0aGlzLnZ5ID0gKE1hdGgucmFuZG9tKCkgKiA2IC0gNCkgKiBpbnRlbnNpdHk7XG4gICAgdGhpcy5zcGVlZCA9IDAuMTU7XG4gICAgdGhpcy5saWZlID0gMjU1O1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBvcGFjaXR5ID0gdGhpcy5saWZlIC8gMjU1O1xuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKCcgKyB0aGlzLmNvbG9yICsgJywnICsgb3BhY2l0eSArICcpJztcbiAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMuciwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMudng7XG4gICAgdGhpcy55ICs9IHRoaXMudnk7XG4gICAgdGhpcy52eSArPSB0aGlzLnNwZWVkO1xuICAgIHRoaXMubGlmZSAtPSA1O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcGFya3MgZXh0ZW5kcyBTcHJpdGUge1xuICBjb25zdHJ1Y3RvcihlbmdpbmUsIHR4LCB0eSwgY29sb3IsIGxlbmd0aCwgaW50ZW5zaXR5KSB7XG4gICAgc3VwZXIobnVsbCwgZW5naW5lLCB0eCwgdHksIDMyLCAzMik7XG4gICAgdGhpcy5jb2xvciA9IHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcgPyAnMjU1LDI1NSwyNTUnIDogY29sb3I7XG4gICAgdGhpcy5sZW5ndGggPSB0eXBlb2YgbGVuZ3RoID09PSAndW5kZWZpbmVkJyA/IDEwIDogbGVuZ3RoO1xuICAgIHRoaXMuaW50ZW5zaXR5ID0gdHlwZW9mIGludGVuc2l0eSA9PT0gJ3VuZGVmaW5lZCcgPyAxIDogaW50ZW5zaXR5O1xuICAgIHRoaXMucGFydGljbGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnBhcnRpY2xlc1tpXSA9IG5ldyBQYXJ0aWNsZShcbiAgICAgICAgdGhpcy5lbmdpbmUuY3R4LFxuICAgICAgICB0eCAqIENvbnN0cy5UaWxlV2lkdGggKyAxNixcbiAgICAgICAgdHkgKiBDb25zdHMuVGlsZVdpZHRoICsgMTYsXG4gICAgICAgIHRoaXMuY29sb3IsXG4gICAgICAgIHRoaXMuaW50ZW5zaXR5LFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuZW5naW5lLmN0eC5zYXZlKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0uZHJhdygpO1xuICAgIH1cbiAgICB0aGlzLmVuZ2luZS5jdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgZW5naW5lTW92ZSgpIHtcbiAgICB0aGlzLm1vdmUoKTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0ubW92ZSgpO1xuICAgICAgaWYgKHRoaXMucGFydGljbGVzW2ldLmxpZmUgPCAwKSB7XG4gICAgICAgIHRoaXMucGFydGljbGVzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLnBhcnRpY2xlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVtb3ZlU2VsZigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVNlbGYoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZ2luZS5zZnhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5lbmdpbmUuc2Z4c1tpXSA9PT0gdGhpcykge1xuICAgICAgICB0aGlzLmVuZ2luZS5zZnhzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHJlc291cmNlcykge1xuICAgIHRoaXMucmVzb3VyY2VzID0gcmVzb3VyY2VzO1xuICAgIHRoaXMuc2Z4Vm9sdW1lID0gMC4zO1xuICAgIHRoaXMubXVzaWNWb2x1bWUgPSAwLjI7XG4gICAgdGhpcy5tdXNpYyA9IG51bGw7XG5cbiAgICAvLyBMb2FkIHByZWZlcmVuY2VzIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgdGhpcy5sb2FkUHJlZmVyZW5jZXMoKTtcblxuICAgIHRoaXMuc2Z4ID0ge1xuICAgICAgJ2ZpcmUtb2ZmJzogcmVzb3VyY2VzLmdldCgnc2Z4LWZpcmUtb2ZmJyksXG4gICAgICAnaWNlLXB1c2gnOiByZXNvdXJjZXMuZ2V0KCdzZngtaWNlLXB1c2gnKSxcbiAgICAgIGZhbGw6IHJlc291cmNlcy5nZXQoJ3NmeC1mYWxsJyksXG4gICAgICBmYWxsaW5nOiByZXNvdXJjZXMuZ2V0KCdzZngtZmFsbGluZycpLFxuICAgICAgJ25ldy1pY2UnOiByZXNvdXJjZXMuZ2V0KCdzZngtbmV3LWljZScpLFxuICAgICAgY2xpbWI6IHJlc291cmNlcy5nZXQoJ3NmeC1jbGltYicpLFxuICAgICAgJ2ljZS1jb2xsaXNpb24nOiByZXNvdXJjZXMuZ2V0KCdzZngtaWNlLWNvbGxpc2lvbicpLFxuICAgICAgJ3N0YWdlLWVudGVyJzogcmVzb3VyY2VzLmdldCgnc2Z4LXN0YWdlLWVudGVyJyksXG4gICAgICBkYW5nZXI6IHJlc291cmNlcy5nZXQoJ3NmeC1kYW5nZXInKSxcbiAgICAgICdpY2UtcmVtb3ZlJzogcmVzb3VyY2VzLmdldCgnc2Z4LWljZS1yZW1vdmUnKSxcbiAgICAgICdzdGF0ZS1sZWF2ZSc6IHJlc291cmNlcy5nZXQoJ3NmeC1zdGF0ZS1sZWF2ZScpLFxuICAgICAgJ2ljZS1kaXNhYmxlZCc6IHJlc291cmNlcy5nZXQoJ3NmeC1kaXNhYmxlZCcpLFxuICAgIH07XG4gIH1cblxuICBsb2FkUHJlZmVyZW5jZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG11c2ljT24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXVzaWNPbicpO1xuICAgICAgY29uc3Qgc291bmRPbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3VuZE9uJyk7XG4gICAgICB0aGlzLm11c2ljT24gPSBtdXNpY09uID09PSBudWxsID8gdHJ1ZSA6IG11c2ljT24gPT09ICd0cnVlJztcbiAgICAgIHRoaXMuc291bmRPbiA9IHNvdW5kT24gPT09IG51bGwgPyB0cnVlIDogc291bmRPbiA9PT0gJ3RydWUnO1xuICAgIH0gY2F0Y2gge1xuICAgICAgdGhpcy5tdXNpY09uID0gdHJ1ZTtcbiAgICAgIHRoaXMuc291bmRPbiA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc2F2ZVByZWZlcmVuY2VzKCkge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXVzaWNPbicsIFN0cmluZyh0aGlzLm11c2ljT24pKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzb3VuZE9uJywgU3RyaW5nKHRoaXMuc291bmRPbikpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gbG9jYWxTdG9yYWdlIG5vdCBhdmFpbGFibGVcbiAgICB9XG4gIH1cblxuICB0b2dnbGVNdXNpYygpIHtcbiAgICB0aGlzLm11c2ljT24gPSAhdGhpcy5tdXNpY09uO1xuICAgIHRoaXMuc2F2ZVByZWZlcmVuY2VzKCk7XG4gICAgaWYgKHRoaXMubXVzaWMpIHtcbiAgICAgIGlmICh0aGlzLm11c2ljT24pIHtcbiAgICAgICAgdGhpcy5tdXNpYy5wbGF5KCkuY2F0Y2goKCkgPT4ge30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tdXNpYy5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tdXNpY09uO1xuICB9XG5cbiAgdG9nZ2xlU291bmQoKSB7XG4gICAgdGhpcy5zb3VuZE9uID0gIXRoaXMuc291bmRPbjtcbiAgICB0aGlzLnNhdmVQcmVmZXJlbmNlcygpO1xuICAgIHJldHVybiB0aGlzLnNvdW5kT247XG4gIH1cblxuICBzZXRTZnhWb2x1bWUodm9sdW1lKSB7XG4gICAgdGhpcy5zZnhWb2x1bWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2b2x1bWUpKTtcbiAgfVxuXG4gIHNldE11c2ljVm9sdW1lKHZvbHVtZSkge1xuICAgIHRoaXMubXVzaWNWb2x1bWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2b2x1bWUpKTtcbiAgICBpZiAodGhpcy5tdXNpYykge1xuICAgICAgdGhpcy5tdXNpYy52b2x1bWUgPSB0aGlzLm11c2ljVm9sdW1lO1xuICAgIH1cbiAgfVxuXG4gIHBsYXkoc2Z4KSB7XG4gICAgaWYgKCF0aGlzLnNvdW5kT24pIHJldHVybjtcbiAgICBjb25zdCBhdWRpbyA9IHRoaXMuc2Z4W3NmeF07XG4gICAgaWYgKCFhdWRpbykgcmV0dXJuO1xuICAgIGF1ZGlvLnZvbHVtZSA9IHRoaXMuc2Z4Vm9sdW1lO1xuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICBhdWRpby5wbGF5KCkuY2F0Y2goKCkgPT4ge30pO1xuICB9XG5cbiAgcGxheU9uY2Uoc2Z4KSB7XG4gICAgY29uc3QgYXVkaW8gPSB0aGlzLnNmeFtzZnhdO1xuICAgIGlmICghYXVkaW8gfHwgIWF1ZGlvLnBhdXNlZCkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5zb3VuZE9uKSByZXR1cm47XG4gICAgYXVkaW8udm9sdW1lID0gdGhpcy5zZnhWb2x1bWU7XG4gICAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgIGF1ZGlvLnBsYXkoKS5jYXRjaCgoKSA9PiB7fSk7XG4gIH1cblxuICBzdG9wKHNmeCkge1xuICAgIGNvbnN0IGF1ZGlvID0gdGhpcy5zZnhbc2Z4XTtcbiAgICBpZiAoIWF1ZGlvKSByZXR1cm47XG4gICAgYXVkaW8ucGF1c2UoKTtcbiAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gIH1cblxuICBzb3VuZHRyYWNrKCkge1xuICAgIHRoaXMubXVzaWMgPSB0aGlzLnJlc291cmNlcy5nZXQoJ3NmeC1tdXNpYy1zcGFya3MnKTtcbiAgICBpZiAoIXRoaXMubXVzaWMpIHJldHVybjtcbiAgICB0aGlzLm11c2ljLm11dGVkID0gZmFsc2U7XG4gICAgdGhpcy5tdXNpYy52b2x1bWUgPSB0aGlzLm11c2ljVm9sdW1lO1xuICAgIHRoaXMubXVzaWMubG9vcCA9IHRydWU7XG4gICAgaWYgKHRoaXMubXVzaWNPbikge1xuICAgICAgdGhpcy5tdXNpYy5wbGF5KCkuY2F0Y2goKCkgPT4ge30pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4vc3RydWN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gIC8qKlxyXG4gICAqIEJhc2UgY2xhc3Mgb2YgdGhlIHNwcml0ZVxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgICBFbmdpbmUgRW5naW5lXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHR4ICAgICBQb3NpdGlvbiB0aWxlIHggaW4gdGhlIG1hcFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0eSAgICAgUG9zaXRpb24gdGlsZSB5IGluIHRoZSBtYXBcclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggIFdpZHRoIG9mIHRoZSBzcHJpdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiB0aGUgc3ByaXRlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoaWQsIGVuZ2luZSwgdHgsIHR5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuY3R4ID0gZW5naW5lLmN0eDtcclxuICAgIHRoaXMuY29ybmVycyA9IG5ldyBQb3NpdGlvbigpO1xyXG4gICAgdGhpcy5zb2xpZCA9IHRydWU7XHJcbiAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5jb3VudGVyID0gZmFsc2U7XHJcbiAgICB0aGlzLnNwZWVkID0gNDtcclxuICAgIHRoaXMuc3RhdGUgPSBDb25zdHMuTW92ZVN0YW5kO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XHJcbiAgICB0aGlzLnhUaWxlID0gdHg7XHJcbiAgICB0aGlzLnlUaWxlID0gdHk7XHJcbiAgICB0aGlzLnggPSB0aGlzLnhUaWxlICogQ29uc3RzLlRpbGVXaWR0aDtcclxuICAgIHRoaXMueSA9IHRoaXMueVRpbGUgKiBDb25zdHMuVGlsZVdpZHRoO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBTZXRzIHNwcml0ZSBzdGF0ZXNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhdGUgIENvbnN0YW50IG9mIHRoZSBzdGF0ZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbW92aW5nIFRydWUgaWYgc3ByaXRlIGlzIG1vdmluZ1xyXG4gICAqL1xyXG4gIHNldFN0YXRlKHN0YXRlLCBtb3ZpbmcpIHtcclxuICAgIHRoaXMubW92aW5nID0gdHlwZW9mIG1vdmluZyA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IG1vdmluZztcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgfVxyXG5cclxuICBnZXRUaWxlKHR4LCB0eSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW5naW5lLm1hcC5nZXRUaWxlKHR4LCB0eSk7XHJcbiAgfVxyXG5cclxuICBpc1Nwcml0ZUF0KHR4LCB0eSkge1xyXG4gICAgcmV0dXJuIHRoaXMueFRpbGUgPT09IHR4ICYmIHRoaXMueVRpbGUgPT09IHR5O1xyXG4gIH1cclxuXHJcbiAgc3ByaXRlVHlwZUF0KHR4LCB0eSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW5naW5lLnNwcml0ZVR5cGVBdCh0eCwgdHkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29ybmVycygpIHtcclxuICAgIHRoaXMuY29ybmVycy51ID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSwgdGhpcy55VGlsZSAtIDEpO1xyXG4gICAgdGhpcy5jb3JuZXJzLmQgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlLCB0aGlzLnlUaWxlICsgMSk7XHJcbiAgICB0aGlzLmNvcm5lcnMubCA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgLSAxLCB0aGlzLnlUaWxlKTtcclxuICAgIHRoaXMuY29ybmVycy5yID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIDEsIHRoaXMueVRpbGUpO1xyXG4gICAgdGhpcy5jb3JuZXJzLnVsID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSAtIDEsIHRoaXMueVRpbGUgLSAxKTtcclxuICAgIHRoaXMuY29ybmVycy51ciA9IHRoaXMuc3ByaXRlVHlwZUF0KHRoaXMueFRpbGUgKyAxLCB0aGlzLnlUaWxlIC0gMSk7XHJcbiAgICB0aGlzLmNvcm5lcnMuZGwgPSB0aGlzLnNwcml0ZVR5cGVBdCh0aGlzLnhUaWxlIC0gMSwgdGhpcy55VGlsZSArIDEpO1xyXG4gICAgdGhpcy5jb3JuZXJzLmRyID0gdGhpcy5zcHJpdGVUeXBlQXQodGhpcy54VGlsZSArIDEsIHRoaXMueVRpbGUgKyAxKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgdGhpcy54VGlsZSA9IE1hdGguZmxvb3IodGhpcy54IC8gQ29uc3RzLlRpbGVXaWR0aCk7XHJcbiAgICB0aGlzLnlUaWxlID0gTWF0aC5mbG9vcih0aGlzLnkgLyBDb25zdHMuVGlsZVdpZHRoKTtcclxuICB9XHJcblxyXG4gIG1vdmUoKSB7fVxyXG5cclxuICBlbmdpbmVNb3ZlKCkge1xyXG4gICAgdGhpcy51cGRhdGVDb3JuZXJzKCk7XHJcbiAgICB0aGlzLm1vdmUoKTtcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICB9XHJcbn1cclxuIiwiLyoqXG4gKiBHYW1lIHN0YXRlIG1hbmFnZXIgZm9yIHRyYWNraW5nIHNjb3JlIGFuZCBwcm9ncmVzc1xuICovXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5sZXZlbFN0YXJ0VGltZSA9IDA7XG4gICAgdGhpcy5sb2FkRnJvbVN0b3JhZ2UoKTtcbiAgfVxuXG4gIGxvYWRGcm9tU3RvcmFnZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRlJyk7XG4gICAgICBpZiAoc2F2ZWQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xuICAgICAgICB0aGlzLnNjb3JlID0gZGF0YS5zY29yZSB8fCAwO1xuICAgICAgICB0aGlzLmJlc3RUaW1lcyA9IGRhdGEuYmVzdFRpbWVzIHx8IHt9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5iZXN0VGltZXMgPSB7fTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgdGhpcy5iZXN0VGltZXMgPSB7fTtcbiAgICB9XG4gIH1cblxuICBzYXZlVG9TdG9yYWdlKCkge1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgJ2dhbWVTdGF0ZScsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBzY29yZTogdGhpcy5zY29yZSxcbiAgICAgICAgICBiZXN0VGltZXM6IHRoaXMuYmVzdFRpbWVzLFxuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBsb2NhbFN0b3JhZ2Ugbm90IGF2YWlsYWJsZVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0TGV2ZWxUaW1lcigpIHtcbiAgICB0aGlzLmxldmVsU3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIH1cblxuICBjb21wbGV0ZUxldmVsKGxldmVsSW5kZXgpIHtcbiAgICBjb25zdCBjb21wbGV0aW9uVGltZSA9IE1hdGguZmxvb3IoKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5sZXZlbFN0YXJ0VGltZSkgLyAxMDAwKTtcbiAgICBjb25zdCBsZXZlbEtleSA9IGBsZXZlbF8ke2xldmVsSW5kZXh9YDtcblxuICAgIC8vIEFkZCBzY29yZSBiYXNlZCBvbiBjb21wbGV0aW9uIHRpbWUgKGJvbnVzIGZvciBmYXN0ZXIgY29tcGxldGlvbilcbiAgICBjb25zdCB0aW1lQm9udXMgPSBNYXRoLm1heCgwLCAxMDAgLSBjb21wbGV0aW9uVGltZSk7XG4gICAgdGhpcy5zY29yZSArPSAxMDAgKyB0aW1lQm9udXM7XG5cbiAgICAvLyBUcmFjayBiZXN0IHRpbWVcbiAgICBpZiAoIXRoaXMuYmVzdFRpbWVzW2xldmVsS2V5XSB8fCBjb21wbGV0aW9uVGltZSA8IHRoaXMuYmVzdFRpbWVzW2xldmVsS2V5XSkge1xuICAgICAgdGhpcy5iZXN0VGltZXNbbGV2ZWxLZXldID0gY29tcGxldGlvblRpbWU7XG4gICAgfVxuXG4gICAgdGhpcy5zYXZlVG9TdG9yYWdlKCk7XG4gICAgcmV0dXJuIHsgY29tcGxldGlvblRpbWUsIHRpbWVCb251cyB9O1xuICB9XG5cbiAgZ2V0QmVzdFRpbWUobGV2ZWxJbmRleCkge1xuICAgIHJldHVybiB0aGlzLmJlc3RUaW1lc1tgbGV2ZWxfJHtsZXZlbEluZGV4fWBdIHx8IG51bGw7XG4gIH1cblxuICByZXNldFNjb3JlKCkge1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuc2F2ZVRvU3RvcmFnZSgpO1xuICB9XG59XG4iLCIvKipcbiAqIFN0b3JlcyBwb3NpdGlvbiBvZiB0aGUgY29ybmVycyBhbmQgdmVydGljZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51ID0gMDtcbiAgICB0aGlzLmQgPSAwO1xuICAgIHRoaXMubCA9IDA7XG4gICAgdGhpcy5yID0gMDtcbiAgICB0aGlzLnVsID0gMDtcbiAgICB0aGlzLnVyID0gMDtcbiAgICB0aGlzLmRsID0gMDtcbiAgICB0aGlzLmRyID0gMDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnJvc3Qge1xuICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBBbmltU3ByaXRlIH0gZnJvbSAnLi9hbmltc3ByaXRlJztcbmltcG9ydCB7IENvbnN0cyB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGNsYXNzIFRlbGVwb3J0IGV4dGVuZHMgQW5pbVNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKGVuZ2luZSwgdHgsIHR5KSB7XG4gICAgc3VwZXIoQ29uc3RzLk9iamVjdFRlbGVwb3J0LCBlbmdpbmUsICdpbWdfdGVsZXBvcnQnLCB0eCwgdHksIENvbnN0cy5UaWxlV2lkdGgsIENvbnN0cy5UaWxlV2lkdGgsIDAsIDAsIDAsIDMsIHRydWUpO1xuICAgIHRoaXMuaXNTb2xpZCA9IHRydWU7XG4gICAgdGhpcy5hbmltRGVsYXkgPSBDb25zdHMuQW5pbURlZmF1bHREZWxheSAqIDI7XG4gICAgdGhpcy5vbkZpcmUgPSBmYWxzZTtcbiAgICB0aGlzLmFuaW1Sb3cgPSAwO1xuICB9XG5cbiAgbW92ZSgpIHtcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XG4gICAgICB0aGlzLmNvbGxpc2lvbnMoKTtcbiAgICAgIHRoaXMuZ3Jhdml0eSgpO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUpIHtcbiAgICAgIGNhc2UgQ29uc3RzLk1vdmVEb3duOlxuICAgICAgICB0aGlzLmRvRG93bigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb2xsaXNpb25zKCkge31cblxuICBncmF2aXR5KCkge1xuICAgIGlmICghdGhpcy5jb3JuZXJzLmQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQ29uc3RzLk1vdmVEb3duLCB0cnVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBkb0Rvd24oKSB7XG4gICAgdGhpcy5jb3VudGVyICs9IENvbnN0cy5QaHlzaWNzU3BlZWQ7XG4gICAgaWYgKHRoaXMuY291bnRlciA8PSBDb25zdHMuVGlsZVdpZHRoKSB7XG4gICAgICB0aGlzLnkgKz0gQ29uc3RzLlBoeXNpY3NTcGVlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZShDb25zdHMuTW92ZVN0YW5kLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBzdXBlci5kcmF3KCk7XG4gICAgdGhpcy5kcmF3RnJvc3QoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgY2xhc3MgVGlsZU1hcCB7XG4gIC8qKlxuICAgKiBUaWxlbWFwIGNsYXNzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlbmdpbmUgRW5naW5lXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBtYXAgIE1hdHJpeCBvZiB0aGUgbWFwXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKGVuZ2luZSwgbWFwLCB0aGVtZSkge1xuICAgIHRoaXMuY3R4ID0gZW5naW5lLmN0eDtcbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICB0aGlzLnRoZW1lID0gdGhlbWU7XG4gICAgdGhpcy50aWxlV2lkdGggPSBDb25zdHMuVGlsZVdpZHRoO1xuICAgIHRoaXMudGlsZUhlaWdodCA9IENvbnN0cy5UaWxlV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLm1hcC5sZW5ndGggLSAxO1xuICAgIHRoaXMud2lkdGggPSB0aGlzLm1hcFswXS5sZW5ndGggLSAxO1xuICAgIHRoaXMudGlsZXNJbWFnZSA9IHRoaXMuZW5naW5lLnJlc291cmNlcy5nZXQoJ3RpbGVtYXAnKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY29udGVudCBvZiB0aGUgdGlsZSBpbnNpZGUgdGhlIG1hdHJpeFxuICAgKiBpZiBwb3NpdGlvbiBvdXQgb2YgYm91bmRzIHJldHVybnMgQ29uc3RzLk9CSkVDVF9PVVRcbiAgICogQHBhcmFtICB7bnVtYmVyfSB5IHBvc2l0aW9uXG4gICAqIEBwYXJhbSAge251bWJlcn0geCBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHtudW1iZXJ9ICAgQ29udGVudCBvZiB0aGUgdGlsZVxuICAgKi9cbiAgZ2V0VGlsZSh4LCB5KSB7XG4gICAgaWYgKHggPCAwIHx8IHkgPCAwIHx8IHggPiB0aGlzLndpZHRoIHx8IHkgPiB0aGlzLmhlaWdodCkge1xuICAgICAgcmV0dXJuIENvbnN0cy5PYmplY3RPdXQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcFt5XVt4XTtcbiAgfVxuICAvKipcbiAgICogRHJhd3MgdGhlIG1hcFxuICAgKiBAcmV0dXJuIHtub25lfVxuICAgKi9cbiAgZHJhdygpIHtcbiAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy53aWR0aDsgKytpKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSB0aGlzLmhlaWdodDsgKytqKSB7XG4gICAgICAgIGxldCB0aWxlVHlwZSA9IENvbnN0cy5UaWxlQmFja2dyb3VuZDtcbiAgICAgICAgaWYgKHRoaXMubWFwW2pdW2ldID09PSAxKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmdldFRpbGUoaSAtIDEsIGopICYmICF0aGlzLmdldFRpbGUoaSArIDEsIGopKSB7XG4gICAgICAgICAgICB0aWxlVHlwZSA9IENvbnN0cy5UaWxlQm90aFNpZGVzO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ2V0VGlsZShpIC0gMSwgaikpIHtcbiAgICAgICAgICAgIHRpbGVUeXBlID0gQ29uc3RzLlRpbGVMZWZ0U2lkZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmdldFRpbGUoaSArIDEsIGopKSB7XG4gICAgICAgICAgICB0aWxlVHlwZSA9IENvbnN0cy5UaWxlUmlnaHRTaWRlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aWxlVHlwZSA9IENvbnN0cy5UaWxlTWlkZGxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgdGhpcy50aWxlc0ltYWdlLFxuICAgICAgICAgIHRpbGVUeXBlLFxuICAgICAgICAgIHRoaXMudGhlbWUgKiB0aGlzLnRpbGVIZWlnaHQsXG4gICAgICAgICAgdGhpcy50aWxlV2lkdGgsXG4gICAgICAgICAgdGhpcy50aWxlSGVpZ2h0LFxuICAgICAgICAgIGkgKiB0aGlzLnRpbGVXaWR0aCxcbiAgICAgICAgICBqICogdGhpcy50aWxlSGVpZ2h0LFxuICAgICAgICAgIHRoaXMudGlsZVdpZHRoLFxuICAgICAgICAgIHRoaXMudGlsZUhlaWdodCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICB9XG5cbiAgbW92ZSgpIHt9XG5cbiAgZW5naW5lTW92ZSgpIHt9XG59XG4iLCJpbXBvcnQgeyBDb25zdHMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNvbnN0IFRpbGUgPSBPYmplY3QuZnJlZXplKHtcbiAgdGlsZXM6IHtcbiAgICBbQ29uc3RzLk9iamVjdEJhY2tncm91bmRdOiB7XG4gICAgICBzb2xpZDogZmFsc2UsXG4gICAgICBmcmVlemU6IGZhbHNlLFxuICAgIH0sXG4gICAgW0NvbnN0cy5PYmplY3RPdXRdOiB7XG4gICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgIGZyZWV6ZTogZmFsc2UsXG4gICAgfSxcbiAgICBbQ29uc3RzLk9iamVjdFBsYXllcl06IHtcbiAgICAgIHNvbGlkOiB0cnVlLFxuICAgICAgZnJlZXplOiBmYWxzZSxcbiAgICB9LFxuICAgIFtDb25zdHMuT2JqZWN0SWNlXToge1xuICAgICAgc29saWQ6IHRydWUsXG4gICAgICBmcmVlemU6IGZhbHNlLFxuICAgIH0sXG4gICAgW0NvbnN0cy5PYmplY3RNZXRhbF06IHtcbiAgICAgIHNvbGlkOiB0cnVlLFxuICAgICAgZnJlZXplOiB0cnVlLFxuICAgIH0sXG4gICAgW0NvbnN0cy5PYmplY3RXYWxsXToge1xuICAgICAgc29saWQ6IHRydWUsXG4gICAgICBmcmVlemU6IHRydWUsXG4gICAgfSxcbiAgICBbQ29uc3RzLk9iamVjdEZpcmVdOiB7XG4gICAgICBzb2xpZDogZmFsc2UsXG4gICAgICBmcmVlemU6IGZhbHNlLFxuICAgIH0sXG4gICAgW0NvbnN0cy5PYmplY3RKYXJdOiB7XG4gICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgIGZyZWV6ZTogdHJ1ZSxcbiAgICB9LFxuICAgIFtDb25zdHMuT2JqZWN0VGVsZXBvcnRdOiB7XG4gICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgIGZyZWV6ZTogdHJ1ZSxcbiAgICB9LFxuICB9LFxuXG4gIGlzU29saWQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy50aWxlc1tpZF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVOREVGSU5FRCBPTiBpc1NvbGlkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy50aWxlc1tpZF0uc29saWQ7XG4gICAgfVxuICB9LFxuXG4gIGlzRnJlZXphYmxlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudGlsZXNbaWRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVTkRFRklORUQgT04gaXNGcmVlemFibGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW2lkXS5mcmVlemU7XG4gICAgfVxuICB9LFxufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUmVzb3VyY2VzIH0gZnJvbSAnLi9yZXNvdXJjZXMnO1xuXG5leHBvcnQgeyBDb25zdHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgeyBGaXJlIH0gZnJvbSAnLi9maXJlJztcbmV4cG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWUnO1xuZXhwb3J0IHsgSmFyIH0gZnJvbSAnLi9qYXInO1xuZXhwb3J0IHsgTWV0YWwgfSBmcm9tICcuL21ldGFsJztcbmV4cG9ydCB7IFJlc291cmNlcywgbG9hZEdhbWVSZXNvdXJjZXMgfSBmcm9tICcuL3Jlc291cmNlcyc7XG5leHBvcnQgeyBUZWxlcG9ydCB9IGZyb20gJy4vdGVsZXBvcnQnO1xuZXhwb3J0IHsgRW5naW5lIH0gZnJvbSAnLi9lbmdpbmUnO1xuZXhwb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcbmV4cG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xuZXhwb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICcuL2tleWJvYXJkJztcbmV4cG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcbmV4cG9ydCB7IEFuaW1TcHJpdGUgfSBmcm9tICcuL2FuaW1zcHJpdGUnO1xuZXhwb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xuZXhwb3J0IHsgSWNlIH0gZnJvbSAnLi9pY2UnO1xuZXhwb3J0IHsgVGlsZU1hcCB9IGZyb20gJy4vdGlsZW1hcCc7XG5leHBvcnQgeyBTb3VuZCB9IGZyb20gJy4vc291bmQnO1xuZXhwb3J0IHsgU3BhcmtzIH0gZnJvbSAnLi9zZngnO1xuZXhwb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZXMnO1xuZXhwb3J0IHsgUG9zaXRpb24sIEZyb3N0IH0gZnJvbSAnLi9zdHJ1Y3QnO1xuZXhwb3J0IHsgbGV2ZWxzIH0gZnJvbSAnLi9sZXZlbHMnO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==