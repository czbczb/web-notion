<template>
  <div>
    <a-button @click="showModal" type="primary">保存</a-button>
    <a-modal v-model:visible="visible">
      <a-form v-model="formData" ref="form" :rules="rules">
        <a-form-item labe="名字" name="title">
          <a-input v-model="formData.title"></a-input>
        </a-form-item>
        <a-form-item labe="UI框架" name="uiFrame">
          <a-input v-model="formData.uiFrame"></a-input>
        </a-form-item>
        <a-form-item labe="js框架" name="jsFrame">
          <a-input v-model="formData.jsFrame"></a-input>
        </a-form-item>
        <a-form-item labe="组件" name="codeStr">
          <a-input v-model="formData.codeStr"></a-input>
        </a-form-item>
      </a-form>
      <template #footer>
        <a-button @click="hideModal">取消</a-button>
        <a-button :loading="loading" type="primary" @click="saveComponent"
          >保存</a-button
        >
      </template>
    </a-modal>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useMessage } from "ant-design-vue";
import api from "@/api/chat.js";

const props = defineProps(["codeStr", "jsFrame", "uiFrame"]);
const visible = ref(false);
const loading = ref(false);
const formData = reactive({
  title: "",
  codeStr: "",
  jsFrame: props.jsFrame,
  uiFrame: props.uiFrame,
});
const rules = reactive([]);

const message = useMessage();

function showModal() {
  visible.value = true;
}
function hideModal() {
  visible.value = false;
}

// 组件字符串保存到后端api
function saveComponent() {
  api
    .saveComponent()
    .then((res) => {
      message.success(res.message || "保存成功");
    })
    .catch((error) => {
      message.error(error.message);
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>
<style scoped lang="scss"></style>
