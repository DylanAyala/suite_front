
<template>
  <router-view />
</template>


<script>
export default {
  name: "home_",
  components: {},
  data() {
    return {
      userAuthenticated: false,
    };
  },
  methods: {
    validateUser() {
      if (!this.userAuthenticated) {
        //this.$router.push("login");
      }
    },
  },
  created() {
    this.validateUser();
  },
};
</script>