<template>
  <div class="icon-list">
    <div class="icon-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cloudyinle"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="icon-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cloudFM_weixuanze"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="icon-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cloud-"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="icon-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cloudpaihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.icon-list {
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 2rem;
  .icon-item {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .icon {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>