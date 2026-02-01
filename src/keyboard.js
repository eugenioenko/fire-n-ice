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

    // Canvas click to start
    const canvas = document.getElementById('canvas');
    if (canvas) {
      canvas.addEventListener('click', () => {
        if (this.intro) {
          this.enter = true;
        }
        this.intro = false;
      });
    }

    // Mobile controls - bind with null checks for compatibility
    this.bindMobileButton('btn_action', 'pointerdown', () => {
      this.down = true;
      this.action = true;
      this.left = false;
      this.right = false;
    });
    this.bindMobileButton('btn_action', 'pointerup', () => {
      this.down = false;
      this.action = false;
    });
    this.bindMobileButton('btn_action', 'pointerleave', () => {
      this.down = false;
      this.action = false;
    });

    this.bindMobileButton('btn_left', 'pointerdown', () => {
      this.left = true;
      this.right = false;
    });
    this.bindMobileButton('btn_left', 'pointerup', () => (this.left = false));
    this.bindMobileButton('btn_left', 'pointerleave', () => (this.left = false));

    this.bindMobileButton('btn_right', 'pointerdown', () => {
      this.right = true;
      this.left = false;
    });
    this.bindMobileButton('btn_right', 'pointerup', () => (this.right = false));
    this.bindMobileButton('btn_right', 'pointerleave', () => (this.right = false));

    this.bindMobileButton('btn_up', 'pointerdown', () => (this.up = true));
    this.bindMobileButton('btn_up', 'pointerup', () => (this.up = false));
    this.bindMobileButton('btn_up', 'pointerleave', () => (this.up = false));

    this.bindMobileButton('btn_down', 'pointerdown', () => {
      this.down = true;
      this.action = true;
    });
    this.bindMobileButton('btn_down', 'pointerup', () => {
      this.down = false;
      this.action = false;
    });
    this.bindMobileButton('btn_down', 'pointerleave', () => {
      this.down = false;
      this.action = false;
    });

    this.bindMobileButton('btn_select', 'click', () => (this.enter = true));
  }

  bindMobileButton(id, event, handler) {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener(event, handler);
    }
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
