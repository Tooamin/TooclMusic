<template>
  <div class="songlistdateil">
    <van-nav-bar title="歌单" left-arrow @left-click="goBack">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "SonglistDateil",
  methods:{
      goBack(){
          this.$router.go(-1);
      }
  }
};
</script>

<style lang="less" scoped>
</style>