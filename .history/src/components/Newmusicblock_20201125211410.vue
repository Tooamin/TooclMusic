<template>
  <div class="newmusicblock">
    <div class="newmusic">
      <div class="newmusic-title">
        <div class="left">为你推荐</div>
        <div class="right">查看更多 <van-icon name="arrow" /></div>
      </div>
      <div class="newmusic-box">
        <div class="newmusic-item">
            <img src="" alt="">
            <div class="item-img-title"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newmusicblock",
  data(){
      return {
          
      }
  },
  methods:{
      
  }
};
</script>

<style lang="less" scoped>
.newmusicblock {
  margin-top: 10px;
  background-color: #ffffff;
  .newmusic-title {
    overflow: hidden;
    .left {
      float: left;
      padding: 10px;
      font-size: 18px;
    }
    .right {
      float: right;
      font-size: 12px;
      vertical-align: middle;
      margin-right: 10px;
      margin-top: 10px;
    }
  }
}
</style>