import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  assetsInclude: ['**/*.glb'],  // ✅ keep 3D asset support
  // base removed for Vercel deployment
})