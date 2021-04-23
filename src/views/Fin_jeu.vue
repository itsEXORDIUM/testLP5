<template>
  <div id="fin_jeu">
    <h1 class="title">Félicitations !</h1>

    <div class="winning">
      <section class="equipe">
        <p class="title_label">Nom de l'équipe</p>
        <Tapis/>
      </section>

      <section class="resultats">
        <p class="title_label">Résultats</p>

        <ul>
          <li><span class="points">4 240 pts</span> | <span class="temps">41:35</span></li>
          <li>Bonnes réponses :  27 / 39</li>
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