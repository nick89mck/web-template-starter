import { resolve } from "path";
import { defineConfig } from "vite";
import htmlPurge from 'vite-plugin-purgecss';

export default defineConfig({
  root: resolve(__dirname, "src/"),
  build: {
    outDir: "../dist",
    emptyOutDir: true,

  },   
  plugins: [
        htmlPurge(),
    ],
    
})

