const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware({
            target: 'http://localhost:8082', // 서버 URL or localhost:설정한포트번호
            changeOrigin: true,
            pathFilter: '/api',
        }),
    );
};