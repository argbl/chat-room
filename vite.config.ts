import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src/',
      '@cp': '/src/components/',
      '@icons': '/src/assets/icons/',
      '@img': '/src/assets/images',
      '@model': '/src/model',
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  plugins: [vue({})],
  server: {
    port: 3002,
  },
})
