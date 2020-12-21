<template>
  <div class="search">
    <van-nav-bar
      title="搜索"
      left-arrow
        @click-left=""
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  methods:{
      goBack(){
          this.$router.go(-1);
      }
  }
};
</script>

<style lang="less" scoped>
</style>