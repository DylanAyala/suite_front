<template>
  <v-container fluid class="login-bg login-blur fill-height">
    <v-row class="login-blur" align="center" justify="center">
      <v-col cols="6" sm="10" md="6" xl="4" class="pa-0">
        <div class="card-bg"></div>
      </v-col>
      <v-col cols="6" sm="10" md="6" xl="4" :rounded="0" class="pa-0">
        <v-card class="elevation-12 pa-8 rounded-lg alto" :rounded="0">
          <v-toolbar color="#ffffff" style="height: 100px">
            <v-row class="">
              <v-col cols="12" class="pa-0" align="center"
                ><h1
                  class="
                    welcome-text
                    font-weight-bold
                    text-decoration-underline
                  "
                >
                  WELCOME!
                </h1>
                <p></p
              ></v-col>
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
          <v-card-actions class="pt-1" align="center" justify="center">
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
                  class="rounded-l-xl elevation-6 button-login-havas"
                >
                  <!--<v-img src="../components/assets/logo-havas-blue.svg"></v-img>-->
                  <p class="text-white login-text">havas login</p>
                </v-btn>
              </v-col>
              <v-col cols="6" class="py-1 text-center pl-0">
                <v-btn
                  :rounded="0"
                  class="rounded-r-xl elevation-4 button-request-access"
                  @click="auth"
                  min-width="100%"
                  ><p style="color: #01579b" class="login-text">
                    Request Access
                  </p></v-btn
                >
              </v-col>
              <v-col cols="12" class="py-1 text-center mt-2">
                <v-btn
                  class="rounded-xl elevation-6 button-login-2"
                  @click="auth"
                  min-width="100%"
                  style="background-color: #01579b"
                  ><p class="login-text-2">LogIn</p></v-btn
                >
              </v-col>
            </v-row>
          </v-card-actions>

          <v-row align="center" justify="center" class="mt-12">
            <v-col cols="12" class="pa-0 title-logo"></v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-snackbar
        v-model="snackbar"
        timeout="10000"
        color="red-darken-2"
        vertical
      >
        <div class="text-subtitle-1 pb-2">Error into LogIn</div>

        <p>Invalid email or password</p>

        <template v-slot:actions>
          <v-btn color="white" variant="text" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
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
      snackbar: false,
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
      if (this.getUserInvalid === false) {
        this.snackbar = true;
      }
    },
  },
};
</script>

<style scoped>
.welcome-text {
  color: #01579b;
  font-size: 48px;
}
.alto {
  height: 600px;
}
.login-blur {
  height: 100vh;
}
.login-text {
  font-family: "Closeness", Helvetica, Arial;
  font-size: 14px;
}
.login-text-2 {
  font-family: "Closeness", Helvetica, Arial;
  font-size: 16px;
  color: white;
}
.login-bg {
  background-image: url("../components/assets/fondo-login-blur.jpg") !important;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
}
.card-bg {
  background-image: url("../components/assets/no-activados-img1b.png") !important;
  background-size: cover;
  background-position: right;
  height: 500px;
}
.card-bg-2 {
  background-image: url("../components/assets/no-activados-img2b.png") !important;
  background-size: cover;
  background-position: right;
  height: 500px;
}
.title-logo {
  background-image: url("../components/assets/mx-logo-blue-full.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 100px;
  opacity: 0.4;
}
.button-login {
  height: 40px;
}
.button-login-2 {
  height: 40px;
}
</style>