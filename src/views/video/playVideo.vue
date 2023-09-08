<template>
  <div>
    <container>
      <a-card title="bars">
        <av-bars src="/src/assets/empty.mp3" bar-color="#CCC"> </av-bars>
      </a-card>
      <a-card title="line">
        <av-line
          :line-width="2"
          line-color="lime"
          src="/src/assets/empty.mp3"
        ></av-line>
      </a-card>

      <av-circle
        :outline-width="0"
        :progress-width="5"
        :outline-meter-space="5"
        :playtime="true"
        playtime-font="18px Monaco"
        src="/src/assets/empty.mp3"
      ></av-circle>

      <a-card>
        <a-button @click="playAudio">Play</a-button>
        <canvas id="waveformCanvas"></canvas>
      </a-card>
    </container>
  </div>
</template>

<script setup>
import { ref } from "vue";
// 在这里添加您的音频文件路径
const videoSrc = ref("/src/assets/empty.mp3");

// 创建AudioContext对象
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// 创建AnalyserNode对象
const analyser = audioContext.createAnalyser();
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

// 获取音频数据并绘制声音波形图
const drawWaveform = () => {
  requestAnimationFrame(drawWaveform);
  analyser.getByteTimeDomainData(dataArray);

  // 在这里进行波形图的绘制逻辑
  // 您可以使用Canvas API绘制波形图，例如：
  const canvas = document.getElementById("waveformCanvas");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.lineWidth = 2;
  context.strokeStyle = "rgb(255, 255, 255)";
  context.beginPath();

  const sliceWidth = (canvas.width * 1.0) / bufferLength;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const v = dataArray[i] / 128.0;
    const y = (v * canvas.height) / 2;

    if (i === 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }

    x += sliceWidth;
  }

  context.lineTo(canvas.width, canvas.height / 2);
  context.stroke();
};

const playAudio = () => {
  // 创建音频元素
  const audioElement = new Audio(videoSrc.value);

  // 连接音频元素到AnalyserNode
  const source = audioContext.createMediaElementSource(audioElement);
  source.connect(analyser);
  analyser.connect(audioContext.destination);

  // 播放音频
  audioElement.play();

  // 启动声浪效果
  drawWaveform();
};
</script>

<style lang="scss" scoped></style>
