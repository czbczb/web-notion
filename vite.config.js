import { fileURLToPath, URL } from "node:url";
// import styleImport from "vite-plugin-style-import";
import legacy from "@vitejs/plugin-legacy";
import Components from "unplugin-vue-components/vite";
// 依赖按需自动导入
import AutoImport from "unplugin-auto-import/vite";

import visualizer from "rollup-plugin-visualizer";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import compressPlugin from "vite-plugin-compression";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { viteMockServe } from "vite-plugin-mock";
import { configManualChunk } from "./src/optimizer";
// import { ConfigEnv } from 'vite'
// import { UserConfigExport, ConfigEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    open: true,
    port: 5173,
    proxy: {
      //通过代理实现跨域
      "/api": {
        // target: "https://maxcloud-api-test.spotmaxtech.com/api", //替换的域名地址
        target: "http://localhost:3000", //替换的域名地址
        changeOrigin: true, //开启代理，表示允许跨域
        rewrite: (path) => path.replace(/^\/api/, ""), //重写路径，替换字符串"/path"
      },
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: configManualChunk,
      },
    },
  },
  // 强制预构建插件包
  optimizeDeps: {
    include: [
      `monaco-editor/esm/vs/language/json/json.worker`,
      `monaco-editor/esm/vs/language/css/css.worker`,
      `monaco-editor/esm/vs/language/html/html.worker`,
      `monaco-editor/esm/vs/language/typescript/ts.worker`,
      `monaco-editor/esm/vs/editor/editor.worker`,
    ],
  },
  plugins: [
    vue(),
    vueJsx(),
    viteMockServe({
      mockPath: "./src/mock",
      supportTs: false, //如果使用 js发开，则需要配置 supportTs 为 false
    }),
    // UI组件按需加载、自动导入: 方案一
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: "ant-design-vue",
    //       esModule: true,
    //       resolveStyle: (name) => {
    //         return `ant-design-vue/es/${name}/style/index`;
    //       },
    //     },
    //   ],
    // }),
    Components({
      resolvers: [
        // 1、UI框架组件按需导入： Resolver加载器
        // (name) => {
        //   // where `name` is always CapitalCase
        //   if (name.startsWith('Van'))
        //     return { importName: name.slice(3), path: 'vant' }
        // },
        AntDesignVueResolver(), // ant-design-vue
        // ElementPlusResolver(), // Element Plus
        // VantResolver(), // Vant
      ],

      // 2、项目组件的自动按需导入
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue"],

      // allow auto import and register components
      include: [/\.vue$/, /\.vue\?vue/],

      djs: "src/components.d.ts",
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        // "vue-i18n",
        // "@vueuse/head",
        // "@vueuse/core",
      ],
      djs: "src/auto-imports.d.js",
    }),

    // 依赖分析可视化
    visualizer({
      filename: "./node_modules/.cache/visualizer/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    compressPlugin({
      ext: ".gz",
      deleteOriginFile: false,
    }),
    // Native ESM
    legacy({
      targets: ["defaults", "ie >= 11"],
      // IE11
      // 需要 regenerator-runtime
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  resolve: {
    alias: {
      // 别名处理
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 定制主题变量
          hack: `true; @import (reference) "${path.resolve(
            "src/assets/modifyVars.less"
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
});
