<template>
  <div class="child-app-container" ref="childAppContainer"></div>
  <!-- 这里是子应用的容器 -->
</template>

<script setup>
import { lifeCycle, render } from "qiankun";
import { ref, onMounted } from "vue";
const childAppContainer = ref(null);
onMounted(() => {
  render({
    container: ref.value, // 将容器传递给渲染函数
  });
});

// 导出生命周期钩子函数和渲染函数
const bootstrap = lifeCycle.bootstrap;
const mount = lifeCycle.mount;
const unmount = lifeCycle.unmount;

// export default { bootstrap, mount, unmount };
</script>
