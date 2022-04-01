import Home from "../../views/Home.vue";
import Login from "../user/auth/pages/Login.vue";

export const AppRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];
