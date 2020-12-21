<template>
  <div class="ranking">
    <van-nav-bar title="排行榜" left-arrow :border="false" @click-left="goBack" />
    
    <div class="ranking-title">官方榜单</div>
    
    <div class="rankingshow-box">
        <div class="rankingshow-item">
            
        </div>
    </div>
  </div>
</template>

<script>
import '../assets/less/ranking.less'
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
