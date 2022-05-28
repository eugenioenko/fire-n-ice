import { AnimSprite } from "./animsprite";
import { Consts } from "./constants";
import { Engine } from "./engine";
import { levels } from "./levels";

/**
 * Game Loop
 */
export class Game {
  /**
   * @param {*} canvas   The canvas element
   * @param {*} resources  Game resources
   */
  constructor(canvas, resources) {
    this.engine = new Engine(canvas, resources);
    this.levels = levels;
    this.state = Consts.GameStatePlay;
    this.engine.sound.soundtrack();
    this.gameLoop = this.gameLoop_.bind(this); // jshint ignore:line
    this.gameLoop();
  }

  gameLoop_() {
    switch (this.state) {
      case Consts.GameStateIntro:
        this.doIntro();
        break;
      case Consts.GameStatePlay:
        this.engine.draw();
        this.engine.move();
        break;
    }
    window.requestAnimationFrame(this.gameLoop);
  }

  createIntro() {
    this.intro = new AnimSprite(
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
    this.start = new AnimSprite(
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
    this.start.animDelay = Consts.AnimDefaultDelay * 20;
  }

  doIntro() {
    this.intro.draw();
    this.start.draw();

    if (this.engine.keyboard.enter) {
      this.engine.keyboard.enter = false;
      this.state = Consts.GameStatePlay;
      this.engine.sound.soundtrack();
    }
  }
}
