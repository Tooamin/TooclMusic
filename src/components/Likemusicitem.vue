<template>
  <div class="likemusicitem"  @click="jumptogglelist" >
      <div class="likemusic-img">
        <img :src="likeImg" alt="" class="auto-img" />
      </div>
      <div class="likemusicname">
        <div class="likemusic-title van-ellipsis">{{ likeTitle }}</div>
        <div class="likemusic-subtitle">{{ likeNumber }}首</div>
      </div>
      <div class="likemusic-icon">
        <van-icon name="arrow" />
      </div>
    </div>
</template>

<script>
export default {
  name: "Likemusicitem",
  props: {
    likeImg: {
      type: String,
      default: "",
    },
    likeTitle: {
      type: String,
      default: "名称",
    },
    likeNumber: {
      type: [String, Number],
      default: "1",
    },
  },
  methods: {
    jumptogglelist() {
      this.$emit("go-jump")
    },
  },
};
</script>

<style lang="less" scoped>
.likemusicitem {
  margin: 20px 0px;
  position: relative;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  .likemusic {
    width: 90%;
    margin: 10px auto;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .likemusic-img {
    width: 60px;
    height: 60px;
    float: left;
    overflow: hidden;
    border-radius: 10px;
  }
  .likemusicname {
    float: left;
    margin: 10px 10px;
  }
  .likemusic-title {
    width: 200px;
    font-size: 16px;
    color: #2b2b2b;
  }
  .likemusic-subtitle {
    margin-top: 5px;
    color: #a7a7a7;
  }
  .likemusic-icon {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    /deep/ .van-icon {
      font-size: 16px;
    }
  }
}
</style>