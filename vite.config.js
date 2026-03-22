import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  base: '/portfolio/',   // ✅ ONLY THIS (no full URL)
  assetsInclude: ['**/*.glb'],
})