import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const ICONS_DIR = path.resolve(__dirname, '../src/icons')
const OUT_FILE = path.resolve(__dirname, '../src/index.js')

const files = fs.readdirSync(ICONS_DIR)

const exports = files
  .filter(f => f.endsWith('.js'))
  .map(f => {
    const name = path.basename(f, '.js')
    return `export { ${name} } from './icons/${name}'`
  })
  .join('\n')

fs.writeFileSync(OUT_FILE, exports + '\n')
console.log('✅ src/index.js updated with icons from src/icons/')
