import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import Profile from '../pages/Profile/Profile';

describe('Profile', () => {
  beforeEach(() => {
    // localStorage.setItem('user', JSON.stringify({ email: 'mock@example.com' }));
  });

  afterEach(() => {
    cleanup();
    localStorage.clear();
  });

  test('Testa se o email do usuario é renderizado na tela', () => {
    localStorage.setItem('user', JSON.stringify({ email: 'mock@example.com' }));
    render(
      <Router>
        <Profile />
      </Router>,
    );
    const emailElement = screen.getByTestId('profile-email');
    expect(emailElement.innerHTML).toBe('mock@example.com');
  });

  test('Testa se, quando o localStorage está vazio, não é renderizado nenhum email', () => {
    render(
      <Router>
        <Profile />
      </Router>,
    );
    const emailElement = screen.getByTestId('profile-email');
    expect(emailElement.innerHTML).toBe('');
  });

  test('Testa se ao clicar no botao "Done Recipes" é redirecionado para a tela de receitas prontas', () => {
    render(
      <Router>
        <Profile />
      </Router>,
    );
    const doneButton = screen.getByTestId('profile-done-btn');
    userEvent.click(doneButton);
    expect(window.location.pathname).toBe('/done-recipes');
  });

  test('Testa se ao clicar no botao "Favorite Recipes" é redirecionado para a tela de receitas favoritas', () => {
    render(
      <Router>
        <Profile />
      </Router>,
    );
    const favoriteButton = screen.getByTestId('profile-favorite-btn');
    userEvent.click(favoriteButton);
    expect(window.location.pathname).toBe('/favorite-recipes');
  });

  test('Testa se ao clicar no botao "Logout" é redirecionado para a tela de Login', () => {
    render(
      <Router>
        <Profile />
      </Router>,
    );
    const logoutButton = screen.getByTestId('profile-logout-btn');
    userEvent.click(logoutButton);
    expect(window.location.pathname).toBe('/');
  });
});
