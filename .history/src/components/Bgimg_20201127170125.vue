<template>
    <div class="bgimg">
        <div
      class="background-img"
      :style="{ backgroundImage: 'url(' + songdateilData.coverImgUrl + ')' }"
    ></div>
    <div class="center-box">
      <van-sticky @scroll="getscrollData">
        <van-nav-bar
          title="歌单"
          left-arrow
          @click-left="goBack"
          :border="false"
        >
          <template #right>
            <div class="iconimg">
              <img src="../assets/images/genduo.png" alt="" />
            </div>
          </template>
        </van-nav-bar>
      </van-sticky>
    </div>
</template>

<script>
export default {
  name: "Bgimg",
};
</script>

<style lang="less" scoped>
.bgimg {
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        display: block;
    }

    .background-img {
        background-size: 100% auto;
        background-repeat: no-repeat;
        width: 100%;
        height: 900px;
        filter: blur(6px);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -9;
    }

    .center-box {
        overflow: hidden;

        .iconimg {
            width: 30px;
            height: 30px;
        }

        /deep/ .van-nav-bar {
            background-color: transparent;
        }

        /deep/ .van-nav-bar .van-icon {
            color: #ffffff;
        }

        /deep/ .van-nav-bar__title {
            color: #ffffff;
        }

        .detail-box {
            overflow: hidden;

            .detail-img {
                width: 140px;
                height: 140px;
                border-radius: 10px;
                float: left;
                overflow: hidden;
                margin: 10px;
            }

            .detail-title {
                box-sizing: border-box;
                font-size: 16px;
                color: #ffffff;
                padding: 10px;
                float: left;
                width: 200px;
                margin-top: 20px;
            }

            .detail-description {
                float: left;
                font-size: 12px;
                color: rgba(255, 255, 255, .8);
                width: 190px;
                padding: 0px 10px;
                margin: 10px 0px;
                overflow: hidden;
            }
        }
    }
}
</style>