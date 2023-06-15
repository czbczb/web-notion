import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

export function mount(props) {
  const app = createApp(App);
  app.config.globalProperties.$qiankunProps = props;
  app.mount('#app');
}

// 如果是开发环境，直接调用 mount 函数
if (process.env.NODE_ENV === 'development') {
  mount();
}

createApp(App).mount('#app')
