const Tile = {
   tiles: {
        [OBJECT_BACKGROUND]: {
            image: 'img_bg',
            solid: false
        },
        [OBJECT_OUT]: {
            image: false,
            solid: true
        },
        [OBJECT_PLAYER]: {
            image: false,
            solid: true
        },
        [OBJECT_ICE]: {
            image: false,
            solid: true
        },
        [OBJECT_WALL]: {
            image: 'img_tile',
            solid: true
        },
        [OBJECT_FIRE]: {
            image: false,
            solid: false
        }
    },
    isSolid: function(id) {
        if (typeof this.tiles[id] == "undefined") {
            console.log('UNDEFINED ON tiles');
            throw new Error('UNDEFINED ON isSolid');
        } else {
            return this.tiles[id].solid;
        }
    },

    getImage: function(id) {
        if (typeof this.tiles[id] == "undefined") {
            console.log('UNDEFINED ON tiles get Image');
            throw new Error('UNDEFINED ON tiles get Image');
        } else {
            return document.getElementById(this.tiles[id].image);
        }
    }
};
