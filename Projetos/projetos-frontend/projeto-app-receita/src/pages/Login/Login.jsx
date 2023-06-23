import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { setLocalStorage } from '../../helpers/helpers';
import './style.css';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateButton() {
    const validEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const minPasswordLength = 7;
    return validEmail.test(email) && password.length >= minPasswordLength;
  }

  function handleLogin() {
    const userEmail = {
      email,
    };
    setLocalStorage('user', userEmail);
    history.push('/meals');
  }

  return (
    <div className="login-container">
      <p>Login</p>
      <label htmlFor="email">E-mail:</label>
      <input
        id="email"
        type="text"
        data-testid="email-input"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <br />
      <label htmlFor="senha">Senha:</label>
      <input
        id="senha"
        type="password"
        data-testid="password-input"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <br />
      <button
        data-testid="login-submit-btn"
        disabled={ !validateButton() }
        onClick={ handleLogin }
      >
        Enter
      </button>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
