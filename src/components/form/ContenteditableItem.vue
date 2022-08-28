<template>
  <div
    @keydown.enter.prevent="changeEnter"
    @keydown.enter.space="changeSpace"
    @input="inputText"
    ref="editItem"
    class="editItem p"
    :contenteditable="!readOnly"
  ></div>
</template>

<script setup>
import { ref, watch, toRaw, nextTick, reactive, onMounted } from "vue";
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
const state = reactive({
  value: "",
  isActive: false,
});
const editItem = ref(null);

watch(() => props.focusOrder, autofocusHandler);

const emit = defineEmits([
  "removeConfigItem",
  "addConfigItem",
  "setFocusOrder",
  "updateConfigItem",
]);

onMounted(() => {
  editItem.value.innerHTML = props.configItem.html;
});
nextTick(() => {
  autofocusHandler(props.focusOrder);
});
function autofocusHandler(newAutofocus) {
  if (newAutofocus === props.order) {
    setAnchorPosition(editItem.value);
  }
}

// 设置光标位置
function setAnchorPosition(el) {
  el.focus();
  var range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  var sel = window.getSelection();
  //判断光标位置，如不需要可删除
  if (sel.anchorOffset != 0) {
    return;
  }
  sel.removeAllRanges();
  sel.addRange(range);
}

function changeSpace() {
  console.log("space", state.value);
}

function inputText() {
  state.value = editItem.value.innerHTML;
}

function hasCommand(config) {
  return config.type !== "p";
}

function changeEnter() {
  let config = markdownCommand.default;
  let html = editItem.value.innerHTML;
  Object.keys(markdownCommand).map((command) => {
    if (state.value.startsWith(command)) {
      config = markdownCommand[command];
      html = html.replace(command, "");
    }
  });
  config.html = html;

  // update self
  if (hasCommand(config)) {
    emit("updateConfigItem", {
      order: props.order,
      config: config,
    });
    emit("setFocusOrder", props.order);
    return;
  }

  // add a empty config
  state.value = "";
  config.html = "";
  emit("addConfigItem", {
    order: props.order,
    config: toRaw(config),
  });
  // focused new element
  emit("setFocusOrder", props.order + 1);
}
</script>
<style scoped>
.editItem {
  padding: 0 5px;
  border: 1px solid #fff;
  transition: all linear 0.1s;
  border-radius: 2px;
  margin-top: 5px;
  border: 1px solid transparent;
}
.editItem:hover {
  border: 1px solid #ccc;
  background-color: #eee;
}
</style>
