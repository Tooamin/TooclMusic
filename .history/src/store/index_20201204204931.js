import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rankingId: '',
    mainIndex: 0
  },
  mutations: {
    modifyrankingId(state,id) {
      state.rankingId = id;
    },
    MainIndexlist(state,index) {
      state.mainIndex = index;
    }
  },
  actions: {
  },
  modules: {
  }
})
