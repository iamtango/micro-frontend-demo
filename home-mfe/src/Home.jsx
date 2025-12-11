import React, { useState } from 'react';
import useCartStore from 'cartApp/store';
import './Home.css';

const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italian • Pizza",
    rating: "4.8",
    menu: [
      { id: 101, name: "Margherita Pizza", price: 12 },
      { id: 102, name: "Pepperoni Pizza", price: 15 },
      { id: 103, name: "BBQ Chicken", price: 16 },
    ]
  },
  {
    id: 2,
    name: "Burger Barn",
    cuisine: "American • Burgers",
    rating: "4.5",
    menu: [
      { id: 201, name: "Classic Cheeseburger", price: 10 },
      { id: 202, name: "Veggie Delight", price: 11 },
      { id: 203, name: "Double Bacon Smash", price: 14 },
    ]
  },
  {
    id: 3,
    name: "Sushi Spot",
    cuisine: "Japanese • Sushi",
    rating: "4.9",
    menu: [
      { id: 301, name: "Salmon Roll", price: 8 },
      { id: 302, name: "Tuna Sashimi", price: 12 },
      { id: 303, name: "Dragon Roll", price: 15 },
    ]
  }
];

const Home = () => {
  const { addToCart } = useCartStore();
  const [toast, setToast] = useState(null);

  const handleAdd = (item) => {
    addToCart(item);
    setToast(`Added ${item.name} to cart!`);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="container home-container">
      {toast && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#333',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          animation: 'fadeIn 0.3s ease-out',
          zIndex: 1000
        }}>
          {toast}
        </div>
      )}

      <div className="hero">
        <h1 className="hero-title">Delicious Food, Delivered</h1>
        <p className="hero-subtitle">Order from the best local restaurants with just a few clicks.</p>
      </div>

      <h2 className="section-title">Featured Restaurants</h2>
      
      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <div className="card-image-placeholder">
              {restaurant.name} Image
            </div>
            <div className="card-header">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 className="restaurant-name">{restaurant.name}</h3>
                <span style={{ fontWeight: 'bold', color: '#f1c40f' }}>★ {restaurant.rating}</span>
              </div>
              <div className="restaurant-tags">
                <span className="tag">{restaurant.cuisine}</span>
              </div>
            </div>
            <ul className="menu-list">
              {restaurant.menu.map((item) => (
                <li key={item.id} className="menu-item">
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">${item.price}</span>
                  </div>
                  <button 
                    onClick={() => handleAdd(item)}
                    className="add-btn"
                  >
                    Add
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
