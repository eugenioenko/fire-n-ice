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
    this.keydown = this.keydown_.bind(this);
    this.keyup = this.keyup_.bind(this);
    this.intro = true;

    window.addEventListener("keydown", this.keydown, false);
    window.addEventListener("keyup", this.keyup, false);
    document.getElementById("canvas").addEventListener("click", () => {
      if (this.intro) {
        this.enter = true;
      }
      this.intro = false;
    });
    document
      .getElementById("btn_action")
      .addEventListener("pointerdown", () => {
        this.down = true;
        this.left = false;
        this.right = false;
      });
    document
      .getElementById("btn_action")
      .addEventListener("pointerup", () => (this.down = false));
    document.getElementById("btn_left").addEventListener("pointerdown", () => {
      this.left = true;
      this.right = false;
      this.down = false;
    });
    document
      .getElementById("btn_left")
      .addEventListener("pointerup", () => (this.left = false));
    document.getElementById("btn_right").addEventListener("pointerdown", () => {
      this.right = true;
      this.left = false;
      this.down = false;
    });
    document
      .getElementById("btn_right")
      .addEventListener("pointerup", () => (this.right = false));
    document
      .getElementById("btn_select")
      .addEventListener("click", () => (this.enter = true));
  }

  keydown_(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37: // Left
        this.left = true;
        this.right = false;
        break;
      case 38: // Up
        this.up = true;
        break;
      case 39: // Right
        this.right = true;
        this.left = false;
        break;
      case 40: // Down
      case 32: // Space
        this.action = true;
        this.left = false;
        this.right = false;
        this.down = true;
        break;
      case 13: //Enter
        this.enter = false;
        break;
    }
  }

  keyup_(e) {
    e.preventDefault();
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
      case 32: // Space
        this.action = false;
        this.down = false;
        break;
      case 13: //Enter
        this.enter = true;
        break;
    }
  }
}
