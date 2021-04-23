<template>
  <div id="home" class="page">
    <h1 class="big_title">Quiz séminaire 2020</h1>
    <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla orci, efficitur non nibh vitae, accumsan vestibulum magna. </p>

    <ul class="liens_questionnaires">
      <li>
        <router-link to="/personnalisation" class="big_button">
          Questionnaire ATC
          <span>(Délégués ville)</span>
        </router-link>
      </li>
      <li>
        <router-link to="/personnalisation" class="big_button">
          Questionnaire ASR
          <span>(Délégués hôpital)</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  },
  mounted() {
    this.getPageName();
  },
  methods: {
    getPageName: function() {
      document.querySelector('body').className = "home";
    }
  }
}
</script>

<style>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.big_title {
  font-family: 'fjalla_regular', sans-serif;
  line-height: 1.2em;
  font-size:55px;
  text-transform: uppercase;
  text-align: center;
  position:relative;
  display: inline-block;
  background-image: url('../assets/images/background/sky.jpg');
  background-size:cover;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.big_title::before {
  content:'';
  display: block;
  width:80px;
  height:42px;
  background:url('../assets/images/big_title_left.png');
  background-size:cover;
  position: absolute;
  left: -104px;
  top:50%;
  transform:translateY(-50%);
}

.big_title::after {
  content:'';
  display: block;
  width:71px;
  height:42px;
  background:url('../assets/images/big_title_right.png');
  background-size:cover;
  position: absolute;
  right: -87px;
  top:50%;
  transform:translateY(-50%);
}

.subtitle {
  font-family: 'fjalla_regular', sans-serif;
  font-size:1em;
  line-height: 1.2em;
  text-align: center;
  max-width:580px;
  margin:0 auto;
  margin-bottom:50px;
}

.liens_questionnaires {
  display: flex;
  justify-content: center;
  align-items: center;
}

.liens_questionnaires a, .liens_questionnaires router-link {
  width:203px;
  height:125px;
}

.liens_questionnaires > li:first-of-type {
  margin-right: 62px;
}

.liens_questionnaires li span {
  display: block;
  margin-top: 8px;
  font-size: 13px;
}
</style>
