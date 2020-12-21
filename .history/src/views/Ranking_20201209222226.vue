<template>
  <div class="ranking">
    <van-sticky>
    <van-nav-bar
      title="排行榜"
      left-arrow
      :border="false"
      @click-left="goBack"
    />
    </van-sticky>

    <div class="rankingshow-box">
      <div
        class="rankingshow-item"
        v-for="(item, index) in rankingDatalist"
        :key="index"
        @click="getrankingId(item.id)"
      >
        <div class="ranking-img">
          <img :src="item.coverImgUrl" alt="" class="auto-img" />
        </div>
        <div class="ranking-title">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ranking",
  data() {
    return {
      //排行榜摘要数据
      rankingDatalist: [],
    };
  },
  created() {
    //获取排行榜数据
    this.getrankingallData();
  },
  methods: {
    //获取排行榜id
    getrankingId(id) {

      this.$router.push({ name: "RankingDetail",query:{id} });
    },
    //   返回上一级
    goBack() {
      this.$router.go(-1);
    },
    //获取排行榜摘要
    getrankingallData() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/toplist/detail",
      }).then((result) => {
        this.$toast.clear();
        this.rankingDatalist = result.data.list;
      }).catch((err) =>{
        this.$toast.clear();
        this.$toast('加载失败');
         (err);
      })
    },
  },
};
</script>
<style lang="less" scope>
.ranking {
  .auto-img {
    width: 100%;
    display: block;
  }
  /deep/ .van-nav-bar .van-icon {
    color: #000;
  }
  .rankingshow-box {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .rankingshow-item {
    flex: 1;
    min-width: 100px;
    margin: 10px;
  }
  .ranking-title {
    font-size: 14px;
    margin: 4px 0px;
    text-align: center;
  }
}
</style>
