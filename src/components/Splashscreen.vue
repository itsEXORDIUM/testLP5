<template>
  <div id="splashscreen" class="page">
    <img src="../assets/logo.png" class="logo" alt="Laboratoire"/>
  </div>
</template>

<script>
export default {
  name: 'Splashscreen',
  props: {
  }
}
</script>

<style scoped>
#splashscreen {
  display: none;
  justify-content: center;
  align-items: center;
  height:100%;
}

img {
  width:285px;
}
</style>
