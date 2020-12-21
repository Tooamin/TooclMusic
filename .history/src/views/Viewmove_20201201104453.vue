<template>
  <div class="viewmove">
    <div class="nav">
      <van-nav-bar
        title="歌单广场"
        left-arrow
        :border="false"
        @click-left="goBack"
      />
    </div>
    <div class="tabs-box">
      <van-tabs v-model="tabsIndex">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import "../assets/less/viewmove.less";
export default {
  name: "Viewmove",
  data() {
    return {
      tabsIndex: 0,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },

    getPlaylistData() { 
        let tokenString = localStorage.getItem("__tk");
        if(!tokenString){
            this.$toast("登录失效,请重新登录");
            return this.$router.push({name:'Login'});
        }
        

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      
    },
  },
};
</script>

<style lang="less" scoped>
</style>