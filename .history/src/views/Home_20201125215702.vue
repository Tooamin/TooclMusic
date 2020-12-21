<template>
  <div class="home">
    <BannerBox />
    <Newmusicblock />
  </div>
</template>

<script>
import BannerBox from '../components/BannerBox.vue'
import Newmusicblock from '../components/Newmusicblock.vue'
  export default {
    name:'Home',
    components:{
      BannerBox,
      Newmusicblock,
      Newmusicitem
    }
  }
</script>

<style lang="less" scoped>

</style>