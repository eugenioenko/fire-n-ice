

var Tile = new (function(){ // jshint ignore:line
    this.tiles = {};
    this.tiles[OBJECT_BACKGROUND] = {
        image: document.getElementById('img_bg'),
        solid: false
    };
    this.tiles[OBJECT_OUT] = {
        image: false,
        solid: true
    };
    this.tiles[OBJECT_PLAYER] = {
        image: false,
        solid: true
    };
    this.tiles[OBJECT_ICE] = {
        image: false,
        solid: true
    };
    this.tiles[OBJECT_WALL] = {
        image: document.getElementById('img_tile'),
        solid: true
    };
    this.tiles[OBJECT_NULL] = {
        image: false,
        solid: false
    };
    this.tiles[OBJECT_FIRE] = {
        image: false,
        solid: false
    };

    this.isSolid = function(id){
        if (typeof this.tiles[id] == "undefined") {
            console.log('UNDEFINED ON tiles');
            throw new Error('UNDEFINED ON isSolid');
        } else {
            return this.tiles[id].solid;
        }
    };

    this.getImage = function(id){
        if (typeof this.tiles[id] == "undefined") {
            console.log('UNDEFINED ON tiles get Image');
            throw new Error('UNDEFINED ON tiles get Image');
        } else {
            return this.tiles[id].image;
        }
    };

})();
