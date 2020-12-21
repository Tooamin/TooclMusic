<template>
    <div class="newsongitem">
        <div class="anewsong-item" v-for="(item,index) in newSongData" :key="index" @click="clickMusicGetid(item.id)">
            <div class="anewsong-img auto-img">
              <img :src="item.album.picUrl" alt="">
            </div>
            <div class="anewsong-name">
              <div class="anewsong-title van-ellipsis">{{item.name}}</div>
              <div class="anewsong-subtitle van-ellipsis">{{item.artists[0].name}} - {{item.album.name}}</div>
            </div>
            <div class="anewsong-icon"><img src="../assets/images/home-play.png" alt=""></div>
          </div>
    </div>
</template>

<script>
    export default {
        name:'Newsongitem'
    }
</script>

<style lang="less" scoped>

</style>