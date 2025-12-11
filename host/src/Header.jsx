import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useCartStore from 'cartApp/store';
import './Header.css';

const Header = () => {
  const { count } = useCartStore();
  const location = useLocation();

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">RestroFoods</Link>
        <nav className="nav-links">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/cart" className={`nav-item ${location.pathname === '/cart' ? 'active' : ''}`}>
            Cart
            {count > 0 && <span className="cart-badge">{count}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

