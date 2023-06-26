import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import FilterButton from '../../components/FilterButton/FilterButton';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { RecipeContext } from '../../context/RecipeProvider';
import { fetchDrinks, fetchMeals } from '../../services/fetchAPI';
import styles from './Recipes.module.css';
import { goToDetailsPage } from '../../helpers/helpers';

export default function Recipes() {
  const { categories, setCategories, recipes, setRecipes } = useContext(RecipeContext);
  const [searchedCategory, setSearchedCategory] = useState('');

  const location = useLocation();

  async function fetchData() {
    let data = [];
    if (location.pathname === '/meals') {
      data = await fetchMeals('all', '');
    }
    if (location.pathname === '/drinks') {
      data = await fetchDrinks('all', '');
    }
    setRecipes(data);
  }

  useEffect(() => { // faz o fetch de todas as receitas
    fetchData();
  }, []);

  useEffect(() => { // faz o fetch das categorias
    const fetchCategories = async () => {
      let data = [];
      if (location.pathname === '/meals') {
        data = await fetchMeals('all-category', '');
        setCategories(data);
        // console.log(data);
      }
      if (location.pathname === '/drinks') {
        data = await fetchDrinks('all-category', '');
        setCategories(data);
      }
    };
    fetchCategories();
  }, []);

  async function filterRecipes(category) {
    setSearchedCategory(category);
    let data = [];
    if (location.pathname === '/meals') {
      data = await fetchMeals('category', category);
    } else {
      data = await fetchDrinks('category', category);
    }

    setRecipes(data);
  }

  const history = useHistory();

  const maxRecipes = 12;
  const maxCategories = 5;
  return (
    <div>
      <Header />
      <FilterButton
        onClick={ () => {
          fetchData();
        } }
        category="All"
        testid="All-category-filter"
      />
      {categories.length > 0 && categories
        .slice(0, maxCategories)
        .map((category, index) => (
          <FilterButton
            onClick={ () => {
              if (category.strCategory !== searchedCategory) {
                filterRecipes(category.strCategory);
              } else {
                fetchData();
              }
            } }
            key={ index }
            category={ category.strCategory }
            testid={ `${category.strCategory}-category-filter` }
          />
        ))}
      <div className={ styles['recipes-container'] }>
        {recipes
    && recipes.slice(0, maxRecipes).map((recipe, index) => (
      <RecipeCard
        key={ index }
        index={ index }
        imgSrc={
          location.pathname === '/meals'
            ? recipe.strMealThumb
            : recipe.strDrinkThumb
        }
        recipeName={
          location.pathname === '/meals'
            ? recipe.strMeal
            : recipe.strDrink
        }
        onClick={ () => {
          goToDetailsPage(
            recipe.idMeal || recipe.idDrink,
            recipe.strMealThumb || recipe.strDrinkThumb,
            history,
          );
        } }
      />
    ))}
      </div>
      <Footer />
    </div>
  );
}
