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
        v-for="(item, index) in everydaylistAllData"
        :key="index"
        :radio-img="item.program.blurCoverUrl+'?param=100y100'"
        :radio-name="item.program.name"
        :user-img="item.program.dj.avatarUrl+'?param=100y100'"
        :user-name="item.program.dj.nickname"
        :radio-ranking="item.rank"
        @get-toggle="clickMusicGetid(item.program.mainSong)"
      ></Radioitem>
    </div>
  </div>
</template>

<script>
import Radioitem from '../components/Radio-item.vue'
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
    clickMusicGetid(item) {
      this.$store.commit("getSongCount", item);
      this.$store.commit("getplayList",item);
    },
  },
  created() {
    //获取全部数据
    this.getEveryDaylist();
  },
  components:{
    Radioitem
  }
};
</script>

<style lang="less" scoped>
.everydayradiolist {
  .auto-img {
    width: 100%;
    display: block;
  }
}
</style>