<script setup>
import { RouterView, useRouter } from "vue-router";
import { ref } from "vue";
import { routes } from "@/router";

const router = useRouter();
const routerConfig = ref([]);
routerConfig.value = routes;

const headerStyle = ref({
  position: "fixed",
  zIndex: 1,
  width: "100%",
  padding: 0,
});
const contentStyle = ref({
  padding: "0 50px",
  marginTop: "64px",
  background: "#fff",
});

const goRouter = (event) => {
  console.log(event);
  router.push({ name: event.key });
};
</script>

<template>
  <a-layout class="layout">
    <a-layout-header theme="light" :style="headerStyle">
      <a-menu
        class="menuWrapper"
        mode="horizontal"
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
</template>

<style scoped></style>
