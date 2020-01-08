import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../components/Home.vue";
import Refresh from "../components/Refresh.vue";

import userList from "../views/user/list.vue";
import userAdd from "../views/user/add.vue";
import orderList from "../views/order/list.vue";

Vue.use(VueRouter);

import Layout from '@/layout';

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/welcome',
    children: [
      {
        path: 'welcome',
        name: 'Welcome',
        component: () => import('@/views/welcome'),
        meta: { title: '首页', icon: 'svg-icon el-icon-s-home' }
      }
    ]
  },
  /*{
    path: '/',
    component: Home,
    children: [
      { path: '/refresh', component: Refresh, name: 'refresh' }
    ]
  },*/
  {
    path: '/user',
    component: Layout,
    meta: { title: '用户管理', icon: 'svg-icon el-icon-s-custom' },
    children: [
      {
        path: 'list',
        component: userList,
        name: 'userList',
        meta: { title: '用户列表' }
      },
      {
        path: 'add',
        name: 'addUser',
        component: () => import('@/views/user/add'),
        meta: { title: '新增用户' }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    meta: { title: '订单管理', icon: 'svg-icon el-icon-s-goods' },
    children: [
      {
        path: 'list',
        component: () => import('@/views/order/list'),
        name: 'orderList',
        meta: { title: '订单列表' },
        children: []
      },
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
