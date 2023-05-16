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

const fileToBase64 = (file, callback) => {
  // 创建FileReader对象
  const reader = new FileReader();

  // 将文件读取为Data URL
  reader.readAsDataURL(file);

  // 当读取完成时执行该函数
  reader.onload = () => {
    // 获取读取的结果，即base64编码的字符串
    const base64String = reader.result;
    callback(base64String);
  };
};

const addPaste = (quill) => {
  quill.root.addEventListener(
    "paste",
    (evt) => {
      if (
        evt.clipboardData &&
        evt.clipboardData.files &&
        evt.clipboardData.files.length
      ) {
        evt.preventDefault();
        [].forEach.call(evt.clipboardData.files, (file) => {
          if (!file.type.match(/^image\/(gif|jpe?g|a?png|bmp)/i)) {
            return;
          }
          fileToBase64(file, (url) => {
            const index = quill.getSelection().index;
            quill.insertEmbed(index, "image", url);
            console.log(url);
          });
          // 释放内存
          // URL.revokeObjectURL(url)
        });
      }
    },
    false
  );
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
