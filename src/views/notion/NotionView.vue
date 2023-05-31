<template>
  <Notionlayout>
    <template #nav>
      <NotionNav
        :listNav="listNav"
        @removeConfigItem="removeConfigItem"
        @addConfigItem="addConfigItem"
        @setFocusOrder="setFocusOrder"
        :focusOrder="data.focusOrder"
      />
    </template>
    <template #content>
      <NotionContent
        :config="config"
        :focusOrder="data.focusOrder"
        @setFocusOrder="setFocusOrder"
        @removeConfigItem="removeConfigItem"
        @addConfigItem="addConfigItem"
        @updateConfigItem="updateConfigItem"
      />
    </template>
  </Notionlayout>
</template>
<script setup>
import NotionContent from "@/components/designer/NotionContent.vue";
import NotionNav from "@/components/designer/NotionNav.vue";
import Notionlayout from "@/components/designer/Notionlayout.vue";
import configJson from "@/components/config";
import { reactive, computed } from "vue";

let config = reactive(configJson);
let data = reactive({
  focusOrder: 0,
});

const listNav = computed(() => {
  return config.filter((item) =>
    ["h1", "h2", "h3", "h4", "h5", "h6"].includes(item.type)
  );
});

data.focusOrder = config.length - 1;

function removeConfigItem(order) {
  config = config.splice(order, 1);
}

function addConfigItem(params) {
  config.splice(params.order, 0, params.config);
}

function updateConfigItem(params) {
  config.splice(params.order, 1, params.config);
}

function setFocusOrder(order) {
  data.focusOrder = order;
}
</script>
