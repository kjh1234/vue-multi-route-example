import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'

Vue.config.productionTip = false

new Vue({
  data: {
    appName: 'index'
  },
  router,
  render: h => h(App)
}).$mount('#app')
