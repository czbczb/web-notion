<template>
  <div>
  <a-form :label-col="{span: 4}" :wrapper-col="{span: 14}">
    <a-form-item label="模版" >
      <a-select style="width: 200px;" v-model:value="reportTemplateKey">
        <a-select-option value="seasonReport">季度报告</a-select-option>
        <a-select-option value="normalReport">普通通告</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="目标语言" >
      <a-select style="width: 200px;" v-model:value="language">
        <a-select-option value="英语">英语</a-select-option>
        <a-select-option value="繁体中文">繁体中文</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="提示词">
      <a-textarea v-model:value="prompt" placeholder="prompt" :rows="4" />
    </a-form-item>
    <a-form-item label="角色">
      <a-textarea
          v-model:value="systemMessage"
          placeholder="systemMessage"
          :rows="4"
        />
    </a-form-item>
    <a-form-item label="上传文件">
      <a-upload :before-upload="handleFileUpload">
        <a-button>
          <UploadOutlined />
          Click to Upload
        </a-button>
      </a-upload>
    </a-form-item>
    <a-row justify="center" style="margin-bottom: 20px;">
     <a-button type="primary" @click="convertToHtml" style="margin-right: 10px;">Convert to HTML</a-button>
     <a-button type="primary" @click="translateHandle" :loading="loading">开始翻译</a-button>
   </a-row>
  </a-form>
  <div class="docMain" >
    <a-card title="预览" class="previewCard" ref="doclayout">
      <div id="docContainer" v-html="mergedHtml" ref="previewRef"></div>
    </a-card>
    <div class="mirrorLine">
      <svgPathLine v-if="currentEl && targetEl" :dom1="currentEl" :dom2="targetEl"></svgPathLine>
    </div>

    <a-card class="previewCard">
      <template #title>
      <a-row justify="space-between">
        <a-col>翻译结果</a-col>
        <a-col>
          <a-button :loading="saveLoading" shape="circle" size="small" @click="downLoadDoc">
            <template #icon><SaveOutlined /></template>
          </a-button>
         </a-col>
      </a-row>
      </template>
      <div v-html="displayContent" ref="translateRef"></div>
    </a-card>

  </div>

  <floatMenu v-show="visibleMenu" :position="position" :reportTemplate="reportTemplate" @updateParticalStyle="updateParticalStyle"></floatMenu>
  </div>
</template>

<script setup>
import { ref, computed, unref, onMounted } from "vue";
import docx2html from "docx2html";
import { UploadOutlined, SaveOutlined  } from "@ant-design/icons-vue";
import api from "@/api/article.js";
import { templates } from './config.js';
import { convertWordSizeToPx } from './utils.js';
import floatMenu from './floatMenu.vue';
import svgPathLine from './svgPathLine.vue';
import history from './history.js'


const language = ref('英语');
const reportTemplateKey = ref('seasonReport');
const uploadedFile = ref(null);
const prompt = ref(`翻译时一个p元素里面有多个span的时候，这多个span元素都要保留`);


const previewRef = ref(null);
const translateRef = ref(null);

const promptHtml = ref("");
const mergedHtml = ref("");
const styleElementMap = ref(null);

const systemMessage = computed(() => 
  `你是一个翻译助手，并且精通javascript，html，csss。 熟悉其专业术语。按照以下要求返回一个字符串：
  不要翻译html标签，只翻译内容。
  将这个html字符串中的所有中文，翻译为${language.value}。
  带有order属性的标签一个都不能少，不带order的属性的标签一个不能多
  翻译时表格的所有样式都需要保留，表格的行数和列数必须保持一致，如果有合并的行或者列，需要保持原有的合并状态。
  注意保留「」符号需要保留不能丢失。
  `
  // "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using string."
);

// 翻译
const transformRes = ref("");
const loading = ref(false);
const saveLoading = ref(false);

// 菜单
const visibleMenu = ref(false);
const position = ref({})
const currentEl = ref(null);
const targetEl = ref(null);

const displayContent = ref(null);

const reportTemplate = computed(() =>{
  return templates[reportTemplateKey.value]
})


const handleFileUpload = (file) => {
  uploadedFile.value = file;
  return false;
};

const convertToHtml = async () => {
  if (!uploadedFile.value){
    return
  }
  docx2html(uploadedFile.value, {
    name: "newDoc.docx",
    container: document.getElementById("docContainer"),
  })
    .then((htmlEl) => {
      htmlEl = clearUnsupported(htmlEl);
      mergedHtml.value = mergeSpanElements(htmlEl);
      const { maps,  docStr} = createStyleElementMap(mergedHtml.value);
      styleElementMap.value = maps
      promptHtml.value = docStr
    })
    .catch((err) => {
      console.log(err);
    });
  return false;
};

function clearUnsupported(htmlEl) {
  const unsupportedEle = htmlEl.content.querySelectorAll(".unsupported");
  for (let i = 0; i < unsupportedEle.length; i++) {
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

      // 判断必须是相邻的span才可以合并
      if (prevSpan && prevSpan.getAttribute("style") === style) {
        prevSpan.textContent += span.textContent;
        span.remove();
      } else {
        prevSpan = span;
      }
    }
  });

  const hasStyleEl = doc.querySelectorAll('*')
  let count = 0
  hasStyleEl.forEach((el) => {
    if(el.getAttribute('style')) {
      el.setAttribute('order', count);
      count += 1;
    }
  })

  return doc.documentElement.outerHTML;
}

