function Sound() {
	this.music = document.getElementById('music');
	this.sfxVolume = 0.3;
	this.music.volume = 0.3;
	this.sfx = {
		"fire-off" : document.getElementById('sfx-fire-off'),
		"ice-push" : document.getElementById('sfx-ice-push'), //
		"falling" : document.getElementById('sfx-falling'), //
		"new-ice" : document.getElementById('sfx-new-ice'),
		"climb" : document.getElementById('sfx-climb'),
		"ice-collision" : document.getElementById('sfx-ice-collision'),
		"stage-enter" : document.getElementById('sfx-stage-enter'),
		"danger" : document.getElementById('sfx-danger'),
		"ice-remove" : document.getElementById('sfx-ice-remove'),
		"state-leave" : document.getElementById('sfx-state-leave')
	};

	this.play = function(sfx) {
		this.sfx[sfx].volume = this.sfxVolume;
		this.sfx[sfx].currentTime = 0;
		this.sfx[sfx].play();
	};
	this.playOnce = function(sfx) {
		if (!this.sfx[sfx].paused) return;
		this.sfx[sfx].volume = this.sfxVolume;
		this.sfx[sfx].currentTime = 0;
		this.sfx[sfx].play();
	};
	this.stop = function(sfx) {
		this.sfx[sfx].pause();
		this.sfx[sfx].currentTime = 0;
	};
}