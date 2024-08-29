<template>
  <div class="ge-container">
    <div class="ge-chat">
      <navbar></navbar>
      <chatHistory></chatHistory>
      <div class="config-wrapper">
        <a-checkbox v-model:checked="cacheHistory">记住历史</a-checkbox>
        <a-select
          style="width: 200px"
          v-model:value="uiFrame"
          :options="uiFrameOptions"
        >
        </a-select>
        <a-select
          style="width: 200px; margin: 0 4px"
          v-model:value="jsFrame"
          :options="jsFrameOptions"
        >
        </a-select>
      </div>

      <a-row>
        <a-col :span="22">
          <a-textarea v-model:value="prompt" placeholder="prompt" :rows="4" />
        </a-col>
        <a-col :span="2">
          <a-button
            style="height: 100%; width: 100%"
            :loading="loading"
            @click="sendIssue"
            type="primary"
            >发送</a-button
          >
        </a-col>
      </a-row>

      <a-card style="margin-top: 20px">
        <template #title> 回复内容 </template>
        <template #extra>
          <a-button @click="renderComponent" type="primary">渲染</a-button>
        </template>
        <div id="demoRef">
          <DynamicVueLoader :componentString="vueComponentString" ></DynamicVueLoader>
        </div>
        <component v-if="showComponent" :is="dinamicComponent"></component>
        <div v-else>{{ codeStr }}</div>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import api from "@/api/article.js";
import * as designIcons from "@ant-design/icons-vue";
import { loadModule } from "vue3-sfc-loader";
import * as Vue from "vue";
import chatHistory from "./history/index.vue";
import navbar from "./navbar.vue";
import useSession from "./useSession";
import { systemMessage } from "./config.js";
import DynamicVueLoader from './DynamicVueLoader.vue';

const vueComponentString = ref(`
<template>
    <div>{{ message }} - Count: <span class="count-number">{{ count }}</span>
    <a-button>test</a-button>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const message = "这是一个动态加载的组件"
const count = 0

const increment = () => {
  count.value++;
}

const decrement = () => {
  count.value--;
}
<//script>

<style>
.count-number {
  color: #0B6EE2;
}
</style>
`);
const cacheHistory = ref(true);
const { currentSessionId, currentHistory, updateSession } = useSession();

const uiFrame = ref("ant-design-vue");
const uiFrameOptions = ref([
  {
    label: "ant-design-vue",
    value: "ant-design-vue",
  },
]);
const jsFrame = ref("vue3");
const jsFrameOptions = ref([
  {
    label: "vue3",
    value: "vue3",
  },
]);
const showComponent = ref(false);

const prompt =
  ref(`实现todoList, 功能完整， 使用ant-design-vue实现,   需要包括删除，选择，清空所有，状态改变（未完成，已完成，已终止）
符合大众的审美观`);
const loading = ref(false);
const codeStr = ref("");
const dinamicComponent = ref(null);

const pushHistory = (role, text) => {
  const history = [
    ...currentHistory.value,
    {
      role,
      content: [{ type: "text", text }],
    },
  ];
  updateSession(currentSessionId, {
    history,
    title: prompt.value.slice(0, 20),
  });
};

const sendIssue = async () => {
  showComponent.value = false;

  loading.value = true;
  const params = {
    prompt: `${prompt.value}`,
    history: currentHistory.value,
    systemMessage,
  };
  const res = await api.claude3(params);
  pushHistory("user", prompt.value);
  pushHistory("assistant", res.data);
  codeStr.value = res.data;
  loading.value = false;
};

const renderComponent = async () => {

  const antDesignVue = await import("ant-design-vue");

  const options = {
    moduleCache: {
      vue: Vue,
      "@ant-design/icons-vue": designIcons,
      "ant-design-vue": antDesignVue,
    },
    async getFile() {
      return codeStr.value;
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
  dinamicComponent.value = defineAsyncComponent(async () => {
    const res = await loadModule(
      "http://localhost:8080/remote-component.vue",
      options
    );

    return res;
  });

  showComponent.value = true;
};
</script>
<style scoped lang="less">
@import "@/styles/variables.less";
.config-wrapper {
  padding: 4px;
}
.ge-container {
  background: @background-color;
  height: 100vh;
}
.ge-chat {
  padding: 0 120px;
}
</style>
