<template>
  <div id="app">
    <div id="drum-machine">
      <section id="display">
        <h1>DrumKit</h1>
      </section>
      <section id="pad-section">
        <article class='drum-pad drum-pad--1' :style="{pulse}">
          <audio id="">
            <source>
            <source>
            <p>Your browser doesn't support HTML5 audio.</p>
          </audio>
        </article>
        <article class='drum-pad drum-pad--2'>
          <audio id="">
            <source>
            <source>
            <p>Your browser doesn't support HTML5 audio.</p>
          </audio>
        </article>
        <article class='drum-pad drum-pad--3'>
          <audio id="">
            <source>
            <source>
            <p>Your browser doesn't support HTML5 audio.</p>
          </audio>
        </article>
        <article class='drum-pad drum-pad--4'>
          <audio id="">
            <source>
            <source>
            <p>Your browser doesn't support HTML5 audio.</p>
          </audio>
        </article>
        <article class='drum-pad drum-pad--5'>
          <audio id="">
            <source>
            <source>
            <p>Your browser doesn't support HTML5 audio.</p>
          </audio>
        </article>
        <article class='drum-pad drum-pad--6'>
          <audio id="">
            <source>
            <source>
            <p>Your browser doesn't support HTML5 audio.</p>
          </audio>
        </article>
        <article class='drum-pad drum-pad--7'>
          <audio id="">
            <source>
            <source>
            <p>Your browser doesn't support HTML5 audio.</p>
          </audio>
        </article>
        <article class='drum-pad drum-pad--8'>
          <audio id="">
            <source>
            <source>
            <p>Your browser doesn't support HTML5 audio.</p>
          </audio>
        </article>
        <article class='drum-pad drum-pad--9'>
          <audio id="">
            <source>
            <source>
            <p>Your browser doesn't support HTML5 audio.</p>
          </audio>
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
    addEffect() {
      var vm = this;
      vm.classList.add('pulse')
    }
  },
  watch: {

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
