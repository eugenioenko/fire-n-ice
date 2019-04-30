import { Consts }  from './constants';

export const Tile = {
   tiles: {
        [Consts.OBJECT_BACKGROUND]: {
            solid: false
        },
        [Consts.OBJECT_OUT]: {
            solid: true
        },
        [Consts.OBJECT_PLAYER]: {
            solid: true
        },
        [Consts.OBJECT_ICE]: {
            solid: true
        },
        [Consts.OBJECT_METAL]: {
            solid: true
        },
        [Consts.OBJECT_WALL]: {
            solid: true
        },
        [Consts.OBJECT_FIRE]: {
            solid: false
        },
        [Consts.OBJECT_JAR]: {
            solid: true
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
