<template>
  <!-- 
    调研结论：
    1、基于canvas实现
    2、不支持合并后的data cell重新自定义渲染，
    只能指定渲染某一个data cell的数据 show-text: true
    3、能够渲染大量数据

  -->
    <a-select
        style="width: 200px"
        v-model:value="value"
        :options="state.options"
        @change="handleChange"
        placeholder="切换模式"
      ></a-select>
      <div style="width: 100%;">
        <div id="antvContainer" ></div>
      </div>
</template>

<script setup>
import { PivotSheet, MergedCell, S2Event, BaseTooltip } from '@antv/s2';
import { onMounted, ref, reactive, unref, render, createVNode } from 'vue';
import { debounce } from 'lodash';
import dataCfg from './antvS2DataCfg.js';
import TooltipContent from './antvS2TooltipContent.vue';
import "@antv/s2-vue/dist/style.min.css";

const value = ref('grid');

const state = reactive({
  options: [
    { label: 'grid', value: 'grid' },
    { label: 'tree', value: 'tree' },
  ],
  s2: null,
})

const handleChange = async hierarchyType => {
  state.s2.setOptions({
    hierarchyType,
  });
  await state.s2.render(false);
};

class CustomTooltip extends BaseTooltip {
  constructor(spreadsheet) {
    super(spreadsheet);
  }

  renderContent() {
    const cell = this.spreadsheet.getCell(this.options.event?.target);
    const meta = cell?.getMeta();

    // 使用 Vue 提供的 `createVNode` 方法将组件渲染成虚拟 DOM
    const tooltipVNode = createVNode(TooltipContent, { meta });
    // 使用  `render` 函数将其挂载在 tooltip 容器上
    render(tooltipVNode, this.container);
  }
}

class CustomMergedCell extends MergedCell {
  // 覆盖背景绘制，可覆盖或者增加绘制方法
  // drawBackgroundShape() {
  //   super.drawBackgroundShape();
  //   this.backgroundShape.style.fill = 'red';
  // }

  constructor(spreadsheet, cells, meta) {
    super(spreadsheet, cells, meta);
  }

  drawTextShape(){

  }

  render(container) {
    // 清除容器中的内容
    container.innerHTML = '';

    // 在这里创建并渲染你的图表组件
    const chartContainer = document.createElement('div');
    chartContainer.style.width = '100%';
    chartContainer.style.height = '100%';
    chartContainer.innerHTML = 'test';
    container.appendChild(chartContainer);

    // 使用 my-chart-library 创建图表并渲染到 chartContainer 元素中
    createChart(chartContainer, this.cells.map(cell => cell.data));
  }
}

// 初试渲染
const renderAntvS2 = ()=> {
  const container = document.getElementById('antvContainer');

  const s2Options = {
      width: 600,
      height: 480,
      hierarchyType: 'grid',
      tooltip: {
        enable: true,
        render: (spreadsheet) => new CustomTooltip(spreadsheet),
      },
      mergeCells: {
        hideData: true,
      },
      mergedCellsInfo: [
        [
          // 此单元格的 meta 信息将作为合并单元的 meta 信息
          { colIndex: 0, rowIndex: 0 },
          { colIndex: 1, rowIndex: 0 },
          { colIndex: 2, rowIndex: 0 },
          { colIndex: 3, rowIndex: 0 },
        ],
      ],
      mergedCell: (spreadsheet, cells, meta) =>
        new CustomMergedCell(spreadsheet, cells, meta),
  }

  state.s2 = new PivotSheet(container, dataCfg, s2Options);

  state.s2.render();
}

// 表格自适应
const resizeAntvS2 = ()=> {
  const debounceRender = debounce(async (width, height) => {
      state.s2.changeSheetSize(width - 100, height);
      await state.s2.render(false);
    }, 200);

    const resizeObserver = new ResizeObserver(([entry] = []) => {
      const [size] = entry.borderBoxSize || [];

      debounceRender(size.inlineSize, size.blockSize);
    });

    // 通过监听 document.body 来实现监听窗口大小变化
    resizeObserver.observe(document.body);

    // 表格销毁时取消监听
    state.s2.on(S2Event.LAYOUT_DESTROY, () => {
      resizeObserver.disconnect();
    });
}

onMounted(()=> {
  renderAntvS2(unref(value))
  // resizeAntvS2()
})
</script>

<style lang="scss" scoped>

</style>