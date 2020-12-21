<template>
  <div class="main">
    <van-sticky>
    <div class="top-nav">

      <div class="conter">
        <div class="tabs">
          <van-tabs v-model="topIndex">
            <van-tab :title="item.title" v-for="(item,index) in tabsData" :key="index" :to="item.path"/>
          </van-tabs>
        </div>
      </div>
      <div class="right">
        <img src="../assets/images/sousuo.png" alt="" />
      </div>
    </div>
    </van-sticky>
    <router-view></router-view>
  </div>
</template>

<script>
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
    
  },
};
</script>
