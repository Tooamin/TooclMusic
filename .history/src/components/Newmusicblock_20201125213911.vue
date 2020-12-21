<template>
  <div class="newmusicblock">
    <div class="newmusic">
      <div class="newmusic-title">
        <div class="left">为你推荐</div>
        <div class="right">查看更多 <van-icon name="arrow" /></div>
      </div>
      <div class="newmusic-box">
        <div
          class="newmusic-item"
          v-for="(item, index) in songListData"
          :key="index"
        >
          <img :src="item.coverImgUrl" alt="" />
          <div class="item-img-title">{{ item.copywriter }}</div>
          <span class="play-count">播放量:{{item.playCount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newmusicblock",
  data() {
    return {
      songListData: [],
    };
  },
  created() {
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
    numberFormat(value) {
      let param = {};
      let k = 10000,
        sizes = ["", "万", "亿", "万亿"],
        i;
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
.newmusicblock {
  img {
    width: 100%;
    display: block;
  }
  margin-top: 10px;
  background-color: #ffffff;
  .newmusic-title {
    overflow: hidden;
    .left {
      float: left;
      padding: 10px;
      font-size: 18px;
    }
    .right {
      float: right;
      font-size: 12px;
      vertical-align: middle;
      margin-right: 10px;
      margin-top: 10px;
    }
  }
  .newmusic-box {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    .newmusic-item {
      flex: 1;
      min-width: 100px;
      position: relative;
    }
    .play-count{
        position: absolute;
        top: 114px;
        right: 0;
        display: block;
        height: 20px;
        background-color: rgba(255, 255, 255, .8);
    }
  }
}
</style>