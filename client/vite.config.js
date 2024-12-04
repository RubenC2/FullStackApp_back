import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../dist',  // Asegúrate de que los archivos estáticos se generen en la carpeta `dist`
  }
})


