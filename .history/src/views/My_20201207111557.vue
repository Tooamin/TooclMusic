<template>
  <div class="my">
    <div class="userbg" :style="{ backgroundImage: 'url(' + userinfoData.avatarUrl + ')' }">
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
  data(){
      return{
          loginvalidation:false,
          userinfoData:[],
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
          url:"/login/status",
          params:{
              cookie:localStorage.getItem("__icoo")
          }
      }).then((result) => {
          this.$toast.clear();
           (result);
          this.userinfo = result.data.profile;
    
      }).catch((err) =>{
          this.$toast.clear();
          this.loginvalidation = false;
           (err);
      })
    },
  },
};
</script>
