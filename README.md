# React Microfrontend Restaurant App

This project consists of 4 separate Vite applications using Module Federation.

## Structure
- **host**: The container application (Port 5000)
- **home-mfe**: Homepage with Restaurant list (Port 5001)
- **about-mfe**: Static About page (Port 5002)
- **cart-mfe**: Cart logic and view (Port 5003)

## How to Run

You need to run all 4 applications simultaneously.

### 1. Build and Preview Remotes
Ideally, build the remotes to serve the `remoteEntry.js`.

```bash
# Terminal 1 - Cart
cd cart-mfe
npm install
npm run build
npm run preview

# Terminal 2 - About
cd about-mfe
npm install
npm run build
npm run preview

# Terminal 3 - Home
cd home-mfe
npm install
npm run build
npm run preview
```

### 2. Run Host App
The host can run in dev mode.

```bash
# Terminal 4 - Host
cd host
npm install
npm run dev
```

Open [http://localhost:5000](http://localhost:5000) to view the app.

## Features
- **Shared State**: Cart state is shared between applications using Zustand.
- **Lazy Loading**: Microfrontends are loaded on demand.
- **Shared Dependencies**: React and ReactDOM are shared to avoid duplication.
