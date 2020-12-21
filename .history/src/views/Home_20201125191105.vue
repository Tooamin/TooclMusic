<template>
  <div class="home">
    <div class="top-nav">
      <div class="left">
        
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
