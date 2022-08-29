<script setup>
import { reactive } from "vue";
import router from "../router/index";
import NotionListItem from "../components/list/NotionListItem.vue";
import articleApi from "../api/article";

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
// mock list
articleApi.getList().then((res) => {
  console.log(res);
});
</script>
<template>
  <header class="notionListheader">
    <b>总共：12000个</b>
    <a-button type="primary" @click="createPage"> 创建新的文章 </a-button>
  </header>
  <div class="notionList">
    <NotionListItem
      v-for="item in state.pageList"
      :key="item.key"
      :pageItem="item"
    ></NotionListItem>
  </div>
</template>
<style scoped>
.notionListheader {
  padding: 80px 0 10px 0;
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
