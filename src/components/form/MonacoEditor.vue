<template>
  <a-row justify="space-between" class="codeOption">
    <a-col>
      <a-select
        style="width: 200px"
        v-model:value="language"
        @change="changeLanguage"
        :options="languageList"
      ></a-select>
    </a-col>
    <a-col>
      <a-button type="primary" @click="handleFormat" style="margin-right: 5px"
        >格式化</a-button
      >
      <a-button :loading="configItem.loading" type="primary" @click="submitCode"
        >Run</a-button
      >
    </a-col>
  </a-row>
  <div ref="codeEditBox" class="codeEditBox"></div>
  <div class="output" v-if="configItem.result">
    <div class="outputheader">运行结果</div>
    <div class="outputContent">{{ configItem.result }}</div>
  </div>
</template>

<script setup>
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import * as monaco from "monaco-editor";
import { nextTick, toRaw, ref, reactive, onBeforeUnmount, onMounted } from "vue";
import { useRoute } from "vue-router";
import { format } from "sql-formatter";
import api from "../../api/article.js";

import { message } from "ant-design-vue";
const route = useRoute();
const text = ref("");
const language = ref("go");
const msg = ref();
const loading = ref(false);
const codeEditBox = ref(null);
const languageList = reactive([
  { value: "go", label: "go" },
  { value: "typescript", label: "typescript" },
  { value: "javascript", label: "javascript" },
  { value: "html", label: "html" },
  { value: "css", label: "css" },
  { value: "scss", label: "scss" },
  { value: "less", label: "less" },
  { value: "json", label: "json" },
  { value: "yaml", label: "yaml" },
]);

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

const emit = defineEmits([
  "removeConfigItem",
  "addConfigItem",
  "setFocusOrder",
  "updateConfigItem",
]);

onMounted(() => {
  text.value = props.configItem.html;
  if (props.focusOrder === props.order) {
    codeEditBox.value.focus();
  }
});
//
// MonacoEditor start
//
onBeforeUnmount(() => {
  editor.dispose();
});

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (["typescript", "javascript"].includes(label)) {
      return new tsWorker();
    }
    return new EditorWorker();
  },
};
let editor = monaco.editor.IStandaloneCodeEditor;

const editorInit = () => {
  nextTick(() => {
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: false,
    });
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2016,
      allowNonTsExtensions: true,
    });

    !editor
      ? (editor = monaco.editor.create(codeEditBox.value, {
          value: text.value, // 编辑器初始显示文字
          language: "go", // 语言支持自行查阅demo
          automaticLayout: true, // 自适应布局
          theme: "hc-black", // 官方自带三种主题vs, hc-black, or vs-dark
          foldingStrategy: "indentation",
          renderLineHighlight: "all", // 行亮
          selectOnLineNumbers: true, // 显示行号
          minimap: {
            enabled: false,
          },
          readOnly: false, // 只读
          fontSize: 16, // 字体大小
          autoDetectHighContrast: true,
          scrollBeyondLastLine: false, // 取消代码后面一大段空白
          overviewRulerBorder: true, // 不要滚动条的边框
        }))
      : editor.setValue("");
    // console.log(editor)
    // 监听值的变化
    editor.onDidChangeModelContent(() => {
      text.value = editor.getValue();
      emit("updateConfigItem", {
        order: props.order,
        config: { ...props.configItem, html: editor.getValue() },
      });
    });
  });
};
editorInit();
// @ts-ignore
//切换语言
function changeLanguage() {
  monaco.editor.setModelLanguage(editor.getModel(), language.value);
}

const submitCode = () => {
  loading.value = true;

  api.submitCode(text.value, route.query.identity).then((res) => {
    loading.value = false;
    if (res.data.code == 200) {
      msg.value = res.data.data.msg;

      if (res.data.data.status == 1) {
        message.success(res.data.data.msg);
      } else {
        message.warning(res.data.data.msg);
      }
    } else {
      message.error(res.data.msg);
    }
    emit("updateConfigItem", {
      order: props.order,
      config: { ...props.configItem, result: res.data.msg, html: editor.getValue() },
    });
  });
};

const handleFormat = () => {
  let lan = editor.getModel().getLanguageId();
  console.log(lan);
  let content = editor.getValue();
  if (lan == "sql") {
    // 格式化sql
    toRaw(editor.value).setValue(format(content));
  } else if (lan == "json") {
    // 格式化json
    editor.value.trigger("anyString", "editor.action.formatDocument");
    editor.value.setValue(content);
  }
};
/***
 * editor.setValue(newValue)

editor.getValue()



editor.getAction('editor.action.formatDocument').run()    //格式化代码

editor.dispose()    //销毁实例

editor.onDidChangeOptions
//配置改变事件

editor.onDidChangeLanguage
//语言改变事件
 */
</script>

<style scoped>
.codeOption {
  margin-top: 20px;
}
.codeEditBox {
  min-height: 100px;
  max-height: 600px;
}
.output {
  border: 1px solid #ccc;
}
.outputheader {
  padding: 5px;
  margin-bottom: 5px;
  background: #eee;
  font-weight: bold;
}
.outputContent {
  text-indent: 2rem;
}
</style>
