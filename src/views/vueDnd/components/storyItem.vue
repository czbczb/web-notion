<script setup>
import { computed, ref, unref } from 'vue'
import { useDrag, useDrop } from 'vue3-dnd'
import { toRefs } from '@vueuse/core'

const props = defineProps({
  id: {
    type: Number
  },
  text: {
    type: String
  },
  index: {
    type: Number,
    default: Number,
  },
  moveCard:{
    type: Function,
    default: () => null
  } 
})

const card = ref()
const [dropCollect, drop] = useDrop({
  accept: 'card',
  collect(monitor) {
    return {
      handlerId: monitor.getHandlerId(),
      isShallowOver: monitor.isOver({ shallow: true }),
      item: monitor.getItem()
    }
  },
  hover(item, monitor) {
    if (!card.value) {
      return
    }
    const dragIndex = item.index
    const hoverIndex = props.index
    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return
    }

    // Determine rectangle on screen
    const hoverBoundingRect = card.value?.getBoundingClientRect()

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    // Determine mouse position
    const clientOffset = monitor.getClientOffset()

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return
    }

    // Time to actually perform the action
    props.moveCard(dragIndex, hoverIndex)

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    item.index = hoverIndex
  },
})

const [collect, drag] = useDrag({
  type: 'card',
  item: () => {
    return { id: props.id, index: props.index }
  },
  collect: (monitor) => {
    return {
    isDragging: monitor.isDragging(),
    item: monitor.getItem()
  }
  },
})

const { handlerId, isShallowOver } = toRefs(dropCollect)
const { isDragging } = toRefs(collect)
const opacity = computed(() => (unref(isDragging) ? 0.4 : 1))

const setRef = (el) => {
  card.value = drag(drop(el))
}
</script>

<template>
  <div class="wrapper">
    <div
    :ref="setRef"
    class="card"
    :style="{ opacity }"
    :data-handler-id="handlerId"
  >
    {{ text }}
  </div>
  <div v-if="isShallowOver && !isDragging" :class="['indicator', { first: props.index === 0 }]"></div>
  </div>
  
</template>

<style lang="less" scoped>
.wrapper {
  position: relative;
  padding: .5rem 0;
}
.indicator {
  position: absolute;
  top: 0;
  width: 100%;
  height: 2px;
  background: #000;
  &.first {
    top: 0;
    bottom: unset;
  }
}
.card {
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px dashed gray;
  cursor: move;
}
</style>