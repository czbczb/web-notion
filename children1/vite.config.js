import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun("app-vue3", {
      useDevMode: true,
    }),
  ],
  base: process.env.NODE_ENV === "production" ? "/children1/" : "/",

  server: {
    port: 8080,
    // 本地调试 放行
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    lib: {
      entry: "src/main.js",
      name: "children1",
      fileName: "children1",
      formats: ["umd"],
    },
    rollupOptions: {
      output: {
        // 指定 UMD 格式的全局变量名
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
