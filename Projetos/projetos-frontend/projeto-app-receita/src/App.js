import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RecipeProvider from './context/RecipeProvider';

import DoneRecipes from './pages/DoneRecipes/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes/FavoriteRecipes';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import RecipeDetails from './pages/RecipeDetails/RecipeDetails';
import RecipeInProgress from './pages/RecipeInProgress/RecipeInProgress';
import Recipes from './pages/Recipes/Recipes';

function App() {
  return (
    <div>
      <Switch>
        <RecipeProvider>
          <Route exact path="/" component={ Login } />
          <Route exact path="/meals" component={ Recipes } />
          <Route exact path="/drinks" component={ Recipes } />
          <Route exact path="/meals/:id" component={ RecipeDetails } />
          <Route exact path="/drinks/:id" component={ RecipeDetails } />
          <Route path="/meals/:id/in-progress" component={ RecipeInProgress } />
          <Route path="/drinks/:id/in-progress" component={ RecipeInProgress } />
          <Route path="/done-recipes" component={ DoneRecipes } />
          <Route path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route path="/profile" component={ Profile } />
        </RecipeProvider>
      </Switch>

    </div>
  );
}

export default App;
