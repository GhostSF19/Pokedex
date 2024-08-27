import React from 'react';
import './Homepage.css';
import PokeButton from './components/shared/pokebutton';

const Homepage = () => {


  const handleClick = () => {
    alert('Button clicked!');
  };  

  return (
    <div className="homepage">
      <div className="navbar navbar-light navbar-custom shadow">
        <div className="px-5 col-5">
          <img src="/poklogo.png" alt="Poklogo" className="poklogo img-fluid" />
        </div>
        <div className="px-5 row d-flex flex-nowrap justify-content-end col-5 col-md-2"  >
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Pokédex
          </a>
        </div>
      </div>
      <div className="row h-100">
        <div className="col-12 d-flex justify-content-end align-items-end text-container">
          <PokeButton onClick={handleClick}  text={"See Pokemons"} />
          <h1>by Denis</h1>
        </div>
        <div className="col-12 d-flex justify-content-end align-items-end image-container">
          <img
            src="/banner.png"
            alt="PokeBall1"
            className="pokeball1 img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

