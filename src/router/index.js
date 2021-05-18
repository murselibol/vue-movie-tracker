import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies/:genre',
    name: 'MoviesGenre',
    component: () => import(/* webpackChunkName: "MoviesGenre" */ '../views/MoviesGenre.vue')
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: () => import(/* webpackChunkName: "MovieDetails" */ '../views/MovieDetails.vue')
  },
  {
    path: '/movies',
    name: 'SearchMovie',
    component: () => import(/* webpackChunkName: "SearchMovie" */ '../views/SearchMovie.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
