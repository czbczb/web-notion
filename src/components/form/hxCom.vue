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
    // hx.value.focus();
    setAnchorPosition(hx.value);
  }
});

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

// function inputText() {
//   state.value = hx.value.innerHTML;
// }

function hasCommand(config) {
  return config.type !== "p";
}

function changeEnter() {
  let config = markdownCommand.default;
  let html = hx.value.innerHTML;
  Object.keys(markdownCommand).map((command) => {
    if (hx.value.innerHTML.startsWith(command)) {
      config = markdownCommand[command];
      html = config.html.replace(command, "");
    }
  });

  // udpate self html
  if (hasCommand(config)) {
    emit("updateConfigItem", {
      order: props.order,
      config: { ...toRaw(props.configItem), html },
    });
    emit("setFocusOrder", props.order);
    return;
  }

  config.html = "";
  emit("addConfigItem", {
    order: props.order + 1,
    // toRaw 取消响应式
    config: toRaw(config),
  });
  emit("setFocusOrder", props.order + 1);
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
