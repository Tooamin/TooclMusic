<template>
  <div class="banner-box">
      <div class="banner">
        <van-swipe>
          <van-swipe-item v-for="(item, index) in bannerImgData" :key="index"
            ><img :src="item.pic" alt="" @click="getbannerinfo(item.song)"
          /></van-swipe-item>
          <template #indicator> </template>
        </van-swipe>
      </div>
    <div class="functional-area">
      <div class="area-box">
        <div
          class="area-item"
          v-for="(item, index) in functionalAreaData"
          :key="index"
          @click="gotoggle(item.jumpid)"
        >
          <img :src="item.Img" alt="" />
          <div class="item-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/less/bannerbox.less";
export default {
  name: "RecHome",
  data() {
    return {
      bannerIndex: 0,
      bannerImgData: [],
      functionalAreaData: [
        {
          title: "歌单",
          Img: require("../assets/images/gedan.png"),
          jumpid: "Viewmove",
        },
        {
          title: "排行榜",
          Img: require("../assets/images/paihan.png"),
          jumpid: "Ranking",
        },
        {
          title: "歌手",
          Img: require("../assets/images/MV.png"),
          jumpid: "SingerDetail",
        },
        {
          title: "电台",
          Img: require("../assets/images/diantai.png"),
          jumpid: "Radio",
        },
      ],
      bannerSongid: null,
      
    };
  },
  created() {
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
        method: "GET",
        url: "/banner",
        params: {
          type: 2,
        },
      })
        .then((result) => {
          this.$toast.clear();
          if (result.data.code == 200) {
            this.bannerImgData = result.data.banners;
            localStorage.setItem(
              "BannerImg",
              JSON.stringify(result.data.banners)
            );
          }
        })
        .catch((err) => {
          this.$toast.clear();
        });
    },
    gotoggle(name) {
      this.$router.push({ name: name });
    },
    getbannerinfo(item) {
         
      this.bannerSongid = item;
      if(this.bannerSongid == null){
        return;
      }

      this.$store.commit("getSongCount", item);
      // this.toggleurl = item;
    },
  },
};
</script>

<style lang="less" scoped>
.item-title{
  font-size: 12px;
}
</style>