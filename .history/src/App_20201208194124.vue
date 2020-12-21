<template>
  <div id="app">
    <keep-alive exclude="SonglistDateil,Song,Newsonglist,RankingDetail,Search">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: null // 定时器
    }
  },
  activated () {
    this.timer = setInterval(() => {
      //  定时器中执行的代码
    }, 30000)
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
