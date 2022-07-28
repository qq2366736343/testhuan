const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        proxy: { // 配置跨域
            '/api': {
                target: `http://192.168.183.30:5005/`, //请求后台接口
                changeOrigin: true, // 允许跨域
                pathRewrite: {
                    '^/api': '' // 重写请求
                }
            }
        }
    }
})
