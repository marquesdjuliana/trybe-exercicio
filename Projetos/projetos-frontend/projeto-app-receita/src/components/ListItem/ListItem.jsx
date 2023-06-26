import PropTypes from 'prop-types';
import React from 'react';

function ListItem({ ingredient, quantity, testid }) {
  return (
    <li data-testid={ testid }>
      {quantity}
      {' '}
      {ingredient}
    </li>
  );
}

ListItem.propTypes = {
  ingredient: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default ListItem;
