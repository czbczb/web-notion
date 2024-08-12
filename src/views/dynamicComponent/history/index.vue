<template>
  <a-modal
    v-model:visible="visibleHistory.visible"
    :mask="false"
    width="100%"
    :footer="null"
    wrap-class-name="full-modal"
    @cancel="toggleHistory"
  >
    <div class="history-container">
      <template
        v-for="(history, index) in [1, 2, 3, 4, 5, 6].map((item) => ({
          title: item,
        }))"
        :key="index"
      >
        <a-card>
          {{ history.title }}
        </a-card>
      </template>
    </div>
  </a-modal>
</template>

<script setup>
import { computed, ref } from "vue";
import useSession from "../useSession"; // 确保这个路径指向您的 useSession hook 文件

const { currentSessionId, currentHistory, toggleHistory, visibleHistory } =
  useSession();

const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};
</script>

<style lang="less">
@import "@/styles/variables.less";

.history-container {
  max-width: 600px;
  margin: auto;
}

.full-modal {
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
    background: @background-color;
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>
