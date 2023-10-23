import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({})],
  optimizeDeps: {
    entries: [
      'src/index.html',
      'main/main.jsx',
    ]
  },
  build: {
    rollupOptions: {
      input: "src/main.js",
    },
    
  },


});
