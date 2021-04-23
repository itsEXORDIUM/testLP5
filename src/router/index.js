import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Question from '../views/Question.vue'
import Personnalisation from '../views/Personnalisation.vue'
import Fin_Jeu from '../views/Fin_jeu.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/personnalisation', component: Personnalisation },
  { path: '/question', component: Question },
  { path: '/fin_jeu', component: Fin_Jeu }
]

const router = new VueRouter({
  routes
})

export default router
