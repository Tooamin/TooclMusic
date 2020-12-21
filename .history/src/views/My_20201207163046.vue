<template>
  <div class="my">
    <div
      class="userbg"
      :style="{ backgroundImage: 'url(' + userinfoData.avatarUrl + ')' }"
    ></div>
    <div class="userinfo-box">
      <div class="userinfo" @click="popupdetail">
        <div class="user-img"><img :src="userinfoData.avatarUrl" alt="" /></div>
        <div class="usertitle">
          <div class="user-name">{{ userinfoData.nickname }}</div>
          <div class="user-level">Lv.{{ userLevel.level }}</div>
        </div>
        <div class="userinfo-icon">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="popup">
        <van-popup v-model="ispopup">内容</van-popup>
      </div>
      <div
        class="likemusic"
        @click="gojump('SonglistDateil', likemusicData.id)"
      >
        <div class="likemusic-img">
          <img :src="likemusicData.coverImgUrl" alt="" class="auto-img" />
        </div>
        <div class="likemusicname">
          <div class="likemusic-title">我喜欢的音乐</div>
          <div class="likemusic-subtitle">{{ likemusicData.trackCount }}首</div>
        </div>
        <div class="likemusic-icon">
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="createplaylist">
        <div class="createplaylist-title">创建的歌单</div>
        <div class="ceateplaylist-box">
          <Likemusicitem
            v-for="(item, index) in createplaylistData"
            :key="index"
            :like-img="item.coverImgUrl"
            :like-title="item.name"
            :like-number="item.trackCount"
            @go-jump="gojump('SonglistDateil', item.id)"
          ></Likemusicitem>
        </div>
      </div>
      <div class="my-collection">
        <div class="createplaylist-title">收藏的歌单</div>
        <div class="ceateplaylist-box">
          <Likemusicitem
            v-for="(item, index) in collectionplaylistData"
            :key="index"
            :like-img="item.coverImgUrl"
            :like-title="item.name"
            :like-number="item.trackCount"
            @go-jump="gojump('SonglistDateil', item.id)"
          ></Likemusicitem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Likemusicitem from "../components/Likemusicitem.vue";
import "../assets/less/my.less";
export default {
  name: "My",
  data() {
    return {
      ispopup:false,
      loginvalidation: false,
      userinfoData: [],
      userLevel: [],
      likemusicData: [],
      createplaylistData: [],
      collectionplaylistData: [],
    };
  },
  created() {
    //获取登录状态
    this.checkTheLoginStatus();
    //获取用户等级
    this.getLevel();

    //用户详细数据
    this.getUserInfodetail();
  },
  components: {
    Likemusicitem,
  },
  methods: {
    //弹出
    popupdetail(){
      this.ispopup = !this.ispopup;
    },
    //跳转歌单内容
    gojump(data, songid) {
      this.$router.push({ name: data, params: { songid } });
    },
    //   验证登录状态
    checkTheLoginStatus() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/login/status",
        params: {
          cookie: localStorage.getItem("__icoo"),
        },
      })
        .then((result) => {
          this.$toast.clear();
          this.userinfoData = result.data.profile;
        })
        .catch((err) => {
          this.$toast.clear();
          this.loginvalidation = false;
           (err);
        });
    },
    //获取登录账号等级
    getLevel() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/user/level",
        params: {
          cookie: localStorage.getItem("__icoo"),
        },
      })
        .then((result) => {
          this.$toast.clear();
          this.userLevel = result.data.data;
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("获取失败");
           (err);
        });
    },
    //用户详细数据
    getUserInfodetail() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/user/playlist",
        params: {
          uid: localStorage.getItem("__token"),
        },
      })
        .then((result) => {
          this.$toast.clear();
          this.likemusicData = result.data.playlist[0];
           (this.likemusicData);
          for (let i = 1; i < result.data.playlist.length; i++) {
            if (
              result.data.playlist[i].creator.nickname ==
              this.userinfoData.nickname
            ) {
              this.createplaylistData.push(result.data.playlist[i]);
            } else {
              this.collectionplaylistData.push(result.data.playlist[i]);
            }
          }
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("获取失败");
           (err);
        });
    },
  },
};
</script>
