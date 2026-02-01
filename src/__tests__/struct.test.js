import { Position, Frost } from '../struct';

describe('Position', () => {
  it('should initialize all corner properties to 0', () => {
    const pos = new Position();

    expect(pos.u).toBe(0);
    expect(pos.d).toBe(0);
    expect(pos.l).toBe(0);
    expect(pos.r).toBe(0);
    expect(pos.ul).toBe(0);
    expect(pos.ur).toBe(0);
    expect(pos.dl).toBe(0);
    expect(pos.dr).toBe(0);
  });
});

describe('Frost', () => {
  it('should initialize with given left and right values', () => {
    const frost = new Frost(true, false);

    expect(frost.left).toBe(true);
    expect(frost.right).toBe(false);
  });

  it('should allow both sides to be frozen', () => {
    const frost = new Frost(true, true);

    expect(frost.left).toBe(true);
    expect(frost.right).toBe(true);
  });

  it('should allow both sides to be unfrozen', () => {
    const frost = new Frost(false, false);

    expect(frost.left).toBe(false);
    expect(frost.right).toBe(false);
  });
});
