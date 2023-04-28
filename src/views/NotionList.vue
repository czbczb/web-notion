<script setup>
import { reactive } from "vue";
import router from "../router/index";
import NotionListItem from "../components/list/NotionListItem.vue";
import articleApi from "../api/article";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5173/api";

axios({
  method: "POST",
  // url: "/mrmax/helper",
  url: "/chat/process",
  headers: {
    // 'content-type': 'application/octet-stream'
    accept: "text/event-stream",
    authorization: 'ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhaRzFwYmlJNk1Td2lZMjl0Y0dGdWVTSTZNU3dpWlhod0lqb3hOamd6TVRFNU16TXdMQ0puYjJRaU9qQXNJbWxoZENJNk1UWTRNalV4TkRVek1Dd2ljM1ZpSWpvaWVtOXVaMkpoYnk1amRXbEFiVzlpZG1semRHRXVZMjl0SW4wLjFOb3YtQ1ZsTWZ5TmZ1TVhJeVdJTFNtTmRIRllSX3VfcEI1QkFoWGt3eWM'
  },
  onDownloadProgress(event) {
    console.log(event.target.responseText);
    console.log(555)
  },
  data: {
    issue: 'pod是什么'
  }
});

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
