// setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');
var proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5001',
      changeOrigin: true,
      headers: {
                  "Connection": "keep-alive"
              },
    })
  );
};
// module.exports = function(app) {
//   app.use(proxy('/api', {
//       target: 'http://127.0.0.1:5001/',
//       headers: {
//           "Connection": "keep-alive"
//       },
//   }));
// };