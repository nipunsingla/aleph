import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      accessToken: null,
      isAuth: false,
      expiryDate: null
    };
  }

  componentWillMount() {
    const accessToken = localStorage.getItem('accessToken');
    const expiryDate = localStorage.getItem('expiryDate');
    if (!accessToken || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler();
      return;
    }
    const userId = localStorage.getItem('userId');
    const remainingMilliseconds = new Date(expiryDate).getTime() - new Date().getTime();
    this.setState({
      isAuth: true,
      accessToken: accessToken
    });
    this.setAutoLogout(remainingMilliseconds);
  };

  setAutoLogout = milliseconds => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };

  logoutHandler = () => {
    this.setState({
      isAuth: false,
      accessToken: null
    });
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
  };

  render() {
    return (
      <BrowserRouter>
        <App {...this.props} isAuth={this.state.isAuth} accessToken={this.state.accessToken} expiryDate={this.expiryDate} />
      </BrowserRouter>
    )
  };
}


ReactDOM.render(
  <Index />,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();