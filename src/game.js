/**
 * Game Loop
 */
class Game {
    /**
     * @param {*} canvavs   The canvas element
     * @param {*} resources  Game resources
     */
    constructor(canvas, resources) {
        this.state = STATE_START;
        this.engine = new Engine(canvas, resources);
        this.createIntro();
        this.gameloop = this.gameloop_.bind(this); // jshint ignore:line
        this.gameloop();
    }

    gameloop_() {
        switch (this.state) {
            case STATE_START:
                this.doIntro();
                break;
            case STATE_PLAY:
                this.engine.draw();
                this.engine.move();
                break;
        }
        window.requestAnimationFrame(this.gameloop);
    }

    createIntro() {
        this.intro = new AnimSprite(null, this.engine, 'img_intro', 0, 0, 544, 416, 0, 0, 0, 0, false);
        this.start = new AnimSprite(null, this.engine, 'img_start', 7, 11, 140, 26, -10, 0, 0, 1, true);
        this.start.animDelay = ANIM_STANDARD_DELAY * 20;
    }

    doIntro() {
        this.intro.draw();
        this.start.draw();

        if (this.engine.keyboard.enter) {
            this.state = STATE_PLAY;
        }
    }
}
