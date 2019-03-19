import Vue from 'vue'
import App from './App.vue'
import EventBus from './utils/event-bus'
import router from './router'
// import store from './store'
import store from './vstore'

Vue.prototype.$eventBus = EventBus

Vue.config.productionTip = false

store.dispatch('initUserInfo')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
