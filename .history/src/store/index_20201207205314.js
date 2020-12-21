import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rankingId: '',
    songid: '',
    //播放列表
    playList: [],
    //歌曲总时长
    song
  },
  mutations: {
    modifyrankingId(state,id) {
      state.rankingId = id;
    },
    getsongdetailId(state,id) {
      state.songid = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
