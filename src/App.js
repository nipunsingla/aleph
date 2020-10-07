import React, { Component, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
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
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState(0);
  const [accessToken, setaccessToken] = useState(0);
  const [authLoading, changeAuthLoading] = useState(false);;
  const [code16, changeCode16] = useState('');
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

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    const expiryDate = localStorage.getItem('expiryDate');
    if (!accessToken || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler();
      return;
    }

    const userId = localStorage.getItem('userId');
    setUserId(userId);
    setaccessToken(accessToken);
    setIsAuth(true);
  });

  const setAutoLogout = milliseconds => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };

  const logoutHandler = () => {
    setaccessToken(null);
    setIsAuth(false);
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
  };

  const authHandler = () => {
    setIsAuth(true);
  }

  const checkIsUserPresent = async () => {

    const accessToken = localStorage.getItem('accessToken');

    const expiryDate = localStorage.getItem('expiryDate');
    if (!accessToken || !expiryDate) {
      return false;
    }
    return true;

  }
  let routes =(!checkIsUserPresent()?
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route
        path="/login"
        exact
        render={props => (
          <LoginPage
            {...props}
            loading={authLoading}
            setAutoLogout={setAutoLogout}
            authHandler={authHandler}
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
      <Redirect to="/feed" />
    </Switch>
  :
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route
          path="/feed"
          exact
          component={() => <Feed accessToken={accessToken} />}
        />
        <Route path='/classroom' exact component={Classroom2} />
        <Route path='/group' exact component={Group} />
        <Route path='/chat' exact component={ChatBase} />
        <Route path='/status' exact component={statusPage} />

        <Redirect to="/feed" component={() => <Feed accessToken={accessToken} />} />
        {/* <Route path='/notifications' exact component={Group} /> */}
      </Switch>
    );
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