const { createProxyMiddleware } = require('http-proxy-middleware')

// 关于跨域的配置
// 第二种解决跨域的方式：在package.json中配置"proxy":"后端项目地址的协议，路径，和端口号"
module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://192.168.85.1:9990/springboot',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/"
    }
  }))
}