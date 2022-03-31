import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
  path: "/",
   name: "Home",
   component: Home,
  },
  {
    path: '/regole',
    name: 'Regole',
    component: () => import(/* webpackChunkName: "regole" */ '../views/Regole.vue')
  },
  {
    path: '/museo',
    name: 'Museo',
    component: () => import(/* webpackChunkName: "museo" */ '../views/Museo.vue')
  },
  {
    path: '/classifica',
    name: 'Classsifica',
    component: () => import(/* webpackChunkName: "classifica" */ '../views/Classifica.vue')
  },
  {
    path: '/contatti',
    name: 'Contatti',
    component: () => import(/* webpackChunkName: "contatti" */ '../views/Contatti.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
