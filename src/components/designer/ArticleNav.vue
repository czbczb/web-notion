<script setup>
import { reactive } from "vue";
const state = reactive({
  listnav: [
    {
      title: "test1",
    },
    {
      title: "test2",
    },
  ],
});
</script>
<template>
  <a-row justify="center" align="center" class="navWrapper">
    <a class="h1" href="#h1">h1</a>
    <a class="h2" href="#h2">h2</a>
    <a class="h3" href="#h3">h3</a>
    <a class="h4" href="#h4">h4</a>
    <a class="h5" href="#h5">h5</a>
    <a class="h6" href="#h6">h6</a>
    <a-list size="small" class="listNav" :data-source="state.listnav">
      <template #renderItem="{ item }">
        <a-list-item>{{ item.title }}</a-list-item>
      </template>
    </a-list>
  </a-row>
</template>
<style scoped>
.navWrapper {
  flex-direction: column;
  height: 100%;
}
.listNav {
  list-style-type: url("@/assets/point.png");
}
.h2 {
  text-indent: 1rem;
}
.h3,
.h4,
.h5,
.h6 {
  text-indent: 2rem;
}
</style>
