import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Layout from '@/layout'

export const constantRoutes = [
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path*',
                component: () => import('@/views/redirect/index')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
];

const createRouter = () => new VueRouter({
  mode: 'history',
  routes: constantRoutes
});

const router = createRouter();

export default router
