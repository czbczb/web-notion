export default {
  subApps: [
    {
      name: "children1",
      // 修改子应用配置的entry

      // 修改为部署到服务器上的index.html的入口
      entry: "//localhost:8080",
        // process.env.NODE_ENV === "development"
        //   ? "//localhost:8080"
        //   : "/children/index.html",
      container: "#sub-container",
      activeRule: "/children1",
    },
    // {
    //   name: "children2",
    //   entry: "//localhost:8081",
    //   container: "#app",
    //   activeRule: "/children1",
    // },
  ],
};
