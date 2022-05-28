/**
 * Stores position of the corners and vertices
 */
export class Position {
  constructor() {
    this.u = 0;
    this.d = 0;
    this.l = 0;
    this.r = 0;
    this.ul = 0;
    this.ur = 0;
    this.dl = 0;
    this.dr = 0;
  }
}

export class Coor {
  constructor(tx, ty) {
    this.xTile = tx;
    this.yTile = ty;
  }
}

export class Frost {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
}
