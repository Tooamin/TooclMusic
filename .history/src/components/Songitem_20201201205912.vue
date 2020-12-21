<template>
  <div class="newsongitem">
    <div class="anewsong-item">
      <div class="anewsong-img auto-img">
        <img :src="urlimg" alt="" />
      </div>
      <div class="anewsong-name">
        <div class="anewsong-title van-ellipsis">{{ title }}</div>
        <div class="anewsong-subtitle van-ellipsis">
          {{ subtitle }} - {{ minsubtitle }}
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
  name: "Newsongitem",
  props: {
    urlimg: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "歌名",
    },
    subtitle: {
      type: String,
      default: "歌手名",
    },
    minsubtitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.newsongitem {
    width: 100%;
    .auto-img{
        width: 100%;
        display: block;
    }
  .anewsong-item {
    position: relative;
    padding: 0px 10px;
    margin: 10px 0px;
    box-sizing: border-box;
    width: 100%;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .anewsong-img {
    width: 60px;
    float: left;
  }
  .anewsong-name {
    float: left;
    box-sizing: border-box;
    padding: 0px 20px;
  }
  .anewsong-title {
    margin-top: 12px;
    font-size: 14px;
    width: 200px;
  }
  .anewsong-subtitle {
    color: rgba(0, 0, 0, 0.6);
  }
  .anewsong-icon {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
}
</style>