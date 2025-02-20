import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Practica_react/',
  build: {
    outDir: 'docs', // Указываем папку для сборки
  },
})
