<template>
  <div
    class="editTableWrapper"
    @mouseenter="updateHover(true)"
    @mouseleave="updateHover(false)"
  >
    <slot></slot>
    <div class="menu" v-show="hover" @mouseenter="updateHover(true)">
      <slot name="menu"></slot>
    </div>
    <div
      class="marker"
      v-if="order === focusOrder && markerPosition.x"
      :style="markerStyle"
    >
      <slot name="marker"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const hover = ref(false);
const props = defineProps({
  order: Number,
  focusOrder: Number,
  markerPosition: {
    type: Object,
    default: () => ({
      x: 0,
      y: 0,
    }),
  },
});

const markerStyle = computed(() => {
  const style = `left: ${props.markerPosition.x}px; top: -20px`;
  console.log(style);
  return style;
});

function updateHover(newhover) {
  hover.value = newhover;
}
</script>
<style scoped>
.editTableWrapper {
  position: relative;
}
.menu {
  width: 200px;
  position: absolute;
  z-index: 5;
  left: -200px;
  top: 0;
}
.marker {
  position: absolute;
}
</style>
