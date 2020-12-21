<template>
  <div class="song">
    1
    <audio autoplay src=""></audio>
  </div>
</template>

<script>
export default {
  name: "Song",
  data() {
    return {
      musicid: "",
    };
  },
  created() {
    //获取音乐ID
    this.musicid = this.$route.params.id;
     (this.musicid);

    //获取音乐
    this.getMusicdetail();
  },
  methods: {
    getMusicdetail() {},
  },
};
</script>

<style lang="less" scoped>
</style>