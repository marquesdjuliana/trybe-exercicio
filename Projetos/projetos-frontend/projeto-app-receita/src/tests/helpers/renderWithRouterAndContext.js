import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { RecipeContext } from '../../context/RecipeProvider';

function renderWithRouterAndContext(component, path = '/') {
  const history = createMemoryHistory({ initialEntries: [path] });
  return {
    ...render(
      <RecipeContext>
        <Router history={ history }>
          {component}
        </Router>
      </RecipeContext>,
    ),
  };
}

export default renderWithRouterAndContext;
