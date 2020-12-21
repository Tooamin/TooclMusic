<template>
  <div class="singerdetail">
    <van-nav-bar title="歌手" left-arrow :border="false" @click="goBack" />
    <van-tabs v-model="active">
      <van-tab :title="item.title" v-for="(item,index) in singerType" :key="index"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "SingerDetail",
  data() {
    return {
        singerType:[
            {title:"华语",type:1},
            {title:"欧美",type:2},
            {title:"韩国",type:3},
            {title:"日本",type:4},
        ]
    };
  },
  created() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getSingerinfo() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/toplist/artist",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.singerdetail {
  /deep/ .van-nav-bar .van-icon {
    color: #2b2b2b;
  }

  /deep/ .van-nav-bar__title {
    color: #2b2b2b;
  }
}
</style>