import { Game } from './game';
import { Consts } from './constants';
import { Resources } from './resources';
import { Fire } from './fire';
import { Jar } from './jar';

window.addEventListener('load', () => {
    const resources = new Resources();
    resources.add('tilemap', document.getElementById('img_tilemap'));
    resources.add('img_ice', document.getElementById('img_ice'));
    resources.add('img_jar', document.getElementById('img_jar'));
    resources.add('img_fire', document.getElementById('img_fire'));
    resources.add('img_dona', document.getElementById('img_dona'));
    resources.add('img_intro', document.getElementById('img_intro'));
    resources.add('img_start', document.getElementById('img_start'));
    resources.add('img_metal', document.getElementById('img_metal'));
    resources.add('frost', document.getElementById('img_frozen'));

    const canvas = document.getElementById('canvas');
    const game = new Game(canvas, resources);
    window.game = game;

    document.getElementById('level-selector').addEventListener('change', (e) => {
        if (e.target.value !== '-1') {
            game.engine.level = parseInt(e.target.value, 10);
            game.engine.scene.load(game.engine.level);
            e.target.blur();
        }
    });

    if (FIRENICE_EDITOR_MODE) {
        game.engine.sound.musicOn = false;
		game.engine.sound.soundOn = false;
        game.state = Consts.GAME_STATE_PLAY;
        game.engine.editor = true;
        game.engine.keyboard.intro = false;

        canvas.addEventListener('click', (e) => {
            const xtile = Math.floor(e.offsetX / 32);
            const ytile = Math.floor(e.offsetY / 32);
            if (tool < 2) {
                game.engine.map.map[ytile][xtile] = tool;
            } else {
                switch (tool) {
                    case Consts.OBJECT_PLAYER:
                        game.engine.player.x = xtile * 32;
                        game.engine.player.y = ytile * 32;
                        break;
                    case Consts.OBJECT_ICE:
                        game.engine.addIceBlock(xtile, ytile);
                        break;
                    case Consts.OBJECT_METAL:
                        game.engine.addSprite(new Metal(game.engine, xtile, ytile, 1));
                        break;
                    case Consts.OBJECT_FIRE:
                        game.engine.addSprite(new Fire(game.engine, xtile, ytile));
                        break;
                    case Consts.OBJECT_JAR:
                        game.engine.addSprite(new Jar(game.engine, xtile, ytile));
                        break;
                }
            }
        });

        document.getElementById('theme-selector').addEventListener('change', (e) => {
            game.engine.map.theme = parseInt(e.target.value, 10);
            e.target.blur();
        });

        document.getElementById('level-selector').addEventListener('change', (e) => {
            if (e.target.value !== '-1') {
                game.engine.level = parseInt(e.target.value, 10);
                game.engine.scene.load(game.engine.level);
                e.target.blur();
            }
        });

        document.getElementById('btn-save').addEventListener('click', () => {
            document.getElementById('txt-level').value = JSON.stringify(game.engine.scene.save());
        });
    }
});
