<script setup>
import { reactive } from "vue";
import router from "../router/index";
import NotionItem from "../components/list/NotionItem.vue";
const state = reactive({
  pageList: [
    {
      key: 1,
      title: "test",
    },
    {
      key: 2,
      title: "test2",
    },
  ],
});
const createPage = () => {
  router.push({ name: "create" });
};
</script>
<template>
  <header class="notionListheader">
    <b>总共：12000个</b>
    <a-button type="primary" @click="createPage"> 创建新的文章 </a-button>
  </header>
  <div class="notionList">
    <NotionItem
      v-for="item in state.pageList"
      :key="item.key"
      :pageItem="item"
    ></NotionItem>
  </div>
</template>
<style scoped>
.notionListheader {
  padding: 10px 0;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.notionList {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  list-style: none;
}
.primary {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
  height: 30px;
  cursor: pointer;
}
</style>
