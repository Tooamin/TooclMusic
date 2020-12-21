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
</style>