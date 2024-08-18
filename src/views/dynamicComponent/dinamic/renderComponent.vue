<template>
  <a-card style="margin-top: 20px">
    <template #title> {{ title }} </template>
    <template #extra>
      <a-button v-if="codeStr" @click="renderComponentHandler" type="primary"
        >渲染</a-button
      >
      <div v-if="showComponent && codeStr" style="display: flex">
        <a-button class="cancel-modal-btn" @click="removeComponent"
          >取消</a-button
        >
        <saveComponent
          :title="title"
          :uiFrame="uiFrame"
          :jsFrame="jsFrame"
          :codeStr="codeStr"
        ></saveComponent>
      </div>
    </template>
    <component v-if="showComponent" :is="dinamicComponent"></component>
    <div v-else>{{ codeStr }}</div>
  </a-card>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import * as designIcons from "@ant-design/icons-vue";
import { loadModule } from "vue3-sfc-loader";
import * as Vue from "vue";
import saveComponent from "./saveComponent.vue";
// import { compileLess } from "./compileLess.js";

let dynamicScripts = []; // 存储动态加载的script元素

const props = defineProps(["codeStr", "title", "uiFrame", "jsFrame"]);

const dinamicComponent = ref(null);
const showComponent = ref(false);

const getOptions = () => {
  return {
    moduleCache: {
      vue: Vue,
      "@ant-design/icons-vue": designIcons,
      "ant-design-vue": import("ant-design-vue"),
    },
    async getFile() {
      return props.codeStr;
    },
    addStyle(textContent) {
      console.log(textContent);
      const style = Object.assign(document.createElement("style"), {
        textContent,
      });
      const ref = document.head.getElementsByTagName("style")[0] || null;
      document.head.insertBefore(style, ref);
    },
  };
};

const renderComponentHandler = async () => {
  showComponent.value = true;
  await loadAsyncScript();
  const componentUrl = "http://localhost:8080/remote-component.vue";
  dinamicComponent.value = defineAsyncComponent(async () => {
    return await loadModule(componentUrl, getOptions());
  });
};

async function loadAsyncScript() {
  // 正则表达式匹配 import 语句
  const importRegex = /import\s+[^'"]+(?:'|")([^'"]+)(?:'|")/g;
  let match;
  const loadPromises = [];

  // 动态加载每个依赖
  while ((match = importRegex.exec(props.codeStr)) !== null) {
    const [, modulePath] = match;
    if (isCDNPath(modulePath)) {
      loadPromises.push(loadModuleFromCDN(modulePath));
    }
  }

  // 等待所有依赖加载完成
  await Promise.all(loadPromises);
}

function isCDNPath(path) {
  // 这里可以添加逻辑来确定路径是否指向CDN
  return path.includes("cdn.jsdelivr.net");
}

function loadModuleFromCDN(path) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = path;
    script.async = true; // 异步加载
    script.defer = true; // 确保按顺序执行
    script.onload = () => resolve(window.html2canvas); // 假设全局变量是html2canvas
    script.onerror = reject;

    // 添加标记
    script.setAttribute("data-dynamic-import", "true");
    dynamicScripts.push(script); // 存储script元素引用

    document.head.appendChild(script);
  });
}

// 辅助函数：在需要时删除所有动态加载的script
function removeComponent() {
  dynamicScripts.forEach((script) => {
    script.parentNode.removeChild(script);
  });
  dynamicScripts = []; // 清空引用列表
  dinamicComponent.value = null; // 清空组件
}
</script>
<style scoped lang="scss">
.cancel-modal-btn {
  margin-right: 4px;
}
</style>
