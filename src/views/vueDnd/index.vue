<template>
  <DndProvider :backend="HTML5Backend">
    <Container></Container>
  </DndProvider>
</template>

<script setup>
import Container from './components/container.vue'
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
</script>

<style lang="scss" scoped>

</style>