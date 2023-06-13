<template>
  <div class="top-nav">
    <div class="top-left">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cloudcategory"></use>
      </svg>
    </div>

    <div class="top-content">
      <router-link to="/main/mine" active-class="active">我的</router-link>
      <router-link to="/main/home" active-class="active">发现</router-link>
      <!-- <router-link to="/main" active-class="active">云村</router-link>
      <router-link to="/main" active-class="active">视频</router-link> -->
    </div>

    <div class="top-right">
      <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
        <use xlink:href="#icon-cloudsearch"></use>
      </svg>
    </div>
  </div>
</template>

<script></script>

<style lang="less" scoped>
.top-nav {
  padding: .3rem .2rem .3rem .2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 100%;
  font-size: .4rem;
}

.active {
  font-weight: 700;
}
</style>
