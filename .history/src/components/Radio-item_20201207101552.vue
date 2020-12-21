<template>
  <div class="radioitem">
    <div
      class="everydaylist-item"
      @click="gettoggle"
    >
      <div class="everydaylist-number">{{ radioRanking }}</div>
      <div class="everydaylist-img">
        <img :src="radioImg" alt="" class="auto-img" />
      </div>
      <div class="everydaylist-name">
        <div class="everydaylist-title van-ellipsis">
          {{ radioName }}
        </div>
        <div class="everydaylist-subtitle">
          <div class="userinfo">
            <div class="userinfo-img">
              <img :src="userImg" alt="" class="auto-img" />
            </div>
            <div class="userinfo-name">{{ userName }}</div>
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
      radioImg:{
          type:String,
          default:'',
      },
      radioName:{
          type:String,
          default:'',
      },
      userImg:{
          type:String,
          default:'',
      },
      userName:{
          type:String,
          default:'',
      },
      radioRanking:{
          type:String,
          default:'1',
      },
  }
};
</script>

<style lang="less" scoped>
</style>