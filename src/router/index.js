import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "NotionList",
    children: [
      {
        path: "list",
        name: "list",
        component: () => import("../views/notion/NotionList.vue"),
      },
      {
        path: "describe",
        name: "describe",
        component: () => import("../views/notion/DescribeView.vue"),
      },
      {
        path: "create",
        name: "create",
        component: () => import("../views/notion/NotionView.vue"),
      },
    ],
  },
  {
    // history模式需要通配所有路由，详见vue-router文档
    path: "/children1/:pathMatch(.*)*", // 这里与上面的 activeRule 对应
    name: "ChildAppContainer",
    title: "children1",
    meta: {},
    component: () => import("../views/children/ChildAppContainer.vue"), // 这里用一个容器组件来作为该路由的组件
  },

  {
    path: "/textToAll",
    name: "textToAll",
    title: "文本转换",
    children: [
      {
        path: "tts",
        name: "tts",
        component: () => import("../views/textToAll/textToSpeed.vue"),
      },

      {
        path: "ttv",
        name: "ttv",
        component: () => import("../views/textToAll/textToMp4.vue"),
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
        component: () => import("../views/graph/d3Tree.vue"),
      },

      {
        path: "jinjing360",
        name: "jinjing360",
        component: () => import("../views/graph/map/tengxunMap.vue"),
      },
      {
        path: "globalMap",
        name: "globalMap",
        component: () => import("../views/graph/globalMapWithNode.vue"),
      },
    ],
  },
  {
    path: "/quillEditor",
    name: "quillEditor",
    component: () => import("../views/quillEditor.vue"),
  },
  {
    path: "/video",
    name: "playVideo",
    component: () => import("../views/video/playVideo.vue"),
  },
  {
    path: "/virtualScroller",
    name: "virtualScroller",
    component: () => import("../views/virtualScroller.vue"),
  },
  {
    path: "/postReadStream",
    name: "postReadStream",
    component: () => import("../views/postReadStream.vue"),
  },
  {
    path: "/hotAnimation",
    name: "hotAnimation",
    children: [
      {
        path: "cubicBezier",
        name: "cubicBezier",
        component: () => import("../views/hotAnimation/cubicBezier.vue"),
      },
      {
        path: "animationTimeLine",
        name: "animationTimeLine",
        component: () => import("../views/hotAnimation/animationTimeLine.vue"),
      },
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
      {
        path: "triangleAnimation",
        name: "triangleAnimation",
        component: () => import("../views/hotAnimation/triangleAnimation.vue"),
        title: "三角形",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!window.history.state.current) window.history.state.current = to.fullPath
  if (!window.history.state.back) window.history.state.back = from.fullPath
  // 手动修改history的state
  return next()
})

export { routes };

export default router;
