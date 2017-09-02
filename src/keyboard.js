

/**
 * Keyboard press engine
 */
var Keyboard = function(){
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.keydown = this.keydown_.bind(this);
    this.keyup = this.keyup_.bind(this);
    window.addEventListener('keydown', this.keydown, false);
    window.addEventListener('keyup', this.keyup, false);
};

Keyboard.prototype.keydown_ = function(e) {
    switch (e.keyCode) {
        case 37: // Left
            this.left = true;
            break;
        case 38: // Up
            this.up = true;
            break;
        case 39: // Right
            this.right = true;
            break;
        case 40: // Down
            this.down = true;
            break;
        case 13: //Enter
            this.enter = false;
            break;
    }
};

Keyboard.prototype.keyup_ = function(e) {
    switch (e.keyCode) {
        case 37: // Left
            this.left = false;
            break;
        case 38: // Up
            this.up = false;
            break;
        case 39: // Right
            this.right = false;
            break;
        case 40: // Down
            this.down = false;
            break;
        case 13: //Enter
            this.enter = true;
            break;
    }
};
