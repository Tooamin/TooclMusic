<template>
  <div class="singerdata">
    <van-sticky>
      <van-nav-bar title="歌手" left-arrow :border="false" @click-left="goBack" />
    </van-sticky>
    <div class="singerinfo-box">
      <div class="singerinfo-img"></div>
      <div class="singerinfo-name"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingerData",
  data() {
    return {
      singidData: "",
      singerinfoData: [],
    };
  },
  created() {
    this.singidData = this.$store.state.singerId;
    //获取歌手信息
    this.getSingerinfoData();
  },
  computed: {
    //歌手id
    Singid() {
      return this.$store.state.singerId;
    },
  },
  methods: {
      //返回上一级
    goBack() {
      this.$router.go(-1);
    },
    //获取歌手信息
    getSingerinfoData() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.axios({
        method: "GET",
        url: "/artist/album",
        params: {
          id: this.singidData,
        },
      })
        .then((result) => {
          this.$toast.clear();
             
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载失败");
        });
    },
  },
};
</script>

<style lang="less" scoped>
.singerdata {
  /deep/ .van-nav-bar .van-icon {
    color: #2b2b2b;
  }

  /deep/ .van-nav-bar__title {
    color: #2b2b2b;
  }
}
</style>