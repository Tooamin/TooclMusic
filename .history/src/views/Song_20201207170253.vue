<template>
  <div class="song">
    <div class="player-box">
      <van-nav-bar
        left-arrow
      >
      <template #title>
        <div class="title-box">
          <div class="player-name"></div>
          <div class="singer-name"></div>
        </div>
      </template>
      </van-nav-bar>
    </div>
  </div>
</template>

<script>
import "../assets/less/song.less";
export default {
  name: "Song",
  data() {
    return {
      musicid: "",
    };
  },
  created() {
    //获取音乐ID
    this.musicid = this.$route.params.id;
     (this.musicid);

    //获取音乐
    this.getMusicdetail();
  },
  methods: {
    getMusicdetail() {
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