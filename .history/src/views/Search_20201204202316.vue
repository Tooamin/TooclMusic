<template>
  <div class="search">
    <van-nav-bar title="搜索" left-arrow @click-left="goBack" :border="false" />
    <div class="secach-box">
      <van-search
        v-model="userinputvalue"
        placeholder="请输入搜索关键词"
        @input="getSearchData"
        @search="getSearchData"
      />
    </div>
    <div class="content-box" v-if="!userinputvalue.length">
      <div class="history-search" v-if="historylistData.length > 0">
        <div class="history-title">
          历史搜索<span class="clear-icon" @click="clearHistory"
            ><img src="../assets/images/clear.png" alt="" class="auto-img"
          /></span>
        </div>
        <div class="history-contentlist">
          <div
            class="history-item"
            v-for="(item, index) in historylistData"
            :key="index"
            @click="getHistory(item)"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="hotsearch">
        <div class="hotsearch-title">热搜榜</div>
        <div class="hotsearch-box">
          <div
            class="hotsearch-item"
            v-for="(item, index) in hotsearchlist"
            :key="index"
            @click="getHistory(item.searchWord)"
          >
            <div class="hotsearch-count">{{ index + 1 }}</div>
            <div class="hotsearch-name">{{ item.searchWord }}</div>
          </div>
          <div
            class="spread-btn"
            @click="spread"
            v-if="hotsearchlist.length > 6"
          >
            {{ isSpread == false ? "点击展开" : "点击收起"
            }}<van-icon :name="isSpread == false ? 'arrow-down' : 'arrow-up'" />
          </div>
        </div>
      </div>
    </div>
    <div class="resultslist" v-if="userinputvalue.length">
      <div
        class="result-item van-ellipsis"
        v-for="(item, index) in searchData"
        :key="index"
        @click="clickMusicGetid(item.id)"
      >
        <van-icon name="search" />{{ item.name }}-{{ item.ar[0].name }}
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/less/search.less'
export default {
  name: "Search",
  data() {
    return {
      userinputvalue: "",
      historylistData: [],
      hotsearchlist: [],
      isSpread: false,
      searchData: [],
    };
  },
  created() {
    //获取热搜
    this.gethotSearch();
    //获取历史搜索
    let historylist = localStorage.getItem("historySearch");
    if (historylist) {
      let list = JSON.parse(historylist);
      for (let i = 0; i < list.length; i++) {
        this.historylistData.push(list[i]);
      }
    }
    //改颜色
    this.fontColor();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    //点击展开
    spread() {
      let hotsearchbox = document.querySelector(".hotsearch-box");
      if (!this.isSpread) {
        hotsearchbox.style.height = 500 + "px";
        this.isSpread = true;
      } else {
        hotsearchbox.style.height = 160 + "px";
        this.isSpread = false;
      }
    },
    // 获取热搜
    gethotSearch() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/search/hot/detail",
      })
        .then((result) => {
          this.$toast.clear();
          this.hotsearchlist = result.data.data;
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载失败");
           (err);
        });
    },
    //请求搜索数据
    getSearchData() {
      let isPass = /^ +| +$/g.test(this.userinputvalue);
      if (isPass) {
        this.$toast("请输入有效的字");
        return;
      }
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/cloudsearch",
        params: {
          keywords: this.userinputvalue,
        },
      })
        .then((result) => {
          this.$toast.clear();
          //    (result);
          this.searchData = result.data.result.songs;
        })
        .catch((err) => {
          this.$toast.clear();
        // //   this.$toast("加载失败");
        //    (err);
        });
    },
    //获取歌曲id
    clickMusicGetid(id) {
      let listData = [];
      listData.push(this.userinputvalue);
      for (let i = 0; i < listData.length; i++) {
        if (this.historylistData.indexOf(listData[i]) === -1) {
          this.historylistData.push(listData[i]);
        }
      }
      let historylist = JSON.stringify(this.historylistData);
      localStorage.setItem("historySearch", historylist);
      this.userinputvalue = "";
      this.$router.push({ name: "Song", params: { id } });
    },
    //获取历史搜索
    getHistory(value) {
      this.userinputvalue = value;
      this.getSearchData();
    },
    // 清除历史搜索
    clearHistory() {
      this.historylistData = [];
      localStorage.removeItem("historySearch");
    },
    fontColor(){
        let color = document.querySelectorAll(".hotsearch-count");
         (color);
    }
  },
};
</script>