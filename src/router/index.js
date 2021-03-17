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
    path: '/Cadastro',
    name: 'Cadastro',
    component: () => import('../views/Cadastro.vue')
  },
  {
    path: '/Calendario',
    name: 'Calendario',
    component: () => import('../views/Calendario.vue')
  },
  {
    path: '/TelaAdmin',
    name: 'TelaAdmin',
    component: () => import('../views/TelaAdmin.vue')
  }, 
  {
    path: '/ContactarCliente',
    name: 'ContactarCliente',
    component: () => import('../views/ContactarCliente.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
