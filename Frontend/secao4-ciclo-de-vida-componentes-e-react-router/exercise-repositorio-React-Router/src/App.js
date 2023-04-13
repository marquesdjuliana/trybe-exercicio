import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/strict-access">Strict Access</Link></li>
          </ul>
        </div>
        <Switch>
          <Route
            path="/users/:id"
            render={(props) => <Users {...props} greetingMessage="Good Morning" />}
          />
          <Route
            path="/strict-access"
            render={() => (
              <StrictAccess user={{ username: 'joao', password: '1234' }} />
            )}
          />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
