import React from 'react';
import useCartStore from './store';
import './Cart.css';

const Cart = () => {
  const { cartItems, clearCart } = useCartStore();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container cart-wrapper">
      <div className="cart-card">
        <h2 className="cart-title">Your Order</h2>
        {cartItems.length === 0 ? (
          <div className="empty-state">
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛒</div>
            <p>Your cart is currently empty.</p>
            <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>
              Add some delicious items from the home page!
            </p>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <span className="total-label">Total</span>
              <span className="total-amount">${total.toFixed(2)}</span>
            </div>
            
            <div className="cart-actions">
              <button className="checkout-btn">Proceed to Checkout</button>
              <button onClick={clearCart} className="clear-btn">
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
