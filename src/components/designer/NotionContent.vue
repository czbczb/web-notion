<template>
  <LayoutItemVue v-for="(item, index) in config" :key="index">
    <template #menu>
      <FloatMenuVue
        :config="config"
        :configItem="item"
        :order="index"
        :focusOrder="focusOrder"
        @setFocusOrder="(params) => emit('setFocusOrder', params)"
        @removeConfigItem="(params) => emit('removeConfigItem', params)"
        @addConfigItem="(params) => emit('addConfigItem', params)"
        @updateConfigItem="(params) => emit('updateConfigItem', params)"
      ></FloatMenuVue>
    </template>
    <component
      :configItem="item"
      :order="index"
      :config="config"
      :focusOrder="focusOrder"
      @setFocusOrder="(params) => emit('setFocusOrder', params)"
      @removeConfigItem="(params) => emit('removeConfigItem', params)"
      @addConfigItem="(params) => emit('addConfigItem', params)"
      @updateConfigItem="(params) => emit('updateConfigItem', params)"
      :is="CurrentCompoent[item.component]"
    ></component>
  </LayoutItemVue>
</template>

<script setup>
import FloatMenuVue from "./FloatMenu.vue";
import LayoutItemVue from "./LayoutItem.vue";
import { reactive, defineAsyncComponent, markRaw } from "vue";
defineProps({
  config: Array,
  focusOrder: Number,
});

// 动态引入组件
const CurrentCompoent = reactive({
  EditItem: markRaw(
    defineAsyncComponent(() => import("../form/ContenteditableItem.vue"))
  ),
  HxCom: markRaw(defineAsyncComponent(() => import("../form/hxCom.vue"))),
  MonacoEditor: markRaw(
    defineAsyncComponent(() => import("../form/MonacoEditor.vue"))
  ),
});

const emit = defineEmits([
  "removeConfigItem",
  "addConfigItem",
  "setFocusOrder",
  "updateConfigItem",
]);
</script>
