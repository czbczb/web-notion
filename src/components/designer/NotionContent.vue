<template>
  <LayoutItemVue
    v-for="(item, index) in config"
    :key="index"
    :markerPosition="state.markerPosition"
  >
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
    <template #marker>
      <MarkerItem
        :markerPosition="state.markerPosition"
        :order="index"
        @updateConfigItem="(params) => emit('updateConfigItem', params)"
      ></MarkerItem>
    </template>
    <component
      :configItem="item"
      :order="index"
      :config="config"
      :focusOrder="focusOrder"
      @updateMarkerPosition="updateMarkerPosition"
      @setFocusOrder="(params) => emit('setFocusOrder', params)"
      @removeConfigItem="(params) => emit('removeConfigItem', params)"
      @addConfigItem="(params) => emit('addConfigItem', params)"
      @updateConfigItem="(params) => emit('updateConfigItem', params)"
      :is="state[item.component]"
    ></component>
  </LayoutItemVue>
</template>

<script setup>
import FloatMenuVue from "./FloatMenu.vue";
import LayoutItemVue from "./LayoutItem.vue";
import MarkerItem from "./markerItem.vue";
import { reactive, defineAsyncComponent, markRaw } from "vue";
defineProps({
  config: Array,
  focusOrder: Number,
});

// 动态引入组件
const state = reactive({
  markerPosition: {
    X: 0,
    y: 0,
  },
  EditItem: markRaw(
    defineAsyncComponent(() => import("../form/ContenteditableItem.vue"))
  ),
  HxCom: markRaw(defineAsyncComponent(() => import("../form/hxCom.vue"))),
  MonacoEditor: markRaw(
    defineAsyncComponent(() => import("../form/MonacoEditor.vue"))
  ),
});

function updateMarkerPosition(position) {
  state.markerPosition = position;
}

const emit = defineEmits([
  "removeConfigItem",
  "addConfigItem",
  "setFocusOrder",
  "updateConfigItem",
]);
</script>
