<template>
  <div class="newsonglist">
    <van-nav-bar
      title="新歌列表"
      left-arrow
      :border="false"
      @click-left="goBack"
    />
  </div>
</template>

<script>
export default {
  name: "Newsonglist",
  data(){
      return{
          newsongtabslist:[
              {
                  title:"华语",
                  type:7
              },
              {
                  title:"欧美",
                  type:96
              },
              {
                  title:"日本",
                  type:96
              },
              {
                  title:"欧美",
                  type:96
              },
          ]
      }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.newsonglist {
  /deep/ .van-nav-bar .van-icon {
    color: #000;
  }
}
</style>