<template>
  <div class="history-container">
    <a-timeline mode="alternate">
      <template v-for="(entry, index) in currentHistory" :key="index">
        <a-timeline-item
          :color="entry.role === 'user' ? '#1890ff' : '#52c41a'"
          :label="formatTime(entry.timestamp)"
        >
          <div :class="entry.role">
            <p v-for="(contentItem, contentIndex) in entry.content" :key="contentIndex">
              <template v-if="contentItem.type === 'text'">
                {{ contentItem.text }}
              </template>
              <!-- 这里可以扩展其他类型的内容展示 -->
            </p>
          </div>
        </a-timeline-item>
      </template>
    </a-timeline>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useSession from './useSession'; // 确保这个路径指向您的 useSession hook 文件

const { currentSessionId, currentHistory } = useSession();

const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};
</script>

<style scoped>
.history-container {
  max-width: 600px;
  margin: auto;
}

.user {
  margin-left: auto; /* 居右显示 */
  padding: 10px 15px;
  background-color: #e6f7ff; /* 浅蓝色底 */
  border-radius: 5px;
  color: #1890ff; /* 例如，蓝色文本 */
}

.assistant {
  margin-right: auto; /* 居左显示 */
  padding: 10px 15px;
  background-color: #eaffd0; /* 浅绿色底 */
  border-radius: 5px;
  color: #52c41a; /* 例如，绿色文本 */
}

p {
  margin: 0;
  padding: 5px 0;
}
</style>