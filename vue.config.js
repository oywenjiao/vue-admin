'use strict';

const path = require('path');
const defaultSettings = require('./src/settings.js');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

const name = defaultSettings.title || 'vue Element Admin'; // 页面title属性

const port = process.env.port || process.env.npm_config_port || 8088;

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            "/api": {
                target: "http://myapi.example", // 本地模拟数据服务器
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "" // 去掉接口地址中的api字符串
                }
            }
        }
    },
    configureWebpack: (config) => {
        config.name = name;
        config.resolve = {
            alias: {
                '@': resolve('src')
            },
            extensions: ['.js', '.json', '.vue']
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
    }
};
