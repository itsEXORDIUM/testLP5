<template>
  <form id="question" @submit.prevent="signInButtonPressed">
    <div class="window" style="transform:translateX(0);">
      <section id="question_1" class="container_question">
        <h1 class="question">Outils disponibles en C1 ?</h1>
        <p class="subtitle">(plusieurs choix possibles)</p>

        <label class="container_response" for="reponse1">Pour le lancement, nous n'avons pas de visite différenciée car cela ne sert à rien
          <input type="checkbox" id="reponse1" name="reponse1" value="0">
          <span class="checkmark"></span>
        </label>

        <label class="container_response" for="reponse2">Je peux remettre soit une fiche posologie avec carte code détachable soit une carte code en outils de mes prescriptions à toutes mes cibles
          <input type="checkbox" checked="checked" id="reponse2" name="reponse2" value="1">
          <span class="checkmark"></span>
        </label>

        <label class="container_response" for="reponse3">Pour les MG un ordonnancier UrgoStart Plus Border/ UrgoStart / UrgoK2 est disponible & pour les IDE  un book contenant les étiquettes UrgoStart Plus Border/ UrgoStart /UrgoK2 est disponible
          <input type="checkbox" checked="checked" id="reponse3" name="reponse3" value="1">
          <span class="checkmark"></span>
        </label>

        <label class="container_response" for="reponse4">Un book de cas clinique est disponible pour remettre à vos professionnels de santé
          <input type="checkbox" id="reponse4" name="reponse4" value="0">
          <span class="checkmark"></span>
        </label>

        <label class="container_response" for="reponse5">Pour les cas cliniques, de nouvelles fiches évaluation ainsi que des réglettes sont disponibles
          <input type="checkbox" checked="checked" id="reponse5" name="reponse5" value="0">
          <span class="checkmark"></span>
        </label>
      </section>

      <section id="question_2" class="container_question">
        <h1 class="question">Outils disponibles en C2 ?</h1>
        <p class="subtitle">(plusieurs choix possibles)</p>

        <label class="container_response" for="reponse6">Pour le lancement, nous n'avons pas de visite différenciée car cela ne sert à rien
          <input type="checkbox" id="reponse6" name="reponse6" value="0">
          <span class="checkmark"></span>
        </label>

        <label class="container_response" for="reponse7">Je peux remettre soit une fiche posologie avec carte code détachable soit une carte code en outils de mes prescriptions à toutes mes cibles
          <input type="checkbox" checked="checked" id="reponse7" name="reponse7" value="0">
          <span class="checkmark"></span>
        </label>

        <label class="container_response" for="reponse8">Pour les MG un ordonnancier UrgoStart Plus Border/ UrgoStart / UrgoK2 est disponible & pour les IDE  un book contenant les étiquettes UrgoStart Plus Border/ UrgoStart /UrgoK2 est disponible
          <input type="checkbox" checked="checked" id="reponse8" name="reponse8" value="0">
          <span class="checkmark"></span>
        </label>

        <label class="container_response" for="reponse9">Un book de cas clinique est disponible pour remettre à vos professionnels de santé
          <input type="checkbox" id="reponse9" name="reponse9" value="0">
          <span class="checkmark"></span>
        </label>

        <label class="container_response" for="reponse10">Pour les cas cliniques, de nouvelles fiches évaluation ainsi que des réglettes sont disponibles
          <input type="checkbox" checked="checked" id="reponse10" name="reponse10" value="1">
          <span class="checkmark"></span>
        </label>
      </section>
    </div>

    <input type="submit" value="Valider" class="big_button" @click="validerreponse()">

  </form>
</template>

<script>

export default {
  name: 'Question',
  components: {
    
  },
  data() {
    return { 
      current_question: 1,
      checkboxs: [],
      choisies: [],
      falses: [],
      team_points: 0,
      good_answer: 0
    }
  },
  mounted() {
    this.getPageName();
    this.sliderQuestions();

    document.getElementById('app').dataset.timer_start = 'true';
    document.getElementById('app').dataset.current_question = 1;
  },
  methods: {
    getPageName: function() {
      document.querySelector('body').className = "questionnaire";
    },

    sliderQuestions: function() {
      var nb_questions = document.querySelectorAll('.container_question').length;
      document.getElementById('app').dataset.nb_questions = nb_questions;
      var container_width = (608 * nb_questions) + (nb_questions * 40) + 'px';
      
      document.querySelector('.window').style.width = container_width;
    },

    validerreponse: function() {
      this.repChoisies(this.choisies);

      this.moveSlider();
    },

    repChoisies: function(choisies) {

      this.checkboxs = document.querySelectorAll('#question_'+ this.current_question +' input[type="checkbox"]');

      this.checkboxs.forEach(function(checkbox) {
        if(checkbox.checked){
          choisies.push(checkbox);
        }
      });

      this.iffalse(this.falses);
    },

    iffalse: function(falses) {
      this.choisies.forEach(function(choisie) {
        if(choisie.value == 0) {
          falses.push(choisie);
        }
      });

      this.countPoints(falses);
    },

    countPoints: function() {
      if(this.falses.length == 0) {
        this.team_points = this.team_points + 10;
        this.good_answer = this.good_answer + 1;
      }

      this.sendResults();
    },

    sendResults: function() {
      document.getElementById('app').dataset.team_points = this.team_points;
      document.getElementById('app').dataset.good_answer = this.good_answer;
    },

    moveSlider: function() {
      var window_questions = document.querySelector('.window');

      var translate = window.getComputedStyle(window_questions).transform;
      var matrix = new DOMMatrix(translate);
      var translate_value = matrix.m41 - 648;

      var nb_questions = document.querySelectorAll('.container_question').length;
      var max_transform = - (nb_questions - 1) * (648 + 40);

      if(translate_value < max_transform) {
        document.getElementById('app').dataset.timer_start = "false";
        this.getTimer();
        this.$router.push('Fin_jeu');
      } else {
        window_questions.style.transform = 'translateX('+ translate_value +'px)';
      }

      var current_question = - (translate_value / 648) + 1;
      this.current_question = current_question;
      document.getElementById('app').dataset.current_question = current_question;
    },

    getTimer: function() {
      var timer = document.querySelector('header .temps').innerHTML;
      document.getElementById('app').dataset.time = timer;
    },

    signInButtonPressed: function() {
      // console.log('pressed!');
    }
  }
}
</script>

<style>
#question .question {
  font-size:20px;
  text-align: center;
}

#question .subtitle {
  font-size:12.5px;
  margin-bottom:30px;
}

section.container_question {
  width:608px;
  margin:0 20px;
}

#question {
  width:648px;
  margin:0 auto;
  overflow-x:hidden;
}

.container_response {
  position: relative;
  cursor: pointer;
  display: block;
  margin-bottom:17px;
  font-size:15px;
  padding:15px 20px;
  background-color: #f6f7f8;
  border-radius:20px;
  border:2px solid #ffffff;
  line-height:1.2em;
}

.container_response input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container_response .checkmark {
  position: absolute;
  top: -3px;
  left: -3px;
  width:calc(100% + 6px);
  height:calc(100% + 6px);
  border:2px solid #084a87;
  border-radius:20px;
  opacity:0;
  display: block;
  transition: opacity .2s ease-in-out;
}

.container_response:hover input ~ .checkmark {
  opacity:0.5;
}

.container_response input:checked ~ .checkmark {
  opacity:1;
}

.checkmark::after {
  display: none;
}

#question input[type="submit"] {
  margin:0 auto;
  margin-top:20px;
}

#question .window {
  display: flex;
  transition: transform .3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
}
</style>
