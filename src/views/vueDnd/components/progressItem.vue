<script lang="ts" setup>
import { useDrop } from 'vue3-dnd'
import { computed, unref } from 'vue'
import { toRefs } from '@vueuse/core'

const props = defineProps({
  accept: Array,
  lastDroppedItem: Object,
  onDrop: Function,
  state: String,
})

const [collect, drop] = useDrop({
  accept: props.accept,
  drop: props.onDrop,
  collect: (monitor) => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
})
const { canDrop, isOver } = toRefs(collect)
const isActive = computed(() => unref(canDrop) && unref(isOver))
const border = computed(() =>
  unref(isActive) ? '1px solid green' : unref(canDrop) ? '1px solid #eee' : '1px solid #eee'
)
</script>

<template>
  <div
    :ref="drop"
    class="progressItem"
    role="Dustbin"
    :style="{ border }"
    data-testid="dustbin"
  >
  <div class="progressHeader">{{ state }}</div>
    <slot></slot>
  </div>
</template>
<style lang="less" scoped>
.progressItem {
  height: 100%;
  min-width: 400px;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  line-height: normal;
  float: left;
}
.progressHeader {
  color: #ccc;
  background: #383838;
}
</style>