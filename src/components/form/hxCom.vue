<template>
  <div
    class="editable-true"
    ref="hx"
    @keydown.enter.prevent="changeEnter"
    @keydown.enter.space="changeSpace"
    :contenteditable="!readOnly"
    @input="inputText"
    :placeholder="configItem.type"
    :class="configItem.type"
  >
    {{ configItem.html }}
  </div>
</template>

<script setup>
import { reactive, toRaw, ref, onMounted } from "vue";
import markdownCommand from "../markdownCommand";

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
  focusOrder: Number,
});

const emit = defineEmits(["removeConfigItem", "addConfigItem", "setFocusOrder"]);
const hx = ref(null);
const state = reactive({
  value: "",
  isActive: false,
  markeDownCommand: markdownCommand,
});

onMounted(() => {
  hx.value.innerHTML = props.configItem.html;
  console.log(props.focusOrder, props.order, props.focusOrder === props.order);
  if (props.focusOrder === props.order) {
    hx.value.focus();
  }
});
function changeSpace() {
  console.log("space", state.value);
}

function inputText() {
  state.value = hx.value.innerHTML;
}
function changeEnter() {
  let config = markdownCommand.default;
  Object.keys(markdownCommand).map((command) => {
    if (state.value.startsWith(command)) {
      config = markdownCommand[command];
    }
  });

  config.html = hx.value.innerHTML.replace(/#/gi, "");
  state.value = config.html;

  // 更新自己的html
  emit("updateConfigItem", {
    order: props.order,
    config: { ...toRaw(props.configItem), html: toRaw(state.value) },
  });

  if (config.type === "p") {
    config.html = "";
    emit("addConfigItem", {
      order: props.order + 1,
      // toRaw 取消响应式
      config: toRaw(config),
    });
    emit("setFocusOrder", props.order + 1);
  } else {
    console.log("udpate item");

    emit("setFocusOrder", props.order);
  }
}
</script>

<style scoped>
.editable-true {
  border: 1px solid transparent;
  transition: all linear 300ms;
}
.editable-true:hover {
  background-color: #eee;
}
</style>
