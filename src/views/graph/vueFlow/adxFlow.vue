<template>
  <div>
    <a-modal
      v-model:open="showConfig"
      title="导出配置"
      centered
      @ok="showConfig = false"
    >
      <code class="json" ref="codeBlock">{{ exportContent }}</code>
    </a-modal>
    <div class="flow-container">
      <div class="options">
        <a-button class="space-btn" type="primary" @click="exportConfig"
          >导出</a-button
        >
        <a-button class="space-btn" type="primary">校验</a-button>
        <a-button class="space-btn" type="primary" @click="addNode"
          >添加节点</a-button
        >
      </div>
      <VueFlow
        :nodes="nodes"
        :edges="edges"
        :fit-view="true"
        :fit-view-options="{
          padding: 0.2, // 设置填充，确保图形不紧贴窗口边缘
          includeHiddenNodes: true, // 包括所有节点，即使它们是隐藏的
        }"
        :nodes-draggabel="editable"
        :elements-updatable="editable"
        :edges-updatable="editable"
        :nodes-connectable="editable"
        @nodes-change="handleNodesChange"
        @edges-change="handleEdgesChange"
      >
        <MiniMap />

        <Controls />

        <Background />
      </VueFlow>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/github.css"; // 选择一个样式，GitHub风格

hljs.registerLanguage("json", json);

const editable = ref(true);
const exportContent = ref("");
const codeBlock = ref(null);
const showConfig = ref(true);

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
console.log(vueFlow);
// 处理节点和线条变化
const handleNodesChange = (changes) => {
  vueFlow.updateNode(changes);
};

const handleEdgesChange = (changes) => {
  vueFlow.edgesUpdatable(changes);
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

  exportContent.value = {
    name: "flow_exe_ab",
    root: {
      sequence: {
        name: "sequence1",
        elements: exportedElements,
      },
    },
  };
  console.log(JSON.stringify(exportContent.value));
  // hljs.highlightBlock(codeBlock.value);
  showConfig.value = true;
  console.log(showConfig.value);
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
  display: flex;
}

.options {
  position: absolute;
  right: 10px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: 120px;
  padding: 10px;
}

.space-btn {
  margin: 10px 0;
}

/* import the necessary styles for Vue Flow to work */
/* @import '@vue-flow/core/dist/style.css'; */

/* import the default theme, this is optional but generally recommended */
/* @import '@vue-flow/core/dist/theme-default.css'; */
</style>
