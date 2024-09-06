import { createRouter, createWebHistory } from "vue-router";

const routes = [

  {
    path: "/AdxGraph",
    name: "ADX Flow",
    component: () => import("../views/graph/vueFlow/adxFlow.vue"),
  },
  {
    path: "/MergeGraph",
    name: "Merger Flow",
    component: () => import("../views/graph/vueFlow/mergeFlow.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!window.history.state.current) window.history.state.current = to.fullPath;
  if (!window.history.state.back) window.history.state.back = from.fullPath;
  // 手动修改history的state
  return next();
});

export { routes };

export default router;
