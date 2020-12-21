<template>
    <div class="newsongitem">
        <div class="anewsong-item">
            <div class="anewsong-img auto-img">
              <img :src="urlimg" alt="">
            </div>
            <div class="anewsong-name">
              <div class="anewsong-title van-ellipsis">{{title}}</div>
              <div class="anewsong-subtitle van-ellipsis">{{subtitle}} - {{minsubtitle}}</div>
            </div>
            <div class="anewsong-icon"><img src="../assets/images/home-play.png" alt=""></div>
          </div>
    </div>
</template>

<script>
    export default {
        name:'Newsongitem',
        props:{
            urlimg:{
                type:String,
                default:""
            },
            title:{
                type:String,
                default:""
            },
            subtitle:{
                type:String,
                default:""
            },
            minsubtitle:{
                type:String,
                default:""
            },
        }
    }
</script>

<style lang="less" scoped>

</style>