import React from 'react';
import PropTypes from 'prop-types';


const PokeButton = ({ onClick, text, type = 'button', disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className="btn btn-primary poke-button btn-lg btn-block"
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