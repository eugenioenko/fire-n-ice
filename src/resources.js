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



export async function loadGameResources() {
  let resolve;
  const promise = new Promise((res) => (resolve = res));
  const resources = new Resources();
  resources.add('image', 'tilemap', '/images/tilemap.png');
  resources.add('image', 'img_ice', '/images/ice.png');
  resources.add('image', 'img_jar', '/images/jar.png');
  resources.add('image', 'img_fire', '/images/fire.png');
  resources.add('image', 'img_dona', '/images/dona.png');
  resources.add('image', 'img_intro', '/images/intro.png');
  resources.add('image', 'img_metal', '/images/metal.png');
  resources.add('image', 'img_teleport', '/images/teleport.png');
  resources.add('image', 'frost', '/images/frozen.png');
  resources.add('audio', 'sfx-ice-push', '/sounds/sfx-ice-push.mp3');
  resources.add('audio', 'sfx-fire-off', '/sounds/sfx-fire-off.mp3');
  resources.add('audio', 'sfx-falling', '/sounds/sfx-falling.mp3');
  resources.add('audio', 'sfx-new-ice', '/sounds/sfx-new-ice.mp3');
  resources.add('audio', 'sfx-climb', '/sounds/sfx-climb.mp3');
  resources.add('audio', 'sfx-ice-collision', '/sounds/sfx-ice-collision.mp3');
  resources.add('audio', 'sfx-stage-enter', '/sounds/sfx-stage-enter.mp3');
  resources.add('audio', 'sfx-danger', '/sounds/sfx-danger.mp3');
  resources.add('audio', 'sfx-ice-remove', '/sounds/sfx-ice-remove.mp3');
  resources.add('audio', 'sfx-state-leave', '/sounds/sfx-state-leave.mp3');
  resources.add('audio', 'sfx-disabled', '/sounds/sfx-disabled.mp3');
  resources.add('audio', 'sfx-fall', '/sounds/sfx-fall.mp3');
  resources.add('audio', 'sfx-music-sparks', '/music/sparks.mp3');

  resources.ready(() => {
    resolve(resources);
  });

  return promise;
}