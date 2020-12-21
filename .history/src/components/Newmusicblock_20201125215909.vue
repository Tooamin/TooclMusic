<template>
  <div class="newmusicblock">
    <div class="newmusic">
      <div class="newmusic-title">
        <div class="left">{{leftTitle}}</div>
        <div class="right" v-if="right">查看更多 <van-icon name="arrow" /></div>
      </div>
      <div class="newmusic-box">
          1
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
      props:{
          leftTitle:{
              type:String,
              default:'左标题'
          },
          right:{
              type:Boolean,
              defaultL:true
          }
      }
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
          //    (result);
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
}
</style>