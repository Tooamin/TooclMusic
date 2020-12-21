<template>
  <div class="login">
    <div class=""></div>
  </div>
</template>

<script>
export default {
  name: "Login",
  created() {
    this.getLoginMuise();
    // this.gettheRefresh();
  },
  methods: {
    getLoginMuise() {
      this.axios({
        method: "POST",
        url: "/login",
        params: {
          email: "18818866387@163.com",
          password: "tanjinghua12345",
        },
      })
        .then((result) => {
          localStorage.setItem("__icoo", result.data.cookie);
          localStorage.setItem("__token", result.data.account.id);
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