<template>
  <div class="everydayradiolist">
    <van-sticky>
      <van-nav-bar
        :border="false"
        title="24小时榜"
        left-arrow
        @click-left="goBack"
      />
    </van-sticky>

    <div class="everydaylist-box">
      <Radioitem
        v-for="(item, index) in hotradioData"
        :key="index"
        :radio-img="item.program.blurCoverUrl"
        :radio-name="item.program.name"
        :user-img="item.program.dj.avatarUrl"
        :user-name="item.program.dj.nickname"
        :radio-ranking="item.rank"
        @get-toggle="clickMusicGetid(item.program.mainSong.id)"
      ></Radioitem>
    </div>
  </div>
</template>

<script>
import Radioitem from '../components/Radio-item.vue'
export default {
  name: "Everydayradiolist",
  data() {
    return {
      everydaylistAllData: [],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },

    getEveryDaylist() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/dj/program/toplist/hours",
      })
        .then((result) => {
          this.$toast.clear();
          this.everydaylistAllData = result.data.data.list;
           (this.everydaylistAllData);
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载失败");
           (err);
        });
    },
    //获取电台id
    clickMusicGetid(id) {
      this.$router.push({ name: "Song", params: { id } });
    },
  },
  created() {
    //获取全部数据
    this.getEveryDaylist();
  },
  components:{
    Radioitem
  }
};
</script>

<style lang="less" scoped>
.everydayradiolist {
  .auto-img {
    width: 100%;
    display: block;
  }
  /deep/ .van-nav-bar .van-icon {
    color: #000;
  }
  .everydaylist-item {
    width: 100%;
    height: 60px;
    margin: 10px 0px;
    box-sizing: border-box;
    padding: 0px 10px;
    position: relative;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .everydaylist-number {
    float: left;
    font-size: 16px;
    margin: 20px 0px;
    width: 40px;
    text-align: center;
    color: #2b2b2b;
  }
  .everydaylist-img {
    width: 60px;
    float: left;
    border-radius: 10px;
    overflow: hidden;
  }
  .everydaylist-name {
    float: left;
    margin: 0px 10px;
    margin-top: 10px;
  }
  .everydaylist-title {
    width: 220px;
  }
  .userinfo-img {
    float: left;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
  }
  .userinfo-name {
    float: left;
    margin: 10px;
    color: #636363;
  }
  .songdetail-icon{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
}
</style>