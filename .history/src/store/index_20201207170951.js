import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rankingId: '',
    songid:'',
  },
  mutations: {
    modifyrankingId(state,id) {
      state.rankingId = id;
    },

  },
  actions: {
  },
  modules: {
  }
})
