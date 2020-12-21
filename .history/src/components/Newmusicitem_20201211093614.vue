<template>
  <div class="newmusicitem" @click="gojump">
    <div class="newmusic-item">
      <img v-lazy="itemImg" alt="" />
      <div class="item-img-title van-multi-ellipsis--l2">{{ itemTitle }}</div>
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
  methods:{
    gojump(){
      this.$emit("radom-jump");
    }
  }
};
</script>

<style lang="less" scoped>
.newmusicitem {
  flex: 1;
  min-width: 100px;
  max-width: 105px;
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
    text-align: center;
    padding: 0px 4px;
    color: #ffffff;
    position: absolute;
    font-size: 12px;
    top: 0;
    left: 0;
    display: block;
    height: 20px;
    font-weight: 700;
    background-color: rgba(0 , 0, 0, 0.6s);
    border-bottom-right-radius: 8px;
  }
}
</style>