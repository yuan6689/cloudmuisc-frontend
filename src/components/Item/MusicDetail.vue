<template>
  <div class="music-detail" ref="wrapper">
    <img :src="musicList.al.picUrl" alt="背景图片" class="bgi" />
    <div class="detail-top">
      <div class="top-left">
        <svg class="icon" aria-hidden="true" @click="quitMusicDetail">
          <use xlink:href="#icon-cloud-down-arrow"></use>
        </svg>
        <div class="right-content">
          <my-marquee class="music-name">
            {{ musicList.name }}
          </my-marquee>
          <div class="author-name">
            <span v-for="(author, index2) in musicList.ar"
              ><span v-if="index2 >= 2"> / </span>{{ author.name }}</span
            >
          </div>
        </div>
      </div>
      <div class="top-right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cloudfenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="detail-content">
      <img
        src="@/assets/needle-ab.png"
        alt="播放针"
        :class="{ needle: true, active: isBtnShow }"
        ref="myNeedle"
      />
      <div class="album-wrapper"></div>
      <img :class="{ album: true, active: isBtnShow }" ref="myAlbum" :src="musicList.al.picUrl" />
    </div>
    <div class="music-lyric"></div>
    <div class="detail-footer">
      <div class="footer-top">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cloudxihuan"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-clouddownload"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cloudchangpian"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cloudpinglun"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cloudcategory"></use>
        </svg>
      </div>
      <div class="footer-center">
        <input
          type="range"
          class="range"
          min="0"
          :max="mapStateObj.duration"
          v-model="mapStateObj.currentTime"
          step="0.05"
        />
      </div>
      <div class="footer-double">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cloudzhongbo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cloudshangyishou"></use>
        </svg>
        <svg class="icon play" aria-hidden="true" v-if="isBtnShow">
          <use xlink:href="icon-cloudzanting"></use>
        </svg>
        <svg class="icon play" aria-hidden="true" v-else>
          <use xlink:href="#icon-cloudkaishi"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cloudxiayishou"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cloudliebiao2"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.music-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column nowrap;

  height: 100%;
  width: 100%;
  .bgi {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(70px) brightness(60%);
    z-index: -1;
  }

  .detail-top {
    // background-color: #fff;
    display: flex;
    padding: 0.1rem 0.2rem 0 0.2rem;
    width: 100%;
    height: 1.3rem;
    align-items: center;
    .top-left {
      margin-right: auto;
      width: 50%;
      display: flex;
      align-items: center;
      .icon {
        stroke: #fff;
        fill: #fff;
        width: 0.6rem;
        height: 0.6rem;
        padding-right: 0.2rem;
      }

      .right-content {
        display: flex;
        flex-flow: column nowrap;
        padding: 0.1rem 0.3rem;
        .music-name {
          font-size: 0.38rem;
          max-width: 2rem;
          color: #fff;
        }
        .author-name {
          color: #bbb;
          font-size: 0.22rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 5rem;
        }
      }
    }
    .top-right .icon {
      stroke: #ccc;
      fill: #ccc;
    }
  }
  .detail-content {
    position: relative;
    width: 100%;
    height: 8.5rem;
    margin-bottom: auto;
    .needle {
      width: 2rem;
      z-index: 10;
      position: absolute;
      left: 3.55rem;
      transform-origin: 0.32rem 0.32rem;
      transform: rotate(-10deg);
      transition: all 2s;
      &.active {
        transform: rotate(0deg);
      }
    }
    .album {
      width: 3.75rem;
      height: 3.75rem;
      border-radius: 50%;
      position: absolute;
      left: 1.875rem;
      top: 2rem;
      // background-image: url(https://p1.music.126.net/Ak2mqnmim2sFjxKAYnRb-A==/109951163085080176.jpg);
      // background-color: #aaaaaa3d;
      // background-size: cover;
      // box-shadow: 0 0 .02rem rgba(0, 0, 0, 1);
      animation: rotate_al 10s linear infinite;
      animation-play-state: paused;
      &.active {
        animation-play-state: running;
      }
    }
    @keyframes rotate_al {
      0% {
        transform: rotateZ(0deg);
      }
      100% {
        transform: rotateZ(360deg);
      }
    }
    .album-wrapper {
      width: 6rem;
      height: 6rem;
      position: absolute;
      left: 0.75rem;
      top: .9rem;
      border-radius: 50%;
      position: relative;
      background-image: url(@/assets/cd.png);
      background-size: cover;
      transform: rotate(90deg);
      padding: 1rem;
    }
  }
  .detail-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #ffffff66;
    height: 3.8rem;
    padding: 0.3rem 0.4rem;
    width: 100%;
    .footer-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 1rem;
      .icon {
        fill: currentColor !important;
        stroke: currentColor !important;
      }
    }
    .footer-center {
      width: 100%;
      height: 0.6rem;
      .range {
        width: 100%;
        height: 100%;
      }
    }
    .footer-double {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      height: 1.6rem;
      .icon {
        fill: currentColor !important;
        stroke: currentColor !important;
        width: 0.6rem;
        height: 0.6rem;
        &.play {
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    }
  }
}
</style>

<script setup>
import MyMarquee from "./MyMarquee.vue";
import { useStore, mapState } from "vuex";
import { reactive, onMounted, ref, watch } from "vue";
const props = defineProps(["musicList", "isBtnShow", "play", "pause"]);
const store = useStore();
const mapStateObj = mapState([
  "lyricList",
  "currentTime",
  "playListIndex",
  "playList",
  "duration",
  "playingId"
]);
const myAlbum = ref();
const myNeedle = ref();

const quitMusicDetail = function () {
  store.commit("updateIsDetailShow", false);
};

const changeMusic = function() {
  const album = myAlbum.value;
  album.style.backgroundImage = `url(${props.musicList.al.picUrl})`;
}
watch(store.state.playingId,()=>{
})
onMounted(() => {
  console.log("hello");
});
</script>
