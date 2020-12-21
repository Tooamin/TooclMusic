import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rankingId:''
  },
  mutations: {
    modifyrankingId(id) {
      this.$storestate.rankingId = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
