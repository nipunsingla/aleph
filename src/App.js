import React, { Component, useState } from 'react';
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
import axios from 'axios';
import { ApolloProvider, useLazyQuery } from '@apollo/client';
import { client, USER_LOGIN_QUERY } from './query';
function App() {
  const [isAuth, changeIsAuth] = useState(false);
  const [authLoading, changeAuthLoading] = useState(false);
  const [accessToken, changeAccessToken] = useState('');
  const [userId, changeUserId] = useState('');
  const [refreshToken, changeRefreshToken] = useState('');
  const [code16, changeCode16] = useState('');
  const loginHandler = (event, data) => {
    event.preventDefault();

    changeAuthLoading(true);
    changeRefreshToken(data.refreshToken);
    changeAccessToken(data.accessToken);
    changeUserId(data.userId);
    changeAuthLoading(false);

    localStorage.setItem('userId', userId);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('accessToken', accessToken);


    // window.location.href = "/";
  };

  const signupHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    this.setState({ isAuth: false, authLoading: false });
    console.log(authData)
    this.setState({
      isAuth: false,
      authLoading: false
    });
  };

  let routes = (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route
        path="/login"
        exact
        render={props => (
          <LoginPage
            {...props}
            onLogin={loginHandler}
            loading={authLoading}
          />
        )}
      />
      <Route
        path="/signup"
        exact
        render={props => (
          <SignupPage
            {...props}
            onSignup={signupHandler}
            loading={authLoading}
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
      {/* <Route path='/notifications' exact component={Group} /> */}
    </Switch>
  );
  if (authLoading) {
    routes = (
      <Switch>
        {/* <Route path='/classroom' exact component={Classroom2} />
          <Route path='/group' exact component={Group} />
          <Route path='/chat' exact component={ChatBase} /> */}


      </Switch>
    );
  }
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Router>
            {routes}
          </Router>
        </header>
      </div>
    </ApolloProvider>
  );

}
export default App;