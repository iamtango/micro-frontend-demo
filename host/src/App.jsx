import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// Lazy load remotes
const Home = React.lazy(() => import('homeApp/Home'))
const About = React.lazy(() => import('aboutApp/About'))
const Cart = React.lazy(() => import('cartApp/Cart'))

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
        <Header />
        <main style={{ flex: 1, padding: '20px' }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
