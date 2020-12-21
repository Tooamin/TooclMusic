<template>
  <div class="everydayradiolist">
    <van-sticky>
      <van-nav-bar
        :border="false"
        title="24小时榜"
        left-arrow
        @click-left="goBack"
      />
    </van-sticky>

    <div class="everydaylist-box">
      <Radioitem
        v-for="(item, index) in hotradioData"
        :key="index"
        :radio-img="item.program.blurCoverUrl"
        :radio-name="item.program.name"
        :user-img="item.program.dj.avatarUrl"
        :user-name="item.program.dj.nickname"
        :radio-ranking="item.rank"
        @get-toggle="clickMusicGetid(item.program.mainSong.id)"
      ></Radioitem>
    </div>
  </div>
</template>

<script>
export default {
  name: "Everydayradiolist",
  data() {
    return {
      everydaylistAllData: [],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },

    getEveryDaylist() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/dj/program/toplist/hours",
      })
        .then((result) => {
          this.$toast.clear();
          this.everydaylistAllData = result.data.data.list;
           (this.everydaylistAllData);
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载失败");
           (err);
        });
    },
    //获取电台id
    clickMusicGetid(id) {
      this.$router.push({ name: "Song", params: { id } });
    },
  },
  created() {
    //获取全部数据
    this.getEveryDaylist();
  },
};
</script>

<style lang="less" scoped>
.everydayradiolist {
  .auto-img {
    width: 100%;
    display: block;
  }
  /deep/ .van-nav-bar .van-icon {
    color: #000;
  }
}
</style>