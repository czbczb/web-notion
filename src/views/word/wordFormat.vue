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
    <a-card title="翻译结果" v-html="displayContent"></a-card>
  </div>
</template>

<script setup>
import { ref, computed, unref } from "vue";
import docx2html from "docx2html";
import { UploadOutlined } from "@ant-design/icons-vue";
import api from "@/api/article.js";

const uploadedFile = ref(null);
const prompt = ref(
  "将这个html中的所有中文，翻译为英文，不要翻译javascript和css以及html元素，同一个段落中的特殊样式需要保留, 如果是表格，表格的所有样式都需要保留, 请注意翻译时数字的格式, 表格的行数和列数必须保持一致，如果有合并的行或者列，需要保持原有的合并状态。只返回我给你的内容，不要提供任何多余的话"
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
    const spans = Array.from(p.querySelectorAll("span"));
    const spanMap = new Map();

    spans.forEach((span) => {
      const style = span.getAttribute("style");
      if (spanMap.has(style)) {
        spanMap.get(style).textContent += span.textContent;
        span.remove();
      } else {
        spanMap.set(style, span);
      }
    });
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
  const elements = doc.querySelectorAll("[style='t']");
  console.log(elements, mapObj);
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
  transformRes.value =
    '<html><head><meta charset="utf-8"><meta key="generator" value="docx2html"><title>test</title></head><body>\n<div id="A" style="t"><section style="t"><p class=" _1" style="t"><span class=" _3" id="_y1" style="t"></span><span class=" _3" style="t">Hong Kong Exchanges and Clearing Limited and The Stock Exchange of Hong Kong Limited take no responsibility for the contents of this announcement, make no representation as to its accuracy or completeness and expressly disclaim any liability whatsoever for any loss howsoever arising from or in reliance upon the whole or any part of the contents of this announcement.</span></p><p class=" _1" style="t"></p><p class=" _1" style="t"><span class=" _3" style="t"><img src="blob:http://localhost:5173/c2c7e127-1c9b-45c6-a204-5150cb9d266b" style="t"></span></p><p class=" _1"></p><p class=" _1" style="t"><span class=" _3" style="t">Mobvista Inc.</span></p><p class=" _1" style="t"><span class=" _3" style="t">Mintegral Limited</span></p><p class=" _1" style="t"><span class=" _3" style="t">(incorporated in the Cayman Islands with limited liability)</span></p><p class=" _1" style="t"><span class=" _3" style="t">(Stock Code: 1860)</span></p><p class=" _1" style="t"></p><p class=" _1" style="t"><span class=" _3 _5" style="t">VOLUNTARY ANNOUNCEMENT</span></p><p class=" _1" style="t"><span class=" _3 _5" style="t">UPDATE ON SHARE BUYBACK PROGRAM</span></p><p class=" _1"></p><p class=" _1" style="t"><span class=" _3" style="t">This announcement is made by Mintegral Limited (the "Company") on a voluntary basis to provide its shareholders (the "Shareholders") and potential investors with the latest development of the Company.</span><span class=" _3" style="t">Shareholders</span></p><p class=" _1" style="t"></p><p class=" _1" style="t"><span class=" _3" style="t">Reference is made to the voluntary announcement of the Company dated June 19, 2023 (the "Announcement"), in relation to the Company\'s intention to utilize up to HK$150 million to repurchase shares of the Company (the "Shares") on the open market under the general mandate (the "Repurchase Mandate") granted to the directors (the "Directors") of the Company at the annual general meeting of the Company held on June 15, 2023 (the "2023 Repurchase Authorization"). Unless the context otherwise requires, capitalized terms used herein shall have the same meanings as those defined in the Announcement.</span><span class=" _3" style="t">Directors 2023 Repurchase Authorization current share buyback program</span></p><p class=" _1" style="t"></p><p class=" _1" style="t"><span class=" _3" style="t">The board of directors (the "Board") of the Company hereby informs the Shareholders and the public that, from June 15, 2023 to the date of this announcement, the Company has repurchased 43,527,000 Shares (the "Repurchased Shares") on the open market at a total consideration of approximately HK$136.4 million (including transaction costs), which was funded by the Company\'s internal resources. As of the date of this announcement, 28,378,000 of the Repurchased Shares have been cancelled.</span><span class=" _3" style="t">Board has repurchased Shares</span></p><p class=" _1" style="t"></p><p class=" _1"><span class=" _3" style="t">The Board hereby announces that on March 15, 2024, the Board has approved an additional HK$80 million to the current share buyback program. Furthermore, as the 2023 Repurchase Authorization will expire at the conclusion of the forthcoming annual general meeting (the "AGM") of the Company, the Board has approved a new share buyback program (the "New Buyback Program"), pursuant to which the Company intends to further utilize up to HK$200 million to repurchase Shares from time to time on the open market under the general mandate (the "2024 Repurchase Authorization") to be proposed for Shareholders\' approval at the 2024 AGM. Subject to the Shareholders\' approval of the 2024 Repurchase Authorization at the 2024 AGM, the New Buyback Program will take effect from the date of the 2024 AGM.</span><span class=" _3" style="t">2024 AGM new share buyback program 2024 Repurchase Authorization share buyback program</span></p><p class=" _1"></p><p class=" _1"></p><p class=" _1" style="t"><span class=" _3" style="t">Hong Kong Exchanges and Clearing Limited and The Stock Exchange of Hong Kong Limited take no responsibility for the contents of this announcement, make no representation as to its accuracy or completeness and expressly disclaim any liability whatsoever for any loss howsoever arising from or in reliance upon the whole or any part of the contents of this announcement.</span></p><p class=" _1" id="_GoBack" style="t"><span class=" _3" style="t"></span><span class=" _3" style="t">Mobvista Inc.</span></p><p class=" _1" style="t"><span class=" _3" style="t">Mintegral Limited</span></p><p class=" _1" style="t"><span class=" _3" style="t">(incorporated in the Cayman Islands with limited liability)</span></p><p class=" _1" style="t"><span class=" _3" style="t">(Stock Code: 1860)</span></p><p class=" _1" style="t"><span class=" _3" style="t">Quarterly Results Announcement for the Three Months Ended March 31, 2024</span></p><table class=" _2 _4" id="A7" x0="1" x1="1" x2="1" x3="1" x4="1" x5="1" x6="1" x7="1" x8="1" x9="1" x10="1" x11="1"><colgroup><col style="t"><col style="t"><col style="t"><col style="t"><col style="t"><col style="t"></colgroup><tbody><tr><td><p class=" _1"><span class=" _3" style="t">Financial Highlights</span></p></td><td colspan="5"><p class=" _1" style="t"></p><p class=" _1" style="t"><span class=" _3" style="t">For the three months ended</span></p></td></tr><tr><td><p class=" _1"></p></td><td><p class=" _1"><span class=" _3" style="t">March 31,</span></p><p class=" _1"><span class=" _3" style="t">2024</span></p><p class=" _1"><span class=" _3" style="t">US$\'000</span></p><p class=" _1"><span class=" _3" style="t">(Unaudited)</span></p></td><td><p class=" _1"><span class=" _3" style="t">December 31,</span></p><p class=" _1"><span class=" _3" style="t">2023</span></p><p class=" _1"><span class=" _3" style="t">US$\'000</span></p><p class=" _1"><span class=" _3" style="t">(Unaudited)</span></p></td><td><p class=" _1"><span class=" _3" style="t">March 31,</span></p><p class=" _1"><span class=" _3" style="t">2023</span></p><p class=" _1"><span class " _3" style="t">US$\'000</span></p><p class=" _1"><span class=" _3" style="t">(Unaudited)</span></p></td><td><p class=" _1"><span class=" _3" style="t">YoY Change</span></p><p class=" _1"></p></td><td><p class=" _1"><span class=" _3" style="t">QoQ Change</span></p><p class=" _1"></p><p class=" _1"></p><p class=" _1"></p><p class=" _1"></p></td></tr><tr><td><p class=" _1"><span class=" _3" style="t">Revenue</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">301,482</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">278,589</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">244,554</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">23.3%</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">8.2%</span></p></td></tr><tr><td><p class=" _1"><span class=" _3" style="t">Net Income</span><span class=" _3" style="t">(1)</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">82,155</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">74,519</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">64,363</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">27.6%</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">10.2%</span></p></td></tr><tr><td><p class=" _1"><span class=" _3" style="t">Gross Profit</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">61,819</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">58,829</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">46,912</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">31.8%</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">5.1%</span></p></td></tr><tr><td><p class=" _1"><span class=" _3" style="t">Profit/(Loss) for the period</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">7,154</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">6,805</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">3,201</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">123.5%</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">5.1%</span></p></td></tr><tr><td><p class=" _1"><span class=" _3" style="t">Adjusted Net Profit/(Loss)</span><span class=" _3" style="t">(2)</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">8,869</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">6,114</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">4,510</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">96.6%</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">45.1%</span></p></td></tr><tr><td><p class=" _1"><span class=" _3" style="t">Adjusted EBITDA</span></p><p class=" _1"><span class=" _3" style="t">(3)</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">29,717</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">29,891</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">26,071</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">14.0%</span></p></td><td><p class=" _1" style="t"><span class=" _3" style="t">-0.6%</span></p></td></tr><tr><td colspan="6"><p class=" _1"></p><p class=" _1"><span class=" _3" style="t">Notes:</span></p><p class=" _1"><span class=" _3" style="t">(1) Net Income is a non-IFRS measure and we define Net Income as adjusted revenue after deducting costs allocated to traffic publishers;</span></p><p class=" _1"><span class=" _3" style="t">(2) Adjusted Net Profit/(Loss) is a non-IFRS measure and we define Adjusted Net Profit/(Loss) as profit/(loss) for the Reporting Period (as defined below) adjusted by adding back share-based compensation, fair value loss on financial assets at fair value through profit or loss, and fair value change (gain)/loss on derivative financial liabilities;</span></p><p class=" _1"><span class " _3" style="t">(3) Adjusted EBITDA is a non-IFRS measure and we define Adjusted EBITDA as earnings/(loss) before interest, taxes, depreciation and amortization for the Reporting Period, adjusted by adding back share-based compensation, fair value loss on financial assets at fair value through profit or loss, restructuring costs of the R&D team, legal fees related to the acquisition of Beijing Reyon Technology Co., Ltd ("Reyon"), foreign exchange loss, gain on disposal of subsidiaries and top-tier media agency business.</span></p><p class=" _1"></p></td></tr></tbody></table><p class=" _1"></p><p class=" _1"></p><p class=" _1"></p></section><div id="divcontainer" style="t"><div id="_z1" data-parent="_y1" data-index="0" style="t"><div id="shapeA0" style="t"></div></div></div></div>\n\n\n</body></html>';
  return;
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
