import { createRouter, createWebHistory } from "vue-router";
// ROOT PAGES
import HomeView from "@/views/Home.vue";
import Cases from "@/views/Cases";
import About from "@/views/About";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cases",
    name: "cases",
    component: Cases,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
