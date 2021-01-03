import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "./plugins/element.js";
import "./assets/css/common/reset.css";
import "@/assets/css/common/theme.scss";
import "./assets/css/common/common.css";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
// 響應式調整
var c = () => {
  let w = document.documentElement.clientWidth;
  let n = 16 * (w / 320) > 20 ? 20 + "px" :16 * (w / 320) + "px";
  document.documentElement.style.fontSize = n;
};

window.addEventListener("load", c);
window.addEventListener("resize", c);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
