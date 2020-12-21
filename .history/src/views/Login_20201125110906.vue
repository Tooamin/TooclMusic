<template>
  <div class="login">
    <div class="logo">
      <div class="logo-img">
        <img src="../assets/images/ilogo.png" alt="" />
      </div>
      <div class="title">Hello,</div>
      <div class="subtitle">欢迎登录</div>
    </div>
    <div class="encourage">跟随音乐做回自己</div>
    <div></div>
  </div>
</template>
<script src="https://cdn.bootcdn.net/ajax/libs/blueimp-md5/2.18.0/js/md5.min.js"></script>
<script>
import '../assets/less/login.less'
export default {
  name: "Login",
  
  created() {
    this.getLoginMuise();
    // this.gettheRefresh();
  },
  methods: {
    getLoginMuise() {

    let  userInfo={
      emaill:"18818866387@163.com",
      password: "tanjinghua12345",
    };

    let md5password = md5(userInfo.password);

     (md5password);
      
    this.axios({
        method: "POST",
        url: "/login",
        params: {
          email: userInfo.emaill,
          password: userInfo.password,
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