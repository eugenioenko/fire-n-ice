import { AnimSprite } from './animsprite';
import { Tile } from './tiles';
import { Consts }  from './constants';

export class Player extends AnimSprite {

    constructor(engine, tx, ty) {
        super(Consts.OBJECT_PLAYER, engine, 'img_dona', tx, ty, 48, 64, -10, -32, 2, 2, false);
        this.speed = 2;
        this.dirrection = 1;
        this.state = 0; //standing top right down left
        this.moving = false;
        this.tileWidth = Consts.TILE_WIDTH;
        this.tileHeight = Consts.TILE_WIDTH;
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
            if (this.dirrection !== Consts.DIR_LEFT) {
                //is not under a brick
                if (!Tile.isSolid(this.coorners.u)) {
                    this.setAnim(Consts.ANIM_TURN_START, Consts.ANIM_TURN_END, false, Consts.ANIM_RIGHT_ROW, 4);
                } else {
                    this.setAnim(Consts.ANIM_CROUCH_START,Consts.ANIM_CROUCH_START, false, Consts.ANIM_LEFT_ROW, 4);
                }
                this.setState(Consts.MOVE_TURN, true);
                this.dirrection = Consts.DIR_LEFT;
            } else{
                //running
                if (!Tile.isSolid(this.coorners.l) && Tile.isSolid(this.coorners.d)) {
                    //not under a brick
                    if (!Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ul)) {
                        this.setAnim(Consts.ANIM_RUN_START, Consts.ANIM_RUN_END, true, Consts.ANIM_LEFT_ROW, 2);
                    } else {
                        this.setAnim(Consts.ANIM_CROUCH_START, Consts.ANIM_CROUCH_END, true, Consts.ANIM_LEFT_ROW, 2);
                    }
                    this.setState(Consts.MOVE_LEFT, true);
                }
                //hit an ice
                if (Tile.isSolid(this.coorners.d) && (this.coorners.l === Consts.OBJECT_ICE || this.coorners.l === Consts.OBJECT_METAL)) {
                    this.push();
                }
                //climb
                if (Tile.isSolid(this.coorners.l) && Tile.isSolid(this.coorners.d)  && !Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ul) && !this.moving) {
                    this.setAnim(Consts.ANIM_PUSH_START,Consts.ANIM_PUSH_START,false, Consts.ANIM_LEFT_ROW);
                    this.setState(Consts.MOVE_UP, true);
                }
            }
        }
    }

    right() {
        if (!this.moving) {
            if (this.dirrection !== Consts.DIR_RIGHT) {
                if (!Tile.isSolid(this.coorners.u)) {
                    this.setAnim(Consts.ANIM_TURN_START, Consts.ANIM_TURN_END, false, Consts.ANIM_LEFT_ROW, 4);
                } else {
                    this.setAnim(Consts.ANIM_CROUCH_START,Consts.ANIM_CROUCH_START, false, Consts.ANIM_RIGHT_ROW, 4);
                }
                this.setState(Consts.MOVE_TURN, true);
                this.dirrection = Consts.DIR_RIGHT;
            } else{
                if (!Tile.isSolid(this.coorners.r) && Tile.isSolid(this.coorners.d)) {
                    if (!Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ur)) {
                        this.setAnim(Consts.ANIM_RUN_START, Consts.ANIM_RUN_END, true, Consts.ANIM_RIGHT_ROW, 2);
                    } else {
                        this.setAnim(Consts.ANIM_CROUCH_START, Consts.ANIM_CROUCH_END, true, Consts.ANIM_RIGHT_ROW, 2);
                    }
                    this.setState(Consts.MOVE_RIGHT, true);
                }
                if (Tile.isSolid(this.coorners.d) && (this.coorners.r === Consts.OBJECT_ICE || this.coorners.r === Consts.OBJECT_METAL)) {
                    this.push();
                }
                if (Tile.isSolid(this.coorners.r) && Tile.isSolid(this.coorners.d) && !Tile.isSolid(this.coorners.u) && !Tile.isSolid(this.coorners.ur) && !this.moving) {
                    this.setAnim(Consts.ANIM_PUSH_START,Consts.ANIM_PUSH_START,false, Consts.ANIM_RIGHT_ROW);
                    this.setState(Consts.MOVE_UP, true);
                }
            }
        }
    }

    burn() {
        if (this.state !== Consts.MOVE_RIP) {
            this.engine.sound.playOnce('danger');
            this.setState(Consts.MOVE_RIP, true);
            this.setAnim(Consts.ANIM_RIP_START,Consts.ANIM_RIP_END, true, Consts.ANIM_RIGHT_ROW);
        }
    }

    intro() {
        this.setAnim(Consts.ANIM_BIG_FALL_START,Consts.ANIM_BIG_FALL_END, true, Consts.ANIM_RIGHT_ROW, 4);
        this.setState(Consts.MOVE_INTRO, true);
    }

    outro() {
        this.setAnim(Consts.ANIM_FALL_START, Consts.ANIM_BIG_FALL_END, true, Consts.ANIM_RIGHT_ROW, 4);
        this.setState(Consts.MOVE_OUTRO, true);
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
                this.setState(Consts.MOVE_DOWN, true);
                if (this.fallCounter >= 1) {
                    this.engine.sound.playOnce("falling");
                    this.setAnim(Consts.ANIM_BIG_FALL_START, Consts.ANIM_BIG_FALL_END, true, Consts.ANIM_RIGHT_ROW, 1);
                } else {
                    this.setAnim(Consts.ANIM_BIG_FALL_START, Consts.ANIM_BIG_FALL_END, true, Consts.ANIM_RIGHT_ROW, 3);
                }
            } else {
                this.engine.sound.stop("falling");
                if (this.state === Consts.MOVE_DOWN) {
                    this.engine.sound.play('fall');
                    this.engine.addSparks(this.xtile, this.ytile, '124, 238, 66', 10,  0.75);
                    this.engine.addSparks(this.xtile, this.ytile + 1, '122, 211, 255', 5,  1.25);
                }
                this.fallCounter = 0;
                this.setState(Consts.MOVE_STAND, false);
                if (this.coorners.d === Consts.OBJECT_JAR) {
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
                if (this.dirrection === Consts.DIR_RIGHT) {
                    if (!Tile.isSolid(this.coorners.dr) && this.coorners.dr !== Consts.OBJECT_FIRE) {
                        this.setAnim(Consts.ANIM_ICE_START,Consts.ANIM_ICE_END,false, Consts.ANIM_RIGHT_ROW, 4);
                        this.setState(Consts.MOVE_ICE_MAKE, true);
                    } else if (this.coorners.dr === Consts.OBJECT_ICE) {
                        this.setAnim(Consts.ANIM_ICE_START,Consts.ANIM_ICE_END,false, Consts.ANIM_RIGHT_ROW, 4);
                        this.setState(Consts.MOVE_ICE_REMOVE, true);
                    } else {
                        this.setAnim(Consts.ANIM_ICE_START,Consts.ANIM_ICE_END,false, Consts.ANIM_RIGHT_ROW, 4);
                        this.setState(Consts.MOVE_ICE_FAIL, true);
                    }
                } else {
                    if (!Tile.isSolid(this.coorners.dl) && (this.coorners.dl !== Consts.OBJECT_FIRE)) {
                        this.setAnim(Consts.ANIM_ICE_START,Consts.ANIM_ICE_END,false, Consts.ANIM_LEFT_ROW, 4);
                        this.setState(Consts.MOVE_ICE_MAKE, true);
                    } else if (this.coorners.dl === Consts.OBJECT_ICE) {
                        this.setAnim(Consts.ANIM_ICE_START,Consts.ANIM_ICE_END,false, Consts.ANIM_LEFT_ROW, 4);
                        this.setState(Consts.MOVE_ICE_REMOVE, true);
                    } else {
                        this.setAnim(Consts.ANIM_ICE_START,Consts.ANIM_ICE_END,false, Consts.ANIM_LEFT_ROW, 4);
                        this.setState(Consts.MOVE_ICE_FAIL, true);
                    }
                }
            }
        }
    }

    jump() {
        if (!this.moving) {
            if (this.dirrection === Consts.DIR_RIGHT) {
                if (Tile.isSolid(this.coorners.r) && !Tile.isSolid(this.coorners.ur) && !Tile.isSolid(this.coorners.u)) {
                    this.setAnim(Consts.ANIM_PUSH_START,Consts.ANIM_PUSH_START,false, Consts.ANIM_RIGHT_ROW);
                    this.setState(Consts.MOVE_UP, true);
                }
            } else {
                if (Tile.isSolid(this.coorners.l) && !Tile.isSolid(this.coorners.ul) && !Tile.isSolid(this.coorners.u)) {
                    this.setAnim(Consts.ANIM_PUSH_START,Consts.ANIM_PUSH_START,false, Consts.ANIM_LEFT_ROW);
                    this.setState(Consts.MOVE_UP, true);
                }
            }
        }
    }

    doRun() {
        this.counter += 1;
        if (this.counter <= Consts.ANIM_FRAME_COUNT) {
            this.x += this.speed * this.dirrection;
        } else {
           this.setState(Consts.MOVE_STAND, false);
        }
    }

    doTurn() {
        this.counter += 1;
        if (this.counter >= Consts.ANIM_FRAME_COUNT) {
            this.setState(Consts.MOVE_STAND, false);
        }
    }

    doOutro() {
        this.counter += 1;
        if (this.counter % 10 === 0) {
            this.innerCounter += 1;
            if (this.innerCounter === 1) {
                this.engine.addSparks(this.xtile, this.ytile, '124, 238, 66', 15,  0.5);
            }
            if (this.innerCounter === 3) {
                this.engine.addSparks(this.xtile, this.ytile, '255, 135, 124', 20, 1);
            }
            if (this.innerCounter === 5) {
                this.engine.addSparks(this.xtile, this.ytile, '122, 211, 255', 25,  1.5);
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
            this.setState(Consts.MOVE_STAND, false);
            this.engine.nextLevel();
        }
    }

    doIntro() {
        this.counter += 1;
        if (this.counter === 8) {
            this.engine.addSparks(this.xtile, this.ytile, '124, 238, 66', 20,  0.5);
            this.engine.addSparks(this.xtile, this.ytile, '255, 135, 124', 15, 1);
            this.engine.addSparks(this.xtile, this.ytile, '122, 211, 255', 10,  1.5);
            this.engine.sound.play('stage-enter');
        }
        if (this.counter >= 32) {
            this.engine.sound.stop("falling");
            this.setState(Consts.MOVE_STAND, false);
        }
    }

    doGravity() {
        this.counter += 1;
        if (this.counter <= Consts.ANIM_FRAME_COUNT) {
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
                this.setAnim(Consts.ANIM_SLEEP_START,Consts.ANIM_SLEEP_END,true, this.dirrection !== 1 ? Consts.ANIM_LEFT_ROW : Consts.ANIM_RIGHT_ROW, 48, true);
            } else {
                this.setAnim(Consts.ANIM_STAND_START,Consts.ANIM_STAND_END,true, this.dirrection !== 1 ? Consts.ANIM_LEFT_ROW : Consts.ANIM_RIGHT_ROW, 8, true);
            }
        } else {
            this.setAnim(Consts.ANIM_CROUCH_START,Consts.ANIM_CROUCH_START, false, this.dirrection !== 1 ? Consts.ANIM_LEFT_ROW : Consts.ANIM_RIGHT_ROW, 8, true);
        }
    }

    doUp() {
        this.counter += 1;
        if (this.counter <= 18) {
            switch (this.counter) {
                case 3:
                    this.engine.sound.play('climb');
                    this.engine.addSparks(this.xtile, this.ytile, '124, 238, 66', 10,  0.75);
                    this.engine.addSparks(this.xtile, this.ytile, '255, 135, 124', 5, 1.25);
                    this.setAnim(Consts.ANIM_PUSH_END, Consts.ANIM_PUSH_END, false, this.dirrection === Consts.DIR_RIGHT ? Consts.ANIM_RIGHT_ROW : Consts.ANIM_LEFT_ROW);
                    break;
                case 6:
                    this.setAnim(Consts.ANIM_JUMP_START, Consts.ANIM_JUMP_START, false, this.dirrection === Consts.DIR_RIGHT ? Consts.ANIM_RIGHT_ROW : Consts.ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 9:
                    this.setAnim(Consts.ANIM_JUMP_END, Consts.ANIM_JUMP_END, false, this.dirrection === Consts.DIR_RIGHT ? Consts.ANIM_RIGHT_ROW : Consts.ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 12:
                    this.setAnim(2, 2, false, this.dirrection === Consts.DIR_RIGHT ? Consts.ANIM_RIGHT_ROW : Consts.ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                    break;
                case 18:
                    this.setAnim(Consts.ANIM_STAND, Consts.ANIM_STAND, false, this.dirrection === Consts.DIR_RIGHT ? Consts.ANIM_RIGHT_ROW : Consts.ANIM_LEFT_ROW);
                    this.x += 8 * this.dirrection;
                    this.y -= 8;
                break;
            }
        } else {
            this.setState(Consts.MOVE_STAND, false);
        }
    }

    makeIce() {
        this.engine.sound.play('new-ice');
        this.engine.addIceBlock(this.xtile + this.dirrection, this.ytile+1);
        this.engine.addSparks(this.xtile + this.dirrection, this.ytile + 1);
        this.engine.addSparks(this.xtile + this.dirrection, this.ytile + 1, '124, 214, 255', 5);
    }

    removeIceBlock() {
        this.engine.sound.play('ice-remove');
        this.engine.removeIceBlock(this.xtile + this.dirrection, this.ytile+1);
        this.engine.addSparks(this.xtile + this.dirrection, this.ytile + 1);
        this.engine.addSparks(this.xtile + this.dirrection, this.ytile + 1, '124, 214, 255', 5);
    }

    push() {
        let ice =  this.engine.iceAt(this.xtile+this.dirrection, this.ytile);
        if (ice && ice.canGlide(this.dirrection)) {
            this.engine.addSparks(this.xtile + this.dirrection, this.ytile, '255, 255, 255', 3);
            this.engine.addSparks(this.xtile + this.dirrection, this.ytile, '124, 214, 255', 3, 1.5);
            this.setAnim(Consts.ANIM_PUSH_START, Consts.ANIM_PUSH_END, false, this.dirrection === Consts.DIR_RIGHT ? Consts.ANIM_RIGHT_ROW : Consts.ANIM_LEFT_ROW, 3);
            this.setState(Consts.MOVE_PUSH, true);
        }
    }

    doPush() {
        this.counter += 2;
        if (this.counter <= Consts.ANIM_FRAME_COUNT) {
            // fixme
        } else {
            let ice =  this.engine.iceAt(this.xtile+this.dirrection, this.ytile);
            if (ice) {
                this.engine.sound.play('ice-push');
                ice.push(this.dirrection);
            }
            this.setState(Consts.MOVE_STAND, false);
        }
    }

    doIce() {
        if (this.counter === 8) {
            if (this.state === Consts.MOVE_ICE_MAKE) {
                this.makeIce();
            } else{
                this.removeIceBlock();
            }
        }
        this.counter += 1;
        if (this.counter >= Consts.ANIM_FRAME_COUNT) {
            this.setState(Consts.MOVE_STAND, false);
        }
    }

    doFailIce() {
        if (this.counter === 8) {
            this.engine.sound.play('ice-disabled');
            this.engine.addSparks(this.xtile + this.dirrection, this.ytile + 1, '88,66,66');
        }
        this.counter += 1;
        if (this.counter >= Consts.ANIM_FRAME_COUNT) {
            this.setState(Consts.MOVE_STAND, false);
        }
    }

    collisions() {
        if (this.engine.spriteTypeAt(this.xtile, this.ytile, Consts.OBJECT_PLAYER) === Consts.OBJECT_FIRE) {
            this.burn();
        }
    }

    move () {
        this.gravity();
        this.collisions();
        if (this.state !== Consts.MOVE_STAND) {
            this.standCounter = 0;
        }
        if (this.state !== Consts.MOVE_DOWN) {
            this.fallCounter = 0;
        }
        switch (this.state) {
            case Consts.MOVE_RIGHT:
                this.doRun();
                break;
            case Consts.MOVE_LEFT:
                this.doRun();
                break;
            case Consts.MOVE_DOWN:
                this.doGravity();
                break;
            case Consts.MOVE_UP:
                this.doUp();
                break;
            case Consts.MOVE_TURN:
                this.doTurn();
                break;
            case Consts.MOVE_ICE_MAKE:
            case Consts.MOVE_ICE_REMOVE:
                this.doIce();
                break;
            case Consts.MOVE_ICE_FAIL:
                this.doFailIce();
                break;
            case Consts.MOVE_STAND:
                this.doStand();
                break;
            case Consts.MOVE_PUSH:
                this.doPush();
                break;
            case Consts.MOVE_RIP:
                this.doRip();
                break;
            case Consts.MOVE_OUTRO:
                this.doOutro();
                break;
            case Consts.MOVE_INTRO:
                this.doIntro();
                break;
        }
    }
}