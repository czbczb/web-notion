<template>
  <a-button @click="loadCmp">加载组件</a-button>
  <div id="vcode" ref="vcode">view code</div>
  <!-- <CustomCmp/> -->
</template>
<script setup>
import {
  h,
  ref,
  render,
  defineCustomElement
} from "vue";
import { parse, compileScript, compileStyle } from "@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js";
import { compile } from "@vue/compiler-dom";

    // import { compile } from '@vue/compiler-dom'
    // 从接口返回的字符串中
    // 提取 template，使用 compile 将其编译成render函数 (render)
    // 第三部提取 script 标签中的内容，将其转成 JavaScript Object (sfc)
    // 将上面两步的结果合并：sfc.render = render
    // sfc 已经是个组件了, 将 sfc 注册到页面，就能用了
    const loadCmp = () => {
        renderCode();
    };

    const renderCode = async () => {
    let htmlStr = `<template>\n    <h1>{{message}}</h1> </template> <script>\n import { ref } from 'vue'; \n const message = ref(20); \n<\/script><style>\n h1{border: 1px solid #ccc;} \n</style>`; // Your template and script here

    const parseObj = parse(htmlStr);

    const { script, scriptSetup, template, styles } = parseObj.descriptor;

    // Compile the script and template
    const compiledScript = compileScript(parseObj.descriptor, {
        id: 'test'
    });

    // let curentScript = (script || scriptSetup)?.content
    const script_namespace = {}
    const parseObj1 = compile(template.content)
    const renderFun = new Function('Vue',parseObj1.code).call(script_namespace)

    compiledScript.render = renderFun
    console.log(compiledScript)
    // const Component = {
    //     setup() {
    //     eval(curentScript);
    //     },
    //     render: renderFun,
    // };

    render(h(compiledScript), document.getElementById('vcode'))

};
</script>
