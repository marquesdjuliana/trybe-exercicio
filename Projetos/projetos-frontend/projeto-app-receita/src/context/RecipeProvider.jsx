import PropTypes from 'prop-types';

import { createContext, useMemo, useState } from 'react';
import { fetchDrinks, fetchMeals } from '../services/fetchAPI';

export const RecipeContext = createContext();

function RecipeProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);

  // const drinkAPI = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${meals.idMeal}`;
  // const foodAPI = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${drinks.idDrink}}`;

  // const fetchMeal = async () => {
  //   const response = await fetch(foodAPI);
  //   const foodList = await response.json();
  //   console.log('foodList: ', foodList);
  //   const resultMeal = foodList.results.filter((meal) => meal.idMeal);
  //   console.log(resultMeal);
  //   return recipesMeal;
  // };

  // const fetchDrink = async () => {
  //   const response = await fetch(drinkAPI);
  //   const drinkList = await response.json();
  //   const resultDrink = drinkList.results.filter((drink) => drink.idDrink);
  //   console.log(resultDrink);
  //   return resultDrink;
  // };

  // useEffect(() => {
  //   async function updateId() {
  //     const apiMeal = await fetchMeal();
  //     const apiDrinks = await fetchDrink();
  //     setDrinks(apiDrinks);
  //     setMeals(apiMeal);
  //   }
  //   updateId();
  // }, []);

  const searchRecipes = async (searchType, searchQuery, pathname, history) => {
    if (pathname === '/meals') {
      const mealsList = await fetchMeals(searchType, searchQuery);
      if (mealsList && mealsList.length === 1) {
        history.push(`/meals/${mealsList[0].idMeal}`);
      }
      if (mealsList === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      }
      setRecipes(mealsList);
    }

    if (pathname === '/drinks') {
      const drinksList = await fetchDrinks(searchType, searchQuery);
      if (drinksList && drinksList.length === 1) {
        history.push(`/drinks/${drinksList[0].idDrink}`);
      }
      if (drinksList === null) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      }
      setRecipes(drinksList);
    }
  };

  const valueContext = useMemo(() => ({
    searchRecipes,
    categories,
    setCategories,
    recipes,
    setRecipes,
  }), [categories, recipes]);

  return (
    <RecipeContext.Provider value={ valueContext }>
      {children}
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeProvider;
