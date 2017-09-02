

/**
 * Animated Sprite, inherts from Sprite.
 * Adds drawing of pictures in the body of sprite
 * @param {object} engine    Engine Engine
 * @param {object} image   Dom image object (img src=)
 * @param {number} tx      Tile X position
 * @param {number} ty      Tile Y position
 * @param {number} width   Width of the sprite
 * @param {number} height  Height of the sprite
 * @param {number} offsetX Offset X of drawing the picture into the canvas
 * @param {number} offsetY Offset Y of drawing the picture into the canvas
 * @param {number} start   Animation frame start
 * @param {number} end     Animation frame end
 * @param {boolean} loop   Repeat animation
 */
var AnimSprite = function(id, engine, image, tx, ty, width, height, offsetX, offsetY, start, end, loop){
    Sprite.call(this, id, engine, tx, ty, width, height);
    this.image = document.getElementById(image);
    this.animLoop = loop;
    this.animStart = start;
    this.animEnd = end;
    this.animCount = 0;
    this.animDelay = ANIM_STANDARD_DELAY;
    this.animDelayCount = 0;
    this.animRow = 0;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
};
AnimSprite.inherits(Sprite);

/**
 * Sets the sprite animation frames
 * @param {number} start Start frame of the animation
 * @param {number} end   End frame of the animation
 * @param {boolean} loop  If true, animation will loop
 * @param {number} row   Row of the frames in the sprite image
 * @param {number} delay Delay between each frame
 * @param {boolean} once  Sets all the new values only one time.
 */
AnimSprite.prototype.setAnim = function(start, end, loop, row, delay, once){
    var _once = (typeof once === 'undefined') ? false : once;
    var _delay = (typeof delay === 'undefined') ? ANIM_STANDARD_DELAY : delay;
    var _row = (typeof row === 'undefined') ? this.animRow : row;
    if(!_once){
        this.animStart = start;
        this.animEnd = end;
        this.animCount = start;
        this.animLoop = loop;
        this.animDelay = _delay;
        this.animRow = _row;
    } else {
        if(this.animStart != start || this.animEnd != end || this.animLoop != loop || this.animRow != _row){
            this.animStart = start;
            this.animEnd = end;
            this.animCount = start;
            this.animLoop = loop;
            this.animDelay = _delay;
            this.animRow = _row;
        }
    }

};
/**
 * Draws the frame of the sprite in the canvas
 */
AnimSprite.prototype.draw = function() {
    this.ctx.save();
    this.ctx.drawImage(this.image, this.animCount*this.width, this.animRow * this.height, this.width, this.height, this.x+this.offsetX, this.y+this.offsetY, this.width, this.height);
    if(this.animDelayCount++ > this.animDelay){
        if(++this.animCount > this.animEnd){
            if(this.animLoop){
                this.animCount = this.animStart;
            }else{
                this.animCount = this.animEnd;
            }
        }
        this.animDelayCount = 0;
    }
    this.ctx.restore();
};

