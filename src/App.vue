<template>
  <v-app>
    <layout v-if="setLayout">
      <v-main>
        <Home></Home>
      </v-main>
    </layout>
    <router-view></router-view>
  </v-app>
</template>

<script>
import layout from "./modules/layout/page/layout.vue";
import Home from "./views/Home.vue";
export default {
  name: "App",
  components: {
    layout,
    Home,
  },
  data: () => ({}),
  computed: {
    setLayout() {
      let flag = true;
      if (
        this.$route.path == "/login" ||
        this.$route.path == "/register" ||
        this.$route.path == "/register-success" ||
        this.$route.path.includes("/activation-user/")
      ) {
        flag = false;
      }
      return flag;
    },
  },
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

@font-face {
  font-family: "Closeness";
  src: local("Closeness"), url(./assets/fonts/Closeness.ttf) format("truetype");
}
</style>
