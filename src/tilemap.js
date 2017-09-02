

/**
 * Tilemap class
 * @param {object} engine Engine
 * @param {object} map  Matrix of the map
 */
var TileMap = function(engine, map){
    this.ctx = engine.ctx;
    this.background = this.ctx.createPattern(Tile.getImage(OBJECT_BACKGROUND), 'repeat');
    this.map = map;
    this.engine = engine;
    this.tileWidth = TILE_WIDTH;
    this.tileHeight = TILE_WIDTH;
    this.height = this.map.length - 1;
    this.width = this.map[0].length - 1;
};
/**
 * Returns the content of the tile inside the matrix
 * if position out of bounds returns OBJECT_OUT
 * @param  {number} y position
 * @param  {number} x position
 * @return {number}   Content of the tile
 */
TileMap.prototype.getTile = function(x, y) {
    if(x < 0 || y < 0 || x > this.width || y > this.height){
        return OBJECT_OUT;
    }
    return this.map[y][x];

};
/**
 * Draws the map
 * @return {none}
 */
TileMap.prototype.draw = function() {
    var state = TILE_MIDDLE;
    this.ctx.save();
    this.ctx.fillStyle = this.background;
    this.ctx.fillRect(0,0,this.engine.cwidth,this.engine.cheight);
    for(var i = 0; i <= this.width; ++i){
        for(var j = 0; j <= this.height; ++j){
            if(this.map[j][i] && Tile.getImage(this.map[j][i])){
                if(this.map[j][i] == 1){
                    if(!this.getTile(i-1, j) && !this.getTile(i+1, j)){
                        state = TILE_BOTH;
                    } else if(!this.getTile(i-1, j)){
                        state = TILE_LEFT;
                    }else if(!this.getTile(i+1, j)){
                        state = TILE_RIGHT;
                    }else{
                        state = TILE_MIDDLE;
                    }
                } else {
                    state = 0;
                }
                this.ctx.drawImage(Tile.getImage(this.map[j][i]), state, 0, this.tileWidth, this.tileHeight, i*this.tileWidth, j*this.tileHeight, this.tileWidth, this.tileHeight);
            }
        }
    }
    this.ctx.restore();
};
TileMap.prototype.move = function(){};
TileMap.prototype.engineMove = function(){};


