<template lang="">
  <div style="text-align: center;">
    <h1>canvas方式</h1>
    <ringItem
      :storkWidth="5"
      :size="60"
      :ratioList="[
        { ratio: 0.3, color: '#FF5733' },
        { ratio: 0.6, color: '#33FF57' },
        { ratio: 0.1, color: '#3357FF' },
      ]"
    ></ringItem>
    <h1>svg方式</h1>
    <svgRing
      :segments="[
        { color: '#FF0000', percentage: 25 },
        { color: '#00FF00', percentage: 50 },
        { color: '#0000FF', percentage: 25 },
      ]"
      :size="60"
      :strokeWidth="5"
    />
    <h1>cssRingItem</h1>
    <cssRingItem></cssRingItem>
    <h1>realCssRing</h1>
    <realCssRing></realCssRing>
  </div>
</template>
<script setup>
import ringItem from "./ringItem.vue";
import svgRing from "./svgRing.vue";
import realCssRing from "./realCssRing.vue";
</script>
<style lang="less"></style>
