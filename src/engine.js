
/**
 * Engine Loop
 */
var Engine = function(base_url){
    this.base_url = typeof base_url == "undefined" ? '' : base_url;
    this.map = LevelMap;
    this.canvas = document.getElementById('canvas');
    this.cwidth = canvas.width;
    this.cheight = canvas.height;
    this.ctx = this.canvas.getContext('2d');
    this.fps = 30;
    this.skipFrame = false;
    this.dificulty = 30;
    this.delay = 0;
    this.engineState = 'play';
    this.lastTime = (new Date()).getTime();
    this.currTime = 0,
    this.gameloop = this.gameloop_.bind(this); // jshint ignore:line
    this.sprites = [];
    this.sfxs = [];
};



Engine.prototype.gameloop_ = function() {
    window.requestAnimationFrame(this.gameloop);
    this.doGame();
};

Engine.prototype.doGame = function(){
    this.draw();
    this.move();
};

Engine.prototype.draw = function() {
    this.ctx.clearRect(0,0,this.cw,this.ch);
    this.map.draw();
    for (var i = 0; i < this.sprites.length; ++i){
        this.sprites[i].draw();
    }
    for (i = 0; i < this.sfxs.length; ++i){
        this.sfxs[i].draw();
    }
};


Engine.prototype.collision = function() {
    for (var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i] instanceof Fire){
            var fire = this.sprites[i];
            for (var j = 0; j < this.sprites.length; j++){
                if(this.sprites[j] instanceof Ice){

                    var ice = this.sprites[j];

                    if(fire.xtile >= ice.xtile && fire.xtile < ice.xtile+ice.length  && fire.ytile  == ice.ytile){
                        this.removeFire(fire.xtile, fire.ytile);
                        this.removeIce(fire.xtile, fire.ytile);
                        this.addSfx(new Sparks(this, fire.xtile, fire.ytile, '255, 87, 34', 20));
                        this.addSfx(new Sparks(this, fire.xtile, fire.ytile, '255, 122, 88', 20));
                        //this.fires.splice(i,1);
                        return true;
                    }
                }
            }
        }
    }
};

Engine.prototype.move = function() {
    var objectsMoving = false;
    for(var i = 0; i < this.sprites.length; ++i){
        if(!(this.sprites[i] instanceof Player) && this.sprites[i].moving) objectsMoving = true;
        this.sprites[i].engineMove();
    }
    for(i = 0; i < this.sfxs.length; ++i){
        this.sfxs[i].engineMove();
    }
    if(!objectsMoving){
        if(this.keyboard.up){
            //this.player.jump();
        }
        if(this.keyboard.down){
            this.player.ice();
        }
        if(this.keyboard.left){
            this.player.left();
        }
        if(this.keyboard.right){
            this.player.right();
        }
    }
    this.collision();
};

Engine.prototype.iceAt = function(tx, ty){
    for (var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i].isSpriteAt(tx, ty)){
            return this.sprites[i];
        }
    }
    return false;
};

Engine.prototype.addIce = function(tx, ty, frozen) {
    var found = false;
    var j = 0;
    frozen = (typeof length === 'undefined') ? false : frozen;
    for(var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i] instanceof Ice && this.sprites[i].ytile == ty){
            var ice = this.sprites[i];
            if(ice.xtile - 1 == tx || ice.xtile + ice.length == tx){
                if(!found){
                    found = true;
                    j = i;
                }else{
                    this.joinIce(j,i);
                    return;
                }
            }
        }
    }
    if(found){
        this.sprites[j].add(tx);
        return;
    }
    this.sprites.push(new Ice(this, tx, ty, 1, frozen));
};

Engine.prototype.joinIce = function(i,j) {
    var tx = this.sprites[i].xtile <= this.sprites[j].xtile ? this.sprites[i].xtile : this.sprites[j].xtile;
    var ty = this.sprites[i].ytile;
    var length = this.sprites[i].length + this.sprites[j].length +1;
    this.sprites.push(new Ice(this, tx, ty, length));
    if(i>j){
        this.sprites.splice(i,1);
        this.sprites.splice(j,1);
    }else{
        this.sprites.splice(j,1);
        this.sprites.splice(i,1);
    }
};

