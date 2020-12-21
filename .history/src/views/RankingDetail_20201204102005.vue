<template>
  <div class="rankingdetail">
    <div class="rankingdetailbg"  :style="{ backgroundImage: 'url(' + rankingAllDetail.coverImgUrl + ')' }">
      <van-nav-bar
        :title="rankingAllDetail"
        left-arrow
        :border="false"
        @click-left="goBack"
      />

      <div class="content-box">
          <Rankingitem></Rankingitem>
      </div>
    </div>
  </div>
</template>

<script>
import Rankingitem from '../components/Rankingitem.vue'
import "../assets/less/rankingdetail.less";
export default {
  name: "RankingDetail",
  created() {
    let rankingid = this.$store.state.rankingId;
    this.rankingId = rankingid;
    //获取排行榜数据
    this.getrankingData();
  },
  components:{
    Rankingitem 
  },
  data() {
    return {
      //排行榜id
      rankingId: "",
      rankingAllDetail: [],
    };
  },
  methods: {
    //返回上一级
    goBack() {
      this.$router.go(-1);
    },
    //获取排行榜数据
    getrankingData() {
       (this.rankingId);
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
           (result);
          this.rankingAllDetail = result.data.playlist;
        })
        .catch((err) => {
          this.$toast.clear();
          this.$toast("加载失败");
           (err);
        });
    },
  },
};
</script>
