<template>
  <div ref="dynamicContainer"></div>
</template>

<script setup>
import { ref, h, render, onMounted, getCurrentInstance } from "vue";
import { loadModule } from "vue3-sfc-loader";
import * as Vue from "vue";

const vueInstance = getCurrentInstance();

const props = defineProps({
  componentString: {
    type: String,
    required: true,
  },
});

const dynamicContainer = ref(null);

const loadDynamicComponent = async () => {
  const options = {
    moduleCache: {
      vue: Vue, // Vue实例
    },
    getFile: () => props.componentString,
    addStyle: (textContent) => {
      const style = document.createElement("style");
      style.textContent = textContent;
      document.head.appendChild(style);
    },
  };

  try {
    const component = await loadModule("dynamic-component.vue", options);
    const vnode = h(component);
    render(vnode, dynamicContainer.value);
  } catch (error) {
    console.error("Failed to load component:", error);
  }
};

onMounted(() => {
  loadDynamicComponent();
});
</script>
