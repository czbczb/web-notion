<template>
  <div>
    <a-row>
      <a-col :span="20">
        <a-textarea
          v-model:value="prompt"
          placeholder="prompt"
          :rows="4"
        />
      </a-col>
      <a-col :span="4">
        <a-button style="height: 100%" :loading="loading" @click="createWithClaude3" type="primary">发送</a-button>
      </a-col>
    </a-row>
    
    <component :is="dinamicComponent"></component>
  </div>
</template>

<script setup>
import { ref, h, defineAsyncComponent, defineComponent } from 'vue'
import api from "@/api/article.js";

// {
    //     role: 'user', // assistant
    //     content: [
    //         {
    //             type: 'text',
    //             text: '',
    //         }
    //     ]
    // }
const history = ref([])

const systemMessage = ref(`你是一个翻译助手，并且精通javascript，html，css、vue3，vue-routers资深前端。
回复的内容为vue3的组件字符串对象，不要赘述其他任何文字。
如果使用到一些工具，请使用：UI库ant-design-vue@^3.2.11，axios@1.4.0，使用<script setup>语法; 
以下是一个实例demo：
{
  'template': '<div>{{ message }} - Count: {{ count }}</div>',
  'data': 'function() {
    return {
      message: '这是一个动态加载的组件',
      count: 0
    };
  }",
  setup: {
    increment: function() {
      this.count++;
    },
    decrement: function() {
      this.count--;
    }
  }
}
`);

const prompt = ref(`实现todoList`);
const loading = ref(false);
const dinamicComponent = ref(null)

const createWithClaude3 = async () => {
    const componentString = "{\n  template: '\n    <div>\n      <h1>To-Do List</h1>\n      <input v-model=\"newTodo\" @keyup.enter=\"addTodo\" placeholder=\"Add a new task\" />\n      <button @click=\"addTodo\">Add</button>\n      <ul>\n        <li v-for=\"(todo, index) in todos\" :key=\"index\">\n          <input type=\"checkbox\" v-model=\"todo.completed\" />\n          <span :class=\"{ completed: todo.completed }\">{{ todo.text }}</span>\n          <button @click=\"removeTodo(index)\">Delete</button>\n        </li>\n      </ul>\n    </div>\n  ',\n  setup() {\n    const { ref, reactive } = Vue;\n    const newTodo = ref('');\n    const todos = reactive([]);\n\n    const addTodo = () => {\n      if (newTodo.value.trim()) {\n        todos.push({ text: newTodo.value, completed: false });\n        newTodo.value = '';\n      }\n    };\n\n    const removeTodo = (index) => {\n      todos.splice(index, 1);\n    };\n\n    return {\n      newTodo,\n      todos,\n      addTodo,\n      removeTodo\n    };\n  }\n}"
    // 使用正则表达式提取 template 和 setup 函数体
    const templateRegex = /template:\s*'(.*?)'/s;
    const setupRegex =   /(?:\/\*[\s\S]*?\*\/|\/\/.*?\r?\n|[^{])+\{([\s\S]*)\}$/;   
    const templateMatch = componentString.match(templateRegex);
    const setupMatch = ('{ setup() {' +componentString.split('setup() {')[1]).match(setupRegex);

    console.log(templateMatch[1], setupMatch)
    if (templateMatch && setupMatch) {
      const templateContent = templateMatch[1].replace(/\\'/g, '\'').trim();
      const setupBody = setupMatch[1].trim();
      

      // 使用 new Function 创建 setup 函数
      const setupFn = new Function("const newTodo = ref('');    const todos = reactive([]);    const addTodo = () => {      if (newTodo.value.trim()) {        todos.push({ text: newTodo.value, completed: false });        newTodo.value = '';      }    };    const removeTodo = (index) => {      todos.splice(index, 1);    };    return {      newTodo,      todos,      addTodo,      removeTodo    };");

      // 定义组件
      const DynamicComponent = defineComponent({
        template: templateContent,
        setup() {
          return setupFn(Vue, ref, () => {});
        }
      });

      // 创建 Vue 应用并使用组件
      dinamicComponent.value = h("{\n  template: '\n    <div>\n      <h1>To-Do List</h1>\n      <input v-model=\"newTodo\" @keyup.enter=\"addTodo\" placeholder=\"Add a new task\" />\n      <button @click=\"addTodo\">Add</button>\n      <ul>\n        <li v-for=\"(todo, index) in todos\" :key=\"index\">\n          <input type=\"checkbox\" v-model=\"todo.completed\" />\n          <span :class=\"{ completed: todo.completed }\">{{ todo.text }}</span>\n          <button @click=\"removeTodo(index)\">Delete</button>\n        </li>\n      </ul>\n    </div>\n  ',\n  setup() {\n    const { ref, reactive } = Vue;\n    const newTodo = ref('');\n    const todos = reactive([]);\n\n    const addTodo = () => {\n      if (newTodo.value.trim()) {\n        todos.push({ text: newTodo.value, completed: false });\n        newTodo.value = '';\n      }\n    };\n\n    const removeTodo = (index) => {\n      todos.splice(index, 1);\n    };\n\n    return {\n      newTodo,\n      todos,\n      addTodo,\n      removeTodo\n    };\n  }\n}<style>.h1{ font-size: 18px;}</style>");

    }
 
    return
    loading.value = true;
    const params = {
        prompt: `${prompt.value}`,
        history: history.value,
        systemMessage: systemMessage.value,
    };
    try {
        const res = await api.claude3(params)
        dinamicComponent.value = JSON.parse(res.data);
        loading.value = false
    } catch (err) {
        console.log(err);
        loading.value = false;
    }
}


</script>
<style scoped lang='scss'>
</style>