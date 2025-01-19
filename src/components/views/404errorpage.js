import React from 'react';
import PokeButton from '../shared/pokebutton';  // Import the reusable button
import '../../styles/404errorpage.css';

const Error404Page = () => {
  return (
    <div className="error-page-container text-center py-5">
      {/* Images */}
      <div className="error-images rocket-container">
        <img
          src="/Team_Rocket_trio_OS%201.png"
          alt="Team Rocket"
          className="img-fluid rocket-img"
        />
      </div>

      <div className="error-images background-container">
        <img
          src="/404.png"
          alt="404 Error"
          className="img-fluid error-404-img"
        />
      </div>

      {/* Text Container */}
      <div className="error-text-container">
        <h1 className="display-1 text-danger">404</h1>
        <div className="text-block">
          <span className="text-white d-block rocket-text-large">The rocket team</span>
          <span className="text-black d-block rocket-text-large">has won this time</span>
        </div>
      </div>

      {/* Button */}
      <div className="error-button-container">
        {/* Only one button here with custom class */}
        <PokeButton 
          onClick={() => window.location.href = '/'} 
          text="Return" 
          className="poke-button-second"  // Optional: Custom class for styling
        />
      </div>
    </div>
  );
};

export default Error404Page;
