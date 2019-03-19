import * as types from '../mutations'

const state = {
  userInfo: {}
}

const mutations = {
  [types.INIT_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  },

  [types.UPDATE_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}

const getters = {
  userInfo: state => {
    return state.userInfo
  }
}

const actions = {
  initUserInfo ({ commit }) {
    const userInfo = JSON.parse(localStorage['USERINFO'] || '{}')
    commit(types.INIT_USER_INFO, userInfo)
  },

  updateUserInfo ({ commit }, userInfo) {
    commit(types.UPDATE_USER_INFO, userInfo)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
