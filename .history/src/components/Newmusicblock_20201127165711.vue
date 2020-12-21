<template>
  <div class="newmusicblock">
    <div class="newmusic">
      <div class="newmusic-title">
        <div class="left">{{ leftTitle }}</div>
        <div class="right" v-if="right" @click="goView">查看更多 <van-icon name="arrow" /></div>
      </div>
      <div class="newmusic-box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newmusicblock",
  data() {
    return {};
  },
  props: {
    leftTitle: {
      type: String,
      default: "左标题",
    },
    right: {
      type: Boolean,
      default: true,
    },
  },
  created() {},
  methods: {
    goView(){
      this.$emit('go-view');
    }
  },
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
  .newmusic-box {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>