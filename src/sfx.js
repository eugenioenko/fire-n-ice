


var Particle = function(ctx, x, y, color, intencity){
    this.color = (typeof color === 'undefined') ? '255,255,255' : color;
    this.r = 2;
    this.x = x;
    this.y = y;
    this.vx = (Math.random() * 4 - 2) * intencity;
    this.vy = (Math.random() * 6 - 4) * intencity;
    this.speed = 0.15;
    this.life = 255;
    this.ctx = ctx;
};
Particle.prototype.draw = function() {
    var opacity = this.life / 255;
    this.ctx.beginPath();
    this.ctx.fillStyle = 'rgba(' + this.color+','+opacity+')';
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
    this.ctx.closePath();
    this.ctx.fill();
};
Particle.prototype.move = function() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.speed;
    this.life -= 5;
};
var Sparks = function(engine, tx,ty,color, length, intencity){
    this.color = (typeof color === 'undefined') ? '255,255,255' : color;
    this.length = (typeof length === 'undefined') ? 10 : length;
    this.intencity = (typeof intencity === 'undefined') ? 1 : intencity;
    Sprite.call(this, null, engine, tx, ty, 32, 32);
    this.particles = [];
    for(var i=0; i<=this.length; i++){
        this.particles[i] = new Particle(this.engine.ctx, tx*TILE_WIDTH+16, ty*TILE_WIDTH+16, this.color, this.intencity);
    }
};
Sparks.inherits(Sprite);

Sparks.prototype.draw = function() {
    this.engine.ctx.save();
    for(var i=0; i<this.particles.length; i++){
        this.particles[i].draw();
    }
    this.engine.ctx.restore();
};

Sparks.prototype.engineMove = function(){
    this.move();
};
Sparks.prototype.move = function() {
    for(var i=0; i<this.particles.length; i++){
        this.particles[i].move();
        if(this.particles[i].life < 0){
            this.particles.splice(i,1);
        }
    }
    if(!this.particles.length){
        this.engine.removeSfx(this);
    }
};