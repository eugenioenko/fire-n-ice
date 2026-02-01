import { Keyboard } from '../keyboard';

describe('Keyboard', () => {
  let keyboard;

  beforeEach(() => {
    // Setup DOM elements needed by Keyboard
    document.body.innerHTML = `
      <canvas id="canvas"></canvas>
      <span id="btn_action"></span>
      <span id="btn_left"></span>
      <span id="btn_right"></span>
      <span id="btn_select"></span>
    `;
    keyboard = new Keyboard();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('initialization', () => {
    it('should initialize all direction keys to false', () => {
      expect(keyboard.up).toBe(false);
      expect(keyboard.down).toBe(false);
      expect(keyboard.left).toBe(false);
      expect(keyboard.right).toBe(false);
    });

    it('should initialize action keys to false', () => {
      expect(keyboard.action).toBe(false);
      expect(keyboard.escape).toBe(false);
      expect(keyboard.mKey).toBe(false);
      expect(keyboard.sKey).toBe(false);
    });

    it('should start in intro mode', () => {
      expect(keyboard.intro).toBe(true);
    });
  });

  describe('keydown events', () => {
    it('should set left to true on ArrowLeft', () => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' });
      window.dispatchEvent(event);
      expect(keyboard.left).toBe(true);
      expect(keyboard.right).toBe(false);
    });

    it('should set right to true on ArrowRight', () => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
      window.dispatchEvent(event);
      expect(keyboard.right).toBe(true);
      expect(keyboard.left).toBe(false);
    });

    it('should set up to true on ArrowUp', () => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
      window.dispatchEvent(event);
      expect(keyboard.up).toBe(true);
    });

    it('should set down and action on ArrowDown', () => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
      window.dispatchEvent(event);
      expect(keyboard.down).toBe(true);
      expect(keyboard.action).toBe(true);
    });

    it('should set down and action on Space', () => {
      const event = new KeyboardEvent('keydown', { key: ' ' });
      window.dispatchEvent(event);
      expect(keyboard.down).toBe(true);
      expect(keyboard.action).toBe(true);
    });

    it('should set escape on Escape key', () => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' });
      window.dispatchEvent(event);
      expect(keyboard.escape).toBe(true);
    });

    it('should set mKey on M key', () => {
      const event = new KeyboardEvent('keydown', { key: 'm' });
      window.dispatchEvent(event);
      expect(keyboard.mKey).toBe(true);
    });

    it('should set sKey on S key', () => {
      const event = new KeyboardEvent('keydown', { key: 's' });
      window.dispatchEvent(event);
      expect(keyboard.sKey).toBe(true);
    });
  });

  describe('keyup events', () => {
    it('should set left to false on ArrowLeft release', () => {
      keyboard.left = true;
      const event = new KeyboardEvent('keyup', { key: 'ArrowLeft' });
      window.dispatchEvent(event);
      expect(keyboard.left).toBe(false);
    });

    it('should set right to false on ArrowRight release', () => {
      keyboard.right = true;
      const event = new KeyboardEvent('keyup', { key: 'ArrowRight' });
      window.dispatchEvent(event);
      expect(keyboard.right).toBe(false);
    });

    it('should set up to false on ArrowUp release', () => {
      keyboard.up = true;
      const event = new KeyboardEvent('keyup', { key: 'ArrowUp' });
      window.dispatchEvent(event);
      expect(keyboard.up).toBe(false);
    });

    it('should set down and action to false on ArrowDown release', () => {
      keyboard.down = true;
      keyboard.action = true;
      const event = new KeyboardEvent('keyup', { key: 'ArrowDown' });
      window.dispatchEvent(event);
      expect(keyboard.down).toBe(false);
      expect(keyboard.action).toBe(false);
    });

    it('should set enter to true on Enter release', () => {
      const event = new KeyboardEvent('keyup', { key: 'Enter' });
      window.dispatchEvent(event);
      expect(keyboard.enter).toBe(true);
    });
  });

  describe('canvas click', () => {
    it('should set enter and exit intro mode on canvas click', () => {
      const canvas = document.getElementById('canvas');
      canvas.click();
      expect(keyboard.enter).toBe(true);
      expect(keyboard.intro).toBe(false);
    });

    it('should not set enter if already past intro', () => {
      keyboard.intro = false;
      keyboard.enter = false;
      const canvas = document.getElementById('canvas');
      canvas.click();
      expect(keyboard.enter).toBe(false);
    });
  });

  describe('touch controls', () => {
    it('should set down on action button pointerdown', () => {
      const btn = document.getElementById('btn_action');
      btn.dispatchEvent(new Event('pointerdown'));
      expect(keyboard.down).toBe(true);
      expect(keyboard.left).toBe(false);
      expect(keyboard.right).toBe(false);
    });

    it('should clear down on action button pointerup', () => {
      keyboard.down = true;
      const btn = document.getElementById('btn_action');
      btn.dispatchEvent(new Event('pointerup'));
      expect(keyboard.down).toBe(false);
    });

    it('should set left on left button pointerdown', () => {
      const btn = document.getElementById('btn_left');
      btn.dispatchEvent(new Event('pointerdown'));
      expect(keyboard.left).toBe(true);
      expect(keyboard.right).toBe(false);
      expect(keyboard.down).toBe(false);
    });

    it('should set right on right button pointerdown', () => {
      const btn = document.getElementById('btn_right');
      btn.dispatchEvent(new Event('pointerdown'));
      expect(keyboard.right).toBe(true);
      expect(keyboard.left).toBe(false);
      expect(keyboard.down).toBe(false);
    });

    it('should set enter on select button click', () => {
      const btn = document.getElementById('btn_select');
      btn.click();
      expect(keyboard.enter).toBe(true);
    });
  });
});
