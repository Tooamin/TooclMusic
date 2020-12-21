<template>
  <div class="radio">
    <van-tabs v-model="tabsIndex">
      <van-tab title="节目榜"></van-tab>
      <van-tab title="电台榜"></van-tab>
    </van-tabs>
    <div class="everyday-list">
      <div class="every-title">24小时榜</div>
      <div class="every-box">
        <div class="every-item" v-for="(item,index) in everdaylistData" :key="index">
          <div class="every-img"><img src="" alt="" /></div>
          <div class="every-name"></div>
          <div class="every-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Radio",
  data() {
    return {
      tabsIndex: 0,
      everdaylistData:[]
    };
  },
  created(){
      //获取24小时榜
      this.getEveryDayradiolist();
  },
  methods: {
    //24小时电台榜
    getEveryDayradiolist() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/dj/program/toplist/hours",
        params: {
          limit: 3,
        },
      })
        .then((result) => {
          this.$toast.clear();
        //    (result);
        this.everdaylistData = result.data.data.list;
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载失败");
           (err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.radio {
  .auto-img {
    width: 100%;
    display: block;
  }
  /deep/ .van-tabs__line {
    background-color: #2ddae8;
  }
  /deep/ .van-tab--active {
    color: #2ddae8;
    font-size: 16px;
  }
}
</style>