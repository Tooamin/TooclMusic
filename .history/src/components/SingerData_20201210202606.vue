<template>
  <div class="singerdata">
    <van-sticky>
      <van-nav-bar title="歌手" left-arrow :border="false" @click-left="goBack" />
    </van-sticky>
    <div class="singerinfo-box">
      <div class="singerinfo-img auto-img"><img :src="singerinfoData.artist.picUrl" alt=""></div>
      <div class="singerinfo-name">{{singerinfoData.artist.name}}</div>
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
    this.getSingerinfoData(this.singidData);
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
    getSingerinfoData(id) {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.axios({
        method: "GET",
        url: "/artist/album",
        params: {
          id,
        },
      })
        .then((result) => {
          this.$toast.clear();
             
          this.singerinfoData = result.data;
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
    .auto-img{
        width: 100%;
        display: block;
        height: auto;
    }
  /deep/ .van-nav-bar .van-icon {
    color: #2b2b2b;
  }

  /deep/ .van-nav-bar__title {
    color: #2b2b2b;
  }
}
</style>