// useHistoryStore.js
import { defineStore } from "pinia";

// 从 localStorage 获取 showHistory 的默认值
const getShowHistoryFromStorage = () => {
  const showHistory = localStorage.getItem("showHistory");
  return showHistory === "true"; // 转换为布尔值
};

export const useHistoryStore = defineStore("history", {
  state: () => ({
    showHistory: getShowHistoryFromStorage(), // 初始状态
  }),
  actions: {
    // 切换 showHistory 的值
    toggleShowHistory() {
      this.showHistory = !this.showHistory;
      localStorage.setItem("showHistory", this.showHistory);
    },
    // 设置 showHistory 的值
    setShowHistory(value) {
      this.showHistory = value;
      localStorage.setItem("showHistory", value);
    },
  },
});
