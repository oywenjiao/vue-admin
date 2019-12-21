
// 状态值
const state = {
    count: 100,
    title: '测试Vuex的存储'
};

// 同步改变状态的全部方法
const mutations = {
    add: (state, n) => {
        state.count += n;
    },
    reduce: (state) => {
        state.count -= 2;
    }
};

// 异步改变状态的全部方法
const actions = {
    addAction: (context) => {
        context.commit('add', 11);
        setTimeout(()=>{context.commit('reduce')},3000);
        console.log('user 模块下，我比reduce提前执行');
    },
    reduceAction: ({commit}) => {
        commit('reduce')
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
