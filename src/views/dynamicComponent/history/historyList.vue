<template>
  <a-modal
    v-model:visible="historyStore.showHistory"
    :mask="false"
    width="100%"
    :footer="null"
    wrap-class-name="full-modal"
    @cancel="historyStore.toggleShowHistory"
  >
    <div class="history-container">
      <template
        v-for="(history, index) in [1, 2, 3, 4, 5, 6].map((item) => ({
          title: item,
        }))"
        :key="index"
      >
        <a-card class="history-item" @click="switchSession">
          {{ history.title }}
        </a-card>
      </template>
    </div>
  </a-modal>
</template>

<script setup>
import { useHistoryStore } from "@/store/history.js";

const historyStore = useHistoryStore();
</script>

<style lang="less">
@import "@/styles/variables.less";

.history-container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-rows: 200px 200px; /* 定义两行，高度分别为 100px 和 200px */
  grid-template-columns: 1fr 1fr 1fr 1fr; /* 定义两列，比例为 1:2 */
  gap: 10px;
  .history-item {
    width: 300px;
  }
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
