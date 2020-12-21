<template>
  <div class="song">
    <div
      class="songbg"
      :style="{ backgroundImage: 'url(' + songUrl + ')' }"
    ></div>
    <div class="player-box">
      <van-nav-bar left-arrow :border="false" @click-left="goBack">
        <template #title>
          <div class="title-box">
            <div class="player-name">{{ musicDate.name }}</div>
            <div class="singer-name">
              {{ singerName }}<van-icon name="arrow" />
            </div>
          </div>
        </template>
      </van-nav-bar>
    </div>
    <div class="song-imgbox">
      <div class="songimg">
        <img :src="songUrl" alt="" class="auto-img" />
      </div>
    </div>
    <div class="video">
      <video
        @canplay="getDuration"
        @timeupdate="updateTime"
        ref="audio"
        autoplay
      ></video>
    </div>
    <div class="popup">
      <van-popup
        v-model="isopenList"
        position="bottom"
        :style="{ height: '50%' }"
        :closeable="true"
      >
        <div class="popup-content">
          <div class="popup-title">播放列表</div>
          <div
            class="songlist-item"
            v-for="(item, index) in playList"
            :key="index"
            @click="listplaySong(item)"
          >
            <div class="song-name">
              {{ item.name }}-{{ item.ar[0].name }}
              <van-icon name="cross" @click="removeSonglist(index)" />
            </div>
          </div>
        </div>
      </van-popup>
    </div>
    <div class="progressbar">
      <div class="range-box">
        <div class="strattiem">{{ currentText }}</div>
        <div class="range">
          <van-slider v-model="currentBar" @input="dragStart" />
        </div>
        <div class="endtiem">{{ durationText }}</div>
      </div>
      <div class="play-conponents">
        <div class="model" @click="playmodel">
          <img
            src="../assets/images/suijiplay.png"
            alt=""
            v-if="isloop == true"
          />
          <img
            src="../assets/images/shunxuplay.png"
            alt=""
            v-if="isloop == false"
          />
        </div>
        <div class="upsong" @click="prevSong">
          <img src="../assets/images/upplay.png" alt="" />
        </div>
        <div class="plyasong">
          <img
            src="../assets/images/play.png"
            alt=""
            v-if="!playStatus"
            @click="play"
          />
          <img
            src="../assets/images/end.png"
            alt=""
            v-if="playStatus"
            @click="pause"
          />
        </div>
        <div class="nextsong" @click="nextSong">
          <img src="../assets/images/nextplay.png" alt="" />
        </div>
        <div class="directory" @click="openSonglist">
          <img src="../assets/images/list.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/less/song.less";
