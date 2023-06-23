import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { RecipeContext } from '../context/RecipeProvider';

export default function SearchBar() {
  const { searchRecipes } = useContext(RecipeContext);
  const location = useLocation();
  const [searchType, setSearchType] = useState('ingredient');
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const performSearch = () => {
    if (searchType === 'first-letter' && searchQuery.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }

    searchRecipes(searchType, searchQuery, location.pathname, history);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        value={ searchQuery }
        onChange={ ({ target }) => setSearchQuery(target.value) }
      />

      <label htmlFor="ingredient">
        <input
          id="ingredient"
          value="ingredient"
          data-testid="ingredient-search-radio"
          name="search"
          type="radio"
          onChange={ ({ target }) => setSearchType(target.value) }
        />
        Ingredient
      </label>

      <label htmlFor="name">
        <input
          id="name"
          value="name"
          data-testid="name-search-radio"
          name="search"
          type="radio"
          onChange={ ({ target }) => setSearchType(target.value) }
        />
        Name
      </label>

      <label htmlFor="first-letter">
        <input
          id="first-letter"
          value="first-letter"
          data-testid="first-letter-search-radio"
          name="search"
          type="radio"
          onChange={ ({ target }) => setSearchType(target.value) }
        />
        First letter
      </label>

      <button
        data-testid="exec-search-btn"
        onClick={ performSearch }
      >
        Search
      </button>
    </div>
  );
}
