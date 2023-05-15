<template>
  <div style="padding-top: 90px">
    <!-- 此处注意写法v-model:content -->
    <QuillEditor
      ref="myQuillEditor"
      theme="snow"
      v-model:content="content"
      :options="data.editorOption"
      contentType="html"
    />
  </div>
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { reactive, onMounted, ref, toRaw, watch } from "vue";

const props = defineProps(["value"]);
const content = ref("");
const myQuillEditor = ref();
// 通过watch监听回显，笔者这边使用v-model:content 不能正常回显
watch(
  () => props.value,
  (val) => {
    toRaw(myQuillEditor.value).setHTML(val);
  },
  { deep: true }
);
const data = reactive({
  content: "",
  editorOption: {
    modules: {
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        [{ size: ["small", false, "large", "huge"] }],
        [{ font: [] }],
        [{ align: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ header: 1 }, { header: 2 }],
        ["image"],
        [{ direction: "rtl" }],
        [{ color: [] }, { background: [] }],
      ],
    },
    placeholder: "请输入内容...",
  },
});
const toBase64 = (url, callback) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL("image/png");
    callback(dataURL);
  };
  img.src = url;
};

const addPaste = (quill) => {
  quill.clipboard.addMatcher("img", (node, delta) => {
    const url = node.getAttribute("src");
    // 转换 URL 成 base64
    toBase64(url, (base64Url) => {
      console.log(base64Url);
      delta.insert({ image: base64Url });
      quill.updateContents(delta);
    });
  });
};

// 初始化编辑器
onMounted(() => {
  const quill = toRaw(myQuillEditor.value).getQuill();
  if (myQuillEditor.value) {
    addPaste(quill);
  }
});
</script>
<style scoped>
/* 调整样式 */
:deep(.ql-editor) {
  min-height: 180px;
}
:deep(.ql-formats) {
  height: 21px;
  line-height: 21px;
}
</style>
