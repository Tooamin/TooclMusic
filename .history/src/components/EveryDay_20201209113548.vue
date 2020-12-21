<template>
  <div class="everyday">每日推荐</div>
</template>

<script>
export default {
  name: "EveryDay",
  data() {
    return {
      everydaySongData: [],
    };
  },
  created(){
      //获取每日推荐数据
      this.getEveryDataSongData();
       (localStorage.getItem("__icoo"));
  },
  methods: {
    getEveryDataSongData() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.axios({
          method:"GET",
          url:"/recommend/resource",
          params:{
              cookie:localStorage.getItem("__icoo")
          }
      }).then((result) =>{
          this.$toast.clear();
           (result);
      }).catch((err) =>{
          this.$toast.clear();
          this.$toast("加载失败");
           (err);
      })
    },
  },
};
</script>

<style lang="less" scoped>
</style>