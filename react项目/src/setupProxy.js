const { createProxyMiddleware } = require('http-proxy-middleware')

// 关于跨域的配置
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