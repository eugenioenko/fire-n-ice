import { Consts } from './constants';
import { Engine } from './engine';
import { GameState } from './state';
import { levels } from './levels';

/**
 * Game Loop
 */

export class Game {
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
    this.engine = new Engine({
      canvas,
      resources,
      level,
      onLevelComplete: (levelIndex) => this.onLevelComplete(levelIndex)
    });
    this.gameState = new GameState();
    this.levels = levels;
    this.state = Consts.GameStatePlay;
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

    if (this.state === Consts.GameStatePaused) {
      this.drawPauseMenu();
      return;
    }

    if (this.state === Consts.GameStateTransition) {
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
    this.state = Consts.GameStateTransition;

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
        this.state = Consts.GameStatePlay;
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
    if (this.engine.keyboard.escape && this.state === Consts.GameStatePlay) {
      this.engine.keyboard.escape = false;
      this.state = Consts.GameStatePaused;
      if (this.engine.sound.music) {
        this.engine.sound.music.pause();
      }
    } else if (this.engine.keyboard.escape && this.state === Consts.GameStatePaused) {
      this.engine.keyboard.escape = false;
      this.state = Consts.GameStatePlay;
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
      this.state = Consts.GameStatePlay;
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
