import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/children1/" : "/"
  ),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);
  next();
});

export default router;
