<template>
  <div class="song">
    <van-sticky>
      <div class="big-player" v-show="this.isPlaystatus">
        <div
          class="songbg"
          :style="{
            backgroundImage: 'url(' + songUrl + '?param=100y100' + ')',
          }"
        ></div>
        <div class="player-box">
          <van-nav-bar left-arrow :border="false" @click-left="goBack">
            <template #title>
              <div class="title-box">
                <div class="player-name">
                  {{ musicDate.name
                  }}<span v-if="musicDate.name == 0">电台</span>
                </div>
                <div
                  class="singer-name"
                  @click="toggleSongerDetail"
                  v-if="singerName"
                >
                  {{ singerName }}<van-icon name="arrow" />
                </div>
              </div>
            </template>
          </van-nav-bar>
        </div>
        <div class="player-lyrics">
          <div class="songimg" v-show="!islyrics" @click="lyricsModel">
            <img :src="songUrl + '?param=300y300'" alt="" class="auto-img" />
          </div>
          <div class="lyrics-box" v-show="islyrics" @click="lyricsModel">
            <van-row type="flex" justify="center">
              <van-col span="23" class="lyrics-move" ref="lyricmove">
                <van-row
                  v-for="(item, index) in lyric"
                  :key="index"
                  class="lyrics-centent"
                >
                  {{ item.text }}
                </van-row>
              </van-col>
            </van-row>
          </div>
        </div>
        <div class="popup">
          <van-popup
            v-model="isopenList"
            position="bottom"
            :style="{ height: '50%' }"
            :closeable="true"
          >
            <div class="popup-content">
              <div class="popup-title">播放列表</div>
              <div
                class="songlist-item"
                v-for="(item, index) in playList"
                :key="index"
                @click="listplaySong(item)"
              >
                <div class="song-name">
                  <div class="song-name-title van-ellipsis">
                    {{ item.name }} - {{ listSingerName[index] }}
                  </div>
                  <van-icon name="cross" @click="removeSonglist(index, item)" />
                </div>
              </div>
            </div>
          </van-popup>
        </div>
        <div class="progressbar">
          <div class="range-box">
            <div class="strattiem">{{ currentText }}</div>
            <div class="range">
              <van-slider v-model="currentBar" @input="dragStart" />
            </div>
            <div class="endtiem">{{ durationText }}</div>
          </div>
          <div class="play-conponents">
            <div class="model" @click="playmodel">
              <img
                src="../assets/images/suijiplay.png"
                alt=""
                v-if="isloop == true"
              />
              <img
                src="../assets/images/shunxuplay.png"
                alt=""
                v-if="isloop == false"
              />
            </div>
            <div class="upsong" @click="prevSong">
              <img src="../assets/images/upplay.png" alt="" />
            </div>
            <div class="plyasong">
              <img
                src="../assets/images/play.png"
                alt=""
                v-if="!playStatus"
                @click="play"
              />
              <img
                src="../assets/images/end.png"
                alt=""
                v-if="playStatus"
                @click="pause"
              />
            </div>
            <div class="nextsong" @click="nextSong">
              <img src="../assets/images/nextplay.png" alt="" />
            </div>
            <div class="directory" @click="openSonglist">
              <img src="../assets/images/list.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="video">
        <video
          @canplay="getDuration"
          @timeupdate="updateTime"
          ref="audio"
          autoplay
        ></video>
      </div>
    </van-sticky>
    <div class="min-player" v-if="!this.isPlaystatus">
      <div class="min-play-box" @click="changeStateOfPlayer">
        <div class="min-play-img">
          <img :src="songUrl + '?param=100y100'" alt="" class="auto-img" />
        </div>
        <div class="min-play-name">
          <div class="min-play-title van-ellipsis">
            <span v-if="isPlayUrl">{{ musicDate.name }} - {{ singerName }}</span
            ><span v-if="musicDate.name == 0">电台</span
            ><span v-if="!isPlayUrl">当前未播放歌曲</span>
          </div>
          <div class="min-play-time">
            <div class="starttime">{{ currentText }}</div>
            <div class="endtime">{{ durationText }}</div>
          </div>
          <div class="min-play-range">
            <van-slider v-model="currentBar" @input="dragStart" />
          </div>
        </div>
      </div>
      <div class="playsong">
        <img
          src="../assets/images/play.png"
          alt=""
          v-if="!playStatus"
          @click="play"
        />
        <img
          src="../assets/images/end.png"
          alt=""
          v-if="playStatus"
          @click="pause"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Lyric from "lyric-parser";
