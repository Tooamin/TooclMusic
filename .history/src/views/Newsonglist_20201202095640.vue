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
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="loadData"
      >
        <Songitem
          v-for="(item, index) in currentsonglistData"
          :key="index"
          :urlimg="item.album.picUrl"
          :title="item.name"
          :subtitle="item.artists[0].name"
          :minsubtitle="item.album.name"
        ></Songitem>
      </van-list>
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
      //截取出来的数据
      currentsonglistData: [],
      //加载状态
      loading: true,
      //全部加载完成状态
      finished: false,

      //截取下标
      currentIndex: 10,
      //开始下标
      startIndex: 0,
    };
  },
  components: {
    Songitem,
  },
  created() {
    this.getNewsonglistData();
  },
  methods: {
    //返回
    goBack() {
      this.$router.go(-1);
    },
    //获取类型
    gettabsIndex(name) {
      this.tabsIndexname = this.newsongtabslist[name].type;
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

          this.currentsonglistData = this.songlistData.slice(
            this.startIndex,
            this.startIndex + this.currentIndex
          );

          this.startIndex += this.currentIndex;

          this.loading = false;
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载失败");
           (err);
        });
    },
    //列表加载
    loadData() {
      setTimeout(() => {
        let data = this.songlistData.slice(
          this.startIndex,
          this.startIndex + this.currentIndex
        );

        this.startIndex += this.currentIndex;

        this.currentsonglistData.push(...data);

        if (data.length < this.currentIndex) {
          this.finished = true;
        } else {
          this.loading = false;
        }
      }, 1500);
    },
  },
};
</script>

