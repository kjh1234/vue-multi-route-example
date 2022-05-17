import Vue from 'vue'
import VueRouter from 'vue-router'

import TodoApp from '../views/TodoApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'todo',
    path: '/',
    redirect: '/todos/all'
  },
  {
    name: 'todos',
    path: '/todos',
    redirect: '/todos/all',
    component: TodoApp,
    children: [
      {
        name: 'todos-filter',
        path: ':id'
      }
    ]
  }
]

export default new VueRouter({
  // https://router.vuejs.org/kr/guide/essentials/history-mode.html
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})
