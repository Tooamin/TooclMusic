<template>
  <div class="newsonglist">
    <van-nav-bar
      title="新歌列表"
      left-arrow
      :border="false"
      @click-left="goBack"
    />
  </div>
</template>

<script>
export default {
  name: "Newsonglist",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.newsonglist {
  /deep/ .van-nav-bar .van-icon {
    color: #000;
  }
}
</style>