<template>
  <div class="swipe-top">
    <van-swipe :autoplay="3000" lazy-render indicator-color="#fff" class="my-swipe">
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { getBanner } from "@/request/api/home"
import { onMounted, reactive } from "vue"

const state = reactive({
  images:[]
});
onMounted(async () => {
  let res = await getBanner();
  state.images = res.data.banners;
})
</script>

<style lang="less" scoped>
.my-swipe {
  width: 100%;
  height: 3rem;
  // margin-top: .5rem;
  .van-swipe-item {
    text-align: center;
    img {
      width: 7.3rem;
      height: 3rem;
      border-radius: .2rem;
    }
  }
}
</style>