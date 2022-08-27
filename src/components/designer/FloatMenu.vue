<template>
  <a-card>
    <a-row>
      <a-col @click="addHxCom" v-for="(item, index) in state.hxList" :key="index">
        <b>{{ item }}</b>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup>
import { reactive, onBeforeMount, onMounted } from "vue";
const props = defineProps({
  config: Array,
  configItem: Object,
  order: Number,
});
const state = reactive({
  hxList: ["h1", "h2", "h3", "h4", "h5", "h6"],
});

function addHxCom() {
  console.log("order", props.order, props.configItem);
}
onBeforeMount(() => {
  console.log("2.组件挂载页面之前执行----onBeforeMount");
});
onMounted(() => {
  console.log("3.-组件挂载到页面之后执行-------onMounted");
});
</script>
<style scoped lang="scss"></style>