export default {
  name: "Song",
  data() {
    return {
      musicDate: [],
      musicid: [],
      musicurl: [],
      singerName: [],
      songUrl: [],
      playStatus: true,
      timer: null,
      //进度条时长
      currentBar: 0,
      //当前音乐时间
      currentText: "00:00",
      //音乐总时长
      durationText: "00:00",
      //播放模式切换
      isloop: false,
      //播放模式
      loopStyle: "list",
      //总秒数
      allduratioTime: 0,
      //列表弹出
      isopenList: false,
      //列表歌单
      songlist: [],
    };
  },
  watch: {
    songContent() {
      this.playSong(this.songContent); 
    }
  },
  created() {
    //获取音乐ID
    // this.musicid = this.$route.params.id;
    this.musicid = this.$store.state.songCount;
    //初始化
    this.playSong();
    //获取音乐
    this.getMusic(this.musicid.id);

    //获取音乐详情
    this.getMusicDeateil(this.musicid.id);
  },
  methods: {
    //列表菜单

    //返回上一级
    goBack() {
      this.$router.go(-1);
      clearInterval(this.timer);
      this.timer = null;
    },
    //获取音乐详情
    getMusicDeateil(id) {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/song/detail",
        params: {
          ids: id,
        },
      })
        .then((result) => {
          this.$toast.clear();
          if (result.data.code == 200) {
            this.musicDate = result.data.songs[0];
            for(let i = 0; i < result.data.songs[0].ar.length;i++){
                  (result.data.song[0].ar[i]);
            }
            this.songUrl = result.data.songs[0].al.picUrl;
              (this.musicDate);
          }
        })
        .catch((err) => {
            (err);
        });
    },
    //获取音乐
    getMusic(id) {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/song/url",
        params: {
          id: id,
        },
      })
        .then((result) => {
          this.clearTimer();
          this.$toast.clear();
          if (result.data.code == 200) {
            this.musicurl = result.data.data[0];
            (this.$refs.audio.src = result.data.data[0].url), this.setTimer();
            this.$store.commit("getSongUrl", this.musicurl);
          }
        })
        .catch((err) => {
            (err);
        });
    },
    //获取总时长
    getDuration() {
      let durationtime = this.$refs.audio.duration;
      this.allduratioTime = durationtime;
      this.$store.commit("getTotaltime", durationtime);
      this.durationText = this.formatTheTime(durationtime);
    },
    // 当前时长
    updateTime(e) {
      let currentTime = e.target.currentTime;
      this.currentText = this.formatTheTime(currentTime);
    },
    //初始化播放歌曲
    playSong(value) {
        ("初始化");
      this.clearTimer();
      this.playStatus = true;
      this.currentText = "00:00";
      this.currentBar = 0;
      this.getMusic(this.songContent.id);
    },
    //点击播放
    play() {
        ("播放");
      this.$refs.audio.ended
        ? this.playSong(this.songContent)
        : this.$refs.audio.play(),
        this.setTimer();
      this.playStatus = true;
    },
    //暂停
    pause() {
      this.playStatus = false;
      this.$refs.audio.pause();
      this.clearTimer();
    },

    //更新进图条
    updateCurrent() {
        ("更新进度条");
      this.currentBar == 100
        ? (this.clearTimer(),this.loopStyle == "list" ? this.listLoop() : this.loopStyle = "random" ? this.randomLoop() : "")
        : (this.currentBar =
            (this.$refs.audio.currentTime / this.$refs.audio.duration) * 100);
    },
    //进度条拖拽
    dragStart(value) {
      this.$refs.audio.currentTime = parseInt(
        (this.allduratioTime * value) / 100
      );
    },
    // 格式化时间
    formatTheTime(value) {
      let m = parseInt(value / 60);
      let s = parseInt(value % 60);
      m >= 10 ? m : (m = "0" + m);
      s >= 10 ? s : (s = "0" + s);
      return m + ":" + s;
    },
    openSonglist() {
      this.isopenList = !this.isopenList;
    },
    //移除播放列表
    removeSonglist(index) {
      this.$store.commit("removeSong", index);
      this.openSonglist();
    },
    //列表里播放的音乐
    listplaySong(item) {
      item === this.songContent
        ? this.play()
        : this.$store.commit("getSongCount", item);
      this.getMusicDeateil(this.songContent.id);
      this.isopenList = false;
    },
    //上一首
    prevSong() {
        ("上一首");
      let index = this.playList.indexOf(this.songContent);
      let length = this.playList.length;
      index == 0 ? (index = length - 1) : index--;
      this.$store.commit("getSongCount", this.playList[index]);
      this.getMusicDeateil(this.songContent.id);
    },
    //下一首
    nextSong() {
        ("下一首");
      this.loopStyle == "random" ? this.randomLoop() : this.listLoop();
      this.getMusicDeateil(this.songContent.id);
    },
    //列表循环
    listLoop() {

      let index = this.playList.indexOf(this.songContent); 
      let length = this.playList.length;
      index == length - 1 ? index = 0 : index++; 
      this.$store.commit("getSongCount", this.playList[index]);
      this.getMusicDeateil(this.songContent.id);
    },
    //随机播放
    randomLoop() {
        ("随机播放");
      let length = this.playList.length;
      let index = this.playList.indexOf(this.songContent);
      let random = parseInt(Math.random() * this.playList.length);
      while(index==random) { 
        random = parseInt(Math.random() * this.playList.length);
      }
      this.$store.commit("getSongCount", this.playList[random]);
      this.getMusicDeateil(this.songContent.id);
    },
    //模式切换
    playmodel() {
        (this.isloop);
      if (this.isloop) {
        this.loopStyle = "lisr";
        this.isloop = false;
      } else {
        this.loopStyle = "random";
        this.isloop = true;
      }
    },
    //定时器
    setTimer() {
      this.clearTimer();
      this.timer = setInterval(this.updateCurrent, 1000);
    },
    //清除定时器
    clearTimer() {
        ("清除定时器");
      clearInterval(this.timer);
      this.timer = null;
    },
  },
  computed: {
    //当前播放信息
    songContent() {
      return this.$store.state.songCount;
    },
    //播放列表信息
    playList() {
      return this.$store.state.playList;
    },
    //播放时间
    songcurrent() {
      return this.$stor.state.songcurrent;
    },
  },
};
</script>

<style lang="less" scoped>
</style>