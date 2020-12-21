<template>
  <div class="ranking">
    <van-nav-bar title="排行榜" left-arrow :border="false" />
  </div>
</template>

<script>
export default {
  name: "Ranking",
};
</script>

<style lang="less" scoped>
.ranking {
  /deep/ .van-nav-bar .van-icon {
    color: #000;
  }
}
</style>