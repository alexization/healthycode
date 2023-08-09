import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/MainView.vue"),
  },
  {
    path: "/fitness",
    name: "fitness",
    component: () => import("../views/FitnessView.vue"),
  },
  {
    path: "/statistic",
    name: "statistic",
    component: () => import("../views/StatisticView.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("../views/CalendarView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
