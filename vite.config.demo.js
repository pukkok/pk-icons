import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  base: '/pk-icons/',
  root: './test',
  publicDir: '../public',
  resolve: {
    alias: {
      'pk-icons': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: '../dist'
  }
})