Engine.prototype.removeIce = function(tx, ty){
    for (var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i] instanceof Ice && this.sprites[i].ytile == ty && tx >= this.sprites[i].xtile && tx < this.sprites[i].xtile + this.sprites[i].length){
            if(this.sprites[i].remove(tx) <= 0){
                this.sprites.splice(i,1);
            }
            return;
        }
    }
};

Engine.prototype.addFire = function(tx, ty){
    this.sprites.push(new Fire(this, tx, ty));
};
Engine.prototype.removeFire = function(tx, ty){
    for (var i = 0; i < this.sprites.length; i++){
        if((this.sprites[i].ytile == ty) && (tx == this.sprites[i].xtile) && (this.sprites[i] instanceof Fire)){
            this.sprites.splice(i,1);
            return;
        }
    }
};

Engine.prototype.addSprite = function(sprite) {
    this.sprites.push(sprite);
};
Engine.prototype.removeSprite = function(tx, ty){
    for (var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i].xtile == tx && this.sprites[i].ytile == ty){
            this.sprites.splice(i,1);
        }
    }
};

Engine.prototype.addSfx = function(sfx) {
    this.sfxs.push(sfx);
};
Engine.prototype.removeSfx = function(sprite){
    for (var i = 0; i < this.sfxs.length; i++){
        if(this.sfxs[i] == sprite){
            this.sfxs.splice(i,1);
            return true;
        }
    }
    return false;
};

Engine.prototype.spriteAt = function(tx, ty){
    if(tx < 0 || ty < 0 || tx > this.map.width || ty > this.map.height){
        return OBJECT_OUT;
    }
    if(!this.map.map[ty][tx]){
        for (var i = 0; i < this.sprites.length; i++){
            if(this.sprites[i].isSpriteAt(tx, ty)){
                return this.sprites[i].id;
            }
        }
    } else {
        return this.map.map[ty][tx];
    }

    return OBJECT_BACKGROUND;
};

Engine.prototype.remove = function(sprite){
    for (var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i] == sprite){
            this.sprites.splice(i,1);
            return true;
        }
    }
    return false;
};
Engine.prototype.save = function(name, theme, category, world){
    var data = {};
    data.map = this.map.map;
    data.sprites = [];
    for (var i = 0; i < this.sprites.length; i++){
        var sprite = this.sprites[i];
        sprite.length = (typeof sprite.length == "undefined") ? 1 : sprite.length;
        data.sprites.push({"id": sprite.id, "x": sprite.xtile, "y": sprite.ytile, "l": sprite.length});
    }
    data.image = this.canvas.toDataURL('image/png').slice(22);
    data.category = (typeof category == "undefined") ? 0 : category;
    data.world = (typeof world == "undefined") ? 0 : world;
    data.name = (typeof name == "undefined") ? '' : name;
    data.theme = (typeof theme == "undefined") ? 0 : theme;
    return data;
};
Engine.prototype.update = function(id){
    var data = this.save();
    $.post(this.base_url+'api/update/'+id, data, function(){
        console.log('updated');
    });
};
Engine.prototype.load = function(data) {
    this.data = data;
    this.map = new TileMap(this, data.map);
    for(var i = 0; i < data.sprites.length; ++i){
        var sprite = data.sprites[i];
        sprite.x = parseInt(sprite.x);
        sprite.y = parseInt(sprite.y);
        switch(sprite.id){
            case "777":
                this.player = new Player(this, sprite.x, sprite.y);
                this.add(this.player);
                break;
            case "333":
                sprite.l = typeof sprite.l == "undefined" ? 1 : sprite.l;
                this.add(new Ice(this, sprite.x, sprite.y, parseInt(sprite.l)));
                break;
            case "666":
                this.add(new Fire(this, sprite.x, sprite.y));
                break;
        }
    }
    this.keyboard = new Keyboard();
    this.gameloop();
};

Engine.prototype.init = function() {
    this.map = new TileMap(this, LevelMap);
    this.player = new Player(this, 5, 5);
    this.add(new Fire(this, 4, 8));
    this.add(this.player);
    this.keyboard = new Keyboard();
    this.gameloop();
};



Engine.prototype.add = function(sprite){
    this.sprites.push(sprite);
};
