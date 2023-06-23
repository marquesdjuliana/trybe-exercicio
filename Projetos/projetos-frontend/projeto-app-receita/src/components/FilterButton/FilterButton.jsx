import PropTypes from 'prop-types';
import React from 'react';

function FilterButton({ category, onClick, testid }) {
  return (
    <button
      onClick={ onClick }
      data-testid={ testid }
    >
      {category}
    </button>
  );
}

FilterButton.propTypes = {
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
};

export default FilterButton;
