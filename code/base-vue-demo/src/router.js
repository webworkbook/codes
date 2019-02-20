import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const account = path => () => import(`@/views/account/${path}`)

export default new Router({
  mode: 'history', // 设置路由模式。
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/account/login',
      name: 'login',
      component: account('Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
