import { createApp } from "vue";
import App from "./App.vue";
import "./firebase"; // 確保你的 Firebase 初始化檔案被載入
import router from "./router"; // 引入 router
import { createPinia } from "pinia";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPaw,
  faTasks,
  faHome,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 將圖標添加到庫中
library.add(faPaw, faTasks, faHome, faStore, faUser);

const app = createApp(App);
const pinia = createPinia();
// 全局註冊 FontAwesomeIcon 組件
app.component("font-awesome-icon", FontAwesomeIcon);

// 使用 router
app.use(router);
app.use(pinia);
// 最後一次 mount 應用
app.mount("#app");
