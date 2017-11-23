var Ice = function(engine, tx, ty, length, frozen){
    var _length = (typeof length === 'undefined') ? 1 : length;
    AnimSprite.call(this, this.id, engine, 'img_ice',
        tx, ty, TILE_WIDTH, TILE_WIDTH, 0, 0, 0, 1, true);
    this.xtile = tx;
    this.ytile = ty;
    this.frozen = (typeof frozen === 'undefined') ? false : frozen;
    this.length = length;
    this.animEnd = 1;
    this.animDelay = 9;
    this.animRow = 0;
    this.old_tx = 0;
    this.old_ty = 0;
    this.dirrection = 0;
    this.falling = false;
    this.id = OBJECT_ICE;
    if((this.getTile(this.xtile-1, this.ytile) == OBJECT_WALL) ||
        (this.getTile(this.xtile+this.length, this.ytile) == OBJECT_WALL))
    {
        this.frozen = true;
    } else{
        this.frozen = false;
    }
};
Ice.inherits(AnimSprite);

Ice.prototype.addBlock = function(tx) {
    if((tx > this.xtile && this.getTile(tx+1, this.ytile) == OBJECT_WALL) ||
        (tx < this.xtile && this.getTile(tx-1, this.ytile) == OBJECT_WALL))
    {
        this.frozen = true;
    }
    this.xtile = tx < this.xtile ? tx : this.xtile;
    this.x = this.xtile * TILE_WIDTH;
    this.length++;
};

Ice.prototype.isSpriteAt = function(tx, ty){
    if(this.ytile == ty){
        if(tx >= this.xtile && tx < (this.xtile + this.length)){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }

};

Ice.prototype.removeBlock = function(tx) {
    if(tx == this.xtile){
        this.xtile += 1;
        this.x += TILE_WIDTH;
        this.length--;
    }else if(tx == this.xtile+this.length-1){
        this.length--;
    }else{
        this.engine.addSprite(
            new Ice(this.engine, tx+1, this.ytile, this.xtile+this.length-tx-1));
        this.length = tx - this.xtile;
    }
    return this.length;
};

Ice.prototype.canGlide = function(dir){
    if(this.length != 1 || this.frozen){
        return false;
    }
    if(dir == DIR_LEFT  && Tile.isSolid(this.coorners.l)){
        return false;
    }
    if(dir == DIR_RIGHT && Tile.isSolid(this.coorners.r)){
        return false;
    }
    return true;
};

Ice.prototype.gravity = function() {
    if(!this.coorners.d && !this.frozen){
        this.falling = true;
        this.setState(MOVE_DOWN, true);
        return true;
    }
    if(this.falling){
        this.falling = false;
        this.engine.sound.play('ice-collision');
    }
    return false;
};

Ice.prototype.collision = function(){
    if(!this.canGlide(this.dirrection)){
        this.dirrection = 0;
        this.engine.sound.play('ice-collision');
        this.setState(MOVE_STAND, false);
        return true;
    }
    if(this.gravity()){
        return true;
    }
    return false;
};

Ice.prototype.move = function() {
    for(var i = 0; i < this.length; i++){
        var tile_down = this.spriteAt(this.xtile+i, this.ytile+1);
        if(tile_down && tile_down != OBJECT_FIRE){
            this.coorners.d = tile_down;
        }

    }
    if(this.coorners.d == OBJECT_FIRE){
        this.coorners.d = OBJECT_BACKGROUND;
    }
    this.coorners.r = this.spriteAt(this.xtile+this.length, this.ytile);

    if(this.frozen){
        if(this.getTile(this.xtile-1, this.ytile) != OBJECT_WALL && this.getTile(this.xtile+this.length, this.ytile) != OBJECT_WALL){
            this.frozen = false;
        }
    }
    if(!this.moving){
        this.gravity();
    }
    switch (this.state){
        case MOVE_ICE_MOVING:
            this.glide();
            break;
        case MOVE_ICE_CHECK:
            this.push();
            break;
        case MOVE_DOWN:
            this.doDown();
            break;
    }
};

Ice.prototype.draw = function() {
    this.ctx.save();
    if(this.animDelayCount++ > this.animDelay){
        this.animDelayCount = 0;
        this.animRow = this.animRow == 0 ? 1 : 0;
    }
    if(this.length == 1){
        this.ctx.drawImage(this.image, 0, TILE_WIDTH*this.animRow, this.width, this.height,  this.x, this.y, this.width, this.height);
    }else if(this.length == 2){
        this.ctx.drawImage(this.image, 1*TILE_WIDTH, TILE_WIDTH*this.animRow,
            this.width, this.height,  this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.image, 3*TILE_WIDTH, TILE_WIDTH*this.animRow,
            this.width, this.height,  this.x+TILE_WIDTH, this.y, this.width, this.height);
    }else{
        this.ctx.drawImage(this.image, 1*TILE_WIDTH, TILE_WIDTH*this.animRow,
            this.width, this.height,  this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.image, 3*TILE_WIDTH, TILE_WIDTH*this.animRow,
            this.width, this.height,  this.x+TILE_WIDTH*(this.length-1), this.y, this.width, this.height);
        for(var i = 1;  i < this.length-1; i++){
            this.ctx.drawImage(this.image, 2*TILE_WIDTH, TILE_WIDTH*this.animRow,
                this.width, this.height,  this.x+(TILE_WIDTH*i), this.y, this.width, this.height);
        }
    }
    if(this.frozen){
        this.ctx.fillStyle = "rgba(255,255,255,0.95)";
        if(this.getTile(this.xtile-1, this.ytile) == OBJECT_WALL){
            this.ctx.fillRect((this.xtile*this.width)-7, 3+this.ytile*this.height, 18,this.height-6);
        }
        if(this.getTile(this.xtile+this.length, this.ytile) == OBJECT_WALL){
            this.ctx.fillRect((this.xtile+this.length)*this.width-7, 3+this.ytile*this.height, 18, this.height-6);
        }

    }

    this.ctx.restore();
};

Ice.prototype.glide = function(){
    this.counter += 4;
    if(this.counter <= TILE_WIDTH){
        this.x += 4 * this.dirrection;
    } else {
        this.push();
    }
};

Ice.prototype.doDown = function(){
    this.counter += 4;
    if(this.counter <= TILE_WIDTH){
        this.y += 4;
    } else {
        this.setState(MOVE_STAND, false);
    }
};

Ice.prototype.push = function(dir) {
    this.dirrection = (typeof dir === 'undefined') ? this.dirrection : dir;
    if(!this.collision()){
        this.moving = true;
        this.setState(MOVE_ICE_MOVING, true);
    }else{
        this.setState(MOVE_STAND, false);
    }
};
