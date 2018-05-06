import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    items: [] // data element for day-15 tutorial on localstorage
  },
  actions: {
    // actions for day-15
    addItem ({commit}, item) {
      commit('ADD_ITEM', item)
    },
    initItems ({commit}, items) {
      commit('INIT_ITEMS', items)
    },
    changeItemState ({commit}, index) {
      commit('CHANGE_ITEM_STATE', index)
    }
  },
  mutations: {
    // mutations for day-15
    ADD_ITEM (state, payload) {
      state.items.push(payload)
    },
    INIT_ITEMS (state, payload) {
      state.items = payload
    },
    CHANGE_ITEM_STATE (state, payload) {
      state.items[payload].done = !state.items[payload].done
    }
  }
})
