<template>
  <div class="newmusicblock">
    <div class="newmusic">
      <div class="newmusic-title">
        <div class="left">{{ leftTitle }}</div>
        <div class="right" v-if="right">查看更多 <van-icon name="arrow" /></div>
      </div>
      <div class="newmusic-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newmusicblock",
  data() {
    return {
      songListData: [],
    };
  },
  props: {
    leftTitle: {
      type: String,
      default: "左标题",
    },
    right: {
      type: Boolean,
      defaultL: false,
    },
  },
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.newmusicblock {
  img {
    width: 100%;
    display: block;
  }
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