import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

// https://vitepress.dev/reference/s,
// ite-config
export default defineConfig({
  title: "Batalha dos Corvos ",
  description: "A VitePress Site",
  vite: {
    plugins: [tailwindcss()]
  }
})
