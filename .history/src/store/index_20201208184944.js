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
    songcurrent: "",
    //歌曲总时长
    songTotallength: "",
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
      state.playList.indexOf(detail) == -1 ? state.playList.push(detail) : "";
    },
    //获取歌曲当前时间
    getSongtime(state,currentText) {
      state.songcurrent = currentText;
    },
    //获取歌曲总时间
    getTotaltime(state, totaltime) {
      state.songTotallength = totaltime;
    },
    // 当前播放歌曲歌词
    getLyrics(state,lyrics) {
      state.lyricsData = lyrics;
    },
    //获取播放列表
    getplayList(state, list) {
      state.playList = [];
      let index = state.playList.indexOf(list);
      state.playList.indexOf(list) == -1 ? state.playList.push(list) : "";
    },
    //移除当前播放列表歌词
    removeSong(state, songCount) {
      let index = state.playList.indexOf(songCount);
      state.playList.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
})