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
    {
      path: "/tts",
      name: "tts",
      component: () => import("../views/textToSpeed.vue"),
    },
    {
      path: "/tts",
      name: "textEffectioncy",
      component: () => import("../views/textEffectioncy.vue"),
    },
    {
      path: "/ttv",
      name: "textEffectioncy",
      component: () => import("../views/textToMp4.vue"),
    },
    {
      path: "/d3Tree",
      name: "d3Tree",
      component: () => import("../views/d3Tree.vue"),
    },
  ],
});

export default router;
