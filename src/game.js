/**
 * Game Loop
 */
var Game = function(){
    this.state = 'play';
    this.gameloop = this.gameloop_.bind(this); // jshint ignore:line
    this.engine = new Engine();

    this.gameloop();
};

Game.prototype.gameloop_ = function() {
    window.requestAnimationFrame(this.gameloop);
    this.engine.draw();
    this.engine.move();
};

var game = new Game();
window.game = game;
