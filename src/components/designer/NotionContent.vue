<template>
  <LayoutItemVue v-for="(item, index) in config" :key="index">
    <template #menu>
      <FloatMenuVue
        :config="config"
        :configItem="item"
        :order="index"
        @removeConfigItem="emit('removeConfigItem')"
        @addConfigItem="emit('addConfigItem')"
      ></FloatMenuVue>
    </template>
    <ContenteditableItem
      :configItem="item"
      :order="index"
      :config="config"
      @removeConfigItem="emit('removeConfigItem')"
      @addConfigItem="emit('addConfigItem')"
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
