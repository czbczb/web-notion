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

const emit = defineEmits(["removeConfigItem", "addConfigItem", "setFocusOrder", "updateConfigItem"]);

onMounted(() => {
  editItem.value.innerHTML = props.configItem.html;
});
nextTick(() => {
  autofocusHandler(props.focusOrder);
});
function autofocusHandler(newAutofocus) {
  if (newAutofocus === props.order) {
    editItem.value.focus();
  }
}
function changeSpace() {
  console.log("space", state.value);
}

function inputText() {
  state.value = editItem.value.innerHTML;
}

function changeEnter() {
  let config = markdownCommand.default;
  Object.keys(markdownCommand).map((command) => {
    if (state.value.startsWith(command)) {
      config = markdownCommand[command];
    }
  });
  config.html = editItem.value.innerHTML.replace(/#/gi, "");
  if (config.type === "p") {
    state.value = "";
    config.html = ""
    emit("addConfigItem", {
      order: props.order,
      config: toRaw(config),
    });
    emit("setFocusOrder", props.order + 1);
  } else {
    emit("updateConfigItem", {
      order: props.order,
      config: config,
    });
    emit("setFocusOrder", props.order);
  }
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
