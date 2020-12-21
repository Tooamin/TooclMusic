<template>
  <div class="ranking">
    <van-nav-bar
      title="排行榜"
      left-arrow
      :border="false"
      @click-left="goBack"
    />

    <div class="rankingshow-box">
      <div class="rankingshow-item" v-for="(item,index) in rankingData" :key="index" @click="getrankingId(item.id)">
        <div class="ranking-img">
          <img
            :src="item.coverImgUrl"
            alt=""
            class="auto-img"
          />
        </div>
        <div class="ranking-title">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/less/ranking.less";
import RankingDetailVue from './RankingDetail.vue';
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
      //获取排行榜id
      getrankingId(pid){
           (pid);
          this.$router.push({name:RankingDetail});
      },
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
