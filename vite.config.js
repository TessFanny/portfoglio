import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   lib: {
  //     // Could also be a dictionary or array of multiple entry points
  //     entry: resolve(__dirname, 'lib/main.jsx'),
  //     formats: ['es']
  //   },
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'index.html'),
        
  //     },
  //     external: ['react'],
  //   },
    
  // },


});
