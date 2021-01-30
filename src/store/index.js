import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: '',
        logged: false,
  },
    mutations: {
        UPDATE_LOGGED_STATE(state, data) {
            state.logged = data
      }
  },
  actions: {
  },
  modules: {
  }
})
