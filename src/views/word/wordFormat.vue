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
      <a-button @click="convertToDoc">download</a-button>
    </a-space>
  </div>
</template>

<script setup>
import { ref } from "vue";
import docx2html from "docx2html";
import { UploadOutlined } from "@ant-design/icons-vue";
import api from "@/api/article.js";

const uploadedFile = ref(null);
const htmlString = ref(``);
const prompt = ref(
  "将这个html中的所有中文，翻译为英文，不要翻译javascript和css以及html元素，同一个段落中的特殊样式需要保留, 如果是表格，表格的所有样式都需要保留"
);
const systemMessage = ref(
  "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown."
);

const handleFileUpload = (file) => {
  uploadedFile.value = file;
  return false;
};

const convertToHtml = async () => {
  docx2html(uploadedFile.value, {
    name: "newDoc.docx",
  })
    .then((htmlEl) => {
      htmlString.value = htmlEl;
    })
    .catch((err) => {
      console.log(err);
    });
  return false;
};

const convertToDoc = async () => {
  if (htmlString.value) {
    const params = {
      prompt: `${prompt.value}
      ${htmlString.value.toString()}`,
      history: [],
      systemMessage: systemMessage.value,
    };
    api
      .htmlToDocx(params)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
</script>
