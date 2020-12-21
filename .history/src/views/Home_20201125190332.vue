<template>
  <div class="home">
    <div class="top-nav">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="banner">
      <van-swipe>
        <van-swipe-item><img src="" alt="" /></van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import "../assets/less/home.less";
export default {
  name: "Home",
  data() {
    return {
      topNavIndex:0;
    };
  },
  created() {},
  methods: {
    getBanner() {},
  },
};
</script>
