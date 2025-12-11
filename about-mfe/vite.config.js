import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'about-app',
      filename: 'remoteEntry.js',
      exposes: {
        './About': './src/About.jsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    port: 5002,
    strictPort: true,
  },
  preview: {
    port: 5002,
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
