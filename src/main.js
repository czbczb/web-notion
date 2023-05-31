import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import { RecycleScroller } from "vue-virtual-scroller";

import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import "./assets/main.css";
const app = createApp(App);

app.component("RecycleScroller", RecycleScroller);

app.use(createPinia());
app.use(router);
app.use(Antd);

app.mount("#app");
