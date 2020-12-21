<template>
  <div class="everyday">
    <van-nav-bar
      title="每日推荐"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
  </div>
</template>

<script>
export default {
  name: "EveryDay",
  data() {
    return {
      everydaySongData: [],
    };
  },
  created() {
    //获取每日推荐数据
    this.getEveryDataSongData();
  },
  methods: {
      goBack() {
      this.$router.go(-1);
    },
    getEveryDataSongData() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.axios({
        method: "GET",
        url: "/recommend/songs",
        params: {
          cookie: localStorage.getItem("__icoo"),
        },
      })
        .then((result) => {
          this.$toast.clear();
           (result);
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载失败");
           (err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>