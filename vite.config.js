import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Specify the output folder
  },
  server: {
    host: true
  },
  rollupOptions: {
    input: 'src/main.jsx',
    
  }
})
