


var Player = function(engine, tx, ty){
    AnimSprite.call(this, this.id, engine, 'img_dona', tx, ty, 48, 64, -10, -32, 2, 2, false);
    this.id = OBJECT_PLAYER;
    this.speed = 2;
    this.maxSpeed = 4;
    this.dirrection = 1;
    this.state = 0; //standing top right down left
    this.moving = false;
    this.tileWidth = TILE_WIDTH;
    this.tileHeight = TILE_WIDTH;
    this.animDelay = 3;
    this.counter = 0;
    this.fallCounter = 0;
    return this;
};
Player.inherits(AnimSprite);

Player.prototype.left = function() {
    if(!this.moving){
        //if standing then turn
        if(this.dirrection != DIR_LEFT){
            //is not under a brick
            if(!Tile.isSolid(this.coorners.u)){
                this.setAnim(ANIM_TURN_START, ANIM_TURN_END, false, ANIM_RIGHT_ROW, 4);
            }else{
                this.setAnim(ANIM_CROUCH_START,ANIM_CROUCH_START, false, ANIM_LEFT_ROW, 4);
            }
            this.setState(MOVE_TURN, true);
            this.dirrection = DIR_LEFT;
        } else{
            //running
            if (!Tile.isSolid(this.coorners.l) && Tile.isSolid(this.coorners.d)) {
                //not under a brick
                if(!Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ul)){
                    this.setAnim(ANIM_RUN_START, ANIM_RUN_END, false, ANIM_LEFT_ROW);
                }else{
                    this.setAnim(ANIM_CROUCH_START, ANIM_CROUCH_END, false, ANIM_LEFT_ROW);
                }
                this.setState(MOVE_LEFT, true);
            }
            //hit an ice
            if(this.coorners.l == OBJECT_ICE){
                this.push();
            }
            //climbe
            if (Tile.isSolid(this.coorners.l) && Tile.isSolid(this.coorners.d)  && !Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ul) && !this.moving) {
                this.setAnim(ANIM_PUSH_START,ANIM_PUSH_START,false, ANIM_LEFT_ROW);
                this.setState(MOVE_UP, true);
            }
        }
    }
};
Player.prototype.right = function() {
    if(!this.moving){
        if(this.dirrection != DIR_RIGHT){
            if(!Tile.isSolid(this.coorners.u)){
                this.setAnim(ANIM_TURN_START, ANIM_TURN_END, false, ANIM_LEFT_ROW, 4);
            }else{
                this.setAnim(ANIM_CROUCH_START,ANIM_CROUCH_START, false, ANIM_RIGHT_ROW, 4);
            }
            this.setState(MOVE_TURN, true);
            this.dirrection = DIR_RIGHT;
        } else{
            if (!Tile.isSolid(this.coorners.r) && Tile.isSolid(this.coorners.d)) {
                if(!Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ur)){
                    this.setAnim(ANIM_RUN_START, ANIM_RUN_END, false, ANIM_RIGHT_ROW);
                }else{
                    this.setAnim(ANIM_CROUCH_START, ANIM_CROUCH_END, false, ANIM_RIGHT_ROW);
                }
                this.setState(MOVE_RIGHT, true);
            }
            if(this.coorners.r == OBJECT_ICE){
                this.push();
            }
            if (Tile.isSolid(this.coorners.r) && Tile.isSolid(this.coorners.d) && !Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ur) && !this.moving) {
                this.setAnim(ANIM_PUSH_START,ANIM_PUSH_START,false, ANIM_RIGHT_ROW);
                this.setState(MOVE_UP, true);
            }
        }
    }
};

Player.prototype.burn = function() {
    if(this.state != MOVE_RIP){
        this.setState(MOVE_RIP, true);
        this.setAnim(ANIM_RIP_START,ANIM_RIP_END, true, ANIM_RIGHT_ROW);
    }
};

Player.prototype.doRip = function(){

};

Player.prototype.gravity = function() {
    if(!this.moving){
        if(typeof this.coorners.d == "undefined"){
            console.eror('undefined coorner');
        }
        if (!Tile.isSolid(this.coorners.d)) {
            this.setState(MOVE_DOWN, true);
            if(this.fallCounter >= 2){
                this.setAnim(ANIM_FALL_START,ANIM_FALL_END,true, ANIM_RIGHT_ROW);
            } else {
                this.setAnim(ANIM_BIG_FALL_START,ANIM_BIG_FALL_END,true, ANIM_RIGHT_ROW);
            }
        } else {
            this.fallCounter = 0;
            this.setState(MOVE_STAND, false);
        }
    }
};
Player.prototype.ice = function() {
    if(!this.moving){
        if(Tile.isSolid(this.coorners.d)){
            if(this.dirrection == DIR_RIGHT){
                if (!Tile.isSolid(this.coorners.dr) && this.coorners.dr != OBJECT_FIRE) {
                    this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_RIGHT_ROW, 4);
                    this.setState(MOVE_ICE_MAKE, true);
                }else if(this.coorners.dr == OBJECT_ICE){
                    this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_RIGHT_ROW, 4);
                    this.setState(MOVE_ICE_REMOVE, true);
                }
            } else {
                if (!Tile.isSolid(this.coorners.dl) && (this.coorners.dl != OBJECT_FIRE)) {
                    this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_LEFT_ROW, 4);
                    this.setState(MOVE_ICE_MAKE, true);
                }else if(this.coorners.dl == OBJECT_ICE){
                    this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_LEFT_ROW, 4);
                    this.setState(MOVE_ICE_REMOVE, true);
                }
            }
        }
    }
};
Player.prototype.jump = function() {
    if(!this.moving){
        if(this.dirrection == DIR_RIGHT){
            if (Tile.isSolid(this.coorners.r) && !Tile.isSolid(this.coorners.ur) && !Tile.isSolid(this.coorners.u)) {
                this.setAnim(ANIM_PUSH_START,ANIM_PUSH_START,false, ANIM_RIGHT_ROW);
                this.setState(MOVE_UP, true);
            }
        } else {
            if (Tile.isSolid(this.coorners.l) && !Tile.isSolid(this.coorners.ul) && !Tile.isSolid(this.coorners.u)) {
                this.setAnim(ANIM_PUSH_START,ANIM_PUSH_START,false, ANIM_LEFT_ROW);
                this.setState(MOVE_UP, true);
            }
        }
    }
};

