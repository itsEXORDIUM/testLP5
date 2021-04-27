<template>
  <div id="personnalisation">
    <h1 class="title">Personnaliser votre équipe</h1>
    <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla orci, efficitur non nibh.</p>

    <form class="personnalisation_form" @submit.prevent="signInButtonPressed">
      <section class="nom">
        <label for="nom_equipe" class="title_label">Nom de l'équipe</label>
        <input type="text" id="nom_equipe" name="nom_equipe" placeholder="Team">
      </section>

      <section class="tapis">
        <p class="title_label">Personnalisation du tapis volant</p>

        <Tapis/>

        <div class="choix_couleur">
          <label class="container vert"><span class="show-for-sr">vert</span>
            <input type="radio" id="vert" name="couleur" value="vert" @click="getCouleur('vert')">
            <span class="checkmark"></span>
          </label>

          <label class="container jaune"><span class="show-for-sr">jaune</span>
            <input type="radio" id="jaune" name="couleur" value="jaune" @click="getCouleur('jaune')">
            <span class="checkmark"></span>
          </label>

          <label class="container orange"><span class="show-for-sr">orange</span>
            <input type="radio" checked="checked" id="orange" name="couleur" value="orange" @click="getCouleur('orange')">
            <span class="checkmark"></span>
          </label>

          <label class="container rouge"><span class="show-for-sr">rouge</span>
            <input type="radio" id="rouge" name="couleur" value="rouge" @click="getCouleur('rouge')">
            <span class="checkmark"></span>
          </label>

          <label class="container bleu"><span class="show-for-sr">bleu</span>
            <input type="radio" id="bleu" name="couleur" value="bleu" @click="getCouleur('bleu')">
            <span class="checkmark"></span>
          </label>

          <label class="container violet"><span class="show-for-sr">violet</span>
            <input type="radio" id="violet" name="couleur" value="violet" @click="getCouleur('violet')">
            <span class="checkmark"></span>
          </label>
        </div>
      </section>

      <input type="submit" value="Commencer" class="big_button" @click="getTeamName()">
  </form>
  </div>
</template>

<script>
import Tapis from '../components/Tapis.vue'

export default {
  name: 'Personnalisation',
  components: {
    Tapis
  },
  mounted() {
    this.getPageName();
  },
  methods: {
    getPageName: function() {
      document.querySelector('body').className = "personnalisation";
    },

    getCouleur: function(couleur) {
      document.getElementById('app').className = couleur;
    },

    getTeamName: function() {
      document.getElementById('app').dataset.team_name = document.getElementById('nom_equipe').value;
      this.$router.push('question');
    },

    signInButtonPressed: function() {
      // console.log('pressed!');
    }
  }
}
</script>

<style>
.title {
  font-size: 35px;
  text-align: center;
  margin-top:55px;
}

#personnalisation .subtitle {
  font-size:15px;
  margin-bottom: 38px;
}

.personnalisation_form, .winning {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap:wrap;
  max-width: 80%;
  margin:0 auto;
}

.personnalisation_form section, .winning section {
  width:400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 42px;
}

.title_label {
  font-size:18px;
  text-transform: uppercase;
  margin-bottom:40px;
  margin-top:0;
}

input[name="nom_equipe"] {
  width:290px;
  height:57px;
  border-radius:10px;
  background-color: #e5ebed;
  border:2px solid #ffffff;
  filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.3));
  padding:20px;
  outline:none;
  font-family: 'arial', sans-serif;
  font-size:18px;
}

.tapis .title_label {
  margin-bottom: 30px;
}

.tapis #TAPIS {
  width:180px;
  filter: drop-shadow(0px 25px 0px rgba(0,0,0,0.2));
}

.choix_couleur {
  display: flex;
  margin-top:30px;
  justify-content: space-around;
  width:75%;
  height: 40px;
}

.container {
  position: relative;
  padding-left: 35px;
  cursor: pointer;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: linear-gradient(transparent, rgba(0,0,0,0.2));
  filter: drop-shadow(0px 0px 10px rgba(0,0,0,0));
  transition: filter .2s ease-in-out;
}

.container.vert .checkmark {
  background-color: #5fc07d;
}

.container.jaune .checkmark {
  background-color: #bdc05f;
}

.container.orange .checkmark {
  background-color: #f17c36;
}

.container.rouge .checkmark {
  background-color: #d0152d;
}

.container.bleu .checkmark {
  background-color: #14aded;
}

.container.violet .checkmark {
  background-color: #9a5ddf;
}

.container:hover input ~ .checkmark, .container:focus input ~ .checkmark {
  filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.3));
}

.container input:checked ~ .checkmark {
  filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.3));
}

.checkmark::after {
  content: "";
  position: absolute;
  opacity:0;
  border:2px solid #ffffff;
  width:32px;
  height:32px;
  border-radius:50%;
  top:-3px;
  left:-3px;
  display:block;
  transition: opacity .3s ease-in-out;
}

.container input:checked ~ .checkmark::after, .container input:hover ~ .checkmark::after {
  opacity:1;
}

input[type="submit"] {
  display: flex;
  width:175px;
  height:65px;
  font-size:20px;
  font-family:'fjalla_regular', sans-serif;
  cursor:pointer;
  border:none;
  transition:opacity .3s ease-in-out;
}

input[type="submit"]:hover, input[type="submit"]:focus {
  opacity:0.9;
}
</style>
