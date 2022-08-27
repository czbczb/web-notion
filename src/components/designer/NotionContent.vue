<template>
  <LayoutItemVue v-for="(item, index) in config" :key="item.type">
    <template #menu>
      <FloatMenuVue
        :config="config"
        :configItem="item"
        :order="index"
        @removeConfigItem="(params) => emit('removeConfigItem', params)"
        @addConfigItem="(params) => emit('addConfigItem', params)"
      ></FloatMenuVue>
    </template>
    <ContenteditableItem
      :configItem="item"
      :order="index"
      :config="config"
      @removeConfigItem="(params) => emit('removeConfigItem', params)"
      @addConfigItem="(params) => emit('addConfigItem', params)"
    ></ContenteditableItem>
  </LayoutItemVue>
  <LayoutItemVue>
    <template #menu>
      <FloatMenuVue
        :order="config.length"
        @removeConfigItem="(params) => emit('removeConfigItem', params)"
        @addConfigItem="(params) => emit('addConfigItem', params)"
      ></FloatMenuVue>
    </template>
    <ContenteditableItem
      :order="config.length"
      @addConfigItem="(params) => emit('addConfigItem', params)"
    ></ContenteditableItem>
  </LayoutItemVue>
</template>

<script setup>
import FloatMenuVue from "./FloatMenu.vue";
import LayoutItemVue from "./LayoutItem.vue";
import ContenteditableItem from "./ContenteditableItem.vue";
defineProps({
  config: Array,
});
const emit = defineEmits(["removeConfigItem", "addConfigItem"]);
</script>
