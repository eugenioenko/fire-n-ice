/**
 * [Fire description]
 * @param {[type]} engine  [description]
 * @param {[type]} tx    [description]
 * @param {[type]} ty    [description]
 * @param {[type]} start [description]
 * @param {[type]} end   [description]
 */

var Fire = function(engine, tx, ty){
    this.id = OBJECT_FIRE;
    AnimSprite.call(this, this.id, engine, 'img_fire',
        tx, ty, TILE_WIDTH, TILE_WIDTH, 0, 0, 0, 3, true);
};
Fire.inherits(AnimSprite);

Fire.prototype.move = function() {
    if(!this.moving){
        this.gravity();
    }
    switch (this.state){
        case MOVE_DOWN:
            this.doDown();
            break;
    }
};

Fire.prototype.gravity = function() {
    if(!this.coorners.d){
        this.setState(MOVE_DOWN, true);
        return true;
    }
    return false;
};

Fire.prototype.doDown = function(){
    this.counter += 4;
    if(this.counter <= TILE_WIDTH){
        this.y += 4;
    } else {
        this.setState(MOVE_STAND, false);
    }
};

Fire.prototype.draw = function(){
    AnimSprite.prototype.draw.call(this);
    if(this.spriteAt(this.xtile, this.ytile+1) == OBJECT_ICE){
        this.ctx.strokeStyle = "red";
        this.ctx.strokeRect(this.xtile*32, this.ytile*32,32,32);
    }
};