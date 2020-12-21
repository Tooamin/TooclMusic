<template>
    <div class="newsongitem">
        <div class="anewsong-item">
            <div class="anewsong-img auto-img">
              <img :src="itemData.album.picUrl" alt="">
            </div>
            <div class="anewsong-name">
              <div class="anewsong-title van-ellipsis">{{itemData.name}}</div>
              <div class="anewsong-subtitle van-ellipsis">{{itemData.artists[0].name}} - {{itemData.album.name}}</div>
            </div>
            <div class="anewsong-icon"><img src="../assets/images/home-play.png" alt=""></div>
          </div>
    </div>
</template>

<script>
    export default {
        name:'Newsongitem',
        props:{
            itemData:{
                type:Object,
                default:{}
            }
        }
    }
</script>

<style lang="less" scoped>

</style>