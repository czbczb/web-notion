<script setup>
defineProps({
  pageItem: Object,
});
</script>
<template>
  <li class="pageItem">
    <h3>{{ pageItem.title }}</h3>
  </li>
</template>
<style scoped>
.pageItem {
  flex: 1;
  min-width: 200px;
  max-width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  margin: 5px;
  padding: 5px;
}
</style>