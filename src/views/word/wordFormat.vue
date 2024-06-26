<template>
  <div>
    <a-row style="margin: 20px 0">
      <a-col :span="24">
        <a-textarea v-model:value="prompt" placeholder="prompt" :rows="4" />
      </a-col>
      <a-col :span="24">
        <a-textarea
          v-model:value="systemMessage"
          placeholder="systemMessage"
          :rows="4"
        />
      </a-col>
    </a-row>
    <a-space>
      <a-upload :before-upload="handleFileUpload">
        <a-button>
          <UploadOutlined />
          Click to Upload
        </a-button>
      </a-upload>
      <a-button @click="convertToHtml">Convert to HTML</a-button>
      <a-button @click="startTransform" :loading="loading">开始翻译</a-button>
    </a-space>
    <a-row justify>
      <a-col :span="12">
        <a-card title="预览">
          <div id="docContainer" v-html="mergedHtml"></div>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="翻译结果" >
          <div v-html="displayContent"></div>
        </a-card>
      </a-col>
      
    </a-row>
  </div>
</template>

<script setup>
import { ref, computed, unref } from "vue";
import docx2html from "docx2html";
import { UploadOutlined } from "@ant-design/icons-vue";
import api from "@/api/article.js";

const uploadedFile = ref(null);
const prompt = ref(
  `将这个html字符串中的所有中文，翻译为英文。需要注意一下几点：
1、不要翻译dom元素,dom元素的数量和格式不要改变, 所有html元素都要，不要合并和删除，保留原样，你只需要翻译元素内的中文。
2、翻译时表格的所有样式都需要保留，表格的行数和列数必须保持一致，如果有合并的行或者列，需要保持原有的合并状态。
3、请注意翻译时数字的格式。
4、翻译时一个p元素里面有多个span的时候，这多个span元素都要保留。
6、所有dom元素不要合并，保留和我传递给你一样的dom结构。
7、只返回我给你的内容，不要提供任何多余的话。
`
);

const promptHtml = ref("");
const mergedHtml = ref("");
const styleElementMap = ref(null);

const systemMessage = ref(
  "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using string."
);

const transformRes = ref("");
const loading = ref(false);

const displayContent = computed(() => {
  return createDisplayContent(
    unref(transformRes.value),
    unref(styleElementMap)
  );
});

const handleFileUpload = (file) => {
  uploadedFile.value = file;
  return false;
};

const convertToHtml = async () => {
  docx2html(uploadedFile.value, {
    name: "newDoc.docx",
    container: document.getElementById("docContainer"),
  })
    .then((htmlEl) => {
      htmlEl = clearUnsupported(htmlEl);
      mergedHtml.value = mergeSpanElements(htmlEl);
      styleElementMap.value = createStyleElementMap(mergedHtml.value);
      promptHtml.value = createPrompt(
        unref(mergedHtml.value),
        unref(styleElementMap)
      );
    })
    .catch((err) => {
      console.log(err);
    });
  return false;
};

function clearUnsupported(htmlEl) {
  const unsupportedEle = htmlEl.content.querySelectorAll(".unsupported");
  for (let i = 0; i < unsupportedEle.length; i++) {
    console.log(unsupportedEle[i]);
    unsupportedEle[i].remove();
  }
  return htmlEl;
}

function mergeSpanElements(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const paragraphs = doc.querySelectorAll("p");

  paragraphs.forEach((p) => {
    let prevSpan = null;
    const spans = Array.from(p.querySelectorAll("span"));

    for (let i = 0; i < spans.length; i++) {
      const span = spans[i];
      const style = span.getAttribute("style");

      if (prevSpan && prevSpan.getAttribute("style") === style) {
        prevSpan.textContent += span.textContent;
        span.remove();
      } else {
        prevSpan = span;
      }
    }
  });

  return doc.documentElement.outerHTML;
}

function createStyleElementMap(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const styleElements = doc.querySelectorAll("style");
  const scriptElements = doc.querySelectorAll("script");
  const styleElementMap = [];

  styleElements.forEach((el) => {
    if (el.textContent !== "") {
      styleElementMap.push({
        style: `<style>${el.textContent}</style>`,
        el,
      });
    }
  });

  scriptElements.forEach((sc) => {
    if (sc.textContent !== "") {
      styleElementMap.push({
        style: `<script>${sc.textContent}<//script>`,
        el: sc,
      });
    }
  });
  const elements = doc.querySelectorAll("*");
  elements.forEach((element) => {
    const style = element.getAttribute("style");
    if (style) {
      styleElementMap.push({
        style: element.getAttribute("style"),
        el: element,
      });
    }
  });

  return styleElementMap;
}

function createPrompt(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  // 移除所有样式
  const elements = doc.querySelectorAll("*");
  elements.forEach((element) => {
    const style = element.getAttribute("style");
    if (style) {
      console.log(style);
      element.setAttribute("style", "t");
    }
  });

  const allStyleEl = doc.querySelectorAll("style");
  // 移除 <style>标签
  allStyleEl.forEach((item) => {
    item.remove();
  });

  const allScriptEl = doc.querySelectorAll("script");
  // 移除 <script>标签
  allScriptEl.forEach((item) => {
    item.remove();
  });
  return doc.documentElement.outerHTML;
}

function createDisplayContent(transformValue, mapObj) {
  let displayContent = transformValue;
  const parser = new DOMParser();
  const doc = parser.parseFromString(displayContent, "text/html");
  const elements = [];
  doc.querySelectorAll("*").map((item) => {
    const style = item.getAttribute("style");
    if (style === "t") {
      elements.push({
        style,
        el: item,
      });
    }
  });
  // const elements = createStyleElementMap(transformValue);

  const filterMap = mapObj?.filter(
    (item) => item.el.tagName !== "STYLE" && item.el.tagName !== "SCRIPT"
  );
  console.log(elements, filterMap);
  elements.forEach((item, index) => {
    console.log(item.el, filterMap[index].el);
  });
  if (mapObj) {
    mapObj.forEach((item) => {
      const { el, style } = item;
      if (el.tagName === "STYLE") {
        displayContent = displayContent.replace("</head>", `${style}</head>`);
      } else if (el.tagName === "SCRIPT") {
        displayContent = displayContent.replace("</body>", `${style}</body>`);
      } else {
        // const replacedText = transformValue.match(
        //   new RegExp(`<${element.tagName}[^>]*>([^<]+)<\/${element.tagName}>`)
        // );
        // if (replacedText && replacedText.length > 1) {
        //   displayContent = displayContent.replace(
        //     replacedText[0],
        //     `<${element.tagName} style="${style}">${replacedText[1]}</${element.tagName}>`
        //   );
        // }
      }
    });
  }

  return displayContent;
}

const startTransform = async () => {
//   transformRes.value = ''
// return 
  if (promptHtml.value) {
    const params = {
      prompt: `${prompt.value}
      ${promptHtml.value.toString()}`,
      history: [],
      systemMessage: systemMessage.value,
    };
    loading.value = true;
    api
      .htmlToDocx(params)
      .then((res) => {
        console.log(res);
        transformRes.value = res.data;
        loading.value = false;
      })
      .catch((err) => {
        console.log(err);
        loading.value = false;
      });
  }
};
</script>
