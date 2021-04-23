<template>
  <header>
    <router-link to="/" id="logo"><img src="../assets/logo.png" alt="Laboratoire"></router-link>
    <ul class="barre_infos">
      <li class="equipe"><Tapis/></li>
      <li class="points">240 pts</li>
      <li class="temps">01:35</li>
      <li class="nb_questions">3 / 39</li>
    </ul>
  </header>
</template>

<script>
import Tapis from '../components/Tapis.vue'
export default {
  name: 'Header',
  components: {
    Tapis
  }
}
</script>

<style>
header {
  padding-top:80px;
  text-align: center;
}

header .barre_infos {
  display: none;
}

a#logo img {
  width:130px;
}

body.questionnaire header {
  padding:20px 17px 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;
}

body.questionnaire header a#logo img {
  width:75px;
  filter:grayscale(100%) invert(1);
}

body.questionnaire header .barre_infos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:298px;
  height:40px;
  background-color: #ffffff;
  border-radius:39.5px;
  font-size:15px;
  padding:0 4px 0 10px;
  margin:0;
}

body.questionnaire header .barre_infos #TAPIS {
  width:45px;
}

body.questionnaire header .barre_infos .nb_questions {
  display: block;
  background-color: #0c4379;
  padding:5px 15px;
  border-radius:32.5px;
  color:#ffffff;
}

body.questionnaire header .barre_infos .points {
  padding-right:20px;
  border-right:1px solid var(--dark-blue);
}

</style>
