<template>
  <div class="main">
    <top-nav></top-nav>
    <router-view />
  </div>
</template>

<script>
import TopNav from "@/components/Home/TopNav.vue";

// @ is an alias to /src
export default {
  name: "MainView",
  components: {
    TopNav
  },
};
</script>

<style lang="less"></style>
