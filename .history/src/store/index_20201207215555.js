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
    modifyrankingId(state,id) {
      state.rankingId = id;
    },
    getsongdetailId(state,id) {
      state.songid = id;
    },
    //获取当前歌曲信息
    getSongCount(state,detail){
      state.songCount = detail;
    },
    //获取播放列表
    getplayList(state,list) {
      state.playList = list;
    },
    setContent(state, payload) {
      state.playContent = payload
      state.playList.indexOf(payload)==-1?state.playList.push(payload):""
  },
  //获取当前播放歌曲的歌词
  setLyric(state, payload) {
      state.playContent.lyric = payload
  },
  //设置当前播放歌曲的进度
  setCurrent(state, payload) {
      state.current =  Math.ceil(payload)
  },
  //从播放列表中移除歌曲
  removeSong(state, payload) {
      let index = state.playList.indexOf(payload)
      state.playList.splice(index, 1)
  },
  //往播放列表中加入歌曲
  addSong(state, payload) {
      let index = state.playList.indexOf(payload)
      state.playList.indexOf(payload)==-1?state.playList.push(payload):""
  }

  },
  actions: {
  },
  modules: {
  }
})
