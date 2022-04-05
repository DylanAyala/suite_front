<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>My files</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn variant="text" icon="mdi-magnify"></v-btn>

    <v-btn variant="text" icon="mdi-filter"></v-btn>

    <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" bottom temporary>
    <v-list :items="items"></v-list>
  </v-navigation-drawer>
</template>



<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "AppBarUserMenu",
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: "Foo",
        value: "foo",
      },
      {
        title: "Bar",
        value: "bar",
      },
      {
        title: "Fizz",
        value: "fizz",
      },
      {
        title: "Buzz",
        value: "buzz",
      },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    ...mapActions(["logout", "checkAuth"]),
  },
  computed: {
    getSrc: function () {
      if (this.me && this.me.avatarurl) {
        return this.me.avatarurl;
      } else {
        return this.src;
      }
    },
    getUsername: function () {
      return this.me.username;
    },
    getEmail: function () {
      return this.me.email;
    },
    ...mapState({
      me: (state) => state.auth.me,
    }),
  },
};
</script>

<style scoped>
</style>