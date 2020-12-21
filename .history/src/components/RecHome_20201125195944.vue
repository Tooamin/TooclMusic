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
            <div class="area-item"><img src="../assets/images/MV.png" alt=""><div class="item-title">歌单</div></div>
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
      functionalAreaData:[]
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
           (result);
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