<template>
  <div id="splashscreen" class="page">
    <img src="../assets/logo.png" class="logo" alt="Laboratoire"/>
  </div>
</template>

<script>
export default {
  name: 'Splashscreen'
}
</script>

<style scoped>
#splashscreen {
  display: none;
}

body.home #splashscreen {
  position: fixed;
  top:0;
  left:0;
  width:100%;
  justify-content: center;
  align-items: center;
  height:100%;
  background: url('../assets/images/background/sky.jpg') top center no-repeat;
  z-index:999;
  display:flex;
  transform:translate(0);
  opacity:1;
  animation: splashscreen 1s linear 4s forwards;
}

@keyframes splashscreen {
  0% {transform:translateY(0);}
  100% {transform:translateY(-100%);}
}

#splashscreen::before {
  content:'';
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  display:block;
  background:url('../assets/images/background/clouds.png');
  background-size:100% auto;
  z-index:-1;
}

#splashscreen::after {
  content:'';
  position: absolute;
  bottom:0;
  left:0;
  width:100%;
  height:100%;
  display:block;
  background:url('../assets/images/background/city.jpg') bottom center no-repeat;
  background-size:100% auto;
  z-index: -1;
}

img {
  width:285px;
}
</style>
