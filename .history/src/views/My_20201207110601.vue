<template>
  <div class="my">
    <div class="userbg">
      <div class="userinfo">
        <div class="user-img">1</div>
        <div class="user-name">1</div>
        <div class="user-level">1</div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/less/my.less";
export default {
  name: "My",
  data(){
      return{
          loginvalidation:false,
      }
  },
  created() {
      //获取登录状态
      this.checkTheLoginStatus();
  },
  methods: {
    checkTheLoginStatus() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
          method:"GET",
          url:"/login/status"
      }).then((result) => {
          this.$toast.clear();
           (result);
      }).catch((err) =>{
          this.$toast.clear();
          this.$toast("获取失败");
          this.loginvalidation = false;
           (err);
      })
    },
  },
};
</script>
