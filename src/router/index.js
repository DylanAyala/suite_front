import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import { AppRoutes } from "../modules/apps/AppRoutes";

const routes = [...AppRoutes];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    store.dispatch("checkAuth");

    if (!store.getters.isAuth) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
