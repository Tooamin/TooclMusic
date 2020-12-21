<template>
  <div class="newsonglist">
    <van-nav-bar
      title="新歌列表"
      left-arrow
      :border="false"
      @lclick-left="goBack"
    />
  </div>
</template>

<script>
export default {
  name: "Newsonglist",
  methods:{
      goBack() {
      this.$router.go(-1);
    },
  }
};
</script>

<style lang="less" scoped>

</style>