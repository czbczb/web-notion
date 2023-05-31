<script setup>
import { ref, watchEffect } from "vue";

// 创建响应式变量
const text = ref(`要尝试使用其他的语音合成引擎，您可以通过以下步骤来进行配置：

检查浏览器支持的语音合成引擎：在使用 Web Speech API 进行语音合成时，可以通过 window.speechSynthesis.getVoices() 方法获取当前浏览器所支持的语音合成引擎列表。该方法返回一个 Voice 数组，每个 Voice 对象包含了语音名称、语音类型、语音性别、语音语种等信息。

const voices = window.speechSynthesis.getVoices();
console.log(voices); // 输出支持的语音合成引擎列表");`);
const synth = window.speechSynthesis;

// 监听 text 变化，更新 utterance 对象
const utterance = ref(new SpeechSynthesisUtterance());
watchEffect(() => {
  utterance.value.text = text.value;
});

// 开始朗读
const speak = () => {
  if (!synth) return;
  utterance.value.rate = 1; // 语速
  utterance.value.volume = 1; // 音量
  synth.speak(utterance.value);
};

// 停止朗诵
const cancelSpeak = () => {
  synth.cancel(utterance.value)
}
</script>

<template>
  <a-row class="container">
    <a-col span="24">
      <a-form-item label="输入要朗诵的文字">
        <a-textarea
          type="text"
          label="输入文字"
          v-model:value="text"
          showCount
          allowClear
          placeholder="请输入要转换的文本"
          :auto-size="{ minRows: 8 }"
        />
      </a-form-item>
    </a-col>
    <a-col span="24" style="text-align: center">
      <a-button type="primary" @click="speak">开始朗读</a-button>
      <a-button type="primary" @click="cancelSpeak">停止朗读</a-button>
    </a-col>
  </a-row>
</template>
<style>
.container {
  padding: 80px;
}
</style>
