<template>
  <div class="rankingdetail">
    <div
      class="rankingdetailbg"
      :style="{ backgroundImage: 'url(' + rankingAllDetail.coverImgUrl + ')' }"
    >
    <van-sticky @scroll="getscrollData">
      <van-nav-bar
        :title="rankingAllDetail.name"
        left-arrow
        :border="false"
        @click-left="goBack"
      />
    </van-sticky>

      <div class="content-box">
        <Rankingitem
          v-for="(item, index) in rankinglist"
          :key="index"
          :number="index+1 < 10 ?  '0'+(index+1) : index+1"
          :title="item.name"
          :subtitle="item.ar[0].name"
          @toggle-song="clickMusicGetid(item.id)"
        ></Rankingitem>
      </div>
    </div>
  </div>
</template>

<script>
import Rankingitem from "../components/Rankingitem.vue";
import "../assets/less/rankingdetail.less";
export default {
  name: "RankingDetail",
  created() {
    let rankingid = this.$store.state.rankingId;
    this.rankingId = rankingid;
    //获取排行榜数据
    this.getrankingData();
  },
  components: {
    Rankingitem,
  },
  data() {
    return {
      //排行榜id
      rankingId: "",
      rankingAllDetail: [],
      rankinglist: [],
    };
  },
  methods: {
    //返回上一级
    goBack() {
      this.$router.go(-1);
    },
    //获取排行榜数据
    getrankingData() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/playlist/detail",
        params: {
          id: this.rankingId,
        },
      })
        .then((result) => {
          this.$toast.clear();
          //  (result);
          this.rankingAllDetail = result.data.playlist;
          this.rankinglist = result.data.playlist.tracks;
          this.getMusicGetid();
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载失败");
           (err);
        });
    },

    //顶部导航颜色
    getscrollData(scrollTop){
        if(scrollTop.scrollTop > 10){
           let topnav =  document.querySelector(".van-nav-bar");
           topnav.style.backgroundColor = "#2ddae8";
        }else{
            let topnav =  document.querySelector(".van-nav-bar");
           topnav.style.backgroundColor = "transparent";
        }
    },
    //获取点击的歌曲id
     clickMusicGetid(id){
        this.$store.commit("getsongdetailId",id);
        this.$router.push({name:'Song',params:{id}});
    },
    // 歌单里所有歌曲id
    getMusicGetid(){
      let data = [];
      for(let i = 0; i< this.rankinglist.length;i++){
        data.push(this.rankinglist[i]);
      }
       (data);
      // this.$store.commit("")
    }
  },
};
</script>
