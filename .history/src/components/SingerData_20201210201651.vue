<template>
  <div class="singerdata">
    <van-nav-bar title="歌手" left-arrow :border="false" />
  </div>
</template>

<script>
export default {
  name: "SingerData",
  data() {
    return {
      singidData: "",
      singerinfoData: [],
    };
  },
  created() {
    this.singidData = this.$store.state.singerId;
  },
  computed: {
    //歌手id
    Singid() {
      return this.$store.state.singerId;
    },
  },
  methods: {
    getSingerinfoData() {},
  },
};
</script>

<style lang="less" scoped>
.singerdata {

  /deep/ .van-nav-bar .van-icon {
    color: #2b2b2b;
  }

  /deep/ .van-nav-bar__title {
    color: #2b2b2b;
  }
}
</style>