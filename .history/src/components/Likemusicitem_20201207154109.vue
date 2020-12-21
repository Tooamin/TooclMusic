<template>
  <div class="likemusicitem">
    <div class="likemusic-img">
      <img :src="likemusicData.coverImgUrl" alt="" class="auto-img" />
    </div>
    <div class="likemusicname">
      <div class="likemusic-title">我喜欢的音乐</div>
      <div class="likemusic-subtitle">218首</div>
    </div>
    <div class="likemusic-icon">
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Likemusicitem",
  props: {},
};
</script>

<style lang="less" scoped>
.likemusicitem {
}
</style>