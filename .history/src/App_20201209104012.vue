<template>
  <div id="app">
    <keep-alive exclude="SonglistDateil,Song,Newsonglist,RankingDetail,Search">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
