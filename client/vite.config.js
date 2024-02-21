import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  proxy: {
    '/api': {
      target: 'https://naveen-mern-blog-app-server.vercel.app',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
  // server: {
  //   proxy: {
  //     '/api': '',
  //     secure: false,
  //   },
  // },
  plugins: [react()],
  build: {
    outDir: './build',
    emptyOutDir: false,// Specify the output directory
  }
})
