<template>
  <div class="singerdata">
    <van-sticky>
      <van-nav-bar
        title="歌手"
        left-arrow
        :border="false"
        @click-left="goBack"
      />
    </van-sticky>
    <div class="singerinfo-box">
      <div class="singerinfo-img">
        <img :src="singerinfoData.artist.picUrl" alt="" class="auto-img" />
        <div class="singerinfo-name">{{ singerinfoData.artist.name }}</div>
      </div>
      <div class="singer-album">
        <div
          class="songlist-item"
          v-for="(item, index) in singerinfoData.hotAlbums"
          :key="index"
        >
          <div class="songdateil-title van-ellipsis">{{ item.name }}</div>
          <div class="songdetail-icon">
            <img src="../assets/images/bofanbtn.png" alt="" class="auto-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingerData",
  data() {
    return {
      singidData: "",
      singerinfoData: [],
    };
  },
  created() {
    this.singidData = this.$route.query.singer;
    //获取歌手信息
    this.getSingerinfoData(this.singidData);
  },
  computed: {
    //歌手id
    Singid() {
      return this.$store.state.singerId;
    },
  },
  methods: {
    //返回上一级
    goBack() {
      this.$router.go(-1);
    },
    //获取歌手信息
    getSingerinfoData(id) {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.axios({
        method: "GET",
        url: "/artist/album",
        params: {
          id,
        },
      })
        .then((result) => {
          this.$toast.clear();
             
          this.singerinfoData = result.data;
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载失败");
        });
    },
  },
};
</script>

<style lang="less" scoped>
.singerdata {
  padding-bottom: 100px;
  .auto-img {
    width: 100%;
    display: block;
    height: auto;
  }
  /deep/ .van-nav-bar .van-icon {
    color: #2b2b2b;
  }

  /deep/ .van-nav-bar__title {
    color: #2b2b2b;
  }
  .singerinfo-img {
    width: 100%;
    position: relative;
  }
  .singerinfo-name {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: #ffffff;
    font-size: 20px;
    width: 100px;
    height: 30px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
  }
  .singer-album {
    width: 100%;
    background-color: skyblue;
    transform: translateY(-20px);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .songlist-item{
      width: 100%;
      height: 50px;
      padding: 0px 10px;
      &::after{
          content: "";
          display: block;
          clear: both;
      }
      margin:10px 0px;
  }
  .songdateil-title{
      float: left;
      line-height: 50px;
  }
  .songdetail-icon{
      width: 40px;
      float: right;
  }
}
</style>