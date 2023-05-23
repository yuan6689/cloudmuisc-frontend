<template>
  <div class="footer-music">
    <div class="music-pic" @click="changePopupShow(true)">
      <img :src="playlist[playlistIndex].al.picUrl" alt="曲片" />
    </div>
    <div class="music-info">
      <div class="music-name">{{ playNow.name }}</div>
      <div class="music-words">横滑可以切换上下首哦</div>
    </div>
    <div class="music-control">
      <svg class="icon" aria-hidden="true" @click="pause" v-if="isBtnShow">
        <use xlink:href="#icon-cloudpause"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="play" v-else>
        <use xlink:href="#icon-cloudbofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cloud24gf-playlistMusic"></use>
      </svg>
    </div>
    <audio
      @timeupdate="handlePlaying"
      @ended="changeBtn(false)"
      ref="audio"
      :src="musicSrc"
      @durationchange="handleDurationchange"
    ></audio>
    <van-popup
      v-model:show="isDetailShow"
      position="bottom"
      :style="{ height: '100%', width: '100%' }"
    >
      <music-detail
        :musicList="playNow"
        :play="play"
        :pause="pause"
        :isBtnShow="isBtnShow"
        @emit-update-time="emitUpdateTime"
      />
    </van-popup>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { getPlayMusic } from "@/request/api/itemMusic";
import MusicDetail from "@/components/Item/MusicDetail.vue";
import "vant/es/toast/style";

export default {
  data() {
    return {
      musicSrc: "https://music.163.com/song/media/outer/url?id=1934251776.mp3",
    };
  },
  components: {
    MusicDetail,
  },
  computed: {
    ...mapState([
      "playlist",
      "playlistIndex",
      "isBtnShow",
      "playingId",
      "isDetailShow",
    ]),
    playNow() {
      //KNOW: 发现可以直接对computed属性进行二次操作, 不过要加上this
      return this.playlist[this.playlistIndex];
    },
  },
  methods: {
    play() {
      this.$refs.audio.play();
      this.changeBtn(true);
    },
    pause() {
      this.$refs.audio.pause();
      this.changeBtn(false);
    },
    changeBtn(value) {
      this.$store.commit("changeBtnShow", value);
    },
    changePopupShow(value) {
      this.$store.commit("updateIsDetailShow", value);
    },
    async getMusicImgSrc() {
      const { data } = await getPlayMusic(this.playingId);
      // console.log(data);
      this.musicSrc = data.data[0].url;
    },
    handleDurationchange(event){
      this.updateDuration(event.target.duration)
    },
    goPlay(to) {
      let res = this.playlistIndex;
      res += to;
      if (res > this.playlist.length) {
        console.log("the last song");
        Toast("已经是列表最后一首");
      } else if (res < 0) {
        console.log("the first song");
        Toast("已经是列表第一首");
      } else {
        this.updatePlaylistIndex(res);
      }
    },
    handleEnded() {
      this.changeBtn(false);
      this.goPlay(1);
    },
    handlePlaying(e) {
      this.updateCurrentTime(e.target.currentTime);
    },
    emitUpdateTime(newValue) {
      this.$refs.audio.currentTime = newValue;
      if (this.$refs.audio.paused) {
        this.play();
      }
    },
    ...mapMutations([
      "updateCurrentTime",
      "updateDuration",
      "updatePlaylistIndex",
    ]),
    ...mapActions(["getLyricList"]),
  },
  updated() {
    console.log(this.$refs.audio);
  },
  mounted() {
    this.$refs.audio.preload = "auto";
  },
  watch: {
    async playingId() {
      await this.getMusicImgSrc();
      await this.getLyricList();
      this.play();
    },
  },
};
</script>

<style lang="less" scoped>
.footer-music {
  width: 100%;
  height: 1.2rem;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  border-top: 0.01rem #bbb solid;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  .music-pic {
    width: 0.7rem;
    height: 0.7rem;
    margin-right: 0.2rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .music-info {
    margin-right: auto;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    font-size: 0.25rem;
    .music-name {
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 4rem;
    }
    .music-words {
      color: #ccc;
    }
  }
  .music-control {
    .icon {
      fill: #ccc;
      stroke: #ccc;
      padding-left: 0.2rem;
      width: 0.7rem;
      height: 0.7rem;
    }
  }
}
</style>
