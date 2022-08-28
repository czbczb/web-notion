<template>
  <a-row justify="center" align="center" class="navWrapper">
    <a
      :class="item.type"
      :href="item.target"
      v-for="(item, index) in listNav"
      :key="index"
      >{{ item.html }}</a
    >
    <!-- <a-list size="small" class="listNav" :data-source="state.listnav">
      <template #renderItem="{ item }">
        <a-list-item>{{ item.title }}</a-list-item>
      </template>
    </a-list> -->
  </a-row>
</template>

<script setup>
import { computed, onMounted } from "vue";

// const state = reactive({
//   listnav: [
//     {
//       title: "test1",
//     },
//     {
//       title: "test2",
//     },
//   ],
// });

onMounted(() => {
  console.log(listNav);
});

const props = defineProps({
  config: Array,
});

const listNav = computed(() => {
  return props.config.filter((item) =>
    ["h1", "h2", "h3", "h4", "h5", "h6"].includes(item.type)
  );
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
