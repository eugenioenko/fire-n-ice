class Scene {

    constructor(engine) {
        this.engine = engine;
    }

    save() {
        let data = {};
        data.map = this.engine.map.map;
        data.theme = this.engine.map.theme;
        data.sprites = [];
        for (const sprite of this.engine.sprites) {
            sprite.length = (typeof sprite.length === "undefined") ? 1 : sprite.length;
            data.sprites.push({
                "id": sprite.id,
                "x": sprite.xtile,
                "y": sprite.ytile,
                "l": sprite.length
            });
        }

        return data;
    }

    load(index) {
        if (typeof levels[index] === 'undefined') {
            index = 0;
        }
        const level = levels[index];
        this.engine.sprites = [];
        this.engine.map = new TileMap(this.engine, level.map, level.theme);
        for (const sprite of level.sprites) {
            switch(sprite.id) {
                case OBJECT_PLAYER:
                    this.engine.player = new Player(this.engine, sprite.x, sprite.y);
                    this.engine.addSprite(this.engine.player);
                    break;
                case OBJECT_ICE:
                    sprite.l = typeof sprite.l === "undefined" ? 1 : sprite.l;
                    this.engine.addSprite(new Ice(this.engine, sprite.x, sprite.y, parseInt(sprite.l)));
                    break;
                case OBJECT_METAL:
                    this.engine.addSprite(new Metal(this.engine, sprite.x, sprite.y, 1));
                    break;
                case OBJECT_FIRE:
                    this.engine.addSprite(new Fire(this.engine, sprite.x, sprite.y));
                    break;
                case OBJECT_JAR:
                    this.engine.addSprite(new Jar(this.engine, sprite.x, sprite.y));
                    break;
            }
        }
    }
}