
import Vue from 'vue';
import {
  BootstrapVue, BootstrapVueIcons, BIcon, BIconBagFill,
} from 'bootstrap-vue';
import 'bootstrap';
import App from './App.vue';


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.component('BIcon', BIcon);
Vue.use('BIconBagFill', BIconBagFill);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
