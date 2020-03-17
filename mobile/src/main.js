import Vue from 'vue';
import App from './App';
import router from './router';
import Vant from 'vant';
import axios from 'axios';
import './api/enhance';
import 'vant/lib/index.css';
import './main.css';

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');