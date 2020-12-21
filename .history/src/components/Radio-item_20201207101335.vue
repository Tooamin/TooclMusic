<template>
  <div class="radioitem">
    <div
      class="everydaylist-item"
      @click="gettoggle"
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
  methods:{
      gettoggle(){
          this.$emit("get-toggle");
      }
  },
  props:{
      isImg:{
          type:String,
          default:''
      }
  }
};
</script>

<style lang="less" scoped>
</style>