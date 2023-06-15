import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "children1",
    entry: "//localhost:8080",
    container: "#app",
    activeRule: "/parent/child",
  },
  // {
  //   name: "children2",
  //   entry: "//localhost:8081",
  //   container: "#app",
  //   activeRule: "/children1",
  // },
]);

start();
