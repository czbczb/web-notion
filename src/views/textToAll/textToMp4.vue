<template>
  <div>
    <a-textarea
      v-model:value="text"
      placeholder="请输入要转换的文本"
    ></a-textarea>
    <a-button @click="generateVideo">生成视频</a-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const text = ref("");

// 生成视频
const generateVideo = async () => {
  console.log(text.value)
};
</script>
