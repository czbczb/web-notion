<template>
  <div id="sub-container"></div>
</template>

<script setup>
import { start } from "qiankun";
import { registerApps } from "@/qiankun";
import { onMounted } from "vue";

onMounted(() => {
  if (!window.qiankunStarted) {
    window.qiankunStarted = true;
    registerApps();
    start({
      sandbox: {
        experimentalStyleIsolation: true, // 样式隔离
      },
    });
  }
});
</script>
