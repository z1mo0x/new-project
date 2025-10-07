import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/variables/variables.scss" as vars;`
      }
    }
  },
  assetsInclude: ['**/*.json'] // ← на верхнем уровне!
})
