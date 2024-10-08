import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "@/pages/WelcomePage.vue";
import MainPage from "@/pages/MainPage.vue";
import PetPage from "@/pages/PetPage.vue";
import ShopPage from "@/pages/ShopPage.vue";
import TaskPage from "@/pages/TaskPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: WelcomePage,
  },
  {
    path: "/main",
    name: "Main",
    component: MainPage,
    meta: { requiresAuth: true }, // 需要登入的頁面
  },
  {
    path: "/pet",
    name: "Pet",
    component: PetPage,
    meta: { requiresAuth: true }, // 需要登入的頁面
  },
  {
    path: "/shop",
    name: "Shop",
    component: ShopPage,
    meta: { requiresAuth: true }, // 需要登入的頁面
  },
  {
    path: "/task",
    name: "Task",
    component: TaskPage,
    meta: { requiresAuth: true }, // 需要登入的頁面
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfilePage,
    meta: { requiresAuth: true }, // 需要登入的頁面
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守衛：未登入時重定向到歡迎頁面
router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem("user")); // 簡單模擬驗證
  if (to.matched.some((record) => record.meta.requiresAuth) && !user) {
    next("/");
  } else {
    next();
  }
});

export default router;
