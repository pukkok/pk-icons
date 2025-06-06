import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pk-icons/',
  root: './test',
  publicDir: '../public',
  resolve: {
    alias: {
      'pk-icons': '../src'
    }
  },
  build: {
    outDir: '../dist'
  }
})
