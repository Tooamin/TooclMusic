<template>
  <div class="rankingdetail">
    <van-nav-bar
      title="排行榜"
      left-arrow
      :border="false"
    />
  </div>
</template>

<script>
import '../assets/less/rankingdetail.less'
export default {
  name: "RankingDetail",
  created() {
    let rankingid = this.$store.state.rankingId;
     (rankingid);
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
