import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  state = {
    login: '',
    loading: true,
  };

  componentDidMount() {
    this.recoverUser();
  }

  recoverUser = async () => {
    const { name } = await getUser();
    this.setState({ loading: false, login: name });
  };

  render() {
    const { login, loading } = this.state;
    return (
      <header className="header" data-testid="header-component">
        <nav className="navHeader">
          <Link to="/search" className="linkHeader" data-testid="link-to-search">
            <p>Search</p>
          </Link>
          <Link to="/profile" className="linkHeader" data-testid="link-to-profile">
            <p>Profile</p>
          </Link>
          <Link to="/favorites" className="linkHeader" data-testid="link-to-favorites">
            <p>Favorites</p>
          </Link>
          <p className="loginName" data-testid="header-user-name">
            {loading ? <Loading /> : login }
          </p>
        </nav>
      </header>
    );
  }
}

export default Header;
