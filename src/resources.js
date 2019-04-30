export class Resources {

    constructor() {
        this.definitions = [];
        this.resources = { };
        this.loaded = 0;
    }

    add(type, name, src) {
        this.definitions.push({type: type, name: name, src: src});
    }

    get(name) {
        return this.resources[name];
    }

    check(callback) {
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
            if (resource.type ==='audio') {
                const audio = new Audio(resource.src);
                audio.addEventListener('canplaythrough', () => {
                    this.loaded += 1;
                    this.check(callback);
                });
                this.resources[resource.name] = audio;
            }
        }
    }

}
