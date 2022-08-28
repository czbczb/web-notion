<template>
  <a-row justify="center" align="center" class="navWrapper">
    <a
      :class="item.type"
      class="headerText"
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
defineProps({
  listNav: Array,
});
</script>
<style scoped>
.navWrapper {
  flex-direction: column;
  height: 100%;
}
.headerText {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
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
