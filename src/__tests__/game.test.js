import { Game } from '../game';
import { Engine } from '../engine';

jest.mock('../engine');
jest.mock('../state');

describe('Game frame scheduling', () => {
  let game;
  let engine;
  let pendingFrames;
  let nextFrameId;
  let requestFrameSpy;
  let cancelFrameSpy;

  function frame(timestamp) {
    expect(pendingFrames.size).toBe(1);
    const [id, callback] = pendingFrames.entries().next().value;
    pendingFrames.delete(id);
    callback(timestamp);
  }

  beforeEach(() => {
    pendingFrames = new Map();
    nextFrameId = 0;
    requestFrameSpy = jest.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => {
      const id = nextFrameId++;
      pendingFrames.set(id, callback);
      return id;
    });
    cancelFrameSpy = jest.spyOn(window, 'cancelAnimationFrame').mockImplementation(id => {
      pendingFrames.delete(id);
    });
    engine = {
      draw: jest.fn(),
      move: jest.fn(),
      keyboard: { destroy: jest.fn() },
      sound: { soundtrack: jest.fn() },
    };
    Engine.mockImplementation(() => engine);
    game = new Game({
      canvas: { width: 640, height: 480, getContext: () => ({}) },
      resources: {},
    });
  });

  afterEach(() => {
    game.destroy();
    jest.restoreAllMocks();
  });

  it.each([30, 60, 75, 120, 144, 240])('draws and moves 60 times per second on a %i Hz display', refreshRate => {
    frame(0);
    for (let i = 1; i <= refreshRate; i++) {
      frame(i * 1000 / refreshRate);
    }

    expect(engine.draw).toHaveBeenCalledTimes(60);
    expect(engine.move).toHaveBeenCalledTimes(60);
    expect(pendingFrames.size).toBe(1);
  });

  it('keeps fractional time across callbacks instead of resetting the clock each tick', () => {
    frame(0);
    frame(10);
    expect(engine.move).not.toHaveBeenCalled();
    frame(20);
    expect(engine.move).toHaveBeenCalledTimes(1);
    frame(30);
    expect(engine.move).toHaveBeenCalledTimes(1);
    frame(40);
    expect(engine.move).toHaveBeenCalledTimes(2);
    frame(50);
    expect(engine.move).toHaveBeenCalledTimes(3);
  });

  it('preserves draw-before-move order for each tick when catching up', () => {
    const calls = [];
    engine.draw.mockImplementation(() => calls.push('draw'));
    engine.move.mockImplementation(() => calls.push('move'));

    frame(0);
    frame(50);

    expect(calls).toEqual(['draw', 'move', 'draw', 'move', 'draw', 'move']);
  });

  it('limits catch-up work after a long stall and then resumes at the normal speed', () => {
    frame(0);
    frame(10000);
    expect(engine.move).toHaveBeenCalledTimes(5);

    frame(10000 + 1000 / 60);
    expect(engine.move).toHaveBeenCalledTimes(6);
  });

  it('discards elapsed time and partial ticks across visibility changes', () => {
    frame(0);
    frame(10);
    document.dispatchEvent(new Event('visibilitychange'));
    frame(10000);
    frame(10010);
    expect(engine.move).not.toHaveBeenCalled();

    frame(10000 + 1000 / 60);
    expect(engine.move).toHaveBeenCalledTimes(1);
  });

  it('cancels the pending frame and removes its visibility listener on destruction', () => {
    const removeListenerSpy = jest.spyOn(document, 'removeEventListener');
    const callback = pendingFrames.get(0);

    game.destroy();

    expect(cancelFrameSpy).toHaveBeenCalledWith(0);
    expect(pendingFrames.size).toBe(0);
    expect(removeListenerSpy).toHaveBeenCalledWith('visibilitychange', game.onVisibilityChange);
    expect(engine.keyboard.destroy).toHaveBeenCalled();

    callback(1000);
    expect(engine.move).not.toHaveBeenCalled();
    expect(requestFrameSpy).toHaveBeenCalledTimes(1);
  });

  it('stops catch-up ticks and scheduling when destroyed during a tick', () => {
    engine.move.mockImplementationOnce(() => game.destroy());

    frame(0);
    frame(50);

    expect(engine.move).toHaveBeenCalledTimes(1);
    expect(pendingFrames.size).toBe(0);
    expect(requestFrameSpy).toHaveBeenCalledTimes(2);
  });
});
