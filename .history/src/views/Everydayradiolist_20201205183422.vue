<template>
  <div class="everydayradiolist">
    <van-nav-bar
      :border="false"
      title="24小时榜"
      left-arrow
      @click-left="goBack"
    />

    <div class="everydaylist-box">
      <div class="everydaylist-item" v-for="(item,index) in everydaylistAllData" :key="index">
        <div class="everydaylist-number">{{item.rank >= 9  ? (index+1) : '0'+(index+1)}}</div>
        <div class="everydaylist-img"><img :src="item.program.blurCoverUrl" alt="" class="auto-img" /></div>
        <div class="everydaylist-name">
          <div class="everydaylist-title van-ellipsis">{{item.program.name}}</div>
          <div class="everydaylist-subtitle">
              <div class="userinfo">
                  <div class="userinfo-img"></div>
                  <div class="userinfo-name"></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Everydayradiolist",
  data(){
      return {
          everydaylistAllData:[],

      }
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
  },
  created(){
      //获取全部数据
      this.getEveryDaylist();
  }
};
</script>

<style lang="less" scoped>
.everydayradiolist {
    .auto-img{
        width: 100%;
        display: block;
    }
  /deep/ .van-nav-bar .van-icon {
    color: #000;
  }
  .everydaylist-item{
      width: 100%;  
      height: 60px;
      margin: 10px 0px;
      box-sizing: border-box;
      padding: 0px 10px;
      &::after{
          content:"";
          display: block;
          clear: both;
      }
  }
  .everydaylist-number{
      float: left;
      font-size: 16px;
      margin: 20px 0px;
        width: 40px;
      text-align: center;
  }
  .everydaylist-img{
      width: 60px;
      float: left;
      border-radius: 10px;
      overflow: hidden;
  }
  .everydaylist-name{
      float: left;
      margin: 0px 10px;
      margin-top: 10px;
  }
  .everydaylist-title{
      width: 220px;
  }
}
</style>