import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container about-container">
      <div className="about-header">
        <h1 className="about-title">About RestroFoods</h1>
        <p className="about-subtitle">Revolutionizing food delivery with Microfrontend Architecture.</p>
      </div>
      
      <div className="about-content">
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Micro-Frontends</h3>
            <p>Built with independent applications for maximum scalability and team autonomy.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Blazing Fast</h3>
            <p>Powered by Vite for instant server start and lightning fast HMR.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Module Federation</h3>
            <p>Seamlessly sharing code and state between React applications at runtime.</p>
          </div>
        </div>

        <div className="about-text">
          <p>
            This project demonstrates a modern approach to web development. Instead of a monolithic codebase, 
            we break down the application into smaller, manageable pieces (Host, Home, About, Cart) that work together in harmony.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
