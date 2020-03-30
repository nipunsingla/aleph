import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
class App extends Component {


  render() {
    return(
      <div>

      <Header/>
      <Switch>
        <Route  path="/" component={Homepage} />
      </Switch>

    </div>
    )
  }
}

export default App;
