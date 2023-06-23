export const fetchMeals = async (type, search) => {
  let url = '';
  switch (type) {
  case 'all':
    url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    break;
  case 'ingredient':
    url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;
    break;
  case 'name':
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    break;
  case 'first-letter':
    url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`;
    break;
  case 'category':
    url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`;
    break;
  case 'all-category':
    url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    break;
  default:
    url = '';
  }
  try {
    // console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDrinks = async (type, search) => {
  let url = '';
  switch (type) {
  case 'all':
    url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    break;
  case 'ingredient':
    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`;
    break;
  case 'name':
    url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    break;
  case 'first-letter':
    url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`;
    break;
  case 'all-category':
    url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    break;
  case 'category':
    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search}`;
    break;

  default:
    url = '';
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

// export const fetchRecipes = async (URL) => {
//   const response = await fetch(URL);
//   const data = await response.json();
//   return data;
// };
