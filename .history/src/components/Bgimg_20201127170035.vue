<template>
    <div class="bgimg">
        <div
      class="background-img"
      :style="{ backgroundImage: 'url(' + songdateilData.coverImgUrl + ')' }"
    ></div>
    <div class="center-box">
      <van-sticky @scroll="getscrollData">
        <van-nav-bar
          title="歌单"
          left-arrow
          @click-left="goBack"
          :border="false"
        >
          <template #right>
            <div class="iconimg">
              <img src="../assets/images/genduo.png" alt="" />
            </div>
          </template>
        </van-nav-bar>
      </van-sticky>
    </div>
</template>

<script>
export default {
  name: "Bgimg",
};
</script>

<style lang="less" scoped>
</style>