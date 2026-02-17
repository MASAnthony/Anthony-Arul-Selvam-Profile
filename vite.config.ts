import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'force-js-mime-type-tsx',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.endsWith('.tsx')) {
            res.setHeader('Content-Type', 'application/javascript')
          }
          next()
        })
      }
    },
    react(),
    tailwindcss()
  ],
})
