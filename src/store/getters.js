// store 中的计算属性
const getters = {
    count: (state) => {
        return state.count += 100;
    }
};

export default getters
