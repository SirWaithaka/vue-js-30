<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 keys">
        <div data-key="65" class="key">
          <kbd>A</kbd>
          <span class="sound">clap</span>
        </div>
        <div data-key="83" class="key">
          <kbd>S</kbd>
          <span class="sound">hithat</span>
        </div>
        <div data-key="68" class="key">
          <kbd>D</kbd>
          <span class="sound">kick</span>
        </div>
        <div data-key="70" class="key">
          <kbd>F</kbd>
          <span class="sound">openhat</span>
        </div>
        <div data-key="71" class="key">
          <kbd>G</kbd>
          <span class="sound">boom</span>
        </div>
        <div data-key="72" class="key">
          <kbd>H</kbd>
          <span class="sound">ride</span>
        </div>
        <div data-key=74 class="key">
          <kbd>J</kbd>
          <span class="sound">snare</span>
        </div>
        <div data-key=75 class="key">
          <kbd>K</kbd>
          <span class="sound">tom</span>
        </div>
        <div data-key=76 class="key">
          <kbd>L</kbd>
          <span class="sound">tink</span>
        </div>
      </div>

      <audio data-key="65" data-src="/static/sounds/clap.wav"></audio>
      <audio data-key="83" data-src="/static/sounds/hihat.wav"></audio>
      <audio data-key="68" data-src="/static/sounds/kick.wav"></audio>
      <audio data-key="70" data-src="/static/sounds/openhat.wav"></audio>
      <audio data-key="71" data-src="/static/sounds/boom.wav"></audio>
      <audio data-key="72" data-src="/static/sounds/ride.wav"></audio>
      <audio data-key="74" data-src="/static/sounds/snare.wav"></audio>
      <audio data-key="75" data-src="/static/sounds/tom.wav"></audio>
      <audio data-key="76" data-src="/static/sounds/tink.wav"></audio>
    </div>
  </div>
</template>

<script>
import { Howl } from 'howler'

export default {
  created () {
    window.addEventListener('keydown', this.playAudio)
  },
  methods: {
    playAudio (e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
      // const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
      if (!audio) return // stop the function from running all together

      const sound = new Howl({ src: audio.attributes['data-src'].value })
      console.log(audio.attributes['data-src'].value)
      sound.play()
    }
  }
}
</script>

<style scoped>
.container-fluid {
  background: src('@/assets/bg-drum.jpg');
  height: 100%;
  width: 100%;
}
.keys {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 10px;
  justify-content: center;
  min-height: 100vh;
}
.key {
  background: rgba(0, 0, 0, 0.4);
  border: 0.4rem solid black;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.5rem;
  margin: 1rem;
  padding: 1rem 0.5rem;
  text-align: center;
  text-shadow: 0 0 0.5rem black;
  transition: all 0.07s ease;
  width: 100px;
}
kbd {
  display: block;
  font-size: 0.4rem;
}
.playing {
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
  transform: scale(1.1);
}
.sound {
  color: #ffc600;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}
</style>
