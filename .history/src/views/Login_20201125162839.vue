<template>
  <div class="login">
    <div class="logo">
      <div class="logo-img">
        <img src="../assets/images/ilogo.png" alt="" />
      </div>
      <div class="title">Hello,</div>
      <div class="subtitle">欢迎登录</div>
      <div class="encourage">跟随音乐做回自己</div>
    </div>
    <div class="account-password">
      <van-form>
        <van-field
          v-model="userInfo.emaill"
          name="邮箱"
          label="邮箱"
          placeholder="邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]"
        />
        <van-field
          v-model="userInfo.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";
import "../assets/less/login.less";
export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        emaill: "",
        password: "",
      },
    };
  },

  created() {
    this.getLoginMuise();
    // this.gettheRefresh();
  },
  methods: {
    getLoginMuise() {
      let userInfo = {
        emaill: "18818866387@163.com",
        password: md5("tanjinghua12345"),
      };
      localStorage;
      this.axios({
        method: "POST",
        url: "/login",
        params: {
          email: userInfo.emaill,
          md5_password: userInfo.password,
        },
      })
        .then((result) => {
          localStorage.setItem("__icoo", result.data.cookie);
          localStorage.setItem("__token", result.data.account.id);
           (result);
          if (result.data.code == 200) {
            this.$toast("登录成功");
          }
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