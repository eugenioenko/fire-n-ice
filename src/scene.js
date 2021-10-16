import { Consts } from "./constants";
import { Frost } from "./struct";
import { Fire } from "./fire";
import { Ice } from "./ice";
import { Jar } from "./jar";
import { Metal } from "./metal";
import { Player } from "./player";
import { TileMap } from "./tilemap";
import { levels } from "./levels";

export class Scene {
  constructor(engine) {
    this.engine = engine;
  }

  save() {
    let data = {};
    data.map = this.engine.map.map;
    data.theme = this.engine.map.theme;
    data.sprites = [];
    for (const sprite of this.engine.sprites) {
      let value = typeof sprite.length === "undefined" ? 1 : sprite.length;
      value = sprite.id === Consts.ObjectJar ? sprite.onFire : value;
      let fl, fr;
      if (sprite.id === Consts.ObjectIce) {
        fl = sprite.frozen.left;
        fr = sprite.frozen.right;
      }
      data.sprites.push({
        id: sprite.id,
        x: sprite.xTile,
        y: sprite.yTile,
        v: value,
        fl: fl,
        fr: fr,
      });
    }

    return data;
  }

  load(index) {
    if (typeof levels[index] === "undefined") {
      index = 0;
    }
    this.engine.level = index;
    const level = levels[index];
    this.engine.sprites = [];
    this.engine.map = new TileMap(this.engine, level.map, level.theme);
    for (const sprite of level.sprites) {
      switch (sprite.id) {
        case Consts.ObjectPlayer:
          this.engine.player = new Player(this.engine, sprite.x, sprite.y);
          this.engine.addSprite(this.engine.player);
          break;
        case Consts.ObjectIce:
          let frozen = new Frost(true, true);
          if (typeof sprite.fl !== "undefined") {
            frozen.left = sprite.fl;
            frozen.right = sprite.fr;
          }
          this.engine.addSprite(
            new Ice(this.engine, sprite.x, sprite.y, parseInt(sprite.v), frozen)
          );
          break;
        case Consts.ObjectMetal:
          this.engine.addSprite(new Metal(this.engine, sprite.x, sprite.y, 1));
          break;
        case Consts.ObjectFire:
          this.engine.addSprite(new Fire(this.engine, sprite.x, sprite.y));
          break;
        case Consts.ObjectJar:
          const jar = new Jar(this.engine, sprite.x, sprite.y);
          if (sprite.v == 1) {
            jar.turnOnFire();
          }
          this.engine.addSprite(jar);
          break;
      }
    }
  }
}
