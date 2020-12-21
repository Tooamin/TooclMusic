<template>
  <div id="app">
    <keep-alive exclude="SonglistDateil,Song,Newsonglist,RankingDetail,Search">
      <router-view/>
    </keep-alive>

      <div class="player">
        <PlayerSong></PlayerSong>
      </div>
  </div>
</template>

<script>
import PlayerSong from '../src/components/Song.vue'
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
  deactivated () {
    // 页面关闭（路由跳转）时清除定时器
    clearInterval(this.timer)
    this.timer = null
  },
  components:{
    PlayerSong
  },

}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
body{
  width: 100%;
  height: 100%;
}

.player{
  position: sticky;
  bottom: 20px;
  left: 0;
  z-index: 99;
  width: 100%;
}
</style>
