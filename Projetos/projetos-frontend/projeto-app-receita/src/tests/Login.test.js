import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router';
import App from '../App';

describe('Teste da página de Login', () => {
  it('Testa se existem duas inputs e um botão inicialmente desabilitado na tela:', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();

    const loginButton = screen.getByTestId('login-submit-btn');
    expect(loginButton).toBeDisabled();
  });

  it('Teste se o botão habilita apenas após o e-mail estar com o formato alguem@alguem.com e a senha com mais de 6 caracteres ', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );

    const emailInput = screen.getByTestId('email-input');
    const userEmail = 'alguem@alguem.com';
    userEvent.type(emailInput, userEmail);

    const passwordInput = screen.getByTestId('password-input');
    const userPassword = '1234567';
    userEvent.type(passwordInput, userPassword);
    expect(passwordInput.value).toHaveLength(7);
    const enterBtn = screen.getByRole('button', { name: /enter/i });
    expect(enterBtn).toBeEnabled();
    userEvent.click(enterBtn);
    waitFor(() => {
      expect(window.location.pathname).toBe('/meals');
    });
  });
});
