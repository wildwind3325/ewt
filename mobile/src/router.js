import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Info from '@/pages/Info';
import Password from '@/pages/Password';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'login',
    component: Login
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/info',
    name: 'info',
    component: Info
  }, {
    path: '/password',
    name: 'password',
    component: Password
  }, {
    path: '*',
    name: 'notFound',
    component: NotFound
  }]
});