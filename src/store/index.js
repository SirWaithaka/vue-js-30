import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    items: []
  },
  actions: {
    addItem ({commit}, item) {
      commit('ADDITEM', item)
    }
  },
  mutations: {
    ADDITEM (state, payload) {
      state.items.push(payload)
    }
  }
})
