<template>
  <div class="item-music-top">
    <img :src="props.playlist.coverImgUrl" alt="背景图片" class="bdimg" />
    <div class="item-left">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-cloudleft-arrow"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="item-right">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-cloudsearch"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-cloudliebiao2"></use>
      </svg>
    </div>
  </div>
  <div class="item-top-content">
    <div class="content-left">
      <OneItemMusic
        :picUrl="playlist.coverImgUrl"
        :playCount="playlist.playCount"
      />
    </div>
    <div class="content-right">
      <div class="title">{{ playlist.name }}</div>
      <div class="center">
        <img class="avatar" :src="getCreator.avatarUrl" alt="头像" />
        <span class="creator-name">{{ getCreator.nickname }}</span>
        <span class="right-arrow">></span>
      </div>
      <div class="item-info">{{ playlist.description }}</div>
    </div>
  </div>
  <div class="item-bottom-content">
    <div class="icon-wrap">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cloudpinglun"></use>
      </svg>
      <div>{{ playlist.commentCount }}</div>
    </div>
    <div class="icon-wrap">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cloudfenxiang"></use>
      </svg>
      <div>{{ playlist.shareCount }}</div>
    </div>
    <div class="icon-wrap">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-clouddownload"></use>
      </svg>
      <div>{{ "下载" }}</div>
    </div>
    <div class="icon-wrap">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cloudshow_duoxuan"></use>
      </svg>
      <div>{{ "多选" }}</div>
    </div>
  </div>
</template>

<script setup>
import OneItemMusic from "@/components/Item/OneItemMusic.vue";
import { computed, onMounted } from "vue";
const props = defineProps({
  playlist: Object,
});

let creator = {};

onMounted(() => {
  if (props.playlist.creator == undefined) {
    // props.playlist.creator = JSON.parse(sessionStorage.getItem("playlist")).creator;
    creator = JSON.parse(sessionStorage.getItem("itemDetail"))?.playlist
      .creator;
  }
});

const getCreator = computed(() => {
  return props.playlist.creator || creator;
});
</script>

<style lang="less" scoped>
.item-music-top {
  display: flex;
  width: 100%;
  height: 1rem;
  align-items: center;
  position: relative;
  .bdimg {
    position: fixed;
    filter: blur(60px);
    z-index: -1;
    width: 100%;
    height: 14rem;
  }
  .item-left {
    margin-right: auto;
    font-size: 0.4rem;
    color: #fff;
    margin-left: 0.2rem;
    display: flex;
    align-items: center;
    .icon {
      margin-right: 0.6rem;
    }
  }
  .item-right {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    margin-right: 0.2rem;
    .icon {
      fill: #fff;
    }
  }
}
.item-top-content {
  display: flex;
  justify-content: space-around;
  color: #fff;
  margin-top: 5%;
  .content-left {
    flex-basis: 2.6rem;
    height: 2.6rem;
  }
  .content-right {
    flex-basis: 55%;
    height: 2.6rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    .right-arrow {
      font-size: 0.4rem;
      color: #ccc;
      margin-left: 0.2rem;
    }
    .title {
      font-size: 0.3rem;
      font-weight: bold;
    }
    .center {
      width: 100%;
      height: 0.6rem;
      color: #ccc;
      .avatar {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        vertical-align: middle;
      }
      .creator-name {
        margin-left: 0.1rem;
      }
    }
    .item-info {
      display: inline-block;
      width: 95%;
      height: 0.65rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 0.24rem;
      color: #ccc;
    }
  }
}
.item-bottom-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  width: 100%;
  height: 1.7rem;
  .icon-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      margin-top: 0.1rem;
    }
  }
}
</style>
