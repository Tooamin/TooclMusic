<template>
  <div class="home">
    <div class="top-nav">
      <div class="left">
        <img src="../assets/images/caidan.png" alt="">
      </div>
      <div class="conter">
        
      </div>
      <div class="right">
        <img src="../assets/images/sousuo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import RecHome from '../components/RecHome.vue'
import "../assets/less/home.less";
export default {
  name: "Home",
  data() {
    return {
      topNavIndex: 0,
    };
  },
  created() {},
  methods: {
  },
  components:{
    RecHome
  }
};
</script>