import "../assets/less/song.less";
import SingerDetailVue from "../components/SingerDetail.vue";
export default {
  name: "Song",
  data() {
    return {
      //播放器状态
      isPlaystatus: false,
      //音乐数据
      musicDate: [],
      // 音乐id
      musicid: [],
      //音乐播放地址
      musicurl: [],
      //歌手名称
      singerName: [],
      //音乐图片
      songUrl: [],
      //音乐播放状态
      playStatus: true,
      //定时器
      timer: null,
      //进度条时长
      currentBar: 0,
      //当前音乐时间
      currentText: "00:00",
      //未格式时间
      notcurrentTime: 0,
      //音乐总时长
      durationText: "00:00",
      //播放模式切换
      isloop: false,
      //播放模式
      loopStyle: "list",
      //总秒数
      allduratioTime: 0,
      //列表弹出
      isopenList: false,
      //列表歌单
      songlist: [],
      //是否显示歌词
      islyrics: false,
      //歌词
      lyric: [],
      //列表歌手名称
      listSingerName: [],
      //判断歌曲是否在播放
      isPlayUrl: false,
    };
  },
  watch: {
    songContent() {
      this.playSong(this.songContent);
    },
    lyricsCuttent(){
         
     this.lyric.forEach((element, index) => {
          
          
     })
    }
  },
  created() {
    //获取音乐ID
    // this.musicid = this.$route.params.id;
    this.musicid = this.$store.state.songCount;
  },
  methods: {
    //歌手详情
    toggleSongerDetail() {
      let id = this.musicDate.ar[0].id;
      this.$store.commit("getSingerid", id);
      this.isPlaystatus = !this.isPlaystatus;
      this.$router.push({ name: "SingerData", query: { singer: id } });
    },

    //返回上一级
    goBack() {
      this.isPlaystatus = !this.isPlaystatus;
    },
    //是否显示歌词
    lyricsModel() {
      this.islyrics = !this.islyrics;
    },
    //获取音乐详情
    getMusicDeateil(id) {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/song/detail",
        params: {
          ids: id,
        },
      })
        .then((result) => {
          this.$toast.clear();
          if (result.data.code == 200) {
            this.musicDate = result.data.songs[0];
            let str = "";
            for (let i = 0; i < this.musicDate.ar.length; i++) {
              str += this.musicDate.ar[i].name + "-";
            }
            this.singerName = str.slice(0, -1);
            this.listSingerName.indexOf(this.singerName) == -1
              ? this.listSingerName.push(this.singerName)
              : "";
            this.songUrl = result.data.songs[0].al.picUrl;
          }
        })
        .catch((err) => {
          err;
        });
    },
    //获取音乐
    getMusic(id) {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/song/url",
        params: {
          id: id,
        },
      })
        .then((result) => {
          this.clearTimer();
          if (result.data.code == 200) {
            this.musicurl = result.data.data[0];
            (this.$refs.audio.src = result.data.data[0].url), this.setTimer();
            this.$store.commit("getSongUrl", this.musicurl);
            this.isPlayUrl = true;
          }
        })
        .catch((err) => {});
    },
    //获取歌词
    getLyricsData(id) {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.axios({
        method: "GET",
        url: "/lyric",
        params: {
          id,
        },
      })
        .then((result) => {
          this.lyricsData = [];
          this.$toast.clear();
          this.formatLyric(result.data.lrc.lyric);
        })
        .catch((err) => {});
    },
    //获取总时长
    getDuration() {
      let durationtime = this.$refs.audio.duration;
      this.allduratioTime = durationtime;
      this.$store.commit("getTotaltime", durationtime);
      this.durationText = this.formatTheTime(durationtime);
    },
    // 当前时长
    updateTime(e) {
      let currentTime = e.target.currentTime;
      this.notcurrentTime = parseInt(currentTime);
      this.currentText = this.formatTheTime(currentTime);
    },
    //初始化播放歌曲
    playSong(value) {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      this.clearTimer();
      this.playStatus = true;
      this.currentText = "00:00";
      this.currentBar = 0;
      this.getMusicDeateil(this.songContent.id);
      this.getMusic(this.songContent.id);
      this.getLyricsData(this.songContent.id);
    },
    //点击播放
    play() {
      this.$refs.audio.ended
        ? this.playSong(this.songContent)
        : this.$refs.audio.play(),
        this.setTimer();
      this.playStatus = true;
    },
    //暂停
    pause() {
      this.playStatus = false;
      this.$refs.audio.pause();
      this.clearTimer();
    },

    //更新进图条
    updateCurrent() {
      this.$toast.clear();
      this.currentBar == 100
        ? (this.clearTimer(),
          this.loopStyle == "list"
            ? this.listLoop()
            : (this.loopStyle = "random" ? this.randomLoop() : this.notLoop()))
        : (this.currentBar =
            (this.$refs.audio.currentTime / this.$refs.audio.duration) * 100);
      this.musicid = this.$store.state.songCount;
    },
    //进度条拖拽
    dragStart(value) {
      this.$refs.audio.currentTime = parseInt(
        (this.allduratioTime * value) / 100
      );
    },
    // 格式化时间
    formatTheTime(value) {
      let m = parseInt(value / 60);
      let s = parseInt(value % 60);
      m >= 10 ? m : (m = "0" + m);
      s >= 10 ? s : (s = "0" + s);
      return m + ":" + s;
    },
    //格式化歌词
    formatLyric(text) {
      let arr = text.split("\n"); //原歌词文本已经换好行了方便很多，我们直接通过换行符“\n”进行切割
      let row = arr.length; //获取歌词行数
      for (let i = 0; i < row; i++) {
        let temp_row = arr[i]; //现在每一行格式大概就是这样"[00:04.302][02:10.00]hello world";
        let temp_arr = temp_row.split("]"); //我们可以通过“]”对时间和文本进行分离
        let text = temp_arr.pop(); //把歌词文本从数组中剔除出来，获取到歌词文本了！
        //再对剩下的歌词时间进行处理
        temp_arr.forEach((element) => {
          let obj = {};
          let time_arr = element.substr(1, element.length - 1).split(":"); //先把多余的“[”去掉，再分离出分、秒
          let s = parseInt(time_arr[0]) * 60 + Math.ceil(time_arr[1]); //把时间转换成与currentTime相同的类型，方便待会实现滚动效果
          obj.time = s;
          obj.text = text;
          this.lyric.push(obj); //每一行歌词对象存到组件的lyric歌词属性里
        });
      }
      this.lyric.sort(this.sort); //由于不同时间的相同歌词我们给排到一起了，所以这里要以时间顺序重新排列一下
      this.$store.commit("setLyric", this.lyric); //把歌词提交到store里，为了重新进入该组件时还能再次渲染
         
    },
    //排序
    sort(a, b) {
      return a.time - b.time;
    },
    //打开播放列表
    openSonglist() {
         
      this.isopenList = !this.isopenList;
    },
    //移除播放列表
    removeSonglist(index) {
      this.$store.commit("removeSong", index);
      this.listSingerName.splice(index, 1);
    },
    //列表里播放的音乐
    listplaySong(item) {
      item === this.songContent
        ? this.play()
        : this.$store.commit("getSongCount", item);
      this.getMusicDeateil(this.songContent.id);
      this.isopenList = false;
    },
    //上一首
    prevSong() {
      ("上一首");
      let index = this.playList.indexOf(this.songContent);
      let length = this.playList.length;
      index == 0 ? (index = length - 1) : index--;
      this.$store.commit("getSongCount", this.playList[index]);
      this.getMusicDeateil(this.songContent.id);
    },
    //下一首
    nextSong() {
      ("下一首");
      this.loopStyle == "random" ? this.randomLoop() : this.listLoop();
      this.getMusicDeateil(this.songContent.id);
    },
    //列表循环
    listLoop() {
      let index = this.playList.indexOf(this.songContent);
      let length = this.playList.length;
      index == length - 1 ? (index = 0) : index++;
      this.$store.commit("getSongCount", this.playList[index]);
      this.getMusicDeateil(this.songContent.id);
    },
    //随机播放
    randomLoop() {
      ("随机播放");
      let length = this.playList.length;
      let index = this.playList.indexOf(this.songContent);
      let random = parseInt(Math.random() * this.playList.length);
      while (index == random) {
        random = parseInt(Math.random() * this.playList.length);
      }
      this.$store.commit("getSongCount", this.playList[random]);
      this.getMusicDeateil(this.songContent.id);
    },
    //单曲播放
    notLoop() {
      this.play();
      this.playStatus = false;
      this.clearTimer();
    },
    //模式切换
    playmodel() {
      this.isloop;
      if (this.isloop) {
        this.loopStyle = "lisr";
        this.isloop = false;
      } else {
        this.loopStyle = "random";
        this.isloop = true;
      }
    },
    //定时器
    setTimer() {
      this.clearTimer();
      this.timer = setInterval(this.updateCurrent, 1000);
    },
    //清除定时器
    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    //改变播放器状态
    changeStateOfPlayer() {
      this.isPlaystatus = !this.isPlaystatus;
      this.getMusicDeateil(this.musicid.id);
    },
  },
  computed: {
    //当前播放信息
    songContent() {
      return this.$store.state.songCount;
    },
    //播放列表信息
    playList() {
      return this.$store.state.playList;
    }
  },
};
</script>

<style lang="less" scoped>
</style>