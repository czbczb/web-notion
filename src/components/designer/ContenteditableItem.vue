<template>
  <div
    @keydown.self="changeEnter"
    ref="editItem"
    class="editItem"
    :contenteditable="readOnly"
    v-bind="state.value"
  ></div>
</template>

<script setup>
import { ref, reactive, onBeforeMount, onMounted, onBeforeUpdate } from "vue";
const props = defineProps({
  config: Object,
  configItem: Object,
  order: Number,
  readOnly: {
    type: Boolean,
    default: true,
  },
});

const editItem = ref(null);

const emit = defineEmits(["removeConfigItem", "addConfigItem"]);

const state = reactive({
  value: "",
  isActive: false,
  markeDownCommand: {
    "```": {
      type: "code",
      title: "title",
      html: "",
      result: "",
    },
    "#": {
      type: "h1",
      title: "h1",
      html: "h1",
      target: "h1",
    },
    "##": {
      type: "h2",
      title: "h1",
      html: "h1",
      target: "h1",
    },
    "###": {
      type: "h3",
      title: "h1",
      html: "h1",
      target: "h1",
    },
    "####": {
      type: "h4",
      title: "h1",
      html: "h1",
      target: "h1",
    },
    "#####": {
      type: "h5",
      title: "h1",
      html: "h1",
      target: "h1",
    },
    "######": {
      type: "h6",
      title: "h1",
      html: "h1",
      target: "h1",
    },
  },
});

onBeforeMount(() => {
  console.log("2.组件挂载页面之前执行----onBeforeMount");
});

onMounted(() => {
  console.log("3.-组件挂载到页面之后执行-------onMounted");
});

onBeforeUpdate(() => {
  if (state.value && state.value === editItem.value.innerText) {
    updateValue(editItem.value.innerText);
  }
});

// 自定义v-model
function updateValue(value) {
  state.value = value;
}

function changeEnter() {
  Object.keys(state.markeDownCommand).map((command) => {
    if (state.value.startsWith(command)) {
      const config = state.markeDownCommand[state.value];
      emit("addConfigItem", props.order, config);
    }
  });
}
</script>
<style scoped>
.editItem {
  padding: 0 5px;
  border: 1px solid #fff;
  transition: all linear 0.1s;
  border-radius: 2px;
}
.editItem:hover {
  border: 1px solid #ccc;
}
</style>
