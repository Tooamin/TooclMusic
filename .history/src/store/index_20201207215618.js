import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rankingId: '',
    songid: '',
    //播放列表
    playList: [],
    //当前歌曲信息
    songCount: [],
    //当前歌曲进度
    songcurrent: [],
    //歌曲总时长
    songTotallength: [],
    //歌词数据
    lyricsData: [],
  },
  mutations: {
    modifyrankingId(state, id) {
      state.rankingId = id;
    },
    getsongdetailId(state, id) {
      state.songid = id;
    },
    //获取当前歌曲信息
    getSongCount(state, detail) {
      state.songCount = detail;
    },
    //获取播放列表
    getplayList(state, list) {
      state.playList = list;
    },

  },
  actions: {},
  modules: {}
})