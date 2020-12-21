<template>
  <div id="app">
    <keep-alive exclude="SonglistDateil,Song">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  /deep/ .van-nav-bar .van-icon {
            color: #000;
        }
</style>
