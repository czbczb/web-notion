<template>
  <!-- 创建一个 canvas 元素，用于绘制图表 -->
  <canvas ref="canvasDom"></canvas>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  size: Number, // 画布大小
  storkWidth: Number, // 环的宽度
  ratioList: Array, // 比例列表
});

// 默认值
const defaultSize = 200;
const defaultStorkWidth = 4;
const defaultRatioList = [{ ratio: 1, color: "#C4C9CF4D" }];

// canvas DOM 和上下文
const canvasDom = ref<HTMLCanvasElement | null>(null);
let ctx = null;

// 动态计算 canvas 的中心点和半径
const size = computed(() => props.size || defaultSize);
const center = computed(() => ({
  x: size.value / 2,
  y: size.value / 2,
}));
const radius = computed(
  () => size.value / 2 - (props.storkWidth || defaultStorkWidth)
);

// 初始化 canvas
const initCanvas = () => {
  const dom = canvasDom.value;
  if (!dom) return;

  ctx = dom.getContext("2d");
  if (!ctx) return;

  dom.width = size.value;
  dom.height = size.value;

  drawBackgroundCircle();
  drawDataRings();
};

// 绘制背景圆环
const drawBackgroundCircle = () => {
  if (!ctx) return;

  drawCircle({
    ctx,
    x: center.value.x,
    y: center.value.y,
    radius: radius.value,
    lineWidth: props.storkWidth || defaultStorkWidth,
    color: "#C4C9CF4D",
    startAngle: -Math.PI / 2,
    endAngle: Math.PI * 1.5,
  });
};

// 绘制数据圆环
const drawDataRings = () => {
  const { ratioList = defaultRatioList } = props;
  if (!ctx) return;

  let startAngle = -Math.PI / 2;
  ratioList.forEach(({ ratio, color }) => {
    const endAngle = startAngle + ratio * Math.PI * 2;

    drawCircle({
      ctx,
      x: center.value.x,
      y: center.value.y,
      radius: radius.value,
      lineWidth: props.storkWidth || defaultStorkWidth,
      color,
      startAngle,
      endAngle,
    });

    startAngle = endAngle;
  });
};

// 通用绘制函数
const drawCircle = ({
  ctx,
  x,
  y,
  radius,
  lineWidth,
  color,
  startAngle,
  endAngle,
}) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();
};

// 监听画布大小变化
onMounted(() => {
  initCanvas();
});
</script>

<style scoped>
canvas {
  display: block;
  margin: auto;
  border-radius: 50%;
}
</style>
