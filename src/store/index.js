import Vue from 'vue';
import Vuex from 'vuex';
import getters from "./getters";
import user from "./modules/user";
import app from "./modules/app";

Vue.use(Vuex);

const store = new Vuex.Store({
    // 模块分组
    modules: {
        user,
        app
    },
    getters
});

export default store

