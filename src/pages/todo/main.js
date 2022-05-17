import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ExtRouterLink from '../../components/ExtRouterLink.vue'

Vue.component('ext-router-link', ExtRouterLink)

// eslint-disable-next-line
new Vue({
  data: {
    appName: 'todo'
  },
  el: '#app',
  router,
  store,
  render: h => h(App) // https://css-tricks.com/what-does-the-h-stand-for-in-vues-render-method/
})
