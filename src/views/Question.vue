<template>
  <div id="question">
    <h1 class="question">Outils disponibles en C1 ?</h1>
    <p class="subtitle">(plusieurs choix possibles)</p>

    <form action="">
      <label class="container_response" for="reponse1">Pour le lancement, nous n'avons pas de visite différenciée car cela ne sert à rien
        <input type="checkbox" id="reponse1" name="reponse1" value="false">
        <span class="checkmark"></span>
      </label>

      <label class="container_response"  for="reponse2">Je peux remettre soit une fiche posologie avec carte code détachable soit une carte code en outils de mes prescriptions à toutes mes cibles
        <input type="checkbox" checked="checked" id="reponse2" name="reponse2" value="true">
        <span class="checkmark"></span>
      </label>

      <label class="container_response" for="reponse3">Pour les MG un ordonnancier UrgoStart Plus Border/ UrgoStart / UrgoK2 est disponible & pour les IDE  un book contenant les étiquettes UrgoStart Plus Border/ UrgoStart /UrgoK2 est disponible
        <input type="checkbox" checked="checked" id="reponse3" name="reponse3" value="true">
        <span class="checkmark"></span>
      </label>

      <label class="container_response" for="reponse4">Un book de cas clinique est disponible pour remettre à vos professionnels de santé
        <input type="checkbox" id="reponse4" name="reponse4" value="false">
        <span class="checkmark"></span>
      </label>

      <label class="container_response" for="reponse5">Pour les cas cliniques, de nouvelles fiches évaluation ainsi que des réglettes sont disponibles
        <input type="checkbox" checked="checked" id="reponse5" name="reponse5" value="true">
        <span class="checkmark"></span>
      </label>

      <router-link to="/fin_jeu"><input type="submit" value="Valider" class="big_button"></router-link>
    </form>

  </div>
</template>

<script>
export default {
  name: 'Question',
  components: {
    
  },
  mounted() {
    this.getPageName();
  },
  methods: {
    getPageName: function() {
      document.querySelector('body').className = "questionnaire";
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
}

#question form {
  max-width:608px;
  margin:0 auto;
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
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  border:2px solid #084a87;
  border-radius:20px;
  display: none;
}

.container_response:hover input ~ .checkmark {
  /* background-color: #ccc; */
}

.container_response input:checked ~ .checkmark {
  display:block;
}

.checkmark::after {
  display: none;
}

#question input[type="submit"] {
  margin:0 auto;
  margin-top:40px;
}
</style>
