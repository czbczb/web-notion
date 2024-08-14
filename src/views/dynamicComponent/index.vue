<template>
  <div class="ge-container">
    <div class="ge-chat">
      <navbar></navbar>
      <!-- <chatHistory></chatHistory> -->
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
      <renderComponent
        title="回复内容"
        :uiFrame="uiFrame"
        :jsFrame="jsFrame"
        :codeStr="codeStr"
      ></renderComponent>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import api from "@/api/chat.js";
// import chatHistory from "./history/index.vue";
import navbar from "./navbar.vue";

import useSession from "./useSession";
import { systemMessage } from "./config.js";
import renderComponent from "./dinamic/renderComponent.vue";

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

const prompt =
  ref(`实现todoList, 功能完整， 使用ant-design-vue实现,   需要包括删除，选择，清空所有，状态改变（未完成，已完成，已终止）
符合大众的审美观`);
const loading = ref(false);
const codeStr = ref("");

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
