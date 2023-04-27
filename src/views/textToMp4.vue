<template>
  <div>
    <a-textarea
      v-model:value="text"
      placeholder="请输入要转换的文本"
    ></a-textarea>
    <a-button @click="generateVideo">生成视频</a-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ImageClip, clipsArray, concatenate_videoclips } from "moviepy"; // 导入 MoviePy 库

const text = ref("");

// 生成视频
const generateVideo = async () => {
  const chars = text.value.split("");
  const duration = chars.length * 0.3; // 根据文本长度计算视频时长
  const promises = [];
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    const imgPromise = new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const clip = new ImageClip(img.src, duration || 0.3);
        resolve(clip); // 加载完成后返回图片剪辑对象
      };
      img.src = `https://dummyimage.com/100x100/000/fff&text=${char}`; // 创建包含单个字符的图像（这里我们使用了一个假的图像 URL）
    });
    promises.push(imgPromise);
  }
  const clips = await Promise.all(promises); // 等待所有图片剪辑加载完成
  const finalClip = concatenate_videoclips(clips);
  finalClip
    .write_videofile("output.mp4", {
      fps: 30,
      audio: false,
    })
    .then(() => console.log("视频生成完成！")); // 合并视频片段并输出为 MP4 文件
};
</script>
