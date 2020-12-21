<template>
  <div class="home">
    <div class="top-nav">
      <van-tabs v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
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
      topNavIndex: 0,
    };
  },
  created() {},
  methods: {
    getBanner() {},
  },
};
</script>
