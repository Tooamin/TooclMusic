<template>
  <div class="radio">
    <van-tabs v-model="active">
      <van-tab title="标签 1"></van-tab>
      <van-tab title="标签 2"></van-tab>
    </van-tabs>
    <div class="everyday-list">
      <div class="every-title">24小时榜</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Radio",
};
</script>

<style lang="less" scoped>
</style>