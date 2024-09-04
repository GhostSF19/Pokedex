import React from 'react';
import './styles/main.css';
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
        <div className="px-5 gap-2 d-flex justify-content-end col-5 col-md-2">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">Pokédex</a>
        </div>
      </div>
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
      <div className="text-center mt-4"><h4>by Denis</h4></div>
    </div>
  );
};

export default Homepage;
