<template>
  <div class="radioitem">
    <div class="everydaylist-item" @click="gettoggle">
      <div class="everydaylist-number">{{ radioRanking }}</div>
      <div class="everydaylist-img">
        <img :src="radioImg" alt="" class="auto-img" />
      </div>
      <div class="everydaylist-name">
        <div class="everydaylist-title van-ellipsis">
          {{ radioName }}
        </div>
        <div class="everydaylist-subtitle">
          <div class="userinfo">
            <div class="userinfo-img">
              <img v-lazy="userImg" alt="" class="auto-img" />
            </div>
            <div class="userinfo-name">{{ userName }}</div>
          </div>
        </div>
        <div class="songdetail-icon">
          <img src="../assets/images/bofanbtn.png" alt="" class="auto-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Radioitem",
  methods: {
    gettoggle() {
      this.$emit("get-toggle");
    },
  },
  props: {
    radioImg: {
      type: String,
      default: "",
    },
    radioName: {
      type: String,
      default: "",
    },
    userImg: {
      type: String,
      default: "",
    },
    userName: {
      type: String,
      default: "",
    },
    radioRanking: {
      type: [String,Number],
      default: "1",
    },
  },
};
</script>

<style lang="less" scoped>
.radioitem {
  .auto-img {
    width: 100%;
    display: block;
  }
  /deep/ .van-nav-bar .van-icon {
    color: #000;
  }
  .everydaylist-item {
    width: 100%;
    height: 60px;
    margin: 10px 0px;
    box-sizing: border-box;
    padding: 0px 10px;
    position: relative;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .everydaylist-number {
    float: left;
    font-size: 16px;
    margin: 20px 0px;
    width: 40px;
    text-align: center;
    color: #2b2b2b;
  }
  .everydaylist-img {
    width: 60px;
    float: left;
    border-radius: 10px;
    overflow: hidden;
  }
  .everydaylist-name {
    float: left;
    margin: 0px 10px;
    margin-top: 10px;
  }
  .everydaylist-title {
    width: 220px;
  }
  .userinfo-img {
    float: left;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
  }
  .userinfo-name {
    float: left;
    margin: 10px;
    color: #636363;
  }
  .songdetail-icon {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
}
</style>