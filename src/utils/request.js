import axios from 'axios'
import {MessageBox, Message} from 'element-ui';
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建 axios 实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
});

// 添加请求拦截器
service.interceptors.request.use((config) => {
    // 在发送请求前配置数据
    return config;
}, error => {
    return Promise.reject(error)
});

// 添加响应拦截器
service.interceptors.response.use(response => {
    // 在响应到前端前先处理下数据
    return response;
}, error => {
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    });
    return Promise.reject(error);
});

export default service