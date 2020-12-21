<template>
  <div class="song">
    <audio autoplay src=""></audio>
  </div>
</template>

<script>
export default {
  name: "Song",
  methods: {
    getMusicdetail() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>