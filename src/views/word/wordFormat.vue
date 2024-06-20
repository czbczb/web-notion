<template>
  <div>
    <a-row style="margin: 20px 0 ;">
      <a-col :span="24">
        <a-textarea v-model:value="prompt" placeholder="prompt" :rows="4" />
      </a-col>
      <a-col :span="24">
        <a-textarea v-model:value="systemMessage" placeholder="systemMessage" :rows="4" />
      </a-col>
    </a-row>
    <a-space>
      

      <a-upload @change="handleFileUpload">
        <a-button>
          <UploadOutlined />
          Click to Upload
        </a-button>
      </a-upload>
      <a-button @click="convertToHtml">Convert to HTML</a-button>
      <a-button @click="convertToDoc">download</a-button>
    </a-space>
    <a-card title="预览" v-html="html">
    </a-card>
  </div>
</template>

<script setup>
import { message } from "ant-design-vue";
import { ref } from 'vue'
import docx2html from 'docx2html'
import { UploadOutlined } from "@ant-design/icons-vue";
import api from '@/api/article.js'


const uploadedFile = ref(null)
const html = ref(``)
const prompt = ref('将这个html中的所有中文，翻译为英文，不要翻译javascript和css以及html元素，同一个段落中的特殊样式需要保留')
const systemMessage = ref('You are ChatGPT, a large language model trained by OpenAI. Follow the user\'s instructions carefully. Respond using markdown.')

const handleFileUpload = (info) => {
  uploadedFile.value = info.file.originFileObj;
  console.log(uploadedFile.value)
}
const convertToHtml = async () => {
  if (uploadedFile.value) {
    docx2html(uploadedFile.value, {
      name: 'newDoc.docx'
    }).then(htmlEl => {
      html.value = htmlEl
    })
      .catch(err => {
        console.log(err);
      });
  }
}

const convertToDoc = async () => {
  if (html.value) {
    const params = {
      prompt: `${prompt.value}
      ${html.value.toString()}`,
      history: [],
      systemMessage: systemMessage.value,
    }
    api.htmlToDocx(params).then(res=> {
      console.log(res);
      message.error('上传成功');

    })
    .catch(err => {
      console.log(err);
      message.error('上传失败');
    });
  }
}

function htmlToDocxV2(){
  api.htmlToDocxV2({
    content: '<h1>test</h1>',
  }).then(res=> {
      console.log(res);
      message.error('上传成功');
    })
    .catch(err => {
      console.log(err);
      message.error('上传失败');
    });
}

htmlToDocxV2()
</script>

