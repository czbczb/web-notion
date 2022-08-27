<template>
  <div
    class="editTableWrapper"
    @mouseenter="updateHover(true)"
    @mouseleave="updateHover(false)"
  >
    <slot></slot>
    <div class="menu" v-show="state.hover" @mouseenter="updateHover(true)">
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  hover: false,
});
function updateHover(hover) {
  state.hover = hover;
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
</style>
