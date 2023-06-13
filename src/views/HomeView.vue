<template>
  <div class="home">
    <swipe-top></swipe-top>
    <icon-list></icon-list>
    <music-list></music-list>
  </div>
</template>

<script>
import SwipeTop from "@/components/Home/SwipeTop.vue"
import IconList from "@/components/Home/IconList.vue"
import MusicList from "@/components/Home/MusicList.vue"

// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
    SwipeTop,
    IconList,
    MusicList
  }
}
</script>

<style lang="less"></style>