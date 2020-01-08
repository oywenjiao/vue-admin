// store 中的计算属性
const getters = {
    count: (state) => {
        return state.count += 100;
    },
    sidebar: state => state.app.sidebar
};

export default getters
