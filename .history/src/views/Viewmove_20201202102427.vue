<template>
  <div class="viewmove">
    <van-sticky>
    <div class="nav">
      <van-nav-bar
        title="歌单广场"
        left-arrow
        
        @click-left="goBack"
      />
    </div>
    </van-sticky>
    <div class="tabs-box">
      <van-sticky :offset-top="46">
        <van-tabs v-model="tabsIndex" @click="getPlaylistName">
          <van-tab title="推荐"> </van-tab>
          <van-tab
            v-for="(item, index) in tabsplaylistData"
            :key="index"
            :title="item.name"
          >
          </van-tab>
        </van-tabs>
      </van-sticky>
      <div class="playlist-content" v-if="tabsIndex == 0">
        <Newmusicitme
          v-for="(item, index) in hotplaylistData"
          :key="index"
          :item-img="item.coverImgUrl"
          :item-title="item.name"
          :play-count="item.playCount"
          @radom-jump="gojump('SonglistDateil', item.id)"
        ></Newmusicitme>
      </div>
      <div class="playlist-content" v-if="!tabsIndex == 0">
        <Newmusicitme
          v-for="(v, i) in playsListData"
          :key="i"
          :item-img="v.coverImgUrl"
          :item-title="v.name"
          :play-count="v.playCount"
          @radom-jump="gojump('SonglistDateil', v.id)"
        ></Newmusicitme>
      </div>
    </div>
  </div>
</template>

<script>
import { numberformat } from "../assets/js/playinit";
import Newmusicitme from "../components/Newmusicitem.vue";
import "../assets/less/viewmove.less";
export default {
  name: "Viewmove",
  data() {
    return {
      //列表下标
      tabsIndex: 1,
      //歌单列表数据
      tabsplaylistData: [],
      //歌单信息
      playsListData: [],
      //热门歌单
      hotplaylistData: [],
      //歌单类别
      playlistName: "",
    };
  },
  components: {
    Newmusicitme,
  },
  created() {
    //获取歌单列表
    this.gettabsPlaylistData();
    //歌单数据
    this.getplaylistData();
    //获取精品歌单
    this.getHotplaylistData();
  },
  methods: {
    //跳转歌单内容
    gojump(data, songid) {
      this.$router.push({ name: data, params: { songid } });
    },
    //获取选中的名字
    getPlaylistName(title, name) {
      this.getplaylistData(name);
    },
    //返回上一级
    goBack() {
      this.$router.go(-1);
    },
    //获取歌单列表
    gettabsPlaylistData() {
      let tokenString = localStorage.getItem("__token");
      if (!tokenString) {
        this.$toast("登录失效,请重新登录");
        return this.$router.push({ name: "Login" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/playlist/highquality/tags",
      })
        .then((result) => {
          this.$toast.clear();
          this.tabsplaylistData = result.data.tags;
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载错误");
            (err);
        });
    },
    //获取列表中的歌单
    getplaylistData(name) {
      let playname = name || "华语";
      let tokenString = localStorage.getItem("__token");
      if (!tokenString) {
        this.$toast("登录失效,请重新登录");
        return this.$router.push({ name: "Login" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/top/playlist/highquality",
        params: {
          cat: playname,
        },
      })
        .then((result) => {
          this.$toast.clear();
            (result);
          this.playsListData = result.data.playlists;
          for (let i = 0; i < this.playsListData.length; i++) {
            this.playsListData[i].playCount = numberformat.numberFormat(
              this.playsListData[i].playCount
            );
          }
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载错误");
            (err);
        });
    },
    //获取精品歌单
    getHotplaylistData() {
      let tokenString = localStorage.getItem("__token");
      if (!tokenString) {
        this.$toast("登录失效,请重新登录");
        return this.$router.push({ name: "Login" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/top/playlist",
      })
        .then((result) => {
          this.$toast.clear();
          this.hotplaylistData = result.data.playlists;
          for (let i = 0; i < this.hotplaylistData.length; i++) {
            this.hotplaylistData[i].playCount = numberformat.numberFormat(
              this.hotplaylistData[i].playCount
            );
          }
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载错误");
            (err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>