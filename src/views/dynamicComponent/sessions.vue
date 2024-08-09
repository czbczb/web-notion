<template>
    <div class="session-list" :class="{ 'collapse-list': collapse }">
        <a-button>新建会话</a-button>
      <a-list
        :data-source="sessions"
        item-layout="horizontal"
      >
        <template #renderItem="{ item }">
          <a-list-item
            :class="{ isActive: item.id === currentSessionId }"
            @click="switchSession(item.id)"
          >
            <template #actions>
              <a-tooltip title="Edit">
                <EditOutlined @click.stop="editSession(item)" />
              </a-tooltip>
              <a-tooltip title="Delete">
                <DeleteOutlined @click.stop="deleteSession(item.id)" />
              </a-tooltip>
            </template>
            {{ item.title }}
          </a-list-item>
        </template>
      </a-list>
      <a-button class="collapse" type="circle" @click="toggleCollapse">
        <RightOutlined v-if="collapse" />
        <LeftOutlined v-else />
      </a-button>
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect, onMounted } from 'vue';
  import { message } from 'ant-design-vue';
  import { EditOutlined, DeleteOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons-vue';
  import useSession from './useSession'; // 确保这个路径指向您的 useSession hook 文件
  
  const props = defineProps({
    sessions: Array
  });
  
  const { sessions: sessionsStore, currentSessionId, switchSession, deleteSession, editSession } = useSession();
  
  const collapse = ref(false);
  
  watchEffect(() => {
    // 确保 sessionsStore 与父组件传递的 sessions 保持同步
    sessionsStore.value = props.sessions;
  });
  
  function toggleCollapse() {
    collapse.value = !collapse.value;
  }
  
  onMounted(() => {
    // 组件挂载后，检查是否有存储的当前会话 ID
    const sessionId = localStorage.getItem('currentSessionId');
    if (sessionId) {
      switchSession(sessionId);
    }
  });
  </script>
  
  <style lang="less" scoped>
  .session-list {
    position: fixed;
    z-index: 200;
    width: 260px;
    height: 80vh;
    top: auto;
    left: 0;
    background: #FAFBFF;
    border-radius: 4px;
    box-shadow: 0 0 5px #afafaf;
    transition: all 0.3s linear;
    &.collapse-list {
        width: 60px;
        left: 5px;
    }
    .collapse{
        position: absolute;
        right: -20px;
        top: 40vh;
    }
  }
  .isActive {
    background: #f5f5f5;
  }

  </style>
  <style>
  .ant-empty-normal {
    display: none !important;
  }
  </style>