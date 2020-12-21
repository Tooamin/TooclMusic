<template>
  <div class="login">
    <div @click="gettheRefresh">111</div>
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
    gettheRefresh() {
        let id = localStorage.getItem("__token");
      this.axios({
        method: "POST",
        url: "/user/playlist",
        params:{
            
        }
        
      })
        .then((result) => {
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