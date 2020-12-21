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
    <div class="tabs">
      <van-tabs v-model="active">
        <van-tab title="标签 1">
          <div class="account-password">
            <van-form>
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
                <van-button
                  round
                  block
                  type="info"
                  native-type="submit"
                  color="#00b7f8"
                  @click="getLoginMuise"
                >
                  登 录
                </van-button>
              </div>
            </van-form>
          </div>
        </van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { validForm } from "../assets/js/Valiform";
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
      tabs: [],
    };
  },

  created() {
    // this.gettheRefresh();
  },
  methods: {
    getLoginMuise() {
      let o = {
        emaill: {
          value: this.userInfo.emaill,
          errorMsg: "邮箱输入不正确",
          reg: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        },
      };

      let isPass = validForm.valid(o);
      if (isPass) {
        let emails = o.emaill.value;
        let md5password = md5(this.userInfo.password);
        this.axios({
          method: "POST",
          url: "/login",
          params: {
            email: emails,
            md5_password: md5password,
          },
        })
          .then((result) => {
            localStorage.setItem("__icoo", result.data.cookie);
             (result);
            if (result.data.code == 502) {
              this.$toast(result.data.msg);
            } else if (result.data.code == 200) {
              this.$toast("登录成功");
            }
          })
          .catch((err) => {
             (err);
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>