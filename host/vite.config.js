import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        homeApp: 'http://localhost:5001/assets/remoteEntry.js',
        aboutApp: 'http://localhost:5002/assets/remoteEntry.js',
        cartApp: 'http://localhost:5003/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })
  ],
  server: {
    port: 5000,
    strictPort: true,
  },
  preview: {
    port: 5000,
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
