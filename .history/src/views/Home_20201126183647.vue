<template>
  <div class="home">
    <BannerBox />
    <Newmusicblock :left-title="'为你推荐'">
      <Newmusicitme
        v-for="(item, index) in songListData"
        :key="index"
        :item-img="item.coverImgUrl"
        :item-title="item.name"
        :play-count="item.playCount"
      ></Newmusicitme>
    </Newmusicblock>
  </div>
</template>

<script>
import BannerBox from "../components/BannerBox.vue";
import Newmusicblock from "../components/Newmusicblock.vue";
import Newmusicitme from "../components/Newmusicitem.vue";
export default {
  name: "Home",
  components: {
    BannerBox,
    Newmusicblock,
    Newmusicitme,
  },
  data() {
    return {
      songListData: [],
    };
  },
  created() {
    //登录验证
    let loginvalidation = this.$store.state.isLoginstaust;
    if(!loginvalidation){
      return this.$router.push({name:'Login'});
    }
    //获取歌单
    this.getsongList();
  },
  methods: {
    //   获取歌单
    getsongList() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/top/playlist/highquality",
        params: {
          limit: 6,
        },
      })
        .then((result) => {
          this.$toast.clear();
           (result);
          if (result.data.code == 200) {
            this.songListData = result.data.playlists;
            for (let i = 0; i < this.songListData.length; i++) {
              this.songListData[i].playCount = this.numberFormat(
                this.songListData[i].playCount
              );
            }
          }
        })
        .catch((err) => {
           (err);
        });
    },
    //播放量格式化
    numberFormat(value) {
      let param = {};
      let k = 10000;
      let sizes = ["", "万", "亿", "万亿"];
      let i;
      if (value < k) {
        param.value = value;
        param.unit = "";
      } else {
        i = Math.floor(Math.log(value) / Math.log(k));

        param.value = (value / Math.pow(k, i)).toFixed(2);
        param.unit = sizes[i];
      }
      return param.value + param.unit;
    },
  },
};
</script>

<style lang="less" scoped>
</style>