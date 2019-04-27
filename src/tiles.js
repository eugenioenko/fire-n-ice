const Tile = {
   tiles: {
        [OBJECT_BACKGROUND]: {
            solid: false,
            joint: false
        },
        [OBJECT_OUT]: {
            solid: true,
            joint: false
        },
        [OBJECT_PLAYER]: {
            solid: true,
            joint: false
        },
        [OBJECT_ICE]: {
            solid: true,
            joint: false
        },
        [OBJECT_METAL]: {
            solid: true,
            joint: true
        },
        [OBJECT_WALL]: {
            solid: true,
            joint: true
        },
        [OBJECT_FIRE]: {
            solid: false,
            joint: false
        },
        [OBJECT_JAR]: {
            solid: true,
            joint: true
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
