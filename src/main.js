import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import styles from "./assets/scss/app.scss";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  router,
  styles,
  render: h => h(App)
}).$mount("#app");
