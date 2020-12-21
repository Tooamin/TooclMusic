<template>
  <div class="song">
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
    this.musicid = this.$store.state.musicId;
     (this.musicid);
  },
  methods: {
    getMusicdetail() {
      let isID = this.musicid;
      if (isID) {
        this.$toast.loading({
          message: "加载中...",
          forbidClick: true,
        });
        
        this.axios({
            method:"GET",
            url:'/song/url',
            params:{
                id:isID
            }
        })
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>