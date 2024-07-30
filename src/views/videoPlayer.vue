<template>
  <div>
    <a-upload-dragger
      :beforeUpload="beforeUpload"
      :fileList="fileList"
      :showUploadList="true"
      @change="handleChange"
      @drop="handleChange"
      accept=".mp4"
      :customRequest="customRequest"
    >
      <p class="ant-upload-drag-icon">
        <inbox-outlined></inbox-outlined>
      </p>
      <p class="ant-upload-text">Click or drag file to this area to upload</p>
      <p class="ant-upload-hint">Support for a single</p>
      <p class="ant-upload-hint">limit 100 M</p>
    </a-upload-dragger>
    <a-progress v-if="uploading" :percent="progress" />
    <a-button type="primary" v-if="downloadLink" @click="downloadScorm"
      >下载SCORM课件</a-button
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import { InboxOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import scromApi from "@/api/scrom";

const fileList = ref([]);
const uploading = ref(false);
const progress = ref(0);
const downloadLink = ref("");

const beforeUpload = (file) => {
  const isMp4 = file.type === "video/mp4";
  if (!isMp4) {
    message.error("您只能上传MP4文件!");
  }
  const isLt50M = file.size / 1024 / 1024 < 50;
  if (!isLt50M) {
    message.error("文件必须小于50MB!");
  }
  return isMp4 && isLt50M;
};

const handleChange = (info) => {
  if (info.file.status === "done") {
    message.success(`${info.file.name} 文件上传成功`);
    uploading.value = false;
    progress.value = 100;
    downloadLink.value = `http://localhost:3000/download/${info.file.response.fileName}`;
  } else if (info.file.status === "error") {
    message.error(`${info.file.name} 文件上传失败`);
    uploading.value = false;
  }
};

const customRequest = ({ file, onProgress, onSuccess, onError }) => {
  const formData = new FormData();
  formData.append("file", file);

  scromApi
    .uploadMp4(formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.lengthComputable) {
          const percent = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          progress.value = percent;
          onProgress({ percent });
        }
      },
    })
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error) => {
      onError(error);
    });

  uploading.value = true;
};

const downloadScorm = () => {
  window.open(downloadLink.value, "_blank");
};
</script>

<style scoped>
/* 自定义样式 */
</style>
