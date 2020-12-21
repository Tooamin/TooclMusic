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
    <div class="account-password">
      <van-form @submit="getLoginMuise">
        <van-field
          v-model="userInfo.emaill"
          name="邮箱"
          label="邮箱"
          placeholder="邮箱"
        />
        <van-field
          v-model="userInfo.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"

        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit" color="#00b7f8">
            登 录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import {validFrom} from '../assets/js/Valiform'
import md5 from "js-md5";
import "../assets/less/login.less";
export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        emaill: "",
        password:md5(""),
      },
    };
  },

  created() {
    // this.gettheRefresh();
  },
  methods: {
    getLoginMuise() {
      let o = {
        emaill:{
          value: this.userInfo.emaill,
          errorMsg:"邮箱输入不正确"
        }
      }
      this.axios({
        method: "POST",
        url: "/login",
        params: {
          email: this.userInfo.emaill,
          md5_password: this.userInfo.password,
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