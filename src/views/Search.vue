<template>
    <div class="search-view">
      <SearchTop
      @search-occur="handleSearch"/>
      <SearchMusicList
      :musicList="state.songs"/>
    </div>
</template>

<script setup>
import SearchTop from '@/components/Search/SearchTop.vue';
import SearchMusicList from "@/components/Search/SearchMusicList.vue"
import { getSearchMusic } from "@/request/api/home.js"
import { reactive } from 'vue';
const state = reactive({
  songs: [],
})

const handleSearch = async (input) => {
  const {data} = await getSearchMusic(input);
  state.songs = data.result.songs;
}
</script>

<style lang="less" scoped>
.search-view {
  width: 100%;
}
</style>