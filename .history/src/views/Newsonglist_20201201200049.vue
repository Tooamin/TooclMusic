<template>
  <div class="newsonglist">
    <van-nav-bar
      title="新歌列表"
      left-arrow
      :border="false"
      @click-left="goBack"
    />

    <div class="tabs-box">
      <van-tabs v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newsonglist",
  data() {
    return {
      tabsIndex: 0,
      newsongtabslist: [
        {
          title: "华语",
          type: 7,
        },
        {
          title: "欧美",
          type: 96,
        },
        {
          title: "日本",
          type: 8,
        },
        {
          title: "韩国",
          type: 16,
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.newsonglist {
  /deep/ .van-nav-bar .van-icon {
    color: #000;
  }
}
</style>