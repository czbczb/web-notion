import { fileURLToPath, URL } from "node:url";
// import styleImport from "vite-plugin-style-import";
import Components from "unplugin-vue-components/vite";
import visualizer from 'rollup-plugin-visualizer';
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { viteMockServe } from "vite-plugin-mock";
// import { ConfigEnv } from 'vite'
// import { UserConfigExport, ConfigEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
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
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      djs: "src/components.d.js",

    }),

    // 依赖分析可视化
    visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ],
  resolve: {
    alias: {
      // 别名处理
      "@": fileURLToPath(new URL("./src", import.meta.url)),
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
