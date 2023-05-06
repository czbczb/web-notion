<script setup>
import { reactive, ref } from "vue";
import router from "../router/index";
import NotionListItem from "../components/list/NotionListItem.vue";
import articleApi from "../api/article";
import axios from "axios";


const url = "https://maxcloud-api-test.spotmaxtech.com/api/mrmax/helper";
const token = "ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhaRzFwYmlJNk1Td2lZMjl0Y0dGdWVTSTZNU3dpWlhod0lqb3hOamd6T0RBME5Ea3pMQ0puYjJRaU9qQXNJbWxoZENJNk1UWTRNekU1T1RZNU15d2ljM1ZpSWpvaWVtOXVaMkpoYnk1amRXbEFiVzlpZG1semRHRXVZMjl0SW4wLlg0WHd1azVSRlBRMDZxaVlPY0VPdTF1Y2MxYzFreldvMDhUQklDM3hnb3c"


// *********第一种方式 on （不行）
const sendAndReceiveStreamData = async () => {
  const config = {
    method: 'POST',
    url,
    headers: {
      "Content-Type": "application/json",
      Accept: 'application/octet-stream',
      authorization: token,
    },
    responseType: 'stream',
    data: JSON.stringify({
      issue: "你知道k8s么",
    }),
  };
  // 2. 发送带有流数据的 POST 请求

  const response = await axios(config);
  console.log(response);
  let data = ''
  const decoder = new TextDecoder("utf-8");
  response.data.on('data', chunk => {
    console.log(decoder.decode(chunk))
    data += chunk;
  });
  response.data.on('end', chunk => {
    console.log(data)
  });
};

// 调用
sendAndReceiveStreamData().catch((err) => {
  console.error(err);
});



// *******第二种方式  getReader  （不行）
// const sendAndReceiveStreamData1 = async () => {
//   const config = {
//     headers: {
//       "Content-Type": "application/octet-stream",
//       authorization: token,
//     },
//     responseType: "stream",
//   };
//   // 2. 发送带有流数据的 POST 请求
//   const url = "https://maxcloud-api-test.spotmaxtech.com/api/mrmax/helper";
//   const response = await axios.post(
//     url,
//     {
//       issue: "你知道k8s么",
//     },
//     config
//   );
//   console.log(response);
//   // 3. 处理流式响应数据
//   const reader = response.data.getReader();

//   while (true) {
//     const { done, value } = await reader.read();
//     if (done) break;

//     // 处理数据块
//     handleDataChunk(value);
//   }

//   reader.releaseLock();
// };

// const handleDataChunk = (chunk) => {
//   // 处理数据块
//   console.log(chunk);
// };

// // 调用
// sendAndReceiveStreamData1().catch((err) => {
//   console.error(err);
// });


// ********第三种方式   onDownloadProgress   可以
// axios({
//   method: "POST",
//   // url: "/mrmax/helper",
//   url: "/chat/process",
//   headers: {
//     'content-type': 'application/json',
//     // accept: "text/event-stream",
//     accept: "application/octet-stream",
//     authorization: token,
//   },
//   onDownloadProgress(event) {
//     console.log(event.target.responseText);
//     console.log(555)
//   },
//   data: {
//     issue: 'pod是什么'
//   }
// });
const text = ref('')

// ********第四种方式 fetch     可以
async function fetchStreamData(url) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: 'application/octet-stream',
      Authorization: token,
    },
    body: JSON.stringify({
      issue: 'k8s是什么'
    }),
  });
  console.log(response);
  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let result = "";

  // 逐块读取流数据
  while (true) {

    const { value, done } = await reader.read();
    console.log(decoder.decode(value))
    if (done) {
      console.log("流式读取完成");
      break;
    }
    const value1 = decoder.decode(value);
    for (let index = 0; index < value1.length; index++) {
      const element = value1[index];
      setTimeout(() => {
      // 使用TextDecoder将 Uint8Array 转换为字符串
      text.value += element
    }, 1000)
    }
    
  }

  return result;
}

fetchStreamData(url)
  .then((data) => {
    console.log("流式读取的数据：", data);
  })
  .catch((error) => {
    console.error("获取数据失败：", error);
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
    <NotionListItem v-for="item in state.pageList" :key="item.key" :pageItem="item"></NotionListItem>
    <h1>
      {{text}}</h1>
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
