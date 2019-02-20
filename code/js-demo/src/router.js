import Vue from 'vue'
import Router from 'vue-router'

const page = path => () => import(`@/pages/${path}`)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: page('index')
    },
    {
      path: '/clone',
      name: 'clone',
      component: page('clone')
    }
  ]
})