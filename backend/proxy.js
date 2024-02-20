import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: 'https://naveen-mern-blog-app-server.vercel.app',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
});