const Tile = {
   tiles: {
        [OBJECT_BACKGROUND]: {
            resource: 'background',
            solid: false
        },
        [OBJECT_OUT]: {
            resource: false,
            solid: true
        },
        [OBJECT_PLAYER]: {
            resource: false,
            solid: true
        },
        [OBJECT_ICE]: {
            resource: false,
            solid: true
        },
        [OBJECT_WALL]: {
            resource: 'tile',
            solid: true
        },
        [OBJECT_FIRE]: {
            resource: false,
            solid: false
        }
    },

    isSolid: function(id) {
        if (typeof this.tiles[id] === "undefined") {
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
            return this.tiles[id].resource;
        }
    }
};
Object.freeze(Tile);
