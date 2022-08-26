<script setup></script>
<template>
  <main class="designWrapper">
    <div class="libs">
      <slot name="libs"></slot>
    </div>
    <div class="form">
      <slot name="form"></slot>
    </div>
    <div class="property">
      <slot name="property"></slot>
    </div>
  </main>
</template>

<style scoped>
.designWrapper {
  display: flex;
}
.libs {
  flex: 0 0 250px;
  padding: 5px;
  border: 1px dashed #ccc;
  height: calc(100vh - 60px);
}
.form {
  width: 100%;
  padding: 5px;
  border: 1px dashed #ccc;
  height: calc(100vh - 60px);
}
.property {
  flex: 0 0 250px;
  padding: 5px;
  justify-self: flex-end;
  border: 1px dashed #ccc;
  height: calc(100vh - 60px);
}
</style>
