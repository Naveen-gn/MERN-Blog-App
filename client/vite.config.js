import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://mern-blog-app-pi.vercel.app/',
      secure: true,
    },
  },
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,// Specify the output directory
  }
})
