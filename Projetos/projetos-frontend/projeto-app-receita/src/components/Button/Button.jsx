import PropTypes from 'prop-types';
import React from 'react';
import styles from './Button.module.css';

function Button({ onClick, testid, name }) {
  return (
    <button
      className={ styles['recipe-button'] }
      onClick={ onClick }
      data-testid={ testid }
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
};

export default Button;
