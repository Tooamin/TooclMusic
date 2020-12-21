<template>
  <div class="radioitem">
    <div
      class="everydaylist-item"
      v-for="(item, index) in everydaylistAllData"
      :key="index"
      @click="clickMusicGetid(item.program.mainSong.id)"
    >
      <div class="everydaylist-number">{{ item.rank }}</div>
      <div class="everydaylist-img">
        <img :src="item.program.blurCoverUrl" alt="" class="auto-img" />
      </div>
      <div class="everydaylist-name">
        <div class="everydaylist-title van-ellipsis">
          {{ item.program.name }}
        </div>
        <div class="everydaylist-subtitle">
          <div class="userinfo">
            <div class="userinfo-img">
              <img :src="item.program.dj.avatarUrl" alt="" class="auto-img" />
            </div>
            <div class="userinfo-name">{{ item.program.dj.nickname }}</div>
          </div>
        </div>
        <div class="songdetail-icon">
          <img src="../assets/images/bofanbtn.png" alt="" class="auto-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Radioitem",
};
</script>

<style lang="less" scoped>
</style>