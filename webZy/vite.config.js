import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Define manual chunks here
        },
      },
    },
  },
  server: {
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5713, 
  }
})
