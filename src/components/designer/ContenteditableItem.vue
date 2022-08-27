<template>
  <div
    @keyup.enter="changeEnter"
    @keyup.space="changeSpace"
    ref="editItem"
    class="editItem"
    :contenteditable="!readOnly"
    v-bind="state.value"
  ></div>
</template>

<script setup>
import { ref, reactive, onBeforeMount, onMounted } from "vue";
const props = defineProps({
  config: Object,
  configItem: {
    type: Object,
    default: () => ({
      type: "p",
      html: "",
    }),
  },
  order: Number,
  readOnly: {
    type: Boolean,
    default: false,
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
    default: {
      type: "p",
      html: "正文",
    },
  },
});

onBeforeMount(() => {
  console.log("2.组件挂载页面之前执行----onBeforeMount");
});

onMounted(() => {
  console.log("3.-组件挂载到页面之后执行-------onMounted");
  editItem.value.innerHTML = props.configItem.html;
});

// onBeforeUpdate(() => {
//   console.log(editItem.value.innerText);
//   if (editItem.value.innerText.endWith("/n")) {
//     console.log(editItem.value.innerText);
//   }
//   if (state.value !== "" && state.value === editItem.value.innerText) {
//     updateValue(editItem.value.innerText);
//   }
// });

// 自定义v-model
// function updateValue(value) {
//   console.log(value);
//   state.value = value;
// }

function changeSpace() {
  console.log("space", state.value);
}

function changeEnter() {
  let config = state.markeDownCommand.default;

  Object.keys(state.markeDownCommand).map((command) => {
    if (state.value.startsWith(command)) {
      config = state.markeDownCommand[command];
    }
  });
  config.html = editItem.value.innerText.replaceAll(/[\r\n]/g, "");
  editItem.value.innerText = "";
  emit("addConfigItem", {
    order: 1,
    config,
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
