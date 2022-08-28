<template>
  <a-card>
    <a-row>
      <a-col
        @click="addHxCom"
        v-for="(item, index) in state.hxList"
        :key="index"
      >
        <b>{{ item.type }}</b>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup>
import { reactive, onBeforeMount, onMounted } from "vue";
import markdownCommand from '../markdownCommand'
const props = defineProps({
  config: Object,
  configItem: Object,
  order: Number,
  readOnly: {
    type: Boolean,
    default: false,
  },
  focusOrder: Number,
});
const state = reactive({
  hxList: markdownCommand,
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
