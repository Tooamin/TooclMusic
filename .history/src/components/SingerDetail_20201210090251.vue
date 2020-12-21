<template>
  <div class="singerdetail">
    <van-nav-bar
      title="歌手"
      left-arrow
      @click="goBack"
    />
  </div>
</template>

<script>
export default {
  name: "SingerDetail",
  data() {
    return {

    };
  },
  created() {
      
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      }
  }
};
</script>

<style lang="less" scoped>
</style>