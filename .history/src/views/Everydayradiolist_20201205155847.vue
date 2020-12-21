<template>
  <div class="everydayradiolist">
    <van-nav-bar :border="false" title="24小时榜" left-arrow @click-left="goBack" />

    <div class="everydaylist-box">
        <div class="everydaylist-item">
            <div class="everydaylist-number"></div>
            <div class="everydaylist-img"><img src="" alt=""></div>
            <div class="everydaylist-name">
                <div class="everydaylist-title"></div>
                <div class="everydaylist-subtitle">

                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Everydayradiolist",
  methods: {
    goBack() {
      this.$router.go(-1);
    },

    getEveryDaylist(){
        
    }
  },
};
</script>

<style lang="less" scoped>
.everydayradiolist {
  /deep/ .van-nav-bar .van-icon {
    color: #000;
  }
}
</style>