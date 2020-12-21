<template>
  <div class="everydayradiolist">
    <van-nav-bar title="24小时榜" left-arrow  @click-left="goBack" />

    
  </div>
</template>

<script>
export default {
  name: "Everydayradiolist",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
</style>