import Cookies from 'js-cookie'

const state = {
    sidebar: {
        opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,  // 侧边栏展开状态开关
        withoutAnimation: false
    },
    device: 'desktop',  // 浏览器模式，mobile手机模式
};

const mutations = {
    TOGGLE_SIDEBAR: state => {
        state.sidebar.opened = !state.sidebar.opened;
        state.sidebar.withoutAnimation = false;
        if (state.sidebar.opened) {
            Cookies.set('sidebarStatus', 1);
        } else {
            Cookies.set('sidebarStatus', 0);
        }
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
        Cookies.set('sidebarStatus', 0);
        state.sidebar.opened = false;
        state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
        state.device = device
    }
};

const actions = {
    // 侧边栏展开与收起切换
    toggleSideBar: ({commit}) => {
        commit('TOGGLE_SIDEBAR');
    },
    // 关闭手机模式下的侧边栏
    closeSideBar({ commit }, { withoutAnimation }) {
        commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    // 设备模式切换
    toggleDevice: ({commit}, device) => {
        commit('TOGGLE_DEVICE', device)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
