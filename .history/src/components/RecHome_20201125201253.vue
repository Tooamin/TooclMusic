<template>
  <div class="rechome">
    <div class="banner">
      <van-swipe>
        <van-swipe-item v-for="(item,index) in bannerImgData" :key="index"><img :src="item.pic" alt="" /></van-swipe-item>
        <template #indicator>
        </template>
      </van-swipe>
    </div>
    <div class="functional-area">
        <div class="area-box">
            <div class="area-item" v-for="(item,index) in functionalAreaData" :key="index"><img :src="item.Img" alt=""><div class="item-title">{{item.title}}</div></div>
        </div>
    </div>
  </div>
</template>

<script>
import "../assets/less/rechome.less";
export default {
  name: "RecHome",
  data() {
    return {
      bannerIndex: 0,
      bannerImgData:[],
      functionalAreaData:[
          {
              title:'歌单',
              Img:require("../assets/images/gedan.png"),
              jumpid:'songList'
          },
          {
              title:'排行榜',
              Img:require("../assets/images/paihan.png"),
              jumpid:'ranking'
          },
          {
              title:'MV',
              Img:require("../assets/images/MV.png"),
              jumpid:'Mv'
          },
          {
              title:'电台',
              Img:require("../assets/images/diantai.png"),
              jumpid:'radioStation'
          },
      ]
    };
  },
  created(){
    //获取轮播图
    this.getBannerImg();
  },
  methods: {
      //获取轮播图

    getBannerImg() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
          method:"GET",
          url:'/banner',
          params:{
              type:2
          }
      }).then((result) =>{
          this.$toast.clear();
          if(result.data.code == 200){
              this.bannerImgData = result.data.banners;
              localStorage.setItem("BannerImg",JSON.stringify(result.data.banners));
          }
      }).catch((err) =>{

          this.$toast.clear();
      })
    },
  },
};
</script>

<style lang="less" scoped>
</style>