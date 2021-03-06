import Vue from 'vue'
import VueRouter from 'vue-router'
import About from './About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log(to, from)
//   next()
// })

export default router
