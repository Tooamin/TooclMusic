<template>
  <div class="radio">
    <van-sticky>
      <van-nav-bar
        title="电台"
        left-arrow
        :border="false"
        @click-left="goBack"
      />
    </van-sticky>
    <div class="showranking">
      <div class="everyday-list">
        <div class="every-title" @click="toggle('Everydayradiolist')">
          24小时榜<van-icon name="arrow" />
        </div>
        <div class="every-box">
          <div
            class="every-item"
            v-for="(item, index) in everdaylistData"
            :key="index"
            @click="clickMusicGetid(item.program.mainSong)"
          >
            <div class="every-img">
              <img v-lazy="item.program.coverUrl+'?param=100y100'" alt="" class="auto-img" />
              <div class="every-icon"><span class="triangle"></span></div>
            </div>
            <div class="every-name van-multi-ellipsis--l2">
              {{ item.program.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="hot-rec">
        <div class="hot-rec-title">最热节目</div>
        <Radioitem
          v-for="(item, index) in hotradioData"
          :key="index"
          :radio-img="item.program.blurCoverUrl+'?param=100y100'"
          :radio-name="item.program.name"
          :user-img="item.program.dj.avatarUrl+'?param=100y100'"
          :user-name="item.program.dj.nickname"
          :radio-ranking="item.rank"
          @get-toggle="clickMusicGetid(item.program.mainSong)"
        ></Radioitem>
      </div>
    </div>
  </div>
</template>

<script>
import Radioitem from "../components/Radio-item.vue";
export default {
  name: "Radio",
  data() {
    return {
      everdaylistData: [],
      hotradioData: [],
    };
  },
  created() {
    //获取24小时榜
    this.getEveryDayradiolist();
    //最热节目获取
    this.getHotradioData();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    //跳转
    toggle(name) {
      this.$router.push({ name: name });
    },
    //24小时电台榜
    getEveryDayradiolist() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/dj/program/toplist/hours",
        params: {
          limit: 3,
        },
      })
        .then((result) => {
          this.$toast.clear();
           (result);
          this.everdaylistData = result.data.data.list;
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载失败");
           (err);
        });
    },
    //获取id
    clickMusicGetid(item) {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.$store.commit("getSongCount", item);
    },
    getHotradioData() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/dj/program/toplist",
      })
        .then((result) => {
          this.$toast.clear();
          this.hotradioData = result.data.toplist;
           (this.hotradioData);
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载失败");
           (err);
        });
    },
  },
  components: {
    Radioitem,
  },
};
</script>

<style lang="less" scoped>
.radio {
  .auto-img {
    width: 100%;
    display: block;
  }
  /deep/ .van-tabs__line {
    background-color: #2ddae8;
  }
  /deep/ .van-tab--active {
    color: #2ddae8;
    font-size: 16px;
  }
  /deep/ .van-nav-bar .van-icon {
    color: #000;
  }
  .every-title {
    color: #2b2b2b;
    font-size: 16px;
    margin: 0px 10px 10px;
    padding-top: 10px;
    box-sizing: border-box;
    background-color: #ffffff;
    /deep/ .van-icon {
      vertical-align: middle;
      margin: 0px 5px;
      font-size: 12px;
    }
  }
  .every-box {
    display: flex;
  }
  .everyday-list {
    background-color: #ffffff;
  }
  .every-item {
    flex: 1;
    margin: 10px;
  }
  .every-img {
    height: 105px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }
  .every-icon {
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.6);
    position: absolute;
    bottom: 10px;
    right: 10px;
    border-radius: 50%;
    .triangle {
      display: block;
      border-left: 8px solid #2ddae8;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 8px solid transparent;
      position: absolute;
      top: 7px;
      left: 12px;
    }
  }
  .every-name {
    margin-top: 5px;
    color: #2b2b2b;
  }
  .hot-rec {
    background-color: #ffffff;
  }
  .hot-rec-title {
    color: #2b2b2b;
    font-size: 16px;
    margin: 0px 10px 20px;
    padding-top: 10px;
    box-sizing: border-box;
    background-color: #ffffff;
    /deep/ .van-icon {
      vertical-align: middle;
      margin: 0px 5px;
      font-size: 12px;
    }
  }
}
</style>