import { Consts }  from './constants';
import { TileMap } from './tilemap';
import { Player } from './player';
import { Ice } from './ice';
import { Fire } from './fire';
import { levels } from './levels';
import { Jar } from './jar';

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
            let value = (typeof sprite.length === "undefined") ? 1 : sprite.length;
            value = sprite.id === Consts.OBJECT_JAR ? sprite.onFire : value;
            data.sprites.push({
                "id": sprite.id,
                "x": sprite.xtile,
                "y": sprite.ytile,
                "v": value
            });
        }

        return data;
    }

    load(index) {
        if (typeof levels[index] === 'undefined') {
            index = 0;
        }
        this.engine.level = index;
        const level = levels[index];
        this.engine.sprites = [];
        this.engine.map = new TileMap(this.engine, level.map, level.theme);
        for (const sprite of level.sprites) {
            switch(sprite.id) {
                case Consts.OBJECT_PLAYER:
                    this.engine.player = new Player(this.engine, sprite.x, sprite.y);
                    this.engine.addSprite(this.engine.player);
                    break;
                case Consts.OBJECT_ICE:
                    sprite.v = typeof sprite.v === "undefined" ? 1 : sprite.v;
                    this.engine.addSprite(new Ice(this.engine, sprite.x, sprite.y, parseInt(sprite.v)));
                    break;
                case Consts.OBJECT_METAL:
                    this.engine.addSprite(new Metal(this.engine, sprite.x, sprite.y, 1));
                    break;
                case Consts.OBJECT_FIRE:
                    this.engine.addSprite(new Fire(this.engine, sprite.x, sprite.y));
                    break;
                case Consts.OBJECT_JAR:
                    const jar = new Jar(this.engine, sprite.x, sprite.y);
                    jar.onFire = sprite.v === "1" ? true : false;
                    this.engine.addSprite(jar);
                    break;
            }
        }
    }
}