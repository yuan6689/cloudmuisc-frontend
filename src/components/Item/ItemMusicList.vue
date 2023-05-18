<template>
  <div class="item-music-list">
    <div class="top-wrapper">
      <div class="left-content">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cloudbofang1"></use>
        </svg>
        <span class="play-all">播放全部</span>
        <span class="music-count">(共{{ itemList.length }}首)</span>
      </div>
      <div class="right-content">
        <span class="plus">+</span>
        <span class="sub-count">收藏 ({{ changeCount(subCount) }})</span>
      </div>
    </div>
    <div class="music-list-wrapper">
      <div class="item" v-for="(item, index) in itemList" key="index">
        <div class="left-wrapper" @click="playMusic(index, item.id)">
          <span class="song-number">{{ index + 1 }}</span>
          <div class="song-name-author">
            <span class="name">{{ item.name }}</span>
            <div class="author">
              <span v-for="(author, index2) in item.ar"
                ><span v-if="index2 >= 2"> / </span>{{ author.name }}</span
              >
            </div>
          </div>
        </div>
        <div class="right-wrapper">
          <svg class="icon play-now" aria-hidden="true" v-if="item.mv != 0">
            <use xlink:href="#icon-cloud24gl-playSquare"></use>
          </svg>
          <svg class="icon list" aria-hidden="true">
            <use xlink:href="#icon-cloudliebiao2"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.item-music-list {
  width: 100%;
  background-color: #fff;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  .top-wrapper {
    display: flex;
    width: 95%;
    height: 1rem;
    margin: 0 auto;
    align-items: center;
    .left-content {
      margin-right: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .icon {
        margin-right: 0.2rem;
        fill: #000;
      }
      .play-all {
        font-weight: bold;
      }
      .music-count {
        font-size: 0.3rem;
        color: #bbb;
      }
    }
    .right-content {
      height: 80%;
      line-height: 0.9rem;
      background-color: #ff0008;
      border-radius: 40px;
      color: #e1e1e1;

      display: flex;
      align-items: center;
      .sub-count {
        height: 100%;
        line-height: 0.8rem;
        // vertical-align: middle;
        padding: 0 0.2rem;
        // background-color: #bfc;
      }
      .plus {
        height: 115%;
        line-height: 0.8rem;
        vertical-align: top;
        font-size: 0.6rem;
        padding-left: 0.2rem;
        font-weight: lighter;
        // background-color: #abc;
      }
    }
  }
}
.music-list-wrapper {
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

<script setup>
import { mapMutations, useStore } from "vuex";
const store = useStore();
//KNOW: 这里 需要对 mutations 进行绑定, 不绑定 显示 this is undefined can't access "$store"
const mutations = mapMutations(["updatePlaylist", "updatePlaylistIndex", "updatePlayingId"]);
const newMutations = {};
Object.keys(mutations).forEach((key) => {
  newMutations[key] = mutations[key].bind({ $store: store });
});

const { updatePlaylist, updatePlaylistIndex, updatePlayingId } = newMutations;


const props = defineProps({
  subCount: Number,
  itemList: Object,
});

const playMusic = function (index, id) {
  updatePlaylist(props.itemList);
  updatePlaylistIndex(index);
  updatePlayingId(id)
};

const changeCount = function (num) {
  if (num > 10000000) {
    return (num / 10000000).toFixed(1) + "千万";
  } else if (num > 10000) {
    return (num / 10000).toFixed(1) + "万";
  }
  return num;
};
</script>
