<template>
  <div style="height: 100vh">
    <div>
      <a-button class="space-btn" type="primary" @click="exportConfig"
        >导出</a-button
      >
      <a-button type="primary" @click="addNode">添加节点</a-button>
    </div>
    <VueFlow
      :nodes="nodes"
      :edges="edges"
      :elements-updatable="true"
      :edges-updatable="true"
      :nodes-connectable="true"
      @nodes-change="handleNodesChange"
      @edges-change="handleEdgesChange"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { VueFlow, useVueFlow } from "@vue-flow/core";

// 配置文件映射
const config = {
  name: "flow_exe_ab",
  root: {
    sequence: {
      name: "sequence1",
      elements: [
        { name: "allocator.DspRecallLayer.RecallDsp" },
        { name: "allocator.DspRecallLayer.ExperimentsByDspDiversion" },
        { name: "allocator.DSPPriorityChooseLayer" },
        { name: "allocator.DSPPriorityChooseLayer.SmartBidFilter" },
        { name: "allocator.DSPDistributionCapabilityLayer.FlowControlByDsp" },
        {
          name: "allocator.DSPDistributionCapabilityLayer.DowngradeByDspBusiness",
        },
        {
          name: "allocator.DSPDistributionCapabilityLayer.DecideUseProxyDispatch",
        },
      ],
    },
  },
};

// 自定义节点样式
const nodeStyle = {
  minWidth: "400px",
};

// 生成 Vue Flow 节点和连接
const nodes = ref(
  config.root.sequence.elements.map((element, index) => ({
    id: `node-${index}`,
    label: element.name,
    position: { x: 410, y: 100 * index }, // 可以根据实际需要调整
    data: { label: element.name },
    style: nodeStyle,
  }))
);

const edges = ref(
  nodes.value
    .map((node, index) => {
      if (index === nodes.value.length - 1) return null;
      return {
        id: `edge-${index}`,
        source: `node-${index}`,
        target: `node-${index + 1}`,
      };
    })
    .filter(Boolean)
);

const vueFlow = useVueFlow();

// 处理节点和线条变化
const handleNodesChange = (changes) => {
  vueFlow.value.handleNodeChanges(changes);
};

const handleEdgesChange = (changes) => {
  vueFlow.value.handleEdgeChanges(changes);
};

let nodeCount = nodes.value.length;
const addNode = () => {
  const newNode = {
    id: `node-${nodeCount}`,
    label: `New Node ${nodeCount}`,
    position: { x: 200 * nodeCount, y: 100 },
    data: { label: `New Node ${nodeCount}` },
  };
  nodes.value.push(newNode);
  nodeCount++;
};

// 导出配置
const exportConfig = () => {
  const exportedElements = nodes.value.map((node) => ({
    element: {
      name: node.data.label,
    },
  }));

  const exportedConfig = {
    name: "flow_exe_ab",
    root: {
      sequence: {
        name: "sequence1",
        elements: exportedElements,
      },
    },
  };

  console.log("导出的配置:", JSON.stringify(exportedConfig, null, 2));
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/@vue-flow/core@1.34.1/dist/style.css";
@import "https://cdn.jsdelivr.net/npm/@vue-flow/core@1.34.1/dist/theme-default.css";
@import "https://cdn.jsdelivr.net/npm/@vue-flow/controls@latest/dist/style.css";
@import "https://cdn.jsdelivr.net/npm/@vue-flow/minimap@latest/dist/style.css";
@import "https://cdn.jsdelivr.net/npm/@vue-flow/node-resizer@latest/dist/style.css";

.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}
.space-btn {
  margin-right: 10px;
}

/* import the necessary styles for Vue Flow to work */
/* @import '@vue-flow/core/dist/style.css'; */

/* import the default theme, this is optional but generally recommended */
/* @import '@vue-flow/core/dist/theme-default.css'; */
</style>
