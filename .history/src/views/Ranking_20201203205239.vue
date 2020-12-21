<template>
  <div class="ranking">
    <van-nav-bar title="排行榜" left-arrow :border="false" @click-left="goBack" />
    
    
    <div class="rankingshow-box">
        <div class="rankingshow-item">
            <div class="ranking-img"><img src="https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg" alt="" class="auto-img"></div>
            <div class="ranking-title">云音乐飙升榜</div>      
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
    //   返回上一级
      goBack(){
          this.$router.go(-1);
      },

  }
};
</script>
