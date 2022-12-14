import { createRouter, createWebHistory } from "vue-router";
import NotionList from "../views/NotionList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "designer",
      component: NotionList,
    },
    {
      path: "/describe",
      name: "describe",
      component: () => import("../views/DescribeView.vue"),
    },
    {
      path: "/create",
      name: "create",
      component: () => import("../views/NotionView.vue"),
    },
  ],
});

export default router;
