import Vue from 'vue';
import App from './App';
import router from './router';
import ViewUI from 'view-design';
import axios from 'axios';
import './api/enhance';
import 'view-design/dist/styles/iview.css';
import './main.css';

Vue.config.productionTip = false;
Vue.use(ViewUI);
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');