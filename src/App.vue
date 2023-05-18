<template>
  <router-view />
  <div class="placeholder"></div>
  <FooterMusic />
</template>

<style lang="less">
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
