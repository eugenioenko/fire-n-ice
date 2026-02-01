import { Consts } from './constants';
import { Fire } from './fire';
import { Game } from './game';
import { Jar } from './jar';
import { Metal } from './metal';
import { Resources } from './resources';
import { Teleport } from './teleport';

window.addEventListener('load', async () => {
  if (window.FIRENICE_EDITOR_MODE) {
    doStartClick();
  }
  document.getElementById('loader').addEventListener('click', () => doStartClick());
});

async function doStartClick() {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
  loader.style.opacity = 0;
  const resources = await loadGameResources();
  startGame(resources);
  if (window.FIRENICE_EDITOR_MODE) {
    loadGameEditor();
  }
  window.firenice = true;
}

async function loadGameResources() {
  let resolve;
  const promise = new Promise(res => (resolve = res));
  const resources = new Resources();
  resources.add('image', 'tilemap', 'images/tilemap.png');
  resources.add('image', 'img_ice', 'images/ice.png');
  resources.add('image', 'img_jar', 'images/jar.png');
  resources.add('image', 'img_fire', 'images/fire.png');
  resources.add('image', 'img_dona', 'images/dona.png');
  resources.add('image', 'img_intro', 'images/intro.png');
  resources.add('image', 'img_metal', 'images/metal.png');
  resources.add('image', 'img_teleport', 'images/teleport.png');
  resources.add('image', 'frost', 'images/frozen.png');
  resources.add('audio', 'sfx-ice-push', 'sounds/sfx-ice-push.mp3');
  resources.add('audio', 'sfx-fire-off', 'sounds/sfx-fire-off.mp3');
  resources.add('audio', 'sfx-falling', 'sounds/sfx-falling.mp3');
  resources.add('audio', 'sfx-new-ice', 'sounds/sfx-new-ice.mp3');
  resources.add('audio', 'sfx-climb', 'sounds/sfx-climb.mp3');
  resources.add('audio', 'sfx-ice-collision', 'sounds/sfx-ice-collision.mp3');
  resources.add('audio', 'sfx-stage-enter', 'sounds/sfx-stage-enter.mp3');
  resources.add('audio', 'sfx-danger', 'sounds/sfx-danger.mp3');
  resources.add('audio', 'sfx-ice-remove', 'sounds/sfx-ice-remove.mp3');
  resources.add('audio', 'sfx-state-leave', 'sounds/sfx-state-leave.mp3');
  resources.add('audio', 'sfx-disabled', 'sounds/sfx-disabled.mp3');
  resources.add('audio', 'sfx-fall', 'sounds/sfx-fall.mp3');
  resources.add('audio', 'sfx-music-sparks', 'music/sparks.mp3');

  resources.ready(() => {
    resolve(resources);
  });

  return promise;
}

function loadLevelFromEvent(event) {
  const lvl = event.target.getAttribute('lvl');
  game.engine.level = parseInt(lvl, 10);
  game.engine.scene.load(game.engine.level);
}

function startGame(resources) {
  const canvas = document.getElementById('canvas');
  const game = new Game(canvas, resources);
  window.game = game;
  document.querySelectorAll('button.lvl').forEach(btn => {
    btn.addEventListener('click', loadLevelFromEvent);
  });
  const lvlSelector = document.getElementById('level-selector');
  lvlSelector.style.opacity = 1;
}

function loadGameEditor() {
  game.engine.sound.musicOn = false;
  game.engine.sound.soundOn = false;
  game.state = Consts.GameStatePlay;
  game.engine.editor = true;
  game.engine.keyboard.intro = false;
  game.engine.sound.music.pause();

  let isDrawing = false;
  let lastTileX = -1;
  let lastTileY = -1;

  function getTileCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: Math.floor((e.clientX - rect.left) * scaleX / 32),
      y: Math.floor((e.clientY - rect.top) * scaleY / 32),
    };
  }

  function placeTool(xTile, yTile) {
    if (xTile < 0 || yTile < 0 || xTile >= game.engine.map.map[0].length || yTile >= game.engine.map.map.length) {
      return;
    }
    if (tool < 2) {
      game.engine.map.map[yTile][xTile] = tool;
    } else {
      switch (tool) {
        case Consts.ObjectPlayer:
          game.engine.player.x = xTile * 32;
          game.engine.player.y = yTile * 32;
          break;
        case Consts.ObjectIce:
          game.engine.addIceBlock(xTile, yTile);
          break;
        case Consts.ObjectMetal:
          game.engine.addSprite(new Metal(game.engine, xTile, yTile, 1));
          break;
        case Consts.ObjectFire:
          game.engine.addSprite(new Fire(game.engine, xTile, yTile));
          break;
        case Consts.ObjectJar:
          game.engine.addSprite(new Jar(game.engine, xTile, yTile));
          break;
        case Consts.ObjectTeleport:
          game.engine.addSprite(new Teleport(game.engine, xTile, yTile));
          break;
      }
    }
  }

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    const { x, y } = getTileCoords(e);
    lastTileX = x;
    lastTileY = y;
    placeTool(x, y);
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    const { x, y } = getTileCoords(e);
    // Only place if we moved to a new tile and tool supports dragging (tiles only)
    if ((x !== lastTileX || y !== lastTileY) && tool < 2) {
      placeTool(x, y);
      lastTileX = x;
      lastTileY = y;
    }
  });

  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    lastTileX = -1;
    lastTileY = -1;
  });

  canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
    lastTileX = -1;
    lastTileY = -1;
  });

  const themeSelector = document.getElementById('theme-selector');
  if (themeSelector) {
    themeSelector.addEventListener('change', (e) => {
      game.engine.map.theme = parseInt(e.target.value, 10);
      e.target.blur();
    });
  }

  document.getElementById('btn-save').addEventListener('click', () => {
    document.getElementById('txt-level').value = JSON.stringify(game.engine.scene.save());
  });
}
