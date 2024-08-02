import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage d-flex align-items-center justify-content-end">
      <div className="text-container p-3">
        <h1>by Denis</h1>
      </div>
      <div className="image-container">
      <img src="/PokeBall1.png" alt="PokeBall" style={{ width: '166.97px', height: '167.55px', transform: 'rotate(4.41deg)', opacity: 0.9 }} />

        <img src="/Vector.png" alt="Vector" className="vector img-fluid" />
        <img src="/Pikachu.png" alt="Pikachu" className="pikachu img-fluid" />
      </div>
    </div>
  );
};

export default Homepage;










