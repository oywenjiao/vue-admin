// store 中的计算属性
const getters = {
    count: (state) => {
        return state.count += 100;
    },
    sidebar: state => state.app.sidebar,
    roles: state => state.permission.roles,
    permission_routes: state => state.permission.routes,
};

export default getters
