<template>
  <div class="my">
    <div class="userbg">
      <div class="userinfo">
        <div class="user-img"></div>
        <div class="user-name"></div>
        <div class="user-level"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/less/my.less";
export default {
  name: "My",
  created() {},
  methods: {
    checkTheLoginStatus() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
          method:"GET",
          url:"/login/status"
      })
    },
  },
};
</script>
