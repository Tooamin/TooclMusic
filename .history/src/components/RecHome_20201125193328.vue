<template>
  <div class="rechome">
    <div class="banner">
      <van-swipe>
        <van-swipe-item><img src="" alt="" /></van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ bannerIndex + 1 }}/4</div>
        </template>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import "../assets/less/rechome.less";
export default {
  name: "RecHome",
  data(){
      return {
          bannerIndex:0
      }
  },
  methods:{
      getBannerImg(){
          
      }
  }
};
</script>

<style lang="less" scoped>
</style>