<template>
  <div
    class="cubic-bezier-ball"
    v-for="item in ballList"
    :ref="(el) => setRefAction(el, item)"
    :key="item"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
const ballList = ref([]);
const ballRef = ref([]);

//将循环ref放入到数组中
const setRefAction = (el, item) => {
  ballRef.value[item] = el;
};

//开始执行动画
const start = (point, time = 1, xcubic = "linear", ycubic = "ease-in") => {
  const nowTime = new Date().getTime();
  //新增一个动画节点
  ballList.value.push(nowTime);
  //dom渲染后增加动画效果
  nextTick(() => {
    const ele = ballRef.value[nowTime];
    ele.style.left = `${point.x1}px`;
    ele.style.top = `${point.y1}px`;
    ele.style.opacity = 1;
    setTimeout(() => {
      ele.style.left = `${point.x2}px`;
      ele.style.top = `${point.y2}px`;
      ele.style.transition = `left ${time}s ${xcubic}, top ${time}s ${ycubic}`;
    });
    setTimeout(() => {
      ele.style.opacity = 0;
      ele.style.left = `${point.x1}px`;
      ele.style.top = `${point.y1}px`;
      //动画结束回收dom
      removeDom(nowTime);
    }, time * 1000);
  });
};

//动画结束回收dom
const removeDom = (nowTime) => {
  ballList.value = ballList.value.filter((item) => {
    return item != nowTime;
  });
};

//暴露出给父组件调用的方法
defineExpose({
  start,
});
</script>
<style>
.cubic-bezier-ball {
  position: absolute;
  opacity: 0;
}
</style>
