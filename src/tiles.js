const Tile = {
   tiles: {
        [OBJECT_BACKGROUND]: {
            solid: false
        },
        [OBJECT_OUT]: {
            solid: true
        },
        [OBJECT_PLAYER]: {
            solid: true
        },
        [OBJECT_ICE]: {
            solid: true
        },
        [OBJECT_METAL]: {
            solid: true
        },
        [OBJECT_WALL]: {
            solid: true
        },
        [OBJECT_FIRE]: {
            solid: false
        }
    },

    isSolid: function(id) {
        if (typeof this.tiles[id] === 'undefined') {
            throw new Error('UNDEFINED ON isSolid');
        } else {
            return this.tiles[id].solid;
        }
    }
};
Object.freeze(Tile);
