/**
 * Engine Loop
 */
class Engine {

    constructor(canvas, resources) {
        this.canvas = canvas;
        this.cwidth = canvas.width;
        this.cheight = canvas.height;
        this.resources = resources;
        this.ctx = this.canvas.getContext('2d');
        this.sprites = [];
        this.sfxs = [];
        this.player = {};
        this.level = 0;
        this.levels = levels;
        this.keyboard = new Keyboard();
        this.sound = new Sound();
        this.state = STATE_START;
        this.load(levels[this.level]);
    }

    draw() {
        this.ctx.clearRect(0,0,this.cwidth,this.cheight);
        this.map.draw();
        // reverse loop, player draws last
        for (let i = this.sprites.length - 1; i >= 0; i--) {
            this.sprites[i].draw();
        }
        for (let i = 0; i < this.sfxs.length; ++i) {
            this.sfxs[i].draw();
        }
    }

    collision() {
        let fires = false;
        for (let i = 0; i < this.sprites.length; i++) {
            if (this.sprites[i] instanceof Fire) {
                fires = true;
                let fire = this.sprites[i];
                // player collisions
                if (fire.xtile == this.player.xtile &&
                    fire.ytile == this.player.ytile)
                {
                    this.player.burn();
                    return true;
                }
                // ice collisions
                for (let j = 0; j < this.sprites.length; j++) {
                    if (this.sprites[j] instanceof Ice) {
                        let ice = this.sprites[j];
                        if (fire.xtile >= ice.xtile &&
                            fire.xtile < ice.xtile+ice.length  &&
                            fire.ytile  == ice.ytile)
                        {
                            this.sound.play('fire-off');
                            this.removeFire(fire.xtile, fire.ytile);
                            this.removeIceBlock(fire.xtile, fire.ytile);
                            this.addSfx(new Sparks(this, fire.xtile, fire.ytile,
                                '255, 87, 34', 20));
                            this.addSfx(new Sparks(this, fire.xtile, fire.ytile,
                                '255, 122, 88', 20));
                            //this.fires.splice(i,1);
                            return true;
                        }
                    }
                }
            }
        }
        if (!fires) {
            this.level++;
            this.load(levels[this.level]);
            this.addSfx(new Sparks(this, this.player.xtile,
                this.player.ytile, '255,255,255', 200));
        }
    }

    move() {
        let objectsMoving = false;
        for (let i = 0; i < this.sprites.length; ++i) {
            if (!(this.sprites[i] instanceof Player) &&
                this.sprites[i].moving)
            {
                objectsMoving = true;
            }
            this.sprites[i].engineMove();
        }
        for (let i = 0; i < this.sfxs.length; ++i) {
            this.sfxs[i].engineMove();
        }
        if (!objectsMoving) {
            if (this.keyboard.up) {
                //this.player.jump();
            }
            if (this.keyboard.down) {
                this.player.ice();
            }
            if (this.keyboard.left) {
                this.player.left();
            }
            if (this.keyboard.right) {
                this.player.right();
            }
            if (this.keyboard.enter) {
               this.load(levels[this.level]);
               this.keyboard.enter = false;
            }
        }
        this.collision();
    }

    iceAt(tx, ty) {
        for (let i = 0; i < this.sprites.length; i++) {
            if (this.sprites[i].isSpriteAt(tx, ty)) {
                return this.sprites[i];
            }
        }
        return false;
    }

    addIceBlock(tx, ty, frozen) {
        let foundIceBlocks = [ ];
        frozen = (typeof length === 'undefined') ? false : frozen;
        for (let i = 0; i < this.sprites.length; i++) {
            if (this.sprites[i] instanceof Ice && this.sprites[i].ytile == ty) {
                let ice = this.sprites[i];
                if (ice.xtile - 1 == tx || ice.xtile + ice.length == tx) {
                    foundIceBlocks.push(ice);
                }
            }
        }
        if (foundIceBlocks.length == 0) {
            this.sprites.push(new Ice(this, tx, ty, 1, frozen));
        } else if (foundIceBlocks.length == 1) {
            foundIceBlocks[0].addBlock(tx);
        } else {
            this.joinIceBlocks(foundIceBlocks[0], foundIceBlocks[1]);
        }
    }

