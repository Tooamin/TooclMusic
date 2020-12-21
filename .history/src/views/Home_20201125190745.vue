<template>
  <div class="home">
    <div class="top-nav">
      <van-tabs v-model="topNavIndex">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import RecHome from '../components/RecHome.vue'
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
