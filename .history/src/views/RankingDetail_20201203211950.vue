<template>
  <div class="rankingdetail">
    <van-nav-bar title="排行榜" left-arrow :border="false" @click-left="goBack" />
  </div>
</template>

<script>
import "../assets/less/rankingdetail.less";
export default {
  name: "RankingDetail",
  created() {
    let rankingid = this.$store.state.rankingId;
     (rankingid);
  },
  data() {
    return {
        //排行榜id
        rankingId:''

    };
  },
  methods: {
    //返回上一级
    goBack() {
      this.$router.go(-1);
    },
    //获取排行榜数据
    getrankingData() {},
  },
};
</script>
