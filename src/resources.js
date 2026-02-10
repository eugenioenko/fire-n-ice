export class Resources {
  constructor() {
    this.definitions = [];
    this.resources = {};
    this.loaded = 0;
    this.canvas = document.getElementById('canvas');
    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
    }
  }

  add(type, name, src) {
    this.definitions.push({ type: type, name: name, src: src });
  }

  get(name) {
    return this.resources[name];
  }

  check(callback) {
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = '#fff';
      this.ctx.fillRect(50, 250, (this.loaded * 450) / this.definitions.length, 40);
    }
    if (this.loaded === this.definitions.length) {
      callback();
    }
  }

  ready(callback) {
    for (const resource of this.definitions) {
      if (resource.type === 'image') {
        const image = new Image();
        image.addEventListener('load', () => {
          this.loaded += 1;
          this.check(callback);
        });
        image.src = resource.src;
        this.resources[resource.name] = image;
      }
      if (resource.type === 'audio') {
        const audio = document.getElementById(resource.name);
        this.loaded += 1;
        this.resources[resource.name] = audio;
        this.check(callback);
      }
    }
  }
}



export async function loadGameResources(urlPrefix = '') {
  let resolve;
  const promise = new Promise((res) => (resolve = res));
  const resources = new Resources();
  resources.add('image', 'tilemap', `${urlPrefix}/images/tilemap.png`);
  resources.add('image', 'img_ice', `${urlPrefix}/images/ice.png`);
  resources.add('image', 'img_jar', `${urlPrefix}/images/jar.png`);
  resources.add('image', 'img_fire', `${urlPrefix}/images/fire.png`);
  resources.add('image', 'img_dona', `${urlPrefix}/images/dona.png`);
  resources.add('image', 'img_intro', `${urlPrefix}/images/intro.png`);
  resources.add('image', 'img_metal', `${urlPrefix}/images/metal.png`);
  resources.add('image', 'img_teleport', `${urlPrefix}/images/teleport.png`);
  resources.add('image', 'frost', `${urlPrefix}/images/frozen.png`);
  resources.add('audio', 'sfx-ice-push', `${urlPrefix}/sounds/sfx-ice-push.mp3`);
  resources.add('audio', 'sfx-fire-off', `${urlPrefix}/sounds/sfx-fire-off.mp3`);
  resources.add('audio', 'sfx-falling', `${urlPrefix}/sounds/sfx-falling.mp3`);
  resources.add('audio', 'sfx-new-ice', `${urlPrefix}/sounds/sfx-new-ice.mp3`);
  resources.add('audio', 'sfx-climb', `${urlPrefix}/sounds/sfx-climb.mp3`);
  resources.add('audio', 'sfx-ice-collision', `${urlPrefix}/sounds/sfx-ice-collision.mp3`);
  resources.add('audio', 'sfx-stage-enter', `${urlPrefix}/sounds/sfx-stage-enter.mp3`);
  resources.add('audio', 'sfx-danger', `${urlPrefix}/sounds/sfx-danger.mp3`);
  resources.add('audio', 'sfx-ice-remove', `${urlPrefix}/sounds/sfx-ice-remove.mp3`);
  resources.add('audio', 'sfx-state-leave', `${urlPrefix}/sounds/sfx-state-leave.mp3`);
  resources.add('audio', 'sfx-disabled', `${urlPrefix}/sounds/sfx-disabled.mp3`);
  resources.add('audio', 'sfx-fall', `${urlPrefix}/sounds/sfx-fall.mp3`);
  resources.add('audio', 'sfx-music-sparks', `${urlPrefix}/music/sparks.mp3`);

  resources.ready(() => {
    resolve(resources);
  });

  return promise;
}