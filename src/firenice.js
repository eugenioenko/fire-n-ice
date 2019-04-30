import { Game } from './game';
import { Resources } from './resources';

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
});