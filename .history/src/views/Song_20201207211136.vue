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
      <video autoplay>
        <source
          :src="musicid.url"
          type="audio/mpeg"
        />
      </video>
    </div>
    <div class="progressbar">
      <div class="range-box">
        <div class="strattiem">00:00</div>
        <div class="range">
          <div class="range-icon"></div>
        </div>
        <div class="endtiem">00:00</div>
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
    };
  },
  created() {
    //获取音乐ID
    this.musicid = this.$route.params.id;
     (this.musicid);

    //获取音乐详情
    this.getMusicDeateil();
    //获取音乐
    this.getMusic();
  },
  methods: {
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
          }
        })
        .catch((err) => {
           (err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>