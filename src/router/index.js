import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "NotionList",
    children: [
      {
        path: "list",
        name: "list",
        component: () => import("../views/NotionList.vue"),
      },
      {
        path: "describe",
        name: "describe",
        component: () => import("../views/DescribeView.vue"),
      },
      {
        path: "create",
        name: "create",
        component: () => import("../views/NotionView.vue"),
      },
    ],
  },

  {
    path: "/textToAll",
    name: "textToAll",
    title: "文本转换",
    children: [
      {
        path: "tts",
        name: "tts",
        component: () => import("../views/textToSpeed.vue"),
      },

      {
        path: "ttv",
        name: "ttv",
        component: () => import("../views/textToMp4.vue"),
      },
    ],
  },

  {
    path: "/graph",
    name: "graph",
    children: [
      {
        path: "d3Tree",
        name: "d3Tree",
        component: () => import("../views/d3Tree.vue"),
      },

      {
        path: "jinjing360",
        name: "jinjing360",
        component: () => import("../views/map/tengxunMap.vue"),
      },
    ],
  },
  {
    path: "/quillEditor",
    name: "quillEditor",
    component: () => import("../views/quillEditor.vue"),
  },
  {
    path: "/virtualScroller",
    name: "virtualScroller",
    component: () => import("../views/virtualScroller.vue"),
  },
  {
    path: "/hotAnimation",
    name: "hotAnimation",
    children: [
      {
        path: "mouseScrollx",
        name: "mouseScrollx",
        component: () => import("../views/hotAnimation/mouseScrollx.vue"),
      },
      {
        path: "textEffectioncy",
        name: "textEffectioncy",
        component: () => import("../views/hotAnimation/textEffectioncy.vue"),
        title: "打字效果",
      },
      {
        path: "dragDemo",
        name: "dragDemo",
        component: () => import("../views/hotAnimation/dragDemo.vue"),
        title: "拖拽",
      },
      {
        path: "figmaToHtml",
        name: "figmaToHtml",
        component: () => import("../views/hotAnimation/figmaToHtml.vue"),
        title: "figma转换为html",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export { routes };

export default router;
