import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      login: '',
      loading: false,
      checked: false,
    };
  }

  // verificando o input-login: seja >= 3 caracteres
  checkCharacteres = (event) => {
    const checkEvent = event.target;
    const lengthMinimum = 3;
    const checked = checkEvent.value.length >= lengthMinimum;
    this.setState({
      checked,
      login: checkEvent.value,
    });
  };

  // Valida o input-login
  allowLogin = async (event) => {
    event.preventDefault();
    const { login } = this.state;
    const { history } = this.props;
    this.setState({
      loading: true,
    });
    await createUser({ name: login });
    this.setState({
      loading: false,
    });
    history.push('/search');
  };

  render() {
    const { login, loading, checked } = this.state;
    return (
      <div className="divLogin">
        <section className="login" data-testid="page-login">
          { loading ? <Loading /> : (
            <>
              <h1>trybetunes</h1>
              <form className="formLogin">
                <input
                  type="text"
                  className="inputLogin"
                  data-testid="login-name-input"
                  onChange={ this.checkCharacteres }
                  value={ login }
                />
                <button
                  className="buttonLogin"
                  data-testid="login-submit-button"
                  disabled={ !checked }
                  onClick={ this.allowLogin }
                >
                  Entrar
                </button>
              </form>
            </>
          )}
        </section>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default Login;
