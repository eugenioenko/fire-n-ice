export class Sound {
  constructor(resources) {
    this.resources = resources;
    this.sfxVolume = 0.3;
    this.musicVolume = 0.2;
    this.music = null;

    // Load preferences from localStorage
    this.loadPreferences();

    this.sfx = {
      'fire-off': resources.get('sfx-fire-off'),
      'ice-push': resources.get('sfx-ice-push'),
      fall: resources.get('sfx-fall'),
      falling: resources.get('sfx-falling'),
      'new-ice': resources.get('sfx-new-ice'),
      climb: resources.get('sfx-climb'),
      'ice-collision': resources.get('sfx-ice-collision'),
      'stage-enter': resources.get('sfx-stage-enter'),
      danger: resources.get('sfx-danger'),
      'ice-remove': resources.get('sfx-ice-remove'),
      'state-leave': resources.get('sfx-state-leave'),
      'ice-disabled': resources.get('sfx-disabled'),
    };
  }

  loadPreferences() {
    try {
      const musicOn = localStorage.getItem('musicOn');
      const soundOn = localStorage.getItem('soundOn');
      this.musicOn = musicOn === null ? true : musicOn === 'true';
      this.soundOn = soundOn === null ? true : soundOn === 'true';
    } catch {
      this.musicOn = true;
      this.soundOn = true;
    }
  }

  savePreferences() {
    try {
      localStorage.setItem('musicOn', String(this.musicOn));
      localStorage.setItem('soundOn', String(this.soundOn));
    } catch {
      // localStorage not available
    }
  }

  toggleMusic() {
    this.musicOn = !this.musicOn;
    this.savePreferences();
    if (this.music) {
      if (this.musicOn) {
        this.music.play().catch(() => {});
      } else {
        this.music.pause();
      }
    }
    return this.musicOn;
  }

  toggleSound() {
    this.soundOn = !this.soundOn;
    this.savePreferences();
    return this.soundOn;
  }

  setSfxVolume(volume) {
    this.sfxVolume = Math.max(0, Math.min(1, volume));
  }

  setMusicVolume(volume) {
    this.musicVolume = Math.max(0, Math.min(1, volume));
    if (this.music) {
      this.music.volume = this.musicVolume;
    }
  }

  play(sfx) {
    if (!this.soundOn) return;
    const audio = this.sfx[sfx];
    if (!audio) return;
    audio.volume = this.sfxVolume;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  playOnce(sfx) {
    const audio = this.sfx[sfx];
    if (!audio || !audio.paused) return;
    if (!this.soundOn) return;
    audio.volume = this.sfxVolume;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  stop(sfx) {
    const audio = this.sfx[sfx];
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  }

  soundtrack() {
    this.music = this.resources.get('sfx-music-sparks');
    if (!this.music) return;
    this.music.muted = false;
    this.music.volume = this.musicVolume;
    this.music.loop = true;
    if (this.musicOn) {
      this.music.play().catch(() => {});
    }
  }
}
