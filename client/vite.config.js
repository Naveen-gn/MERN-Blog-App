import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://naveen-mern-blog-app-server.vercel.app',
      secure: false,
    },
  },
  plugins: [react()],
})
