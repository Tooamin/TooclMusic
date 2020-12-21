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
        <div class="everydaylist-number">{{index+1}}</div>
        <div class="everydaylist-img"><img src="" alt="" class="auto-img" /></div>
        <div class="everydaylist-name">
          <div class="everydaylist-title"></div>
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
           (result);
          this.everydaylistAllData = result.data.data.list.program;
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
}
</style>