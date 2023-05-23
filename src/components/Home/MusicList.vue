<template>
  <div>
    <div class="music-list">
      <div class="music-top">
        <div class="title">发现好歌单</div>
        <div class="more" @click="updateMusicList">刷新推荐</div>
      </div>
      <div class="music-content">
        <van-swipe
          :loop="false"
          width="2.6rem"
          class="my-swipe"
          :show-indicators="false"
        >
          <van-swipe-item
            v-for="item in state.list"
            :key="item"
            class="swipe-item"
          >
            <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
              <!-- <img :src="item.picUrl" />
              <span class="play-count">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-cloud24gl-play"></use>
                </svg>
                <span>{{ changeCount(item.playCount) }}</span>
              </span> -->
              <OneItemMusic :picUrl="item.picUrl" :playCount="item.playCount"/>
              <div class="name">{{ item.name }}</div>
            </router-link>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.music-list {
  width: 90%;
  margin: 0 auto;

  .music-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem 0;

    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }

    .more {
      text-align: center;
      font-weight: 350;
      padding: 0 0.2rem;
      border: 1px solid rgba(0, 0, 0, 0.484);
      border-radius: 0.4rem;
    }
  }

  .music-content {
    .my-swipe {
      .swipe-item {
        // margin-right: 0.14rem;
        padding-right: 0.2rem;
        width: 2.2rem;
        height: 3.14rem;

        position: relative;

        // img {
        //   width: 100%;
        //   height: 2.4rem;
        //   border-radius: 0.2rem;
        // }
        // .play-count {
        //   position: absolute;
        //   right: 0.24rem;
        //   z-index: 100;
        //   color: rgba(255, 255, 255, 0.821);
        //   padding-top: 0.05rem;
        //   text-align: center;
        //   .icon {
        //     width: 0.3rem;
        //     height: 0.3rem;
        //   }
        // }
        .name {
          font-size: .24rem;
          height: .7rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>

<script setup>
import { getMusicList } from "@/request/api/home";
import { onMounted, reactive } from "vue";
import OneItemMusic from "@/components/Item/OneItemMusic.vue"

const state = reactive({
  list: [],
});

const updateMusicList = async function(){
  let { data } = await getMusicList();
  state.list = data.result;
}

onMounted(async () => {
  await updateMusicList();
});
</script>
