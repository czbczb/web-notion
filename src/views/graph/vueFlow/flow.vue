<script setup>
import { ref } from 'vue'
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'

const nodes = ref([
  { id: '1', type: 'input', label: 'node', position: { x: 250, y: 0 } },
  {
    id: '2',
    label: 'parent node',
    position: { x: 100, y: 100 },
    style: { backgroundColor: 'rgba(16, 185, 129, 0.5)', width: '200px', height: '200px' },
  },
  {
    id: '2a',
    label: 'child node',
    position: { x: 10, y: 50 },
    parentNode: '2',
  },
  {
    id: '4',
    label: 'parent node',
    position: { x: 320, y: 175 },
    style: { backgroundColor: 'rgba(16, 185, 129, 0.5)', width: '400px', height: '300px' },
  },
  {
    id: '4a',
    label: 'child node',
    position: { x: 15, y: 65 },
    extent: 'parent',
    parentNode: '4',
  },
  {
    id: '4b',
    label: 'nested parent node',
    position: { x: 15, y: 120 },
    style: { backgroundColor: 'rgba(139, 92, 246, 0.5)', height: '150px', width: '270px' },
    parentNode: '4',
  },
  {
    id: '4b1',
    label: 'nested child node',
    position: { x: 20, y: 40 },
    parentNode: '4b',
  },
  {
    id: '4b2',
    label: 'nested child node',
    position: { x: 100, y: 100 },
    parentNode: '4b',
  },
  { id: '4c', label: 'child node', position: { x: 200, y: 65 }, parentNode: '4' },
  {
    id: '999',
    type: 'input',
    label: 'Drag me to extend area!',
    position: { x: 20, y: 100 },
    class: 'light',
    expandParent: true,
    parentNode: '2',
  },
])

const edges = ref([
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-4', source: '1', target: '4' },
  { id: 'e1-4c', source: '1', target: '4c' },
  { id: 'e2a-4a', source: '2a', target: '4a' },
  { id: 'e4a-4b1', source: '4a', target: '4b1' },
  { id: 'e4a-4b2', source: '4a', target: '4b2' },
  { id: 'e4b1-4b2', source: '4b1', target: '4b2' },
])
</script>

<template>
  <div style="height: calc(100vh - 120px)">
    <VueFlow :nodes="nodes" :edges="edges" fit-view-on-init elevate-edges-on-select>
      <MiniMap />

      <Controls />

      <Background />
    </VueFlow>
  </div>
  
</template>


<style>
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.34.1/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/core@1.34.1/dist/theme-default.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css';
@import 'https://cdn.jsdelivr.net/npm/@vue-flow/node-resizer@latest/dist/style.css';

.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}


/* import the necessary styles for Vue Flow to work */
/* @import '@vue-flow/core/dist/style.css'; */

/* import the default theme, this is optional but generally recommended */
/* @import '@vue-flow/core/dist/theme-default.css'; */
</style>