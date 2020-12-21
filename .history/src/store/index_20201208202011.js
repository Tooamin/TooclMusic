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
    //播放音乐url
    songUrl: ""
  },
  mutations: {
    modifyrankingId(state, id) {
      state.rankingId = id;
    },
    getsongdetailId(state, id) {
      state.songid = id;
    },
    //获取当前歌曲信息
    getSongCount(state, playCount) {
      state.songCount = playCount
      state.playList.indexOf(playCount) == -1 ? state.playList.push(playCount) : ""
    },
    //获取当前音乐地址
    getSongUrl(state, songUrl) {
      state.songUrl = songUrl;
    },
    //获取歌曲当前时间
    getSongtime(state, currentText) {
      state.songcurrent = currentText;
    },
    //获取歌曲总时间
    getTotaltime(state, totaltime) {
      state.songTotallength = totaltime;
    },
    // 当前播放歌曲歌词
    getLyrics(state, lyrics) {
      state.lyricsData = lyrics;
    },
    //获取播放列表
    getplayList(state, list) {
      state.playList.indexOf(list) == -1 ? state.playList.push(list) : "";
    },
    //移除当前播放列表
    removeSong(state, index) {
      state.playList.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
  watch: {
    songContent() {
      this.playSong(this.songContent);
    }
  }
})