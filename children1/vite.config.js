import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
// const publicPath = process.env.NODE_ENV === 'production' ? './' : '/children1/'

export default defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/children1/" : "./",
  base: process.env.NODE_ENV === "production" ? "/children1/" : "./",
  plugins: [
    vue(),
    qiankun("app-vue3", {
      useDevMode: true,
    }),
  ],

  // resolve: {
  //   alias: {
  //     "@": "/src",
  //   },
  // },
  server: {
    port: 8080,
    // 本地调试 放行
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  chainWebpack: (config) => {
    config.plugin("define").tap((args) => {
      args[0]["__webpack_public_path__"] = JSON.stringify("/children1/");
      return args;
    });
  },
  // build: {
  //   lib: {
  //     entry: "src/main.js",
  //     name: "children1",
  //     fileName: "children1",
  //     formats: ["umd"],
  //   },
  //   rollupOptions: {
  //     output: {
  //       // 指定 UMD 格式的全局变量名
  //       globals: {
  //         vue: "Vue",
  //       },
  //     },
  //   },
  // },
  // chainWebpack: (config) => {
  //   config.module.rule('fonts')
  //     .use('url-loader')
  //     .loader('url-loader')
  //     .options({
  //       limit: 4096, // 小于4kb将会被打包成 base64
  //       fallback: {
  //         loader: 'file-loader',
  //         options: {
  //           name: 'fonts/[name].[hash:8].[ext]',
  //           publicPath
  //         }
  //       }
  //     })
  //     .end();
  //   config.module.rule('images')
  //     .use('url-loader')
  //     .loader('url-loader')
  //     .options({
  //       limit: 4096, // 小于4kb将会被打包成 base64
  //       fallback: {
  //         loader: 'file-loader',
  //         options: {
  //           name: 'img/[name].[hash:8].[ext]',
  //           publicPath
  //         }
  //       }
  //     })
  // },
});
