<template>
  <RecycleScroller
    class="scroller"
    :items="list.article"
    :item-size="32"
    key-field="id"
    v-slot="{ item }"
  >
    <div class="user">
      {{ item.name }}
    </div>
  </RecycleScroller>
</template>

<script setup>
import { reactive } from "vue";

const list = reactive({
  article: [],
});

const arr = Array.from({ length: 200 }).fill({name: 'test'});
const articles = []
arr.map((item, index) => {
  item = {
    id: index,
    name: "test" + index,
  };
  articles.push(item)
});
console.log(articles);
list.article = articles
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
