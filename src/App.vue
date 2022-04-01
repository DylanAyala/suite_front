<template>
  <v-app class="">
    <v-main><Home /></v-main>
  </v-app>
</template>

<script>
import Home from "../src/views/Home.vue"
export default {
  name: "App",

  components: {
    Home
  },
  data: () => ({
    //
  }),
};
</script>

<style>
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
