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
    {
        path: '/',
        component: Layout,
        redirect: '/welcome',
        children: [
            {
                path: 'welcome',
                component: () => import('@/views/welcome'),
                meta: {title: '首页', icon: 'svg-icon el-icon-s-home'}
            }
        ]
    }
];

const createRouter = () => new VueRouter({
  mode: 'hash',
  routes: constantRoutes
});

const router = createRouter();

// 路由重置
export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher // reset router
}

export default router
