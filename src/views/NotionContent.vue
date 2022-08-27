<script setup>
import NotionContent from "../components/designer/NotionContent.vue";
import NotionNav from "../components/designer/NotionNav.vue";
import Notionlayout from "../components/designer/Notionlayout.vue";
import config from "../components/config";
import { reactive } from "vue";
const state = reactive({
  config: config,
});

function removeConfigItem(order) {
  state.config = state.config.splice(order, 1);
}

function addConfigItem(order, config) {
  console.log(order, config);
}
</script>
<template>
  <Notionlayout>
    <template #nav>
      <NotionNav
        :config="state.config"
        @removeConfigItem="removeConfigItem"
        @addConfigItem="addConfigItem"
      />
    </template>
    <template #content>
      <NotionContent
        :config="state.config"
        @removeConfigItem="removeConfigItem"
        @addConfigItem="addConfigItem"
      />
    </template>
  </Notionlayout>
</template>
