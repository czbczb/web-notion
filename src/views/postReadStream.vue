<template>
  <div>
    <h1>post方式读取stream的5种方式</h1>
    {{ text }}
    <h1>1、HTTP之SSE技术</h1>
    <pre>
     
    </pre>
    <h1>2、xhr的onDownloadProgress</h1>
    <p></p>
    <h1>3、fetch</h1>
    <pre>
async function fetchStreamData(url) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/octet-stream",
      Authorization: token,
    },
    body: JSON.stringify({
      issue: "k8s是什么",
    }),
  });
  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let result = "";

  // 逐块读取流数据
  while (true) {
    const { value, done } = await reader.read();
    console.log(decoder.decode(value));
    if (done) {
      console.log("流式读取完成");
      break;
    }
    const value1 = decoder.decode(value);
    for (let index = 0; index &lt value1.length; index++) {
      const element = value1[index];
      setTimeout(() => {
        // 使用TextDecoder将 Uint8Array 转换为字符串
        text.value += element;
      }, 1000);
    }
  }

  return result;
}
    </pre>
    <h1>4、getReader</h1>
    <h1>5、EventSource</h1>
    <pre>
     var stream = new EventSource("/api/chat/stream");
     stream.addEventListener("message", (e)=> {
         console.log(e.data);
     });
    </pre>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import axios from "axios";

// var stream = new EventSource("/api/chat/stream");
// stream.addEventListener("message", (e)=> {
//     console.log(e.data);
// });
var stream = new EventSource("/api/mrmax/helper");
stream.addEventListener("message", (e) => {
  console.log(e.data);
});

const url = "https://maxcloud-api-test.spotmaxtech.com/api/mrmax/helper";
const token =
  "ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhaRzFwYmlJNk1Td2lZMjl0Y0dGdWVTSTZNU3dpWlhod0lqb3hOamd6T0RBME5Ea3pMQ0puYjJRaU9qQXNJbWxoZENJNk1UWTRNekU1T1RZNU15d2ljM1ZpSWpvaWVtOXVaMkpoYnk1amRXbEFiVzlpZG1semRHRXVZMjl0SW4wLlg0WHd1azVSRlBRMDZxaVlPY0VPdTF1Y2MxYzFreldvMDhUQklDM3hnb3c";

// // *********第一种方式 on （不行）
// const sendAndReceiveStreamData = async () => {
//   const config = {
//     method: 'POST',
//     url,
//     headers: {
//       "Content-Type": "application/json",
//       Accept: 'application/octet-stream',
//       authorization: token,
//     },
//     responseType: 'stream',
//     data: JSON.stringify({
//       issue: "你知道k8s么",
//     }),
//   };
//   // 2. 发送带有流数据的 POST 请求

//   const response = await axios(config);
//   console.log(response);
//   let data = ''
//   const decoder = new TextDecoder("utf-8");
//   response.data.on('data', chunk => {
//     console.log(decoder.decode(chunk))
//     data += chunk;
//   });
//   response.data.on('end', chunk => {
//     console.log(data)
//   });
// };

// // 调用
// sendAndReceiveStreamData().catch((err) => {
//   console.error(err);
// });

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
const text = ref("");

// ********第四种方式 fetch     可以
async function fetchStreamData(url) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/octet-stream",
      Authorization: token,
    },
    body: JSON.stringify({
      issue: "k8s是什么",
    }),
  });
  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let result = "";

  // 逐块读取流数据
  while (true) {
    const { value, done } = await reader.read();
    console.log(decoder.decode(value));
    if (done) {
      console.log("流式读取完成");
      break;
    }
    const value1 = decoder.decode(value);
    for (let index = 0; index < value1.length; index++) {
      const element = value1[index];
      setTimeout(() => {
        // 使用TextDecoder将 Uint8Array 转换为字符串
        text.value += element;
      }, 1000);
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
</script>

<style lang="less" scoped></style>
