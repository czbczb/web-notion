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
  box-shadow: 0px 0px 3px #eee;
  cursor: pointer;
  border-radius: 3.5px;
  transition: all linear 0.2s;
}
.pageItem:hover {
  box-shadow: 0px 0px 5px #ccc;
}
</style>
