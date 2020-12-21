<template>
  <div class="radio">
    <van-tabs v-model="tabsIndex">
      <van-tab title="节目榜"></van-tab>
      <van-tab title="电台榜"></van-tab>
    </van-tabs>
    <div class="everyday-list">
      <div class="every-title">24小时榜</div>
      <div class="every-box">
          <div class="every-item">
              <div class="every-img"><img src="" alt=""></div>
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
  data(){
      return {
          tabsIndex:0,
      }
  }
};
</script>

<style lang="less" scoped>
.radio {

  /deep/ .van-tabs__line {
    background-color: #2ddae8;
  }
  /deep/ .van-tab--active {
    color: #2ddae8;
    font-size: 16px;
  }
}
</style>