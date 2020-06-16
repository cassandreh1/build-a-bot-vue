
import Vue from 'vue';
import {
  BootstrapVue, BootstrapVueIcons, BIcon, BIconBagFill, BIconX,
} from 'bootstrap-vue';
import 'bootstrap';
import App from './App.vue';


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.component('BIcon', BIcon);
Vue.use('BIconBagFill', BIconBagFill);
Vue.use('BIconX', BIconX);

Vue.filter('currency', (value) => {
  if (!value) return '';
  const formatedValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  return formatedValue;
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
