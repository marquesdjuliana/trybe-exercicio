import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header() {
  const location = useLocation();
  const history = useHistory();
  const path = location.pathname;

  const titleMap = {
    '/meals': 'Meals',
    '/drinks': 'Drinks',
    '/profile': 'Profile',
    '/done-recipes': 'Done Recipes',
    '/favorite-recipes': 'Favorite Recipes',
  };

  const title = titleMap[path] || '';

  const showSearchIcon = ['/meals', '/drinks'].includes(path);

  const [searchVisible, setSearchVisible] = useState(false);

  const handleProfileClick = () => {
    history.push('/profile');
  };

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <header>
      <input
        type="image"
        src={ profileIcon }
        alt="profile"
        data-testid="profile-top-btn"
        onClick={ handleProfileClick }
      />

      {showSearchIcon && (
        <>
          <input
            type="image"
            src={ searchIcon }
            alt="search"
            data-testid="search-top-btn"
            onClick={ handleSearchClick }
          />
          {searchVisible && (
            <SearchBar />
          )}
        </>
      )}

      <h1 data-testid="page-title">{title}</h1>
    </header>
  );
}
