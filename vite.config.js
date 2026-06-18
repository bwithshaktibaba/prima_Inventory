import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Required for GitHub Pages: sets the base URL to the repository name
  base: '/prima_Inventory/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
