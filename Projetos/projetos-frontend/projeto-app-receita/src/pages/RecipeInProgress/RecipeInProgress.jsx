import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RecipeInProgress(props) {
  const [currRecipeInProgress, setCurrRecipeInProgress] = useState(null);
  const [currIngredientList, setCurrIngredientList] = useState([]);
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  const location = useLocation();
  const { pathname } = location;
  const { match: { params: { id } } } = props;

  const handleIngredientToggle = (ingredient) => {
    const updatedCheckedIngredients = checkedIngredients.includes(ingredient)
      ? checkedIngredients.filter((item) => item !== ingredient)
      : [...checkedIngredients, ingredient];

    setCheckedIngredients(updatedCheckedIngredients);
  };

  const saveProgress = () => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
    const recipeType = pathname.includes('/meals') ? 'meals' : 'cocktails';

    const updatedInProgress = {
      ...inProgressRecipes,
      [recipeType]: {
        ...inProgressRecipes[recipeType],
        [id]: checkedIngredients,
      },
    };

    localStorage.setItem('inProgressRecipes', JSON.stringify(updatedInProgress));
  };

  const loadProgress = () => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
    const recipeType = pathname.includes('/meals') ? 'meals' : 'cocktails';

    if (recipeType in inProgressRecipes && id in inProgressRecipes[recipeType]) {
      setCheckedIngredients(inProgressRecipes[recipeType][id]);
    }
  };

  const fetchRecipe = () => {
    const BASE_URL = pathname.includes('/meals') ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}` : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setCurrRecipeInProgress(pathname
          .includes('/meals') ? data.meals[0] : data.drinks[0]);
      });
  };

  const name = currRecipeInProgress?.strMeal || currRecipeInProgress?.strDrink;
  const src = currRecipeInProgress?.strMealThumb || currRecipeInProgress?.strDrinkThumb;
  const category = currRecipeInProgress?.category;
  const alcoholic = currRecipeInProgress?.strAlcoholic;
  const instructions = currRecipeInProgress?.strInstructions;

  useEffect(() => {
    fetchRecipe();
  }, []);

  useEffect(() => {
    if (currRecipeInProgress) {
      const ingredients = Object.entries(currRecipeInProgress)
        .filter(([key, value]) => key.includes('Ingredient') && value)
        .map(([value]) => value);

      setCurrIngredientList(ingredients);
    }
  }, [currRecipeInProgress]);

  useEffect(() => {
    loadProgress();
  }, []);

  useEffect(() => {
    saveProgress();
  }, [checkedIngredients]);

  return (
    <div>
      <p>In Progress</p>
      <p data-testid="recipe-title">{name}</p>
      <img data-testid="recipe-photo" src={ src } alt={ name } />
      <p data-testid="recipe-category">{category}</p>
      <p>{alcoholic}</p>
      {currIngredientList && (
        <ul>
          {currIngredientList?.map((ingredient, index) => (
            <label
              data-testid={ `${index}-ingredient-step` }
              key={ index }
              htmlFor=""
              style={ {
                textDecoration: checkedIngredients
                  .includes(ingredient) ? 'line-through' : 'none',
              } }
            >
              <li>
                <input
                  type="checkbox"
                  name=""
                  id={ `ing-${index}` }
                  checked={ checkedIngredients.includes(ingredient) }
                  onChange={ () => handleIngredientToggle(ingredient) }
                />
                {ingredient}
              </li>
            </label>
          ))}
        </ul>
      )}
      <p data-testid="instructions">{instructions}</p>
      <button data-testid="share-btn">Compartilhar</button>
      <button data-testid="favorite-btn">Favoritar</button>
      <button data-testid="finish-recipe-btn">Finalizar</button>
    </div>
  );
}

RecipeInProgress.propTypes = {
  match: PropTypes.any,
  params: PropTypes.any,
  id: PropTypes.any,
}.isRequired;
