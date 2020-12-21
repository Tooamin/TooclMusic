<template>
  <div class="search">
    <van-nav-bar title="搜索" left-arrow @click-left="goBack" :border="false" />
    <div class="secach-box">
        <van-search v-model="userinputvalue" placeholder="请输入搜索关键词" />
    </div>
    <div class="content-box">
        
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data(){
      return {
          userinputvalue:''
      }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  /deep/ .van-nav-bar .van-icon {
    color: #2b2b2b;
  }
  /deep/.van-nav-bar__title {
    color: #2b2b2b;
  }
  /deep/ .van-search{
      padding: 0;
  }
}
</style>