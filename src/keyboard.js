/**
 * Keyboard press engine
 */
export class Keyboard {
  constructor() {
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.action = false;
    this.escape = false;
    this.mKey = false;
    this.sKey = false;
    this.keydown = this.keydown_.bind(this);
    this.keyup = this.keyup_.bind(this);
    this.intro = true;

    window.addEventListener('keydown', this.keydown, false);
    window.addEventListener('keyup', this.keyup, false);
    document.getElementById('canvas').addEventListener('click', () => {
      if (this.intro) {
        this.enter = true;
      }
      this.intro = false;
    });
    document.getElementById('btn_action').addEventListener('pointerdown', () => {
      this.down = true;
      this.left = false;
      this.right = false;
    });
    document.getElementById('btn_action').addEventListener('pointerup', () => (this.down = false));
    document.getElementById('btn_left').addEventListener('pointerdown', () => {
      this.left = true;
      this.right = false;
      this.down = false;
    });
    document.getElementById('btn_left').addEventListener('pointerup', () => (this.left = false));
    document.getElementById('btn_right').addEventListener('pointerdown', () => {
      this.right = true;
      this.left = false;
      this.down = false;
    });
    document.getElementById('btn_right').addEventListener('pointerup', () => (this.right = false));
    document.getElementById('btn_select').addEventListener('click', () => (this.enter = true));
  }

  keydown_(e) {
    e.preventDefault();
    switch (e.key) {
      case 'ArrowLeft':
        this.left = true;
        this.right = false;
        break;
      case 'ArrowUp':
        this.up = true;
        break;
      case 'ArrowRight':
        this.right = true;
        this.left = false;
        break;
      case 'ArrowDown':
      case ' ':
        this.action = true;
        this.left = false;
        this.right = false;
        this.down = true;
        break;
      case 'Enter':
        this.enter = false;
        break;
      case 'Escape':
        this.escape = true;
        break;
      case 'm':
      case 'M':
        this.mKey = true;
        break;
      case 's':
      case 'S':
        this.sKey = true;
        break;
    }
  }

  keyup_(e) {
    e.preventDefault();
    switch (e.key) {
      case 'ArrowLeft':
        this.left = false;
        break;
      case 'ArrowUp':
        this.up = false;
        break;
      case 'ArrowRight':
        this.right = false;
        break;
      case 'ArrowDown':
      case ' ':
        this.action = false;
        this.down = false;
        break;
      case 'Enter':
        this.enter = true;
        break;
    }
  }
}
