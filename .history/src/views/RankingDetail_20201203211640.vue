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
