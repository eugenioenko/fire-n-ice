import { Engine } from "./engine";

export class Sound {
  constructor(resources) {
    this.resources = resources;
    this.musicOn = true;
    this.soundOn = true;

    this.sfxVolume = 0.3;
    this.sfx = {
      "fire-off": resources.get("sfx-fire-off"),
      "ice-push": resources.get("sfx-ice-push"),
      fall: resources.get("sfx-fall"),
      falling: resources.get("sfx-falling"),
      "new-ice": resources.get("sfx-new-ice"),
      climb: resources.get("sfx-climb"),
      "ice-collision": resources.get("sfx-ice-collision"),
      "stage-enter": resources.get("sfx-stage-enter"),
      danger: resources.get("sfx-danger"),
      "ice-remove": resources.get("sfx-ice-remove"),
      "state-leave": resources.get("sfx-state-leave"),
      "ice-disabled": resources.get("sfx-disabled"),
    };
  }

  play(sfx) {
    if (!this.soundOn) return;
    this.sfx[sfx].volume = this.sfxVolume;
    this.sfx[sfx].currentTime = 0;
    this.sfx[sfx].play().catch(() => {});
  }

  playOnce(sfx) {
    if (!this.sfx[sfx].paused) return;
    if (!this.soundOn) return;
    this.sfx[sfx].volume = this.sfxVolume;
    this.sfx[sfx].currentTime = 0;
    this.sfx[sfx].play().catch(() => {});
  }

  stop(sfx) {
    this.sfx[sfx].pause();
    this.sfx[sfx].currentTime = 0;
  }

  soundtrack() {
    if (!this.musicOn) return;
    this.music = this.resources.get("sfx-music-sparks");
    this.music.muted = false;
    this.music.volume = 0.2;
    this.music.loop = true;
    this.music.play().catch(() => {});
  }
}
