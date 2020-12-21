<template>
  <div class="home">
    <div class="top-nav">
      <div class="left">
        <img src="../assets/images/caidan.png" alt="" />
      </div>
      <div class="conter">
        <div class="tabs">
          <div class="tabs-item">
            
          </div>
        </div>
      </div>
      <div class="right">
        <img src="../assets/images/sousuo.png" alt="" />
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import RecHome from "../components/RecHome.vue";
import "../assets/less/home.less";
export default {
  name: "Home",
  data() {
    return {
      topNavIndex: 0,
      tabsData:[
        {title:"推荐"},
        {title:"我的"},
        {title:""},
      ]
    };
  },
  created() {},
  methods: {},
  components: {
    RecHome,
  },
};
</script>
