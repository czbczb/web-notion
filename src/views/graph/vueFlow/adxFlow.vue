<template>
  <div class="flow-container">
    <div class="options">
      <a-switch
        v-model="readonly"
        hecked-children="只读"
        un-checked-children="编辑"
      ></a-switch>
      <a-button class="space-btn" type="primary" @click="exportConfig"
        >导出</a-button
      >
      <a-button type="primary" @click="addNode">添加节点</a-button>
    </div>
    <VueFlow
      :nodes="nodes"
      :edges="edges"
      :fit-view="true"
      :fit-view-options="{
        padding: 0.2, // 设置填充，确保图形不紧贴窗口边缘
        includeHiddenNodes: true, // 包括所有节点，即使它们是隐藏的
      }"
      :elements-updatable="readonly"
      :edges-updatable="readonly"
      :nodes-connectable="readonly"
      @nodes-change="handleNodesChange"
      @edges-change="handleEdgesChange"
    >
      <MiniMap />

      <Controls />

      <Background />
    </VueFlow>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";

const readonly = ref(false);
// 配置文件映射
const config = {
  name: "flow_exe_ab",
  root: {
    sequence: {
      name: "sequence1",
      elements: [
        { name: "RecallDsp" },
        { name: "ExperimentsByDspDiversion" },
        { name: "DSPPriorityChooseLayer" },
        { name: "SmartBidFilter" },
        { name: "FlowControlByDsp" },
        {
          name: "DowngradeByDspBusiness",
        },
        {
          name: "DecideUseProxyDispatch",
        },
      ],
    },
  },
};

// 自定义节点样式
const nodeStyle = {
  minWidth: "200px",
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

.flow-container {
  height: calc(100vh - 110px);
}

.options {
  position: absolute;
  right: 10px;
  z-index: 1000;
}

.space-btn {
  margin: 0 10px;
}

/* import the necessary styles for Vue Flow to work */
/* @import '@vue-flow/core/dist/style.css'; */

/* import the default theme, this is optional but generally recommended */
/* @import '@vue-flow/core/dist/theme-default.css'; */
</style>
