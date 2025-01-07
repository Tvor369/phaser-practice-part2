export default class AudioController {
    constructor() {
      this._soundOn = true;
      this._musicOn = true;
      this._bgMusicPlaying = false;
      this._bgVolume = 0.5;
    }
    set musicOn(value) {
      this._musicOn = value;
    }
    get musicOn() {
      return this._musicOn;
    }
    set soundOn(value) {
      this._soundOn = value;
    }
    get soundOn() {
      return this._soundOn;
    }
    set bgMusicPlaying(value) {
      this._bgMusicPlaying = value;
    }
    get bgMusicPlaying() {
      return this._bgMusicPlaying;
    }
    set bgVolume(value) {
      this._bgVolume = value;
    }
    get bgVolume() {
      return this._bgVolume;
    }
  }
  