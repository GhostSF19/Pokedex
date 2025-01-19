import React from 'react';
import PropTypes from 'prop-types';

const PokeButton = ({ onClick, text, type = 'button', disabled = false, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-primary poke-button ${className}`} // Added dynamic className
    >
      {text}
    </button>
  );
};

PokeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default PokeButton;
