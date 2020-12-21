<template>
  <div class="home">
    <BannerBox />
    <Newmusicblock> </Newmusicblock>
  </div>
</template>

<script>
import BannerBox from "../components/BannerBox.vue";
import Newmusicblock from "../components/Newmusicblock.vue";
import Newmusicitme from "../components/Newmusicitem.vue";
export default {
  name: "Home",
  components: {
    BannerBox,
    Newmusicblock,
    Newmusicitme,
  },
  created() {
    //获取歌单
    this.getsongList();
  },
  methods:{
    
  }
};
</script>

<style lang="less" scoped>
</style>