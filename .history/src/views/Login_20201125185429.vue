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
      <van-tabs v-model="tabacviteIndex">
        <van-tab title="邮箱登录">
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
        <van-tab title="手机号登录">
          <div class="account-password">
            <van-form>
              <van-field
                v-model="userInfo.phone"
                name="手机号"
                label="手机号"
                placeholder="手机号"
              />
              <van-field
                v-model="userInfo.code"
                type="text"
                name="验证码"
                label="验证码"
                placeholder="验证码"
              >
                <template #button>
                  <div class="code-box">
                    <van-button type="default" :disabled="isSend" @click.stop="sendVaildCode">{{text}}</van-button>
                  </div>
                </template>
              </van-field>
              <div style="margin: 16px">
                <van-button
                  round
                  block
                  type="info"
                  native-type="submit"
                  color="#00b7f8"
                  @click="getValidCode"
                >
                  登 录
                </van-button>
              </div>
            </van-form>
          </div>
        </van-tab>
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
        phone: "",
        code: "",
      },
      text: "发送验证码",
      tabacviteIndex: 0,
      isSend:false
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

        this.$toast.loading({
          message: "加载中...",
          forbidClick: true,
        });

        this.axios({
          method: "POST",
          url: "/login",
          params: {
            email: emails,
            md5_password: md5password,
          },
        })
          .then((result) => {
            this.$toast.clear();
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
    sendVaildCode() {
      let o = {
        phone: {
          value: this.userInfo.phone,
          errorMsg: "手机号格式错误",
          reg: /^1[3-9]\d{9}$/,
        },
        code: {
          value: this.userInfo.code,
          errorMsg: "验证码不正确",
          reg: /^[A-Za-z\d]{6}$/,
        },
      };
      let isPass = validForm.valid(o);

      if (isPass) {
        let time = 60;

        this.isSend = true;
        this.text = `${time}秒重新发送`;
        clearInterval(timer);
        let timer = setInterval(() => {
          if (time < 0) {
            timer = null;
            time = 60;
            this.isSend = false;
          } else {
            time--;
            this.text = `${time}秒后重新发送`;
          }
        }, 1000);

        this.$toast.loading({
          message: "加载中...",
          forbidClick: true,
          duration: 0,
        });

        this.axios({
          method: "POST",
          url: "/captcha/sent",
          params: {
            phone: this.userInfo.phone,
          },
        })
          .then((result) => {
            this.$toast.clear();
             (result);
          })
          .catch((err) => {
             (err);
          });
      }
    },
    getValidCode(){
       this.$toast.loading({
          message: "加载中...",
          forbidClick: true,
          duration: 0,
        });

        this.axios({
          method: "POST",
          url: "/captcha/verify",
          params: {
            phone: this.userInfo.phone,
            captcha:this.userInfo.code
          },
        })
          .then((result) => {
            this.$toast.clear();
            //  (result);
            if(result.data.code == 200){
              this.$toast("登录成功");
              
            }else{
              this.$toast("验证码错误")
            }
          })
          .catch((err) => {
            this.$toast.clear();
            //  (err);
          });
    }
  },
};
</script>

<style lang="less" scoped>
</style>