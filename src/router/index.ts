import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Coets from '../views/Taller.vue'
import Carrera from '../views/Carrera.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/coets',
    name: 'Coets',
    component: Coets
  },
  {
    path: '/carrera',
    name: 'Carrera',
    component: Carrera
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
