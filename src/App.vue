<template>
  <div id="app" class='orange' data-current_question="1"  data-nb_questions="0" data-team_points="0" data-good_answer="0" data-time="0" data-timer_start="false">
    <Header/>
    <Splashscreen/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Splashscreen from './components/Splashscreen.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Splashscreen, Header
  },
  data() {
    return { 
      seconds: 0,
      minutes: 0,
      current_question: 1,
      nb_questions: 0,
    }
  },
  updated(){
    this.$nextTick(()=>{
      document.getElementById('app').dataset.timer_start = 'false';
    })
  },
  mounted() {
    this.current_question = parseInt(document.getElementById('app').dataset.current_question);
    this.nb_questions = parseInt(document.getElementById('app').dataset.nb_questions);
  }
}
</script>

<style>
@font-face {
  font-family: 'fjalla_regular';
  src: url('./assets/fonts/FjallaOne-Regular.ttf');
}

:root {
  --white : #eef1f3;
  --dark-blue : #012060;
  --red : #cf152d;
  --purple : #6f1a45;
}

* {
  box-sizing: border-box;
}

body {
  margin:0;
}

ul {
  padding:0;
  list-style: none;
}

h1 {
  font-weight: normal;
}

a, router-link {
  text-decoration: none;
}

.show-for-sr, .show-on-focus {
    position: absolute !important;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    -webkit-clip-path: inset(50%);
            clip-path: inset(50%);
    border: 0; 
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.big_button {
    display: flex;
    flex-direction:column;
    border-radius:10px;
    justify-content: center;
    align-items: center;
    color:#ffffff;
    filter: drop-shadow(2px 4px 0 var(--dark-blue));
    transition: all .3s ease-in-out;
    position:relative;
    overflow:hidden;
}

input.big_button {
  background-image:linear-gradient(to bottom, var(--red), var(--purple));
}

.big_button::before, .big_button::after {
  content: "";
  position: absolute;
  display: block;
  transition: 0.3s ease-in-out;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background-image:linear-gradient(to top, var(--red), var(--purple));
}

.big_button::after {
  background-image:linear-gradient(to bottom, var(--red), var(--purple));
}

.big_button:hover::after, .big_button:focus::after {
  opacity:0;
}

#app {
  font-family: 'fjalla_regular', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.2em;
  color: var(--dark-blue);
  font-size: 20px;
  background: url('./assets/images/background/sky.jpg') top center no-repeat;
  height:100vh;
  position:relative;
  z-index: 0;
  overflow:hidden;
}

#app::before {
  content:'';
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  display:block;
  background:url('./assets/images/background/clouds.png');
  background-size:100% auto;
  z-index:-1;
}

#app::after {
  content:'';
  position: absolute;
  bottom:0;
  left:0;
  width:100%;
  height:100%;
  display:block;
  background:url('./assets/images/background/city.jpg') bottom center no-repeat;
  background-size:100% auto;
  z-index: -1;
}
</style>
