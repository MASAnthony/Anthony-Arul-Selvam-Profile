import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'force-js-mime-type-tsx',
      enforce: 'pre',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && /\.tsx($|\?)/.test(req.url)) {
            console.log(`[Middleware] Forcing JS MIME type for: ${req.url}`)
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
