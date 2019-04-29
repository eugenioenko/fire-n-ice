class Player extends AnimSprite {

    constructor(engine, tx, ty) {
        super(OBJECT_PLAYER, engine, 'img_dona', tx, ty, 48, 64, -10, -32, 2, 2, false);
        this.speed = 2;
        this.dirrection = 1;
        this.state = 0; //standing top right down left
        this.moving = false;
        this.tileWidth = TILE_WIDTH;
        this.tileHeight = TILE_WIDTH;
        this.animDelay = 3;
        this.counter = 0;
        this.fallCounter = 0;
        this.innerCounter = 0;
        this.standCounter = 0;
        this.intro();
    }

    left() {
        if (!this.moving) {
            //if standing then turn
            if (this.dirrection !== DIR_LEFT) {
                //is not under a brick
                if (!Tile.isSolid(this.coorners.u)) {
                    this.setAnim(ANIM_TURN_START, ANIM_TURN_END, false, ANIM_RIGHT_ROW, 4);
                } else {
                    this.setAnim(ANIM_CROUCH_START,ANIM_CROUCH_START, false, ANIM_LEFT_ROW, 4);
                }
                this.setState(MOVE_TURN, true);
                this.dirrection = DIR_LEFT;
            } else{
                //running
                if (!Tile.isSolid(this.coorners.l) && Tile.isSolid(this.coorners.d)) {
                    //not under a brick
                    if (!Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ul)) {
                        this.setAnim(ANIM_RUN_START, ANIM_RUN_END, false, ANIM_LEFT_ROW);
                    } else {
                        this.setAnim(ANIM_CROUCH_START, ANIM_CROUCH_END, false, ANIM_LEFT_ROW);
                    }
                    this.setState(MOVE_LEFT, true);
                }
                //hit an ice
                if (Tile.isSolid(this.coorners.d) && (this.coorners.l === OBJECT_ICE || this.coorners.l === OBJECT_METAL)) {
                    this.push();
                }
                //climb
                if (Tile.isSolid(this.coorners.l) && Tile.isSolid(this.coorners.d)  && !Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ul) && !this.moving) {
                    this.setAnim(ANIM_PUSH_START,ANIM_PUSH_START,false, ANIM_LEFT_ROW);
                    this.setState(MOVE_UP, true);
                }
            }
        }
    }

    right() {
        if (!this.moving) {
            if (this.dirrection !== DIR_RIGHT) {
                if (!Tile.isSolid(this.coorners.u)) {
                    this.setAnim(ANIM_TURN_START, ANIM_TURN_END, false, ANIM_LEFT_ROW, 4);
                } else {
                    this.setAnim(ANIM_CROUCH_START,ANIM_CROUCH_START, false, ANIM_RIGHT_ROW, 4);
                }
                this.setState(MOVE_TURN, true);
                this.dirrection = DIR_RIGHT;
            } else{
                if (!Tile.isSolid(this.coorners.r) && Tile.isSolid(this.coorners.d)) {
                    if (!Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ur)) {
                        this.setAnim(ANIM_RUN_START, ANIM_RUN_END, false, ANIM_RIGHT_ROW);
                    } else {
                        this.setAnim(ANIM_CROUCH_START, ANIM_CROUCH_END, false, ANIM_RIGHT_ROW);
                    }
                    this.setState(MOVE_RIGHT, true);
                }
                if (Tile.isSolid(this.coorners.d) && (this.coorners.r === OBJECT_ICE || this.coorners.r === OBJECT_METAL)) {
                    this.push();
                }
                if (Tile.isSolid(this.coorners.r) && Tile.isSolid(this.coorners.d) && !Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ur) && !this.moving) {
                    this.setAnim(ANIM_PUSH_START,ANIM_PUSH_START,false, ANIM_RIGHT_ROW);
                    this.setState(MOVE_UP, true);
                }
            }
        }
    }

    burn() {
        if (this.state !== MOVE_RIP) {
            this.engine.sound.playOnce('danger');
            this.setState(MOVE_RIP, true);
            this.setAnim(ANIM_RIP_START,ANIM_RIP_END, true, ANIM_RIGHT_ROW);
        }
    }

    intro() {
        this.setAnim(ANIM_BIG_FALL_START,ANIM_BIG_FALL_END, true, ANIM_RIGHT_ROW, 4);
        this.setState(MOVE_INTRO, true);
        this.y -= 32;
    }

    outro() {
        this.setAnim(ANIM_FALL_START, ANIM_BIG_FALL_END, true, ANIM_RIGHT_ROW, 4);
        this.setState(MOVE_OUTRO, true);
        this.innerCounter = 0;
    }

    doRip() {

    }

    gravity() {
        if (!this.moving) {
            if (typeof this.coorners.d === "undefined") {
                console.eror('undefined coorner');
            }
            if (!Tile.isSolid(this.coorners.d)) {
                this.setState(MOVE_DOWN, true);
                if (this.fallCounter >= 1) {
                    this.engine.sound.playOnce("falling");
                }
                if (this.fallCounter >= 2) {
                    this.setAnim(ANIM_BIG_FALL_START, ANIM_BIG_FALL_END, true, ANIM_RIGHT_ROW);
                } else {
                    this.setAnim(ANIM_BIG_FALL_START, ANIM_BIG_FALL_END, true, ANIM_RIGHT_ROW);
                }
            } else {

                this.engine.sound.stop("falling");
                if (this.state === MOVE_DOWN) {
                    this.engine.sound.play('fall');
                    if (this.fallCounter >= 2) {
                        this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile + 1, '255, 135, 124', 5, 0.75));
                        this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile + 1, '122, 211, 255', 10,  1));
                    }
                }
                this.fallCounter = 0;
                this.setState(MOVE_STAND, false);
                if (this.coorners.d === OBJECT_JAR) {
                    const jar = this.engine.spriteAt(this.xtile, this.ytile + 1);
                    if (jar && jar.onFire) {
                        this.burn();
                    }
                }
            }
        }
    }

    ice() {
        if (!this.moving) {
            if (Tile.isSolid(this.coorners.d)) {
                if (this.dirrection === DIR_RIGHT) {
                    if (!Tile.isSolid(this.coorners.dr) && this.coorners.dr !== OBJECT_FIRE) {
                        this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_RIGHT_ROW, 4);
                        this.setState(MOVE_ICE_MAKE, true);
                    } else if (this.coorners.dr === OBJECT_ICE) {
                        this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_RIGHT_ROW, 4);
                        this.setState(MOVE_ICE_REMOVE, true);
                    } else {
                        this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_RIGHT_ROW, 4);
                        this.setState(MOVE_ICE_FAIL, true);
                    }
                } else {
                    if (!Tile.isSolid(this.coorners.dl) && (this.coorners.dl !== OBJECT_FIRE)) {
                        this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_LEFT_ROW, 4);
                        this.setState(MOVE_ICE_MAKE, true);
                    } else if (this.coorners.dl === OBJECT_ICE) {
                        this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_LEFT_ROW, 4);
                        this.setState(MOVE_ICE_REMOVE, true);
                    } else {
                        this.setAnim(ANIM_ICE_START,ANIM_ICE_END,false, ANIM_LEFT_ROW, 4);
                        this.setState(MOVE_ICE_FAIL, true);
                    }
                }
            }
        }
    }

    jump() {
        if (!this.moving) {
            if (this.dirrection === DIR_RIGHT) {
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
    }

    doRun() {
        this.counter++;
        if (this.counter <= ANIM_FRAME_COUNT) {
            this.x += this.speed * this.dirrection;
        } else {
            this.setState(MOVE_STAND, false);
        }
    }

    doTurn() {
        this.counter++;
        if (this.counter >= ANIM_FRAME_COUNT) {
            this.setState(MOVE_STAND, false);
        }
    }

    doOutro() {
        this.counter += 1;
        if (this.counter % 10 === 0) {
            this.innerCounter += 1;
            if (this.innerCounter === 1) {
                this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '124, 238, 66', 20,  0.5));
            }
            if (this.innerCounter === 3) {
                this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '255, 135, 124', 15, 1));
            }
            if (this.innerCounter === 5) {
                this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '122, 211, 255', 10,  1.5));
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
            this.setState(MOVE_STAND, false);
            this.engine.nextLevel();
        }
    }

    doIntro() {
        this.counter += 1;
        if (this.counter === 4) {
            this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '124, 238, 66', 20,  0.5));
            this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '255, 135, 124', 15, 1));
            this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '122, 211, 255', 10,  1.5));
            this.engine.sound.play('stage-enter');
        }
        if (this.counter <= 16) {
            this.y += 2;
        } else {
            this.engine.sound.stop("falling");
            this.setState(MOVE_STAND, false);
        }
    }

    doGravity() {
        this.counter += 1;
        if (this.counter <= ANIM_FRAME_COUNT) {
            this.y += this.speed;
        } else {
            this.moving = false;
            this.gravity();
            this.fallCounter++;
        }
    }

    doStand() {
        if (!Tile.isSolid(this.coorners.u)) {
            if (this.standCounter++ > 500) {
                this.setAnim(ANIM_SLEEP_START,ANIM_SLEEP_END,true, this.dirrection !== 1 ? ANIM_LEFT_ROW : ANIM_RIGHT_ROW, 48, true);
            } else {
                this.setAnim(ANIM_STAND_START,ANIM_STAND_END,true, this.dirrection !== 1 ? ANIM_LEFT_ROW : ANIM_RIGHT_ROW, 8, true);
            }
        } else {
            this.setAnim(ANIM_CROUCH_START,ANIM_CROUCH_START, false, this.dirrection !== 1 ? ANIM_LEFT_ROW : ANIM_RIGHT_ROW, 8, true);
        }
    }

    doUp() {
        this.counter += 1;
        if (this.counter <= 18) {
            switch (this.counter) {
                case 3:
                    this.engine.sound.play('climb');
                    this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '124, 238, 66', 10,  0.75));
                    this.engine.addSfx(new Sparks(this.engine, this.xtile, this.ytile, '255, 135, 124', 5, 1.25));
                    this.setAnim(ANIM_PUSH_END, ANIM_PUSH_END, false, this.dirrection === DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                    break;
                case 6:
                    this.setAnim(ANIM_JUMP_START, ANIM_JUMP_START, false, this.dirrection === DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 9:
                    this.setAnim(ANIM_JUMP_END, ANIM_JUMP_END, false, this.dirrection === DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 12:
                    this.setAnim(2, 2, false, this.dirrection === DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 18:
                    this.setAnim(ANIM_STAND, ANIM_STAND, false, this.dirrection === DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                break;
            }
        } else {
            this.setState(MOVE_STAND, false);
        }
    }

    makeIce() {
        this.engine.sound.play('new-ice');
        this.engine.addIceBlock(this.xtile + this.dirrection, this.ytile+1);
        this.engine.addSfx(new Sparks(this.engine, this.xtile + this.dirrection, this.ytile + 1));
        this.engine.addSfx(new Sparks(this.engine, this.xtile + this.dirrection, this.ytile + 1, '124, 214, 255', 5));
    }

    removeIceBlock() {
        this.engine.sound.play('ice-remove');
        this.engine.removeIceBlock(this.xtile + this.dirrection, this.ytile+1);
        this.engine.addSfx(new Sparks(this.engine, this.xtile + this.dirrection, this.ytile + 1));
        this.engine.addSfx(new Sparks(this.engine, this.xtile + this.dirrection, this.ytile + 1, '124, 214, 255', 5));
    }

    push() {
        let ice =  this.engine.iceAt(this.xtile+this.dirrection, this.ytile);
        if (ice && ice.canGlide(this.dirrection)) {
            this.setAnim(ANIM_PUSH_START, ANIM_PUSH_END, false, this.dirrection === DIR_RIGHT ? ANIM_RIGHT_ROW : ANIM_LEFT_ROW, 3);
            this.setState(MOVE_PUSH, true);
        }
    }

    doPush() {
        this.counter += 2;
        if (this.counter <= ANIM_FRAME_COUNT) {
            // fixme
        } else {
            let ice =  this.engine.iceAt(this.xtile+this.dirrection, this.ytile);
            if (ice) {
                this.engine.sound.play('ice-push');
                ice.push(this.dirrection);
            }
            this.setState(MOVE_STAND, false);
        }
    }

    doIce() {
        if (this.counter === 8) {
            if (this.state === MOVE_ICE_MAKE) {
                this.makeIce();
            } else{
                this.removeIceBlock();
            }
        }
        this.counter += 1;
        if (this.counter >= ANIM_FRAME_COUNT) {
            this.setState(MOVE_STAND, false);
        }
    }

    doFailIce() {
        if (this.counter === 8) {
            this.engine.sound.play('ice-disabled');
            this.engine.addSfx(new Sparks(this.engine, this.xtile + this.dirrection, this.ytile + 1, '88,66,66'));
        }
        this.counter += 1;
        if (this.counter >= ANIM_FRAME_COUNT) {
            this.setState(MOVE_STAND, false);
        }
    }

    collisions() {
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, OBJECT_PLAYER) === OBJECT_FIRE) {
            this.burn();
        }
    }

    move () {
        this.gravity();
        this.collisions();
        if (this.state !== MOVE_STAND) {
            this.standCounter = 0;
        }
        if (this.state !== MOVE_DOWN) {
            this.fallCounter = 0;
        }
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
            case MOVE_ICE_FAIL:
                this.doFailIce();
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
            case MOVE_OUTRO:
                this.doOutro();
                break;
            case MOVE_INTRO:
                this.doIntro();
                break;
        }
    }
}