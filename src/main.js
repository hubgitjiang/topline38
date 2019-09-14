import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入 vant
import Vant from "vant";
// 导入 vant 的样式
import "vant/lib/index.css";

// 使用 vant
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
