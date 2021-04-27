<template>
  <div id="fin_jeu">
    <h1 class="title">Félicitations !</h1>

    <div class="winning">
      <section class="equipe">
        <p class="title_label">{{team_name}}</p>
        <Tapis/>
      </section>

      <section class="resultats">
        <p class="title_label">Résultats</p>

        <ul>
          <li><span class="points">{{team_points}} pts</span> | <span class="temps">{{timer}}</span></li>
          <li>Bonnes réponses :  {{good_answer}} / {{nb_questions}}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import Tapis from '../components/Tapis.vue'

export default {
  name: 'Fin_Jeu',
  components: {
    Tapis
  },
  data() {
    return { 
      team_points: parseInt(document.getElementById('app').dataset.team_points),
      good_answer: parseInt(document.getElementById('app').dataset.good_answer),
      nb_questions: parseInt(document.getElementById('app').dataset.nb_questions),
      timer: document.getElementById('app').dataset.time,
      team_name: document.getElementById('app').dataset.team_name
    }
  },
  mounted() {
    this.getPageName();
  },
  methods: {
    getPageName: function() {
      document.querySelector('body').className = "fin_jeu";
    }
  }
}
</script>

<style>
.winning {
  margin-top: 80px;
}

.winning #TAPIS {
  width:178px;
  filter: drop-shadow(0px 25px 0px rgba(0,0,0,0.2));
}

.winning .title_label {
  margin-bottom: 30px;
}

.resultats .title_label {
  margin-bottom: 20px;
}

.resultats ul {
  margin:0;
}

.resultats ul li {
  background-color: #ffffff;
  border-radius:20px;
  padding:15px;
  width:298px;
  text-align: center;
  margin-bottom: 11px;
}
</style>