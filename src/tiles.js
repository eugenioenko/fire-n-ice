import { Consts } from "./constants";

export const Tile = Object.freeze({
  tiles: {
    [Consts.ObjectBackground]: {
      solid: false,
      freeze: false,
    },
    [Consts.ObjectOut]: {
      solid: true,
      freeze: false,
    },
    [Consts.ObjectPlayer]: {
      solid: true,
      freeze: false,
    },
    [Consts.ObjectIce]: {
      solid: true,
      freeze: false,
    },
    [Consts.ObjectMetal]: {
      solid: true,
      freeze: true,
    },
    [Consts.ObjectWall]: {
      solid: true,
      freeze: true,
    },
    [Consts.ObjectFire]: {
      solid: false,
      freeze: false,
    },
    [Consts.ObjectJar]: {
      solid: true,
      freeze: true,
    },
  },

  isSolid: function (id) {
    if (typeof this.tiles[id] === "undefined") {
      throw new Error("UNDEFINED ON isSolid");
    } else {
      return this.tiles[id].solid;
    }
  },

  isFreezable: function (id) {
    if (typeof this.tiles[id] === "undefined") {
      throw new Error("UNDEFINED ON isFreezable");
    } else {
      return this.tiles[id].freeze;
    }
  },
});
