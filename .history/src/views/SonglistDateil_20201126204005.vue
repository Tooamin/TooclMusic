<template>
  <div class="songlistdateil">
    <div
      class="background-img"
      :style="{ backgroundImage: 'url(' + songdateilData.coverImgUrl + ')' }"
    ></div>
    <div class="center-box">
      <van-nav-bar title="歌单" left-arrow @click-left="goBack" :border="false">
        <template #right>
          <div class="iconimg">
            <img src="../assets/images/genduo.png" alt="" />
          </div>
        </template>
      </van-nav-bar>
      <div class="detail-box">
        <div class="detail-img">
          <img :src="songdateilData.coverImgUrl" alt="" />
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
          v-for="(item, index) in sonlistData"
          :key="index"
        >
          <div class="numbers">{{ index + 1 }}</div>
          <div class="songdateil-box">
            <div class="songdateil-title">是但求其爱</div>
            <div class="songdateil-name">陈奕迅-是但求其爱</div>
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
      songdetailtrackIds: '',
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
             (result);
            if (result.data.code == 200) {
              this.songdateilData = result.data.playlist;
              this.songdetailtrackIds = result.data.playlist.trackIds;
              this.getSonglist();
            }
          })
          .catch((err) => {
             (err);
          });
      }
    },
    //请求歌曲数据
    getSonglist() {
      let Detalist = this.songdetailtrackIds;
       (Detalist);
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/song/detail",
        params: {
          
        },
      })
        .then((result) => {
          this.$toast.clear();
           (result);
        })
        .catch((err) => {
           (err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>