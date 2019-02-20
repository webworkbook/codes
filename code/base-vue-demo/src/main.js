import Vue from 'vue'
import router from './router'
import App from './App.vue'
import api from './api'
import store from './store'

// Vue.config.productionTip = false  默认为true
Vue.api2 = Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
