import { Scene } from '../scene';
import { Engine } from '../engine';
import { Consts } from '../constants';

describe('Level 30 teleports', () => {
  let engine;
  let scene;

  beforeEach(() => {
    engine = Object.assign(Object.create(Engine.prototype), {
      ctx: {},
      resources: { get: jest.fn() },
      sound: { play: jest.fn() },
      addSparks: jest.fn(),
    });
    scene = new Scene(engine);
    scene.load(29);
  });

  it.each([0, 1])('teleports the player from jar %i to the other jar', sourceIndex => {
    const teleports = engine.sprites.filter(sprite => sprite.id === Consts.ObjectTeleport);
    expect(teleports).toHaveLength(2);
    const source = teleports[sourceIndex];
    const destination = teleports[1 - sourceIndex];
    const player = engine.player;
    player.x = source.x;
    player.y = source.y - Consts.TileWidth;
    player.updatePosition();
    player.updateCorners();
    player.setState(Consts.MoveStand, false);

    player.iceOrTeleport();
    for (let i = 0; i < 20 && player.moving; i++) {
      player.doTeleportIn();
    }

    expect(player.xTile).toBe(destination.xTile);
    expect(player.yTile).toBe(destination.yTile - 1);
    expect(player.state).toBe(Consts.MoveStand);
    expect(player.moving).toBe(false);
  });

  it('preserves both teleport links when the level is saved and reloaded', () => {
    const saved = JSON.parse(JSON.stringify(scene.save()));
    new Scene(engine, saved).load(29);

    const teleports = engine.sprites.filter(sprite => sprite.id === Consts.ObjectTeleport);
    expect(teleports).toHaveLength(2);
    expect(teleports[0].link).toBe(teleports[1]);
    expect(teleports[1].link).toBe(teleports[0]);
  });
});
