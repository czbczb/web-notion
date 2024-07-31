<template>
  <div>
    <a-upload-dragger
      :beforeUpload="beforeUpload"
      v-model:fileList="fileList"
      :showUploadList="true"
      @change="handleChange"
      @drop="handleChange"
      accept=".mp4"
    >
      <div>
        <p class="ant-upload-drag-icon">
          <inbox-outlined></inbox-outlined>
        </p>
        <p class="ant-upload-text">Click or drag file to this area to upload</p>
        <p class="ant-upload-hint">Support for a single</p>
        <p class="ant-upload-hint">limit 100 M</p>
      </div>
    </a-upload-dragger>
    <a-row align="center" style="padding-top: 10px">
      <a-button type="primary" @click="customRequest" :loading="uploading"
        >上传</a-button
      >
    </a-row>
    <a-card v-if="downloadLinks.length > 0" title="转换后的课件内容">
      <a-list bordered :data-source="downloadLinks">
        <template #renderItem="{ item }">
          <a-list-item>
            <a :href="item.path">{{ item.name }}</a>
          </a-list-item>
        </template>
      </a-list>
    </a-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { InboxOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import scormApi from "@/api/scorm";

const fileList = ref([]);
const uploading = ref(false);
const downloadLinks = ref([]);

const beforeUpload = (file) => {
  const isMp4 = file.type === "video/mp4";
  if (!isMp4) {
    message.error("您只能上传MP4文件!");
  }
  const isLt50M = file.size / 1024 / 1024 < 50;
  if (!isLt50M) {
    message.error("文件必须小于50MB!");
  }
  return false;
};

const handleChange = ({ file, fileList }) => {
  console.log(file, fileList);
  if (file.status === "done") {
    fileList.value = fileList;
  } else if (file.status === "error") {
    fileList.value = [];
  }
};

const customRequest = () => {
  if (fileList.value.length === 0) {
    return;
  }
  const formData = new FormData();
  fileList.value.map((file) => {
    formData.append("file", file.originFileObj);
  });
  uploading.value = true;
  scormApi
    .uploadMp4(formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      downloadLinks.value = res.data;
      uploading.value = false;
    })
    .catch(() => {
      uploading.value = false;
      message.error("转换失败");
    });
};
</script>

<style scoped>
/* 自定义样式 */
</style>
