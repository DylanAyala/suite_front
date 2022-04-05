<template>
  <AppBarUserMenu></AppBarUserMenu>
</template>

<script>
import AppBarUserMenu from "../../user/auth/components/AppBarUserMenu.vue";
export default {
  name: "layout_",
  data: () => ({}),
  components: {
    AppBarUserMenu,
  },
};
</script>
<style>
html {
  overflow-y: auto;
}
::-webkit-scrollbar {
  width: 0px;
}
.v-toolbar {
  flex: 0 0 0 !important;
}
</style>
<style lang="sass">
$tabs-item-hover-opacity: 0.9
$tabs-item-focus-opacity: 0.9
</style>