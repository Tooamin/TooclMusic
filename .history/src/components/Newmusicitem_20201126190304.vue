<template>
  <div class="newmusicitem" @click="gojump">
    <div class="newmusic-item">
      <img :src="itemImg" alt="" />
      <div class="item-img-title">{{ itemTitle }}</div>
      <span class="play-count">播放量:{{ playCount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newmusicitem",
  data() {
    return {};
  },
  props: {
    itemImg: {
      type: String,
      default: "",
    },
    itemTitle: {
      type: String,
      default: "名称",
    },
    playCount: {
      type: String,
      default: "1",
    },
  },
};
</script>

<style lang="less" scoped>
.newmusicitem {
  flex: 1;
  min-width: 100px;
  position: relative;
  margin: 10px;
  img {
    width: 100%;
    display: block;
  }
  .newmusic-item {
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
</style>