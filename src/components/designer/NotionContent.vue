<template>
  <LayoutItemVue v-for="(item, index) in config" :key="index">
    <template #menu>
      <FloatMenuVue
        :config="config"
        :configItem="item"
        :order="index"
        @removeConfigItem="(params) => emit('removeConfigItem', params)"
        @addConfigItem="(params) => emit('addConfigItem', params)"
      ></FloatMenuVue>
    </template>
    <component
      :configItem="item"
      :order="index"
      :config="config"
      @removeConfigItem="(params) => emit('removeConfigItem', params)"
      @addConfigItem="(params) => emit('addConfigItem', params)"
      :is="CurrentCompoent[item.component]"
    ></component>
    <!-- <ContenteditableItem
      v-if="item.type === 'p'"
      :configItem="item"
      :order="index"
      :config="config"
      @removeConfigItem="(params) => emit('removeConfigItem', params)"
      @addConfigItem="(params) => emit('addConfigItem', params)"
    ></ContenteditableItem> -->
    <!-- <HxCom
      v-else
      :configItem="item"
      :order="index"
      :config="config"
      @removeConfigItem="(params) => emit('removeConfigItem', params)"
      @addConfigItem="(params) => emit('addConfigItem', params)"
    ></HxCom> -->
  </LayoutItemVue>
</template>

<script setup>
import FloatMenuVue from "./FloatMenu.vue";
import LayoutItemVue from "./LayoutItem.vue";
import { reactive, defineAsyncComponent, markRaw } from "vue";
defineProps({
  config: Array,
});
// 动态引入组件
const CurrentCompoent = reactive({
  EditItem: markRaw(
    defineAsyncComponent(() => import("../form/ContenteditableItem.vue"))
  ),
  HxCom: markRaw(defineAsyncComponent(() => import("../form/hxCom.vue"))),
});

const emit = defineEmits(["removeConfigItem", "addConfigItem"]);
</script>
