<template>
  <div class="music-list">
    <div class="item" v-for="(item, index) in musicList" :key="index">
      <div class="left-wrapper" @click="handleClick(item, index)">
        <span class="song-number">{{ index + 1 }}</span>
        <div class="song-name-author">
          <span class="name">{{ item.name }}</span>
          <div class="author">
            <span v-for="(author, index2) in item.artists"
              ><span v-if="index2 >= 2"> / </span>{{ author.name }}</span
            >
          </div>
        </div>
      </div>
      <div class="right-wrapper">
        <svg class="icon play-now" aria-hidden="true" v-if="item.mvid != 0">
          <use xlink:href="#icon-cloud24gl-playSquare"></use>
        </svg>
        <svg class="icon list" aria-hidden="true">
          <use xlink:href="#icon-cloudliebiao2"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from "vuex"
const props = defineProps(["musicList"]);
const store = useStore();

//TODO: 点击播放的功能
const handleClick = function(){
  const items = {

  }
}
</script>

<style lang="less" scoped>
.music-list {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  .item {
    display: flex;
    align-items: center;
    height: 1rem;
    width: 100%;
    .left-wrapper {
      margin-right: auto;
      display: flex;
      .song-number {
        vertical-align: middle;
        line-height: 1rem;
        padding: 0 0.2rem;
        width: 0.8rem;
        color: #bbb;
        font-size: 0.3rem;
        text-align: center;
      }
      .song-name-author {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-evenly;
        .name {
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 5rem;
        }
        .author {
          color: #bbb;
          font-size: 0.22rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 5rem;
        }
      }
    }
    .right-wrapper {
      .icon {
        fill: #bbb !important;
        stroke: #bbb !important;
        padding-right: 0.2rem;
        width: 0.7rem;
        height: 0.7rem;
      }
    }
  }
}
</style>
