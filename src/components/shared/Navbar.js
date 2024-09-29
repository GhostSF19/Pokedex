import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar navbar-light navbar-custom shadow">
      <div className="px-5 col-5">
        <img src="/poklogo.png" alt="Poklogo" className="poklogo img-fluid" />
      </div>
      <div className="px-5 gap-2 d-flex justify-content-end col-5 col-md-2 d-none d-md-flex">
        <Link to="/" className="">Home</Link>
        <Link to="/pokepage" className="">Pokédex</Link>
      </div>

      {/* Hamburger Icon for mobile view */}
      <button
        className="navbar-toggler d-md-none"
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span> {/* Bootstrap renders the icon */}
      </button>

      {/* Hamburger Menu that toggles on click */}
      {isMenuOpen && (
        <div className="d-md-none hamburger-menu">
          <Link to="/">Home</Link>
          <Link to="/pokepage">Pokédex</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
