<template>
  <div class="radio">
    <van-tabs v-model="active">
      <van-tab title="节目榜"></van-tab>
      <van-tab title="电台榜"></van-tab>
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
.radio{
    
}
</style>