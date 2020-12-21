<template>
  <div class="newsonglist">
    <van-nav-bar
      title="新歌列表"
      left-arrow
      :border="false"
      @click-left="goBack"
    />

    <div class="tabs-box">
      <van-tabs v-model="tabsIndex">
        <van-tab
          :title="item.title"
          v-for="(item, index) in newsongtabslist"
          :key="index"
          >内容 1</van-tab
        >
      </van-tabs>
    </div>

    <div class="bgimg-box">
        1
    </div>
  </div>
</template>

<script>
import '../assets/less/newsonglist.less'
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

