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
        <van-tab v-for="(item,index) in playlistData" :key="index">{{item.name}}</van-tab>
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
      playlistData:[],
    };
  },
  created(){
      this.getPlaylistData();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },

    getPlaylistData() {
      let tokenString = localStorage.getItem("__tk");
      if (!tokenString) {
        this.$toast("登录失效,请重新登录");
        return this.$router.push({ name: "Login" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
          method:'GET',
          url:'/playlist/highquality/tags'
      }).then((result) =>{
          this.$toast.clear();
           (result);
          this.playlistData = result.data.tags;
      }).catch((err) =>{
          this.$toast.clear();
          this.$toast("加载错误");
           (err);
      })
    },
  },
};
</script>

<style lang="less" scoped>
</style>