<template>
  <div class="viewmove">
    <van-nav-bar title="歌单广场" left-arrow :border="false" />
    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import "../assets/less/viewmove.less";
export default {
  name: "Viewmove",
  data(){
      return{
          tabsIndex:0
      }
  }
};
</script>

<style lang="less" scoped>
</style>