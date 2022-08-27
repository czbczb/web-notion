<script setup>
import NotionContent from "../components/designer/NotionContent.vue";
import NotionNav from "../components/designer/NotionNav.vue";
import Notionlayout from "../components/designer/Notionlayout.vue";
import configJson from "../components/config";
import { reactive } from "vue";
let config = reactive(configJson);

function removeConfigItem(order) {
  config = config.splice(order, 1);
}

function addConfigItem(params) {
  console.log(params.config, params.order, '添加');
  config.splice(params.order, 0, params.config)
  console.log(config);
}
</script>
<template>
  <Notionlayout>
    <template #nav>
      <NotionNav
        :config="config"
        @removeConfigItem="removeConfigItem"
        @addConfigItem="addConfigItem"
      />
    </template>
    <template #content>
      <NotionContent
        :config="config"
        @removeConfigItem="removeConfigItem"
        @addConfigItem="addConfigItem"
      />
    </template>
  </Notionlayout>
</template>
