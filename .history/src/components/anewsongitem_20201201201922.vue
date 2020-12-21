<template>
  <div class="anewsongitem">
    <div class="anewsong-item">
      <div class="anewsong-img auto-img">
        <img :src="item.album.picUrl" alt="" />
      </div>
      <div class="anewsong-name">
        <div class="anewsong-title van-ellipsis">{{ item.name }}</div>
        <div class="anewsong-subtitle van-ellipsis">
          {{ item.artists[0].name }} - {{ item.album.name }}
        </div>
      </div>
      <div class="anewsong-icon">
        <img src="../assets/images/home-play.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Anewsongitem",
  props:{
      itemData:{
          type:Object,
          default:{}
      }
  }
};
</script>

<style lang="less" scoped>
</style>