const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, /*关闭语法检查*/
    /*开启代理服务器(方式一)
    devServer:{
      proxy:'http://localhost:5000'
    }
    */

    /*开启代理服务器(方式二)*/
    devServer: {
        proxy: {
            /*请求前缀*/
            '/mimi': {
                target: 'http://localhost:5000',
                pathRewrite: {'^/mimi': ''},
                /*用于支持websocket*/
                ws: true,
                /*用于控制请求头中的host的值*/
                changeOrigin: false
            },
            '/demo': {
                target: 'http://localhost:5001',
                pathRewrite: {'^/demo': ''},
                /*用于支持websocket*/
                ws: true,
                /*用于控制请求头中的host的值*/
                changeOrigin: false
            }

        }
    }


})
