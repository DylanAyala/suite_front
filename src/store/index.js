import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import UserAuthStore from "../modules/user/auth/store/UserAuthStore";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth: UserAuthStore,
  },
  plugins: [
    createPersistedState({
      key: "suite",
      paths: ["auth"],
    }),
  ],
});
