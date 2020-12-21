<template>
  <div class="ranking">
    <van-nav-bar
      title="排行榜"
      left-arrow
      :border="false"
      @click-left="goBack"
    />

    <div class="rankingshow-box">
      <div class="rankingshow-item" v-for="(item,index) in rankingData" :key="index">
        <div class="ranking-img">
          <img
            src="https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg"
            alt=""
            class="auto-img"
          />
        </div>
        <div class="ranking-title">云音乐飙升榜</div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/less/ranking.less";
export default {
  name: "Ranking",
  data() {
    return {
      //排行榜摘要数据
      rankingData: [],
    };
  },
  created() {
    //获取排行榜数据
    this.getrankingallData();
  },
  methods: {
    //   返回上一级
    goBack() {
      this.$router.go(-1);
    },
    //获取排行榜摘要
    getrankingallData() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/toplist/detail",
      }).then((result) => {
        this.$toast.clear();
        this.rankingData = result.data.list;
      });
    },
  },
};
</script>
