import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FilterButton from '../../components/FilterButton/FilterButton';
import Header from '../../components/Header';
import { mockFavoriteRecipes } from './favoriteRecipesMock';
import {
  getLocalStorageData,
  goToDetailsPage,
  handleShareButton,
  setLocalStorage,
  filters,
  handleFavoriteButton } from '../../helpers/helpers';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import styles from './FavoriteRecipes.module.css';

export default function FavoriteRecipes() {
  const [favorites, setFavorites] = useState([]);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setLocalStorage('favoriteRecipes', mockFavoriteRecipes);
    const recipes = getLocalStorageData('favoriteRecipes');
    setFavorites(recipes);
  }, []);

  function handleFilterbutton(filter) {
    let filteredRecipes = [];
    const newRecipes = [...favorites];
    switch (filter) {
    case 'meal':
      filteredRecipes = [...newRecipes]
        .filter((recipe) => recipe.image.includes('themealdb'));
      break;
    case 'drink':
      filteredRecipes = [...newRecipes]
        .filter((recipe) => !recipe.image.includes('themealdb'));
      break;
    default:
      filteredRecipes = [...mockFavoriteRecipes];
      break;
    }
    setFavorites(filteredRecipes);
  }

  function removeFromScreen(id) {
    const favoritesList = [...favorites];
    const newFavorites = favoritesList.filter((favorite) => favorite.id !== id);
    setFavorites(newFavorites);
  }

  const history = useHistory();
  return (
    <div>
      <Header />
      {filters.map((filter, index) => {
        const capitalizedFilter = filter.charAt(0).toUpperCase() + filter.slice(1);
        return (
          <FilterButton
            key={ index }
            category={ capitalizedFilter }
            onClick={ () => handleFilterbutton(filter) }
            testid={ `filter-by-${filter}-btn` }
          />
        );
      })}

      <div className={ styles['favorite-recipe-container'] }>
        {favorites.map((recipe, index) => {
          const {
            id,
            name,
            category,
            nationality,
            image,
            // tags,
            // doneDate,
            alcoholicOrNot,
            // type,
          } = recipe;
          // const recipeTags = tags.split(',');
          return (
            <div key={ id }>
              <button
                onClick={
                  () => goToDetailsPage(id, image, history)
                }
              >
                <h3 data-testid={ `${index}-horizontal-name` }>
                  { name }
                </h3>
              </button>
              <p data-testid={ `${index}-horizontal-top-text` }>
                { alcoholicOrNot || `${nationality} - ${category}`}
              </p>
              <button
                onClick={
                  () => goToDetailsPage(id, image, history)
                }
              >
                <img
                  src={ image }
                  alt={ name }
                  data-testid={ `${index}-horizontal-image` }
                />
              </button>
              {/* <p data-testid={ `${index}-horizontal-done-date` }>{ doneDate }</p> */}
              {/* {recipeTags && recipeTags.map((tag) => (
                <p
                  key={ index }
                  data-testid={
                    `${index}-${tag}-horizontal-tag`
                  }
                >
                  {tag}
                </p>
              ))} */}
              <input
                type="image"
                alt="Botão de compartilhar"
                onClick={ () => {
                  handleShareButton(id, image);
                  setIsCopied(true);
                } }
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
              />
              <input
                type="image"
                alt="Botão de compartilhar"
                onClick={ () => {
                  handleFavoriteButton(recipe);
                  console.log(recipe);
                  removeFromScreen(id);
                } }
                data-testid={ `${index}-horizontal-favorite-btn` }
                src={ blackHeartIcon }
              />
            </div>
          );
        })}
        {isCopied ? 'Link copied!' : ''}
      </div>
    </div>
  );
}
