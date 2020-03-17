import Vue from 'vue';
import Router from 'vue-router';
import Master from '@/pages/Master';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'login',
    component: Login
  }, {
    path: '/home',
    name: 'master',
    component: Master,
    children: [{
      path: '',
      name: 'home',
      component: Home
    }]
  }, {
    path: '*',
    name: 'notFound',
    component: NotFound
  }]
});