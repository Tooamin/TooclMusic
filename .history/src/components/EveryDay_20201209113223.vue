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
  methods: {
    getEveryDataSongData() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.axios({
          method:"GET",
          url:"/recommend/resource",
          params:localStorage.getItem("__icoo")
      })
    },
  },
};
</script>

<style lang="less" scoped>
</style>