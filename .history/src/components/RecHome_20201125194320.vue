<template>
  <div class="rechome">
    <div class="banner">
      <van-swipe>
        <van-swipe-item><img src="" alt="" /></van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ bannerIndex + 1 }}/4</div>
        </template>
      </van-swipe>
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
      bannerImgData:[]
    };
  },
  created(){
    let isBanner = JSON.parse(localStorage.getItem("BannerImg"));
     (isBanner);
    isBanner.map((v) =>{
        isBanner.map((k) =>{
            
        })
    })
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