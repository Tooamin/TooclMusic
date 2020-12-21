<template>
  <div class="main">
    <div class="top-nav">
      <div class="left">
        <img src="../assets/images/caidan.png" alt="" />
      </div>
      <div class="conter">
        <div class="tabs">
          <div
            class="tabs-item"
            v-for="(item, index) in tabsData"
            :key="index"
            @click="toggleactive(index)"
            :class="{ active: topIndex == index }"
            :to="item.path"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
      <div class="right">
        <img src="../assets/images/sousuo.png" alt="" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import RecHome from "../components/RecHome.vue";
import "../assets/less/main.less";
export default {
  name: "Main",
  data() {
    return {
      topIndex: 0,
      tabsData: [
        { title: "推荐", path: "/main/home" },
        { title: "我的", path: "/main/my" },
        { title: "发现", path: "/main/find" },
      ],
    };
  },
  created() {},
  methods: {
    toggleactive(index) {
      if (this.topIndex == index) {
        return;
      }
      this.topIndex = index;
    },
  },
  components: {
    RecHome,
  },
};
</script>
