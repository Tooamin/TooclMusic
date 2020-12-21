<template>
  <div class="home">
    <BannerBox />
    <Newmusicblock :left-title="'为你推荐'" @go-view="goRadom('Viewmove')">
      <Newmusicitme
        v-for="(item, index) in songListData"
        :key="index"
        :item-img="item.coverImgUrl"
        :item-title="item.name"
        :play-count="item.playCount"
        @radom-jump="gojump('SonglistDateil', item.id)"
      ></Newmusicitme>
    </Newmusicblock>

    <div class="anewsong">
      <Newmusicblock :left-title="'新歌推荐'">
        <div class="anewsong-box">
          <div class="anewsong-item" v-for="(item,index) in newSongData" :key="index" @click="clickMusicGetid(item.album.id)">
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
      </Newmusicblock>
    </div>
  </div>
</template>

<script>
import { numberformat } from '../assets/js/playinit'
import '../assets/less/home.less'
import BannerBox from "../components/BannerBox.vue";
import Newmusicblock from "../components/Newmusicblock.vue";
import Newmusicitme from "../components/Newmusicitem.vue";
export default {
  name: "Home",
  components: {
    BannerBox,
    Newmusicblock,
    Newmusicitme,
  },
  data() {
    return {
      //歌单列表数据
      songListData: [],
      //新歌列表数据
      newSongData:[]
    };
  },

  created() {
    let tokenString = localStorage.getItem("__icoo");
    if (!tokenString) {
      return this.$router.push({ name: "Login" });
    }
    //获取歌单
    this.getsongList();
    //获取新歌数据
    this.getNewsongData();
  },
  methods: {
    //播放歌曲
    clickMusicGetid(id){
        this.$router.push({name:"Song",params:{id}});
    },
    goRadom(data) {
      this.$router.push({ name: data });
    },
    //点击进入
    gojump(data, songid) {
       (songid);
      this.$router.push({ name: data, params: { songid } });
    },
    //   获取歌单
    getsongList() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/top/playlist",
        params: {
          limit: 6,
          offset: 0,
        },
      })
        .then((result) => {
          this.$toast.clear();
          if (result.data.code == 200) {
            this.songListData = result.data.playlists;
            for (let i = 0; i < this.songListData.length; i++) {
              this.songListData[i].playCount = numberformat.numberFormat(
                this.songListData[i].playCount
              );
            }
          }
        })
        .catch((err) => {
           (err);
        });
    },
    //获取新歌数据
    getNewsongData(){
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method:'GET',
        url:'/top/song',
        params:{
          type:7
        }
      }).then((result) =>{
        this.$toast.clear();
        for(let i = 0 ; i < 8;i++){
          this.newSongData.push(result.data.data[i]);
        }
      }).catch((err) =>{
        this.$toast.clear();
        this.$toast("加载失败")
         (err);
      })
    }
   
  },
};
</script>

<style lang="less" scoped>
</style>