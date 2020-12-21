<template>
  <div class="singerdetail">
    <van-nav-bar title="歌手" left-arrow :border="false" @click="goBack" />
  </div>
</template>

<script>
export default {
  name: "SingerDetail",
  data() {
    return {};
  },
  created() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getSingerinfo() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      
      this.axios({
          method:"GET",
          url:"/toplist/artist"
      })
    },
  },
};
</script>

<style lang="less" scoped>
.singerdetail {
  /deep/ .van-nav-bar .van-icon {
    color: #2b2b2b;
  }

  /deep/ .van-nav-bar__title {
    color: #2b2b2b;
  }
}
</style>