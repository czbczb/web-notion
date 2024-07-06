<template>
  <a-card :bodyStyle="{padding: '4px 0', width:'120px'}" class="floatMenu" :style="{left: `${position.left - 120}px`, top: `${position.top}px`}">
    <div v-for="key in keys" :key="key" @click="submitStyle(key)" class="menu-item">
      <div class="menu-item-content">
        {{ reportTemplate.chinese[key].text }}
      </div>
    </div>
  </a-card>
</template>

<script setup>
const emit = defineEmits(['updateParticalStyle'])
const props = defineProps({
  reportTemplate: {
    type: Object,
  },
  position: {
    type: Object,
    default: {
      left: 0,
      top: 0,
    }
  }
})

const keys = computed(()=> {
  return Object.keys(props.reportTemplate.chinese)
})


const submitStyle = (key) => {
  const languages = Object.keys(props.reportTemplate)
  const styles = {}
  languages.map(language => {
    const { text, ...style } = props.reportTemplate[language][key]
    styles[language] = style
  })
  emit('updateParticalStyle', styles)
}
</script>
<style scoped lang='less'>
.floatMenu {
  position: fixed;
  top: 0;
  left: 0;
}
.menu-item {
  

  cursor: pointer;
  transition: all linear 0.3;
  &:last-child {
    border-bottom: 0;
  }
  &:hover {
    background: #eee;
  }
  .menu-item-content {
    margin: 4px 8px;
    border-bottom: 1px solid #eee;
  }
}
</style>