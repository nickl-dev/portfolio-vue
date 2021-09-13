<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  // Components
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
@import "@/styles/global.scss";
</style>
