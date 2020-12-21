<template>
  <div class="newsonglist">
    <van-nav-bar
      title="新歌列表"
      left-arrow
      :border="false"
      @click-left="goBack"
    />

    <div class="tabs-box">
      <van-tabs v-model="tabsIndex" @click="gettabsIndex">
        <van-tab
          :title="item.title"
          v-for="(item, index) in newsongtabslist"
          :key="index"
        ></van-tab>
      </van-tabs>
    </div>

    <div class="bgimg-box">
      <Songitem></Songitem>
    </div>
  </div>
</template>

<script>
import "../assets/less/newsonglist.less";
import Songitem from '../components/Songitem.vue'
export default {
  name: "Newsonglist",
  data() {
    return {
      tabsIndex: 0,
      newsongtabslist: [
        {
          title: "华语",
          type: 7,
        },
        {
          title: "欧美",
          type: 96,
        },
        {
          title: "日本",
          type: 8,
        },
        {
          title: "韩国",
          type: 16,
        },
      ],
      tabsIndexname:7,
    };
  },
  components:{
    Songitem
  },
  created(){
    this.getNewsonglistData();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    gettabsIndex(name){
      this.tabsIndexname=  this.newsongtabslist[name].type;
      this.getNewsonglistData();
    },
    getNewsonglistData(type){
       this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/top/song",
        params: {
          type:this.tabsIndexname,
        },
      }).then((result) =>{
        this.$toast.clear();
         (result);
        
      }).catch((err) =>{
        this.$toast.clear();
        this.$toast("加载失败");
         (err);
      })
    }
  },
};
</script>

