<script setup>
import { RouterView, useRouter } from "vue-router";
import { ref } from "vue";
import { routes } from "@/router";
import { message } from "ant-design-vue";

// 全局配置 message
message.config({
  top: 100, // 消息距离顶部的位置
  duration: 3, // 消息显示的时长，单位秒
});
window.$message = message;

const router = useRouter();
const routerConfig = ref([]);

const selectedKeys = ref(["quillEditor"]);

routerConfig.value = routes;

const headerStyle = ref({
  position: "fixed",
  zIndex: 1,
  width: "100%",
  padding: 0,
});
const contentStyle = ref({
  padding: "20px 0",
  marginTop: "64px",
});

const goRouter = (event) => {
  selectedKeys.value = event.keyPath;
  localStorage.setItem("menu", JSON.stringify(selectedKeys.value));
  router.push({ name: event.key });
};

const getSelectedKeys = () => {
  const selectedKeysJson = localStorage.getItem("menu");
  if (selectedKeysJson) {
    selectedKeys.value = JSON.parse(selectedKeysJson);
  }
};

getSelectedKeys();
</script>

<template>
  <div style="height: 100%; width: 100%;">
    <a-layout class="layout">
      <a-layout-header theme="light" :style="headerStyle">
        <a-menu
          class="menuWrapper"
          mode="horizontal"
          v-model:selectedKeys="selectedKeys"
          @click="goRouter"
          :style="{ lineHeight: '64px' }"
        >
          <template v-for="menu in routerConfig">
            <a-sub-menu v-if="menu.children" :key="menu.name">
              <template #title>
                <strong>{{ menu.name }}</strong>
              </template>
              <a-menu-item v-for="sub in menu.children" :key="sub.name">
                <strong>
                  {{ sub.title || sub.name }}
                </strong></a-menu-item
              >
            </a-sub-menu>

            <a-menu-item v-else :key="menu.name">
              <strong>{{ menu.title || menu.name }}</strong>
            </a-menu-item>
          </template>
        </a-menu>
      </a-layout-header>

      <a-layout-content :style="contentStyle">
        <RouterView />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style scoped></style>
