<template>
  <div class="newsonglist">
    <van-sticky>
      <van-nav-bar
        title="新歌列表"
        left-arrow
        :border="false"
        @click-left="goBack"
      />

      <div class="tabs-box">
        <van-tabs v-model="tabsIndex" @click="gettabsIndex">
          <van-tab
            :title="item.title"
            v-for="(item, index) in newsongtabslist"
            :key="index"
          ></van-tab>
        </van-tabs>
      </div>
    </van-sticky>

    <div class="bgimg-box">
        <Songitem
          v-for="(item, index) in songlistData"
          :key="index"
          :urlimg="item.album.blurPicUrl+'?param=100y100'"
          :title="item.name"
          :subtitle="item.artists[0].name"
          :minsubtitle="item.album.name"
          @toggle-song="clickMusicGetid(item)"
        ></Songitem>
    </div>
  </div>
</template>

<script>
import "../assets/less/newsonglist.less";
import Songitem from "../components/Songitem.vue";
export default {
  name: "Newsonglist",
  data() {
    return {
      tabsIndex: 0,
      //tabs栏
      newsongtabslist: [
        {
          title: "华语",
          type: 7,
        },
        {
          title: "欧美",
          type: 96,
        },
        {
          title: "日本",
          type: 8,
        },
        {
          title: "韩国",
          type: 16,
        },
      ],
      //获取新歌类型
      tabsIndexname: 7,
      //新歌列表
      songlistData: [],
    };
  },
  components: {
    Songitem,
  },
  created() {
    this.getNewsonglistData();
  },
  methods: {
    //跳转到播放歌曲
     clickMusicGetid(item) {
        this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.$store.commit("getSongCount", item);
    },
    //返回
    goBack() {
      this.$router.go(-1);
    },
    //获取类型
    gettabsIndex(name) {
      this.tabsIndexname = this.newsongtabslist[name].type;
      this.songlistData = null;
      this.startIndex = 0;
      this.getNewsonglistData();
    },
    //获取新歌
    getNewsonglistData() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/top/song",
        params: {
          type: this.tabsIndexname,
        },
      })
        .then((result) => {
          this.$toast.clear();
          this.songlistData = result.data.data;
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载失败");
        });
    },
  },
};
</script>

