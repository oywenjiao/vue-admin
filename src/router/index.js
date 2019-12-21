import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../components/Home.vue";
import Refresh from "../components/Refresh.vue";

import userList from "../views/user/list.vue";
import userAdd from "../views/user/add.vue";
import orderList from "../views/order/list.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('@/views/welcome.vue'),
        name: 'welcome'
      }
    ]
  },
  {
    path: '/',
    component: Home,
    children: [
      { path: '/refresh', component: Refresh, name: 'refresh' }
    ]
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'user/list',
        component: userList,
        name: 'userList'
      },
      {
        path: 'user/add',
        component: userAdd
      }
    ]
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'order/list',
        component: orderList,
        name: 'orderList'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
