export default {
  subApps: [
    {
      name: "children1",
      // 修改子应用配置的entry
      entry: "//localhost:8080",
      container: "#sub-container",
      activeRule: "/children1",
      publicPath: "/children1",
    },
    // {
    //   name: "children2",
    //   entry: "//localhost:8081",
    //   container: "#app",
    //   activeRule: "/children1",
    // },
  ],
};
