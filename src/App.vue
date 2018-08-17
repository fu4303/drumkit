<template>
  <div id="app">
    <div id="drum-machine">
      <h1>DrumKit</h1>
      <span id="display"></span>
      <section id="pad-section">
        <article class='drum-pad drum-pad--1'
          data-key="81"
        >
          <audio
            id="Q"
            class="clip"
            data-key="81"
            src="/samples/kick-tron.wav">
          </audio>
          <kbd>Q</kbd>
          <span class="audio-sound">Kick Tron</span>
        </article>
        <article class='drum-pad drum-pad--2'
          data-key="87"
        >
          <audio
            id="W"
            class="clip"
            src="/samples/perc-tribal.wav"
            data-key="87">
          </audio>
          <kbd></kbd>
          <span class="audio-sound"></span>
        </article>
        <article class='drum-pad drum-pad--3'
          data-key="69"
        >
          <audio
            id="E"
            class="clip"
            src="/samples/openhat-acoustic01.wav"
            data-key="69">
          </audio>
          <kbd></kbd>
          <span class="audio-sound"></span>
        </article>
        <article class='drum-pad drum-pad--4'
          data-key="65"
        >
          <audio
            id="A"
            class="clip"
            src="/samples/snare-vinyl02.wav"
            data-key="65">
          </audio>
          <kbd></kbd>
          <span class="audio-sound"></span>
        </article>
        <article class='drum-pad drum-pad--5'
          data-key="83"
        >
          <audio
            id="S"
            class="clip"
            src="/samples/tom-fm.wav"
            data-key="83">
          </audio>
          <kbd></kbd>
          <span class="audio-sound"></span>
        </article>
        <article class='drum-pad drum-pad--6'
          data-key="68"
        >
          <audio
            id="D"
            class="clip"
            src="/samples/tom-rototom.wav"
            data-key="68">
          </audio>
          <kbd></kbd>
          <span class="audio-sound"></span>
        </article>
        <article class='drum-pad drum-pad--7'
          data-key="90"
        >
          <audio
            id="Z"
            class="clip"
            src="/samples/clap-crushed.wav"
            data-key="90">
          </audio>
          <kbd></kbd>
          <span class="audio-sound"></span>
        </article>
        <article class='drum-pad drum-pad--8'
          data-key="88"
        >
          <audio
            id="X"
            class="clip"
            src="/samples/kick-cultivator.wav"
            data-key="88">
          </audio>
          <kbd></kbd>
          <span class="audio-sound"></span>
        </article>
        <article class='drum-pad drum-pad--9'
          data-key="67"
        >
          <audio
            id="C"
            class="clip"
            src="/samples/kick-newwave.wav"
            data-key="67">
          </audio>
          <kbd></kbd>
          <span class="audio-sound"></span>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    playAudio(e) {
      //Instantiates audio variable to bind to the data-key
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
      const key = document.querySelector(`article[data-key="${e.keyCode}"]`)


      //If the audio isn't found, return
      if(!audio) return;
      key.classList.add('pulse');
      //Set startTime at 0 & play
      audio.startTime = 0;
      audio.play();
    },
    removeTransition(e) {
      if(e.propertyName !== 'transform') return;
      e.target.classList.remove('pulse');
    }
  },
  created () {
    let keys = document.querySelectorAll('.drum-pad');
    keys.forEach(key => key.addEventListener('transitionend', this.removeTransition))
    window.addEventListener('keyup', this.playAudio)
  },
  beforeDestory () {
    //Do something

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;

}

body {
  background-color: #2c3e50;
}

h1 {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #f3f3f3;
  font-size: 3.5rem;
}


#pad-section {
  display: grid;
  grid-template-columns: 1fr repeat(3, minmax(100px, 150px)) 1fr;
  grid-template-rows: repeat(3, minmax(100px, 150px));
  grid-gap: 20px;
}

.drum-pad {
  // box-shadow: 2px 4px 4px rgba(12,12,13,0.1);

  &--1 {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    background: red;
  }
  &--2 {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    background: yellow;
  }
  &--3 {
    grid-row: 1 / 2;
    grid-column: 4 / 5;
    background: purple;
  }
  &--4 {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    background: blue;
  }
  &--5 {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
    background: pink;
  }
  &--6 {
    grid-row: 2 / 3;
    grid-column: 4 / 5;
    background: lawngreen;
  }
  &--7 {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    background: cyan;
  }
  &--8 {
    grid-row: 3 / 4;
    grid-column: 3 / 4;
    background: maroon;
  }
  &--9 {
    grid-row: 3 / 4;
    grid-column: 4 / 5;
    background: bisque;
  }
}

.pulse:hover, .pulse:focus {
  animation: pulse 1s;
  box-shadow: 0 0 0 2em rgba(#fff, 0);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 red;
  }
}



</style>
