<template>
  <div class="container">
    <div class="article_text">
      与组合式 API 时该语法是默认推荐。相比于普通的语法，它具有更多优势：
      更少的样板内容，更简洁的代码。 能够使用纯 TypeScript 声明 props
      和自定义事件。 更好的运行时性能
      (其模板会被编译成同一作用域内的渲染函数，避免了渲染上下文代理对象)。
      更好的 IDE 类型推导性能 (减少了语言服务器从代码中抽取类型的工作)。
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.container {
  border: 1px solid #ccc;
  height: 500px;
  width: 300px;
  margin: 0 auto;
  overflow: scroll;
  transform: rotate(-90deg);
}
.article_text {
  transform: rotate(90deg);
  white-space: nowrap;
}
</style>
