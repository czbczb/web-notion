<template>
  <div>
    <a-row style="margin: 20px 0">
      <a-col :span="24">
        <a-textarea v-model:value="prompt" placeholder="prompt" :rows="4" />
      </a-col>
      <a-col :span="24">
        <a-textarea
          v-model:value="systemMessage"
          placeholder="systemMessage"
          :rows="4"
        />
      </a-col>
    </a-row>
    <a-space>
      <a-upload :before-upload="handleFileUpload">
        <a-button>
          <UploadOutlined />
          Click to Upload
        </a-button>
      </a-upload>
      <a-button @click="convertToHtml">Convert to HTML</a-button>
      <a-button @click="startTransform" :loading="loading">开始翻译</a-button>
    </a-space>
    <a-card title="翻译结果" v-html="displayContent"></a-card>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import docx2html from "docx2html";
import { UploadOutlined } from "@ant-design/icons-vue";
import api from "@/api/article.js";

const uploadedFile = ref(null);
const htmlString = ref(``);
const prompt = ref(
  "将这个html中的所有中文，翻译为英文，不要翻译javascript和css以及html元素，同一个段落中的特殊样式需要保留, 如果是表格，表格的所有样式都需要保留, 请注意翻译时数字的格式, 表格的行数和列数必须保证完整，如果有合并的行或者列，需要保持原有的合并状态"
);
const systemMessage = ref(
  "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown."
);

const transformRes = ref("");
const loading = ref(false);

const bodyWrap = ref(null);

const displayContent = computed(() => {
  return bodyWrap.value.replace("</body>", transformRes.value + "</body>");
});

const handleFileUpload = (file) => {
  uploadedFile.value = file;
  return false;
};

const convertToHtml = async () => {
  docx2html(uploadedFile.value, {
    name: "newDoc.docx",
  })
    .then((htmlEl) => {
      const { content, bodyWrap } = mergeSpansAndGetContent(htmlEl);
      htmlString.value = content;
      bodyWrap.value = bodyWrap;
    })
    .catch((err) => {
      console.log(err);
    });
  return false;
};

const mergeSpansAndGetContent = (html) => {
  // 创建临时 DOM 元素
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  // 遍历 p 标签下的子元素
  const pTags = tempDiv.querySelectorAll("p");
  pTags.forEach((p) => {
    let currentStyle = "";
    let currentSpan = null;
    const newChildren = [];
    for (let i = 0; i < p.children.length; i++) {
      const child = p.children[i];
      if (child.tagName === "SPAN") {
        const style = child.getAttribute("style");
        if (style === currentStyle) {
          currentSpan.textContent += child.textContent;
        } else {
          currentStyle = style;
          currentSpan = child;
          newChildren.push(child);
        }
      } else {
        currentStyle = "";
        currentSpan = null;
        newChildren.push(child);
      }
    }
    p.innerHTML = "";
    newChildren.forEach((child) => p.appendChild(child));
  });

  // 获取 body 中的所有内容
  const content = tempDiv.innerHTML;

  // 获取 body 外包括 body 元素的内容
  const bodyWrap = tempDiv.outerHTML;

  return { content, bodyWrap };
};

const startTransform = async () => {
  if (htmlString.value) {
    const params = {
      prompt: `${prompt.value}
      ${htmlString.value.toString()}`,
      history: [],
      systemMessage: systemMessage.value,
    };
    loading.value = true;
    api
      .htmlToDocx(params)
      .then((res) => {
        console.log(res);
        transformRes.value = res.data;
        loading.value = false;
      })
      .catch((err) => {
        console.log(err);
        loading.value = false;
      });
  }
};
</script>
