<template>
  <div class="main">
    <div class="top-nav">
      <div class="left">
        <img src="../assets/images/caidan.png" alt="" />
      </div>
      <div class="conter">
        <div class="tabs">
            <van-tabs v-model="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>
        </div>
      </div>
      <div class="right">
        <img src="../assets/images/sousuo.png" alt="" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import RecHome from "../components/RecHome.vue";
import "../assets/less/main.less";
export default {
  name: "Main",
  data() {
    return {
      topIndex: 0,
      tabsData: [
        { title: "推荐", path: "/main/home" },
        { title: "我的", path: "/main/my" },
        { title: "发现", path: "/main/find" },
      ],
    };
  },
  created() {},
  methods: {
    toggleactive(index) {
      if (this.topIndex == index) {
        return;
      }
      this.topIndex = index;
    },
  },
  components: {
    RecHome,
  },
};
</script>
