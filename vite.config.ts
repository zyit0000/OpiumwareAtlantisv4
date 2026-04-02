import { defineConfig } from 'vite'

export default defineConfig({
  root: './src',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './src/index.html',
      external: [
        /^@tauri-apps\/api.*/,
        /^@tauri-apps\/plugin-.*/
      ],
      output: {
        format: 'es',
        manualChunks: undefined
      }
    }
  },
  server: {
    port: 1420,
    strictPort: true,
  },
  optimizeDeps: {
    exclude: ['@tauri-apps/api', '@tauri-apps/plugin-*']
  }
})