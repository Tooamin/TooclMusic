<template>
  <div id="app">
    <keep-alive exclude="SonglistDateil,Song,Newsonglist">
      <router-view/>
    </keep-alive>
    <div class="red">1111</div>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
