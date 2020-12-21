<template>
  <div class="rankingitem" @click="togglesong">
    <div class="ranking-number">{{number}}</div>
    <div class="ranking-name">
      <div class="ranking-title">{{title}}</div>
      <div class="ranking-subtitle">{{subtitle}}</div>
      <div class="anewsong-icon">
        <img src="../assets/images/home-play.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rankingitem",
  props:{
      number:{
          type:String,
          default:''
      },
      title:{
          type:String,
          default:'歌名'
      },
      subtitle:{
          type:String,
          default:'歌手'
      },
  },
  methods:{
      togglesong(){
          this.$emit('toggle-song');
      }
  }
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
    color: #909091;
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