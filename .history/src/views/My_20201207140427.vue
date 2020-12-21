<template>
  <div class="my">
    <div
      class="userbg"
      :style="{ backgroundImage: 'url(' + userinfoData.avatarUrl + ')' }"
    ></div>
    <div class="userinfo-box">
      <div class="userinfo">
        <div class="user-img"><img :src="userinfoData.avatarUrl" alt="" /></div>
        <div class="usertitle">
          <div class="user-name">{{ userinfoData.nickname }}</div>
          <div class="user-level">Lv.8{{ userLevel.level }}</div>
        </div>
      </div>
      <div class="likemusic">11</div>
    </div>
  </div>
</template>

<script>
import "../assets/less/my.less";
export default {
  name: "My",
  data() {
    return {
      loginvalidation: false,
      userinfoData: [],
      userLevel: [],
    };
  },
  created() {
    //获取登录状态
    this.checkTheLoginStatus();
    //获取用户等级
    this.getLevel();
  },
  methods: {
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
           (result);
          this.userLevel = result.data.data;
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
