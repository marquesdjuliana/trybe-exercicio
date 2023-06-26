import { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ListItem from '../../components/ListItem/ListItem';
import {
  getLocalStorageData, handleFavoriteButton, handleShareButton, setLocalStorage,
} from '../../helpers/helpers';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import styles from './RecipeDetails.module.css';

function RecipeDetails() {
  const [currentRecipe, setCurrentRecipe] = useState([]);
  const [isInProgress, setIsInProgress] = useState(true);
  const [recommendations, setRecommendations] = useState([]);
  const [isMeal, setIsMeal] = useState(true);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const location = useLocation();
  const params = useParams();
  const history = useHistory();

  function turnIntoArray(currRecipe, key) {
    const ListIngredients = [];
    const recipeEntries = Object.entries(currRecipe);
    const selectedEntries = recipeEntries
      .filter((entry) => entry[0].includes(key) && entry[1]);
    selectedEntries.forEach((entry) => {
      ListIngredients.push(entry[1]);
    });
    return ListIngredients;
  }

  async function fetchDataTotal(id) {
    let url = '';
    if (location.pathname.includes('/meals')) {
      url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    } else {
      url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    const recipe = Object.values(data)[0];
    setCurrentRecipe(recipe);
    setIngredients(turnIntoArray(recipe[0], 'strIngredient'));
    setMeasures(turnIntoArray(recipe[0], 'strMeasure'));
  }

  function validateIfRecipeIsInProgress() {
    let inProgressData = getLocalStorageData('inProgressRecipes')
    || { drinks: {}, meals: {} };
    if (location.pathname.includes('/meals')) {
      inProgressData = inProgressData.meals;
    } else {
      inProgressData = inProgressData.drinks;
    }
    setIsInProgress(!Object.keys(inProgressData).includes(params.id));
  }

  function setRecipeInProgress() {
    const inProgressData = getLocalStorageData('inProgressRecipes')
    || { drinks: {}, meals: {} };
    let value;
    if (location.pathname.includes('/meals')) {
      value = {
        ...inProgressData,
        meals: { ...inProgressData.meals, [params.id]: ingredients },
      };
    } else {
      value = {
        ...inProgressData,
        drinks: { ...inProgressData.drinks, [params.id]: ingredients },
      };
    }
    setLocalStorage('inProgressRecipes', value);
    history.push(
      location.pathname.includes('meals')
        ? `/meals/${params.id}/in-progress`
        : `/drinks/${params.id}/in-progress`,
    );
  }

  const maxRecommendations = 6;
  async function fetchData() {
    let response;
    let data;
    if (location.pathname.includes('/meals')) {
      response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      data = await response.json();
      const shownRecommendations = data.drinks || [];
      setRecommendations(shownRecommendations.slice(0, maxRecommendations));
    }
    if (location.pathname.includes('/drinks')) {
      response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      data = await response.json();
      const shownRecommendations = data.meals || [];
      setRecommendations(shownRecommendations.slice(0, maxRecommendations));
    }
    setIsMeal(location.pathname.includes('/meals/'));
  }
  function handleFavoriteClick() {
    setIsFavorite(!isFavorite);
    handleFavoriteButton({
      id: params.id,
      type: isMeal ? 'meal' : 'drink',
      nationality: currentRecipe[0].strArea,
      category: currentRecipe[0].strCategory,
      alcoholicOrNot: currentRecipe[0].strAlcoholic || '',
      name: isMeal ? currentRecipe[0].strMeal : currentRecipe[0].strDrink,
      image: isMeal ? currentRecipe[0].strMealThumb : currentRecipe[0].strDrinkThumb,
    });
  }

  useEffect(() => {
    fetchData();
    const splittedPathname = location.pathname.split('/');
    const recipeId = splittedPathname[splittedPathname.length - 1];
    fetchDataTotal(recipeId);
    validateIfRecipeIsInProgress();

    const favoriteRecipes = getLocalStorageData('favoriteRecipes') || [];
    const isRecipeFavorite = favoriteRecipes.some((recipe) => recipe.id === params.id);
    setIsFavorite(isRecipeFavorite);
  }, [location.pathname]);

  return (
    <div>
      {currentRecipe.length > 0 && (
        <div className={ styles['recipe-detail-card'] }>
          <h2 data-testid="recipe-title">
            {isMeal ? currentRecipe[0].strMeal : currentRecipe[0].strDrink}
          </h2>
          <img
            src={ isMeal
              ? currentRecipe[0].strMealThumb : currentRecipe[0].strDrinkThumb }
            alt={ isMeal ? currentRecipe[0].strMeal : currentRecipe[0].strDrink }
            data-testid="recipe-photo"
          />
          <p data-testid="recipe-category">{currentRecipe[0].strCategory}</p>
          <p data-testid="instructions">{currentRecipe[0].strInstructions}</p>
          <p data-testid="recipe-category">
            {isMeal ? null : currentRecipe[0].strAlcoholic}
          </p>
          <ul>
            Ingredients:
            {ingredients.length > 0
              && ingredients.map((ingredient, index) => (
                <ListItem
                  testid={ `${index}-ingredient-name-and-measure` }
                  key={ index }
                  ingredient={ ingredient }
                  quantity={ measures[index] }
                />
              ))}
          </ul>
          {isMeal ? (
            <iframe
              title={ `Video recipe for ${currentRecipe[0].strMeal}` }
              data-testid="video"
              width="150"
              height="175"
              src={ currentRecipe[0].strYoutube?.replace('watch?v=', 'embed/') }
            />
          ) : null}
          <div>
            <h3>Recommendations:</h3>
            {recommendations && recommendations.length > 0 ? (
              <div className={ styles.carousel }>
                {recommendations.map((recommendation, index) => (
                  <div key={ index } data-testid={ `${index}-recommendation-card` }>
                    <p data-testid={ `${index}-recommendation-title` }>
                      {recommendation.strMeal || recommendation.strDrink}
                    </p>
                    <img
                      src={ recommendation.strMealThumb || recommendation.strDrinkThumb }
                      alt={ recommendation.strMeal || recommendation.strDrink }
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      )}
      <input
        type="image"
        src={ shareIcon }
        alt="share"
        data-testid="share-btn"
        onClick={ () => {
          setIsCopied(true);
          handleShareButton(params.id, currentRecipe[0].strMealThumb
          || currentRecipe[0].strDrinkThumb);
        } }
      />

      <input
        type="image"
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        alt="favorite"
        data-testid="favorite-btn"
        onClick={ handleFavoriteClick }
      />

      {isCopied && (
        <p data-testid="link-copied-message">Link copied!</p>
      )}
      <Button
        onClick={ () => setRecipeInProgress() }
        testid="start-recipe-btn"
        name={ isInProgress ? 'Start Recipe' : 'Continue Recipe' }
      />
    </div>
  );
}

export default RecipeDetails;