    joinIceBlocks(iceblockA,iceblockB) {
        let tx = iceblockA.xtile <= iceblockB.xtile ? iceblockA.xtile : iceblockB.xtile;
        let ty = iceblockA.ytile;
        let length = iceblockA.length + iceblockB.length + 1;
        this.addSprite(new Ice(this, tx, ty, length));
        this.removeSprite(iceblockA);
        this.removeSprite(iceblockB);
    }

    removeIceBlock(tx, ty) {
        for (let i = 0; i < this.sprites.length; i++) {
            if (this.sprites[i] instanceof Ice &&
                this.sprites[i].ytile == ty &&
                tx >= this.sprites[i].xtile &&
                tx < this.sprites[i].xtile + this.sprites[i].length)
            {
                if (this.sprites[i].removeBlock(tx) <= 0) {
                    this.sprites.splice(i,1);
                }
                return;
            }
        }
    }

    removeFire(tx, ty) {
        for (let i = 0; i < this.sprites.length; i++) {
            if ((this.sprites[i].ytile == ty) && (tx == this.sprites[i].xtile) && (this.sprites[i] instanceof Fire)) {
                this.sprites.splice(i,1);
                return;
            }
        }
    }

    addSprite(sprite) {
        this.sprites.push(sprite);
    }

    removeSprite(sprite) {
        for (let i = 0; i < this.sprites.length; i++) {
            if (this.sprites[i] == sprite) {
                this.sprites.splice(i,1);
                return true;
            }
        }
        return false;
    }

    addSfx(sfx) {
        this.sfxs.push(sfx);
    }

    removeSfx(sprite) {
        for (let i = 0; i < this.sfxs.length; i++) {
            if (this.sfxs[i] == sprite) {
                this.sfxs.splice(i,1);
                return true;
            }
        }
        return false;
    }

    spriteAt(tx, ty) {
        if (tx < 0 || ty < 0 || tx > this.map.width || ty > this.map.height) {
            return OBJECT_OUT;
        }
        if (!this.map.map[ty][tx]) {
            for (let i = 0; i < this.sprites.length; i++) {
                if (this.sprites[i].isSpriteAt(tx, ty)) {
                    return this.sprites[i].id;
                }
            }
        } else {
            return this.map.map[ty][tx];
        }
        return OBJECT_BACKGROUND;
    }

    save(name, theme, category, world) {
        let data = {};
        data.map = this.map.map;
        data.sprites = [];
        for (let i = 0; i < this.sprites.length; i++) {
            let sprite = this.sprites[i];
            sprite.length = (typeof sprite.length == "undefined") ? 1 : sprite.length;
            data.sprites.push({
                "id": sprite.id,
                "x": sprite.xtile,
                "y": sprite.ytile,
                "l": sprite.length
            });
        }
        data.image = this.canvas.toDataURL('image/png').slice(22);
        data.category = (typeof category == "undefined") ? 0 : category;
        data.world = (typeof world == "undefined") ? 0 : world;
        data.name = (typeof name == "undefined") ? '' : name;
        data.theme = (typeof theme == "undefined") ? 0 : theme;
        return data;
    }

    load(data) {
        this.sprites = [];
        this.data = data;
        this.map = new TileMap(this, data.map);
        for (let i = 0; i < data.sprites.length; ++i) {
            let sprite = data.sprites[i];
            sprite.x = parseInt(sprite.x);
            sprite.y = parseInt(sprite.y);
            switch(sprite.id) {
                case OBJECT_PLAYER:
                    this.player = new Player(this, sprite.x, sprite.y);
                    this.addSprite(this.player);
                    break;
                case OBJECT_ICE:
                    sprite.l = typeof sprite.l == "undefined" ? 1 : sprite.l;
                    this.addSprite(new Ice(this, sprite.x, sprite.y, parseInt(sprite.l)));
                    break;
                case OBJECT_FIRE:
                    this.addSprite(new Fire(this, sprite.x, sprite.y));
                    break;
            }
        }
    }
}
