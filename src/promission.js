import router from './router'

const _import = require('./router/_import_' + process.env.NODE_ENV); //获取组件的方法
import Layout from '@/layout' //Layout 是架构组件，不在后台返回，在文件里单独引入
import { getToken } from '@/utils/auth'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false });

var getRouter; //用来获取后台拿到的路由

// 假装fakeRouter是通过后台接口请求回来的数据
let fakeRouter = {
    "router": [
        {
            "path": "/",
            "component": "Layout",
            "redirect": "/welcome",
            "children": [{
                "path": "welcome",
                "component": "welcome",
                "meta": {
                    "title": "首页",
                    "icon": "svg-icon el-icon-s-home"
                }
            }]
        },
    ]

};

const whiteList = ['/login', '/auth-redirect'];

router.beforeEach(async(to, from, next) => {
    // 进度条开始
    NProgress.start();
    // 获取登录凭证
    const hasToken = getToken();

    if (hasToken) { //不加这个判断，路由会陷入死循环
        console.log('走的这里');
        if (!getObjArr('router')) {
            // axios.get('https://www.easy-mock.com/mock/5a5da330d9b48c260cb42ca8/example/antrouter').then(res => {
            console.log('beforeEach  getRouter')
            getRouter = fakeRouter.router; //假装模拟后台请求得到的路由数据
            saveObjArr('router', getRouter) //存储路由到localStorage

            routerGo(to, next) //执行路由跳转方法
            // })
        } else { //从localStorage拿到了路由
            getRouter = getObjArr('router'); //拿到路由
            console.log(getRouter);
            routerGo(to, next)
        }
    } else {
        console.log('还是走的这里');
        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            console.log('然后进入这里');
            next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`);
            NProgress.done()
        }
    }

});

router.afterEach(() => {
    // 进度条完成
    NProgress.done()
});


function routerGo(to, next) {
    console.log('进入这里了吗');
    getRouter = filterAsyncRouter(getRouter); //过滤路由
    router.addRoutes(getRouter); //动态添加路由
    global.antRouter = getRouter; //将路由数据传递给全局变量，做侧边栏菜单渲染工作
    next({ ...to, replace: true })
}

function saveObjArr(name, data) { //localStorage 存储数组对象的方法
    localStorage.setItem(name, JSON.stringify(data))
}

function getObjArr(name) { //localStorage 获取数组对象的方法
    return JSON.parse(window.localStorage.getItem(name));

}

function filterAsyncRouter(asyncRouterMap) { //遍历后台传来的路由字符串，转换为组件对象
    const accessedRouters = asyncRouterMap.filter(route => {
        if (route.component) {
            if (route.component === 'Layout') { //Layout组件特殊处理
                route.component = Layout
            } else {
                route.component = _import(route.component)
            }
        }
        if (route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children)
        }
        return true
    });

    return accessedRouters
}