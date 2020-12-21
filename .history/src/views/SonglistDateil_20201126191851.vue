<template>
  <div class="songlistdateil">
    <van-nav-bar title="歌单" left-arrow @click-left="goBack" :border="false">
      <template #right>
        <div class="iconimg">
          <img src="../assets/images/genduo.png" alt="" />
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "SonglistDateil",
  created() {
    //   获取歌单id
    let songlistId = this.$store.state.songlistId;
    this.songlistId = songlistId;

    //获取歌单数据
    this.getIdsongList();
  },
  data() {
    return {
      songlistId: "",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    //获取目标歌单
    getIdsongList() {
      let songlistlength = this.songlistId;
      
      if (songlistlength) {
        this.$toast.loading({
          message: "加载中...",
          forbidClick: true,
        });
        
        this.axios({
            method:'GET',
            url:'/playlist/detail',
            params:{
                id:this.songlistId
            }
        })
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>