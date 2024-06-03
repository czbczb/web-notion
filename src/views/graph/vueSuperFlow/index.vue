<template>
  <div style="height: calc(100vh - 120px)">
    <VueSuperFlow ref="flow" :origin="origin" :node-list="nodes" :link-list="edges" />
    <!-- <button @click="addNestedNode('node1')">Add Nested Node</button> -->
  </div>
</template>

<script setup>
import VueSuperFlow from 'vue-super-flow'
import 'vue-super-flow/lib/index.css'

import { ref } from 'vue'

const origin = ref([0,0])

const nodes = ref([
{
      id: "node43ciCsyL5ERMSDXL",
      width: 50,
      height: 25,
      coordinate: [179.828125, -229],
      meta: {
        id: "69edbfc2-f0f9-4a12-92ae-b2154f5dcc8f",
        prop: "condition",
        name: "IP库服务",
        desc: "IP库服务",
        users: [237],
      },
    },
    {
      id: "node07Yr3DlCiLUQ4dpN",
      width: 50,
      height: 25,
      coordinate: [123.8359375, -293.5],
      meta: {
        id: "6801bbfc-f06e-40c5-a553-537d43c7b6cd",
        prop: "condition",
        name: "HB/ADNET/Frontier",
        desc: "HB/ADNET",
        users: [153],
      },
    },
])

const edges = ref([
{
      id: "linkozpMt9FvxDKjhFxe",
      startId: "node07Yr3DlCiLUQ4dpN",
      endId: "node43ciCsyL5ERMSDXL",
      startAt: [50, 12.5],
      endAt: [25, 0],
      meta: null,
    },
])


// const addNestedNode = function (parentNodeId) {
//     // 生成一个新的子节点 ID
//     const newNodeId = `node-${this.nodes.length + 1}`;

//     // 找到父节点
//     const parentNode = nodes.value.find(node => node.id === parentNodeId);

//     // 创建新的子节点
//     const newNode = {
//       id: newNodeId,
//       x: parentNode.x + 50,
//       y: parentNode.y + 50,
//       width: 100,
//       height: 50,
//       label: 'New Child Node',
//       data: {
//         // 在这里添加您的自定义数据
//       },
//       ports: [
//         {
//           id: `${newNodeId}-port`,
//           type: 'output',
//           x: 100,
//           y: 25,
//           width: 10,
//           height: 10
//         }
//       ]
//     };

//     // 将新的子节点添加到父节点的 nodes 数组中
//     parentNode.nodes.push(newNode);

//     // 更新边的连接
//     edge.value.push({
//       id: `edge-${this.edges.length + 1}`,
//       source: `${parentNodeId}.port1`,
//       target: `${newNodeId}.${newNodeId}-port`
//     });

//     // 更新 Vue 组件的数据
//     nodes.value = [...nodes.value];
//     edges.value = [...edges.value];
//   }
</script>
