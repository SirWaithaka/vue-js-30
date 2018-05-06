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
      commit('ADD_ITEM', item)
    },
    initItems ({commit}, items) {
      commit('INIT_ITEMS', items)
    }
  },
  mutations: {
    ADD_ITEM (state, payload) {
      state.items.push(payload)
    },
    INIT_ITEMS (state, payload) {
      state.items = payload
    }
  }
})
