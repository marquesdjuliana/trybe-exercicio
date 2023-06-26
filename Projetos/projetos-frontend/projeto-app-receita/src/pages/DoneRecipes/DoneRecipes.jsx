import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import FilterButton from '../../components/FilterButton/FilterButton';
import { mockDoneRecipes } from './doneRecipesMock';
import {
  getLocalStorageData,
  goToDetailsPage,
  handleShareButton,
  setLocalStorage,
  filters } from '../../helpers/helpers';
import styles from './DoneRecipes.module.css';
import shareIcon from '../../images/shareIcon.svg';

export default function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const [selectedFilter,
    // setSelectedFilter
  ] = useState('');

  useEffect(() => {
    setLocalStorage('doneRecipes', mockDoneRecipes);
    const recipes = getLocalStorageData('doneRecipes');
    setDoneRecipes(recipes);
  }, []);

  function handleFilterbutton(filter) {
    let filteredRecipes = [];
    const newRecipes = [...doneRecipes];
    switch (filter) {
    case 'meal':
      filteredRecipes = [...newRecipes]
        .filter((recipe) => recipe.strMealThumb !== undefined);
      break;
    case 'drink':
      filteredRecipes = [...newRecipes]
        .filter((recipe) => recipe.strDrinkThumb !== undefined);
      break;
    default:
      filteredRecipes = [...mockDoneRecipes];
      break;
    }
    setDoneRecipes(filteredRecipes);
  }

  const history = useHistory();

  useEffect(() => {
    console.log(selectedFilter);
  }, [selectedFilter]);

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
      <div className={ styles['done-recipe-container'] }>
        {doneRecipes.map((recipe, index) => {
          const {
            strId,
            strDrink,
            strMeal,
            strCategory,
            strMealThumb,
            strDrinkThumb,
            dateModified,
            strTags,
            strArea,
            strAlcoholic,
          } = recipe;
          const tags = strTags.split(',');
          return (
            <div key={ strId }>
              <button
                onClick={
                  () => goToDetailsPage(strId, strMealThumb || strDrinkThumb, history)
                }
              >
                <h3 data-testid={ `${index}-horizontal-name` }>
                  {strMeal || strDrink }
                </h3>
              </button>
              <p data-testid={ `${index}-horizontal-top-text` }>
                { strAlcoholic || `${strArea} - ${strCategory}`}
              </p>
              <button
                onClick={
                  () => goToDetailsPage(strId, strMealThumb || strDrinkThumb, history)
                }
              >
                <img
                  src={ strMealThumb || strDrinkThumb }
                  alt={ strMeal || strDrink }
                  data-testid={ `${index}-horizontal-image` }
                />
              </button>
              <p data-testid={ `${index}-horizontal-done-date` }>{ dateModified }</p>
              {tags && tags.map((tag) => (
                <p
                  key={ index }
                  data-testid={
                    `${index}-${tag}-horizontal-tag`
                  }
                >
                  {tag}
                </p>
              ))}
              <button
                onClick={ () => {
                  handleShareButton(strId, strMealThumb || strDrinkThumb);
                  setIsCopied(true);
                } }
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
              >
                Share
              </button>
            </div>
          );
        })}
        {isCopied ? 'Link copied!' : ''}
      </div>
    </div>
  );
}
