import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5373
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  define: {
    // You can add global constants here if needed
  }
})
