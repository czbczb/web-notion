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
import { ref, reactive, onMounted } from "vue";
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
});

const editItem = ref(null);

const emit = defineEmits(["removeConfigItem", "addConfigItem"]);
const state = reactive({
  value: "",
  isActive: false,
});

onMounted(() => {
  editItem.value.innerHTML = props.configItem.html;
  editItem.value.focus();
});

function changeSpace() {
  console.log("space", state.value);
}

function inputText() {
  state.value = editItem.value.innerHTML;
}

function changeEnter() {
  let config = markdownCommand.default;
  Object.keys(markdownCommand).map((command) => {
    console.log(state.value, command, state.value.startsWith(command));
    if (state.value.startsWith(command)) {
      config = markdownCommand[command];
    }
  });
  config.html = editItem.value.innerHTML.replace(/#/gi, "");
  state.value = "";
  editItem.value.innerHTML = "";
  emit("addConfigItem", {
    order: props.order,
    config: JSON.parse(JSON.stringify(config)),
  });
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
