<template>
  <div class="songlistdateil">
    <div
      class="background-img"
      :style="{ backgroundImage: 'url(' + songdateilData.coverImgUrl + ')' }"
    ></div>
    <div class="center-box">
      <van-sticky @scroll="getscrollData">
        <van-nav-bar
          title="歌单"
          left-arrow
          @click-left="goBack"
          :border="false"
        >
          <template #right>
            <div class="iconimg">
              <img src="../assets/images/genduo.png" alt="" />
            </div>
          </template>
        </van-nav-bar>
      </van-sticky>
      <div class="detail-box">
        <div class="detail-img" @click="getImg(songdateilData.coverImgUrl)">
          <img :src="songdateilData.coverImgUrl+'?param=100y100'" alt="" />
        </div>
        <div class="detail-text">
          <div class="detail-title">{{ songdateilData.name }}</div>
          <div class="detail-description van-multi-ellipsis--l3">
            {{ songdateilData.description }}
          </div>
        </div>
      </div>
      <div class="songlist-box">
        <div
          class="songlist-item"
          v-for="(item, index) in songdetailtrackIds"
          :key="index"
          @click="clickMusicGetid(item)"
        >
          <div class="numbers">{{ index + 1 }}</div>
          <div class="songdateil-box">
            <div class="songdateil-title van-ellipsis">{{ item.name }}</div>
            <div class="songdateil-name van-ellipsis">
              {{ item.ar[0].name }}-{{ item.al.name }}
            </div>
          </div>
          <div class="songdetail-icon">
            <img src="../assets/images/bofanbtn.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ImagePreview } from "vant";
import "../assets/less/songlistdateil.less";
export default {
  name: "SonglistDateil",
  created() {
    //   获取歌单id
    this.songlistId = this.$route.params.songid;

    //获取歌单数据
    this.getIdsongList();
  },
  data() {
    return {
      songlistId: "",
      sonlistData: [],
      songdateilData: {},
      songdetailtrackIds: [],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    //获取目标歌单
    getIdsongList() {
      let songlistlength = this.songlistId;

      if (songlistlength) {
        this.$toast.loading({
          message: "加载中...",
          forbidClick: true,
        });

        this.axios({
          method: "GET",
          url: "/playlist/detail",
          params: {
            id: this.songlistId,
          },
        })
          .then((result) => {
            this.$toast.clear();
            if (result.data.code == 200) {
              this.songdateilData = result.data.playlist;
              this.songdetailtrackIds = result.data.playlist.tracks;
            }
          })
          .catch((err) => {
             (err);
          });
      }
    },
    getscrollData(scrollTop) {
      if (scrollTop.scrollTop > 10) {
        let topnav = document.querySelector(".center-box .van-nav-bar");
        topnav.style.backgroundColor = "#2ddae8";
      } else {
        let topnav = document.querySelector(".center-box .van-nav-bar");
        topnav.style.backgroundColor = "transparent";
      }
    },
    clickMusicGetid(item) {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.$store.commit("getSongCount", item);
    },
    getImg(imgdata) {
      ImagePreview([imgdata]);
    },
  },
};
</script>

<style lang="less" scoped>
</style>