export default [
  {
    path: "/first",
    name: "first",
    component: () => import("../views/first.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/home.vue"),
  },
]