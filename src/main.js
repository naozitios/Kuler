import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import naive from "naive-ui";

createApp(App).use(router).use(naive).mount('#app')