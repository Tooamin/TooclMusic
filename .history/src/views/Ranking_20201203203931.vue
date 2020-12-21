<template>
  <div class="ranking">
    <van-nav-bar title="排行榜" left-arrow :border="false" @click-left="goBack" />
    
    <div class="rankingshow-box">
        <div class="rankingshow-item">
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ranking",
  data(){
      return {
          
      }
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      }
  }
};
</script>

<style lang="less" scoped>
.ranking {
  /deep/ .van-nav-bar .van-icon {
    color: #000;
  }
}
</style>