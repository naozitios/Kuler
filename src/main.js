import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import naive from "naive-ui";

createApp(App).use(naive)
createApp(App).use(router).mount('#app')