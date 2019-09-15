import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import AboutComponent from './components/AboutComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import EditComponent from './components/EditComponent.vue';
import IndexComponent from './components/IndexComponent';

const routes = [
  {
    name: 'about',
    path: '/',
    component: AboutComponent
  },
  {
    name: 'create',
    path: '/create',
    component: CreateComponent
  },
  {
    name: 'gigs',
    path: '/gigs',
    component: IndexComponent
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: EditComponent
  }
]

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
