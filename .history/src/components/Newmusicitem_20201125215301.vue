<template>
  <div class="newmusicitem">
    <div class="newmusic-box">
      <div
        class="newmusic-item"
        v-for="(item, index) in songListData"
        :key="index"
      >
        <img :src="item.coverImgUrl" alt="" />
        <div class="item-img-title">{{ item.copywriter }}</div>
        <span class="play-count">播放量:{{ item.playCount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newmusicitem",
};
</script>

<style lang="less" scoped>
.newmusicitem {
  .newmusic-box {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    .newmusic-item {
      flex: 1;
      min-width: 100px;
      position: relative;
      margin: 10px;
      > img {
        border-radius: 10px;
      }
    }
    .play-count {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      height: 20px;
      font-weight: 700;
      background-color: rgba(255, 255, 255, 0.7);
      border-bottom-right-radius: 8px;
    }
  }
}
</style>