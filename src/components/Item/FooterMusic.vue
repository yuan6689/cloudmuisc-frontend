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
    <audio @ended="changeBtn(false)" ref="audio" :src="musicSrc"></audio>
    <van-popup v-model:show="isDetailShow" position="bottom" :style="{ height: '10%', width: '100%' }" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getPlayMusic } from "@/request/api/itemMusic";

export default {
  data() {
    return {
      musicSrc: "https://music.163.com/song/media/outer/url?id=1934251776.mp3",
    };
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
    changePopupShow(value){
      this.$store.commit("updateIsDetailShow", value);
    },
    async getMusicSrc() {
      const { data } = await getPlayMusic(this.playingId);
      console.log(data);
      this.musicSrc = data.data[0].url;
    },
  },
  updated() {
    console.log(this.$refs.audio);
  },
  // async mounted() {
  //   console.log('loading')
  //   await this.getMusicSrc();
  // },
  watch: {
    async playingId() {
      await this.getMusicSrc();
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
      max-width: 5rem;
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
