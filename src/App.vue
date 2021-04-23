<template>
  <div id="app">
    <Header :page="page_actuelle"/>
    <Splashscreen/>
    <router-view></router-view>
  </div>
</template>

<script>
import Splashscreen from './components/Splashscreen.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Splashscreen, Header
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

.big_button {
    display: flex;
    flex-direction:column;
    border-radius:10px;
    justify-content: center;
    align-items: center;
    background:linear-gradient(var(--red), var(--purple));
    color:#ffffff;
    filter: drop-shadow(2px 4px 0 var(--dark-blue));
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

#app:before {
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
  background:url('./assets/images/background/city.png') bottom center no-repeat;
  background-size:100% auto;
  z-index: -1;
}
</style>
