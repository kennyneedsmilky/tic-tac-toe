import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import i18n from "./i18n";
Vue.config.productionTip = false;

import { BootstrapVue,
  LayoutPlugin,
  ModalPlugin,
  CardPlugin,
  VBScrollspyPlugin,
  DropdownPlugin, 
  TablePlugin
} from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(
  BootstrapVue,
  LayoutPlugin,
  ModalPlugin,
  CardPlugin,
  VBScrollspyPlugin,
  DropdownPlugin, 
  TablePlugin
);

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
