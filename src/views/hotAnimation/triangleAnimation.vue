<template>
  <p class="box2">
    绝对定位+伪类实现：
    纯css写带小三角对话框发货打卡舒芙蕾哈就老实点话费啦速度快
  </p>
  <p class="box3">
    绝对定位+伪类 +
    clip-path实现：纯css3写带小三角对话框发货打卡舒芙蕾哈就老实点话费啦速度快
  </p>
  <p class="box4">
    clip-path实现：纯css写带小三角对话框发货打卡舒芙蕾哈就老实点话费啦速度快
  </p>
</template>

<script setup></script>

<style lang="less" scoped>
.box4 {
  width: 200px;
  height: 200px;
  background-color: #f6f8fa;
  -webkit-clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    75% 75%,
    75% 100%,
    50% 75%,
    0% 75%
  );
}

.box2 {
  /* float:left;   */
  position: relative;
  width: 200px;
  height: 100px;
  border: 1px solid #00f;
  margin: 50px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.box2:before,
.box2:after {
  position: absolute;
  content: "";
  border: 10px solid;
}

.box2:before {
  right: -20px;
  top: 20px;
  border-color: transparent transparent transparent #00f;
}

.box2:after {
  border-color: transparent transparent transparent #fff;
  right: -18px;
  top: 20px;
}

.box3 {
  width: 400px;
  height: 200px;
  border: 1px solid #eee !important;
  margin: 20px;
  padding: 10px;
  position: relative;
}

.box3::after,
.box3::before {
  position: absolute;
  top: 11px;
  right: 100%;
  left: -8px;
  display: block;
  width: 8px;
  height: 16px;
  pointer-events: none;
  content: " ";
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
}

.box3::after {
  margin-left: 2px;
  background-color: #f6f8fa;
  background-image: linear-gradient(#eee, #efefef);
}

.box3::before {
  background-color: #d0d7de;
}
</style>
