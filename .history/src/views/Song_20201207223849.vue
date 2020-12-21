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
        :src="musicid.url"
      ></video>
    </div>
    <div class="progressbar">
      <div class="range-box">
        <div class="strattiem">{{ currentBar }}</div>
        <div class="range">
          <div class="range-icon"></div>
        </div>
        <div class="endtiem">{{ durationText }}</div>
      </div>
      <div class="play-conponents">
        <div class="model">
          <img src="../assets/images/suijiplay-01.png" alt="" />
        </div>
        <div class="upsong">
          <img src="../assets/images/upsong.png" alt="" />
        </div>
        <div class="plyasong">
          <img src="../assets/images/play.png" alt="" />
        </div>
        <div class="nextsong">
          <img src="../assets/images/nextsong.png" alt="" />
        </div>
        <div class="directory">
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
      singerName: [],
      songUrl: [],
      playStatus: false,
      time: "",
      currentBar: "00:00",
      currentText: "00:00",
      durationText: "00:00",
      listShow: false,
      loopStyle: "lisr",
    };
  },
  created() {
    //获取音乐ID
    this.musicid = this.$route.params.id;
     (this.musicid);

    this.getMusic();

    //获取音乐详情
    this.getMusicDeateil();
  },
  methods: {
    //列表菜单

    //返回上一级
    goBack() {
      this.$router.go(-1);
    },
    //获取音乐详情
    getMusicDeateil() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/song/detail",
        params: {
          ids: this.musicid,
        },
      })
        .then((result) => {
          this.$toast.clear();
          if (result.data.code == 200) {
            this.musicDate = result.data.songs[0];
            this.singerName = result.data.songs[0].ar[0].name;
            this.songUrl = result.data.songs[0].al.picUrl;
          }
        })
        .catch((err) => {
           (err);
        });
    },
    //获取音乐
    getMusic() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/song/url",
        params: {
          id: this.musicid,
        },
      })
        .then((result) => {
          this.$toast.clear();
          if (result.data.code == 200) {
            this.musicid = result.data.data[0];
             (this.musicid);
            this.$store.commit("getSongCount", this.musicid);
          }
        })
        .catch((err) => {
           (err);
        });
    },
    //获取总时长
    getDuration() {
      this.durationText = this.$refs.audio.duration;
      var m = parseInt(this.durationText / 60);
      var s = parseInt(this.durationText % 60);
      m >= 10 ? m : (m = "0" + m);
      s >= 10 ? s : (s = "0" + s);
      this.durationText =  m + ":" + s;
       (this.durationText);
    },
    // 当前时长
    updateTime(e) {
      this.currentText = e.target.currentTime;
      var m = parseInt(this.currentText / 60);
      var s = parseInt(this.currentText % 60);
      m >= 10 ? m : (m = "0" + m);
      s >= 10 ? s : (s = "0" + s);
      this.currentText =  m + ":" + s;
       (this.currentText);
    },
    
    
  },
  computed: {

  },
};
</script>

<style lang="less" scoped>
</style>