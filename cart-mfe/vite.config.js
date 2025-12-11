import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cart-app',
      filename: 'remoteEntry.js',
      exposes: {
        './Cart': './src/Cart.jsx',
        './store': './src/store.js',
      },
      shared: ['react', 'react-dom', 'zustand']
    })
  ],
  server: {
    port: 5003,
    strictPort: true,
  },
  preview: {
    port: 5003,
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
