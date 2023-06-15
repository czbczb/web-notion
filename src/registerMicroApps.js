import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "children1",
    entry: "//localhost:8080",
    container: "#sub-container",
    activeRule: "/children1",
  },
  // {
  //   name: "children2",
  //   entry: "//localhost:8081",
  //   container: "#app",
  //   activeRule: "/children1",
  // },
]);

start();
