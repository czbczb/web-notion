<template>
  <div style="width: 100px; margin: 0 auto;">
    <div class="RingChart"></div>
    <div class="RingChart RingChart1"></div>
    <div class="RingChart RingChart2"></div>
  </div>
</template>
<style scoped lang="less">
// 定义变量
@color1: #f8766f;
@color2: #69cd90;
@color3: #ffb800;
@angle1: 0.125turn;
@angle2: 0.5turn;
@alpha: 0.7;
@r0: 30px;

.RingChart {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  background: conic-gradient(
    @color1 @angle1,
    @color2 @angle1 @angle2,
    @color3 @angle2
  );
  margin-bottom: 10px;
}

.RingChart1::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fff;
}

.RingChart2 {
  @color1: hsla(0, 100%, 50%, @alpha);
  @color2: hsla(120, 100%, 50%, @alpha);
  @color3: hsla(240, 100%, 50%, @alpha);
  @angle1: 0.2turn;
  @angle2: 0.5turn;
  -webkit-mask: radial-gradient(transparent @r0, red @r0);
  animation: example 4s ease-in-out;
}

@keyframes example {
  0% {
    @alpha: 0.2;
    @angle1: 0turn;
    @angle2: 0turn;
    @r0: 0px;
  }
  100% {
    @alpha: 0.7;
    @angle1: 0.2turn;
    @angle2: 0.5turn;
    @r0: 30px;
  }
}
</style>
