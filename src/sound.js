export class Sound {
	constructor() {
		this.musicOn = true;
		this.soundOn = true;

		this.sfxVolume = 0.3;
		this.sfx = {
			"fire-off" : document.getElementById('sfx-fire-off'),
			"ice-push" : document.getElementById('sfx-ice-push'),
			"fall" : document.getElementById('sfx-fall'),
			"falling" : document.getElementById('sfx-falling'),
			"new-ice" : document.getElementById('sfx-new-ice'),
			"climb" : document.getElementById('sfx-climb'),
			"ice-collision" : document.getElementById('sfx-ice-collision'),
			"stage-enter" : document.getElementById('sfx-stage-enter'),
			"danger" : document.getElementById('sfx-danger'),
			"ice-remove" : document.getElementById('sfx-ice-remove'),
			"state-leave" : document.getElementById('sfx-state-leave'),
			"ice-disabled" : document.getElementById('sfx-disabled')
		};
	}

	play(sfx) {
		if (!this.soundOn) return;
		this.sfx[sfx].volume = this.sfxVolume;
		this.sfx[sfx].currentTime = 0;
		this.sfx[sfx].play().catch(()=>{});
	}

	playOnce(sfx) {
		if (!this.sfx[sfx].paused) return;
		if (!this.soundOn) return;
		this.sfx[sfx].volume = this.sfxVolume;
		this.sfx[sfx].currentTime = 0;
		this.sfx[sfx].play().catch(()=>{});
	}

	stop(sfx) {
		this.sfx[sfx].pause();
		this.sfx[sfx].currentTime = 0;
	}

	soundrack() {
		if (!this.musicOn) return;
		this.music = document.getElementById('sfx-music-sparks');
		this.music.muted = false;
		this.music.volume = 0.2;
		this.music.loop = true;
		this.music.play().catch(()=>{});
	}
}