<template>
  <router-view />
  <div class="placeholder" v-show="$store.state.isFooterShow"></div>
  <FooterMusic v-show="$store.state.isFooterShow"/>
</template>

<style lang="less">
:root:root {
  --van-dialog-width: 6.4rem;
  --van-dialog-font-size: 0.4rem;
  --van-dialog-message-font-size: 0.3rem;
  --van-button-default-font-size: 0.3rem;
  --van-dialog-header-line-height: 0.7rem;
  --van-dialog-message-line-height: 0.6rem;
  --van-dialog-button-height: 0.7rem;

  --van-toast-font-size: 0.3rem;
  --van-toast-line-height: 0.7rem;
  --van-toast-text-padding: 0.3rem;
}
.icon {
  width: 0.5rem;
  height: 0.5rem;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
icon {
  width: 0.5rem;
  height: 0.5rem;
}
a {
  color: black;
}
.placeholder {
  margin-bottom: 1.2rem;
}
</style>

<script setup>
import FooterMusic from "@/components/Item/FooterMusic.vue";
</script>