
<template>
  <a-row justify="center" align="center" class="navWrapper">
    <a
      :class="item.type"
      :href="item.target"
      v-for="(item, index) in config"
      :key="index"
      >{{ item.title }}</a
    >
    <a-list size="small" class="listNav" :data-source="state.listnav">
      <template #renderItem="{ item }">
        <a-list-item>{{ item.title }}</a-list-item>
      </template>
    </a-list>
  </a-row>
</template>

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

defineProps({
  config: Array,
});

</script>
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
