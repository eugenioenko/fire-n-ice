

/**
 * Keyboard press engine
 */
class Keyboard {
    constructor() {
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
        this.keydown = this.keydown_.bind(this);
        this.keyup = this.keyup_.bind(this);
        this.mouse = this.mouse_.bind(this);
        window.addEventListener('click', this.mouse);
        window.addEventListener('keydown', this.keydown, false);
        window.addEventListener('keyup', this.keyup, false);
    }

    mouse_(e) {
        this.enter = true;
    }

    keydown_(e) {
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
    }

    keyup_(e) {
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
    }
}
