<template>
  <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`">
    <circle
      v-for="(segment, index) in segments"
      :key="index"
      :cx="size / 2"
      :cy="size / 2"
      :r="radius"
      fill="none"
      :stroke="segment.color"
      :stroke-width="strokeWidth"
      :stroke-dasharray="`${
        (segment.percentage / 100) * circumference
      } ${circumference}`"
      :stroke-dashoffset="getDashOffset(index)"
    />
  </svg>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  segments: {
    type: Array,
    required: true,
    default: () => [],
  },
  size: {
    type: Number,
    required: true,
    default: 100,
  },
  strokeWidth: {
    type: Number,
    required: true,
    default: 10,
  },
});
const radius = computed(() => (props.size - props.strokeWidth) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);

const getDashOffset = (index) => {
  return (
    props.segments
      .slice(0, index)
      .reduce(
        (offset, segment) =>
          offset + (segment.percentage / 100) * circumference.value,
        0
      ) * -1
  );
};
</script>
