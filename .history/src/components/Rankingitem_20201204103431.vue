<template>
  <div class="rankingitem">
    <div class="ranking-number">01</div>
    <div class="ranking-name">
      <div class="ranking-title">茫</div>
      <div class="ranking-subtitle">利润其</div>
      <div class="anewsong-icon">
        <img src="../assets/images/home-play.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rankingitem",
};
</script>

<style lang="less" scoped>
.rankingitem {
  width: 100%;
  height: 60px;
  position: relative;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  .ranking-number {
    float: left;
    font-size: 18px;
    // color: #2ddae8;
    line-height: 60px;
    &::nth-of-type(2){
        color: red;
    }
  }
  .ranking-title {
    font-size: 16px;
  }
  .ranking-name {
    float: left;
    margin: 10px 10px;
  }
  .anewsong-icon {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
}
</style>