var game;

window.addEventListener('load', async () => {
  document.getElementById('loader').addEventListener('click', () => doStartClick());
});

async function doStartClick() {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
  loader.style.opacity = 0;
  const resources = await FireNIce.loadGameResources();
  startGame(resources);
}

function loadLevelFromEvent(event) {
  const lvl = event.target.getAttribute('lvl');
  game.engine.level = parseInt(lvl, 10);
  game.engine.scene.load(game.engine.level);
}

function startGame(resources) {
  const canvas = document.getElementById('canvas');
  game = new FireNIce.Game({
    canvas, resources, gameMode: 'game'
  });
  window.game = game;
  document.querySelectorAll('button.lvl').forEach((btn) => {
    btn.addEventListener('click', loadLevelFromEvent);
  });
  const lvlSelector = document.getElementById('level-selector');
  lvlSelector.style.opacity = 1;
}
