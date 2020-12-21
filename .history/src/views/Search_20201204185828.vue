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
            @click="getHistory"
          >
            {{ historylistData[index] }}
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
        historylist.JSON.
      this.historylistData.push(historylist);
    }
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
          this.$toast("加载失败");
           (err);
        });
    },
    //获取歌曲id
    clickMusicGetid(id) {
      this.historylistData.push(this.userinputvalue);
       (this.historylistData);
      let historylist = JSON.stringify(this.historylistData);
      localStorage.setItem("historySearch", historylist);
      this.userinputvalue = "";
      this.$router.push({ name: "Song", params: { id } });
    },
    //获取历史搜索
    getHistory(value) {
       ('1');
    },
    // 清除历史搜索
    clearHistory() {
      this.historylistData = [];
      localStorage.removeItem("historySearch");
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  .auto-img {
    width: 100%;
    display: block;
  }
  /deep/ .van-nav-bar .van-icon {
    color: #2b2b2b;
  }
  /deep/.van-nav-bar__title {
    color: #2b2b2b;
  }
  /deep/ .van-search {
    padding: 0;
  }
  .history-contentlist {
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .history-title {
    margin: 10px;
    color: #2b2b2b;
    font-size: 16px;
  }
  .clear-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-left: 5px;
  }
  .history-item {
    color: #2b2b2b;
    float: left;
    margin: 10px 10px;
    padding: 5px 10px;
    box-sizing: border-box;
    background-color: rgb(230, 230, 230);
    border-radius: 20px;
  }
  .hotsearch-title {
    color: #2b2b2b;
    font-size: 16px;
    padding: 10px;
    box-sizing: border-box;
  }
  .hotsearch-box {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    height: 160px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    margin-bottom: 20px;
    transition: all 0.4s linear;
  }
  .hotsearch-item {
    flex: 1;
    min-width: 100px;
    max-width: 140px;
    margin: 10px 20px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .hotsearch-count {
    float: left;
    font-size: 14px;
    font-weight: 700;
  }

  .hotsearch-name {
    float: left;
    margin-left: 20px;
    font-size: 14px;
    width: 70%;
  }
  .spread-btn {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .result-item {
    padding: 10px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    &:nth-of-type(1) {
      border-top: 1px solid #ccc;
    }
    /deep/ .van-icon {
      margin-right: 10px;
      vertical-align: middle;
    }
  }
}
</style>