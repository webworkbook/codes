import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/block'
import api from './api'

// console.log('outter output:', block) // uncaught referenceError : block is not defined

Vue.config.productionTip = false

Vue.api = Vue.prototype.$api = api

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
