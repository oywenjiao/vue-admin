import request from "@/utils/request"
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
const _import = require('@/router/_import_' + process.env.NODE_ENV); //获取组件的方法
import Layout from '@/layout' //Layout 是架构组件，不在后台返回，在文件里单独引入

// 状态值
const state = {
    count: 100,
    title: '测试Vuex的存储',
    token: getToken(),
    roles: [],
    routes: [],
};

// 同步改变状态的全部方法
const mutations = {
    add: (state, n) => {
        state.count += n;
    },
    reduce: (state) => {
        state.count -= 2;
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_ROUTES: (state, routes) => {
        state.routes = constantRoutes.concat(routes)
    }
};


// 异步改变状态的全部方法
const actions = {
    addAction: (context) => {
        context.commit('add', 11);
        setTimeout(() => {context.commit('reduce')},3000);
    },
    reduceAction: ({commit}) => {
        commit('reduce')
    },
    login: ({commit}, userInfo) => {
        const { username, password } = userInfo;
        return new Promise((resolve, reject) => {
            request({
                url: '/api/login',
                method: 'post',
                data: {
                    username: username.trim(),
                    password: password
                }
            }).then(response => {
                const { data } = response;
                commit('SET_TOKEN', data.content.token);
                setToken(data.content.token);
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // user logout
    logout({ commit, state, dispatch }) {
        return new Promise((resolve) => {
            commit('SET_TOKEN', '')
            removeToken()
            resetRouter()

            resolve()
        })
    },
    resetToken({ commit }) {
        // 清空token
        return new Promise(resolve => {
            commit('SET_TOKEN', '');
            removeToken()
            resolve()
        })
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
