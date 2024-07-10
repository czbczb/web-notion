<template>
  <div>
    <button @click="loadComponent">加载组件</button>
    <component :is="dynamicComponent" v-if="dynamicComponent"></component>
  </div>
</template>

<script setup>
import { ref, shallowRef, reactive, defineAsyncComponent, h } from "vue";
import {
  parse,
  compileScript,
  compileStyle,
} from "@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js";

const dynamicComponent = shallowRef(null);

const loadComponent = async () => {
  // 模拟从后端获取 Vue 组件字符串
  const componentString = `
        <template>
          <h1>{{message}}</h1>
        </template>
        <script setup>
          const message = ref(20);
        <\/script>
        <style>
          h1 {
            border: 1px solid #ccc;
          }
        </style>
      `;

  const parseObj = parse(componentString);

  const { script, scriptSetup, template, styles } = parseObj.descriptor;
  console.log(template, styles);
  const scriptContent = script ? script.content : scriptSetup.content;
  console.log(script, scriptSetup);
  const compiledScript = compileScript(parseObj.descriptor, {
    id: "dynamic-component",
  });

  // 创建一个新的 Vue 组件
  const component = defineAsyncComponent(() => {
    return new Promise((resolve) => {
      // 动态创建一个新的组件
      resolve({
        template: `<div>${template.content}</div>`,
        setup() {
          const scriptExports = {};
          const module = { exports: scriptExports };
          const scriptFunction = new Function(
            "exports",
            "module",
            "require",
            compiledScript.content
          );
          scriptFunction(scriptExports, module, require);

          return scriptExports.default.setup();
        },
        // 动态添加 style 部分
        mounted() {
          if (styles) {
            const styleElement = document.createElement("style");
            styleElement.textContent = styles;
            document.head.appendChild(styleElement);
          }
        },
        unmounted() {
          if (styles) {
            const styleElements = document.querySelectorAll("style");
            styleElements.forEach((el) => {
              if (el.textContent === styles) {
                el.remove();
              }
            });
          }
        },
      });
    });
  });

  // 设置动态组件
  dynamicComponent.value = component;
  console.log(dynamicComponent.value);
};
</script>
