export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getLocalStorageData = (key) => JSON.parse(localStorage.getItem(key));

export const goToDetailsPage = (id, thumbUrl, pageHistory) => {
  let recipeUrl = '';
  if (thumbUrl.includes('themealdb')) {
    recipeUrl = `/meals/${id}`;
  } else {
    recipeUrl = `/drinks/${id}`;
  }
  pageHistory.push(recipeUrl);
};

export const handleShareButton = (id, thumbUrl) => {
  let recipeLink = '';
  if (thumbUrl.includes('themealdb')) {
    recipeLink = `http://localhost:3000/meals/${id}`;
  } else {
    recipeLink = `http://localhost:3000/drinks/${id}`;
  }
  navigator.clipboard.writeText(recipeLink);
};

export const filters = ['all', 'meal', 'drink'];

export const handleFavoriteButton = (recipeData) => {
  const favoriteRecipes = getLocalStorageData('favoriteRecipes') || [];
  const isFavorite = favoriteRecipes.some((recipe) => recipe.id === recipeData.id);

  if (isFavorite) {
    const updatedRecipes = favoriteRecipes
      .filter((recipe) => recipe.id !== recipeData.id);
    setLocalStorage('favoriteRecipes', updatedRecipes);
  } else {
    const newRecipe = {
      id: recipeData.id,
      type: recipeData.type,
      nationality: recipeData.nationality || '',
      category: recipeData.category || '',
      alcoholicOrNot: recipeData.alcoholicOrNot || '',
      name: recipeData.name,
      image: recipeData.image,
    };
    const existingRecipeIndex = favoriteRecipes
      .findIndex((recipe) => recipe.id === recipeData.id);
    const magicNumber = -1;

    if (existingRecipeIndex !== magicNumber) {
      favoriteRecipes[existingRecipeIndex] = newRecipe;
    } else {
      favoriteRecipes.push(newRecipe);
    }
    setLocalStorage('favoriteRecipes', favoriteRecipes);
  }
};
