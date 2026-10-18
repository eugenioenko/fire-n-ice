import { Resources, loadGameResources } from '../resources';

describe('Resource URL bases', () => {
  afterEach(() => jest.restoreAllMocks());

  it.each([
    ['', '/images/tilemap.png'],
    ['./', './images/tilemap.png'],
    ['/fire-n-ice', '/fire-n-ice/images/tilemap.png'],
    ['/fire-n-ice/', '/fire-n-ice/images/tilemap.png'],
    ['https://example.com/game/', 'https://example.com/game/images/tilemap.png'],
  ])('loads resources relative to %j', async (base, expectedImage) => {
    jest.spyOn(Resources.prototype, 'ready').mockImplementation(callback => callback());
    const resources = await loadGameResources(base);

    expect(resources.definitions.find(resource => resource.name === 'tilemap').src).toBe(expectedImage);
    expect(resources.definitions.find(resource => resource.name === 'sfx-fall').src)
      .toBe(expectedImage.replace('images/tilemap.png', 'sounds/sfx-fall.mp3'));
  });

  it('keeps root-relative resources as the default for existing embedded players', async () => {
    jest.spyOn(Resources.prototype, 'ready').mockImplementation(callback => callback());
    const resources = await loadGameResources();

    expect(resources.definitions.every(resource => resource.src.startsWith('/'))).toBe(true);
    expect(resources.definitions.some(resource => resource.src.startsWith('//'))).toBe(false);
  });
});
