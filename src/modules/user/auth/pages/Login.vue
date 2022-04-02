<template>
  <v-container fluid class="login-bg login-blur fill-height pa-0">
    <v-row class="pt-16 login-blur" justify="center">
      <v-col cols="6" sm="10" md="6" xl="4" :rounded="0" class="pa-0">
        <v-card :rounded="0" class="elevation-12 card-bg rounded-l-lg alto"> </v-card>
      </v-col>
      <v-col cols="6" sm="10" md="6" xl="4" :rounded="0" class="pa-0">
        <v-card class="elevation-12 pa-8 rounded-r-lg alto" :rounded="0">
          <v-toolbar color="#ffffff" style="height: 100px">
            <v-row class="">
              <v-col cols="12" class="pa-0 title-logo" align="center"> </v-col>
            </v-row>
          </v-toolbar>
          <v-card-text class="pb-1">
            <v-form ref="form" v-model="valid">
              <v-text-field
                label="Username"
                name="login"
                prepend-inner-icon="mdi-account"
                type="text"
                v-model="form.username"
                :rules="nameRules"
                required
                color="blue"
                class="mr-9"
              ></v-text-field>
              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-inner-icon="mdi-lock"
                v-model="form.password"
                :rules="passRules"
                required
                solo
                filled
                color="blue"
                @click:append="pass = !pass"
                :type="pass ? 'text' : 'password'"
                :append-icon="pass ? 'mdi-eye' : 'mdi-eye-off'"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="pt-1">
            <v-row class="">
              <v-col
                cols="6"
                lg="6"
                md="12"
                sm="12"
                class="py-1 text-right pr-0 button-group-login"
              >
                <v-btn
                  :rounded="0"
                  style="background-color: #01579b"
                  min-width="100%"
                  @click="auth"
                  class="rounded-l-xl elevation-2 button-login"
                >
                  <!--<v-img src="../components/assets/logo-havas-blue.svg"></v-img>-->
                  <p class="text-white">havas login</p>
                </v-btn>
              </v-col>
              <v-col cols="6" class="py-1 text-center pl-0">
                <v-btn
                  :rounded="0"
                  class="rounded-r-xl elevation-1 button-login"
                  @click="auth"
                  min-width="100%"
                  ><p style="color: #01579b">Login</p></v-btn
                >
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login_",
  data: () => {
    return {
      form: {
        username: "",
        password: "",
      },
      valid: false,
      nameRules: [(v) => !!v || "Name is required"],
      passRules: [(v) => !!v || "Password is required"],
      pass: false,
    };
  },
  computed: {
    ...mapGetters(["getLoadingUser", "getUserInvalid"]),
  },
  methods: {
    ...mapActions(["login"]),
    auth() {
      if (this.$refs.form.validate()) {
        this.login(this.form);
      }
    },
  },
};
</script>

<style scoped>
.alto {
  height: 800px;
}
.login-blur {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  height: 100vh;
}
.login-bg {
  background-image: url("../components/assets/fondo-login.jpg") !important;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
}
.card-bg {
  background-image: url("../components/assets/blue.jpg") !important;
  background-size: cover;
  background-position: right;
}
.title-logo {
  background-image: url("../components/assets/mx-logo-blue-full.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 100px;
}
.button-login {
  height: 40px;
}
</style>