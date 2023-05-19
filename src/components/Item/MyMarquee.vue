<template>
  <div class="my-marquee-wrap">
    <div class="scroll">
      <p class="marquee"><slot></slot></p>
      <p class="copy"><slot></slot></p>
    </div>
  </div>
</template>

<script setup>
import { onUnmounted } from 'vue';
import rem from '@/plugin/myPlugins/getRem'
let count = null;
const move = function () {
  const maxWidth = document.querySelector(".my-marquee-wrap").clientWidth / rem;
  const scroll = document.querySelector(".scroll");
  let distance = 0;
  count = setInterval(()=>{
    distance -= 0.01;
    // console.log('-distance >= maxWidth: ', -distance, maxWidth);
    if(-distance >= maxWidth){
      distance = 0;
    }
    scroll.style.transform = `translateX(${distance}rem)`
  }, 40);
};
let timer = setTimeout(() => {
  move();
  clearTimeout(timer);
}, 1000);
onUnmounted(()=>{
  clearInterval(count);
})
</script>

<style lang="less" scoped>
.my-marquee-wrap {
  overflow: hidden;
  width: 100%;
  .scroll {
    display: flex;
    white-space: nowrap;
    word-break: keep-all;
    .marquee {
      margin-right: 0.5rem;
    }
  }
}
</style>
