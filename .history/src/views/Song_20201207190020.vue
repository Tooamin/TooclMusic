<template>
  <div class="song">
    <div class="player-box">
      <van-nav-bar left-arrow :border="false" @click-left="goBack">
        <template #title>
          <div class="title-box">
            <div class="player-name">{{musicDate.name}}</div>
            <div class="singer-name">{{musicDate.ar[0].name}}<van-icon name="arrow" /></div>
          </div>
        </template>
      </van-nav-bar>
    </div>
    <div class="song-imgbox">
      <div class="songimg"><img src="musicDate.al" alt="" class="auto-img" /></div>
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
      musicid: "",
    };
  },
  created() {
    //获取音乐ID
    this.musicid = this.$store.state.songid;
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
      let isID = this.musicid;
      if (isID) {
        this.$toast.loading({
          message: "加载中...",
          forbidClick: true,
        });

        this.axios({
          method: "GET",
          url: "/song/detail",
          params: {
            ids: isID,
          },
        })
          .then((result) => {
            this.$toast.clear();
            if (result.data.code == 200) {
               (result);
              this.musicDate = result.data.songs[0];
            }
          })
          .catch((err) => {
             (err);
          });
      }
    },
    //获取音乐
    getMusic() {
       ("获取");
      let isID = this.musicid;
      if (isID) {
        this.$toast.loading({
          message: "加载中...",
          forbidClick: true,
        });

        this.axios({
          method: "GET",
          url: "/song/url",
          params: {
            id: isID,
          },
        })
          .then((result) => {
            this.$toast.clear();
             (result);
            if (result.data.code == 200) {
              this.musicid = result.data.data[0];
            }
          })
          .catch((err) => {
             (err);
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>