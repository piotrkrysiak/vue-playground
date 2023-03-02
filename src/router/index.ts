import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PokemonView from '@/views/PokemonView.vue'
import PokemonDetailsView from '@/views/PokemonDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: PokemonView,
      props: true
    },
    {
      path: '/pokemon/:id',
      name: 'pokemonDetails',
      component: PokemonDetailsView,
      props: true
    }
  ]
})

export default router
