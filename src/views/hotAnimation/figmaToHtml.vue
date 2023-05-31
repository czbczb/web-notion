<template>
  <h1>code fun和figma结合：设计图到代码</h1>
  <div class="flex-col items-center page">
    <div class="section"></div>
    <div class="flex-col section_2">
      <div class="flex-col">
        <div class="flex-col items-end group">
          <div class="section_3"></div>
          <img
            class="image"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/632a72cd5a7e3f0310d5210a/632a7318929db9001156c0df/16637267800186145806.png"
          />
          <img
            class="image_2"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/632a72cd5a7e3f0310d5210a/632a7318929db9001156c0df/16637267800204142859.png"
          />
        </div>
        <span class="text">Daniel Joffrion</span>
      </div>
      <div class="flex-col items-start group_2">
        <div class="section_4"></div>
        <div class="flex-col items-center text-wrapper">
          <span class="font_1 text_3">View Content</span>
        </div>
        <img
          class="image_3"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/632a72cd5a7e3f0310d5210a/632a7318929db9001156c0df/16637267800216932809.png"
        />
        <span class="font_1 text_2">Atlanta, GA</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  justify-content: flex-start;
}

.justify-center {
  justify-content: center;
}

.justify-end {
  justify-content: flex-end;
}

.justify-evenly {
  justify-content: space-evenly;
}

.justify-around {
  justify-content: space-around;
}

.justify-between {
  justify-content: space-between;
}

.items-start {
  align-items: flex-start;
}

.items-center {
  align-items: center;
}

.items-end {
  align-items: flex-end;
}

/* 局部样式 */
.page {
  padding: 22.75rem 0 22.81rem;
  background-color: #c5c9df;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  position: relative;
}
.section {
  background-color: #131a40;
  border-radius: 0.69rem;
  width: 17.06rem;
  height: 29.44rem;
}
.section_2 {
  padding-top: 2rem;
  background-color: #ffffff;
  border-radius: 1.5rem;
  overflow: hidden;
  background-image: linear-gradient(
    139deg,
    #ffffff 0%,
    #ffffff00 101.8%,
    #cac9ff 101.8%
  );
  width: 21.69rem;
  height: 23.69rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.group {
  padding-top: 0.94rem;
  position: relative;
}
.section_3 {
  background-color: #5d94ff99;
  filter: blur(3.56rem);
  border-radius: 50%;
  width: 9.81rem;
  height: 9.81rem;
}
.image {
  width: 1.88rem;
  height: 1.88rem;
  position: absolute;
  right: 2rem;
  top: 0;
}
.image_2 {
  width: 7rem;
  height: 7rem;
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
}
.text {
  align-self: center;
  color: #131a40;
  font-size: 1.13rem;
  font-family: Poppins;
  font-weight: 700;
  line-height: 0.91rem;
}
.group_2 {
  margin: 0.88rem 0 -4.5rem -0.56rem;
  align-self: flex-start;
  width: 15.38rem;
  position: relative;
}
.section_4 {
  background-color: #5dffc499;
  filter: blur(4.81rem);
  border-radius: 50%;
  width: 14.06rem;
  height: 14.06rem;
}
.text-wrapper {
  padding: 0.75rem 0 0.88rem;
  background-color: #131a40;
  border-radius: 1.88rem;
  width: 7.88rem;
  position: absolute;
  right: 0;
  top: 3.75rem;
}
.font_1 {
  font-size: 0.88rem;
  font-family: Poppins;
}
.text_3 {
  color: #ffffff;
  line-height: 0.69rem;
}
.image_3 {
  width: 1.44rem;
  height: 1.44rem;
  position: absolute;
  right: 5.81rem;
  top: 0;
}
.text_2 {
  color: #000000;
  line-height: 0.78rem;
  position: absolute;
  right: 0.59rem;
  top: 0.41rem;
}
</style>
