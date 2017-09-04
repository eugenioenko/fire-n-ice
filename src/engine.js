
/**
 * Engine Loop
 */
var Engine = function(){
    this.canvas = document.getElementById('canvas');
    this.cwidth = canvas.width;
    this.cheight = canvas.height;
    this.ctx = this.canvas.getContext('2d');
    this.sprites = [];
    this.sfxs = [];
    this.player = {};
    this.level = 0;
    this.levels = levels;
    this.keyboard = new Keyboard();
    this.load(levels[this.level]);

};

Engine.prototype.draw = function() {
    this.ctx.clearRect(0,0,this.cwidth,this.cheight);
    this.map.draw();
    // reverse loop, player draws last
    for (var i = this.sprites.length - 1; i >= 0; i--) {
        this.sprites[i].draw();
    }
    for (i = 0; i < this.sfxs.length; ++i){
        this.sfxs[i].draw();
    }
};


Engine.prototype.collision = function() {
    var fires = false;
    for (var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i] instanceof Fire){
            fires = true;
            var fire = this.sprites[i];
            // player collisions
            if(fire.xtile == this.player.xtile &&
                fire.ytile == this.player.ytile)
            {
                this.player.burn();
                return true;
            }
            // ice collisions
            for (var j = 0; j < this.sprites.length; j++){
                if(this.sprites[j] instanceof Ice){
                    var ice = this.sprites[j];
                    if(fire.xtile >= ice.xtile &&
                        fire.xtile < ice.xtile+ice.length  &&
                        fire.ytile  == ice.ytile)
                    {
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
    if(!fires){
        this.level++;
        this.load(levels[this.level]);
        this.addSfx(new Sparks(this, this.player.xtile,
            this.player.ytile, '255,255,255', 200));
    }
};

Engine.prototype.move = function() {
    var objectsMoving = false;
    for(var i = 0; i < this.sprites.length; ++i){
        if(!(this.sprites[i] instanceof Player) &&
            this.sprites[i].moving)
        {
            objectsMoving = true;
        }
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
        if(this.keyboard.enter){
           this.load(levels[this.level]);
           this.keyboard.enter = false;
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


Engine.prototype.addIceBlock = function(tx, ty, frozen) {
    var foundIceBlocks = [];
    frozen = (typeof length === 'undefined') ? false : frozen;
    for(var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i] instanceof Ice && this.sprites[i].ytile == ty){
            var ice = this.sprites[i];
            if(ice.xtile - 1 == tx || ice.xtile + ice.length == tx){
                foundIceBlocks.push(ice);
            }
        }
    }
    if(foundIceBlocks.length == 0){
        this.sprites.push(new Ice(this, tx, ty, 1, frozen));
    } else if(foundIceBlocks.length == 1){
        foundIceBlocks[0].addBlock(tx);
    } else {
        this.joinIceBlocks(foundIceBlocks[0], foundIceBlocks[1]);
    }
};

Engine.prototype.joinIceBlocks = function(iceblockA,iceblockB) {
    var tx = iceblockA.xtile <= iceblockB.xtile ? iceblockA.xtile : iceblockB.xtile;
    var ty = iceblockA.ytile;
    var length = iceblockA.length + iceblockB.length + 1;
    this.addSprite(new Ice(this, tx, ty, length));
    this.removeSprite(iceblockA);
    this.removeSprite(iceblockB);
};

Engine.prototype.removeIceBlock = function(tx, ty){
    for (var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i] instanceof Ice &&
            this.sprites[i].ytile == ty &&
            tx >= this.sprites[i].xtile &&
            tx < this.sprites[i].xtile + this.sprites[i].length)
        {
            if(this.sprites[i].removeBlock(tx) <= 0){
                this.sprites.splice(i,1);
            }
            return;
        }
    }
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
Engine.prototype.removeSprite = function(sprite){
    for (var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i] == sprite){
            this.sprites.splice(i,1);
            return true;
        }
    }
    return false;
};
/*
Engine.prototype.removeSpriteAt = function(tx, ty){
    for (var i = 0; i < this.sprites.length; i++){
        if(this.sprites[i].xtile == tx && this.sprites[i].ytile == ty){
            this.sprites.splice(i,1);
        }
    }
};
*/
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



Engine.prototype.save = function(name, theme, category, world){
    var data = {};
    data.map = this.map.map;
    data.sprites = [];
    for (var i = 0; i < this.sprites.length; i++){
        var sprite = this.sprites[i];
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
};
Engine.prototype.update = function(id){
   /* var data = this.save();
    $.post(this.base_url+'api/update/'+id, data, function(){
        console.log('updated');
    });*/
};
Engine.prototype.load = function(data) {
    this.sprites = [];
    this.data = data;
    this.map = new TileMap(this, data.map);
    for(var i = 0; i < data.sprites.length; ++i){
        var sprite = data.sprites[i];
        sprite.x = parseInt(sprite.x);
        sprite.y = parseInt(sprite.y);
        switch(sprite.id){
            case "777":
                this.player = new Player(this, sprite.x, sprite.y);
                this.addSprite(this.player);
                break;
            case "333":
                sprite.l = typeof sprite.l == "undefined" ? 1 : sprite.l;
                this.addSprite(new Ice(this, sprite.x, sprite.y, parseInt(sprite.l)));
                break;
            case "666":
                this.addSprite(new Fire(this, sprite.x, sprite.y));
                break;
        }
    }
};



