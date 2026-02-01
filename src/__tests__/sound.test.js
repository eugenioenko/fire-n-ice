import { Sound } from '../sound';

describe('Sound', () => {
  let sound;
  let mockResources;
  let mockAudio;

  beforeEach(() => {
    localStorage.clear();

    mockAudio = {
      play: jest.fn().mockResolvedValue(),
      pause: jest.fn(),
      volume: 1,
      currentTime: 0,
      paused: true,
      muted: false,
      loop: false,
    };

    mockResources = {
      get: jest.fn().mockReturnValue({ ...mockAudio }),
    };

    sound = new Sound(mockResources);
  });

  describe('initialization', () => {
    it('should set default sfx volume to 0.3', () => {
      expect(sound.sfxVolume).toBe(0.3);
    });

    it('should set default music volume to 0.2', () => {
      expect(sound.musicVolume).toBe(0.2);
    });

    it('should initialize music as null', () => {
      expect(sound.music).toBe(null);
    });

    it('should load sfx from resources', () => {
      expect(mockResources.get).toHaveBeenCalledWith('sfx-fire-off');
      expect(mockResources.get).toHaveBeenCalledWith('sfx-ice-push');
      expect(mockResources.get).toHaveBeenCalledWith('sfx-fall');
    });

    it('should default musicOn and soundOn to true', () => {
      expect(sound.musicOn).toBe(true);
      expect(sound.soundOn).toBe(true);
    });
  });

  describe('loadPreferences', () => {
    it('should load musicOn from localStorage', () => {
      localStorage.setItem('musicOn', 'false');
      sound.loadPreferences();
      expect(sound.musicOn).toBe(false);
    });

    it('should load soundOn from localStorage', () => {
      localStorage.setItem('soundOn', 'false');
      sound.loadPreferences();
      expect(sound.soundOn).toBe(false);
    });

    it('should default to true if not in localStorage', () => {
      sound.loadPreferences();
      expect(sound.musicOn).toBe(true);
      expect(sound.soundOn).toBe(true);
    });
  });

  describe('savePreferences', () => {
    it('should save musicOn to localStorage', () => {
      sound.musicOn = false;
      sound.savePreferences();
      expect(localStorage.getItem('musicOn')).toBe('false');
    });

    it('should save soundOn to localStorage', () => {
      sound.soundOn = false;
      sound.savePreferences();
      expect(localStorage.getItem('soundOn')).toBe('false');
    });
  });

  describe('toggleMusic', () => {
    it('should toggle musicOn state', () => {
      expect(sound.musicOn).toBe(true);
      sound.toggleMusic();
      expect(sound.musicOn).toBe(false);
      sound.toggleMusic();
      expect(sound.musicOn).toBe(true);
    });

    it('should return the new state', () => {
      expect(sound.toggleMusic()).toBe(false);
      expect(sound.toggleMusic()).toBe(true);
    });

    it('should pause music when toggled off', () => {
      sound.music = { pause: jest.fn(), play: jest.fn().mockResolvedValue() };
      sound.toggleMusic(); // turn off
      expect(sound.music.pause).toHaveBeenCalled();
    });

    it('should play music when toggled on', () => {
      sound.music = { pause: jest.fn(), play: jest.fn().mockResolvedValue() };
      sound.musicOn = false;
      sound.toggleMusic(); // turn on
      expect(sound.music.play).toHaveBeenCalled();
    });
  });

  describe('toggleSound', () => {
    it('should toggle soundOn state', () => {
      expect(sound.soundOn).toBe(true);
      sound.toggleSound();
      expect(sound.soundOn).toBe(false);
    });

    it('should return the new state', () => {
      expect(sound.toggleSound()).toBe(false);
    });

    it('should save preferences', () => {
      sound.toggleSound();
      expect(localStorage.getItem('soundOn')).toBe('false');
    });
  });

  describe('setSfxVolume', () => {
    it('should set sfx volume', () => {
      sound.setSfxVolume(0.5);
      expect(sound.sfxVolume).toBe(0.5);
    });

    it('should clamp volume to minimum 0', () => {
      sound.setSfxVolume(-0.5);
      expect(sound.sfxVolume).toBe(0);
    });

    it('should clamp volume to maximum 1', () => {
      sound.setSfxVolume(1.5);
      expect(sound.sfxVolume).toBe(1);
    });
  });

  describe('setMusicVolume', () => {
    it('should set music volume', () => {
      sound.setMusicVolume(0.5);
      expect(sound.musicVolume).toBe(0.5);
    });

    it('should clamp volume to valid range', () => {
      sound.setMusicVolume(-0.5);
      expect(sound.musicVolume).toBe(0);
      sound.setMusicVolume(1.5);
      expect(sound.musicVolume).toBe(1);
    });

    it('should update music element volume if exists', () => {
      sound.music = { volume: 0 };
      sound.setMusicVolume(0.7);
      expect(sound.music.volume).toBe(0.7);
    });
  });

  describe('play', () => {
    it('should not play if sound is off', () => {
      sound.soundOn = false;
      sound.play('fire-off');
      expect(sound.sfx['fire-off'].play).not.toHaveBeenCalled();
    });

    it('should play sfx and reset currentTime', () => {
      sound.play('fire-off');
      expect(sound.sfx['fire-off'].currentTime).toBe(0);
      expect(sound.sfx['fire-off'].play).toHaveBeenCalled();
    });

    it('should set volume on sfx', () => {
      sound.sfxVolume = 0.5;
      sound.play('fire-off');
      expect(sound.sfx['fire-off'].volume).toBe(0.5);
    });

    it('should handle missing sfx gracefully', () => {
      expect(() => sound.play('nonexistent')).not.toThrow();
    });
  });

  describe('playOnce', () => {
    it('should not play if already playing', () => {
      sound.sfx['fire-off'].paused = false;
      sound.playOnce('fire-off');
      expect(sound.sfx['fire-off'].play).not.toHaveBeenCalled();
    });

    it('should play if paused', () => {
      sound.sfx['fire-off'].paused = true;
      sound.playOnce('fire-off');
      expect(sound.sfx['fire-off'].play).toHaveBeenCalled();
    });

    it('should not play if sound is off', () => {
      sound.soundOn = false;
      sound.sfx['fire-off'].paused = true;
      sound.playOnce('fire-off');
      expect(sound.sfx['fire-off'].play).not.toHaveBeenCalled();
    });
  });

  describe('stop', () => {
    it('should pause audio and reset time', () => {
      sound.sfx['fire-off'].currentTime = 5;
      sound.stop('fire-off');
      expect(sound.sfx['fire-off'].pause).toHaveBeenCalled();
      expect(sound.sfx['fire-off'].currentTime).toBe(0);
    });

    it('should handle missing sfx gracefully', () => {
      expect(() => sound.stop('nonexistent')).not.toThrow();
    });
  });

  describe('soundtrack', () => {
    it('should get music from resources', () => {
      sound.soundtrack();
      expect(mockResources.get).toHaveBeenCalledWith('sfx-music-sparks');
    });

    it('should configure music element', () => {
      sound.soundtrack();
      expect(sound.music.muted).toBe(false);
      expect(sound.music.volume).toBe(0.2);
      expect(sound.music.loop).toBe(true);
    });

    it('should play if musicOn is true', () => {
      sound.musicOn = true;
      sound.soundtrack();
      expect(sound.music.play).toHaveBeenCalled();
    });

    it('should not play if musicOn is false', () => {
      sound.musicOn = false;
      sound.soundtrack();
      expect(sound.music.play).not.toHaveBeenCalled();
    });
  });
});
