import Vue from 'vue'
import App from './App.vue'

import { VzButton } from './index.js';
Vue.component('VzButton', VzButton);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
