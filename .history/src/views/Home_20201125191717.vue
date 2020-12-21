<template>
  <div class="home">
    <div class="top-nav">
      <div class="left">
        <img src="../assets/images/caidan.png" alt="" />
      </div>
      <div class="conter">
        <van-tabs v-model="active">
          <van-tab title="推荐">内容 1</van-tab>
          <van-tab title="我的">内容 2</van-tab>
        </van-tabs>
      </div>
      <div class="right">
        <img src="../assets/images/sousuo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import RecHome from "../components/RecHome.vue";
import "../assets/less/home.less";
export default {
  name: "Home",
  data() {
    return {
      topNavIndex: 0,
    };
  },
  created() {},
  methods: {},
  components: {
    RecHome,
  },
};
</script>
