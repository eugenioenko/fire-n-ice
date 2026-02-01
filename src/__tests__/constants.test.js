import { Consts } from '../constants';

describe('Consts', () => {
  it('should be frozen (immutable)', () => {
    expect(Object.isFrozen(Consts)).toBe(true);
  });

  it('should have no duplicate Move state values', () => {
    const moveStates = Object.entries(Consts)
      .filter(([key]) => key.startsWith('Move'))
      .map(([key, value]) => ({ key, value }));

    const values = moveStates.map(s => s.value);
    const uniqueValues = new Set(values);

    expect(values.length).toBe(uniqueValues.size);
  });

  it('should have no duplicate Object type values', () => {
    const objectTypes = Object.entries(Consts)
      .filter(([key]) => key.startsWith('Object'))
      .map(([key, value]) => ({ key, value }));

    const values = objectTypes.map(s => s.value);
    const uniqueValues = new Set(values);

    expect(values.length).toBe(uniqueValues.size);
  });

  it('should have correct tile width', () => {
    expect(Consts.TileWidth).toBe(32);
  });

  it('should have correct direction values', () => {
    expect(Consts.DirLeft).toBe(-1);
    expect(Consts.DirRight).toBe(1);
  });
});
