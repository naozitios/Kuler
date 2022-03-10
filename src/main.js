import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import naive from "naive-ui";
import vmodal from 'vue-js-modal'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

createApp(App).use(router).use(naive).use(vmodal).mount('#app')