function createStyleElementMap(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const maps = [];

  const elements = doc.querySelectorAll("*");
  elements.forEach((element) => {
    const style = element.getAttribute("style");
    if (style) {
      maps.push({
        style: element.getAttribute("style"),
        el: element,
      });
      // 设置 style 的 index 标记
      element.setAttribute("order", maps.length - 1)
      element.removeAttribute("style");
    }
  });

  const styleElements = doc.querySelectorAll("style");
  styleElements.forEach((el) => {
    if (el.textContent !== "") {
      maps.push({
        style: `${el.textContent}</style>`,
        el,
      });
      el.remove();
    }
  });

  const scriptElements = doc.querySelectorAll("script");
  scriptElements.forEach((el) => {
    if (el.textContent !== "") {
      maps.push({
        style: `<script>${el.textContent}<//script>`,
        el,
      });
      el.remove();
    }
  });

  return { maps, docStr: doc.documentElement.outerHTML.toString() };
}

function createDisplayContent() {
  console.log(transformRes.value)
  if(!transformRes.value) {
    displayContent.value = ''
    return
  }
  const mapObj = styleElementMap.value

  const parser = new DOMParser();
  const doc = parser.parseFromString(transformRes.value, "text/html");
  const transLateElements = [];
  doc.querySelectorAll("*").map((item) => {
    const index = item.getAttribute("order");
    if (index) {
      transLateElements.push(item)
    }
  });

  transLateElements.forEach((item, index) => {
    const order = item.getAttribute("order")
    if(order){
      item.setAttribute('style', mapObj[order].style)
    }
    // item.removeAttribute('order')
  });
  
  mapObj?.forEach(item=> {
    const { style, el } = item
    if (el.tagName === "STYLE") {
      doc.querySelector('head').append(el)
    } else if (el.tagName === "SCRIPT") {
      doc.querySelector('body').append(el)
    }
  })

  displayContent.value = doc.documentElement.outerHTML;
}

async function startTranslate() {
  if (!promptHtml.value) {
    return 
  }

  loading.value = true;
  const params = {
    prompt: `${prompt.value}
    ${promptHtml.value.toString()}`,
    history: history,
    systemMessage: systemMessage.value,
  };
  
  try {
    const res = await api.translateHtml(params)
    transformRes.value = res.data;
    loading.value = false
  } catch (err) {
    console.log(err);
    loading.value = false;
  }
};

const translateHandle = async () => {
  await startTranslate();
  createDisplayContent();
}

const downLoadDoc = () => {
  if(!displayContent.value){
    alert('翻译结果为空')
    return
  }
  saveLoading.value = true;
  api.saveHtmlToDocx({html: displayContent.value }).then(res=> {
    console.log(res)
    saveLoading.value = false;
  }).catch(err => {
    console.log(err)
    saveLoading.value = false;
  })
}



// 操作dom
const addEvent = () => {
  previewRef.value.addEventListener('click', (event)=> {
    if(event.target.getAttribute('order') === undefined) {
      return
    }
    removeActiveClass()
    if(!event.target.classList.contains('active')){
      event.target.classList.add('active')
      showFloatMenu(event.target)
    }
  })
  // previewRef.value.addEventListener('mouseout', (event)=> {
  //   if(event.target.getAttribute('order') === undefined) {
  //     return
  //   }
  //   if(event.target.classList.contains('active')){
  //     event.target.classList.remove('active')
  //     hideFloatMenu()
  //   }
  // })
}

const removeActiveClass = () => {
  if(!currentEl.value) return 
  currentEl.value.classList.remove('active');
  targetEl.value?.classList.remove('active')

  currentEl.value = null;
  targetEl.value = null;
}

const getTargetEl = () => {
  const traslateElIndex = currentEl.value.getAttribute('order');
  return translateRef.value.querySelector(`[i="${traslateElIndex}"]`);
}

const showFloatMenu = (el) => {
  const rect = el.getBoundingClientRect();
  currentEl.value = el;
  targetEl.value = getTargetEl();
  // 返回元素相对于屏幕的偏移
  position.value = {
    top: rect.top,
    left: rect.left
  };

  visibleMenu.value = true
}

const hideFloatMenu = () => {
  // 返回元素相对于屏幕的偏移
  position.value = {};
  visibleMenu.value = false;
}

const updateTranslateTargetEl = (style) => {
  targetEl.value.setAttribute('style', style);
}

const updateParticalStyle = (styles) => {
  updateTranslateTargetEl(styles[language.value])
  removeActiveClass()
  hideFloatMenu()
}

onMounted(() => {
  addEvent()
})
</script>

<style lang="less">
.docMain {
  display: flex;
}
.active {
  color: #4078f2 !important;
}
.mirrorLine {
  width: 50px;
}
.previewCard {
  width: 630px;
}
</style>
