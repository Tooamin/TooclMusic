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
        <img :src="singerinfoImg" alt="" class="auto-img" />
        <div class="singerinfo-name">{{ singerinfoName }}</div>
      </div>
      <div class="singer-album">
        <div
          class="songlist-item"
          v-for="(item, index) in singerinfoData.hotAlbums"
          :key="index"
        >
          <div class="songdateil-title van-ellipsis">
            {{ item.name }} - {{ item.artists.Singname }}
          </div>
          <!-- <div class="songdetail-icon">
            <img src="../assets/images/bofanbtn.png" alt="" class="auto-img" />
          </div> -->
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
      singerinfoImg:'',
      singerinfoName:''
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

  watch:{
      '$route.query.singer'(id){
        this.getSingerinfoData(id);
      }
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
        .then( (result) => {
          this.$toast.clear();
          this.singerinfoData = result.data;
          this.singerinfoImg = result.data.artist.picUrl;
          this.singerinfoName = result.data.artist.name;
          let str = "";
          for (let i = 0; i < this.singerinfoData.hotAlbums.length; i++) {
            for (
              let j = 0;
              j < this.singerinfoData.hotAlbums[i].artists.length;
              j++
            ) {
              str += this.singerinfoData.hotAlbums[i].artists[j].name + "/";
              this.singerinfoData.hotAlbums[i].artists.Singname = str.slice(
                0,
                -1
              );
            }
            str = "";
          }
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载失败");
        });
    },
    clickMusicGetid(item) {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
    //      
      this.$store.commit("getSongCount", item);
    },
  },
};
</script>

<style lang="less" scoped>
.singerdata {
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
    font-size: 14px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    padding: 6px;
  }
  .singer-album {
    width: 100%;
    background-color: #ffffff;
    transform: translateY(-20px);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .songlist-item {
    width: 100%;
    height: 50px;
    padding: 0px 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    margin: 10px 0px;
  }
  .songdateil-title {
    float: left;
    width: 100%;
    line-height: 50px;
    font-size: 14px;
  }
  .songdetail-icon {
    width: 30px;
    float: right;
    margin-right: 20px;
  }
}
</style>