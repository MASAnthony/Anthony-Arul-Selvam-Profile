
import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


function deferCssPlugin(): Plugin {
  return {
    name: 'defer-css',
    apply: 'build',
    transformIndexHtml(html) {
      // Match <link rel="stylesheet" crossorigin href="./assets/....css"> injected by Vite
      return html.replace(
        /<link rel="stylesheet"([^>]*?)href="(\.\/assets\/[^"]+\.css)"([^>]*?)>/g,
        (_match, before, href, after) => {
          const attrs = (before + after).trim()
          return [
            `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'" ${attrs}>`,
            `<noscript><link rel="stylesheet" href="${href}" ${attrs}></noscript>`,
          ].join('\n  ')
        }
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), deferCssPlugin()],
  base: './',
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('lucide')) return 'vendor-utils';
            return 'vendor';
          }
        }
      }
    }
  }
})

