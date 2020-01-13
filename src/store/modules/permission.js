import Layout from '@/layout'
const _import = require('@/router/_import_' + process.env.NODE_ENV); //获取组件的方法
import { constantRoutes } from '@/router'

const state = {
    routes: [],
    addRoutes: [],
    roles: [],
};

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes;
        state.routes = constantRoutes.concat(routes);
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
};

let fakeRouter = {
    "router": [
        {
            "path": "/user",
            "component": "Layout",
            "meta": {
                "title": "用户管理",
                "icon": "svg-icon el-icon-s-custom"
            },
            "children": [
                {
                    "path": "list",
                    "component": "user/list",
                    "meta": {
                        "title": '用户列表',
                    }
                }
            ]
        }
    ]
};
export function generaMenu(routes, data) {
    data.forEach(item => {
        const menu = {
            path: item.path,
            component: item.component === 'Layout' ? Layout : _import(item.component),
            children: [],
            meta: { title: item.meta.title, icon: item.meta.icon}
        };
        if (item.children) {
            generaMenu(menu.children, item.children)
        }
        routes.push(menu)
    })
}

const actions = {
    generateRoutes({ commit }) {
        return new Promise(resolve => {
            const loadMenuData = fakeRouter.router;
            const asyncRoutes = [];
            generaMenu(asyncRoutes, loadMenuData)
            commit('SET_ROUTES', asyncRoutes)
            commit('SET_ROLES', ['admin']);
            console.log('设置roles')
            resolve(state.routes)
        })
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}