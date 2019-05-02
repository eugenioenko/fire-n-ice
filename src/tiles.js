import { Consts }  from './constants';

export const Tile = {
   tiles: {
        [Consts.ObjectBackground]: {
            solid: false
        },
        [Consts.ObjectOut]: {
            solid: true
        },
        [Consts.ObjectPlayer]: {
            solid: true
        },
        [Consts.ObjectIce]: {
            solid: true
        },
        [Consts.ObjectMetal]: {
            solid: true
        },
        [Consts.ObjectWall]: {
            solid: true
        },
        [Consts.ObjectFire]: {
            solid: false
        },
        [Consts.ObjectJar]: {
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
