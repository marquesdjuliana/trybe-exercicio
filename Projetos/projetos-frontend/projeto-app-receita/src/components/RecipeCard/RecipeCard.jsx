import PropTypes from 'prop-types';
import React from 'react';
import styles from './RecipeCard.module.css';

function RecipeCard({ index, imgSrc, recipeName, onClick }) {
  return (
    <button
      onClick={ onClick }
      data-testid={ `${index}-recipe-card` }
      className={ styles['recipe-card'] }
    >
      <p data-testid={ `${index}-card-name` }>{recipeName}</p>
      <img
        data-testid={ `${index}-card-img` }
        src={ imgSrc }
        alt={ recipeName }
      />
    </button>
  );
}

RecipeCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  recipeName: PropTypes.string.isRequired,
};

export default RecipeCard;
