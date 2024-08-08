<template>
  <div>
    <a-row>
      <a-col :span="20">
        <a-textarea v-model:value="prompt" placeholder="prompt" :rows="4" />
      </a-col>
      <a-col :span="4">
        <a-button
          style="height: 100%"
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
      <component v-if="showComponent" :is="dinamicComponent"></component>
      <div v-else>{{ codeStr }}</div>
    </a-card>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import api from "@/api/article.js";
import * as designIcons from "@ant-design/icons-vue"
import { loadModule } from "vue3-sfc-loader";
import * as Vue from "vue";

// 每一个item的结构
// {
//     role: 'user', // assistant
//     content: [
//         {
//             type: 'text',
//             text: '',
//         }
//     ]
// }
const history = ref([]);
const showComponent = ref(false)

const systemMessage =
  ref(`你是一个资深的前端助手，并且精通javascript，html，css、vue3，vue-routers资深前端。
回复的内容为vue3的组件字符串对象，不要赘述其他任何文字。
如果使用到一些工具，请使用：UI库ant-design-vue@^3.2.11，axios@1.4.0，使用<script setup>语法; 
以下是一个实例demo：
<template>
    <div>{{ message }} - Count: <span class="count-number">{{ count }}</span></div>
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

const prompt = ref(`实现todoList, 功能完整， 使用ant-design-vue实现`);
const loading = ref(false);
const codeStr = ref("");
const dinamicComponent = ref(null);

const sendIssue = async () => {
  showComponent.value = false;

  loading.value = true;
  const params = {
    prompt: `${prompt.value}`,
    history: history.value,
    systemMessage: systemMessage.value,
  };
  const res = await api.claude3(params);
  codeStr.value = res.data;
  loading.value = false;
};

const renderComponent = async () => {
  showComponent.value = true;
  const options = {
    moduleCache: {
      vue: Vue,
      "@ant-design/icons-vue": designIcons,
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
  console.log(dinamicComponent.value);
};
</script>
<style scoped lang="scss"></style>
