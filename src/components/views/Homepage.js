import React, { useState } from 'react';
import '../../styles/main.css';
import PokeButton from '../shared/pokebutton';
import { useNavigate } from 'react-router-dom';
import Navbar from '../shared/Navbar'; // Import the Navbar

const Homepage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/pokepage');
  };

  return (
    <div className="homepage page-container">
      {/* Use the Navbar component here */}
      <Navbar />

      <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <div className="text-center mb-4">
          <img
            src="/banner.png"
            alt="PokeBall1"
            className="pokeball1 img-fluid"
          />
        </div>
        <div className="text-center mb-4">
          <h1 className="custom-heading">
            <strong className="font-weight-bold">Find</strong> all your <br /> favorite <br /> <strong>Pokemon</strong>
          </h1>
          <h4 className="text-muted">
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </h4>
        </div>
        <PokeButton onClick={handleClick} text={"See Pokemons"} />
      </div>

      <div className="text-center mt-4">
        <h4>by Denis</h4>
      </div>
    </div>
  );
};

export default Homepage;
