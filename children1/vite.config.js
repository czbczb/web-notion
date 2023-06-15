import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
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
