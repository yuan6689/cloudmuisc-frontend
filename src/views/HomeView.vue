<template>
  <div class="home">
    <top-nav></top-nav>
    <swipe-top></swipe-top>
    <icon-list></icon-list>
    <music-list></music-list>
  </div>
</template>

<script>
import TopNav from "@/components/Home/TopNav.vue"
import SwipeTop from "@/components/Home/SwipeTop.vue"
import IconList from "@/components/Home/IconList.vue"
import MusicList from "@/components/Home/MusicList.vue"

// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
    TopNav,
    SwipeTop,
    IconList,
    MusicList
  }
}
</script>

<style lang="less"></style>