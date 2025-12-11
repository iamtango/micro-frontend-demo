import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'home-app',
      filename: 'remoteEntry.js',
      exposes: {
        './Home': './src/Home.jsx',
      },
      remotes: {
        // Home might need to access Cart store directly if we implement add-to-cart here
        cartApp: 'http://localhost:5003/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    port: 5001,
    strictPort: true,
  },
  preview: {
    port: 5001,
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
