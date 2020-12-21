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
html,body,#app{
 height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.player{
  position: fixed;
  bottom: 20px;
  left: 0;
  z-index: 99;
  width: 200px;
  height: 200px;
}
</style>