Player.prototype.doRun = function() {
    this.counter++;
    if(this.counter <= ANIM_FRAME_COUNT){
        this.x += this.speed * this.dirrection;
    } else {
        this.setState(MOVE_STAND, false);
    }
};
Player.prototype.doTurn = function() {
    this.counter++;
    if(this.counter >= ANIM_FRAME_COUNT){
        this.setState(MOVE_STAND, false);
    }
};

Player.prototype.doGravity = function() {
    this.counter++;
    if(this.counter <= ANIM_FRAME_COUNT){
        this.y += this.speed;
    } else {
        this.moving = false;
        this.gravity();
        this.fallCounter++;
    }
};
Player.prototype.doStand = function() {
    if(!Tile.isSolid(this.coorners.u)){
        this.setAnim(ANIM_STAND_START,ANIM_STAND_END,true, this.dirrection != 1 ? ANIM_LEFT_ROW : ANIM_RIGHT_ROW, 8, true);
    }else{
        this.setAnim(ANIM_CROUCH_START,ANIM_CROUCH_START, false, this.dirrection != 1 ? ANIM_LEFT_ROW : ANIM_RIGHT_ROW, 8, true);
    }
};

Player.prototype.doUp = function() {
    if(++this.counter <= 18){
        switch (this.counter) {
            case 3:
                this.setAnim(ANIM_PUSH_END, ANIM_PUSH_END, false, this.dirrection == DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                break;
            case 6:
                this.setAnim(ANIM_JUMP_START, ANIM_JUMP_START, false, this.dirrection == DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                this.x += 8 * this.dirrection;
                this.y -= 8;
                break;
            case 9:
                this.setAnim(ANIM_JUMP_END, ANIM_JUMP_END, false, this.dirrection == DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                this.x += 8 * this.dirrection;
                this.y -= 8;
                break;
            case 12:
                this.setAnim(2, 2, false, this.dirrection == DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                this.x += 8 * this.dirrection;
                this.y -= 8;
                break;
            case 18:
                this.setAnim(ANIM_STAND, ANIM_STAND, false, this.dirrection == DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                this.x += 8 * this.dirrection;
                this.y -= 8;
            break;
        }
    } else {
        this.setState(MOVE_STAND, false);
    }
};
Player.prototype.makeIce = function() {
    this.engine.addIce(this.xtile + this.dirrection, this.ytile+1);
    this.engine.addSfx(new Sparks(this.engine, this.xtile + this.dirrection, this.ytile + 1));
};
Player.prototype.removeIce = function() {
    this.engine.removeIce(this.xtile + this.dirrection, this.ytile+1);
    this.engine.addSfx(new Sparks(this.engine, this.xtile + this.dirrection, this.ytile + 1));
};
Player.prototype.push = function() {
    var ice =  this.engine.iceAt(this.xtile+this.dirrection, this.ytile);
    if(ice && ice.canGlide(this.dirrection)){
        this.setAnim(ANIM_PUSH_START, ANIM_PUSH_END, false, this.dirrection == DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW, 3);
        this.setState(MOVE_PUSH, true);
    }
};
Player.prototype.doPush = function() {
    this.counter += 2;
    if(this.counter <= ANIM_FRAME_COUNT){
    } else {
        var ice =  this.engine.iceAt(this.xtile+this.dirrection, this.ytile);
        if(ice){
            ice.push(this.dirrection);
        }
        this.setState(MOVE_STAND, false);
    }
};
Player.prototype.doIce = function() {
    if(this.counter == 8){
        if(this.state == MOVE_ICE_MAKE){
            this.makeIce();
        } else{
            this.removeIce();
        }
    }
    this.counter += 1;
    if(this.counter >= ANIM_FRAME_COUNT){
        this.counter = 0;
        this.setState(MOVE_STAND, false);
    }
};
Player.prototype.draw = function(){
    AnimSprite.prototype.draw.call(this);
};
Player.prototype.move = function (){
    Sprite.prototype.move.call(this);
    this.gravity();
    switch (this.state) {
        case MOVE_RIGHT:
            this.doRun();
            break;
        case MOVE_LEFT:
            this.doRun();
            break;
        case MOVE_DOWN:
            this.doGravity();
            break;
        case MOVE_UP:
            this.doUp();
            break;
        case MOVE_TURN:
            this.doTurn();
            break;
        case MOVE_ICE_MAKE:
        case MOVE_ICE_REMOVE:
            this.doIce();
            break;
        case MOVE_STAND:
            this.doStand();
            break;
        case MOVE_PUSH:
            this.doPush();
            break;
        case MOVE_RIP:
            this.doRip();
            break;
    }
};
