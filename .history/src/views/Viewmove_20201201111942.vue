<template>
  <div class="viewmove">
    <div class="nav">
      <van-nav-bar
        title="歌单广场"
        left-arrow
        :border="false"
        @click-left="goBack"
      />
    </div>
    <div class="tabs-box">
      <van-tabs v-model="tabsIndex" @click="getPlaylistName">
        <van-tab
          v-for="(item, index) in tabsplaylistData"
          :key="index"
          :title="item.name"
        >
          <Newmusicitme
            v-for="(v, i) in playsListData"
            :key="i"
            :item-img="item.coverImgUrl"
            :item-title="item.name"
            :play-count="item.playCount"
            @radom-jump="gojump('SonglistDateil', item.id)"
          ></Newmusicitme>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import "../assets/less/viewmove.less";
export default {
  name: "Viewmove",
  data() {
    return {
      //列表下标
      tabsIndex: 0,
      //歌单列表数据
      tabsplaylistData: [],
      //歌单信息
      playsListData: [],
      //歌单类别
      playlistName:'华语'
    };
  },
  created() {
    //获取歌单列表
    this.gettabsPlaylistData();
    //歌单数据
    this.getplaylistData();
  },
  methods: {
      //获取选中的名字
      getPlaylistName(title,name){
        this.playlistName = name;
          (this.playlistName);
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
    getplaylistData() {
      let tokenString = localStorage.getItem("__tk");
      if (!tokenString) {
        this.$toast("登录失效,请重新登录");
        return this.$router.push({ name: "Login" });
      }

      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
          method:'GET',
          url:'/top/playlist/highquality',
        params:{
            cat:this.playlistName
        }
      }).then((result) =>{
          this.$toast.clear();
            (result);
          this.playsListData = result.data
      }).catch((err) =>{
          this.$toast.clear();
          this.$toast("加载错误");
            (err);
      })
    },
  },
};
</script>

<style lang="less" scoped>
</style>