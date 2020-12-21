<template>
  <div class="singerdata">
    <van-nav-bar
      title="标题"
      left-arrow
    />
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
</style>