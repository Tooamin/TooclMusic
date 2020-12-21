<template>
  <div class="singerdetail">
    <van-sticky :offset-top="5">
      <van-nav-bar
        title="歌手"
        left-arrow
        :border="false"
        @click-left="goBack"
      />

      <van-tabs v-model="singerTypeindex" @click="Typeindex">
        <van-tab
          :title="item.title"
          v-for="(item, index) in singerType"
          :key="index"
        ></van-tab>
      </van-tabs>
    </van-sticky>
    <div class="rankingshow-box">
      <div
        class="rankingshow-item"
        v-for="(item, index) in singerInfo"
        :key="index"
        @click="getSingerId(item.id)"
      >
        <div class="ranking-img">
          <img v-lazy="item.picUrl+'?param=100y100'" alt="" class="auto-img" />
        </div>
        <div class="ranking-title">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingerDetail",
  data() {
    return {
      singerTypeindex: 0,
      singerType: [
        { title: "华语", type: 1 },
        { title: "欧美", type: 2 },
        { title: "韩国", type: 3 },
        { title: "日本", type: 4 },
      ],
      singerInfo: [],
    };
  },
  created() {
    //获取歌手
    this.getSingerinfo();
  },
  methods: {
    //返回上一级
    goBack() {
      this.$router.go(-1);
    },
    //歌手类别下标
    Typeindex(name) {
      this.getSingerinfo();
    },
    //获取id
    getSingerId(id) {
      this.$store.commit("getSingerid",id);
      this.$router.push({ name: "SingerData", query:{singer:id}});
    },
    getSingerinfo() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/toplist/artist",
        params: {
          type: this.singerTypeindex + 1,
        },
      })
        .then(async (result) => {
          this.$toast.clear();
          this.singerInfo = await result.data.list.artists;
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
.singerdetail {
  padding-bottom: 120px;
  .auto-img {
    width: 100%;
    display: block;
  }
  /deep/ .van-nav-bar .van-icon {
    color: #2b2b2b;
  }

  /deep/ .van-nav-bar__title {
    color: #2b2b2b;
  }
  /deep/ .van-tabs__line {
    background-color: #2ddae8;
  }
  /deep/ .van-tab--active {
    color: #2ddae8;
    font-size: 14px;
  }
  .rankingshow-box {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .rankingshow-item {
    flex: 1;
    min-width: 60px;
    margin: 10px;
  }
  .ranking-title {
    font-size: 12px;
    margin: 4px 0px;
    text-align: center;
  }
}
</style>