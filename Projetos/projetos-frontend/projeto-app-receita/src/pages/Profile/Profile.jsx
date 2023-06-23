import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getLocalStorageData } from '../../helpers/helpers';

function Profile() {
  const history = useHistory();
  const user = getLocalStorageData('user') || '';

  function handleDoneRecipes() {
    history.push('/done-recipes');
  }

  function handleFavoriteRecipes() {
    history.push('/favorite-recipes');
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div>
      <Header />
      <p data-testid="profile-email">{user.email}</p>
      <button
        data-testid="profile-done-btn"
        onClick={ handleDoneRecipes }
      >
        Done Recipes
      </button>

      <button
        data-testid="profile-favorite-btn"
        onClick={ handleFavoriteRecipes }
      >
        Favorite Recipes
      </button>

      <button data-testid="profile-logout-btn" onClick={ handleLogout }>
        Logout
      </button>
      <Footer />
    </div>

  );
}

export default Profile;
