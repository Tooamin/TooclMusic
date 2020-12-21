import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //播放列表
    playList: [],
    //当前歌曲信息
    songCount: [],
    //当前歌曲进度
    songcurrent: "",
    //歌曲总时长
    songTotallength: "",
    //歌词数据
    lyric: [],
    //播放音乐url
    songUrl: "",
    //播放器状态
    playerstast: false,
    //歌手id
    singerId: ''
  },
  mutations: {
    //获取当前歌曲信息
    getSongCount(state, playCount) {
      state.songCount = playCount;
      state.playList.indexOf(playCount) == -1 ? state.playList.push(playCount) : '';
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
    setLyric(state, lyrics) {
      state.lyric = lyrics;
    },
    //获取播放列表
    getplayList(state, list) {
      let index = state.playList.indexOf(list);
      console.log(index);
       index == -1 ? state.playList.push(list) : "";
    },
    //移除当前播放列表
    removeSong(state, index) {
      state.playList.splice(index, 1);
    },
    //获取音乐播放地址
    getSongurl(state, songUrl) {
      state.songUrl = songUrl;
    },
    // 改变播放器状态
    getplayerstast(state, bool) {
      state.playerstast = bool;
    },
    //获取歌手id
    getSingerid(state,id) {
      state.singerId = id;
    }
  },
  actions: {},
  modules: {},
  
})