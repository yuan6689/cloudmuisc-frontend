<template>
  <div class="one-item-music">
    <img :src="props.picUrl" />
    <span class="play-count">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cloud24gl-play"></use>
      </svg>
      <span>{{ changeCount(props.playCount) }}</span>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  picUrl: String,
  playCount: Number,
});

const changeCount = function (num) {
  if (num > 10000000) {
    return (num / 10000000).toFixed(1) + "千万";
  } else if (num > 10000) {
    return (num / 10000).toFixed(1) + "万";
  }
  return num;
};
</script>

<style lang="less">
.one-item-music {
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: auto;
    border-radius: 0.2rem;
  }
  .play-count {
    position: absolute;
    right: 0.24rem;
    z-index: 100;
    color: rgba(255, 255, 255, 0.821);
    padding-top: 0.05rem;
    text-align: center;
    vertical-align: baseline;
    .icon {
      width: 0.3rem;
      height: 0.3rem;
      fill: #fff;
      stroke: #fff;
      stroke-width: 30;
    }
  }
}
</style>
