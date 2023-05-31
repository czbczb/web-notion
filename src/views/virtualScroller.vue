<template>
  <RecycleScroller
    class="scroller"
    :items="list.article"
    :item-size="32"
    :buffer="200"
    key-field="id"
    v-slot="{ item }"
  >
    <div class="user">
      {{ item.name }}
    </div>
  </RecycleScroller>
</template>

<script setup>
import { reactive, onMounted } from "vue";

const list = reactive({ article: [] });

onMounted(() => {
  initState();
});

const initState = () => {
  const articles = [];
  Array.from({ length: 300000 })
    .fill({ name: "test" })
    .map((item, index) => {
      item = {
        id: index,
        name: "test" + index,
      };
      articles.push(item);
    });

  list.article = articles;
};
</script>

<style lang="less" scoped>
.scroller {
  padding-top: 90px;
  height: 100vh;
}

.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
