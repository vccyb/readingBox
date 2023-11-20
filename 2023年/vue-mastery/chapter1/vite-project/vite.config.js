import { defineConfig } from 'Vite'
import eslint from 'vite-plugin-eslint'


export default defineConfig({
  plugins: [eslint()]
})