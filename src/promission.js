import router from './router'
import store from './store'
import { Message } from 'element-ui'

const _import = require('./router/_import_' + process.env.NODE_ENV); //获取组件的方法
import Layout from '@/layout' //Layout 是架构组件，不在后台返回，在文件里单独引入
import { getToken } from '@/utils/auth'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false });

var getRouter; //用来获取后台拿到的路由


// 定义白名单列表
const whiteList = ['/login', '/auth-redirect'];

router.beforeEach(async(to, from, next) => {
    // 进度条开始
    NProgress.start();
    // 获取登录凭证
    const hasToken = getToken();

    // 不加这个判断，路由会陷入死循环
    if (hasToken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' })
            NProgress.done()
        } else {
            try {
                const accessRoutes = await store.dispatch('permission/generateRoutes');
                /*const accesRoutes = {
                    path: '/user',
                    component: Layout,
                    meta: {
                        title: "用户管理",
                        icon: "svg-icon el-icon-s-custom"
                    },
                    children: [
                        {
                            path: "list",
                            component: import('@/views/user/list'),
                            meta: {
                                "title": '用户列表',
                            }
                        }
                    ]
                }*/
                console.log(to.path)
                router.addRoutes(accessRoutes);
                NProgress.done();
                next()
            } catch (error) {
                await store.dispatch('user/resetToken');
                Message.error(error || 'Has Error');
                next(`/login`);
                NProgress.done()
            }
        }

    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            // 在白名单内的路由直接进入
            next()
        } else {
            // 未登录状态跳转到登录页.
            next('/login');
            NProgress.done()
        }
    }

});

router.afterEach(() => {
    // 进度条完成
    NProgress.done()
});
