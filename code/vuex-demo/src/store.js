import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    updateUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    initUserInfo (state) {
      const userInfo = JSON.parse(localStorage.getItem('USERINFO'))
      state.userInfo = userInfo
    }
  },
  actions: {
    updateUserInfo ({ commit }, userInfo) {
      commit('updateUserInfo', userInfo)
    },
    initUserInfo (cxt) {
      cxt.commit('initUserInfo')
    }
  }
})
