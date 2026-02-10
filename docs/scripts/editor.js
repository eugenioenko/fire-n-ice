var game;

window.addEventListener('load', async () => {
  doStartClick();
});

async function doStartClick() {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
  loader.style.opacity = 0;
  const resources = await FireNIce.loadGameResources('/fire-n-ice');
  startGame(resources);
  loadGameEditor();
}

function startGame(resources) {
  const canvas = document.getElementById('canvas');
  game = new FireNIce.Game({ canvas, resources, gameMode: 'editor' });
  window.game = game;
  const lvlSelector = document.getElementById('level-selector');
  if (lvlSelector) {
    lvlSelector.style.opacity = 1;
  }
}

function loadGameEditor() {
  const Consts = FireNIce.Consts;

  game.engine.sound.musicOn = false;
  game.engine.sound.soundOn = false;
  game.state = Consts.GameStatePlay;
  game.engine.keyboard.intro = false;
  game.engine.sound.music.pause();

  let isDrawing = false;
  let lastTileX = -1;
  let lastTileY = -1;

  const canvas = document.getElementById('canvas');

  function getTileCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: Math.floor(((e.clientX - rect.left) * scaleX) / 32),
      y: Math.floor(((e.clientY - rect.top) * scaleY) / 32),
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
          game.engine.addSprite(new FireNIce.Metal(game.engine, xTile, yTile, 1));
          break;
        case Consts.ObjectFire:
          game.engine.addSprite(new FireNIce.Fire(game.engine, xTile, yTile));
          break;
        case Consts.ObjectJar:
          game.engine.addSprite(new FireNIce.Jar(game.engine, xTile, yTile));
          break;
        case Consts.ObjectTeleport:
          game.engine.addSprite(new FireNIce.Teleport(game.engine, xTile, yTile));
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

  const btnSave = document.getElementById('btn-save');
  if (btnSave) {
    btnSave.addEventListener('click', () => {
      document.getElementById('txt-level').value = JSON.stringify(game.engine.scene.save());
    });
  }
}
