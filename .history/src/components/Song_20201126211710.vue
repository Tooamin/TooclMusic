<template>
  <div class="song">
    <audio autoplay src=""></audio>
  </div>
</template>

<script>
export default {
  name: "Song",
  data(){
      return{
          musicid:''
      }
  },
  created(){
      //获取音乐ID
      this.musicid = this.$store.state.musicId;
  },
  methods: {
    getMusicdetail() {
      
    },
  },
};
</script>

<style lang="less" scoped>
</style>