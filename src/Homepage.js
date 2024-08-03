import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage container-fluid">
      <nav className="navbar navbar-light navbar-custom">
        <a className="nav-link" href="#">Home</a>
        <a className="nav-link" href="#">Pokédex</a>
      </nav>
      <div className="row h-100">
        <div className="col-12 d-flex justify-content-end align-items-end text-container">
          <h1>by Denis</h1>
        </div>
        <div className="col-12 d-flex justify-content-end align-items-end image-container">
          <img src="/PokeBall1.png" alt="PokeBall1" className="pokeball1 img-fluid" />
          <img src="/Pokeball2.png" alt="Pokeball2" className="pokeball2 img-fluid" />
          <img src="/Vector.png" alt="Vector" className="vector img-fluid" />
          <img src="/Vector2.png" alt="Vector2" className="vector2 img-fluid" />
          <img src="/Pikachu.png" alt="Pikachu" className="pikachu img-fluid" />
          <img src="/poklogo.png" alt="Poklogo" className="poklogo img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
