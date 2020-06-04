import React, { Component } from 'react';
import Homepage from './pages/homepage/homepage'
import { Classroom2 } from './pages/classroom/Classroom2'
import { Feed } from './pages/feed/feed'
import { Group } from './pages/group/group'
import { statusPage } from './pages/statusPage/statusPage'
import ChatBase from './pages/chat/ChatBase'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { LoginPage } from './components/Login/Login.jsx';
import { SignupPage } from './components/Signup/Signup';
import { forgotPassword } from './components/forgotPassword/forgotPassword'
import './App.css';
import history from "./utils/history";

class App extends Component {
  state = {
    isAuth: false,
    authLoading: false,
    code16: ''
  };

  loginHandler = (event, authData) => {
    event.preventDefault();
    // this.setState({ authLoading: true });
    // console.log(this.state.authLoading);
    this.setState({
      isAuth: true
    });
    console.log(this.state.isAuth);
    history.replace('/feed');
  };

  signupHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    this.setState({ isAuth: false, authLoading: false });
    console.log(authData)
    this.setState({
      isAuth: false,
      authLoading: false
    });
  };

  render() {
    let routes = (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route
          path="/login"
          exact
          render={props => (
            <LoginPage
              {...props}
              onLogin={this.loginHandler}
              loading={this.state.authLoading}
            />
          )}
        />
        <Route
          path="/signup"
          exact
          render={props => (
            <SignupPage
              {...props}
              onSignup={this.signupHandler}
              loading={this.state.authLoading}
            />

          )}
        />
        <Route
          path="/feed"
          exact
          component={Feed}
        />
        <Route path='/classroom' exact component={Classroom2} />
        <Route path='/group' exact component={Group} />
        <Route path='/chat' exact component={ChatBase} />
        <Route path='/status' exact component={statusPage} />
        <Route path='/notifications' exact component={Group} />
      </Switch>
    );
    if (this.state.isAuth) {
      routes = (
        <Switch>
          {/* <Route path='/classroom' exact component={Classroom2} />
          <Route path='/group' exact component={Group} />
          <Route path='/chat' exact component={ChatBase} /> */}


        </Switch>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            {routes}
          </Router>
        </header>
      </div>
    );
  }
}
export default App;