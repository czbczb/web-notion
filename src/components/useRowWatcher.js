import { reactive, watch, toRefs } from "vue";

export function useRowWatcher(row) {
  // 创建一个响应式对象，包含多个状态
  const state = reactive({
    isRender: 1,
    lastUpdated: Date.now(),
    // 其他状态...
  });

  // 创建一个方法，可以在组件中调用
  function updateRow(newData) {
    // 假设 row 是一个对象，这里直接赋值更新
    Object.assign(row, newData);
    // 更新状态
    state.isRender = 2;
    state.lastUpdated = Date.now();
  }
  // 监听 row 对象的变化
  watch(
    row,
    () => {
      // 当 row 发生变化时，更新状态
      state.isRender = 3;
      state.lastUpdated = Date.now();
      // 这里可以执行其他逻辑，比如重新渲染等
    },
    {
      deep: true, // 因为 row 是一个对象，所以需要深度监听
    }
  );

  // 返回响应式对象
  return {
    state,
    // ...toRefs(state),
    updateRow,
  };
}
