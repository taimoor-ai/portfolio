import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  base: 'https://github.com/taimoor-ai/portfolio' , // 👈 VERY IMPORTANT
   assetsInclude: ['**/*.glb'], // ✅ THIS LINE FIXES IT
})
