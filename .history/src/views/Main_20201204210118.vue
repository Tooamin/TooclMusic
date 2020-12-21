<template>
  <div class="main">
    <van-sticky>
      <div class="top-nav">
        <div class="conter">
          <div class="tabs">
            <van-tabs v-model="topIndex" :replace="true">
              <van-tab
                :title="item.title"
                v-for="(item, index) in tabsData"
                :key="index"
                :to="item.path"
                :name="item.name"
              />
            </van-tabs>
          </div>
        </div>
        <div class="right" @click="gotoggle('Search')">
          <img src="../assets/images/sousuo.png" alt="" />
        </div>
      </div>
    </van-sticky>
    <router-view></router-view>
  </div>
</template>

<script>
import "../assets/less/main.less";
export default {
  name: "Main",
  data() {
    return {
      topIndex: "",
      tabsData: [
        { title: "推荐", path: "/main/home",name:"Home" },
        { title: "电台", path: "/main/radio" ,name:"Radio"},
        { title: "发现", path: "/main/find",name:'Find' },
      ],
    };
  },
  created() {
    this.gotoggle("Home")
  },
  methods: {
    gotoggle(name) {
      this.$router.push({ name: name });
    },
  },
  components: {},
};
</script>
