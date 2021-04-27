<template>
  <header>
    <router-link to="/" id="logo"><img src="../assets/logo.png" alt="Laboratoire"></router-link>
    <ul class="barre_infos">
      <li class="equipe"><Tapis/></li>
      <li class="points">{{teampoints}} pts</li>
      <li class="temps">{{minutes}}:{{seconds}}</li>
      <li class="nb_questions">{{currentquestion}} / {{nbquestions}}</li>
    </ul>
  </header>
</template>

<script>
import Tapis from '../components/Tapis.vue'
export default {
  name: 'Header',
  components: {
    Tapis
  },
  data() {
    return { 
      currentquestion: parseInt(document.getElementById('app').dataset.current_question),
      nbquestions: parseInt(document.getElementById('app').dataset.nb_questions),
      teampoints: parseInt(document.getElementById('app').dataset.team_points),
      minutes: 0,
      seconds: 0
    }
  },
  mounted() {
  },
  updated(){
    this.$nextTick(()=>{
      this.getDatas();
      this.timer();
    })
  },
  methods: {
    getDatas: function() {
      this.currentquestion = parseInt(document.getElementById('app').dataset.current_question);
      this.teampoints = parseInt(document.getElementById('app').dataset.team_points);
      this.nbquestions = parseInt(document.getElementById('app').dataset.nb_questions);
    },

    timer: function() {
      var seconds = 0;
      var minutes = 0;

      setInterval(() => {
        var secondes_brutes = seconds++;

        if(secondes_brutes < 10) {
          this.seconds = '0' + secondes_brutes;
        } else {
          this.seconds = secondes_brutes;
        }

        if(secondes_brutes >= 60) {
          seconds = 0;
          minutes = minutes + 1;
          this.seconds = seconds;
          this.minutes = minutes;
        }        
      }, 1000);
    }
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
  transition:all .3s ease-in-out;
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
