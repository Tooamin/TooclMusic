<template>
  <div class="home">
    <BannerBox />
    <Newmusicblock :left-title="'为你推荐'" @go-view="goRadom('Viewmove')">
      <Newmusicitme
        v-for="(item, index) in songListData"
        :key="index"
        :item-img="item.coverImgUrl"
        :item-title="item.name"
        :play-count="item.playCount"
        @radom-jump="gojump('SonglistDateil', item.id)"
      ></Newmusicitme>
    </Newmusicblock>
    <van-image-preview v-model="show" :images="images" @change="onChange">
      1
      <template v-slot:index>第{{ index }}页</template>
    </van-image-preview>
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
       show: false,
      index: 0,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },

  created() {
    let tokenString = localStorage.getItem("__icoo");
    if (!tokenString) {
      return this.$router.push({ name: "Login" });
    }
    //获取歌单
    this.getsongList();
  },
  methods: {
    goRadom(data) {
      this.$router.push({ name: data });
    },
    //点击进入
    gojump(data, songid) {
      this.$router.push({ name: data, params: { songid } });
    },
    //   获取歌单
    getsongList() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/top/playlist",
        params: {
          limit: 6,
          offset: 0,
        },
      })
        .then((result) => {
          this.$toast.clear();
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
    onChange(index) {
      this.index = index;
    },
  },
};
</script>

<style lang="less" scoped>
</style>